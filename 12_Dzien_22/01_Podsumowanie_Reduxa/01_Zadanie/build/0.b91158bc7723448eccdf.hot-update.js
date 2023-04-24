"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
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
  isCounting: false,
  value: 0
};
var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.START_COUNTER:
      return {
        isCounting: true
        // value: state.value + 1
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__.STOP_COUNTER:
      return _objectSpread(_objectSpread({}, state), {}, {
        isCounting: false
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_VALUE:
      return _objectSpread(_objectSpread({}, state), {}, {
        value: state.value + 1
      });
    default:
      return state;
  }
};
var listReducer = function listReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TIME:
      return [].concat(_toConsumableArray(state), [action.payload]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TIME:
      return state.filter(function (element) {
        return element.id !== action.payload.id;
      });
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counterReducer,
  list: listReducer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);



var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5b966aa1b73680ccef56")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOTExNThiYzc3MjM0NDhlY2NkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNrRDtBQUd4RixJQUFNTSxZQUFZLEdBQUc7RUFDakJDLFVBQVUsRUFBRSxLQUFLO0VBQ2pCQyxLQUFLLEVBQUU7QUFDWCxDQUFDO0FBQ0QsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQW1DO0VBQUEsSUFBL0JDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNMLFlBQVk7RUFBQSxJQUFFUSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDOUMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1gsbURBQWE7TUFDZCxPQUFPO1FBQ0hHLFVBQVUsRUFBRTtRQUNaO01BQ0osQ0FBQzs7SUFDTCxLQUFLRixrREFBWTtNQUNiLE9BQUFXLGFBQUEsQ0FBQUEsYUFBQSxLQUNPTixLQUFLO1FBQ1JILFVBQVUsRUFBRTtNQUFLO0lBRXpCLEtBQUtMLCtDQUFTO01BQ1YsT0FBQWMsYUFBQSxDQUFBQSxhQUFBLEtBQ09OLEtBQUs7UUFDUkYsS0FBSyxFQUFFRSxLQUFLLENBQUNGLEtBQUssR0FBRztNQUFDO0lBRTlCO01BQ0ksT0FBT0UsS0FBSztFQUFBO0FBR3hCLENBQUM7QUFFRCxJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUF5QjtFQUFBLElBQXJCUCxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDLEVBQUU7RUFBQSxJQUFFRyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDakMsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS2QsOENBQVE7TUFDVCxVQUFBaUIsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLakIsaURBQVc7TUFDWixPQUFPTyxLQUFLLENBQUNXLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDQyxFQUFFLEtBQUtULE1BQU0sQ0FBQ00sT0FBTyxDQUFDRyxFQUFFO01BQUEsRUFBQztJQUNwRTtNQUNJLE9BQU9iLEtBQUs7RUFBQTtBQUV4QixDQUFDO0FBTUQsSUFBTWMsV0FBVyxHQUFHeEIsc0RBQWUsQ0FBQztFQUNoQ3lCLE9BQU8sRUFBRWhCLGNBQWM7RUFDdkJpQixJQUFJLEVBQUVUO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVPLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDbkQwQjtBQUNwQjtBQUNJO0FBRXBDLElBQU1NLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLG9DQUFvQyxJQUFJQyxPQUFPO0FBRS9FLElBQU1DLEtBQUssR0FBR1Asa0RBQVcsQ0FBQ0gsZ0RBQVcsRUFBRU0sZ0JBQWdCLENBQUNGLHNEQUFlLENBQUNDLG1EQUFLLENBQUMsQ0FBQyxDQUFDO0FBRWhGLGlFQUFlSyxLQUFLOzs7Ozs7OztVQ1JwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtBRERfVElNRSwgQUREX1ZBTFVFLCBSRU1PVkVfVElNRSwgU1RBUlRfQ09VTlRFUiwgU1RPUF9DT1VOVEVSfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNDb3VudGluZzogZmFsc2UsXHJcbiAgICB2YWx1ZTogMFxyXG59XHJcbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTVEFSVF9DT1VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNDb3VudGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlOiBzdGF0ZS52YWx1ZSArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU1RPUF9DT1VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0NvdW50aW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgbGlzdFJlZHVjZXIgPSAoc3RhdGU9W10sIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1RJTUU6XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1RJTUU6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50ZXI6IGNvdW50ZXJSZWR1Y2VyLFxyXG4gICAgbGlzdDogbGlzdFJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1Yjk2NmFhMWI3MzY4MGNjZWY1NlwiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJBRERfVElNRSIsIkFERF9WQUxVRSIsIlJFTU9WRV9USU1FIiwiU1RBUlRfQ09VTlRFUiIsIlNUT1BfQ09VTlRFUiIsImluaXRpYWxTdGF0ZSIsImlzQ291bnRpbmciLCJ2YWx1ZSIsImNvdW50ZXJSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwiX29iamVjdFNwcmVhZCIsImxpc3RSZWR1Y2VyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsImZpbHRlciIsImVsZW1lbnQiLCJpZCIsInJvb3RSZWR1Y2VyIiwiY291bnRlciIsImxpc3QiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=