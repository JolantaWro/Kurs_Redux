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
/* harmony import */ var _redux_reducers_bank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _redux_reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
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
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
/******/ 	__webpack_require__.h = () => ("3d27b88fdd7493b2ac75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45YmZlNDdjYzc4OGYxOGRhOGFhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtDO0FBQ3NDO0FBQ3hCO0FBQ0E7QUFFaEQsSUFBTUssT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDUCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQWIsV0FBVyxXQUFBQSxZQUFDaUIsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR25CLGtEQUFXLENBQUNJLDZEQUFVLENBQUM7SUFFcEMsSUFBSSxDQUFDZSxLQUFLLENBQUNDLFNBQVMsQ0FBQztNQUFBLE9BQU1GLEtBQUksQ0FBQ0gsT0FBTyxDQUFDTSxTQUFTLE1BQUFDLE1BQUEsQ0FBTUosS0FBSSxDQUFDQyxLQUFLLENBQUNJLFFBQVEsRUFBRSxDQUFDQyxPQUFPLFNBQU07SUFBQSxFQUFDO0VBQzdGLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FkLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWUsTUFBQTtJQUNkLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0QsTUFBSSxDQUFDTixLQUFLLENBQUNRLFFBQVEsQ0FBQzFCLHdFQUFZLENBQUMyQixRQUFRLENBQUNILE1BQUksQ0FBQ1QsT0FBTyxDQUFDYSxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQy9ESixNQUFJLENBQUNULE9BQU8sQ0FBQ2EsS0FBSyxHQUFHLElBQUk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDZixVQUFVLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzlDRCxNQUFJLENBQUNOLEtBQUssQ0FBQ1EsUUFBUSxDQUFDekIseUVBQWEsQ0FBQzBCLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDVCxPQUFPLENBQUNhLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDaEVKLE1BQUksQ0FBQ1QsT0FBTyxDQUFDYSxLQUFLLEdBQUcsSUFBSTtJQUMzQixDQUFDLENBQUM7RUFHSjtBQUNGLENBQUM7QUFFRCxpRUFBZXhCLE9BQU87Ozs7Ozs7O1VDMUV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leSwgd2l0aGRyYXdNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgYmFua1JlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvYmFua1wiO1xyXG5pbXBvcnQgYWxsUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuY29uc3QgYmFua0FwcCA9IHtcclxuXHJcbiAgc3RhcnQocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xyXG4gICAgdGhpcy5jcmVhdGVTdG9yZSgpO1xyXG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xyXG4gICAgdGhpcy5hcHBseUhhbmRsZXJzKCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gVGVqIG1ldG9keSBuaWUgcG93aW5uacWbbXkgcnVzemHEhyA6KVxyXG4gIC8vIFR3b3J6eW15IHR1IHN6YWJsb24gVUlcclxuICBjcmVhdGVVSShyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlNhbGRvOjxzcGFuPjA8L3NwYW4+PC9oMT5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICQ6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtb25leVwiIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwid2l0aGRyYXdcIj5XeXDFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlcG9zaXRcIj5XcMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICAvLyBUdXRhaiB6YmllcmFteSByZWZlcmVuY2plIGRvIG9kcG93aWVkbmljaCBlbGVtZW50w7N3XHJcbiAgLy8gVGVqIG1ldG9keSB0ZcW8IG5pZSB0cnplYmEgem1pZW5pYcSHIDspXHJcbiAgY29sbGVjdFJlZnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXBvc2l0XCIpO1xyXG4gICAgdGhpcy53aXRoZHJhd0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpdGhkcmF3XCIpO1xyXG4gICAgdGhpcy5zYWxkb0VsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDEgc3BhblwiKTtcclxuICAgIHRoaXMuaW5wdXRFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgdXR3b3J6ecSHIG5vd3kgc3RvcmVcclxuICAvLyBOYXN0xJlwbmllIHphcGlzYcSHIHNpxJkgbmEgem1pYW55IGkgbmEga2HFvGTEhSB6IG5pY2hcclxuICAvLyB6YW1pZW5pxIcgd2FydG/Fm8SHIHRla3N0dSB3IGVsZW1lbmNpZSBgc2FsZG9FbGAgbmEgd2FydG/Fm8SHIHplIHN0b3JlICsgUExOXHJcbiAgLy8gbnAuIHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgd2FydG9zYy16ZS1zdG9yZSBQTE5gXHJcblxyXG5cclxuICBjcmVhdGVTdG9yZShzZWxmKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoYWxsUmVkdWNlcik7XHJcblxyXG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5iYWxhbmNlfSBQTE5gKTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcclxuICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcclxuICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcclxuICAvLyB0aGlzLndpdGhkcmF3RWxcclxuICAvLyB0aGlzLmRlcG9zaXRFbFxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGRlcG9zaXRNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcbiAgICB0aGlzLndpdGhkcmF3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh3aXRoZHJhd01vbmV5KHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSkpKVxyXG4gICAgICB0aGlzLmlucHV0RWwudmFsdWUgPSBudWxsO1xyXG4gICAgfSlcclxuXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbmtBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNkMjdiODhmZGQ3NDkzYjJhYzc1XCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiZGVwb3NpdE1vbmV5Iiwid2l0aGRyYXdNb25leSIsImJhbmtSZWR1Y2VyIiwiYWxsUmVkdWNlciIsImJhbmtBcHAiLCJzdGFydCIsInJvb3RFbGVtZW50IiwiY3JlYXRlVUkiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJpbm5lckhUTUwiLCJkZXBvc2l0RWwiLCJxdWVyeVNlbGVjdG9yIiwid2l0aGRyYXdFbCIsInNhbGRvRWwiLCJpbnB1dEVsIiwic2VsZiIsIl90aGlzIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJpbm5lclRleHQiLCJjb25jYXQiLCJnZXRTdGF0ZSIsImJhbGFuY2UiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==