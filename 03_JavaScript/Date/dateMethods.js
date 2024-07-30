//* ****************************************************
//* Date Methods In JavaScript
//* ****************************************************


//* *********************** Dates ***********************
const myDate = new Date();                          // Create a new Date object representing the current date and time
console.log(myDate);                                // Output -> The output will be current date and time
console.log(typeof myDate)                          // Output -> object


//* ********************* Date Methods ******************

console.log(myDate.getTime());                      // Output -> Logs the number of milliseconds since January 1, 1970, 00:00:00 UTC at the time of execution.
console.log(myDate.getFullYear());                  // Output -> 2024 (Returns the year of the specified date according to local time.)
console.log(myDate.getMonth());                     // Output -> 6 (Returns the month of the specified date according to local time. The returned value is zero-based.)
console.log(myDate.getDate());                      // Output -> 30 (Returns the day of the month for the specified date according to local time.)
console.log(myDate.getDay());                       // Output -> 2 (Returns the day of the week for the specified date, where 0 => Sunday, 1 => Monday, and so on.)
console.log(myDate.getHours());                     // Output -> 16 (Returns the hour for the specified date according to local time. The returned value is between 0 and 23)
console.log(myDate.getMinutes());                   // Output -> 28 (Returns an integer between 0 and 59 representing the minutes past the hour.)
console.log(myDate.getSeconds());                   // Output -> 46 (Returns an integer between 0 and 59 representing the seconds past the hour.)
console.log(myDate.getMilliseconds());              // Output -> 246 (Returns an integer between 0 and 999 representing the milliseconds past the second.)

//* ****************************************************

console.log(myDate.toLocaleString());               // Output -> 2024/7/30 16:28:46 (Provide a locale-sensitive string representation of the date and time.)
console.log(myDate.toLocaleDateString());           // Output -> 2024/7/30 (Provides a localized representation of just the date part of the `Date` object.)
console.log(myDate.toLocaleDateString('en-GB'));    // Output -> 30/07/2024 (Formats the date according to the British English locale (en-GB), DD/MM/YYYY format.)
console.log(myDate.toISOString());                  // Output -> 2024-07-30T07:43:22.663Z (Returns a string in ISO 8601 format, which looks like YYYY-MM-DDTHH:MM:SS.sssZ.)
console.log(myDate.toJSON());                       // Output -> 2024-07-30T07:43:22.663Z (Returns a string in the same ISO 8601 format as toISOString())
console.log(myDate.toString());                     // Output -> Tue Jul 30 2024 16:47:18 GMT+0900 (JST) (Returns the date and time in a human-readable format.)
console.log(typeof myDate.toString());              // Output -> string
console.log(myDate.toDateString());                 // Output -> Tue Jul 30 2024 (Return a string representation that includes only the date portion, excluding the time.)

//* ****************************************************

const user1DOB = "2000-06-25";
const user2DOB = "1996-10-20";

// Create Date objects from the provided date strings
const date1 = new Date(user1DOB);
const date2 = new Date(user2DOB);

console.log(`User1 DOB : ${date1}`);                // Output -> User1 DOB : Sun Jun 25 2000 00:00:00 GMT+0900 (Japan Standard Time)
console.log(`User2 DOB : ${date2}`);                // Output -> User2 DOB : Sun Oct 20 1996 00:00:00 GMT+0900 (Japan Standard Time)

console.log(`${date1.toLocaleDateString()}`);       // Output -> 6/25/2000
console.log(`${date2.toLocaleDateString()}`);       // Output -> 10/20/1996


// Create a Date object for January 5, 2024.
// Note: Months are zero-based (0 = January, 11 = December)
let newDate = new Date(2024, 0, 5);
console.log(newDate.toDateString());                // Output -> Fri Jan 05 2024

// Create a Date object for December 5, 2024.
// December is represented by 11
let newDate2 = new Date(2024, 11, 5);
console.log(newDate2.toDateString());               // Output -> Thu Dec 05 2024

// Create a Date object for January 12, 2024, 5:10 AM.
// Year, Month (0-based), Day, Hour, Minute
let newDate3 = new Date(2024, 0, 12, 5, 10);
console.log(newDate3.toLocaleString());             // Output -> 1/12/2024, 5:10:00 AM

// Create a Date object from a date string in ISO format (YYYY-MM-DD)
let newDate4 = new Date("2024-05-15");
console.log(newDate4.toLocaleString());             // Output -> 5/15/2024, 9:00:00 AM