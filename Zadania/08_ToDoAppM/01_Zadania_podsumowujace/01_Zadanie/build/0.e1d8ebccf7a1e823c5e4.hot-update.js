"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
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
var initialState = [];
var reducerTask = function reducerTask() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK:
      var taskId = maxIdTasks(state);
      return [].concat(_toConsumableArray(state), [action.payload]);
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
/******/ 	__webpack_require__.h = () => ("434398ea9fb6c141113f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMWQ4ZWJjY2Y3YTFlODIzYzVlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNIO0FBRW5DLFNBQVNFLFVBQVVBLENBQUNDLEtBQUssRUFBRTtFQUN2QixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNELEtBQUssRUFBRUUsT0FBTztJQUFBLE9BQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLEVBQUUsRUFBRUwsS0FBSyxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUMsQ0FBQztFQUMvRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQztBQUNwQjtBQUVBLElBQU1NLFlBQVksR0FBRyxFQUFFO0FBRXZCLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQW1DO0VBQUEsSUFBL0JDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNILFlBQVk7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDM0NFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUM7RUFDbEIsUUFBT0ksTUFBTSxDQUFDRyxJQUFJO0lBQ2QsS0FBS2xCLDhDQUFRO01BQ1QsSUFBTW1CLE1BQU0sR0FBR2xCLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDO01BQ2hDLFVBQUFTLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1YsS0FBSyxJQUFFSSxNQUFNLENBQUNPLE9BQU87SUFDcEM7TUFDSSxPQUFPWCxLQUFLO0VBQUE7QUFFeEIsQ0FBQzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTVksV0FBVyxHQUFHeEIsc0RBQWUsQ0FBQztFQUNoQ3lCLEtBQUssRUFBRWQ7QUFDWCxDQUFDLENBQUM7QUFFRixpRUFBZWEsV0FBVzs7Ozs7Ozs7VUMxRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7QUREX1RBU0t9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gbWF4SWRUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG5cbmNvbnN0IHJlZHVjZXJUYXNrID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1RBU0s6XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBtYXhJZFRhc2tzKHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuLy8gY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coc3RhdGUpXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuLy8gICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4vLyAgICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuLy8gICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuLy8gICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpO1xuLy8gICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQuYWN0aW9uID09PSBcIlVQXCIpIHtcbi8vICAgICAgICAgICAgICAgICBpZighaW5kZXgpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBbbmV3U3RhdGVbaW5kZXggLSAxXSwgbmV3U3RhdGVbaW5kZXhdXSA9IFtuZXdTdGF0ZVtpbmRleF0sIG5ld1N0YXRlW2luZGV4IC0gMV1dO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IG5ld1N0YXRlLmxlbmd0aCAtIDEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBjb25zdCBjaG9zZUVsZW1lbnQgPSBuZXdTdGF0ZVtpbmRleF07XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbi8vICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgrMSwgMCwgY2hvc2VFbGVtZW50KTtcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbi8vXG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbi8vICAgICB9XG4vLyB9XG4vL1xuLy9cblxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdGFza3M6IHJlZHVjZXJUYXNrXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDM0Mzk4ZWE5ZmI2YzE0MTExM2ZcIikiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiQUREX1RBU0siLCJtYXhJZFRhc2tzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyVGFzayIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJ0YXNrSWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJ0YXNrcyJdLCJzb3VyY2VSb290IjoiIn0=