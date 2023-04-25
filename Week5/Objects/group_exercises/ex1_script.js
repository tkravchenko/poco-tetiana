//Task 1

// using this array,
//let array = ["Banana", "Apples", "Oranges", "Blueberries"];
/*
1. Access and output Oranges.
2. Remove the Banana from the array.
3. Sort the array in order.
4. Put "Kiwi" at the end of the array.
5. Remove "Apples" from the array.
6. Sort the array in reverse order.
*/
//create an array
let fruits = ["Banana", "Apples", "Oranges", "Bluberries"];

// Access and output Oranges
for(let i = 0; i < fruits.length; i++){
    if(fruits[i] === "Oranges"){
        console.log(`Here are the ${fruits[i]}.`);
    }
}
//console.log(fruits[2]);

//Remove the Banana from the array.
fruits.shift();
console.log(`After removing the Banana you still have: ${fruits}`);

//Sort the array in order.
fruits.sort();
console.log(`Now your fruits are sorted: ${fruits}`);

//Put "Kiwi" at the end of the array.
fruits.push("Kiwi");
console.log(`Adding Kiwi to your cart: ${fruits}`);

//Remove "Apples" from the array.
fruits.shift("Apples");
console.log(`After removing Apples you still have: ${fruits}`);

//Sort the array in reverse order.
fruits.reverse();
console.log(`After reversing it looks like: ${fruits}`);
 