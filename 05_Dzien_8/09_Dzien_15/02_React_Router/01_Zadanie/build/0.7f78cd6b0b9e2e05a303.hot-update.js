"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var stateProduct = [];
// const stateProduct = [
//     {
//         name: "",
//         price: ""
//     }
// ];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [action.payload]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_PRODUCT:
      var newState = _toConsumableArray(state);
      newState.filter(function (element) {
        return element.name !== action.payload;
      });
      return newState;
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
/******/ 	__webpack_require__.h = () => ("7a5ac66fc4988385ba74")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43Zjc4Y2Q2YjBiOWUyZTA1YTMwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNoQjtBQUd0QyxJQUFNRyxZQUFZLEdBQUcsRUFBRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBMEI7RUFBQSxJQUF0QkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRSxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3RDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtaLGlEQUFXO01BQ1osVUFBQWEsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLZCxvREFBYztNQUNmLElBQU1lLFFBQVEsR0FBQUYsa0JBQUEsQ0FBT1QsS0FBSyxDQUFDO01BQzNCVyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDQyxJQUFJLEtBQUtWLE1BQU0sQ0FBQ00sT0FBTztNQUFBLEVBQUM7TUFDM0QsT0FBT0MsUUFBUTtJQUNuQjtNQUNJLE9BQU9YLEtBQUs7RUFBQTtBQUV4QixDQUFDO0FBQ0QsSUFBTWUsV0FBVyxHQUFHbEIsc0RBQWUsQ0FBQztFQUNoQ21CLFFBQVEsRUFBRWpCO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsaUVBQWVnQixXQUFXOzs7Ozs7OztVQzVCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfUFJPRFVDVCwgUkVNT1ZFX1BST0RVQ1R9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuXG5jb25zdCBzdGF0ZVByb2R1Y3QgPSBbXTtcbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IFtcbi8vICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgICAgIHByaWNlOiBcIlwiXG4vLyAgICAgfVxuLy8gXTtcbmNvbnN0IHJlZHVjZXJQcm9kdWN0cyA9IChzdGF0ZT0gW10sIGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICBjYXNlIFJFTU9WRV9QUk9EVUNUOlxuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuICAgICAgICAgICAgbmV3U3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5uYW1lICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHByb2R1Y3RzOiByZWR1Y2VyUHJvZHVjdHNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdhNWFjNjZmYzQ5ODgzODViYTc0XCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiUkVNT1ZFX1BST0RVQ1QiLCJjb21iaW5lUmVkdWNlcnMiLCJzdGF0ZVByb2R1Y3QiLCJyZWR1Y2VyUHJvZHVjdHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5ld1N0YXRlIiwiZmlsdGVyIiwiZWxlbWVudCIsIm5hbWUiLCJyb290UmVkdWNlciIsInByb2R1Y3RzIl0sInNvdXJjZVJvb3QiOiIifQ==