'use strict';
(function(){
    let buttonPlay = document.querySelector('.icon__play');
    let popupVideo = document.querySelector('.popup-video');
    let buttonClose = document.querySelector('.popup-video__close')
    let iframeVideo = document.querySelector('.popup-video__video');

    buttonPlay.addEventListener('click', function(e){
        iframeVideo.setAttribute('src', 'http://www.youtube.com/embed/Rk6_hdRtJOE?enablejsapi=1');
        popupVideo.classList.add('_active');
        document.body.classList.add('_lock')
    });

    buttonClose.addEventListener('click', function(e){
        iframeVideo.setAttribute('src', 'http://www.youtube.com/embed/Rk6_hdRtJOE?enablejsapi=0');
        popupVideo.classList.remove('_active');
        document.body.classList.remove('_lock');

    });


}())