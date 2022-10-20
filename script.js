operatorsAndNums = [];
currentRunningNumber = "";
lastInputType = "";
screenTop = document.getElementById('operators-and-nums');
screenBottom = document.getElementById('current-calculation');

function seven() {
    currentRunningNumber += "7";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function four() {
    currentRunningNumber += "4";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function one() {
    currentRunningNumber += "1";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function zero() {
    currentRunningNumber += "0";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function eight() {
    currentRunningNumber += "8";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function five() {
    currentRunningNumber += "5";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function two() {
    currentRunningNumber += "2";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function nine() {
    currentRunningNumber += "9";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function six() {
    currentRunningNumber += "6";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function three() {
    currentRunningNumber += "3";
    screenBottom.textContent = currentRunningNumber;
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function reset() {
    currentRunningNumber = "";
    operatorsAndNums = [];
    screenTop.textContent = "";
    screenBottom.textContent = 0;
    console.log(currentRunningNumber);
}

function add() {
    operatorsAndNums.push(currentRunningNumber);
    currentRunningNumber = "";
    if(lastInputType === "operator") {
        return;
    }
    operatorsAndNums.push("+");
    arrString = operatorsAndNums.join(" ");
    screenTop.textContent = arrString;
    lastInputType = "operator";
    console.log(operatorsAndNums);
}

function subtract() {
    operatorsAndNums.push(currentRunningNumber);
    currentRunningNumber = "";
    if(lastInputType === "operator") {
        return;
    }
    operatorsAndNums.push("-");
    arrString = operatorsAndNums.join(" ");
    screenTop.textContent = arrString;
    lastInputType = "operator";
    console.log(operatorsAndNums);
}

function multiply() {
    operatorsAndNums.push(currentRunningNumber);
    currentRunningNumber = "";
    if(lastInputType === "operator") {
        return;
    }
    operatorsAndNums.push("*");
    arrString = operatorsAndNums.join(" ");
    screenTop.textContent = arrString;
    lastInputType = "operator";
    console.log(operatorsAndNums);
}

function divide() {
    operatorsAndNums.push(currentRunningNumber);
    currentRunningNumber = "";
    if(lastInputType === "operator") {
        return;
    }
    operatorsAndNums.push("/");
    arrString = operatorsAndNums.join(" ");
    screenTop.textContent = arrString;
    lastInputType = "operator";
    console.log(operatorsAndNums);
}

function calculate() {
    if(lastInputType === "number") {
        operatorsAndNums.push(currentRunningNumber);
        arrString += " " + currentRunningNumber;
    }
    currentRunningNumber = "";
    lastInputType = "";
    currentCalculation = +(operatorsAndNums[0]);
    console.log('\n');
    for(let i = 0; i < operatorsAndNums.length; i++) {
        console.log(operatorsAndNums[i]);
    }
    for(let i = 1; i < operatorsAndNums.length - 1; i++) {
        if(operatorsAndNums[i] === "/" && operatorsAndNums[i+1] === "0") {
            // placeholder
        }
        if(operatorsAndNums[i] === "+") {
            currentCalculation += +(operatorsAndNums[i+1]);
        } 
        if(operatorsAndNums[i] === "-") {
            currentCalculation -= +(operatorsAndNums[i+1]);
        } 
        if(operatorsAndNums[i] === "/") {
            currentCalculation /= +(operatorsAndNums[i+1]);
        } 
        if(operatorsAndNums[i] === "*") {
            currentCalculation *= +(operatorsAndNums[i+1]);
        }
    }
    arrString += " =";
    screenTop.textContent = arrString;
    screenBottom.textContent = currentCalculation;
    console.log("Final calculation: " + currentCalculation);
}