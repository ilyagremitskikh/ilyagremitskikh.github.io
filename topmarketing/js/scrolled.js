$(document).ready(function() {
    
    $('.values').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $("#logo").attr("src", "img/logo-scrolled.png"),
                $(".navbar").css({ padding: '0', 'transition': 'padding 0.5s ease' }),
                $(".navbar-nav").css('margin-bottom', '-3px')
        };
        if ($(window).scrollTop() <= 20) {
            $("#logo").attr("src", "img/logo.png"),
                $(".navbar").css('padding', '.5rem 1rem'),
                $(".navbar-nav").css('margin-bottom', '25px')
        }
    });
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 40) {
            $(".navbar").addClass('scrolled')
        };
        if ($(window).scrollTop() <= 40) {
            $(".navbar").removeClass('scrolled')
        }
    });

});