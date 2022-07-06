'use strict';
(function(){
    const swiper = new Swiper('.swiper-posts', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: 'true',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          }
        },

      });
}());

