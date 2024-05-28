//* ****************************************************
//* Styling Elements
//* ****************************************************

// Select the <h1> element with the ID 'main-heading' and store it in a variable named 'title'
const title = document.querySelector('#main-heading');

// Change the color of the 'title' element to green
title.style.color = 'green';

// Select all elements with the class 'list-items' and store them in a variable named 'listItems'
// This creates a NodeList, which is similar to an array
const listItems = document.querySelectorAll('.list-items');

// Use a loop to go through each item in the 'listItems' NodeList
for(let i = 0; i < listItems.length; i++) {
    // For each list item, change the font size to 2rem
    listItems[i].style.fontSize = '2rem';
}



//* ****************************************************
//* Creating Elements
//* ****************************************************

// Select the first <ul> element on the page and store it in a variable named 'ul'
const ul = document.querySelector('ul');

// Create a new <li> element and store it in a variable named 'li'
const li = document.createElement('li');

// Adding the new <li> element to the <ul> element
ul.append(li);

//* Modifying the text of an element

// Select the first element with the class 'list-items' and store it in a variable named 'firstListItem'
const firstListItem = document.querySelector('.list-items');

// Print the inner text, text content, and HTML content of 'firstListItem' to the console
console.log(firstListItem.innerText);   // Gets the visible text content
console.log(firstListItem.textContent); // Gets the full text content, including hidden text
console.log(firstListItem.innerHTML);   // Gets the HTML content inside the element

// Set the inner text of the newly created <li> element to 'X-Man'
li.innerText = 'X-Man';


//* Modifying attributes and classes

// Set the 'id' attribute of the <li> element to 'list-item'
li.setAttribute('id', 'list-item');

// Remove the 'id' attribute from the <li> element
li.removeAttribute('id');

// Select the element with the ID 'main-heading' and store it in a variable named 'titles'
const titles = document.querySelector('#main-heading');

// Print the 'id' attribute value of the 'titles' element to the console
console.log(title.getAttribute('id'));

// Add the class 'list-items' to the <li> element
li.classList.add('list-items');

// Check if the <li> element has the class 'list-items' and print the result (true/false) to the console
console.log(li.classList.contains('list-items'));

// Remove the class 'list-items' from the <li> element
li.classList.remove('list-items');

// Check again if the <li> element has the class 'list-items' and print the result (true/false) to the console
console.log(li.classList.contains('list-items'));


//* Remove Elements

// Remove the <li> element from the document
li.remove();


