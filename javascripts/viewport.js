(function ($) {
    $(document).ready(function() {
        var the_width = $(window).width();
        $('#width').text(the_width);
        var the_height = $(window).height();
        $('#height').text(the_height);
    });
    $(window).resize(function() {
        var the_width = $(window).width();
        $('#width').text(the_width);
        var the_height = $(window).height();
        $('#height').text(the_height);
    });
})(jQuery);