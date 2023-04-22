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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SingleProduct = function SingleProduct(_ref) {
  var allProducts = _ref.allProducts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idProduct = _useState2[0],
    setIdProduct = _useState2[1];
  // const selectorId= parseInt(useParams().id)

  var filteredState = (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__.getProduct)(allProducts, parseInt(idProduct));
  var produkt = filteredState[0];
  console.log(produkt);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6940c5d6eedf64eac1c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNjM1NjlmMWQ4YzMxNWVkNzIwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQUFDLFNBQUEsR0FBa0NOLCtDQUFRLENBQUNDLDJEQUFTLEVBQUUsQ0FBQ00sRUFBRSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQW5ESSxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBQzlCOztFQUVBLElBQU1JLGFBQWEsR0FBR1YsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFUSxRQUFRLENBQUNILFNBQVMsQ0FBQyxDQUFDO0VBQ2xFLElBQU1JLE9BQU8sR0FBR0YsYUFBYSxDQUFDLENBQUMsQ0FBQztFQUNoQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUdwQixvQkFDSWYsMERBQUEsYUFzQk07QUFFZCxDQUFDO0FBRUQsaUVBQWVJLGFBQWE7Ozs7Ozs7O1VDeEM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG4gICAgY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuICAgIC8vIGNvbnN0IHNlbGVjdG9ySWQ9IHBhcnNlSW50KHVzZVBhcmFtcygpLmlkKVxuXG4gICAgY29uc3QgZmlsdGVyZWRTdGF0ZSA9IGdldFByb2R1Y3QoYWxsUHJvZHVjdHMsIHBhcnNlSW50KGlkUHJvZHVjdCkpO1xuICAgIGNvbnN0IHByb2R1a3QgPSBmaWx0ZXJlZFN0YXRlWzBdXG4gICAgY29uc29sZS5sb2cocHJvZHVrdClcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsvKjxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPiovfVxuICAgICAgICAgICAgey8qICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPHA+UHJvZHVrdCB7cHJvZHVrdC5pZH0ge3Byb2R1a3QubmFtZX08L3A+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+Ki99XG4gICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XG4gICAgICAgICAgICB7LyogICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPiovfVxuICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+Ki99XG4gICAgICAgICAgICB7LyogIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PiovfVxuICAgICAgICAgICAgey8qICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPiovfVxuICAgICAgICAgICAgey8qICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICgqL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+Ki99XG4gICAgICAgICAgICB7LyogICAgICApKX0qL31cbiAgICAgICAgICAgIHsvKiAgPC9zZWxlY3Q+Ki99XG4gICAgICAgICAgICB7Lyo8L3NwYW4+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgIDwvcD4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICB7LyogICAgPC9kaXY+Ki99XG4gICAgICAgICAgICB7Lyo8L2FydGljbGU+Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY5NDBjNWQ2ZWVkZjY0ZWFjMWMwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJhbGxQcm9kdWN0cyIsIl91c2VTdGF0ZSIsImlkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaWRQcm9kdWN0Iiwic2V0SWRQcm9kdWN0IiwiZmlsdGVyZWRTdGF0ZSIsInBhcnNlSW50IiwicHJvZHVrdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==