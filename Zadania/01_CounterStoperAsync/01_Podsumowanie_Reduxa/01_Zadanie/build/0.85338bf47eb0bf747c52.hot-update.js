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
    setStart = _ref.setStart;
  console.log(isCounting, counterValue);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: setStart
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: stopCounter,
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    startVisible = _useState2[0],
    setToggle = _useState2[1];
  var myButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  console.log(myButton);
  var changeVisible = function changeVisible() {
    myButton.current.style.disabled = true;
  };
  var handleStartRun = function handleStartRun() {
    props.startCounter();
    changeVisible();
  };
  console.log(myButton);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    setStart: handleStartRun
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
/******/ 	__webpack_require__.h = () => ("ef7fb6547d4cec2b71f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NTMzOGJmNDdlYjBiZjc0N2M1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBCO0FBRTFCLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBQyxJQUFBLEVBQStDO0VBQUEsSUFBekNDLFVBQVUsR0FBQUQsSUFBQSxDQUFWQyxVQUFVO0lBQUVDLFlBQVksR0FBQUYsSUFBQSxDQUFaRSxZQUFZO0lBQUVDLFFBQVEsR0FBQUgsSUFBQSxDQUFSRyxRQUFRO0VBQ2pEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osVUFBVSxFQUFFQyxZQUFZLENBQUM7RUFFckMsb0JBQ0lKLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRUyxPQUFPLEVBQUVKO0VBQVMsR0FBQyxPQUFLLENBQVMsZUFDekNMLDBEQUFBO0lBQVFTLE9BQU8sRUFBRUMsV0FBWTtJQUFDQyxRQUFRO0VBQUEsR0FBQyxNQUFJLENBQVMsZUFDcERYLDBEQUFBLGFBQUtJLFlBQVksQ0FBTSxDQUNyQjtBQUVkLENBQUM7QUFFRCxpRUFBZUgsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0I7QUFDSDtBQUNQO0FBQ3VCO0FBRzNELElBQU1lLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQWtDTCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBTSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csWUFBWSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxRQUFRLEdBQUdYLDZDQUFNLEVBQUU7RUFDekJOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDO0VBRXJCLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO0lBQ3hCRCxRQUFRLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDZixRQUFRLEdBQUcsSUFBSTtFQUMxQyxDQUFDO0VBRUQsSUFBTWdCLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQ3pCVixLQUFLLENBQUNXLFlBQVksRUFBRTtJQUNwQkosYUFBYSxFQUFFO0VBQ25CLENBQUM7RUFDRGxCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDO0VBR3JCLG9CQUNJdkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNDLDJEQUFPLEVBQUE2QixRQUFBLEtBQUtiLEtBQUs7SUFBRVosUUFBUSxFQUFFc0I7RUFBZSxHQUFFLENBQ2hEO0FBRVgsQ0FBQztBQUVELElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUI3QixVQUFVLEVBQUU2QixLQUFLLENBQUNDLE9BQU8sQ0FBQzlCLFVBQVU7SUFDcENDLFlBQVksRUFBRTRCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQztFQUNoQyxDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDUixZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1RLFFBQVEsQ0FBQ3JCLDREQUFZLEVBQUUsQ0FBQztJQUFBO0lBQzVDTCxXQUFXLEVBQUUsU0FBQUEsWUFBQTtNQUFBLE9BQU0wQixRQUFRLENBQUMxQiwyREFBVyxFQUFFLENBQUM7SUFBQTtFQUM5QyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSSxvREFBTyxDQUFDaUIsZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDbkIsZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDeEM3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvdW50ZXJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvdW50ZXIgPSAoeyBpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUsIHNldFN0YXJ0IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlzQ291bnRpbmcsIGNvdW50ZXJWYWx1ZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2V0U3RhcnR9PnN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RvcENvdW50ZXJ9IGRpc2FibGVkPnN0b3A8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgxPntjb3VudGVyVmFsdWV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7Y291bnRlckFzeW5jLCBzdG9wQ291bnRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCBDb3VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhcnRWaXNpYmxlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG15QnV0dG9uID0gdXNlUmVmKClcclxuICAgIGNvbnNvbGUubG9nKG15QnV0dG9uKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlCdXR0b24uY3VycmVudC5zdHlsZS5kaXNhYmxlZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydFJ1biA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zdGFydENvdW50ZXIoKTtcclxuICAgICAgICBjaGFuZ2VWaXNpYmxlKClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG15QnV0dG9uKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb3VudGVyIHsuLi5wcm9wc30gc2V0U3RhcnQ9e2hhbmRsZVN0YXJ0UnVufS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcclxuICAgIGNvdW50ZXJWYWx1ZTogc3RhdGUuY291bnRlci52YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKGNvdW50ZXJBc3luYygpKSxcclxuICAgIHN0b3BDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdG9wQ291bnRlcigpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZjdmYjY1NDdkNGNlYzJiNzFmMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvdW50ZXIiLCJfcmVmIiwiaXNDb3VudGluZyIsImNvdW50ZXJWYWx1ZSIsInNldFN0YXJ0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwic3RvcENvdW50ZXIiLCJkaXNhYmxlZCIsInVzZVJlZiIsInVzZVN0YXRlIiwiY29ubmVjdCIsImNvdW50ZXJBc3luYyIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXJ0VmlzaWJsZSIsInNldFRvZ2dsZSIsIm15QnV0dG9uIiwiY2hhbmdlVmlzaWJsZSIsImN1cnJlbnQiLCJzdHlsZSIsImhhbmRsZVN0YXJ0UnVuIiwic3RhcnRDb3VudGVyIiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY291bnRlciIsInZhbHVlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9