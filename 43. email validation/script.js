const mainform = document.querySelector('.mainform');

 const email = document.querySelector('.inputBox');


email.addEventListener('keydown', validateEmail)



function validateEmail() {
  const emailValue = email.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

  if (emailValue.match(isValid)) {
    mainform.classList.add('valid');
    mainform.classList.remove('invalid');
  } else {
    mainform.classList.add('invalid');
    mainform.classList.remove('valid');
  }
}