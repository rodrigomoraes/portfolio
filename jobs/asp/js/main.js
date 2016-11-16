$(document).ready(function(){
	//slider
	$(".rslides").responsiveSlides();
	/*blur no bground
	$('.client-box').backgroundBlur({
		imageURL: 'http://localhost/asp/static/imagens/banner1.jpg',
		blurAmount: 50,
		imageClass: 'bg-blur'

	});*/
	$(".regular").slick({
		slidesToShow: 3,
		slidesToScroll:3,
		autoplay: true,
		centerMode: true
	});

	//efeito do menu

	$(".nav-button").on('click', function(){
		$(this).toggleClass("btn-active");
		$(".nav-bar").toggleClass("SlideIn");		
	});
});