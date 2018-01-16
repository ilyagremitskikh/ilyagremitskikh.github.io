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

    $(function() {
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
    $(window).scroll(function() {
        if ($(window).scrollTop() > 620) {
            $("#logo").attr("src", "img/logo-scrolled.png"),
                $(".navbar").css({ padding: '0', 'transition': 'padding 0.5s ease' }),
                $(".navbar-nav").css('margin-bottom', '0'),
                $(".nav-link").css({ fontSize: '80%', 'padding': '0 30px' })
        };
        if ($(window).scrollTop() <= 620) {
            $("#logo").attr("src", "img/logo.png"),
                $(".navbar").css('padding', '.5rem 1rem'),
                $(".navbar-nav").css('margin-bottom', '20px'),
                $(".nav-link").css({ fontSize: '18px', 'padding': '0 20px' })
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 640) {
            $(".navbar").addClass('scrolled')
        };
        if ($(window).scrollTop() <= 640) {
            $(".navbar").removeClass('scrolled')
        }
    });
    $('header').flowtype({ minFont: 16, maxFont: 30, fontRatio: 62.5 });

    // Создание обработчика для события window.onLoad
    YMaps.jQuery(function() {
        // Создание экземпляра карты и его привязка к созданному контейнеру
        var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

        // Установка для карты ее центра и масштаба
        map.setCenter(new YMaps.GeoPoint(61.379880, 55.152536), 17);

        // Создание стиля для значка метки
        var s = new YMaps.Style();
        s.iconStyle = new YMaps.IconStyle();
        s.iconStyle.href = "../img/map-icon.png";
        s.iconStyle.size = new YMaps.Point(48.8, 40);
        s.iconStyle.offset = new YMaps.Point(-5, -50);
        map.addControl(new YMaps.Zoom());
        // Создание метки и добавление ее на карту
        var placemark = new YMaps.Placemark(map.getCenter(), { style: s, hasBalloon: false });
        map.addOverlay(placemark);
    });


});