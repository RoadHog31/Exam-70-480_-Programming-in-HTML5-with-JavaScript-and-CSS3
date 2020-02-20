// @ts-nocheck

'use strict';

// let mii = 10;
// console.log(mii);

let arrayTest = ["pepporani", "Bacon", "Cheese"];
arrayTest[1] = "Pop!";
console.log(arrayTest);

let arrayTest2 = arrayTest[4]
console.log(arrayTest2);

let pizzaParts = ["pepper", "salt", "Pizza"];
for (var i = 0; i < pizzaParts.length; i++) {
  console.log(pizzaParts[i]);
};

let itWorked = pizzaParts.pop();
console.log(itWorked);


const addtopizzaParts = pizzaParts.push('Ale');
console.log(addtopizzaParts);

let pizzaMeats = ["Pepporami", "ham", "bacon", "meatball", "prosciutto"];
let mySlice = pizzaMeats.splice(1, 2, "spam");

let pizzaMeatParts = ['pepperoni', 'ham', 'bacon'];
let meatParts = pizzaMeatParts.toString();

let pizzaMeatParts2 = ['pepperoni', 'ham', 'bacon'];
let newLength = pizzaMeatParts2.unshift('prosciutto');
console.log(mySlice + " " + pizzaMeats + " " + meatParts + " " + newLength);

let various = ["1", 2, "Pumpkin", 0.2, ["Another", "Array"], 355, 5, 10, "Pie!", "#", true];
console.log(various);


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
//alert(document);

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
  alert("<p> elements with class subPara: " + paragraphs.length);
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

/*var innerDiv = document.getElementById("innerDiv");
innerDiv.remove();*/

//replaceNode and replaceChild methods
/*var innerDiv = document.getElementById("innerDivB");
var newDiv = document.createElement("div");
for (let i = 0; i < innerDiv.childNodes.length; i++) {

    var anchor = newDiv.appendChild(document.createElement("a"));
    anchor.setAttribute("href", "http://www.bing.ca");
    anchor.text = innerDiv.childNodes[i].textContent;
    newDiv.appendChild(document.createElement("br"));
}
innerDiv.replaceWith(newDiv);*/

/*
//create video object
var video;

window.onload = function () {

    //when window loads pass in the element id to access the html object methods.
    video = document.getElementById("sampleVideo");

}
function play() {
    video.play();

}
function pause() {
    video.pause();
}
function back() {
    video.currentTime -= 10;
}*/