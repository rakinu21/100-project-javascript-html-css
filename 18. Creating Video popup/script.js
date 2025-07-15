const playButton = document.querySelector('.button');
const DeleteButton = document.querySelector('.delete')

const videoPopUp = document.querySelector('.video')



playButton.addEventListener('click',()=>{
  
    videoPopUp.classList.add('active')
    
})


DeleteButton.addEventListener('click',()=>{
    videoPopUp.classList.toggle('active')
})