const btn = document.querySelectorAll('.btn');
let banner = document.querySelector('.banner');

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        // remove active from all first
        btn.forEach(b => b.classList.remove('active'));

        // change image
        banner.src = `images/${index}.png`; // adjust file naming here

        // animation
        animation();

        // add active to the clicked button
        button.classList.add('active');
    });
});

function animation() {
    banner.classList.add('zoom');
    setTimeout(() => {
        banner.classList.remove('zoom');
    }, 1000);
}
