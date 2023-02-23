
gsap.registerPlugin(ScrollTrigger)

gsap.from(".article__gsap__left", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".article",
            start: "top center",
            end: "bottom center",
        }
})

gsap.from(".article__gsap__right", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: ".article",
            start: "top center",
            end: "bottom center",
        }
})


gsap.from(".gspa__title", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".gspa__title",
        start: "top center",
        end: "bottom center",
    }
})

gsap.from(".presentation__card", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: {
        each: 0.2,
        from: "center",
        grid: [1,0,2],
        amount: 1,
    },
    scrollTrigger: {
        trigger: ".gspa__title",
        start: "top center",
        end: "bottom center",
    }
})



