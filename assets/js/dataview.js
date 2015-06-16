// add any scripting here

var debug = true,
    time_fast = 100,
    time_slow = 400,
    easeIn = "easeInQuad",
    easeOut = "easeOutQuad",
    open = false,
    products = [
        "sweatpants",
        "blue tshirt",
        "running shoes",
        "sandals",
        "flip flops",
        "cotton dress pants",
        "sport jacket",
        "fancy pants",
        "pajama bottoms",
        "flannel shirt"
    ];

$(document).ready(function() {

    filltable();

    $(".data-table td").mouseenter(function(e) {
        highlight_column(e);
    });
    $(".data-table td").mouseleave(function(e) {
        unhighlight_column(e);
    });


    $(".side-menu-wrapper").mouseenter(function(e) {
        if (!open) hoverstate(e);
    });
    $(".side-menu-wrapper").mouseleave(function(e) {
        if (!open) nonhoverstate(e);
    });
    $(".side-menu-wrapper").click(toggleopen);

    $(".close-hover, .close-nonhover").mouseenter(function(e) {
        if (open) xblue(e);
    });
    $(".close-hover, .close-nonhover").mouseleave(function(e) {
        if (open) xblack(e);
    });

    $(".data-switch .button").click(switcher);

});

function highlight_column(e) {
    var which = $(e.currentTarget).index() + 1;
    // if (debug) console.log("column " + which);
    var el = $(".data-table td:nth-of-type("+ which + "), .data-table th:nth-of-type("+ which + ")");
    el.css({
        background: "#f5f5f5"
    });
    $(e.currentTarget).parent().children("td").css({
        background: "#f5f5f5"
    });
    $(e.currentTarget).css({
        background: "#46beff"
    });
}
function unhighlight_column(e) {
    $(".data-table td, .data-table th").css({
        background: "none"
    });
}

function filltable() {

    var headrow = $(".data-table tbody").append(
        '<tr class="header-row"></tr>'
    );

    var numberheaders = _(6).times(function() {
        return "<th class='header-cell number'>number</th>";
    });
    $(".header-row").append(
        "<th class='header-cell text'>text cell</th>" + numberheaders
    );


    _(20).times(function(ix) {
        var celltext = "<td class='data-cell text'>" +  _.sample(products) + "</td>";
        var cellnums = _(6).times(function() {
            return "<td class='data-cell number'>" + _.random(200) + "." + _.random(10,99) + "</td>";
        });

        $(".data-table tbody").append(
            '<tr class="data-row">' + celltext + cellnums + '</tr>'
        );
    });
}

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
    $(".menu-icon-hover").animate({
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

function xblue(e) {
    if (debug) console.log("hi");
    $(".close-hover").animate({
        opacity: 1
    }, time_fast, easeIn);
    $(".close-nonhover").animate({
        opacity: 0
    }, time_fast, easeIn);
}
function xblack(e) {
    $(".close-hover").animate({
        opacity: 0
    }, time_fast, easeIn);
    $(".close-nonhover").animate({
        opacity: 1
    }, time_fast, easeIn);
}

function toggleopen(e) {

    if (!open) {
        $(".menu-icon-hover").animate({
            opacity: 0,
            "right": "0px"
        }, time_fast, easeIn);
        $(".close-nonhover").animate({
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

        $(".close-nonhover, .close-hover").animate({
            opacity: 0
        }, time_fast, easeIn);

        open = false;
    }

    if (debug) console.log("open: " + open);

}

function switcher(e) {
    $(".data-switch .button").removeClass("active");
    $(this).addClass("active");
}
