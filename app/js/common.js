$(function() {

	

});

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	hideControlOnEnd: true,
  	pager: false
  });
  $('.car1').owlCarousel({
  	items:3,
  	margin: 10,
  	startPosition:1,
  	nav:false,
  	loop: true,
  	navText: ["<img src='../img/carousel/prev.png'>","<img src='../img/carousel/next.png'>"]

  });

	$('.car1').find('.owl-nav').removeClass('disabled');
	$('.car1').on('changed.owl.carousel', function(event) {
		$(this).find('.owl-nav').removeClass('disabled');
	});

	$('.car2').find('.owl-nav').removeClass('disabled');
	$('.car2').on('changed.owl.carousel', function(event) {
		$(this).find('.owl-nav').removeClass('disabled');
	});

  $('.car2').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    navText: ["<img src='../img/carousel/prev.png'>","<img src='../img/carousel/next.png'>"],
    dots:false,
    autoplay:true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });

  	$("#zap").on('click', function() {

  		$.fancybox.open('<div class="message"><h2>Запись на прием</h2><p>запишитесь</p></div>');
	});
	$("#zvon").on('click', function() {

  		$.fancybox.open('<div class="message"><h2>Заказ звонка</h2><p>закажите звонок</p></div>');
	});

});