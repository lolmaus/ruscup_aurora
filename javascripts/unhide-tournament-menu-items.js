(function ($) {
    $.each(["field-name-field-place-reference",
            "field-name-field-judges-view",
            "field-name-field-timetable"], function(index, value) {
        if ($("." + value).length > 0) $("#link-"+value).css('display','inline');
    });
})(jQuery);