"use strict";
//Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.

const arrayNum = [];

for (let i = 0; i < 1000; i++) {
  let userNum = Number(prompt("inserisci numero"));
  if (arrayNum.includes(userNum)) {
    alert("hai scritto due volte lo stesso numero");
    break;
  } else {
    arrayNum.push(userNum);
  }
}

// Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.
