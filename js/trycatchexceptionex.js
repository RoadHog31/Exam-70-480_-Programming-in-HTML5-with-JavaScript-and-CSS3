var ball = {    

	x: -1,    
	y: -1,    
	draw: function DrawBall(c) 	{   
	
				if (this.x < 0)            
					
				throw new Error(25, "Invalid X coordinate");            
				
	}             
	
}
	
window.onload = function () {    
	
			try {        
						var canvas = document.getElementById("myCanvas");        
						var context = canvas.getContext("2d");        
						
						ball.draw(context);    
						} 
						
			catch (e) {        
			
						alert(e.message);    
						
						}
}