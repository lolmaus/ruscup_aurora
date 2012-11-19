(function ($) {
    $.each(["field-name-field-place-reference",
            "field-name-field-judges-view",
            "field-name-field-timetable",
            "field-name-field-future-dates",
            "field-name-field-categories-view",
            "field-name-field-participants-view"], function(index, value) {
        if ($("." + value).length > 0) $("#link-"+value).css('display','inline');
    });
})(jQuery);