/*Task 1
Age calculator*/

const birthYear = +prompt("Please enter a year you were born, e.g. YYYY");

if(isNaN(birthYear) || (birthYear.toString().length !== 4)){
    console.log("Please enter a number with 4 digits");
} else {
    
    let futureYear = +prompt("Please enter a year in the future, e.g. YYYY");
    if(isNaN(futureYear)){
        alert("Please enter a number");
    } else if(!(futureYear > 999 && futureYear < 10000)){
        alert("Please enter the future year in the format YYYY")
    } else if((futureYear <= birthYear) || (futureYear <= 2023)) {
        alert("The future year has to be in the future and needs to be grater than the year you were born");
    } else {
        
        let ageAfterBirthday = futureYear - birthYear;
            let ageBeforeBirthday = ageAfterBirthday - 1;
            console.log(`I will be either ${ageBeforeBirthday} or ${ageAfterBirthday} years old in ${futureYear}.`)
    }
}

//Task 2
//Switch practice

let fname = prompt("First name:");
let email = prompt("Email address:");

console.log(`Dear ${fname}, the newsletter will be sent to ${email}`);

//Task 3
//Switch practice

let language = prompt("Choose the language, e.g. es, ca, tr, uk, ku, de, en");
let label_fname = "";
let label_email = "";
let label_output1 = "";
let label_output2 = "";

switch(language){
    case "es":
        label_fname = "Nombre:";
        label_email = "E-mail:";

        label_output1 = "Estimado";
        label_output2 = "la newsletter se ...";
        break;
    case "ca":
        break;
    case "tr":
        break;
    case "uk":
        break;
    case "ku":
        break;
    case "de":
        label_fname = "Vorname:";
        label_email = "E-mail Adresse:";
        break;
    case "en":
    default:
        label_fname = "First name:";
        label_email = "E-mail address:";

        label_output1 = "Dear";
        label_output2 = ", the newasletter will be sent to "
}

//programming logic
fname = prompt(label_fname);
email = prompt(label_email);

// check prompts for valid input

console.log(`${label_output1}${label_fname}${label_output2}${label_email}`);

//Task 4
//Loops

let birthYear = +prompt("Please enter a year you were born, e.g. YYYY");

do {
    birthYear = +prompt("Please enter a year you were born, e.g. YYYY");
}while(isNaN(birthYear) || (birthYear.toString().length !== 4)) 

let birthYear1 = +prompt("Please enter the year you were born, e.g. YYYY");

while(isNaN(birthYear1) || birthYear1.toString().length !== 4){
    alert("please enter a number with 4 digits");
    birthYear1 = +prompt("Please enter the year you were born, e.g. YYYY");
} 

/*Task 6
Translate days of the week*/

let dayOfTheWeek = prompt("What week day is today, e.g. Monday:");

//check for 3 first letters as a next step
switch(dayOfTheWeek.toLowerCase){
    case "monday":
        dayOfTheWeek = "Montag";
        break;
    case "tuesday":
        dayOfTheWeek = "Dienstag";
        break;
    case "wednesday":
        dayOfTheWeek = "Mittwoch";
        break;
    case "thursday":
        dayOfTheWeek = "Donnerstag";
        break;
    case "friday":
        dayOfTheWeek = "Freitag";
        break;
    case "saturday":
        dayOfTheWeek = "Samstag";
        break;
    case "sunday":
        dayOfTheWeek = "Sontag";
        break;
    default:
        alert("Dieser Tag ist unbekannt.");
}

console.log(`Heute ist ${dayOfTheWeek}.`)


/*Task 7
Odd / Even Reporter
Prompt for a number between 0 and 20.
Check if the given number is even or odd.
Report the result to the screen (e.g. "2 is even"). */

let num = +(prompt("Enter a number between 0 and 20, e.g. 2"));

while((isNaN(num)) || (num < 0) || (num > 20)){
    num = +(prompt("Make sure to write a number between 0 and 20"));
}

if(num%2 === 0){
    console.log(`${num} is even`);
}else {
    console.log(`${num} is odd`);
}

/*Task 8
Odd / Even Reporter 2.0
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or
odd.
Report the result to the screen (e.g. "2 is even").*/

for(let num = 0; num < 21; num++){
    if(num%2 === 0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}

/*Task 9
Multiplication tables
Prompt for a number between 0 and 10.
Multiply the given number by 9.
Log the result (e.g. "2 * 9 = 18").*/

let num = +(prompt("Enter a number between 0 and 10:"));
let multiplication;
if((num < 0) || (num > 10)){
    alert("Please check that  a number is between 0 and 10");
}else{
    multiplication = num * 9;
    console.log(`${num} * 9 = ${multiplication}`)
}

/*Task 10
Multiplication tables 2.0
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the number by 9.
Log the result (e.g. "2 * 9 = 18").*/

for(let num = 0; num < 11; num++){
    let multiplication = num * 9;
    console.log(`${num} * 9 = ${multiplication}`)
}

