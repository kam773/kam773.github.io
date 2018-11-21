window.onscroll = function() {
    addSticky();
};

let navbar = document.querySelector('.navigation');
let sticky = navbar.offsetTop;

function addSticky() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

$(document).ready(function() {
            
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
       
    });

    $('.slider-fade').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        
    });

    $('.brand-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
        
    });

});
