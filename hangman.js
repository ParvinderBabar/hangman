import wordBank from './word-bank.js';

let answer = '';
let maxWrong = 6;
// let maxImages = 6;
// let imagePath = '';
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let aplhabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let btnIcons = '';


alert("Let's start the hangman game");
function randomWord() {
answer = (wordBank[Math.floor(Math.random() * wordBank.length)]).toUpperCase();
console.log(answer);
}

function generateButton() {
   //generate alphabet buttons icons
    const keyboard = document.querySelector('#keyboard');
    aplhabets.split("").forEach((letter) => {
    const btnIcons = document.createElement('button')
    btnIcons.textContent = letter;
    keyboard.appendChild(btnIcons);
    
    //add event listener to perform action whenever button is clicked
    btnIcons.addEventListener('click', function () {
    handleGuess(letter);
    
    //once button clicked, created disable option so the 
    // player doesnt guess the same alphabet
    
    btnIcons.disabled = true;
    });
    
       
        });
    }

    function handleGuess(choosenLetter) {
     // check choosenLetter in guessed array ,if it's not present in the array then push it to guessed array. If it's already present, do noting
     guessed.indexOf(choosenLetter) === -1 ? guessed.push(choosenLetter) : null;
      
    
    //check conditions for choosen letter in the answer
        if (answer.indexOf(choosenLetter) >= 0) {
         document.querySelector('#wordSpotlight').innerText += choosenLetter;
    console.log(choosenLetter, " exist in the word");
    guessedWord();
    checkWin();

        }
    if (answer.indexOf(choosenLetter) === -1) {
    document.querySelector('#wrongWords').innerText += choosenLetter;
console.log(choosenLetter, " doesnt exist in the word");
        mistakes++;
       
            updateMistakes();
            checkLostStatus();
        }
    
}
function guessedWord() {
        wordStatus = answer.split('').map(letter =>
            (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        document.querySelector('#wordSpotlight').innerHTML = wordStatus;
        // console.log(`${guessed}`);
    }
function checkWin() {
    // Check if the player won
    if (wordStatus === answer) {
        console.log('Congratulations! You guessed the word: ' + answer);
        document.querySelector('#keyboard').innerHTML = 'YOU WON THE GAME';   
    }
}
    //check if player lost the game
function checkLostStatus() {
    if (mistakes === maxWrong) {
    console.log('Sorry,You lost the game. The correct word was:'  + answer);
    document.querySelector('#keyboard').innerHTML = ` Sorry, you ran out of guesses. The correct word was:  ${answer}`;
         }
}



document.getElementById('maxWrong').innerHTML = maxWrong;
let hangmanImage = document.querySelector('#hangmanImages');

// STILL WORKING ON IT
// function updateHangmanImages() {
   
//     let imageNumber = mistakes + 1;
//     hangmanImage.src = `C:\Users\ishme\development\hangman\images\`hangman_${imageNumber}.jpg`;
// }
// }
    function updateMistakes() {
        document.querySelector('#mistakes').innerHTML = mistakes;
        //  updateHangmanImages();
}

//once game finished,press reset button to start all over
 function reset()
 {
  
 mistakes = 0;
 guessed = [];
     wordStatus = null;
     // Enable all buttons
     document.querySelectorAll('#keyboard button').forEach(button => {
         button.disabled = false;
     });
      document.querySelector('#wrongWords').innerText = '';
    
      document.querySelector('#keyboard').innerText = "";
     
randomWord();
    generateButton();
     guessedWord(); 
     updateMistakes();

}
 document.addEventListener('DOMContentLoaded', function () {
               
                document.querySelector('#reset').onclick = reset;
            }
            ); 

 randomWord();// generate randdom word from wordBank 
    generateButton();
    guessedWord();  


  
    
   
   
