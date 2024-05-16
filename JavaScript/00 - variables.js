//* ****************************************************
//* Variables In JavaaScript
//* ****************************************************


//* ****************************************************
/*  Variables are Containers for Storing Data

    JavaScript Variables can be declared in 4 ways:
    1. Automatically
    2. Using var
    3. Using let
    4. Using const
*/
//  ****************************************************


//* 1. Automatically
firstNum = 10;
secondNum = 15;
sum = firstNum + secondNum;
console.log(sum);


//* 2. Using var
var num1 = 10;
var num2 = 20;
var addition = num1 + num2;
console.log(addition);


//* 3. Using let
let first = 50;
let second = 100;
let product = first * second;
console.log(product);

//* 4. Using const
const price1 = 10;
const price2 = 20;
let total = price1 + price2;
console.log(total);

//* The two variables "price1" and "price2" are declared with the const keyword.These are constant values and cannot be changed.
//* The variable "total" is declared with the let keyword. The value "total" can be changed.


//* ****************************************************
/*  When to Use var, let, or const?

    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers.
*/
//* ****************************************************


//* ****************************************************
/*
    Note :
    You cannot re-declare a variable declared with let or const.

    This will not work:
    let carName = "Volvo";
    let carName;
*/
//* ****************************************************