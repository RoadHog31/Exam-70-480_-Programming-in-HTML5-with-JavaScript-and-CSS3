window.onload = function () {

    var echoForm = document.getElementById('echoForm');
    echoForm.addEventListener('submit', function (e) {
        echo.postMessage({
            message: e.target.message.value,
            timeout: e.target.timeout.value
        });
        e.preventDefault();
    }, false);


    var echo = new Worker('echo.js');
    echo.onmessage = function (e) {
        alert(e.data);
    };

}