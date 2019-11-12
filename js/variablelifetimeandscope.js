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

        var insideDivClick = "insideDiv2";
            //Do some logic...  
            alert(globalVar);
            alert(localVar);
            alert(insideDivClick); 
    };
    document.getElementById("Div3").onclick = function(){
    };
    function AFunction(){

        var x;
    }
    function BFunctionWithParam(p){

    }

}