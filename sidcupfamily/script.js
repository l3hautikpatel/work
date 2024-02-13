var curser = document.querySelector(".curser")
var curserblur = document.querySelector(".curser-blur")
document.addEventListener("mousemove", function (dets) {
    // setTimeout(() => {
    //     curser.style.top = dets.y - 10 + "px";
    //     curser.style.left = dets.x - 10 + "px";
    // }, 100);
    // setTimeout(() => {
    //     curserblur.style.left = dets.x - 100 + "px";
    //     curserblur.style.top = dets.y - 100 + "px";
    // }, 350);
    curserblur.style.left = dets.x - 100 + "px";
    curserblur.style.top = dets.y - 100 + "px";
    curser.style.top = dets.y - 10 + "px";
    curser.style.left = dets.x - 10 + "px";
})
// var scrollTop = window.pageYOffset || docuemntElement.scrollTop;
var navh4all = document.querySelectorAll("#nav>h4")
navh4all.forEach(Element => {
    Element.addEventListener("mouseenter", function () {
        curser.style.transition = "all linear 0.3s";
        curser.style.backgroundColor = "transparent";
        // curser.style.height = "70px";
        // curser.style.width = "70px";
        curser.style.scale = 3;
        curser.style.border = "0.4px solid #fff"
    })
    Element.addEventListener("mouseleave", function () {
        curser.style.transition = "none";
        curser.style.backgroundColor = "#95c11e";
        curser.style.scale = 1;
        // curser.style.height = "16px";
        // curser.style.width = "16px";
        curser.style.border = "0px solid #fff"
    })
});


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10px",
        end: "top -11px",
        scrub: 2,
        marker: true,
    }
})


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
        marker: true,
    }
})