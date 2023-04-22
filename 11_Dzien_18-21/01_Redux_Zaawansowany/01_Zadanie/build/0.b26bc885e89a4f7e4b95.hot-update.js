"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerProducts": () => (/* binding */ reducerProducts)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions/products";

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}

var initialStateProducts = [
  // {
  //     id: 0,
  //     name: ""
  // }
];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateProducts;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var productId = maxIdProduct(state);
      return [].concat(_toConsumableArray(state), [{
        id: productId,
        name: action.payload
      }]);
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};

/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerRecipes": () => (/* binding */ reducerRecipes)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialStateRecipes = [{
  name: "",
  description: "",
  products: [],
  lastKey: 0
}];
var reducerRecipes = function reducerRecipes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateRecipes;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      var recipeId = maxIdProduct(state);
      return [].concat(_toConsumableArray(state), [{
        lastKey: recipeId,
        name: action.payload.name,
        description: action.payload.description,
        products: [action.payload.product]
      }]);
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
/******/ 	__webpack_require__.h = () => ("94cbebcdc9aeec74d1cc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zL3Byb2R1Y3RzXCI7XG5cbmZ1bmN0aW9uIG1heElkUHJvZHVjdChhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cblxuaW1wb3J0IHtBRERfUFJPRFVDVH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlUHJvZHVjdHMgPSBbXG4gICAgLy8ge1xuICAgIC8vICAgICBpZDogMCxcbiAgICAvLyAgICAgbmFtZTogXCJcIlxuICAgIC8vIH1cbl1cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvZHVjdHMgPSAoc3RhdGU9IGluaXRpYWxTdGF0ZVByb2R1Y3RzLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBtYXhJZFByb2R1Y3Qoc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQ6IHByb2R1Y3RJZCwgbmFtZTogYWN0aW9uLnBheWxvYWR9XVxuICAgICAgICAvLyBjYXNlIFJFTU9WRV9QUk9EVUNUOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiaW1wb3J0IHtBRERfUkVDSVBFfSBmcm9tIFwiLi4vYWN0aW9ucy9yZWNpcGVzXCI7XG5cbmZ1bmN0aW9uIG1heElkUHJvZHVjdChhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZVJlY2lwZXMgPSBbe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcHJvZHVjdHM6IFtdLFxuICAgIGxhc3RLZXk6IDBcbn1dXG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUmVjaXBlcyA9IChzdGF0ZT0gaW5pdGlhbFN0YXRlUmVjaXBlcywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9SRUNJUEU6XG4gICAgICAgICAgICBjb25zdCByZWNpcGVJZCA9IG1heElkUHJvZHVjdChzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBsYXN0S2V5OiByZWNpcGVJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhY3Rpb24ucGF5bG9hZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5wYXlsb2FkLnByb2R1Y3RdXG5cbiAgICAgICAgICAgIH1dXG4gICAgICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgIC8vICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5uYW1lKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NGNiZWJjZGM5YWVlYzc0ZDFjY1wiKSJdLCJuYW1lcyI6WyJtYXhJZFByb2R1Y3QiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsIkFERF9QUk9EVUNUIiwiaW5pdGlhbFN0YXRlUHJvZHVjdHMiLCJyZWR1Y2VyUHJvZHVjdHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWN0SWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJuYW1lIiwicGF5bG9hZCIsIkFERF9SRUNJUEUiLCJpbml0aWFsU3RhdGVSZWNpcGVzIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0cyIsImxhc3RLZXkiLCJyZWR1Y2VyUmVjaXBlcyIsInJlY2lwZUlkIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=