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
      var index = state.findIndex(function (element) {
        return element === action.payload.id;
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

/***/ }),

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);



var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__.compose;
var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"], composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d70df87a87a575960f8a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZTM3YzlkZjQxYTIzOWIyYmM3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN1QjtBQUU3RCxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFDdkIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxFQUFFLEVBQUVMLEtBQUssQ0FBQztFQUFBLEdBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0UsT0FBT0EsS0FBSyxHQUFHLENBQUM7QUFDcEI7QUFFQSxJQUFNTSxZQUFZLEdBQUc7RUFDakI7RUFDQTtFQUNBO0VBQ0E7QUFBQSxDQUNIO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLbEIsOENBQVE7TUFDVCxJQUFNbUIsTUFBTSxHQUFHaEIsVUFBVSxDQUFDVSxLQUFLLENBQUM7TUFDaEMsVUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUFTLGFBQUE7UUFBR1osRUFBRSxFQUFFUztNQUFNLEdBQUtGLE1BQU0sQ0FBQ00sT0FBTztJQUNwRCxLQUFLckIsaURBQVc7TUFDWixPQUFPVyxLQUFLLENBQUNXLE1BQU0sQ0FBQyxVQUFBakIsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ0csRUFBRSxLQUFLTyxNQUFNLENBQUNNLE9BQU8sQ0FBQ2IsRUFBRTtNQUFBLEVBQUM7SUFDcEUsS0FBS1QsaURBQVc7TUFDWixJQUFNd0IsUUFBUSxHQUFBSixrQkFBQSxDQUFPUixLQUFLLENBQUM7TUFDM0IsSUFBTWEsS0FBSyxHQUFHYixLQUFLLENBQUNjLFNBQVMsQ0FBQyxVQUFDcEIsT0FBTztRQUFBLE9BQUtBLE9BQU8sS0FBS1UsTUFBTSxDQUFDTSxPQUFPLENBQUNiLEVBQUU7TUFBQSxFQUFDO0lBRTdFO01BQ0ksT0FBT0csS0FBSztFQUFBO0FBRXhCLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1lLFdBQVcsR0FBRzdCLHNEQUFlLENBQUM7RUFDaEM4QixLQUFLLEVBQUVqQjtBQUNYLENBQUMsQ0FBQztBQUVGLGlFQUFlZ0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNwRW9DO0FBQzFCO0FBQ0o7QUFDaEMsSUFBTU0sZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQ0Msb0NBQW9DLElBQUlKLDBDQUFPO0FBRS9FLElBQU1LLEtBQUssR0FBR1Asa0RBQVcsQ0FBQ0YsaURBQVcsRUFBRU0sZ0JBQWdCLENBQUNILHNEQUFlLENBQUNFLG1EQUFLLENBQUMsQ0FBQyxDQUFDO0FBRWhGLGlFQUFlSSxLQUFLOzs7Ozs7OztVQ1BwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7QUREX1RBU0ssIENIQU5HRV9UQVNLLCBSRU1PVkVfVEFTS30gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBtYXhJZFRhc2tzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICAgIC8vIHt0aXRsZTogXCJcIixcbiAgICAvLyBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAvLyBvcGVuOiB0cnVlLFxuICAgIC8vIGlkOiAwfVxuXVxuXG5jb25zdCByZWR1Y2VyVGFzayA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9UQVNLOlxuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gbWF4SWRUYXNrcyhzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogdGFza0lkLCAuLi5hY3Rpb24ucGF5bG9hZH1dXG4gICAgICAgIGNhc2UgUkVNT1ZFX1RBU0s6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpO1xuICAgICAgICBjYXNlIENIQU5HRV9UQVNLOlxuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5cbi8vIGNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbi8vICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgICAgICBjYXNlIENIQU5HRV9PUkRFUjpcbi8vICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbi8vICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KTtcbi8vICAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmFjdGlvbiA9PT0gXCJVUFwiKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgW25ld1N0YXRlW2luZGV4IC0gMV0sIG5ld1N0YXRlW2luZGV4XV0gPSBbbmV3U3RhdGVbaW5kZXhdLCBuZXdTdGF0ZVtpbmRleCAtIDFdXTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuZXdTdGF0ZS5sZW5ndGggLSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY2hvc2VFbGVtZW50ID0gbmV3U3RhdGVbaW5kZXhdO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4KzEsIDAsIGNob3NlRWxlbWVudCk7XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4vL1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRhc2tzOiByZWR1Y2VyVGFza1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzBkZjg3YTg3YTU3NTk2MGY4YVwiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBRERfVEFTSyIsIkNIQU5HRV9UQVNLIiwiUkVNT1ZFX1RBU0siLCJtYXhJZFRhc2tzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyVGFzayIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInRhc2tJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwiZmlsdGVyIiwibmV3U3RhdGUiLCJpbmRleCIsImZpbmRJbmRleCIsInJvb3RSZWR1Y2VyIiwidGFza3MiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJ0aHVuayIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=