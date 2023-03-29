"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _redux_reducers_bank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
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
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.store.subscribe(function () {
      return _this.saldoEl.innerText = "".concat(_this.store.getState().balance, " PLN");
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
      _this2.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.depositMoney)(parseInt(_this2.inputEl.value)));
      _this2.inputEl.value = null;
    });
    this.withdrawEl.addEventListener("click", function () {
      _this2.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.withdrawMoney)(parseInt(_this2.inputEl.value)));
      _this2.inputEl.value = null;
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d8ad22524c2c64ce95fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNTZkZmYxYmJjYzA1MjI0Y2I3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtDO0FBQ3NDO0FBQ25CO0FBQ0w7QUFFaEQsSUFBTUssT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDUCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQWIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBaUIsS0FBQTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHbEIsa0RBQVcsQ0FBQ0csNkRBQWUsQ0FBQztJQUN6QyxJQUFJLENBQUNlLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO01BQUEsT0FBTUYsS0FBSSxDQUFDRixPQUFPLENBQUNLLFNBQVMsTUFBQUMsTUFBQSxDQUFNSixLQUFJLENBQUNDLEtBQUssQ0FBQ0ksUUFBUSxFQUFFLENBQUNDLE9BQU8sU0FBTTtJQUFBLEVBQUM7RUFDN0YsQ0FBQztFQUdEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQWIsYUFBYSxXQUFBQSxjQUFBLEVBQUc7SUFBQSxJQUFBYyxNQUFBO0lBQ2QsSUFBSSxDQUFDWixTQUFTLENBQUNhLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzdDRCxNQUFJLENBQUNOLEtBQUssQ0FBQ1EsUUFBUSxDQUFDekIsd0VBQVksQ0FBQzBCLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDUixPQUFPLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDL0RKLE1BQUksQ0FBQ1IsT0FBTyxDQUFDWSxLQUFLLEdBQUcsSUFBSTtJQUMzQixDQUFDLENBQUM7SUFDRixJQUFJLENBQUNkLFVBQVUsQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDOUNELE1BQUksQ0FBQ04sS0FBSyxDQUFDUSxRQUFRLENBQUN4Qix5RUFBYSxDQUFDeUIsUUFBUSxDQUFDSCxNQUFJLENBQUNSLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNoRUosTUFBSSxDQUFDUixPQUFPLENBQUNZLEtBQUssR0FBRyxJQUFJO0lBQzNCLENBQUMsQ0FBQztFQUdKO0FBQ0YsQ0FBQztBQUVELGlFQUFldkIsT0FBTzs7Ozs7Ozs7VUN6RXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvYmFua0FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IHBvd2lubnkgc2nEmSB6bmFsZcW6xIcgb2Rwb3dpZWRuaWUgaW1wb3J0eVxyXG5cclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7ZGVwb3NpdE1vbmV5LCB3aXRoZHJhd01vbmV5fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcbmltcG9ydCBjb21iaW5lZFJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IGJhbmtSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2JhbmtcIjtcclxuXHJcbmNvbnN0IGJhbmtBcHAgPSB7XHJcblxyXG4gIHN0YXJ0KHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlU3RvcmUoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFRlaiBtZXRvZHkgbmllIHBvd2lubmnFm215IHJ1c3phxIcgOilcclxuICAvLyBUd29yenlteSB0dSBzemFibG9uIFVJXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TYWxkbzo8c3Bhbj4wPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAkOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibW9uZXlcIiAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIndpdGhkcmF3XCI+V3lwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZXBvc2l0XCI+V3DFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgLy8gVHV0YWogemJpZXJhbXkgcmVmZXJlbmNqZSBkbyBvZHBvd2llZG5pY2ggZWxlbWVudMOzd1xyXG4gIC8vIFRlaiBtZXRvZHkgdGXFvCBuaWUgdHJ6ZWJhIHptaWVuaWHEhyA7KVxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVwb3NpdFwiKTtcclxuICAgIHRoaXMud2l0aGRyYXdFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aXRoZHJhd1wiKTtcclxuICAgIHRoaXMuc2FsZG9FbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxIHNwYW5cIik7XHJcbiAgICB0aGlzLmlucHV0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICB9LFxyXG5cclxuICAvLyBXIHRlaiBtZXRvZHppZSBuYWxlxbx5IHV0d29yennEhyBub3d5IHN0b3JlXHJcbiAgLy8gTmFzdMSZcG5pZSB6YXBpc2HEhyBzacSZIG5hIHptaWFueSBpIG5hIGthxbxkxIUgeiBuaWNoXHJcbiAgLy8gemFtaWVuacSHIHdhcnRvxZvEhyB0ZWtzdHUgdyBlbGVtZW5jaWUgYHNhbGRvRWxgIG5hIHdhcnRvxZvEhyB6ZSBzdG9yZSArIFBMTlxyXG4gIC8vIG5wLiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYHdhcnRvc2MtemUtc3RvcmUgUExOYFxyXG5cclxuXHJcbiAgY3JlYXRlU3RvcmUoKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoY29tYmluZWRSZWR1Y2VyKTtcclxuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgJHt0aGlzLnN0b3JlLmdldFN0YXRlKCkuYmFsYW5jZX0gUExOYCk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChkZXBvc2l0TW9uZXkocGFyc2VJbnQodGhpcy5pbnB1dEVsLnZhbHVlKSkpXHJcbiAgICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IG51bGw7XHJcbiAgICB9KVxyXG4gICAgdGhpcy53aXRoZHJhd0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2god2l0aGRyYXdNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcblxyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOGFkMjI1MjRjMmM2NGNlOTVmZFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImRlcG9zaXRNb25leSIsIndpdGhkcmF3TW9uZXkiLCJjb21iaW5lZFJlZHVjZXIiLCJiYW5rUmVkdWNlciIsImJhbmtBcHAiLCJzdGFydCIsInJvb3RFbGVtZW50IiwiY3JlYXRlVUkiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJpbm5lckhUTUwiLCJkZXBvc2l0RWwiLCJxdWVyeVNlbGVjdG9yIiwid2l0aGRyYXdFbCIsInNhbGRvRWwiLCJpbnB1dEVsIiwiX3RoaXMiLCJzdG9yZSIsInN1YnNjcmliZSIsImlubmVyVGV4dCIsImNvbmNhdCIsImdldFN0YXRlIiwiYmFsYW5jZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaCIsInBhcnNlSW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9