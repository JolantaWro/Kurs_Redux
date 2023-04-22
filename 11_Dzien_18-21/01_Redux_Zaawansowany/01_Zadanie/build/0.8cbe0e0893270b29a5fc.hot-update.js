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
  var selectorId = parseInt((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id);
  console.log("selektor", selectorId);
  console.log({
    allProducts: allProducts
  });

  // const [idProduct, setIdProduct] = useState(useParams().id)

  var filteredState = (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__.getProduct)(allProducts, selectorId);
  var _filteredState = _slicedToArray(filteredState, 2),
    nameP = _filteredState[0],
    idP = _filteredState[1];
  console.log(filteredState);
  console.log(nameP);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt `$", filteredState.id, " $", filteredState.name, "`"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("d4cf4514987ae14682d7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44Y2JlMGUwODkzMjcwYjI5YTVmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0s7QUFDdUI7QUFFbEUsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBQyxJQUFBLEVBQXdCO0VBQUEsSUFBbEJDLFdBQVcsR0FBQUQsSUFBQSxDQUFYQyxXQUFXO0VBQ2hDLElBQU1DLFVBQVUsR0FBRUMsUUFBUSxDQUFDTiwyREFBUyxFQUFFLENBQUNPLEVBQUUsQ0FBQztFQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSixVQUFVLENBQUM7RUFDbkNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBQUNMLFdBQVcsRUFBWEE7RUFBVyxDQUFDLENBQUM7O0VBRTFCOztFQUVBLElBQU1NLGFBQWEsR0FBR1QsNkVBQVUsQ0FBQ0csV0FBVyxFQUFFQyxVQUFVLENBQUM7RUFDekQsSUFBQU0sY0FBQSxHQUFBQyxjQUFBLENBQXFCRixhQUFhO0lBQTNCRyxLQUFLLEdBQUFGLGNBQUE7SUFBRUcsR0FBRyxHQUFBSCxjQUFBO0VBQ2pCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDO0VBQzFCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDO0VBS2xCLG9CQUNJZiwwREFBQSwyQkFDSUEsMERBQUE7SUFBU2tCLFNBQVMsRUFBQztFQUFpQixnQkFDaENsQiwwREFBQTtJQUFLa0IsU0FBUyxFQUFDO0VBQWdCLGdCQUMzQmxCLDBEQUFBLFlBQUcsWUFBVSxFQUFDWSxhQUFhLENBQUNILEVBQUUsRUFBQyxJQUFFLEVBQUNHLGFBQWEsQ0FBQ08sSUFBSSxFQUFDLEdBQUMsQ0FBSSxlQUMxRG5CLDBEQUFBO0lBQVFvQixJQUFJLEVBQUMsUUFBUTtJQUFDRixTQUFTLEVBQUMsUUFBUTtJQUFDRyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU0sSUFBSTtJQUFBO0VBQUMsRUFBRyxDQUM5RCxlQUNOckIsMERBQUE7SUFBS2tCLFNBQVMsRUFBQztFQUFjLGdCQUN6QmxCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBTyxnQkFDbEJsQiwwREFBQTtJQUFHa0IsU0FBUyxFQUFDO0VBQXdCLGdCQUNqRGxCLDBEQUFBO0lBQU1rQixTQUFTLEVBQUM7RUFBUSxFQU9qQixlQUNTbEIsMERBQUE7SUFBTWtCLFNBQVMsRUFBQztFQUF1QixnQkFBQ2xCLDBEQUFBO0lBQUdrQixTQUFTLEVBQUM7RUFBb0IsRUFBSyxDQUFPLENBQ3JGLENBQ0YsQ0FDSixDQUNBLENBQ1I7QUFFZCxDQUFDO0FBRUQsaUVBQWVkLGFBQWE7Ozs7Ozs7O1VDOUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7Z2V0UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlbGVjdG9ycy9zZWxlY3RvcnNQcm9kdWN0XCI7XG5cbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAoeyBhbGxQcm9kdWN0cyB9KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JJZD0gcGFyc2VJbnQodXNlUGFyYW1zKCkuaWQpXG4gICAgY29uc29sZS5sb2coXCJzZWxla3RvclwiLCBzZWxlY3RvcklkKVxuICAgIGNvbnNvbGUubG9nKHthbGxQcm9kdWN0c30pXG5cbiAgICAvLyBjb25zdCBbaWRQcm9kdWN0LCBzZXRJZFByb2R1Y3RdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgc2VsZWN0b3JJZCk7XG4gICAgY29uc3QgW25hbWVQLCBpZFBdID0gZmlsdGVyZWRTdGF0ZVxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkU3RhdGUpXG4gICAgY29uc29sZS5sb2cobmFtZVApXG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5Qcm9kdWt0IGAke2ZpbHRlcmVkU3RhdGUuaWR9ICR7ZmlsdGVyZWRTdGF0ZS5uYW1lfWA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9eygpID0+IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgIHsvKjxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBzZXRJRChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+Ki99XG4gICAgICAgICAgICAgIHsvKiAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+Ki99XG4gICAgICAgICAgICAgIHsvKiAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKCovfVxuICAgICAgICAgICAgICB7LyogICAgICAgIDxvcHRpb24ga2V5PXtwcm9kdWN0LmlkfSB2YWx1ZT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L29wdGlvbj4qL31cbiAgICAgICAgICAgICAgey8qICAgICkpfSovfVxuICAgICAgICAgICAgICB7Lyo8L3NlbGVjdD4qL31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDRjZjQ1MTQ5ODdhZTE0NjgyZDdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsImdldFByb2R1Y3QiLCJTaW5nbGVQcm9kdWN0IiwiX3JlZiIsImFsbFByb2R1Y3RzIiwic2VsZWN0b3JJZCIsInBhcnNlSW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRTdGF0ZSIsIl9maWx0ZXJlZFN0YXRlIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lUCIsImlkUCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJuYW1lIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9