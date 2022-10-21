operatorsAndNums = [];
currentRunningNumber = "";
let currentCalculation;
lastInputType = "";
screenTop = document.getElementById('operators-and-nums');
screenBottom = document.getElementById('current-calculation');
let arrString;

function seven() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "7";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "7";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function four() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "4";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "4";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function one() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "1";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "1";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function zero() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "0";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "0";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function eight() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "8";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "8";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function five() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "5";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "5";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function two() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "2";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "2";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function nine() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "9";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "9";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function six() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "6";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "6";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

function three() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "3";
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        return;
    }
    currentRunningNumber += "3";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
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
    screenTop.textContent = +(Math.round(calculate() + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    currentRunningNumber = "";
    operatorsAndNums.push("+");
    screenTop.textContent += " + ";
    lastInputType = "operator";
}

function subtract() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = +(Math.round(calculate() + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    currentRunningNumber = "";
    operatorsAndNums.push("-");
    screenTop.textContent += " - ";
    lastInputType = "operator";
}

function multiply() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = +(Math.round(calculate() + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    currentRunningNumber = "";
    operatorsAndNums.push("*");
    screenTop.textContent += " * ";
    lastInputType = "operator";
}

function divide() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = +(Math.round(calculate() + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    currentRunningNumber = "";
    operatorsAndNums.push("/");
    screenTop.textContent += " ÷ ";
    lastInputType = "operator";
}

function calculateButton() {
    calculate();
    if(lastInputType !== "calculate" && lastInputType !== "error") {
        screenTop.textContent += " =";
    }
    lastInputType = "calculate";
}

function calculate() {
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
    currentRunningNumber = currentCalculation;
    screenBottom.textContent = +(Math.round(currentCalculation + "e" + 3)  + "e-" + 3); // Round decimal numbers to 3 decimal places
    return currentCalculation;
}

// Add keyboard support
document.addEventListener("keydown", onKeyPress);
function onKeyPress(k) {
    if(k.key === "7") {
        seven();
    } else if(k.key === "4") {
        four();
    } else if(k.key === "1") {
        one();
    } else if(k.key === "0") {
        zero();
    } else if(k.key === "8") {
        eight();
    } else if(k.key === "5") {
        five();
    } else if(k.key === "2") {
        two();
    } else if(k.key === "9") {
        nine();
    } else if(k.key === "6") {
        six();
    } else if(k.key === "3") {
        three();
    } else if(k.key === "=" || k.key === "Enter") {
        calculateButton();
    } else if(k.key === "/") {
        divide();
    } else if(k.key === "*") {
        multiply();
    } else if(k.key === "-") {
        subtract();
    } else if(k.key === "+") {
        add();
    }
}