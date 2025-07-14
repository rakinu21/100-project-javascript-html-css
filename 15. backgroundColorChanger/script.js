let container = document.querySelector('.container');
let btn = document.querySelector('.btn');
let hexacolorText = document.querySelector('.hexaColorValue');



const hexaColor = () => {

   
    try {
              let hexavalue = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9','0'];
        let hexaColorRep = '';
        for(let index = 0 ; index < 6 ; index++){
                 
         let randomNumber = Math.floor(Math.random() * hexavalue.length);
         hexaColorRep += hexavalue[randomNumber];

          console.log(hexaColorRep)

          container.style.backgroundColor = `#${hexaColorRep}`

          hexacolorText.innerHTML = `#${hexaColorRep}`
          
        }
        
    } catch (error) {

        console.log(error.message)
        
    }
  
 
}

btn.addEventListener('click', hexaColor)



