//This JQuery method safely creates a query string key/value pair with a & in between. 
var param = $("form").serialize();

// Set inherit with JavaScript
function myFunction() {

    document.getElementById("mySpan").style.color = "inherit";
}

function jsonParseExample() {

    JSON.parse('{}'); // {}
    JSON.parse('true'); // true
    JSON.parse('"foo"'); // "foo"
    JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
    JSON.parse('null'); // null
}

// Regular expression to validate a text string
var regex = /[^\w\.@-]/;
regex.test(data); //tests for regex pattern

//Web Workers
var myWorker = new Worker('worker.js');

var hello = new Worker('hello.js');
hello.onmessage = function (e) {
    alert(e.data);
};

postMessage('Hello world!');

// Click button event
function vehicle() {

    this.speed = 0;
}
vehicle.prototype.accelerateAfterClick = function () {

    var newSpeed = this.speed * 2 + 1;
    button.onclick = function () {

        window.alert(newSpeed);
    };
};

var car = new vehicle();
car.accelerateAfterClick();