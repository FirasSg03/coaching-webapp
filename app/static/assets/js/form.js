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

//form submission Fetch API to Flask
document.getElementById("msform").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // prepend +216 if not already present
    if (data.tel) {
        let digitsOnly = data.tel.replace(/\D/g, "");
        digitsOnly = digitsOnly.slice(-8); 
        data.tel = "+216" + digitsOnly;
    }

    const response = await fetch("/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    if (result.status === "error") {
        alert(result.errors ? JSON.stringify(result.errors, null, 2) : "Validation error");
    } else {
        alert(result.message);
    }
});



