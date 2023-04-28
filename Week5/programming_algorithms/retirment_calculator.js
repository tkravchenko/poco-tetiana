let currentAge = +prompt("How old are you?");
let retirmentAge = +prompt("At what age would you like to retire? ");

while(retirmentAge <= currentAge){
    alert("Your retirment age should be grater than you are now.");
    currentAge = +prompt("How old are you?");
    retirmentAge = +prompt("At what age would you like to retire? ");
}

// Creating Date Object 
let currentYear = new Date().getFullYear();

let yearsUntilRetire = retirmentAge - currentAge;
let retirmentYear = currentYear + yearsUntilRetire;

console.log(`You have ${yearsUntilRetire} years left until you can retire.`);
console.log(`It's ${currentYear}, so you can retire in ${retirmentYear}.`);
