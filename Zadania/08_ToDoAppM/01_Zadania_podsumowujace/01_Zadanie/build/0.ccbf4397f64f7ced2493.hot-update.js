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
var initialState = [{
  title: "",
  description: "",
  open: true,
  id: 0
}];
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
/******/ 	__webpack_require__.h = () => ("ca6a1bd6e36a66944591")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jY2JmNDM5N2Y2NGY3Y2VkMjQ5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNIO0FBRW5DLFNBQVNFLFVBQVVBLENBQUNDLEtBQUssRUFBRTtFQUN2QixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNELEtBQUssRUFBRUUsT0FBTztJQUFBLE9BQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLEVBQUUsRUFBRUwsS0FBSyxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUMsQ0FBQztFQUMvRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQztBQUNwQjtBQUVBLElBQU1NLFlBQVksR0FBRyxDQUFDO0VBQ2xCQyxLQUFLLEVBQUUsRUFBRTtFQUNUQyxXQUFXLEVBQUUsRUFBRTtFQUNmQyxJQUFJLEVBQUUsSUFBSTtFQUNWSixFQUFFLEVBQUU7QUFDUixDQUFDLENBQUM7QUFFRixJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFtQztFQUFBLElBQS9CQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDTixZQUFZO0VBQUEsSUFBRVMsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzNDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQU9JLE1BQU0sQ0FBQ0csSUFBSTtJQUNkLEtBQUtyQiw4Q0FBUTtNQUNULElBQU1zQixNQUFNLEdBQUdyQixVQUFVLENBQUNhLEtBQUssQ0FBQztNQUNoQyxVQUFBUyxNQUFBLENBQUFDLGtCQUFBLENBQVdWLEtBQUssSUFBQVcsYUFBQTtRQUFHakIsRUFBRSxFQUFFYztNQUFNLEdBQUtKLE1BQU0sQ0FBQ1EsT0FBTztJQUNwRDtNQUNJLE9BQU9aLEtBQUs7RUFBQTtBQUV4QixDQUFDOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNYSxXQUFXLEdBQUc1QixzREFBZSxDQUFDO0VBQ2hDNkIsS0FBSyxFQUFFZjtBQUNYLENBQUMsQ0FBQztBQUVGLGlFQUFlYyxXQUFXOzs7Ozs7OztVQy9EMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHtBRERfVEFTS30gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBtYXhJZFRhc2tzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW3tcbiAgICB0aXRsZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBvcGVuOiB0cnVlLFxuICAgIGlkOiAwXG59XVxuXG5jb25zdCByZWR1Y2VyVGFzayA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9UQVNLOlxuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gbWF4SWRUYXNrcyhzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogdGFza0lkLCAuLi5hY3Rpb24ucGF5bG9hZH1dXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuLy8gY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coc3RhdGUpXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuLy8gICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4vLyAgICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuLy8gICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuLy8gICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpO1xuLy8gICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQuYWN0aW9uID09PSBcIlVQXCIpIHtcbi8vICAgICAgICAgICAgICAgICBpZighaW5kZXgpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBbbmV3U3RhdGVbaW5kZXggLSAxXSwgbmV3U3RhdGVbaW5kZXhdXSA9IFtuZXdTdGF0ZVtpbmRleF0sIG5ld1N0YXRlW2luZGV4IC0gMV1dO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IG5ld1N0YXRlLmxlbmd0aCAtIDEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBjb25zdCBjaG9zZUVsZW1lbnQgPSBuZXdTdGF0ZVtpbmRleF07XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbi8vICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgrMSwgMCwgY2hvc2VFbGVtZW50KTtcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbi8vXG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbi8vICAgICB9XG4vLyB9XG4vL1xuLy9cblxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdGFza3M6IHJlZHVjZXJUYXNrXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2E2YTFiZDZlMzZhNjY5NDQ1OTFcIikiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiQUREX1RBU0siLCJtYXhJZFRhc2tzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJpbml0aWFsU3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbiIsInJlZHVjZXJUYXNrIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInRhc2tJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJ0YXNrcyJdLCJzb3VyY2VSb290IjoiIn0=