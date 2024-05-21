//* ****************************************************
//* Objects In JavaaScript
//* ****************************************************


//* ******************************** Defination ******************************
    //* TThe Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
//* *************************************************************************


//* ***************************** Object Creation ***************************
    //* 1. Using the Object() constructor
    // Singleton
    Object.create;

    //* 2. Object initializer / literal
    const user = {};
    const userInformation = {
        name : "Suraj",     // key : value pairs
        age : 25,           // key : value pairs
        country : "Nepal"   // key : value pairs
    }


//* ************************** Access Object ****************************
    // Create an object
    const userInfo = {
        name : "Suraj",
        "full name" : "Suraj Adhikari",
        age : 25,
        country : "Nepal",
        email : "srj@gmail.com",
        isLoggedIn : false,
        lastLogInDays : ["Sunday", "Friday"]
    }

    // Access object
    console.log(userInfo.email);            // Not a good practice -> Output -> srj@gmail.com  
    console.log(userInfo["email"]);         // Output -> srj@gmail.com -> Prefer this one
    console.log(userInfo["full name"]);     // Output -> Suraj Adhikari


//* **************** Add Symbol in object as keys and print ***************
    // Create symbol
    const mySymbol = Symbol("key1");
    const mySym = Symbol("key2");


    // Create an object
    const userInfo1 = {
        name : "Srj",
        "full name" : "Srj Adhikari",
        age : 20,
        country : "Japan",
        email : "srj11@gmail.com",
        isLoggedIn : false,
        lastLogInDays : ["Monday", "Sunday"],

        mySymbol : "mykey1",     // Not a correct syntax to add symbol in object as a key.
        [mySym] :  "mykey2"     // Correct syntax to add symbol in object as a key. Use Square brackets []. -> Imp for interview
    }

    console.log(userInfo1.mySymbol);            // Output -> mykey1
    console.log(typeof userInfo1.mySymbol);     // Output -> string -> Not an object

    console.log(userInfo1[mySym]);              // Output -> mykey1

    // Change email from object / overwrite email
    userInfo1.email = "suraj11@gmail.com";

    console.log(userInfo1.email);               // Output -> suraj11@gmail.com


    //* ****************************************************************************
    //* The Object.freeze() method -> Freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
    //* Syntax -> Object.freeze(obj)

    userInfo1. email = "srj1234@gmail.com";

    //Object.freeze(userInfo1);
    userInfo1.email = "srj111@gmail.com";

    console.log(userInfo1);
    console.log(userInfo1.email);       // Output -> suraj1234@gmail.com  => email is not overwritten from suraj1234@gmail.com to srj111@gmail.com
    //* ****************************************************************************


    // Add function in object
    userInfo1.greeting = function(){
        console.log("Hello user");
    }

    userInfo1.greeting1 = function(){
        console.log(`Hello, ${this.name}`);
    }

    console.log(userInfo1.greeting);        // Output -> [Function (anonymous)] => Reference of function
    console.log(userInfo1.greeting());      // Output -> Hello user
    console.log(userInfo1.greeting1());      // Output -> Hello, Srj