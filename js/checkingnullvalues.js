window.onload = function () {     

	try {                         
	
				var a, b, c;         
				a = 5;         
				b = 10;   
				//c=5;
				var result = multiplyNumbers(a, b, c);         
				alert(result);     
				
				} 
	catch (e) {         
	
				alert(e.message);     
				
				
			} 
			
} 

/* If this method didn’t check for null values and assumed that every developer call-ing it would never make a mistake, the results would be unexpected to the consumer of the method. In this case, the result would be NaN (not a number), a special JavaScript type. This is because of the attempt to perform a mathematical operation against a null value. */
function multiplyNumbers(first, second, third) {     

			if (first == null || second == null || third == null)     		
			{         
		
						throw new Error(5, "Forgot to initialize a number.");   			
			
			}     			
			return first * second * third; 
			
}