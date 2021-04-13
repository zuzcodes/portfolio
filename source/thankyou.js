"use strict";

window.addEventListener("DOMContentLoaded", printThankyouText);

const thankyouText = document.querySelector("#thankyou-text");
const phrase = ["Thank you!"];
let i = 0;
let j = 0;
let current = [];

function printThankyouText() {
  thankyouText.innerHTML = current.join("");

  if (i < phrase.length) {
    if (j <= phrase[i].length) {
      current.push(phrase[i][j]);
      j++;
    }

    if (j == phrase[i].length) {
      i++;
    }
  }

  setTimeout(printThankyouText, 400);
}
