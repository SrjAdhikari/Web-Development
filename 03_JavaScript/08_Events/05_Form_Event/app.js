const username = document.querySelector("#name");
const paragraph = document.querySelector("p");

//* *********************** Input/Focus Event ***********************
//* The input event in JavaScript is triggered immediately as the user types, deletes, or modifies the content of an input, select, or textarea element.

username.addEventListener("input", (e) => {
    // console.log(e.target.value);
    paragraph.innerText = e.target.value;
});


//* *********************** Change/Blur Event **********************
//* The change event in JavaScript is an event that is triggered when the element loses focus.

username.addEventListener("change", (e) => {
    console.log(e.target.value);
    paragraph.innerText = e.target.value;
});


//* ************************* Submit Event *************************
//* The submit event fires when a <form> is submitted.

const form = document.querySelector("form");        // Select the form element

form.addEventListener("submit", (e) => {            // Add a submit event listener to the form
    e.preventDefault();                             // Prevent the default form submission behavior
    console.log("Form submitted!");  

    const myFormData = new FormData(form);          // Create a new FormData object from the form
    
    //* 1:
    for (const entry of myFormData.entries()) {     // Iterate over the form data entries and log them to the console
        console.log(entry);
        // console.log(`${entry[0]}`);
        // console.log(`${entry[1]}`);
    }

    //* 2:
    for (const [key, value] of myFormData.entries()) {
        console.log(`${key}: ${value}`);
    }
});