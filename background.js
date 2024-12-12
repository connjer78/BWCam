// Handle authentication and API requests
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getFeed") {
        getAuthToken()
            .then(token => fetchCameraFeed(token))
            .then(feedUrl => sendResponse({ feedUrl }))
            .catch(error => sendResponse({ error: error.message }));
        return true; // Will respond asynchronously
    }
});

async function getAuthToken() {
    return new Promise((resolve, reject) => {
        chrome.identity.getAuthToken({ interactive: true }, function(token) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(token);
            }
        });
    });
}

async function fetchCameraFeed(token) {
    // First, get the list of devices to find your camera
    const response = await fetch(
        'https://smartdevicemanagement.googleapis.com/v1/enterprises/[PROJECT_ID]/devices',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    );
    
    const data = await response.json();
    // You'll need to implement logic to find your specific camera
    // and get its stream URL
    // This is a placeholder for the actual implementation
    return data;
}
