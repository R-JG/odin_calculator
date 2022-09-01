let entryArray = [];
let numberEntry = "";

const displayEquation = document.querySelector(".equation");
const displayEntry = document.querySelector(".entry");

const numberButtons = document.querySelectorAll("button.number");
const operatorButtons = document.querySelectorAll("button.operator");
const clearButton = document.querySelector(".clear");

numberButtons.forEach(button => button.addEventListener("click", (e) => {
    numberEntry += button.textContent;
    displayEntry.textContent = numberEntry;
}));

operatorButtons.forEach(button => button.addEventListener("click", (e) => {
    if (numberEntry === "") {
        return;
    } else {
        entryArray.push(numberEntry);
        numberEntry = "";
        entryArray.push(button.textContent);

        displayEquation.textContent = entryArray.join(" ");
        displayEntry.textContent = ">"
    }
}));

clearButton.addEventListener("click", (e) => {
    entryArray = [];
    numberEntry = "";
    displayEquation.textContent = ">";
    displayEntry.textContent = ">";
});

// ---------------------- Math Functions ----------------------

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// ------------------------------------------------------------



/* 
pressing the operate button:
First, while requiring that the current entry is not blank,
add the current remaining number entry to the array.
Then take the entry array and loop through it in four stages, 
i.e. for each operator accoring to the order of operations.
In each stage, the array is looped through until an operator of that stage is found, 
and then a pair is made from the pervious and subsequent index points.
The pair is operated on according to the operator, 
and the three items in the array are replaced with the result.
The loop then continues until there are no more operators / there is only one item.
*/