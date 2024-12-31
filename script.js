let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess(){
    const guess = parseInt(document.getElementById('guessField').value);
    guesses++;

    if(isNaN(guess)){
        document.getElementById('guessResult').innerHTML = "Please enter a valid number.";
    } else if (guess === randomNumber){
        document.getElementById('guessResult').innerHTML = `Congratulations! You guessed it in ${guesses} tries.`;
    }else if (guess > randomNumber){
        document.getElementById('guessResult').innertHtml = "Too High! Try again.";
    }else if (guess < randomNumber){
        document.getElementById('guessResult').innerHTML = "Too low! Try again.";
    }
}