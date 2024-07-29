//* ****************************************************
//* Callback Hell In JavaScript
//* ****************************************************


//* ****************************************************
    //* Callback Hell -> The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed. Callback hell is also called the “pyramid of the doom”. 
//* ****************************************************


//* ****************************************************
//* Example of Callback Hell
//* ****************************************************

//* 1:
// Simulates getting beef asynchronously
const getBeef = (callback) => {
    setTimeout(() => {
        console.log(`Getting Beef...`);         // Log message indicating the start of getting beef
        callback(`beef`);                       // Call the callback with 'beef' after 2 seconds
    }, 2000);
};

// Simulates cooking beef asynchronously
const cookBeef = (beef, callback) => {
    setTimeout(() => {
        console.log(`Cooking Beef...`);         // Log message indicating the start of cooking beef
        callback(`Cooked Beef`);                // Call the callback with 'Cooked Beef' after 2 seconds
    }, 2000);
};

// Simulates getting buns asynchronously
const getBuns = (callback) => {
    setTimeout(() => {
        console.log(`Getting Buns...`);         // Log message indicating the start of getting buns
        callback(`Buns`);                       // Call the callback with 'Buns' after 2 seconds
    }, 2000);
};

// Simulates putting beef between buns asynchronously
const putBeefBetweenBuns = (buns, cookedBeef, callback) => {
    setTimeout(() => {
        console.log(`Making Burger...`);        // Log message indicating the start of making the burger
        callback(`Burger`);                     // Call the callback with 'Burger' after 2 seconds
    }, 2000);
};

// Function to make a burger using callbacks
const makeBurger = (nextStep) => {
    getBeef((beef) => {                         // Step 1: Get the beef
        cookBeef(beef, (cookedBeef) => {        // Step 2: Cook the beef once the beef is obtained
            getBuns((buns) => {                 // Step 3: Get buns once the beef is cooked
                // Step 4: Put the cooked beef between the buns once the buns are obtained
                putBeefBetweenBuns(buns, cookedBeef, (burger) => {
                    nextStep(burger);           // Step 5: // Once the burger is assembled, Call the nextStep callback with the final burger
                });
            });
        });
    });
};

// Call makeBurger and log the final result
makeBurger((burger) => console.log(`Burger is ready: ${burger}`));
//* Explanation of Callback Hell:

//* Callback Hell occurs when multiple asynchronous operations are nested inside each other, leading to deeply nested callback functions. This results in code that is harder to read and maintain. In this code, callback hell is formed as follows:

//* Each asynchronous function (getBeef, cookBeef, getBuns, putBeefBetweenBuns) calls its callback function after completing its task. This results in nested callbacks:

// getBeef((beef) => {
//     cookBeef(beef, (cookedBeef) => {
//         getBuns((buns) => {
//             putBeefBetweenBuns(buns, cookedBeef, (burger) => {
//                 nextStep(burger);
//             });
//         });
//     });
// });


//* 2:
// Simulated asynchronous function to get user data
function getUser(callback) {
    setTimeout(() => {
        console.log('User data fetched');                           // Log that user data is fetched
        callback({ id: 1, name: 'John Doe' });                      // Call the callback with user data
    }, 1000);                                                       // Simulate a delay of 1 second
}

// Simulated asynchronous function to get posts for a given user ID
function getPosts(userId, callback) {
    setTimeout(() => {
        console.log('Posts data fetched for user:', userId);        // Log that posts data is fetched for a user
        callback([{ postId: 101, title: 'My first post' }]);        // Call the callback with posts data
    }, 1000);                                                       // Simulate a delay of 1 second
}

// Simulated asynchronous function to get comments for a given post ID
function getComments(postId, callback) {
    setTimeout(() => {
        console.log('Comments data fetched for post:', postId);     // Log that comments data is fetched for a post
        callback([{ commentId: 201, text: 'Great post!' }]);        // Call the callback with comments data
    }, 1000);                                                       // Simulate a delay of 1 second
}

// Simulated asynchronous function to get details of the author of a given comment
function getCommentAuthor(commentId, callback) {
    setTimeout(() => {
        console.log('Comment author data fetched for comment:', commentId);     // Log that comment author data is fetched
        callback({ authorId: 5, name: 'Jane Doe' });                            // Call the callback with author data
    }, 1000);                                                                   // Simulate a delay of 1 second
}

// Using nested callbacks to perform the operations sequentially
// This is an example of callback hell due to deeply nested callbacks
getUser((user) => {                                                             // Step 1: Get user data
    getPosts(user.id, (posts) => {                                              // Step 2: Get posts for the fetched user
        getComments(posts[0].postId, (comments) => {                            // Step 3: Get comments for the first post
            getCommentAuthor(comments[0].commentId, (author) => {               // Step 4: Get author data for the first comment
                console.log('Final result:', author);                           // Log the final result (author data)
            });
        });
    });
});