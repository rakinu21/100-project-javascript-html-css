let angle = 0;
const container = document.querySelector('.image-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.pre');

// Rotate to next image
nextBtn.addEventListener('click', () => {
    angle -= 45; // Adjust the rotation angle based on number of images
    container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});

// Rotate to previous image
prevBtn.addEventListener('click', () => {
    angle += 45;
    container.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
});
