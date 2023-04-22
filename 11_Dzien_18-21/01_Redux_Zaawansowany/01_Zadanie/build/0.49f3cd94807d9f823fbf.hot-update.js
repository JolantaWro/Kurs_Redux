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
    value: idRecipe
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
/******/ 	__webpack_require__.h = () => ("7850a73a0ec76ee9d160")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OWYzY2Q5NDgwN2Q5ZjgyM2ZiZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDSztBQUUzQyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFxQjtFQUFBLElBQWhCQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtFQUM3QixJQUFBQyxTQUFBLEdBQWdDTCwrQ0FBUSxDQUFDQywyREFBUyxFQUFFLENBQUNLLEVBQUUsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFqREksUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUc1QixvQkFDSVIsMERBQUEsMkJBQ0lBLDBEQUFBO0lBQVNhLFNBQVMsRUFBQztFQUFpQixnQkFDaENiLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFnQixnQkFDM0JiLDBEQUFBLFlBQUcsVUFBUSxFQUFDYyxRQUFRLENBQUNKLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBSyxlQUN2Q1YsMERBQUE7SUFBUWUsSUFBSSxFQUFDLFFBQVE7SUFBQ0YsU0FBUyxFQUFDLFFBQVE7SUFBQ0csT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNLElBQUk7SUFBQTtFQUFDLEVBQUcsQ0FDOUQsZUFDTmhCLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFjLGdCQUN6QmIsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCYiwwREFBQTtJQUFHYSxTQUFTLEVBQUM7RUFBd0IsZ0JBQ2pEYiwwREFBQTtJQUFNYSxTQUFTLEVBQUM7RUFBUSxnQkFDdEJiLDBEQUFBO0lBQVFpQixRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztNQUFBLE9BQUtQLFdBQVcsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQ0EsS0FBSyxFQUFFVjtFQUFTLGdCQUNwRVYsMERBQUEsaUJBQVEsWUFBVSxDQUFTLEVBQ3hCSyxVQUFVLENBQUNnQixHQUFHLENBQUMsVUFBQUMsTUFBTTtJQUFBLG9CQUNsQnRCLDBEQUFBO01BQVF1QixHQUFHLEVBQUVELE1BQU0sQ0FBQ2YsRUFBRztNQUFDYSxLQUFLLEVBQUVFLE1BQU0sQ0FBQ2Y7SUFBRyxHQUFFZSxNQUFNLENBQUNFLElBQUksQ0FBVTtFQUFBLENBQ25FLENBQUMsQ0FDRyxDQUNKLGVBQ1N4QiwwREFBQTtJQUFNYSxTQUFTLEVBQUM7RUFBdUIsZ0JBQUNiLDBEQUFBO0lBQUdhLFNBQVMsRUFBQztFQUFvQixFQUFLLENBQU8sQ0FDckYsQ0FDRixDQUNKLENBQ0EsQ0FFUjtBQUVkLENBQUM7QUFFRCxpRUFBZVYsWUFBWTs7Ozs7Ozs7VUNuQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9SZWNpcGVzL1NpbmdsZVJlY2lwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgU2luZ2xlUmVjaXBlID0gKHthbGxSZWNpcGVzfSkgPT4ge1xuICAgIGNvbnN0IFtpZFJlY2lwZSwgc2V0SWRSZWNpcGVdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByemVwaXMge3BhcnNlSW50KGlkUmVjaXBlKSArIDF9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWRSZWNpcGUoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17aWRSZWNpcGV9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2FsbFJlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3JlY2lwZS5pZH0gdmFsdWU9e3JlY2lwZS5pZH0+e3JlY2lwZS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1waXp6YS1zbGljZVwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVSZWNpcGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzg1MGE3M2EwZWM3NmVlOWQxNjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsIlNpbmdsZVJlY2lwZSIsIl9yZWYiLCJhbGxSZWNpcGVzIiwiX3VzZVN0YXRlIiwiaWQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpZFJlY2lwZSIsInNldElkUmVjaXBlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInBhcnNlSW50IiwidHlwZSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsInJlY2lwZSIsImtleSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9