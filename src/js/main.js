"use strict";

import sum from './module/sum.js';

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    if (burger.classList.contains('close')) {
        burger.classList.remove('close');
    } else {
        burger.classList.add('close');
    }
    
})
