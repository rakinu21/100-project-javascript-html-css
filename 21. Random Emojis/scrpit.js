

const hoverEmoji = document.querySelector('.emoji');


const randomEmojiFunction = () =>{

    const valueImojiRandom = ['🤣','😍','😒','😘','😁','😜'];

    const random = Math.floor(Math.random() * valueImojiRandom.length);

   let valueEmoji =  valueImojiRandom[random];

   console.log(valueEmoji)

   hoverEmoji.innerHTML = valueEmoji;
}

randomEmojiFunction()


hoverEmoji.addEventListener('mouseover', randomEmojiFunction);
