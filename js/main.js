let menuToggle = document.querySelector('#menu-toggle'),
    menu = document.querySelector('.sidebar'),
    a = document.getElementsByTagName('a');


menuToggle.addEventListener('click', function(a){
    a.preventDefault();
    menu.classList.toggle('visible');
});