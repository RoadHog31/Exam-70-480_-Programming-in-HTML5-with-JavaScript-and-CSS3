/*A good practice is to ensure that the client’s browser supports the Geolocation API 
by making sure that the reference is actually present. 
The Geolocation API supports three key methods that you use to interact with it: 
getCurrentPosition, watchPosition, and clearWatch. */


window.onload = function (){

    var geolocator = window.navigator.geolocation;
    var posOptions = {enableHighAccuracy: true, timeout: 45000};
    geolocator.getCurrentPosition(successPosition, errorPosition, posOptions);

}
function successPosition(pos){

    alert(pos);
}
function errorPosition(err) {
    
    alert(err);
}


