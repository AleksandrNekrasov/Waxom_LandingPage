'use strict';
(function() {

    let header = document.getElementById('header');
    let searchButton = document.getElementById('search__button');
    let searchBox = document.getElementById('search-box');
    let navLinks = document.querySelectorAll('.nav__link[data-goto]');
    let navLinkClass = document.querySelectorAll('.nav__link');
    let burgerMenu = document.querySelector('.header__burger');
    let navMenu = document.querySelector('.nav');
    let scrollPos;
    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                    isMobile.Android()
                    || isMobile.BlackBerry()
                    || isMobile.iOS()
                    || isMobile.Opera()
                    || isMobile.Windows()
                    );
        }
    };

    if(isMobile.any()) {
        document.body.classList.add('_touch');
    } else {
        document.body.classList.add('_pc');
    };

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

    //auto-scrolling navigation after click on nav item
    if (navLinks.length > 0) {

        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onNavLinkClick);
        });

        function onNavLinkClick(e) {
            const navLink = e.target;

            for (let i = 0; i < navLinks.length; i++) {
                if (navLinks[i].classList.contains('_active')) {
                    navLinks[i].classList.remove('_active');
                }
            };

            navLink.classList.add('_active');

            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const gotoBlock = document.querySelector(navLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 80;

                console.log(gotoBlock.getBoundingClientRect().top);

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

    //menu burger appearance
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function(e) {
            document.body.classList.toggle('_lock');
            burgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');

            searchBox.classList.remove('search-box_active');
            searchButton.classList.remove('search__button_active');
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

    //search box appearance
    if(searchButton) {
        searchButton.addEventListener('click', function(e){
            searchButton.classList.toggle('search__button_active');
            searchBox.classList.toggle('search-box_active')

            document.body.classList.remove('_lock');
            burgerMenu.classList.remove('_active');
            navMenu.classList.remove('_active');
        })
    };


    console.log(navLinks[0].classList.contains('_active'));

})();



