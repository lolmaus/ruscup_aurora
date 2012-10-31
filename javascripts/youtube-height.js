(function ($) {

    function resizeYoutubeIframe() {
        var cw = $('.field-name-field-video iframe').width() * 0.7;
        $('..field-name-field-video iframe').css({'height':cw+'px'});
    }

    $(document).ready(function() {
        resizeYoutubeIframe();
    });
    $(window).resize(function() {
        resizeYoutubeIframe();
    });
})(jQuery);