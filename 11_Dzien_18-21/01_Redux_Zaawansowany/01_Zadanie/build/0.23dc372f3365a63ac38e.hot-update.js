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
  var _filteredState = filteredState(),
    nameP = _filteredState.nameP,
    idP = _filteredState.idP;
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
/******/ 	__webpack_require__.h = () => ("67dff3d897cb81d12ded")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yM2RjMzcyZjMzNjVhNjNhYzM4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQU1DLFVBQVUsR0FBRUMsUUFBUSxDQUFDTiwyREFBUyxFQUFFLENBQUNPLEVBQUUsQ0FBQztFQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSixVQUFVLENBQUM7RUFDbkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUNMLFdBQVcsRUFBWEE7RUFBVyxDQUFDLENBQUM7O0VBRTFCOztFQUVBLElBQU1NLGFBQWEsR0FBR1QsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFQyxVQUFVLENBQUM7RUFDekQsSUFBQU0sY0FBQSxHQUFxQkQsYUFBYSxFQUFFO0lBQTdCRSxLQUFLLEdBQUFELGNBQUEsQ0FBTEMsS0FBSztJQUFFQyxHQUFHLEdBQUFGLGNBQUEsQ0FBSEUsR0FBRztFQUNqQkwsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGFBQWEsQ0FBQztFQUMxQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssQ0FBQztFQUtsQixvQkFDSWQsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVNpQixTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDakIsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFnQixnQkFDM0JqQiwwREFBQSxZQUFHLFVBQVEsRUFBQ2MsS0FBSyxDQUFLLGVBQ3RCZCwwREFBQTtJQUFRa0IsSUFBSSxFQUFDLFFBQVE7SUFBQ0QsU0FBUyxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTm5CLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBYyxnQkFDekJqQiwwREFBQTtJQUFLaUIsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCakIsMERBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUF3QixnQkFDakRqQiwwREFBQTtJQUFNaUIsU0FBUyxFQUFDO0VBQVEsRUFPakIsZUFDU2pCLDBEQUFBO0lBQU1pQixTQUFTLEVBQUM7RUFBdUIsZ0JBQUNqQiwwREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQW9CLEVBQUssQ0FBTyxDQUNyRixDQUNGLENBQ0osQ0FDQSxDQUNSO0FBRWQsQ0FBQztBQUVELGlFQUFlYixhQUFhOzs7Ozs7OztVQzlDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2dldFByb2R1Y3R9IGZyb20gXCIuLi8uLi9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdFwiO1xuXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ySWQ9IHBhcnNlSW50KHVzZVBhcmFtcygpLmlkKVxuICAgIGNvbnNvbGUubG9nKFwic2VsZWt0b3JcIiwgc2VsZWN0b3JJZClcbiAgICBjb25zb2xlLmxvZyh7YWxsUHJvZHVjdHN9KVxuXG4gICAgLy8gY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHNlbGVjdG9ySWQpO1xuICAgIGNvbnN0IHtuYW1lUCwgaWRQfSA9IGZpbHRlcmVkU3RhdGUoKVxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkU3RhdGUpXG4gICAgY29uc29sZS5sb2cobmFtZVApXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IHtuYW1lUH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgIHsvKjxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJRChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+Ki99XG4gICAgICAgICAgICAgIHsvKiAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKCovfVxuICAgICAgICAgICAgICB7LyogICAgICAgIDxvcHRpb24ga2V5PXtwcm9kdWN0LmlkfSB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj4qL31cbiAgICAgICAgICAgICAgey8qICAgICkpfSovfVxuICAgICAgICAgICAgICB7Lyo8L3NlbGVjdD4qL31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjdkZmYzZDg5N2NiODFkMTJkZWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImdldFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0IiwiX3JlZiIsImFsbFByb2R1Y3RzIiwic2VsZWN0b3JJZCIsInBhcnNlSW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRTdGF0ZSIsIl9maWx0ZXJlZFN0YXRlIiwibmFtZVAiLCJpZFAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9