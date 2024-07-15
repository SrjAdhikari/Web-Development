//* ****************************************************
//* Objects In JavaScript
//* ****************************************************


//* ***************************** Object Creation ***************************
    //* Using the Object() constructor  =>  Singleton
    const obj = new Object();
    console.log(obj);           // Output -> {}

    // Initialize object
    obj.id = "123ABC";
    obj.name = "Suraj";
    obj.isLoggedIn = true;

    console.log(obj);           // Output -> { id: '123ABC', name: 'Suraj', isLoggedIn: true }


//* ************************* Nested object Creation ************************
    //* Example: 1
    const user = {
        email : "srj@gmail.com",
        fullName : {                        // "fullName" object inside the "user" object
                userFullName : {            // "userFullName" object inside the "fullName" object
                    firstName : "Suraj",
                    lastName : "Adhikari"
                }
        } 
    }

    console.log(user.fullName);                             // Output -> { userFullName: { firstName: 'Suraj', lastName: 'Adhikari' } }
    console.log(user.fullName.userFullName);                // Output -> { firstName: 'Suraj', lastName: 'Adhikari' }
    console.log(user.fullName.userFullName.firstName);      // Output -> Suraj
    console.log(user.fullName.userFullName.lastName);       // Output -> Adhikari

    
    //* Example: 2
    const userInfo = {
        firstName: 'Suraj',
        lastName: 'Adhikari',
        details: {
            age: 25,
            country: 'Nepal',
            state: 'KTM',
            moreDetails: {
                email: 'suraj123@gmail.com',
                gender: 'Male',
                DOB: 1999,
                hobbies: ['coding', 'reading', 'football']
            }
        }
    }

    //* 1. Access object Using Dot Notation
    console.log(userInfo.firstName);                                    // Output -> Suraj
    console.log(userInfo.details.country);                              // Output -> Nepal
    console.log(userInfo.details.state);                                // Output -> KTM
    console.log(userInfo.details.moreDetails.gender);                   // Output -> Male
    console.log(userInfo.details.moreDetails.hobbies[1]);               // Output -> reading
    console.log(userInfo.details.moreDetails.hobbies[2]);               // Output -> football


    //* 2. Access object Using Bracket Notation
    console.log(userInfo['lastName']);                                  // Output -> Adhikari
    console.log(userInfo['details']['age']);                            // Output -> 25
    console.log(userInfo['details']['country']);                        // Output -> Nepal
    console.log(userInfo['details']['moreDetails']['email']);           // Output -> suraj123@gmail.com
    console.log(userInfo['details']['moreDetails']['DOB']);             // Output -> 1999
    console.log(userInfo['details']['moreDetails']['hobbies'][0]);      // Output -> coding
    console.log(userInfo['details']['moreDetails']['hobbies'][2]);      // Output -> football


//* ***************************** Merge Object ***************************
    //* The Object.assign() method -> copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
    //* Syntax -> Object.assign(target), Object.assign(target, source1), Object.assign(target, source1, source2), Object.assign(target, source1, source2, /* …, */ sourceN)

    const obj1 = {1 : "A", 2 : "B", 3 :  "C"}
    const obj2 = {4 : "P", 5 : "Q", 6 :  "R"}

    const obj3 = Object.assign(obj1, obj2);         // Merging obj2 in obj1
    const obj4 = Object.assign({}, obj1, obj2);     // Merging obj2 in obj1   => Starting curly brackets {} ensure that the given output will be an object.
    console.log(obj3);          // Output -> { '1': 'A', '2': 'B', '3': 'C', '4': 'P', '5': 'Q', '6': 'R' }
    console.log(obj4);          // Output -> { '1': 'A', '2': 'B', '3': 'C', '4': 'P', '5': 'Q', '6': 'R' }


    //* ****************************************************************************                    
    //* Can merge object using Spread syntax(technique). This syntax is mostly used.
    //* Syntax -> [...obj1, ...obj, ...obj3, and so on ];
    //* **************************************************************************** 

    const obj5 = {...obj1, ...obj2};
    console.log(obj5);                  // Output -> { '1': 'A', '2': 'B', '3': 'C', '4': 'P', '5': 'Q', '6': 'R' }

//* ********************************************************************************


//* ************************* Access Keys & values of Object ************************
    const appUser = {
        id : 123,
        name : "Suraj",
        email :  "s@gmail.com",
    }

    console.log(appUser);                   // Output -> { id: 123, name: 'Suraj', email: 's@gmail.com' }  

    //* Access the all keys of "appUser" Object. It return an array as output
    console.log(Object.keys(appUser));      // Output -> [ 'id', 'name', 'email' ]

    //* Access the all values of "appUser" Object. It return an array as output
    console.log(Object.values(appUser));    // Output -> [ 123, 'Suraj', 's@gmail.com' ]
    

    //* ********************************************************************************
    //* Object.entries() method -> Returns an array of a given object's own enumerable string-keyed property key-value pairs.
    //* ********************************************************************************
    console.log(Object.entries(appUser));   // Output -> [ [ 'id', 123 ], [ 'name', 'Suraj' ], [ 'email', 's@gmail.com' ] ]


    //* ********************************************************************************
    //* hasOwnProperty() method -> Returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).
    //* ********************************************************************************
    console.log(appUser.hasOwnProperty('email'));       // Output -> true
    console.log(appUser.hasOwnProperty('age'));         // Output -> false