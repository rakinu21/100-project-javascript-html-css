const paragraph = document.querySelector('.text-content');


const search = document.querySelector('.search')


search.addEventListener('click',()=>{
    let input = document.querySelector('.text').value;

    console.log(input)

    if(input !== ''){
        let regExp = new RegExp(input , 'gi');
        paragraph.innerHTML = paragraph.textContent.replace(regExp , "<mark>$&</mark>")
    }

})