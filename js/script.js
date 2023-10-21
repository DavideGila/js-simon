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

startBtn.addEventListener('click', function(){
    generateNum();
});

function generateNum(){
    while(numeriGenerati.length < numeriDaGenerare){
        let num = getRndInteger (1, 10);
        if (!numeriGenerati.includes(num)){
            numeriGenerati.push(num);
        };
    }
    console.log(numeriGenerati);
    return numeriGenerati;
}

submitBtn.addEventListener('click', function(){
    for(let i = 0; i < userNum.length; i++){
        if (!isNaN(parseInt(userNum[i].value))){
            userNumWritten.push(parseInt(userNum[i].value));
        }
        if (numeriGenerati[i] === userNumWritten[i]){
            checkNum.push(userNumWritten[i]);
        }
    };
    console.log(checkNum);
})

// Utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};