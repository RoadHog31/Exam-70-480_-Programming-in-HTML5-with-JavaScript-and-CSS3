/*The Web Worker API is based on the JavaScript messaging framework. This underlying structure enables your code to send parameters to a worker and have the worker send results back. A basic web worker is established by creating a separate file to contain the script that will be processed on the separate thread. The Worker object is available from the global namespace and is created like so:

var webWorker = new Worker("workercode.js");

This instantiates a new worker process and specifies what file contains the code to be run on the worker thread.  */

let webWorker = new Worker("workercode.js");

/*In the bouncing ball example, the input for what number to work with could come from users. An input box can be added to the HTML and the entered value can be passed to the worker. This would look like this:*/

var value = document.getElementById("inputValue").value;

worker.postMessage(value);

//Then in the worker, the value would be accessed like this:
onmessage = function (evt) {    
    
    var work = evt.data;
}

/*The function receives an event object with a property called data that contains whatever was passed into the worker.

Number of workers:
Although no limit is imposed on how many workers can be processed or created concurrently, the number of workers used is something that you need to be pay attention to. Creating workers is a heavy operation. Each worker creates threads at the operating system level and their use should be managed accordingly. If you want a high volume of workers, consider creating a pool that can be used in a round-robin fashion so that not too many workers are created*/

//To set intervals..

setInterval(function(){ worker.postMessage(“”);}, 30000); //calls the passed-in function every interval as specified by the second parameter in milliseconds.