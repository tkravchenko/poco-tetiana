let language = prompt("Please chhose one of the following languages: en, de, ukr.");
let hello_message = "";

switch (language){
    case "en":
        hello_message = "Hello world!";
        break;
    case "de":
        hello_message = "Hallo Welt!";
        break;
    case "ukr":
        hello_message = "Привіт світ!";
        break;
    default:
        hello_message = "Hello world!";
}

console.log(hello_message);