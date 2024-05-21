"use strIct";  // Treat all JavaScript code as newer veRsion.

//* ****************************************************
//* Datatypes In JavaaScript
//* ****************************************************


//* ****************************************************
/*  JavaScript has 8 Datatypes
    1. String -> ""
    2. Number -> Range = 2^53
    3. Bigint
    4. Boolean -> True / False
    5. Undefined
    6. Null -> Stand alone value
    7. Symbol
    8. Object

    The object data type can contain:
    1. An object
    2. An array
    3. A date
*/
//  ****************************************************

//* Numbers:
let length = 16;
let weight = 7.5;

//* Bigint:
let x = BigInt("123456789012345678901234567890");

//* Strings:
let color = "Yellow";
let name = "Suraj";

//* Booleans
let flag = true;
let isLoggedIn = false;


console.log(typeof undefined);  // Output -> undefined
console.log(typeof null);       // Output -> object