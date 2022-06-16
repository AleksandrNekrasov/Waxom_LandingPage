'use strict';

(function() {

    let header = document.getElementById('header');
    let scrollPos;


    // fixed header
    window.addEventListener('scroll', function() {
        scrollPos = window.scrollY;
        if (scrollPos > 20) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        };
    });

    //auto-scrolling navigation
    //обращаемся к классу .nav__link и создаем массив из объектов у которых есть
    //атрибут data-goto
    const navLinks = document.querySelectorAll('.nav__link[data-goto]');

    console.log(navLinks);

    if (navLinks.length > 0) {

        //берем каждый элемент массива и применяем к нему функцию
        navLinks.forEach(navLink => {
            navLink.addEventListener('click', onNavLinkClick);
        });

        function onNavLinkClick(e) {
            const navLink = e.target;

            if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
                const gotoBlock = document.querySelector(navLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 79; // - document.querySelector('header').offsetHeight

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }

    };


})();



