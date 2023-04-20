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


// const stateProduct = [];
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
/******/ 	__webpack_require__.h = () => ("db5c686c2215aedd6e1f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOGFlYjViMGY0Y2YwZTY4ODM3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEOztBQUd0RDtBQUNBLElBQU1FLFlBQVksR0FBRyxDQUNqQjtFQUNJQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxLQUFLLEVBQUU7QUFDWCxDQUFDLENBQ0o7QUFDTSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFvQztFQUFBLElBQWhDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFTCxZQUFZO0VBQUEsSUFBRVEsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtiLGlEQUFXO01BQ1osVUFBQWMsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLZixvREFBYztNQUNmLElBQU1nQixRQUFRLEdBQUFGLGtCQUFBLENBQU9ULEtBQUssQ0FBQztNQUMzQlcsUUFBUSxDQUFDQyxNQUFNLENBQUMsVUFBQUMsT0FBTztRQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLVixNQUFNLENBQUNNLE9BQU8sQ0FBQ0ksRUFBRTtNQUFBLEVBQUM7TUFDNUQsT0FBT0gsUUFBUTtJQUNuQjtNQUNJLE9BQU9YLEtBQUs7RUFBQTtBQUV4QixDQUFDOzs7Ozs7OztVQ3RCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5cbi8vIGNvbnN0IHN0YXRlUHJvZHVjdCA9IFtdO1xuY29uc3Qgc3RhdGVQcm9kdWN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiXCJcbiAgICB9XG5dO1xuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4gICAgICAgICAgICBuZXdTdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGI1YzY4NmMyMjE1YWVkZDZlMWZcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJSRU1PVkVfUFJPRFVDVCIsInN0YXRlUHJvZHVjdCIsIm5hbWUiLCJwcmljZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5ld1N0YXRlIiwiZmlsdGVyIiwiZWxlbWVudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==