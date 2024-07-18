//* ****************************************************
//* Higher Order Function In JavaScript
//* ****************************************************


//* ***************************** Defination ***************************
    //* A function that takes one or more functions as arguments, or returns a function as its result.

    //* A higher-order function in JavaScript is a function that does at least one of the following:
    //* 1. Takes one or more functions as arguments.
    //* 2. Returns a function as its result.
//* ********************************************************************


//* ***************************** Example ******************************
//* Example 1:

// Callback function to be passed to the higher order function
function callbackFunction() {
    console.log(`I am a callback function`);
}

// Define a higher-order function that takes a function as an argument
function higherOrderFunction(func) {
    console.log(`I am higher order function`);
    func();     // Call the function passed as an argument
}

// Call the higher-order function, passing the callback function as an argument
higherOrderFunction(callbackFunction);

// Output:
// I am higher order function
// I am a callback function


//* Example 2: Write a higher-order function that takes a function and a number, and calls the function that many times.

// Callback function to be passed to the higher order function
function callMyname() {
    console.log(`Suraj`);
}

// Define a higher-order function that takes a function and a number as arguments
function highOrderFunction(func, num){
    for(let i = 0; i < num; i++) {
        func();
    }
}

// Call the higher-order function, passing the callMyName function as an argument
highOrderFunction(callMyname, 5);       // This will call callMyname 5 times

// Output : 
// Suraj
// Suraj
// Suraj
// Suraj
// Suraj

//* ********************************************************************

// Define an arrow function 'message' that logs a message to the console
const message = (value) => console.log(`${value}, everyone!`);

// Define a higher-order function 'highOrderFunction' that takes a function 'func' and a number 'num' as arguments
function highOrderFunction(func, num) {
    for(let i = 0; i < num; i++) {
        func('Hello');          // Call the function 'func' with the argument 'Hello'
    }
}

// Call 'highOrderFunction' with 'message' as the function argument and 5 as the number of times to call it
highOrderFunction(message, 5);

// Output : 
// Hello, everyone!
// Hello, everyone!
// Hello, everyone!
// Hello, everyone!
// Hello, everyone!

//* Example 3: Write a higher-order function that calculates the area and diameter of a circle. 

// Define an array of radius
const radius = [1, 2, 3];

// Define a function expression 'calculateArea' to calculate the area based on radius (logic to calculate area)
const area = function calculateArea(radius) {
    return 2 * Math.PI * radius;
}

// Define a function expression 'calculateDiameter' to calculate the diameter based on radius (logic to calculate diameter)
const diameter = function calculateDiameter(radius) {
    return 2 * radius;
}

// Define a function expression 'calculate' that takes an array of radius and a logic function as arguments
// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic) {
    let output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));      // Apply the logic function to each radius and push the result to 'output'
    }
    return output;                          // Return the resulting array
}

// Calculate and log the diameters for each radius using the 'diameter' logic function
console.log(calculate(radius, diameter));   // Output: [2, 4, 6]

// Calculate and log the areas for each radius using the 'area' logic function
console.log(calculate(radius, area));       // Output: [3.141592653589793, 12.566370614359172, 28.274333882308138]


//* Example 4: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// Define an arrow function that adds 5 to a number and return their result.
const add = (num) => num + 5;

// Define an arrow function that multiplies a number by 3 and return their result.
const multiply = (num) => num * 3;

// Define a higher-order function that takes two functions and a number as arguments
function highOrderFun(fun1, fun2, num) {
    const result1 = fun1(num);          // Apply the first function to the number
    const result2 = fun2(result1);      // Apply the second function to the result of the first function
    return result2;                     // Return the final result

    // Shorthand of above code : return fun2(fun1(num));
}
// Call the higher-order function, passing the add and multiply functions and a number
const output = highOrderFun(add, multiply, 10);
console.log(output);                    // Output -> 45 (since (10 + 5) * 3 = 45)