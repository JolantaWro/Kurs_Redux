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
  var myButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  console.log(myButton);
  var changeVisable = function changeVisable() {
    myButton.current.style.disable;
  };

  // const handleStartRun = () => {
  //     props.startCounter();
  //     setToggle()
  // }

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
/******/ 	__webpack_require__.h = () => ("227f62f130b4bfd5022d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wODk0OTQ1M2FmMWE3MDc0Y2ViMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNQO0FBQ3VCO0FBRzNELElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQWtDUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csWUFBWSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxRQUFRLEdBQUdiLDZDQUFNLENBQUMsSUFBSSxDQUFDO0VBQzdCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO0VBRXJCLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO0lBQ3hCSCxRQUFRLENBQUNJLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPO0VBQ2xDLENBQUM7O0VBRUQ7RUFDQTtFQUNBO0VBQ0E7O0VBR0Esb0JBQ0lwQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0csMkRBQU8sRUFBQW9CLFFBQUEsS0FBS2YsS0FBSztJQUFFZ0IsVUFBVSxFQUFFWDtFQUFVLEdBQUUsQ0FDN0M7QUFFWCxDQUFDO0FBRUQsSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsVUFBVSxFQUFFRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0QsVUFBVTtJQUNwQ0UsWUFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0U7RUFDaEMsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ0MsWUFBWSxFQUFFLFNBQUFBLGFBQUE7TUFBQSxPQUFNRCxRQUFRLENBQUMzQiw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNMEIsUUFBUSxDQUFDMUIsMkRBQVcsRUFBRSxDQUFDO0lBQUE7RUFDOUMsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUYsb0RBQU8sQ0FBQ3FCLGVBQWUsRUFBRU0sa0JBQWtCLENBQUMsQ0FBQ3hCLGdCQUFnQixDQUFDOzs7Ozs7OztVQ3ZDN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ291bnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCJcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtjb3VudGVyQXN5bmMsIHN0b3BDb3VudGVyfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzdGFydFZpc2libGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgbXlCdXR0b24gPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnNvbGUubG9nKG15QnV0dG9uKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVZpc2FibGUgPSAoKSA9PiB7XHJcbiAgICAgICAgbXlCdXR0b24uY3VycmVudC5zdHlsZS5kaXNhYmxlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlU3RhcnRSdW4gPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgcHJvcHMuc3RhcnRDb3VudGVyKCk7XHJcbiAgICAvLyAgICAgc2V0VG9nZ2xlKClcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q291bnRlciB7Li4ucHJvcHN9IHNldFZpc2libGU9e3NldFRvZ2dsZX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBpc0NvdW50aW5nOiBzdGF0ZS5jb3VudGVyLmlzQ291bnRpbmcsXHJcbiAgICBjb3VudGVyVmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChjb3VudGVyQXN5bmMoKSksXHJcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjI3ZjYyZjEzMGI0YmZkNTAyMmRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNvdW50ZXIiLCJjb25uZWN0IiwiY291bnRlckFzeW5jIiwic3RvcENvdW50ZXIiLCJDb3VudGVyQ29udGFpbmVyIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdGFydFZpc2libGUiLCJzZXRUb2dnbGUiLCJteUJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VWaXNhYmxlIiwiY3VycmVudCIsInN0eWxlIiwiZGlzYWJsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIiwic2V0VmlzaWJsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiaXNDb3VudGluZyIsImNvdW50ZXIiLCJjb3VudGVyVmFsdWUiLCJ2YWx1ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3RhcnRDb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==