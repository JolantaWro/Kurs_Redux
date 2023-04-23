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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    filterValue = _useParams.filterValue;
  var products = props.products;
  var filteredProduct = [];
  if (filterValue === 'undefined') {
    var _filteredProduct = products;
  } else {
    var _filteredProduct2 = products.filter(function (prod) {
      return prod.price <= parseInt(filterValue);
    });
  }
  console.log(filterValue);
  console.log(products);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("211573dda47b21a9cc7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMDc4OWI0YTExMTVlYmVmYTQzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ2lCO0FBQ1A7QUFDRTtBQUNxQjtBQUNXO0FBR3RFLElBQU1RLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFFBQVEsRUFBRUosa0VBQWdCLENBQUNHLEtBQUssQ0FBQztJQUNqQ0UsR0FBRyxFQUFFSixrRUFBZ0IsQ0FBQ0UsS0FBSztFQUMvQixDQUFDO0FBQUEsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1QsVUFBVSxFQUFFLFNBQUFBLFdBQUNVLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNULDBEQUFVLENBQUNVLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERULGFBQWEsRUFBRSxTQUFBQSxjQUFDUyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDUiw2REFBYSxDQUFDUyxPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hFLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUs7RUFFN0IsSUFBQUMsVUFBQSxHQUF3QmhCLDJEQUFTLEVBQUU7SUFBM0JpQixXQUFXLEdBQUFELFVBQUEsQ0FBWEMsV0FBVztFQUNuQixJQUFRUixRQUFRLEdBQUtNLEtBQUssQ0FBbEJOLFFBQVE7RUFDaEIsSUFBTVMsZUFBZSxHQUFHLEVBQUU7RUFDMUIsSUFBR0QsV0FBVyxLQUFLLFdBQVcsRUFBQztJQUMzQixJQUFNQyxnQkFBZSxHQUFHVCxRQUFRO0VBQ3BDLENBQUMsTUFBTTtJQUNILElBQU1TLGlCQUFlLEdBQUdULFFBQVEsQ0FBQ1UsTUFBTSxDQUFDLFVBQUFDLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNDLEtBQUssSUFBSUMsUUFBUSxDQUFDTCxXQUFXLENBQUM7SUFBQSxFQUFDO0VBQ3hGO0VBRUFNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxXQUFXLENBQUM7RUFFeEJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixRQUFRLENBQUM7RUFHckIsb0JBQ0lWLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRyx3REFBSSxFQUFBeUIsUUFBQSxLQUFNWixLQUFLO0lBQUVOLFFBQVEsRUFBRVM7RUFBZ0IsR0FBRyxDQUNoRDtBQUVYLENBQUM7QUFFRCxpRUFBZWpCLG9EQUFPLENBQUNNLGVBQWUsRUFBRUksa0JBQWtCLENBQUMsQ0FBQ0csYUFBYSxDQUFDOzs7Ozs7OztVQ2hEMUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3Rcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtwcm9kdWN0c1NlbGVjdG9yLCBzdW1QcmljZVNlbGVjdG9yfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxufSk7XG5cbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpXG59KTtcblxuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcbiAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3QgPSBbXVxuICAgIGlmKGZpbHRlclZhbHVlID09PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IHByb2R1Y3RzXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0ID0gcHJvZHVjdHMuZmlsdGVyKHByb2QgPT4gcHJvZC5wcmljZSA8PSBwYXJzZUludChmaWx0ZXJWYWx1ZSkpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKVxuXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q2FydCB7IC4uLnByb3BzfSBwcm9kdWN0cz17ZmlsdGVyZWRQcm9kdWN0fSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydENvbnRhaW5lcik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTE1NzNkZGE0N2IyMWE5Y2M3ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVBhcmFtcyIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJwcm9kdWN0c1NlbGVjdG9yIiwic3VtUHJpY2VTZWxlY3RvciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvZHVjdHMiLCJzdW0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiLCJDYXJ0Q29udGFpbmVyIiwicHJvcHMiLCJfdXNlUGFyYW1zIiwiZmlsdGVyVmFsdWUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJmaWx0ZXIiLCJwcm9kIiwicHJpY2UiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=