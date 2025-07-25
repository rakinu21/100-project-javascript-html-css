const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const listContainer = document.querySelector('.list-items-container');



window.addEventListener('scroll',fixscroll);


function fixscroll(){
    if(window.scrollY > header.offsetHeight + 150){
       header.classList.add('active')
       logo.classList.add('active')
       listContainer.classList.add('active')
    }else{
        header.classList.remove('active')
        logo.classList.remove('active')
       listContainer.classList.remove('active')
    }
}
