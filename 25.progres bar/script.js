const progress = document.querySelector('.progress');
const prevBtn = document.querySelector('#Pre');
const NextBtn = document.querySelector('#Next');
const Circles = document.querySelectorAll('.circle');

let indexCicleActive = 1;

const UpdateUI = () => {
    Circles.forEach((circle, index) =>{
        if(index < indexCicleActive){
          circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length -1) / (Circles.length -1)) *100 + '%'

if(indexCicleActive === 1) {
    prevBtn.disabled = true;
}else if(indexCicleActive === Circles.length){
    NextBtn.disabled = true;
}else{
    prevBtn.disabled = false;
    NextBtn.disabled = false
}
}

NextBtn.addEventListener('click', () =>{
    indexCicleActive++
    if(indexCicleActive > Circles.length){
        indexCicleActive = Circles.length;
    }

    UpdateUI()
})

prevBtn.addEventListener('click', ()=>{
       indexCicleActive--
    if(indexCicleActive < 1){
        indexCicleActive = 1;
    }

       UpdateUI()
})
