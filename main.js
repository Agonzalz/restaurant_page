/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n  \n    const contactDiv = document.createElement('div');\n    contactDiv.classList.add('contact');\n  \n    const headline = document.createElement('h1');\n    headline.textContent = 'Contact Us';\n  \n    const phone = document.createElement('p');\n    phone.textContent = '📞 Phone: (123) 456-7890';\n  \n    const email = document.createElement('p');\n    email.textContent = '📧 Email: contact@gourmetpalace.com';\n  \n    const address = document.createElement('p');\n    address.textContent = '📍 Address: 123 Flavor Street, Food City';\n  \n    contactDiv.appendChild(headline);\n    contactDiv.appendChild(phone);\n    contactDiv.appendChild(email);\n    contactDiv.appendChild(address);\n  \n    content.appendChild(contactDiv);\n  }\n  \n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.getElementById('content');\n    const homeDiv = document.createElement('div');\n    homeDiv.innerHTML = `\n      <h1>Welcome to My Restaurant!</h1>\n      <p>Enjoy the best dishes in town.</p>\n    `;\n    content.appendChild(homeDiv);\n  }\n  \n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction clearContent() {\n  const content = document.getElementById('content');\n  content.innerHTML = '';\n}\n\ndocument.getElementById('homeBtn').addEventListener('click', () => {\n  clearContent();\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\ndocument.getElementById('menuBtn').addEventListener('click', () => {\n  clearContent();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\ndocument.getElementById('contactBtn').addEventListener('click', () => {\n  clearContent();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n// Load home by default\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n  \n    const menuDiv = document.createElement('div');\n    menuDiv.classList.add('menu');\n  \n    const headline = document.createElement('h1');\n    headline.textContent = 'Our Menu';\n  \n    const menuList = document.createElement('ul');\n  \n    const menuItems = [\n      {\n        name: 'Grilled Salmon',\n        description: 'Fresh Atlantic salmon grilled to perfection.',\n      },\n      {\n        name: 'Filet Mignon',\n        description: 'Tender beef filet served with garlic mashed potatoes.',\n      },\n      {\n        name: 'Lobster Bisque',\n        description: 'Creamy soup made from fresh lobster and herbs.',\n      },\n      {\n        name: 'Chocolate Lava Cake',\n        description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',\n      },\n    ];\n  \n    menuItems.forEach(item => {\n      const listItem = document.createElement('li');\n      const itemName = document.createElement('h3');\n      itemName.textContent = item.name;\n  \n      const itemDesc = document.createElement('p');\n      itemDesc.textContent = item.description;\n  \n      listItem.appendChild(itemName);\n      listItem.appendChild(itemDesc);\n      menuList.appendChild(listItem);\n    });\n  \n    menuDiv.appendChild(headline);\n    menuDiv.appendChild(menuList);\n  \n    content.appendChild(menuDiv);\n  }\n  \n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;