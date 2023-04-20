"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// export default combineReducers({
//   counter,
//   products zad 2
// });



var stateCounter = 0;
// const stateProduct = {productsList: [
//     ], counter : 0}
var stateProduct = {
  productsList: []
};
function maxIdProducts(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateCounter;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + 1;
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
var products = function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateProduct;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: [].concat(_toConsumableArray(state.productsList), [{
          id: maxIdProducts(state.productsList),
          text: action.payload
        }])
      });
    case CHANGE_ORDER:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id !== action.payload) {
            return product;
          }
        })
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  products: products
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4cba1d28d3a0eefa179")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYjNkMjQwZGJiYTk2NjUyMmUyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUV0QjtBQUV0QyxJQUFNSSxZQUFZLEdBQUcsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsSUFBTUMsWUFBWSxHQUFHO0VBQUNDLFlBQVksRUFBRTtBQUMzQixDQUFDO0FBR1YsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBb0M7RUFBQSxJQUFoQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRWIsWUFBWTtFQUFBLElBQUVnQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDeEMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS25CLCtDQUFTO01BQ1YsT0FBT2MsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2YsK0NBQVM7TUFDVixPQUFPZSxLQUFLLEdBQUcsQ0FBQztJQUNwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBb0M7RUFBQSxJQUFoQ04sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRVosWUFBWTtFQUFBLElBQUVlLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN6QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLckIsaURBQVc7TUFDWixPQUFBdUIsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7UUFDUlYsWUFBWSxLQUFBa0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFNVCxLQUFLLENBQUNWLFlBQVksSUFBRTtVQUNsQ1EsRUFBRSxFQUFFUCxhQUFhLENBQUNTLEtBQUssQ0FBQ1YsWUFBWSxDQUFDO1VBQ3JDb0IsSUFBSSxFQUFFTixNQUFNLENBQUNPO1FBQ2pCLENBQUM7TUFBQztJQUVWLEtBQUtDLFlBQVk7TUFDYixPQUFBTCxhQUFBLENBQUFBLGFBQUEsS0FDT1AsS0FBSztRQUNSVixZQUFZLEVBQUVVLEtBQUssQ0FBQ1YsWUFBWSxDQUFDdUIsR0FBRyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtVQUM1QyxJQUFHQSxPQUFPLENBQUNoQixFQUFFLEtBQUtNLE1BQU0sQ0FBQ08sT0FBTyxFQUFFO1lBQzlCLE9BQU9HLE9BQU87VUFDbEI7UUFDSixDQUFDO01BQUM7SUFHVjtNQUNJLE9BQU9kLEtBQUs7RUFBQTtBQUd4QixDQUFDO0FBRUQsaUVBQWViLHNEQUFlLENBQUM7RUFDM0JZLE9BQU8sRUFBUEEsT0FBTztFQUNQTyxRQUFRLEVBQVJBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQzVERiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4vLyAgIGNvdW50ZXIsXG4vLyAgIHByb2R1Y3RzIHphZCAyXG4vLyB9KTtcblxuaW1wb3J0IHtBRERfUFJPRFVDVCwgREVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5jb25zdCBzdGF0ZUNvdW50ZXIgPSAwO1xuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xuLy8gICAgIF0sIGNvdW50ZXIgOiAwfVxuY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xuICAgICAgICBdfTtcblxuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGU9IHN0YXRlQ291bnRlciwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElOQ1JFTUVOVDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBbLi4uc3RhdGUucHJvZHVjdHNMaXN0LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXhJZFByb2R1Y3RzKHN0YXRlLnByb2R1Y3RzTGlzdCksXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBDSEFOR0VfT1JERVI6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogc3RhdGUucHJvZHVjdHNMaXN0Lm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICBjb3VudGVyLFxuICAgIHByb2R1Y3RzXG59KSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY0Y2JhMWQyOGQzYTBlZWZhMTc5XCIpIl0sIm5hbWVzIjpbIkFERF9QUk9EVUNUIiwiREVDUkVNRU5UIiwiSU5DUkVNRU5UIiwiY29tYmluZVJlZHVjZXJzIiwic3RhdGVDb3VudGVyIiwic3RhdGVQcm9kdWN0IiwicHJvZHVjdHNMaXN0IiwibWF4SWRQcm9kdWN0cyIsImFycmF5IiwibWF4SWQiLCJyZWR1Y2UiLCJlbGVtZW50IiwiTWF0aCIsIm1heCIsImlkIiwiY291bnRlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInByb2R1Y3RzIiwiX29iamVjdFNwcmVhZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInRleHQiLCJwYXlsb2FkIiwiQ0hBTkdFX09SREVSIiwibWFwIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=