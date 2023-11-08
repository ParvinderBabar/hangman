import prompt from "readline-sync";
import wordBank from "./word-bank.js";
console.log("this Work first word from wordBankis:", wordBank[0]);

const letter = prompt.question("Please guess a letter:");
console.log("Letter:",letter);