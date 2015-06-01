// add any scripting here

var debug = true;

$(document).ready(function() {
    $(".sub-menu li").click(opensubmenu);
});

function opensubmenu(e) {

    /*

     notes:
     - blue click shouldn't close

     */

    if( $(e.target).closest(".view-manipulators").length === 0 ){
        var mama = $(e.target).closest(".sub-menu li"); // containing li element
        var sister = $(mama).children(".label");
        // if (debug) console.log("mama (width " + mama.outerWidth() + "): ");
        // if (debug) console.log(mama);
        // if (debug) console.log("sister: " + sister.html());
        // if (debug) console.log("sister width: " + sister.outerWidth());


        // list of glyphicons for side-menu drawer
        var babies = $('<div>').addClass('view-manipulators').html([
            "<span class='glyphicons-half glh-config'></span>",
            "<span class='glyphicons-half glh-duplicate'></span>",
            "<span class='glyphicons-half glh-trash'></span>",
            "<span class='glyphicons-half glh-export'></span>",
            "<span class='glyphicons-half glh-pin'></span>"
        ]);

        if ($(mama).hasClass("open") === false) {
            // menu is closed, so open it:
            $(mama).append(babies);
            $(mama).addClass("open");
            if (debug) console.log(mama.outerWidth() - (sister.outerWidth() + 30 + babies.outerWidth()));
            $(babies).animate({"opacity": 1}, 150, "easeInQuad");
            $(sister).animate({
                'margin-left': mama.outerWidth() - (sister.outerWidth() + 30 + babies.outerWidth()) + "px"
            }, 200, "easeOutQuad");


        }
        else {
            // menu is open, so shut it:

            $(mama).children(".view-manipulators").animate({
                "opacity" : 0
            }, 150, "easeOutQuad", function() {
                $(mama).children(".view-manipulators").remove();
            });
            $(sister).animate({'margin-left': ""}, 200, "easeInQuad");

            $(mama).removeClass("open");
        }
    }

}
