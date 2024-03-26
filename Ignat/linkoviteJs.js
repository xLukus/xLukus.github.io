document.addEventListener("DOMContentLoaded", () => {
    const mrdaElements = document.querySelectorAll('.mrda, .mrda2, .mrda3');

    const slideOutAnimation = () => {
        mrdaElements.forEach(element => {
            element.classList.remove('slide-out-animation');
            element.removeEventListener('animationend', slideOutAnimation);
        });

        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.add('loaded');
        });
    };

    mrdaElements.forEach(element => {
        element.addEventListener('animationend', slideOutAnimation);
        element.classList.add('slide-out-animation');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const mrdaElements = document.querySelectorAll('.mrda, .mrda2, .mrda3');

    const slideOutAnimation = () => {
        mrdaElements.forEach(element => {
            element.classList.remove('slide-out-animation');
            element.removeEventListener('animationend', slideOutAnimation);
        });

        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.add('loaded');
        });

        document.querySelectorAll('.works-profile').forEach(profile => {
            profile.classList.add('loaded2');
        });
    };

    mrdaElements.forEach(element => {
        element.addEventListener('animationend', slideOutAnimation);
        element.classList.add('slide-out-animation');
    });
});