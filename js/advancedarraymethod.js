/* Objective 2.1: Implement program flow
Using every method - checks to see if all elements are true or meets a condition*/
/* window.onload = function() { */
	
/* 	var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
	var allEven = evenNumbers.every(evenNumberCheck, this);
	if (allEven){
		
		console.log(True!)
	}
	else{
		
		console.log(False!)
	} */
	
	/* document.getElementById("True").innerText = allEven; */


/* Note that the function takes 3 arguments:

    The item value
    The item index
    The array itself

	When a callback function uses the first parameter only (value), the other parameters can be omitted: */
	//This is the callback function :-
	function evenNumberCheck(value, index, array) {
		
		return (value % 2) == 0;
	}

/*Using some method - If all elements in the array re-turn false, the some method returns false.*/
	var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
	var allEven = evenNumbers.some(evenNumberCheck);
	if (allEven){
		
		console.log("True!")
		
	}
	else{
		
		console.log("False!")
	}
	
	
	window.onload = function() { 
	
		/* using forEach Method */
		var sportsArray = ['football', 'basketball', 'hockey', 'soccer', 'cricket', 'rugby'];
		sportsArray.sort().forEach(offerSport);	

	}
	
	//This is the callback function - value is the array elements passed in. This can then be listed. 	
	function offerSport(value, index, array) {
		
		var sportsList = document.getElementById("sportsList");
		var bullet = document.createElement("li");
		bullet.innerText = value;
		sportsList.appendChild(bullet);
	}
	
	
/* 	Using the filter method - this creates a new array with all elements that are even*/
	var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
	var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);
	
	//New Array created - work with the even numbers....	
	
/* 	You can use any logic in the callback function to process the element and determine whether it should be included in the returned array, such as pattern matching or a database lookup. */
//This is the callback function - 
	function evenNumberCheck(value, index, array) 
	{    return (value % 2) == 0;}
		
	
	
/* Using the map method - 1st example, each array element gets worked on*/
var money = [12.8, 15.9, 21.7, 35.2];
var roundedMoney = money.map(roundOff, money);

//...

function roundOff(value, position, array) {    

	return Math.round(value);
}

//map method  - This example provides the square of a series of numbers:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var squares = numbers.map(squareNumber, numbers);
//...
function squareNumber(value, position, array) {    

return value * value; 
}

/* EXAM TIP: Some advanced functions enable you to change the source array, whereas others don’t. This is an important aspect to keep clear. 

Note that the function takes 4 arguments:

    The total (the initial value / previously returned value)
    The item value
    The item index
    The array itself

The example above does not use the index and array parameters. It can be rewritten to:*/

/* Using the reduce and reduceRight methods.
The reduce and reduceRight methods are recursive. Each result of the callback function is passed back into the callback method as the previous return value along with the current element to be passed in. */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//reduce method can accept 2 values numbers.reduce(factorial, 100);
var factorials = numbers.reduce(factorial);

function factorial( previous /* previous is initially 1 */, current /* current is initially 2 */){
	
	return previous * current;
}




















