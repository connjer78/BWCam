// Handle authentication and API requests
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getFeed") {
        console.log('Received getFeed request');
        
        getAuthToken()
            .then(token => {
                console.log('Got auth token');
                return fetchCameraFeed(token);
            })
            .then(feedUrl => {
                console.log('Got feed URL:', feedUrl);
                sendResponse({ feedUrl: feedUrl });
            })
            .catch(error => {
                console.error('Error:', error);
                sendResponse({ error: error.message });
            });
            
        return true; // Will respond asynchronously
    }
});

async function getAuthToken() {
    return new Promise((resolve, reject) => {
        chrome.identity.getAuthToken({ 
            interactive: true,
            scopes: ['https://www.googleapis.com/auth/sdm.service']
        }, function(token) {
            if (chrome.runtime.lastError) {
                console.error('Auth error:', chrome.runtime.lastError);
                reject(chrome.runtime.lastError);
            } else {
                resolve(token);
            }
        });
    });
}

async function fetchCameraFeed(token) {
    try {
        console.log('Fetching camera feed with token:', token);
        const response = await fetch(
            'https://smartdevicemanagement.googleapis.com/v1/enterprises/project-id-439b04a4-2b5d-484e-ac5a-5aa3c281b2a1/devices',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error Response:', errorText);
            throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
        }
        
        const data = await response.json();
        console.log('Full API response:', JSON.stringify(data, null, 2));
        
        if (!data.devices) {
            throw new Error('No devices found in the API response');
        }
        
        // Find the camera device in the response
        const camera = data.devices.find(device => device.type === 'sdm.devices.types.CAMERA');
        
        if (!camera) {
            throw new Error('No camera found in the device list');
        }

        console.log('Found camera:', JSON.stringify(camera, null, 2));

        // Generate camera stream request
        const streamResponse = await fetch(
            `https://smartdevicemanagement.googleapis.com/v1/${camera.name}:generateRtspStream`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!streamResponse.ok) {
            const errorText = await streamResponse.text();
            console.error('Stream API Error Response:', errorText);
            throw new Error(`HTTP error! status: ${streamResponse.status}, details: ${errorText}`);
        }

        const streamData = await streamResponse.json();
        console.log('Stream response:', streamData);
        
        return streamData.streamUrls.rtspUrl;
    } catch (error) {
        console.error('Feed fetch error:', error);
        throw error;
    }
}
