//* *******************************************************
//* Truthy And Falsy values
//* *******************************************************


//* *********************** Truthy ************************
    //* A truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except -> false, 0, -0, 0n, "", null, undefined, NaN

    //* Truthy Values : 
        // "0", "false", " " (Empty String), [] (Empty Array), {} (Empty Object), function(){} (Empty Function)
        // Values that are added to a string are considered truthy values.

//* *********************** Example ************************
    if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)

//* *******************************************************


//* *********************** Falsy **************************
    //* A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

    //* Falsy Values :
        // false, 0, -0, BigInt -> 0n, "", null, undefined, NaN
        // The values null and undefined are also nullish.
    
  
//* *********************** Example ************************
    if (false) {
        // Not reachable
    }
          
    if (null) {
        // Not reachable
    }
          
    if (undefined) {
        // Not reachable
    }
          
    if (0) {
        // Not reachable
    }
          
    if (-0) {
        // Not reachable
    }
          
    if (0n) {
        // Not reachable
    }
          
    if (NaN) {
        // Not reachable
    }
          
    if ("") {
        // Not reachable
    }

//* *******************************************************


//* *******************************************************
//* How to check if an array or an object is empty or not.
//* *******************************************************

// Create an empty array
const userEmail = [];

// Condition to check array is empty or not.
if(userEmail.length === 0){
    console.log(`Array is empty`);
}

//* *******************************************************

// Create an empty object
const obj = {}

// Condition to check array is empty or not.
if(Object.keys(obj).length === 0){  
    console.log(`Object is empty`);
}
//* (Object.keys(obj)) -> Return an array of keys, so if array length is equal to 0 means object is empty otherwise not empty.