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

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
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


function maxIdTasks(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialState = [];
var reducerTask = function reducerTask() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK:
      var taskId = maxIdTasks(state);
      return [].concat(_toConsumableArray(state), [_objectSpread({
        id: taskId
      }, action.payload)]);
    default:
      return state;
  }
};

// const products = (state= stateProduct, action) => {
//     console.log(state)
//     switch (action.type) {
//         case ADD_PRODUCT:
//             return [...state, action.payload]
//         case CHANGE_ORDER:
//             const newState = [...state];
//             const index = state.findIndex((element) => element === action.payload.product);
//             if(action.payload.action === "UP") {
//                 if(!index) {
//                     return state;
//                 }
//                 [newState[index - 1], newState[index]] = [newState[index], newState[index - 1]];
//             } else {
//                 if (index === newState.length - 1) {
//                     return state;
//                 }
//                 const choseElement = newState[index];
//                 newState.splice(index, 1);
//                 newState.splice(index+1, 0, choseElement);
//             }
//
//             return newState
//
//         default:
//             return state
//     }
// }
//
//

var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  tasks: reducerTask
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1d8ebccf7a1e823c5e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZmIxYzgzM2YwODZhZGE2MjVlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUF1QjtFQUFBLElBQWxCQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtFQUMxQixJQUFBQyxTQUFBLEdBQXdCSiwrQ0FBUSxDQUFDO01BQUNLLEtBQUssRUFBRSxFQUFFO01BQUVDLFdBQVcsRUFBRSxFQUFFO01BQUVDLElBQUksRUFBRTtJQUFJLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUwsU0FBQTtJQUFuRU0sSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUVwQixJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJQyxDQUFDLEVBQUs7SUFDN0JGLE9BQU8sQ0FBQUcsYUFBQSxDQUFBQSxhQUFBLEtBQUtKLElBQUksT0FBQUssZUFBQSxLQUNYRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxFQUFHSixDQUFDLENBQUNHLE1BQU0sQ0FBQ0UsS0FBSyxHQUNqQztFQUNOLENBQUM7RUFHRCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsS0FBSyxFQUFLO0lBQzVCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtJQUN0QjtJQUNBbEIsWUFBWSxDQUFDTyxJQUFJLENBQUM7RUFDdEIsQ0FBQztFQUdELG9CQUNJWCwwREFBQTtJQUFLd0IsU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCeEIsMERBQUE7SUFBS3dCLFNBQVMsRUFBQztFQUFXLGdCQUN0QnhCLDBEQUFBO0lBQUl3QixTQUFTLEVBQUM7RUFBWSxHQUFDLGNBQVksQ0FBSyxlQUM1Q3hCLDBEQUFBO0lBQU15QixRQUFRLEVBQUVMO0VBQWEsZ0JBQ3pCcEIsMERBQUE7SUFBS3dCLFNBQVMsRUFBQztFQUFZLGdCQUN2QnhCLDBEQUFBO0lBQ0kwQixJQUFJLEVBQUMsTUFBTTtJQUFDRixTQUFTLEVBQUMsY0FBYztJQUFDTixJQUFJLEVBQUMsT0FBTztJQUFDUyxXQUFXLEVBQUMsT0FBTztJQUFDUixLQUFLLEVBQUVSLElBQUksQ0FBQ0wsS0FBTTtJQUN4RnNCLFFBQVEsRUFBRWY7RUFBa0IsRUFBRSxDQUNoQyxlQUNOYiwwREFBQTtJQUFLd0IsU0FBUyxFQUFDO0VBQVksZ0JBQ3ZCeEIsMERBQUE7SUFBTzBCLElBQUksRUFBQyxNQUFNO0lBQUNGLFNBQVMsRUFBQyxjQUFjO0lBQUNOLElBQUksRUFBQyxhQUFhO0lBQUNTLFdBQVcsRUFBQyxhQUFhO0lBQUNSLEtBQUssRUFBRVIsSUFBSSxDQUFDSixXQUFZO0lBQzdHcUIsUUFBUSxFQUFFZjtFQUFrQixFQUFFLENBQ2hDLGVBQ05iLDBEQUFBO0lBQVF3QixTQUFTLEVBQUM7RUFBYyxHQUFDLHdCQUM3QixlQUFBeEIsMERBQUE7SUFBR3dCLFNBQVMsRUFBQztFQUF5QixFQUFLLENBQ3RDLENBQ04sQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFldEIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDZ0I7QUFDSDtBQUVuQyxTQUFTNkIsVUFBVUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3ZCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBRUEsSUFBTU0sWUFBWSxHQUFHLEVBQUU7QUFFdkIsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBbUM7RUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBQ0gsWUFBWTtFQUFBLElBQUVNLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUMzQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQztFQUNsQixRQUFPSSxNQUFNLENBQUNuQixJQUFJO0lBQ2QsS0FBS0ksOENBQVE7TUFDVCxJQUFNa0IsTUFBTSxHQUFHakIsVUFBVSxDQUFDVSxLQUFLLENBQUM7TUFDaEMsVUFBQVEsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUExQixhQUFBO1FBQUd1QixFQUFFLEVBQUVVO01BQU0sR0FBS0gsTUFBTSxDQUFDTSxPQUFPO0lBQ3BEO01BQ0ksT0FBT1YsS0FBSztFQUFBO0FBRXhCLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1XLFdBQVcsR0FBR3ZCLHNEQUFlLENBQUM7RUFDaEN3QixLQUFLLEVBQUViO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsaUVBQWVZLFdBQVc7Ozs7Ozs7O1VDMUQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9UYXNrL0FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFkZFRhc2sgPSAoe29uU3VibWl0VGFza30pID0+IHtcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7dGl0bGU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBvcGVuOiB0cnVlfSlcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUlucHV0ID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybSh7Li4uZm9ybSxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9kb2RhYyB3YWxpZGFjamUgZm9ybXVsYXJ6YVxuICAgICAgICBvblN1Ym1pdFRhc2soZm9ybSk7XG4gICAgfTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPk5vd2UgemFkYW5pZTwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgdmFsdWU9e2Zvcm0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17Zm9ybS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+RG9kYWogemFkYW5pZSBkbyBsaXN0eVxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVGFzazsiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0FERF9UQVNLfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIG1heElkVGFza3MoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5jb25zdCByZWR1Y2VyVGFzayA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9UQVNLOlxuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gbWF4SWRUYXNrcyhzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogdGFza0lkLCAuLi5hY3Rpb24ucGF5bG9hZH1dXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuLy8gY29uc3QgcHJvZHVjdHMgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coc3RhdGUpXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuLy8gICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4vLyAgICAgICAgIGNhc2UgQ0hBTkdFX09SREVSOlxuLy8gICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGVdO1xuLy8gICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpO1xuLy8gICAgICAgICAgICAgaWYoYWN0aW9uLnBheWxvYWQuYWN0aW9uID09PSBcIlVQXCIpIHtcbi8vICAgICAgICAgICAgICAgICBpZighaW5kZXgpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBbbmV3U3RhdGVbaW5kZXggLSAxXSwgbmV3U3RhdGVbaW5kZXhdXSA9IFtuZXdTdGF0ZVtpbmRleF0sIG5ld1N0YXRlW2luZGV4IC0gMV1dO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IG5ld1N0YXRlLmxlbmd0aCAtIDEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBjb25zdCBjaG9zZUVsZW1lbnQgPSBuZXdTdGF0ZVtpbmRleF07XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4LCAxKTtcbi8vICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zcGxpY2UoaW5kZXgrMSwgMCwgY2hvc2VFbGVtZW50KTtcbi8vICAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGVcbi8vXG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbi8vICAgICB9XG4vLyB9XG4vL1xuLy9cblxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdGFza3M6IHJlZHVjZXJUYXNrXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTFkOGViY2NmN2ExZTgyM2M1ZTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZFRhc2siLCJfcmVmIiwib25TdWJtaXRUYXNrIiwiX3VzZVN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9wZW4iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUNoYW5nZUlucHV0IiwiZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJjb21iaW5lUmVkdWNlcnMiLCJBRERfVEFTSyIsIm1heElkVGFza3MiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJUYXNrIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidGFza0lkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsInJvb3RSZWR1Y2VyIiwidGFza3MiXSwic291cmNlUm9vdCI6IiJ9