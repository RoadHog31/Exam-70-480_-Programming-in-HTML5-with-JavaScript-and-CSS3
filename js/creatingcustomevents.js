//creating custom events

/* DOM events provide a great deal of functionality. In some cases, you might want to create a custom event to use more generically. 

1. To create a custom event, you use the CustomEventobject.  */
myEvent = new CustomEvent(

					"anAction",
					{
							detail: { description: "a description of the event",
												timeofevent: new Date(),
												eventcode: 2 },
												
							bubbles: true;
							cancelable: true
						
					}
);


/* The CustomEvent object constructor accepts two parameters: 

The first parameter is the name of the event. This is anything that makes sense for what the event is supposed to represent. In this example, the event is called anAction.

The second parameter is a dynamic object that contains a detail property that can have properties assigned to it containing information that should be passed to the event handler. Also, the parameter provides the ability to specify if the event should bubble and whether the event can be canceled. */

/* 2. The next step is to assign the event to an element on the page by using the addEventListener method: */
document.addEventListener("anAction", customEventHandler);

/* 3. Finally, the event is raised by using the dispatchEvent method: */
document.dispatchEvent(myEvent);

/* 4. A function called customEventHandler must exist for all this to work: */
function customEventHandler() {
	
	alert(window.event.detail.description);
}


/* EXAM TIP:
As of this writing, Internet Explorer doesn’t support this functionality. Custom events work correctly in other browsers, though. Be aware of how custom events work for the exam, however, because they are part of the official skills being measured */





	