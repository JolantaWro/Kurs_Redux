"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);


var AllTasks = function AllTasks(_ref) {
  var tasks = _ref.tasks,
    removeTask = _ref.removeTask,
    changeTask = _ref.changeTask;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, tasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), tasks.length > 0 && tasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/".concat(el.id),
      key: el.id
    }, el.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), el.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeTask(el);
      }
    }, "Usu\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return changeTask(el);
      }
    }, "Zrobione")));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTasks);

/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
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
var initialState = [
  // {title: "",
  // description: "",
  // open: true,
  // id: 0}
];
var reducerTask = function reducerTask() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_TASK:
      var taskId = maxIdTasks(state);
      return [].concat(_toConsumableArray(state), [_objectSpread({
        id: taskId
      }, action.payload)]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TASK:
      return state.filter(function (element) {
        return element.id !== action.payload.id;
      });
    case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TASK:
      var newState = _toConsumableArray(state);
      // const index = state.findIndex((element) => element === action.payload.id);
      console.log("index", index);
      return newState.map(function (task) {
        return task.id === action.payload.id ? _objectSpread(_objectSpread({}, task), {}, {
          open: false
        }) : null;
      });
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
/******/ 	__webpack_require__.h = () => ("b9a960820a9584977a47")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0I7TUFDQVcsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFQyxLQUFLLENBQUM7TUFDM0IsT0FBT0gsUUFBUSxDQUFDaEMsR0FBRyxDQUFDLFVBQUNvQyxJQUFJO1FBQUEsT0FBS0EsSUFBSSxDQUFDaEMsRUFBRSxLQUFLcUIsTUFBTSxDQUFDSyxPQUFPLENBQUMxQixFQUFFLEdBQUF5QixhQUFBLENBQUFBLGFBQUEsS0FBT08sSUFBSTtVQUFFQyxJQUFJLEVBQUU7UUFBSyxLQUFJLElBQUk7TUFBQSxFQUFDO0lBRWhHO01BQ0ksT0FBT2YsS0FBSztFQUFBO0FBRXhCLENBQUM7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1nQixXQUFXLEdBQUc3QixzREFBZSxDQUFDO0VBQ2hDaEIsS0FBSyxFQUFFNEI7QUFDWCxDQUFDLENBQUM7QUFFRixpRUFBZWlCLFdBQVc7Ozs7Ozs7O1VDdEUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9UYXNrL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNvbnN0IEFsbFRhc2tzID0gKHt0YXNrcywgcmVtb3ZlVGFzaywgY2hhbmdlVGFza30pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7dGFza3MubGVuZ3RoID09PSAwICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIj5CcmFrIHdwaXPDs3chPC9kaXY+fVxuXG4gICAgICAgICAgICB7dGFza3MubGVuZ3RoID4gMCAmJiB0YXNrcy5tYXAoZWwgPT4gKDw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgLyR7ZWwuaWR9YH0ga2V5PXtlbC5pZH0+e2VsLnRpdGxlfTxici8+e2VsLmRlc2NyaXB0aW9ufTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlVGFzayhlbCl9PlVzdcWEPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVRhc2soZWwpfT5acm9iaW9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxUYXNrczsiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0FERF9UQVNLLCBDSEFOR0VfVEFTSywgUkVNT1ZFX1RBU0t9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gbWF4SWRUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAvLyB7dGl0bGU6IFwiXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiXCIsXG4gICAgLy8gb3BlbjogdHJ1ZSxcbiAgICAvLyBpZDogMH1cbl1cblxuY29uc3QgcmVkdWNlclRhc2sgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IG1heElkVGFza3Moc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQ6IHRhc2tJZCwgLi4uYWN0aW9uLnBheWxvYWR9XVxuICAgICAgICBjYXNlIFJFTU9WRV9UQVNLOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbiAgICAgICAgY2FzZSBDSEFOR0VfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4KVxuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlLm1hcCgodGFzaykgPT4gdGFzay5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQgPyB7Li4udGFzaywgb3BlbjogZmFsc2V9IDogbnVsbClcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5cbi8vIGNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbi8vICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgICAgICBjYXNlIENIQU5HRV9PUkRFUjpcbi8vICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbi8vICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KTtcbi8vICAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmFjdGlvbiA9PT0gXCJVUFwiKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgW25ld1N0YXRlW2luZGV4IC0gMV0sIG5ld1N0YXRlW2luZGV4XV0gPSBbbmV3U3RhdGVbaW5kZXhdLCBuZXdTdGF0ZVtpbmRleCAtIDFdXTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuZXdTdGF0ZS5sZW5ndGggLSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY2hvc2VFbGVtZW50ID0gbmV3U3RhdGVbaW5kZXhdO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4KzEsIDAsIGNob3NlRWxlbWVudCk7XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4vL1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRhc2tzOiByZWR1Y2VyVGFza1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI5YTk2MDgyMGE5NTg0OTc3YTQ3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkFsbFRhc2tzIiwiX3JlZiIsInRhc2tzIiwicmVtb3ZlVGFzayIsImNoYW5nZVRhc2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsInRvIiwiY29uY2F0IiwiaWQiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib25DbGljayIsImNvbWJpbmVSZWR1Y2VycyIsIkFERF9UQVNLIiwiQ0hBTkdFX1RBU0siLCJSRU1PVkVfVEFTSyIsIm1heElkVGFza3MiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyVGFzayIsInN0YXRlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInRhc2tJZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwiZmlsdGVyIiwibmV3U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJ0YXNrIiwib3BlbiIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==