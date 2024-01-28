

const trigger = document.querySelector(".container7");
const sekcija = document.querySelector(".wrapper");


let scrollTween = gsap.to(sekcija, {
    xPercent: -65,
    ease: "none",
    scrollTrigger: {
        trigger: ".container7",
        pin: true,
        scrub: 1,
        end: "+=2000"
    }
})
gsap.from(".sal", {
    x: -1000,
    ease: "none",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".part1",
        scrub: 1,
        end: "+=1000",
    }
})
gsap.from(".textanim", {
    y: -100,
    opacity: 0,
    ease: "none",
    markers: true,
    scrollTrigger: {
        trigger: ".part1",
        scrub: 1,
        end: "+=500",
    }
})
gsap.from(".cenaaa", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".part2",
        scrub: 1,
        end: "+=1000",
    }
})
function loading() {
    window.addEventListener("load", function () {
        gsap.from(".logo", {
            x: -300,
            duration: 2,
        })
        gsap.from(".call", {
            x: 300,
            duration: 2,

        })
        gsap.from(".links", {
            y: -100,
            opacity: 1,
            stagger: 0.7,
            duration: 0.5,
            delay: 1,
        })
        gsap.from(".relativeSlikaImg", {
            x: 1500,
            duration: 1,
            delay: 1.2,
        })
        gsap.from(".absSlika", {

            duration: 1,
            delay: 0.8,
        })
        gsap.from(".text", {
            opacity: 0,
            duration: 0.5,
            delay: 0.8,
        })
    })
}
setInterval(loading(), 1000)


let mySplitTextOne = new SplitType(".animateOne")
gsap.from(mySplitTextOne.words, {
    yPercent: 200,
    stagger: 0.4,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".del",
        scrub: 1,
        start: "top 50%",
        end: "+=400",
    }
})
let mySplitTextTwo = new SplitType(".animateTwo")
gsap.from(mySplitTextTwo.words, {
    yPercent: 1000,
    stagger: 0.1,
    opacity: 0,
    duration: 5,
    scrollTrigger: {
        duration: 2,
        trigger: ".del",
        scrub: 1,
        start: "top 50%",
        end: "+=400",
    }
})
let mySplitTextThree = new SplitType(".animateThree")
gsap.from(mySplitTextThree.words, {
    yPercent: 1000,
    stagger: 0.1,
    opacity: 0,
    duration: 5,
    scrollTrigger: {
        duration: 3,
        delay: 1,
        trigger: ".del",
        scrub: 1,
        start: "top 50%",
        end: "+=400",
    }
})
let button = document.querySelector(".logo")
button.addEventListener("click", function () {
    document.querySelector("#center").classList.add(".gleda")
})
