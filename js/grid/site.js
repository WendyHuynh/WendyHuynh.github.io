jQuery(document).ready(function($) {

	/*=====================================
	=              Sticky Nav             =
	=====================================*/

	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 100) {
	        $("header").addClass("onPageScroll");
	    } else {
	        $("header").removeClass("onPageScroll");
	    }
	});

	/*=====================================
	=          Random Header Image        =
	=====================================*/

	// Apply a RANDOM numbered class to #showStopper to set the random background image 
	$(document).ready(function(){
	    var classCycle=[
	    'image1',
	    'image2',
	    'image4',
	    'image5',
	    'image6',
	    'image7',
	    'image8',
	    'image9',
	    'image10',
	    'image11'
	    ];

	    var randomNumber = Math.floor(Math.random() * classCycle.length);
	    var classToAdd = classCycle[randomNumber];

	    $('#showStopper').addClass(classToAdd);
		$('#' + classToAdd).addClass('show');

	});

});

/*=====================================
=           Mobile Navigation         =
=====================================*/

$(document).ready(function(){
	var toggle = '<button class="mobile_btn"></button>';
	if($('.mobile-nav #mobile-menu-main').closest('li').children('ul.sub-menu')) {
		$('li').children('ul.sub-menu').before(toggle);
	}

	$('.mobile-nav #mobile-menu-main > li').on('click','button', function(){
		$(this).closest('li').children('ul.sub-menu').slideToggle();
		$(this).toggleClass("active");
	});

	$('.mobile-nav ul.sub-menu').find('li').on('click','button', function(){
		$(this).closest('ul.sub-menu').children('ul.sub-menu').slideToggle();
	});

});