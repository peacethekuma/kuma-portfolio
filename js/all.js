$(document).ready(function () {

    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top - 86;
        $('html, body').animate({
            scrollTop: targetPos
        }, 1000);
    });

    $(window).scroll(function (e) {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        //scroll spy
        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top - 90;
            var targetHeight = $(target).outerHeight();
            if (targetPos <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('scrollTop').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            };
        });
        //animated icon
        $('.animated').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });


});