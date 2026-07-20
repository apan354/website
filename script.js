$(".gall-img").hover(
    function () {
        const imgLoc = this.getBoundingClientRect(); // returns image's location

        let xOrigin = "center";
        let yOrigin = "center";

        // horizontal
        if (imgLoc.left < 100) {
            xOrigin = "left";
        } else if ($(window).width() - imgLoc.right < 100) {
            xOrigin = "right";
        }

        // vertical
        if (imgLoc.top < 100) {
            yOrigin = "top";
        } else if ($(window).height() - imgLoc.bottom < 100) {
            yOrigin = "bottom";
        }

        $(this).css("transform-origin", xOrigin + " " + yOrigin);
    },
    function () {
        $(this).css("transform-origin", "center center");
    }
);

// $("#pear a").on("click", function(evt) {
//     evt.preventDefault();
//     $(".popup").show();
// });

// $(".close-btn").on("click", function() {
//     $(".popup").hide();
// });

$("#pear img, #pear h2").click(function (evt) {
    evt.preventDefault();
    $("#pear-popup").show();
});

$(".close-btn").click(function() {
    $("#pear-popup").hide()
    // $(".popup").css("display", "none");
});
