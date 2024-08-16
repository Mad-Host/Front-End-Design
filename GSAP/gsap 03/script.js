// Gsap code to animate your web.


let tl = gsap.timeline();

tl.from(".nav h1", {
    y:-50,
    duration:1.2,
    opacity:0,
    delay:0.4,
})

tl.from(".nav .nav-links h4", {
    x:-50,
    duration:0.4,
    opacity:0,
    stagger:0.2,
})

tl.from(".home #message", {
    y:50,
    duration:0.5,
    opacity:0,
})

tl.from(".home #dev", {
    x:50,
    duration:0.7,
    opacity:0,

})

tl.from(".home h3",{
    y:-50,
    duration:1,
    opacity:0,

})

gsap.to(".main h1", {
    transform:"translateX(-130%)",
    scrollTrigger:{
        trigger:".main",
        scorller:"body",
        start:"top 0%",
        end:"top -200%",
        pin:true,
        scrub:5,
    }
})





