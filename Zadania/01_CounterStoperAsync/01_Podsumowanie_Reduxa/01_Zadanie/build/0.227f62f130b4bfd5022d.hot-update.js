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
/******/ 	__webpack_require__.h = () => ("9ffb2bb8f8e988b44a62")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMjdmNjJmMTMwYjRiZmQ1MDIyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNQO0FBQ3VCO0FBRzNELElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLEtBQUssRUFBSztFQUNoQyxJQUFBQyxTQUFBLEdBQWtDUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBUSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csWUFBWSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxRQUFRLEdBQUdiLDZDQUFNLEVBQUU7RUFDekJjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7RUFFckIsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU87RUFDbEMsQ0FBQzs7RUFFRDtFQUNBO0VBQ0E7RUFDQTs7RUFHQSxvQkFDSXBCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRywyREFBTyxFQUFBb0IsUUFBQSxLQUFLZixLQUFLO0lBQUVnQixVQUFVLEVBQUVYO0VBQVUsR0FBRSxDQUM3QztBQUVYLENBQUM7QUFFRCxJQUFNWSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxVQUFVLEVBQUVELEtBQUssQ0FBQ0UsT0FBTyxDQUFDRCxVQUFVO0lBQ3BDRSxZQUFZLEVBQUVILEtBQUssQ0FBQ0UsT0FBTyxDQUFDRTtFQUNoQyxDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDQyxZQUFZLEVBQUUsU0FBQUEsYUFBQTtNQUFBLE9BQU1ELFFBQVEsQ0FBQzNCLDREQUFZLEVBQUUsQ0FBQztJQUFBO0lBQzVDQyxXQUFXLEVBQUUsU0FBQUEsWUFBQTtNQUFBLE9BQU0wQixRQUFRLENBQUMxQiwyREFBVyxFQUFFLENBQUM7SUFBQTtFQUM5QyxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlRixvREFBTyxDQUFDcUIsZUFBZSxFQUFFTSxrQkFBa0IsQ0FBQyxDQUFDeEIsZ0JBQWdCLENBQUM7Ozs7Ozs7O1VDdkM3RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NvdW50ZXJBc3luYywgc3RvcENvdW50ZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3N0YXJ0VmlzaWJsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBteUJ1dHRvbiA9IHVzZVJlZigpXHJcbiAgICBjb25zb2xlLmxvZyhteUJ1dHRvbilcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VWaXNhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIG15QnV0dG9uLmN1cnJlbnQuc3R5bGUuZGlzYWJsZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZVN0YXJ0UnVuID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHByb3BzLnN0YXJ0Q291bnRlcigpO1xyXG4gICAgLy8gICAgIHNldFRvZ2dsZSgpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvdW50ZXIgey4uLnByb3BzfSBzZXRWaXNpYmxlPXtzZXRUb2dnbGV9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxyXG4gICAgY291bnRlclZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIHN0YXJ0Q291bnRlcjogKCkgPT4gZGlzcGF0Y2goY291bnRlckFzeW5jKCkpLFxyXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlckNvbnRhaW5lcik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlmZmIyYmI4ZjhlOTg4YjQ0YTYyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJDb3VudGVyIiwiY29ubmVjdCIsImNvdW50ZXJBc3luYyIsInN0b3BDb3VudGVyIiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic3RhcnRWaXNpYmxlIiwic2V0VG9nZ2xlIiwibXlCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVmlzYWJsZSIsImN1cnJlbnQiLCJzdHlsZSIsImRpc2FibGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsInNldFZpc2libGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImlzQ291bnRpbmciLCJjb3VudGVyIiwiY291bnRlclZhbHVlIiwidmFsdWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN0YXJ0Q291bnRlciJdLCJzb3VyY2VSb290IjoiIn0=