operatorsAndNums = []; // Array that stores all numbers and operators in the current calculation
currentRunningNumber = "";
let currentCalculation;
lastInputType = "";
screenTop = document.getElementById('screen-top');
screenBottom = document.getElementById('screen-bottom');
let arrString;

function backspace() {
    // Fix edge case where hitting backspace after hitting reset causes screen output to be blank when it should actually be 0
    if(lastInputType === "reset") {
        reset();
        return;
    }
    if(lastInputType === "calculate") {
        currentRunningNumber = currentRunningNumber.toString(); // Convert current running number from int to string before removing last digit from it
        currentRunningNumber = currentRunningNumber.slice(0, -1); // Remove last digit from current running number
        currentCalculation = currentRunningNumber;
        operatorsAndNums[0] = currentRunningNumber;
        screenBottom.textContent = currentRunningNumber;
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

        screenBottom.textContent = currentRunningNumber;
        lastInputType = "backspace";
        return;
    }
    if(lastInputType === "operator") {
        operatorsAndNums.pop(); // Remove last operator from array
        screenTop.textContent = currentRunningNumber; // Round output to 3 decimal places if it's a decimal number
        lastInputType = "backspace";
        return;
    }
}

function decimalPoint() {
    currentRunningNumber = +(currentRunningNumber);
    currentCalculation = +(currentRunningNumber);
    if(Number.isInteger(+(currentRunningNumber)) && Number.isInteger(+(currentCalculation))) {
        if(lastInputType === "calculate") {
            currentRunningNumber += ".";
            currentCalculation = currentRunningNumber;
            operatorsAndNums[0] = currentRunningNumber;
            screenBottom.textContent = currentRunningNumber;
            return;
        }
    } else {
        return;
    }
    currentRunningNumber += ".";
    screenBottom.textContent = currentRunningNumber;
    //lastInputType = "number";
}

function seven() {
    if(lastInputType === "calculate") {
        currentRunningNumber += "7";
        currentCalculation = currentRunningNumber;
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
    currentCalculation = 0;
    operatorsAndNums = [];
    screenTop.textContent = "";
    screenBottom.textContent = currentCalculation;
    lastInputType = "reset";
}

function add() {
    // If last input was an operator, break out of function since you can't have two consecutive operators
    if(lastInputType === "operator") {
        return;
    }

    operatorsAndNums.push(currentRunningNumber);
    screenTop.textContent = +(calculate());
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
    screenTop.textContent = +(calculate());
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
    screenTop.textContent = +(calculate());
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
    screenTop.textContent = +(calculate());
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
    screenTop.textContent = +(calculate());
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
    currentCalculation = +(Math.round(currentCalculation + "e" + 5)  + "e-" + 5); // Round all current calculations to 5 decimal places to minimize chances of inaccurate floating-point arithmetic results and text overflowing screen
    operatorsAndNums.push(currentCalculation);
    currentRunningNumber = currentCalculation;
    screenBottom.textContent = +currentCalculation;
    return currentCalculation;
}

// 2 event listeners below are for keyboard support 
// Darken button and call button functions when a key corresponding to a specific button is pressed by the user
window.addEventListener('keydown', (event) => {
    if(event.key === "7") {
        document.querySelector('.seven').style.background = "#777777"; // Darkens button when this specific key is pressed
        seven();
    } else if(event.key === "4") {
        document.querySelector('.four').style.background = "#777777";
        four();
    } else if(event.key === "1") {
        document.querySelector('.one').style.background = "#777777";
        one();
    } else if(event.key === "0") {
        document.querySelector('.zero').style.background = "#777777";
        zero();
    } else if(event.key === "8") {
        document.querySelector('.eight').style.background = "#777777";
        eight();
    } else if(event.key === "5") {
        document.querySelector('.five').style.background = "#777777";
        five();
    } else if(event.key === "2") {
        document.querySelector('.two').style.background = "#777777";
        two();
    } else if(event.key === "9") {
        document.querySelector('.nine').style.background = "#777777";
        nine();
    } else if(event.key === "6") {
        document.querySelector('.six').style.background = "#777777";
        six();
    } else if(event.key === "3") {
        document.querySelector('.three').style.background = "#777777";
        three();
    } else if(event.key === "=" || event.key === "Enter") {
        document.querySelector('.calculate').style.background = "#777777";
        calculateButton();
    } else if(event.key === "/") {
        document.querySelector('.divide').style.background = "#777777";
        divide();
    } else if(event.key === "*") {
        document.querySelector('.multiply').style.background = "#777777";
        multiply();
    } else if(event.key === "-") {
        document.querySelector('.subtract').style.background = "#777777";
        subtract();
    } else if(event.key === "+") {
        document.querySelector('.add').style.background = "#777777";
        add();
    } else if(event.key === "Backspace") {
        document.querySelector('.backspace').style.background = "#777777";
        backspace();
    } else if(event.key === "%") {
        document.querySelector('.modulo').style.background = "#777777";
        modulo();
    } else if(event.key === ".") {
        document.querySelector('.decimalPoint').style.background = "#777777";
        decimalPoint();
    }
});

// Restore default button color when a key corresponding to a specific button is released by the user
window.addEventListener('keyup', (event) => {
    if(event.key === "7") {
        document.querySelector('.seven').style.background = "#A9A9A9"; // Restores default button color when user releases this specific key
    } else if(event.key === "4") {
        document.querySelector('.four').style.background = "#A9A9A9";
    } else if(event.key === "1") {
        document.querySelector('.one').style.background = "#A9A9A9";
    } else if(event.key === "0") {
        document.querySelector('.zero').style.background = "#A9A9A9";
    } else if(event.key === "8") {
        document.querySelector('.eight').style.background = "#A9A9A9";
    } else if(event.key === "5") {
        document.querySelector('.five').style.background = "#A9A9A9";
    } else if(event.key === "2") {
        document.querySelector('.two').style.background = "#A9A9A9";
    } else if(event.key === "9") {
        document.querySelector('.nine').style.background = "#A9A9A9";
    } else if(event.key === "6") {
        document.querySelector('.six').style.background = "#A9A9A9";
    } else if(event.key === "3") {
        document.querySelector('.three').style.background = "#A9A9A9";
    } else if(event.key === "=" || event.key === "Enter") {
        document.querySelector('.calculate').style.background = "#A9A9A9";
    } else if(event.key === "/") {
        document.querySelector('.divide').style.background = "#A9A9A9";
    } else if(event.key === "*") {
        document.querySelector('.multiply').style.background = "#A9A9A9";
    } else if(event.key === "-") {
        document.querySelector('.subtract').style.background = "#A9A9A9";
    } else if(event.key === "+") {
        document.querySelector('.add').style.background = "#A9A9A9";
    } else if(event.key === "Backspace") {
        document.querySelector('.backspace').style.background = "#A9A9A9";
    } else if(event.key === "%") {
        document.querySelector('.modulo').style.background = "#A9A9A9";
    } else if(event.key === ".") {
        document.querySelector('.decimalPoint').style.background = "#A9A9A9";
    }
});