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
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHED:
      {
        return {
          loading: false,
          quote: action.payload,
          error: null
        };
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_ERROR:
      {
        return {
          loading: false,
          quote: null,
          error: action.payload
        };
      }
    default:
      return state;
  }
}

// function reducerFavourites(state=[], action) {
//     switch (action.type) {
//         case ADD_FAV:
//             return [...state, action.payload]
//     }
//
// }

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
/******/ 	__webpack_require__.h = () => ("9b469c3709736a472547")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zN2ZkOTdiZWIwZDhmNjc0ZjUzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUN4QztBQUd0QyxJQUFNSyxZQUFZLEdBQUc7RUFDakJDLE9BQU8sRUFBRSxLQUFLO0VBQ2RDLEtBQUssRUFBRSxFQUFFO0VBQ1RDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCxTQUFTQyxZQUFZQSxDQUFBLEVBQThCO0VBQUEsSUFBNUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNOLFlBQVk7RUFBQSxJQUFFUyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0MsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1osb0RBQWM7TUFBRTtRQUNqQixPQUFBYSxhQUFBLENBQUFBLGFBQUEsS0FDT04sS0FBSztVQUNSSixPQUFPLEVBQUU7UUFBSTtNQUVyQjtJQUNBLEtBQUtKLG1EQUFhO01BQUU7UUFDaEIsT0FBTztVQUNISSxPQUFPLEVBQUUsS0FBSztVQUNkRSxLQUFLLEVBQUVNLE1BQU0sQ0FBQ0csT0FBTztVQUNyQlYsS0FBSyxFQUFFO1FBQ1gsQ0FBQztNQUNMO0lBQ0EsS0FBS04saURBQVc7TUFBRTtRQUNkLE9BQU87VUFDSEssT0FBTyxFQUFFLEtBQUs7VUFDZEUsS0FBSyxFQUFFLElBQUk7VUFDWEQsS0FBSyxFQUFFTyxNQUFNLENBQUNHO1FBQ2xCLENBQUM7TUFDTDtJQUNBO01BQ0ksT0FBT1AsS0FBSztFQUFBO0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1RLFlBQVksR0FBR2Qsc0RBQWUsQ0FBQztFQUNqQ0ksS0FBSyxFQUFFQztFQUNQO0FBQ0osQ0FBQyxDQUFDOztBQUVGLGlFQUFlUyxZQUFZOzs7Ozs7OztVQ2xEM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfRkFWLCBRVU9URV9FUlJPUiwgUVVPVEVfRkVUQ0hFRCwgUVVPVEVfRkVUQ0hJTkd9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IFwiXCIsXG4gICAgcXVvdGU6IG51bGxcbn1cblxuZnVuY3Rpb24gcmVkdWNlclF1b3RlIChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFFVT1RFX0ZFVENISU5HOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFFVT1RFX0ZFVENIRUQ6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcXVvdGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBRVU9URV9FUlJPUjoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBxdW90ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiByZWR1Y2VyRmF2b3VyaXRlcyhzdGF0ZT1bXSwgYWN0aW9uKSB7XG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9GQVY6XG4vLyAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbi8vICAgICB9XG4vL1xuLy8gfVxuXG5jb25zdCByb290UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHF1b3RlOiByZWR1Y2VyUXVvdGUsXG4gICAgLy8gZmF2b3VyaXRlczogcmVkdWNlckZhdm91cml0ZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YjQ2OWMzNzA5NzM2YTQ3MjU0N1wiKSJdLCJuYW1lcyI6WyJBRERfRkFWIiwiUVVPVEVfRVJST1IiLCJRVU9URV9GRVRDSEVEIiwiUVVPVEVfRkVUQ0hJTkciLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJxdW90ZSIsInJlZHVjZXJRdW90ZSIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==