const navbar = document.querySelector('.navbar');

const buttonclose = document.querySelector('.buttonClose');

const button = document.querySelector('.button');


const formContainer = document.querySelector('.container-form')



button.addEventListener('click',()=>{
    button.classList.add('remove')
    buttonclose.classList.add('active');

    formContainer.classList.toggle('active')
    navbar.classList.toggle('active')
})

buttonclose.addEventListener('click',()=>{
     
   button.classList.remove('remove')
    buttonclose.classList.remove('active');
    formContainer.classList.toggle('active')
    navbar.classList.toggle('active')
})