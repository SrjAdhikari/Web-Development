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
    console.log(userInfo["email"]);         // Output -> srj@gmail.com
    console.log(userInfo["full name"]);     // Output -> Suraj Adhikari