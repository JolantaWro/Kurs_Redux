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
    listTime = _ref.listTime,
    addTimeToList = _ref.addTimeToList,
    startCounterAsync = _ref.startCounterAsync,
    stopCounterAsync = _ref.stopCounterAsync;
  console.log(isCounting, counterValue);
  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  console.log(myRef);

  // useEffect(() => {
  //     let intervalRunning;
  //     if(isCounting) {
  //         intervalRunning = setInterval(() => {
  //             addValue(1)
  //         }, 1000)
  //     }
  //     return () => clearInterval(intervalRunning)
  //
  // }, [isCounting])

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: startCounterAsync,
    ref: myRef
  }, "start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: stopCounterAsync,
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
/******/ 	__webpack_require__.h = () => ("0594f43487b783881014")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MGIzMGM5MzhiMDAwNWRhZjYxMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNyQjtBQUUxQixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFtRztFQUFBLElBQTdGQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtJQUFFQyxZQUFZLEdBQUFGLElBQUEsQ0FBWkUsWUFBWTtJQUFFQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtJQUFFQyxhQUFhLEdBQUFKLElBQUEsQ0FBYkksYUFBYTtJQUFFQyxpQkFBaUIsR0FBQUwsSUFBQSxDQUFqQkssaUJBQWlCO0lBQUVDLGdCQUFnQixHQUFBTixJQUFBLENBQWhCTSxnQkFBZ0I7RUFDckdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxVQUFVLEVBQUVDLFlBQVksQ0FBQztFQUNyQyxJQUFNTyxLQUFLLEdBQUdaLDZDQUFNLEVBQUU7RUFDdEJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUM7O0VBRWxCO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUdBLG9CQUNJZCwwREFBQSwyQkFHSUEsMERBQUE7SUFBUWdCLE9BQU8sRUFBRU4saUJBQWtCO0lBQUNPLEdBQUcsRUFBRUg7RUFBTSxHQUFDLE9BQUssQ0FBUyxlQUM5RGQsMERBQUE7SUFBUWdCLE9BQU8sRUFBRUwsZ0JBQWlCO0lBQUNNLEdBQUcsRUFBRUg7RUFBTSxHQUFDLE1BQUksQ0FBUyxlQUM1RGQsMERBQUEsYUFBS08sWUFBWSxDQUFNLGVBQ3ZCUCwwREFBQSxDQUFDRyw2Q0FBSTtJQUFDSyxRQUFRLEVBQUVBLFFBQVM7SUFBRUMsYUFBYSxFQUFHQTtFQUFjLEVBQUcsQ0FDMUQ7QUFFZCxDQUFDO0FBRUQsaUVBQWVMLE9BQU87Ozs7Ozs7O1VDakN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3VudGVyXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmNvbnN0IENvdW50ZXIgPSAoeyBpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUsIGxpc3RUaW1lLCBhZGRUaW1lVG9MaXN0LCBzdGFydENvdW50ZXJBc3luYywgc3RvcENvdW50ZXJBc3luYyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpc0NvdW50aW5nLCBjb3VudGVyVmFsdWUpXHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZigpXHJcbiAgICBjb25zb2xlLmxvZyhteVJlZilcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCBpbnRlcnZhbFJ1bm5pbmc7XHJcbiAgICAvLyAgICAgaWYoaXNDb3VudGluZykge1xyXG4gICAgLy8gICAgICAgICBpbnRlcnZhbFJ1bm5pbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBhZGRWYWx1ZSgxKVxyXG4gICAgLy8gICAgICAgICB9LCAxMDAwKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJ1bm5pbmcpXHJcbiAgICAvL1xyXG4gICAgLy8gfSwgW2lzQ291bnRpbmddKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKjxidXR0b24gb25DbGljaz17c3RhcnRDb3VudGVyfSByZWY9e215UmVmfT5zdGFydDwvYnV0dG9uPiovfVxyXG4gICAgICAgICAgICB7Lyo8YnV0dG9uIG9uQ2xpY2s9e3N0b3BDb3VudGVyfSByZWY9e215UmVmfT5zdG9wPC9idXR0b24+Ki99XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRDb3VudGVyQXN5bmN9IHJlZj17bXlSZWZ9PnN0YXJ0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RvcENvdW50ZXJBc3luY30gcmVmPXtteVJlZn0+c3RvcDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDE+e2NvdW50ZXJWYWx1ZX08L2gxPlxyXG4gICAgICAgICAgICA8TGlzdCBsaXN0VGltZT17bGlzdFRpbWV9ICBhZGRUaW1lVG9MaXN0PXsgYWRkVGltZVRvTGlzdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA1OTRmNDM0ODdiNzgzODgxMDE0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiTGlzdCIsIkNvdW50ZXIiLCJfcmVmIiwiaXNDb3VudGluZyIsImNvdW50ZXJWYWx1ZSIsImxpc3RUaW1lIiwiYWRkVGltZVRvTGlzdCIsInN0YXJ0Q291bnRlckFzeW5jIiwic3RvcENvdW50ZXJBc3luYyIsImNvbnNvbGUiLCJsb2ciLCJteVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==