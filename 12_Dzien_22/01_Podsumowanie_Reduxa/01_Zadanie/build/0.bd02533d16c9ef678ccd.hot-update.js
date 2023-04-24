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
    onClick: startCounter,
    ref: myRef
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: stopCounter,
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
/******/ 	__webpack_require__.h = () => ("d5c05f6fd7184617e8f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZDAyNTMzZDE2YzllZjY3OGNjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNyQjtBQUUxQixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFzSDtFQUFBLElBQWhIQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtJQUFFQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtJQUFFQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtJQUFFQyxPQUFPLEdBQUFKLElBQUEsQ0FBUEksT0FBTztJQUFFQyxRQUFRLEdBQUFMLElBQUEsQ0FBUkssUUFBUTtJQUFFQyxhQUFhLEdBQUFOLElBQUEsQ0FBYk0sYUFBYTtJQUFFQyxRQUFRLEdBQUFQLElBQUEsQ0FBUk8sUUFBUTtJQUFFQyxZQUFZLEdBQUFSLElBQUEsQ0FBWlEsWUFBWTtJQUFFQyxXQUFXLEdBQUFULElBQUEsQ0FBWFMsV0FBVztFQUN4SEMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFVBQVUsRUFBRUMsWUFBWSxDQUFDO0VBQ3JDLElBQU1VLEtBQUssR0FBR2YsNkNBQU0sRUFBRTtFQUN0QmEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQztFQUVsQmhCLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUlpQixlQUFlO0lBQ25CLElBQUdaLFVBQVUsRUFBRTtNQUNYWSxlQUFlLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQ2hDUCxRQUFRLEVBQUU7TUFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1o7SUFDQSxPQUFPO01BQUEsT0FBTVEsYUFBYSxDQUFDRixlQUFlLENBQUM7SUFBQTtFQUUvQyxDQUFDLEVBQUUsQ0FBQ1osVUFBVSxDQUFDLENBQUM7RUFHaEIsb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFRc0IsT0FBTyxFQUFFVCxZQUFhO0lBQUNVLEdBQUcsRUFBRU47RUFBTSxHQUFDLE9BQUssQ0FBUyxlQUN6RGpCLDBEQUFBO0lBQVFzQixPQUFPLEVBQUVSLFdBQVk7SUFBQ1MsR0FBRyxFQUFFTjtFQUFNLEdBQUMsTUFBSSxDQUFTLGVBQ3ZEakIsMERBQUEsYUFBS08sWUFBWSxDQUFNLGVBQ3ZCUCwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDTyxRQUFRLEVBQUVBLFFBQVM7SUFBRUMsYUFBYSxFQUFHQTtFQUFjLEVBQUcsQ0FDMUQ7QUFFZCxDQUFDO0FBRUQsaUVBQWVQLE9BQU87Ozs7Ozs7O1VDL0J0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3VudGVyXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmNvbnN0IENvdW50ZXIgPSAoeyBpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUsIHNldFN0YXJ0LCBzZXRTdG9wLCBsaXN0VGltZSwgYWRkVGltZVRvTGlzdCwgYWRkVmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXIgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNDb3VudGluZywgY291bnRlclZhbHVlKVxyXG4gICAgY29uc3QgbXlSZWYgPSB1c2VSZWYoKVxyXG4gICAgY29uc29sZS5sb2cobXlSZWYpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaW50ZXJ2YWxSdW5uaW5nO1xyXG4gICAgICAgIGlmKGlzQ291bnRpbmcpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWxSdW5uaW5nID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWRkVmFsdWUoKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJ1bm5pbmcpXHJcblxyXG4gICAgfSwgW2lzQ291bnRpbmddKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRDb3VudGVyfSByZWY9e215UmVmfT5zdGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BDb3VudGVyfSByZWY9e215UmVmfT5zdG9wPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMT57Y291bnRlclZhbHVlfTwvaDE+XHJcbiAgICAgICAgICAgIDxMaXN0IGxpc3RUaW1lPXtsaXN0VGltZX0gIGFkZFRpbWVUb0xpc3Q9eyBhZGRUaW1lVG9MaXN0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDVjMDVmNmZkNzE4NDYxN2U4ZjRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMaXN0IiwiQ291bnRlciIsIl9yZWYiLCJpc0NvdW50aW5nIiwiY291bnRlclZhbHVlIiwic2V0U3RhcnQiLCJzZXRTdG9wIiwibGlzdFRpbWUiLCJhZGRUaW1lVG9MaXN0IiwiYWRkVmFsdWUiLCJzdGFydENvdW50ZXIiLCJzdG9wQ291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJteVJlZiIsImludGVydmFsUnVubmluZyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==