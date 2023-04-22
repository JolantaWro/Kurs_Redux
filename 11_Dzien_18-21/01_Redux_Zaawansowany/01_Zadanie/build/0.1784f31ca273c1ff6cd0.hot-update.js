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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", produkt.id + 1, " ", produkt.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("12429684c33ee4cbd2bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNzg0ZjMxY2EyNzNjMWZmNmNkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQUFDLFNBQUEsR0FBa0NOLCtDQUFRLENBQUNDLDJEQUFTLEVBQUUsQ0FBQ00sRUFBRSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQW5ESSxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBQzlCOztFQUVBLElBQU1JLGFBQWEsR0FBR1YsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFUSxRQUFRLENBQUNILFNBQVMsQ0FBQyxDQUFDO0VBQ2xFLElBQU1JLE9BQU8sR0FBR0YsYUFBYSxDQUFDLENBQUMsQ0FBQztFQUNoQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUdwQixvQkFDSWYsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVNtQixTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDbkIsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFnQixnQkFDM0JuQiwwREFBQSxZQUFHLFVBQVEsRUFBQ2UsT0FBTyxDQUFDUCxFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQUMsRUFBQ08sT0FBTyxDQUFDSyxJQUFJLENBQUssZUFDOUNwQiwwREFBQTtJQUFRcUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0YsU0FBUyxFQUFDLFFBQVE7SUFBQ0csT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTnRCLDBEQUFBO0lBQUttQixTQUFTLEVBQUM7RUFBYyxnQkFDekJuQiwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCbkIsMERBQUE7SUFBR21CLFNBQVMsRUFBQztFQUF3QixnQkFTakNuQiwwREFBQTtJQUFNbUIsU0FBUyxFQUFDO0VBQXVCLGdCQUFDbkIsMERBQUE7SUFBR21CLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDckYsQ0FDRixDQUNKLENBQ0EsQ0FDUjtBQUVkLENBQUM7QUFFRCxpRUFBZWYsYUFBYTs7Ozs7Ozs7VUN4QzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRQcm9kdWN0fSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1Byb2R1Y3RcIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7IGFsbFByb2R1Y3RzIH0pID0+IHtcbiAgICBjb25zdCBbaWRQcm9kdWN0LCBzZXRJZFByb2R1Y3RdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG4gICAgLy8gY29uc3Qgc2VsZWN0b3JJZD0gcGFyc2VJbnQodXNlUGFyYW1zKCkuaWQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgY29uc3QgcHJvZHVrdCA9IGZpbHRlcmVkU3RhdGVbMF1cbiAgICBjb25zb2xlLmxvZyhwcm9kdWt0KVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IHtwcm9kdWt0LmlkICsgMX0ge3Byb2R1a3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+Ki99XG4gICAgICAgICAgICB7LyogIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWR9PiovfVxuICAgICAgICAgICAgey8qICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPiovfVxuICAgICAgICAgICAgey8qICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICgqL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+Ki99XG4gICAgICAgICAgICB7LyogICAgICApKX0qL31cbiAgICAgICAgICAgIHsvKiAgPC9zZWxlY3Q+Ki99XG4gICAgICAgICAgICB7Lyo8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyNDI5Njg0YzMzZWU0Y2JkMmJkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJhbGxQcm9kdWN0cyIsIl91c2VTdGF0ZSIsImlkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaWRQcm9kdWN0Iiwic2V0SWRQcm9kdWN0IiwiZmlsdGVyZWRTdGF0ZSIsInBhcnNlSW50IiwicHJvZHVrdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibmFtZSIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==