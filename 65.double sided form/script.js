const loginbtn = document.querySelector('.loginbtn');

const loginform = document.querySelector('.login');


const registerForm = document.querySelector('.regester')
const signUp = document.querySelector('.sign-up')

loginbtn.addEventListener('click',()=>{
    loginform.classList.add('active')
    registerForm.classList.add('active')
    
})

signUp.addEventListener('click',()=>{
     loginform.classList.remove('active')
    registerForm.classList.remove('active')
})