"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerProducts": () => (/* binding */ reducerProducts)
/* harmony export */ });
/* harmony import */ var _actions_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions/products";

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}

var initialStateProducts = [
  // {
  //     id: 0,
  //     name: ""
  // }
];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateProducts;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var productId = maxIdProduct(state);
      // return [...state, {id: productId, name: action.payload}]
      return [].concat(_toConsumableArray(state), [{
        id: productId,
        name: action.payload
      }]);
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0374fa1f0321dd798bde")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZmI1OTI3YmRkNTU5MWU1NDIyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3pCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBR2dEO0FBRWhELElBQU1PLG9CQUFvQixHQUFHO0VBQ3pCO0VBQ0E7RUFDQTtFQUNBO0FBQUEsQ0FDSDtBQUNNLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUE0QztFQUFBLElBQXhDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFSCxvQkFBb0I7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDL0QsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1IsMERBQVc7TUFDWixJQUFNUyxTQUFTLEdBQUdqQixZQUFZLENBQUNXLEtBQUssQ0FBQztNQUNyQztNQUNBLFVBQUFPLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1IsS0FBSyxJQUFFO1FBQUNKLEVBQUUsRUFBRVUsU0FBUztRQUFFRyxJQUFJLEVBQUVMLE1BQU0sQ0FBQ007TUFBTyxDQUFDO0lBQzNEO0lBQ0E7SUFDQTtNQUNJLE9BQU9WLEtBQUs7RUFBQTtBQUV4QixDQUFDOzs7Ozs7OztVQzNCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge0FERF9QUk9EVUNULCBSRU1PVkVfUFJPRFVDVH0gZnJvbSBcIi4vYWN0aW9ucy9wcm9kdWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gbWF4SWRQcm9kdWN0KGFycmF5KSB7XHJcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXHJcbiAgICByZXR1cm4gbWF4SWQgKyAxXHJcbn1cclxuXHJcblxyXG5pbXBvcnQge0FERF9QUk9EVUNUfSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0c1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlUHJvZHVjdHMgPSBbXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgaWQ6IDAsXHJcbiAgICAvLyAgICAgbmFtZTogXCJcIlxyXG4gICAgLy8gfVxyXG5dXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvZHVjdHMgPSAoc3RhdGU9IGluaXRpYWxTdGF0ZVByb2R1Y3RzLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBtYXhJZFByb2R1Y3Qoc3RhdGUpXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBbLi4uc3RhdGUsIHtpZDogcHJvZHVjdElkLCBuYW1lOiBhY3Rpb24ucGF5bG9hZH1dXHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIHtpZDogcHJvZHVjdElkLCBuYW1lOiBhY3Rpb24ucGF5bG9hZH1dXHJcbiAgICAgICAgLy8gY2FzZSBSRU1PVkVfUFJPRFVDVDpcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMzc0ZmExZjAzMjFkZDc5OGJkZVwiKSJdLCJuYW1lcyI6WyJtYXhJZFByb2R1Y3QiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsIkFERF9QUk9EVUNUIiwiaW5pdGlhbFN0YXRlUHJvZHVjdHMiLCJyZWR1Y2VyUHJvZHVjdHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJwcm9kdWN0SWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJuYW1lIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=