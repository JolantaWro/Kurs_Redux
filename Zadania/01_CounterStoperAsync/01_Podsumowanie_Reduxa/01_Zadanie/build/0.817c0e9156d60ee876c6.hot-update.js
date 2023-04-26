"use strict";
self["webpackHotUpdatees6_react"](0,{

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
/******/ 	__webpack_require__.h = () => ("255205ebd917a82905f7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44MTdjMGU5MTU2ZDYwZWU4NzZjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNQO0FBQ3VCO0FBRzNELElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQThCUCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxLQUFLLEdBQUdiLDZDQUFNLEVBQUU7O0VBR3RCO0VBQ0E7RUFDQTs7RUFFQSxJQUFNYyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztJQUN6QlAsS0FBSyxDQUFDUSxZQUFZLEVBQUU7SUFDcEJGLEtBQUssQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBR1AsT0FBTztJQUN0Q0MsVUFBVSxDQUFDLEtBQUssQ0FBQztFQUNyQixDQUFDO0VBRUQsSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJaLEtBQUssQ0FBQ0YsV0FBVyxFQUFFO0lBQ25CUSxLQUFLLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUdQLE9BQU87SUFDdENDLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUlELG9CQUNJYiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0csMkRBQU8sRUFBQW9CLFFBQUEsS0FBS2YsS0FBSztJQUFFZ0IsUUFBUSxFQUFFVCxjQUFlO0lBQUNVLE9BQU8sRUFBRUw7RUFBYyxHQUFFLENBQ3hFO0FBRVgsQ0FBQztBQUVELElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFVBQVUsRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNELFVBQVU7SUFDcENFLFlBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNFO0VBQ2hDLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENqQixZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1pQixRQUFRLENBQUM1Qiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNMkIsUUFBUSxDQUFDM0IsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ3NCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ3pCLGdCQUFnQixDQUFDOzs7Ozs7OztVQzlDN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCJcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjb3VudGVyQXN5bmMsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgbXlSZWYgPSB1c2VSZWYoKVxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBjaGFuZ2VWaXNpYmxlID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIG15UmVmLmN1cnJlbnQuc3R5bGUuZGlzYWJsZWQgPSB2aXNpYmxlXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRSdW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuc3RhcnRDb3VudGVyKCk7XHJcbiAgICAgICAgbXlSZWYuY3VycmVudC5zdHlsZS5kaXNhYmxlZCA9IHZpc2libGU7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdG9wUnVuID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnN0b3BDb3VudGVyKCk7XHJcbiAgICAgICAgbXlSZWYuY3VycmVudC5zdHlsZS5kaXNhYmxlZCA9IHZpc2libGVcclxuICAgICAgICBzZXRWaXNpYmxlKHRydWUpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb3VudGVyIHsuLi5wcm9wc30gc2V0U3RhcnQ9e2hhbmRsZVN0YXJ0UnVufSBzZXRTdG9wPXtoYW5kbGVTdG9wUnVufS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcclxuICAgIGNvdW50ZXJWYWx1ZTogc3RhdGUuY291bnRlci52YWx1ZVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKGNvdW50ZXJBc3luYygpKSxcclxuICAgIHN0b3BDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdG9wQ291bnRlcigpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNTUyMDVlYmQ5MTdhODI5MDVmN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ291bnRlciIsImNvbm5lY3QiLCJjb3VudGVyQXN5bmMiLCJzdG9wQ291bnRlciIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwibXlSZWYiLCJoYW5kbGVTdGFydFJ1biIsInN0YXJ0Q291bnRlciIsImN1cnJlbnQiLCJzdHlsZSIsImRpc2FibGVkIiwiaGFuZGxlU3RvcFJ1biIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIiwic2V0U3RhcnQiLCJzZXRTdG9wIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJpc0NvdW50aW5nIiwiY291bnRlciIsImNvdW50ZXJWYWx1ZSIsInZhbHVlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9