const showBtn = document.querySelector('.showBtn');

const showMoreText = document.querySelector('.show-text');


showBtn.addEventListener('click',()=>{
    showMoreText.classList.toggle('active')
})