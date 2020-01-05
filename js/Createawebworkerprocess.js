/*Web workers present a way of developing multithreaded JavaScript applications. JavaScript is a single-threaded environment. Everything run in JavaScript is queued up synchronously. This might not be evident in most applications because the available processing power on client computers usually far exceeds what’s required by a webpage on a client computer. However, in more intense web applications, you have seen warning messages from the browser that the scripts are running and taking a long time to complete. In fact, these warnings give users the option to stop running scripts on the page immediately. This type of user experience won’t have users coming back to the website. This is where the Web Worker API is useful. 

The Web Worker API enables you to specify that pieces of work should be processed on their own thread. Doing so has many advantages but also some pitfalls that you need to respect. In this objective, you learn how to use the Web Worker API to take advantage of the flexibil-ity this brings to web applications. You also learn about the disadvantages and cautions that come with using web workers */

//Bouncing Ball
window.requestAnimFrame = (function (callback) 
{              
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 30); };           

})();

window.setTimeout(getDirection, 30000);           
var x = 176, y = 176, w = 600, h = 600, r = 26;           
var d, c, s;           
var rColor, gColor, bColor;           
var hd = "r";                   
var horizontal = true;          

window.onload = function () { 

        try{                   
            c = document.getElementById("c");                   
            w = c.width;                   
            h = c.height;                  
            s = parseInt( document.getElementById("speedy").value);           

            getDirection();                   
            drawBall();   
            
            document.getElementById("intensiveWork").onclick = function() {

                //DoIntensiveWork();
                /*In this code, the pattern described in the previous section is implemented. A new Workerobject is instantiated with CalculateWorker.js specified. Then the onmessage is assigned a function to handle the result of the worker thread. The onerror is assigned a function to handle any error conditions. Finally, the postMessage is called to invoke the worker. */
                let result = document.getElementById("workResult");
                result.innerText = "";
                let worker = new Worker("CalculateWorker.js");
                worker.onmessage = function (evt){
                    try {
                        result.innerText = evt.data;
                        
                    } catch (e) {

                        alert(e.message);
                        
                    }
                }

                worker.onerror = function(err){
                    alert(err.message + err.filename + err.lineno);
                }

                    worker.postMessage("");
                    document.getElementById("stopWorker").onclick = function () {  

                        worker.terminate();
                        
                    }

            }
            document.onkeydown = function () {                                       
                
                switch (window.event.keyCode) {                           
                    case 40:                                                                        horizontal = false;                               
                            hd = "d";                               
                            break;                           
                    case 37:                               
                            horizontal = true;                               
                            hd = "l";                               
                            break;                           
                    case 38:                               
                            horizontal = false;                               
                            hd = "u";                               
                            break;                           
                    case 39:                                                                        horizontal = true;                               
                            hd = "r";                               
                            break;                      
                }                  
            }          
        } 
        catch (e) {                   
            
                alert(e.message);              
            
        }           
}            

function increaseSpeed() {               
    
        s++;               
        document.getElementById("speedy").value = s;                      
    
}           

function decreaseSpeed() {               
    
            s--;               
            document.getElementById("speedy").value = s;                       
        
}                 

function changeDirection() {               
    
            var cx = window.event.offsetX;                           
            var cy = window.event.offsetY;               
            x = cx;               
            y = cy;
            
            document.getElementById("speedy").value = s;              
}           

function setNewPoint(d) {              
    
        try{                   
            
            switch (horizontal) {                       
                case true:                           
                        if (x < (w - r) && hd == "r")                               
                        x += s;                           
                        else if(x > r && hd == "l")                               
                        x -= s;                           
                        break;                       
                case false:                          
                        if (y < (h - r) && hd == "d")                              
                            y += s;                           
                        else if (y > r && hd == "u")                               
                            y -= s;                           
                        break;                 
                }                  
        
                    if (x >= (w - r))                       
                    hd = "l";                              
                        if (x <= r)                      
                        hd = "r";                   
                        if (y >= (h - r))                       
                        hd = "u";                  
                        if (y <= r)                       
                        hd = "d";               
        } 
        catch (e) {                   
                                
            alert(e.message);               
        }           
}           
                            
                            
function getDirection() {             

    horizontal = !horizontal;               
    var d = Math.ceil(Math.random() * 2);               
    
    if (horizontal) {                  
            if (d == 1) 
            {                       
                hd = "r";                   
            } 
            else 
            {  
                    hd = "l";  
            }               
    } 
    else {                   
            if (d == 1) 
            {                       
                hd = "u";                  
            } 
            else {  hd = "d";                   
            }               
    }                                 
                    
}         
                                            
function drawBall() {              
    
    try {                   
        var rgbFill = "rgb(0,0,0)";                   
        var rgbStroke = "rgb(128,128,128)";                   
        setNewPoint(d);                   
        var ctxt = c.getContext("2d");
        
        ctxt.clearRect(0, 0, c.width, c.height);                   
        ctxt.beginPath();                   
        ctxt.lineWidth = "5";                   
        ctxt.strokeStyle = rgbStroke;                                  
        ctxt.arc(x, y, r, 0, 360);                   
        ctxt.fillStyle = rgbFill;                   
        ctxt.fill();                   
        ctxt.stroke();                   
        s = parseInt( document.getElementById("speedy").value);                   
        requestAnimFrame(function () {                       
            
            drawBall();                   
        });              
    } 
    catch (e) {                   
        
            alert(e.message);               
            
    }           

}  
                    
/*function DoIntensiveWork() {

    let result = document.getElementById("workResult");
    result.innerText = "";
    let work = 100000;
    let i = 0;
    let a = new Array(work);
    let sum = 0;
    for (i = 0; i < work; i++) {

        a[i] = i * i;
        sum += i * i;                
    }
    result.innerText = sum;
}*/


