function locoani() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoani();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from("#page1 h1", {
    scale: -2,
    duration:5,
})
gsap.from("#strip i", {
    rotate:360,
    scrollTrigger: {
        // markers:true,
        trigger: "#strip i",
        scroller:"#main",
        start: "top 100%",
        end: "top 10%",
        scrub: 2 
    }
})
gsap.from("#box2 i", {
    rotate:360,
    scrollTrigger: {
        // markers:true,
        trigger: "#box2left p",
        scroller:"#main",
        start: "top 100%",
        end: "top 10%",
        scrub: 2 
    }
})
gsap.from(".glarel", {
    left:"50%",
    duration:2
})
gsap.from(".glarer", {
    left:"50%",
    duration:2
})
gsap.from(".glarerb", {
    left:"50%",
    bottom:"10%",
    scrollTrigger: {
        // markers:true,
        trigger: "#slidercontainer",
        scroller:"#main",
        start: "bottom 70%",
        end: "bottom 50%",
        scrub: 2
    }
})
gsap.from(".glarelb", {
    left:"50%",
    bottom:"10%",
    scrollTrigger: {
        // markers:true,
        trigger: "#slidercontainer",
        scroller:"#main",
        start: "bottom 70%",
        end: "bottom 50%",
        scrub: 2
    }
})