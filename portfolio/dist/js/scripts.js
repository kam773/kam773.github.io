$(document).ready(function(){$(".filter-button").click(function(){var t=$(this).attr("data-filter");"all"==t?$(".filter").show("1000"):($(".filter").not("."+t).hide("3000"),$(".filter").filter("."+t).show("3000"))}),$(".filter-button").removeClass("active")&&$(this).removeClass("active"),$(this).addClass("active"),$(".js--scroll-to-about").click(function(){$("html, body").animate({scrollTop:$(".js--section-about").offset().top-$("nav").height()},1e3)})}),$(window).on("scroll",function(){$(window).scrollTop()?$("nav").addClass("white"):$("nav").removeClass("white")}),$(document).ready(function(){$(".menu-icon").on("click",function(){$("nav ul.nav-list").toggleClass("showing")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);(o=o.length?o:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:o.offset().top-$(".navigation").height()},1e3,function(){var t=$(o);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}})}),$(document).ready(function(){setTimeout(function(){$("body").addClass("loaded"),$("h1").css("color","#222222")},3e3)}),$(function(){(function(){$("#portfoliolist").mixItUp({selectors:{target:".portfolio",filter:".filter"},load:{filter:".app"}})})()});