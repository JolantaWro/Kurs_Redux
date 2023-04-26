"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);






var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state)
    // sum: sumPriceSelector(state)
  };
};

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
  };
};
var CartContainer = function CartContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var products = props.products;
  console.log(filterValue);
  console.log(products);
  var filteredProduct = products.filter(function (prod) {
    return prod.price <= parseInt(filterValue);
  });
  var sum = filteredProduct.reduce(function (acc, item) {
    return acc + Number(item.price);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct,
    sum: sum
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94b6620fd586f3aae3a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMjk2YmNjYTU5NjRjNWQ5NzUxNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ2lCO0FBQ1A7QUFDRTtBQUNxQjtBQUNXO0FBR3RFLElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFFBQVEsRUFBRUosa0VBQWdCLENBQUNHLEtBQUs7SUFDaEM7RUFDSixDQUFDO0FBQUEsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1IsVUFBVSxFQUFFLFNBQUFBLFdBQUNTLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNSLDBEQUFVLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERSLGFBQWEsRUFBRSxTQUFBQSxjQUFDUSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDUCw2REFBYSxDQUFDUSxPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hFLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUs7RUFFN0IsSUFBQUMsVUFBQSxHQUF3QmYsMkRBQVMsRUFBRTtJQUEzQmdCLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBQ25CLElBQVFQLFFBQVEsR0FBS0ssS0FBSyxDQUFsQkwsUUFBUTtFQUVoQlEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFdBQVcsQ0FBQztFQUV4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULFFBQVEsQ0FBQztFQUNyQixJQUFNVSxlQUFlLEdBQUdWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDLFVBQUFDLElBQUk7SUFBQSxPQUFJQSxJQUFJLENBQUNDLEtBQUssSUFBSUMsUUFBUSxDQUFDUCxXQUFXLENBQUM7RUFBQSxFQUFDO0VBQ3BGLElBQU1RLEdBQUcsR0FBR0wsZUFBZSxDQUFDTSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FBTUQsR0FBRyxHQUFHRSxNQUFNLENBQUNELElBQUksQ0FBQ0wsS0FBSyxDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBRzdFLG9CQUNJdkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNHLHdEQUFJLEVBQUE2QixRQUFBLEtBQU1qQixLQUFLO0lBQUVMLFFBQVEsRUFBRVUsZUFBZ0I7SUFBQ0ssR0FBRyxFQUFFQTtFQUFJLEdBQUcsQ0FDMUQ7QUFFWCxDQUFDO0FBRUQsaUVBQWV2QixvREFBTyxDQUFDTSxlQUFlLEVBQUVHLGtCQUFrQixDQUFDLENBQUNHLGFBQWEsQ0FBQzs7Ozs7Ozs7VUM1QzFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXG4vLyBwYW1pxJl0YWogbyB3eWVrc3BvcnRvd2FuaXUga29udGVuZXJhOlxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7cHJvZHVjdHNTZWxlY3Rvciwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIC8vIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZSlcbn0pO1xuXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKVxufSk7XG5cblxuY29uc3QgQ2FydENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgeyBmaWx0ZXJWYWx1ZSB9ID0gdXNlUGFyYW1zKCk7XG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gcHJvcHM7XG5cbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSlcblxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IHByb2R1Y3RzLmZpbHRlcihwcm9kID0+IHByb2QucHJpY2UgPD0gcGFyc2VJbnQoZmlsdGVyVmFsdWUpKTtcbiAgICBjb25zdCBzdW0gPSBmaWx0ZXJlZFByb2R1Y3QucmVkdWNlKChhY2MsIGl0ZW0pID0+IChhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSkpKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdH0gc3VtPXtzdW19IC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0Q29udGFpbmVyKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk0YjY2MjBmZDU4NmYzYWFlM2E2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUGFyYW1zIiwiY29ubmVjdCIsIkNhcnQiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCIsIkNhcnRDb250YWluZXIiLCJwcm9wcyIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJlZFByb2R1Y3QiLCJmaWx0ZXIiLCJwcm9kIiwicHJpY2UiLCJwYXJzZUludCIsInN1bSIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=