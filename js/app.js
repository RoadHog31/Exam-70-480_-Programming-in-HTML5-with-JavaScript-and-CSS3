//@ts-check
'use strict';

//let me = "me";

console.log('Here\'s a hidden message');

let todaysDate = new Date();
let formatDate = todaysDate.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;