"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
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


var initialState = {
  loading: false,
  error: "",
  quote: null
};
function reducerQuote() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHED:
      return {
        loading: false,
        quote: action.payload,
        error: null
      };
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_ERROR:
      return {
        loading: false,
        quote: null,
        error: action.payload
      };
    default:
      return state;
  }
}
function reducerFavourites() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_FAV:
      return [].concat(_toConsumableArray(state), [action.payload]);
  }
}
var rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  quote: reducerQuote
  // favourites: reducerFavourites
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("103e02b3d68a5c9975b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hOWRhNzYxOWIzNWFmNDY0ZmRhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUN4QztBQUd0QyxJQUFNSyxZQUFZLEdBQUc7RUFDakJDLE9BQU8sRUFBRSxLQUFLO0VBQ2RDLEtBQUssRUFBRSxFQUFFO0VBQ1RDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCxTQUFTQyxZQUFZQSxDQUFBLEVBQThCO0VBQUEsSUFBNUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNOLFlBQVk7RUFBQSxJQUFFUyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0MsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1osb0RBQWM7TUFDZixPQUFBYSxhQUFBLENBQUFBLGFBQUEsS0FDT04sS0FBSztRQUNSSixPQUFPLEVBQUU7TUFBSTtJQUVyQixLQUFLSixtREFBYTtNQUNkLE9BQU87UUFDSEksT0FBTyxFQUFFLEtBQUs7UUFDZEUsS0FBSyxFQUFFTSxNQUFNLENBQUNHLE9BQU87UUFDckJWLEtBQUssRUFBRTtNQUNYLENBQUM7SUFDTCxLQUFLTixpREFBVztNQUNaLE9BQU87UUFDSEssT0FBTyxFQUFFLEtBQUs7UUFDZEUsS0FBSyxFQUFFLElBQUk7UUFDWEQsS0FBSyxFQUFFTyxNQUFNLENBQUNHO01BQ2xCLENBQUM7SUFDTDtNQUNJLE9BQU9QLEtBQUs7RUFBQTtBQUV4QjtBQUVBLFNBQVNRLGlCQUFpQkEsQ0FBQSxFQUFtQjtFQUFBLElBQWxCUixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDLEVBQUU7RUFBQSxJQUFFRyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDdkMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS2YsNkNBQU87TUFDUixVQUFBbUIsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVixLQUFLLElBQUVJLE1BQU0sQ0FBQ0csT0FBTztFQUFDO0FBRzdDO0FBRUEsSUFBTUksWUFBWSxHQUFHakIsc0RBQWUsQ0FBQztFQUNqQ0ksS0FBSyxFQUFFQztFQUNQO0FBQ0osQ0FBQyxDQUFDOztBQUVGLGlFQUFlWSxZQUFZOzs7Ozs7OztVQy9DM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfRkFWLCBRVU9URV9FUlJPUiwgUVVPVEVfRkVUQ0hFRCwgUVVPVEVfRkVUQ0hJTkd9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IFwiXCIsXG4gICAgcXVvdGU6IG51bGxcbn1cblxuZnVuY3Rpb24gcmVkdWNlclF1b3RlIChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFFVT1RFX0ZFVENISU5HOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUVVPVEVfRkVUQ0hFRDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcXVvdGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgUVVPVEVfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VyRmF2b3VyaXRlcyhzdGF0ZT1bXSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9GQVY6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbiAgICB9XG5cbn1cblxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBxdW90ZTogcmVkdWNlclF1b3RlLFxuICAgIC8vIGZhdm91cml0ZXM6IHJlZHVjZXJGYXZvdXJpdGVzXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcnM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTAzZTAyYjNkNjhhNWM5OTc1YjJcIikiXSwibmFtZXMiOlsiQUREX0ZBViIsIlFVT1RFX0VSUk9SIiwiUVVPVEVfRkVUQ0hFRCIsIlFVT1RFX0ZFVENISU5HIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwicXVvdGUiLCJyZWR1Y2VyUXVvdGUiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsInJlZHVjZXJGYXZvdXJpdGVzIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwicm9vdFJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==