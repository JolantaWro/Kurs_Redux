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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);






var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectorValue = _useState2[0],
    setSelectorValue = _useState2[1];
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var products = props.products;
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(products, filterValue);
  // const sum = filteredProduct.reduce((acc, item) => (acc + Number(item.price)))

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(filteredProduct)
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: products
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0bed5fcfa29be8c03295")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lM2MzZWUxM2I4YzQ0NjVhNjgzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ0s7QUFDUDtBQUNFO0FBQ3FCO0FBQzZCO0FBR3hGLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFFBQVEsRUFBRUosa0VBQWdCLENBQUNHLEtBQUssQ0FBQztJQUNqQ0UsR0FBRyxFQUFFSixrRUFBZ0IsQ0FBQ0UsS0FBSztFQUMvQixDQUFDO0FBQUEsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1YsVUFBVSxFQUFFLFNBQUFBLFdBQUNXLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNWLDBEQUFVLENBQUNXLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERWLGFBQWEsRUFBRSxTQUFBQSxjQUFDVSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDVCw2REFBYSxDQUFDVSxPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hFLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUs7RUFFN0IsSUFBQUMsU0FBQSxHQUEwQ2xCLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFtQixVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBSXRDLElBQUFJLFVBQUEsR0FBd0J0QiwyREFBUyxFQUFFO0lBQTNCdUIsV0FBVyxHQUFBRCxVQUFBLENBQVhDLFdBQVc7RUFDbkIsSUFBUWIsUUFBUSxHQUFLTSxLQUFLLENBQWxCTixRQUFRO0VBRWhCLElBQU1jLGVBQWUsR0FBR25CLGtFQUFnQixDQUFDSyxRQUFRLEVBQUVhLFdBQVcsQ0FBQztFQUMvRDs7RUFHQSxvQkFDSXpCLDBEQUFBLENBQUFBLHVEQUFBLFFBQ0t5QixXQUFXLGdCQUFHekIsMERBQUEsQ0FBQ0ksd0RBQUksRUFBQXlCLFFBQUEsS0FBTVgsS0FBSztJQUFFTixRQUFRLEVBQUVjLGVBQWdCO0lBQUNiLEdBQUcsRUFBRUosa0VBQWdCLENBQUNpQixlQUFlO0VBQUUsR0FBRyxnQkFBSTFCLDBEQUFBLENBQUNJLHdEQUFJLEVBQUF5QixRQUFBLEtBQU1YLEtBQUs7SUFBRU4sUUFBUSxFQUFFQTtFQUFTLEdBQUcsQ0FDbko7QUFFWCxDQUFDO0FBRUQsaUVBQWVULG9EQUFPLENBQUNPLGVBQWUsRUFBRUksa0JBQWtCLENBQUMsQ0FBQ0csYUFBYSxDQUFDOzs7Ozs7OztVQzdDMUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3Rcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtmaWx0ZXJlZFByb2R1Y3RzLCBwcm9kdWN0c1NlbGVjdG9yLCBzdW1QcmljZVNlbGVjdG9yfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxufSk7XG5cbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxufSk7XG5cblxuY29uc3QgQ2FydENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdG9yVmFsdWUsIHNldFNlbGVjdG9yVmFsdWVdID0gdXNlU3RhdGUoMClcblxuXG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IGZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMsIGZpbHRlclZhbHVlKVxuICAgIC8vIGNvbnN0IHN1bSA9IGZpbHRlcmVkUHJvZHVjdC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKGFjYyArIE51bWJlcihpdGVtLnByaWNlKSkpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7ZmlsdGVyVmFsdWUgPyA8Q2FydCB7IC4uLnByb3BzfSBwcm9kdWN0cz17ZmlsdGVyZWRQcm9kdWN0fSBzdW09e3N1bVByaWNlU2VsZWN0b3IoZmlsdGVyZWRQcm9kdWN0KX0gLz4gOiAgPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRDb250YWluZXIpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGJlZDVmY2ZhMjliZThjMDMyOTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJmaWx0ZXJlZFByb2R1Y3RzIiwicHJvZHVjdHNTZWxlY3RvciIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiQ2FydENvbnRhaW5lciIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0b3JWYWx1ZSIsInNldFNlbGVjdG9yVmFsdWUiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=