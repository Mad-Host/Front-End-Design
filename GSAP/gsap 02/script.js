// gsap code to animate CSS elements.

gsap.to(".box1", {
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor: "purple",
    yoyo:true,
    repeat:1,
})

gsap.from(".box2", {
    x:1000,
    delay:1,
    duration:4,
    scale:0.5,
    backgroundColor: "#dadada",
    rotate:360,
    borderRadius:"50%",
    repeat:1,
    yoyo:true,
})

gsap.to(".box3", {
    x:1000,
    delay:1,
    backgroundColor: "red",
    duration:3,
    rotate:760,
    borderRadius:"50%",
    yoyo:true,
    repeat:1,
})