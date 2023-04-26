"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


function maxIdTasks(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialState = [
  // {title: "",
  // description: "",
  // open: true,
  // id: 0}
];
var reducerTask = function reducerTask() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK:
      var taskId = maxIdTasks(state);
      return [].concat(_toConsumableArray(state), [_objectSpread({
        id: taskId
      }, action.payload)]);
    default:
      return state;
  }
};

// const products = (state= stateProduct, action) => {
//     console.log(state)
//     switch (action.type) {
//         case ADD_PRODUCT:
//             return [...state, action.payload]
//         case CHANGE_ORDER:
//             const newState = [...state];
//             const index = state.findIndex((element) => element === action.payload.product);
//             if(action.payload.action === "UP") {
//                 if(!index) {
//                     return state;
//                 }
//                 [newState[index - 1], newState[index]] = [newState[index], newState[index - 1]];
//             } else {
//                 if (index === newState.length - 1) {
//                     return state;
//                 }
//                 const choseElement = newState[index];
//                 newState.splice(index, 1);
//                 newState.splice(index+1, 0, choseElement);
//             }
//
//             return newState
//
//         default:
//             return state
//     }
// }
//
//

var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  tasks: reducerTask
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("13afdbe1970d0b66da13")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjBiMjk5OWMxYTMwYWNkNTMyNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNIO0FBRW5DLFNBQVNFLFVBQVVBLENBQUNDLEtBQUssRUFBRTtFQUN2QixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNELEtBQUssRUFBRUUsT0FBTztJQUFBLE9BQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLEVBQUUsRUFBRUwsS0FBSyxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUMsQ0FBQztFQUMvRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQztBQUNwQjtBQUVBLElBQU1NLFlBQVksR0FBRztFQUNqQjtFQUNBO0VBQ0E7RUFDQTtBQUFBLENBQ0g7QUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFtQztFQUFBLElBQS9CQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDSCxZQUFZO0VBQUEsSUFBRU0sTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzNDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQU9JLE1BQU0sQ0FBQ0csSUFBSTtJQUNkLEtBQUtsQiw4Q0FBUTtNQUNULElBQU1tQixNQUFNLEdBQUdsQixVQUFVLENBQUNVLEtBQUssQ0FBQztNQUNoQyxVQUFBUyxNQUFBLENBQUFDLGtCQUFBLENBQVdWLEtBQUssSUFBQVcsYUFBQTtRQUFHZCxFQUFFLEVBQUVXO01BQU0sR0FBS0osTUFBTSxDQUFDUSxPQUFPO0lBQ3BEO01BQ0ksT0FBT1osS0FBSztFQUFBO0FBRXhCLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1hLFdBQVcsR0FBR3pCLHNEQUFlLENBQUM7RUFDaEMwQixLQUFLLEVBQUVmO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVjLFdBQVc7Ozs7Ozs7O1VDL0QxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0FERF9UQVNLfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIG1heElkVGFza3MoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXG4gICAgLy8ge3RpdGxlOiBcIlwiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIC8vIG9wZW46IHRydWUsXG4gICAgLy8gaWQ6IDB9XG5dXG5cbmNvbnN0IHJlZHVjZXJUYXNrID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1RBU0s6XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBtYXhJZFRhc2tzKHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge2lkOiB0YXNrSWQsIC4uLmFjdGlvbi5wYXlsb2FkfV1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuXG4vLyBjb25zdCBwcm9kdWN0cyA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4vLyAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbi8vICAgICAgICAgY2FzZSBDSEFOR0VfT1JERVI6XG4vLyAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4vLyAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdCk7XG4vLyAgICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZC5hY3Rpb24gPT09IFwiVVBcIikge1xuLy8gICAgICAgICAgICAgICAgIGlmKCFpbmRleCkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIFtuZXdTdGF0ZVtpbmRleCAtIDFdLCBuZXdTdGF0ZVtpbmRleF1dID0gW25ld1N0YXRlW2luZGV4XSwgbmV3U3RhdGVbaW5kZXggLSAxXV07XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbmV3U3RhdGUubGVuZ3RoIC0gMSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlRWxlbWVudCA9IG5ld1N0YXRlW2luZGV4XTtcbi8vICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgsIDEpO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCsxLCAwLCBjaG9zZUVsZW1lbnQpO1xuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuLy9cbi8vICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuLy8gICAgIH1cbi8vIH1cbi8vXG4vL1xuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0YXNrczogcmVkdWNlclRhc2tcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxM2FmZGJlMTk3MGQwYjY2ZGExM1wiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBRERfVEFTSyIsIm1heElkVGFza3MiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJUYXNrIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInRhc2tJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJ0YXNrcyJdLCJzb3VyY2VSb290IjoiIn0=