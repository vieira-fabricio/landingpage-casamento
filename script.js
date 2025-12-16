
const modal = document.getElementById('qrModal');
const closeBtn = document.getElementById('closeModal');
const openBtns = document.querySelectorAll('.open-qr');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
     modal.style.display = 'flex';
     modal.setAttribute('aria-hidden','false');
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
});

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
