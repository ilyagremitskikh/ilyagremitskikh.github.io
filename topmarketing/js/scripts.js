$(document).ready(function() {


    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            swal({
                title: "Спасибо",
                text: "Будем рады встрече с Вами!",
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