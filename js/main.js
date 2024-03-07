$(function() {
    console.log( "page ready, go" );
	$('.first-toggler').click(function(){
	$('.first-toggler').toggleClass('navbar_toggler_active');
});
$('.second-toggler__button').click(function(){
	$('.second-toggler__button').toggleClass('prod_active');
		if ( $( this ).hasClass( "prod_active" ) ) {
			$('#prod_icon').removeClass('fa-angle-down');
			$('#prod_icon').addClass('fa-angle-up');
		}
		else{
			$('#prod_icon').addClass('fa-angle-down');
			$('#prod_icon').removeClass('fa-angle-up');
		}
	});
});


