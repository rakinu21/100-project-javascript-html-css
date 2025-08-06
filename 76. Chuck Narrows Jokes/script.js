

const button = document.querySelector('.button');

const text = document.querySelector('.h1');




const generateJokes = async()=>{

    try {

        const data =  await fetch('https://api.chucknorris.io/jokes/random');
        const res = await data.json();

        text.innerHTML = res.value;
        console.log(res.value)
        
    } catch (error) {
        console.log(error.message)
    }
}



button.addEventListener('click',()=>{
     generateJokes()
})

