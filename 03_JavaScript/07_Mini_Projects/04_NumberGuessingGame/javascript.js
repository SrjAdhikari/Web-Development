// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select the necessary DOM elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Create a new paragraph element for the "Start new Game" button
const p = document.createElement('p');

// Initialize variables to store previous guesses and the number of guesses made
let prevGuess = [];
let numGuess = 1;

// Variable to keep track if the game is currently being played
let playGame = true;

// Add event listener to the submit button if the game is being played
if (playGame) {
  submit.addEventListener('click', function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Parse the user's guess from the input field
    const guess = parseInt(userInput.value);
    console.log(guess);
    
    // Validate the user's guess
    validateGuess(guess);
  });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        // Alert if the input is not a number
        alert('Please enter a valid number');
    } 
    else if (guess < 1) {
        // Alert if the input is less than 1
        alert('Please enter a number greater than 1');
    } 
    else if (guess > 100) {
        // Alert if the input is greater than 100
        alert('Please enter a number less than 100');
    } 
    else {
        // Store the guess in the prevGuess array
        prevGuess.push(guess);

        // Check if this is the 11th guess
        if (numGuess >= 10) {
            // Display the guess and end the game
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } 
        else {
            // Display the guess and check if it's correct
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Function to check the user's guess against the random number
function checkGuess(guess) {
  if (guess === randomNumber) {
    // Display success message and end the game if the guess is correct
    displayMessage(`You guessed it right`);
    endGame();
  } 
  else if (guess < randomNumber) {
    // Display message if the guess is too low
    displayMessage(`Number is TOO low`);
  } 
  else if (guess > randomNumber) {
    // Display message if the guess is too high
    displayMessage(`Number is TOO high`);
  }
}

// Function to display the user's guess
function displayGuess(guess) {
  // Clear the input field
  userInput.value = '';

  // Display the guess in the guessSlot element
  guessSlot.innerHTML += `${guess}, `;

  // Increment the number of guesses made
  numGuess++;
  
  // Update the remaining guesses
  remaining.innerHTML = `${11 - numGuess} `;
}

// Function to display a message
function displayMessage(message) {
  // Display the message in the lowOrHi element
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game
function endGame() {
  // Clear the input field and disable it
  userInput.value = '';
  userInput.setAttribute('disabled', 'true');

  // Add the "Start new Game" button
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);

  // Set playGame to false to prevent further guesses
  playGame = false;

  // Call the function to set up a new game
  newGame();
}

// Function to set up a new game
function newGame() {
    // Select the "Start new Game" button
    const newGameButton = document.querySelector('#newGame');

    // Add event listener to the "Start new Game" button
    newGameButton.addEventListener('click', function (e) {
        // Reset the random number
        randomNumber = parseInt(Math.random() * 100 + 1);
        
        // Reset previous guesses and number of guesses
        prevGuess = [];
        numGuess = 1;

        // Clear the guess slot and remaining guesses display
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;

        // Enable the input field
        userInput.removeAttribute('disabled');

        // Remove the "Start new Game" button
        startOver.removeChild(p);

        // Set playGame to true to start the new game
        playGame = true;
    });
}