gsap.from("#page1 #circle",{
    scale:0,
    delay:0.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scrollTrigger:'body',
      
    }
})

gsap.from("#page2 #circle",{
    scale:0,
    delay:0.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scrollTrigger:'body',
        marker:true,
        start:"top 60% ",
        end:"30%",
        scrub:true
    }
})
gsap.from("#page3 #circle",{
    scale:0,
    delay:0.5,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scrollTrigger:'body',
        marker:true,
        start:"top 60% ",
        end:"30%",
        scrub:true
    }
})