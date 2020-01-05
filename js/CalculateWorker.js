onmessage = function (evt) {

    //let result = document.getElementById("workResult");
    //result.innerText = "";
    let work = 100000;
    let i = 0;
    let a = new Array(work);
    let sum = 0;
    for (i = 0; i < work; i++) {

        a[i] = i * i;
        sum += i * i;                
    }
    //result.innerText = sum;
    self.postMessage(sum);
}