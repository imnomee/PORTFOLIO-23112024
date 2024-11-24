const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const addEventsOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
        console.log(elements[i]);
    }
};
console.log(navTogglers);

const toggleNavbar = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
};

addEventsOnElements(navTogglers, 'click', toggleNavbar);

// Header

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active')
    }
});
