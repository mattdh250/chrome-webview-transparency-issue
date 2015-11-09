# Chrome Transparency Issue with Webview and AllowTransparency
This app demonstrates an issue with weviews in  Chrome packaged applications that use a webview with AllowTransparency="on".

The issue has been raised on the chromium issues site and can be viewed: https://code.google.com/p/chromium/issues/detail?id=553378

The issue is that transparency on the webview does not work when using exact width and heights for the webview and any of its parent containers. Instead
responsive widths and heights must be used (100% as an example).

In this application precise widths and heights are defined for the webview and its parent containers when the page loads. The webview which points to a web page with a transparent body will load with a white background hiding the image that should be visible behind it. The link in the top corner can be used to toggle all widths and heights in the DOM from exact widths and heights defined in pixels to responsive widths and heights (100%) and when this happens the webview becomes transparent and the image behind becomes visible.

Note that once the webview becomes transparent toggling back and forth between the two states no longer effects the transparency.

This issue has been confirmed in the Chrome browser version 46.0.2490.80 (Windows 10 64-Bit) and on a number of consumer chromeboxes (HP/Asus/AOpen - exact version information unavailable at this time).

However, this issue does not seem to effect the LG Chromebase:
Version: 46.0.2490.71 (64-Bit)
Platform: 7390.610 (official build) stable-channel monroe
Firmare: Google_Monroe.4921.17.0

To run this app you must install it as an unmanaged chrome app:
1. Download the application and unzip it
2. In Chrome browse to Chrome://extensions
3. Enable Developer mode if you haven't already
4. Select Load Unpacked Extension
5. Browse to the app directory and click Okay
6. Run the application


