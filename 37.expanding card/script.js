

const images = document.querySelectorAll('.images');


const removeActiveClasses = ()=>{
    
    images.forEach((items, index)=>{
        items.classList.remove('active')
    })
}


images.forEach((image, index)=>{

    image.addEventListener(('click'),()=>{

      if(image.classList.contains('active')){
        image.classList.remove('active')
      }else{
        removeActiveClasses();
        image.classList.toggle('active');
      }

   


    })
})


