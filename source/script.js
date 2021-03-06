"use strict";

// INIT SET UP

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("open");
  });

  document.querySelectorAll(".navbar-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector(".navigation").classList.toggle("open");
    });
  });

  document.querySelector("#next").addEventListener("click", goToNextSlide);
  document.querySelector("#previous").addEventListener("click", goToPreviousSlide);
  document.querySelector("#up").addEventListener("click", backToTop);

  printIntroText();
}

// TEXT PRINT

const introText = document.querySelector("#intro-text");
const phrases = ["Hello!", "My name is Zuz.", "Welcome to my portfolio website."];
let i = 0;
let j = 0;
let currentPhrase = [];
let deleting = false;
let printFinished = false;

function printIntroText() {
  printFinished = false;
  introText.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!deleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      introText.innerHTML = currentPhrase.join("");
    }

    if (deleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      introText.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      printFinished = true;
      deleting = true;
    }

    if (deleting && j === 0) {
      currentPhrase = [];
      deleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const increasedSpeed = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = printFinished ? 2000 : deleting ? increasedSpeed : normalSpeed;
  setTimeout(printIntroText, time);
}

// ANIMATION ON SCROLL

let tl_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "bottom bottom bottom",
  },
});
tl_1
  .from(".rectangle-1", { y: -300, opacity: 0, duration: 1 })
  .from(".rectangle-2", { x: -300, opacity: 0, duration: 1 })
  .from(".content", { y: 200, opacity: 0, duration: 1 })
  .from(".avatar", { y: -200, opacity: 0, duration: 1 }, "=-1");


// SKILLS SECTION - CARD SLIDER

let slidePosition = 0;
const slides = document.querySelectorAll(".slide");
const allSlides = slides.length;

function updatePosition() {
  for (let slide of slides) {
    slide.classList.remove("visible");
    slide.classList.add("hidden");
  }
  slides[slidePosition].classList.add("visible");
}

function goToNextSlide() {
  if (slidePosition === allSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();
}

function goToPreviousSlide() {
  if (slidePosition === 0) {
    slidePosition = allSlides - 1;
  } else {
    slidePosition--;
  }
  updatePosition();
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
