'use strict';
(function(){
    let buttonPlay = document.querySelector('.icon__play');
    let popupVideo = document.querySelector('.popup-video');
    let buttonClose = document.querySelector('.popup-video__close')
    let iframeVideo = document.querySelector('.popup-video__video');
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

    if(isMobile.any()){
        popupVideo.style.overflow = 'scroll';
    }

    buttonPlay.addEventListener('click', function(e){
        document.body.classList.add('_lock')
        popupVideo.classList.add('_active');
        iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/8Z1eMy2FoX4?enablejsapi=1');


    });

    buttonClose.addEventListener('click', function(e){
        document.body.classList.remove('_lock');
        popupVideo.classList.remove('_active');
        iframeVideo.setAttribute('src', 'https://www.youtube.com/embed/8Z1eMy2FoX4?enablejsapi=0');
    });

}())