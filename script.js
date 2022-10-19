operatorsAndNums = [];
currentRunningNumber = "";
lastInputType = "";

function seven() {
    currentRunningNumber += "7";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function four() {
    currentRunningNumber += "4";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function one() {
    currentRunningNumber += "1";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function zero() {
    currentRunningNumber += "0";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function eight() {
    currentRunningNumber += "8";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function five() {
    currentRunningNumber += "5";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function two() {
    currentRunningNumber += "2";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function nine() {
    currentRunningNumber += "9";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function six() {
    currentRunningNumber += "6";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function three() {
    currentRunningNumber += "3";
    console.log(currentRunningNumber);
    lastInputType = "number";
}

function reset() {
    currentRunningNumber = "";
    operatorsAndNums = [];
    console.log(currentRunningNumber);
}

function add() {
    operatorsAndNums.push(currentRunningNumber);
    currentRunningNumber = "";
    if(lastInputType === "operator") {
        return;
    }
    operatorsAndNums.push("+");
    lastInputType = "operator";
}

function subtract() {
    operatorsAndNums.push(currentRunningNumber);
    currentRunningNumber = "";
    if(lastInputType === "operator") {
        return;
    }
    operatorsAndNums.push("-");
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
    lastInputType = "operator";
    console.log(operatorsAndNums);
}

function calculate() {
    if(lastInputType === "number") {
        operatorsAndNums.push(currentRunningNumber);
    }
    currentRunningNumber = "";
    lastInputType = "";
    currentCalculation = +(operatorsAndNums[0]);
    console.log('\n');
    for(let i = 0; i < operatorsAndNums.length; i++) {
        console.log(operatorsAndNums[i]);
    }
    for(let i = 1; i < operatorsAndNums.length - 1; i++) {
        console.log(operatorsAndNums[i]);
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
    console.log("Final calculation: " + currentCalculation);
}