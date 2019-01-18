/* Toggle naviagtion on scroll*/
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

/* Toggle menu */
$(document).ready(function() {
    $('.toggle').click( function() {
        $('.nav-list').slideToggle(500);
    });
});

/* ScrollTop arrow*/
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});


$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});


/* JavaScript slider*/
$(document).ready(function() {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });

    $('.brand-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000

    });

    $('.slider-prostowniki').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });

    $('.slider-materialy').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });

    $('.slider-materialy-tig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });

    $('.slider-materialy-mma').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });

    $('.slider-materialy-inne').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',

    });

});

/* ScrollTo*/
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#urzadzenia"]')
  .not('[href="#przecinarki"]')
  .not('[href="#prostowniki"]')
  .not('[href="#materialy"]')
  .not('[href="#materialy1"]')
  .not('[href="#materialy2"]')
  .not('[href="#materialy3"]')
  .not('[href="#materialy4"]')
  .not('[href="#materialy"]')
  .not('[href="#zakladka1"]')
  .not('[href="#zakladka2"]')
  .not('[href="#zakladka3"]')
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


