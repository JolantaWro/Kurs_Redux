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

/***/ }),

/***/ 103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerProducts": () => (/* binding */ reducerProducts)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialStateProducts = [];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateProducts;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var productId = maxIdProduct(state);
      return [].concat(_toConsumableArray(state), [{
        id: productId,
        name: action.payload
      }]);
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerRecipes": () => (/* binding */ reducerRecipes)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialStateRecipes = [];
var reducerRecipes = function reducerRecipes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateRecipes;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      return [].concat(_toConsumableArray(state), [_objectSpread({}, action.payload)]);
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a185450799928164b44")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGtCQUFBLENBQVdQLEtBQUssSUFBRTtRQUFDNUIsRUFBRSxFQUFFaUMsU0FBUztRQUFFaEIsSUFBSSxFQUFFZSxNQUFNLENBQUNJO01BQU8sQ0FBQztJQUMzRDtJQUNBO0lBQ0E7TUFDSSxPQUFPUixLQUFLO0VBQUE7QUFFeEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEI2QztBQUU5QyxTQUFTVCxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFDekIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDdkIsRUFBRSxFQUFFcUIsS0FBSyxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUMsQ0FBQztFQUMvRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQztBQUNwQjtBQUVBLElBQU1pQixtQkFBbUIsR0FBRyxFQUFFO0FBR3ZCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUEyQztFQUFBLElBQXZDWCxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFUyxtQkFBbUI7RUFBQSxJQUFFTixNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0QsUUFBUUMsTUFBTSxDQUFDeEIsSUFBSTtJQUNmLEtBQUs2Qix3REFBVTtNQUNYLFVBQUFILE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1AsS0FBSyxJQUFBWSxhQUFBLEtBQU1SLE1BQU0sQ0FBQ0ksT0FBTztJQUN4QztJQUNBO0lBQ0E7TUFDSSxPQUFPUixLQUFLO0VBQUE7QUFFeEIsQ0FBQzs7Ozs7Ozs7VUNuQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvU2luZ2xlUmVjaXBlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IFNpbmdsZVJlY2lwZSA9ICh7YWxsUmVjaXBlc30pID0+IHtcbiAgICBjb25zdCBbaWRSZWNpcGUsIHNldElkUmVjaXBlXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtZGFya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJ6ZXBpcyB7cGFyc2VJbnQoaWRSZWNpcGUpICsgMX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZFJlY2lwZShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZFJlY2lwZX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICB7YWxsUmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cmVjaXBlLmlkfSB2YWx1ZT17cmVjaXBlLmlkfT57cmVjaXBlLm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVJlY2lwZTsiLCJpbXBvcnQge0FERF9QUk9EVUNUfSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0c1wiO1xuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3QoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGVQcm9kdWN0cyA9IFtdXG5leHBvcnQgY29uc3QgcmVkdWNlclByb2R1Y3RzID0gKHN0YXRlPSBpbml0aWFsU3RhdGVQcm9kdWN0cywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gbWF4SWRQcm9kdWN0KHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge2lkOiBwcm9kdWN0SWQsIG5hbWU6IGFjdGlvbi5wYXlsb2FkfV1cbiAgICAgICAgLy8gY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgLy8gICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSIsImltcG9ydCB7QUREX1JFQ0lQRX0gZnJvbSBcIi4uL2FjdGlvbnMvcmVjaXBlc1wiO1xuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3QoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGVSZWNpcGVzID0gW11cblxuXG5leHBvcnQgY29uc3QgcmVkdWNlclJlY2lwZXMgPSAoc3RhdGU9IGluaXRpYWxTdGF0ZVJlY2lwZXMsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUkVDSVBFOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgey4uLmFjdGlvbi5wYXlsb2FkfV1cbiAgICAgICAgLy8gY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgLy8gICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhMTg1NDUwNzk5OTI4MTY0YjQ0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJTaW5nbGVSZWNpcGUiLCJfcmVmIiwiYWxsUmVjaXBlcyIsIl91c2VTdGF0ZSIsImlkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaWRSZWNpcGUiLCJzZXRJZFJlY2lwZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJwYXJzZUludCIsInR5cGUiLCJvbkNsaWNrIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJyZWNpcGUiLCJrZXkiLCJuYW1lIiwiQUREX1BST0RVQ1QiLCJtYXhJZFByb2R1Y3QiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpbml0aWFsU3RhdGVQcm9kdWN0cyIsInJlZHVjZXJQcm9kdWN0cyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicHJvZHVjdElkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIkFERF9SRUNJUEUiLCJpbml0aWFsU3RhdGVSZWNpcGVzIiwicmVkdWNlclJlY2lwZXMiLCJfb2JqZWN0U3ByZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==