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
        console.log(scrollPos);
        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top - 90;
            var targetHeight = $(target).outerHeight();
            console.log(target,targetPos,targetHeight);
            if (targetPos <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('scrollTop').removeClass('active');
                $(this).addClass('active');
            }else{
                $(this).removeClass('active')
            };
        });
    });

});