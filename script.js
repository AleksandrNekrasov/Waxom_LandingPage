'use strict';
(function() {

    let header = document.getElementById('header');
    let scrollPos;
    let windowHeight;

    const navLinks = document.querySelectorAll('.nav__link[data-goto]');
    const burgerMenu = document.querySelector('.header__burger');
    const navMenu = document.querySelector('.nav');




    //fixed navigation
    window.addEventListener('scroll', showFixedNav, false);
    window.addEventListener('load', showFixedNav, false);

    function showFixedNav() {
        scrollPos = window.scrollY;

        if (scrollPos > 10) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        };
    }

    //auto-scrolling navigation
    if (navLinks.length > 0) {

        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onNavLinkClick);
        });

        function onNavLinkClick(e) {
            const navLink = e.target;

            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const gotoBlock = document.querySelector(navLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 79; // - document.querySelector('header').offsetHeight

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


    //operation after the window is resized
    window.addEventListener('load', adjustmentNav, false);
    window.addEventListener('resize', adjustmentNav,false)

    function adjustmentNav() {
        windowHeight = window.outerHeight;
        console.log(windowHeight);

        //for activation overflow scrolling when device in horizontal pos
        if (windowHeight < 450) {
            navMenu.style.height = '450px';
        } else {
            navMenu.style.height = 'auto';
        }

        //hide burger menu when window is resized
        // if (burgerMenu.classList.contains('_active')) {
        //     document.body.classList.remove('_lock');
        //     burgerMenu.classList.remove('_active');
        //     navMenu.classList.remove('_active');
        // }
    };


})();



