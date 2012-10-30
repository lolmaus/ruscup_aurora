(function ($) {
    $(document).ready(function() {
        var cw = $('.field-name-field-video iframe').width() * 0.7;
        $('..field-name-field-video iframe').css({'height':cw+'px'});
    });
    $(window).resize(function() {
        var cw = $('.field-name-field-video iframe').width() * 0.7;
        $('..field-name-field-video iframe').css({'height':cw+'px'});
    });
})(jQuery);