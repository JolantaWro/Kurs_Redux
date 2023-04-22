"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 124:
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


var SingleRecipe = function SingleRecipe(_ref) {
  var allRecipes = _ref.allRecipes;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idRecipe = _useState2[0],
    setIdRecipe = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Przepis ", parseInt(idRecipe) + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
      return setIdRecipe(e.target.value);
    },
    value: idProduct
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), allRecipes.map(function (recipe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: recipe.id,
      value: recipe.id
    }, recipe.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleRecipe);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49f3cd94807d9f823fbf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iM2M1MjMwM2JlZjlmMmM2NzEzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDSztBQUUzQyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQWhCQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtFQUM3QixJQUFBQyxTQUFBLEdBQWdDTCwrQ0FBUSxDQUFDQywyREFBUyxFQUFFLENBQUNLLEVBQUUsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFqREksUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUc1QixvQkFDSVIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVNhLFNBQVMsRUFBQztFQUFpQixnQkFDaENiLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFnQixnQkFDM0JiLDBEQUFBLFlBQUcsVUFBUSxFQUFDYyxRQUFRLENBQUNKLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBSyxlQUN2Q1YsMERBQUE7SUFBUWUsSUFBSSxFQUFDLFFBQVE7SUFBQ0YsU0FBUyxFQUFDLFFBQVE7SUFBQ0csT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTmhCLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFjLGdCQUN6QmIsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCYiwwREFBQTtJQUFHYSxTQUFTLEVBQUM7RUFBd0IsZ0JBQ2pEYiwwREFBQTtJQUFNYSxTQUFTLEVBQUM7RUFBUSxnQkFDdEJiLDBEQUFBO0lBQVFpQixRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztNQUFBLE9BQUtQLFdBQVcsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQ0EsS0FBSyxFQUFFQztFQUFVLGdCQUNyRXJCLDBEQUFBLGlCQUFRLFlBQVUsQ0FBUyxFQUN4QkssVUFBVSxDQUFDaUIsR0FBRyxDQUFDLFVBQUFDLE1BQU07SUFBQSxvQkFDbEJ2QiwwREFBQTtNQUFRd0IsR0FBRyxFQUFFRCxNQUFNLENBQUNoQixFQUFHO01BQUNhLEtBQUssRUFBRUcsTUFBTSxDQUFDaEI7SUFBRyxHQUFFZ0IsTUFBTSxDQUFDRSxJQUFJLENBQVU7RUFBQSxDQUNuRSxDQUFDLENBQ0csQ0FDSixlQUNTekIsMERBQUE7SUFBTWEsU0FBUyxFQUFDO0VBQXVCLGdCQUFDYiwwREFBQTtJQUFHYSxTQUFTLEVBQUM7RUFBb0IsRUFBSyxDQUFPLENBQ3JGLENBQ0YsQ0FDSixDQUNBLENBRVI7QUFFZCxDQUFDO0FBRUQsaUVBQWVWLFlBQVk7Ozs7Ozs7O1VDbkMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9TaW5nbGVSZWNpcGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IFNpbmdsZVJlY2lwZSA9ICh7YWxsUmVjaXBlc30pID0+IHtcbiAgICBjb25zdCBbaWRSZWNpcGUsIHNldElkUmVjaXBlXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcnplcGlzIHtwYXJzZUludChpZFJlY2lwZSkgKyAxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldElkUmVjaXBlKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e2lkUHJvZHVjdH0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7YWxsUmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cmVjaXBlLmlkfSB2YWx1ZT17cmVjaXBlLmlkfT57cmVjaXBlLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVJlY2lwZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0OWYzY2Q5NDgwN2Q5ZjgyM2ZiZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiU2luZ2xlUmVjaXBlIiwiX3JlZiIsImFsbFJlY2lwZXMiLCJfdXNlU3RhdGUiLCJpZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlkUmVjaXBlIiwic2V0SWRSZWNpcGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyc2VJbnQiLCJ0eXBlIiwib25DbGljayIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaWRQcm9kdWN0IiwibWFwIiwicmVjaXBlIiwia2V5IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=