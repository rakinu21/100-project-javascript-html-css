let score = 0;
let timeLeft = 60;
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time-left");
const squares = document.querySelectorAll(".square");

let activeSquareId = null;
let gameInterval, countdownInterval;

// Randomly place emoji
function randomSquare() {
    squares.forEach(square => square.textContent = ""); // clear all
    let randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.textContent = "😃"; // emoji
    activeSquareId = randomSquare.id;
}

// Increase score on click
squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id === activeSquareId) {
            score++;
            scoreDisplay.textContent = score;
            activeSquareId = null; // prevent double score
        }
    });
});

// Countdown timer
function countdown() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        clearInterval(gameInterval);
        alert(`Time's up! Your final score is ${score}.`);
    }
}

// Start game
function startGame() {
    gameInterval = setInterval(randomSquare, 800);
    countdownInterval = setInterval(countdown, 1000);
}

startGame();
