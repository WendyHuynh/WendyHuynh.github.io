//jQuery.noConflict();

//(function($) {    
    $(document).ready(function() {
		//$(function() {
			//$('#navicon').bind('click touchend',function(event){
			//	var $anchor = $(this);
			//	$("#menu").trigger("open.mm");
			//	event.preventDefault();
			//});
			
			$('.show-menu-for-mobile').bind('click touchend',function(event){
				var $anchor = $(this);
				$("#menu").trigger("open.mm");
				event.preventDefault();
			});
        //});
		
		//$(function() {
			var $menu = $('nav#menu'),
			$html = $('html, body');
			$menu.mmenu({
				dragOpen: false
			});
			
			$menu.find('li > a').on('click touchend', function(e) {
				var href = $(this).attr('href');
				//	if the clicked link is linked to an anchor, scroll the page to that anchor 
				if (href.slice(0, 1) == '#') {
					$menu.one('closed.mm', function() {
						setTimeout(function() {$html.animate({scrollTop: $(href).offset().top});}, 10);
					});
				}
			});
		//});
		
     });
//}(jQuery));