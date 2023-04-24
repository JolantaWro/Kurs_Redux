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






var CartContainer = function CartContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(props.products, filterValue);
  var sum = filteredProduct.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct,
    sum: sum
  })));
};
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1301886833526dc3a155")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMGZlMzNlZjVmN2M2M2UwMjIwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNOO0FBQ1A7QUFDRTtBQUNxQjtBQUM2QjtBQUV4RixJQUFNVyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQUssRUFBSztFQUM3QixJQUFBQyxVQUFBLEdBQXdCViwyREFBUyxFQUFFO0lBQTNCVyxXQUFXLEdBQUFELFVBQUEsQ0FBWEMsV0FBVztFQUNuQixJQUFNQyxlQUFlLEdBQUdQLGtFQUFnQixDQUFDSSxLQUFLLENBQUNJLFFBQVEsRUFBRUYsV0FBVyxDQUFDO0VBRXJFLElBQU1HLEdBQUcsR0FBR0YsZUFBZSxDQUFDRyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJO0lBQUEsT0FDekNELEdBQUcsR0FBR0UsTUFBTSxDQUFDRCxJQUFJLENBQUNFLEtBQUssQ0FBQztFQUFBLENBQzNCLEVBQUUsQ0FBQyxDQUFDO0VBSUwsb0JBQ0l0QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ssd0RBQUksRUFBQW9CLFFBQUEsS0FBTWIsS0FBSztJQUFFSSxRQUFRLEVBQUVELGVBQWdCO0lBQUNFLEdBQUcsRUFBRUE7RUFBSSxHQUFHLENBQzFEO0FBSVgsQ0FBQztBQUVELElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJYLFFBQVEsRUFBRVAsa0VBQWdCLENBQUNrQixLQUFLLENBQUM7SUFDakNWLEdBQUcsRUFBRVAsa0VBQWdCLENBQUNpQixLQUFLO0VBQy9CLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcEN2QixVQUFVLEVBQUUsU0FBQUEsV0FBQ3dCLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUN2QiwwREFBVSxDQUFDd0IsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUN0RHZCLGFBQWEsRUFBRSxTQUFBQSxjQUFDdUIsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ3RCLDZEQUFhLENBQUN1QixPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hFLENBQUM7QUFBQSxDQUFDO0FBRUYsaUVBQWUxQixvREFBTyxDQUFDc0IsZUFBZSxFQUFFRSxrQkFBa0IsQ0FBQyxDQUFDakIsYUFBYSxDQUFDOzs7Ozs7OztVQ3JDMUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHMsIHByb2R1Y3RzU2VsZWN0b3IsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuY29uc3QgQ2FydENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IGZpbHRlcmVkUHJvZHVjdHMocHJvcHMucHJvZHVjdHMsIGZpbHRlclZhbHVlKVxuXG4gICAgY29uc3Qgc3VtID0gZmlsdGVyZWRQcm9kdWN0LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXG4gICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxuICAgICksIDApXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDYXJ0IHsgLi4ucHJvcHN9IHByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3R9IHN1bT17c3VtfSAvPlxuICAgICAgICA8Lz5cbiAgICApXG5cblxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxufSk7XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRDb250YWluZXIpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTMwMTg4NjgzMzUyNmRjM2ExNTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJmaWx0ZXJlZFByb2R1Y3RzIiwicHJvZHVjdHNTZWxlY3RvciIsInN1bVByaWNlU2VsZWN0b3IiLCJDYXJ0Q29udGFpbmVyIiwicHJvcHMiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJwcm9kdWN0cyIsInN1bSIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJOdW1iZXIiLCJwcmljZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9