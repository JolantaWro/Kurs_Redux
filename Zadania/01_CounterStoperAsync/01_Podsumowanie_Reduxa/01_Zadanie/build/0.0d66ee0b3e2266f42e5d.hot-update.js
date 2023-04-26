"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);





var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state.counter.value,
    isCounting: state.counter.isCounting
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startCounter: function startCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.startCounter)());
    },
    stopCounter: function stopCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.stopCounter)());
    },
    setNewValue: function setNewValue(value) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.setValue)(value));
    }
  };
};
var CounterContainer = function CounterContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    number = _useParams.number;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    props.setNewValue(parseInt(number, 10));
  }, [number]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var initialCounterState = {
  isCounting: false,
  value: 0,
  intervalId: null
};
var counter = function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCounterState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.COUNTER_STARTED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isCounting: true,
        intervalId: action.payload.intervalId
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.COUNTER_STOPPED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isCounting: false,
        intervalId: null
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.COUNTER_TICK:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: state.value + 1
        });
      }
    case SET_VALUE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          value: action.payload
        });
      }
    default:
      return state;
  }
};
var list = function list() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ITEM_ADDED:
      return [].concat(_toConsumableArray(state), [action.payload.value]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ITEM_REMOVED:
      state.splice(action.payload.index, 1);
      return _toConsumableArray(state);
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  counter: counter,
  list: list
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18e80d48e090239ad485")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUQsSUFBTTZCLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBLEVBQTJCO0VBQUEsSUFBdkI3QixLQUFLLEdBQUFxQixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQUEsSUFBRUcsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzVCLFFBQVFDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNmLEtBQUtSLGdEQUFVO01BQ1gsVUFBQWEsTUFBQSxDQUFBQyxrQkFBQSxDQUFXL0IsS0FBSyxJQUFFd0IsTUFBTSxDQUFDRyxPQUFPLENBQUMxQixLQUFLO0lBRTFDLEtBQUtpQixrREFBWTtNQUNibEIsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDUixNQUFNLENBQUNHLE9BQU8sQ0FBQ00sS0FBSyxFQUFFLENBQUMsQ0FBQztNQUNyQyxPQUFBRixrQkFBQSxDQUFXL0IsS0FBSztJQUVwQjtNQUNJLE9BQU9BLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRUQsaUVBQWVhLHNEQUFlLENBQUM7RUFDM0JYLE9BQU8sRUFBUEEsT0FBTztFQUNQMkIsSUFBSSxFQUFKQTtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUNwREYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9Db3VudGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzEyX0R6aWVuXzIyLzAxX1BvZHN1bW93YW5pZV9SZWR1eGEvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ291bnRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50ZXJcIjtcbmltcG9ydCB7c2V0VmFsdWUsIHN0YXJ0Q291bnRlciwgc3RvcENvdW50ZXJ9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgdmFsdWU6IHN0YXRlLmNvdW50ZXIudmFsdWUsXG4gICAgaXNDb3VudGluZzogc3RhdGUuY291bnRlci5pc0NvdW50aW5nLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBzdGFydENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0YXJ0Q291bnRlcigpKSxcbiAgICBzdG9wQ291bnRlcjogKCkgPT4gZGlzcGF0Y2goc3RvcENvdW50ZXIoKSksXG4gICAgc2V0TmV3VmFsdWU6ICh2YWx1ZSk9PiBkaXNwYXRjaChzZXRWYWx1ZSh2YWx1ZSkpXG59KTtcblxuXG5cbmNvbnN0IENvdW50ZXJDb250YWluZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG51bWJlciB9ID0gdXNlUGFyYW1zKCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb3BzLnNldE5ld1ZhbHVlKHBhcnNlSW50KG51bWJlciwgMTApKVxuICAgIH0sIFtudW1iZXJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q291bnRlciB7Li4ucHJvcHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge1xuICAgIENPVU5URVJfVElDSyxcbiAgICBDT1VOVEVSX1NUQVJURUQsXG4gICAgQ09VTlRFUl9TVE9QUEVELFxuICAgIElURU1fQURERUQsXG4gICAgSVRFTV9SRU1PVkVELFxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmNvbnN0IGluaXRpYWxDb3VudGVyU3RhdGUgPSB7IGlzQ291bnRpbmc6IGZhbHNlLCB2YWx1ZTogMCwgaW50ZXJ2YWxJZDogbnVsbCB9O1xuXG5jb25zdCBjb3VudGVyID0gKHN0YXRlID0gaW5pdGlhbENvdW50ZXJTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIENPVU5URVJfU1RBUlRFRDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNDb3VudGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkOiBhY3Rpb24ucGF5bG9hZC5pbnRlcnZhbElkLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIENPVU5URVJfU1RPUFBFRDpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0NvdW50aW5nOiBmYWxzZSwgaW50ZXJ2YWxJZDogbnVsbCB9O1xuXG4gICAgICAgIGNhc2UgQ09VTlRFUl9USUNLOiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IHN0YXRlLnZhbHVlICsgMSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU0VUX1ZBTFVFOiB7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB2YWx1ZTogYWN0aW9uLnBheWxvYWR9XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGxpc3QgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElURU1fQURERUQ6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZC52YWx1ZV07XG5cbiAgICAgICAgY2FzZSBJVEVNX1JFTU9WRUQ6XG4gICAgICAgICAgICBzdGF0ZS5zcGxpY2UoYWN0aW9uLnBheWxvYWQuaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZV07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50ZXIsXG4gICAgbGlzdCxcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMThlODBkNDhlMDkwMjM5YWQ0ODVcIikiXSwibmFtZXMiOlsiY29ubmVjdCIsIkNvdW50ZXIiLCJzZXRWYWx1ZSIsInN0YXJ0Q291bnRlciIsInN0b3BDb3VudGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiY291bnRlciIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInNldE5ld1ZhbHVlIiwiQ291bnRlckNvbnRhaW5lciIsInByb3BzIiwiX3VzZVBhcmFtcyIsIm51bWJlciIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsImNvbWJpbmVSZWR1Y2VycyIsIkNPVU5URVJfVElDSyIsIkNPVU5URVJfU1RBUlRFRCIsIkNPVU5URVJfU1RPUFBFRCIsIklURU1fQURERUQiLCJJVEVNX1JFTU9WRUQiLCJpbml0aWFsQ291bnRlclN0YXRlIiwiaW50ZXJ2YWxJZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsIlNFVF9WQUxVRSIsImxpc3QiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzcGxpY2UiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=