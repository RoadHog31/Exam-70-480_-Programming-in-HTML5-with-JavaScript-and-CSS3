//Implement program flow.

/*Program flow can be conditional, iterative, or behavioral:

+Conditional program flow is based on evaluating state to make a decision as to which code should run. 
+Iterative flow is the ability to process lists or collections of information systematically and consistently.
+Behavioral flow can be defined as an event or callback in which specific logic should be applied based on user engagement with the web application or the completion of another task.

Flow can—and almost always will—include a combination of all three.

Another special type of program flow involves exception handling. Exception handling constructs provide the ability to run specific logic in the case of an error in the program.

For the exam, you need to understand both conditional and iterative program flow.

Two conditional operators can be used == (equality operator) and === (identity operator). */

if (/* True conditional */)
{
	//True logic
}
else{
	
	//False logic	
}

var n = 2000, s = '2000';
//(equality operator) 
alert(n == s); //true
//(identity operator)
alert(n === s); //False

//Conditional statements such as the if statement can be nested, like in the following example:
var userAge = 10, gender = 'M';
var minimumAge = 11;

if (userAge > minimumAge) 
	{    
		if (gender == 'M') 
		{        
			
			//do logic for above age male    
		}    
		else 
		{        
			//do logic for above age female.    
		}
	} 
	else if (gender == 'M') {    
	
		//do logic for underage male
	} 
	else 
	{    
		//do logic for underage female.
	}
	
	
/* The following code demonstrates a case in which you want the same code to run for both the green and yellow background conditions (OR): */
switch (canvas.style.backgroundColor){
	
	case 'yellow':
	case 'green':
		alert('proceed');
		break;
	case 'red':
		alert('stop!');
		break;
	default:
		alert('unknown condition');
		break;
}


/* Ternary Operator example:  <expression> ? <true part> : <false part> */
canvas.style.backgroundColor == 'green' ? document.write('proceed') : document.write('stop');


/* EXAM TIP: 
Some array methods affect the Array object directly, whereas other methods return a new Array object. For the exam, you must understand when each case is applicable.

EXAM TIP:
Sizing arrays is very dynamic. In the preceding example, even though the array is initially declared to have a length of 5, if you try to access the 10th element, the array automatically resizes to accommodate the requested length. 
The following example demonstrates this concept:
var anArray = new Array(5);
alert(anArray.length);
anArray[9] = ‘soccer’;       
alert(anArray.length);

This property is useful for situations in which you need to iterate over an array 
or to show users how many items are in the array at a specific point in time, such as in a queue. 
The following example shows how to access the length property: */

//3 available constructors..
var anArray = new Array();
var anArray = new Array(5);
var anArray = new Array('soccer', 'basketball', ..., 'badminton');

var anArray = new Array(5);
alert(anArray.length);

/* Reverse Method */
anArray.reverse();

/* Many functions enable you to manipulate array contents quickly and easily. */

/* Using the indexOf (start from 0 and uses == operator to check matches) and lastIndexOf (ascending search from end of array) methods 
Below array ame then where to start in the index.
Note: lastIndexOf searches descending order form array end.*/
.indexOf(,start)

var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var index = sports.indexOf('football', 0); //answer here is 3.


/* contains all the elements from both arrays in sequence.  */
var sports = new Array( 'football', 'cricket', 'rugby', 'tennis', 'badminton');
var moreSports = new Array('soccer', 'basketball', 'hockey');
var combinedSports =  sports.concat(moreSports);

/* n this example, three items are replaced, starting at index 1. So, ‘basketball’, ‘hockey’, and ‘football’ are replaced with ‘golf’, ‘curling’, and ‘darts’. */
var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby', 'tennis', 'badminton');
/* 1 is where to start and 3 is how many to slice and then replace */
var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts');
console.log(splicedItems);
console.log(sports);

/* Implementing special types of arrays 
Pop and Push method for Stack functionality.
Note  using push and pop on any array:
You can use the pop and push methods in any context to add and remove items from the end of an array. 
The stack concept is useful but isn’t a confining mechanism that limits use of these methods to just stack arrays*/

var sports = new Array();
sports.push('soccer', 'basketball', 'hockey');
sports.push('football');

/* Using the shift and unshift methods 
In other words, this example still illustrates the stack functionality of “last in, first out.”*/

var sports = new Array();
sports.unshift('soccer', 'basketball', 'hockey');
//adds to beginning.
sports.unshift('football');
//sfift gets the first item from array list.
var nextSport = sports.shift(); //football.



var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";
  // the length of fruits is 4 
typeof fruits; // returns object
fruits instanceof Array; //returns true

//Splice method deletes items and replaces with new items.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);























