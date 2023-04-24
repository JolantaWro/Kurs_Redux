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
    setVisible: setToggle
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
/******/ 	__webpack_require__.h = () => ("85338bf47eb0bf747c52")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YWE4MGZkZjYwOWZhOTI3MDg2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNQO0FBQ3VCO0FBRzNELElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQWtDUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csWUFBWSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxRQUFRLEdBQUdiLDZDQUFNLEVBQUU7RUFDekJjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7RUFFckIsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJO0VBQzFDLENBQUM7RUFFRCxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztJQUN6QmIsS0FBSyxDQUFDYyxZQUFZLEVBQUU7SUFDcEJMLGFBQWEsRUFBRTtFQUNuQixDQUFDO0VBQ0RGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7RUFHckIsb0JBQ0lkLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRywyREFBTyxFQUFBc0IsUUFBQSxLQUFLakIsS0FBSztJQUFFa0IsVUFBVSxFQUFFYjtFQUFVLEdBQUUsQ0FDN0M7QUFFWCxDQUFDO0FBRUQsSUFBTWMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsVUFBVSxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsVUFBVTtJQUNwQ0UsWUFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0U7RUFDaEMsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1osWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNWSxRQUFRLENBQUM3Qiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNNEIsUUFBUSxDQUFDNUIsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ3VCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQzFCLGdCQUFnQixDQUFDOzs7Ozs7OztVQ3hDN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCJcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjb3VudGVyQXN5bmMsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzdGFydFZpc2libGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbXlCdXR0b24gPSB1c2VSZWYoKVxyXG4gICAgY29uc29sZS5sb2cobXlCdXR0b24pXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgICAgICBteUJ1dHRvbi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0UnVuID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnN0YXJ0Q291bnRlcigpO1xyXG4gICAgICAgIGNoYW5nZVZpc2libGUoKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobXlCdXR0b24pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvdW50ZXIgey4uLnByb3BzfSBzZXRWaXNpYmxlPXtzZXRUb2dnbGV9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxyXG4gICAgY291bnRlclZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goY291bnRlckFzeW5jKCkpLFxyXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlckNvbnRhaW5lcik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg1MzM4YmY0N2ViMGJmNzQ3YzUyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDb3VudGVyIiwiY29ubmVjdCIsImNvdW50ZXJBc3luYyIsInN0b3BDb3VudGVyIiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic3RhcnRWaXNpYmxlIiwic2V0VG9nZ2xlIiwibXlCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVmlzaWJsZSIsImN1cnJlbnQiLCJzdHlsZSIsImRpc2FibGVkIiwiaGFuZGxlU3RhcnRSdW4iLCJzdGFydENvdW50ZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsInNldFZpc2libGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlzQ291bnRpbmciLCJjb3VudGVyIiwiY291bnRlclZhbHVlIiwidmFsdWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=