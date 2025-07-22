const insert = document.querySelector('.insert');

window.addEventListener('keydown',(event)=>{
    console.log(event.key)

    insert.innerHTML = /*html */ `
    
    <div class="key">
        <span>event.key</span>
        ${event.key === ' '? 'Space' : event.key}
    </div>
      
    <div class="key">
        <span>event.keyCode</span>
        ${event.keyCode === ' '? 'Space' : event.keyCode}
    </div>
      
    <div class="key">
        <span>event.code</span>
        ${event.code === ' '? 'Space' : event.code}
    </div>
    `
})