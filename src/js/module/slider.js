"use strict";

export default function enableSlider() {
    // slider
    const slider = document.querySelector(".slider__slides");
    const slides = document.querySelectorAll(".slide");

    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    let counter = 0;
    // const size = slider.clientWidth;

    nextBtn.addEventListener("click", () => {
        if (counter >= slides.length - 1) {
            return;
        }
        slider.style.transition = "transform 0.4s ease-in-out";
        counter++;

        if (counter === slides.length - 1) {
            prevBtn.classList.remove("last");
            nextBtn.classList.add("last");
        }
        slider.style.transform =
            "translateX(" +
            -document.querySelector(".slider__slides").clientWidth * counter +
            "px)";
    });

    prevBtn.addEventListener("click", () => {
        if (counter <= 0) {
            return;
        }
        slider.style.transition = "transform 0.4s ease-in-out";
        counter--;

        if (counter === 0) {
            nextBtn.classList.remove("last");
            prevBtn.classList.add("last");
        }

        slider.style.transform =
            "translateX(" +
            -document.querySelector(".slider__slides").clientWidth * counter +
            "px)";
    });
}
