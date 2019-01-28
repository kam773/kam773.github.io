// Fixed navbar on scroll
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('white');
    } else {
        $('nav').removeClass('white');
    }
});

var loader;
function loadNow(opacity) {
    if(opacity <= 0) {
        displayContent();
    }
    else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05)
        }, 100);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});


$(document).ready(function(){
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top - $('nav').height()}, 1000);
    });
});

// Toggle menu
$(document).ready(function(){
    $(".menu-icon").on("click", function(){
        $("nav ul.nav-list").toggleClass("showing");
    });

    /* ScrollTo*/
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {

            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top - $('.navigation').height()
            }, 1000, function() {

            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
                return false;
            } else {
                $target.attr('tabindex','-1');
                $target.focus();
            };
            });
        }
        }
    });
});

//Portfolio gallery mixitup plugin
$(function () {

    var filterList = {

        init: function () {

            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
              selectors: {
              target: '.portfolio',
              filter: '.filter'
          },
          load: {
            filter: '.app'
          }
            });

        }

    };

    // Run the show!
    filterList.init();


});