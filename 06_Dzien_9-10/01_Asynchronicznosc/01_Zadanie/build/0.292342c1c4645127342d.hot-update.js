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
  quote: reducerQuote,
  favourites: reducerFavourites
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducers);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("178a452e3cc173c341db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOTIzNDJjMWM0NjQ1MTI3MzQyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUN4QztBQUd0QyxJQUFNSyxZQUFZLEdBQUc7RUFDakJDLE9BQU8sRUFBRSxLQUFLO0VBQ2RDLEtBQUssRUFBRSxFQUFFO0VBQ1RDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCxTQUFTQyxZQUFZQSxDQUFBLEVBQThCO0VBQUEsSUFBNUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNOLFlBQVk7RUFBQSxJQUFFUyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0MsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1osb0RBQWM7TUFDZixPQUFBYSxhQUFBLENBQUFBLGFBQUEsS0FDT04sS0FBSztRQUNSSixPQUFPLEVBQUU7TUFBSTtJQUVyQixLQUFLSixtREFBYTtNQUNkLE9BQU87UUFDSEksT0FBTyxFQUFFLEtBQUs7UUFDZEUsS0FBSyxFQUFFTSxNQUFNLENBQUNHLE9BQU87UUFDckJWLEtBQUssRUFBRTtNQUNYLENBQUM7SUFDTCxLQUFLTixpREFBVztNQUNaLE9BQU87UUFDSEssT0FBTyxFQUFFLEtBQUs7UUFDZEUsS0FBSyxFQUFFLElBQUk7UUFDWEQsS0FBSyxFQUFFTyxNQUFNLENBQUNHO01BQ2xCLENBQUM7SUFDTDtNQUNJLE9BQU9QLEtBQUs7RUFBQTtBQUV4QjtBQUVBLFNBQVNRLGlCQUFpQkEsQ0FBQSxFQUFtQjtFQUFBLElBQWxCUixLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDLEVBQUU7RUFBQSxJQUFFRyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDdkMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS2YsNkNBQU87TUFDUixVQUFBbUIsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVixLQUFLLElBQUVJLE1BQU0sQ0FBQ0csT0FBTztFQUFDO0FBRzdDO0FBRUEsSUFBTUksWUFBWSxHQUFHakIsc0RBQWUsQ0FBQztFQUNqQ0ksS0FBSyxFQUFFQyxZQUFZO0VBQ25CYSxVQUFVLEVBQUVKO0FBQ2hCLENBQUMsQ0FBQztBQUVGLGlFQUFlRyxZQUFZOzs7Ozs7OztVQy9DM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfRkFWLCBRVU9URV9FUlJPUiwgUVVPVEVfRkVUQ0hFRCwgUVVPVEVfRkVUQ0hJTkd9IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgICBxdW90ZTogbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyUXVvdGUgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFFVT1RFX0ZFVENISU5HOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFFVT1RFX0ZFVENIRUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHF1b3RlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFFVT1RFX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBxdW90ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXJGYXZvdXJpdGVzKHN0YXRlPVtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9GQVY6XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHF1b3RlOiByZWR1Y2VyUXVvdGUsXHJcbiAgICBmYXZvdXJpdGVzOiByZWR1Y2VyRmF2b3VyaXRlc1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNzhhNDUyZTNjYzE3M2MzNDFkYlwiKSJdLCJuYW1lcyI6WyJBRERfRkFWIiwiUVVPVEVfRVJST1IiLCJRVU9URV9GRVRDSEVEIiwiUVVPVEVfRkVUQ0hJTkciLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJxdW90ZSIsInJlZHVjZXJRdW90ZSIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwicmVkdWNlckZhdm91cml0ZXMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyb290UmVkdWNlcnMiLCJmYXZvdXJpdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==