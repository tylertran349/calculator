operatorsAndNums = [];
currentRunningNumber = "";
let currentCalculation;
lastInputType = "";
screenTop = document.getElementById('operators-and-nums');
screenBottom = document.getElementById('current-calculation');
let arrString;

function seven() {
    currentRunningNumber += "7";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function four() {
    currentRunningNumber += "4";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function one() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "1";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "1";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function zero() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "0";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "0";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function eight() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "8";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "8";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function five() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "5";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "5";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function two() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "2";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "2";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function nine() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "9";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "9";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function six() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "6";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "6";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function three() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "3";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "3";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function reset() {
    currentRunningNumber = "";
    operatorsAndNums = [];
    screenTop.textContent = "";
    screenBottom.textContent = 0;
}

function add() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = calculate();
    currentRunningNumber = "";
    operatorsAndNums.push("+");
    screenTop.textContent += " + ";
    lastInputType = "operator";
    console.table(operatorsAndNums);
}

function subtract() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = calculate();
    currentRunningNumber = "";
    operatorsAndNums.push("-");
    screenTop.textContent += " - ";
    lastInputType = "operator";
    console.table(operatorsAndNums);
}

function multiply() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = calculate();
    currentRunningNumber = "";
    operatorsAndNums.push("*");
    screenTop.textContent += " * ";
    lastInputType = "operator";
    console.table(operatorsAndNums);
}

function divide() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = calculate();
    currentRunningNumber = "";
    operatorsAndNums.push("/");
    screenTop.textContent += " ÷ ";
    lastInputType = "operator";
    console.table(operatorsAndNums);
}

function calculateButton() {
    calculate();
    if(lastInputType !== "calculate" && lastInputType !== "error") {
        screenTop.textContent += " =";
    }
    lastInputType = "calculate";
}

function calculate() {
    console.log("Current running number: " + currentRunningNumber);
    if(lastInputType === "number") {
        operatorsAndNums.push(currentRunningNumber);
        screenTop.textContent += currentRunningNumber;
    }
    currentCalculation = +(operatorsAndNums[0]);
    for(let i = 1; i < operatorsAndNums.length - 1; i++) {
        // If dividing by 0, reset calculator to default values and output error
        if(operatorsAndNums[i] === "/" && operatorsAndNums[i+1] === "0") {
            reset();
            screenTop.textContent = "";
            screenBottom.textContent = "Math Error";
            lastInputType = "error";
            return;
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
    operatorsAndNums = [];
    operatorsAndNums.push(currentCalculation);
    console.table(operatorsAndNums);
    currentRunningNumber = currentCalculation;
    console.log("Current calculation: " + currentCalculation);
    screenBottom.textContent = currentCalculation;
    return currentCalculation;
}