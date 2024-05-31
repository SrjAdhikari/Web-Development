//* ****************************************************
//* Set And Clear Interval Function
//* ****************************************************


//* ************* setInterval() Method *****************
    //* The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

    //* Syntax : setInterval(code), setInterval(code, delay), setInterval(func), setInterval(func, delay),setInterval(func, delay, arg1), setInterval(func, delay, arg1, arg2), setInterval(func, delay, arg1, arg2, /* …, */ argN)


//* ************* clearInterval() Method **************
    //* The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.

    //* Synta : clearInterval(intervalID)
    
//* ***************************************************

    // Set an interval to repeatedly execute the provided anonymous function every 1000 milliseconds (1 second).
    setInterval(function(){
        // Log the string 'Suraj' and the current timestamp to the console. The comma operator in the console log will effectively ignore 'Suraj'.
        console.log(('Suraj', Date.now()));
    }, 1000); // Adding 1000 to indicate the interval timing

    // Define a function named sayHiWithDate that takes a string argument and logs it with the current timestamp.
    const sayHiWithDate = function(str){
        console.log(str, Date.now());
    };

    // Uncommenting this line will set an interval to execute the sayHiWithDate function every 1000 milliseconds (1 second) with 'Hi' as an argument.
    // setInterval(sayHiWithDate, 1000, 'Hi');

    
    // Set an interval to execute the sayHiWithDate function every 1000 milliseconds (1 second) with 'Hi' as an argument.
    // Store the interval ID in the variable intervalId.
    const intervalId = setInterval(sayHiWithDate, 1000, 'Hi');

    // Clear the interval immediately, preventing sayHiWithDate from being called after the first execution.
    clearInterval(intervalId);
