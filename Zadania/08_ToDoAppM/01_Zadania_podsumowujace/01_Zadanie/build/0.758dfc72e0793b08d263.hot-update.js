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
      // const index = state.findIndex((element) => element === action.payload.id);
      // console.log("index", index)
      // newState.map((task) => task.id === action.payload.id ? {...task, open: false} : null)
      var testSatate = newState.map(function (task) {
        if (task.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, task), {}, {
            open: false
          });
        } else {
          return newState;
        }
      });
      return testSatate;
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
/******/ 	__webpack_require__.h = () => ("c0170c836157e95c8ee7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NThkZmM3MmUwNzkzYjA4ZDI2My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN1QjtBQUU3RCxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFDdkIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxFQUFFLEVBQUVMLEtBQUssQ0FBQztFQUFBLEdBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0UsT0FBT0EsS0FBSyxHQUFHLENBQUM7QUFDcEI7QUFFQSxJQUFNTSxZQUFZLEdBQUc7RUFDakI7RUFDQTtFQUNBO0VBQ0E7QUFBQSxDQUNIO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLbEIsOENBQVE7TUFDVCxJQUFNbUIsTUFBTSxHQUFHaEIsVUFBVSxDQUFDVSxLQUFLLENBQUM7TUFDaEMsVUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUFTLGFBQUE7UUFBR1osRUFBRSxFQUFFUztNQUFNLEdBQUtGLE1BQU0sQ0FBQ00sT0FBTztJQUNwRCxLQUFLckIsaURBQVc7TUFDWixPQUFPVyxLQUFLLENBQUNXLE1BQU0sQ0FBQyxVQUFBakIsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ0csRUFBRSxLQUFLTyxNQUFNLENBQUNNLE9BQU8sQ0FBQ2IsRUFBRTtNQUFBLEVBQUM7SUFDcEUsS0FBS1QsaURBQVc7TUFDWixJQUFNd0IsUUFBUSxHQUFBSixrQkFBQSxDQUFPUixLQUFLLENBQUM7TUFDM0I7TUFDQTtNQUNBO01BQ0EsSUFBTWEsVUFBVSxHQUFHRCxRQUFRLENBQUNFLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUs7UUFDdEMsSUFBR0EsSUFBSSxDQUFDbEIsRUFBRSxLQUFLTyxNQUFNLENBQUNNLE9BQU8sQ0FBQ2IsRUFBRSxFQUFFO1VBQzlCLE9BQUFZLGFBQUEsQ0FBQUEsYUFBQSxLQUFXTSxJQUFJO1lBQUVDLElBQUksRUFBRTtVQUFLO1FBQ2hDLENBQUMsTUFBTTtVQUNILE9BQU9KLFFBQVE7UUFDbkI7TUFDSixDQUFDLENBQUM7TUFDRixPQUFPQyxVQUFVO0lBRXJCO01BQ0ksT0FBT2IsS0FBSztFQUFBO0FBRXhCLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1pQixXQUFXLEdBQUcvQixzREFBZSxDQUFDO0VBQ2hDZ0MsS0FBSyxFQUFFbkI7QUFDWCxDQUFDLENBQUM7QUFFRixpRUFBZWtCLFdBQVc7Ozs7Ozs7O1VDOUUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0FERF9UQVNLLCBDSEFOR0VfVEFTSywgUkVNT1ZFX1RBU0t9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gbWF4SWRUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAvLyB7dGl0bGU6IFwiXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiXCIsXG4gICAgLy8gb3BlbjogdHJ1ZSxcbiAgICAvLyBpZDogMH1cbl1cblxuY29uc3QgcmVkdWNlclRhc2sgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IG1heElkVGFza3Moc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQ6IHRhc2tJZCwgLi4uYWN0aW9uLnBheWxvYWR9XVxuICAgICAgICBjYXNlIFJFTU9WRV9UQVNLOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbiAgICAgICAgY2FzZSBDSEFOR0VfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4KVxuICAgICAgICAgICAgLy8gbmV3U3RhdGUubWFwKCh0YXNrKSA9PiB0YXNrLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCA/IHsuLi50YXNrLCBvcGVuOiBmYWxzZX0gOiBudWxsKVxuICAgICAgICAgICAgY29uc3QgdGVzdFNhdGF0ZSA9IG5ld1N0YXRlLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2suaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4udGFzaywgb3BlbjogZmFsc2V9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0ZXN0U2F0YXRlXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuXG4vLyBjb25zdCBwcm9kdWN0cyA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4vLyAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbi8vICAgICAgICAgY2FzZSBDSEFOR0VfT1JERVI6XG4vLyAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4vLyAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdCk7XG4vLyAgICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZC5hY3Rpb24gPT09IFwiVVBcIikge1xuLy8gICAgICAgICAgICAgICAgIGlmKCFpbmRleCkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIFtuZXdTdGF0ZVtpbmRleCAtIDFdLCBuZXdTdGF0ZVtpbmRleF1dID0gW25ld1N0YXRlW2luZGV4XSwgbmV3U3RhdGVbaW5kZXggLSAxXV07XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbmV3U3RhdGUubGVuZ3RoIC0gMSkge1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlRWxlbWVudCA9IG5ld1N0YXRlW2luZGV4XTtcbi8vICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgsIDEpO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCsxLCAwLCBjaG9zZUVsZW1lbnQpO1xuLy8gICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuLy9cbi8vICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuLy8gICAgIH1cbi8vIH1cbi8vXG4vL1xuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0YXNrczogcmVkdWNlclRhc2tcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMDE3MGM4MzYxNTdlOTVjOGVlN1wiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBRERfVEFTSyIsIkNIQU5HRV9UQVNLIiwiUkVNT1ZFX1RBU0siLCJtYXhJZFRhc2tzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyVGFzayIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInRhc2tJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwiZmlsdGVyIiwibmV3U3RhdGUiLCJ0ZXN0U2F0YXRlIiwibWFwIiwidGFzayIsIm9wZW4iLCJyb290UmVkdWNlciIsInRhc2tzIl0sInNvdXJjZVJvb3QiOiIifQ==