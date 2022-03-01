// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game`);

// Game restarts as long as restartGame has a value of true
while (restartGame){
  rangeNum = prompt(`Please enter a maximum number for the range`);

  rangeNum = parseInt(rangeNum);

  while (!rangeNum || rangeNum < 1) {
    rangeNum = prompt(enterNumText)
    rangeNum = parseInt(rangeNum);
  }

  randomNum = Math.floor(Math.random() * rangeNum) + 1;

  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  while (!attempts || attempts < 1 || attempts >= rangeNum){
    attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum - 1}:`));
  }

  guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

  while (true){


    if (guess === `Mellon`) {
      alert(`The number is ${randomNum}`);
      guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);
    }

    guess = parseInt(guess);

    while (!guess || guess < 1 || guess > rangeNum){
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    // Removes an attempt
    attempts--;

    // Checks if user guessed correctly. If so, then the game ends.
    if (guess === randomNum){
      alert(`CONGRATULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;

    } else if (attempts === 0) {
      alert(`Sorry, but you have you run out of attempts :( The number was ${randomNum}`);
      break;

    } else if (guess < randomNum) {
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }

  }

  // Prompts user with option to play again
  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  // Loop continues until user submits a vaild response
  while (true){
    if (playAgain.toUpperCase() === `N`){
      alert(`Thanks for playing!`);
      restartGame = false;
      break;

    } else if (playAgain.toUpperCase() === `Y`) {
      break;

    } else {
      playAgain = prompt(`Please enter Y or N.`);
    }
  }
}