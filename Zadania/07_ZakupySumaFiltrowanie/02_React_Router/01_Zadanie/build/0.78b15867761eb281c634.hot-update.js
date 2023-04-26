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
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_containers_Cart__WEBPACK_IMPORTED_MODULE_2___default()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/:filterValue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_containers_Cart__WEBPACK_IMPORTED_MODULE_2___default()), null)
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)));

/***/ }),

/***/ 34:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceReact/Kurs_Redux/09_Dzien_15/02_React_Router/01_Zadanie/js/containers/Cart.js: Missing semicolon. (34:67)\n\n\u001b[0m \u001b[90m 32 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 |\u001b[39m     console\u001b[33m.\u001b[39mlog(products)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 34 |\u001b[39m     \u001b[36mconst\u001b[39m filteredProduct \u001b[33m=\u001b[39m filteredProducts(products\u001b[33m,\u001b[39m filterValue)e))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 35 |\u001b[39m     \u001b[90m// const sum = filteredProduct.reduce((acc, item) => (acc + Number(item.price)))\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 36 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 37 |\u001b[39m\u001b[0m\n    at instantiate (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.semicolon (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:3628:10)\n    at JSXParserMixin.parseVarStatement (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13028:10)\n    at JSXParserMixin.parseStatementContent (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12624:23)\n    at JSXParserMixin.parseStatementLike (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12544:17)\n    at JSXParserMixin.parseStatementListItem (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12524:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13116:61)\n    at JSXParserMixin.parseBlockBody (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13109:10)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce7478a5d13d6f5d5f4b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OGIxNTg2Nzc2MWViMjgxYzYzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDVDtBQUNIO0FBQ0c7QUFDK0I7QUFFcEUsSUFBTVMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJVCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ssMkRBQWEscUJBQ1ZMLDBEQUFBLENBQUNRLGtEQUFJO0lBQUNJLEVBQUUsRUFBRTtFQUFJLEdBQUMsV0FBUyxDQUFPLGVBQUFaLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNRLGtEQUFJO0lBQUNJLEVBQUUsRUFBRTtFQUFNLEdBQUMsY0FBTyxDQUFPLGVBQUFaLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNRLGtEQUFJO0lBQUNJLEVBQUUsRUFBRTtFQUFNLEdBQUMsY0FBTyxDQUFPLGVBQUFaLDBEQUFBLFlBQU0sZUFDckNBLDBEQUFBLENBQUNRLGtEQUFJO0lBQUNJLEVBQUUsRUFBRTtFQUFPLEdBQUMsZUFBUSxDQUFPLGVBQUFaLDBEQUFBLFlBQU0sZUFDdkNBLDBEQUFBLENBQUNPLG9EQUFNLHFCQUNIUCwwREFBQSxDQUFDTSxtREFBSztJQUFDTyxLQUFLO0lBQUNDLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRWYsMERBQUEsQ0FBQ0UseURBQUk7RUFBSSxFQUFHLGVBQzNDRiwwREFBQSxDQUFDTSxtREFBSztJQUFDUSxJQUFJLEVBQUMsZUFBZTtJQUFDQyxPQUFPLGVBQUVmLDBEQUFBLENBQUNFLHlEQUFJO0VBQUksRUFBRyxDQUM1QyxDQUNHLENBQ2pCO0FBRVgsQ0FBQztBQUVELElBQU1jLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2xCLDREQUFVLENBQUNlLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQ1BwQiwwREFBQSxDQUFDSSxpREFBUTtFQUFDRCxLQUFLLEVBQUVBLG9EQUFLQTtBQUFDLGdCQUNuQkgsMERBQUEsQ0FBQ1MsR0FBRyxPQUFHLENBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1VDN0JoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4vY29udGFpbmVycy9DYXJ0XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVzLCBMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wifT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiLzEwXCJ9PmRvIDEwesWCPC9MaW5rPjxiciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtcIi81MFwifT5kbyA1MHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTAwXCJ9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cbiAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvOmZpbHRlclZhbHVlXCIgZWxlbWVudD17PENhcnQgLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxBcHAgLz5cbiAgICA8L1Byb3ZpZGVyPilcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNlNzQ3OGE1ZDEzZDZmNWQ1ZjRiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkNhcnQiLCJzdG9yZSIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInRvIiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==