
$('.carousel').carousel({
    interval: false,
    pause: String,
    
})
$(document).ready(function() {

	$(".index-nav-icon").click(function() {
	    $(".index-nav ul").slideToggle( "slow", function() {
    // Animation complete.
       });
	});   
});