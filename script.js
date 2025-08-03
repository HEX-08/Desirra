//================= NAVBAR ======================//

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})



//================= PRODUCRTS GALLERY SECTION ======================//

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
    let stt = 0;
    items.forEach(item => {
        item.style.transform = 'translateX(-50%) scale(0.8)';
        item.style.opacity = 0;
        item.style.zIndex = 0;
        item.style.filter = 'blur(5px)';
    });

    items[active].style.transform = 'translateX(-50%) scale(1)';
    items[active].style.opacity = 1;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';

    stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.1 * stt}) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.1 * stt}) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
    }
}

loadShow();

next.onclick = function () {
    active = (active + 1) % items.length;
    loadShow();
}

prev.onclick = function () {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}