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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/slider.js */ \"./src/js/module/slider.js\");\n/* harmony import */ var _module_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\n/* harmony import */ var _module_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/scrollAnimation.js */ \"./src/js/module/scrollAnimation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_module_slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_module_burger_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_module_scrollAnimation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ enableBurgerMenu; }\n/* harmony export */ });\nfunction enableBurgerMenu() {\r\n    const burger = document.querySelector(\".burger\");\r\n    const nav = document.querySelector(\".nav\");\r\n\r\n    burger.addEventListener(\"click\", () => {\r\n        if (burger.classList.contains(\"close\")) {\r\n            burger.classList.remove(\"close\");\r\n            if (nav.classList.contains(\"open\")) {\r\n                nav.classList.remove(\"open\");\r\n            }\r\n        } else {\r\n            burger.classList.add(\"close\");\r\n            if (!nav.classList.contains(\"open\")) {\r\n                nav.classList.add(\"open\");\r\n            }\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/scrollAnimation.js":
/*!******************************************!*\
  !*** ./src/js/module/scrollAnimation.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ enableScrollAnimation; }\n/* harmony export */ });\nfunction enableScrollAnimation() {\r\n    const scrollToTopBtn = document.querySelector(\".scrolltop\");\r\n\r\n    scrollToTopBtn.addEventListener(\"click\", () => {\r\n        window.scrollTo(0, 0);\r\n    });\r\n\r\n    // scroll animation\r\n    const observer = new IntersectionObserver((entries) => {\r\n        entries.forEach((entry, i) => {\r\n            if (entry.isIntersecting) {\r\n                entry.target.classList.add(\"show\");\r\n                // if second section visible - show back to top button\r\n                if (entry.target.classList.contains(\"intro\")) {\r\n                    scrollToTopBtn.style.opacity = 0;\r\n                }\r\n                if (!entry.target.classList.contains(\"intro\")) {\r\n                    scrollToTopBtn.style.opacity = 0.8;\r\n                }\r\n            } else {\r\n                entry.target.classList.remove(\"show\");\r\n            }\r\n        });\r\n    });\r\n\r\n    const sections = document.querySelectorAll(\".section\");\r\n    const images = document.querySelectorAll(\".images__img\");\r\n    const projects = document.querySelectorAll(\".projects__item\");\r\n\r\n    sections.forEach((el) => observer.observe(el));\r\n    images.forEach((el) => observer.observe(el));\r\n    projects.forEach((el) => observer.observe(el));\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/scrollAnimation.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ enableSlider; }\n/* harmony export */ });\n\r\n\r\nfunction enableSlider() {\r\n    // slider\r\n    const slider = document.querySelector(\".slider__slides\");\r\n    const slides = document.querySelectorAll(\".slide\");\r\n\r\n    const prevBtn = document.querySelector(\"#prevBtn\");\r\n    const nextBtn = document.querySelector(\"#nextBtn\");\r\n\r\n    let counter = 0;\r\n    // const size = slider.clientWidth;\r\n\r\n    nextBtn.addEventListener(\"click\", () => {\r\n        if (counter >= slides.length - 1) {\r\n            return;\r\n        }\r\n        slider.style.transition = \"transform 0.4s ease-in-out\";\r\n        counter++;\r\n\r\n        if (counter === slides.length - 1) {\r\n            prevBtn.classList.remove(\"last\");\r\n            nextBtn.classList.add(\"last\");\r\n        }\r\n        slider.style.transform =\r\n            \"translateX(\" +\r\n            -document.querySelector(\".slider__slides\").clientWidth * counter +\r\n            \"px)\";\r\n    });\r\n\r\n    prevBtn.addEventListener(\"click\", () => {\r\n        if (counter <= 0) {\r\n            return;\r\n        }\r\n        slider.style.transition = \"transform 0.4s ease-in-out\";\r\n        counter--;\r\n\r\n        if (counter === 0) {\r\n            nextBtn.classList.remove(\"last\");\r\n            prevBtn.classList.add(\"last\");\r\n        }\r\n\r\n        slider.style.transform =\r\n            \"translateX(\" +\r\n            -document.querySelector(\".slider__slides\").clientWidth * counter +\r\n            \"px)\";\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://gulp-starter/./src/js/module/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;