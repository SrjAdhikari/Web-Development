// Get the element with the ID 'clock'
const clock = document.getElementById('clock')

// Alternatively, you can use querySelector
// const clock = document.querySelector('#clock')

// Set an interval to update the clock every second (1000 milliseconds)
setInterval(function() {
    // Create a new Date object to get the current time
    let date = new Date();
    
    // Update the inner HTML of the clock element with the current time
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);