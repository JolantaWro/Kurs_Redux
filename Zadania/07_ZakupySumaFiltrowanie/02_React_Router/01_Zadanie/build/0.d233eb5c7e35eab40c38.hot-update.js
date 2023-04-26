"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Reducer zwracający tablicę produktów



var initialState = {
  products: [],
  sum: 0
};
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var newProducts = [].concat(_toConsumableArray(state.products), [action.payload]);
      var newSum = state.sum + action.payload.price;
      return {
        products: newProducts,
        sum: newSum
      };

    // case ADD_PRODUCT:
    //     return [...state, action.payload]
    // case REMOVE_PRODUCT:
    //     return state.filter(element => element.name !== action.payload.name);
    default:
      return state;
  }
};
var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  products: reducerProducts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f87baa08e6b535d9bc99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMjMzZWI1YzdlMzVlYWI0MGMzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlzRDtBQUNoQjtBQUV0QyxJQUFNRyxZQUFZLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxFQUFFO0VBQ1pDLEdBQUcsRUFBRTtBQUNULENBQUM7QUFFRCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUEsRUFBb0M7RUFBQSxJQUFoQ0MsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRUwsWUFBWTtFQUFBLElBQUVRLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUNoRCxRQUFRQyxNQUFNLENBQUNDLElBQUk7SUFDZixLQUFLWixpREFBVztNQUNaLElBQU1hLFdBQVcsTUFBQUMsTUFBQSxDQUFBQyxrQkFBQSxDQUFPUixLQUFLLENBQUNILFFBQVEsSUFBRU8sTUFBTSxDQUFDSyxPQUFPLEVBQUM7TUFDdkQsSUFBTUMsTUFBTSxHQUFHVixLQUFLLENBQUNGLEdBQUcsR0FBR00sTUFBTSxDQUFDSyxPQUFPLENBQUNFLEtBQUs7TUFDL0MsT0FBTztRQUFDZCxRQUFRLEVBQUVTLFdBQVc7UUFBRVIsR0FBRyxFQUFFWTtNQUFNLENBQUM7O0lBSS9DO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7TUFDSSxPQUFPVixLQUFLO0VBQUE7QUFFeEIsQ0FBQztBQUNELElBQU1ZLFdBQVcsR0FBR2pCLHNEQUFlLENBQUM7RUFDaENFLFFBQVEsRUFBRUU7QUFDZCxDQUFDLENBQUM7QUFFRixpRUFBZWEsV0FBVzs7Ozs7Ozs7VUNqQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZHVjZXIgendyYWNhasSFY3kgdGFibGljxJkgcHJvZHVrdMOzd1xuXG5cblxuaW1wb3J0IHtBRERfUFJPRFVDVCwgUkVNT1ZFX1BST0RVQ1R9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBzdW06IDAsXG59O1xuXG5jb25zdCByZWR1Y2VyUHJvZHVjdHMgPSAoc3RhdGU9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgY29uc3QgbmV3UHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHMsIGFjdGlvbi5wYXlsb2FkXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N1bSA9IHN0YXRlLnN1bSArIGFjdGlvbi5wYXlsb2FkLnByaWNlO1xuICAgICAgICAgICAgcmV0dXJuIHtwcm9kdWN0czogbmV3UHJvZHVjdHMsIHN1bTogbmV3U3VtfTtcblxuXG5cbiAgICAgICAgLy8gY2FzZSBBRERfUFJPRFVDVDpcbiAgICAgICAgLy8gICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICAvLyBjYXNlIFJFTU9WRV9QUk9EVUNUOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcHJvZHVjdHM6IHJlZHVjZXJQcm9kdWN0c1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmODdiYWEwOGU2YjUzNWQ5YmM5OVwiKSJdLCJuYW1lcyI6WyJBRERfUFJPRFVDVCIsIlJFTU9WRV9QUk9EVUNUIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbFN0YXRlIiwicHJvZHVjdHMiLCJzdW0iLCJyZWR1Y2VyUHJvZHVjdHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFjdGlvbiIsInR5cGUiLCJuZXdQcm9kdWN0cyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBheWxvYWQiLCJuZXdTdW0iLCJwcmljZSIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==