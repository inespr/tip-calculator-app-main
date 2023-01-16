let bill;
let numP;
let tip;

function selectTip(val){
    tip = val;
    console.log(tip);
}

function selectTipCust() {
    tip = document.getElementById("tipCustom").value;
    console.log(tip);
}

function selectPeople(){
    var error = document.getElementById("error");
    numP = document.getElementById("numP").value;
    if(numP == 0 || Number.isInteger(numP) == false){
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = null;
        console.log(numP);
    }
}

function selectBill() {
    bill = document.getElementById("bill").value;
    console.log(bill);
}

function calculo() {
    if(tip && bill){
        var tipAmount=((bill*tip)/100)/numP;
        console.log(tipAmount);
        document.getElementById("resultTipAmount").innerHTML = "$" + tipAmount.toFixed("2");
        var totalP = (tipAmount + (bill/numP));
        console.log(totalP);
        document.getElementById("resultTotal").innerHTML = "$" + totalP.toFixed("2");
   }
}