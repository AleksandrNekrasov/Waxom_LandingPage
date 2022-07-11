'use strict';
document.body.onload = function () {
    document.body.classList.remove('_lock');

    setTimeout(function(){
        let preloader = document.getElementById('preloader');

        if( !preloader.classList.contains('_done') ) {
            preloader.classList.add('_done');
        };

    }, 200);


}
