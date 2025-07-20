const allLabels = document.querySelectorAll('label');


for (const inputLabels of allLabels){
    inputLabels.innerHTML = inputLabels.innerHTML.split('').map((letter, index)=>
      /*html */  `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
    ).join('')
}



// const allLabels = document.querySelectorAll('.form-control label');


// allLabels.forEach(labels =>{
//     labels.innerHTML = labels.innerHTML.split('').map((letter, index) => 
//     `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
//     ).join('')
// })

