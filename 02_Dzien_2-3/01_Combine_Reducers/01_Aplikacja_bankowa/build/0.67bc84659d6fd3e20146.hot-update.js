self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0__);
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
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)((_redux_reducers_bank__WEBPACK_IMPORTED_MODULE_0___default()));
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
      _this2.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__.depositMoney)(parseInt(_this2.inputEl.value)));
    });
    this.withdrawEl.addEventListener("click", function () {
      _this2.store.dispatch((0,_redux_actions_bankActions__WEBPACK_IMPORTED_MODULE_1__.withdrawMoney)(parseInt(_this2.inputEl.value)));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bankApp);

/***/ }),

/***/ 25:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\02_Dzien_2-3\\01_Combine_Reducers\\01_Aplikacja_bankowa\\js\\redux\\reducers\\bank.js: Unexpected token, expected \"(\" (16:4)\n\n\u001b[0m \u001b[90m 14 |\u001b[39m         \u001b[36mcase\u001b[39m \u001b[33mWITHDRAW\u001b[39m\u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m             \u001b[36mif\u001b[39m \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 16 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m bankReducer\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.unexpected (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3291:16)\n    at JSXParserMixin.expect (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3633:28)\n    at JSXParserMixin.parseHeaderExpression (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:12822:10)\n    at JSXParserMixin.parseIfStatement (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:12915:22)\n    at JSXParserMixin.parseStatementContent (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:12575:21)\n    at JSXParserMixin.parseStatementLike (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:12544:17)\n    at JSXParserMixin.parseStatementListItem (C:\\Jolanta\\DodacDOGIT\\Tymczasowy\\ONL_FSB_E_23_Redux\\node_modules\\@babel\\parser\\lib\\index.js:12524:17)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4aa8ad4fb9e02d6ee9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42N2JjODQ2NTlkNmZkM2UyMDE0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtDO0FBQ087QUFDK0I7QUFDeEI7QUFFaEQsSUFBTUssT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDUCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQWIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBaUIsS0FBQTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHbEIsa0RBQVcsQ0FBQ0ksNkRBQVcsQ0FBQztJQUVyQyxJQUFJLENBQUNjLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO01BQUEsT0FBTUYsS0FBSSxDQUFDRixPQUFPLENBQUNLLFNBQVMsTUFBQUMsTUFBQSxDQUFNSixLQUFJLENBQUNDLEtBQUssQ0FBQ0ksUUFBUSxFQUFFLFNBQU07SUFBQSxFQUFDO0VBQ3JGLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FaLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWEsTUFBQTtJQUNkLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0QsTUFBSSxDQUFDTCxLQUFLLENBQUNPLFFBQVEsQ0FBQ3ZCLHdFQUFZLENBQUN3QixRQUFRLENBQUNILE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztJQUNGLElBQUksQ0FBQ2IsVUFBVSxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM5Q0QsTUFBSSxDQUFDTCxLQUFLLENBQUNPLFFBQVEsQ0FBQ3RCLHlFQUFhLENBQUN1QixRQUFRLENBQUNILE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUVKO0FBQ0YsQ0FBQztBQUVELGlFQUFldEIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O1VDdkV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgYmFuayBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcbmltcG9ydCB7ZGVwb3NpdE1vbmV5LCB3aXRoZHJhd01vbmV5fSBmcm9tIFwiLi9yZWR1eC9hY3Rpb25zL2JhbmtBY3Rpb25zXCI7XHJcbmltcG9ydCBiYW5rUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcblxyXG5jb25zdCBiYW5rQXBwID0ge1xyXG5cclxuICBzdGFydChyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9LFxyXG5cclxuICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXHJcbiAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ3aXRoZHJhd1wiPld5cMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcclxuICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XHJcbiAgICB0aGlzLndpdGhkcmF3RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2l0aGRyYXdcIik7XHJcbiAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgfSxcclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxyXG4gIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxyXG4gIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cclxuICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcclxuXHJcblxyXG4gIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGJhbmtSZWR1Y2VyKTtcclxuXHJcbiAgICB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNhbGRvRWwuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdG9yZS5nZXRTdGF0ZSgpfSBQTE5gKTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSBwb2RwacSFxIcgcG9kIG9kcG93aWVkbmllIHByenljaXNraSBldmVudCBoYW5kbGVyeSxcclxuICAvLyBrdMOzcmUgb2RwYWzEhSBuYW0gb2Rwb3dpZWRuaWUgYWtjamVcclxuICAvLyBTa29yenlzdGFqIHogZWxlbWVudMOzdzpcclxuICAvLyB0aGlzLndpdGhkcmF3RWxcclxuICAvLyB0aGlzLmRlcG9zaXRFbFxyXG4gIGFwcGx5SGFuZGxlcnMoKSB7XHJcbiAgICB0aGlzLmRlcG9zaXRFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGRlcG9zaXRNb25leShwYXJzZUludCh0aGlzLmlucHV0RWwudmFsdWUpKSlcclxuICAgIH0pXHJcbiAgICB0aGlzLndpdGhkcmF3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh3aXRoZHJhd01vbmV5KHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSkpKVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFua0FwcDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzRhYThhZDRmYjllMDJkNmVlOWVcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJiYW5rIiwiZGVwb3NpdE1vbmV5Iiwid2l0aGRyYXdNb25leSIsImJhbmtSZWR1Y2VyIiwiYmFua0FwcCIsInN0YXJ0Iiwicm9vdEVsZW1lbnQiLCJjcmVhdGVVSSIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsImlubmVySFRNTCIsImRlcG9zaXRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aXRoZHJhd0VsIiwic2FsZG9FbCIsImlucHV0RWwiLCJfdGhpcyIsInN0b3JlIiwic3Vic2NyaWJlIiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiZ2V0U3RhdGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2giLCJwYXJzZUludCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==