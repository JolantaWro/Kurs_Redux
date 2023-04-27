"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
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
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK:
      var taskId = maxIdTasks(state);
      return [].concat(_toConsumableArray(state), [_objectSpread({
        id: taskId
      }, action.payload)]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TASK:
      return state.filter(function (element) {
        return element.id !== action.payload.id;
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TASK:
      var newState = _toConsumableArray(state);
      state.map(function (task) {
        console.log(task);
        if (task.id === action.payload.id) {
          return [].concat(_toConsumableArray(state), [_objectSpread(_objectSpread({}, state.tasks), {}, {
            task: false
          })]);
        } else {
          return state;
        }
      });
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
/******/ 	__webpack_require__.h = () => ("37841ca4598e8547c20e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNTM2MjM1MDU5NjU5Yzc1M2FhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN1QjtBQUU3RCxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFDdkIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxFQUFFLEVBQUVMLEtBQUssQ0FBQztFQUFBLEdBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0UsT0FBT0EsS0FBSyxHQUFHLENBQUM7QUFDcEI7QUFFQSxJQUFNTSxZQUFZLEdBQUc7RUFDakI7RUFDQTtFQUNBO0VBQ0E7QUFBQSxDQUNIO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLbEIsOENBQVE7TUFDVCxJQUFNbUIsTUFBTSxHQUFHaEIsVUFBVSxDQUFDVSxLQUFLLENBQUM7TUFDaEMsVUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUFTLGFBQUE7UUFBR1osRUFBRSxFQUFFUztNQUFNLEdBQUtGLE1BQU0sQ0FBQ00sT0FBTztJQUNwRCxLQUFLckIsaURBQVc7TUFDWixPQUFPVyxLQUFLLENBQUNXLE1BQU0sQ0FBQyxVQUFBakIsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ0csRUFBRSxLQUFLTyxNQUFNLENBQUNNLE9BQU8sQ0FBQ2IsRUFBRTtNQUFBLEVBQUM7SUFDcEUsS0FBS1QsaURBQVc7TUFDWixJQUFNd0IsUUFBUSxHQUFBSixrQkFBQSxDQUFPUixLQUFLLENBQUM7TUFDM0JBLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBSztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztRQUVqQixJQUFHQSxJQUFJLENBQUNqQixFQUFFLEtBQUtPLE1BQU0sQ0FBQ00sT0FBTyxDQUFDYixFQUFFLEVBQUU7VUFDOUIsVUFBQVUsTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUFTLGFBQUEsQ0FBQUEsYUFBQSxLQUFNVCxLQUFLLENBQUNpQixLQUFLO1lBQUVILElBQUksRUFBRTtVQUFLO1FBQ2xELENBQUMsTUFBTTtVQUNILE9BQU9kLEtBQUs7UUFDaEI7TUFDSixDQUFDLENBQUM7SUFFTjtNQUNJLE9BQU9BLEtBQUs7RUFBQTtBQUV4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1rQixXQUFXLEdBQUdoQyxzREFBZSxDQUFDO0VBQ2hDK0IsS0FBSyxFQUFFbEI7QUFDWCxDQUFDLENBQUM7QUFFRixpRUFBZW1CLFdBQVc7Ozs7Ozs7O1VDMUUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0FERF9UQVNLLCBDSEFOR0VfVEFTSywgUkVNT1ZFX1RBU0t9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gbWF4SWRUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAvLyB7dGl0bGU6IFwiXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiXCIsXG4gICAgLy8gb3BlbjogdHJ1ZSxcbiAgICAvLyBpZDogMH1cbl1cblxuY29uc3QgcmVkdWNlclRhc2sgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IG1heElkVGFza3Moc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQ6IHRhc2tJZCwgLi4uYWN0aW9uLnBheWxvYWR9XVxuICAgICAgICBjYXNlIFJFTU9WRV9UQVNLOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbiAgICAgICAgY2FzZSBDSEFOR0VfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIHN0YXRlLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGFzay5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgey4uLnN0YXRlLnRhc2tzLCB0YXNrOiBmYWxzZX1dXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuLy8gY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coc3RhdGUpXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuLy8gICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4vLyAgICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuLy8gICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuLy8gICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpO1xuLy8gICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQuYWN0aW9uID09PSBcIlVQXCIpIHtcbi8vICAgICAgICAgICAgICAgICBpZighaW5kZXgpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBbbmV3U3RhdGVbaW5kZXggLSAxXSwgbmV3U3RhdGVbaW5kZXhdXSA9IFtuZXdTdGF0ZVtpbmRleF0sIG5ld1N0YXRlW2luZGV4IC0gMV1dO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IG5ld1N0YXRlLmxlbmd0aCAtIDEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBjb25zdCBjaG9zZUVsZW1lbnQgPSBuZXdTdGF0ZVtpbmRleF07XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbi8vICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgrMSwgMCwgY2hvc2VFbGVtZW50KTtcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbi8vXG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbi8vICAgICB9XG4vLyB9XG4vL1xuLy9cblxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdGFza3M6IHJlZHVjZXJUYXNrXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzc4NDFjYTQ1OThlODU0N2MyMGVcIikiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiQUREX1RBU0siLCJDSEFOR0VfVEFTSyIsIlJFTU9WRV9UQVNLIiwibWF4SWRUYXNrcyIsImFycmF5IiwibWF4SWQiLCJyZWR1Y2UiLCJlbGVtZW50IiwiTWF0aCIsIm1heCIsImlkIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlclRhc2siLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJ0YXNrSWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsImZpbHRlciIsIm5ld1N0YXRlIiwibWFwIiwidGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrcyIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==