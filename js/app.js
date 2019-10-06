//@ts-check
'use strict';

//let me = "me";

console.log('Here\'s a hidden message');

let todaysDate = new Date();
let formatDate = todaysDate.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

//insert a new tag dynamically
var inner = document.getElementById("innerDiv");
var element = inner.insertBefore(document.createElement("article"), inner.firstChild);
element.innerText = "My new <article> element";