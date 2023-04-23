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
    // products: state.products.products,
    // sum: state.products.sum,
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, filterValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: filteredProduct
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    products: products
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(CartContainer));

/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Reducer zwracający tablicę produktów




// const initialState = {
//     products: [],
//     sum: 0,
// };

var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    // case ADD_PRODUCT:
    //     const newProducts = [...state.products, action.payload];
    //     const newSum = state.sum + parseInt(action.payload.price);
    //     return {products: newProducts, sum: newSum};
    //

    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [action.payload]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_PRODUCT:
      return state.filter(function (element) {
        return element.name !== action.payload.name;
      });
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  products: reducerProducts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filteredProducts": () => (/* binding */ filteredProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var productsSelector = function productsSelector(state) {
  return state.products;
};
var filteredProducts = function filteredProducts(products, selector) {
  return products.filter(function (element) {
    return element.price <= parseInt(selector);
  });
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(filteredProducts, function (products) {
  return products.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("43c7815ba4e737db20e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NWZiYTdiYzJhNWFhYTQxOWM5Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ0s7QUFDUDtBQUNFO0FBQ3FCO0FBQzZCO0FBR3hGLElBQU1VLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsS0FBSztFQUFBLE9BQUs7SUFDOUI7SUFDQTtJQUNBQyxRQUFRLEVBQUVKLGtFQUFnQixDQUFDRyxLQUFLLENBQUM7SUFDakNFLEdBQUcsRUFBRUosa0VBQWdCLENBQUNFLEtBQUs7RUFDL0IsQ0FBQztBQUFBLENBQUM7O0FBRUY7O0FBRUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENWLFVBQVUsRUFBRSxTQUFBQSxXQUFDVyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDViwwREFBVSxDQUFDVyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REVixhQUFhLEVBQUUsU0FBQUEsY0FBQ1UsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1QsNkRBQWEsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7SUFBQTtFQUNoRSxDQUFDO0FBQUEsQ0FBQztBQUdGLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsS0FBSyxFQUFLO0VBRTdCLElBQUFDLFNBQUEsR0FBMENsQiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBbUIsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBOUNHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUl0QyxJQUFBSSxVQUFBLEdBQXdCdEIsMkRBQVMsRUFBRTtJQUEzQnVCLFdBQVcsR0FBQUQsVUFBQSxDQUFYQyxXQUFXO0VBQ25CLElBQVFiLFFBQVEsR0FBS00sS0FBSyxDQUFsQk4sUUFBUTtFQUVoQixJQUFNYyxlQUFlLEdBQUduQixrRUFBZ0IsQ0FBQ0ssUUFBUSxFQUFFYSxXQUFXLENBQUM7RUFHL0Qsb0JBQ0l6QiwwREFBQSxDQUFBQSx1REFBQSxRQUNLeUIsV0FBVyxnQkFBR3pCLDBEQUFBLENBQUNJLHdEQUFJLEVBQUF5QixRQUFBLEtBQU1YLEtBQUs7SUFBRU4sUUFBUSxFQUFFYztFQUFnQixHQUFHLGdCQUFJMUIsMERBQUEsQ0FBQ0ksd0RBQUksRUFBQXlCLFFBQUEsS0FBTVgsS0FBSztJQUFFTixRQUFRLEVBQUVBO0VBQVMsR0FBRyxDQUMzRztBQUVYLENBQUM7QUFFRCxpRUFBZVQsb0RBQU8sQ0FBQ08sZUFBZSxFQUFFSSxrQkFBa0IsQ0FBQyxDQUFDRyxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QzFFOztBQUlzRDtBQUNoQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUEwQjtFQUFBLElBQXRCdEIsS0FBSyxHQUFBdUIsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUUsRUFBRTtFQUFBLElBQUVHLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN0QyxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZjtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUdBLEtBQUtSLGlEQUFXO01BQ1osVUFBQVMsTUFBQSxDQUFBQyxrQkFBQSxDQUFXN0IsS0FBSyxJQUFFMEIsTUFBTSxDQUFDSSxPQUFPO0lBQ3BDLEtBQUtWLG9EQUFjO01BQ2YsT0FBT3BCLEtBQUssQ0FBQytCLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO1FBQUEsT0FBSUEsT0FBTyxDQUFDQyxJQUFJLEtBQUtQLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDRyxJQUFJO01BQUEsRUFBQztJQUN4RTtNQUNJLE9BQU9qQyxLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUNELElBQU1rQyxXQUFXLEdBQUdiLHNEQUFlLENBQUM7RUFDaENwQixRQUFRLEVBQUVxQjtBQUNkLENBQUMsQ0FBQztBQUVGLGlFQUFlWSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ2pDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFHbEMsSUFBTXJDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUdHLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLFFBQVE7QUFBQTtBQUdoRCxJQUFNTCxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJSyxRQUFRLEVBQUVtQyxRQUFRLEVBQUs7RUFDcEQsT0FBT25DLFFBQVEsQ0FBQzhCLE1BQU0sQ0FBQyxVQUFBQyxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDSyxLQUFLLElBQUlDLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDO0VBQUEsRUFBQztBQUMxRSxDQUFDO0FBRU0sSUFBTXRDLGdCQUFnQixHQUFHcUMsd0RBQWMsQ0FDMUN2QyxnQkFBZ0IsRUFDaEIsVUFBQUssUUFBUTtFQUFBLE9BQUdBLFFBQVEsQ0FBQ3NDLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxPQUNqQ0QsR0FBRyxHQUFHRSxNQUFNLENBQUNELElBQUksQ0FBQ0osS0FBSyxDQUFDO0VBQUEsQ0FDM0IsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNSOzs7Ozs7OztVQ25CRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQge2ZpbHRlcmVkUHJvZHVjdHMsIHByb2R1Y3RzU2VsZWN0b3IsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIC8vIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cy5wcm9kdWN0cyxcbiAgICAvLyBzdW06IHN0YXRlLnByb2R1Y3RzLnN1bSxcbiAgICBwcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSksXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxufSk7XG5cbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxufSk7XG5cblxuY29uc3QgQ2FydENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3NlbGVjdG9yVmFsdWUsIHNldFNlbGVjdG9yVmFsdWVdID0gdXNlU3RhdGUoMClcblxuXG5cbiAgICBjb25zdCB7IGZpbHRlclZhbHVlIH0gPSB1c2VQYXJhbXMoKTtcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IGZpbHRlcmVkUHJvZHVjdHMocHJvZHVjdHMsIGZpbHRlclZhbHVlKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2ZpbHRlclZhbHVlID8gPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdH0gLz4gOiAgPENhcnQgeyAuLi5wcm9wc30gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnRDb250YWluZXIpO1xuIiwiLy8gUmVkdWNlciB6d3JhY2FqxIVjeSB0YWJsaWPEmSBwcm9kdWt0w7N3XG5cblxuXG5pbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4vLyAgICAgcHJvZHVjdHM6IFtdLFxuLy8gICAgIHN1bTogMCxcbi8vIH07XG5cbmNvbnN0IHJlZHVjZXJQcm9kdWN0cyA9IChzdGF0ZT0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgLy8gY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgLy8gICAgIGNvbnN0IG5ld1Byb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgICAgIC8vICAgICBjb25zdCBuZXdTdW0gPSBzdGF0ZS5zdW0gKyBwYXJzZUludChhY3Rpb24ucGF5bG9hZC5wcmljZSk7XG4gICAgICAgIC8vICAgICByZXR1cm4ge3Byb2R1Y3RzOiBuZXdQcm9kdWN0cywgc3VtOiBuZXdTdW19O1xuICAgICAgICAvL1xuXG5cbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICBjYXNlIFJFTU9WRV9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcHJvZHVjdHM6IHJlZHVjZXJQcm9kdWN0c1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG4iLCIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XG4vLyBzdW0gLSBkbyBvYmxpY3phbmlhIHN1bXlcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9kdWN0c1xuXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gKHByb2R1Y3RzLCBzZWxlY3RvcikgPT4ge1xuICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LnByaWNlIDw9IHBhcnNlSW50KHNlbGVjdG9yKSlcbn07XG5cbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgZmlsdGVyZWRQcm9kdWN0cyxcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXG4gICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxuICAgICksIDApXG4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzYzc4MTViYTRlNzM3ZGIyMGU0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyZWRQcm9kdWN0cyIsInByb2R1Y3RzU2VsZWN0b3IiLCJzdW1QcmljZVNlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9kdWN0cyIsInN1bSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwicHJvZHVjdCIsIkNhcnRDb250YWluZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdG9yVmFsdWUiLCJzZXRTZWxlY3RvclZhbHVlIiwiX3VzZVBhcmFtcyIsImZpbHRlclZhbHVlIiwiZmlsdGVyZWRQcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2V4dGVuZHMiLCJBRERfUFJPRFVDVCIsIlJFTU9WRV9QUk9EVUNUIiwiY29tYmluZVJlZHVjZXJzIiwicmVkdWNlclByb2R1Y3RzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBheWxvYWQiLCJmaWx0ZXIiLCJlbGVtZW50IiwibmFtZSIsInJvb3RSZWR1Y2VyIiwiY3JlYXRlU2VsZWN0b3IiLCJzZWxlY3RvciIsInByaWNlIiwicGFyc2VJbnQiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwiTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==