// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numeriDaGenerare = 5;
const numeriGenerati = [];
const startBtn = document.querySelector('button');

startBtn.addEventListener ('click', function(){
    generateNum();
});

function generateNum(){
    while(numeriGenerati.length < numeriDaGenerare){
        let num = getRndInteger (1, 100);
        if (!numeriGenerati.includes(num)){
            numeriGenerati.push(num);
        };
    }
    console.log(numeriGenerati);
    return numeriGenerati;
}

// Utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};