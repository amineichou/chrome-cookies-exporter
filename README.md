# Cookies Exporter Extension

This Chrome extension allows users to export cookies from the current webpage in JSON format. It provides a simple user interface to copy cookies to the clipboard, facilitating easy cookie management and debugging.

## Prerequisites

- Google Chrome or any Chromium-based browser.
- Basic knowledge of how to install and manage Chrome extensions.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/cookies-exporter-extension.git
```

### 2. Navigate to the project directory

```bash
cd cookies-exporter-extension
```

### 3. Load the extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable Developer Mode by toggling the switch in the top right corner.
3. Click on Load unpacked.
4. Select the directory where the extension files are located.

## Project Structure

```bash
/cookies-exporter-extension
    ├── index.html          # Popup HTML for the extension
    ├── exportCookies.js    # JavaScript file to handle cookie export
    ├── manifest.json       # Extension manifest file
```