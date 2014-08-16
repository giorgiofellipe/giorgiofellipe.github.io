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
	
	var owl = $("#slider-skills");
	owl.owlCarousel({
		autoPlay:true,
		items:5,
		itemsDesktop:[1000,4],
		itemsDesktopSmall:[900,3],
		itemsTablet:[600,2],
		itemsMobile:[480,1]
	});

	// Animations
	var windowH = $(window).height();

	$(window).bind('resize', function () {
		windowH = $(window).height();
	});
	
	var socialTopOffset = $('.social-network').offset().top;
	var skillsTopOffset = $('.skills').offset().top;
	var timelineTopOffset = $('.experience-line').offset().top;
	$(window).scroll(function(){
		// Fixed Navbar
		if(window.pageYOffset > windowH) {
			$('.navbar-flat').addClass('navbar-fixed-top');
			$('#about').addClass('fixed');
		} else {
			$('.navbar-flat').removeClass('navbar-fixed-top');
			$('#about').removeClass('fixed');
		}

		if(window.pageYOffset > skillsTopOffset-windowH+200) {
			$('.pie-graph').easyPieChart({
				easing: 'easeInOut',
				barColor: '#F16272',
				trackColor: '#F7F6F6',
				scaleColor: false,
				lineWidth: 4,
				size: 150,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}

		if(window.pageYOffset > timelineTopOffset-windowH+200) {
			$('.experience-line li').addClass('fadeInUp');
		}

		if(window.pageYOffset > socialTopOffset-windowH+200) {
			$('.social-network li').addClass('fadeInUp');
		}
	});

});