/* page transition */
const swup = new Swup({
    containers: ["#swup"],
    animationSelector: '[class*="transition-"]',
    animationScope: "html",
    linkSelector: "a[href]",
    resolveUrl: (url) => {
        if (url.startsWith("/?")) {
            return "/";
        }
        return url;
    }
});

/* header */
var header = document.querySelector("header");
var nav = document.querySelector("nav");
var shrinkHeader = 300;

var navTitle = document.createElement("h1");
navTitle.textContent = "Numinis";
nav.insertAdjacentElement("afterbegin", navTitle);

window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
    var scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}