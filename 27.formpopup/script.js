const signUpBtn = document.querySelector('.Sign-Up');
const form = document.querySelector('.form-container');
const CloseBtn = document.querySelector('.closebtn');


signUpBtn.addEventListener('click',()=>{

    form.classList.add('active')
    console.log('clcik')
})

CloseBtn.addEventListener('click',()=>{
    form.classList.toggle('active')
})


