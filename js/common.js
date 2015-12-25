$(document).ready(function() {

	//Слайдер стоимости
    $('.fishes-slider').owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        animateOut: 'fadeOut',
        smartSpeed: 300
    });

    $('.bxslider-scheme').bxSlider({
		pagerCustom: '#bx-pager-scheme',
		mode: 'fade',
		prevText: '<i class="fa fa-angle-left"></i>',
		nextText: '<i class="fa fa-angle-right"></i>'
	});

   /* $('.fishes-slider').bxSlider({
		mode: 'fade',
		captions: true
	});*/

	
});