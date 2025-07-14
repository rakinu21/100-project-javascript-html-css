
let heart = document.querySelector('.active_heart');
let activeActiveHeart = document.querySelector('.active_heart');


heart.addEventListener('click',() =>{
 activeActiveHeart.classList.toggle('animation')
    heart.classList.toggle('active')
  
})
