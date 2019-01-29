// Fixed nav color
$(window).on('scroll', function() {
      if($(window).scrollTop()) {
          $('nav').addClass('black');
      } else {
          $('nav').removeClass('black');
      }
});

// Scroll to Btn
$(document).ready(function(){
      $('.js--scroll-to-about').click(function () {
          $('html, body').animate({scrollTop: $('.js--section-about').offset().top - $('nav').height()}, 1000);
      });
});

//Mobile navigation
$(function() {
      menu = $('nav ul');

      $('#toggle-btn').on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
      });

      $(window).resize(function() {
            var w = $(this).width();
            if(w > 580 && menu.is(':hidden')) {
                  menu.removeAttr('style');
            }
      });

      $('nav li').on('click', function(e) {
            var w = $(window).width();
            if(w < 580) {
                  menu.slideToggle();
            }
      });
      $('.open-menu').height($(window).height());
});

// smooth scrolling
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
                        scrollTop: target.offset().top - $('nav').height()
                  }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
});

//Gallery
$(window).load(function(){
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });

      $('.portfolioFilter a').click(function(){
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
           });
           return false;
      });
});


