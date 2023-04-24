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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
  };
};
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
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(props.products, filterValue);
  var suma = filteredProduct.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct,
    sum: suma
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("02d419910756e5ffccae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMGEyMzNiYjhiOWQxMTE4ZTJjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNOO0FBQ1A7QUFDRTtBQUNxQjtBQUM2QjtBQUl4RixJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxRQUFRLEVBQUVKLGtFQUFnQixDQUFDRyxLQUFLLENBQUM7SUFDakNFLEdBQUcsRUFBRUosa0VBQWdCLENBQUNFLEtBQUs7RUFDL0IsQ0FBQztBQUFBLENBQUM7QUFHRixJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1YsVUFBVSxFQUFFLFNBQUFBLFdBQUNXLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNWLDBEQUFVLENBQUNXLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERWLGFBQWEsRUFBRSxTQUFBQSxjQUFDVSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDVCw2REFBYSxDQUFDVSxPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hFLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUs7RUFDN0IsSUFBQUMsVUFBQSxHQUF3QmpCLDJEQUFTLEVBQUU7SUFBM0JrQixXQUFXLEdBQUFELFVBQUEsQ0FBWEMsV0FBVztFQUNuQixJQUFNQyxlQUFlLEdBQUdkLGtFQUFnQixDQUFDVyxLQUFLLENBQUNOLFFBQVEsRUFBRVEsV0FBVyxDQUFDO0VBRXJFLElBQU1FLElBQUksR0FBR0QsZUFBZSxDQUFDRSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDMUNELEdBQUcsR0FBR0UsTUFBTSxDQUFDRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUFBLENBQzNCLEVBQUUsQ0FBQyxDQUFDO0VBSUwsb0JBQ0k1QiwwREFBQSxDQUFBQSx1REFBQSxRQUNLcUIsV0FBVyxnQkFBR3JCLDBEQUFBLENBQUNLLHdEQUFJLEVBQUEwQixRQUFBLEtBQU1aLEtBQUs7SUFBRU4sUUFBUSxFQUFFUyxlQUFnQjtJQUFDUixHQUFHLEVBQUVTO0VBQUssR0FBRyxnQkFBSXZCLDBEQUFBLENBQUNLLHdEQUFJLEVBQU1jLEtBQUssQ0FBSSxDQUVsRztBQUVYLENBQUM7QUFFRCxpRUFBZWYsb0RBQU8sQ0FBQ08sZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDRyxhQUFhLENBQUM7Ozs7Ozs7O1VDdkMxRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7ZmlsdGVyZWRQcm9kdWN0cywgcHJvZHVjdHNTZWxlY3Rvciwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxufSk7XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxufSk7XG5cblxuY29uc3QgQ2FydENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IGZpbHRlcmVkUHJvZHVjdHMocHJvcHMucHJvZHVjdHMsIGZpbHRlclZhbHVlKVxuXG4gICAgY29uc3Qgc3VtYSA9IGZpbHRlcmVkUHJvZHVjdC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbiAgICApLCAwKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ZmlsdGVyVmFsdWUgPyA8Q2FydCB7IC4uLnByb3BzfSBwcm9kdWN0cz17ZmlsdGVyZWRQcm9kdWN0fSBzdW09e3N1bWF9IC8+IDogIDxDYXJ0IHsgLi4ucHJvcHN9IC8+fVxuICAgICAgICAgICAgey8qPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdH0gc3VtPXtzdW19IC8+Ki99XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRDb250YWluZXIpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDJkNDE5OTEwNzU2ZTVmZmNjYWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJmaWx0ZXJlZFByb2R1Y3RzIiwicHJvZHVjdHNTZWxlY3RvciIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiQ2FydENvbnRhaW5lciIsInByb3BzIiwiX3VzZVBhcmFtcyIsImZpbHRlclZhbHVlIiwiZmlsdGVyZWRQcm9kdWN0Iiwic3VtYSIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiLCJwcmljZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==