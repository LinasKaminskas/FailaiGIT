//Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText : ["<i class='fa fa-chevron-left' style='font-size: 48px;color: red'></i>","<i class='fa fa-chevron-right' style='font-size: 48px;color: red'></i>"]
    });
});

