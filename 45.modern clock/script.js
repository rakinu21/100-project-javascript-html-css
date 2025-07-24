

const body = document.querySelector('body');


body.addEventListener('load',clock)


function clock(){

 const now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  const period = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12; // Convert 0 to 12, 13 to 1, etc.

  // Optional: Pad with zeros
  const paddedHour = hour.toString().padStart(2, '0');
  const paddedMin = min.toString().padStart(2, '0');
  const paddedSec = sec.toString().padStart(2, '0');

  const html = `
    <h1 class="hour">${paddedHour}</h1>
    <span>:</span>
    <h1 class="mins">${paddedMin}</h1>
    <span>:</span>
    <h1 class="secs">${paddedSec}</h1>
    <span class="ampm">${period}</span>
  `;
  
  body.innerHTML = html;

}


setInterval(clock , 1000)