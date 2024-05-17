//* ****************************************************
//* Datatypes Summary
//* ****************************************************

//* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//* 1. Primitive Datatype (Call by value).
    // String       -> Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".
    // Number       -> Represents both integer and floating-point numbers. Example: 5, 3.14.
    // Boolean      -> Represents a binary value, either true or false, often used for conditional logic.
    // Null         -> Standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 
    // Undefined    -> Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.
    // Symbol       -> It is mostly used to find uniqueness.
    // BigInt       -> Represents large integers that cannot be represented by the Number type.

    let userEmail = "suraj@gmail.com";
    let score = 10;
    let isLoggedIn = false;
    let temperature = null;
    let userPassword;  // value not defined yet so it is a undefined type.
    const userId = Symbol('123');
    let bigNumber = 13156534154n;

//* 2. Non-primitive Datatype (Call by reference).
    // Array        -> Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].
    // Objects      -> Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.
    // Functions    -> Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

    //* Array
    let numberArray = [10, 20, 30];
    let stringArray = ["Apple", "Banana", "orange"];

    //*  Object
    let myObj = {          // Store objects in a variable
        myName: "Suraj",
        age: 25,
        country: "nepal"
    }

    // {
    //     myName: "Suraj",
    //     myAge: 25,
    //     myCountry: "nepal"
    // }

    //* Function
    let myFunction = function(){       // Store function in a variable
        console.log("Hello World");
    }

    // addNumber(num1, num2){
    //     return num1 + num2;
    // }

    //* Function to know datatype of any value - > typeof
    console.log(typeof userEmail);      // Output -> string
    console.log(typeof temperature);    // Output -> object
    console.log(typeof myFunction);     // Output -> function
    console.log(typeof userPassword);   // Output -> undefined
    console.log(typeof userId);         // Output -> symbol
    console.log(typeof bigNumber);      // Output -> bigint
    console.log(typeof myObj);          // Output -> object