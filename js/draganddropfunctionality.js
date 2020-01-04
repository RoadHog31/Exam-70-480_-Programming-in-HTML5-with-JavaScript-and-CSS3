//drag and drop functionality

/* As the element is dragged over other elements, each of those other elements’ dragenter, dragover, and dragleave events fire.  
You can use all these events in combination to provide visual feedback to users that the drag operation is occurring and what might be a potentially valid drop location. */

/* NOTE    DRAG-AND-DROP SUPPORTFor elements that don’t support drag-and-drop functionality by default, the default event mechanism must be canceled. This is why event.returnValue is set to false. */

//Typical correct sequence = dragstart, drag, dragenter, drop

let chip = document.getElementById("chip");
/* 1. starting with the dragstart event. The dragevent continues to fire while the element is being dragged. As the element is dragged over other elements, each of those other elements’ dragenter, dragover, and dragleave events fire.  */
chip.addEventListener("dragstart", function()
/* In this handler, the dataTransfer object setData method is used to store what exactly is being transferred. In this case, the ID of the source object is specified. */
{ window.event.dataTransfer.setData("Text", this.id); });

/* 2. Next, the desired target element’s event listeners must be set up. The following code shows this: 
In this code, the dragenter event listener is established so that the user gets a visual cue with a transform that the element can be dropped onto. */
let b1 = document.getElementById("bucket1");
b1.addEventListener("dragenter", function() {
	
	b1.classList.add("over"); //css classes
	window.event.returnValue = false;
	
});

/* 3. In the same token, the dragleave event listener is set up to remove the effect.  */
b1.addEventListener("dragleave", function() {	
	b1.classList.remove("over"); //css classes
});

/* 4. The dragover event is set to be ignored by canceling it. This is only because div elements can’t be dragged and dropped by default. */
b1.addEventListener("dragover", function() {	
	window.event.returnValue = false;
});

/* 5. The last piece is the drop event handler. With this event handler, the drop is received. The dataTransfer object’s getData method is called to retrieve what’s being dropped. The ID of the source element gets a reference to the element and places it inside the target. */
b1.addEventListener("drop", function(){
	
	window.event.returnValue = false;
	let data = event.dataTransfer.getData("Text");
	let d = document.getElementById(data);
	d.classList.remove("begin"); //css classes
	d.classList.add("dropped");
	this.appendChild(d);
});

/* The same code can be repeated for the other two buckets, and then the chip can be dragged into each bucket. 
//Second Green Square example below...*/

let b2 = document.getElementById("bucket2");
b2.addEventListener("dragenter", function() {
	
	b2.classList.add("over");
	window.event.returnValue = false;
	
});

/* In the same token, the dragleaveevent listener is set up to remove the effect.  */
b2.addEventListener("dragleave", function() {	
	b2.classList.remove("over");
});

/* he dragover event is set to be ignored by canceling it. This is only because div elements can’t be dragged and dropped by default. */
b2.addEventListener("dragover", function() {
	
	window.event.returnValue = false;
});

/* The last piece is the drop event handler. With this event handler, the drop is received. The dataTransfer object’s getData method is called to retrieve what’s being dropped. The ID of the source element gets a reference to the element and places it inside the target. */
b2.addEventListener("drop", function(){
	
	window.event.returnValue = false;
	let data = event.dataTransfer.getData("Text");
	let d = document.getElementById(data);
	d.classList.remove("begin");
	d.classList.add("dropped");
	this.appendChild(d);
});

//Third Blue Square example below...

let b3 = document.getElementById("bucket3");
b3.addEventListener("dragenter", function() {
	
	b3.classList.add("over");
	window.event.returnValue = false;
	
});

/* In the same token, the dragleaveevent listener is set up to remove the effect.  */
b3.addEventListener("dragleave", function() {	
	b3.classList.remove("over");
});

/* he dragover event is set to be ignored by canceling it. This is only because div elements can’t be dragged and dropped by default. */
b3.addEventListener("dragover", function() {	
	window.event.returnValue = false;
});

/* The last piece is the drop event handler. With this event handler, the drop is received. The dataTransfer object’s getData method is called to retrieve what’s being dropped. The ID of the source element gets a reference to the element and places it inside the target. */
b3.addEventListener("drop", function(){
	
	window.event.returnValue = false;
	let data = event.dataTransfer.getData("Text");
	let d = document.getElementById(data);
	d.classList.remove("begin");
	d.classList.add("dropped");
	this.appendChild(d);
});


	