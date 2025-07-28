// const sliderContainer = document.querySelector('.slider-container');

// const rightSide = document.querySelector('.right-side');

// const leftSide = document.querySelector('.left-side');


// const upBtn = document.querySelector('.up-btn');

// const downBtn = document.querySelector('.down-btn');


//  const sliderLength = rightSide.querySelectorAll('.img').length


//  console.log(sliderLength)

//  let activeSlideIndex = 0;

//  leftSide.style.top = `-${(sliderLength -1) * 100 }vh`

//  upBtn.addEventListener('click',()=>{
//     nextSlide('up')
//  })

//  downBtn.addEventListener('click',()=>{
//     nextSlide('down')
//  })


//  function nextSlide(params){
//     const sliderHeight = sliderContainer.clientHeight;

//     if(params === 'up'){
//         activeSlideIndex++;
//         if(activeSlideIndex > sliderLength -1){
//             activeSlideIndex = 0
//         }
//     }

    
//     if(params === 'down'){
//         activeSlideIndex--
//         if(activeSlideIndex < 0){
//             activeSlideIndex = sliderLength - 1;
//         }
//     }

//     rightSide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
//     leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
//  }




const sliderContainer = document.querySelector('.slider-container');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');

const sliderLength = rightSide.querySelectorAll('.img').length;

let activeSlideIndex = 0;

// Position the left side to start from the bottom
leftSide.style.top = `-${(sliderLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  nextSlide('up');
});

downBtn.addEventListener('click', () => {
  nextSlide('down');
});

// Scroll wheel support with throttle
let scrollThrottle = false;

sliderContainer.addEventListener('wheel', (e) => {
  if (scrollThrottle) return;
  scrollThrottle = true;

  if (e.deltaY > 0) {
    nextSlide('up');
  } else {
    nextSlide('down');
  }

  setTimeout(() => {
    scrollThrottle = false;
  }, 800); // match transition time
});

function nextSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  rightSide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}




