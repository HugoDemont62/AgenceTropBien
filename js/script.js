
let repeat = 0
let yoyo = false

var lastScrollTop = 0;

window.addEventListener('scroll', () => {
        let st = this.scrollY;
        if (st > lastScrollTop){
            console.log("scroll vers le bas");
            yoyo = false
            repeat = 1
        } else {
            yoyo = true
            repeat = 0
            console.log("scroll vers le haut");
        }
        lastScrollTop = st;
});

gsap.registerPlugin(ScrollTrigger)

gsap.from(".article__gsap__left", {
    x: -100,
    duration: 1,
    opacity: 0,
    yoyo : repeat,
    repeat: yoyo,
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

gsap.from(".article__bar", {
    height: 487.5,
    duration: 2,
    scrollTrigger: {
        trigger: ".article__bar",
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
        amount: 0.3,
    },
    scrollTrigger: {
        trigger: ".gspa__title",
        start: "top center",
        end: "bottom center",
    }
})

gsap.from(".convaincu", {
    height: 0,
    duration: 1,
    scrollTrigger: {
        trigger : ".convaincu",
        start: "top center",
        end: "bottom center",
    }
})


gsap.from(".convaincu__title", {
    x: -300,
    duration: 1.5,
    delay: 0.5,
})

gsap.from(".gsap__contact", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: {
      each: 0.2,
      amount: 0.3,
    },
    scrollTrigger: {
        trigger: ".contact__title",
        start: "top center",
        end: "bottom center",
    }
})


