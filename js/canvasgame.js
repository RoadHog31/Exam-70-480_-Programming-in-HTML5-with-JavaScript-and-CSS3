//@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");
    //@ts-ignore
    var context = drawingSurface.getContext("2d");

    context.beginPath();

    context.arc(150, 100, 75, 0.2 * this.Math.PI, false);
    context.lineWidth = 25;
    context.strokeStyle = '#0f0';
    context.stroke();



}



function Red(evt) {

    var circle = evt.target;
    circle.setAttribute("style", "fill: red");
}

function Green(evt) {
    
    var circle = evt.target;
    circle.setAttribute("style", "fill: green");
}