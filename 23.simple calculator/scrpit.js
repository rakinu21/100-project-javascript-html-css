

const submitBtn = document.querySelector('.submit')



submitBtn.addEventListener('click', () =>{

   const number1 = document.querySelector('.number1').value;
const number2 = document.querySelector('.number2').value;
const result = document.querySelector('.result')

const operator = document.getElementById('operators').value;


switch (operator) {
    case '+':
        result.innerHTML = Number(number1) + Number(number2)
        break;
    case '/':
       result.innerHTML = Number(number1) / Number(number2)
       break;
   case '-':
       result.innerHTML = Number(number1) - Number(number2)
       break;
    case '*':
       result.innerHTML = Number(number1) * Number(number2)
    default:
        break;
}
})



