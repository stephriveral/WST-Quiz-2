function calculate(){
    let numberOne = document.getElementById("numberOne").value;
    let operator = document.getElementById("operator").value;
    let numberTwo = document.getElementById("numberTwo").value;

    switch(operator){
        case '+':
            numberOne = Number(numberOne);
            numberTwo = Number(numberTwo);
            document.getElementById("result").innerHTML = numberOne + numberTwo;
            break;
        case '-':
            numberOne = Number(numberOne);
            numberTwo = Number(numberTwo);
            document.getElementById("result").innerHTML = numberOne - numberTwo;
            break;
        case '*':
            numberOne = Number(numberOne);
            numberTwo = Number(numberTwo);
            document.getElementById("result").innerHTML = numberOne * numberTwo;
            break;
        case '/':
            numberOne = Number(numberOne);
            numberTwo = Number(numberTwo);
            document.getElementById("result").innerHTML = numberOne / numberTwo;
            break;
        default:
            document.getElementById("result").style.color = "blue";
            document.getElementById("result").innerHTML = "INVALID INPUT!"
    }

}