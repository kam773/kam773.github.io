$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

$('.js--scroll-to-about').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top - $('nav').height()}, 1000);
});

});


$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('nav').addClass('white');
    } else {
        $('nav').removeClass('white');
    }
});

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

$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);

});

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