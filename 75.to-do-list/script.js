// Select elements
const input = document.querySelector('.input');
const container = document.querySelector('.container-list');
const validateMsg = document.querySelector('.validate');

// Handle adding item
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const value = input.value.trim();

        if (value === '') {
            showValidateMessage('Please enter a valid item.', 'red');
            return;
        }

        // Create item element
        const inputOutput = document.createElement('div');
        inputOutput.className = 'output';
        inputOutput.innerHTML = `
            <input type="text" value="${value}" class="text-output" readonly>
            <div class="buttondelete">x</div>
        `;

        container.appendChild(inputOutput);
        input.value = ''; // Clear input
        showValidateMessage('Item added.', 'green');
    }
});

// Handle deleting item
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('buttondelete')) {
        e.target.parentElement.remove();
        showValidateMessage('Item deleted.', 'orange');
    }
});


// Utility function to show message then hide it
function showValidateMessage(message, color) {
    validateMsg.textContent = message;
    validateMsg.style.backgroundColor = color;
    validateMsg.classList.remove('active'); // Reset in case it was hidden

    // Force reflow to allow transition again
    void validateMsg.offsetWidth;

    // Delay fade-out by at least 1s
    setTimeout(() => {
        validateMsg.classList.add('active');
    }, 1000);
}
