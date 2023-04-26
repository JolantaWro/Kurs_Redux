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
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
// Counter


var Counter = function Counter(_ref) {
  var isCounting = _ref.isCounting,
    counterValue = _ref.counterValue,
    setStart = _ref.setStart,
    setStop = _ref.setStop,
    listTime = _ref.listTime,
    addTimeToList = _ref.addTimeToList;
  console.log(isCounting, counterValue);
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  console.log(myRef);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: setStart,
    ref: myRef
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: setStop
  }, "stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counterValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    listTime: listTime,
    addTimeToList: addTimeToList
  }));
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
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
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

  // const changeVisible = () => {
  //     myRef.current.style.disabled = visible
  // }

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
    counterValue: state.counter.value,
    listTime: state.list
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startCounter: function startCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.counterAsync)());
    },
    stopCounter: function stopCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.stopCounter)());
    },
    addTimeToList: function addTimeToList(value) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addTime)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("426c8f37631dbf0ccb92")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7TUFBQSxPQUFNYSxRQUFRLENBQUN2Qiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNc0IsUUFBUSxDQUFDdEIsMkRBQVcsRUFBRSxDQUFDO0lBQUE7SUFDMUNYLGFBQWEsRUFBRSxTQUFBQSxjQUFDOEIsS0FBSztNQUFBLE9BQUtHLFFBQVEsQ0FBQ3hCLHVEQUFPLENBQUNxQixLQUFLLENBQUMsQ0FBQztJQUFBO0VBQ3RELENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWV0QixvREFBTyxDQUFDbUIsZUFBZSxFQUFFSyxrQkFBa0IsQ0FBQyxDQUFDcEIsZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDakQ3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvdW50ZXJcclxuaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmNvbnN0IENvdW50ZXIgPSAoeyBpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUsIHNldFN0YXJ0LCBzZXRTdG9wLCBsaXN0VGltZSwgYWRkVGltZVRvTGlzdCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUpXHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zb2xlLmxvZyhteVJlZilcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFN0YXJ0fSByZWY9e215UmVmfT5zdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NldFN0b3B9PnN0b3A8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgxPntjb3VudGVyVmFsdWV9PC9oMT5cclxuICAgICAgICAgICAgPExpc3QgbGlzdFRpbWU9e2xpc3RUaW1lfSAgYWRkVGltZVRvTGlzdD17IGFkZFRpbWVUb0xpc3R9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFRpbWUsIGNvdW50ZXJBc3luYywgc3RvcENvdW50ZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZigpXHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGNoYW5nZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgbXlSZWYuY3VycmVudC5zdHlsZS5kaXNhYmxlZCA9IHZpc2libGVcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydFJ1biA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zdGFydENvdW50ZXIoKTtcclxuICAgICAgICBteVJlZi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdmlzaWJsZTtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0b3BSdW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RvcENvdW50ZXIoKTtcclxuICAgICAgICBteVJlZi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdmlzaWJsZVxyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb3VudGVyIHsuLi5wcm9wc30gc2V0U3RhcnQ9e2hhbmRsZVN0YXJ0UnVufSBzZXRTdG9wPXtoYW5kbGVTdG9wUnVufS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcclxuICAgIGNvdW50ZXJWYWx1ZTogc3RhdGUuY291bnRlci52YWx1ZSxcclxuICAgIGxpc3RUaW1lOiBzdGF0ZS5saXN0XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goY291bnRlckFzeW5jKCkpLFxyXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpLFxyXG4gICAgYWRkVGltZVRvTGlzdDogKHZhbHVlKSA9PiBkaXNwYXRjaChhZGRUaW1lKHZhbHVlKSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDI2YzhmMzc2MzFkYmYwY2NiOTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJMaXN0IiwiQ291bnRlciIsIl9yZWYiLCJpc0NvdW50aW5nIiwiY291bnRlclZhbHVlIiwic2V0U3RhcnQiLCJzZXRTdG9wIiwibGlzdFRpbWUiLCJhZGRUaW1lVG9MaXN0IiwiY29uc29sZSIsImxvZyIsIm15UmVmIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJyZWYiLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJhZGRUaW1lIiwiY291bnRlckFzeW5jIiwic3RvcENvdW50ZXIiLCJDb3VudGVyQ29udGFpbmVyIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImhhbmRsZVN0YXJ0UnVuIiwic3RhcnRDb3VudGVyIiwiY3VycmVudCIsInN0eWxlIiwiZGlzYWJsZWQiLCJoYW5kbGVTdG9wUnVuIiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY291bnRlciIsInZhbHVlIiwibGlzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==