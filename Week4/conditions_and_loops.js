//Task 1
//Age calculator

let birthYear = +prompt("Please enter a year you were born, e.g. YYYY");

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




