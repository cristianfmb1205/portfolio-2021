const hamburger = document.querySelector('.header .hamburger');
const mobile_menu = document.querySelector('.header .list');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});



// menu_item.forEach((item) => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         mobile_menu.classList.toggle('active');
//     });
// });