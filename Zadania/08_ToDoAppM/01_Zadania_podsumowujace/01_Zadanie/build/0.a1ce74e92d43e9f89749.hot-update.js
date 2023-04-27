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
      newState.map(function (task) {
        console.log(task);
        if (task.id === action.payload.id) {
          return [].concat(_toConsumableArray(state), [_objectSpread(_objectSpread({}, task), {}, {
            open: false
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
/******/ 	__webpack_require__.h = () => ("f6829d926e69c3f06b31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMWNlNzRlOTJkNDNlOWY4OTc0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUN1QjtBQUU3RCxTQUFTSSxVQUFVQSxDQUFDQyxLQUFLLEVBQUU7RUFDdkIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxFQUFFLEVBQUVMLEtBQUssQ0FBQztFQUFBLEdBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0UsT0FBT0EsS0FBSyxHQUFHLENBQUM7QUFDcEI7QUFFQSxJQUFNTSxZQUFZLEdBQUc7RUFDakI7RUFDQTtFQUNBO0VBQ0E7QUFBQSxDQUNIO0FBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLbEIsOENBQVE7TUFDVCxJQUFNbUIsTUFBTSxHQUFHaEIsVUFBVSxDQUFDVSxLQUFLLENBQUM7TUFDaEMsVUFBQU8sTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUFTLGFBQUE7UUFBR1osRUFBRSxFQUFFUztNQUFNLEdBQUtGLE1BQU0sQ0FBQ00sT0FBTztJQUNwRCxLQUFLckIsaURBQVc7TUFDWixPQUFPVyxLQUFLLENBQUNXLE1BQU0sQ0FBQyxVQUFBakIsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ0csRUFBRSxLQUFLTyxNQUFNLENBQUNNLE9BQU8sQ0FBQ2IsRUFBRTtNQUFBLEVBQUM7SUFDcEUsS0FBS1QsaURBQVc7TUFDWixJQUFNd0IsUUFBUSxHQUFBSixrQkFBQSxDQUFPUixLQUFLLENBQUM7TUFDM0JZLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBSztRQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztRQUVqQixJQUFHQSxJQUFJLENBQUNqQixFQUFFLEtBQUtPLE1BQU0sQ0FBQ00sT0FBTyxDQUFDYixFQUFFLEVBQUU7VUFDOUIsVUFBQVUsTUFBQSxDQUFBQyxrQkFBQSxDQUFXUixLQUFLLElBQUFTLGFBQUEsQ0FBQUEsYUFBQSxLQUFNSyxJQUFJO1lBQUVHLElBQUksRUFBQztVQUFLO1FBQzFDLENBQUMsTUFBTTtVQUNILE9BQU9qQixLQUFLO1FBQ2hCO01BQ0osQ0FBQyxDQUFDO0lBRU47TUFDSSxPQUFPQSxLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNa0IsV0FBVyxHQUFHaEMsc0RBQWUsQ0FBQztFQUNoQ2lDLEtBQUssRUFBRXBCO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVtQixXQUFXOzs7Ozs7Ozs7Ozs7OztBQzFFb0M7QUFDMUI7QUFDSjtBQUNoQyxJQUFNTSxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxvQ0FBb0MsSUFBSUosMENBQU87QUFFL0UsSUFBTUssS0FBSyxHQUFHUCxrREFBVyxDQUFDRixpREFBVyxFQUFFTSxnQkFBZ0IsQ0FBQ0gsc0RBQWUsQ0FBQ0UsbURBQUssQ0FBQyxDQUFDLENBQUM7QUFFaEYsaUVBQWVJLEtBQUs7Ozs7Ozs7O1VDUHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHtBRERfVEFTSywgQ0hBTkdFX1RBU0ssIFJFTU9WRV9UQVNLfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIG1heElkVGFza3MoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXG4gICAgLy8ge3RpdGxlOiBcIlwiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIC8vIG9wZW46IHRydWUsXG4gICAgLy8gaWQ6IDB9XG5dXG5cbmNvbnN0IHJlZHVjZXJUYXNrID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1RBU0s6XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBtYXhJZFRhc2tzKHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge2lkOiB0YXNrSWQsIC4uLmFjdGlvbi5wYXlsb2FkfV1cbiAgICAgICAgY2FzZSBSRU1PVkVfVEFTSzpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgICAgIGNhc2UgQ0hBTkdFX1RBU0s6XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4gICAgICAgICAgICBuZXdTdGF0ZS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuXG4gICAgICAgICAgICAgICAgaWYodGFzay5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgey4uLnRhc2ssIG9wZW46ZmFsc2V9XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbi8vIGNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbi8vICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgICAgICBjYXNlIENIQU5HRV9PUkRFUjpcbi8vICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbi8vICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KTtcbi8vICAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmFjdGlvbiA9PT0gXCJVUFwiKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgW25ld1N0YXRlW2luZGV4IC0gMV0sIG5ld1N0YXRlW2luZGV4XV0gPSBbbmV3U3RhdGVbaW5kZXhdLCBuZXdTdGF0ZVtpbmRleCAtIDFdXTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuZXdTdGF0ZS5sZW5ndGggLSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY2hvc2VFbGVtZW50ID0gbmV3U3RhdGVbaW5kZXhdO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4KzEsIDAsIGNob3NlRWxlbWVudCk7XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4vL1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRhc2tzOiByZWR1Y2VyVGFza1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNjgyOWQ5MjZlNjljM2YwNmIzMVwiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBRERfVEFTSyIsIkNIQU5HRV9UQVNLIiwiUkVNT1ZFX1RBU0siLCJtYXhJZFRhc2tzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyVGFzayIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInRhc2tJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwiZmlsdGVyIiwibmV3U3RhdGUiLCJtYXAiLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJyb290UmVkdWNlciIsInRhc2tzIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlIiwidGh1bmsiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9