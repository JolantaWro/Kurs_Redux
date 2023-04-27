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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
    }, "Zrobione"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTasks);

/***/ }),

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _components_Task_AddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);





var TasksContainer = function TasksContainer(_ref) {
  var tasks = _ref.tasks,
    removeTask = _ref.removeTask,
    changeTask = _ref.changeTask;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Task__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tasks: tasks,
    removeTask: removeTask,
    changeTask: changeTask
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeTask: function removeTask(task) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.removeTask)(task));
    },
    changeTask: function changeTask(task) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.changeTask)(task));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TasksContainer));

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TASK": () => (/* binding */ ADD_TASK),
/* harmony export */   "CHANGE_TASK": () => (/* binding */ CHANGE_TASK),
/* harmony export */   "REMOVE_TASK": () => (/* binding */ REMOVE_TASK),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "changeTask": () => (/* binding */ changeTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
var ADD_TASK = "ADD_TASK";
var REMOVE_TASK = "REMOVE_TASK";
var CHANGE_TASK = "CHANGE_TASK";
var addTask = function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
};
var removeTask = function removeTask(task) {
  return {
    type: REMOVE_TASK,
    payload: task
  };
};
var changeTask = function changeTask(task) {
  return {
    type: CHANGE_TASK,
    payload: task
  };
};

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
      var index = state.findIndex(function (element) {
        return element === action.payload.id;
      });
      console.log("index", index);
      return newState.map(function (task) {
        return task.id === index ? _objectSpread(_objectSpread({}, task), {}, {
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
/******/ 	__webpack_require__.h = () => ("201fb8230312e8a81f4a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUVGLGlFQUFlYyxXQUFXOzs7Ozs7OztVQ3RFMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvVGFza3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNvbnN0IEFsbFRhc2tzID0gKHt0YXNrcywgcmVtb3ZlVGFzaywgY2hhbmdlVGFza30pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7dGFza3MubGVuZ3RoID09PSAwICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIj5CcmFrIHdwaXPDs3chPC9kaXY+fVxuXG5cbiAgICAgICAgICAgIHt0YXNrcy5sZW5ndGggPiAwICYmIHRhc2tzLm1hcChlbCA9PiAoPD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2VsLmlkfWB9IGtleT17ZWwuaWR9PntlbC50aXRsZX08YnIvPntlbC5kZXNjcmlwdGlvbn08L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVUYXNrKGVsKX0+VXN1xYQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVRhc2soZWwpfT5acm9iaW9uZTwvYnV0dG9uPjwvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxUYXNrczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7YWRkVGFzaywgY2hhbmdlVGFzaywgcmVtb3ZlVGFza30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBBbGxUYXNrcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrXCI7XG5pbXBvcnQgQWRkVGFzayBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrL0FkZFRhc2tcIjtcblxuY29uc3QgVGFza3NDb250YWluZXIgPSAoe3Rhc2tzLCByZW1vdmVUYXNrLCBjaGFuZ2VUYXNrfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBbGxUYXNrcyB0YXNrcz17dGFza3N9IHJlbW92ZVRhc2s9e3JlbW92ZVRhc2t9IGNoYW5nZVRhc2s9e2NoYW5nZVRhc2t9IC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHRhc2tzOiBzdGF0ZS50YXNrcyxcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgcmVtb3ZlVGFzazogKHRhc2spPT5kaXNwYXRjaChyZW1vdmVUYXNrKHRhc2spKSxcbiAgICBjaGFuZ2VUYXNrOiAodGFzayk9PmRpc3BhdGNoKGNoYW5nZVRhc2sodGFzaykpXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRhc2tzQ29udGFpbmVyKSIsIlxuZXhwb3J0IGNvbnN0IEFERF9UQVNLID0gXCJBRERfVEFTS1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9UQVNLID0gXCJSRU1PVkVfVEFTS1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9UQVNLID0gXCJDSEFOR0VfVEFTS1wiO1xuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiAoe1xuICAgIHR5cGU6IEFERF9UQVNLLFxuICAgIHBheWxvYWQ6IHRhc2tcbn0pO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4gKHtcbiAgICB0eXBlOiBSRU1PVkVfVEFTSyxcbiAgICBwYXlsb2FkOiB0YXNrXG59KTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVRhc2sgPSAodGFzaykgPT4gKHtcbiAgICB0eXBlOiBDSEFOR0VfVEFTSyxcbiAgICBwYXlsb2FkOiB0YXNrXG59KVxuXG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQge0FERF9UQVNLLCBDSEFOR0VfVEFTSywgUkVNT1ZFX1RBU0t9IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gbWF4SWRUYXNrcyhhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtcbiAgICAvLyB7dGl0bGU6IFwiXCIsXG4gICAgLy8gZGVzY3JpcHRpb246IFwiXCIsXG4gICAgLy8gb3BlbjogdHJ1ZSxcbiAgICAvLyBpZDogMH1cbl1cblxuY29uc3QgcmVkdWNlclRhc2sgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IG1heElkVGFza3Moc3RhdGUpXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQ6IHRhc2tJZCwgLi4uYWN0aW9uLnBheWxvYWR9XVxuICAgICAgICBjYXNlIFJFTU9WRV9UQVNLOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKTtcbiAgICAgICAgY2FzZSBDSEFOR0VfVEFTSzpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4XCIsIGluZGV4KVxuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlLm1hcCgodGFzaykgPT4gdGFzay5pZCA9PT0gaW5kZXggPyB7Li4udGFzaywgb3BlbjogZmFsc2V9IDogbnVsbClcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5cbi8vIGNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbi8vICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgICAgICBjYXNlIENIQU5HRV9PUkRFUjpcbi8vICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbi8vICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KTtcbi8vICAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmFjdGlvbiA9PT0gXCJVUFwiKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgW25ld1N0YXRlW2luZGV4IC0gMV0sIG5ld1N0YXRlW2luZGV4XV0gPSBbbmV3U3RhdGVbaW5kZXhdLCBuZXdTdGF0ZVtpbmRleCAtIDFdXTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuZXdTdGF0ZS5sZW5ndGggLSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY2hvc2VFbGVtZW50ID0gbmV3U3RhdGVbaW5kZXhdO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4KzEsIDAsIGNob3NlRWxlbWVudCk7XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4vL1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRhc2tzOiByZWR1Y2VyVGFza1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIwMWZiODIzMDMxMmU4YTgxZjRhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkFsbFRhc2tzIiwiX3JlZiIsInRhc2tzIiwicmVtb3ZlVGFzayIsImNoYW5nZVRhc2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsInRvIiwiY29uY2F0IiwiaWQiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib25DbGljayIsImNvbm5lY3QiLCJhZGRUYXNrIiwiQWRkVGFzayIsIlRhc2tzQ29udGFpbmVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInRhc2siLCJBRERfVEFTSyIsIlJFTU9WRV9UQVNLIiwiQ0hBTkdFX1RBU0siLCJ0eXBlIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VycyIsIm1heElkVGFza3MiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyVGFzayIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImFjdGlvbiIsInRhc2tJZCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJmaWx0ZXIiLCJuZXdTdGF0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJyb290UmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=