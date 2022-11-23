let MenuIn = document.querySelector('.section-header-top-burger');
let MenuExit = document.querySelector('.menu-exit');
let Menu = document.querySelector('.menu');
let Video = document.querySelector("video");



MenuIn.addEventListener('click', function () {
    Menu.classList.add('activeMenu');
})
MenuExit.addEventListener('click', function () {
    Menu.classList.remove('activeMenu');
})
AOS.init();
// Video.addEventListener('click', function () {
//     Video.setAttribute("autoplay", "autoplay");
// })

