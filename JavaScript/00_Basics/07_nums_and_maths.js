//* ****************************************************
//* Numbers And Maths In JavaScript
//* ****************************************************


//* ******************************** Numbers ******************************
    //* Numbers creation as primitives, from number literals
    const score = 500;

    //* Numbers creation as objects, using the Number() constructor:
    const balance = new Number(999);

    console.log(score);         // Output -> 500
    console.log(balance);       // Output -> [Number: 999]


//* ************************* Built-in Number Methods ***********************


    //* ****************************************************************************
    //* 1. The toString() method -> Returns a string representing this number value.
    //* Syntax -> toString(), toString(radix)

    // Convert the balance variable to a string and store the result in the changeToString variable
    const changeToString = balance.toString()

    console.log(changeToString);                // Output -> 999
    console.log(typeof changeToString);         // Output -> string

    // Convert the balance variable to a string, then get the length of the resulting string
    console.log(balance.toString().length);     // Output -> 3


    //* ****************************************************************************
    //* 2. The toFixed() method -> Formats the number using fixed-point notation
    //* Syntax -> toFixed(), toFixed(digits)

    const accBalance = new Number(1000);
    console.log(accBalance.toFixed(2));         // Output -> 1000.00

    const decimal = 23.4512;
    console.log(decimal.toFixed(2));            // Output -> 23.45


    //* ****************************************************************************
    //* 3. The toPrecision() method -> Returns a string representing this number to the specified precision.
    //* Syntax -> toPrecision(), toPrecision(precision)

    const decimalNum = 123.589;
    const decNum = 23.896;
    const floatNum = 1123.896;

    console.log(decimalNum.toPrecision(3));         // Output -> 124
    console.log(decNum.toPrecision(3));             // Output -> 23.9
    console.log(floatNum.toPrecision(3));           // Output -> 1.12e+3


    //* ****************************************************************************
    //* 4. The toLocaleString() method -> Returns a string with a language-sensitive representation of the number. 
    //* Syntax -> toLocaleString(), toLocaleString(locales), toLocaleString(locales, options)

    const money = 1000000;

    console.log(money.toLocaleString());                    // Output -> 1,000,000

    // India uses thousands/lakh/crore separators
    console.log(money.toLocaleString('en-IN'));            // Output -> 10,00,000

//* *******************************************************************************


//* ********************************** Maths ********************************
//* ************************* Built-in Maths Methods ***********************

    
    //* ****************************************************************************
    //* 1. The Math.abs() -> Returns the absolute value of a number.
    //* Syntax -> Math.abs(x)

    console.log(Math.abs(-1));           // Output -> 1
    console.log(Math.abs(-0));           // Output -> 0
    console.log(Math.abs(-Infinity));    // Infinity


    //* ****************************************************************************
    //* 2. The Math.round() -> Returns the value of a number rounded to the nearest integer.
    //* Syntax -> Math.round(x)

    console.log(Math.round(0.4));       // Output -> 0
    console.log(Math.round(0.7));       // Output -> 1

    console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));       // Output -> 6 6 5
    console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));    // Output -> -5 -5 -6


    //* ****************************************************************************
    //* 3. The Math.ceil() -> Always rounds up and returns the smallest integer greater than or equal to a given number.
    //* Syntax -> Math.ceil(x)

    console.log(Math.ceil(0.95));           // Output -> 1
    console.log(Math.ceil(4));              // Output -> 4
    console.log(Math.ceil(7.004));          // Output -> 8
    console.log(Math.ceil(-7.004));         // Output -> -7
    console.log(Math.ceil(4.2));            // Output -> 5

    //* ****************************************************************************
    //* 4. The Math.floor() -> Always rounds down and returns the largest integer less than or equal to a given number.
    //* Syntax -> Math.floor(x)

    console.log(Math.floor(3.95));          // Output -> 3
    console.log(Math.floor(5.05));          // Output -> 5
    console.log(Math.floor(4));             // Output -> 4
    console.log(Math.floor(-5.05));         // Output -> -6
    

    //* ****************************************************************************
    //* 5. The Math.sqrt() -> Returns the square root of a number.
    //* Syntax -> Math.sqrt(x)

    console.log(Math.sqrt(-1));             // Output -> NaN
    console.log(Math.sqrt(-0));             // Output -> -0
    console.log(Math.sqrt(0));              // Output -> 0
    console.log(Math.sqrt(1));              // Output -> 1
    console.log(Math.sqrt(2));              // Output -> 1.414213562373095
    console.log(Math.sqrt(9));              // Output -> 3


    //* ****************************************************************************
    //* 6. The Math.pow() -> Returns the value of a base raised to a power. 
    //* Syntax -> Math.pow(base, exponent)

    console.log(Math.pow(7, 3));            // Output -> 343
    console.log(Math.pow(4, 0.5));          // Output -> 2
    console.log(Math.pow(2, 3));            // Output -> 8
    console.log(Math.pow(-7, 2));           // Output -> 49 (squares are positive)
    console.log(Math.pow(-7, 3));           // Output -> -343 (cubes can be negative)


    //* ****************************************************************************
    //* 7. The Math.min() -> Returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
    //* Syntax -> Math.min(), Math.min(value1), Math.min(value1, value2), Math.min(value1, value2, /* …, */ valueN)

    console.log(Math.min(2, 3, 1));         // Output -> 1
    console.log(Math.min(-2, -3, -1));      // Output -> -3

    const array1 = [2, 3, 1];
    console.log(Math.min(...array1));       // Output -> 1
    console.log(Math.min(array1));          // Output -> NaN


    //* ****************************************************************************
    //* 8. The Math.max() -> Returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
    //* Syntax -> Math.max(), Math.max(value1), Math.max(value1, value2), Math.max(value1, value2, /* …, */ valueN)

    console.log(Math.max(2, 3, 1));         // Output -> 3
    console.log(Math.max(-2, -3, -1));      // Output -> -1

    const array = [2, 3, 1];
    console.log(Math.max(...array));       // Output -> 3
    console.log(Math.max(array));          // Output -> NaN


    //* ****************************************************************************
    //* 9. The Math.random() -> Returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.
    //* Syntax -> Math.random()

    console.log(Math.random());         // Expected Output -> A number from 0 to <1

    // Generate a random floating-point number between 0 (inclusive) and 10 (exclusive)
    console.log(Math.random() * 10);

    // Generate a random floating-point number between 1 (inclusive) and 11 (exclusive)
    console.log((Math.random() * 10) + 1);

    // Generate a random integer between 1 (inclusive) and 10 (inclusive)
    console.log(Math.floor(Math.random() * 10) + 1);

    const min = 10;
    const max = 20;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    // Generate a random integer between min (inclusive) and max (inclusive)
    // Math.random() * (max - min + 1) generates a floating-point number between 0 (inclusive) and (max - min + 1) (exclusive)
    // Math.floor rounds down the result to the nearest integer
    // Adding min shifts the range to be between min and max