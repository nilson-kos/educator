(function($){
    $(function(){
        $('.carousel').carousel();
        $('.collapsible').collapsible();
        $('.slider').slider();
        $('.materialboxed').materialbox();
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space