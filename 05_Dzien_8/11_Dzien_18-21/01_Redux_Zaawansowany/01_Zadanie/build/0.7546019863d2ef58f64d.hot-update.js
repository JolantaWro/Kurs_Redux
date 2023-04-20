"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);


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
var LastProducts = function LastProducts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: fakeProducts
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);


var fakeRecipes = [{
  id: 1,
  name: "Pomidorowa"
}, {
  id: 2,
  name: "Kurczak curry"
}, {
  id: 3,
  name: "Sajgonki"
}, {
  id: 4,
  name: "Hamburger"
}, {
  id: 5,
  name: "Schabowy z ziemniakami"
}];
var LastRecipes = function LastRecipes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie przepisy",
    theme: "is-primary",
    path: "recipes",
    iconName: "folder",
    listElements: fakeRecipes
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastRecipes);

/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LastRecipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(109);
/* harmony import */ var _LastProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(110);



var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastRecipes__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastProducts__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 33:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(104);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(105);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(106);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(108);











var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dfea1dfc55369a699bdd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0IsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQ3VCLGlEQUFXO0VBQUksRUFBRyxlQUN2RHZCLDBEQUFBLENBQUNrQixvREFBSztJQUFDVCxJQUFJLEVBQUMsZUFBZTtJQUFDb0IsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQ3dCLHFEQUFVO0VBQUksRUFBRyxlQUN2RHhCLDBEQUFBLENBQUNrQixvREFBSztJQUFDVCxJQUFJLEVBQUMsYUFBYTtJQUFDb0IsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQ3lCLGdEQUFVO0VBQUksRUFBRyxlQUNyRHpCLDBEQUFBLENBQUNrQixvREFBSztJQUFDVCxJQUFJLEVBQUMsY0FBYztJQUFDb0IsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQzBCLG9EQUFTO0VBQUksRUFBRyxDQUNoRCxDQUNKLENBQ0csQ0FDVCxDQUNaO0FBQUEsQ0FDTjtBQUVELGlFQUFlQyxJQUFJOzs7Ozs7OztVQzlCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0hvbWUvTGFzdFByb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xuXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIlByenlwcmF3YSBjdXJyeVwifSxcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcbiAge2lkOiA1LCBuYW1lOiBcIlppZW1uaWFraVwifVxuXTtcblxuY29uc3QgTGFzdFByb2R1Y3RzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYW5lbFxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcm9kdWt0eVwiXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXG4gICAgICBwYXRoPVwicHJvZHVjdHNcIlxuICAgICAgaWNvbk5hbWU9XCJwaXp6YS1zbGljZVwiXG4gICAgICBsaXN0RWxlbWVudHM9e2Zha2VQcm9kdWN0c30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RQcm9kdWN0czsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XG5cbmNvbnN0IGZha2VSZWNpcGVzID0gW1xuICB7aWQ6IDEsIG5hbWU6IFwiUG9taWRvcm93YVwifSxcbiAge2lkOiAyLCBuYW1lOiBcIkt1cmN6YWsgY3VycnlcIn0sXG4gIHtpZDogMywgbmFtZTogXCJTYWpnb25raVwifSxcbiAge2lkOiA0LCBuYW1lOiBcIkhhbWJ1cmdlclwifSxcbiAge2lkOiA1LCBuYW1lOiBcIlNjaGFib3d5IHogemllbW5pYWthbWlcIn1cbl07XG5cbmNvbnN0IExhc3RSZWNpcGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYW5lbFxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcnplcGlzeVwiXG4gICAgICB0aGVtZT1cImlzLXByaW1hcnlcIlxuICAgICAgcGF0aD1cInJlY2lwZXNcIlxuICAgICAgaWNvbk5hbWU9XCJmb2xkZXJcIlxuICAgICAgbGlzdEVsZW1lbnRzPXtmYWtlUmVjaXBlc30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RSZWNpcGVzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXN0UmVjaXBlcyBmcm9tIFwiLi9MYXN0UmVjaXBlc1wiO1xuaW1wb3J0IExhc3RQcm9kdWN0cyBmcm9tIFwiLi9MYXN0UHJvZHVjdHNcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICA8TGFzdFJlY2lwZXMvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIj5cbiAgICAgICAgPExhc3RQcm9kdWN0cy8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxuaW1wb3J0IFBhbmVsIGZyb20gXCIuL1BhbmVsXCI7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4vUHJvZHVjdHNcIjtcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RzL0FkZFwiO1xuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4vUmVjaXBlc1wiO1xuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi9SZWNpcGVzL0FkZFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9pZFwiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzL2FkZFwiIGVsZW1lbnQ9ezxBZGRQcm9kdWN0IC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9pZFwiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRmZWExZGZjNTUzNjlhNjk5YmRkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFuZWwiLCJmYWtlUHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJMYXN0UHJvZHVjdHMiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0aGVtZSIsInBhdGgiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyIsImZha2VSZWNpcGVzIiwiTGFzdFJlY2lwZXMiLCJIb21lIiwiY2xhc3NOYW1lIiwiTGF5b3V0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVyIiwiUm91dGVzIiwiUHJvdmlkZXIiLCJzdG9yZSIsIkFsbFByb2R1Y3RzIiwiQWRkUHJvZHVjdCIsIkFsbFJlY2lwZXMiLCJBZGRSZWNpcGUiLCJNYWluIiwiRnJhZ21lbnQiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==