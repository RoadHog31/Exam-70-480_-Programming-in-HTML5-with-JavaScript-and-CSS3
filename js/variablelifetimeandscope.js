//global to the entire page. 
var globalVar = "global";

//window.onload event handler.
window.onload = function(){

    //local to the onload event handler. 
    //Inside the onload event handler, the code has access to the globalVar variable.
    var localVar = "local";

    document.getElementById("Div1").onclick = function ()
    {
            var insideDivClick = "insideDiv1";
            //Do some logic...  
            alert(globalVar);
            alert(localVar);
            alert(insideDivClick);        
            
    };
    document.getElementById("Div2").onclick = function(){

            //Do some logic...  
            alert(globalVar);
            alert(localVar);
            //not in scope so undefined.
            alert(insideDivClick); 
    };
    document.getElementById("Div3").onclick = function(){

            /* //Do some logic...  
            alert(globalVar);
            alert(localVar);
            //not in scope so undefined.
            alert(insideDivClick); */ 

            var insideDiv3 = "Div3";
            AFunction();
            BFunctionWithParam(insideDiv3);
    };

    function AFunction(){

        var x;
        alert(insideDiv3);
    }

    //This is the only way to make a local variable 
    //from one function accessible to another function—by passing a parameter.
    function BFunctionWithParam(p){

        alert(p);
        alert(localVar);

    }

}