"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
// Tu powinny się znaleźć odpowiednie importy





var bankApp = {
  start: function start(rootElement) {
    this.createUI(rootElement);
    this.createStore();
    this.collectRefs();
    this.applyHandlers();
  },
  // Tej metody nie powinniśmy ruszać :)
  // Tworzymy tu szablon UI
  createUI: function createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = "\n      <div>\n        <h1>Saldo:<span>0</span></h1>\n\n        <div>\n          $: <input type=\"number\" id=\"money\" />\n          <button id=\"withdraw\">Wyp\u0142a\u0107</button>\n          <button id=\"deposit\">Wp\u0142a\u0107</button>\n        </div>\n      </div>\n    ";
  },
  // Tutaj zbieramy referencje do odpowiednich elementów
  // Tej metody też nie trzeba zmieniać ;)
  collectRefs: function collectRefs() {
    this.depositEl = this.rootElement.querySelector("#deposit");
    this.withdrawEl = this.rootElement.querySelector("#withdraw");
    this.saldoEl = this.rootElement.querySelector("h1 span");
    this.inputEl = this.rootElement.querySelector("input");
  },
  // W tej metodzie należy utworzyć nowy store
  // Następnie zapisać się na zmiany i na każdą z nich
  // zamienić wartość tekstu w elemencie `saldoEl` na wartość ze store + PLN
  // np. this.saldoEl.innerText = `wartosc-ze-store PLN`
  createStore: function createStore() {
    var _this = this;
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.store.subscribe(function () {
      return _this.saldoEl.innerText = "".concat(_this.store.getState(), " PLN");
    });
  },
  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers: function applyHandlers() {
    var _this2 = this;
    this.depositEl.addEventListener("click", function () {
      _this2.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__.depositMoney)(parseInt(_this2.inputEl.value)));
    });
    this.withdrawEl.addEventListener("click", function () {
      _this2.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__.withdrawMoney)(parseInt(_this2.inputEl.value)));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ }),

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */

var initialState = 0;
function bankReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.DEPOSIT:
      return state + action.payload;
    case _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.WITHDRAW:
      if (state - action.payload < 0) {
        return state;
      }
      return state - action.payload;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96c9a08bab078ce2efd1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsS0FBS1IsMERBQVE7TUFDVCxJQUFJRSxLQUFLLEdBQUdJLE1BQU0sQ0FBQ0UsT0FBTyxHQUFHLENBQUMsRUFBRTtRQUM1QixPQUFPTixLQUFLO01BQ2hCO01BQ0EsT0FBT0EsS0FBSyxHQUFHSSxNQUFNLENBQUNFLE9BQU87RUFBQTtBQUV6QztBQUNBLGlFQUFlakMsV0FBVzs7Ozs7Ozs7VUNwQjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvYmFua0FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQ29tYmluZV9SZWR1Y2Vycy8wMV9BcGxpa2FjamFfYmFua293YS9qcy9yZWR1eC9yZWR1Y2Vycy9iYW5rLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgcG93aW5ueSBzacSZIHpuYWxlxbrEhyBvZHBvd2llZG5pZSBpbXBvcnR5XHJcblxyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGJhbmsgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvYmFua1wiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leSwgd2l0aGRyYXdNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgYmFua1JlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvYmFua1wiO1xyXG5cclxuY29uc3QgYmFua0FwcCA9IHtcclxuXHJcbiAgc3RhcnQocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVTdG9yZSgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gVGVqIG1ldG9keSBuaWUgcG93aW5uacWbbXkgcnVzemHEhyA6KVxyXG4gIC8vIFR3b3J6eW15IHR1IHN6YWJsb24gVUlcclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlNhbGRvOjxzcGFuPjA8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICQ6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtb25leVwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwid2l0aGRyYXdcIj5XeXDFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlcG9zaXRcIj5XcMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICAvLyBUdXRhaiB6YmllcmFteSByZWZlcmVuY2plIGRvIG9kcG93aWVkbmljaCBlbGVtZW50w7N3XHJcbiAgLy8gVGVqIG1ldG9keSB0ZcW8IG5pZSB0cnplYmEgem1pZW5pYcSHIDspXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXBvc2l0XCIpO1xyXG4gICAgdGhpcy53aXRoZHJhd0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpdGhkcmF3XCIpO1xyXG4gICAgdGhpcy5zYWxkb0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgc3BhblwiKTtcclxuICAgIHRoaXMuaW5wdXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgdXR3b3J6ecSHIG5vd3kgc3RvcmVcclxuICAvLyBOYXN0xJlwbmllIHphcGlzYcSHIHNpxJkgbmEgem1pYW55IGkgbmEga2HFvGTEhSB6IG5pY2hcclxuICAvLyB6YW1pZW5pxIcgd2FydG/Fm8SHIHRla3N0dSB3IGVsZW1lbmNpZSBgc2FsZG9FbGAgbmEgd2FydG/Fm8SHIHplIHN0b3JlICsgUExOXHJcbiAgLy8gbnAuIHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgd2FydG9zYy16ZS1zdG9yZSBQTE5gXHJcblxyXG5cclxuICBjcmVhdGVTdG9yZSgpIHtcclxuICAgIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZShiYW5rUmVkdWNlcik7XHJcblxyXG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc3RvcmUuZ2V0U3RhdGUoKX0gUExOYCk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChkZXBvc2l0TW9uZXkocGFyc2VJbnQodGhpcy5pbnB1dEVsLnZhbHVlKSkpXHJcbiAgICB9KVxyXG4gICAgdGhpcy53aXRoZHJhd0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2god2l0aGRyYXdNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgIH0pXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbmtBcHA7XHJcbiIsIi8qKlxyXG4gKiBUdXRhaiB6YWltcGxlbWVudHVqIHJlZHVjZXIgZG8gYXBsaWthY2ppIGJhbmtBcHBcclxuICogUGFtacSZdGFqIGFieSBuYSBrb8WEY3Ugd3lla3Nwb3J0b3dhxIcgemFpbXBsZW1lbnRvd2FuxIUgZnVua2NqxJk6XHJcbiAqIGV4cG9ydCBkZWZhdWx0IGJhbmtSZWR1Y2VyO1xyXG4gKi9cclxuaW1wb3J0IHtERVBPU0lULCBXSVRIRFJBV30gZnJvbSBcIi4uL2FjdGlvbnMvYmFua0FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IDA7XHJcblxyXG5mdW5jdGlvbiBiYW5rUmVkdWNlcihzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBERVBPU0lUOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgKyBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjYXNlIFdJVEhEUkFXOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgLSBhY3Rpb24ucGF5bG9hZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYmFua1JlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTZjOWEwOGJhYjA3OGNlMmVmZDFcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJiYW5rIiwiZGVwb3NpdE1vbmV5Iiwid2l0aGRyYXdNb25leSIsImJhbmtSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsInN0b3JlIiwic3Vic2NyaWJlIiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiZ2V0U3RhdGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInZhbHVlIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiaW5pdGlhbFN0YXRlIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=