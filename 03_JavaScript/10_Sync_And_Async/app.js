//* ****************************************************
//* Sync And Async
//* ****************************************************


//* ************* setTimeout() Method ******************
    //* The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

    //* Syntax : setTimeout(code), setTimeout(code, delay), setTimeout(functionRef), setTimeout(functionRef, delay), setTimeout(functionRef, delay, param1), setTimeout(functionRef, delay, param1, param2), setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)


//* ************* clearTimeout() Method ***************
    //* The global clearTimeout() method cancels a timeout previously established by calling setTimeout(). If the parameter provided does not identify a previously established action, this method does nothing.

    //* Synta : clearTimeout(timeoutID)
    
//* ****************************************************


    // This sets a timer that will execute the provided function after 2000 milliseconds (2 seconds).
    setTimeout(function(){
        // This logs the string "Suraj" to the console.
        console.log("Suraj");
    }, 2000);

    // This defines a function named sayMyName that logs "Suraj Adhikari" to the console.
    const sayMyName = function(){
        console.log("Suraj Adhikari");
    };

    // This sets a timer that will execute the sayMyName function after 2000 milliseconds (2 seconds).
    setTimeout(sayMyName, 2000);



    // Define a function named changeH1Text that changes the inner HTML of the first <h1> element on the page.
    const changeH1Text = function(){
        document.querySelector('h1').innerHTML = "Best JavaScript Series On You Tube";
    };

    // Uncommenting this line will set a timer to execute the changeH1Text function after 2000 milliseconds (2 seconds).
    // setTimeout(changeH1Text, 2000);

    // Set a timer to execute the changeH1Text function after 2 seconds and assign the timer ID to stopWhileClick.
    const stopWhileClick = setTimeout(changeH1Text, 2000);

    // Add an event listener to the element with the ID 'stop'.
    document.querySelector('#stop').addEventListener('click', function(){
        // Clear the timeout using the timer ID stored in stopWhileClick, preventing changeH1Text from executing if it hasn't already.
        clearTimeout(stopWhileClick);
        // Log 'STOPPED !!' to the console.
        console.log('STOPPED !!');
    });
