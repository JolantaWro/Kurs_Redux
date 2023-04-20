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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a56dff1bbcc05224cb71")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jODU1MGNlOTdlYWU5MmJjMTE0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtDO0FBQ3NDO0FBQ25CO0FBQ0w7QUFFaEQsSUFBTUssT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDUCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQWIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBaUIsS0FBQTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHbEIsa0RBQVcsQ0FBQ0csNkRBQWUsQ0FBQztJQUN6QyxJQUFJLENBQUNlLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO01BQUEsT0FBTUYsS0FBSSxDQUFDRixPQUFPLENBQUNLLFNBQVMsTUFBQUMsTUFBQSxDQUFNSixLQUFJLENBQUNDLEtBQUssQ0FBQ0ksUUFBUSxFQUFFLFNBQU07SUFBQSxFQUFDO0VBQ3JGLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FaLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWEsTUFBQTtJQUNkLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0QsTUFBSSxDQUFDTCxLQUFLLENBQUNPLFFBQVEsQ0FBQ3hCLHdFQUFZLENBQUN5QixRQUFRLENBQUNILE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQy9ESixNQUFJLENBQUNQLE9BQU8sQ0FBQ1csS0FBSyxHQUFHLElBQUk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDYixVQUFVLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzlDRCxNQUFJLENBQUNMLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIseUVBQWEsQ0FBQ3dCLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDUCxPQUFPLENBQUNXLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDaEVKLE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLEdBQUcsSUFBSTtJQUMzQixDQUFDLENBQUM7RUFHSjtBQUNGLENBQUM7QUFFRCxpRUFBZXRCLE9BQU87Ozs7Ozs7O1VDekV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leSwgd2l0aGRyYXdNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgY29tYmluZWRSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCBiYW5rUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcblxyXG5jb25zdCBiYW5rQXBwID0ge1xyXG5cclxuICBzdGFydChyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9LFxyXG5cclxuICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXHJcbiAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ3aXRoZHJhd1wiPld5cMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcclxuICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XHJcbiAgICB0aGlzLndpdGhkcmF3RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2l0aGRyYXdcIik7XHJcbiAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgfSxcclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxyXG4gIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxyXG4gIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cclxuICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcclxuXHJcblxyXG4gIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGNvbWJpbmVkUmVkdWNlcik7XHJcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdG9yZS5nZXRTdGF0ZSgpfSBQTE5gKTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcclxuICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcclxuICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcclxuICAvLyB0aGlzLndpdGhkcmF3RWxcclxuICAvLyB0aGlzLmRlcG9zaXRFbFxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGRlcG9zaXRNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgICAgdGhpcy5pbnB1dEVsLnZhbHVlID0gbnVsbDtcclxuICAgIH0pXHJcbiAgICB0aGlzLndpdGhkcmF3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh3aXRoZHJhd01vbmV5KHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSkpKVxyXG4gICAgICB0aGlzLmlucHV0RWwudmFsdWUgPSBudWxsO1xyXG4gICAgfSlcclxuXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbmtBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE1NmRmZjFiYmNjMDUyMjRjYjcxXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiZGVwb3NpdE1vbmV5Iiwid2l0aGRyYXdNb25leSIsImNvbWJpbmVkUmVkdWNlciIsImJhbmtSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsInN0b3JlIiwic3Vic2NyaWJlIiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiZ2V0U3RhdGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==