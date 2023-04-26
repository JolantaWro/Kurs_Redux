"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
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


var initialCounterState = {
  isCounting: false,
  value: 0,
  intervalId: null
};
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCounterState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.COUNTER_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isCounting: true,
        intervalId: action.payload.intervalId
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.COUNTER_STOPPED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isCounting: false,
        intervalId: null
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.COUNTER_TICK:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: state.value + 1
        });
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_VALUE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: action.payload
        });
      }
    default:
      return state;
  }
};
var list = function list() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ITEM_ADDED:
      return [].concat(_toConsumableArray(state), [action.payload.value]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ITEM_REMOVED:
      state.splice(action.payload.index, 1);
      return _toConsumableArray(state);
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  list: list
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d07d47057d90ca12fb34")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOGU4MGQ0OGUwOTAyMzlhZDQ4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQU9yQjtBQUVuQixJQUFNTyxtQkFBbUIsR0FBRztFQUFFQyxVQUFVLEVBQUUsS0FBSztFQUFFQyxLQUFLLEVBQUUsQ0FBQztFQUFFQyxVQUFVLEVBQUU7QUFBSyxDQUFDO0FBRTdFLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQTRDO0VBQUEsSUFBeENDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdOLG1CQUFtQjtFQUFBLElBQUVTLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUNoRCxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLZixxREFBZTtNQUNoQixPQUFBZ0IsYUFBQSxDQUFBQSxhQUFBLEtBQ09OLEtBQUs7UUFDUkosVUFBVSxFQUFFLElBQUk7UUFDaEJFLFVBQVUsRUFBRU0sTUFBTSxDQUFDRyxPQUFPLENBQUNUO01BQVU7SUFHN0MsS0FBS1AscURBQWU7TUFDaEIsT0FBQWUsYUFBQSxDQUFBQSxhQUFBLEtBQVlOLEtBQUs7UUFBRUosVUFBVSxFQUFFLEtBQUs7UUFBRUUsVUFBVSxFQUFFO01BQUk7SUFFMUQsS0FBS1Qsa0RBQVk7TUFBRTtRQUNmLE9BQUFpQixhQUFBLENBQUFBLGFBQUEsS0FBWU4sS0FBSztVQUFFSCxLQUFLLEVBQUVHLEtBQUssQ0FBQ0gsS0FBSyxHQUFHO1FBQUM7TUFDN0M7SUFDQSxLQUFLSCwrQ0FBUztNQUFFO1FBQ1osT0FBQVksYUFBQSxDQUFBQSxhQUFBLEtBQVdOLEtBQUs7VUFBRUgsS0FBSyxFQUFFTyxNQUFNLENBQUNHO1FBQU87TUFDM0M7SUFFQTtNQUNJLE9BQU9QLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsSUFBTVEsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUEsRUFBMkI7RUFBQSxJQUF2QlIsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzVCLFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtiLGdEQUFVO01BQ1gsVUFBQWlCLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1YsS0FBSyxJQUFFSSxNQUFNLENBQUNHLE9BQU8sQ0FBQ1YsS0FBSztJQUUxQyxLQUFLSixrREFBWTtNQUNiTyxLQUFLLENBQUNXLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDRyxPQUFPLENBQUNLLEtBQUssRUFBRSxDQUFDLENBQUM7TUFDckMsT0FBQUYsa0JBQUEsQ0FBV1YsS0FBSztJQUVwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsaUVBQWVaLHNEQUFlLENBQUM7RUFDM0JXLE9BQU8sRUFBUEEsT0FBTztFQUNQUyxJQUFJLEVBQUpBO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ3BERiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge1xuICAgIENPVU5URVJfVElDSyxcbiAgICBDT1VOVEVSX1NUQVJURUQsXG4gICAgQ09VTlRFUl9TVE9QUEVELFxuICAgIElURU1fQURERUQsXG4gICAgSVRFTV9SRU1PVkVELCBTRVRfVkFMVUUsXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuY29uc3QgaW5pdGlhbENvdW50ZXJTdGF0ZSA9IHsgaXNDb3VudGluZzogZmFsc2UsIHZhbHVlOiAwLCBpbnRlcnZhbElkOiBudWxsIH07XG5cbmNvbnN0IGNvdW50ZXIgPSAoc3RhdGUgPSBpbml0aWFsQ291bnRlclN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQ09VTlRFUl9TVEFSVEVEOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0NvdW50aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGludGVydmFsSWQ6IGFjdGlvbi5wYXlsb2FkLmludGVydmFsSWQsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgQ09VTlRFUl9TVE9QUEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzQ291bnRpbmc6IGZhbHNlLCBpbnRlcnZhbElkOiBudWxsIH07XG5cbiAgICAgICAgY2FzZSBDT1VOVEVSX1RJQ0s6IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2YWx1ZTogc3RhdGUudmFsdWUgKyAxIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfVkFMVUU6IHtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHZhbHVlOiBhY3Rpb24ucGF5bG9hZH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufTtcblxuY29uc3QgbGlzdCA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgSVRFTV9BRERFRDpcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnZhbHVlXTtcblxuICAgICAgICBjYXNlIElURU1fUkVNT1ZFRDpcbiAgICAgICAgICAgIHN0YXRlLnNwbGljZShhY3Rpb24ucGF5bG9hZC5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlXTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY291bnRlcixcbiAgICBsaXN0LFxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMDdkNDcwNTdkOTBjYTEyZmIzNFwiKSJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJDT1VOVEVSX1RJQ0siLCJDT1VOVEVSX1NUQVJURUQiLCJDT1VOVEVSX1NUT1BQRUQiLCJJVEVNX0FEREVEIiwiSVRFTV9SRU1PVkVEIiwiU0VUX1ZBTFVFIiwiaW5pdGlhbENvdW50ZXJTdGF0ZSIsImlzQ291bnRpbmciLCJ2YWx1ZSIsImludGVydmFsSWQiLCJjb3VudGVyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwiX29iamVjdFNwcmVhZCIsInBheWxvYWQiLCJsaXN0IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwic3BsaWNlIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9