"use strict";
(self["webpackChunkwebpack_practice"] = self["webpackChunkwebpack_practice"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
//index.js



function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack2";

  console.log(_index_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
  element.classList = _index_css__WEBPACK_IMPORTED_MODULE_1__["default"].helloWebpack;

  return element;
}

document.body.appendChild(component(1));
console.log($(`.${_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].helloWebpack}`).length);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"helloWebpack":"Bu81rM4M_0nFgiKXH45K"});

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);