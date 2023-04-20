self["webpackHotUpdatees6_react"](0,{

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redux_actions__WEBPACK_IMPORTED_MODULE_3__);




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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/06_Dzien_9-10/01_Asynchronicznosc/01_Zadanie/js/redux/actions.js: Export 'fetchQuoteAsync' is not defined. (49:103)\n\n\u001b[0m \u001b[90m 47 |\u001b[39m \u001b[90m// const { results } = await (await.response).json();\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 48 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 49 |\u001b[39m \u001b[36mexport\u001b[39m { \u001b[33mQUOTE_FETCHING\u001b[39m\u001b[33m,\u001b[39m \u001b[33mQUOTE_FETCHED\u001b[39m\u001b[33m,\u001b[39m \u001b[33mQUOTE_ERROR\u001b[39m\u001b[33m,\u001b[39m \u001b[33mADD_FAV\u001b[39m\u001b[33m,\u001b[39m startFetching\u001b[33m,\u001b[39m quoteError\u001b[33m,\u001b[39m quoteFetched\u001b[33m,\u001b[39m fetchQuoteAsync }\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                                                        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at instantiate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.parseProgram (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:12438:14)\n    at JSXParserMixin.parseTopLevel (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:12425:25)\n    at JSXParserMixin.parse (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:14245:10)\n    at parse (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:14286:38)\n    at parser (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/core/lib/transformation/index.js:44:43)");

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var initialState = {
  loading: false,
  error: "",
  quote: null
};
function reducerQuote() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHING:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHED:
      {
        return {
          loading: false,
          quote: action.payload,
          error: null
        };
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_ERROR:
      {
        return {
          loading: false,
          quote: null,
          error: action.payload
        };
      }
    default:
      return state;
  }
}

// function reducerFavourites(state=[], action) {
//     switch (action.type) {
//         case ADD_FAV:
//             return [...state, action.payload]
//     }
//
// }

var rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  quote: reducerQuote
  // favourites: reducerFavourites
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducers);

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);




var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a57ecfd34f9c0ae98f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZDg0OWM5YWRhYjZhN2FmMDBiZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDVTtBQUNJO0FBQ3FCO0FBRTdELElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQTtFQUFBLElBQUlDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNHLEtBQUs7RUFBQSxPQUFNO0lBQ3RDQyxLQUFLLEVBQUVMLEtBQUssQ0FBQ0ssS0FBSyxDQUFDQSxLQUFLO0lBQ3hCQyxPQUFPLEVBQUVOLEtBQUssQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPO0lBQzVCQyxLQUFLLEVBQUVQLEtBQUssQ0FBQ0ssS0FBSyxDQUFDRTtFQUN2QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUE7RUFBQSxJQUFJQyxRQUFRLEdBQUFSLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDRyxLQUFLLENBQUNLLFFBQVE7RUFBQSxPQUFNO0lBQ3JEWixVQUFVLEVBQUUsU0FBQUEsV0FBQTtNQUFBLE9BQU1ZLFFBQVEsQ0FBQ1gsK0RBQWUsRUFBRSxDQUFDO0lBQUE7RUFDakQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZUgsb0RBQU8sQ0FBQ0ksZUFBZSxFQUFFUyxrQkFBa0IsQ0FBQyxDQUFDWix5REFBSyxDQUFDO0FBQ2xFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCOEU7QUFDeEM7QUFHdEMsSUFBTW1CLFlBQVksR0FBRztFQUNqQlQsT0FBTyxFQUFFLEtBQUs7RUFDZEMsS0FBSyxFQUFFLEVBQUU7RUFDVEYsS0FBSyxFQUFFO0FBQ1gsQ0FBQztBQUVELFNBQVNXLFlBQVlBLENBQUEsRUFBOEI7RUFBQSxJQUE1QmhCLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUNjLFlBQVk7RUFBQSxJQUFFRSxNQUFNLEdBQUFoQixTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzdDLFFBQVFjLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtMLG9EQUFjO01BQUU7UUFDakIsT0FBQU0sYUFBQSxDQUFBQSxhQUFBLEtBQ09uQixLQUFLO1VBQ1JNLE9BQU8sRUFBRTtRQUFJO01BRXJCO0lBQ0EsS0FBS00sbURBQWE7TUFBRTtRQUNoQixPQUFPO1VBQ0hOLE9BQU8sRUFBRSxLQUFLO1VBQ2RELEtBQUssRUFBRVksTUFBTSxDQUFDRyxPQUFPO1VBQ3JCYixLQUFLLEVBQUU7UUFDWCxDQUFDO01BQ0w7SUFDQSxLQUFLSSxpREFBVztNQUFFO1FBQ2QsT0FBTztVQUNITCxPQUFPLEVBQUUsS0FBSztVQUNkRCxLQUFLLEVBQUUsSUFBSTtVQUNYRSxLQUFLLEVBQUVVLE1BQU0sQ0FBQ0c7UUFDbEIsQ0FBQztNQUNMO0lBQ0E7TUFDSSxPQUFPcEIsS0FBSztFQUFBO0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1xQixZQUFZLEdBQUdQLHNEQUFlLENBQUM7RUFDakNULEtBQUssRUFBRVc7RUFDUDtBQUNKLENBQUMsQ0FBQzs7QUFFRixpRUFBZUssWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHdCO0FBQ2Q7QUFDQTtBQUNMO0FBRWhDLElBQU1qQixLQUFLLEdBQUdtQixrREFBVyxDQUNyQkYsZ0RBQVksRUFDWkMsc0RBQWUsQ0FBQ0UsbURBQUssQ0FBQyxDQUN6QjtBQUVELGlFQUFlcEIsS0FBSzs7Ozs7Ozs7VUNWcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1F1b3RlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFF1b3RlIGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlXCI7XG5pbXBvcnQge2ZldGNoUXVvdGUsIGZldGNoUXVvdGVBc3luY30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlPXN0b3JlKSA9PiAoe1xuICAgIHF1b3RlOiBzdGF0ZS5xdW90ZS5xdW90ZSxcbiAgICBsb2FkaW5nOiBzdGF0ZS5xdW90ZS5sb2FkaW5nLFxuICAgIGVycm9yOiBzdGF0ZS5xdW90ZS5lcnJvclxufSlcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoPXN0b3JlLmRpc3BhdGNoKSA9PiAoe1xuICAgIGZldGNoUXVvdGU6ICgpID0+IGRpc3BhdGNoKGZldGNoUXVvdGVBc3luYygpKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUXVvdGUpXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vL1xuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGRpdi8+IiwiaW1wb3J0IHtBRERfRkFWLCBRVU9URV9FUlJPUiwgUVVPVEVfRkVUQ0hFRCwgUVVPVEVfRkVUQ0hJTkd9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IFwiXCIsXG4gICAgcXVvdGU6IG51bGxcbn1cblxuZnVuY3Rpb24gcmVkdWNlclF1b3RlIChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFFVT1RFX0ZFVENISU5HOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFFVT1RFX0ZFVENIRUQ6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcXVvdGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBRVU9URV9FUlJPUjoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBxdW90ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiByZWR1Y2VyRmF2b3VyaXRlcyhzdGF0ZT1bXSwgYWN0aW9uKSB7XG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9GQVY6XG4vLyAgICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbi8vICAgICB9XG4vL1xuLy8gfVxuXG5jb25zdCByb290UmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHF1b3RlOiByZWR1Y2VyUXVvdGUsXG4gICAgLy8gZmF2b3VyaXRlczogcmVkdWNlckZhdm91cml0ZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyczsiLCJpbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJvb3RSZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQge2ZldGNoUXVvdGV9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcnMsXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYTU3ZWNmZDM0ZjljMGFlOThmNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJRdW90ZSIsImZldGNoUXVvdGUiLCJmZXRjaFF1b3RlQXN5bmMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInN0b3JlIiwicXVvdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkFERF9GQVYiLCJRVU9URV9FUlJPUiIsIlFVT1RFX0ZFVENIRUQiLCJRVU9URV9GRVRDSElORyIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJRdW90ZSIsImFjdGlvbiIsInR5cGUiLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsInJvb3RSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwidGh1bmsiXSwic291cmNlUm9vdCI6IiJ9