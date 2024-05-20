"use strict";
//Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.

const factor = 2;
let value = 0;

// Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito,
let numCap = Number(prompt("inserisci nummero massimo"));

for (; value < numCap; ) {
  value = value + factor;
  //e stampare tutta la tabellina del 2 fino al numero inserito.
  console.log(value);
}
