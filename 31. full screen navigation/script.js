const iconbtn = document.querySelector('.icon');


const listContainerShow = document.querySelector('.list-container');


iconbtn.addEventListener('click',()=>{
    listContainerShow.classList.toggle('active')
})