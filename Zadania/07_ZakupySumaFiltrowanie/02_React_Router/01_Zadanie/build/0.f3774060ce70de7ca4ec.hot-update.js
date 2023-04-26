"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Reducer zwracający tablicę produktów



var initialState = {
  products: [],
  sum: 0
};
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var newProducts = [].concat(_toConsumableArray(state.products), [action.payload]);
      var newSum = state.sum + parseInt(action.payload.price);
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
/******/ 	__webpack_require__.h = () => ("c1c230941fa8d7e25305")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzc3NDA2MGNlNzBkZTdjYTRlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlzRDtBQUNoQjtBQUV0QyxJQUFNRyxZQUFZLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxFQUFFO0VBQ1pDLEdBQUcsRUFBRTtBQUNULENBQUM7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBb0M7RUFBQSxJQUFoQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRUwsWUFBWTtFQUFBLElBQUVRLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUNoRCxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLWixpREFBVztNQUNaLElBQU1hLFdBQVcsTUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFPUixLQUFLLENBQUNILFFBQVEsSUFBRU8sTUFBTSxDQUFDSyxPQUFPLEVBQUM7TUFDdkQsSUFBTUMsTUFBTSxHQUFHVixLQUFLLENBQUNGLEdBQUcsR0FBR2EsUUFBUSxDQUFDUCxNQUFNLENBQUNLLE9BQU8sQ0FBQ0csS0FBSyxDQUFDO01BQ3pELE9BQU87UUFBQ2YsUUFBUSxFQUFFUyxXQUFXO1FBQUVSLEdBQUcsRUFBRVk7TUFBTSxDQUFDOztJQUkvQztJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0ksT0FBT1YsS0FBSztFQUFBO0FBRXhCLENBQUM7QUFDRCxJQUFNYSxXQUFXLEdBQUdsQixzREFBZSxDQUFDO0VBQ2hDRSxRQUFRLEVBQUVFO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsaUVBQWVjLFdBQVc7Ozs7Ozs7O1VDakMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWR1Y2VyIHp3cmFjYWrEhWN5IHRhYmxpY8SZIHByb2R1a3TDs3dcblxuXG5cbmltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogW10sXG4gICAgc3VtOiAwLFxufTtcblxuY29uc3QgcmVkdWNlclByb2R1Y3RzID0gKHN0YXRlPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgICAgICAgICBjb25zdCBuZXdTdW0gPSBzdGF0ZS5zdW0gKyBwYXJzZUludChhY3Rpb24ucGF5bG9hZC5wcmljZSk7XG4gICAgICAgICAgICByZXR1cm4ge3Byb2R1Y3RzOiBuZXdQcm9kdWN0cywgc3VtOiBuZXdTdW19O1xuXG5cblxuICAgICAgICAvLyBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAvLyAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgIC8vICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZC5uYW1lKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwcm9kdWN0czogcmVkdWNlclByb2R1Y3RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxYzIzMDk0MWZhOGQ3ZTI1MzA1XCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiUkVNT1ZFX1BST0RVQ1QiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsInJlZHVjZXJQcm9kdWN0cyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsIm5ld1Byb2R1Y3RzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5ld1N1bSIsInBhcnNlSW50IiwicHJpY2UiLCJyb290UmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=