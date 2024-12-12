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
        chrome.identity.getAuthToken({ interactive: true }, function(token) {
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
            'https://smartdevicemanagement.googleapis.com/v1/enterprises/bwcam-feed/devices',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('API response:', data);
        
        // This is a placeholder - you'll need to extract the actual camera feed URL
        return data;
    } catch (error) {
        console.error('Feed fetch error:', error);
        throw error;
    }
}
