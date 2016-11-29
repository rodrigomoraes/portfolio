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


	$(window).scroll(function(){
		//var $ban = $(".banner"),
		//banHeight = $ban.outerHeight(),
		windowTop = $(this).scrollTop();

		$(".banner picture").css('top', '-'+  windowTop + 'px');
		console.log(windowTop);

	});

	function count(){
    var counter = { var: 0 };
 TweenMax.to(counter, 5, {
      var: 50,  
      onUpdate: function () {
          $('#counter').html(Math.ceil(counter.var));
          $('#counter-1').html(Math.ceil(counter.var));
          $('#counter-2').html(Math.ceil(counter.var));
      },
      onComplete: function(){
        // count();
     },    
      ease:Circ.easeOut
  });
}
    
count();
    
});