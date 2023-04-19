self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/:filterValue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_containers_Cart__WEBPACK_IMPORTED_MODULE_2___default()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_containers_Cart__WEBPACK_IMPORTED_MODULE_2___default()), null)
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)));

// const Root = ({ store }) => {
//     return (
//         <Provider store={store}>
//             <HashRouter>
//                 <Routes>
//                     <Route path="/:filter" element={<Cart />} />
//                     <Route path="" element={<Cart />} />
//                 </Routes>
//             </HashRouter>
//         </Provider>
//     )
// }
//
// //<Route path="/:field" element={<App />} />
//
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<Root store={store} />);

/***/ }),

/***/ 34:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\jolan\\Kurs_Redux\\09_Dzien_15\\02_React_Router\\01_Zadanie\\js\\containers\\Cart.js: Unexpected token, expected \",\" (14:4)\n\n\u001b[0m \u001b[90m 12 |\u001b[39m \u001b[36mconst\u001b[39m mapStateToProps \u001b[33m=\u001b[39m state \u001b[33m=>\u001b[39m ({\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m     products\u001b[33m:\u001b[39m state\u001b[33m.\u001b[39mproducts\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 |\u001b[39m     sum\u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.unexpected (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3291:16)\n    at JSXParserMixin.expect (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3633:28)\n    at JSXParserMixin.parseObjectLike (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:11637:14)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:11157:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:10870:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\jolan\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:10853:21)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c229ef25b8eed062f963")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTQwZWVkOGZiYTYxNjdmZGJiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDVDtBQUNIO0FBQ0c7QUFDeUI7QUFFOUQsSUFBTVEsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJUiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ssMkRBQWEscUJBQ1ZMLDBEQUFBLENBQUNPLG9EQUFNLHFCQUNIUCwwREFBQSxDQUFDTSxtREFBSztJQUFDSyxJQUFJLEVBQUMsZUFBZTtJQUFDQyxPQUFPLGVBQUVaLDBEQUFBLENBQUNFLHlEQUFJO0VBQUksRUFBRyxlQUNqREYsMERBQUEsQ0FBQ00sbURBQUs7SUFBQ0ssSUFBSSxFQUFDLEdBQUc7SUFBQ0UsS0FBSztJQUFFRCxPQUFPLGVBQUVaLDBEQUFBLENBQUNFLHlEQUFJO0VBQUksRUFBRyxDQUN2QyxDQUNHLENBQ2pCO0FBRVgsQ0FBQztBQUVELElBQU1ZLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2hCLDREQUFVLENBQUNhLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQ1BsQiwwREFBQSxDQUFDSSxpREFBUTtFQUFDRCxLQUFLLEVBQUVBLG9EQUFLQTtBQUFDLGdCQUNuQkgsMERBQUEsQ0FBQ1EsR0FBRyxPQUFHLENBQ0EsQ0FBQzs7QUFHaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9jb250YWluZXJzL0NhcnRcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpmaWx0ZXJWYWx1ZVwiIGVsZW1lbnQ9ezxDYXJ0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0ICBlbGVtZW50PXs8Q2FydCAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxBcHAgLz5cclxuICAgIDwvUHJvdmlkZXI+KVxyXG5cclxuXHJcbi8vIGNvbnN0IFJvb3QgPSAoeyBzdG9yZSB9KSA9PiB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4vLyAgICAgICAgICAgICA8SGFzaFJvdXRlcj5cclxuLy8gICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvOmZpbHRlclwiIGVsZW1lbnQ9ezxDYXJ0IC8+fSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiXCIgZWxlbWVudD17PENhcnQgLz59IC8+XHJcbi8vICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuLy8gICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxyXG4vLyAgICAgICAgIDwvUHJvdmlkZXI+XHJcbi8vICAgICApXHJcbi8vIH1cclxuLy9cclxuLy8gLy88Um91dGUgcGF0aD1cIi86ZmllbGRcIiBlbGVtZW50PXs8QXBwIC8+fSAvPlxyXG4vL1xyXG4vLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuLy8gY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy8gcm9vdC5yZW5kZXIoPFJvb3Qgc3RvcmU9e3N0b3JlfSAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzIyOWVmMjViOGVlZDA2MmY5NjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQ2FydCIsInN0b3JlIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJwYXRoIiwiZWxlbWVudCIsImV4YWN0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9