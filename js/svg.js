//@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");
    // @ts-ignore
    var ctxt = drawingSurface.getContext("2d");

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
    //stroke is a path
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.moveTo(125, 20);
    ctxt.bezierCurveTo(0, 200, 300, 300, 50, 400);
    ctxt.lineWidth = 5;
    ctxt.strokeStyle = '#f0f';
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.arc(300, 200, 75, 1.75 * this.Math.PI, 1.25 * this.Math.PI, false);
    ctxt.lineTo(150, 125);
    ctxt.quadraticCurveTo(300, 0, 450, 125);
    ctxt.lineTo(353, 144);
    ctxt.strokeStyle = "round";
    ctxt.lineWidth = 10;
    ctxt.stroke();

    ctxt.beginPath();
    ctxt.rect(400, 450, 150, 75);
    ctxt.strokeStyle = "#0f0";
    ctxt.stroke();

    ctxt.beginPath();
    var x, y;
    x = 150;
    y = 75;
    //first two params are the top left of the rect shape.
    ctxt.rect(400 - (x / 2), 300 - (y / 2), x, y);
    ctxt.fillStyle = "blue";
    ctxt.fill();
    ctxt.stroke();

    ctxt.fillStyle = "purple";
    ctxt.fillRect(300 - (x / 2), 400 - (y / 2), x, y);

    ctxt.beginPath();
    ctxt.arc(300, 200, 75, 1.75 * this.Math.PI, 1.25 * this.Math.PI, false);
    ctxt.lineTo(150, 125);
    ctxt.quadraticCurveTo(300, 0, 450, 125);
    ctxt.lineTo(353, 144);
    ctxt.strokeStyle = "cyan";
    ctxt.lineCap = "round";
    ctxt.lineWidth = "10";
    ctxt.fillStyle = "yellow";
    ctxt.fill();
    ctxt.stroke();

    //@ts-check
    ctxt.lineWidth = 3;
    ctxt.rect(150, 150, 200, 125);
    var gradient = ctxt.createLinearGradient(150, 150, 200, 125);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(0.5, "Grey");
    gradient.addColorStop(1, "White");
    ctxt.fillStyle = gradient;
    ctxt.fill();
    ctxt.stroke();

    ctxt.lineWidth = 3;
    ctxt.rect(150, 150, 250, 175);
    var gradient = ctxt.createRadialGradient(200, 200, 5, 250, 250, 100);
    gradient.addColorStop(0, "Red");
    gradient.addColorStop(.5, "Orange");
    gradient.addColorStop(1, "Blue");
    ctxt.fillStyle = gradient;
    ctxt.fill();
    ctxt.stroke();

    

}