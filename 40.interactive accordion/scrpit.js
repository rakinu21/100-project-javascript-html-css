const openBtn = document.querySelectorAll('.open-button');

const contentText = document.querySelectorAll('.content-container-text');



const removeActiveClasses = ()=>{
    openBtn.forEach((button)=>{
        button.classList.remove('active')
    })

    contentText.forEach((text)=>{
        text.classList.remove('active')
    })
}



openBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Check if this button is already active
        const isActive = button.classList.contains('active');

        removeActiveClasses(); // Always remove all first

        if (!isActive) {
            button.classList.add('active'); // Activate clicked button
            contentText[index].classList.add('active'); // Show corresponding text
        }
    });
});