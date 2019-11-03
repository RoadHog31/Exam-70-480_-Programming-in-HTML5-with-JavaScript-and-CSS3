window.onload = function(){

    /*Local storage is a great solution for this 
    (but consider only as temporary storage for live connected website). 
    However, to store the custom object in local data, 
    you need a method to convert the custom object to 
    a string that matches the local storage model. 
    This is where JavaScript Object Notification (JSON) can come in handy. 
    You can serialize the object into a JSON string, give it a key, 
    and then store it in web storage.*/
    var customer = new this.Object();
    customer.firstName = "Rick";
    customer.lastName = "Pino";
    customer.shirtSize = "XL";
    localStorage.setItem("cart1", JSON.stringify(customer));
    
    /*Notice that this code added a call to the LoadFromStorage method 
    to the top of the window.onload event, so that localStorage is checked 
    after the page loads.*/
    LoadFromStorage();  
    
    /*
    The following code implements each button’s onclick event. 
    A user can now add items to local storage and see what’s in storage. 
    The user can continue adding to local storage in this application until 
    the storage is full. Availability of local storage is limited, 
    and the storage available isn’t consistent across browsers - 5 - 10mb.
    */
    document.getElementById("btnAdd").onclick = function () {

        localStorage.setItem(document.getElementById("toStorageKey").value,
        document.getElementById("toStorageValue").value); 
        LoadFromStorage();
    }

    document.getElementById("btnRemove").onclick = function (){         
        localStorage.removeItem(document.getElementById("toStorageKey").value);
        LoadFromStorage();
    }

    document.getElementById("btnClear").onclick = function (){
        localStorage.clear();
        LoadFromStorage();
    }

    //The LoadFromStorage method is called for each operation to...
    //refresh the page with the data available in the storage. 
    function LoadFromStorage() {        

            var storageDiv = document.getElementById("storage");
            var tbl = document.createElement("table");
            tbl.id = "storageTable";
            
            /*
            The Web Storage API is available as a global object.
            The localStorage and sessionStorage objects provide exactly the same API.
            If you want to test these examples using session storage, simply replace the 
            localStoragereference with a reference to sessionStorage.
            Try replacing all uses of localStorage with sessionStorage. This time 
            notice that closing the browser automatically clears out any data in the storage.
            The benefit to using the Web Storage API instead of cookies is that the data 
            resides locally and stays local. 
            */
            if (localStorage.length > 0) 
            {
                for (let i = 0; i < localStorage.length; i++) {

                    var row = document.createElement("tr");
                    var key = document.createElement("td");
                    var val = document.createElement("td");
                    key.innerText = localStorage.key(i);
                    val.innerText = localStorage.getItem(key.innerText);
                    row.appendChild(key);
                    row.appendChild(val);
                    tbl.appendChild(row);                    
                }
            }
            else {

                var row = document.createElement("tr");
                var col = document.createElement("td");
                col.innerText = "No Data in local storage.";
                row.appendChild(col);
                tbl.appendChild(row);
            }

            if (document.getElementById("storageTable")) {

                document.getElementById("storageTable").replaceWith(tbl);
                
            }
            else{

                storageDiv.appendChild(tbl);
            }
        }
    }




