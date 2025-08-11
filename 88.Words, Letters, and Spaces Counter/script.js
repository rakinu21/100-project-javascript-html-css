const textInput = document.querySelector('.counter-input');
const wordCountEl = document.querySelector('.word-count');
const letterCountEl = document.querySelector('.letter-count');
const spaceCountEl = document.querySelector('.space-count');

function updateCounts() {
    const text = textInput.value;

    // Count words
    const words = text.trim().split(/\s+/).filter(Boolean);
    wordCountEl.textContent = words.length;

    // Count letters (excluding spaces)
    const letters = text.replace(/\s/g, '');
    letterCountEl.textContent = letters.length;

    // Count spaces
    const spaces = (text.match(/ /g) || []).length;
    spaceCountEl.textContent = spaces;
}

textInput.addEventListener('input', updateCounts);
