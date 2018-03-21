
// Mobile height fix
/* function detectChange(){
    const height = Math.max(document.documentElement.clientHeight, 
        window.innerHeight || 0);

    const viewportHeight = document.querySelector('.hero');
    viewportHeight.style['min-height'] = height + 'px';
}

window.addEventListener("orientationchange", detectChange, false); */


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
