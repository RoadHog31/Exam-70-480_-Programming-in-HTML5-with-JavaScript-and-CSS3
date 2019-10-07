//@ts-check
'use strict';

//let me = "me";

//insert console message in the chrome web dev tool console.
//console.log('Here\'s a hidden message');

//The purpose of retrieving elements from the DOM is to be able to do something with them. 
//insert date on web page
/*let todaysDate = new Date();
let formatDate = todaysDate.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;*/

//insert a new tag dynamically
/*var inner = document.getElementById("innerDiv");
var element = inner.insertBefore(document.createElement("article"), inner.firstChild);
element.innerText = "My new <article> element";*/

/*var element = document.getElementById("outerDiv");
alert(element.innerHTML);*/

//document.querySelector("#outerDiv");
//lert(document);

/* window.onload = function () {
      var element = document.getElementById("outerDiv")
      alert(element.innerHTML);
} */

/* window.onload = function () {
   var paragraphs = document.getElementsByTagName("p");
   alert(paragraphs.length);
 }*/

/*window.onload = function () {
  var paragraphs = document.getElementsByClassName("subPara");
  alert("<p> elements with class subPara: " +           paragraphs.length);
}*/

/*window.onload = function () {
var p =  document.querySelectorAll("P");
  alert("<p> elements with p: " + p.length  );
}*/

/*window.onload = function () {
var p =  document.querySelector("#outerDiv");
  alert("<p> elements with div: " + p.length  );
}*/

/*var outerDiv = document.getElementById("outerDiv");
var element = document.createElement("article");
element.innerText = "My new <article> element";
//The appendChild method always adds the new element 
//to the end of the parent element’s child node list. 
outerDiv.appendChild(element);*/

/*var inner = document.getElementById("newTable");
var element = inner.insertBefore(document.createElement("article"), inner.firstChild);
element.innerText = "My new <article> element";*/

/*var innerDiv = document.getElementById("innerDiv");
var p = innerDiv.removeChild(document.getElementById("innerDivB"));*/