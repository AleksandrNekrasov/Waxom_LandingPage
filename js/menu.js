'use strict';
(function() {
    navigator.virtualKeyboard.overlaysContent = 'true';
    console.log(navigator.virtualKeyboard.overlaysContent);

    let header = document.getElementById('header');
    let searchButton = document.getElementById('search__button');
    let searchBox = document.getElementById('search-box');
    let cartButton = document.querySelector('.cart__button');
    let cartBox = document.querySelector('.cart-contents');
    let navLinks = document.querySelectorAll('.nav__link[data-goto]');
    let burgerMenu = document.querySelector('.header__burger');
    let navMenu = document.querySelector('.nav');
    let sections = document.querySelectorAll('section');
    let navLi = document.querySelectorAll('.nav__inner li');
    let introSwiper = document.querySelector('.intro-swiper');
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

     //intro block's height auto changing
    if (isMobile.any() && window.innerHeight >= 500) {
        introSwiper.style.height = `${window.visualViewport.height}px`;
    } else {
        window.addEventListener('resize', changeIntroHeightPC, false);
        window.addEventListener('load', changeIntroHeightPC, false);
        function changeIntroHeightPC() {
            if(window.innerHeight <= 1024 && window.innerHeight >= 450) {
                introSwiper.style.height = `${window.innerHeight}px`;
            }
            else {
                introSwiper.style.height = '1024px';
            };
        };
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

    // console.log(visualViewport.height);
    console.log('window.screen.height' + ' - ' + window.screen.height);
    console.log('window.screen.AvailHeight' + ' - ' + window.screen.availHeight);
    console.log('widow.outer' + ' - ' + window.outerHeight);
    console.log('widow.inner' + ' - ' + window.innerHeight);
    console.log('visual.viewport' + ' - ' + window.visualViewport.height);
    console.log('clientHeight' + ' - ' + document.documentElement.clientHeight);


    //auto-scrolling navigation after click on nav item
    if (navLinks.length > 0) {

        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onNavLinkClick);
        });

        function onNavLinkClick(e) {
            const navLink = e.target;
            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const gotoBlock = document.querySelector(navLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 70;

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

            searchBox.classList.remove('_active');
            searchButton.classList.remove('_active');

            cartButton.classList.remove('_active');
            cartBox.classList.remove('_active');
        })
    };

    // add fixed height value for activation overflow scrolling,
    // when a mobile device in horizontal pos
    window.addEventListener('load', changeHeight, false);
    window.addEventListener('resize', changeHeight, false);
    function changeHeight() {
        if (window.outerHeight < 450) {
            navMenu.style.height = `${window.outerHeight}px`;
        } else {
            navMenu.style.height = 'auto';
        }
    };

    //search form appearance
    if(searchButton) {
        searchButton.addEventListener('click', function(e){
            searchButton.classList.toggle('_active');
            searchBox.classList.toggle('_active')

            document.body.classList.remove('_lock');
            burgerMenu.classList.remove('_active');
            navMenu.classList.remove('_active');

            cartButton.classList.remove('_active');
            cartBox.classList.remove('_active');
        })
    };

    //cart box appearance
    if(cartButton) {
        cartButton.addEventListener('click', function(e) {
            cartButton.classList.toggle('_active');
            cartBox.classList.toggle('_active');

            document.body.classList.remove('_lock');
            burgerMenu.classList.remove('_active');
            navMenu.classList.remove('_active');

            searchButton.classList.remove('_active');
            searchBox.classList.remove('_active')
        });
    }


    //hightlighting nav links when page is scrolling
    window.addEventListener('scroll', ()=> {
        let currentSection = '';

        sections.forEach (section => {
            const sectionTop = section.offsetTop;

            if (scrollY >= (sectionTop - 190)) {
                currentSection = section.getAttribute('id');
            };
        });

        navLi.forEach ( li => {
            li.classList.remove('_active');

            if (li.classList.contains(currentSection) &&
            !((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5)) {
                li.classList.add('_active');

            } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
                navLi[navLi.length - 1].classList.add('_active');
            };
        });

    });


})();



