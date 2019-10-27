'use strict';
//@ts-check
var ctx, w, h, x, y, directionx, directiony;

//onload event encapsulates your code and renders when page loads.
function init() {
    
    var drawingSurface = document.getElementById('drawingSurface');

    if (drawingSurface.getContext) {
        
        var ctx = drawingSurface.getContext("2d");

        //ctx.beginPath();
        //context.arc(100-10, 100, 75, 0.00001 * this.Math.PI, false); // Math.PI returns 3.141592653589793
        ctx.fillStyle = "#f30";
        drawingSurface.style.background = "#f56";       
              
        x = 5; y = 44;         
        directionx=5; directiony=5;

        //Code needs to know canvas x, y sizes.         
        w = ctx.width = window.innerWidth;     
        h = ctx.height = window.innerHeight;
        setInterval(position, 25);         
    }
}
onload = init;

function position(){

    paint();
    if((x + directionx > w) || (x + directionx < 0))   directionx = -directionx;

    if ((y + directiony > h) || (y + directiony < 0))  directiony = -directiony;
    
    x += directionx;
    y += directiony;
    
}

function paint(){
    
    ctx.clearRect(0,0, ctx.w, ctx.h);
    ctx.beginPath();
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