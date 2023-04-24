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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
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
    // startCounter: () => dispatch(counterAsync()),
    startCounter: function startCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.startCounter)());
    },
    stopCounter: function stopCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.stopCounter)());
    },
    addValue: function addValue(value) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addValue)(value));
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
/******/ 	__webpack_require__.h = () => ("bac7bf420d2b24a261d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZTBmNGU0MjY4MmI4NTY5ODZhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNQO0FBQ3dEO0FBRzVGLElBQU1VLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQThCViwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBVyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFyQ0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxLQUFLLEdBQUdoQiw2Q0FBTSxFQUFFOztFQUd0QjtFQUNBO0VBQ0E7O0VBRUEsSUFBTWlCLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO0lBQ3pCUCxLQUFLLENBQUNILFlBQVksRUFBRTtJQUNwQlMsS0FBSyxDQUFDRSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHTixPQUFPO0lBQ3RDQyxVQUFVLENBQUMsS0FBSyxDQUFDO0VBQ3JCLENBQUM7RUFFRCxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztJQUN4QlgsS0FBSyxDQUFDRixXQUFXLEVBQUU7SUFDbkJRLEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBR04sT0FBTztJQUN0Q0MsVUFBVSxDQUFDLElBQUksQ0FBQztFQUNwQixDQUFDO0VBS0Qsb0JBQ0loQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0csMkRBQU8sRUFBQXNCLFFBQUEsS0FBS2QsS0FBSztJQUFFZSxRQUFRLEVBQUVSLGNBQWU7SUFBQ1MsT0FBTyxFQUFFTDtFQUFjLEdBQUUsQ0FDeEU7QUFFWCxDQUFDO0FBRUQsSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsVUFBVSxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsVUFBVTtJQUNwQ0UsWUFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0UsS0FBSztJQUNqQ0MsUUFBUSxFQUFFTCxLQUFLLENBQUNNO0VBQ3BCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcEM7SUFDQTdCLFlBQVksRUFBRSxTQUFBQSxhQUFBO01BQUEsT0FBTTZCLFFBQVEsQ0FBQzdCLDREQUFZLEVBQUUsQ0FBQztJQUFBO0lBQzVDQyxXQUFXLEVBQUUsU0FBQUEsWUFBQTtNQUFBLE9BQU00QixRQUFRLENBQUM1QiwyREFBVyxFQUFFLENBQUM7SUFBQTtJQUMxQ0gsUUFBUSxFQUFFLFNBQUFBLFNBQUMyQixLQUFLO01BQUEsT0FBS0ksUUFBUSxDQUFDL0Isd0RBQVEsQ0FBQzJCLEtBQUssQ0FBQyxDQUFDO0lBQUE7SUFDOUNLLGFBQWEsRUFBRSxTQUFBQSxjQUFDTCxLQUFLO01BQUEsT0FBS0ksUUFBUSxDQUFDaEMsdURBQU8sQ0FBQzRCLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDdEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZTdCLG9EQUFPLENBQUN3QixlQUFlLEVBQUVRLGtCQUFrQixDQUFDLENBQUMxQixnQkFBZ0IsQ0FBQzs7Ozs7Ozs7VUNuRDdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnRlclwiXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YWRkVGltZSwgYWRkVmFsdWUsIGNvdW50ZXJBc3luYywgc3RhcnRDb3VudGVyLCBzdG9wQ291bnRlcn0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCBDb3VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IG15UmVmID0gdXNlUmVmKClcclxuXHJcblxyXG4gICAgLy8gY29uc3QgY2hhbmdlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgIC8vICAgICBteVJlZi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdmlzaWJsZVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0UnVuID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnN0YXJ0Q291bnRlcigpO1xyXG4gICAgICAgIG15UmVmLmN1cnJlbnQuc3R5bGUuZGlzYWJsZWQgPSB2aXNpYmxlO1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcFJ1biA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zdG9wQ291bnRlcigpO1xyXG4gICAgICAgIG15UmVmLmN1cnJlbnQuc3R5bGUuZGlzYWJsZWQgPSB2aXNpYmxlXHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvdW50ZXIgey4uLnByb3BzfSBzZXRTdGFydD17aGFuZGxlU3RhcnRSdW59IHNldFN0b3A9e2hhbmRsZVN0b3BSdW59Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxyXG4gICAgY291bnRlclZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxyXG4gICAgbGlzdFRpbWU6IHN0YXRlLmxpc3RcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgLy8gc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChjb3VudGVyQXN5bmMoKSksXHJcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcclxuICAgIHN0b3BDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdG9wQ291bnRlcigpKSxcclxuICAgIGFkZFZhbHVlOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFZhbHVlKHZhbHVlKSksXHJcbiAgICBhZGRUaW1lVG9MaXN0OiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFRpbWUodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYWM3YmY0MjBkMmIyNGEyNjFkOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ291bnRlciIsImNvbm5lY3QiLCJhZGRUaW1lIiwiYWRkVmFsdWUiLCJjb3VudGVyQXN5bmMiLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwibXlSZWYiLCJoYW5kbGVTdGFydFJ1biIsImN1cnJlbnQiLCJzdHlsZSIsImRpc2FibGVkIiwiaGFuZGxlU3RvcFJ1biIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIiwic2V0U3RhcnQiLCJzZXRTdG9wIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJpc0NvdW50aW5nIiwiY291bnRlciIsImNvdW50ZXJWYWx1ZSIsInZhbHVlIiwibGlzdFRpbWUiLCJsaXN0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJhZGRUaW1lVG9MaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==