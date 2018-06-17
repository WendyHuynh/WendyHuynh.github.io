//jQuery.noConflict();

(function($) {   

    $(document).ready(function() {
		var icons = {
		  header: "ui-icon-circle-arrow-e",
		  activeHeader: "ui-icon-circle-arrow-s"
		};					
		$("#accordion").accordion({
			collapsible: true,
			active: false,
			heightStyle: "content"
		});	
		
	$("#vertical-menu h3").click(function () {
		//slide up all the link lists
		$("#vertical-menu ul ul").slideUp();
		$('.plus',this).html('+');
		//slide down the link list below the h3 clicked - only if its closed
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown();
			//$(this).remove("span").append('<span class="minus">-</span>');
			$('.plus').html('+');
			$('.plus',this).html('-');
		}
	})
		
	$("#filter-menu h3").click(function () {
		//slide up all the link lists
		$("#filter-menu ul ul").slideUp();
		$('.plus',this).html('+');
		//slide down the link list below the h3 clicked - only if its closed
		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown();
			//$(this).remove("span").append('<span class="minus">-</span>');
			$('.plus').html('+');
			$('.plus',this).html('-');
		}
	})											
	
	$(function(){
	  var $searchlink = $('#searchtoggl i');
	  var $searchbar  = $('#searchbar');
	  
	  $('#topnav ul li a').on('click', function(e){
		e.preventDefault();
		
		if($(this).attr('id') == 'searchtoggl') {
		  if(!$searchbar.is(":visible")) { 
			// if invisible we switch the icon to appear collapsable
			$searchlink.removeClass('fa-search').addClass('fa-search-minus');
		  } else {
			// if visible we switch the icon to appear as a toggle
			$searchlink.removeClass('fa-search-minus').addClass('fa-search');
		  }
		  
		  $searchbar.slideToggle(300, function(){
			// callback after search bar animation
		  });
		}
	  });
	});

	if ($("#slider").length > 0) {
			var content = $("#slider").html();
			var strippedImgs = '';
			var getImgs = /(<a[^>]*>)*(<img[^>]*>)(<\/a[ ]*>)*/gim;
			var theImgs = content.match(getImgs,"");
			$.each(theImgs, function() {
				var regex = /class=['"][a-zA-Z]*['"][ ]{1}/g;
				var slide = this.replace(regex,'');
				strippedImgs += slide;
			});
			$("#slider").html(strippedImgs);
			$('#slider').nivoSlider();
		} 
		
    });
}(jQuery));