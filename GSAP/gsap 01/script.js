// gsap animation code.

// gsap.from("h1", {
//     opacity:0,
//     y:100,
//     delay:1,
//     duration:2,
//     stagger:0.5,
// })
// create an timeline in gsap.

let tl = gsap.timeline();

tl.from("h1", {
    opacity:0,
    y:-50,
    duration:2,
    delay:1,
})

tl.from("h4", {
    opacity:0,
    y:-50,
    duration:1,
    stagger:0.5,
})