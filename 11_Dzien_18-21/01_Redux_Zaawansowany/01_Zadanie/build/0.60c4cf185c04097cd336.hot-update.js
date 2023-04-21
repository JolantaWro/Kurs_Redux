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
/* harmony import */ var _Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var _containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(114);









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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products_Add__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Recipes_Recipes__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



//
// const fakeRecipes = [
//   {
//     id: 1,
//     name: "Pomidorówka",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [1, 2, 3]
//   },
//   {
//     id: 2,
//     name: "Coś innego",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [3, 1]
//   },
//   {
//     id: 3,
//     name: "Jeszcze inny przepis",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [5, 6]
//   }
// ];

var AllRecipes = function AllRecipes(_ref) {
  var allRecipes = _ref.allRecipes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie przepisy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "recipes",
    listElements: allRecipes,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllRecipes);

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(115);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



var mapStateToProps = function mapStateToProps(state) {
  return {
    allRecipes: state.recipes
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(_components_Recipes__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb04b4a8c5f75b2b13c5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42MGM0Y2YxODVjMDQwOTdjZDMzNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBQ2dDO0FBQ3hCO0FBQ1o7QUFDZ0M7QUFDTjtBQUNBO0FBQ0c7QUFFdkQsSUFBTVcsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUE7RUFBQSxvQkFDTlgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNFLDJEQUFhLHFCQUNWRiwwREFBQSxDQUFDQywrQ0FBTSxxQkFDSEQsMERBQUEsQ0FBQ0ksb0RBQU0scUJBQ0hKLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNXLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ00sNkNBQUk7RUFBSSxFQUFHLGVBQzNDTiwwREFBQSxDQUFDRyxtREFBSztJQUFDWSxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVoQiwwREFBQSxDQUFDTyxxRUFBVztFQUFJLEVBQUcsZUFDcERQLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNZLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRWhCLDBEQUFBLENBQUNTLDhEQUFhO0VBQUcsRUFBRyxlQUN6RFQsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ1ksSUFBSSxFQUFDLGVBQWU7SUFBQ0MsT0FBTyxlQUFFaEIsMERBQUEsQ0FBQ1EsZ0VBQVU7RUFBSSxFQUFHLGVBQ3ZEUiwwREFBQSxDQUFDRyxtREFBSztJQUFDWSxJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVoQiwwREFBQSxDQUFDSyxvREFBUztFQUFJLEVBQUcsZUFDckRMLDBEQUFBLENBQUNHLG1EQUFLO0lBQUNZLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRWhCLDBEQUFBLENBQUNVLG1FQUFVO0VBQUksRUFBRyxDQUM3QyxDQUNKLENBQ0csQ0FDakI7QUFBQSxDQUNOO0FBRUQsaUVBQWVDLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDM0JPO0FBQ0c7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRCxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQVEsSUFBQSxFQUF1QjtFQUFBLElBQWpCQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtFQUU5QixvQkFDRW5CLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFJb0IsU0FBUyxFQUFDO0VBQU8sR0FBQyxvQkFBa0IsQ0FBSyxlQUM3Q3BCLDBEQUFBLENBQUNpQiw4Q0FBSztJQUFDSSxRQUFRLEVBQUUsUUFBUztJQUNuQk4sSUFBSSxFQUFFLFNBQVU7SUFDaEJPLFlBQVksRUFBRUgsVUFBVztJQUN6QkksT0FBTyxFQUFFLEtBQU07SUFDZkMsTUFBTSxFQUFFO0VBQU0sRUFDbkIsQ0FDRDtBQUVQLENBQUM7QUFFRCxpRUFBZWQsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDeENDO0FBQ3dCO0FBQ2Q7QUFFcEMsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJSLFVBQVUsRUFBRVEsS0FBSyxDQUFDQztFQUN0QixDQUFDO0FBQUEsQ0FBQztBQUdGLGlFQUFlSCxvREFBTyxDQUFDQyxlQUFlLENBQUMsQ0FBQ2hCLDJEQUFVLENBQUM7Ozs7Ozs7O1VDVG5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1JlY2lwZXMvUmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuL1JlY2lwZXMvQWRkXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdHNcIjtcbmltcG9ydCBBZGRQcm9kdWN0IGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzL0FkZFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4vUmVjaXBlcy9TaW5nbGVQcm9kdWN0XCI7XG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi4vY29udGFpbmVycy9SZWNpcGVzL1JlY2lwZXNcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PEFsbFByb2R1Y3RzIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PEFsbFJlY2lwZXMgLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xuXG4vL1xuLy8gY29uc3QgZmFrZVJlY2lwZXMgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogMSxcbi8vICAgICBuYW1lOiBcIlBvbWlkb3LDs3drYVwiLFxuLy8gICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4vLyAgICAgcHJvZHVjdHM6IFsxLCAyLCAzXVxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDIsXG4vLyAgICAgbmFtZTogXCJDb8WbIGlubmVnb1wiLFxuLy8gICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4vLyAgICAgcHJvZHVjdHM6IFszLCAxXVxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDMsXG4vLyAgICAgbmFtZTogXCJKZXN6Y3plIGlubnkgcHJ6ZXBpc1wiLFxuLy8gICAgIGRlc2M6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0cXVlIGRpY3RhIGRvbG9yZW1xdWUgZG9sb3J1bSBleGVyY2l0YXRpb25lbSBtYWlvcmVzIG1heGltZSBtb2xlc3RpYWUgb2ZmaWNpaXMsIHF1YXNpIHF1b3Mgdm9sdXB0YXRlLiBBdXQgZXNzZSBsYWJvcmlvc2FtIG5lY2Vzc2l0YXRpYnVzIHF1YW0gcXVvcyBzdXNjaXBpdCB1bGxhbS4gQW1ldCwgZG9sb3IuXCIsXG4vLyAgICAgcHJvZHVjdHM6IFs1LCA2XVxuLy8gICB9XG4vLyBdO1xuXG5jb25zdCBBbGxSZWNpcGVzID0gKHsgYWxsUmVjaXBlcyB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+V3N6eXN0a2llIHByemVwaXN5PC9oMT5cbiAgICAgIDxQYW5lbCBpY29uTmFtZT17XCJmb2xkZXJcIn1cbiAgICAgICAgICAgICBwYXRoPXtcInJlY2lwZXNcIn1cbiAgICAgICAgICAgICBsaXN0RWxlbWVudHM9e2FsbFJlY2lwZXN9XG4gICAgICAgICAgICAgaGVhZGluZz17ZmFsc2V9XG4gICAgICAgICAgICAgZm9vdGVyPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxSZWNpcGVzO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVjaXBlc1wiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxSZWNpcGVzOiBzdGF0ZS5yZWNpcGVzXG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUmVjaXBlcyk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmIwNGI0YThjNWY3NWIyYjEzYzVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBZGRSZWNpcGUiLCJIb21lIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIkFsbFJlY2lwZXMiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsIlBhbmVsIiwiX3JlZiIsImFsbFJlY2lwZXMiLCJjbGFzc05hbWUiLCJpY29uTmFtZSIsImxpc3RFbGVtZW50cyIsImhlYWRpbmciLCJmb290ZXIiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJyZWNpcGVzIl0sInNvdXJjZVJvb3QiOiIifQ==