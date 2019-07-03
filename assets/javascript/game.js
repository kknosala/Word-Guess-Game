var wordChoice = ['angola', 'germany', 'micronesia', 'philippines', 'uzbekistan'];
var playerLetters = "";
var guessesLeft = 10;

var playerGuessesText = document.getElementById('guesses-made');
var wordChosenText = document.getElementById('word-to-guess');
var guessesLeftText = document.getElementById('guesses-left');

guessesLeftText.textContent = guessesLeft;

document.onkeyup = function(event) {

    var playerGuess = event.key;

    guessesLeft--;

    guessesLeftText.textContent = guessesLeft;

    playerGuessesText.textContent += playerGuess + ", "
}