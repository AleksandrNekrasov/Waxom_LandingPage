'use strict';
(function() {

    let header = document.getElementById('header');
    let scrollPos;
    let navLinks = document.querySelectorAll('.nav__link[data-goto]');
    let burgerMenu = document.querySelector('.header__burger');
    let navMenu = document.querySelector('.nav');

    //fixed navigation after scrolling down if sceen size >= 991px
    window.addEventListener('scroll', showFixedNav, false);
    window.addEventListener('load', showFixedNav, false);

    function showFixedNav() {
        scrollPos = window.scrollY;

        if (scrollPos > 10 && document.body.clientWidth >= 991) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        };
    }

    //auto-scrolling navigation after clip on nav item
    if (navLinks.length > 0) {

        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onNavLinkClick);
        });

        function onNavLinkClick(e) {
            const navLink = e.target;

            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const gotoBlock = document.querySelector(navLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 80;

                if(burgerMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    burgerMenu.classList.remove('_active');
                    navMenu.classList.remove('_active');
                }


                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    };

    //menu burger
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('_lock');
            burgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');
        })
    };


    // add fixed height value for activation overflow scrolling,
    // when a mobile device in hozintal pos
    window.addEventListener('load', changeHeight, false);
    window.addEventListener('resize', changeHeight, false)

    function changeHeight() {
        if (window.outerHeight < 450) {
            navMenu.style.height = `${window.outerHeight}px`;
        } else {
            navMenu.style.height = 'auto';
        }
    };

})();



