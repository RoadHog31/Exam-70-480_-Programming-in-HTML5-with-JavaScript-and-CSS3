// This objective demonstrates how to use regular expressions to validate the input format and how to use the JavaScript built - in functions to ensure that data is the correct data type.This objective also adds a layer of security by demonstrating how to prevent malicious code injection.
// The string object also provides regular expression methods.The string could be used directly to evaluate the expression.The string provides the search and match methods.The search method returns the index of the character in the string where the first match occurred.The match method returns the part of the string that matches the pattern, much like the exec method. In addition to these two methods, many of the other string methods accept a regular expression object, such as indexOf, split, and replace.This provides some advanced functionality
// for manipulating strings in JavaScript.
// Although regular expressions provide a great deal of power in evaluating strings
// for pat - terns and ensuring that the data is in the desired format, JavaScript also provides built - in functions to evaluate the type of data received.

//EXAM TIP:
// The example uses a regular expression to validate user input of data entered into the webpage.Keep in mind that data can come from anywhere, such as an RSS feed or back - end server providing JavaScript Object Notation(JSON).In this context, where a website is expecting specifically formatted data, you can use regular expressions to validate the incoming data and prevent the possible crashing of the website or at least errors being presented to users.

//JS example...
function CheckString() {
    try {
        //user input field
        var s = $('#regExString').val();
        //Regular expression object is created:
        var regExpression = /^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d/;
        // The test method returns a Boolean to indicate whether the input string matches the regular expression that was created.
        if (regExpression.test(s))
            alert("Valid postal code.");
        else alert("Invalid postal code.");
    } catch (e) {
        alert(e.message);
    }
}

function CheckStringExec() {
    //user input field
    var s = $('#regExString').val();
    //Regular expression object is created:
    var regExpression = /^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d/;
    //Exec method returns the portion of the input string that matches the expression and puts result into a string array.
    var results = regExpression.exec(s);
    if (results != null)
        alert("Valid postal code." + results[0]);
    else
        alert("Invalid postal code.");
}

// JavaScript provides built in functions to evaluate data type. Some functions are provided directly within JavaScript;
// others are provided by the jQuery library.The isNaN function provides a way to evaluate whether the value passed into it isn’ t a number.If the value isn’ t a number, the function returns true;
// if it is a number, it returns false.
//If the expected form of data being evaluated is numeric, this
// function provides a defensive way to determine this and handle it appropriately:
if (isNan(value)) {
    //handle the non number value
} else {
    //proceed with the number value
}

// Being able to validate data is very important as previously outlined.Equally important to validating the data explicitly is ensuring that data - entry fields prevent users from injecting script.Code injection is a widely discussed topic in website security.The next section discusses preventing code injection.