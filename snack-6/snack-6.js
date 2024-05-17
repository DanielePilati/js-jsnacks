"use strict";

//Fate generare un numero random da 0 a 10 al computer,

let randomNum = Math.random(0, 10);

// e chiedete all'utente di inserire un suo numero.

let userNum = Number(prompt("inserisci un numero da 0 a 10"));

// Se il numero scelto dall'utente è uguale al numero del computer

if (userNum === randomNum) {
  //informate l'utente che ha vinto,
  alert("YOU WIN!!");
} else {
  //altrimenti ha perso.
  alert("YOU LOOSE");
}
