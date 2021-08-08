const burgerBtn = document.querySelector('.burger-wrap');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const items = document.querySelectorAll('.nav-menu .items');
const link = document.querySelectorAll('link');


let showMenu = false;

burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    console.log('clicking')
    if (!showMenu) {
        burger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        items.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        items.forEach(item => item.classList.remove('open'));
        showMenu = false;

    }

}