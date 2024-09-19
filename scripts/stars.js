var numStars = 200;
var starBox = document.querySelector(".starbox");
var boxWidth = starBox.clientWidth;
var boxHeight = starBox.clientHeight;

function createStar() {
    var star = document.createElement("div");
    star.setAttribute("class", "star");

    // Random position
    var x = Math.random() * boxWidth;
    var y = Math.random() * boxHeight;

    // Random size (1-3 pixels)
    var size = Math.random() * 15 + 1;

    //Random mask
    var starmasks = [
        "/resources/images/graphics/svg/star1.svg",
        "/resources/images/graphics/svg/star2.svg",
        "/resources/images/graphics/svg/star3.svg",
        "/resources/images/graphics/svg/star4.svg",
        "/resources/images/graphics/svg/star5.svg"
    ];
    var maskimg = starmasks[Math.floor(Math.random() * starmasks.length)];

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.mask = `url(${maskimg}) center/contain no-repeat`;

    // Random opacity for twinkling effect
    var staranims = [
        "twinkle1 4s infinite ease both",
        "twinkle2 4s infinite ease both",
        "twinkle3 4s infinite ease both"
    ];
    var staranim = staranims[Math.floor(Math.random() * staranims.length)];
    
    star.style.animation = staranim;

    starBox.appendChild(star);
}

// Create stars
for (let i = 0; i < numStars; i++) {
    createStar();
}

// Twinkle effect
setInterval(() => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
        star.style.opacity = Math.random();
    });
}, 1000);

// Resize event listener to adjust stars on window resize
window.addEventListener("resize", () => {
    var stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
        var x = Math.random() * boxWidth;
        var y = Math.random() * boxHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
    });
});
