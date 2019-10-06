//@ts-check
'use strict';

var inner = document.getElementById(innerDiv);
var element = inner.insertBefore(document.createElement("article"), inner.firstChild);
element.innerText = "My new <article> element";