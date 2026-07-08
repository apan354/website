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
