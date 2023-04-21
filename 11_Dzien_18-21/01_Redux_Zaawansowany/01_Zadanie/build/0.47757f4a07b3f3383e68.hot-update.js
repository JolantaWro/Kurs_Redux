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
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(106);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(109);
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(112);
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(113);













var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10___default()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
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

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}];
var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", number + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return onClose(index);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return _onChange(index, e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), fakeProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))))));
};
SingleProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  number: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ 112:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\11_Dzien_18-21\\01_Redux_Zaawansowany\\01_Zadanie\\js\\containers\\ProductsContainer.js: JSX attributes must only be assigned a non-empty expression. (18:34)\n\n\u001b[0m \u001b[90m 16 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mAllProducts\u001b[39m allProducts\u001b[33m=\u001b[39m{allProducts} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mAddProduct\u001b[39m onSaveProduct\u001b[33m=\u001b[39m{handleNewProduct} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mSingleProduct\u001b[39m number\u001b[33m=\u001b[39m{} onClose\u001b[33m=\u001b[39m{} onChange\u001b[33m=\u001b[39m{} index\u001b[33m=\u001b[39m{} id\u001b[33m=\u001b[39m{}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m     )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6828:16)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6879:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6893:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6888:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6912:33)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6924:32)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\jolan\\Desktop\\Project\\Kurs_Redux\\node_modules\\@babel\\parser\\lib\\index.js:6981:17)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1395b04b7fcdc4ffd74f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QmhDLDBEQUFBO0lBQVE4QixRQUFRLEVBQUUsU0FBQUEsU0FBQ0ssQ0FBQztNQUFBLE9BQUtMLFNBQVEsQ0FBQ0YsS0FBSyxFQUFFTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDQSxLQUFLLEVBQUViO0VBQUcsZ0JBQ2xFeEIsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQzFCdUIsWUFBWSxDQUFDZSxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUN2QnZDLDBEQUFBO01BQVFxQyxLQUFLLEVBQUVFLE9BQU8sQ0FBQ2Y7SUFBRyxHQUFFZSxPQUFPLENBQUNkLElBQUksQ0FBVTtFQUFBLENBQ25ELENBQUMsQ0FDSyxDQUNKLGVBQ1h6QiwwREFBQTtJQUFNZ0MsU0FBUyxFQUFDO0VBQXVCLGdCQUFDaEMsMERBQUE7SUFBR2dDLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDbkYsQ0FDQSxDQUNGLENBQ0U7QUFFZCxDQUFDO0FBRUROLGFBQWEsQ0FBQ2MsU0FBUyxHQUFHO0VBQ3hCaEIsRUFBRSxFQUFFRixxRUFBMkI7RUFDL0JNLEtBQUssRUFBRU4scUVBQTJCO0VBQ2xDTyxNQUFNLEVBQUVQLHFFQUEyQjtFQUNuQ1EsUUFBUSxFQUFFUixtRUFBeUI7RUFDbkNTLE9BQU8sRUFBRVQsbUVBQXlCbUI7QUFDcEMsQ0FBQztBQUdELGlFQUFlZixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7VUMvQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4vUGFuZWxcIjtcclxuaW1wb3J0IEFsbFByb2R1Y3RzIGZyb20gXCIuL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RzL0FkZFwiO1xyXG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi9SZWNpcGVzXCI7XHJcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4vUmVjaXBlcy9BZGRcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xyXG5pbXBvcnQgUHJvZHVjdHNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHNDb250YWluZXJcIjtcclxuaW1wb3J0IFJlY2lwZXNDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUmVjaXBlc0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PFByb2R1Y3RzQ29udGFpbmVyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXNcIiBlbGVtZW50PXs8UmVjaXBlc0NvbnRhaW5lciAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzL2FkZFwiIGVsZW1lbnQ9ezxBZGRSZWNpcGUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcclxuICB7aWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCJ9LFxyXG4gIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxyXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcclxuICB7aWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCJ9XHJcbl07XHJcblxyXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHtpZCwgaW5kZXgsIG51bWJlciwgb25DaGFuZ2UsIG9uQ2xvc2V9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxyXG4gICAgICAgIDxwPlByb2R1a3Qge251bWJlciArIDF9PC9wPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoaW5kZXgpfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7ZmFrZVByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuU2luZ2xlUHJvZHVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzOTViMDRiN2ZjZGM0ZmZkNzRmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVyIiwiUm91dGVzIiwiUHJvdmlkZXIiLCJzdG9yZSIsIlBhbmVsIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiQWxsUmVjaXBlcyIsIkFkZFJlY2lwZSIsIkhvbWUiLCJQcm9kdWN0c0NvbnRhaW5lciIsIlJlY2lwZXNDb250YWluZXIiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsIlByb3BUeXBlcyIsImZha2VQcm9kdWN0cyIsImlkIiwibmFtZSIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiaW5kZXgiLCJudW1iZXIiLCJvbkNoYW5nZSIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInByb2R1Y3QiLCJwcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJzb3VyY2VSb290IjoiIn0=