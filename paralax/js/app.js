const body = document.querySelector('body');
const paralax_el = document.querySelectorAll(".paralax");

document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const slika1 = document.querySelector(".slika1");
    slika1.style.bottom = 49 - scrollY * 0.1 + "px";
    slika1.style.width = 150 + scrollY * 0.1 + "px";
    slika1.style.height = 200 + scrollY * 0.1 + "px";
});
document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const slika2 = document.querySelector(".slika2");
    slika2.style.top = 195 + scrollY * 0.2 + "px";
    slika2.style.width = 316 + scrollY * 0.1 + "px";
    slika2.style.height = 491 + scrollY * 0.1 + "px";
});
document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const slika3 = document.querySelector(".slika3");
    // slika3.style.bottom = scrollY + "px";
    slika3.style.width = 1084 + scrollY * 0.2 + "px";
    slika3.style.height = 644 + scrollY * 0.2 + "px";
});
document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const slika4 = document.querySelector(".slika4");
    slika4.style.width = 1920 + scrollY * 0.1 + "px";
    slika4.style.height = 1080 + scrollY * 0.1 + "px";
});


document.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const text1 = document.querySelector(".text1");
    text1.style.width = 961 + scrollY * 0.5 + "px";
    text1.style.height = 133 + scrollY * 0.12 + "px";
});









