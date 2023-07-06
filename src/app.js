/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "k"
  ];
  let random = Math.random() * ranks.length;
  let randomSuits = Math.random() * suits.length;
  let randomCard = Math.floor(random);
  let randomCardsuits = Math.floor(randomSuits);
  let currentSuits = suits[randomCardsuits];
  document.querySelector(".suitsTop").innerHTML = currentSuits;
  if (currentSuits === "&#9829" || currentSuits === "&#9830") {
    document.querySelector(".suitsTop").classList.add("red");
    document.querySelector(".suitsBottom").classList.add("red");
  }
  document.querySelector(".suitsBottom").innerHTML = currentSuits;
  document.querySelector(".ranks").innerHTML = ranks[randomCard];
};
