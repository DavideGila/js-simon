// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numeriDaGenerare = 5;
const numeriGenerati = [];
const startBtn = document.getElementById('start');
const submitBtn = document.getElementById('submit');
const userNum = document.querySelectorAll('input');
const userNumWritten = [];
const checkNum = [];
let msg;
let numberGenerate = document.getElementById('numbergenerate');

startBtn.addEventListener('click', function(){
    generateNum();
    numberGenerate.classList.remove('d-none');
    timeOut();
});

function generateNum(){
    while(numeriGenerati.length < numeriDaGenerare){
        let num = getRndInteger (1, 100);
        if (!numeriGenerati.includes(num)){
            numeriGenerati.push(num);
        };
    }
    console.log(numeriGenerati);
    numberGenerate.innerHTML = numeriGenerati;
    return numeriGenerati;
};

function timeOut(){
    setTimeout(function disappear(){
        numberGenerate.classList.add('d-none');
    }, 30000);
};

submitBtn.addEventListener('click', function(){
    let counter = 0;
    for(let i = 0; i < userNum.length; i++){
        if (!isNaN(parseInt(userNum[i].value))){
            userNumWritten.push(parseInt(userNum[i].value));
        }
        if (numeriGenerati[i] === userNumWritten[i]){
            checkNum.push(userNumWritten[i]);
            counter++;
        }
    };
    if (checkNum.length === numeriDaGenerare) {
        msg = `Vittoria! Hai indovinato ${counter} numeri e sono ${checkNum.join(', ')}`;
        console.log(msg);
    } else {
        msg = `Sconfitta! Hai indovinato solo ${counter} numeri e sono ${checkNum.join(', ')}`;
        console.log(msg);
    }
    console.log(userNumWritten);
    console.log(checkNum);
});

// Utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};