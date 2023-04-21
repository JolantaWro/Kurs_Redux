self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Products_Add__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(106);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(109);
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(112);
/* harmony import */ var _containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(113);













var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Products_Add__WEBPACK_IMPORTED_MODULE_6___default()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 105:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\11_Dzien_18-21\\01_Redux_Zaawansowany\\01_Zadanie\\js\\components\\Products\\Add.js: Legacy octal literals are not allowed in strict mode. (15:19)\n\n\u001b[0m \u001b[90m 13 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m   handleChange \u001b[33m=\u001b[39m (e) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 |\u001b[39m     \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({\u001b[35m00\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m       [e\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mid]\u001b[33m:\u001b[39m e\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mvalue\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 |\u001b[39m   }\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.recordStrictModeErrors (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3187:12)\n    at JSXParserMixin.readNumber (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3063:12)\n    at JSXParserMixin.getTokenFromCode (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:2870:14)\n    at JSXParserMixin.getTokenFromCode (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:7031:11)\n    at JSXParserMixin.nextToken (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:2384:10)\n    at JSXParserMixin.next (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:2305:10)\n    at JSXParserMixin.parseObjectLike (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:11632:10)");

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_actions_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _components_Products_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);
/* harmony import */ var _components_Products_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Products_Add__WEBPACK_IMPORTED_MODULE_4__);





var ProductsContainer = function ProductsContainer(_ref) {
  var allProducts = _ref.allProducts,
    onProductAdd = _ref.onProductAdd;
  var handleNewProduct = function handleNewProduct(value) {
    onProductAdd(value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allProducts: allProducts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_Products_Add__WEBPACK_IMPORTED_MODULE_4___default()), {
    onSaveProduct: handleNewProduct
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onProductAdd: function onProductAdd(value) {
      return dispatch((0,_redux_actions_products__WEBPACK_IMPORTED_MODULE_3__.addProduct)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(ProductsContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0922eddd4f8918744396")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNWM1NzIzZGYwZmRlY2NjZjA3Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0k7QUFDd0M7QUFDakM7QUFDSDtBQUNOO0FBQ1M7QUFDRztBQUNMO0FBQ0c7QUFDWjtBQUNzQztBQUNGO0FBRTlELElBQU1nQixJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQTtFQUFBLG9CQUNOaEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNFLDREQUFhLHFCQUNWRiwwREFBQSxDQUFDQywrQ0FBTSxxQkFDSEQsMERBQUEsQ0FBQ0sscURBQU0scUJBQ0hMLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNnQixLQUFLO0lBQUNDLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNhLDZDQUFJO0VBQUksRUFBRyxlQUMzQ2IsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxXQUFXO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNjLHNFQUFpQjtFQUFJLEVBQUcsZUFDMURkLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNpQixJQUFJLEVBQUMsZUFBZTtJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDVSxzREFBVTtFQUFJLEVBQUcsZUFDdkRWLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNpQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDZSxxRUFBZ0I7RUFBSSxFQUFHLGVBQ3hEZiwwREFBQSxDQUFDRyxvREFBSztJQUFDaUIsSUFBSSxFQUFDLGNBQWM7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ1ksb0RBQVM7RUFBSSxFQUFHLENBQ2hELENBQ0osQ0FDRyxDQUNqQjtBQUFBLENBQ047QUFFRCxpRUFBZUksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDdUI7QUFDYjtBQUNpQjtBQUNEO0FBRXBELElBQU1GLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUFVLElBQUEsRUFBcUM7RUFBQSxJQUFoQ0MsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7SUFBRUMsWUFBWSxHQUFBRixJQUFBLENBQVpFLFlBQVk7RUFDakQsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0lBQ2hDRixZQUFZLENBQUNFLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBR0Qsb0JBQ0k1QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ1MsNERBQVc7SUFBQ2dCLFdBQVcsRUFBRUE7RUFBWSxFQUFHLGVBQ3pDekIsMERBQUEsQ0FBQ1UsaUVBQVU7SUFBQ21CLGFBQWEsRUFBRUY7RUFBaUIsRUFBRyxDQUNoRDtBQUVYLENBQUM7QUFFRCxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCTixXQUFXLEVBQUVNLEtBQUssQ0FBQ0M7RUFDdkIsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1IsWUFBWSxFQUFFLFNBQUFBLGFBQUNFLEtBQUs7TUFBQSxPQUFLTSxRQUFRLENBQUNYLG1FQUFVLENBQUNLLEtBQUssQ0FBQyxDQUFDO0lBQUE7RUFDeEQsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZU4sb0RBQU8sQ0FBQ1EsZUFBZSxFQUFFRyxrQkFBa0IsQ0FBQyxDQUFDbkIsaUJBQWlCLENBQUM7Ozs7Ozs7O1VDNUI5RSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4vUGFuZWxcIjtcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RzL0FkZFwiO1xyXG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi9SZWNpcGVzXCI7XHJcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4vUmVjaXBlcy9BZGRcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgUHJvZHVjdHNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHNDb250YWluZXJcIjtcclxuaW1wb3J0IFJlY2lwZXNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUmVjaXBlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PFByb2R1Y3RzQ29udGFpbmVyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8UmVjaXBlc0NvbnRhaW5lciAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL0FkZFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDb250YWluZXIgPSAoe2FsbFByb2R1Y3RzLCBvblByb2R1Y3RBZGQgfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTmV3UHJvZHVjdCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIG9uUHJvZHVjdEFkZCh2YWx1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QWxsUHJvZHVjdHMgYWxsUHJvZHVjdHM9e2FsbFByb2R1Y3RzfSAvPlxyXG4gICAgICAgICAgICA8QWRkUHJvZHVjdCBvblNhdmVQcm9kdWN0PXtoYW5kbGVOZXdQcm9kdWN0fSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBhbGxQcm9kdWN0czogc3RhdGUucHJvZHVjdHNcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgb25Qcm9kdWN0QWRkOiAodmFsdWUpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QodmFsdWUpKVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2R1Y3RzQ29udGFpbmVyKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDkyMmVkZGQ0Zjg5MTg3NDQzOTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJQcm92aWRlciIsInN0b3JlIiwiUGFuZWwiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3QiLCJBbGxSZWNpcGVzIiwiQWRkUmVjaXBlIiwiSG9tZSIsIlByb2R1Y3RzQ29udGFpbmVyIiwiUmVjaXBlc0NvbnRhaW5lciIsIk1haW4iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJleGFjdCIsInBhdGgiLCJlbGVtZW50IiwiY29ubmVjdCIsImFkZFByb2R1Y3QiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJvblByb2R1Y3RBZGQiLCJoYW5kbGVOZXdQcm9kdWN0IiwidmFsdWUiLCJvblNhdmVQcm9kdWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==