console.log("hi");

// unary operators:
// One unary operator is the typeof operator, which requires a single operand and returns a string that indicates the operand’ s type, as follows:
typeof "Hello World"
typeof 19.5
typeof true

let string = 'The doctor said "I\'m pleased to announce that it\'s a girl!" ';
let string1 = "The doctor said \"I'm pleased to announce that it's a girl!\" ";

console.log(string);
console.log(string1);

// One unary operator is the typeof operator, which requires a single operand and returns a string that indicates the operand’ s type, as follows:
let string2 = typeof "Hello Wordl";
let string3 = typeof 20.5;
let string4 = typeof true;
console.log(string2);
console.log(string3 + string4);

// The value you assign to a variable is not permanent;
// it is called a variable because you can change it.The following examples modify the totalCost variable:
let totalCost = 3 * 21.15;
console.log(totalCost);

totalCost = totalCost * .1;
//This does same as above. 
totalCost *= .1;
console.log(totalCost);

//bad naming examples
var last; //last accessed date
var current; //current vehicle 
var changed; //the vehicle make was changed//

//good naming and camelCase examples 
var lastAccessedDate;
var currentVehicle;
var vehicleMakeWasChanged;

