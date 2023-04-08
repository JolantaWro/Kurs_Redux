"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// const imgSrc = "https://www.raletta.in/images/rocket.gif";
var imgSrc = "https://media.tenor.com/Enn7lYXb5FoAAAAi/rocket-spaceship.gif";
var Rocket = function Rocket(_ref) {
  var isLaunched = _ref.isLaunched;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "rocket",
    src: imgSrc,
    className: "rocket ".concat(isLaunched ? 'launched' : '')
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rocket);

/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _components_Platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);





var mapStateToProps = function mapStateToProps(state) {
  return {
    launched: state.rocket.launched,
    counter: state.rocket.counter
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deploy: function deploy() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_1__.rocketAsync)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(_components_Platform__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "LAUNCHING": () => (/* binding */ LAUNCHING),
/* harmony export */   "decrementCounter": () => (/* binding */ decrementCounter),
/* harmony export */   "rocketAsync": () => (/* binding */ rocketAsync),
/* harmony export */   "startLaunching": () => (/* binding */ startLaunching)
/* harmony export */ });
var LAUNCHING = "LAUNCHING";
var DECREMENT = "DECREMENT";
var startLaunching = function startLaunching() {
  return {
    type: LAUNCHING
  };
};
var decrementCounter = function decrementCounter() {
  return {
    type: DECREMENT
  };
};
var rocketAsync = function rocketAsync() {
  return function (dispatch) {
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 1000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 2000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 3000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 4000);
    setTimeout(function () {
      return dispatch(decrementCounter());
    }, 5000);
    setTimeout(function () {
      dispatch(startLaunching());
    }, 5000);
  };
};


/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var initialState = {
  launched: false,
  counter: 5
};
var reducerLaunched = function reducerLaunched() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.LAUNCHING:
      return _objectSpread(_objectSpread({}, state), {}, {
        launched: true
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        counter: state - 1
      });
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  rocket: reducerLaunched
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8dba8c3a58d095e07b51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtFQUFBLElBQUVLLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMvQyxRQUFPQyxNQUFNLENBQUNULElBQUk7SUFDZCxLQUFLSCwrQ0FBUztNQUNWLE9BQUFhLGFBQUEsQ0FBQUEsYUFBQSxLQUNPcEIsS0FBSztRQUNSQyxRQUFRLEVBQUU7TUFBSTtJQUV0QixLQUFLTywrQ0FBUztNQUNWLE9BQUFZLGFBQUEsQ0FBQUEsYUFBQSxLQUNPcEIsS0FBSztRQUNSRyxPQUFPLEVBQUVILEtBQUssR0FBRztNQUFDO0lBRTFCO01BQ0ksT0FBT0EsS0FBSztFQUFBO0FBRXhCLENBQUM7QUFFTSxJQUFNcUIsV0FBVyxHQUFHUixzREFBZSxDQUFDO0VBQ3ZDWCxNQUFNLEVBQUVhO0FBQ1osQ0FBQyxDQUFDOzs7Ozs7OztVQzNCRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUm9ja2V0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY29uc3QgaW1nU3JjID0gXCJodHRwczovL3d3dy5yYWxldHRhLmluL2ltYWdlcy9yb2NrZXQuZ2lmXCI7XHJcbmNvbnN0IGltZ1NyYyA9IFwiaHR0cHM6Ly9tZWRpYS50ZW5vci5jb20vRW5uN2xZWGI1Rm9BQUFBaS9yb2NrZXQtc3BhY2VzaGlwLmdpZlwiO1xyXG5cclxuY29uc3QgUm9ja2V0ID0gKHsgaXNMYXVuY2hlZCB9KSA9PlxyXG4gIDxpbWdcclxuICAgIGFsdD1cInJvY2tldFwiXHJcbiAgICBzcmM9e2ltZ1NyY31cclxuICAgIGNsYXNzTmFtZT17YHJvY2tldCAke2lzTGF1bmNoZWQgPyAnbGF1bmNoZWQnOiAnJ31gfVxyXG4gIC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7cm9ja2V0QXN5bmN9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCBQbGF0Zm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9QbGF0Zm9ybVwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbGF1bmNoZWQ6IHN0YXRlLnJvY2tldC5sYXVuY2hlZCxcclxuICAgIGNvdW50ZXI6IHN0YXRlLnJvY2tldC5jb3VudGVyXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIGRlcGxveTogKCk9PiBkaXNwYXRjaChyb2NrZXRBc3luYygpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBsYXRmb3JtKVxyXG4iLCJjb25zdCBMQVVOQ0hJTkcgPSBcIkxBVU5DSElOR1wiO1xyXG5jb25zdCBERUNSRU1FTlQgPSBcIkRFQ1JFTUVOVFwiO1xyXG5jb25zdCBzdGFydExhdW5jaGluZyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBMQVVOQ0hJTkdcclxufSk7XHJcblxyXG5jb25zdCBkZWNyZW1lbnRDb3VudGVyID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVFxyXG59KVxyXG5cclxuY29uc3Qgcm9ja2V0QXN5bmMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDEwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgMjAwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnRDb3VudGVyKCkpLCAzMDAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRpc3BhdGNoKGRlY3JlbWVudENvdW50ZXIoKSksIDQwMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50Q291bnRlcigpKSwgNTAwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc3RhcnRMYXVuY2hpbmcoKSlcclxuICAgICAgICB9LCA1MDAwKTtcclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBMQVVOQ0hJTkcsIERFQ1JFTUVOVCwgc3RhcnRMYXVuY2hpbmcsIGRlY3JlbWVudENvdW50ZXIsIHJvY2tldEFzeW5jIH0iLCJpbXBvcnQge0RFQ1JFTUVOVCwgTEFVTkNISU5HfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxhdW5jaGVkOiBmYWxzZSxcclxuICAgIGNvdW50ZXI6IDVcclxufVxyXG5cclxuY29uc3QgcmVkdWNlckxhdW5jaGVkID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExBVU5DSElORzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbGF1bmNoZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgREVDUkVNRU5UOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBzdGF0ZSAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcm9ja2V0OiByZWR1Y2VyTGF1bmNoZWRcclxufSlcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGRiYThjM2E1OGQwOTVlMDdiNTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJpbWdTcmMiLCJSb2NrZXQiLCJfcmVmIiwiaXNMYXVuY2hlZCIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJzcmMiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJyb2NrZXRBc3luYyIsIlBsYXRmb3JtIiwiY29ubmVjdCIsInN0b3JlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsYXVuY2hlZCIsInJvY2tldCIsImNvdW50ZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImRlcGxveSIsIkxBVU5DSElORyIsIkRFQ1JFTUVOVCIsInN0YXJ0TGF1bmNoaW5nIiwidHlwZSIsImRlY3JlbWVudENvdW50ZXIiLCJzZXRUaW1lb3V0IiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlckxhdW5jaGVkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiX29iamVjdFNwcmVhZCIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==