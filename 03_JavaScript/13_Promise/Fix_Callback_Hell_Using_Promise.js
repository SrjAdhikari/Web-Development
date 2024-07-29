//* ****************************************************
//* Fixing the callback hell issue from the previous folder, 12_Callback_Hell, example 1, by using Promises.
//* ****************************************************


// Returns a promise that resolves with 'Beef' after 2 seconds
const getBeef = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Getting Beef...`);     // Log message indicating the start of getting beef
            resolve(`Beef`);                    // Resolve the promise with 'Beef'
        }, 2000);
    });
};

// Returns a promise that resolves with 'Cooked Beef' after 2 seconds
const cookBeef = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Cooking Beef...`);     // Log message indicating the start of cooking beef
            resolve(`Cooked Beef`);             // Resolve the promise with 'Cooked Beef'
        }, 2000);
    });
};

// Returns a promise that resolves with 'Buns Ready' after 2 seconds
const getBuns = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Getting Buns...`);     // Log message indicating the start of getting buns
            resolve(`Buns Ready`);              // Resolve the promise with 'Buns Ready'
        }, 2000);
    });
};

// Returns a promise that resolves with 'Burger' after 2 seconds
const putBeefBetweenBuns = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Making Burger...`);    // Log message indicating the start of making the burger
            resolve(`Burger`);                  // Resolve the promise with 'Burger'
        }, 2000);
    });
};

// Function to make a burger using promise chaining
const makeBurger = () => {
    getBeef()                                                               // Start by getting the beef
        .then((beef) => cookBeef(beef))                                     // Once beef is obtained, cook it
        .then((cookedBeef) => getBuns())                                    // Once beef is cooked, get the buns
        .then((buns) => putBeefBetweenBuns(buns))                           // Once buns are obtained, put the beef between the buns
        .then((burger) => console.log(`Burger is ready : ${burger}`))       // Log the final burger when it’s ready
        .catch((error) => console.error(`Error : ${error}`));               // Handle any errors that occur during the process
};

// Call the function to start the burger-making process
makeBurger();