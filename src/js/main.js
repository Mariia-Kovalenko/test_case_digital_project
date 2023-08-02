"use strict";

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    if (burger.classList.contains('close')) {
        burger.classList.remove('close');
        if (nav.classList.contains('open')) {
            nav.classList.remove('open')
        }
    } else {
        burger.classList.add('close');
        if (!nav.classList.contains('open')) {
            nav.classList.add('open')
        }
    }
    
});

// slider
const slider = document.querySelector('.slider__slides');
const slides = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
// const size = slider.clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) {
        return;
    }
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    
    if (counter === slides.length - 1) {
        prevBtn.classList.remove('last')
        nextBtn.classList.add('last')
    }
    slider.style.transform = 'translateX(' + (-document.querySelector('.slider__slides').clientWidth * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;

    if (counter === 0) {
        nextBtn.classList.remove('last')
        prevBtn.classList.add('last')
    }

    slider.style.transform = 'translateX(' + (-document.querySelector('.slider__slides').clientWidth * counter) + 'px)';
});

function reportWindowSize() {
    const width = window.innerWidth;
    console.log(width);

    if (width > 1024) {
        [].forEach.call(slides, function(slide) {
            // do whatever
            slide.style.minWidth = '700px';
        });
    }

    if (width <= 1024) {
        [].forEach.call(slides, function(slide) {
            // do whatever
            slide.style.minWidth = '550px';
        });
    }

    if (width <= 870) {
        [].forEach.call(slides, function(slide) {
            // do whatever
            slide.style.minWidth = '100%';
        });
    }
}

// window.addEventListener("resize", reportWindowSize);
