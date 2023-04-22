"use strict";
self["webpackHotUpdatees6_react"](0,{

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
  var allProducts = _ref.allProducts;
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id;
  console.log(selectorId);
  console.log({
    allProducts: allProducts
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return null;
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
      return setID(e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: product.id,
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4f6a943f886782fba452")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYmUzMTVhYjdlNmE1NmY4Mzk4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFFM0MsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQU1DLFVBQVUsR0FBRUosMkRBQVMsRUFBRSxDQUFDSyxFQUFFO0VBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxDQUFDO0VBQ3ZCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUFDSixXQUFXLEVBQVhBO0VBQVcsQ0FBQyxDQUFDO0VBRzFCLG9CQUNJSiwwREFBQSwyQkFDSUEsMERBQUE7SUFBU1UsU0FBUyxFQUFDO0VBQWlCLGdCQUNoQ1YsMERBQUE7SUFBS1UsU0FBUyxFQUFDO0VBQWdCLGdCQUMzQlYsMERBQUEsWUFBRyxVQUFRLEVBQUNNLEVBQUUsQ0FBSyxlQUNuQk4sMERBQUE7SUFBUVcsSUFBSSxFQUFDLFFBQVE7SUFBQ0QsU0FBUyxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTlosMERBQUE7SUFBS1UsU0FBUyxFQUFDO0VBQWMsZ0JBQ3pCViwwREFBQTtJQUFLVSxTQUFTLEVBQUM7RUFBTyxnQkFDbEJWLDBEQUFBO0lBQUdVLFNBQVMsRUFBQztFQUF3QixnQkFDakRWLDBEQUFBO0lBQU1VLFNBQVMsRUFBQztFQUFRLGdCQUN0QlYsMERBQUE7SUFBUWEsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLQyxLQUFLLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUNBLEtBQUssRUFBRVg7RUFBRyxnQkFDeEROLDBEQUFBLGlCQUFRLFlBQVUsQ0FBUyxFQUN4QmtCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLE9BQU87SUFBQSxvQkFDakJwQiwwREFBQTtNQUFRcUIsR0FBRyxFQUFFRCxPQUFPLENBQUNkLEVBQUc7TUFBQ1csS0FBSyxFQUFFRyxPQUFPLENBQUNkO0lBQUcsR0FBRWMsT0FBTyxDQUFDRSxJQUFJLENBQVU7RUFBQSxDQUN0RSxDQUFDLENBQ0csQ0FDSixlQUNTdEIsMERBQUE7SUFBTVUsU0FBUyxFQUFDO0VBQXVCLGdCQUFDViwwREFBQTtJQUFHVSxTQUFTLEVBQUM7RUFBb0IsRUFBSyxDQUFPLENBQ3JGLENBQ0YsQ0FDSixDQUNBLENBQ1I7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLGFBQWE7Ozs7Ozs7O1VDcEM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7IGFsbFByb2R1Y3RzIH0pID0+IHtcbiAgICBjb25zdCBzZWxlY3RvcklkPSB1c2VQYXJhbXMoKS5pZDtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RvcklkKVxuICAgIGNvbnNvbGUubG9nKHthbGxQcm9kdWN0c30pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByb2R1a3Qge2lkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldElEKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2R1Y3QuaWR9IHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZjZhOTQzZjg4Njc4MmZiYTQ1MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVBhcmFtcyIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJzZWxlY3RvcklkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJlIiwic2V0SUQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImtleSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9