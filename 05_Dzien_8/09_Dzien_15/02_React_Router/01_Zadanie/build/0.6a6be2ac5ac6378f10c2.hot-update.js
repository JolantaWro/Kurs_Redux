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

var stateProduct = [];
// const stateProduct = [
//     {
//         name: "",
//         price: ""
//     }
// ];
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
        return element !== action.payload;
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
/******/ 	__webpack_require__.h = () => ("9af71976f2273b40b53d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YTZiZTJhYzVhYzYzNzhmMTBjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBR3RELElBQU1FLFlBQVksR0FBRyxFQUFFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQW9DO0VBQUEsSUFBaENDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUVILFlBQVk7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDL0NFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUM7RUFDbEIsUUFBUUksTUFBTSxDQUFDRyxJQUFJO0lBQ2YsS0FBS1gsaURBQVc7TUFDWixVQUFBWSxNQUFBLENBQUFDLGtCQUFBLENBQVdULEtBQUssSUFBRUksTUFBTSxDQUFDTSxPQUFPO0lBQ3BDLEtBQUtiLG9EQUFjO01BQ2YsSUFBTWMsUUFBUSxHQUFBRixrQkFBQSxDQUFPVCxLQUFLLENBQUM7TUFDM0JXLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLFVBQUFDLE9BQU87UUFBQSxPQUFJQSxPQUFPLEtBQUtULE1BQU0sQ0FBQ00sT0FBTztNQUFBLEVBQUM7TUFDdEQsT0FBT0MsUUFBUTtJQUNuQjtNQUNJLE9BQU9YLEtBQUs7RUFBQTtBQUV4QixDQUFDOzs7Ozs7OztVQ3RCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5cbmNvbnN0IHN0YXRlUHJvZHVjdCA9IFtdO1xuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0gW1xuLy8gICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJcIixcbi8vICAgICAgICAgcHJpY2U6IFwiXCJcbi8vICAgICB9XG4vLyBdO1xuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4gICAgICAgICAgICBuZXdTdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9PSBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWFmNzE5NzZmMjI3M2I0MGI1M2RcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJSRU1PVkVfUFJPRFVDVCIsInN0YXRlUHJvZHVjdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicGF5bG9hZCIsIm5ld1N0YXRlIiwiZmlsdGVyIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=