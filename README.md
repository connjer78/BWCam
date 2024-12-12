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
   - Enable Developer mode.
   - Click "Load unpacked" and select the extension directory.

## Privacy Policy

**Privacy Policy for BWCam**

**Effective Date:** October 4, 2023

**1. Introduction**

BWCam ("we," "us," or "our") is a Chrome extension developed by BWPR (Between Public Relations), a small public relations firm. This privacy policy explains how we collect, use, and protect your information when you use our extension to display the feed from a Nest camera on a television in our office.

**2. Information We Collect**

We do not collect any personal information from users of the BWCam extension. The extension only accesses the Nest camera feed to display it on a television in our office. The data accessed includes:

- **Camera Feed Data**: The live video feed from the Nest camera, which is displayed on the office television.

**3. How We Use Your Information**

The information we access is used solely for the purpose of displaying the camera feed on our office television. We do not use the data for any other purposes, including marketing or analytics.

**4. Data Sharing and Disclosure**

We do not share, sell, or disclose your information to any third parties. The camera feed is only accessible to employees within our office who use the BWCam extension.

**5. Data Security**

We take the security of your information seriously. We implement reasonable security measures to protect the camera feed data from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.

**6. User Rights**

As we do not collect personal information, there are no specific user rights regarding data access, modification, or deletion. However, if you have any questions or concerns about the camera feed data, please contact us using the information below.

**7. Changes to This Privacy Policy**

We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.

**8. Contact Us**

If you have any questions or concerns about this privacy policy or our practices regarding the BWCam extension, please contact us at:

BWPR (Between Public Relations)  
1819 W Pinhook Rd, Lafayette, LA 70508  
jeremy@bwpr.co  
337-349-4278  

## Terms of Service

**Terms of Service for BWCam**

**Effective Date:** October 4, 2023

**1. Acceptance of Terms**

By using the BWCam Chrome extension ("Extension"), you agree to these Terms of Service. If you do not agree to these terms, please do not use the Extension.

**2. Description of Service**

BWCam is a Chrome extension developed by BWPR (Between Public Relations) for internal office use. The Extension allows authorized employees to display a Nest camera feed on an office television through an Apple TV device.

**3. Intended Use**

This Extension is intended for internal use by BWPR employees only. The Extension should only be used to view the office foyer camera feed for the purpose of monitoring office visitors.

**4. Restrictions**

Users shall not:
- Use the Extension for any purpose other than its intended use
- Attempt to modify, reverse engineer, or manipulate the Extension
- Share access to the Extension with unauthorized users
- Use the Extension in any way that violates applicable laws or regulations

**5. Disclaimer of Warranties**

The Extension is provided "as is" without any warranties, expressed or implied. BWPR does not warrant that the Extension will be error-free or uninterrupted.

**6. Limitation of Liability**

BWPR shall not be liable for any damages arising from the use or inability to use the Extension.

**7. Changes to Terms**

We reserve the right to modify these terms at any time. Continued use of the Extension after any modifications indicates acceptance of the updated terms.

**8. Contact**

For questions about these Terms of Service, please contact:

BWPR (Between Public Relations)  
1819 W Pinhook Rd, Lafayette, LA 70508  
jeremy@bwpr.co  
337-349-4278  
