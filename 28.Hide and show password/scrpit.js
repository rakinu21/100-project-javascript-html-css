const input = document.querySelector('.password');
const eye = document.querySelector('.eye-container');



eye.addEventListener('click',()=>{

   if(input.type === 'password'){
    // input.type = 'text'

    input.setAttribute('type', 'text')
   }else{
    // input.type='password'

    input.setAttribute('type','password')
   }
    // document.body

})