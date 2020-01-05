/* Implement a callback 

Callbacks are a design pattern to implement when you are working with multiple threads or just needing to have something work asynchronously. 
Another common use for callbacks is as events. Whenever a DOM event is fired, it’s using a callback pattern. A function is provided as a parameter or property to indicate that when specific things occur, such as a mouseover, to call back to the specified function to run some custom logic related to the end-user action.

The idea of a callback is to call a function to run but when it’s done, to call back a specified function with usually some sort of result or status of the operation. 

Many APIs that JavaScript and the browser expose as part of the HTML5 specification involve the use of callbacks. In this objective, the WebSocket API is examined. Also, the use of jQuery is introduced as it applies to making Asynchronous JavaScript and XML (AJAX) calls. */

/* var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";
  // the length of fruits is 4 
typeof fruits; // returns object
fruits instanceof Array; //returns true
console.log(fruits); */

window.onload = function() {
	
	WillCallBackWhenDone(MyCallBack, 3, 3);	
	
}

function WillCallBackWhenDone(f, a, b){
	
	var r = a * b;
	//Pass in call back function to use it in method scope. 
	f(r);
}

function MyCallBack(result){
	
	alert(result);
}

js
/* JQuery*/
/* In a situation that specifies distinct behavior for each button, anonymous functions simplify things greatly. The following code demonstrates using anonymous functions instead of the named function: */
$("#Button1").click(function () { ... });
$("#Button2").click(function () { ... });
$("#Button3").click(function () { ... });

//Another exsmple
$("document").ready( function () {        
	$("#Button1").click( function () {                
		DoLongTask($("#inputValue").val(),            
			function (result, data) {                
				if (result == "SUCCESS")                    
				alert(data + " is a Success");                
				else                    
				alert(data + " is a fail");            
			});    
	});} 
	
);  
	
function DoLongTask(n,f) {    
	
	if (n < 10)        
	f("SUCCESS", n);    
	else        
	f("FAIL", n);
}
