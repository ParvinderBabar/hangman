import wordBank from './word-bank.js';
// import prompt from "readline-sync";
// import wordBank from "./word-bank.js";
// console.log("this Work first word from wordBankis:", wordBank[0]);

// const letter = prompt.question("Please guess a letter:");
// console.log("Letter:", letter);
let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
    answer = wordBank[Math.floor(Math.random() * wordBank.length)];
 alert(answer);
    //  /console.log(wordBank[answer]);
}
   
function generateButton() {
    let buttonHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `<button class= "btn btn-lg btn-primary m-2"
        id=' ` + letter + ` 
        onClick="handleGuess('` + letter + `')">` +letter + `
            </button>`
    ).join('');
    document.getElementById('keyboard').innerHTML = buttonHTML;
}

function guessingWord() {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter)>=0?letter:" _ ")).join('');
       document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord(); 
generateButton();
guessingWord();