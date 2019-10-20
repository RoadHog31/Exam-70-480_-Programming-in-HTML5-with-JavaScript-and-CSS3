/@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");
    // @ts-ignore
    //can also grab a 3d canvas.
    var ctxt = drawingSurface.getContext("2d");

    var img = new this.Image();
    var canvasPixels = img.getImageData(0, 0, 1, 0);
    canvasPixels.onload = function () {
        if (canvasPixels != null)
            ctxt.drawImage(img, 50, 50, img.width, img.height);
        ctxt.stroke();
    }

}