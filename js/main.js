
// Mobile height fix
/* function detectChange(){
    const height = Math.max(document.documentElement.clientHeight, 
        window.innerHeight || 0);

    const viewportHeight = document.querySelector('.hero');
    viewportHeight.style['min-height'] = height + 'px';
}

window.addEventListener("orientationchange", detectChange, false); */

// Damn it firefox jumpy scrollbar fix
const backgroundImage = document.querySelector(".hero--bg");

if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    backgroundImage.style.top = 'auto';
    backgroundImage.style.bottom = 0;

    window.onresize = sizeBackground;
    sizeBackground();
}
function sizeBackground(){
    backgroundImage.style.height = screen.height;
}

// Modal
const btn_modal = document.querySelector('.btn--modal');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');

btn_modal.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

function openModal() {
    modal.classList.toggle("open");
    document.body.style.overflow = 'hidden';
}
function closeModal(){
    modal.classList.toggle("open");
    document.body.style.overflow = 'auto';
}
