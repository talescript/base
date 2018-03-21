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
