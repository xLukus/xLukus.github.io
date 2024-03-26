
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".tav", {
        y: -500,
        duration: 1.5,
    })
    gsap.from(".t", {
        opacity: 0,
        y: 100,
        delay: 1,
        stagger: 0.5,
        duration: 2,
    })
    gsap.from(".anim", {
        opacity: 0,
        y: 100,
        delay: 3,
        duration: 2,
    })
    gsap.from(".ignat", {
        opacity: 0,
        y: 100,
        delay: 4,
        duration: 2,
    })
    gsap.from(".one", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".eden",
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }
    })
    gsap.from(".two", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".dva",
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }
    })
    gsap.from(".three", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".tri",
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }
    })
    gsap.from(".four", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".cetiri",
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }
    })
    gsap.from(".five", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".pet",
            start: "bottom bottom", // when the top of the trigger hits the top of the viewport
        }
    })
});

const hover = document.querySelectorAll(".profile-links-hover")
for (let b of hover) {
    b.addEventListener('mouseenter', () => {
        cursor.classList.add('zgolemi')
    })
}

for (let b of hover) {
    b.addEventListener('mouseleave', () => {
        cursor.classList.remove('zgolemi')
    })
}