/* jQuery is the easiest way to achieve changing CSS styles dynamically. JavaScript will do the trick as well. All the CSS properties that have been looked at are available to be changed dy-namically. So for example,
in the following code,
the color of the button is changed to green when it is clicked: */

$("document").ready(function () {
    $("#changeStyle").click(function () {
            $(this).css("color", "green");
        }

    );
});


// Create the styles and scripts to make an HTML object move across the page.This is seen in many webpages today with banner or ticker controls that display informa - tion moving across the screen.Using what you know about setting and changing the position of an object with CSS, create a moving HTML element.

//HTML object move across the page.
//Text or information
// 

var pos = 1;
$("document").ready(function () {
    setInterval(function () {
        var newPos = (pos + 1) + "px";
        $("#keanu2").css("left", newPos);
        pos += 1;
    }, 20);
});