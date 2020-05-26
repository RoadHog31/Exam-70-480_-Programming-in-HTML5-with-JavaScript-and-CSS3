$('option:selected')

// The checked attribute is a Boolean attribute. You can use jQuery to locate all selected check boxes by using the following selector.
$('input[type=checkbox]:checked')

//<reference path="_references.js" /> 
$(document).ready(function () {
    $('#myButton').on('click', submitTheForm);
});

function submitTheForm() {
    $('#myForm').submit()
}


//This method converts the form data to a URI-encoded list of name value pairs. This could be useful when you want to post data program-matically to the server. 
let formData = $("myForm").serialize();


//The following is an example of using jQuery to set the focus to the text box whose name attribute is comment.
$(document).ready(function () {
    $('input[name="comment"]').focus();
});