"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var stateProduct = [{
  name: "",
  price: ""
}];
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : stateProduct;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(state);
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      return [].concat(_toConsumableArray(state), [action.payload]);
    case _actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_PRODUCT:
      var newState = _toConsumableArray(state);
      newState.filter(function (element) {
        return element.id !== action.payload.id;
      });
      return newState;
    default:
      return state;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("464c1d912c6d6cef30d5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZjU4N2Y4NjlkZWI1MDJhMjlhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBRXRELElBQU1FLFlBQVksR0FBRyxDQUNqQjtFQUNJQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxLQUFLLEVBQUU7QUFDWCxDQUFDLENBQ0o7QUFDTSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFvQztFQUFBLElBQWhDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFTCxZQUFZO0VBQUEsSUFBRVEsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtiLGlEQUFXO01BQ1osVUFBQWMsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLZixvREFBYztNQUNmLElBQU1nQixRQUFRLEdBQUFGLGtCQUFBLENBQU9ULEtBQUssQ0FBQztNQUMzQlcsUUFBUSxDQUFDQyxNQUFNLENBQUMsVUFBQUMsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLVixNQUFNLENBQUNNLE9BQU8sQ0FBQ0ksRUFBRTtNQUFBLEVBQUM7TUFDNUQsT0FBT0gsUUFBUTtJQUNuQjtNQUNJLE9BQU9YLEtBQUs7RUFBQTtBQUV4QixDQUFDOzs7Ozs7OztVQ3BCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5jb25zdCBzdGF0ZVByb2R1Y3QgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBwcmljZTogXCJcIlxuICAgIH1cbl07XG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZT0gc3RhdGVQcm9kdWN0LCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BST0RVQ1Q6XG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLnN0YXRlXTtcbiAgICAgICAgICAgIG5ld1N0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NjRjMWQ5MTJjNmQ2Y2VmMzBkNVwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIlJFTU9WRV9QUk9EVUNUIiwic3RhdGVQcm9kdWN0IiwibmFtZSIsInByaWNlIiwicmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXlsb2FkIiwibmV3U3RhdGUiLCJmaWx0ZXIiLCJlbGVtZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9