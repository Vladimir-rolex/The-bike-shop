$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
