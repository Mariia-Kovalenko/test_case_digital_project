/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst burger = document.querySelector('.burger');\r\nconst nav = document.querySelector('.nav');\r\n\r\nburger.addEventListener('click', () => {\r\n    if (burger.classList.contains('close')) {\r\n        burger.classList.remove('close');\r\n        if (nav.classList.contains('open')) {\r\n            nav.classList.remove('open')\r\n        }\r\n    } else {\r\n        burger.classList.add('close');\r\n        if (!nav.classList.contains('open')) {\r\n            nav.classList.add('open')\r\n        }\r\n    }\r\n    \r\n});\r\n\r\n// slider\r\nconst slider = document.querySelector('.slider__slides');\r\nconst slides = document.querySelectorAll('.slide');\r\n\r\nconst prevBtn = document.querySelector('#prevBtn');\r\nconst nextBtn = document.querySelector('#nextBtn');\r\n\r\nlet counter = 0;\r\n// const size = slider.clientWidth;\r\n\r\nnextBtn.addEventListener('click', () => {\r\n    if (counter >= slides.length - 1) {\r\n        return;\r\n    }\r\n    slider.style.transition = 'transform 0.4s ease-in-out';\r\n    counter++;\r\n    \r\n    if (counter === slides.length - 1) {\r\n        prevBtn.classList.remove('last')\r\n        nextBtn.classList.add('last')\r\n    }\r\n    slider.style.transform = 'translateX(' + (-document.querySelector('.slider__slides').clientWidth * counter) + 'px)';\r\n});\r\n\r\nprevBtn.addEventListener('click', () => {\r\n    if (counter <= 0) {\r\n        return;\r\n    }\r\n    slider.style.transition = 'transform 0.4s ease-in-out';\r\n    counter--;\r\n\r\n    if (counter === 0) {\r\n        nextBtn.classList.remove('last')\r\n        prevBtn.classList.add('last')\r\n    }\r\n\r\n    slider.style.transform = 'translateX(' + (-document.querySelector('.slider__slides').clientWidth * counter) + 'px)';\r\n});\r\n\r\nfunction reportWindowSize() {\r\n    const width = window.innerWidth;\r\n    console.log(width);\r\n\r\n    if (width > 1024) {\r\n        [].forEach.call(slides, function(slide) {\r\n            // do whatever\r\n            slide.style.minWidth = '700px';\r\n        });\r\n    }\r\n\r\n    if (width <= 1024) {\r\n        [].forEach.call(slides, function(slide) {\r\n            // do whatever\r\n            slide.style.minWidth = '550px';\r\n        });\r\n    }\r\n\r\n    if (width <= 870) {\r\n        [].forEach.call(slides, function(slide) {\r\n            // do whatever\r\n            slide.style.minWidth = '100%';\r\n        });\r\n    }\r\n}\r\n\r\n// window.addEventListener(\"resize\", reportWindowSize);\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;