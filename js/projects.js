'use strict';
(function() {

    let btnAll = document.getElementById('btn_all');
    let btnDesign = document.getElementById('btn_design');
    let btnMobApp = document.getElementById('btn_mob_app');
    let btnIllustr = document.getElementById('btn_illustration');
    let btnPhoto = document.getElementById('btn_photo');
    let projectsEmpty = document.getElementById('projects_empty');

    let allProjectsItems = document.querySelectorAll('.projects__item')
    let projectsPhoto = document.querySelectorAll('.projects-photo');
    let projectsDesign = document.querySelectorAll('.projects-design');



    if(btnAll.classList.contains('_active')) {
        allProjectsItems.forEach( project => {
            project.classList.add('_active');
        });

    };

    btnAll.addEventListener('click', function(e){
        btnDesign.classList.remove('_active');
        btnPhoto.classList.remove('_active');
        btnMobApp.classList.remove('_active');
        btnIllustr.classList.remove('_active');
        projectsEmpty.classList.remove('_active');
        btnAll.classList.add('_active');

        allProjectsItems.forEach( project => {
            project.classList.add('_active');
        });

    });

    btnDesign.addEventListener('click', function(e){
        btnAll.classList.remove('_active');
        btnPhoto.classList.remove('_active');
        btnMobApp.classList.remove('_active');
        btnIllustr.classList.remove('_active');
        projectsEmpty.classList.remove('_active');
        btnDesign.classList.add('_active');

        allProjectsItems.forEach( project => {
            project.classList.remove('_active');
        });

        projectsDesign.forEach( project => {
            project.classList.add('_active');
        });
    });

    btnPhoto.addEventListener('click', function(e){
        btnAll.classList.remove('_active');
        btnDesign.classList.remove('_active');
        btnMobApp.classList.remove('_active');
        btnIllustr.classList.remove('_active');
        projectsEmpty.classList.remove('_active');
        btnPhoto.classList.add('_active');

        allProjectsItems.forEach( project => {
            project.classList.remove('_active');
        });

        projectsPhoto.forEach( project => {
            project.classList.add('_active');
        });
    });

    btnMobApp.addEventListener('click', function(e){
        btnAll.classList.remove('_active');
        btnDesign.classList.remove('_active');
        btnIllustr.classList.remove('_active');
        btnPhoto.classList.remove('_active');
        btnMobApp.classList.add('_active');

        allProjectsItems.forEach( project => {
            project.classList.remove('_active');
        });

        projectsEmpty.classList.add('_active');
    });

    btnIllustr.addEventListener('click', function(e){
        btnAll.classList.remove('_active');
        btnDesign.classList.remove('_active');
        btnPhoto.classList.remove('_active');
        btnMobApp.classList.remove('_active');
        btnIllustr.classList.add('_active');

        allProjectsItems.forEach( project => {
            project.classList.remove('_active');
        });

        projectsEmpty.classList.add('_active');
    });


    // allProjectsItems.forEach( project => {
    //     if(project.classList.contains('_active')){
    //         project.style.display = 'block';
    //     } else if  (project.style.opacity == '0'){
    //         project.style.display = 'none';
    //     }
    // });

}())