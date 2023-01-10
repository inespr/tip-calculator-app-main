var bill = document.getElementById("bill").value;

var numP = document.getElementById("numP").value;

function selectTip(){
    var tip = document.getElementsByName().value;
}
function selectPeople(){
    if(numP == 0 ){
        var error = document.getElementById("error").value;
        error.style.visibility = "visible";
    }
}
