//* ****************************************************
//* Arrow Function In JavaScript
//* ****************************************************


//* ******************************** Syntax ******************************
    /*
        1. () => expression

        2. param => expression

        3. (param) => expression

        4. (param1, paramN) => expression

        5. () => {
                statements
            }

        6. param => {
                statements
            }

        7. (param1, paramN) => {
                statements
            }
    */
//* *************************************************************************


//* ******************************** Example ******************************
    // Create an arrow function
    const addTwoNum = (num1, num2) => {
        return num1 + num2;
    }

    // Function Call
    console.log(addTwoNum(5, 10));              // Output -> 15

//* *************************************************************************
    // Create an arrow function
    const addTwoNums = (num1, num2) => num1 + num2;
    
    // Function Call
    console.log(addTwoNums(10, 10));            // Output -> 20

//* *************************************************************************
    // Create an arrow function
    const addTwoNumbers = (num1, num2) => ( num1 + num2 );
    
    // Function Call
    console.log(addTwoNumbers(150, 110));       // Output -> 260

//* *************************************************************************
    // Create an arrow function that return an object
    const addTwoNumber = (num1, num2) => ({userName : "Suraj"});
    
    // Function Call
    console.log(addTwoNumber());                // Output -> { userName: 'Suraj' }

//* *************************************************************************


//* *************************************************************************
    // Traditional anonymous function
    (function (a) {
        return a + 100;
    });
    
    // 1. Remove the word "function" and place arrow between the argument and opening body brace
    (a) => {
        return a + 100;
    };
    

    // 2. Remove the body braces and word "return" — the return is implied.
    (a) => a + 100;
    

    // 3. Remove the parameter parentheses
    a => a + 100;
  

    // 4. Traditional anonymous function
    (function (a, b) {
        return a + b + 100;
    });
    

    // 5. Arrow function
    (a, b) => a + b + 100;
    
    const a = 4;
    const b = 2;
    

    // 6. Traditional anonymous function (no parameters)
    (function () {
        return a + b + 100;
    });
    
    
    // 7. Arrow function (no parameters)
    () => a + b + 100;
  