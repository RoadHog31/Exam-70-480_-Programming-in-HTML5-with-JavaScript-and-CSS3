"use strict";
//@ts-check

/*window.onload = function (){

    var top = document.getElementById("topText");
    var left = document.getElementById("leftText");
    var pos = document.getElementById("positioning");
    document.getElementById("btnPosition").onclick = function() {

        var img = document.getElementById("arrow2");
        img.style.position = pos.value;
        img.style.left = left.value + "px";
        img.style.top = top.value + "px";
    }
}*/

/*window.onload = function(){

    document.getElementById("arrow3").onclick = function () {
        
        this.classList.add("trans");
    }
}*/

window.onload = function () {

    document.getElementById("btnHideAnElement").onclick = function()
    {
        if (document.getElementById("innerDiv").style.display == 'inline')
        {
            document.getElementById("innerDiv").style.display = 'none';
            
        } 
        else {

            document.getElementById("innderDiv").style.display = 'inline';            
        }
    }
}

