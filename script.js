// script.js
const burger = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
