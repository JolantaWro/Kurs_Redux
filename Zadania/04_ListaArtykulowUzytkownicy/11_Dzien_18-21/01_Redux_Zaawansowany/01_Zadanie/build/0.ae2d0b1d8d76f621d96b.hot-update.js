"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_PRODUCT": () => (/* binding */ ADD_PRODUCT),
/* harmony export */   "addProduct": () => (/* binding */ addProduct)
/* harmony export */ });
var ADD_PRODUCT = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

var addProduct = function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
};

// export const removeProduct = (product) => ({
//     type: REMOVE_PRODUCT,
//     payload: product
// })

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerProducts": () => (/* binding */ reducerProducts)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions/products";

// function maxIdProducts(array) {
//     const maxId = array.reduce((maxId, element) => Math.max(element.id, maxId), -1)
//     return maxId + 1
// }


var initialStateProducts = [];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateProducts;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [action.payload]);
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a2c51bde592bac3c3aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZTJkMGIxZDhkNzZmNjIxZDk2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLGFBQWE7QUFDeEM7O0FBRU8sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLE9BQU87RUFBQSxPQUFNO0lBQ3BDQyxJQUFJLEVBQUVILFdBQVc7SUFDakJJLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2dEO0FBRWhELElBQU1HLG9CQUFvQixHQUFHLEVBQUU7QUFDeEIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQTRDO0VBQUEsSUFBeENDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUVILG9CQUFvQjtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMvRCxRQUFRQyxNQUFNLENBQUNSLElBQUk7SUFDZixLQUFLSCwwREFBVztNQUNaLFVBQUFZLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV04sS0FBSyxJQUFFSSxNQUFNLENBQUNQLE9BQU87SUFDcEM7SUFDQTtJQUNBO01BQ0ksT0FBT0csS0FBSztFQUFBO0FBRXhCLENBQUM7Ozs7Ozs7O1VDcEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfUFJPRFVDVCA9IFwiQUREX1BST0RVQ1RcIjtcbi8vIGV4cG9ydCBjb25zdCBSRU1PVkVfUFJPRFVDVCA9IFwiUkVNT1ZFX1BST0RVQ1RcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdCkgPT4gKHtcbiAgICB0eXBlOiBBRERfUFJPRFVDVCxcbiAgICBwYXlsb2FkOiBwcm9kdWN0XG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4gKHtcbi8vICAgICB0eXBlOiBSRU1PVkVfUFJPRFVDVCxcbi8vICAgICBwYXlsb2FkOiBwcm9kdWN0XG4vLyB9KVxuIiwiLy9pbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9ucy9wcm9kdWN0c1wiO1xuXG4vLyBmdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XG4vLyAgICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuLy8gICAgIHJldHVybiBtYXhJZCArIDFcbi8vIH1cblxuXG5pbXBvcnQge0FERF9QUk9EVUNUfSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0c1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGVQcm9kdWN0cyA9IFtdXG5leHBvcnQgY29uc3QgcmVkdWNlclByb2R1Y3RzID0gKHN0YXRlPSBpbml0aWFsU3RhdGVQcm9kdWN0cywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgIC8vICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5uYW1lKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YTJjNTFiZGU1OTJiYWMzYzNhYVwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwidHlwZSIsInBheWxvYWQiLCJpbml0aWFsU3RhdGVQcm9kdWN0cyIsInJlZHVjZXJQcm9kdWN0cyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==