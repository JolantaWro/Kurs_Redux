"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Counter

var Counter = function Counter(_ref) {
  var isCounting = _ref.isCounting,
    counterValue = _ref.counterValue,
    setStart = _ref.setStart,
    setStop = _ref.setStop;
  console.log(isCounting, counterValue);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: setStart
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: setStop,
    disabled: true
  }, "stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counterValue));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var CounterContainer = function CounterContainer(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var changeVisible = function changeVisible() {
    myRef.current.style.disabled = visible;
  };
  var handleStartRun = function handleStartRun() {
    props.startCounter();
    myRef.current.style.disabled = visible;
    setVisible(false);
  };
  var handleStopRun = function handleStopRun() {
    props.stopCounter();
    myRef.current.style.disabled = visible;
    setVisible(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    setStart: handleStartRun,
    setStop: handleStopRun
  })));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isCounting: state.counter.isCounting,
    counterValue: state.counter.value
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startCounter: function startCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.counterAsync)());
    },
    stopCounter: function stopCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.stopCounter)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0d43decb12de365f6f86")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVJLGtCQUFrQixDQUFDLENBQUNwQixnQkFBZ0IsQ0FBQzs7Ozs7Ozs7VUM5QzdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ291bnRlclxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ291bnRlciA9ICh7IGlzQ291bnRpbmcsIGNvdW50ZXJWYWx1ZSwgc2V0U3RhcnQsIHNldFN0b3AgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNDb3VudGluZywgY291bnRlclZhbHVlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRTdGFydH0+c3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRTdG9wfSBkaXNhYmxlZD5zdG9wPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMT57Y291bnRlclZhbHVlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NvdW50ZXJBc3luYywgc3RvcENvdW50ZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZigpXHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlSZWYuY3VycmVudC5zdHlsZS5kaXNhYmxlZCA9IHZpc2libGVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydFJ1biA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zdGFydENvdW50ZXIoKTtcclxuICAgICAgICBteVJlZi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdmlzaWJsZTtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0b3BSdW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RvcENvdW50ZXIoKTtcclxuICAgICAgICBteVJlZi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdmlzaWJsZVxyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvdW50ZXIgey4uLnByb3BzfSBzZXRTdGFydD17aGFuZGxlU3RhcnRSdW59IHNldFN0b3A9e2hhbmRsZVN0b3BSdW59Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxyXG4gICAgY291bnRlclZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goY291bnRlckFzeW5jKCkpLFxyXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlckNvbnRhaW5lcik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBkNDNkZWNiMTJkZTM2NWY2Zjg2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl9yZWYiLCJpc0NvdW50aW5nIiwiY291bnRlclZhbHVlIiwic2V0U3RhcnQiLCJzZXRTdG9wIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJjb3VudGVyQXN5bmMiLCJzdG9wQ291bnRlciIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwibXlSZWYiLCJjaGFuZ2VWaXNpYmxlIiwiY3VycmVudCIsInN0eWxlIiwiaGFuZGxlU3RhcnRSdW4iLCJzdGFydENvdW50ZXIiLCJoYW5kbGVTdG9wUnVuIiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY291bnRlciIsInZhbHVlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9