"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);



var SingleTask = function SingleTask(_ref) {
  var allTasks = _ref.allTasks;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  var filteredTasks = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_1__.getTask)(allTasks, parseInt(id));
  console.log(filteredTasks);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && filteredTasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, el.id, " ", el.title, " ", el.description);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ }),

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TASK": () => (/* binding */ ADD_TASK),
/* harmony export */   "REMOVE_TASK": () => (/* binding */ REMOVE_TASK),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
var ADD_TASK = "ADD_TASK";
var REMOVE_TASK = "REMOVE_TASK";
// const CHANGE_ORDER = "CHANGE_ORDER";

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
//
// const changeOrder = ({product, action}) => ({
//     type: CHANGE_ORDER,
//     payload: {
//         product: product,
//         action: action
//     }
// })
//

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
/******/ 	__webpack_require__.h = () => ("1278eb3e075ed95577c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNUSxXQUFXLEdBQUdsQixzREFBZSxDQUFDO0VBQ2hDbUIsS0FBSyxFQUFFVjtBQUNYLENBQUMsQ0FBQztBQUVGLGlFQUFlUyxXQUFXOzs7Ozs7OztVQ2hFMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9TaW5nbGVUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRhc2tzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+QnJhayB3cGlzw7N3ITwvZGl2Pn1cblxuICAgICAgICAgICAge2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiAoZmlsdGVyZWRUYXNrcy5tYXAoZWwgPT4gKDxoMj57ZWwuaWR9IHtlbC50aXRsZX0ge2VsLmRlc2NyaXB0aW9ufTwvaDI+KSkpfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVUYXNrOyIsIlxuZXhwb3J0IGNvbnN0IEFERF9UQVNLID0gXCJBRERfVEFTS1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9UQVNLID0gXCJSRU1PVkVfVEFTS1wiO1xuLy8gY29uc3QgQ0hBTkdFX09SREVSID0gXCJDSEFOR0VfT1JERVJcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4gKHtcbiAgICB0eXBlOiBBRERfVEFTSyxcbiAgICBwYXlsb2FkOiB0YXNrXG59KTtcbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrID0gKHRhc2spID0+ICh7XG4gICAgdHlwZTogUkVNT1ZFX1RBU0ssXG4gICAgcGF5bG9hZDogdGFza1xufSk7XG4vL1xuLy8gY29uc3QgY2hhbmdlT3JkZXIgPSAoe3Byb2R1Y3QsIGFjdGlvbn0pID0+ICh7XG4vLyAgICAgdHlwZTogQ0hBTkdFX09SREVSLFxuLy8gICAgIHBheWxvYWQ6IHtcbi8vICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcbi8vICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbi8vICAgICB9XG4vLyB9KVxuLy9cbiIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7QUREX1RBU0ssIFJFTU9WRV9UQVNLfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIG1heElkVGFza3MoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXG4gICAgLy8ge3RpdGxlOiBcIlwiLFxuICAgIC8vIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIC8vIG9wZW46IHRydWUsXG4gICAgLy8gaWQ6IDB9XG5dXG5cbmNvbnN0IHJlZHVjZXJUYXNrID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1RBU0s6XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBtYXhJZFRhc2tzKHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge2lkOiB0YXNrSWQsIC4uLmFjdGlvbi5wYXlsb2FkfV1cbiAgICAgICAgY2FzZSBSRU1PVkVfVEFTSzpcbiAgICAgICAgICAgIFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5cbi8vIGNvbnN0IHByb2R1Y3RzID0gKHN0YXRlPSBzdGF0ZVByb2R1Y3QsIGFjdGlvbikgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHN0YXRlKVxuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcbi8vICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgICAgICBjYXNlIENIQU5HRV9PUkRFUjpcbi8vICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbi8vICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KTtcbi8vICAgICAgICAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmFjdGlvbiA9PT0gXCJVUFwiKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgW25ld1N0YXRlW2luZGV4IC0gMV0sIG5ld1N0YXRlW2luZGV4XV0gPSBbbmV3U3RhdGVbaW5kZXhdLCBuZXdTdGF0ZVtpbmRleCAtIDFdXTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuZXdTdGF0ZS5sZW5ndGggLSAxKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY2hvc2VFbGVtZW50ID0gbmV3U3RhdGVbaW5kZXhdO1xuLy8gICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNwbGljZShpbmRleCwgMSk7XG4vLyAgICAgICAgICAgICAgICAgbmV3U3RhdGUuc3BsaWNlKGluZGV4KzEsIDAsIGNob3NlRWxlbWVudCk7XG4vLyAgICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4vL1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4vLyAgICAgfVxuLy8gfVxuLy9cbi8vXG5cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRhc2tzOiByZWR1Y2VyVGFza1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyNzhlYjNlMDc1ZWQ5NTU3N2M0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhcmFtcyIsImdldFRhc2siLCJTaW5nbGVUYXNrIiwiX3JlZiIsImFsbFRhc2tzIiwiX3VzZVBhcmFtcyIsImlkIiwiZmlsdGVyZWRUYXNrcyIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBRERfVEFTSyIsIlJFTU9WRV9UQVNLIiwiYWRkVGFzayIsInRhc2siLCJ0eXBlIiwicGF5bG9hZCIsInJlbW92ZVRhc2siLCJjb21iaW5lUmVkdWNlcnMiLCJtYXhJZFRhc2tzIiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlclRhc2siLCJzdGF0ZSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImFjdGlvbiIsInRhc2tJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJyb290UmVkdWNlciIsInRhc2tzIl0sInNvdXJjZVJvb3QiOiIifQ==