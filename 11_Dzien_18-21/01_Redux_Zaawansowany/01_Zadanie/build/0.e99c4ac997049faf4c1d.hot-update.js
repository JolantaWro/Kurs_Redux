"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerProducts": () => (/* binding */ reducerProducts)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
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
{}];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateProducts;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var productId = maxIdProduct(state);
      return [].concat(_toConsumableArray(state), [{
        id: action.payload.id,
        name: action.payload.name
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
/******/ 	__webpack_require__.h = () => ("b338f2cbe332e73c8d99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lOTljNGFjOTk3MDQ5ZmFmNGMxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3pCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBR2dEO0FBRWhELElBQU1PLG9CQUFvQixHQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLENBQ0w7QUFDTSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBNEM7RUFBQSxJQUF4Q0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRUgsb0JBQW9CO0VBQUEsSUFBRU0sTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9ELFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtSLDBEQUFXO01BQ1osSUFBTVMsU0FBUyxHQUFHakIsWUFBWSxDQUFDVyxLQUFLLENBQUM7TUFDckMsVUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUU7UUFBQ0osRUFBRSxFQUFFUSxNQUFNLENBQUNLLE9BQU8sQ0FBQ2IsRUFBRTtRQUFFYyxJQUFJLEVBQUVOLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQztNQUFJLENBQUM7SUFDeEU7SUFDQTtJQUNBO01BQ0ksT0FBT1YsS0FBSztFQUFBO0FBRXhCLENBQUM7Ozs7Ozs7O1VDM0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zL3Byb2R1Y3RzXCI7XHJcblxyXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3QoYXJyYXkpIHtcclxuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcclxuICAgIHJldHVybiBtYXhJZCArIDFcclxufVxyXG5cclxuXHJcbmltcG9ydCB7QUREX1BST0RVQ1R9IGZyb20gXCIuLi9hY3Rpb25zL3Byb2R1Y3RzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGVQcm9kdWN0cyA9IFtcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBpZDogMCxcclxuICAgIC8vICAgICBuYW1lOiBcIlwiXHJcbiAgICAvLyB9XHJcbiAgICB7fVxyXG5dXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvZHVjdHMgPSAoc3RhdGU9IGluaXRpYWxTdGF0ZVByb2R1Y3RzLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBtYXhJZFByb2R1Y3Qoc3RhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogYWN0aW9uLnBheWxvYWQuaWQsIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWV9XVxyXG4gICAgICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjMzOGYyY2JlMzMyZTczYzhkOTlcIikiXSwibmFtZXMiOlsibWF4SWRQcm9kdWN0IiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJBRERfUFJPRFVDVCIsImluaXRpYWxTdGF0ZVByb2R1Y3RzIiwicmVkdWNlclByb2R1Y3RzIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdElkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9