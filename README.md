## Hangman Game
Welcome to the Hangman Game project! This project was created for the CanCode Community as part of the JavaScript Fundamentals course. It's a simple yet engaging implementation of the classic Hangman game using HTML, CSS, and JavaScript.

## Overview
Hangman is a word-guessing game where players try to guess a hidden word letter by letter. With each incorrect guess, a part of a stick figure is drawn. The objective is to guess the word before the stick figure is fully drawn to win the game.
## Link
https://hangman-eight-theta.vercel.app/

## Project Structure
hangman/
|-- main.html
|-- hangman.css
|-- hangman.js
|-- words.js
|-- images/
    |-- hangman-0.png
    |-- hangman-1.png
    |-- ...
    |-- hangman-6.png

## Worked On
This project covered various fundamental concepts, including:

Variables and constants
Primitive data types (strings, numbers, booleans)
Control flow and conditionals (if statements)
Collections (arrays and objects)
Functions
DOM, Query Selector

## Technologies Used
Node.js
readlineSync library
HTML, CSS
Vanilla JavaScript

## In-Game Information
Players receive continuous updates during the game, including:

Correct letters guessed.
Positions of correctly guessed letters within the word.
Positions of unguessed letters within the word.
Number of remaining guesses.
Case Insensitivity
The game treats upper and lower case letters as the same, ensuring case-insensitive guesses.

Already Guessed Notification
Players are notified if they have already guessed a letter, preventing wasted guesses.

Game End Conditions
The game ends when either of the following conditions is met:

All letters in the word are correctly guessed.
Six incorrect guesses are made.
End-Game Information
After the game ends, players are informed about their win or loss. They also see the correct word that the computer picked, providing closure to the game experience.

## Setting Up to Play the Game
1.Clone this repository to your local machine: git clone <repo-url>

2.Navigate to the project directory:cd hangman

3.Open Visual Studio Code:In Visual Studio Code, open your terminal.

4.Install necessary Node modules:npm install --save readline-sync

5.To start the game, run:node .

6.To end the game, press ctrl + c.

## Acknowledgments
A big thank you to the wonderful instructors, Matina Patsos and Jamal Taylor, for their guidance and support in my continuous journey of upskilling in the world of technology!
