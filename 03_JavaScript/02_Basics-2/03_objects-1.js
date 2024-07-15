//* ****************************************************
//* Objects In JavaScript
//* ****************************************************


//* ******************************** Defination ******************************
    //* The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

    //* Structure:
        //* 1. An object consists of key-value pairs.
        //* 2. Keys are unique identifiers used to access the corresponding values. Keys can be strings or symbols (rarely numbers, though technically possible).
        //* 3. Values can be any valid JavaScript data type like strings, numbers, booleans, arrays, or even other objects (nested objects).
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

    console.log(userInfo);      // Output -> { name: 'Suraj', 'full name': 'Suraj Adhikari', age: 25, country: 'Nepal', email: 'srj@gmail.com', isLoggedIn: false, lastLogInDays: [ 'Sunday', 'Friday' ] }

    //* 1. Access object Using Dot Notation
    console.log(userInfo.email);                // Not a good practice -> Output -> srj@gmail.com  
    console.log(userInfo.country);              // Output -> Nepal
    console.log(userInfo.isLoggedIn);           // Output -> Flase
    console.log(userInfo.lastLogInDays[0]);     // Output -> Sunday

    //* 2. Access object Using Bracket Notation
    console.log(userInfo["email"]);             // Output -> srj@gmail.com -> Prefer this one
    console.log(userInfo["full name"]);         // Output -> Suraj Adhikari
    console.log(userInfo['country']);           // Output -> Nepal
    console.log(userInfo['lastLogInDays'][1]);  // Output -> Friday


//* ************************** Update Object ****************************
    //* 1. Adding items in object
    userInfo.hobby = 'Coding';
    userInfo.favColor = 'black';        // Adding item using dot notation
    userInfo['state'] = 'Pokhara';      // Adding item using bracket notation

    console.log(userInfo);              // Output -> { name: 'Suraj', 'full name': 'Suraj Adhikari', age: 25,country: 'Nepal', email: 'srj@gmail.com', isLoggedIn: false, lastLogInDays: [ 'Sunday', 'Friday' ],hobby: 'Coding', favColor: 'black', state: 'Pokhara' }

    //* 2. Removing / Deleting items from objects
    delete userInfo.age;
    delete userInfo.country;            // Deleting item using dot notation
    delete userInfo['email'];           // Deleting item using bracket notation

    console.log(userInfo);              // Output -> { name: 'Suraj', 'full name': 'Suraj Adhikari', isLoggedIn: false, lastLogInDays: [ 'Sunday', 'Friday' ], hobby: 'Coding', favColor: 'black', state: 'Pokhara' }

    
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

    //* Characteristics:
    //* No Addition: You cannot add new properties.
    //* No Deletion: You cannot remove existing properties.
    //* No Modification: You cannot change the values of existing properties.
    //* No Reconfiguration: You cannot change the property descriptors (e.g., writable, configurable).


    //* Example: 1
    const userInfo2 = {
        name : "Srj",
        "full name" : "Srj Adhikari",
        age : 20,
        country : "Japan",
        email : "srj11@gmail.com",
        isLoggedIn : false,
        lastLogInDays : ["Monday", "Sunday"]
    }

    userInfo1. email = "srj1234@gmail.com";     // Update email address

    Object.freeze(userInfo1);                   // Freeze the userInfo1 object
    userInfo1.email = "srj111@gmail.com";       // Trying to update email after freeze the object -> This will not work, can't update email

    console.log(userInfo1);
    console.log(userInfo1.email);       // Output -> suraj1234@gmail.com  => email is not overwritten from suraj1234@gmail.com to srj111@gmail.com


    //* Example: 2
    let person = {
        firstName: "John",
        lastName: "Doe"
    };
    
    Object.freeze(person);          // Freeze the person object
    
    person.firstName = "Jane";      // This will not work
    delete person.lastName;         // This will not work
    person.age = 30;                // This will not work
    
    console.log(person);            // Output: { firstName: "John", lastName: "Doe" }


    //* Example: 3
    let book = {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        year: 2008
    };
    
    Object.freeze(book);        // Freeze the book object
    
    // Trying to modify the properties
    book.title = "JavaScript: The Better Parts";    // This will not work
    book.year = 2021;                               // This will not work
    
    // Trying to add new properties
    book.publisher = "O'Reilly Media";              // This will not work
    
    // Trying to delete properties
    delete book.author;                             // This will not work
    
    console.log(book);      // Output: { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 }
    
    // Checking if the object is frozen
    console.log(Object.isFrozen(book));     // true
    console.log(Object.isSealed(book));     // true (a frozen object is also sealed)
    
    //* ****************************************************************************


    //* ****************************************************************************
    //* The Object.seal() method -> Seals an object. Preventing new properties from being added and marking all existing properties as non-configurable. However, unlike Object.freeze(), it still allows modifying the values of existing properties.
    //* Syntax -> Object.seal(obj)

    //* Characteristics:
    //* No Addition: You cannot add new properties.
    //* No Deletion: You cannot remove existing properties.
    //* Modification Allowed: You can change the values of existing properties.
    //* No Reconfiguration: You cannot change the property descriptors (e.g., writable, configurable).


    //* Example: 1
    let car = {
        brand: "Toyota",
        model: "Camry"
    };
    
    Object.seal(car);       // Seal the book object
    
    car.brand = "Honda";    // This will work
    delete car.model;       // This will not work
    car.year = 2020;        // This will not work
    
    console.log(car);       // Output: { brand: "Honda", model: "Camry" }
    

    //* Example: 2
    let car1 = {
        make: "Toyota",
        model: "Corolla",
        year: 2020
    };
    
    Object.seal(car1);           // Seal the car1 object
    
    // Modifying existing properties
    car1.year = 2021;            // This will work
    
    // Trying to add new properties
    car1.color = "blue";         // This will not work
    
    // Trying to delete properties
    delete car1.model;           // This will not work
    
    console.log(car1);           // Output: { make: "Toyota", model: "Corolla", year: 2021 }
    
    // Checking if the object is sealed
    console.log(Object.isSealed(car1));     // true
    console.log(Object.isFrozen(car1));     // false
    
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
    console.log(userInfo1.greeting1());     // Output -> Hello, Srj