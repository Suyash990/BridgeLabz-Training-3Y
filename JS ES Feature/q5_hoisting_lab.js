"use strict";

// Function Declaration
var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();


// Arrow Function Version
const announceArrow = () => {
    console.log("Game started");
};

const startGameArrow = () => {
    console.log(status);
};

console.log(score);
announceArrow();
startGameArrow();