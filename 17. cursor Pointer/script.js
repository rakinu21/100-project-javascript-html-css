// const cursor = document.querySelector('.cursor');


// document.addEventListener('mousemove', (event)=>{

//     moveCoursor(event.pageX , event.pageY)
// })

// const moveCoursor = (pageX, pageY) =>{

//   cursor.style.left = pageX + 'px';
//   cursor.style.top = pageY + 'px'
// }


const cursor = document.querySelector('.cursor');

// Move the custom cursor
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Select elements that should trigger cursor grow
const hoverTargets = document.querySelectorAll('.title, .paragraph, .button');

hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    cursor.classList.add('grow');
  });
  target.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
  });
});


