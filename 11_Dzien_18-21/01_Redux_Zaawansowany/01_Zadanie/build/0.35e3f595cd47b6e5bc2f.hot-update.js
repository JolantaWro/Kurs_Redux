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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);



var SingleProduct = function SingleProduct(_ref) {
  var allProducts = _ref.allProducts;
  var selectorId = parseInt((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id);
  console.log("selektor", selectorId);
  console.log({
    allProducts: allProducts
  });

  // const [idProduct, setIdProduct] = useState(useParams().id)

  var filteredState = (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__.getProduct)(allProducts, selectorId);
  console.log(filteredState);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", filteredState.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("25b41b410571fba45c8a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNWUzZjU5NWNkNDdiNmU1YmMyZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQU1DLFVBQVUsR0FBRUMsUUFBUSxDQUFDTiwyREFBUyxFQUFFLENBQUNPLEVBQUUsQ0FBQztFQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSixVQUFVLENBQUM7RUFDbkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUNMLFdBQVcsRUFBWEE7RUFBVyxDQUFDLENBQUM7O0VBRTFCOztFQUVBLElBQU1NLGFBQWEsR0FBR1QsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFQyxVQUFVLENBQUM7RUFDekRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLENBQUM7RUFLMUIsb0JBQ0laLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFTYyxTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDZCwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCZCwwREFBQSxZQUFHLFVBQVEsRUFBQ1ksYUFBYSxDQUFDSCxFQUFFLENBQUssZUFDakNULDBEQUFBO0lBQVFlLElBQUksRUFBQyxRQUFRO0lBQUNELFNBQVMsRUFBQyxRQUFRO0lBQUNFLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTSxJQUFJO0lBQUE7RUFBQyxFQUFHLENBQzlELGVBQ05oQiwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBYyxnQkFDekJkLDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFPLGdCQUNsQmQsMERBQUE7SUFBR2MsU0FBUyxFQUFDO0VBQXdCLGdCQUNqRGQsMERBQUE7SUFBTWMsU0FBUyxFQUFDO0VBQVEsRUFPakIsZUFDU2QsMERBQUE7SUFBTWMsU0FBUyxFQUFDO0VBQXVCLGdCQUFDZCwwREFBQTtJQUFHYyxTQUFTLEVBQUM7RUFBb0IsRUFBSyxDQUFPLENBQ3JGLENBQ0YsQ0FDSixDQUNBLENBQ1I7QUFFZCxDQUFDO0FBRUQsaUVBQWVWLGFBQWE7Ozs7Ozs7O1VDNUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JJZD0gcGFyc2VJbnQodXNlUGFyYW1zKCkuaWQpXG4gICAgY29uc29sZS5sb2coXCJzZWxla3RvclwiLCBzZWxlY3RvcklkKVxuICAgIGNvbnNvbGUubG9nKHthbGxQcm9kdWN0c30pXG5cbiAgICAvLyBjb25zdCBbaWRQcm9kdWN0LCBzZXRJZFByb2R1Y3RdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgc2VsZWN0b3JJZCk7XG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRTdGF0ZSlcblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByb2R1a3Qge2ZpbHRlcmVkU3RhdGUuaWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICB7Lyo8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SUQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PiovfVxuICAgICAgICAgICAgICB7LyogIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPiovfVxuICAgICAgICAgICAgICB7LyogICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICgqL31cbiAgICAgICAgICAgICAgey8qICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICApKX0qL31cbiAgICAgICAgICAgICAgey8qPC9zZWxlY3Q+Ki99XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI1YjQxYjQxMDU3MWZiYTQ1YzhhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJhbGxQcm9kdWN0cyIsInNlbGVjdG9ySWQiLCJwYXJzZUludCIsImlkIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkU3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9