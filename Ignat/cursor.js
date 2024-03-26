const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll('a');



document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

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
