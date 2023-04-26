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
  createStore: function createStore() {
    var _this = this;
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      balance: 0
    });
    this.saldoEl.innerText = "".concat(this.store.getState().balance);
    this.store.subscribe(function () {
      return _this.saldoEl.innerText = "".concat(_this.store.getState().store.balance, " PLN");
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
/******/ 	__webpack_require__.h = () => ("c8e9842697463c64fa82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOGZhNmY4OTZhYjYyNzE2ZmExYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0M7QUFDc0M7QUFDdkI7QUFFakQsSUFBTUksT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDTixXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUSxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQVosV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBZ0IsS0FBQTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHakIsa0RBQVcsQ0FBQ0csNkRBQVcsRUFBRTtNQUFDZSxPQUFPLEVBQUU7SUFBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDSixPQUFPLENBQUNLLFNBQVMsTUFBQUMsTUFBQSxDQUFNLElBQUksQ0FBQ0gsS0FBSyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0gsT0FBTyxDQUFFO0lBQzNELElBQUksQ0FBQ0QsS0FBSyxDQUFDSyxTQUFTLENBQUM7TUFBQSxPQUFNTixLQUFJLENBQUNGLE9BQU8sQ0FBQ0ssU0FBUyxNQUFBQyxNQUFBLENBQU1KLEtBQUksQ0FBQ0MsS0FBSyxDQUFDSSxRQUFRLEVBQUUsQ0FBQ0osS0FBSyxDQUFDQyxPQUFPLFNBQU07SUFBQSxFQUFDO0VBQ25HLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FULGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWMsTUFBQTtJQUNkLElBQUksQ0FBQ1osU0FBUyxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0QsTUFBSSxDQUFDTixLQUFLLENBQUNRLFFBQVEsQ0FBQ3hCLHdFQUFZLENBQUN5QixRQUFRLENBQUNILE1BQUksQ0FBQ1IsT0FBTyxDQUFDWSxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQy9ESixNQUFJLENBQUNSLE9BQU8sQ0FBQ1ksS0FBSyxHQUFHLElBQUk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDZCxVQUFVLENBQUNXLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzlDRCxNQUFJLENBQUNOLEtBQUssQ0FBQ1EsUUFBUSxDQUFDdkIseUVBQWEsQ0FBQ3dCLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDUixPQUFPLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDaEVKLE1BQUksQ0FBQ1IsT0FBTyxDQUFDWSxLQUFLLEdBQUcsSUFBSTtJQUMzQixDQUFDLENBQUM7RUFHSjtBQUNGLENBQUM7QUFFRCxpRUFBZXZCLE9BQU87Ozs7Ozs7O1VDekV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leSwgd2l0aGRyYXdNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmNvbnN0IGJhbmtBcHAgPSB7XHJcblxyXG4gIHN0YXJ0KHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcclxuICAgIHRoaXMuY3JlYXRlU3RvcmUoKTtcclxuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcclxuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFRlaiBtZXRvZHkgbmllIHBvd2lubmnFm215IHJ1c3phxIcgOilcclxuICAvLyBUd29yenlteSB0dSBzemFibG9uIFVJXHJcbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TYWxkbzo8c3Bhbj4wPC9zcGFuPjwvaDE+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAkOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibW9uZXlcIiAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cIndpdGhkcmF3XCI+V3lwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJkZXBvc2l0XCI+V3DFgmHEhzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgLy8gVHV0YWogemJpZXJhbXkgcmVmZXJlbmNqZSBkbyBvZHBvd2llZG5pY2ggZWxlbWVudMOzd1xyXG4gIC8vIFRlaiBtZXRvZHkgdGXFvCBuaWUgdHJ6ZWJhIHptaWVuaWHEhyA7KVxyXG4gIGNvbGxlY3RSZWZzKCkge1xyXG4gICAgdGhpcy5kZXBvc2l0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVwb3NpdFwiKTtcclxuICAgIHRoaXMud2l0aGRyYXdFbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aXRoZHJhd1wiKTtcclxuICAgIHRoaXMuc2FsZG9FbCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImgxIHNwYW5cIik7XHJcbiAgICB0aGlzLmlucHV0RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICB9LFxyXG5cclxuICAvLyBXIHRlaiBtZXRvZHppZSBuYWxlxbx5IHV0d29yennEhyBub3d5IHN0b3JlXHJcbiAgLy8gTmFzdMSZcG5pZSB6YXBpc2HEhyBzacSZIG5hIHptaWFueSBpIG5hIGthxbxkxIUgeiBuaWNoXHJcbiAgLy8gemFtaWVuacSHIHdhcnRvxZvEhyB0ZWtzdHUgdyBlbGVtZW5jaWUgYHNhbGRvRWxgIG5hIHdhcnRvxZvEhyB6ZSBzdG9yZSArIFBMTlxyXG4gIC8vIG5wLiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYHdhcnRvc2MtemUtc3RvcmUgUExOYFxyXG5cclxuXHJcbiAgY3JlYXRlU3RvcmUoKSB7XHJcbiAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHtiYWxhbmNlOiAwfSk7XHJcbiAgICB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdG9yZS5nZXRTdGF0ZSgpLmJhbGFuY2V9YFxyXG4gICAgdGhpcy5zdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGAke3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zdG9yZS5iYWxhbmNlfSBQTE5gKTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcclxuICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcclxuICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcclxuICAvLyB0aGlzLndpdGhkcmF3RWxcclxuICAvLyB0aGlzLmRlcG9zaXRFbFxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGRlcG9zaXRNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcbiAgICB0aGlzLndpdGhkcmF3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh3aXRoZHJhd01vbmV5KHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSkpKVxyXG4gICAgICB0aGlzLmlucHV0RWwudmFsdWUgPSBudWxsO1xyXG4gICAgfSlcclxuXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbmtBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM4ZTk4NDI2OTc0NjNjNjRmYTgyXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiZGVwb3NpdE1vbmV5Iiwid2l0aGRyYXdNb25leSIsInJvb3RSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsInN0b3JlIiwiYmFsYW5jZSIsImlubmVyVGV4dCIsImNvbmNhdCIsImdldFN0YXRlIiwic3Vic2NyaWJlIiwiX3RoaXMyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoIiwicGFyc2VJbnQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=