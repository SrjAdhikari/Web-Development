//* ****************************************************
//* Strings In JavaScript
//* ****************************************************

// String decleration
const myName = "Suraj ";
const age = 25;

// console.log(myName + age);

//* Modern syntax to concatenate string -> String Interpolation
console.log(`My name is ${myName}and age is ${age}`);


//* Another way of string decleration
const firstName = new String('Suraj-srj');

//* InBuilt function of String
// Accessing 0th key of "firstName"
console.log(firstName[0]);  

// Accessing prototype of "firstName"
console.log(firstName.__proto__);   

// Length of string
console.log(firstName.length);   

console.log(firstName.toUpperCase());

// Find character at 2nd position
console.log(firstName.charAt(2));     

// Find the index of character 'r' in string
console.log(firstName.indexOf('r'));    

const newString = firstName.substring(0, 4);    // Extract substring from main string.
console.log(newString); // Print substring from 0->3rd index, 4th index is excluded.

const otherString = firstName.slice(-9, 3);
console.log(otherString);

const newString1 = "   Suraj.   ";
console.log(newString1);
// Remove the unnecessary space of string
console.log(newString1.trim());

const url = "https://suraj.com/suraj%50adhikari";
// Replace "%50" with "-"
console.log(url.replace('%50', '-'));

// Check whether "suraj" is present or not in url
console.log(url.includes('suraj'));

const nameString = "Suraj-Srj-Npl";
// Split string basis on '-'
console.log(nameString.split('-'));