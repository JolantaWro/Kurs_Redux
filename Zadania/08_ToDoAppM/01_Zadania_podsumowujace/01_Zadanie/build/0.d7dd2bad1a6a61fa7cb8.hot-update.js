"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddTask = function AddTask(_ref) {
  var onSubmitTask = _ref.onSubmitTask;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      title: "",
      description: "",
      open: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var handleChangeInput = function handleChangeInput(e) {
    console.log(e);
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    //dodac walidacje formularza
    onSubmitTask(form);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-title"
  }, "Nowe zadanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "title",
    placeholder: "Title",
    value: form.title,
    onChange: handleChangeInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "description",
    placeholder: "Description",
    value: form.description,
    onChange: handleChangeInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info"
  }, "Dodaj zadanie do listy", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTask);

/***/ }),

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);


var AllTasks = function AllTasks(_ref) {
  var tasks = _ref.tasks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, !tasks ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Brak zada\u0144") : tasks.map(function (element, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, element.title, element.description);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTasks);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a65cf082f0dc5f4f6bad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFWCxDQUFDO0FBRUQsaUVBQWV3QixRQUFROzs7Ozs7OztVQ2R2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9UYXNrL0FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1Rhc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGRUYXNrID0gKHtvblN1Ym1pdFRhc2t9KSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe3RpdGxlOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgb3BlbjogdHJ1ZX0pXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHNldEZvcm0oey4uLmZvcm0sXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vZG9kYWMgd2FsaWRhY2plIGZvcm11bGFyemFcbiAgICAgICAgb25TdWJtaXRUYXNrKGZvcm0pO1xuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Ob3dlIHphZGFuaWU8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHZhbHVlPXtmb3JtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e2Zvcm0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPkRvZGFqIHphZGFuaWUgZG8gbGlzdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2s7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRUYXNrIGZyb20gXCIuL0FkZFRhc2tcIjtcblxuY29uc3QgQWxsVGFza3MgPSAoe3Rhc2tzfSkgPT4ge1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7IXRhc2tzID8gPGgyPkJyYWsgemFkYcWEPC9oMj4gOiB0YXNrcy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2VsZW1lbnQudGl0bGV9e2VsZW1lbnQuZGVzY3JpcHRpb259PC9saT4pfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxsVGFza3M7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTY1Y2YwODJmMGRjNWY0ZjZiYWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZFRhc2siLCJfcmVmIiwib25TdWJtaXRUYXNrIiwiX3VzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9wZW4iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUNoYW5nZUlucHV0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiQWxsVGFza3MiLCJ0YXNrcyIsIkZyYWdtZW50IiwibWFwIiwiZWxlbWVudCIsImluZGV4Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==