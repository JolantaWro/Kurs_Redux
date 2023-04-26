self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_selectors__WEBPACK_IMPORTED_MODULE_4__);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.getSum)(state.products)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 90:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/09_Dzien_15/02_React_Router/01_Zadanie/js/redux/selectors.js: Unexpected token (7:36)\n\n\u001b[0m \u001b[90m  5 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m getSum \u001b[33m=\u001b[39m (products) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m     products\u001b[33m.\u001b[39mreduce((a\u001b[33m,\u001b[39m product) \u001b[33m=>\u001b[39m \u001b[36mreturn\u001b[39m (a \u001b[33m+\u001b[39m \u001b[33mNumber\u001b[39m(product\u001b[33m.\u001b[39mprice)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m getFilteredContacts \u001b[33m=\u001b[39m (contacts\u001b[33m,\u001b[39m text) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     \u001b[36mconst\u001b[39m contactsSearch \u001b[33m=\u001b[39m text\u001b[33m.\u001b[39mtoLowerCase()\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.unexpected (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:3291:16)\n    at JSXParserMixin.parseExprAtom (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:11259:16)\n    at JSXParserMixin.parseExprAtom (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10870:23)\n    at JSXParserMixin.parseUpdate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10853:21)\n    at JSXParserMixin.parseMaybeUnary (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10829:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10667:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("adf8740d4b17c9759786")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMWRkZmY1NjE5MmJjMTI1ZjI0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDVTtBQUNFO0FBQ3FCO0FBQ2pCO0FBRzFDLElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQUFRO0lBQ3hCQyxHQUFHLEVBQUVKLHdEQUFNLENBQUNFLEtBQUssQ0FBQ0MsUUFBUTtFQUc5QixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUdDLFFBQVE7RUFBQSxPQUFLO0lBQ3BDUixVQUFVLEVBQUUsU0FBQUEsV0FBQ1MsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1IsMERBQVUsQ0FBQ1MsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUN0RFIsYUFBYSxFQUFFLFNBQUFBLGNBQUNRLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNQLDZEQUFhLENBQUNRLE9BQU8sQ0FBQyxDQUFDO0lBQUE7RUFFaEUsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZVgsb0RBQU8sQ0FBQ0ssZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDUix3REFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7VUN4QmpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2dldFN1bX0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxuICAgIHN1bTogZ2V0U3VtKHN0YXRlLnByb2R1Y3RzKVxuXG5cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSlcblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWRmODc0MGQ0YjE3Yzk3NTk3ODZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZ2V0U3VtIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=