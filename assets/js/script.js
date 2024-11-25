const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const addEventsOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

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
        header.classList.remove('active');
    }
});

const revealElements = document.querySelectorAll('[data-reveal]');

const revealDelayElements = document.querySelectorAll('[data-reveal-delay]');

const reveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
        if (
            revealElements[i].getBoundingClientRect().top <
            window.innerHeight / 1.2
        ) {
            revealElements[i].classList.add('revealed');
        } else {
            revealElements[i].classList.remove('revealed');
        }
    }
};

for (let i = 0; i < revealDelayElements.length; i++) {
    revealDelayElements[i].style.transitionDelay =
        revealDelayElements[i].dataset.revealDelay;
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
