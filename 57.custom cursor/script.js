document.addEventListener('mousemove', moveCursor);

const innerCursor = document.querySelector('.inner-cursor');
const outerCursor = document.querySelector('.outer-coursor');





function moveCursor(e){
   let x = e.clientX;
   let y = e.clientY;

   innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;

    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
    
}