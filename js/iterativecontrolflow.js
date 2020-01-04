 
 
 for (var i = 0; i < 10; i++){
	
	console.log(i);
}

for(var i =1; i<100; i*=2){
	
	console.log(i);
}

/* You can derive the expression from the length of an object or another variable, as in this example: 

Because a string is just an array of characters, this code can iterate over the string and print each character to the screen. The length of the string determines how many times the loop runs.

When you know how many times a loop must run, the for loop is ideal. */

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (var i =0; i < alphabet.length; i++){
	
	console.log(alphabet[i]);
}

/* The for...in loop is a method for iterating over an object’s properties. Take the following example: */

var person = { firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender:"female" };
for (var prop in person){
	
	console.log(person[prop]);
	
}

/* While loop 
The while loop is better when you don’t know the number of times a loop will run; it’s indeterminate. 
This is where the loop runs until the logic within the loop achieves a certain state; hence, why the while loop evaluates on a Boolean expression.*/
var i = 0;
while(i < 10){
	
	console.log(i);
	i++;
}

var canvas = document.getElementById("canvas1");
while (canvas.styles.backgroundColor == 'green') {   
 //move traffic
 }
 
/* do...while loop 
The key difference between the while loop and the do...while loop is that do...while always runs at least the first time.
You might actually want to use an endless loop, but you must ensure that the processing of the loop doesn’t block the application’s main thread. 

Below will start at 1 and stop at 10*/

do{
	
	i++;
	console.log(i);
	
}while(i < 10)
 
/* In this code segment, the logic to stop traffic runs one time. Then, it evaluates the expression that checks whether the background of the canvas is red. The loop continues to run as long as this expression evaluates to true. */
var canvas = document.getElementById("canvas1");
	do 
	{    
		//stop traffic
		
	}while(canvas.styles.backgroundColor == 'red')
 
 
/* Short-circuiting the loops:
Two mechanisms enable you to short-circuit a loop. The break keyword exits the current loop completely, whereas the continue keyword breaks out of the code block and continues to the next iteration of the loop.

EXAM TIP:

The break keyword breaks out of only the currently running loop. If the loop containing the break is nested inside another loop, the outer loop continues to iterate as controlled by its own expression. */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 