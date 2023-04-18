## Recap notes

Undefeined: decleared but not assigned variable

isNaN()

Alternatively known as acute, backtick, left quote, or an open quote, the back quote or backquote is a punctuation mark (`). It's on the same U.S. computer keyboard key as the tilde.

console.log(typeof(birthYear)); to debug

|| pipes
logical not !before

isNaN - negative conditions you need ||
if positive logical conditions &&

Userbilaty
--constraints

**Debugging**
console.log("Is often used for debugging");
debugger; // stops the execution of JavaScript, like setting a breakpoint

## Loops

Types of loops:
- for: you know how often you go around;
- forEach;
- while: you don't necesseraly now how long will you loop;
- do while:you want to execute smth no matter what at least once.

for(){}

forEach(){}

while(condition){
    //execute code
}

do(){
    //execute code
}while(condition)

while(statement){
//codeblock this gets looped until the statment is false
}

for(initialization; condition; iterator){
//codeblock this gets looped until the condition is false
}

list.forEach(function(value, index) {
//code block here
});

### Controlling loops execution

The **break** statement jumps out of a loop and continues executing the code **after** the loop.
The **return** keyword will also break the loop as it immediately returns some value from a loop inside a function.
The **continue** statement breaks **only one iteration** in the loopand continues with the **next** iteration.

### Scope

In JavaScript each function creates a new scope. **Scope** determines the accessibility (visibility) of the declared variables.
Variables defined inside a function are not accessible (visible) from outside the function.

You are in the **global scope**, also called root scope by default if you are using JavaScript, the window object.

A **global variable** is short for a variable defined in global scope.
Variables declared **outside** of any functions are global.
A global variable can be used anywhere **after** its declaration.

If you declare a variable inside a code block (e.g. function), you create a **local scope**, also called child scope or function scope

### Let & Var

**var** is function-scoped. Every variable declared inside the function is only accessible inside the function.

**let** is block-scoped (block is anything surrounded by {}). Every variable declared inside a {} block is only accessible inside that block. const as well.

**Best practice:** use let over var . Use const for variables which do not change.