// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Chiedere all'utente pari o dispari
var pariODispari = prompt('Pari o dispari?');

// Chiedere all'utente un numero da 1 a 5 (numero)
var numeroUtente = parseInt( prompt('Dimmi un numero da 1 a 5') );

// Generare numero random per il computer
var randomNumberComputer = randomNumber(1, 5);

// Sommare i due numeri
var sommaNumeri = somma(numeroUtente, randomNumberComputer);

// Stabilire se la somma dei numeri è pari o dispari
var OddEven = numeroPariODispari(sommaNumeri);

// Confrontare PariODispari con OddEven e stampare chi ha vinto
var messaggio;
if( pariODispari == OddEven ) {
    messaggio = 'Hai vinto!';
} else {
    messaggio = 'Hai perso!';
}
alert(messaggio);


// Creare funzione per generare un numero random
// 
// Funzione che genera un numero random
// 
// min -> Inserire un numero che sarà il minimo generabile
// max -> Inserire un numero che sarà il massimo generabile
// 
// return: ritorna un numero compreso tra il minimo e il massimo
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione che somma due numeri
// 
// num1 e num2 -> inserire due numeri che poi verranno sommati
// 
// return: ritorna la somma dei numeri
function somma(num1, num2) {
    var risultato = num1 + num2;
    return risultato;
}

// Funzione che stabilisce se un numero è pari o dispari
// 
// numero -> inserire un numero
// 
// return: ritorna 'pari' se la parola è pari e 'dispari' se è dispari
function numeroPariODispari(numero){
    var risultatoPariODispari;

    if(numero % 2 == 0) {
        risultatoPariODispari = 'pari';
    } else {
        risultatoPariODispari = 'dispari';
    }
    return risultatoPariODispari;
}