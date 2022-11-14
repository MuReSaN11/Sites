let menuBtn = document.querySelector('.header__btn');
let menu = document.querySelector('.section-header-nav');
let menuIn = document.querySelector('.section-header-in');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuIn.classList.toggle('activeIn');
})