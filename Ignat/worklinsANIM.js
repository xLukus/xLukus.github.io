
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".tav", {
        y: -500,
        duration: 1,
    })
    gsap.from(".text-move", {
        opacity: 0,
        y: 200,
        delay: 1,
        duration: 1.5,
    })
    gsap.from(".bs1", {
        opacity: 0,
        y: -500,
        delay: 1,
        duration: 1,
    })
    gsap.from(".visit-website", {
        y: 100,
        delay: 0.5,
        duration: 0.5,
    })
    gsap.from(".mix", {
        y: 100,
        opacity: 0,

        duration: 0.5,
        scrollTrigger: {
            trigger: ".bs-full-tigger",
            start: "top 50%",
            end: "+=400px"
        }
    })
    gsap.from(".bs-80", {
        y: 100,

        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".bs-full3",
            start: "top 20%",
            end: "+=400px"
        }
    })


})
let myText = new SplitType(".splitTransition");
gsap.from(myText.words, {
    yPercent: 200,
    stagger: 0.1,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        duration: 2,
        trigger: ".splitContainer",
        scrub: 1,
        start: "top 50%",
        end: "+=400",
    }
})
gsap.to("#progressBar", {
    scaleY: 0, // Start with scaleY at 0
    transformOrigin: "top", // Scale from top
    ease: "none", // Linear easing
    scrollTrigger: {

        trigger: ".bs-80 ", // Trigger animation when .content is reached
        start: "top 400px", // Start animation when top of .content reaches top of viewport
        end: "bottom +=500", // End animation when bottom of .content reaches bottom of viewport
        scrub: true, // Smooth scrubbing
        onUpdate: self => {
            const progress = self.progress;
            gsap.set("#progressBar", { scaleY: progress * 1.2 }); // Update scaleY of progress bar
        }
    }
});
const mix = document.querySelectorAll('.bs-full-tigger');
for (let a of mix) {
    a.addEventListener('mouseenter', () => {
        cursor.classList.add('zgolemi')
    })
}

for (let a of mix) {
    a.addEventListener('mouseleave', () => {
        cursor.classList.remove('zgolemi')
    })
}
const mix2 = document.querySelectorAll('.bs-80');
for (let a of mix2) {
    a.addEventListener('mouseenter', () => {
        cursor.classList.add('zgolemi')
    })
}

for (let a of mix2) {
    a.addEventListener('mouseleave', () => {
        cursor.classList.remove('zgolemi')
    })
}