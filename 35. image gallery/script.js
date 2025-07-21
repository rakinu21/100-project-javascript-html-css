
const images = document.querySelectorAll('.images');

const closeBtn = document.querySelector('.close');

const container = document.querySelector('.container')




const dummyData = async()=>{
    

    try {

       const response = await fetch("https://dummyjson.com/products?limit=15");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const products = data.products;
      
        console.log(products)

     

        products.forEach((image,index) =>{
        const imagesContainer = document.createElement('div')
        imagesContainer.className = 'images';

        imagesContainer.innerHTML = /*html */ `<img src="${image.thumbnail}">`

           // Add click listener directly to each newly created image
      imagesContainer.addEventListener('click', () => {
        imagesContainer.classList.add('active');
        closeBtn.classList.add('active');
      });
        
        container.appendChild(imagesContainer)
        })

    } catch (error) {
        console.log(error.message)
    }
}


dummyData()



// Handle closing
closeBtn.addEventListener('click', () => {
  const allImages = document.querySelectorAll('.images.active'); // only active ones
  allImages.forEach(img => img.classList.remove('active'));
  closeBtn.classList.remove('active');
});