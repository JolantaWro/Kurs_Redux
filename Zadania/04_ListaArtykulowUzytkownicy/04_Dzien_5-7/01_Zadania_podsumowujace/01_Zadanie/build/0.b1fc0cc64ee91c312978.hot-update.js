"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Counter = /*#__PURE__*/function () {
  function Counter(rootElement) {
    _classCallCheck(this, Counter);
    this.createUI(rootElement);
    this.reduxConnect();
    this.collectRefs();
    this.applyHandlers();
  }
  _createClass(Counter, [{
    key: "createUI",
    value: function createUI(rootElement) {
      this.rootElement = rootElement;
      this.rootElement.innerHTML = "\n      <div class=\"card-header\">Licznik</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-text\">Warto\u015B\u0107 licznika: <span class=\"badge badge-primary\" id=\"counter-value\">0</span></h4>\n\n        <button type=\"button\" class=\"btn btn-success\" id=\"counter-decrement\">-</button>\n        <button type=\"button\" class=\"btn btn-info\" id=\"counter-increment\">+</button>\n      </div>\n    ";
    }
  }, {
    key: "collectRefs",
    value: function collectRefs() {
      this.counterValue = this.rootElement.querySelector("#counter-value");
      this.counterDecrement = this.rootElement.querySelector("#counter-decrement");
      this.counterIncrement = this.rootElement.querySelector("#counter-increment");
    }
  }, {
    key: "reduxConnect",
    value: function reduxConnect() {
      var _this = this;
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return _this.counterValue.innerText = "".concat(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().counter, " PLN");
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      this.counterIncrement.addEventListener("click", function () {
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
          type: _redux_actions__WEBPACK_IMPORTED_MODULE_1__.increment
        });
      });
    }
  }]);
  return Counter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4264d7f5e06a42e22ee8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMWZjMGNjNjRlZTkxYzMxMjk3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUVBO0FBQ1M7QUFBQSxJQUVyQ0csT0FBTztFQUNYLFNBQUFBLFFBQVlDLFdBQVcsRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE9BQUE7SUFDdkIsSUFBSSxDQUFDRyxRQUFRLENBQUNGLFdBQVcsQ0FBQztJQUMxQixJQUFJLENBQUNHLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGFBQWEsRUFBRTtFQUN0QjtFQUFDQyxZQUFBLENBQUFQLE9BQUE7SUFBQVEsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQU4sU0FBU0YsV0FBVyxFQUFFO01BQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDUyxTQUFTLDJhQVF6QjtJQUNIO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosWUFBQSxFQUFjO01BQ1osSUFBSSxDQUFDTSxZQUFZLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNXLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNwRSxJQUFJLENBQUNDLGdCQUFnQixHQUFHLElBQUksQ0FBQ1osV0FBVyxDQUFDVyxhQUFhLENBQUMsb0JBQW9CLENBQUM7TUFDNUUsSUFBSSxDQUFDRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNiLFdBQVcsQ0FBQ1csYUFBYSxDQUFDLG9CQUFvQixDQUFDO0lBQzlFO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUwsYUFBQSxFQUFlO01BQUEsSUFBQVcsS0FBQTtNQUNiakIsOERBQWUsQ0FBQztRQUFBLE9BQU1pQixLQUFJLENBQUNKLFlBQVksQ0FBQ00sU0FBUyxNQUFBQyxNQUFBLENBQU1wQiw2REFBYyxFQUFFLENBQUNzQixPQUFPLFNBQU07TUFBQSxFQUFDO0lBQ3hGO0VBQUM7SUFBQVosR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsY0FBQSxFQUFnQjtNQUNkLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3BEdkIsNkRBQWMsQ0FBQztVQUNieUIsSUFBSSxFQUFFeEIscURBQVNBO1FBQ2pCLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQSxPQUFBQyxPQUFBO0FBQUE7QUFHSCxpRUFBZUEsT0FBTzs7Ozs7Ozs7VUM3Q3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiXHJcbmltcG9ydCB7aW5jcmVtZW50fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgQ291bnRlciB7XHJcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaWN6bmlrPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRleHRcIj5XYXJ0b8WbxIcgbGljem5pa2E6IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiIGlkPVwiY291bnRlci12YWx1ZVwiPjA8L3NwYW4+PC9oND5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBpZD1cImNvdW50ZXItZGVjcmVtZW50XCI+LTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgaWQ9XCJjb3VudGVyLWluY3JlbWVudFwiPis8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXJWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLXZhbHVlXCIpO1xyXG4gICAgdGhpcy5jb3VudGVyRGVjcmVtZW50ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZXItZGVjcmVtZW50XCIpO1xyXG4gICAgdGhpcy5jb3VudGVySW5jcmVtZW50ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZXItaW5jcmVtZW50XCIpO1xyXG4gIH1cclxuXHJcbiAgcmVkdXhDb25uZWN0KCkge1xyXG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuY291bnRlclZhbHVlLmlubmVyVGV4dCA9IGAke3N0b3JlLmdldFN0YXRlKCkuY291bnRlcn0gUExOYCk7XHJcbiAgfVxyXG5cclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5jb3VudGVySW5jcmVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBpbmNyZW1lbnRcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MjY0ZDdmNWUwNmE0MmUyMmVlOFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsInN0b3JlIiwiaW5jcmVtZW50IiwiQ291bnRlciIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImNvdW50ZXJWYWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb3VudGVyRGVjcmVtZW50IiwiY291bnRlckluY3JlbWVudCIsIl90aGlzIiwic3Vic2NyaWJlIiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiZ2V0U3RhdGUiLCJjb3VudGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=