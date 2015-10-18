$(function() {

    $('.nav-item').click(function () {
        $('.nav-active').removeClass("nav-active");
        $(this).addClass("nav-active");
    });

    $('.nav-item').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
});