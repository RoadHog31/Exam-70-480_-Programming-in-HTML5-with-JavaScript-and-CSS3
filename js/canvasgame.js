//@ts-check
'use strict';
var ctx, w, h, x, y, dx, dy;


//onload event encapsulates your code and renders when page loads.
window.onload = function () {

    var drawingSurface = document.getElementById("drawingSurface");   

    if (drawingSurface) {
        //@ts-ignore
        var ctx = drawingSurface.getContext("2d");

        //ctx.beginPath();
        //context.arc(100-10, 100, 75, 0.00001 * this.Math.PI, false); // Math.PI returns 3.141592653589793
        ctx.fillStyle = "#f30";
        drawingSurface.style.background = "#ff0";
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#0f0';
              
        x = 5; y = 44; 
        
        dx=5; dy=5;
        //@ts-ignore
        w=drawingSurface.width; 
        //@ts-ignore
        h=drawingSurface.height;
        setInterval(position, 25);
    }
}

function position(){

    paint();
    if((x + dx > w) || (y + dy) < 0)   dx = -dx;

    if ((y + dy > h) || (y + dy < 0))  dy = -dy;
    
    x += dx;
    y += dy;
}

function paint(){

    //@ts-ignore
    ctx.clearRect(0,0, w, h);
    ctx.begnPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.fill();

}

function Move(){

    var element = document.getElementById("drawingSurface");
    var pos = 0;

}

function Red(evt) {

    var circle = evt.target;
    circle.setAttribute("style", "fill: red");
}

function Green(evt) {
    
    var circle = evt.target;
    circle.setAttribute("style", "fill: green");
}