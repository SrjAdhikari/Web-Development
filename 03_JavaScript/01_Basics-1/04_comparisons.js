//* ****************************************************
//* Comparison In JavaScript
//* ****************************************************

console.log("2" > 1);       // Output -> true   -> It's not a good practice. Always ensure that both values are of the same datatype.
console.log("02" > 1);      // Output -> true   -> It's not a good practice. Always ensure that both values are of the same datatype.


console.log(null > 0);      // Output -> false      -> Avoid this type of comparison
console.log(null == 0);     // Output -> false      -> Avoid this type of comparison
console.log(null >= 0);     // Output -> true       -> Avoid this type of comparison

// The reason behind unpredictable result is that, an equality check == and >=, <= work differently in JS.
// Comparisons convert null to a number, treating it as 0. That's why (null >= 0) is true andd (null > 0) is false.


console.log(undefined > 0);     // Output -> false      -> Avoid this type of comparison
console.log(undefined == 0);    // Output -> false      -> Avoid this type of comparison
console.log(undefined >= 0);    // Output -> false      -> Avoid this type of comparison
console.log(undefined < 0);     // Output -> false      -> Avoid this type of comparison
console.log(undefined <= 0);    // Output -> false      -> Avoid this type of comparison


//* *************** Stict Comparision(===) ***************
    // === -> It not only compares the values but also compares their datatypes.
    // == -> It only compares the values.
     
    //* Normal comparision
    console.log("2" == 2);      // Output -> true

    //* Strict comparision
    console.log("2" === 2);     // Output -> false
