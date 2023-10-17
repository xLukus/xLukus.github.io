let p1 = document.querySelector('#p1Display');
let p2 = document.querySelector('#p2Display');
let to = document.querySelector('#playto');
let p1Button = document.getElementById('p1Button');
let p2Button = document.getElementById('p2Button');
let reset = document.getElementById('reset');
let suma1 = 0;
let suma2 = 0;
p1Button.addEventListener('click', function () {
    p1.innerText = suma1 += 1;
    if (p1.innerText === to.value) {
        p1.style.color = 'green';
        p2.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})
p2Button.addEventListener('click', function () {
    p2.innerText = suma2 += 1;
    if (p2.innerText === to.value) {
        p2.style.color = 'green';
        p1.style.color = 'red';
        p1Button.disabled = true;
        p2Button.disabled = true;

    }
})
reset.addEventListener('click', () => {
    suma1 = 0;
    suma2 = 0;
    p1.innerText = suma1;
    p2.innerText = suma2;
    p1.style.color = 'black';
    p2.style.color = 'black';
    p1Button.disabled = false;
    p2Button.disabled = false;
})