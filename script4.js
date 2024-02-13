var tl = gsap.timeline();

tl.from(".nav",{
    opacity:0,
    duration:0.5,
    x:1000
})

gsap.to(".profileP0, .profileP1, .profileP2",{
    duration:4,
    dealy:1,
    stagger:1,
    rotate:360,
    // repeat:-1,
})

gsap.from(".logout, .arrow",{
    duration:4,
    dealy:1,
    stagger:1,
    rotate:360,
    repeat:-1,
})

tl.from(".nav h4 ,.navPart2 ,.navPart3",{
    y:-40,
    duration:0.5,
    opacity:0,
    stagger:0.3,
})

tl.from(".container1 .upper h4 ,.container1 .upper h3",{
    stagger:0.1,
    scale:10,
    opacity: 0,
})

gsap.from(".container1 .lower h3, .lower",{
    stagger:0.1,
    scale:100,
    opacity: 0,
})



gsap.from(".box ,.box1",{
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 40%",
        end:"top 20%",
        // markers:true,
        scrub:5,
    }
})


gsap.from(".box .tag",{
    y:20,
    dealy:0.3,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 37%",
        end:"top 20%",
        // markers:true,
        scrub:5,
    }
})



