const divs = document.querySelectorAll('.blcok');
const win = document.querySelector('.win');
const button = document.querySelector('button');
let text = document.getElementById('text');
let isX = true;
let brojac = 0;


// --------------------DALI E PRAZNO
function isEmpty(div) {
    if (div.innerText === '') {
        return true;
    } else {
        return false;
    }
}
// ----------------------------KLIKNI STAJ ZNAK
for (let div of divs) {
    div.addEventListener('click', function () {
        if (isEmpty(div)) {
            if (isX === true) {
                div.innerText = 'X';
                isX = false;
                

            } else {
                div.innerText = 'O';
                isX = true;
               
            } 
            brojac++;
        }
        // ------------------KOGA POBEDE
        if (isWin(divs) === 'X WON' || isWin(divs) === 'O WON') {
            win.innerText = isWin(divs);
        

        }
        else if (brojac ===9) {
            win.innerText = 'DRAW';
        }
    })

}

// ------------------------------------RESET
button.addEventListener('click', function () {
    for (div of divs) {
        div.innerText = '';
        win.innerText = '';
    }
    brojac=0;
    isX = true;

});

// -------------------WINING KOMBINACIII
function isWin(divs) {
    if (divs[0].innerText === 'X' && divs[1].innerText === 'X' && divs[2].innerText === 'X' ||
        divs[3].innerText === 'X' && divs[4].innerText === 'X' && divs[5].innerText === 'X' ||
        divs[6].innerText === 'X' && divs[7].innerText === 'X' && divs[8].innerText === 'X' ||
        divs[0].innerText === 'X' && divs[3].innerText === 'X' && divs[6].innerText === 'X' ||
        divs[1].innerText === 'X' && divs[4].innerText === 'X' && divs[7].innerText === 'X' ||
        divs[2].innerText === 'X' && divs[5].innerText === 'X' && divs[8].innerText === 'X' ||
        divs[0].innerText === 'X' && divs[4].innerText === 'X' && divs[8].innerText === 'X' ||
        divs[2].innerText === 'X' && divs[4].innerText === 'X' && divs[6].innerText === 'X'
    ) {
        return 'X WON'
        //win.innerText='X WON';
    } else if (divs[0].innerText === 'O' && divs[1].innerText === 'O' && divs[2].innerText === 'O' ||
        divs[3].innerText === 'O' && divs[4].innerText === 'O' && divs[5].innerText === 'O' ||
        divs[6].innerText === 'O' && divs[7].innerText === 'O' && divs[8].innerText === 'O' ||
        divs[0].innerText === 'O' && divs[3].innerText === 'O' && divs[6].innerText === 'O' ||
        divs[1].innerText === 'O' && divs[4].innerText === 'O' && divs[7].innerText === 'O' ||
        divs[2].innerText === 'O' && divs[5].innerText === 'O' && divs[8].innerText === 'O' ||
        divs[0].innerText === 'O' && divs[4].innerText === 'O' && divs[8].innerText === 'O' ||
        divs[2].innerText === 'O' && divs[4].innerText === 'O' && divs[6].innerText === 'O') {
        //win.innerText='O WON';
        return 'O WON'
    }

}
