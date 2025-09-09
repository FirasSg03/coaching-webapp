// https://www.linkedin.com/in/atakangk/
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function() {
    if(animating) return false;
    animating = true;

    current_fs = $(this).closest("fieldset");
    next_fs = current_fs.next("fieldset");

    // activate next step in progress bar
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    // simple fade animation
    current_fs.fadeOut(350, 'easeInOutBack', function() {
        next_fs.fadeIn(350).css('display', 'flex');
        animating = false;
    });
});


$(".previous").click(function() {
    if(animating) return false;
    animating = true;

    current_fs = $(this).closest("fieldset");
    previous_fs = current_fs.prev("fieldset");

    // deactivate current step in progress bar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    // simple fade animation
    current_fs.fadeOut(350, 'easeInOutBack', function() {
        previous_fs.fadeIn(350).css('display', 'flex');
        animating = false;
    });
});



