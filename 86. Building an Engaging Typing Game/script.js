// Word list
const words = [
    "javascript", "developer", "keyboard", "challenge", "function",
    "programming", "typing", "practice", "learning", "creative"
];

const mainDisplay = document.querySelector('.main');
const typingArea = document.querySelector('#typing-aria');
const startBtn = document.querySelector('.btn');

// Create score & time elements in DOM
const container = document.querySelector('.container');
const scoreTimeBar = document.createElement('div');
scoreTimeBar.className = 'score-time';
scoreTimeBar.innerHTML = `
    <div>Score: <span id="score">0</span></div>
    <div>Time: <span id="time">30</span>s</div>
`;
container.insertBefore(scoreTimeBar, mainDisplay);

let currentWord = "";
let score = 0;
let timeLeft = 30;
let timerInterval = null;

// Pick random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Start game
function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').textContent = score;
    document.getElementById('time').textContent = timeLeft;

    currentWord = getRandomWord();
    mainDisplay.textContent = currentWord;
    typingArea.value = "";
    typingArea.classList.remove("correct", "wrong");
    typingArea.disabled = false;
    typingArea.focus();

    clearInterval(timerInterval);
    timerInterval = setInterval(updateTime, 1000);
}

// Check typed text
function checkTyping() {
    const typedText = typingArea.value.trim();

    if (typedText === currentWord) {
        score++;
        document.getElementById('score').textContent = score;

        typingArea.classList.add("correct");
        typingArea.classList.remove("wrong");

        // Load next word
        setTimeout(() => {
            typingArea.classList.remove("correct");
            currentWord = getRandomWord();
            mainDisplay.textContent = currentWord;
            typingArea.value = "";
        }, 500);
    } else if (currentWord.startsWith(typedText)) {
        typingArea.classList.remove("wrong");
    } else {
        typingArea.classList.add("wrong");
    }
}

// Update time
function updateTime() {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
    }
}

// End game
function endGame() {
    mainDisplay.textContent = `⏱ Time's up! Final score: ${score}`;
    typingArea.disabled = true;
}

// Event listeners
startBtn.addEventListener('click', startGame);
typingArea.addEventListener('input', checkTyping);
