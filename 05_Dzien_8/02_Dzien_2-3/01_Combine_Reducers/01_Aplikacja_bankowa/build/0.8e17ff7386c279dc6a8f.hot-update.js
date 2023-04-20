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
    var _this2 = this;
    this.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__.depositMoney)(5));
    console.log(this.store.getState());
    this.depositEl.addEventListener("click", function () {
      console.log("klik", _this2.inputEl);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12ac4419b16e3413d842")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZTE3ZmY3Mzg2YzI3OWRjNmE4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0M7QUFDTztBQUNnQjtBQUNUO0FBRWhELElBQU1JLE9BQU8sR0FBRztFQUVkQyxLQUFLLFdBQUFBLE1BQUNDLFdBQVcsRUFBRTtJQUNqQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsV0FBVyxDQUFDO0lBQzFCLElBQUksQ0FBQ04sV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ1EsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCLENBQUM7RUFFRDtFQUNBO0VBQ0FGLFFBQVEsV0FBQUEsU0FBQ0QsV0FBVyxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDSSxTQUFTLDJSQVV6QjtFQUNILENBQUM7RUFFRDtFQUNBO0VBQ0FGLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1osSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSSxDQUFDTCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDM0QsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFDUCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDN0QsSUFBSSxDQUFDRSxPQUFPLEdBQUcsSUFBSSxDQUFDUixXQUFXLENBQUNNLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDeEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDVCxXQUFXLENBQUNNLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDeEQsQ0FBQztFQUVEO0VBQ0E7RUFDQTtFQUNBO0VBR0FaLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQUEsSUFBQWdCLEtBQUE7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR2pCLGtEQUFXLENBQUNHLDREQUFXLENBQUM7SUFDckM7O0lBRUE7O0lBRUEsSUFBSSxDQUFDYyxLQUFLLENBQUNDLFNBQVMsQ0FBQztNQUFBLE9BQU1GLEtBQUksQ0FBQ0YsT0FBTyxDQUFDSyxTQUFTLE1BQUFDLE1BQUEsQ0FBTUosS0FBSSxDQUFDRixPQUFPLFNBQU07SUFBQSxFQUFDO0lBQzFFO0lBQ0E7RUFFRixDQUFDO0VBR0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBTCxhQUFhLFdBQUFBLGNBQUEsRUFBRztJQUFBLElBQUFZLE1BQUE7SUFDZCxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssUUFBUSxDQUFDcEIsd0VBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQ3FCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1AsS0FBSyxDQUFDUSxRQUFRLEVBQUUsQ0FBQztJQUNsQyxJQUFJLENBQUNkLFNBQVMsQ0FBQ2UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDN0NILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUgsTUFBSSxDQUFDTixPQUFPLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0VBR0o7QUFDRixDQUFDO0FBRUQsaUVBQWVYLE9BQU87Ozs7Ozs7O1VDN0V0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgYmFuayBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcbmltcG9ydCB7ZGVwb3NpdE1vbmV5fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcbmltcG9ydCBiYW5rUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcblxyXG5jb25zdCBiYW5rQXBwID0ge1xyXG5cclxuICBzdGFydChyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9LFxyXG5cclxuICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXHJcbiAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ3aXRoZHJhd1wiPld5cMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcclxuICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XHJcbiAgICB0aGlzLndpdGhkcmF3RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2l0aGRyYXdcIik7XHJcbiAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgfSxcclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxyXG4gIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxyXG4gIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cclxuICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcclxuXHJcblxyXG4gIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGJhbmtSZWR1Y2VyKTtcclxuICAgIC8vIGxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGJhbmtSZWR1Y2VyKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKVxyXG5cclxuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgJHt0aGlzLnNhbGRvRWx9IFBMTmApO1xyXG4gICAgLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgJHt0aGlzLnNhbGRvRWx9IFBMTmApO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSlcclxuXHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIFcgdGVqIG1ldG9kemllIG5hbGXFvHkgcG9kcGnEhcSHIHBvZCBvZHBvd2llZG5pZSBwcnp5Y2lza2kgZXZlbnQgaGFuZGxlcnksXHJcbiAgLy8ga3TDs3JlIG9kcGFsxIUgbmFtIG9kcG93aWVkbmllIGFrY2plXHJcbiAgLy8gU2tvcnp5c3RhaiB6IGVsZW1lbnTDs3c6XHJcbiAgLy8gdGhpcy53aXRoZHJhd0VsXHJcbiAgLy8gdGhpcy5kZXBvc2l0RWxcclxuICBhcHBseUhhbmRsZXJzKCkge1xyXG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChkZXBvc2l0TW9uZXkoNSkpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLmdldFN0YXRlKCkpXHJcbiAgICB0aGlzLmRlcG9zaXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImtsaWtcIiwgdGhpcy5pbnB1dEVsKVxyXG4gICAgfSlcclxuXHJcblxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhbmtBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyYWM0NDE5YjE2ZTM0MTNkODQyXCIpIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYmFuayIsImRlcG9zaXRNb25leSIsImJhbmtSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsInN0b3JlIiwic3Vic2NyaWJlIiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiX3RoaXMyIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==