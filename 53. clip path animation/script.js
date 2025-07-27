let post = document.documentElement;

post.addEventListener('mousemove', e =>{
    post.style.setProperty('--1', e.clientX + 'px');
    post.style.setProperty('--2', e.clientY + 'px');
})