document.addEventListener("DOMContentLoaded", function () {
    let preloader = document.querySelector(".preloader");
    let loaded = localStorage.getItem("pageLoaded");

    if (!loaded) {
        playLoader();
    } else {
        startAnimations();
    }

    function playLoader() {
        let brojka = document.querySelector('.broenje');
        let i = 0;
        let interval = setInterval(function () {
            brojka.innerHTML = i;
            i++;
            if (i > 100) {
                clearInterval(interval);
                gsap.to(preloader, {
                    y: -1200,
                    onComplete: function () {
                        localStorage.setItem("pageLoaded", true);
                        startAnimations();
                    }
                });
            }
        }, 50);
    }

    function startAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".content", {
            opacity: 1,
            duration: 1.5, // Added duration
        });
        gsap.from(".tav", {
            y: -500,
            opacity: 0,
            duration: 1.5,
        });
        gsap.from(".tav2", {
            y: 500,
            opacity: 0,
            duration: 1.5,
        });
        gsap.from(".text", {
            delay: 1.8,
            duration: 1.5,
            opacity: 0,
        });
        gsap.from(".text2", {
            delay: 1.5,
            duration: 1.5,
            opacity: 0,
        });
    }

    window.addEventListener("beforeunload", function () {
        localStorage.removeItem("pageLoaded");
    });
});
