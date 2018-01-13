$(document).ready(function() {
    $('.values').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            swal({
                title: "Спасибо",
                text: "Мы скоро с вами свяжемся!",
                icon: "success",
                button: "Закрыть",
            });
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    var scroll = new SmoothScroll('a[href*="#"]');

$(function(){
    // Trigger maximage
    jQuery('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            speed: 1000, 
            timeout: 5000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pause: 1
        }
    });
});
});