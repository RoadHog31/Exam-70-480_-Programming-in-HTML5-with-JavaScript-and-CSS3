//@ts-check
'use strict';

//onload event encapsulates your code and renders when page loads.
/*window.onload = function () {

    var drawingSurface = document.getElementById("circle");


}*/

function Red(evt) {

    var circle = evt.target;
    circle.setAttribute("style", "fill: red");
}

function Green(evt) {
    
    var circle = evt.target;
    circle.setAttribute("style", "fill: green");
}