$(document).ready(function(){
	'use strict';
	// Scroll
	$('.scrollto').click(function(e){
		e.preventDefault();
		var scrollElm = $(this).attr('href');
		var scrollTo = $(scrollElm).offset().top;
		$('html, body').animate({ scrollTop: scrollTo - 50 }, "slow");
	});

	// Slides
	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});
	
	// Animations
	var windowH = $(window).height();

	$(window).bind('resize', function () {
		windowH = $(window).height();
	});

	$(window).scroll(function(){
		// Fixed Navbar
		if(window.pageYOffset > windowH) {
			$('.navbar-flat').addClass('navbar-fixed-top');
			$('#about').addClass('fixed');
		} else {
			$('.navbar-flat').removeClass('navbar-fixed-top');
			$('#about').removeClass('fixed');
		}
	});
});