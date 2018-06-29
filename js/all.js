$(document).ready(function () {
// scroll to target
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top - 86;
        $('html, body').animate({
            scrollTop: targetPos
        }, 1000);
    });

    // scrollSpy
    $(window).scroll(function (e) {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
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
            if ((windowHeight + scrollPos - 300) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });
});

// Typeit
var instance = new TypeIt('#myGreeting', {
    speed: 35,
    breakLines: false,
    autoStart: false,
    cursor:false,
});

