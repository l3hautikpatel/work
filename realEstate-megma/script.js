function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector('.main').style.transform ? 'transform' : 'fixed'
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco();

function page1() {
    gsap.to(".right", {
        dealy: 3,
        y: -7,
        duration: 1,
        stagger: 2,
        yoyo: true,
        repeat: -1,
    })
    gsap.to(".right", {
        y: 100,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".right",
            scrub: 3,
            start: "top 85%",
            end: "top 65%",
            id: "arrow",
        }
    })
}
page1();


function fontWhiteEffect(className) {
    var clutter = "";
    document.querySelector(`.${className}>h2`).textContent.split(" ").forEach(function (dets) {
        clutter += `<span> ${dets}</span>`;
        document.querySelector(`.${className}>h2`).innerHTML = clutter;
    })

    gsap.to(`.${className}>h2>span`, {
        color: "#fff",
        scrollTrigger: {
            scroller: ".main",
            trigger: `.${className}>h2`,
            scrub: 3,
            start: "top 80%",
            end: "top 50%",
            // markers: true,
            id: `${className}`
        },
        stagger: 0.3,
    })
}
fontWhiteEffect("page2");
fontWhiteEffect("page4");
fontWhiteEffect("page6");


function canvas() {
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  ./assests/frames00007.png
  ./assests/frames00010.png
  ./assests/frames00013.png
  ./assests/frames00016.png
  ./assests/frames00019.png
  ./assests/frames00022.png
  ./assests/frames00025.png
  ./assests/frames00028.png
  ./assests/frames00031.png
  ./assests/frames00034.png
  ./assests/frames00037.png
  ./assests/frames00040.png
  ./assests/frames00043.png
  ./assests/frames00046.png
  ./assests/frames00049.png
  ./assests/frames00052.png
  ./assests/frames00055.png
  ./assests/frames00058.png
  ./assests/frames00061.png
  ./assests/frames00064.png
  ./assests/frames00067.png
  ./assests/frames00070.png
  ./assests/frames00073.png
  ./assests/frames00076.png
  ./assests/frames00079.png
  ./assests/frames00082.png
  ./assests/frames00085.png
  ./assests/frames00088.png
  ./assests/frames00091.png
  ./assests/frames00094.png
  ./assests/frames00097.png
  ./assests/frames00100.png
  ./assests/frames00103.png
  ./assests/frames00106.png
  ./assests/frames00109.png
  ./assests/frames00112.png
  ./assests/frames00115.png
  ./assests/frames00118.png
  ./assests/frames00121.png
  ./assests/frames00124.png
  ./assests/frames00127.png
  ./assests/frames00130.png
  ./assests/frames00133.png
  ./assests/frames00136.png
  ./assests/frames00139.png
  ./assests/frames00142.png
  ./assests/frames00145.png
  ./assests/frames00148.png
  ./assests/frames00151.png
  ./assests/frames00154.png
  ./assests/frames00157.png
  ./assests/frames00160.png
  ./assests/frames00163.png
  ./assests/frames00166.png
  ./assests/frames00169.png
  ./assests/frames00172.png
  ./assests/frames00175.png
  ./assests/frames00178.png
  ./assests/frames00181.png
  ./assests/frames00184.png
  ./assests/frames00187.png
  ./assests/frames00190.png
  ./assests/frames00193.png
  ./assests/frames00196.png
  ./assests/frames00199.png
  ./assests/frames00202.png
 `;
        return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `#page3`,
            start: `top 100%`,
            end: `top -100%`,
            scroller: `.main`,
            // markers: true,
            id: "canvas",
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page3>canvas",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `250% top`,
    });
}
canvas()


function canvas1() {
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  ./assests/bridges00004.png
  ./assests/bridges00007.png
  ./assests/bridges00010.png
  ./assests/bridges00013.png
  ./assests/bridges00016.png
  ./assests/bridges00019.png
  ./assests/bridges00022.png
  ./assests/bridges00025.png
  ./assests/bridges00028.png
  ./assests/bridges00031.png
  ./assests/bridges00034.png
  ./assests/bridges00037.png
  ./assests/bridges00040.png
  ./assests/bridges00043.png
  ./assests/bridges00046.png
  ./assests/bridges00049.png
  ./assests/bridges00052.png
  ./assests/bridges00055.png
  ./assests/bridges00058.png
  ./assests/bridges00061.png
  ./assests/bridges00064.png
  ./assests/bridges00067.png
  ./assests/bridges00070.png
  ./assests/bridges00073.png
  ./assests/bridges00076.png
  ./assests/bridges00079.png
  ./assests/bridges00082.png
  ./assests/bridges00085.png
  ./assests/bridges00088.png
  ./assests/bridges00091.png
  ./assests/bridges00094.png
  ./assests/bridges00097.png
  ./assests/bridges00100.png
  ./assests/bridges00103.png
  ./assests/bridges00106.png
  ./assests/bridges00109.png
  ./assests/bridges00112.png
  ./assests/bridges00115.png
  ./assests/bridges00118.png
  ./assests/bridges00121.png
  ./assests/bridges00124.png
  ./assests/bridges00127.png
  ./assests/bridges00130.png
  ./assests/bridges00133.png
  ./assests/bridges00136.png
  ./assests/bridges00139.png
  ./assests/bridges00142.png
  ./assests/bridges00145.png
  ./assests/bridges00148.png
  ./assests/bridges00151.png
  ./assests/bridges00154.png
  ./assests/bridges00157.png
  ./assests/bridges00160.png
  ./assests/bridges00163.png
  ./assests/bridges00166.png
  ./assests/bridges00169.png
  ./assests/bridges00172.png
  ./assests/bridges00175.png
  ./assests/bridges00178.png
  ./assests/bridges00181.png
  ./assests/bridges00184.png
  ./assests/bridges00187.png
  ./assests/bridges00190.png
  ./assests/bridges00193.png
  ./assests/bridges00196.png
  ./assests/bridges00199.png
  ./assests/bridges00202.png
`;
        return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .15,
            trigger: `#page5`,
            start: `top 100%`,
            end: `top -100%`,
            scroller: `.main`,
            // markers: true,
            id: "canvas1",
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page5>canvas",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `250% top`,
    });
}
canvas1()


function canvas2() {
    const canvas = document.querySelector("#pagei7>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
  https://thisismagma.com/assets/home/lore/seq/1.webp?2
  https://thisismagma.com/assets/home/lore/seq/2.webp?2
  https://thisismagma.com/assets/home/lore/seq/3.webp?2
  https://thisismagma.com/assets/home/lore/seq/4.webp?2
  https://thisismagma.com/assets/home/lore/seq/5.webp?2
  https://thisismagma.com/assets/home/lore/seq/6.webp?2
  https://thisismagma.com/assets/home/lore/seq/7.webp?2
  https://thisismagma.com/assets/home/lore/seq/8.webp?2
  https://thisismagma.com/assets/home/lore/seq/9.webp?2
  https://thisismagma.com/assets/home/lore/seq/10.webp?2
  https://thisismagma.com/assets/home/lore/seq/11.webp?2
  https://thisismagma.com/assets/home/lore/seq/12.webp?2
  https://thisismagma.com/assets/home/lore/seq/13.webp?2
  https://thisismagma.com/assets/home/lore/seq/14.webp?2
  https://thisismagma.com/assets/home/lore/seq/15.webp?2
  https://thisismagma.com/assets/home/lore/seq/16.webp?2
  https://thisismagma.com/assets/home/lore/seq/17.webp?2
  https://thisismagma.com/assets/home/lore/seq/18.webp?2
  https://thisismagma.com/assets/home/lore/seq/19.webp?2
  https://thisismagma.com/assets/home/lore/seq/20.webp?2
  https://thisismagma.com/assets/home/lore/seq/21.webp?2
  https://thisismagma.com/assets/home/lore/seq/22.webp?2
  https://thisismagma.com/assets/home/lore/seq/23.webp?2
  https://thisismagma.com/assets/home/lore/seq/24.webp?2
  https://thisismagma.com/assets/home/lore/seq/25.webp?2
  https://thisismagma.com/assets/home/lore/seq/26.webp?2
  https://thisismagma.com/assets/home/lore/seq/27.webp?2
  https://thisismagma.com/assets/home/lore/seq/28.webp?2
  https://thisismagma.com/assets/home/lore/seq/29.webp?2
  https://thisismagma.com/assets/home/lore/seq/30.webp?2
  https://thisismagma.com/assets/home/lore/seq/31.webp?2
  https://thisismagma.com/assets/home/lore/seq/32.webp?2
  https://thisismagma.com/assets/home/lore/seq/33.webp?2
  https://thisismagma.com/assets/home/lore/seq/34.webp?2
  https://thisismagma.com/assets/home/lore/seq/35.webp?2
  https://thisismagma.com/assets/home/lore/seq/36.webp?2
  https://thisismagma.com/assets/home/lore/seq/37.webp?2
  https://thisismagma.com/assets/home/lore/seq/38.webp?2
  https://thisismagma.com/assets/home/lore/seq/39.webp?2
  https://thisismagma.com/assets/home/lore/seq/40.webp?2
  https://thisismagma.com/assets/home/lore/seq/41.webp?2
  https://thisismagma.com/assets/home/lore/seq/42.webp?2
  https://thisismagma.com/assets/home/lore/seq/43.webp?2
  https://thisismagma.com/assets/home/lore/seq/44.webp?2
  https://thisismagma.com/assets/home/lore/seq/45.webp?2
  https://thisismagma.com/assets/home/lore/seq/46.webp?2
  https://thisismagma.com/assets/home/lore/seq/47.webp?2
  https://thisismagma.com/assets/home/lore/seq/48.webp?2
  https://thisismagma.com/assets/home/lore/seq/49.webp?2
  https://thisismagma.com/assets/home/lore/seq/50.webp?2
  https://thisismagma.com/assets/home/lore/seq/51.webp?2
  https://thisismagma.com/assets/home/lore/seq/52.webp?2
  https://thisismagma.com/assets/home/lore/seq/53.webp?2
  https://thisismagma.com/assets/home/lore/seq/54.webp?2
  https://thisismagma.com/assets/home/lore/seq/55.webp?2
  https://thisismagma.com/assets/home/lore/seq/56.webp?2
  https://thisismagma.com/assets/home/lore/seq/57.webp?2
  https://thisismagma.com/assets/home/lore/seq/58.webp?2
  https://thisismagma.com/assets/home/lore/seq/59.webp?2
  https://thisismagma.com/assets/home/lore/seq/60.webp?2
  https://thisismagma.com/assets/home/lore/seq/61.webp?2
  https://thisismagma.com/assets/home/lore/seq/62.webp?2
  https://thisismagma.com/assets/home/lore/seq/63.webp?2
  https://thisismagma.com/assets/home/lore/seq/64.webp?2
  https://thisismagma.com/assets/home/lore/seq/65.webp?2
  https://thisismagma.com/assets/home/lore/seq/66.webp?2
  https://thisismagma.com/assets/home/lore/seq/67.webp?2
  https://thisismagma.com/assets/home/lore/seq/68.webp?2
  https://thisismagma.com/assets/home/lore/seq/69.webp?2
  https://thisismagma.com/assets/home/lore/seq/70.webp?2
  https://thisismagma.com/assets/home/lore/seq/71.webp?2
  https://thisismagma.com/assets/home/lore/seq/72.webp?2
  https://thisismagma.com/assets/home/lore/seq/73.webp?2
  https://thisismagma.com/assets/home/lore/seq/74.webp?2
  https://thisismagma.com/assets/home/lore/seq/75.webp?2
  https://thisismagma.com/assets/home/lore/seq/76.webp?2
  https://thisismagma.com/assets/home/lore/seq/77.webp?2
  https://thisismagma.com/assets/home/lore/seq/78.webp?2
  https://thisismagma.com/assets/home/lore/seq/79.webp?2
  https://thisismagma.com/assets/home/lore/seq/80.webp?2
  https://thisismagma.com/assets/home/lore/seq/81.webp?2
  https://thisismagma.com/assets/home/lore/seq/82.webp?2
  https://thisismagma.com/assets/home/lore/seq/83.webp?2
  https://thisismagma.com/assets/home/lore/seq/84.webp?2
  https://thisismagma.com/assets/home/lore/seq/85.webp?2
  https://thisismagma.com/assets/home/lore/seq/86.webp?2
  https://thisismagma.com/assets/home/lore/seq/87.webp?2
  https://thisismagma.com/assets/home/lore/seq/88.webp?2
  https://thisismagma.com/assets/home/lore/seq/89.webp?2
  https://thisismagma.com/assets/home/lore/seq/90.webp?2
  https://thisismagma.com/assets/home/lore/seq/91.webp?2
  https://thisismagma.com/assets/home/lore/seq/92.webp?2
  https://thisismagma.com/assets/home/lore/seq/93.webp?2
  https://thisismagma.com/assets/home/lore/seq/94.webp?2
  https://thisismagma.com/assets/home/lore/seq/95.webp?2
  https://thisismagma.com/assets/home/lore/seq/96.webp?2
  https://thisismagma.com/assets/home/lore/seq/97.webp?2
  https://thisismagma.com/assets/home/lore/seq/98.webp?2
  https://thisismagma.com/assets/home/lore/seq/99.webp?2
  https://thisismagma.com/assets/home/lore/seq/100.webp?2
  https://thisismagma.com/assets/home/lore/seq/101.webp?2
  https://thisismagma.com/assets/home/lore/seq/102.webp?2
  https://thisismagma.com/assets/home/lore/seq/103.webp?2
  https://thisismagma.com/assets/home/lore/seq/104.webp?2
  https://thisismagma.com/assets/home/lore/seq/105.webp?2
  https://thisismagma.com/assets/home/lore/seq/106.webp?2
  https://thisismagma.com/assets/home/lore/seq/107.webp?2
  https://thisismagma.com/assets/home/lore/seq/108.webp?2
  https://thisismagma.com/assets/home/lore/seq/109.webp?2
  https://thisismagma.com/assets/home/lore/seq/110.webp?2
  https://thisismagma.com/assets/home/lore/seq/111.webp?2
  https://thisismagma.com/assets/home/lore/seq/112.webp?2
  https://thisismagma.com/assets/home/lore/seq/113.webp?2
  https://thisismagma.com/assets/home/lore/seq/114.webp?2
  https://thisismagma.com/assets/home/lore/seq/115.webp?2
  https://thisismagma.com/assets/home/lore/seq/116.webp?2
  https://thisismagma.com/assets/home/lore/seq/117.webp?2
  https://thisismagma.com/assets/home/lore/seq/118.webp?2
  https://thisismagma.com/assets/home/lore/seq/119.webp?2
  https://thisismagma.com/assets/home/lore/seq/120.webp?2
  https://thisismagma.com/assets/home/lore/seq/121.webp?2
  https://thisismagma.com/assets/home/lore/seq/122.webp?2
  https://thisismagma.com/assets/home/lore/seq/123.webp?2
  https://thisismagma.com/assets/home/lore/seq/124.webp?2
  https://thisismagma.com/assets/home/lore/seq/125.webp?2
  https://thisismagma.com/assets/home/lore/seq/126.webp?2
  https://thisismagma.com/assets/home/lore/seq/127.webp?2
  https://thisismagma.com/assets/home/lore/seq/128.webp?2
  https://thisismagma.com/assets/home/lore/seq/129.webp?2
  https://thisismagma.com/assets/home/lore/seq/130.webp?2
  https://thisismagma.com/assets/home/lore/seq/131.webp?2
  https://thisismagma.com/assets/home/lore/seq/132.webp?2
  https://thisismagma.com/assets/home/lore/seq/133.webp?2
  https://thisismagma.com/assets/home/lore/seq/134.webp?2
  https://thisismagma.com/assets/home/lore/seq/135.webp?2
  https://thisismagma.com/assets/home/lore/seq/136.webp?2
  
`;
        return data.split("\n")[index];
    }

    const frameCount = 136;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .15,
            trigger: `#pagei7`,
            start: `top 100%`,
            end: `top -100%`,
            scroller: `.main`,
            // markers: true,
            id: "canvas2",
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#pagei7>canvas",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `250% top`,
    });
}
canvas2()

function page7(){

    gsap.to(".page7 .circle",{
        scale:2,
        scrollTrigger:{
            scroller:".main",
            trigger:".page7",
            start:"top 70%",
            end:"top -100%",
            // markers:true,
            id:"page7",
            scrub:3,
        }
    })
    gsap.to(".page7 .circle",{
        opacity:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page7 .circle",
            pin:true,
            start:"top 35%",
            end:"top -100%",
            // markers:true,
            id:"page7-circle",
            scrub:3,
        }
    })
    gsap.to(".page7 .inner-circle",{
        backgroundColor:"#253fe960",
        scrollTrigger:{
            scroller:".main",
            trigger:".page7 .circle",
            start:"top 35%",
            end:"top -100%",
            // markers:true,
            id:"page7-ineer-circle",
            scrub:3,
        }
    })
    gsap.to(".page7",{
        opacity:0,
        scale:1,
        scrollTrigger:{
            scroller:".main",
            trigger:".page7",
            start:"top -120%",
            end:"top -170%",
            // markers:true,
            pin:true,
            id:"page7-end-animation",
            scrub:5,
        }
    })
    gsap.to(".page7 .circle",{
        scale:0.5,
        opacity:0,
        scrollTrigger:{
            scroller:".main",
            trigger:".page7",
            start:"top -150%",
            end:"top -200%",
            // markers:true,
            id:"page7-end-animation",
            scrub:5,
        }
    })

}
page7()


function page9() {
    
    gsap.from(".page9>video",{
        opacity:0,
        scale:3,
        scrollTrigger:{
            scroller:".main",
            trigger:".page9",
            scrub:true,
            // markers:true,
            start:"top 100%",
            end:"top -150%",
            id:"page9-video",
        }
    })

    gsap.to(".page9",{
        scrollTrigger:{
            pin:true,
            pinSpacing:false,
            scroller:".main",
            trigger:".page9",
            start:"top 0%",
            end:"top -100%",
        }
    })
}
page9()