# BWCam
Repository to house code for a simple app to display camera feed on TV.

## Overview
This Chrome extension allows employees in an office setting to display the feed from a Nest camera on an Apple TV. When someone enters the foyer, any employee can click a button in the extension to view the camera feed on the TV.

## Features
- Fetches the Nest camera feed using the Nest API.
- Displays the feed on an Apple TV using AirPlay (implementation needed).
- Works independently of whether the camera feed browser window is open.

## File Structure
/BWCam
│
├── assets
│ └── CamIcon.png # Icon for the extension
│
├── background.js # Background script to fetch camera feed
├── manifest.json # Manifest file for the Chrome extension
├── popup.html # HTML for the extension's popup
└── popup.js # JavaScript for handling popup interactions

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd BWCam
   ```

2. **Install Dependencies**:
   - Ensure you have Node.js installed if you plan to set up a server in the future.

3. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   -
