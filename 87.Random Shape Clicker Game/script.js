const output = document.querySelector('.output');

// Score & time tracking
let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

// Info bar
const infoBar = document.createElement('div');
infoBar.classList.add('info');
infoBar.textContent = `Score: ${score} | Time: ${timeLeft}s`;
output.appendChild(infoBar);

// Start game on load
startGame();

function startGame() {
    score = 0;
    timeLeft = 30;
    updateInfo();

    // Start timer
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateInfo();
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // First shape
    spawnShape();
}

function updateInfo() {
    infoBar.textContent = `Score: ${score} | Time: ${timeLeft}s`;
}

function spawnShape() {
    // Remove old shape
    const oldShape = document.querySelector('.shape');
    if (oldShape) oldShape.remove();

    // Create shape
    const shape = document.createElement('div');
    shape.classList.add('shape');

    // Random size
    const size = Math.floor(Math.random() * 50) + 30; // 30-80px
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;

    // Random color
    shape.style.background = getRandomColor();

    // Random circle or square
    shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

    // Random position inside output
    const maxX = output.clientWidth - size;
    const maxY = output.clientHeight - size;
    shape.style.left = `${Math.random() * maxX}px`;
    shape.style.top = `${Math.random() * maxY}px`;

    // Click event
    shape.addEventListener('click', () => {
        score++;
        updateInfo();
        spawnShape();
    });

    output.appendChild(shape);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function endGame() {
    clearInterval(timerInterval);
    const oldShape = document.querySelector('.shape');
    if (oldShape) oldShape.remove();
    alert(`⏱ Time's up! Final score: ${score}`);
}
