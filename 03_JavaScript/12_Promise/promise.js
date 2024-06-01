//* ****************************************************
//* Promises In JavaScript
//* ****************************************************


//* ****************************************************
    //* The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

    //! A Promise is in one of these states :
    //* pending : initial state, neither fulfilled nor rejected.
    //* fulfilled : meaning that the operation was completed successfully.
    //* rejected : meaning that the operation failed.


//* **************** Create Promises ******************
    //? Method 1 :
    // Create a new promise named promiseOne.
    const promiseOne = new Promise(function(resolve, reject) {
        // Simulate an asynchronous task using setTimeout.
        // This could be a DB call, network request, or any other async operation.
        setTimeout(function() {
            // Log a message when the async task is complete.
            console.log('Async task is complete!');
            // Resolve the promise to indicate successful completion.
            resolve();
        }, 1000); // The async task completes after 1000 milliseconds (1 second).
    });

    // Consume the promise using the then method to handle the resolved state.
    promiseOne.then(function() {
        // Log a message when the promise is successfully resolved.
        console.log('Promise Consumed');
    });


    //? Method 2 :
    // Create a new promise.
    new Promise(function(resolve, reject) {
        // Simulate an asynchronous task using setTimeout.
        setTimeout(function() {
            // Log a message when the async task is complete.
            console.log('Async task 2 complete!');
            // Resolve the promise to indicate successful completion.
            resolve();
        }, 1000); // The async task completes after 1000 milliseconds (1 second).
    })
    // Consume the promise using the then method to handle the resolved state.
    .then(function() {    
        // Log a message when the promise is successfully resolved.
        console.log('Async task 2 resolved');
    });


    //? Method 3 :
    // Create a new promise named promiseThree.
    const promiseThree = new Promise(function(resolve, reject) {
        // Simulate an asynchronous task using setTimeout.
        setTimeout(function() {
            // Resolve the promise with an object containing user details.
            resolve({userName: "Suraj", email: "srj@gmail.com"});
        }, 1000); // The async task completes after 1000 milliseconds (1 second).
    });

    // Consume the promise using the then method to handle the resolved state.
    promiseThree
        .then(function(user) {
            // Log the user object when the promise is successfully resolved.
            console.log(user);
        });


    //? Method 4 :
    // Create a new promise named promiseFour.
    const promiseFour = new Promise(function(resolve, reject) {
        // Simulate an asynchronous task using setTimeout.
        setTimeout(function() {
            let error = false; // Simulate an error condition.
            if (!error) {
                // Resolve the promise with an object containing user details if no error.
                resolve({userName: 'Srj', password: '12345'});
            } else {
                // Reject the promise with an error message if there is an error.
                reject('ERROR: Something went wrong!');
            }
        }, 1000); // The async task completes after 1000 milliseconds (1 second).
    });

    // Consume the promise using the then method to handle the resolved state.
    promiseFour
        .then((user) => {
            // Log the user object when the promise is successfully resolved.
            console.log(user);
            // Return the userName for the next then method.
            return user.userName;
        })
        .then((userName) => {
            // Log the userName returned from the previous then method.
            console.log(userName);
        })
        .catch(function(error) {
            // Handle any error that occurs in the promise chain.
            console.log(error);
        })
        .finally(() => {
            // This will run regardless of the promise being resolved or rejected.
            console.log('The promise is either resolved or rejected!');
        });

    
    //? Method 5 :
    // Create a new promise named promiseFive.
    const promiseFive = new Promise(function(resolve, reject) {
        // Simulate an asynchronous task using setTimeout.
        setTimeout(function() {
            let error = true; // Simulate an error condition.
            if (!error) {
                // If there is no error, resolve the promise with an object containing user details.
                resolve({userName: 'JavaScript', password: '123456'});
            } else {
                // If there is an error, reject the promise with an error message.
                reject('ERROR: JS went wrong!');
            }
        }, 1000); // The async task completes after 1000 milliseconds (1 second).
    });

    // Define an async function to consume the promise.
    async function consumePromiseFive() {
        try {
            // Use await to wait for the promise to resolve or reject.
            const response = await promiseFive;
            // Log the response object if the promise is successfully resolved.
            console.log(response);
        } catch (error) {
            // Log the error message if the promise is rejected.
            console.log(error);
        }
    }
    // Call the async function to consume the promise.
    consumePromiseFive();


    // Define an async function to fetch and log all users.
    async function getAllUsers() {
        try {
            // Use fetch to make a network request to the specified URL.
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            // Parse the response JSON and wait for the parsing to complete.
            const data = await response.json();

            // Log the parsed data (array of users) to the console.
            console.log(data);
        } 
        catch (error) {
            // Log any errors that occur during the fetch or parsing process.
            console.log("Error : ", error);
        }
    }

    // Call the async function to fetch and log the users.
    getAllUsers();