// var wordChoice = [['a','n','g','o','l','a'], ['g','e','r','m','a','n','y'], ['m','i','c','o','n','e','s','i','a'], ['p','i','l','i','p','p','i','n','e','s'], ['u','z','b','e','k','i','s','t','a','n']];
//Word Choices angola, germany, micronesia, pilippines, uzbekistan

var wordChoice = ['angola', 'germany', 'micronesia', 'philippines', 'uzbekistan']
var wordChoiceText = "";
var wordChoiceUnderscore = [];
var guessesLeft = 10;

var playerGuessesText = document.getElementById('guesses-made');
var wordChosenText = document.getElementById('word-to-guess');
var guessesLeftText = document.getElementById('guesses-left');

guessesLeftText.textContent = guessesLeft;

function wordGenerator(){

    var gameWord = wordChoice[Math.floor(Math.random() * 5)];

    for(var i = 0; i < gameWord.length; i++){
        wordChoiceText += gameWord[i];
        console.log(wordChoiceText);
    }

    for(var i = 0; i < wordChoiceText.length; i++){
        wordChoiceUnderscore.push('_');
        console.log(wordChoiceUnderscore);
    }
    wordChosenText.textContent = wordChoiceUnderscore;

}

function resetGame(){

    wordChoiceText = '';
    wordChoiceUnderscore = [];
    wordChosenText.textContent = wordChoiceUnderscore;
    wordGenerator();
    playerGuess = '';
    playerGuessesText.textContent = playerGuess;
    guessesLeft = 10;
    guessesLeftText.textcontent = guessesLeft;
}

wordGenerator();


document.onkeyup = function(event) {

    var playerGuess = event.key;

    guessesLeft--;

    guessesLeftText.textContent = guessesLeft;

    playerGuessesText.textContent += playerGuess + ", "

    
    if(guessesLeft === 0){
        resetGame();
    }

}