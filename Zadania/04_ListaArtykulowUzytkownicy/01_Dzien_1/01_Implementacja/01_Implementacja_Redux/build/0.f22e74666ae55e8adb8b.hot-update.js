"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_customStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
// Tu dodaj odpowiednie importy (createStore, akcje, reducer)



var myState = {
  value: 0
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1
  var myStore = (0,_redux_customStore__WEBPACK_IMPORTED_MODULE_0__.createStore)(_redux_reducers_counter__WEBPACK_IMPORTED_MODULE_1__["default"], myState);
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.increment)(5));
  myStore.dispatch((0,_redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__.decrement)(2));
  myStore.subscribe(function () {
    return console.log(myStore.getState());
  });
}

/***/ }),

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DECREMENT": () => (/* binding */ DECREMENT),
/* harmony export */   "INCREMENT": () => (/* binding */ INCREMENT),
/* harmony export */   "decrement": () => (/* binding */ decrement),
/* harmony export */   "increment": () => (/* binding */ increment)
/* harmony export */ });
// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var increment = function increment(value) {
  return {
    type: INCREMENT,
    payload: {
      value: value
    }
  };
};
var decrement = function decrement(value) {
  return {
    type: DECREMENT,
    payload: {
      value: value
    }
  };
};


/***/ }),

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
var createStore = function createStore(reducer, initialState) {
  var currentState = initialState;
  var listeners = [];
  return {
    dispatch: function dispatch(action) {
      currentState = reducer(currentState, action);
      listeners.forEach(function (listenerFunction) {
        return listenerFunctionr();
      });
    },
    getState: function getState() {
      return currentState;
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function () {
        listeners = listeners.filter(function (l) {
          return l !== listener;
        });
      };
    }
  };
};


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */

var counterReducer = function counterReducer(state, action) {
  switch (action.type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.INCREMENT:
      return state + 5;
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__.DECREMENT:
      return state - 2;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18ae53e08cbf21e8fd2b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMjJlNzQ2NjZhZTU1ZThhZGI4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0RDtBQUNOO0FBQ2M7QUFFcEUsSUFBTUssT0FBTyxHQUFHO0VBQ1pDLEtBQUssRUFBRTtBQUNYLENBQUM7QUFFRCw2QkFBZSxzQ0FBWTtFQUN6QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDRSxJQUFNQyxPQUFPLEdBQUdOLCtEQUFXLENBQUNDLCtEQUFjLEVBQUVHLE9BQU8sQ0FBQztFQUNwREUsT0FBTyxDQUFDQyxRQUFRLENBQUNKLHdFQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDOUJHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDTCx3RUFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzlCSSxPQUFPLENBQUNFLFNBQVMsQ0FBQztJQUFBLE9BQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUNLLFFBQVEsRUFBRSxDQUFDO0VBQUEsRUFBQztBQUU1RDs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsV0FBVztBQUM3QixJQUFNQyxTQUFTLEdBQUcsV0FBVztBQUc3QixJQUFNVixTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUUsS0FBSztFQUFBLE9BQU07SUFDMUJTLElBQUksRUFBRUYsU0FBUztJQUNmRyxPQUFPLEVBQUU7TUFDTFYsS0FBSyxFQUFMQTtJQUNKO0VBQ0osQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNSCxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSUcsS0FBSztFQUFBLE9BQU07SUFDMUJTLElBQUksRUFBRUQsU0FBUztJQUNmRSxPQUFPLEVBQUU7TUFDTFYsS0FBSyxFQUFMQTtJQUNKO0VBQ0osQ0FBQztBQUFBLENBQUM7Ozs7Ozs7Ozs7OztBQ25CRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1MLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJZ0IsT0FBTyxFQUFFQyxZQUFZLEVBQUs7RUFDM0MsSUFBSUMsWUFBWSxHQUFHRCxZQUFZO0VBQy9CLElBQUlFLFNBQVMsR0FBRyxFQUFFO0VBRWxCLE9BQU07SUFDRlosUUFBUSxXQUFBQSxTQUFDYSxNQUFNLEVBQUU7TUFDYkYsWUFBWSxHQUFHRixPQUFPLENBQUNFLFlBQVksRUFBRUUsTUFBTSxDQUFDO01BQzVDRCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxVQUFDQyxnQkFBZ0I7UUFBQSxPQUFLQyxpQkFBaUIsRUFBRTtNQUFBLEVBQUM7SUFDaEUsQ0FBQztJQUNEWixRQUFRLFdBQUFBLFNBQUEsRUFBRztNQUNQLE9BQU9PLFlBQVk7SUFDdkIsQ0FBQztJQUNEVixTQUFTLFdBQUFBLFVBQUNnQixRQUFRLEVBQUU7TUFDaEJMLFNBQVMsQ0FBQ00sSUFBSSxDQUFDRCxRQUFRLENBQUM7TUFDeEIsT0FBTyxZQUFZO1FBQ2ZMLFNBQVMsR0FBR0EsU0FBUyxDQUFDTyxNQUFNLENBQUMsVUFBQ0MsQ0FBQztVQUFBLE9BQUtBLENBQUMsS0FBSUgsUUFBUTtRQUFBLEVBQUM7TUFDdEQsQ0FBQztJQUNMO0VBQ0osQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrRDtBQUUvRCxJQUFNdkIsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJMkIsS0FBSyxFQUFFUixNQUFNLEVBQUs7RUFDdEMsUUFBUUEsTUFBTSxDQUFDTixJQUFJO0lBQ2YsS0FBS0YsOERBQVM7TUFDVixPQUFPZ0IsS0FBSyxHQUFHLENBQUM7SUFDcEIsS0FBS2YsOERBQVM7TUFDVixPQUFPZSxLQUFLLEdBQUcsQ0FBQztJQUNwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBQ0QsaUVBQWUzQixjQUFjOzs7Ozs7OztVQ2pCN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9jb3VudGVyQXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDFfSW1wbGVtZW50YWNqYS8wMV9JbXBsZW1lbnRhY2phX1JlZHV4L2pzL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvcmVkdXgvY3VzdG9tU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRHppZW5fMS8wMV9JbXBsZW1lbnRhY2phLzAxX0ltcGxlbWVudGFjamFfUmVkdXgvanMvcmVkdXgvcmVkdWNlcnMvY291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFR1IGRvZGFqIG9kcG93aWVkbmllIGltcG9ydHkgKGNyZWF0ZVN0b3JlLCBha2NqZSwgcmVkdWNlcilcclxuaW1wb3J0IGN1c3RvbVN0b3JlLCB7Y3JlYXRlU3RvcmV9IGZyb20gJy4vcmVkdXgvY3VzdG9tU3RvcmUnXHJcbmltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tIFwiLi9yZWR1eC9yZWR1Y2Vycy9jb3VudGVyXCI7XHJcbmltcG9ydCB7ZGVjcmVtZW50LCBpbmNyZW1lbnR9IGZyb20gXCIuL3JlZHV4L2FjdGlvbnMvY291bnRlckFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IG15U3RhdGUgPSB7XHJcbiAgICB2YWx1ZTogMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVHV0YWogemFpbXBsZW1lbnR1aiBhcGxpa2FjasSZIGNvdW50ZXIgd2cuIG9waXN1IHphZGFuaWFcclxuICAvLyBXIGtvbnNvbGkgcG93aW5ubyBwb2phd2nEhyBzacSZIG9kcG93aWVkbmlvOlxyXG4gIC8vXHJcbiAgLy8gZnJvbSBzdWJzY3JpYmUgNVxyXG4gIC8vIGZyb20gc3Vic2NyaWJlIDNcclxuICAvLyAxXHJcbiAgICBjb25zdCBteVN0b3JlID0gY3JlYXRlU3RvcmUoY291bnRlclJlZHVjZXIsIG15U3RhdGUpO1xyXG4gICAgbXlTdG9yZS5kaXNwYXRjaChpbmNyZW1lbnQoNSkpXHJcbiAgICBteVN0b3JlLmRpc3BhdGNoKGRlY3JlbWVudCgyKSlcclxuICAgIG15U3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKG15U3RvcmUuZ2V0U3RhdGUoKSkpXHJcblxyXG59XHJcbiIsIi8vIFR1dGFqIHphaW1wbGVtZW50dWogZHdpZSBha2NqZSBvcmF6IGFjdGlvbi1jcmVhdG9yc1xyXG4vLyBOYSBrb25pZWMgb2Rrb21lbnR1aiBvc3RhdG5pxIUgbGluacSZIGFieSB3eWVrc3BvcnRvd2HEhyBvZHBvd2llbmllIHptaWVubmUuXHJcblxyXG5jb25zdCBJTkNSRU1FTlQgPSAnSU5DUkVNRU5UJztcclxuY29uc3QgREVDUkVNRU5UID0gJ0RFQ1JFTUVOVCc7XHJcblxyXG5cclxuY29uc3QgaW5jcmVtZW50ID0gKHZhbHVlKSA9PiAoe1xyXG4gICAgdHlwZTogSU5DUkVNRU5ULFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCBkZWNyZW1lbnQgPSAodmFsdWUpID0+ICh7XHJcbiAgICB0eXBlOiBERUNSRU1FTlQsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgdmFsdWVcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgeyBJTkNSRU1FTlQsIERFQ1JFTUVOVCwgaW5jcmVtZW50LCBkZWNyZW1lbnQgfVxyXG4iLCIvKipcclxuICogWmFkYW5pZSB6IHd5a8WCYWRvd2PEhVxyXG4gKiBJbXBsZW1lbnRhY2phIHfFgmFzbmVnbyBTdG9yZVxyXG4gKi9cclxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlciwgaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgbGV0IGxpc3RlbmVycyA9IFtdO1xyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBkaXNwYXRjaChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gcmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lckZ1bmN0aW9uKSA9PiBsaXN0ZW5lckZ1bmN0aW9ucigpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsKSA9PiBsIT09IGxpc3RlbmVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdG9yZSB9O1xyXG4iLCIvKipcclxuICogVHV0YWogemFpbXBsZW1lbnR1aiByZWR1Y2VyIGRvIGFwbGlrYWNqaSBjb3VudGVyXHJcbiAqIFBhbWnEmXRhaiBhYnkgbmEga2/FhGN1IHd5ZWtzcG9ydG93YcSHIHphaW1wbGVtZW50b3dhbsSFIGZ1bmtjasSZOlxyXG4gKiBleHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuICovXHJcbmltcG9ydCB7REVDUkVNRU5ULCBJTkNSRU1FTlR9IGZyb20gXCIuLi9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zXCI7XHJcblxyXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDU7XHJcbiAgICAgICAgY2FzZSBERUNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSAtIDI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyUmVkdWNlcjtcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE4YWU1M2UwOGNiZjIxZThmZDJiXCIpIl0sIm5hbWVzIjpbImN1c3RvbVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb3VudGVyUmVkdWNlciIsImRlY3JlbWVudCIsImluY3JlbWVudCIsIm15U3RhdGUiLCJ2YWx1ZSIsIm15U3RvcmUiLCJkaXNwYXRjaCIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsIklOQ1JFTUVOVCIsIkRFQ1JFTUVOVCIsInR5cGUiLCJwYXlsb2FkIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnRTdGF0ZSIsImxpc3RlbmVycyIsImFjdGlvbiIsImZvckVhY2giLCJsaXN0ZW5lckZ1bmN0aW9uIiwibGlzdGVuZXJGdW5jdGlvbnIiLCJsaXN0ZW5lciIsInB1c2giLCJmaWx0ZXIiLCJsIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9