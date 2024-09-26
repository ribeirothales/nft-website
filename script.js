const menu = document.querySelector('.menu');
const button = document.querySelector('.ri-menu-3-fill');

button.addEventListener('click', () =>{
    menu.classList.toggle('show');
});


var swiper = new Swiper('.mySwiper' , {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    loop:true,
    autoplay:true,
});
