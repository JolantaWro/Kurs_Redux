"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);




var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store;
  return {
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error
  };
};
var mapDispatchToProps = function mapDispatchToProps() {
  var dispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store.dispatch;
  return {
    fetchQuote: function fetchQuote() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.fetchQuoteAsync)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Quote__WEBPACK_IMPORTED_MODULE_2__["default"]));
// import React from "react";
//
// export default () => <div/>

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_FAV": () => (/* binding */ ADD_FAV),
/* harmony export */   "QUOTE_ERROR": () => (/* binding */ QUOTE_ERROR),
/* harmony export */   "QUOTE_FETCHED": () => (/* binding */ QUOTE_FETCHED),
/* harmony export */   "QUOTE_FETCHING": () => (/* binding */ QUOTE_FETCHING),
/* harmony export */   "fetchQuoteAsync": () => (/* binding */ fetchQuoteAsync),
/* harmony export */   "quoteError": () => (/* binding */ quoteError),
/* harmony export */   "quoteFetched": () => (/* binding */ quoteFetched),
/* harmony export */   "startFetching": () => (/* binding */ startFetching)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);

var QUOTE_FETCHING = "QUOTE_FETCHING";
var QUOTE_FETCHED = "QUOTE_FETCHED";
var QUOTE_ERROR = "QUOTE_ERROR";
var ADD_FAV = "ADD_FAV";
var startFetching = function startFetching() {
  return {
    type: QUOTE_FETCHING
  };
};
var quoteFetched = function quoteFetched(value) {
  return {
    type: QUOTE_FETCHED,
    payload: value
  };
};
var quoteError = function quoteError(value) {
  return {
    type: QUOTE_ERROR,
    payload: value
  };
};
var fetchQuoteAsync = function fetchQuoteAsync() {
  return function (dispatch) {
    dispatch(startFetching);
    _api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchQuote().then(function (response) {
      dispatch(quoteFetched({
        response: response
      }));
    })["catch"](function (err) {
      quoteError(err);
    });
  };
};

// const fetchQuoteAsync = () => {
//     return async function(dispatch) {
//         dispatch(startFetching());
//         try {
//             const quote = await api.fetchQuote();
//             dispatch(quoteFetched(quote));
//         } catch (error) {
//             dispatch(quoteError(error.message));
//         }
//     };
// };

// const { results } = await (await.response).json();



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31b5ba0dff87ef541360")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYjgwMTdkZjI2M2QyYjAyOTI0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNVO0FBQ0k7QUFDcUI7QUFFN0QsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBO0VBQUEsSUFBSUMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0csS0FBSztFQUFBLE9BQU07SUFDdENDLEtBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFLLENBQUNBLEtBQUs7SUFDeEJDLE9BQU8sRUFBRU4sS0FBSyxDQUFDSyxLQUFLLENBQUNDLE9BQU87SUFDNUJDLEtBQUssRUFBRVAsS0FBSyxDQUFDSyxLQUFLLENBQUNFO0VBQ3ZCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQTtFQUFBLElBQUlDLFFBQVEsR0FBQVIsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNHLEtBQUssQ0FBQ0ssUUFBUTtFQUFBLE9BQU07SUFDckRaLFVBQVUsRUFBRSxTQUFBQSxXQUFBO01BQUEsT0FBTVksUUFBUSxDQUFDWCwrREFBZSxFQUFFLENBQUM7SUFBQTtFQUNqRCxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlSCxvREFBTyxDQUFDSSxlQUFlLEVBQUVTLGtCQUFrQixDQUFDLENBQUNaLHlEQUFLLENBQUM7QUFDbEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ5QjtBQUV6QixJQUFNZSxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLElBQU1DLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLElBQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLElBQU1DLE9BQU8sR0FBRyxTQUFTO0FBRXpCLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQTtFQUFBLE9BQVU7SUFDekJDLElBQUksRUFBRUw7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUM3QkYsSUFBSSxFQUFFSixhQUFhO0lBQ25CTyxPQUFPLEVBQUVEO0VBRWIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUYsS0FBSztFQUFBLE9BQU07SUFDM0JGLElBQUksRUFBRUgsV0FBVztJQUNqQk0sT0FBTyxFQUFFRDtFQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTXBCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQTtFQUFBLE9BQVMsVUFBQ1csUUFBUSxFQUFLO0lBQ3hDQSxRQUFRLENBQUNNLGFBQWEsQ0FBQztJQUN2QkwsdURBQWMsRUFBRSxDQUNYVyxJQUFJLENBQUMsVUFBQ0MsUUFBUSxFQUFLO01BQ2hCYixRQUFRLENBQUNRLFlBQVksQ0FBQztRQUFDSyxRQUFRLEVBQVJBO01BQVEsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7TUFDWkgsVUFBVSxDQUFDRyxHQUFHLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0VBRVYsQ0FBQztBQUFBOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7VUM5Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1F1b3RlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFF1b3RlIGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlXCI7XG5pbXBvcnQge2ZldGNoUXVvdGUsIGZldGNoUXVvdGVBc3luY30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXN0b3JlKSA9PiAoe1xuICAgIHF1b3RlOiBzdGF0ZS5xdW90ZS5xdW90ZSxcbiAgICBsb2FkaW5nOiBzdGF0ZS5xdW90ZS5sb2FkaW5nLFxuICAgIGVycm9yOiBzdGF0ZS5xdW90ZS5lcnJvclxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoPXN0b3JlLmRpc3BhdGNoKSA9PiAoe1xuICAgIGZldGNoUXVvdGU6ICgpID0+IGRpc3BhdGNoKGZldGNoUXVvdGVBc3luYygpKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUXVvdGUpXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGRpdi8+IiwiaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpXCI7XG5cbmNvbnN0IFFVT1RFX0ZFVENISU5HID0gXCJRVU9URV9GRVRDSElOR1wiO1xuY29uc3QgUVVPVEVfRkVUQ0hFRCA9IFwiUVVPVEVfRkVUQ0hFRFwiO1xuY29uc3QgUVVPVEVfRVJST1IgPSBcIlFVT1RFX0VSUk9SXCI7XG5jb25zdCBBRERfRkFWID0gXCJBRERfRkFWXCI7XG5cbmNvbnN0IHN0YXJ0RmV0Y2hpbmcgPSAoKSA9PiAoe1xuICAgIHR5cGU6IFFVT1RFX0ZFVENISU5HXG59KTtcblxuY29uc3QgcXVvdGVGZXRjaGVkID0gKHZhbHVlKSA9PiAoe1xuICAgIHR5cGU6IFFVT1RFX0ZFVENIRUQsXG4gICAgcGF5bG9hZDogdmFsdWVcblxufSk7XG5cbmNvbnN0IHF1b3RlRXJyb3IgPSAodmFsdWUpID0+ICh7XG4gICAgdHlwZTogUVVPVEVfRVJST1IsXG4gICAgcGF5bG9hZDogdmFsdWVcbn0pO1xuXG5jb25zdCBmZXRjaFF1b3RlQXN5bmMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzdGFydEZldGNoaW5nKTtcbiAgICBhcGkuZmV0Y2hRdW90ZSgpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2gocXVvdGVGZXRjaGVkKHtyZXNwb25zZX0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcXVvdGVFcnJvcihlcnIpXG4gICAgICAgIH0pXG5cbn1cblxuLy8gY29uc3QgZmV0Y2hRdW90ZUFzeW5jID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiBhc3luYyBmdW5jdGlvbihkaXNwYXRjaCkge1xuLy8gICAgICAgICBkaXNwYXRjaChzdGFydEZldGNoaW5nKCkpO1xuLy8gICAgICAgICB0cnkge1xuLy8gICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBhd2FpdCBhcGkuZmV0Y2hRdW90ZSgpO1xuLy8gICAgICAgICAgICAgZGlzcGF0Y2gocXVvdGVGZXRjaGVkKHF1b3RlKSk7XG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICBkaXNwYXRjaChxdW90ZUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG4vLyB9O1xuXG4vLyBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IChhd2FpdC5yZXNwb25zZSkuanNvbigpO1xuXG5leHBvcnQgeyBRVU9URV9GRVRDSElORywgUVVPVEVfRkVUQ0hFRCwgUVVPVEVfRVJST1IsIEFERF9GQVYsIHN0YXJ0RmV0Y2hpbmcsIHF1b3RlRXJyb3IsIHF1b3RlRmV0Y2hlZCwgZmV0Y2hRdW90ZUFzeW5jIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMWI1YmEwZGZmODdlZjU0MTM2MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJRdW90ZSIsImZldGNoUXVvdGUiLCJmZXRjaFF1b3RlQXN5bmMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInN0b3JlIiwicXVvdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFwaSIsIlFVT1RFX0ZFVENISU5HIiwiUVVPVEVfRkVUQ0hFRCIsIlFVT1RFX0VSUk9SIiwiQUREX0ZBViIsInN0YXJ0RmV0Y2hpbmciLCJ0eXBlIiwicXVvdGVGZXRjaGVkIiwidmFsdWUiLCJwYXlsb2FkIiwicXVvdGVFcnJvciIsInRoZW4iLCJyZXNwb25zZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=