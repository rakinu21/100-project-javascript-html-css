const outputSocialMediaSelect = document.querySelector('.output-items');

const arrow = document.querySelector('.arrow');

const body = document.querySelector('body')

const listingItems = document.querySelector('.listing-items');

const items = document.querySelectorAll('.items');


window.addEventListener('click',(e)=>{

    if(e.target === body){
     listingItems.classList.remove('show')
    }
})



outputSocialMediaSelect.addEventListener('click',()=>{

    arrow.classList.toggle('active');
    listingItems.classList.toggle('show')
    
})

// for items select using switch;

// items.forEach((item , index) =>{
//     item.addEventListener('click',()=>{
//         console.log('click')

//         console.log(index)

//         switch (index) {
//             case 0:
//                 outputSocialMediaSelect.innerHTML = 'facebook';
//                 listingItems.classList.remove('show')
//                 break;
//             case 1:
//                 outputSocialMediaSelect.innerHTML = 'youtube';
//                 listingItems.classList.remove('show')
//                 break
//             case 2:
//                 outputSocialMediaSelect.innerHTML = 'whatsapp';
//                 listingItems.classList.remove('show')
//                 break
//             case 3:
//                 outputSocialMediaSelect.innerHTML = 'twitter';
//                 listingItems.classList.remove('show')
//                 break
//             case 4:
//                 outputSocialMediaSelect.innerHTML = 'instagram';
//                 listingItems.classList.remove('show')
//                 break
//             default:
//                 break;
//         }
//     })
// })


// Fix: Use forEach and proper event target
items.forEach(item => {
    item.addEventListener('click', () => {
        outputSocialMediaSelect.innerHTML = item.querySelector('p').textContent;
        listingItems.classList.remove('show');
        arrow.classList.remove('active');
    });
});
