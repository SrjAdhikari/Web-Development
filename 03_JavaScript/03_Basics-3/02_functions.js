//* ****************************************************
//* Functions In JavaScript Part - II
//* ****************************************************


//* ***************************** Rest Parameters ***************************
    //* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
    //* Syntax -> function f(a, b, ...theArgs) {  // … }

    function calculateCartPrice(...num){
        return num;
    }

    console.log(calculateCartPrice(200, 500, 100));     // Output -> [ 200, 500, 100 ]


    //* ********************************************************************************
    function calculateCartPrice1(value1, value2, ...num){
        console.log("value1 : ", value1);               // Output -> 100
        console.log("value2 : ", value2);               // Output -> 200
        return num;
    }

    console.log(calculateCartPrice1(100, 200, 500, 1000));     // Output -> [ 500, 1000 ]


    //* ********************************************************************************
    function calculateCartPrice2(value1, value2, ...num){
        return num;
    }

    console.log(calculateCartPrice2(10, 20, 50, 99));     // Output -> [ 50, 99 ]   => value1 & value2 hold the values 10 & 20, and the remaining data will be printed.


    //* ********************** Object handled using a function **************************
    // Create an object
    const user = {
        userName : "Suraj",
        age : 20
    }

    // Function Creation
    function handleObject(myObj){
        console.log(`Username is ${myObj.userName} and age is ${myObj.age}`);
    }

    // First create an object "user" and then pass it while calling a function.
    handleObject(user);                                 // Output -> Username is Suraj and age is 20

    // Directly passing an object while calling a function.
    handleObject({ userName : "Srj", age : 22});        // Output -> Username is Srj and age is 22


    //* ********************** Array handled using a function **************************
    // Create an array
    const array = [10, 20, 30, 40, 50];

    // Function Creation
    function getArrayValue(getValue){
        return getValue[2];                                 // Access array 2nd index value using function
    }

    // First create an array "array" and then pass it while calling a function.
    console.log(getArrayValue(array));                      // Output -> 30  =>  Array 2nd index value is 30

    // Directly passing an array while calling a function.
    console.log(getArrayValue([100, 200, 500, 300]));        // Output -> 500  =>  Array 2nd index value is 500