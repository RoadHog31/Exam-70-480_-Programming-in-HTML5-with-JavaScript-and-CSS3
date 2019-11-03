'use strict';
//@ts-check

window.onload = function(){

    initQuestions();

    this.document.getElementById("btnConfirm").onclick = function() {

        if (document.getElementById("Yesbtn").onclick) {

            this.document.getElementById("Question1").style.visibility = "hidden";
            this.document.getElementById("Question2").style.visibility = "visible"; 
            
        }
              
    }
            
        document.getElementById("Question3").style.display = "visible";           
        
}

function initQuestions(){

    this.document.getElementById("Question1").style.visibility = "visible";
    this.document.getElementById("Question2").style.visibility = "hidden";
    this.document.getElementById("Question3").style.visibility = "hidden";
    this.document.getElementById("Question4").style.visibility = "hidden";
    this.document.getElementById("Question5").style.visibility = "hidden";
    this.document.getElementById("Question6").style.visibility = "hidden";
    this.document.getElementById("Question7").style.visibility = "hidden";
    this.document.getElementById("Question8").style.visibility = "hidden";
    this.document.getElementById("Question9").style.visibility = "hidden";
    this.document.getElementById("Question10").style.visibility = "hidden"; 
}

function checkTrue() {

    this.document.getElementById("Yesbtn").checkTrue = true; 
    
}

function checkFalse() {
    
    this.document.getElementById("Nobtn").checkFalse = false;
}

