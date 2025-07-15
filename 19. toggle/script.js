let toggler = document.querySelector('#switch')

toggler.addEventListener('click', () =>{
    if(toggler.checked === true){
        document.body.style.background = 'black';
    }else{
        document.body.style.background = 'white';
    }
})