//@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
//Function expression assigned to onload property. 
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");
    // @ts-ignore
    //can also grab a 3d canvas.
    var ctxt = drawingSurface.getContext("2d");

    /*var img = new this.Image();
    img.src = "C:/Users/Hotro_000/Desktop/MySite31/img/icons8_play_filled_50px.png";
    img.onload = function () {
        if(img != null)
        ctxt.drawImage(img, 550, 400, img.width * 2, img.height * 2);
        ctxt.stroke();
    }*/

    /*ctxt.beginPath();
    ctxt.moveTo(50, 50);
    ctxt.lineTo(150, 50);
    ctxt.lineTo(150, 150);
    ctxt.lineTo(50, 150);
    ctxt.lineTo(50, 50);
    ctxt.lineWidth = 5;
    ctxt.strokeStyle = '#f00';
    ctxt.stroke();
    ctxt.fill();*/

    ctxt.beginPath();
    ctxt.moveTo(450, 450);
    ctxt.lineTo(600, 450);
    ctxt.lineTo(600, 600);
    ctxt.lineTo(450, 600);
    ctxt.lineTo(450, 450);
    ctxt.lineWidth = 10;
    ctxt.strokeStyle = '#f00';
    ctxt.stroke();
    ctxt.fill();
    ctxt.translate(50, 50);
    /*var degrees = 45;
    var radians = degrees * (Math.PI / 180);*/
    ctxt.rotate(this.Math.PI / 4);
    ctxt.restore();




}