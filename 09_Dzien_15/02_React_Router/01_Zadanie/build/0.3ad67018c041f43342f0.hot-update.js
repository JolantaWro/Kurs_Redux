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
  console.log(filterValue);
  console.log(products);
  var filteredProduct = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filteredProducts)(products, filterValue);
  // const sum = filteredProduct.reduce((acc, item) => (acc + Number(item.price)))

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
/******/ 	__webpack_require__.h = () => ("0f16e67fcca85b15261a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYWQ2NzAxOGMwNDFmNDMzNDJmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ0s7QUFDUDtBQUNFO0FBQ3FCO0FBQzZCO0FBR3hGLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUJDLFFBQVEsRUFBRUosa0VBQWdCLENBQUNHLEtBQUssQ0FBQztJQUNqQ0UsR0FBRyxFQUFFSixrRUFBZ0IsQ0FBQ0UsS0FBSztFQUMvQixDQUFDO0FBQUEsQ0FBQzs7QUFFRjs7QUFFQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFHQyxRQUFRO0VBQUEsT0FBSztJQUNwQ1YsVUFBVSxFQUFFLFNBQUFBLFdBQUNXLE9BQU87TUFBQSxPQUFLRCxRQUFRLENBQUNWLDBEQUFVLENBQUNXLE9BQU8sQ0FBQyxDQUFDO0lBQUE7SUFDdERWLGFBQWEsRUFBRSxTQUFBQSxjQUFDVSxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDVCw2REFBYSxDQUFDVSxPQUFPLENBQUMsQ0FBQztJQUFBO0VBQ2hFLENBQUM7QUFBQSxDQUFDO0FBR0YsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxLQUFLLEVBQUs7RUFFN0IsSUFBQUMsU0FBQSxHQUEwQ2xCLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFtQixVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE5Q0csYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBSXRDLElBQUFJLFVBQUEsR0FBd0J0QiwyREFBUyxFQUFFO0lBQTNCdUIsV0FBVyxHQUFBRCxVQUFBLENBQVhDLFdBQVc7RUFDbkIsSUFBUWIsUUFBUSxHQUFLTSxLQUFLLENBQWxCTixRQUFRO0VBRWhCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVyxDQUFDO0VBRXhCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsUUFBUSxDQUFDO0VBQ3JCLElBQU1nQixlQUFlLEdBQUdyQixrRUFBZ0IsQ0FBQ0ssUUFBUSxFQUFFYSxXQUFXLENBQUM7RUFDL0Q7O0VBR0Esb0JBQ0l6QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksd0RBQUksRUFBQTJCLFFBQUEsS0FBTWIsS0FBSztJQUFFTixRQUFRLEVBQUVnQjtFQUFnQixHQUFHLENBQ2hEO0FBRVgsQ0FBQztBQUVELGlFQUFlekIsb0RBQU8sQ0FBQ08sZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDRyxhQUFhLENBQUM7Ozs7Ozs7O1VDaEQxRSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHMsIHByb2R1Y3RzU2VsZWN0b3IsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0c1NlbGVjdG9yKHN0YXRlKSxcbiAgICBzdW06IHN1bVByaWNlU2VsZWN0b3Ioc3RhdGUpXG59KTtcblxuLy92YWx1ZXM6IHN0YXRlLnJvdXRlc1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFkZFByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChhZGRQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXG59KTtcblxuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbc2VsZWN0b3JWYWx1ZSwgc2V0U2VsZWN0b3JWYWx1ZV0gPSB1c2VTdGF0ZSgwKVxuICAgIFxuXG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcblxuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKVxuXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpXG4gICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0ID0gZmlsdGVyZWRQcm9kdWN0cyhwcm9kdWN0cywgZmlsdGVyVmFsdWUpXG4gICAgLy8gY29uc3Qgc3VtID0gZmlsdGVyZWRQcm9kdWN0LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoYWNjICsgTnVtYmVyKGl0ZW0ucHJpY2UpKSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDYXJ0IHsgLi4ucHJvcHN9IHByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3R9IC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0Q29udGFpbmVyKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBmMTZlNjdmY2NhODViMTUyNjFhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyZWRQcm9kdWN0cyIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCIsIkNhcnRDb250YWluZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdG9yVmFsdWUiLCJzZXRTZWxlY3RvclZhbHVlIiwiX3VzZVBhcmFtcyIsImZpbHRlclZhbHVlIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkUHJvZHVjdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==