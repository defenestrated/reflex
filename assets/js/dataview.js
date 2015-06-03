// add any scripting here

var debug = true,
    time_fast = 100,
    time_slow = 400,
    easeIn = "easeInQuad",
    easeOut = "easeOutQuad",
    open = false;

$(document).ready(function() {
    $(".side-menu-wrapper").mouseenter(function(e) {
        if (!open) hoverstate(e);
    });
    $(".side-menu-wrapper").mouseleave(function(e) {
        if (!open) nonhoverstate(e);
    });
    $(".side-menu-wrapper").click(toggleopen);
});

function hoverstate(e) {
    $(".menu-icon-hover").animate({
        opacity: 1,
        "right": "5px"
    }, time_fast, easeIn);
    $(".menu-icon").animate({
        opacity: 0,
        "right": "5px"
    }, time_fast, easeIn);

    $(".side-menu-wrapper").animate({
        width: "50px"
    }, time_fast, easeIn);
    $(".menu-explanation").animate({
        "line-height": "50px",
        opacity: 1
    }, time_fast, easeIn);
}

function nonhoverstate(e) {
    $(".menu-icon-hover, .close").animate({
        opacity: 0,
        "right": "0px"
    }, time_fast, easeIn);
    $(".menu-icon").animate({
        opacity: 1,
        "right": "0px"
    }, time_fast, easeIn);

    $(".side-menu-wrapper").animate({
        width: "40px"
    }, time_fast, easeIn);
    $(".menu-explanation").animate({
        "line-height": "40px",
        opacity: 0
    }, time_fast, easeIn);
}

function toggleopen(e) {

    if (!open) {
        $(".menu-icon-hover").animate({
            opacity: 0,
            "right": "0px"
        }, time_fast, easeIn);
        $(".close").animate({
            opacity: 1
        }, time_fast, easeIn);

        $(".side-menu-wrapper").animate({
            width: 300,
            "background-color": "white"
        }, time_fast, easeIn);

        $(".menu-explanation").animate({
            opacity: 0
        }, time_fast, easeIn);

        open = true;

    }
    else if (open) {
        $(".side-menu-wrapper").animate({
            width: "40px",
            "background-color": "#46beff"
        }, time_slow, easeOut);

        $(".menu-icon").animate({
            opacity: 1,
            "right": "0px"
        }, time_fast, easeIn);

        $(".close").animate({
            opacity: 0
        }, time_fast, easeIn);

        open = false;
    }


}
