"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _redux_reducers_bank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
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
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]);
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

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */



var allReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  counter: _counter__WEBPACK_IMPORTED_MODULE_0__["default"],
  balance: _bank__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d837174382f3e37c8432")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40Y2NlMjYwNzA1ZjA0MTcxYzkxYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtDO0FBQ3NDO0FBQ3hCO0FBQ047QUFFMUMsSUFBTUssT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDUCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQWIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBaUIsS0FBQTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHbEIsa0RBQVcsQ0FBQ0ksdURBQVUsQ0FBQztJQUVwQyxJQUFJLENBQUNjLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO01BQUEsT0FBTUYsS0FBSSxDQUFDRixPQUFPLENBQUNLLFNBQVMsTUFBQUMsTUFBQSxDQUFNSixLQUFJLENBQUNDLEtBQUssQ0FBQ0ksUUFBUSxFQUFFLFNBQU07SUFBQSxFQUFDO0VBQ3JGLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FaLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWEsTUFBQTtJQUNkLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0QsTUFBSSxDQUFDTCxLQUFLLENBQUNPLFFBQVEsQ0FBQ3hCLHdFQUFZLENBQUN5QixRQUFRLENBQUNILE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQy9ESixNQUFJLENBQUNQLE9BQU8sQ0FBQ1csS0FBSyxHQUFHLElBQUk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDYixVQUFVLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzlDRCxNQUFJLENBQUNMLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIseUVBQWEsQ0FBQ3dCLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDUCxPQUFPLENBQUNXLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDaEVKLE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLEdBQUcsSUFBSTtJQUMzQixDQUFDLENBQUM7RUFHSjtBQUNGLENBQUM7QUFFRCxpRUFBZXRCLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDMUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNDO0FBQ047QUFFakMsSUFBTUQsVUFBVSxHQUFHd0Isc0RBQWUsQ0FBQztFQUMvQkUsT0FBTyxFQUFFRCxnREFBYztFQUN2QkUsT0FBTyxFQUFFNUIsNkNBQVdBO0FBQ3hCLENBQUMsQ0FBQztBQUVGLGlFQUFlQyxVQUFVOzs7Ozs7OztVQ2hCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQ29tYmluZV9SZWR1Y2Vycy8wMV9BcGxpa2FjamFfYmFua293YS9qcy9iYW5rQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVHUgcG93aW5ueSBzacSZIHpuYWxlxbrEhyBvZHBvd2llZG5pZSBpbXBvcnR5XHJcblxyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtkZXBvc2l0TW9uZXksIHdpdGhkcmF3TW9uZXl9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvYmFua0FjdGlvbnNcIjtcclxuaW1wb3J0IGJhbmtSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2JhbmtcIjtcclxuaW1wb3J0IGFsbFJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IGJhbmtBcHAgPSB7XHJcblxyXG4gIHN0YXJ0KHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlU3RvcmUoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFRlaiBtZXRvZHkgbmllIHBvd2lubmnFm215IHJ1c3phxIcgOilcclxuICAvLyBUd29yenlteSB0dSBzemFibG9uIFVJXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TYWxkbzo8c3Bhbj4wPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAkOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibW9uZXlcIiAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIndpdGhkcmF3XCI+V3lwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZXBvc2l0XCI+V3DFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgLy8gVHV0YWogemJpZXJhbXkgcmVmZXJlbmNqZSBkbyBvZHBvd2llZG5pY2ggZWxlbWVudMOzd1xyXG4gIC8vIFRlaiBtZXRvZHkgdGXFvCBuaWUgdHJ6ZWJhIHptaWVuaWHEhyA7KVxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVwb3NpdFwiKTtcclxuICAgIHRoaXMud2l0aGRyYXdFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aXRoZHJhd1wiKTtcclxuICAgIHRoaXMuc2FsZG9FbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxIHNwYW5cIik7XHJcbiAgICB0aGlzLmlucHV0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICB9LFxyXG5cclxuICAvLyBXIHRlaiBtZXRvZHppZSBuYWxlxbx5IHV0d29yennEhyBub3d5IHN0b3JlXHJcbiAgLy8gTmFzdMSZcG5pZSB6YXBpc2HEhyBzacSZIG5hIHptaWFueSBpIG5hIGthxbxkxIUgeiBuaWNoXHJcbiAgLy8gemFtaWVuacSHIHdhcnRvxZvEhyB0ZWtzdHUgdyBlbGVtZW5jaWUgYHNhbGRvRWxgIG5hIHdhcnRvxZvEhyB6ZSBzdG9yZSArIFBMTlxyXG4gIC8vIG5wLiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYHdhcnRvc2MtemUtc3RvcmUgUExOYFxyXG5cclxuXHJcbiAgY3JlYXRlU3RvcmUoKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUoYWxsUmVkdWNlcik7XHJcblxyXG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc3RvcmUuZ2V0U3RhdGUoKX0gUExOYCk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChkZXBvc2l0TW9uZXkocGFyc2VJbnQodGhpcy5pbnB1dEVsLnZhbHVlKSkpXHJcbiAgICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IG51bGw7XHJcbiAgICB9KVxyXG4gICAgdGhpcy53aXRoZHJhd0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2god2l0aGRyYXdNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcblxyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xyXG4iLCIvKipcclxuICogVHV0YWogcG93aW5pZW4gem5hbGXFusSHIHNpxJkgXCJwb8WCxIVjem9ueVwiIHJlZHVjZXJcclxuICogUGFtacSZdGFqIG8gbmF6d2FjaCBww7NsLCBwb3dpbm55IGJ5xIcgdGFraWUgamFrIHcgdHJlxZtjaSB6YWRhbmlhXHJcbiAqXHJcbiAqIE5pZSB6YXBvbW5paiB0ZcW8IG8gZXhwb3JjaWUhXHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVkUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL2NvdW50ZXJcIjtcclxuaW1wb3J0IGJhbmtSZWR1Y2VyIGZyb20gXCIuL2JhbmtcIjtcclxuXHJcbmNvbnN0IGFsbFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlcjogY291bnRlclJlZHVjZXIsXHJcbiAgICBiYWxhbmNlOiBiYW5rUmVkdWNlclxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsUmVkdWNlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDgzNzE3NDM4MmYzZTM3Yzg0MzJcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJkZXBvc2l0TW9uZXkiLCJ3aXRoZHJhd01vbmV5IiwiYmFua1JlZHVjZXIiLCJhbGxSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsInN0b3JlIiwic3Vic2NyaWJlIiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiZ2V0U3RhdGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInZhbHVlIiwiY29tYmluZVJlZHVjZXJzIiwiY291bnRlclJlZHVjZXIiLCJjb3VudGVyIiwiYmFsYW5jZSJdLCJzb3VyY2VSb290IjoiIn0=