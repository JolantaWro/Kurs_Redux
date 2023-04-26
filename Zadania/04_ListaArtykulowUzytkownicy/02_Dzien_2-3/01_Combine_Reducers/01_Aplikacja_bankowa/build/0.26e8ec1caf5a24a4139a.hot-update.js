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
/* harmony import */ var _redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
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
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.saldoEl.innerText = "".concat(this.store.getState());
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

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */

var initialState = {
  balance: 0
};
function bankReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.DEPOSIT:
      return state.balance + action.payload;
    case _actions_bankActions__WEBPACK_IMPORTED_MODULE_0__.WITHDRAW:
      if (state.balance - action.payload < 0) {
        return state.balance;
      }
      return state.balance - action.payload;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankReducer);

/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */



var combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  counter: _counter__WEBPACK_IMPORTED_MODULE_0__["default"],
  balance: _bank__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (combinedReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("879a309d1dd138e87ec4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQyxRQUFPQyxNQUFNLENBQUNDLElBQUk7SUFDZCxLQUFLVCx5REFBTztNQUNSLE9BQU9JLEtBQUssQ0FBQ1YsT0FBTyxHQUFHYyxNQUFNLENBQUNFLE9BQU87SUFDekMsS0FBS1QsMERBQVE7TUFDVCxJQUFJRyxLQUFLLENBQUNWLE9BQU8sR0FBR2MsTUFBTSxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ3BDLE9BQU9OLEtBQUssQ0FBQ1YsT0FBTztNQUN4QjtNQUNBLE9BQU9VLEtBQUssQ0FBQ1YsT0FBTyxHQUFHYyxNQUFNLENBQUNFLE9BQU87RUFBQTtBQUVqRDtBQUNBLGlFQUFlUCxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3BCMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0M7QUFDQztBQUNOO0FBRWpDLElBQU01QixlQUFlLEdBQUdvQyxzREFBZSxDQUFDO0VBQ3BDRSxPQUFPLEVBQUVELGdEQUFjO0VBQ3ZCbEIsT0FBTyxFQUFFUyw2Q0FBV0E7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsaUVBQWU1QixlQUFlOzs7Ozs7OztVQ2hCOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMl9Eemllbl8yLTMvMDFfQ29tYmluZV9SZWR1Y2Vycy8wMV9BcGxpa2FjamFfYmFua293YS9qcy9iYW5rQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL3JlZHV4L3JlZHVjZXJzL2JhbmsuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDJfRHppZW5fMi0zLzAxX0NvbWJpbmVfUmVkdWNlcnMvMDFfQXBsaWthY2phX2Jhbmtvd2EvanMvcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leSwgd2l0aGRyYXdNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgY29tYmluZWRSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5jb25zdCBiYW5rQXBwID0ge1xyXG5cclxuICBzdGFydChyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9LFxyXG5cclxuICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXHJcbiAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ3aXRoZHJhd1wiPld5cMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcclxuICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XHJcbiAgICB0aGlzLndpdGhkcmF3RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2l0aGRyYXdcIik7XHJcbiAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgfSxcclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxyXG4gIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxyXG4gIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cclxuICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcclxuXHJcblxyXG4gIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVkUmVkdWNlcik7XHJcbiAgICB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdG9yZS5nZXRTdGF0ZSgpfWBcclxuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgJHt0aGlzLnN0b3JlLmdldFN0YXRlKCkuYmFsYW5jZX0gUExOYCk7XHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChkZXBvc2l0TW9uZXkocGFyc2VJbnQodGhpcy5pbnB1dEVsLnZhbHVlKSkpXHJcbiAgICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IG51bGw7XHJcbiAgICB9KVxyXG4gICAgdGhpcy53aXRoZHJhd0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2god2l0aGRyYXdNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcblxyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xyXG4iLCIvKipcclxuICogVHV0YWogemFpbXBsZW1lbnR1aiByZWR1Y2VyIGRvIGFwbGlrYWNqaSBiYW5rQXBwXHJcbiAqIFBhbWnEmXRhaiBhYnkgbmEga2/FhGN1IHd5ZWtzcG9ydG93YcSHIHphaW1wbGVtZW50b3dhbsSFIGZ1bmtjasSZOlxyXG4gKiBleHBvcnQgZGVmYXVsdCBiYW5rUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7REVQT1NJVCwgV0lUSERSQVd9IGZyb20gXCIuLi9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7YmFsYW5jZTogMH07XHJcblxyXG5mdW5jdGlvbiBiYW5rUmVkdWNlcihzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBERVBPU0lUOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuYmFsYW5jZSArIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGNhc2UgV0lUSERSQVc6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5iYWxhbmNlIC0gYWN0aW9uLnBheWxvYWQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuYmFsYW5jZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5iYWxhbmNlIC0gYWN0aW9uLnBheWxvYWRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBiYW5rUmVkdWNlcjsiLCIvKipcclxuICogVHV0YWogcG93aW5pZW4gem5hbGXFusSHIHNpxJkgXCJwb8WCxIVjem9ueVwiIHJlZHVjZXJcclxuICogUGFtacSZdGFqIG8gbmF6d2FjaCBww7NsLCBwb3dpbm55IGJ5xIcgdGFraWUgamFrIHcgdHJlxZtjaSB6YWRhbmlhXHJcbiAqXHJcbiAqIE5pZSB6YXBvbW5paiB0ZcW8IG8gZXhwb3JjaWUhXHJcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbWJpbmVkUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNvdW50ZXJSZWR1Y2VyIGZyb20gXCIuL2NvdW50ZXJcIjtcclxuaW1wb3J0IGJhbmtSZWR1Y2VyIGZyb20gXCIuL2JhbmtcIjtcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb3VudGVyOiBjb3VudGVyUmVkdWNlcixcclxuICAgIGJhbGFuY2U6IGJhbmtSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZWRSZWR1Y2VyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NzlhMzA5ZDFkZDEzOGU4N2VjNFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImRlcG9zaXRNb25leSIsIndpdGhkcmF3TW9uZXkiLCJjb21iaW5lZFJlZHVjZXIiLCJiYW5rQXBwIiwic3RhcnQiLCJyb290RWxlbWVudCIsImNyZWF0ZVVJIiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiaW5uZXJIVE1MIiwiZGVwb3NpdEVsIiwicXVlcnlTZWxlY3RvciIsIndpdGhkcmF3RWwiLCJzYWxkb0VsIiwiaW5wdXRFbCIsIl90aGlzIiwic3RvcmUiLCJpbm5lclRleHQiLCJjb25jYXQiLCJnZXRTdGF0ZSIsInN1YnNjcmliZSIsImJhbGFuY2UiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInZhbHVlIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiaW5pdGlhbFN0YXRlIiwiYmFua1JlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXJzIiwiY291bnRlclJlZHVjZXIiLCJjb3VudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==