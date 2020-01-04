/* */

window.onload = function() {	
	
	    document.getElementById(“door1”).onclick = function () { };            
			document.getElementById(“door2”).onclick = function () { };            
			document.getElementById(“door3”).onclick = function () { };         
					
			//This is where jQuery can simplify things. The preceding code can be replaced with this code:			
			$("document").ready(function () {            
			
					$("td").click(function () { 		
					
					
										});        
										
			});	
			
			/* Notice how much easier this code is. In one line, all <td> elements are assigned a click event. This code applies to all <td> elements on the page. So, if some <td> elements aren’t part of the page, you need to ensure that the selector is unique to the required elements. This can be ac-complished with cascading style sheets (CSS) or by using the DOM hierarchy, as in this example: */
			$("document").ready(function () {            
			
						$("#GameRow td").click(function () {                
						alert( $(this).text());            
						
						);        
						
			});
			
			/* The click events are assigned only to the <td> elements that are children of an element named GameRow. jQuery provides advanced selector capabilities that allow fine control over how the DOM is manipulated. */

}
	
	






