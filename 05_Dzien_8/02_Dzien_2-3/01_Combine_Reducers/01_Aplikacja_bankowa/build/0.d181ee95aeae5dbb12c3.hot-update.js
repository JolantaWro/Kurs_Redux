"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
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
  createStore: function createStore(self) {
    var _this = this;
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
    // this.saldoEl.innerText = `${this.store.getState().balance}`
    // this.store.subscribe(() => this.saldoEl.innerText = `${this.store.getState().store.balance} PLN`);
    this.saldoEl.innerText = "".concat(this.store.getState().balance, " PLN");
    var unsubscribe = this.store.subscribe(function () {
      _this.saldoEl.innerText = "".concat(_this.store.getState().balance, " PLN");
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
/******/ 	__webpack_require__.h = () => ("664dae48b924c3f534f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMTgxZWU5NWFlYWU1ZGJiMTJjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0M7QUFDc0M7QUFDdkI7QUFFakQsSUFBTUksT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDTixXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUSxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQVosV0FBVyxXQUFBQSxZQUFDZ0IsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR2xCLGtEQUFXLENBQUNHLDZEQUFXLENBQUM7SUFDckM7SUFDQTtJQUNBLElBQUksQ0FBQ1csT0FBTyxDQUFDSyxTQUFTLE1BQUFDLE1BQUEsQ0FBTSxJQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxFQUFFLENBQUNDLE9BQU8sU0FBTTtJQUMvRCxJQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDTCxLQUFLLENBQUNNLFNBQVMsQ0FBQyxZQUFNO01BQzdDUCxLQUFJLENBQUNILE9BQU8sQ0FBQ0ssU0FBUyxNQUFBQyxNQUFBLENBQU1ILEtBQUksQ0FBQ0MsS0FBSyxDQUFDRyxRQUFRLEVBQUUsQ0FBQ0MsT0FBTyxTQUFNO0lBQ2pFLENBQUMsQ0FBQztFQUNKLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FiLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWdCLE1BQUE7SUFDZCxJQUFJLENBQUNkLFNBQVMsQ0FBQ2UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDN0NELE1BQUksQ0FBQ1AsS0FBSyxDQUFDUyxRQUFRLENBQUMxQix3RUFBWSxDQUFDMkIsUUFBUSxDQUFDSCxNQUFJLENBQUNWLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUMvREosTUFBSSxDQUFDVixPQUFPLENBQUNjLEtBQUssR0FBRyxJQUFJO0lBQzNCLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ2hCLFVBQVUsQ0FBQ2EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDOUNELE1BQUksQ0FBQ1AsS0FBSyxDQUFDUyxRQUFRLENBQUN6Qix5RUFBYSxDQUFDMEIsUUFBUSxDQUFDSCxNQUFJLENBQUNWLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNoRUosTUFBSSxDQUFDVixPQUFPLENBQUNjLEtBQUssR0FBRyxJQUFJO0lBQzNCLENBQUMsQ0FBQztFQUdKO0FBQ0YsQ0FBQztBQUVELGlFQUFlekIsT0FBTzs7Ozs7Ozs7VUM3RXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvYmFua0FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IHBvd2lubnkgc2nEmSB6bmFsZcW6xIcgb2Rwb3dpZWRuaWUgaW1wb3J0eVxyXG5cclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7ZGVwb3NpdE1vbmV5LCB3aXRoZHJhd01vbmV5fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuY29uc3QgYmFua0FwcCA9IHtcclxuXHJcbiAgc3RhcnQocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVTdG9yZSgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gVGVqIG1ldG9keSBuaWUgcG93aW5uacWbbXkgcnVzemHEhyA6KVxyXG4gIC8vIFR3b3J6eW15IHR1IHN6YWJsb24gVUlcclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlNhbGRvOjxzcGFuPjA8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICQ6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtb25leVwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwid2l0aGRyYXdcIj5XeXDFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlcG9zaXRcIj5XcMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICAvLyBUdXRhaiB6YmllcmFteSByZWZlcmVuY2plIGRvIG9kcG93aWVkbmljaCBlbGVtZW50w7N3XHJcbiAgLy8gVGVqIG1ldG9keSB0ZcW8IG5pZSB0cnplYmEgem1pZW5pYcSHIDspXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXBvc2l0XCIpO1xyXG4gICAgdGhpcy53aXRoZHJhd0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpdGhkcmF3XCIpO1xyXG4gICAgdGhpcy5zYWxkb0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgc3BhblwiKTtcclxuICAgIHRoaXMuaW5wdXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgdXR3b3J6ecSHIG5vd3kgc3RvcmVcclxuICAvLyBOYXN0xJlwbmllIHphcGlzYcSHIHNpxJkgbmEgem1pYW55IGkgbmEga2HFvGTEhSB6IG5pY2hcclxuICAvLyB6YW1pZW5pxIcgd2FydG/Fm8SHIHRla3N0dSB3IGVsZW1lbmNpZSBgc2FsZG9FbGAgbmEgd2FydG/Fm8SHIHplIHN0b3JlICsgUExOXHJcbiAgLy8gbnAuIHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgd2FydG9zYy16ZS1zdG9yZSBQTE5gXHJcblxyXG5cclxuICBjcmVhdGVTdG9yZShzZWxmKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIpO1xyXG4gICAgLy8gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5iYWxhbmNlfWBcclxuICAgIC8vIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgJHt0aGlzLnN0b3JlLmdldFN0YXRlKCkuc3RvcmUuYmFsYW5jZX0gUExOYCk7XHJcbiAgICB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmJhbGFuY2V9IFBMTmBcclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmJhbGFuY2V9IFBMTmBcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChkZXBvc2l0TW9uZXkocGFyc2VJbnQodGhpcy5pbnB1dEVsLnZhbHVlKSkpXHJcbiAgICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IG51bGw7XHJcbiAgICB9KVxyXG4gICAgdGhpcy53aXRoZHJhd0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2god2l0aGRyYXdNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcblxyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NjRkYWU0OGI5MjRjM2Y1MzRmOFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImRlcG9zaXRNb25leSIsIndpdGhkcmF3TW9uZXkiLCJyb290UmVkdWNlciIsImJhbmtBcHAiLCJzdGFydCIsInJvb3RFbGVtZW50IiwiY3JlYXRlVUkiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJpbm5lckhUTUwiLCJkZXBvc2l0RWwiLCJxdWVyeVNlbGVjdG9yIiwid2l0aGRyYXdFbCIsInNhbGRvRWwiLCJpbnB1dEVsIiwic2VsZiIsIl90aGlzIiwic3RvcmUiLCJpbm5lclRleHQiLCJjb25jYXQiLCJnZXRTdGF0ZSIsImJhbGFuY2UiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaCIsInBhcnNlSW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9