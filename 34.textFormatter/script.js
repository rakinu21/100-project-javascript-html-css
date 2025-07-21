const inputValue = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

const textAreaOutput = document.querySelector('.textarea');


buttons.forEach((button , index)=>{

    button.addEventListener('click',()=>{

        switch (index) {
            case 0:
                textAreaOutput.innerHTML = inputValue.value.toUpperCase()
                break;
            case 1:
                textAreaOutput.innerHTML = inputValue.value.toLowerCase()
                break;
            case 2:
                textAreaOutput.innerHTML = inputValue.value;
                textAreaOutput.style.textTransform = 'capitalize';
                break;
            case 3:
                textAreaOutput.innerHTML = inputValue.value;
                textAreaOutput.style.fontWeight = 'bolder';
                break;
            case 4:
                textAreaOutput.innerHTML = inputValue.value;
                  textAreaOutput.style.fontStyle = 'italic';
                break;
            case 5:
                textAreaOutput.innerHTML = inputValue.value;
                  textAreaOutput.style.textDecoration = 'underline';
                break;
        
            default:
                break;
        }
  
    })
})