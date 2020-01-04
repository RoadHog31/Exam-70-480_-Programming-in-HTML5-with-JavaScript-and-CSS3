function Factorial(n)
{
		if( n == 0 )
		{
			return 1; //base case ends recursion
		}
		else{
			
			return n * Factorial(n-1); //recursive case continues recursion
		}
	
};

console.log(Factorial(5));
