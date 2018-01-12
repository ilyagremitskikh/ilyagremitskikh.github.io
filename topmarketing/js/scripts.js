$(document).ready(function() {

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: false
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: false
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

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

    var typed = new Typed('.typed', {
        strings: ['Мы ^500 брендинговое <br>агентство нового <br>формата', 'Мы ^500 брендинговое <br>агентство нового <br>форматa', 'Мы ^500 брендинговое <br>агентство нового <br>формата', 'Мы ^500 брендинговое <br>агентство нового <br>форматa', 'Мы ^500 брендинговое <br>агентство нового <br>формата', 'Мы ^500 брендинговое <br>агентство нового <br>форматa', 'Мы ^500 брендинговое <br>агентство нового <br>формата', 'Мы ^500 брендинговое <br>агентство нового <br>форматa', 'Мы ^500 брендинговое <br>агентство нового <br>формата', 'Мы ^500 брендинговое <br>агентство нового <br>форматa'],
        typeSpeed: 30,
        backSpeed: 40,
        smartBackspace: true, // this is a default
        loop: true,
        backDelay: 800,
        startDelay: 300,
    });

    var scroll = new SmoothScroll('a[href*="#"]');

});