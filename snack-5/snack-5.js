"use strict";

// Crea un array vuoto.

const numbers = [];

//Chiedi per 6 volte all’utente di inserire un numero,

for (let i = 0; i <= 5; i++) {
  let num = Number(prompt("inserisci numero"));

  //se è dispari inseriscilo nell’array.

  if (num % 2) {
    numbers.push(num);
  }
}

//Stampa l'array alla fine.

console.log(numbers);
