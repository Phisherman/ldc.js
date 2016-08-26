$(document).ready(function () {
    $('.question-header:first').trigger("click");
    $("#getresult").click(function () {
        $(".question:last").collapse("show")
    });
    $(".question:last").on('shown.bs.collapse', function () {
        window.scrollTo(0, $("#rating-anchor").position().top);
    });
    $("#rating-stars").rateYo({
        rating: 0.0
    });
});