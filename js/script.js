new PureCounter();
$(".nav-link").click(function (e) {
    if (e.target.id == "header-link") {
        $("#header").removeClass("header-top");
        $("section").addClass("dis-none");
    } else {
        $("#header").addClass("header-top");
        $("section").addClass("dis-none");
        $("section.".concat(e.target.hash.substring(1))).removeClass(
            "dis-none"
        );
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
var intervalId = window.setInterval(function () {
    let skilsContent = document.getElementById("skills");
    if ($("#skills").is(":visible")) {
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
        clearInterval(intervalId);
    }
}, 1000);

/**
 * Mobile nav toggle
 */
$(".mobile-nav-toggle").click(function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
});

/**
 * Scrool with ofset on links with a class name .scrollto
 */

$("#navbar .nav-link").click(function (e) {
    let section = select(this.hash);
    if (section) {
        e.preventDefault();

        let navbar = select("#navbar");
        let header = select("#header");
        let sections = select("section", true);
        let navlinks = select("#navbar .nav-link", true);

        navlinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
        }

        if (this.hash == "#header") {
            header.classList.remove("header-top");
            sections.forEach((item) => {
                item.classList.remove("section-show");
            });
            return;
        }

        if (!header.classList.contains("header-top")) {
            header.classList.add("header-top");
            setTimeout(function () {
                sections.forEach((item) => {
                    item.classList.remove("section-show");
                });
                section.classList.add("section-show");
            }, 350);
        } else {
            sections.forEach((item) => {
                item.classList.remove("section-show");
            });
            section.classList.add("section-show");
        }

        scrollto(this.hash);
    }
});
