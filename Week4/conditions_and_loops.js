//Task 1
//Age calculator

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
else {
    
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
