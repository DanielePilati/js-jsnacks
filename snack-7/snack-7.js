"use strict";
//Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

const factor = 2;
let value = 0;
let numCap = 1000;

for (let i = 0; i < numCap; i++) {
  value = value + factor;
  console.log(value);
}

// Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito,

//e stampare tutta la tabellina del 2 fino al numero inserito.
