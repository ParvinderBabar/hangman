
import prompt from "readline-sync";
import wordBank from "./word-bank.js";


    
// console.log("this Work first word from wordBankis:", wordBank[1]);

// const letter = prompt.question("Please guess a letter:");
// console.log("Letter:", letter);

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessWords = [];
let wordStatus = null;

function randomWord() {
    answer = Math.floor(Math.random() * wordBank.length);
     console.log(wordBank[answer]);
}
   

randomWord(); 