"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
// Counter


var Counter = function Counter(_ref) {
  var isCounting = _ref.isCounting,
    counterValue = _ref.counterValue,
    setStart = _ref.setStart,
    setStop = _ref.setStop,
    listTime = _ref.listTime,
    addTimeToList = _ref.addTimeToList,
    addValue = _ref.addValue,
    startCounter = _ref.startCounter,
    stopCounter = _ref.stopCounter;
  console.log(isCounting, counterValue);
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  console.log(myRef);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var intervalRunning;
    if (isCounting) {
      intervalRunning = setInterval(function () {
        addValue(1);
      }, 1000);
    }
    return function () {
      return clearInterval(intervalRunning);
    };
  }, [isCounting]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: startCounter,
    ref: myRef
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: stopCounter,
    ref: myRef
  }, "stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counterValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    listTime: listTime,
    addTimeToList: addTimeToList
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

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
        value: state.value + action.payload
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("be0f4e42682b856986a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQyxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQ2pDLFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtiLDhDQUFRO01BQ1QsVUFBQWlCLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1YsS0FBSyxJQUFFSSxNQUFNLENBQUNHLE9BQU87SUFDcEMsS0FBS2IsaURBQVc7TUFDWixPQUFPTSxLQUFLLENBQUNXLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDQyxFQUFFLEtBQUtULE1BQU0sQ0FBQ0csT0FBTyxDQUFDTSxFQUFFO01BQUEsRUFBQztJQUNwRTtNQUNJLE9BQU9iLEtBQUs7RUFBQTtBQUV4QixDQUFDO0FBTUQsSUFBTWMsV0FBVyxHQUFHdkIsc0RBQWUsQ0FBQztFQUNoQ3dCLE9BQU8sRUFBRWhCLGNBQWM7RUFDdkJpQixJQUFJLEVBQUVSO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVNLFdBQVc7Ozs7Ozs7O1VDbkQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3VudGVyXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmNvbnN0IENvdW50ZXIgPSAoeyBpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUsIHNldFN0YXJ0LCBzZXRTdG9wLCBsaXN0VGltZSwgYWRkVGltZVRvTGlzdCwgYWRkVmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNDb3VudGluZywgY291bnRlclZhbHVlKVxyXG4gICAgY29uc3QgbXlSZWYgPSB1c2VSZWYoKVxyXG4gICAgY29uc29sZS5sb2cobXlSZWYpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWxSdW5uaW5nO1xyXG4gICAgICAgIGlmKGlzQ291bnRpbmcpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWxSdW5uaW5nID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkVmFsdWUoMSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSdW5uaW5nKVxyXG5cclxuICAgIH0sIFtpc0NvdW50aW5nXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YXJ0Q291bnRlcn0gcmVmPXtteVJlZn0+c3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdG9wQ291bnRlcn0gcmVmPXtteVJlZn0+c3RvcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJWYWx1ZX08L2gxPlxyXG4gICAgICAgICAgICA8TGlzdCBsaXN0VGltZT17bGlzdFRpbWV9ICBhZGRUaW1lVG9MaXN0PXsgYWRkVGltZVRvTGlzdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtBRERfVElNRSwgQUREX1ZBTFVFLCBSRU1PVkVfVElNRSwgU1RBUlRfQ09VTlRFUiwgU1RPUF9DT1VOVEVSfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNDb3VudGluZzogZmFsc2UsXHJcbiAgICB2YWx1ZTogMFxyXG59XHJcbmNvbnN0IGNvdW50ZXJSZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTVEFSVF9DT1VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNDb3VudGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlOiBzdGF0ZS52YWx1ZSArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU1RPUF9DT1VOVEVSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0NvdW50aW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfVkFMVUU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSArIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGxpc3RSZWR1Y2VyID0gKHN0YXRlPVtdLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9USU1FOlxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cclxuICAgICAgICBjYXNlIFJFTU9WRV9USU1FOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb3VudGVyOiBjb3VudGVyUmVkdWNlcixcclxuICAgIGxpc3Q6IGxpc3RSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJlMGY0ZTQyNjgyYjg1Njk4NmExXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGlzdCIsIkNvdW50ZXIiLCJfcmVmIiwiaXNDb3VudGluZyIsImNvdW50ZXJWYWx1ZSIsInNldFN0YXJ0Iiwic2V0U3RvcCIsImxpc3RUaW1lIiwiYWRkVGltZVRvTGlzdCIsImFkZFZhbHVlIiwic3RhcnRDb3VudGVyIiwic3RvcENvdW50ZXIiLCJjb25zb2xlIiwibG9nIiwibXlSZWYiLCJpbnRlcnZhbFJ1bm5pbmciLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsInJlZiIsImNvbWJpbmVSZWR1Y2VycyIsIkFERF9USU1FIiwiQUREX1ZBTFVFIiwiUkVNT1ZFX1RJTUUiLCJTVEFSVF9DT1VOVEVSIiwiU1RPUF9DT1VOVEVSIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJjb3VudGVyUmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwibGlzdFJlZHVjZXIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJmaWx0ZXIiLCJlbGVtZW50IiwiaWQiLCJyb290UmVkdWNlciIsImNvdW50ZXIiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==