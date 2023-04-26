"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_FAV": () => (/* binding */ ADD_FAV),
/* harmony export */   "QUOTE_ERROR": () => (/* binding */ QUOTE_ERROR),
/* harmony export */   "QUOTE_FETCHED": () => (/* binding */ QUOTE_FETCHED),
/* harmony export */   "QUOTE_FETCHING": () => (/* binding */ QUOTE_FETCHING),
/* harmony export */   "fetchQuote": () => (/* binding */ fetchQuote),
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
var fetchQuote = function fetchQuote() {
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
/******/ 	__webpack_require__.h = () => ("cb8017df263d2b029247")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZGI4NmVhYWE3ZDY3YzhlYmVhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUV6QixJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBQ3ZDLElBQU1DLGFBQWEsR0FBRyxlQUFlO0FBQ3JDLElBQU1DLFdBQVcsR0FBRyxhQUFhO0FBQ2pDLElBQU1DLE9BQU8sR0FBRyxTQUFTO0FBRXpCLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQTtFQUFBLE9BQVU7SUFDekJDLElBQUksRUFBRUw7RUFDVixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUM3QkYsSUFBSSxFQUFFSixhQUFhO0lBQ25CTyxPQUFPLEVBQUVEO0VBRWIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUYsS0FBSztFQUFBLE9BQU07SUFDM0JGLElBQUksRUFBRUgsV0FBVztJQUNqQk0sT0FBTyxFQUFFRDtFQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUE7RUFBQSxPQUFTLFVBQUNDLFFBQVEsRUFBSztJQUNuQ0EsUUFBUSxDQUFDUCxhQUFhLENBQUM7SUFDdkJMLHVEQUFjLEVBQUUsQ0FDWGEsSUFBSSxDQUFDLFVBQUNDLFFBQVEsRUFBSztNQUNoQkYsUUFBUSxDQUFDTCxZQUFZLENBQUM7UUFBQ08sUUFBUSxFQUFSQTtNQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ1pMLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDO0lBQ25CLENBQUMsQ0FBQztFQUVWLENBQUM7QUFBQTs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O1VDOUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaVwiO1xuXG5jb25zdCBRVU9URV9GRVRDSElORyA9IFwiUVVPVEVfRkVUQ0hJTkdcIjtcbmNvbnN0IFFVT1RFX0ZFVENIRUQgPSBcIlFVT1RFX0ZFVENIRURcIjtcbmNvbnN0IFFVT1RFX0VSUk9SID0gXCJRVU9URV9FUlJPUlwiO1xuY29uc3QgQUREX0ZBViA9IFwiQUREX0ZBVlwiO1xuXG5jb25zdCBzdGFydEZldGNoaW5nID0gKCkgPT4gKHtcbiAgICB0eXBlOiBRVU9URV9GRVRDSElOR1xufSk7XG5cbmNvbnN0IHF1b3RlRmV0Y2hlZCA9ICh2YWx1ZSkgPT4gKHtcbiAgICB0eXBlOiBRVU9URV9GRVRDSEVELFxuICAgIHBheWxvYWQ6IHZhbHVlXG5cbn0pO1xuXG5jb25zdCBxdW90ZUVycm9yID0gKHZhbHVlKSA9PiAoe1xuICAgIHR5cGU6IFFVT1RFX0VSUk9SLFxuICAgIHBheWxvYWQ6IHZhbHVlXG59KTtcblxuY29uc3QgZmV0Y2hRdW90ZSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0YXJ0RmV0Y2hpbmcpO1xuICAgIGFwaS5mZXRjaFF1b3RlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChxdW90ZUZldGNoZWQoe3Jlc3BvbnNlfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBxdW90ZUVycm9yKGVycilcbiAgICAgICAgfSlcblxufVxuXG4vLyBjb25zdCBmZXRjaFF1b3RlQXN5bmMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4vLyAgICAgICAgIGRpc3BhdGNoKHN0YXJ0RmV0Y2hpbmcoKSk7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICBjb25zdCBxdW90ZSA9IGF3YWl0IGFwaS5mZXRjaFF1b3RlKCk7XG4vLyAgICAgICAgICAgICBkaXNwYXRjaChxdW90ZUZldGNoZWQocXVvdGUpKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGRpc3BhdGNoKHF1b3RlRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIH07XG5cbi8vIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgKGF3YWl0LnJlc3BvbnNlKS5qc29uKCk7XG5cbmV4cG9ydCB7IFFVT1RFX0ZFVENISU5HLCBRVU9URV9GRVRDSEVELCBRVU9URV9FUlJPUiwgQUREX0ZBViwgc3RhcnRGZXRjaGluZywgcXVvdGVFcnJvciwgcXVvdGVGZXRjaGVkLCBmZXRjaFF1b3RlIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYjgwMTdkZjI2M2QyYjAyOTI0N1wiKSJdLCJuYW1lcyI6WyJhcGkiLCJRVU9URV9GRVRDSElORyIsIlFVT1RFX0ZFVENIRUQiLCJRVU9URV9FUlJPUiIsIkFERF9GQVYiLCJzdGFydEZldGNoaW5nIiwidHlwZSIsInF1b3RlRmV0Y2hlZCIsInZhbHVlIiwicGF5bG9hZCIsInF1b3RlRXJyb3IiLCJmZXRjaFF1b3RlIiwiZGlzcGF0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9