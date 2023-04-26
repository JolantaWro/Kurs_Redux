"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
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
      this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
      this.store.subscribe(function () {
        return console.log(_this.store.getState().counter);
      });
      // store.subscribe(() => console.log(store.getState().counter))
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      var _this2 = this;
      this.counterIncrement.addEventListener("click", function () {
        _this2.store.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.increment)(_this2.counterValue.value));
        // store.dispatch(increment(parseInt(this.counterValue.value)))
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
/******/ 	__webpack_require__.h = () => ("18b44160efe165d650a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDRlMTcyMzc1NjkwOWYxNzQzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ2M7QUFDZDtBQUNTO0FBQUEsSUFFckNJLE9BQU87RUFDWCxTQUFBQSxRQUFZQyxXQUFXLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixPQUFBO0lBQ3ZCLElBQUksQ0FBQ0csUUFBUSxDQUFDRixXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDRyxZQUFZLEVBQUU7SUFDbkIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEI7RUFBQ0MsWUFBQSxDQUFBUCxPQUFBO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFOLFNBQVNGLFdBQVcsRUFBRTtNQUNwQixJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztNQUM5QixJQUFJLENBQUNBLFdBQVcsQ0FBQ1MsU0FBUywyYUFRekI7SUFDSDtFQUFDO0lBQUFGLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLFlBQUEsRUFBYztNQUNaLElBQUksQ0FBQ00sWUFBWSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDVyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7TUFDcEUsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNaLFdBQVcsQ0FBQ1csYUFBYSxDQUFDLG9CQUFvQixDQUFDO01BQzVFLElBQUksQ0FBQ0UsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDYixXQUFXLENBQUNXLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztJQUM5RTtFQUFDO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFMLGFBQUEsRUFBZTtNQUFBLElBQUFXLEtBQUE7TUFDYixJQUFJLENBQUNqQixLQUFLLEdBQUdGLGtEQUFXLENBQUNDLHVEQUFlLENBQUM7TUFDekMsSUFBSSxDQUFDQyxLQUFLLENBQUNrQixTQUFTLENBQUM7UUFBQSxPQUFNQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSSxDQUFDakIsS0FBSyxDQUFDcUIsUUFBUSxFQUFFLENBQUNDLE9BQU8sQ0FBQztNQUFBLEVBQUM7TUFDdEU7SUFDRjtFQUFDO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILGNBQUEsRUFBZ0I7TUFBQSxJQUFBZSxNQUFBO01BQ2QsSUFBSSxDQUFDUCxnQkFBZ0IsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDcERELE1BQUksQ0FBQ3ZCLEtBQUssQ0FBQ3lCLFFBQVEsQ0FBQ3hCLHlEQUFTLENBQUNzQixNQUFJLENBQUNWLFlBQVksQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDdkQ7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQVQsT0FBQTtBQUFBO0FBR0gsaUVBQWVBLE9BQU87Ozs7Ozs7O1VDOUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9hcHBzL0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNvbWJpbmVkUmVkdWNlciBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnNcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiXHJcbmltcG9ydCB7aW5jcmVtZW50fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgQ291bnRlciB7XHJcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5yZWR1eENvbm5lY3QoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaWN6bmlrPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRleHRcIj5XYXJ0b8WbxIcgbGljem5pa2E6IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiIGlkPVwiY291bnRlci12YWx1ZVwiPjA8L3NwYW4+PC9oND5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBpZD1cImNvdW50ZXItZGVjcmVtZW50XCI+LTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgaWQ9XCJjb3VudGVyLWluY3JlbWVudFwiPis8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXJWYWx1ZSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudGVyLXZhbHVlXCIpO1xyXG4gICAgdGhpcy5jb3VudGVyRGVjcmVtZW50ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZXItZGVjcmVtZW50XCIpO1xyXG4gICAgdGhpcy5jb3VudGVySW5jcmVtZW50ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZXItaW5jcmVtZW50XCIpO1xyXG4gIH1cclxuXHJcbiAgcmVkdXhDb25uZWN0KCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVkUmVkdWNlcilcclxuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5jb3VudGVyKSlcclxuICAgIC8vIHN0b3JlLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpLmNvdW50ZXIpKVxyXG4gIH1cclxuXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuY291bnRlckluY3JlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGluY3JlbWVudCh0aGlzLmNvdW50ZXJWYWx1ZS52YWx1ZSkpXHJcbiAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKGluY3JlbWVudChwYXJzZUludCh0aGlzLmNvdW50ZXJWYWx1ZS52YWx1ZSkpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4YjQ0MTYwZWZlMTY1ZDY1MGE4XCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiY29tYmluZWRSZWR1Y2VyIiwic3RvcmUiLCJpbmNyZW1lbnQiLCJDb3VudGVyIiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiY291bnRlclZhbHVlIiwicXVlcnlTZWxlY3RvciIsImNvdW50ZXJEZWNyZW1lbnQiLCJjb3VudGVySW5jcmVtZW50IiwiX3RoaXMiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJjb3VudGVyIiwiX3RoaXMyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==