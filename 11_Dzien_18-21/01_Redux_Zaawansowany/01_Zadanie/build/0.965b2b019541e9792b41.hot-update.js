"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var SingleProduct = function SingleProduct(_ref) {
  var allProducts = _ref.allProducts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idProduct = _useState2[0],
    setIdProduct = _useState2[1];
  //
  // const filteredState = getProduct(allProducts, parseInt(idProduct));
  // const product = filteredState[0]

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", parseInt(idProduct) + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return setIdProduct(e.target.value);
    },
    value: idProduct
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), allProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: product.id,
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("4a13a571519b21c8b353")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NjViMmIwMTk1NDFlOTc5MmI0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDSztBQUczQyxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFDLElBQUEsRUFBd0I7RUFBQSxJQUFsQkMsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7RUFFaEMsSUFBQUMsU0FBQSxHQUFrQ0wsK0NBQVEsQ0FBQ0MsMkRBQVMsRUFBRSxDQUFDSyxFQUFFLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBbkRJLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFDOUI7RUFDQTtFQUNBOztFQUVBLG9CQUNJUiwwREFBQSwyQkFDSUEsMERBQUE7SUFBU2EsU0FBUyxFQUFDO0VBQWlCLGdCQUNoQ2IsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQWdCLGdCQUMzQmIsMERBQUEsWUFBRyxVQUFRLEVBQUNjLFFBQVEsQ0FBQ0osU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFLLGVBQ3hDViwwREFBQTtJQUFRZSxJQUFJLEVBQUMsUUFBUTtJQUFDRixTQUFTLEVBQUMsUUFBUTtJQUFDRyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU0sSUFBSTtJQUFBO0VBQUMsRUFBRyxDQUM5RCxlQUNOaEIsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQWMsZ0JBQ3pCYiwwREFBQTtJQUFLYSxTQUFTLEVBQUM7RUFBTyxnQkFDbEJiLDBEQUFBO0lBQUdhLFNBQVMsRUFBQztFQUF3QixnQkFDakRiLDBEQUFBO0lBQU1hLFNBQVMsRUFBQztFQUFRLGdCQUN0QmIsMERBQUE7SUFBUWlCLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS1AsWUFBWSxDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDQSxLQUFLLEVBQUVWO0VBQVUsZ0JBQ3RFViwwREFBQSxpQkFBUSxZQUFVLENBQVMsRUFDeEJLLFdBQVcsQ0FBQ2dCLEdBQUcsQ0FBQyxVQUFBQyxPQUFPO0lBQUEsb0JBQ3BCdEIsMERBQUE7TUFBUXVCLEdBQUcsRUFBRUQsT0FBTyxDQUFDZixFQUFHO01BQUNhLEtBQUssRUFBRUUsT0FBTyxDQUFDZjtJQUFHLEdBQUVlLE9BQU8sQ0FBQ0UsSUFBSSxDQUFVO0VBQUEsQ0FDdEUsQ0FBQyxDQUNHLENBQ0osZUFDU3hCLDBEQUFBO0lBQU1hLFNBQVMsRUFBQztFQUF1QixnQkFBQ2IsMERBQUE7SUFBR2EsU0FBUyxFQUFDO0VBQW9CLEVBQUssQ0FBTyxDQUNyRixDQUNGLENBQ0osQ0FDQSxDQUNSO0FBRWQsQ0FBQztBQUVELGlFQUFlVixhQUFhOzs7Ozs7OztVQ3RDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7IGFsbFByb2R1Y3RzIH0pID0+IHtcblxuICAgIGNvbnN0IFtpZFByb2R1Y3QsIHNldElkUHJvZHVjdF0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5pZClcbiAgICAvL1xuICAgIC8vIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSBnZXRQcm9kdWN0KGFsbFByb2R1Y3RzLCBwYXJzZUludChpZFByb2R1Y3QpKTtcbiAgICAvLyBjb25zdCBwcm9kdWN0ID0gZmlsdGVyZWRTdGF0ZVswXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJvZHVrdCB7cGFyc2VJbnQoaWRQcm9kdWN0KSArIDF9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWRQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkUHJvZHVjdH0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7YWxsUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwcm9kdWN0LmlkfSB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGExM2E1NzE1MTliMjFjOGIzNTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJpZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlkUHJvZHVjdCIsInNldElkUHJvZHVjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJzZUludCIsInR5cGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJwcm9kdWN0Iiwia2V5IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=