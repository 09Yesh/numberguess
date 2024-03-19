const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessField = document.getElementById('guessField');
const message = document.getElementById('message');

function checkGuess() {
  const userGuess = parseInt(guessField.value);
  
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
    message.style.color = 'green';
    guessField.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'red';
  }
}
