window.onload = function(){

    /*Notice that this code added a call to the LoadFromStorage method 
    to the top of the window.onload event, so that localStorage is checked 
    after the page loads.*/
    LoadFromStorage();   

    /*
    The preceding code implements each button’s onclick event. 
    A user can now add items to local storage and see what’s in storage. 
    The user can continue adding to local storage in this application until 
    the storage is full. Availability of local storage is limited, 
    and the storage available isn’t consistent across browsers.
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
            /*The Web Storage API is available as a global object.
            The localStorage and sessionStorage objects provide exactly the same API.
            If you want to test these examples using session storage, simply replace the 
            localStoragereference with a reference to sessionStorage.
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
            else{

                var row = document.createElement("tr");
                var col = document.createElement("td");
                col.innerText = "No Data in local storage.";
                row.appendChild(col);
                tbl.appendChild(row);
            }

            if (document.getElementById("storageTable")) {

                document.getElementById("storageTable").replaceNode(tbl);
                
            }
            else{

                storageDiv.appendChild(tbl);
            }
        }
    }




