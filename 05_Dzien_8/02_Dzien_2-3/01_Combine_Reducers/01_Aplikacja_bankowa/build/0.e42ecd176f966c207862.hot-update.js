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
    console.log(this.store.getState());
    this.store.subscribe(function () {
      return _this.saldoEl.innerText = "".concat(_this.saldoEl, " PLN");
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
/******/ 	__webpack_require__.h = () => ("9ee077d18006e131401d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNDJlY2QxNzZmOTY2YzIwNzg2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0M7QUFDTztBQUNnQjtBQUNUO0FBRWhELElBQU1JLE9BQU8sR0FBRztFQUVkQyxLQUFLLFdBQUFBLE1BQUNDLFdBQVcsRUFBRTtJQUNqQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsV0FBVyxDQUFDO0lBQzFCLElBQUksQ0FBQ04sV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ1EsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCLENBQUM7RUFFRDtFQUNBO0VBQ0FGLFFBQVEsV0FBQUEsU0FBQ0QsV0FBVyxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDSSxTQUFTLDJSQVV6QjtFQUNILENBQUM7RUFFRDtFQUNBO0VBQ0FGLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1osSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDM0QsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDUCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxPQUFPLEdBQUcsSUFBSSxDQUFDUixXQUFXLENBQUNNLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDeEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDVCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDeEQsQ0FBQztFQUVEO0VBQ0E7RUFDQTtFQUNBO0VBR0FaLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQUEsSUFBQWdCLEtBQUE7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR2pCLGtEQUFXLENBQUNHLDREQUFXLENBQUM7SUFDckNlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUUsQ0FBQztJQUVsQyxJQUFJLENBQUNILEtBQUssQ0FBQ0ksU0FBUyxDQUFDO01BQUEsT0FBTUwsS0FBSSxDQUFDRixPQUFPLENBQUNRLFNBQVMsTUFBQUMsTUFBQSxDQUFNUCxLQUFJLENBQUNGLE9BQU8sU0FBTTtJQUFBLEVBQUM7RUFFNUUsQ0FBQztFQUdEO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQUwsYUFBYSxXQUFBQSxjQUFBLEVBQUcsQ0FFaEI7QUFDRixDQUFDO0FBRUQsaUVBQWVMLE9BQU87Ozs7Ozs7O1VDbkV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgYmFuayBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcbmltcG9ydCB7ZGVwb3NpdE1vbmV5fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcbmltcG9ydCBiYW5rUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcblxyXG5jb25zdCBiYW5rQXBwID0ge1xyXG5cclxuICBzdGFydChyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9LFxyXG5cclxuICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXHJcbiAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ3aXRoZHJhd1wiPld5cMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcclxuICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XHJcbiAgICB0aGlzLndpdGhkcmF3RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2l0aGRyYXdcIik7XHJcbiAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgfSxcclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxyXG4gIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxyXG4gIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cclxuICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcclxuXHJcblxyXG4gIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGJhbmtSZWR1Y2VyKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuZ2V0U3RhdGUoKSlcclxuXHJcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zYWxkb0VsfSBQTE5gKTtcclxuXHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG5cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYW5rQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZWUwNzdkMTgwMDZlMTMxNDAxZFwiKSJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImJhbmsiLCJkZXBvc2l0TW9uZXkiLCJiYW5rUmVkdWNlciIsImJhbmtBcHAiLCJzdGFydCIsInJvb3RFbGVtZW50IiwiY3JlYXRlVUkiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJpbm5lckhUTUwiLCJkZXBvc2l0RWwiLCJxdWVyeVNlbGVjdG9yIiwid2l0aGRyYXdFbCIsInNhbGRvRWwiLCJpbnB1dEVsIiwiX3RoaXMiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInN1YnNjcmliZSIsImlubmVyVGV4dCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=