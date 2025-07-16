const burgerBtn = document.querySelector('.burger-container');
const listNavBar = document.querySelector('.container');

burgerBtn.addEventListener('click', ()=>{
   listNavBar.classList.toggle('active')
   burgerBtn.classList.toggle('activebtn')
 
})