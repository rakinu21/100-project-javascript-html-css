



const rangeInput = document.getElementById('range');
const rangeContent = document.querySelector('.range-content');

function updateRangeDisplay() {
    const value = rangeInput.value;
    rangeContent.textContent = value;

    // Position the range content above the thumb
    const rangeWidth = rangeInput.offsetWidth;
    const min = parseInt(rangeInput.min);
    const max = parseInt(rangeInput.max);

    const percent = (value - min) / (max - min);
    const offset = rangeWidth * percent;

    rangeContent.style.left = `${offset}px`;
}

// Initial update
updateRangeDisplay();

// Update on input
rangeInput.addEventListener('input', updateRangeDisplay);
