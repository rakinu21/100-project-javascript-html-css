const daytext  = document.querySelector('.daytext');


const monthdate = document.querySelector('.month');

const dayNumber = document.querySelector('.dayNumber');

const year = document.querySelector('.year');



const date = new Date();



monthdate.innerHTML = date.toLocaleDateString('en',{
    month:'long'
})

daytext.innerHTML = date.toLocaleDateString('en',{
    weekday:'long'
})


dayNumber.innerHTML = date.getDate();

year.innerHTML = date.getFullYear();
