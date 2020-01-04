//AddEventListener(<event name>,<event function>,<optional cascade rule>)
/* A change event occurs when the value associated with an element changes. This most commonly occurs in input elements such as text-based inputs and others such as the range element. 

https://www.w3schools.com/jsref/dom_obj_event.asp*/
window.onload = function(){
	
	//do event setup in here.
	
	document.getElementById("aRange").addEventListener("change", rangeChangeEvent);
	document.getElementById("aText").addEventListener("change", rangeChangeEvent);
	
	/* You can use the focus() method to set the focus to any element that causes the focus event hierarchy to occur. The following code shows how to use the blur event: */
	document.getElementById("firstNameText").focus();
	document.getElementById("firstNameText").addEventListener("blur", function() {
		
		if (this.value.length < 5 ){
			
			document.getElementById("ruleViolation").innerText = "First Name is required to be 5 letters.";
			document.getElementById("ruleViolation").style.color = "red";
			this.focus();
		}
	});
		
	document.getElementById("firstNameText2").addEventListener("keydown", function(){
		
		document.getElementById("outputText").innerText = window.event.keyCode;	});
	
	
	document.onkeydown = function()	{
		
		if(window.event.ctrlKey && String.fromCharCode(window.event.keyCode) == 'F')
			document.getElementById("firstNameText").focus();
		
		if(window.event.ctrlKey && String.fromCharCode(window.event.keyCode) == 'L')
		document.getElementById("lastNameText").focus();
		return false;
	}	
	
	document.getElementById("yellowBox").addEventListener("mousenter", yellowBoxEnter);
	document.getElementById("yellowBox").addEventListener("mouseleave", yellowBoxLeave);
	
}

/////////////////////////////////////////////////////////////////////////////
//

function yellowBoxEnter()
{
	this.classList.add("scale");
	
}

function yellowBoxLeave()
{
	this.classList.remove("scale");
	
}


function yellowBoxClick()
{
	document.write("Client X: " + window.event.clientX + "ClientY: " + window.event.clientY);
	document.write("<BR />");
	document.write("offsetX: " + window.event.offsetX + "offsetY: " + window.event.offsetY);
	document.write("<BR />");
	document.write("Screen X: " + window.event.screenX + "Screen Y: " + window.event.screenY);
	
}

/* EXAM TIP:
This example uses the this keyword. In this context, the this keyword provides a direct reference to the element that created the event. In this way, this provides shortcut access to the element rather than gets a reference via one of the document search methods. 

EXAM TIP:
In some cases, depending on the key, only the keydown event fires. The arrow keys are such an example: keydown fires but not keyup or keypress.*/
function rangeChangeEvent()
{
	document.getElementById("rangeValue").innerText = this.value;
}


	