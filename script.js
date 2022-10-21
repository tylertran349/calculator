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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "7";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function four() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "4";
        currentCalculation = currentRunningNumber;
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
        return;
    }
    currentRunningNumber += "4";
    screenBottom.textContent = currentRunningNumber;
    lastInputType = "number";
}

function one() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "1";
        currentCalculation = currentRunningNumber;
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
        currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
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
    currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places

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
    currentCalculation = +(Math.round(currentCalculation + "e+3")  + "e-3"); // Round to 3 decimal places
    operatorsAndNums = [];
    operatorsAndNums.push(currentCalculation);
    currentRunningNumber = currentCalculation;
    screenBottom.textContent = currentCalculation;
    return currentCalculation;
}

// Add keyboard support
document.addEventListener("keydown", onKeyPress);
function onKeyPress(e) {
    console.log(e.key);
    if(e.key === "7") {
        seven();
    } else if(e.key === "4") {
        four();
    } else if(e.key === "1") {
        one();
    } else if(e.key === "0") {
        zero();
    } else if(e.key === "8") {
        eight();
    } else if(e.key === "5") {
        five();
    } else if(e.key === "2") {
        two();
    } else if(e.key === "9") {
        nine();
    } else if(e.key === "6") {
        six();
    } else if(e.key === "3") {
        three();
    } else if(e.key === "=" || e.key === "Enter") {
        calculateButton();
    } else if(e.key === "/") {
        divide();
    } else if(e.key === "*") {
        multiply();
    } else if(e.key === "-") {
        subtract();
    } else if(e.key === "+") {
        add();
    }
}