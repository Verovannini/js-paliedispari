// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Chiedere una parola all'utente con prompt
var parolaUtente = prompt('Inserisci una parola');

// Attivare la funzione quando l'untente inserisce una parola
var palindromaSiONo = palindroma(parolaUtente);

// Stampare messaggio all'utente
document.getElementById('parola-palindroma').innerHTML = 'La parola che hai inserito è: ' + palindromaSiONo;


// Creare una funzione per capire se una parola è palindroma
// 
// Funzione palindroma definisce se una parola è palindroma o no
// 
// stringaDaValutare -> stringa da valutare per capire se è palindroma o no
// 
// return: da come risultato una stringa: 'palindroma' o 'non palindroma'

function palindroma(stringaDaValutare) {

    var stringaAlContrario = '';
    for ( i = stringaDaValutare.length - 1 ; i >= 0 ; i-- ) {
        stringaAlContrario += stringaDaValutare[i];
    }

    var risultato;
    if (stringaDaValutare == stringaAlContrario) {
        risultato = 'palindroma';
    } else {
        risultato = 'non palindroma';
    }

    return risultato;
}