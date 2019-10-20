//@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");
    // @ts-ignore
    //can also grab a 3d canvas.
    var ctxt = drawingSurface.getContext("2d");

    var img = new this.Image();
    img.src = "C:/Users/Hotro_000/Desktop/MySite31/img/5c0.jpg";
    img.onload = function () {
        if (img != null)
            ctxt.drawImage(img, 50, 50, img.width, img.height);
        ctxt.stroke();
    }

}