chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchFeed") {
        // Fetch the Nest camera feed (replace with actual API call)
        fetch('https://api.nest.com/camera/feed', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Replace with your access token
            }
        })
        .then(response => response.json())
        .then(data => {
            // Send the feed data back to the popup or handle it directly
            sendResponse({ feed: data });
        })
        .catch(error => {
            console.error("Error fetching camera feed:", error);
            sendResponse({ error: error.message });
        });
        return true; // Indicates that the response will be sent asynchronously
    }
});
