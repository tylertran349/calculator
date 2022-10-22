operatorsAndNums = []; // Array that stores all numbers and operators in the current calculation
currentRunningNumber = "";
let currentCalculation;
lastInputType = "";
screenTop = document.getElementById('screen-top');
screenBottom = document.getElementById('screen-bottom');
let arrString;

function backspace() {
    if(lastInputType === "calculate") {
        currentRunningNumber = currentRunningNumber.toString(); // Convert current running number from int to string before removing last digit from it
        currentRunningNumber = currentRunningNumber.slice(0, -1); // Remove last digit from current running number
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        lastInputType = "backspace";
        return;
    }
    if(lastInputType === "number" || lastInputType === "backspace") {
        currentRunningNumber = currentRunningNumber.slice(0, currentRunningNumber.length - 1);
        currentCalculation = null;

        // If current running number is nothing and current calculation is null, remove the only value still remaining in the array and set the current calculation to 0
        if(currentRunningNumber === "" && currentCalculation === null) {
            operatorsAndNums.pop();
            currentCalculation = 0;
            screenBottom.textContent = "0";
            lastInputType = "backspace";
            return;
        }

        screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        lastInputType = "backspace";
        return;
    }
    if(lastInputType === "operator") {
        operatorsAndNums.pop(); // Remove last operator from array
        screenTop.textContent = +(Math.round(calculate() + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
        lastInputType = "backspace";
        return;
    }
}

function decimalPoint() {
    if(Number.isInteger(+(currentRunningNumber)) && Number.isInteger(+(currentCalculation))) {
        if(lastInputType === "calculate") {
            currentRunningNumber += ".";
            currentCalculation = currentRunningNumber;
            operatorsAndNums[0] = currentRunningNumber;
            screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
            return;
        }
    }
    currentRunningNumber += ".";
    screenBottom.textContent = +(Math.round(currentRunningNumber + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    lastInputType = "number";
}

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

function modulo() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = +(Math.round(calculate() + "e" + 3)  + "e-" + 3); // Round output to 3 decimal places if it's a decimal number
    currentRunningNumber = "";
    operatorsAndNums.push("%");
    screenTop.textContent += " % ";
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
        if(((operatorsAndNums[i] === "/") || (operatorsAndNums[i] === "%")) && (operatorsAndNums[i+1] === "0")) {
            reset();
            screenTop.textContent = "";
            screenBottom.textContent = "Math Error";
            lastInputType = "error";
            return;
        }
        // If either operand (number next to an operator) next to a modulo operator is a decimal number, reset calculator to default values and output error since modulo isn't supposed to be run on integers
        if((!Number.isInteger(+(operatorsAndNums[i-1]))) && (operatorsAndNums[i] === "%") || (!Number.isInteger(+(operatorsAndNums[i+1]))) && (operatorsAndNums[i] === "%")) {
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
        if(operatorsAndNums[i] === "%") {
            currentCalculation %= +(operatorsAndNums[i+1]);
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
    } else if(k.key === "Backspace") {
        backspace();
    } else if(k.key === "%") {
        modulo();
    } else if(k.key=== ".") {
        decimalPoint();
    }
}