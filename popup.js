// popup.js
document.getElementById('displayFeed').addEventListener('click', function() {
    // Send a message to the background script to fetch the camera feed
    chrome.runtime.sendMessage({ action: "fetchFeed" }, (response) => {
        if (response.error) {
            console.error("Error fetching camera feed:", response.error);
        } else {
            // Logic to display the feed on Apple TV
            console.log("Displaying Nest camera feed on Apple TV...", response.feed);
            
            // Example of sending the feed to Apple TV
            const client = new airplay.Client();
            client.on('error', (error) => {
                console.error('Error connecting to Apple TV:', error);
            });

            client.on('deviceOn', (device) => {
                console.log('Found Apple TV:', device.info);
                // Assuming response.feed.streamUrl contains the URL of the camera feed
                device.play(response.feed.streamUrl, 0, () => {
                    console.log('Playing on Apple TV');
                });
            });

            client.discover(); // Discover Apple TV devices
        }
    });
});
