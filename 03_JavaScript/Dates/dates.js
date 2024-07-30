//* ****************************************************
//* Dates In JavaScript
//* ****************************************************


//* *********************** Dates ***********************
const myDate = new Date();          // Create a new Date object representing the current date and time
console.log(myDate);                // Output -> The output will be current date and time
console.log(typeof myDate)          // Output -> object


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