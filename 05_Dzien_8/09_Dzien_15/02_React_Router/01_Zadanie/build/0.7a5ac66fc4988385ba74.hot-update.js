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
        return console.log(element);
      });
      //newState.filter(element => element.name !== action.payload)
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
/******/ 	__webpack_require__.h = () => ("20c163bd713182340ece")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YTVhYzY2ZmM0OTg4Mzg1YmE3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNoQjtBQUd0QyxJQUFNRyxZQUFZLEdBQUcsRUFBRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBMEI7RUFBQSxJQUF0QkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRSxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3RDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtaLGlEQUFXO01BQ1osVUFBQWEsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLZCxvREFBYztNQUNmLElBQU1lLFFBQVEsR0FBQUYsa0JBQUEsQ0FBT1QsS0FBSyxDQUFDO01BQzNCVyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSVIsT0FBTyxDQUFDQyxHQUFHLENBQUNPLE9BQU8sQ0FBQztNQUFBLEVBQUM7TUFDaEQ7TUFDQSxPQUFPRixRQUFRO0lBQ25CO01BQ0ksT0FBT1gsS0FBSztFQUFBO0FBRXhCLENBQUM7QUFDRCxJQUFNYyxXQUFXLEdBQUdqQixzREFBZSxDQUFDO0VBQ2hDa0IsUUFBUSxFQUFFaEI7QUFDZCxDQUFDLENBQUM7QUFFRixpRUFBZWUsV0FBVzs7Ozs7Ozs7VUM3QjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cblxuY29uc3Qgc3RhdGVQcm9kdWN0ID0gW107XG4vLyBjb25zdCBzdGF0ZVByb2R1Y3QgPSBbXG4vLyAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlwiLFxuLy8gICAgICAgICBwcmljZTogXCJcIlxuLy8gICAgIH1cbi8vIF07XG5jb25zdCByZWR1Y2VyUHJvZHVjdHMgPSAoc3RhdGU9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIG5ld1N0YXRlLmZpbHRlcihlbGVtZW50ID0+IGNvbnNvbGUubG9nKGVsZW1lbnQpKVxuICAgICAgICAgICAgLy9uZXdTdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcHJvZHVjdHM6IHJlZHVjZXJQcm9kdWN0c1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjBjMTYzYmQ3MTMxODIzNDBlY2VcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJSRU1PVkVfUFJPRFVDVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlUHJvZHVjdCIsInJlZHVjZXJQcm9kdWN0cyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXlsb2FkIiwibmV3U3RhdGUiLCJmaWx0ZXIiLCJlbGVtZW50Iiwicm9vdFJlZHVjZXIiLCJwcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=