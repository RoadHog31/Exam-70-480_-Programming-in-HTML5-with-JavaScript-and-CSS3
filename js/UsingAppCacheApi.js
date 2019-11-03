/***Deprecated Cache APi- "Use Service Workers"
 * If you want to make an application available offline, 
in a disconnected way, you can use the AppCache API.
ust as with Web Storage, the amount of data the browser can store locally 
is limited for offline use. 
Two components make up the AppCache API: the manifest file and 
a JavaScript API to support it.

Using an application cache gives an application the following benefits:

1. Offline browsing: users can navigate a site even when they are offline.
2. Speed: cached resources are local, and therefore load faster.
3. Reduced server load: the browser only downloads resources that have changed from the server.

You should include the manifest attribute on every page of your application that you want cached. 
The browser does not cache pages that do not contain the manifest attribute, 
unless such pages are explicitly listed in the manifest file itself. */

window.onload = function (){

    var appCache = window.applicationCache;

    appCache.oncached = function (e) { alert("cache successsfully downlaoded. "); };

    appCache.onupdateready = function(e) { appCache.swapCache(); };
}

    
    



