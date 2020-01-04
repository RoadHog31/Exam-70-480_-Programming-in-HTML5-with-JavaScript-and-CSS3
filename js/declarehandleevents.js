/////////////////////////////////////////////////////////////////////////////
//

window.onload = function(){
	
	/* The last parameter of the addEventListener method accepts an optional Boolean parameter.  
	This parameter allows you to specify the cascading or bubbling effect of the event—that is to say, in which order the event processing occurs. */ 
	document.getElementById("outer").addEventListener("click", outerDivClick, false);
	document.getElementById("middle").addEventListener("click", middleDivClick, false);
	document.getElementById("inner").addEventListener("click", innerDivClick, false);
	document.getElementById("clearButton").addEventListener("click", clearList);
	
}	
function outerDivClick()
{
	appendText("outer Div Clicked");
	
}
function middleDivClick()
{
	appendText("middle Div Clicked");
	
}
function innerDivClick()
{
	appendText("inner Div Clicked");
	//This property prevents bubbling up
	window.event.cancelBubble = true;
	
}
function appendText(s)
{
	var li = document.createElement("li");
	li.innerText = s;
	document.getElementById("eventOrder").appendChild(li);
}
function clearList()
{
	var ol = document.createElement("ol");
	ol.id = "eventOrder";
	document.getElementById("bod").replaceChild(ol, document.getElementById("eventOrder"));
}




	