//* ****************************************************
//* Variables In JavaaScript
//* ****************************************************


//* ****************************************************
/*  Variables are Containers for Storing Data.

    JavaScript Variables can be declared in 4 ways:
    1. Automatically
    2. Using var
    3. Using let
    4. Using const
*/
//* ****************************************************

//* ****************************************************
//* Note : Prefer not to use "var" in code because of block and functional scope issues. Instead of "var" use "let".
//* ****************************************************


//* 1. Automatically
firstName = "Suraj";    // This is a bad practice, do not initialize variable like this.


//* 2. Using var
var age = 25;


//* 3. Using let
let email = "suraj@gmail.com";
let state;


//* 4. Using const
const country = "Nepal";
// country = "Japan";   -> Not allowed because, constant values cannot be changed.


// Print data one by one
console.log(firstName);
console.log(age);
console.log(email);
console.log(country);
console.log(state);

// Print data in tabular form.
console.table([firstName, age, email, country, state]);


//* ****************************************************
/*
    Note :
    You cannot re-declare a variable declared with let or const.

    This will not work:
    let carName = "Volvo";
    let carName;
*/
//* ****************************************************