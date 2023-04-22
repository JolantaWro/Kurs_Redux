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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", produkt.id, " ", produkt.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("1784f31ca273c1ff6cd0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42OTQwYzVkNmVlZGY2NGVhYzFjMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQUFDLFNBQUEsR0FBa0NOLCtDQUFRLENBQUNDLDJEQUFTLEVBQUUsQ0FBQ00sRUFBRSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQW5ESSxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBQzlCOztFQUVBLElBQU1JLGFBQWEsR0FBR1YsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFUSxRQUFRLENBQUNILFNBQVMsQ0FBQyxDQUFDO0VBQ2xFLElBQU1JLE9BQU8sR0FBR0YsYUFBYSxDQUFDLENBQUMsQ0FBQztFQUNoQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUdwQixvQkFDSWYsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVNtQixTQUFTLEVBQUM7RUFBaUIsZ0JBQ2hDbkIsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFnQixnQkFDM0JuQiwwREFBQSxZQUFHLFVBQVEsRUFBQ2UsT0FBTyxDQUFDUCxFQUFFLEVBQUMsR0FBQyxFQUFDTyxPQUFPLENBQUNLLElBQUksQ0FBSyxlQUMxQ3BCLDBEQUFBO0lBQVFxQixJQUFJLEVBQUMsUUFBUTtJQUFDRixTQUFTLEVBQUMsUUFBUTtJQUFDRyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU0sSUFBSTtJQUFBO0VBQUMsRUFBRyxDQUM5RCxlQUNOdEIsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFjLGdCQUN6Qm5CLDBEQUFBO0lBQUttQixTQUFTLEVBQUM7RUFBTyxnQkFDbEJuQiwwREFBQTtJQUFHbUIsU0FBUyxFQUFDO0VBQXdCLGdCQVNqQ25CLDBEQUFBO0lBQU1tQixTQUFTLEVBQUM7RUFBdUIsZ0JBQUNuQiwwREFBQTtJQUFHbUIsU0FBUyxFQUFDO0VBQW9CLEVBQUssQ0FBTyxDQUNyRixDQUNGLENBQ0osQ0FDQSxDQUNSO0FBRWQsQ0FBQztBQUVELGlFQUFlZixhQUFhOzs7Ozs7OztVQ3hDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Byb2R1Y3RzL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge2dldFByb2R1Y3R9IGZyb20gXCIuLi8uLi9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdFwiO1xuXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xuICAgIGNvbnN0IFtpZFByb2R1Y3QsIHNldElkUHJvZHVjdF0gPSB1c2VTdGF0ZSh1c2VQYXJhbXMoKS5pZClcbiAgICAvLyBjb25zdCBzZWxlY3RvcklkPSBwYXJzZUludCh1c2VQYXJhbXMoKS5pZClcblxuICAgIGNvbnN0IGZpbHRlcmVkU3RhdGUgPSBnZXRQcm9kdWN0KGFsbFByb2R1Y3RzLCBwYXJzZUludChpZFByb2R1Y3QpKTtcbiAgICBjb25zdCBwcm9kdWt0ID0gZmlsdGVyZWRTdGF0ZVswXVxuICAgIGNvbnNvbGUubG9nKHByb2R1a3QpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByb2R1a3Qge3Byb2R1a3QuaWR9IHtwcm9kdWt0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPiovfVxuICAgICAgICAgICAgey8qICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWRQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkfT4qL31cbiAgICAgICAgICAgIHsvKiAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgIHthbGxQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoKi99XG4gICAgICAgICAgICB7LyogICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2R1Y3QuaWR9IHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPiovfVxuICAgICAgICAgICAgey8qICAgICAgKSl9Ki99XG4gICAgICAgICAgICB7LyogIDwvc2VsZWN0PiovfVxuICAgICAgICAgICAgey8qPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNzg0ZjMxY2EyNzNjMWZmNmNkMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiZ2V0UHJvZHVjdCIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJpZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlkUHJvZHVjdCIsInNldElkUHJvZHVjdCIsImZpbHRlcmVkU3RhdGUiLCJwYXJzZUludCIsInByb2R1a3QiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm5hbWUiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=