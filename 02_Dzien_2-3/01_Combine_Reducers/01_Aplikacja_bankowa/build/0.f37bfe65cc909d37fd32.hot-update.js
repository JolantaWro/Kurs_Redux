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
    var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0__["default"]);
    store.subscribe(function () {
      return console.log(store.getState());
    });
  },
  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers: function applyHandlers() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e9a5b0e25e40ebc53aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMzdiZmU2NWNjOTA5ZDM3ZmQzMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0M7QUFDTztBQUNnQjtBQUNUO0FBRWhELElBQU1JLE9BQU8sR0FBRztFQUVkQyxLQUFLLFdBQUFBLE1BQUNDLFdBQVcsRUFBRTtJQUNqQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsV0FBVyxDQUFDO0lBQzFCLElBQUksQ0FBQ04sV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ1EsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCLENBQUM7RUFFRDtFQUNBO0VBQ0FGLFFBQVEsV0FBQUEsU0FBQ0QsV0FBVyxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDSSxTQUFTLDJSQVV6QjtFQUNILENBQUM7RUFFRDtFQUNBO0VBQ0FGLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1osSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDM0QsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDUCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxPQUFPLEdBQUcsSUFBSSxDQUFDUixXQUFXLENBQUNNLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDeEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDVCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDeEQsQ0FBQztFQUVEO0VBQ0E7RUFDQTtFQUNBO0VBR0FaLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1osSUFBSWdCLEtBQUssR0FBR2hCLGtEQUFXLENBQUNHLDREQUFXLENBQUM7SUFFcENhLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO01BQUEsT0FBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQ0ksUUFBUSxFQUFFLENBQUM7SUFBQSxFQUFDO0VBRXRELENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FYLGFBQWEsV0FBQUEsY0FBQSxFQUFHLENBRWhCO0FBQ0YsQ0FBQztBQUVELGlFQUFlTCxPQUFPOzs7Ozs7OztVQ2xFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQ29tYmluZV9SZWR1Y2Vycy8wMV9BcGxpa2FjamFfYmFua293YS9qcy9iYW5rQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgcG93aW5ueSBzacSZIHpuYWxlxbrEhyBvZHBvd2llZG5pZSBpbXBvcnR5XHJcblxyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGJhbmsgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvYmFua1wiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgYmFua1JlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvYmFua1wiO1xyXG5cclxuY29uc3QgYmFua0FwcCA9IHtcclxuXHJcbiAgc3RhcnQocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVTdG9yZSgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gVGVqIG1ldG9keSBuaWUgcG93aW5uacWbbXkgcnVzemHEhyA6KVxyXG4gIC8vIFR3b3J6eW15IHR1IHN6YWJsb24gVUlcclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlNhbGRvOjxzcGFuPjA8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICQ6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtb25leVwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwid2l0aGRyYXdcIj5XeXDFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlcG9zaXRcIj5XcMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICAvLyBUdXRhaiB6YmllcmFteSByZWZlcmVuY2plIGRvIG9kcG93aWVkbmljaCBlbGVtZW50w7N3XHJcbiAgLy8gVGVqIG1ldG9keSB0ZcW8IG5pZSB0cnplYmEgem1pZW5pYcSHIDspXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXBvc2l0XCIpO1xyXG4gICAgdGhpcy53aXRoZHJhd0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpdGhkcmF3XCIpO1xyXG4gICAgdGhpcy5zYWxkb0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgc3BhblwiKTtcclxuICAgIHRoaXMuaW5wdXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgdXR3b3J6ecSHIG5vd3kgc3RvcmVcclxuICAvLyBOYXN0xJlwbmllIHphcGlzYcSHIHNpxJkgbmEgem1pYW55IGkgbmEga2HFvGTEhSB6IG5pY2hcclxuICAvLyB6YW1pZW5pxIcgd2FydG/Fm8SHIHRla3N0dSB3IGVsZW1lbmNpZSBgc2FsZG9FbGAgbmEgd2FydG/Fm8SHIHplIHN0b3JlICsgUExOXHJcbiAgLy8gbnAuIHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgd2FydG9zYy16ZS1zdG9yZSBQTE5gXHJcblxyXG5cclxuICBjcmVhdGVTdG9yZSgpIHtcclxuICAgIGxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGJhbmtSZWR1Y2VyKTtcclxuXHJcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSkpO1xyXG5cclxuICB9LFxyXG5cclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcclxuICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcclxuICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcclxuICAvLyB0aGlzLndpdGhkcmF3RWxcclxuICAvLyB0aGlzLmRlcG9zaXRFbFxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbmtBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdlOWE1YjBlMjVlNDBlYmM1M2FhXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYmFuayIsImRlcG9zaXRNb25leSIsImJhbmtSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJzdG9yZSIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=