self["webpackHotUpdatees6_react"](0,{

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TASK": () => (/* binding */ ADD_TASK),
/* harmony export */   "CHANGE_TASK": () => (/* binding */ CHANGE_TASK),
/* harmony export */   "REMOVE_TASK": () => (/* binding */ REMOVE_TASK),
/* harmony export */   "addTask": () => (/* binding */ addTask),
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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceReact/Kurs_Redux/Zadania/08_ToDoAppM/01_Zadania_podsumowujace/01_Zadanie/js/redux/reducers.js: Unexpected keyword 'default'. (25:8)\n\n\u001b[0m \u001b[90m 23 |\u001b[39m         \u001b[36mcase\u001b[39m \u001b[33mCHANGE_TASK\u001b[39m\u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m             \u001b[36mconst\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m         \u001b[36mdefault\u001b[39m\u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m             \u001b[36mreturn\u001b[39m state\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m }\u001b[0m\n    at instantiate (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.checkReservedWord (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12051:12)\n    at JSXParserMixin.parseIdentifierName (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12038:12)\n    at JSXParserMixin.parseIdentifier (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12013:23)\n    at JSXParserMixin.parseBindingAtom (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:7358:17)\n    at JSXParserMixin.parseVarId (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13213:21)\n    at JSXParserMixin.parseVar (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13187:12)\n    at JSXParserMixin.parseVarStatement (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13027:10)");

/***/ }),

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reducers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(100);



var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_1__.compose;
var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)((_reducers__WEBPACK_IMPORTED_MODULE_0___default()), composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e37c9df41a239b2bc7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZDQ3ZDhjMWVhNzg4ZTk3ZDEzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsUUFBUSxHQUFHLFVBQVU7QUFDM0IsSUFBTUMsV0FBVyxHQUFHLGFBQWE7QUFDakMsSUFBTUMsV0FBVyxHQUFHLGFBQWE7QUFFakMsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLElBQUk7RUFBQSxPQUFNO0lBQzlCQyxJQUFJLEVBQUVMLFFBQVE7SUFDZE0sT0FBTyxFQUFFRjtFQUNiLENBQUM7QUFBQSxDQUFDO0FBQ0ssSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlILElBQUk7RUFBQSxPQUFNO0lBQ2pDQyxJQUFJLEVBQUVKLFdBQVc7SUFDakJLLE9BQU8sRUFBRUY7RUFDYixDQUFDO0FBQUEsQ0FBQztBQUVGLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJSixJQUFJO0VBQUEsT0FBTTtJQUMxQkMsSUFBSSxFQUFFSCxXQUFXO0lBQ2pCSSxPQUFPLEVBQUVGO0VBQ2IsQ0FBQztBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakI0RDtBQUMxQjtBQUNKO0FBQ2hDLElBQU1VLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLG9DQUFvQyxJQUFJTCwwQ0FBTztBQUUvRSxJQUFNTSxLQUFLLEdBQUdSLGtEQUFXLENBQUNHLGtEQUFXLEVBQUVFLGdCQUFnQixDQUFDSixzREFBZSxDQUFDRyxtREFBSyxDQUFDLENBQUMsQ0FBQztBQUVoRixpRUFBZUksS0FBSzs7Ozs7Ozs7VUNQcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IEFERF9UQVNLID0gXCJBRERfVEFTS1wiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9UQVNLID0gXCJSRU1PVkVfVEFTS1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9UQVNLID0gXCJDSEFOR0VfVEFTS1wiO1xuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiAoe1xuICAgIHR5cGU6IEFERF9UQVNLLFxuICAgIHBheWxvYWQ6IHRhc2tcbn0pO1xuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4gKHtcbiAgICB0eXBlOiBSRU1PVkVfVEFTSyxcbiAgICBwYXlsb2FkOiB0YXNrXG59KTtcblxuY29uc3QgY2hhbmdlVGFzayA9ICh0YXNrKSA9PiAoe1xuICAgIHR5cGU6IENIQU5HRV9UQVNLLFxuICAgIHBheWxvYWQ6IHRhc2tcbn0pXG5cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZTM3YzlkZjQxYTIzOWIyYmM3ZlwiKSJdLCJuYW1lcyI6WyJBRERfVEFTSyIsIlJFTU9WRV9UQVNLIiwiQ0hBTkdFX1RBU0siLCJhZGRUYXNrIiwidGFzayIsInR5cGUiLCJwYXlsb2FkIiwicmVtb3ZlVGFzayIsImNoYW5nZVRhc2siLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbXBvc2UiLCJyb290UmVkdWNlciIsInRodW5rIiwiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==