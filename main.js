let bill;
let numP;
let tip;

function selectTip(tip){
     console.log(tip);
     return tip;
}

function selectTipCust() {
    tip = document.getElementById("tipCustom").value;
    console.log(tip);
    return tip;
}

function selectPeople(){
    numP = document.getElementById("numP").value;
    console.log(numP);
    return numP;
}


function selectBill() {
    bill = document.getElementById("bill").value;
    console.log(bill);
    return bill;
}

function calculo() {
    var error = document.getElementById("error");
    if(numP == 0 ){
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = null;

    }
}