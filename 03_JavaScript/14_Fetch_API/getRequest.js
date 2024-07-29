//* ****************************************************
//* Fetch API In JavaScript
//* ****************************************************


//* Basic GET Request:

// URL of the API to fetch data from
const apiUrl = 'https://dummyjson.com/products';

// Perform a GET request to the API
fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {                                                 // Check if the response was successful (status code in the range 200-299)
            throw new Error(`HTTP error! Status: ${response.status}`);      // Throw an error if the response status is not successful
        }
        const data = response.json();           // Parse the JSON data from the response. This returns a promise that resolves with the parsed JSON data
        return data;                            // Return the parsed JSON data to the next .then() block
    })
    .then((data) => {
        console.log(`Data received:`, data);    // Log the data received from the API. Data is available here as a JavaScript object
    })
    .catch((error) => {                         // Handle any errors that occurred during the fetch or JSON parsing
        console.log(`Error: ${error}`);         // Log the error message
    });


//* Using Async/Await:

// Async function to fetch data from an API
const fetchData = async () => {

    const URL = 'https://dummyjson.com/users';      // URL of the API to fetch data from

    try {
        const response = await fetch(URL);          // Perform a GET request to the API and wait for the response

        if (!response.ok) {                         // Check if the response was successful (status code in the range 200-299)
            // Throw an error if the response status is not successful
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();         // Parse the JSON data from the response and wait for the parsing to complete
        console.log(`Data received:`, data);        // Log the data received from the API. Data is available here as a JavaScript object
    } 
    catch (error) {                                 // Handle any errors that occurred during the fetch or JSON parsing
        console.log(`Error: ${error}`);             // Log the error message
    }
};

// Call the fetchData function to execute the API request
fetchData();