// Select the form element
const form = document.querySelector('form')

// This line would result in getting an empty value because it's outside of the submit event
// const height  = parseInt(document.querySelector('#height').value)

// Add an event listener to the form to handle the submit event
form.addEventListener('submit', function(event) {

    // Prevent the default form submission behavior
    event.preventDefault()

    // Get the height value from the input field and convert it to an integer
    const height = parseInt(document.querySelector('#height').value)

    // Get the weight value from the input field and convert it to an integer
    const weight = parseInt(document.querySelector('#weight').value)

    // Select the element to display the BMI result
    const result = document.querySelector('#results')

    // Select the element to display the BMI message
    const message = document.querySelector('#message')

    // Check if the height is empty, negative, or not a number
    if (height == '' || height < 0 || isNaN(height)) {
        // Display an error message if the height is invalid
        result.innerHTML = "Please enter a valid height.";
    }

    // Check if the weight is empty, negative, or not a number
    else if (weight == '' || weight < 0 || isNaN(weight)) {
        // Display an error message if the weight is invalid
        result.innerHTML = "Please enter a valid weight.";
    }

    // If both height and weight are valid
    else {
        // Calculate the BMI and round it to two decimal places
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // Display the calculated BMI
        result.innerHTML = `<span>${bmi}</span>`;

        // Determine the BMI category and display an appropriate message
        if (bmi < 18.6) {
            message.innerHTML = "You are underweight.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            message.innerHTML = "You have a normal weight.";
        } else {
            message.innerHTML = "You are overweight.";
        }
    }
});
