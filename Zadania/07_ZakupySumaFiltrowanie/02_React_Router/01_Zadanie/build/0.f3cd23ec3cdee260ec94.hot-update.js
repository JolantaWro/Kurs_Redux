"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Reducer zwracający tablicę produktów



var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var newProducts = [].concat(_toConsumableArray(state.products), [payload]);
      var newSum = state.sum + payload.price;
      return {
        products: newProducts,
        sum: newSum
      };

    // case ADD_PRODUCT:
    //     return [...state, action.payload]
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  products: reducerProducts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d233eb5c7e35eab40c38")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mM2NkMjNlYzNjZGVlMjYwZWM5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlzRDtBQUNoQjtBQUV0QyxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBMEI7RUFBQSxJQUF0QkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRSxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3RDLFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtULGlEQUFXO01BQ1osSUFBTVUsV0FBVyxNQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQU9SLEtBQUssQ0FBQ1MsUUFBUSxJQUFFQyxPQUFPLEVBQUM7TUFDaEQsSUFBTUMsTUFBTSxHQUFHWCxLQUFLLENBQUNZLEdBQUcsR0FBR0YsT0FBTyxDQUFDRyxLQUFLO01BQ3hDLE9BQU87UUFBQ0osUUFBUSxFQUFFSCxXQUFXO1FBQUVNLEdBQUcsRUFBRUQ7TUFBTSxDQUFDOztJQUkvQztJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0ksT0FBT1gsS0FBSztFQUFBO0FBRXhCLENBQUM7QUFDRCxJQUFNYyxXQUFXLEdBQUdoQixzREFBZSxDQUFDO0VBQ2hDVyxRQUFRLEVBQUVWO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsaUVBQWVlLFdBQVc7Ozs7Ozs7O1VDNUIxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWR1Y2VyIHp3cmFjYWrEhWN5IHRhYmxpY8SZIHByb2R1a3TDs3dcblxuXG5cbmltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJlZHVjZXJQcm9kdWN0cyA9IChzdGF0ZT0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzLCBwYXlsb2FkXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N1bSA9IHN0YXRlLnN1bSArIHBheWxvYWQucHJpY2U7XG4gICAgICAgICAgICByZXR1cm4ge3Byb2R1Y3RzOiBuZXdQcm9kdWN0cywgc3VtOiBuZXdTdW19O1xuXG5cblxuICAgICAgICAvLyBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAvLyAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgIC8vICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5uYW1lKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwcm9kdWN0czogcmVkdWNlclByb2R1Y3RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQyMzNlYjVjN2UzNWVhYjQwYzM4XCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiUkVNT1ZFX1BST0RVQ1QiLCJjb21iaW5lUmVkdWNlcnMiLCJyZWR1Y2VyUHJvZHVjdHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJuZXdQcm9kdWN0cyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInByb2R1Y3RzIiwicGF5bG9hZCIsIm5ld1N1bSIsInN1bSIsInByaWNlIiwicm9vdFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9