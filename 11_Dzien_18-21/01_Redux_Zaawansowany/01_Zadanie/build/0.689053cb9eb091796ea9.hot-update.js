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
  var filteredState = (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__.getProduct)(allProducts, idProduct);
  console.log(filteredState);
  var selectorId = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id;
  console.log(selectorId);
  console.log({
    allProducts: allProducts
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", filteredState.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
      return setID(e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), products.map(function (product) {
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
/******/ 	__webpack_require__.h = () => ("32b2cfeb74347baa5a6b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ODkwNTNjYjllYjA5MTc5NmVhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBRWhDLElBQUFDLFNBQUEsR0FBa0NOLCtDQUFRLENBQUNDLDJEQUFTLEVBQUUsQ0FBQ00sRUFBRSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQW5ESSxTQUFTLEdBQUFGLFVBQUE7SUFBRUcsWUFBWSxHQUFBSCxVQUFBO0VBRTlCLElBQU1JLGFBQWEsR0FBR1YsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFSyxTQUFTLENBQUM7RUFDeERHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixhQUFhLENBQUM7RUFFMUIsSUFBTUcsVUFBVSxHQUFFZCwyREFBUyxFQUFFLENBQUNNLEVBQUU7RUFDaENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7RUFDdkJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUNULFdBQVcsRUFBWEE7RUFBVyxDQUFDLENBQUM7RUFHMUIsb0JBQ0lOLDBEQUFBLDJCQUNJQSwwREFBQTtJQUFTa0IsU0FBUyxFQUFDO0VBQWlCLGdCQUNoQ2xCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCbEIsMERBQUEsWUFBRyxVQUFRLEVBQUNhLGFBQWEsQ0FBQ0wsRUFBRSxDQUFLLGVBQ2pDUiwwREFBQTtJQUFRbUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0QsU0FBUyxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTnBCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBYyxnQkFDekJsQiwwREFBQTtJQUFLa0IsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCbEIsMERBQUE7SUFBR2tCLFNBQVMsRUFBQztFQUF3QixnQkFDakRsQiwwREFBQTtJQUFNa0IsU0FBUyxFQUFDO0VBQVEsZ0JBQ3RCbEIsMERBQUE7SUFBUXFCLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS0MsS0FBSyxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDQSxLQUFLLEVBQUVqQjtFQUFHLGdCQUN4RFIsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQ3hCMEIsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQUMsT0FBTztJQUFBLG9CQUNqQjVCLDBEQUFBO01BQVE2QixHQUFHLEVBQUVELE9BQU8sQ0FBQ3BCLEVBQUc7TUFBQ2lCLEtBQUssRUFBRUcsT0FBTyxDQUFDcEI7SUFBRyxHQUFFb0IsT0FBTyxDQUFDRSxJQUFJLENBQVU7RUFBQSxDQUN0RSxDQUFDLENBQ0csQ0FDSixlQUNTOUIsMERBQUE7SUFBTWtCLFNBQVMsRUFBQztFQUF1QixnQkFBQ2xCLDBEQUFBO0lBQUdrQixTQUFTLEVBQUM7RUFBb0IsRUFBSyxDQUFPLENBQ3JGLENBQ0YsQ0FDSixDQUNBLENBQ1I7QUFFZCxDQUFDO0FBRUQsaUVBQWVkLGFBQWE7Ozs7Ozs7O1VDM0M1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG5cbiAgICBjb25zdCBbaWRQcm9kdWN0LCBzZXRJZFByb2R1Y3RdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgaWRQcm9kdWN0KTtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFN0YXRlKVxuXG4gICAgY29uc3Qgc2VsZWN0b3JJZD0gdXNlUGFyYW1zKCkuaWQ7XG4gICAgY29uc29sZS5sb2coc2VsZWN0b3JJZClcbiAgICBjb25zb2xlLmxvZyh7YWxsUHJvZHVjdHN9KVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IHtmaWx0ZXJlZFN0YXRlLmlkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldElEKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPld5YmllcnouLi48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2R1Y3QuaWR9IHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMmIyY2ZlYjc0MzQ3YmFhNWE2YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiZ2V0UHJvZHVjdCIsIlNpbmdsZVByb2R1Y3QiLCJfcmVmIiwiYWxsUHJvZHVjdHMiLCJfdXNlU3RhdGUiLCJpZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlkUHJvZHVjdCIsInNldElkUHJvZHVjdCIsImZpbHRlcmVkU3RhdGUiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0b3JJZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsIm9uQ2hhbmdlIiwiZSIsInNldElEIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJrZXkiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==