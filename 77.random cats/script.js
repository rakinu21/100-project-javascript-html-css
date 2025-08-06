const btn = document.querySelector('.btn-random');

const containerImage = document.querySelector('.container');




const getRandomCatsImage =  async() =>{


    try {
        const data = await fetch(' https://api.thecatapi.com/v1/images/search');

        const res = await data.json();
        
      
        const imageUrl = res[0].url;

        console.log(imageUrl)
        containerImage.style.backgroundImage = `url(${imageUrl})`
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}




btn.addEventListener('click',()=>{
    getRandomCatsImage()
})