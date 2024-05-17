/*
    let score = 33;
    console.log(typeof score);
    console.log(typeof (score));
*/

//* ******************************************************************
    let value = "100";                          // String variable
    console.log(typeof value);                  // Output -> string

    let valueInNumber = Number(value);          // Conversation from string to number 
    console.log(typeof valueInNumber);          // Output -> number

//* ******************************************************************
    let stringValue = "100ABC";                 // String variable
    console.log(typeof stringValue);            // Output -> string

    let valueInNumber1 = Number(stringValue);   // Conversation from string to number 
    console.log(typeof valueInNumber1);         // Output -> number
    console.log(valueInNumber1);                // Output -> NaN

//* ******************************************************************
    let nullValue = null;                       // Null variable
    console.log(typeof nullValue);              // Output -> object

    let nullInNumber = Number(nullValue);       // Conversation from null to number 
    console.log(typeof nullInNumber);           // Output -> number
    console.log(nullInNumber);                  // Output -> 0

//* ******************************************************************
    let undefineValue = undefined;                  // Undefined variable
    console.log(typeof undefineValue);              // Output -> undefined

    let undefineInNumber = Number(undefineValue);   // Conversation from undefined to number 
    console.log(typeof undefineInNumber);           // Output -> number
    console.log(undefineInNumber);                  // Output -> NaN

//* ******************************************************************
    let isLoggedIn = true;                       // Boolean variable
    console.log(typeof isLoggedIn);              // Output -> boolean

    let booleanInNumber = Number(isLoggedIn);   // Conversation from boolean to number 
    console.log(typeof booleanInNumber);        // Output -> number
    console.log(booleanInNumber);               // Output -> 1

//* ******************************************************************
    let num = 55;                           // Number variable
    console.log(typeof num);                // Output -> number

    let numberInString = String(num);       // Conversation from number to string 
    console.log(typeof numberInString);     // Output -> string
    console.log(numberInString);            // Output -> 55