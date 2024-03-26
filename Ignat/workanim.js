workLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        isShowing = true;
        switch (index) {
            case 0:
                slika.src = '../Ignat/sliki/moonlight mist/4.png';
                break;
            case 1:
                slika.src = '../Ignat/sliki/forest pulse/fp5.png';
                break;
            case 2:
                slika.src = '../Ignat/sliki/bs/bs1.png';
                break;
            case 3:
                slika.src = '../Ignat/sliki/rl/rs2.png';
                break;
            default:
                break;
        }
        if (isShowing == true) {
            cursor.style.opacity = 0;
        }
        image.classList.add('gleda');

    });
});

for (let link of workLinks) {
    link.addEventListener('mouseleave', () => {
        worksWrapper.addEventListener('mouseleave', () => {
            image.classList.remove('gleda')
            isShowing = false;
            cursor.style.opacity = 1;
        })

    })
}

// 
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




let constrain = 50;

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 3)) / constrain;
    let calcY = (x - box.x - (box.width / 3)) / constrain;

    return "perspective(100px) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

worksWrapper.onmousemove = function (e) {
    let xy = [e.clientX + 40, e.clientY];
    let position = xy.concat([image]);

    window.requestAnimationFrame(function () {
        transformElement(image, position);
    });
};


let mouseX = null;
let mouseY = null;
let isMouseMoving = false;
let timeout = null;

// Function to check mouse movement
function checkMouseMovement() {
    if (!isMouseMoving) {
        image.classList.remove('filter')
    }
}

// Event listener to track mouse movement
document.addEventListener('mousemove', function (event) {
    clearTimeout(timeout); // Clear previous timeout
    isMouseMoving = true;
    mouseX = event.clientX;
    mouseY = event.clientY;

    timeout = setTimeout(function () {
        isMouseMoving = false;
        mouseX = null;
        mouseY = null;
        checkMouseMovement();
    }, 200); // Adjust the timeout value as needed (in milliseconds)
});

// Initial check when the script starts
checkMouseMovement();


let prevX = null;
let prevY = null;
let prevTime = null;

document.addEventListener('mousemove', function (event) {
    const currX = event.clientX;
    const currY = event.clientY;
    const currTime = Date.now();

    if (prevX !== null && prevY !== null && prevTime !== null) {
        const distance = Math.sqrt(Math.pow(currX - prevX, 2) + Math.pow(currY - prevY, 2));
        const timeElapsed = currTime - prevTime;
        const speed = distance / timeElapsed; // Speed in pixels per millisecond
        addFilterWithBlur(speed, 500)
    }

    prevX = currX;
    prevY = currY;
    prevTime = currTime;
});
function addFilterWithBlur(speed) {
    const blurValue = Math.min(speed * 1.2, 10); // Adjust multiplier as needed
    const skewValueX = deltaX * 0.1; // Adjust multiplier as needed
    const skewValueY = deltaY * 0.1; // Adjust multiplier as needed
    image.style.filter = `blur(${blurValue}px)`;
    image.style.transform = `skewX(${skewValueX}deg) skewY(${skewValueY}deg)`;
}
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('.tab').forEach(function (tab) {
//         tab.classList.add('loaded');
//     });
//     document.querySelectorAll('.works-profile').forEach(function (lin) {
//         lin.classList.add('loaded2');
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         document.querySelectorAll('.works-text').forEach(function (element, index) {
//             setTimeout(function () {
//                 element.classList.add('animate');
//             }, 500 * (index + 1));
//         });
//     }, 1000);
// });



