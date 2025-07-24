const upload = document.querySelector('input');
const image = document.querySelector('img');

const closeBtn = document.querySelector('.close');


upload.addEventListener('change',()=>{
    uploadFile(event)
})



function uploadFile(event){
     image.classList.add('active');
     closeBtn.classList.add('exit')

     image.src = URL.createObjectURL(event.target.files[0]);

     closeBtn.addEventListener('click',()=>{
         image.classList.remove('active');
       closeBtn.classList.remove('exit')

     })
}