const password = document.getElementById('password');


const backgroundImageContainer = document.querySelector('.background-image');


password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    // Clamp blur between 0 and 20
    const blurness = Math.max(0, Math.min(20, 20 - length * 2));

    backgroundImageContainer.style.filter = `blur(${blurness}px)`;
});
