
const body = document.querySelector('body');

const btnColor = document.querySelectorAll('.btncolor');


btnColor.forEach((button) =>{
    button.addEventListener('click',()=>{
        body.style.background = button.value;
    })
})