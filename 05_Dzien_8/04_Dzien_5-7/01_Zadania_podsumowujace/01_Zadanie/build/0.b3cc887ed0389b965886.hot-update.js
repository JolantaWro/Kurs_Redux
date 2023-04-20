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
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER_UP:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id === action.payload.id) {
            return {
              id: product.id + 1
            };
          } else {
            return product;
          }
        })
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_ORDER_DOWN:
      return _objectSpread(_objectSpread({}, state), {}, {
        productsList: state.productsList.map(function (product) {
          if (product.id === action.payload.id) {
            return {
              id: product.id - 1
            };
          } else {
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
/******/ 	__webpack_require__.h = () => ("05f5731bc19bbd09887d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iM2NjODg3ZWQwMzg5Yjk2NTg4Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUU4RztBQUV4RTtBQUV0QyxJQUFNTyxZQUFZLEdBQUcsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsSUFBTUMsWUFBWSxHQUFHO0VBQUNDLFlBQVksRUFBRTtBQUMzQixDQUFDO0FBSVYsU0FBU0MsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBQ0EsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBb0M7RUFBQSxJQUFoQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRWIsWUFBWTtFQUFBLElBQUVnQixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDeEMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS25CLCtDQUFTO01BQ1YsT0FBT2MsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2YsK0NBQVM7TUFDVixPQUFPZSxLQUFLLEdBQUcsQ0FBQztJQUNwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsSUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBb0M7RUFBQSxJQUFoQ04sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRVosWUFBWTtFQUFBLElBQUVlLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN6QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLeEIsaURBQVc7TUFDWixPQUFBMEIsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7UUFDUlYsWUFBWSxLQUFBa0IsTUFBQSxDQUFBQyxrQkFBQSxDQUFNVCxLQUFLLENBQUNWLFlBQVksSUFBRTtVQUNsQ1EsRUFBRSxFQUFFUCxhQUFhLENBQUNTLEtBQUssQ0FBQ1YsWUFBWSxDQUFDO1VBQ3JDb0IsSUFBSSxFQUFFTixNQUFNLENBQUNPO1FBQ2pCLENBQUM7TUFBQztJQUVWLEtBQUszQixxREFBZTtNQUNoQixPQUFBdUIsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7UUFDUlYsWUFBWSxFQUFFVSxLQUFLLENBQUNWLFlBQVksQ0FBQ3NCLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUs7VUFDOUMsSUFBR0EsT0FBTyxDQUFDZixFQUFFLEtBQUtNLE1BQU0sQ0FBQ08sT0FBTyxDQUFDYixFQUFFLEVBQUU7WUFDakMsT0FBTztjQUFDQSxFQUFFLEVBQUVlLE9BQU8sQ0FBQ2YsRUFBRSxHQUFHO1lBQUMsQ0FBQztVQUMvQixDQUFDLE1BQ0k7WUFDRCxPQUFPZSxPQUFPO1VBQ2xCO1FBQ0osQ0FBQztNQUFDO0lBRVYsS0FBSzlCLHVEQUFpQjtNQUNsQixPQUFBd0IsYUFBQSxDQUFBQSxhQUFBLEtBQ09QLEtBQUs7UUFDUlYsWUFBWSxFQUFFVSxLQUFLLENBQUNWLFlBQVksQ0FBQ3NCLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUs7VUFDOUMsSUFBR0EsT0FBTyxDQUFDZixFQUFFLEtBQUtNLE1BQU0sQ0FBQ08sT0FBTyxDQUFDYixFQUFFLEVBQUU7WUFDakMsT0FBTztjQUFDQSxFQUFFLEVBQUVlLE9BQU8sQ0FBQ2YsRUFBRSxHQUFHO1lBQUMsQ0FBQztVQUMvQixDQUFDLE1BQ0k7WUFDRCxPQUFPZSxPQUFPO1VBQ2xCO1FBQ0osQ0FBQztNQUFDO0lBR1Y7TUFDSSxPQUFPYixLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUlELGlFQUFlYixzREFBZSxDQUFDO0VBQzNCWSxPQUFPLEVBQVBBLE9BQU87RUFDUE8sUUFBUSxFQUFSQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUM3RUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgIGNvdW50ZXIsXHJcbi8vICAgcHJvZHVjdHMgemFkIDJcclxuLy8gfSk7XHJcblxyXG5pbXBvcnQge0FERF9QUk9EVUNULCBDSEFOR0VfT1JERVIsIENIQU5HRV9PUkRFUl9ET1dOLCBDSEFOR0VfT1JERVJfVVAsIERFQ1JFTUVOVCwgSU5DUkVNRU5UfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBzdGF0ZUNvdW50ZXIgPSAwO1xyXG4vLyBjb25zdCBzdGF0ZVByb2R1Y3QgPSB7cHJvZHVjdHNMaXN0OiBbXHJcbi8vICAgICBdLCBjb3VudGVyIDogMH1cclxuY29uc3Qgc3RhdGVQcm9kdWN0ID0ge3Byb2R1Y3RzTGlzdDogW1xyXG4gICAgICAgIF19O1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3RzKGFycmF5KSB7XHJcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXHJcbiAgICByZXR1cm4gbWF4SWQgKyAxXHJcbn1cclxuY29uc3QgY291bnRlciA9IChzdGF0ZT0gc3RhdGVDb3VudGVyLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIElOQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcclxuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlIC0gMTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzTGlzdDogWy4uLnN0YXRlLnByb2R1Y3RzTGlzdCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXhJZFByb2R1Y3RzKHN0YXRlLnByb2R1Y3RzTGlzdCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9PUkRFUl9VUDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNMaXN0OiBzdGF0ZS5wcm9kdWN0c0xpc3QubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogcHJvZHVjdC5pZCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9PUkRFUl9ET1dOOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0xpc3Q6IHN0YXRlLnByb2R1Y3RzTGlzdC5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiBwcm9kdWN0LmlkIC0gMX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlcixcclxuICAgIHByb2R1Y3RzXHJcbn0pIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDVmNTczMWJjMTliYmQwOTg4N2RcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJDSEFOR0VfT1JERVIiLCJDSEFOR0VfT1JERVJfRE9XTiIsIkNIQU5HRV9PUkRFUl9VUCIsIkRFQ1JFTUVOVCIsIklOQ1JFTUVOVCIsImNvbWJpbmVSZWR1Y2VycyIsInN0YXRlQ291bnRlciIsInN0YXRlUHJvZHVjdCIsInByb2R1Y3RzTGlzdCIsIm1heElkUHJvZHVjdHMiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImNvdW50ZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWN0cyIsIl9vYmplY3RTcHJlYWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0ZXh0IiwicGF5bG9hZCIsIm1hcCIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9