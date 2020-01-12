$("document").ready(function () {

    $("#btnGetXMLData").click(function () {

        let xReq = new XMLHttpRequest();
        xReq.open("GET", "myXMLData.xml", false);
        xReq.timeout = 2000;
        xReq.ontimeout = function () {

            $("#results").text("Request timed out");
        }
        xReq.send(null);
        $("#results").text(xReq.response);
    });
});

// EXAM TIP:
// The open method doesn’t make any server requests. If the user name and password is specified, it doesn’ t send this information to the server in the open method. When the send method is called, the user name and password aren’ t passed to the server either. The credentials are passed to the server only in response to a 401 security response from the server.

// Synchronous calls, as the examples so far have shown, block the user interface
// while the request is being made. To prevent this, the call should be asynchronous, as shown here:

var XMLHTTPReadyState_COMPLETE = 4;
var xReq = new XMLHttpRequest();
xReq.open("GET", "myXMLData.xml", true);
xReq.timeout = 2000;
xReq.ontimeout = function () {
    $("#results").text("Request Timed out");
}
xReq.onreadystatechange = function (e) {
    if (xReq.readyState == XMLHTTPReadyState_COMPLETE) {
        if (xReq.status = "200") {
            $("#results").text(xReq.response);
        } else {
            $("#results").text(xReq.statusText);
        }
    }
}
xReq.send(null);

// The onreadystate event above is assigned a function to run when the state of the XMLHttpRequest object is changed.When the request is complete, the readyState changes to complete(readyState == 4).At this point, the HTTP return status can be evaluated for a success value such as 200, and then the processing of the XML data can occur.

//JSON example:
var XMLHTTPReadyState_COMPLETE = 4;
var xReq = new XMLHttpRequest();
xReq.open("GET", "myJSONData.json", true);
xReq.timeout = 2000;
xReq.ontimeout = function () {
    $("#results").text("Request Timed out");
}
xReq.onreadystatechange = function (e) {
    if (xReq.readyState == XMLHTTPReadyState_COMPLETE) {
        if (xReq.status = "200") {
            $("#results").text(xReq.response);
        } else {
            $("#results").text(xReq.statusText);
        }
    }
}
xReq.send(null);

// The only difference to this code is the name of the URL being passed.In this
// case, the endpoint is a data source that returns JSON - formatted data instead of XML.The JSON is displayed to the screen in the same way that the XML is displayed.
// When the data is received via the XMLHttpRequest object, the data will need to be deserialized into a more user - friendly format.You also might want to submit data to the server in response to user actions.The next objective examines these concepts.

//Objective 3.4: Serialize, deserialize, and transmit data
//The concept of converting the data from one form to another is called serialization or deserialization. With serialization, the data is put into a format for transmission. With deserialization, the transmitted data is converted into something that can be worked with, such as a custom object. 
//Binary data- An application might capture drawings or pictures on a canvas and send that data back to the server. The data needs to be serialized into a binary stream to achieve this.

// The XMLHttpRequest object itself is agnostic to sending or receiving.It can accomplish both tasks based on how the object is set up.To send data, the send method must have data passed into it, and that data can be transmitted to the endpoint specified in the URL of the open method.The following code sends the XML data to the server:

let xmlData = "<Person firstname='Rick' lastName='Grimes' hairColor='Brown' eyeColor='Brown' /> ";
var xReq = new XMLHttpRequest();
xReq.open("POST", "/ReceiveXMLData.aspx", false);
xReq.responseTypexReq.send(xmlData);

// When data is transmitted to the server, it needs to be serialized into a format that the URL endpoint can understand.If the endpoint is expecting XML, the data must be XML;
// if it’ s expecting binary data, the data must be in a binary format.

//Iterating over all the form elements, capturing the data out of them, and constructing a query string for use with an AJAX call would be possible inside the click event. The following code reviews this concept:

$("form").submit(function () {
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var qString = "Last Name=" + lName + "&First Name=" + fName;
    $.ajax({
        url: 'processSignUp.aspx',
        type: "POST",
        data: qString,
        success: function (r) {}
    });
    return false;
});

//Using the  jQuery.serialize method
// jQuery provides a seamless way to encode data from an HTML form by traversing the form that’s passed into it and looking for input boxes to construct and return a query string.Then the query string can be posted to the server for processing.The preceding code is rewritten like this:

("form").submit(function () {
    var qString = $(this).serialize();
    alert(qString);
    $.ajax({
        url: 'processSignUp.aspx',
        type: "POST",
        data: qString,
        success: function (r) {}
    });
    return false;
});

// In this case, the jQuery.serialize method handles the extraction of the data from all the input elements and creates the query string.The advantage of using this method— beyond saving a lot of code— is that the query string is also encoded.

 
