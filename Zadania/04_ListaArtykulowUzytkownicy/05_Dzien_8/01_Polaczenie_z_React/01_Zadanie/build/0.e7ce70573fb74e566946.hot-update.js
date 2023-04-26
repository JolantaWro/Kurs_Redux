"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75);
/* harmony import */ var _containers_UserInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _containers_Articles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77);
/* harmony import */ var _containers_Articles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_containers_Articles__WEBPACK_IMPORTED_MODULE_5__);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_UserInput__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_containers_Articles__WEBPACK_IMPORTED_MODULE_5___default()), null)));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect()(UserInput));

/***/ }),

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_ARTICLE": () => (/* binding */ ADD_ARTICLE),
/* harmony export */   "ADD_USER": () => (/* binding */ ADD_USER),
/* harmony export */   "addArticle": () => (/* binding */ addArticle),
/* harmony export */   "addUser": () => (/* binding */ addUser)
/* harmony export */ });
var ADD_ARTICLE = "ADD_ARTICLE";
var ADD_USER = "ADD_USER";
var addArticle = function addArticle(article) {
  return {
    type: ADD_ARTICLE,
    payload: article
  };
};
var addUser = function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  };
};


/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
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


var initialUsersState = {
  jan: 0,
  gosia: 0
};
function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialUsersState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_USER:
      var uID = action.payload.user;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, uID, 0));
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_ARTICLE:
      var userId = action.payload.article.userId;
      var userState = state[userId];
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, userId, userState + 1));
    default:
      return state;
  }
}
var initialArticlesState = [];
function articlesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialArticlesState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_ARTICLE:
      return [].concat(_toConsumableArray(state), [_objectSpread({}, action.payload.article)]);
    default:
      return state;
  }
}
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  users: usersReducer,
  articles: articlesReducer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);


var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("30df24e194818ea4a67c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxHQUFHbkIsc0RBQWUsQ0FBQztFQUM5Qm9CLEtBQUssRUFBRWhCLFlBQVk7RUFDbkJpQixRQUFRLEVBQUVMO0FBQ1osQ0FBQyxDQUFDO0FBQ04saUVBQWVHLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUM3Q1E7QUFDRztBQUVyQyxJQUFNcEMsS0FBSyxHQUFHdUMsa0RBQVcsQ0FBQ0gsaURBQVcsQ0FBQztBQUV0QyxpRUFBZXBDLEtBQUs7Ozs7Ozs7O1VDTHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2xhY3plbmllX3pfUmVhY3QvMDFfWmFkYW5pZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2xhY3plbmllX3pfUmVhY3QvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1VzZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDVfRHppZW5fOC8wMV9Qb2xhY3plbmllX3pfUmVhY3QvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNV9Eemllbl84LzAxX1BvbGFjemVuaWVfel9SZWFjdC8wMV9aYWRhbmllL2pzL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuL2NvbnRhaW5lcnMvVXNlcklucHV0XCI7XHJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi9jb250YWluZXJzL0FydGljbGVzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8VXNlcklucHV0Lz5cclxuICAgICAgPEFydGljbGVzLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFVzZXJJbnB1dCk7XHJcbiIsImNvbnN0IEFERF9BUlRJQ0xFID0gXCJBRERfQVJUSUNMRVwiO1xyXG5jb25zdCBBRERfVVNFUiA9IFwiQUREX1VTRVJcIjtcclxuXHJcbmNvbnN0IGFkZEFydGljbGUgPSAoYXJ0aWNsZSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9BUlRJQ0xFLFxyXG4gICAgcGF5bG9hZDogYXJ0aWNsZVxyXG59KVxyXG5cclxuY29uc3QgYWRkVXNlciA9ICh1c2VyKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1VTRVIsXHJcbiAgICBwYXlsb2FkOiB1c2VyXHJcblxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCB7IEFERF9BUlRJQ0xFLCBBRERfVVNFUiwgYWRkQXJ0aWNsZSwgYWRkVXNlciB9O1xyXG4iLCJpbXBvcnQge0FERF9BUlRJQ0xFLCBBRERfVVNFUn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBpbml0aWFsVXNlcnNTdGF0ZSA9IHtcclxuICBqYW46IDAsXHJcbiAgZ29zaWE6IDAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2Vyc1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsVXNlcnNTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfVVNFUjpcclxuICAgICAgY29uc3QgdUlEID0gYWN0aW9uLnBheWxvYWQudXNlcjtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbdUlEXTogMCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIEFERF9BUlRJQ0xFOlxyXG4gICAgICBjb25zdCB1c2VySWQgPSBhY3Rpb24ucGF5bG9hZC5hcnRpY2xlLnVzZXJJZDtcclxuICAgICAgY29uc3QgdXNlclN0YXRlID0gc3RhdGVbdXNlcklkXTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbdXNlcklkXTogdXNlclN0YXRlICsgMSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxBcnRpY2xlc1N0YXRlID0gW107XHJcblxyXG5mdW5jdGlvbiBhcnRpY2xlc1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsQXJ0aWNsZXNTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfQVJUSUNMRTpcclxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgeyAuLi5hY3Rpb24ucGF5bG9hZC5hcnRpY2xlIH1dO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgdXNlcnM6IHVzZXJzUmVkdWNlcixcclxuICAgICAgYXJ0aWNsZXM6IGFydGljbGVzUmVkdWNlclxyXG4gICAgfSlcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzBkZjI0ZTE5NDgxOGVhNGE2N2NcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIlByb3ZpZGVyIiwic3RvcmUiLCJVc2VySW5wdXQiLCJBcnRpY2xlcyIsIkFwcCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29ubmVjdCIsIkFERF9BUlRJQ0xFIiwiQUREX1VTRVIiLCJhZGRBcnRpY2xlIiwiYXJ0aWNsZSIsInR5cGUiLCJwYXlsb2FkIiwiYWRkVXNlciIsInVzZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsVXNlcnNTdGF0ZSIsImphbiIsImdvc2lhIiwidXNlcnNSZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ1SUQiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwidXNlcklkIiwidXNlclN0YXRlIiwiaW5pdGlhbEFydGljbGVzU3RhdGUiLCJhcnRpY2xlc1JlZHVjZXIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyb290UmVkdWNlciIsInVzZXJzIiwiYXJ0aWNsZXMiLCJjcmVhdGVTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=