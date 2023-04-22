"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _containers_Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98);
/* harmony import */ var _containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);
/* harmony import */ var _Products_SingleProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(116);









var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Products__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);


var SingleProduct = function SingleProduct(_ref) {
  var products = _ref.products;
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id;
  console.log(selectorId);
  console.log({
    products: products
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("59089617654ba79cfc4a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZTkyZmUyODQ3ZWU4YjM2ZGE0Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBQ2dDO0FBQ3hCO0FBQ1o7QUFDZ0M7QUFDTjtBQUNHO0FBQ0Y7QUFFckQsSUFBTVcsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUE7RUFBQSxvQkFDTlgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNFLDJEQUFhLHFCQUNWRiwwREFBQSxDQUFDQywrQ0FBTSxxQkFDSEQsMERBQUEsQ0FBQ0ksb0RBQU0scUJBQ0hKLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNXLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ00sNkNBQUk7RUFBSSxFQUFHLGVBQzNDTiwwREFBQSxDQUFDRyxtREFBSztJQUFDWSxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVoQiwwREFBQSxDQUFDTyxxRUFBVztFQUFJLEVBQUcsZUFDcERQLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNZLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRWhCLDBEQUFBLENBQUNVLCtEQUFhO0VBQUcsRUFBRyxlQUN6RFYsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1ksSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ1EsZ0VBQVU7RUFBSSxFQUFHLGVBQ3ZEUiwwREFBQSxDQUFDRyxtREFBSztJQUFDWSxJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVoQiwwREFBQSxDQUFDSyxvREFBUztFQUFJLEVBQUcsZUFDckRMLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNZLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRWhCLDBEQUFBLENBQUNTLG1FQUFVO0VBQUksRUFBRyxDQUM3QyxDQUNKLENBQ0csQ0FDakI7QUFBQSxDQUNOO0FBRUQsaUVBQWVFLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDM0JPO0FBQ2lCO0FBRTNDLElBQU1ELGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQVEsSUFBQSxFQUFvQjtFQUFBLElBQWZDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0VBQzVCLElBQU1DLFVBQVUsR0FBRUgsMkRBQVMsRUFBRSxDQUFDSSxFQUFFO0VBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDO0VBQ3ZCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUFDSixRQUFRLEVBQVJBO0VBQVEsQ0FBQyxDQUFDO0VBR3ZCLG9CQUNJbkIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVN3QixTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDeEIsMERBQUE7SUFBS3dCLFNBQVMsRUFBQztFQUFnQixnQkFDM0J4QiwwREFBQSxZQUFHLFNBQU8sQ0FBSSxDQUNaLGVBQ05BLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBYyxnQkFDekJ4QiwwREFBQTtJQUFLd0IsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCeEIsMERBQUE7SUFBR3dCLFNBQVMsRUFBQztFQUF3QixnQkFDakN4QiwwREFBQTtJQUFNd0IsU0FBUyxFQUFDO0VBQXVCLGdCQUFDeEIsMERBQUE7SUFBR3dCLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDckYsZUFDSnhCLDBEQUFBLFdBQVMsQ0FDUCxDQUNKLENBQ0EsQ0FDUjtBQUVkLENBQUM7QUFFRCxpRUFBZVUsYUFBYTs7Ozs7Ozs7VUM1QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuL1JlY2lwZXMvQWRkXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdHNcIjtcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL0FkZFwiO1xuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUmVjaXBlcy9SZWNpcGVzXCI7XG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0XCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxBbGxQcm9kdWN0cyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvOmlkXCIgZWxlbWVudD17PFNpbmdsZVByb2R1Y3QvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3QgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxBbGxSZWNpcGVzIC8+fSAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7cHJvZHVjdHMgfSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ySWQ9IHVzZVBhcmFtcygpLmlkO1xuICAgIGNvbnNvbGUubG9nKHNlbGVjdG9ySWQpXG4gICAgY29uc29sZS5sb2coe3Byb2R1Y3RzfSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJvZHVrdDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTkwODk2MTc2NTRiYTc5Y2ZjNGFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBZGRSZWNpcGUiLCJIb21lIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiQWxsUmVjaXBlcyIsIlNpbmdsZVByb2R1Y3QiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsInVzZVBhcmFtcyIsIl9yZWYiLCJwcm9kdWN0cyIsInNlbGVjdG9ySWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9