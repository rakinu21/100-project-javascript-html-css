const autoText = document.querySelector('.auto-text');
const cursor = document.querySelector('.cursor');



const  words = ['web Developer' , 'web design' , 'front-end Developer'];  // list of  words for the text

let indexWord = 0; // indexWord variable for the track were the currently typing;

let charIndex = 0; //track which character we're on in the current word

let isDeleting = false; // Boolean to check if the currently deleting text



const typeEffect = () => {

    const currentWords = words[indexWord];

    let displayText;

   isDeleting ? displayText = currentWords.substring(0, charIndex--) : displayText = currentWords.substring(0, charIndex++);

   autoText.textContent = displayText;

    
    let typingSpeed = isDeleting ? 200 : 200;

        // If finished typing the word, pause before deleting
    if (!isDeleting && charIndex === currentWords.length) {
        isDeleting = true;
        typingSpeed = 1000; // pause before start deleting
    }
    // If word has been completely deleted, move to the next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        indexWord = (indexWord + 1) % words.length; // loop back to first word
        typingSpeed = 500; // pause before typing next word
    }

    // Call typeEffect again after the calculated delay
    setTimeout(typeEffect, typingSpeed);

} 

setInterval(() => {
    cursor.classList.toggle('active');
}, 500);



// Start the typing effect
typeEffect();



    

    
