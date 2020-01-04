/* Understanding Recursion

Recursion is a programming technique that causes a method to call itself in order to compute a result. Recursion and iteration are related. You can write a method that generates the same results with either recursion or iteration. Usually, the nature of the problem itself will help you choose between an iterative or a recursive solution. For example, a recursive solution is more elegant when you can define the solution of a problem in terms of a smaller version of the same problem. To better understand this concept, take the example of the factorial operation from mathematics. The general recursive definition for n factorial (written n!) is as follows:

n! = 1      if n = 0,

n! = (n - 1)! x n   if n > 0.

According to this definition above, if the number is 0, the factorial is one. 
If the number is larger than zero, the factorial is the number multiplied by the factorial of the next smaller number. 

For example, you can break down 3! like this: 3! = 3 * 2! —> 3 * 2 * 1! —> 3 * 2 * 1 * 0! —> 3 * 2 * 1 * 1 —> 6.

Take the following steps to create a program that presents a recursive solution to a factorial problem. 

USE THE RECURSIVE METHODGET READY.

To use the recursive method, perform the following actions:

1.   Add  a  new  Console  Application  project  named  RecursiveFactorial  to  the  Lesson01  solution.

2.  Add the following code to the Main method of the Program.cs class:                Factorial(5);

3.  Add the following method to the Program.cs class:  

	public static int Factorial(int n)  {         

			if (n == 0)    {              
			
			return 1; //Base case  - terminating condition otherwise infinite recursion. 
			
			}            
			else    {              
			
			return n * Factorial(n - 1); //Recursive case  - smaller value progressing toward the base case.
			
			}  
			
	}

4.  Select  Debug > Start Without Debugging, or press Ctrl + F5.

5.  You will see the output of the program in a command window.

6.  Press a key to close the command window.

7.  Modify the Main method to pass a different value to the Factorial method, and note the results.



As seen in the above exercise, a recursive solution has two distinct parts:

• Base case: This is the part that specifies the terminating condition and doesn’t call the method again. The base case in the Factorial method is n == 0. If you don’t have a base case in your recursive algorithm, you create an infinite recursion. An infinite recursion will cause your computer to run out of memory and throw a System.StackOverflowException exception.

• Recursive case: This is the part that moves the algorithm toward the base case. The recursive case in the Factorial method is the else part, where you call the method again but with a smaller value progressing toward the base case. */










