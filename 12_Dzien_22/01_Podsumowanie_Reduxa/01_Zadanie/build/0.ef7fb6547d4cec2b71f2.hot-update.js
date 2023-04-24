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
    visible = _useState2[0],
    setVisible = _useState2[1];
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var changeVisible = function changeVisible() {
    myRef.current.style.disabled = true;
  };
  var handleStartRun = function handleStartRun() {
    props.startCounter();
    myRef.current.style.disabled = true;
  };
  var handleStopRun = function handleStopRun() {
    props.stopCounter();
    myRef.current.style.disabled = false;
  };
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
/******/ 	__webpack_require__.h = () => ("5d4b297b61e44510d2cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZjdmYjY1NDdkNGNlYzJiNzFmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNQO0FBQ3VCO0FBRzNELElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQThCUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0Q0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUMxQixJQUFNSSxLQUFLLEdBQUdiLDZDQUFNLEVBQUU7RUFHdEIsSUFBTWMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJELEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJO0VBQ3ZDLENBQUM7RUFFRCxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUEsRUFBUztJQUN6QlgsS0FBSyxDQUFDWSxZQUFZLEVBQUU7SUFDcEJOLEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxJQUFJO0VBQ3ZDLENBQUM7RUFFRCxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUEsRUFBUztJQUN4QmIsS0FBSyxDQUFDRixXQUFXLEVBQUU7SUFDbkJRLEtBQUssQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLO0VBQ3hDLENBQUM7RUFJRCxvQkFDSWxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRywyREFBTyxFQUFBcUIsUUFBQSxLQUFLaEIsS0FBSztJQUFFaUIsUUFBUSxFQUFFTjtFQUFlLEdBQUUsQ0FDaEQ7QUFFWCxDQUFDO0FBRUQsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsVUFBVSxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsVUFBVTtJQUNwQ0UsWUFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0U7RUFDaEMsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ2IsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNYSxRQUFRLENBQUM1Qiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNMkIsUUFBUSxDQUFDM0IsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ3NCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ3pCLGdCQUFnQixDQUFDOzs7Ozs7OztVQzVDN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCJcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjb3VudGVyQXN5bmMsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG15UmVmID0gdXNlUmVmKClcclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVmlzaWJsZSA9ICgpID0+IHtcclxuICAgICAgICBteVJlZi5jdXJyZW50LnN0eWxlLmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0UnVuID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnN0YXJ0Q291bnRlcigpO1xyXG4gICAgICAgIG15UmVmLmN1cnJlbnQuc3R5bGUuZGlzYWJsZWQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RvcFJ1biA9ICgpID0+IHtcclxuICAgICAgICBwcm9wcy5zdG9wQ291bnRlcigpO1xyXG4gICAgICAgIG15UmVmLmN1cnJlbnQuc3R5bGUuZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q291bnRlciB7Li4ucHJvcHN9IHNldFN0YXJ0PXtoYW5kbGVTdGFydFJ1bn0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBpc0NvdW50aW5nOiBzdGF0ZS5jb3VudGVyLmlzQ291bnRpbmcsXHJcbiAgICBjb3VudGVyVmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChjb3VudGVyQXN5bmMoKSksXHJcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWQ0YjI5N2I2MWU0NDUxMGQyY2RcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNvdW50ZXIiLCJjb25uZWN0IiwiY291bnRlckFzeW5jIiwic3RvcENvdW50ZXIiLCJDb3VudGVyQ29udGFpbmVyIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm15UmVmIiwiY2hhbmdlVmlzaWJsZSIsImN1cnJlbnQiLCJzdHlsZSIsImRpc2FibGVkIiwiaGFuZGxlU3RhcnRSdW4iLCJzdGFydENvdW50ZXIiLCJoYW5kbGVTdG9wUnVuIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2V4dGVuZHMiLCJzZXRTdGFydCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiaXNDb3VudGluZyIsImNvdW50ZXIiLCJjb3VudGVyVmFsdWUiLCJ2YWx1ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==