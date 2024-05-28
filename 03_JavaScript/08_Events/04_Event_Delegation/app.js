//* ****************************************************
//* Event Delegation
//* ****************************************************

//* It allows user to append a SINGLE event listener to a parent element that adds it to all of its parenr AND future descendants that match a selector.


// Select the element with the ID 'football' and add an event listener for 'click' events
document.querySelector('#football').addEventListener('click', function (event) {
    // Log a message to the console when 'football' is clicked
    console.log('Football is clicked');

    // Get the target of the event, which is the element that was clicked
    const target = event.target;

    // Check if the clicked element is an 'li' (list item)
    if (target.matches('li')) {
        // Change the background color of the clicked 'li' element to orange
        target.style.backgroundColor = 'black';
    }
});


// Select the element with the ID 'basketball' and add an event listener for 'click' events
document.querySelector('#basketball').addEventListener('click', function (event){
    console.log('Basketball is clicked');
    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black';
    }
})


// Select the element with the ID 'boxing' and add an event listener for 'click' events
document.querySelector('#boxing').addEventListener('click', function (event){
    console.log('Boxing is clicked');
    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black';
    }
})


// Select the element with the ID 'tennis' and add an event listener for 'click' events
document.querySelector('#tennis').addEventListener('click', function (event){
    console.log('Tennis is clicked');
    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black';
    }
})


// Select the element with the ID 'golf' and add an event listener for 'click' events
document.querySelector('#golf').addEventListener('click', function (event){
    console.log('Golf is clicked');
    const target = event.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'black';
    }
})


//* Instead of writing code for individual 'li' elements, we can write a single block of code for all 'li' elements

// Select the parent element with the ID 'sports' and add an event listener for 'click' events
document.querySelector('#sports').addEventListener('click', function (event) {

    // Log a message to the console showing the ID of the clicked element followed by 'is clicked.'
    console.log(event.target.getAttribute('id') + ' is clicked.');

    // Get the target of the event, which is the child element that was clicked
    const target = event.target;

    // Check if the clicked child element is an 'li' (list item)
    if (target.matches('li')) {
        // Change the background color of the clicked 'li' element to green
        target.style.backgroundColor = 'green';
    }
});


//* Code that dynamically creates and adds a new list item (<li>) with the text "rugby" and an ID of "rugby" to an existing list identified by the ID sports.

// Select the parent element with the ID 'sports'
const sports = document.querySelector('#sports');

// Create a new 'li' element
const newSport = document.createElement('li');

// Set the text content of the new 'li' element to 'rugby'
newSport.innerText = 'rugby';

// Set the 'id' attribute of the new 'li' element to 'rugby'
newSport.setAttribute('id', 'rugby');

// Append the new 'li' element as a child to the 'sports' element
sports.appendChild(newSport);