let Increment = document.querySelector('.value-increment');

const btnIncrement = document.querySelector('.btnIncrement');

const save = document.querySelector('.save');

const result = document.querySelector('.result');


let incres = 1;
let array = []
btnIncrement.addEventListener('click',()=>{
   
 Increment.innerHTML = incres++
    
})


save.addEventListener('click',()=>{
    
   array.push(Increment.innerHTML);
   result.innerHTML = array.join(', ')
})