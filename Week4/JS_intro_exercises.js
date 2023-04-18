// Task 1
// Prompt the user for their name
let name = prompt("What is your name?");

// Print a greeting using the entered name
console.log(`Hello, ${name}!`);

// Task 2

// Prompt user for input string
let inputString = prompt("Enter a string:");

// Calculate length of input string
let length = inputString.length;

// Display input string and its length
console.log(`The input string is: ${inputString}`);
console.log(`The length of the input string is: ${length}`);

// Task 3

// Prompt user for quote and author
let quote = prompt("Enter a quote:");
let author = prompt("Enter the author of the quote:");

// Display quote and author
console.log(`${author} says, "${quote}"`);

// Task 4

// Prompt user for input
let numChildren = prompt("How many children do you want to have?");
let partnerName = prompt("What is the name of your partner?");
let geoLocation = prompt("What is your ideal geographic location?");
let jobTitle = prompt("What is your dream job?");

// Generate fortune message
let fortuneMessage = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;

// Display fortune message
console.log(fortuneMessage);

// Task 5

// Prompt user for input
let birthYear = prompt("Enter your birth year:");
let futureYear = prompt("Enter a future year:");

// Calculate age
let age1 = futureYear - birthYear;
let age2 = age1 - 1;

// Generate message
let message = `I will be either ${age2} or ${age1} in ${futureYear}.`;

// Display message
console.log(message);git