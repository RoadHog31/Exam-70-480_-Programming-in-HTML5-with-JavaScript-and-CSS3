'use strict';
//@ts-check

window.onload = function(){

    this.document.getElementById("Question1").style.display = "inline";

    this.document.getElementById("Yesbtn").onclick = function() {

        this.document.getElementById("Question1").style.display = "hidden";
        this.document.getElementById("Question2").style.display = "visible";
        
    if (this.document.getElementById("Nobtn").onclick == true)
    {           
        document.getElementById("Question3").style.display = "visible";      
        
    } 
    else if (this.document.getElementById("Yesbtn").onclick == true && this.document.getElementById("Nobtn").onclick == true)
    {
        this.document.getElementById("Question1").style.display = "visible";
        this.document.getElementById("Question2").style.display = "hidden";
        this.document.getElementById("Question3").style.display = "hidden";
        this.document.getElementById("Question4").style.display = "hidden";
        this.document.getElementById("Question5").style.display = "hidden";
        this.document.getElementById("Question6").style.display = "hidden";
        this.document.getElementById("Question7").style.display = "hidden";
        this.document.getElementById("Question8").style.display = "hidden";
        this.document.getElementById("Question9").style.display = "hidden";
        this.document.getElementById("Question10").style.display = "hidden";
    }
}