/*A good practice is to ensure that the client’s browser supports the Geolocation API 
by making sure that the reference is actually present. 
The Geolocation API supports three key methods that you use to interact with it: 
getCurrentPosition, watchPosition, and clearWatch. */


/* window.onload = function (){

    var geolocator = window.navigator.geolocation;
    var posOptions = {enableHighAccuracy: true, timeout: 45000};
    geolocator.getCurrentPosition(successPosition, errorPosition, posOptions);

}

function successPosition(pos){

    var sp = document.createElement("p");
    sp.innerText = "Latitude: " + pos.coords.latitude + 
                    " Longitude: " + pos.coords.longitude +
                    " Time Stamp: " + pos.timestamp;
                    document.getElementById("geoResults").appendChild(sp);
}

function errorPosition(err) {
    
    var sp = document.createElement("p");
    sp.innerText = "error: " + err.message; + " code: " + err.code;
    document.getElementById("geoResults").appendChild(sp);
} */

   //LISTING 1-6  Using the Geolocation API to monitor position
   
    var watcher;
    var geoLocator;
    
    window.onload = function () {    
    geoLocator = window.navigator.geolocation;    
    var posOptions = {enableHighAccuracy: true,timeout: 45000}; 
       
    watcher = geoLocator.watchPosition(successPosition, errorPosition, posOptions);
}

function successPosition(pos) 
{    
    var sp = document.createElement("p");    
    sp.innerText = "Latitude: " + pos.coords.latitude + 
    " Longitude: "     + pos.coords.longitude;    
    document.getElementById("geoResults").appendChild(sp);    
    geoLocator.clearWatch(watcher);

}

function errorPosition(err) 
{    

    var sp = document.createElement("p");    
    sp.innerText = "error: " + err.message; + " code: " + err.code;    
    document.getElementById("geoResults").appendChild(sp);

}


