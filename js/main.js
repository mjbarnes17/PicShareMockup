$(document).ready(function(){
	$('.slider').slider({
		full_width: true,
		indicators: false,
		height: 500,
		interval: 10000
	});
	$(".button-collapse").sideNav({
		menuWidth: 300,
    edge: 'right',
    closeOnClick: true
	});
});
