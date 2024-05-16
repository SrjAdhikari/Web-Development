/*
    let score = 33;
    console.log(typeof score);
    console.log(typeof (score));
*/

//* ****************************************************
    let value = "100";          // String variable
    console.log(typeof value);  // Output -> string

    // Convert from string to number 
    let valueInNumber = Number(value);
    console.log(typeof valueInNumber);  // Output -> number

//* ****************************************************
    let stringValue = "100ABC";         // String variable
    console.log(typeof stringValue);    // Output -> string

    // Convert from string to number 
    let valueInNumber1 = Number(stringValue);
    console.log(typeof valueInNumber1);  // Output -> number
    console.log(valueInNumber1);         // Output -> NaN

//* ****************************************************
    let nullValue = null;
    console.log(typeof nullValue);    // Output -> object

    // Convert from string to number 
    let nullInNumber = Number(nullValue);
    console.log(typeof nullInNumber);   // Output -> number
    console.log(nullInNumber);          // Output -> 0

//* ****************************************************
    let undefineValue = undefined;
    console.log(typeof undefineValue);    // Output -> undefined

    // Convert from string to number 
    let undefineInNumber = Number(undefineValue);
    console.log(typeof undefineInNumber);   // Output -> number
    console.log(undefineInNumber);          // Output -> NaN