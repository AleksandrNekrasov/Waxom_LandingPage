'use strict';
document.body.onload = function () {
    document.body.classList.remove('_lock');
    let preloader = document.getElementById('preloader');
    setTimeout(function(){
        if( !preloader.classList.contains('_done') ) {
            preloader.classList.add('_done');
        };
    }, 250);
}
