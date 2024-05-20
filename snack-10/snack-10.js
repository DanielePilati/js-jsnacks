"use strict";
//Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
let num = null;
// Quando l'utente scriverà 2 volte consecutive lo stesso numero
for (let i = 0; i < 1; i++) {
  let userNum = Number(prompt("inserisci numero"));
  if (userNum === num) {
    break;
  }
  num = userNum;
  i--;
  // allora il programma dovrà terminare.
}
