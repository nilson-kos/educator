//Navbar
var wHeight = $(window).scrollTop();
$(window).on("scroll", function () {
    wHeight = $(window).scrollTop();
    if (wHeight >= 110) {
        $(".top-bar").css("position", "absolute");
        $("nav").css("top", 0);
    } else {
        $(".top-bar").css("position", "fixed");
        $("nav").css("top", "45px");
    }
});

//testimonial slider
var testimonialSwiper = new Swiper('.swiper-container.testimonials-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 2, // slides Per View
    paginationClickable: true,
    nested: true,
    spaceBetween: 30, // slides space between
    breakpoints: {
        // when window width is <= 900px
        900: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

$(".side-nav").html($(".menu").html());

$(".button-collapse").sideNav();

//Menu Settings
$('.menu a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    var target = this.hash,
        navigation = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + -100
    }, 500, function () {
        window.location.hash = target;
    });
});

//Mobile Menu Settings
$('.side-nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    var target = this.hash,
        navigation = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + -70
    }, 500, function () {
        window.location.hash = target;
    });
    $('.button-collapse').sideNav('hide');
});

//Scroll animation
var options = [{
    selector: '#about',
    offset: 0,
    callback: function (el) {
        $("#hourglass").animateNumber({
            number: 30
        }, 1000);
        $("#chart").animateNumber({
            number: 12
        }, 1000);
        $("#usd").animateNumber({
            number: 5
        }, 1000);
        $("#checked").animateNumber({
            number: 875
        }, 1000);
    }
}];
Materialize.scrollFire(options);


// test

