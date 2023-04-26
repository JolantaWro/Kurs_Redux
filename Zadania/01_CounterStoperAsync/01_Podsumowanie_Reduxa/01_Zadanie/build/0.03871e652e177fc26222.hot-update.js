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
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
// Counter


var Counter = function Counter(_ref) {
  var isCounting = _ref.isCounting,
    counterValue = _ref.counterValue,
    setStart = _ref.setStart,
    setStop = _ref.setStop,
    listTime = _ref.listTime,
    addTimeToList = _ref.addTimeToList,
    addValue = _ref.addValue,
    startCounter = _ref.startCounter,
    stopCounter = _ref.stopCounter;
  console.log(isCounting, counterValue);
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  console.log(myRef);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var intervalRunning;
    if (isCounting) {
      intervalRunning = setInterval(function () {
        addValue();
      }, 1000);
    }
    return function () {
      return clearInterval(intervalRunning);
    };
  }, [isCounting]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return startCounter;
    },
    ref: myRef
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return stopCounter;
    },
    ref: myRef
  }, "stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, counterValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_1__["default"], {
    listTime: listTime,
    addTimeToList: addTimeToList
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd02533d16c9ef678ccd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMzg3MWU2NTJlMTc3ZmMyNjIyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNyQjtBQUUxQixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFzSDtFQUFBLElBQWhIQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtJQUFFQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtJQUFFQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztJQUFFQyxRQUFRLEdBQUFMLElBQUEsQ0FBUkssUUFBUTtJQUFFQyxhQUFhLEdBQUFOLElBQUEsQ0FBYk0sYUFBYTtJQUFFQyxRQUFRLEdBQUFQLElBQUEsQ0FBUk8sUUFBUTtJQUFFQyxZQUFZLEdBQUFSLElBQUEsQ0FBWlEsWUFBWTtJQUFFQyxXQUFXLEdBQUFULElBQUEsQ0FBWFMsV0FBVztFQUN4SEMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFVBQVUsRUFBRUMsWUFBWSxDQUFDO0VBQ3JDLElBQU1VLEtBQUssR0FBR2YsNkNBQU0sRUFBRTtFQUN0QmEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQztFQUVsQmhCLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUlpQixlQUFlO0lBQ25CLElBQUdaLFVBQVUsRUFBRTtNQUNYWSxlQUFlLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQ2hDUCxRQUFRLEVBQUU7TUFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1o7SUFDQSxPQUFPO01BQUEsT0FBTVEsYUFBYSxDQUFDRixlQUFlLENBQUM7SUFBQTtFQUUvQyxDQUFDLEVBQUUsQ0FBQ1osVUFBVSxDQUFDLENBQUM7RUFHaEIsb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRc0IsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFLVCxZQUFZO0lBQUEsQ0FBQztJQUFDVSxHQUFHLEVBQUVOO0VBQU0sR0FBQyxPQUFLLENBQVMsZUFDOURqQiwwREFBQTtJQUFRc0IsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFLUixXQUFXO0lBQUEsQ0FBQztJQUFDUyxHQUFHLEVBQUVOO0VBQU0sR0FBQyxNQUFJLENBQVMsZUFDNURqQiwwREFBQSxhQUFLTyxZQUFZLENBQU0sZUFDdkJQLDBEQUFBLENBQUNHLDZDQUFJO0lBQUNPLFFBQVEsRUFBRUEsUUFBUztJQUFFQyxhQUFhLEVBQUdBO0VBQWMsRUFBRyxDQUMxRDtBQUVkLENBQUM7QUFFRCxpRUFBZVAsT0FBTzs7Ozs7Ozs7VUMvQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvdW50ZXJcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5cclxuY29uc3QgQ291bnRlciA9ICh7IGlzQ291bnRpbmcsIGNvdW50ZXJWYWx1ZSwgc2V0U3RhcnQsIHNldFN0b3AsIGxpc3RUaW1lLCBhZGRUaW1lVG9MaXN0LCBhZGRWYWx1ZSwgc3RhcnRDb3VudGVyLCBzdG9wQ291bnRlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUpXHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zb2xlLmxvZyhteVJlZilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbnRlcnZhbFJ1bm5pbmc7XHJcbiAgICAgICAgaWYoaXNDb3VudGluZykge1xyXG4gICAgICAgICAgICBpbnRlcnZhbFJ1bm5pbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRWYWx1ZSgpXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsUnVubmluZylcclxuXHJcbiAgICB9LCBbaXNDb3VudGluZ10pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHN0YXJ0Q291bnRlcn0gcmVmPXtteVJlZn0+c3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHN0b3BDb3VudGVyfSByZWY9e215UmVmfT5zdG9wPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMT57Y291bnRlclZhbHVlfTwvaDE+XHJcbiAgICAgICAgICAgIDxMaXN0IGxpc3RUaW1lPXtsaXN0VGltZX0gIGFkZFRpbWVUb0xpc3Q9eyBhZGRUaW1lVG9MaXN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmQwMjUzM2QxNmM5ZWY2NzhjY2RcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaXN0IiwiQ291bnRlciIsIl9yZWYiLCJpc0NvdW50aW5nIiwiY291bnRlclZhbHVlIiwic2V0U3RhcnQiLCJzZXRTdG9wIiwibGlzdFRpbWUiLCJhZGRUaW1lVG9MaXN0IiwiYWRkVmFsdWUiLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJteVJlZiIsImludGVydmFsUnVubmluZyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==