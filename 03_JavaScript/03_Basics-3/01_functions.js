//* ****************************************************
//* Functions In JavaScript Part - I
//* ****************************************************


//* ***************************** Function Defination ***************************
    function sayMyName(){
        console.log("S");
        console.log("u");
        console.log("r");
        console.log("a");
        console.log("j");
    }

    sayMyName();    // -> Function Execution / Call
    sayMyName;      // -> Function Reference


//* ********************************************************************************
    function addition(num1, num2){
        console.log(num1 + num2);   // Print addition of two numbers
    }

    // Functino Call
    addition();                     // Output -> NaN -> Because arguments are not passed in function call
    addition(10, 30);               // Output -> 40
    addition(10, "30");             // Output -> 1030
    addition(10, "A");              // Output -> 10A
    addition(10, null);             // Output -> 10

    // Store the function in a variable
    const result = addition(10, 30);
    console.log("Result is : ", result);    // Output -> Result is :  undefined -> Because function does not return any thing


//* ********************************************************************************
    function product(num1, num2){
        return num1 * num2;
    }

    // Store the function in a variable
    const ans = product(10, 30);
    console.log("Result is : ", ans);       // Output -> Result is :  300

    const ans1 = product(10, "30");
    console.log("Result is : ", ans1);      // Output -> Result is :  300

    const ans2 = product("10", 30);
    console.log("Result is : ", ans2);      // Output -> Result is :  300


//* ********************************************************************************
    function logInMessage(userName){
        return `${userName} just logged in.`;
    }

    // Store the function in a variable
    let message = logInMessage("Suraj");
    console.log(message);                   // Output -> Suraj just logged in.

    console.log(logInMessage("Srj"));       // Output -> Srj just logged in.
    console.log(logInMessage(""));          // Output -> just logged in.
    console.log(logInMessage());            // Output -> undefined just logged in.


//* ********************************************************************************
    function logInMsg(userName){
        if(userName === undefined){
            console.log("Please enter your name");
            return;
        }
        return `${userName} just logged in.`;
    }

    console.log(logInMsg());                // Output -> Please enter your name, undefined


//* ********************************************************************************
    function logInMsg1(userName){
        if(!userName){                      // is equivalent to : (username === undefined)
            console.log("Please enter your name");
            return;
        }
        return `${userName} just logged in.`;
    }

    console.log(logInMsg1());               // Output -> Please enter your name, undefined


//* ********************************************************************************
    function logInMsg2(userName = "User"){      // Set default value of "userName", whenever user does not enter his/her name default value will be print
        if(!userName){                          // is equivalent to : (username === undefined)
            console.log("Please enter your name");
            return;
        }
        return `${userName} just logged in.`;
    }

    console.log(logInMsg2());                   // Output -> User just logged in. -> when user not provide name
    console.log(logInMsg2("Jesus"));            // Output -> Jesus just logged in. -> when user provide name
