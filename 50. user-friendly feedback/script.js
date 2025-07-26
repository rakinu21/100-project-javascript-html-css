const choices = document.querySelectorAll('.choice');
const container = document.querySelector('.container-feedback'); // fixed typo
const btn = document.querySelector('.btnsubmit');

let selectedIndex = null;

// Attach click listeners ONCE
choices.forEach((choice, index) => {
    choice.addEventListener('click', () => {
        selectedIndex = index;

    });
});

// Button click event
btn.addEventListener('click', () => {
    if (selectedIndex === null) {
        alert("Please select an option before submitting!");
        return;
    }

    // Show feedback based on selected choice
    switch (selectedIndex) {
        case 0:
            container.innerHTML = `<h1>happy</h1>`;
            break;
        case 1:
            container.innerHTML = `<h1>heart</h1>`;
            break;
        case 2:
            container.innerHTML = `<h1>like</h1>`;
            break;
    }
});
