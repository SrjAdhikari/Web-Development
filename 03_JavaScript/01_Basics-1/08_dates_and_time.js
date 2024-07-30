//* ****************************************************
//* Date And Time In JavaScript
//* ****************************************************


//* ******************************** Dates ******************************
    //* Date creation as objects, using the Date() constructor.
    const currDate = new Date();

    console.log(typeof currDate);                   // Output -> object
    console.log(currDate);                          // Output -> 2024-05-18T14:17:49.169Z
    console.log(currDate.toString());               // Output -> Sat May 18 2024 23:17:49 GMT+0900 (JST)
    console.log(currDate.toDateString());           // Output -> Sat May 18 2024
    console.log(currDate.toISOString());            // Output -> 2024-05-18T14:17:49.169Z
    console.log(currDate.toJSON());                 // Output -> 2024-05-18T14:17:49.169Z
    console.log(currDate.toLocaleDateString());     // Output -> 5/18/2024
    console.log(currDate.toLocaleString());         // Output -> 5/18/2024, 11:17:49 PM
    console.log(currDate.toLocaleTimeString());     // Output -> 11:17:49 PM
    console.log(currDate.toTimeString());           // Output -> 23:17:49 GMT+0900 (Japan Standard Time)

    //* ****************************************************************************
    //* Month start from 0 in JS ===> 0 => Jan, 1 => Feb, ......., 11 => Dec
    //* Day also start from 0 in JS ===> 0 => Sunday, 1 => Monday, and so on.
    //* ****************************************************************************

    let newDate = new Date(2024, 0, 5);
    console.log(newDate.toDateString());            // Output -> Fri Jan 05 2024

    let newDate2 = new Date(2024, 11, 5);
    console.log(newDate2.toDateString());           // Output -> Thu Dec 05 2024

    let newDate3 = new Date(2024, 0, 12, 5, 10);
    console.log(newDate2.toLocaleString());         // Output -> 12/5/2024, 12:00:00 AM

    let newDate4 = new Date("2024-05-15");
    console.log(newDate4.toLocaleString());         // Output -> 5/15/2024, 9:00:00 AM (yyyy-mm-dd)

    
    //* ****************************************************************************

    // Date.now() -> Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
    let timeStamp = Date.now();
    console.log(timeStamp);             // Output -> 1716043058979 (Time in milisecond from 1970 to now)

    //* ****************************************************************************


    //* ****************************************************************************
    //* Day also start from 0 in JS ===> 0 => Sunday, 1 => Monday, and so on.
    //* ****************************************************************************

    let currTime = new Date();

    console.log(currTime);                          // Output -> 2024-05-18T14:45:34.621Z
    console.log(currTime.getDate());                // Output -> 18
    console.log(currTime.getDay());                 // Output -> 6
    console.log(currTime.getFullYear());            // Output -> 2024,
    console.log(currTime.getHours());               // Output -> 23
    console.log(currTime.getMonth());               // Output -> 4
    console.log(currTime.getSeconds());             // Output -> 34
    console.log(currTime.getTime());                // Output -> 1716044458644 (In milisecond)
    console.log(currTime.getTimezoneOffset());      // Output -> -540
    

    //* Get the number of seconds since the ECMAScript Epoch (1970)
    const seconds = Math.floor(Date.now() / 1000);
    console.log(seconds);                           // Output ->1716044458