const sliderRange = document.querySelectorAll('.range');
const colorr = document.querySelector('.colorr');
const outputContainer = document.querySelector('.output');
const btn = document.querySelector('.copy');

colorr.addEventListener('change', () => {
    createBox();
});

sliderRange.forEach((inputs) => {
    inputs.addEventListener('input', () => {
        createBox();
    });
});

btn.addEventListener('click', () => {
    outputContainer.select(); // Select the text
    document.execCommand('copy'); // Copy to clipboard
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = 'Copy'), 2000);
});

function createBox() {
    let x = sliderRange[0].value;
    let y = sliderRange[1].value;
    let blurradios = sliderRange[2].value;
    let spreadRadius = sliderRange[3].value;

    let shadowColor = colorr.value;
    let boxshadow = `${x}px ${y}px ${blurradios}px ${spreadRadius}px ${shadowColor}`;

    document.querySelector('.container-boxshadow').style.boxShadow = boxshadow;
    outputContainer.value = `box-shadow: ${boxshadow};`;
}
