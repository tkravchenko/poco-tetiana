/* Task 1
Write a basic calculator */

let number1 = +prompt("Please enter a number");
while(isNaN(number1)){
    alert("This is not a valid number. Please try again.");
    number1 = +prompt("Please enter a number");
}

let number2 = +prompt("Please enter another number");
while(isNaN(number2)){
    alert("This is not a valid number. Please try again.");
    number2 = +prompt("Please enter a number");
}

let operator = prompt("Please enter one of these operators: + - * / %");

let result = calculator(number1, number2, operator);

if(typeof(result) != "undefined"){
    alert(`${number1} ${operator} ${number2} equals to ${result}.`)
}else{
    alert("This is not an allowed operator. Please try again.")
}

function calculator(num1, num2, op){
    let result;

    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }
    return result;
}

console.log(calculator(5, 12, "/"));
console.log(calculator(54, -12, "/"));
console.log(calculator(534, 12, "%"));

/* Task 2
Arrays, objects */

//arrays

const groseries = ["Bananas", "Pasta", "Milk"];
const numbers = [1, 2, 5, 6];
const mixItUp = [1, "string", true]; // best practice to have the same data type;


// forEach, forOf loops have a look

groceries.forEach(function(item, index){
    console.log(item);
});

console.log(groceries[1]);


// objects

console.table(groseries);

const groceryItem = {
    item: "Banana",
    quantity: 5
}

const groceryList = [
    groceryItem, {
        item: "Milk",
        quantity: 2
    }, {
        item: "Pasta",
        quantity: 3
    }
];

console.table(groceryList);

groceryList.forEach(function(groceryItem){
    console.log(groceryItem.quantity + " " + groceryItem.item);
});