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
    // let store = createStore(bankReducer);

    // console.log(store.getState())

    this.store.subscribe(function () {
      return _this.saldoEl.innerText = "".concat(_this.saldoEl, " PLN");
    });
    // store.subscribe(() => this.saldoEl.innerText = `${this.saldoEl} PLN`);
    // console.log(store.getState())
  },
  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers: function applyHandlers() {
    this.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__.depositMoney)(5));
    console.log(this.store.getState());
    this.depositEl.addEventListener("click", function () {
      console.log("klik", e.target.value);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3273bf91967eb01c092b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYjhlN2Q5NWRmYzRjMGNmMzdiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0M7QUFDTztBQUNnQjtBQUNUO0FBRWhELElBQU1JLE9BQU8sR0FBRztFQUVkQyxLQUFLLFdBQUFBLE1BQUNDLFdBQVcsRUFBRTtJQUNqQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsV0FBVyxDQUFDO0lBQzFCLElBQUksQ0FBQ04sV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ1EsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCLENBQUM7RUFFRDtFQUNBO0VBQ0FGLFFBQVEsV0FBQUEsU0FBQ0QsV0FBVyxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDSSxTQUFTLDJSQVV6QjtFQUNILENBQUM7RUFFRDtFQUNBO0VBQ0FGLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1osSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDM0QsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDUCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxPQUFPLEdBQUcsSUFBSSxDQUFDUixXQUFXLENBQUNNLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDeEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDVCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDeEQsQ0FBQztFQUVEO0VBQ0E7RUFDQTtFQUNBO0VBR0FaLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQUEsSUFBQWdCLEtBQUE7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR2pCLGtEQUFXLENBQUNHLDREQUFXLENBQUM7SUFDckM7O0lBRUE7O0lBRUEsSUFBSSxDQUFDYyxLQUFLLENBQUNDLFNBQVMsQ0FBQztNQUFBLE9BQU1GLEtBQUksQ0FBQ0YsT0FBTyxDQUFDSyxTQUFTLE1BQUFDLE1BQUEsQ0FBTUosS0FBSSxDQUFDRixPQUFPLFNBQU07SUFBQSxFQUFDO0lBQzFFO0lBQ0E7RUFFRixDQUFDO0VBR0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBTCxhQUFhLFdBQUFBLGNBQUEsRUFBRztJQUNkLElBQUksQ0FBQ1EsS0FBSyxDQUFDSSxRQUFRLENBQUNuQix3RUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDb0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTixLQUFLLENBQUNPLFFBQVEsRUFBRSxDQUFDO0lBQ2xDLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztFQUdKO0FBQ0YsQ0FBQztBQUVELGlFQUFleEIsT0FBTzs7Ozs7Ozs7VUM3RXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvYmFua0FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IHBvd2lubnkgc2nEmSB6bmFsZcW6xIcgb2Rwb3dpZWRuaWUgaW1wb3J0eVxyXG5cclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBiYW5rIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2JhbmtcIjtcclxuaW1wb3J0IHtkZXBvc2l0TW9uZXl9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvYmFua0FjdGlvbnNcIjtcclxuaW1wb3J0IGJhbmtSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2JhbmtcIjtcclxuXHJcbmNvbnN0IGJhbmtBcHAgPSB7XHJcblxyXG4gIHN0YXJ0KHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlU3RvcmUoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFRlaiBtZXRvZHkgbmllIHBvd2lubmnFm215IHJ1c3phxIcgOilcclxuICAvLyBUd29yenlteSB0dSBzemFibG9uIFVJXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TYWxkbzo8c3Bhbj4wPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAkOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibW9uZXlcIiAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIndpdGhkcmF3XCI+V3lwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZXBvc2l0XCI+V3DFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgLy8gVHV0YWogemJpZXJhbXkgcmVmZXJlbmNqZSBkbyBvZHBvd2llZG5pY2ggZWxlbWVudMOzd1xyXG4gIC8vIFRlaiBtZXRvZHkgdGXFvCBuaWUgdHJ6ZWJhIHptaWVuaWHEhyA7KVxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVwb3NpdFwiKTtcclxuICAgIHRoaXMud2l0aGRyYXdFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aXRoZHJhd1wiKTtcclxuICAgIHRoaXMuc2FsZG9FbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxIHNwYW5cIik7XHJcbiAgICB0aGlzLmlucHV0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICB9LFxyXG5cclxuICAvLyBXIHRlaiBtZXRvZHppZSBuYWxlxbx5IHV0d29yennEhyBub3d5IHN0b3JlXHJcbiAgLy8gTmFzdMSZcG5pZSB6YXBpc2HEhyBzacSZIG5hIHptaWFueSBpIG5hIGthxbxkxIUgeiBuaWNoXHJcbiAgLy8gemFtaWVuacSHIHdhcnRvxZvEhyB0ZWtzdHUgdyBlbGVtZW5jaWUgYHNhbGRvRWxgIG5hIHdhcnRvxZvEhyB6ZSBzdG9yZSArIFBMTlxyXG4gIC8vIG5wLiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYHdhcnRvc2MtemUtc3RvcmUgUExOYFxyXG5cclxuXHJcbiAgY3JlYXRlU3RvcmUoKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoYmFua1JlZHVjZXIpO1xyXG4gICAgLy8gbGV0IHN0b3JlID0gY3JlYXRlU3RvcmUoYmFua1JlZHVjZXIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXHJcblxyXG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc2FsZG9FbH0gUExOYCk7XHJcbiAgICAvLyBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc2FsZG9FbH0gUExOYCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxyXG5cclxuICB9LFxyXG5cclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcclxuICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcclxuICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcclxuICAvLyB0aGlzLndpdGhkcmF3RWxcclxuICAvLyB0aGlzLmRlcG9zaXRFbFxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGRlcG9zaXRNb25leSg1KSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuZ2V0U3RhdGUoKSlcclxuICAgIHRoaXMuZGVwb3NpdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwia2xpa1wiLCBlLnRhcmdldC52YWx1ZSlcclxuICAgIH0pXHJcblxyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMjczYmY5MTk2N2ViMDFjMDkyYlwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImJhbmsiLCJkZXBvc2l0TW9uZXkiLCJiYW5rUmVkdWNlciIsImJhbmtBcHAiLCJzdGFydCIsInJvb3RFbGVtZW50IiwiY3JlYXRlVUkiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJpbm5lckhUTUwiLCJkZXBvc2l0RWwiLCJxdWVyeVNlbGVjdG9yIiwid2l0aGRyYXdFbCIsInNhbGRvRWwiLCJpbnB1dEVsIiwiX3RoaXMiLCJzdG9yZSIsInN1YnNjcmliZSIsImlubmVyVGV4dCIsImNvbmNhdCIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=