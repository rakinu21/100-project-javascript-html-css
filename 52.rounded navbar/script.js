const btn = document.querySelector('.btn');

const navBarShow = document.querySelector('.container-itemslist');



btn.addEventListener('click',()=>{

    btn.classList.toggle('active');
    navBarShow.classList.toggle('active')
})