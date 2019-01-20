$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('.scrollToTop').fadeIn(200);
    } else {
        $('.scrollToTop').fadeOut(200);
    }
});
$('.scrollToTop').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});


$(document).ready(function(){
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

    $('.menu-icon').click(function() {
        $("ul").toggleClass("active");
});
});
