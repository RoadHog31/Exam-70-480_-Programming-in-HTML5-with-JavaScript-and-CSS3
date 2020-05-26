// Events provide the spark to the JavaScript engine.An event takes place at a point in time.For JavaScript, an event most commonly occurs with user interaction but also occurs when something changes state, such as a video starting or stopping.For example, the user points to an image, clicks a button, or tabs from one text box to another.The DOM provides events to give the developer the ability to subscribe to the event and execute code.
// Events are based on the publisher - subscriber design pattern.
// An event takes place at a point in time.

//Subscribing to an event - and prefered way or W3C best practice.
let btn = document.getElementById("btnSave");
btn.addEventListener("click", saveData, false);

function saveData() {

    alert("I have saved!");
};

//Subscribing to an event - raditional subscription and bubbling event.
// let btn = document.getElementById('btnSave');
// btn.onclick = saveData;

// //Unsubscribing to an event
// var btn = document.getElementById('btnSave');
// // btn.removeEventListener('click', saveData, false);

// var btn = document.getElementById('btnSave');
// btn.addEventListener('click', saveData, false);

// function saveData(e) {
//     //save the data    
//     // e.stopPropagation();//
// }



