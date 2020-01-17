/* jQuery is the easiest way to achieve changing CSS styles dynamically. JavaScript will do the trick as well. All the CSS properties that have been looked at are available to be changed dy-namically. So for example,
in the following code,
the color of the button is changed to green when it is clicked: */

$("document").ready(function () {
    $("#changeStyle").click(function () {
            $(this).css("color", "green");
        }

    );
});


// Exercise - Creating a moving HTML element - Create the styles and scripts to make an HTML object move across the page.This is seen in many webpages today with banner or ticker controls that display informa - tion moving across the screen.Using what you know about setting and changing the position of an object with CSS, create a moving HTML element.

//HTML object move across the page.
//Text or information
// 


// To keep constantly updating the canvas drawing on each frame, we need to define a drawing function that will run over and over again, with a different set of variable values each time to change sprite positions, etc.You can run a
// function over and over again using a JavaScript timing
// function such as setInterval() or requestAnimationFrame().
var pos = 1;
$("document").ready(function () {
    setInterval(function () {
        var newPos = (pos + 1) + "px";
        $("#keanu2").css("left", newPos);
        pos += 1;
    }, 20);
});