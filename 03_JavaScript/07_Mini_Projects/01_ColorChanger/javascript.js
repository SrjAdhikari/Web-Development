// Select all the buttons and hold in a variable
const buttons = document.querySelectorAll('.button')

// Select body and hold in a variable
const body = document.querySelector('body')

// Foreach loop to traverse all the button
buttons.forEach(function(btn) {

    // Add an event listener to each button for the 'click' event
    btn.addEventListener('click', function(event) {

        // Store the ID of the clicked button, which represents the color
        const events = event.target.id;

        // Change the background color of the body based on the ID of the clicked button
        switch (events) {
            case 'grey':
                body.style.backgroundColor = events;
                break;
            case 'white':
                body.style.backgroundColor = events;
                break;
            case 'blue':
                body.style.backgroundColor = events;
                break;
            case 'yellow':
                body.style.backgroundColor = events;
                break;
            case 'black':
                body.style.backgroundColor = events;
                break;
            case 'orange':
                body.style.backgroundColor = events;
                break;
            case 'green':
                body.style.backgroundColor = events;
                break;
            case 'red':
                body.style.backgroundColor = events;
                break;
            default:
                // Do nothing if the button's ID does not match any case
                break;
        }

        // if(event.target.id === 'grey'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'white'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'blue'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'yellow'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'black'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'orange'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'green'){
        //     body.style.backgroundColor = event.target.id
        // }
        // if(event.target.id === 'red'){
        //     body.style.backgroundColor = event.target.id
        // }
    });
});