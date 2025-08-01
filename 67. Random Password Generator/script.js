const copyBtn = document.querySelector('.copy');
const generateBtn = document.querySelector('.generate');

const password = document.querySelector('.password-generator');

console.log(password)



copyBtn.addEventListener('click', ()=>{

    // copy text using navigator to copy and give alert to the user if the text is copied;
    copyPassword()


    // this is must easy  just select the value of the password and give highlight the text copied;
    password.select()

  
});


generateBtn.addEventListener('click',()=>{


    let  randomPasswordGenerate = generatePassword()

    password.value = randomPasswordGenerate
} );



function generatePassword(){
       const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?';
        const length = 12;
        let generatePassword = ''

        for(let index = 0 ;index < length; index ++){
            const randomGenerate = Math.floor(Math.random()* chars.length);



            generatePassword += chars.substring(randomGenerate ,randomGenerate + 1)
        }

         return generatePassword ;

}



function copyPassword (){

    if(password.value!== ''){
        navigator.clipboard.writeText(password.value)
        .then(()=> alert('password copied to clipboard')).catch(()=> alert('faild to copy'))
    }
}

generatePassword()