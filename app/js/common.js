$(function() {

	

});

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	hideControlOnEnd: true,
  	pager: false
  });
  $('.owl-carousel').owlCarousel({
  	items:3,
  	margin: 10,
  	startPosition:1,
  	nav:false,
  	navText: ["<img src='../img/carousel/prev.png'>","<img src='../img/carousel/next.png'>"]

  });

	$('.owl-carousel').find('.owl-nav').removeClass('disabled');
	$('.owl-carousel').on('changed.owl.carousel', function(event) {
		$(this).find('.owl-nav').removeClass('disabled');
	});
});