'use strict';
window.onload = function () {
    let preloader = document.getElementById('preloader');
    document.body.classList.remove('_lock');
    setTimeout(function(){
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 100);
}
