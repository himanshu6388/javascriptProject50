

var tl = gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    opactiy:0,
    duration:0.8,
    delay:0.4,
    stagger:0.3
})

tl.from("#main h1",{
    x:-1200,
    opactiy:0,
    duration:0.8,
    stagger:0.4
})