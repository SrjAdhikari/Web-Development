//* ****************************************************
//* Immediately Invoked Function Expression (IIFE) In JavaScript
//* ****************************************************


//* ***************************** Defination ******************************
    //* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.


//* ******************************** Syntax ******************************
    /*
        (function () {
            statements
        })();


        (() => {
            statements
        })();


        (async () => {
            statements
        })();

    */
//* *************************************************************************


//* ******************************** Use Cases ******************************
    //* 1. Avoid polluting the global namespace. (IMP)
        // Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 

    //* 2. Execute an async function


//* ******************************** Example ******************************
    //* Named IIFE
    (function message(){
        console.log("Hello Everyone");          // Output -> Hello Everyone
    })(); //* <- Do not forgot this semicolon when you create another IIFE immediately after this IIFE (IMP)


    //* Simple / Unnamed IIFE
    ((name) => {
        console.log(`Hello ${name}`);           // Output -> Hello Suraj
    })(`Suraj`)

//* *************************************************************************