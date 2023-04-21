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
/* harmony import */ var _containers_ProductsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(113);
/* harmony import */ var _containers_RecipesContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(114);













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

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);



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
var mapStateToProps = function mapStateToProps(state) {
  return {
    allRecipes: state.recipes
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(AllRecipes));

// export default AllRecipes;

/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);
/* harmony import */ var _components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);



var RecipesContainer = function RecipesContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Recipes__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Recipes_Add__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipesContainer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cce633592351ac209d05")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43Y2RhNjRiOTlhZGE4ZDZkYjMzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUN3QztBQUNqQztBQUNIO0FBQ047QUFDUztBQUNHO0FBQ0w7QUFDRztBQUNaO0FBQ3NDO0FBQ0Y7QUFFOUQsSUFBTWdCLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBO0VBQUEsb0JBQ05oQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0UsNERBQWEscUJBQ1ZGLDBEQUFBLENBQUNDLCtDQUFNLHFCQUNIRCwwREFBQSxDQUFDSyxxREFBTSxxQkFDSEwsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2dCLEtBQUs7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ2EsNkNBQUk7RUFBSSxFQUFHLGVBQzNDYiwwREFBQSxDQUFDRyxvREFBSztJQUFDaUIsSUFBSSxFQUFDLFdBQVc7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ2Msc0VBQWlCO0VBQUksRUFBRyxlQUMxRGQsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxlQUFlO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNVLHFEQUFVO0VBQUksRUFBRyxlQUN2RFYsMERBQUEsQ0FBQ0csb0RBQUs7SUFBQ2lCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNlLHFFQUFnQjtFQUFJLEVBQUcsZUFDeERmLDBEQUFBLENBQUNHLG9EQUFLO0lBQUNpQixJQUFJLEVBQUMsY0FBYztJQUFDQyxPQUFPLGVBQUVyQiwwREFBQSxDQUFDWSxvREFBUztFQUFJLEVBQUcsQ0FDaEQsQ0FDSixDQUNHLENBQ2pCO0FBQUEsQ0FDTjtBQUVELGlFQUFlSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDRztBQUNPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTCxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQVksSUFBQSxFQUFxQjtFQUFBLElBQWhCQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtFQUU3QixvQkFDRXhCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFJeUIsU0FBUyxFQUFDO0VBQU8sR0FBQyxvQkFBa0IsQ0FBSyxlQUM3Q3pCLDBEQUFBLENBQUNRLDhDQUFLO0lBQUNrQixRQUFRLEVBQUUsUUFBUztJQUNuQk4sSUFBSSxFQUFFLFNBQVU7SUFDaEJPLFlBQVksRUFBRUgsVUFBVztJQUN6QkksT0FBTyxFQUFFLEtBQU07SUFDZkMsTUFBTSxFQUFFO0VBQU0sRUFDbkIsQ0FDRDtBQUVQLENBQUM7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQ2hDUCxVQUFVLEVBQUVPLEtBQUssQ0FBQ0M7RUFDcEIsQ0FBQztBQUFBLENBQUM7QUFFRixpRUFBZVYsb0RBQU8sQ0FBQ1EsZUFBZSxDQUFDLENBQUNuQixVQUFVLENBQUM7O0FBRW5EOzs7Ozs7Ozs7Ozs7Ozs7QUM5QzBCO0FBQ3FCO0FBQ0c7QUFFbEQsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0VBQzNCLG9CQUNJZiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ1csMkRBQVUsT0FBRyxlQUNkWCwwREFBQSxDQUFDWSwrREFBUyxPQUFHLENBQ2Q7QUFFWCxDQUFDO0FBRUQsaUVBQWVHLGdCQUFnQjs7Ozs7Ozs7VUNiL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUmVjaXBlc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcclxuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuL1BhbmVsXCI7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0cy9BZGRcIjtcclxuaW1wb3J0IEFsbFJlY2lwZXMgZnJvbSBcIi4vUmVjaXBlc1wiO1xyXG5pbXBvcnQgQWRkUmVjaXBlIGZyb20gXCIuL1JlY2lwZXMvQWRkXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcclxuaW1wb3J0IFByb2R1Y3RzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1Byb2R1Y3RzQ29udGFpbmVyXCI7XHJcbmltcG9ydCBSZWNpcGVzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1JlY2lwZXNDb250YWluZXJcIjtcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxQcm9kdWN0c0NvbnRhaW5lciAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWNpcGVzXCIgZWxlbWVudD17PFJlY2lwZXNDb250YWluZXIgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlcy9hZGRcIiBlbGVtZW50PXs8QWRkUmVjaXBlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy9cclxuLy8gY29uc3QgZmFrZVJlY2lwZXMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBuYW1lOiBcIlBvbWlkb3LDs3drYVwiLFxyXG4vLyAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcclxuLy8gICAgIHByb2R1Y3RzOiBbMSwgMiwgM11cclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAyLFxyXG4vLyAgICAgbmFtZTogXCJDb8WbIGlubmVnb1wiLFxyXG4vLyAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcclxuLy8gICAgIHByb2R1Y3RzOiBbMywgMV1cclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAzLFxyXG4vLyAgICAgbmFtZTogXCJKZXN6Y3plIGlubnkgcHJ6ZXBpc1wiLFxyXG4vLyAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcclxuLy8gICAgIHByb2R1Y3RzOiBbNSwgNl1cclxuLy8gICB9XHJcbi8vIF07XHJcblxyXG5jb25zdCBBbGxSZWNpcGVzID0gKHthbGxSZWNpcGVzfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+V3N6eXN0a2llIHByemVwaXN5PC9oMT5cclxuICAgICAgPFBhbmVsIGljb25OYW1lPXtcImZvbGRlclwifVxyXG4gICAgICAgICAgICAgcGF0aD17XCJyZWNpcGVzXCJ9XHJcbiAgICAgICAgICAgICBsaXN0RWxlbWVudHM9e2FsbFJlY2lwZXN9XHJcbiAgICAgICAgICAgICBoZWFkaW5nPXtmYWxzZX1cclxuICAgICAgICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBhbGxSZWNpcGVzOiBzdGF0ZS5yZWNpcGVzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQWxsUmVjaXBlcylcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEFsbFJlY2lwZXM7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWxsUmVjaXBlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWNpcGVzXCI7XHJcbmltcG9ydCBBZGRSZWNpcGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVjaXBlcy9BZGRcIjtcclxuXHJcbmNvbnN0IFJlY2lwZXNDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBbGxSZWNpcGVzIC8+XHJcbiAgICAgICAgICAgIDxBZGRSZWNpcGUgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVzQ29udGFpbmVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNjZTYzMzU5MjM1MWFjMjA5ZDA1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQnJvd3NlclJvdXRlciIsIlJvdXRlIiwiUm91dGVyIiwiUm91dGVzIiwiUHJvdmlkZXIiLCJzdG9yZSIsIlBhbmVsIiwiQWxsUHJvZHVjdHMiLCJBZGRQcm9kdWN0IiwiQWxsUmVjaXBlcyIsIkFkZFJlY2lwZSIsIkhvbWUiLCJQcm9kdWN0c0NvbnRhaW5lciIsIlJlY2lwZXNDb250YWluZXIiLCJNYWluIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiZXhhY3QiLCJwYXRoIiwiZWxlbWVudCIsImNvbm5lY3QiLCJfcmVmIiwiYWxsUmVjaXBlcyIsImNsYXNzTmFtZSIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwiaGVhZGluZyIsImZvb3RlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVjaXBlcyJdLCJzb3VyY2VSb290IjoiIn0=