	/* Variable scope applies to each block within the try...catch block. If a variable is declared within the try portion, it won’t be accessible from the catch of the finally.  
	
	The try...catch...finally block provides a way to try some logic, catch an error and handle it appropriately, and finally do some clean up.■■The finally block always runs whether or not an exception is thrown.■■Checking for a null value before accessing any objects to ensure that they are initial-ized is good practice.
	
	*/
	
	//For global scoping
	var canvas;
	var context;
	
	try{    
		
		canvas = document.getElementById("myCanvas");    

		context = canvas.getContext("2d");    

		context.fillStyle = "blue";    

		context.arc(50, 50, 25, 0, 360);    

		context.fill();    

		context.strokeStyle = "red";    

		context.stroke();

	}
	catch (e) {    
	
		context.strokeText(e.message, 50, 50);
		console.log(e.message);
	}           
	finally {    

		//do any final logic before exiting the method
		
	}