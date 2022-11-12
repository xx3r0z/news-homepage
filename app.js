navHamburger =  document.querySelector('.hamburger');
navUl =document.querySelector('.nav-links-ul');


function navHamburgerChange () {
    for (const span of navHamburger.children) {
        span.classList.toggle('cross');
    };
};

function navToggle () {
    navUl.classList.toggle('show');
};

navHamburger.addEventListener('click', () => {
    navHamburgerChange();
    navToggle();
})