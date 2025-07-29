const follwers = document.querySelectorAll('.followers');



follwers.forEach((itemfollower, index)=>{

    itemfollower.innerHTML = '0';

    const updateFollowersCounter = ()=>{
        const target = +itemfollower.getAttribute('data-target');
        const count = +itemfollower.innerText

        const incrememnt = target / 500
        
        if(count < target){
            itemfollower.innerHTML =  `${Math.ceil(count + incrememnt)}`
            setTimeout(updateFollowersCounter, 1)
        }else{
            itemfollower.innerHTML = target;
        }

    };
    updateFollowersCounter();
})