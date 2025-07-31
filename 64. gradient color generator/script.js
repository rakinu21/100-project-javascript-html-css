const outputContainer = document.querySelector('.output-container');

const colorButton = document.querySelectorAll('.colorclass');


console.log(colorButton)

const btn = document.querySelector('.submit');

btn.addEventListener


colorButton.forEach((colorbtn , index)=> {

      outputContainer.style.background = `linear-gradient( ${colorButton[0].value} 43%, ${colorButton[1].value})`;
    colorbtn.addEventListener('change',()=>{
        const color1 = colorButton[0].value;
        const color2 = colorButton[1].value;
        outputContainer.style.background = `linear-gradient( ${color1} 43%, ${color2})`;
    })
});



// Random color generation
btn.addEventListener('click', () => {
    const randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    colorButton[0].value = randomColor1;
    colorButton[1].value = randomColor2;

    outputContainer.style.background = `linear-gradient(${randomColor1} 43%, ${randomColor2})`;
});




