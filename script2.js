var tl = gsap.timeline();

tl.from(".main",{
    opacity:0,
    duration:0.5,
})

tl.from(".nav img ,.nav h4 ,.nav button ",{
    opacity:0,
    duration:0.3,
    delay:0.1,
    y:-20,  
})

tl.from(".main h3",{
    opacity:0,
    x:-20
})

tl.from(".main h3 span",{
    opacity:0,
    scale:-1,
    duration:0.3,
    backgroundColor:"#000",
})

tl.from(".main>img",{
    opacity : 0,
    scale:-1,
    duration:0.4,
})

tl.from(".scroll",{
    opacity:0,
    yoyo:true,
    repeat:-1,
    y:-10,
})
tl.from(".nav button",{
    backgroundColor:"#000",
    color:"#fff",
    repeat:-1,
    duration:2,
    yoyo:true,
})