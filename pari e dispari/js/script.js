// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Chiedere all'utente pari o dispari
var pariODispari = prompt('Pari o dispari?');
console.log(pariODispari);

// Chiedere all'utente un numero da 1 a 5 (numero)
var numeroUtente = parseInt( prompt('Dimmi un numero da 1 a 5') );
console.log(numeroUtente);

// Generare numero random per il computer
var randomNumberComputer = randomNumber(1, 5);
console.log(randomNumberComputer);

// Creare funzione per generare un numero random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Sommare i due numeri

// Stabilire se la somma dei numeri è pari o dispari

// Stampare chi ha vinto