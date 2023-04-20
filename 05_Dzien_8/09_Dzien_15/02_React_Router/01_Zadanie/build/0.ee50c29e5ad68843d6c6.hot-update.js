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
      return state.filter(function (element) {
        return element.name !== action.payload.name;
      });

    // let newState = [...state];
    // newState.filter(element => console.log("tu",element.name, "action", action.payload.name))
    // newState.filter(element => element.name !== action.payload.name)
    // return newState
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
/******/ 	__webpack_require__.h = () => ("862192252d0db731bd4f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZTUwYzI5ZTVhZDY4ODQzZDZjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNoQjtBQUd0QyxJQUFNRyxZQUFZLEdBQUcsRUFBRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBMEI7RUFBQSxJQUF0QkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRSxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ3RDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtaLGlEQUFXO01BQ1osVUFBQWEsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLZCxvREFBYztNQUNmLE9BQU9JLEtBQUssQ0FBQ1csTUFBTSxDQUFDLFVBQUFDLE9BQU87UUFBQSxPQUFJQSxPQUFPLENBQUNDLElBQUksS0FBS1QsTUFBTSxDQUFDTSxPQUFPLENBQUNHLElBQUk7TUFBQSxFQUFDOztJQUVwRTtJQUNBO0lBQ0E7SUFDQTtJQUNKO01BQ0ksT0FBT2IsS0FBSztFQUFBO0FBRXhCLENBQUM7QUFDRCxJQUFNYyxXQUFXLEdBQUdqQixzREFBZSxDQUFDO0VBQ2hDa0IsUUFBUSxFQUFFaEI7QUFDZCxDQUFDLENBQUM7QUFFRixpRUFBZWUsV0FBVzs7Ozs7Ozs7VUMvQjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5cblxuY29uc3Qgc3RhdGVQcm9kdWN0ID0gW107XG4vLyBjb25zdCBzdGF0ZVByb2R1Y3QgPSBbXG4vLyAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlwiLFxuLy8gICAgICAgICBwcmljZTogXCJcIlxuLy8gICAgIH1cbi8vIF07XG5jb25zdCByZWR1Y2VyUHJvZHVjdHMgPSAoc3RhdGU9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xuXG4gICAgICAgICAgICAvLyBsZXQgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuICAgICAgICAgICAgLy8gbmV3U3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gY29uc29sZS5sb2coXCJ0dVwiLGVsZW1lbnQubmFtZSwgXCJhY3Rpb25cIiwgYWN0aW9uLnBheWxvYWQubmFtZSkpXG4gICAgICAgICAgICAvLyBuZXdTdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3U3RhdGVcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBwcm9kdWN0czogcmVkdWNlclByb2R1Y3RzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NjIxOTIyNTJkMGRiNzMxYmQ0ZlwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIlJFTU9WRV9QUk9EVUNUIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVQcm9kdWN0IiwicmVkdWNlclByb2R1Y3RzIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBheWxvYWQiLCJmaWx0ZXIiLCJlbGVtZW50IiwibmFtZSIsInJvb3RSZWR1Y2VyIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9