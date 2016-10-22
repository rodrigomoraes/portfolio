$(document).ready(function(){
	//slider
	$('.slider').responsiveSlides({
		height: 430,
		background: 'c1c1c1',
		startDelay:0
	});
	//blur no bground
	$('.client-box').backgroundBlur({
		imageURL: 'http://localhost/asp/static/imagens/banner1.jpg',
		blurAmount: 50,
		imageClass: 'bg-blur'

	});
});