document.addEventListener('DOMContentLoaded', () => {
    const spacingInput = document.querySelector('.scacing'); // You can rename to `.spacing` for clarity
    const blurInput = document.querySelector('.blur');
    const colorInput = document.querySelector('.colorInput');
    const imageContainer = document.querySelector('.image-container');

    function updateStyles() {
        const spacing = spacingInput.value + 'px';
        const blur = blurInput.value + 'px';
        const color = colorInput.value;

        imageContainer.style.padding = spacing;
        imageContainer.style.filter = `blur(${blur})`;
        imageContainer.style.backgroundColor = color;
    }

    spacingInput.addEventListener('input', updateStyles);
    blurInput.addEventListener('input', updateStyles);
    colorInput.addEventListener('input', updateStyles);

    updateStyles(); // Apply initial styles on load
});
