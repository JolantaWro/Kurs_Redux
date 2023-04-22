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
  var nameP = filteredState.nameP,
    idP = filteredState.idP;
  console.log(filteredState);
  console.log(nameP);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", nameP), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("23dc372f3365a63ac38e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNWI0MWI0MTA1NzFmYmE0NWM4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQU1DLFVBQVUsR0FBRUMsUUFBUSxDQUFDTiwyREFBUyxFQUFFLENBQUNPLEVBQUUsQ0FBQztFQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSixVQUFVLENBQUM7RUFDbkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUNMLFdBQVcsRUFBWEE7RUFBVyxDQUFDLENBQUM7O0VBRTFCOztFQUVBLElBQU1NLGFBQWEsR0FBR1QsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFQyxVQUFVLENBQUM7RUFDekQsSUFBT00sS0FBSyxHQUFTRCxhQUFhLENBQTNCQyxLQUFLO0lBQUVDLEdBQUcsR0FBSUYsYUFBYSxDQUFwQkUsR0FBRztFQUNqQkosT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWEsQ0FBQztFQUMxQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQztFQUtsQixvQkFDSWIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVNnQixTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDaEIsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFnQixnQkFDM0JoQiwwREFBQSxZQUFHLFVBQVEsRUFBQ2EsS0FBSyxDQUFLLGVBQ3RCYiwwREFBQTtJQUFRaUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0QsU0FBUyxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTmxCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBYyxnQkFDekJoQiwwREFBQTtJQUFLZ0IsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCaEIsMERBQUE7SUFBR2dCLFNBQVMsRUFBQztFQUF3QixnQkFDakRoQiwwREFBQTtJQUFNZ0IsU0FBUyxFQUFDO0VBQVEsRUFPakIsZUFDU2hCLDBEQUFBO0lBQU1nQixTQUFTLEVBQUM7RUFBdUIsZ0JBQUNoQiwwREFBQTtJQUFHZ0IsU0FBUyxFQUFDO0VBQW9CLEVBQUssQ0FBTyxDQUNyRixDQUNGLENBQ0osQ0FDQSxDQUNSO0FBRWQsQ0FBQztBQUVELGlFQUFlWixhQUFhOzs7Ozs7OztVQzlDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2dldFByb2R1Y3R9IGZyb20gXCIuLi8uLi9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdFwiO1xuXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ySWQ9IHBhcnNlSW50KHVzZVBhcmFtcygpLmlkKVxuICAgIGNvbnNvbGUubG9nKFwic2VsZWt0b3JcIiwgc2VsZWN0b3JJZClcbiAgICBjb25zb2xlLmxvZyh7YWxsUHJvZHVjdHN9KVxuXG4gICAgLy8gY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHNlbGVjdG9ySWQpO1xuICAgIGNvbnN0IHtuYW1lUCwgaWRQfSA9IGZpbHRlcmVkU3RhdGVcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFN0YXRlKVxuICAgIGNvbnNvbGUubG9nKG5hbWVQKVxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJvZHVrdCB7bmFtZVB9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICB7Lyo8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SUQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PiovfVxuICAgICAgICAgICAgICB7LyogIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPiovfVxuICAgICAgICAgICAgICB7LyogICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICgqL31cbiAgICAgICAgICAgICAgey8qICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICApKX0qL31cbiAgICAgICAgICAgICAgey8qPC9zZWxlY3Q+Ki99XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIzZGMzNzJmMzM2NWE2M2FjMzhlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJhbGxQcm9kdWN0cyIsInNlbGVjdG9ySWQiLCJwYXJzZUludCIsImlkIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkU3RhdGUiLCJuYW1lUCIsImlkUCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=