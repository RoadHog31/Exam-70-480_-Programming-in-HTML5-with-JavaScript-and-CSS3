var btn = document.getElementById('btnSave');

// Returns a live NodeList, which is a special array of all ele - ments with the specified tag name.The live NodeList automatically updates if you add, delete, or modify elements.The following example returns an array of all images:
var images = document.getElementsByTagName('img');

var pizzaSizes = document.getElementsByName('pizzaSize');

// Not supported in Internet Explorer 8 and earlier.Returns a live NodeList of all elements with the specified CSS class name.
var pizzaParts = document.getElementsByClass('pizzaPart');

// The querySelector method returns the first matched element
// if one - to - many exist or null
// if there is no match.In addition to being supported on the docu - ment object, the querySelector method exists on the Element object, so you can query either the entire DOM or just an element’ s content.In the following example, the pound symbol(#) indicates a search
// for an id.This example returns a reference to the button whose id is btnSave: 
var btn = document.querySelector('#btnSave');

var btn = document.querySelector('.pizzaPart');