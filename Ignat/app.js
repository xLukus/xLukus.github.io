const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image-follow");
let slika = document.querySelector(".slik");
const links = document.querySelectorAll('a');
const workLinks = document.querySelectorAll('.work-links');
const worksWrapper = document.querySelector('.works-wrapper');

let isShowing = false;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

})
document.addEventListener('mousemove', (e) => {
    image.style.left = e.clientX - 120 + 'px';
    image.style.top = e.clientY - 150 + 'px';
    image.classList.add('filter')

})


for (let link of links) {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('zgolemi')
    })
}

for (let link of links) {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('zgolemi')
    })
}
