let phoneNumber = "";

do {
    //clear the phone number
    if(phoneNumber){
        phoneNumber = "";
    };
    phoneNumber = prompt("Please enter your phonr number, e.g. 079 879 9236.");
} while (!(isValidNumber(phoneNumber)));

//check if the number is valid
function isValidNumber(phoneNumber) {
    let isValid = false;
    //remove the white spaces and special characters
    phoneNumber = phoneNumber.replace(/[\-\s\(\)\.]/g, '');
    if (!(isNaN(phoneNumber))){
        if (phoneNumber.length === 10){
            isValid = true;
            alert("Your number has been successfully stored!");
        }else if (phoneNumber === "") {
            alert("You didn't enter the phone number.")
        }else{
            alert("Your number is invalid");
        }
    }else{
        alert("Your number is invalid");
    }
    return isValid;
};