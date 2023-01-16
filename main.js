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

function esEntero(numero){
    if (numero % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

function selectPeople(){
    var error = document.getElementById("error");
    person = document.getElementById("numP").value;
    
    if(person == 0 || esEntero(person) === false){
        error.style.visibility = "visible";
    }
    else if (esEntero(person) === true || person != 0){
        numP = person;
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
        if(tipAmount === Infinity){
            document.getElementById("resultTipAmount").innerHTML = "ERROR";
        }
        else{
            document.getElementById("resultTipAmount").innerHTML = "$" + tipAmount.toFixed("2");
        }
        var totalP = (tipAmount + (bill/numP));
        console.log(totalP);
        if(totalP === Infinity){
            document.getElementById("resultTotal").innerHTML ="ERROR";
        }
        else{
            document.getElementById("resultTotal").innerHTML = "$" + totalP.toFixed("2");
        }
   }
}