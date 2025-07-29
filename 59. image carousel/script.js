const overlay = document.querySelector('.background-overlay');
const buttons = document.querySelectorAll('.btn');

const imageData = [
    { image: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=800' },
    { image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800' },
    { image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800' },
    { image: 'https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=800' },
    { image: 'https://images.unsplash.com/photo-1683009427500-71296178737f?w=800' }
];

let currentIndex = 0;

function updateBackground() {
    // Start fade out
    overlay.style.opacity = 0;

    // After fade out, change image and fade in
    setTimeout(() => {
        overlay.style.backgroundImage = `url(${imageData[currentIndex].image})`;
        overlay.style.opacity = 1;
    }, 300); // should match or be less than CSS transition
}

// Initial image
updateBackground();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('nextbtn')) {
            currentIndex = (currentIndex + 1) % imageData.length;
        } else if (button.classList.contains('prevbtn')) {
            currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
        }
        updateBackground();
    });
});
