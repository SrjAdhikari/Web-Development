//* ****************************************************
//* Event Listeners Part - II
//* ****************************************************


//* ***************** Reveal Event *********************
    // Select the element with the class 'reveal-btn' and store it in a variable named 'revealBtn'
    const revealBtn = document.querySelector('.reveal-btn');

    // Select the element with the class 'hidden-content' and store it in a variable named 'hiddenContent'
    const hiddenContent = document.querySelector('.hidden-content');

    // Define a function named 'revealContent' that toggles the visibility of the hidden content
    function revealContent() {
        // Check if 'hiddenContent' has the class 'reveal-btn'
        if (hiddenContent.classList.contains('reveal-btn')) {
            // If it does, remove the 'reveal-btn' class to hide the content
            hiddenContent.classList.remove('reveal-btn');
        } else {
            // If it doesn't, add the 'reveal-btn' class to reveal the content
            hiddenContent.classList.add('reveal-btn');
        }
    }

    // Add a click event listener to the 'revealBtn' button. When the button is clicked, the 'revealContent' function is called
    revealBtn.addEventListener("click", revealContent);