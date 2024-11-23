const navCloseBtn = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');

navCloseBtn.addEventListener('click', (e) => {
    e.target.classList.remove('active');
    navbar.classList.remove('active');
});
