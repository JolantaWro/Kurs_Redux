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
    startCounter = _ref.startCounter,
    stopCounter = _ref.stopCounter;
  console.log(isCounting, counterValue);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: startCounter
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: stopCounter,
    disabled: true
  }, "stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counterValue));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _containers_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91);
/* harmony import */ var _containers_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);






var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Counter__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    exact: true,
    path: "/list/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_List__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

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
  var myButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  console.log(myButton);

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
/******/ 	__webpack_require__.h = () => ("08949453af1a7074ceb3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TW9DLFFBQVEsQ0FBQ3BDLDJEQUFXLEVBQUUsQ0FBQztJQUFBO0VBQzlDLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWVtQixvREFBTyxDQUFDWSxlQUFlLEVBQUVJLGtCQUFrQixDQUFDLENBQUNkLGdCQUFnQixDQUFDOzs7Ozs7OztVQ25DN0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvdW50ZXJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENvdW50ZXIgPSAoeyBpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNDb3VudGluZywgY291bnRlclZhbHVlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydENvdW50ZXJ9PnN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RvcENvdW50ZXJ9IGRpc2FibGVkPnN0b3A8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGgxPntjb3VudGVyVmFsdWV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb250YWluZXJzL0NvdW50ZXJcIjtcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29udGFpbmVycy9MaXN0XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8Q291bnRlciAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9saXN0LzppZFwiIGVsZW1lbnQ9ezxMaXN0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcblxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2NvdW50ZXJBc3luYywgc3RvcENvdW50ZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgQ291bnRlckNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3N0YXJ0VmlzaWJsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBteUJ1dHRvbiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc29sZS5sb2cobXlCdXR0b24pXHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlU3RhcnRSdW4gPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgcHJvcHMuc3RhcnRDb3VudGVyKCk7XHJcbiAgICAvLyAgICAgc2V0VG9nZ2xlKClcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q291bnRlciB7Li4ucHJvcHN9IHNldFZpc2libGU9e3NldFRvZ2dsZX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBpc0NvdW50aW5nOiBzdGF0ZS5jb3VudGVyLmlzQ291bnRpbmcsXHJcbiAgICBjb3VudGVyVmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWVcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChjb3VudGVyQXN5bmMoKSksXHJcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDg5NDk0NTNhZjFhNzA3NGNlYjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3VudGVyIiwiX3JlZiIsImlzQ291bnRpbmciLCJjb3VudGVyVmFsdWUiLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsImRpc2FibGVkIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaXN0Iiwic3RvcmUiLCJNYWluIiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwidXNlUmVmIiwidXNlU3RhdGUiLCJjb25uZWN0IiwiY291bnRlckFzeW5jIiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic3RhcnRWaXNpYmxlIiwic2V0VG9nZ2xlIiwibXlCdXR0b24iLCJfZXh0ZW5kcyIsInNldFZpc2libGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvdW50ZXIiLCJ2YWx1ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==