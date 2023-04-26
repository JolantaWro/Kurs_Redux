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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
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

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
    // filterProducts : (filterValue) => dispatch(setFilter(filterValue)),
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 84:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/09_Dzien_15/02_React_Router/01_Zadanie/js/redux/selectors.js: Unexpected token (8:14)\n\n\u001b[0m \u001b[90m  6 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m getSum \u001b[33m=\u001b[39m (products) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m  7 |\u001b[39m     \u001b[36mif\u001b[39m(products\u001b[33m.\u001b[39mlength \u001b[33m>\u001b[39m \u001b[35m0\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 |\u001b[39m        \u001b[36mreturn\u001b[39m \u001b[36mconst\u001b[39m arrayProducts \u001b[33m=\u001b[39m products\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     console\u001b[33m.\u001b[39mlog(products\u001b[33m,\u001b[39m arrayProducts)\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m     products\u001b[33m.\u001b[39mreduce((a\u001b[33m,\u001b[39m b) \u001b[33m=>\u001b[39m {\u001b[0m\n    at instantiate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.unexpected (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:3291:16)\n    at JSXParserMixin.parseExprAtom (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:11259:16)\n    at JSXParserMixin.parseExprAtom (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10870:23)\n    at JSXParserMixin.parseUpdate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10853:21)\n    at JSXParserMixin.parseMaybeUnary (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10829:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/gworonowski/workspaceJS/ONL_FSB_E_23_Redux/node_modules/@babel/parser/lib/index.js:10667:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6bf8cd1d3cc5d1fa0124")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYjJjMzNjNTk3NWFkNTNhYmFjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDVTtBQUNFO0FBQ3FCO0FBQ2pCO0FBRzFDLElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFFBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQUFRO0lBQ3hCQyxHQUFHLEVBQUVKLHdEQUFNLENBQUNFLEtBQUssQ0FBQ0MsUUFBUTtFQUc5QixDQUFDO0FBQUEsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1IsVUFBVSxFQUFFLFNBQUFBLFdBQUNTLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNSLDBEQUFVLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERSLGFBQWEsRUFBRSxTQUFBQSxjQUFDUSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDUCw2REFBYSxDQUFDUSxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQzVEO0VBRUosQ0FBQztBQUFBLENBQUM7O0FBRUYsaUVBQWVYLG9EQUFPLENBQUNLLGVBQWUsRUFBRUksa0JBQWtCLENBQUMsQ0FBQ1Isd0RBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1VDM0JqRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtnZXRTdW19IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcbiAgICBzdW06IGdldFN1bShzdGF0ZS5wcm9kdWN0cylcblxuXG59KTtcblxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXG4gICAgLy8gZmlsdGVyUHJvZHVjdHMgOiAoZmlsdGVyVmFsdWUpID0+IGRpc3BhdGNoKHNldEZpbHRlcihmaWx0ZXJWYWx1ZSkpLFxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YmY4Y2QxZDNjYzVkMWZhMDEyNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJnZXRTdW0iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==