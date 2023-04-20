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
        return console.log("tu", element.name, "action", action.payload.name);
      });
      newState.filter(function (element) {
        return element.name !== action.payload.name;
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
/******/ 	__webpack_require__.h = () => ("ee50c29e5ad68843d6c6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNzRhNjIyNjk4MmIwOWI2OTNlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNoQjtBQUd0QyxJQUFNRyxZQUFZLEdBQUcsRUFBRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBMEI7RUFBQSxJQUF0QkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRSxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3RDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtaLGlEQUFXO01BQ1osVUFBQWEsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLZCxvREFBYztNQUNmLElBQUllLFFBQVEsR0FBQUYsa0JBQUEsQ0FBT1QsS0FBSyxDQUFDO01BQ3pCVyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSVIsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxFQUFDTyxPQUFPLENBQUNDLElBQUksRUFBRSxRQUFRLEVBQUVWLE1BQU0sQ0FBQ00sT0FBTyxDQUFDSSxJQUFJLENBQUM7TUFBQSxFQUFDO01BQ3pGSCxRQUFRLENBQUNDLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDQyxJQUFJLEtBQUtWLE1BQU0sQ0FBQ00sT0FBTyxDQUFDSSxJQUFJO01BQUEsRUFBQztNQUNoRSxPQUFPSCxRQUFRO0lBQ25CO01BQ0ksT0FBT1gsS0FBSztFQUFBO0FBRXhCLENBQUM7QUFDRCxJQUFNZSxXQUFXLEdBQUdsQixzREFBZSxDQUFDO0VBQ2hDbUIsUUFBUSxFQUFFakI7QUFDZCxDQUFDLENBQUM7QUFFRixpRUFBZWdCLFdBQVc7Ozs7Ozs7O1VDN0IxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5cbmNvbnN0IHN0YXRlUHJvZHVjdCA9IFtdO1xuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0gW1xuLy8gICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJcIixcbi8vICAgICAgICAgcHJpY2U6IFwiXCJcbi8vICAgICB9XG4vLyBdO1xuY29uc3QgcmVkdWNlclByb2R1Y3RzID0gKHN0YXRlPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgICAgICBsZXQgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuICAgICAgICAgICAgbmV3U3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gY29uc29sZS5sb2coXCJ0dVwiLGVsZW1lbnQubmFtZSwgXCJhY3Rpb25cIiwgYWN0aW9uLnBheWxvYWQubmFtZSkpXG4gICAgICAgICAgICBuZXdTdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwcm9kdWN0czogcmVkdWNlclByb2R1Y3RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZTUwYzI5ZTVhZDY4ODQzZDZjNlwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIlJFTU9WRV9QUk9EVUNUIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVQcm9kdWN0IiwicmVkdWNlclByb2R1Y3RzIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBheWxvYWQiLCJuZXdTdGF0ZSIsImZpbHRlciIsImVsZW1lbnQiLCJuYW1lIiwicm9vdFJlZHVjZXIiLCJwcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=