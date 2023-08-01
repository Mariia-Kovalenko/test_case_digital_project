"use strict";

import sum from './module/sum.js';

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
    
})



