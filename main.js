let bill;
let numP;
let tip;

function selectTip(tip){
    var boton = document.getElementById(tip);
    boton.addEventListener("click", ()=> {
    boton.style.color = "hsl(183, 100%, 15%)";
    boton.style.backgroundColor = "hsl(172, 67%, 45%)";
    });
     console.log(tip);
     return tip;
}

function selectTipCust() {
    tip = document.getElementById("tipCustom").value;
    console.log(tip);
    return tip;
}

function selectPeople(){
    var error = document.getElementById("error");
    numP = document.getElementById("numP").value;
    if(numP == 0 ){
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = null;
        console.log(numP);
        return numP;
    }
}

function selectBill() {
    bill = document.getElementById("bill").value;
    console.log(bill);
    return bill;
}

function calculo() {
    while(tip!=null && numP!=null && bill!=null){
        var tipAmount=((bill*tip)/100)/numP;
        console.log(tipAmount);
        document.getElementById("resultTipAmount").innerHTML = tipAmount;
        var totalP = (tipAmount + (bill/numP));
        console.log(totalP)
        document.getElementById("resultTotal").innerHTML = totalP;
    }
}

