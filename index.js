let equationArray = [];
let numberEntry = "";

const displayEquation = document.querySelector(".equation");
const displayEntry = document.querySelector(".entry");

const numberButtons = document.querySelectorAll("button.number");
const operatorButtons = document.querySelectorAll("button.operator");
const clearButton = document.querySelector(".clear");
const operateButton = document.querySelector(".operate");

numberButtons.forEach(button => button.addEventListener("click", (e) => {
    numberEntry += button.textContent;
    displayEntry.textContent = numberEntry;
}));

operatorButtons.forEach(button => button.addEventListener("click", (e) => {
    if (numberEntry === "") return;

    equationArray.push(numberEntry);
    numberEntry = "";
    equationArray.push(button.textContent);

    displayEquation.textContent = equationArray.join(" ");
    displayEntry.textContent = ">"
}));

clearButton.addEventListener("click", (e) => {
    equationArray = [];
    numberEntry = "";
    displayEquation.textContent = ">";
    displayEntry.textContent = ">";
});

operateButton.addEventListener("click", (e) => {operate()});

/* 
pressing the operate button:
First, while requiring that the current entry is not blank,
add the current remaining number entry to the array.
Then take the entry array and loop through it four separate times, 
i.e. for each operator accoring to the order of operations.
In each stage, the array is looped through until an operator of that stage is found, 
and then a pair is made from the pervious and subsequent index points.
The pair is operated on according to the operator, 
and the three items in the array are replaced with the result.
The loop then continues until there are no more operators / there is only one item.
Then display the result in the equation display, and reset the entry variable and array.
*/

function operate() {
    if (numberEntry === "") return;

    equationArray.push(numberEntry);

    // Division loop
    for (i = 0; i <= (equationArray.length - 2); i++) {
        if (equationArray[i] === "÷") {
            let divisionResult = equationArray[i - 1] / equationArray[i + 1];
            equationArray.splice((i - 1), 3, divisionResult);
        }
    }

    // Multiplication loop
    for (i = 0; i <= (equationArray.length - 2); i++) {
        if (equationArray[i] === "x") {
            let multiplicationResult = equationArray[i - 1] * equationArray[i + 1];
            equationArray.splice((i - 1), 3, multiplicationResult);
        }
    }

    // Addition loop
    for (i = 0; i <= (equationArray.length - 2); i++) {
        if (equationArray[i] === "+") {
            let additionResult = +equationArray[i - 1] + +equationArray[i + 1];
            equationArray.splice((i - 1), 3, additionResult);
        }
    }

    // Subtraction loop
    for (i = 0; i <= (equationArray.length - 2); i++) {
        if (equationArray[i] === "-") {
            let subtractionResult = equationArray[i - 1] - equationArray[i + 1];
            equationArray.splice((i - 1), 3, subtractionResult);
        }
    }

    displayEquation.textContent = equationArray.join(" ");
    displayEntry.textContent = ">";
    equationArray = [];
    numberEntry = "";
}