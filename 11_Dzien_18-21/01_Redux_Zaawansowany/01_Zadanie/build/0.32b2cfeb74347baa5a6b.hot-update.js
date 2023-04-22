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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8bde29b56ea127221f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMmIyY2ZlYjc0MzQ3YmFhNWE2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQU1DLFVBQVUsR0FBRUMsUUFBUSxDQUFDTiwyREFBUyxFQUFFLENBQUNPLEVBQUUsQ0FBQztFQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSixVQUFVLENBQUM7RUFDbkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUNMLFdBQVcsRUFBWEE7RUFBVyxDQUFDLENBQUM7O0VBRTFCOztFQUVBLElBQU1NLGFBQWEsR0FBR1QsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFQyxVQUFVLENBQUM7RUFDekRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxhQUFhLENBQUM7RUFLMUIsb0JBQ0laLDBEQUFBLDJCQUNJQSwwREFBQSxZQUFXLENBc0JUO0FBRWQsQ0FBQztBQUVELGlFQUFlSSxhQUFhOzs7Ozs7OztVQzdDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2dldFByb2R1Y3R9IGZyb20gXCIuLi8uLi9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdFwiO1xuXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ySWQ9IHBhcnNlSW50KHVzZVBhcmFtcygpLmlkKVxuICAgIGNvbnNvbGUubG9nKFwic2VsZWt0b3JcIiwgc2VsZWN0b3JJZClcbiAgICBjb25zb2xlLmxvZyh7YWxsUHJvZHVjdHN9KVxuXG4gICAgLy8gY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHNlbGVjdG9ySWQpO1xuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkU3RhdGUpXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPnt9PC9oMj5cbiAgICAgICAgICAgIHsvKjxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPiovfVxuICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPHA+UHJvZHVrdCB7ZmlsdGVyZWRTdGF0ZS5pZH08L3A+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+Ki99XG4gICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XG4gICAgICAgICAgICB7LyogICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPiovfVxuICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+Ki99XG4gICAgICAgICAgICB7LyogIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJRChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+Ki99XG4gICAgICAgICAgICB7LyogICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+Ki99XG4gICAgICAgICAgICB7LyogICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKCovfVxuICAgICAgICAgICAgey8qICAgICAgICAgIDxvcHRpb24ga2V5PXtwcm9kdWN0LmlkfSB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICkpfSovfVxuICAgICAgICAgICAgey8qICA8L3NlbGVjdD4qL31cbiAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPC9wPiovfVxuICAgICAgICAgICAgey8qICAgICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgIHsvKiAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgIHsvKjwvYXJ0aWNsZT4qL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYThiZGUyOWI1NmVhMTI3MjIxZjhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImdldFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0IiwiX3JlZiIsImFsbFByb2R1Y3RzIiwic2VsZWN0b3JJZCIsInBhcnNlSW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRTdGF0ZSIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9