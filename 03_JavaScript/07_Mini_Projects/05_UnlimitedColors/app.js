// Function to generate a random color in hexadecimal format.
const randomColor = function () {

    // Define the possible characters in a hexadecimal color.
    const hex = '0123456789ABCDEF';

    // Initialize the color string with a hash symbol.
    let color = '#';

    // Loop 6 times to generate the 6 hexadecimal digits.
    for (let i = 0; i < 6; i++) {
      // Append a random character from the hex string to the color string.
      color += hex[Math.floor(Math.random() * 16)];
    }

    // Return the generated color.
    return color;
  };

  
// Variable to store the interval ID.
let intervalId;
  
// Function to start changing the background color at regular intervals.
const startChangingColor = function () {

    // Only start the interval if it is not already running.
    if (!intervalId) {
        // Set an interval to call changeBgColor every 1000 milliseconds (1 second).
        intervalId = setInterval(changeBgColor, 1000);
    }
    

    // Function to change the background color to a random color.
    function changeBgColor() {
        // Set the background color of the document body to a random color.
        document.body.style.backgroundColor = randomColor();
    }
};

// Function to stop changing the background color.
const stopChangingColor = function () {

    // Clear the interval using the interval ID.
    clearInterval(intervalId);

    // Reset the interval ID to null.
    intervalId = null;
};
  
// Add a click event listener to the element with the ID 'start' to start changing the background color.
document.querySelector('#start').addEventListener('click', startChangingColor);
  
// Add a click event listener to the element with the ID 'stop' to stop changing the background color.
document.querySelector('#stop').addEventListener('click', stopChangingColor);