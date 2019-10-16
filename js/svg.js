//@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");
    // @ts-ignore
    var ctxt = drawingSurface.getContext("2d");

    //@ts-check
    ctxt.beginPath();
    ctxt.moveTo(10, 10);
    ctxt.lineTo(225, 350);
    ctxt.lineTo(300, 10);
    ctxt.lineTo(400, 350);
    ctxt.lineWidth = 8;
    ctxt.strokeStyle = '#0f0';
    ctxt.lineCap = 'round';
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.arc(150, 100, 75, 0.2 * this.Math.PI, false);
    ctxt.lineWidth = 25;
    ctxt.strokeStyle = '#0f0';
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.arc(450, 100, 75, 1.5 * this.Math.PI, false);
    ctxt.lineWidth = 25;
    ctxt.strokeStyle = 'blue';
    ctxt.lineCap = 'square';
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.arc(150, 300, 75, 1 * this.Math.PI, 1.5 * this.Math.PI, false);
    ctxt.lineWidth = 25;
    ctxt.strokeStyle = '#0ff';
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.arc(450, 300, 75, .5 * this.Math.PI, 1 * this.Math.PI, false);
    ctxt.lineWidth = 45;
    ctxt.strokeStyle = '#f00';
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.moveTo(10, 380);
    ctxt.quadraticCurveTo(300, -250, 580, 380);
    ctxt.lineWidth = 25;
    ctxt.strokeStyle = '#f00';
    ctxt.stroke();
}