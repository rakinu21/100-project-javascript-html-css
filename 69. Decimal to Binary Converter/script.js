const result = document.querySelector('.result-btn');

result.addEventListener('click', decemal)


function decemal (){
    let decemalNumber = document.querySelector('.number').value;

    let tempDecimal ;
    let rem = 0;
    let binary = 0;
    let place = 1;


    tempDecimal = decemalNumber;


    while(tempDecimal > 0){
        rem = tempDecimal % 2;
        binary = binary + rem * place
        tempDecimal = parseInt(tempDecimal / 2)
        place = place * 10;
    }


    const h1 = document.createElement('h1');

    h1.innerHTML = `${binary}`

    const containerOutput = document.querySelector('.output');

    containerOutput.appendChild(h1)
}