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
    this.store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_redux_reducers_bank__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
/******/ 	__webpack_require__.h = () => ("c8550ce97eae92bc1147")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZjU2NmJkZDFiNTFiZTVhOGFjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtDO0FBQ3NDO0FBQ25CO0FBQ0w7QUFFaEQsSUFBTUssT0FBTyxHQUFHO0VBRWRDLEtBQUssV0FBQUEsTUFBQ0MsV0FBVyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxXQUFXLENBQUM7SUFDMUIsSUFBSSxDQUFDUCxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDUyxXQUFXLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEVBQUU7RUFDdEIsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsUUFBUSxXQUFBQSxTQUFDRCxXQUFXLEVBQUU7SUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNJLFNBQVMsMlJBVXpCO0VBQ0gsQ0FBQztFQUVEO0VBQ0E7RUFDQUYsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFDWixJQUFJLENBQUNHLFNBQVMsR0FBRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUMzRCxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNQLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM3RCxJQUFJLENBQUNFLE9BQU8sR0FBRyxJQUFJLENBQUNSLFdBQVcsQ0FBQ00sYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN4RCxJQUFJLENBQUNHLE9BQU8sR0FBRyxJQUFJLENBQUNULFdBQVcsQ0FBQ00sYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RCxDQUFDO0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFHQWIsV0FBVyxXQUFBQSxZQUFBLEVBQUc7SUFBQSxJQUFBaUIsS0FBQTtJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHbEIsa0RBQVcsQ0FBQ0ksNERBQVcsQ0FBQztJQUNyQyxJQUFJLENBQUNjLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO01BQUEsT0FBTUYsS0FBSSxDQUFDRixPQUFPLENBQUNLLFNBQVMsTUFBQUMsTUFBQSxDQUFNSixLQUFJLENBQUNDLEtBQUssQ0FBQ0ksUUFBUSxFQUFFLFNBQU07SUFBQSxFQUFDO0VBQ3JGLENBQUM7RUFHRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0FaLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQWEsTUFBQTtJQUNkLElBQUksQ0FBQ1gsU0FBUyxDQUFDWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUM3Q0QsTUFBSSxDQUFDTCxLQUFLLENBQUNPLFFBQVEsQ0FBQ3hCLHdFQUFZLENBQUN5QixRQUFRLENBQUNILE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQy9ESixNQUFJLENBQUNQLE9BQU8sQ0FBQ1csS0FBSyxHQUFHLElBQUk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxDQUFDYixVQUFVLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzlDRCxNQUFJLENBQUNMLEtBQUssQ0FBQ08sUUFBUSxDQUFDdkIseUVBQWEsQ0FBQ3dCLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDUCxPQUFPLENBQUNXLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDaEVKLE1BQUksQ0FBQ1AsT0FBTyxDQUFDVyxLQUFLLEdBQUcsSUFBSTtJQUMzQixDQUFDLENBQUM7RUFHSjtBQUNGLENBQUM7QUFFRCxpRUFBZXRCLE9BQU87Ozs7Ozs7O1VDekV0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9Db21iaW5lX1JlZHVjZXJzLzAxX0FwbGlrYWNqYV9iYW5rb3dhL2pzL2JhbmtBcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUdSBwb3dpbm55IHNpxJkgem5hbGXFusSHIG9kcG93aWVkbmllIGltcG9ydHlcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge2RlcG9zaXRNb25leSwgd2l0aGRyYXdNb25leX0gZnJvbSBcIi4vcmVkdXgvYWN0aW9ucy9iYW5rQWN0aW9uc1wiO1xyXG5pbXBvcnQgY29tYmluZWRSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCBiYW5rUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9iYW5rXCI7XHJcblxyXG5jb25zdCBiYW5rQXBwID0ge1xyXG5cclxuICBzdGFydChyb290RWxlbWVudCkge1xyXG4gICAgdGhpcy5jcmVhdGVVSShyb290RWxlbWVudCk7XHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlKCk7XHJcbiAgICB0aGlzLmNvbGxlY3RSZWZzKCk7XHJcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcclxuICB9LFxyXG5cclxuICAvLyBUZWogbWV0b2R5IG5pZSBwb3dpbm5pxZtteSBydXN6YcSHIDopXHJcbiAgLy8gVHdvcnp5bXkgdHUgc3phYmxvbiBVSVxyXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+U2FsZG86PHNwYW4+MDwvc3Bhbj48L2gxPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm1vbmV5XCIgLz5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ3aXRoZHJhd1wiPld5cMWCYcSHPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVwb3NpdFwiPldwxYJhxIc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIC8vIFR1dGFqIHpiaWVyYW15IHJlZmVyZW5jamUgZG8gb2Rwb3dpZWRuaWNoIGVsZW1lbnTDs3dcclxuICAvLyBUZWogbWV0b2R5IHRlxbwgbmllIHRyemViYSB6bWllbmlhxIcgOylcclxuICBjb2xsZWN0UmVmcygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlcG9zaXRcIik7XHJcbiAgICB0aGlzLndpdGhkcmF3RWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2l0aGRyYXdcIik7XHJcbiAgICB0aGlzLnNhbGRvRWwgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMSBzcGFuXCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgfSxcclxuXHJcbiAgLy8gVyB0ZWogbWV0b2R6aWUgbmFsZcW8eSB1dHdvcnp5xIcgbm93eSBzdG9yZVxyXG4gIC8vIE5hc3TEmXBuaWUgemFwaXNhxIcgc2nEmSBuYSB6bWlhbnkgaSBuYSBrYcW8ZMSFIHogbmljaFxyXG4gIC8vIHphbWllbmnEhyB3YXJ0b8WbxIcgdGVrc3R1IHcgZWxlbWVuY2llIGBzYWxkb0VsYCBuYSB3YXJ0b8WbxIcgemUgc3RvcmUgKyBQTE5cclxuICAvLyBucC4gdGhpcy5zYWxkb0VsLmlubmVyVGV4dCA9IGB3YXJ0b3NjLXplLXN0b3JlIFBMTmBcclxuXHJcblxyXG4gIGNyZWF0ZVN0b3JlKCkge1xyXG4gICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKGJhbmtSZWR1Y2VyKTtcclxuICAgIHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2FsZG9FbC5pbm5lclRleHQgPSBgJHt0aGlzLnN0b3JlLmdldFN0YXRlKCl9IFBMTmApO1xyXG4gIH0sXHJcblxyXG5cclxuICAvLyBXIHRlaiBtZXRvZHppZSBuYWxlxbx5IHBvZHBpxIXEhyBwb2Qgb2Rwb3dpZWRuaWUgcHJ6eWNpc2tpIGV2ZW50IGhhbmRsZXJ5LFxyXG4gIC8vIGt0w7NyZSBvZHBhbMSFIG5hbSBvZHBvd2llZG5pZSBha2NqZVxyXG4gIC8vIFNrb3J6eXN0YWogeiBlbGVtZW50w7N3OlxyXG4gIC8vIHRoaXMud2l0aGRyYXdFbFxyXG4gIC8vIHRoaXMuZGVwb3NpdEVsXHJcbiAgYXBwbHlIYW5kbGVycygpIHtcclxuICAgIHRoaXMuZGVwb3NpdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goZGVwb3NpdE1vbmV5KHBhcnNlSW50KHRoaXMuaW5wdXRFbC52YWx1ZSkpKVxyXG4gICAgICB0aGlzLmlucHV0RWwudmFsdWUgPSBudWxsO1xyXG4gICAgfSlcclxuICAgIHRoaXMud2l0aGRyYXdFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHdpdGhkcmF3TW9uZXkocGFyc2VJbnQodGhpcy5pbnB1dEVsLnZhbHVlKSkpXHJcbiAgICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IG51bGw7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFua0FwcDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzg1NTBjZTk3ZWFlOTJiYzExNDdcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJkZXBvc2l0TW9uZXkiLCJ3aXRoZHJhd01vbmV5IiwiY29tYmluZWRSZWR1Y2VyIiwiYmFua1JlZHVjZXIiLCJiYW5rQXBwIiwic3RhcnQiLCJyb290RWxlbWVudCIsImNyZWF0ZVVJIiwiY29sbGVjdFJlZnMiLCJhcHBseUhhbmRsZXJzIiwiaW5uZXJIVE1MIiwiZGVwb3NpdEVsIiwicXVlcnlTZWxlY3RvciIsIndpdGhkcmF3RWwiLCJzYWxkb0VsIiwiaW5wdXRFbCIsIl90aGlzIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJpbm5lclRleHQiLCJjb25jYXQiLCJnZXRTdGF0ZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaCIsInBhcnNlSW50IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9