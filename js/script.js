new PureCounter();
$(".nav-link").click(function (e) {
    if (e.target.id == "header-link") {
        $("#header").removeClass("header-top");
        // $("section").addClass("dis-none");
    } else {
        $("#header").addClass("header-top");
        // $("section").removeClass("dis-none");
    }
    $(".nav-link").removeClass("active");
    $(e.target).addClass("active");
});

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};

/**
 * Skills animation
 */
let skilsContent = document.querySelector(".skills-content");
if (skilsContent) {
    new Waypoint({
        element: skilsContent,
        offset: "80%",
        handler: function (direction) {
            let progress = select(".progress .progress-bar", true);
            progress.forEach((el) => {
                el.style.width = el.getAttribute("aria-valuenow") + "%";
            });
        },
    });
}
