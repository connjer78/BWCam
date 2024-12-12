// popup.js
document.getElementById('displayFeed').addEventListener('click', async () => {
    const videoElement = document.getElementById('videoFeed');
    const errorElement = document.getElementById('errorMessage');
    
    try {
        const response = await chrome.runtime.sendMessage({ action: "getFeed" });
        
        if (response.error) {
            errorElement.textContent = `Error: ${response.error}`;
            errorElement.style.display = 'block';
            videoElement.style.display = 'none';
        } else {
            videoElement.src = response.feedUrl;
            videoElement.style.display = 'block';
            errorElement.style.display = 'none';
        }
    } catch (error) {
        errorElement.textContent = `Error: ${error.message}`;
        errorElement.style.display = 'block';
        videoElement.style.display = 'none';
    }
});
