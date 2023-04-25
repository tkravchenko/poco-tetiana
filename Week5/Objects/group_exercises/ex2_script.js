//Task 2
/*
Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Change it to log "My 1st choice,"My 2nd choice","My 3rd choice", picking the right suffix for the number based on what it
is.
*/
let topChoices = [
    {
        first: "blue",
        second: "green",
        third: "yellow"
    },
    {
        first: "dog",
        second: "cat",
        third: "turtule"
    },
    {
        first: "Sumy",
        second: "Kyiv",
        third: "Kharkiv"
    }
];

topChoices.forEach(category => {
    console.log(`My #1 choice is ${category.first}.`);
    console.log(`My #2 choice is ${category.second}.`);
    console.log(`My #3 choice is ${category.third}.`);
});
console.log(topChoices); 

topChoices.forEach((category) => {
    Object.keys(category).forEach(key => {

        console.log(`My #${key} is ${category[key]}`);
        //console.log(Object.values(category));
    });
    console.log(Object.keys(category));
    //console.log(Object.values(category));
});