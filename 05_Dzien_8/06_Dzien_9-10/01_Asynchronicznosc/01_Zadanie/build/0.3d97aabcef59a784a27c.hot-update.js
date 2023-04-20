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
/******/ 	__webpack_require__.h = () => ("37fd97beb0d8f674f53e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZDk3YWFiY2VmNTlhNzg0YTI3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUN4QztBQUd0QyxJQUFNSyxZQUFZLEdBQUc7RUFDakJDLE9BQU8sRUFBRSxLQUFLO0VBQ2RDLEtBQUssRUFBRSxFQUFFO0VBQ1RDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCxTQUFTQyxZQUFZQSxDQUFBLEVBQThCO0VBQUEsSUFBNUJDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNOLFlBQVk7RUFBQSxJQUFFUyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0MsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1osb0RBQWM7TUFBRTtRQUNqQixPQUFBYSxhQUFBLENBQUFBLGFBQUEsS0FDT04sS0FBSztVQUNSSixPQUFPLEVBQUU7UUFBSTtNQUVyQjtJQUNBLEtBQUtKLG1EQUFhO01BQUU7UUFDaEIsT0FBTztVQUNISSxPQUFPLEVBQUUsS0FBSztVQUNkRSxLQUFLLEVBQUVNLE1BQU0sQ0FBQ0csT0FBTztVQUNyQlYsS0FBSyxFQUFFO1FBQ1gsQ0FBQztNQUNMO0lBQ0EsS0FBS04saURBQVc7TUFBRTtRQUNkLE9BQU87VUFDSEssT0FBTyxFQUFFLEtBQUs7VUFDZEUsS0FBSyxFQUFFLElBQUk7VUFDWEQsS0FBSyxFQUFFTyxNQUFNLENBQUNHO1FBQ2xCLENBQUM7TUFDTDtJQUNBO01BQ0ksT0FBT1AsS0FBSztFQUFBO0FBRXhCO0FBRUEsU0FBU1EsaUJBQWlCQSxDQUFBLEVBQW1CO0VBQUEsSUFBbEJSLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUMsRUFBRTtFQUFBLElBQUVHLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN2QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLZiw2Q0FBTztNQUNSLFVBQUFtQixNQUFBLENBQUFDLGtCQUFBLENBQVdWLEtBQUssSUFBRUksTUFBTSxDQUFDRyxPQUFPO0VBQUM7QUFHN0M7QUFFQSxJQUFNSSxZQUFZLEdBQUdqQixzREFBZSxDQUFDO0VBQ2pDSSxLQUFLLEVBQUVDO0VBQ1A7QUFDSixDQUFDLENBQUM7O0FBRUYsaUVBQWVZLFlBQVk7Ozs7Ozs7O1VDbEQzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9GQVYsIFFVT1RFX0VSUk9SLCBRVU9URV9GRVRDSEVELCBRVU9URV9GRVRDSElOR30gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogXCJcIixcbiAgICBxdW90ZTogbnVsbFxufVxuXG5mdW5jdGlvbiByZWR1Y2VyUXVvdGUgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgUVVPVEVfRkVUQ0hJTkc6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgUVVPVEVfRkVUQ0hFRDoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBxdW90ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFFVT1RFX0VSUk9SOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZXJGYXZvdXJpdGVzKHN0YXRlPVtdLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX0ZBVjpcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuICAgIH1cblxufVxuXG5jb25zdCByb290UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHF1b3RlOiByZWR1Y2VyUXVvdGUsXG4gICAgLy8gZmF2b3VyaXRlczogcmVkdWNlckZhdm91cml0ZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzN2ZkOTdiZWIwZDhmNjc0ZjUzZVwiKSJdLCJuYW1lcyI6WyJBRERfRkFWIiwiUVVPVEVfRVJST1IiLCJRVU9URV9GRVRDSEVEIiwiUVVPVEVfRkVUQ0hJTkciLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJxdW90ZSIsInJlZHVjZXJRdW90ZSIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwicmVkdWNlckZhdm91cml0ZXMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyb290UmVkdWNlcnMiXSwic291cmNlUm9vdCI6IiJ9