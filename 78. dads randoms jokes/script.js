const jokes = document.querySelector('.jokes-text');

const btn = document.querySelector('.btn-random');



const getjokes = async()=>{



    try {


     let config = {
            headers: {
                Accept: 'application/json'
            }
        };
        const data = await fetch('https://icanhazdadjoke.com',config);
        const response = await data.json();



        jokes.textContent = response.joke
// // 
        console.log(response.joke)
    } catch (error) {
        console.log(error.message)
    }
}


getjokes()

btn.addEventListener('click',()=>{
getjokes()
})