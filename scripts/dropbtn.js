// АНИМАЦИЯ ТОГЛ КНОПКИ, выпадающее меню
$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('.blank-li').toggleClass('active');
		$('.navbar-wrapper').toggleClass('color-open');
    });
});

// СКРЫВАТЬ НАВБАР ПРИ СКРОЛЛЕ
var header = $('.blank-li'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 0 && scrolled > scrollPrev ) {
		$('.blank-li').removeClass('active');
        $('#nav-toggle').removeClass('active')
		$('.navbar-wrapper').removeClass('color-open');
	}
	scrollPrev = scrolled;
});