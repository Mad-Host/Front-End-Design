// Gsap code to animate web.


let tl = gsap.timeline({scrollTrigger:{
    trigger: ".main",
    scroller: "body",
    markers: true,
    start: "50% 50%",
    end: "100% 50%",
    pin: true,
    scrub:2,
}})


tl.to('.top', {
    top: "-50%",
}, "sc")

tl.to('.bottom', {
    bottom: "-50%"
}, "sc")

tl.to('.top #top-h1', {
    top: "150%"
},"sc")

tl.to('.bottom #bottom-h1', {
    top: "-50%",
}, "sc")

