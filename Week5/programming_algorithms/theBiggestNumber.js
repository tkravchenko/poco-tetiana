let number1 = +prompt("Please enter a number, e.g. 2.");
let number2 = +prompt("Please enter the second number, e.g. 34.");
let maxNumber = number1;
let minNumber = number2;

if(number2 > maxNumber){
    maxNumber = number2;
    minNumber = number1;
};

console.log(`The greater number of ${number1} and ${number2} is ${maxNumber}.`);
console.log(`The smaller number of ${number1} and ${number2} is ${minNumber}.`);