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
  id: "",
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
/******/ 	__webpack_require__.h = () => ("d8aeb5b0f4cf0e68837d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMzQ2MWU0MjExMDZlZWFkNDJlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNEOztBQUd0RDtBQUNBLElBQU1FLFlBQVksR0FBRyxDQUNqQjtFQUNJQyxFQUFFLEVBQUUsRUFBRTtFQUNOQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxLQUFLLEVBQUU7QUFDWCxDQUFDLENBQ0o7QUFDTSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFvQztFQUFBLElBQWhDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFTixZQUFZO0VBQUEsSUFBRVMsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQy9DRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0VBQ2xCLFFBQVFJLE1BQU0sQ0FBQ0csSUFBSTtJQUNmLEtBQUtkLGlEQUFXO01BQ1osVUFBQWUsTUFBQSxDQUFBQyxrQkFBQSxDQUFXVCxLQUFLLElBQUVJLE1BQU0sQ0FBQ00sT0FBTztJQUNwQyxLQUFLaEIsb0RBQWM7TUFDZixJQUFNaUIsUUFBUSxHQUFBRixrQkFBQSxDQUFPVCxLQUFLLENBQUM7TUFDM0JXLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLFVBQUFDLE9BQU87UUFBQSxPQUFJQSxPQUFPLENBQUNqQixFQUFFLEtBQUtRLE1BQU0sQ0FBQ00sT0FBTyxDQUFDZCxFQUFFO01BQUEsRUFBQztNQUM1RCxPQUFPZSxRQUFRO0lBQ25CO01BQ0ksT0FBT1gsS0FBSztFQUFBO0FBRXhCLENBQUM7Ozs7Ozs7O1VDdkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUREX1BST0RVQ1QsIFJFTU9WRV9QUk9EVUNUfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cblxuLy8gY29uc3Qgc3RhdGVQcm9kdWN0ID0gW107XG5jb25zdCBzdGF0ZVByb2R1Y3QgPSBbXG4gICAge1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgcHJpY2U6IFwiXCJcbiAgICB9XG5dO1xuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9IHN0YXRlUHJvZHVjdCwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUpXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5zdGF0ZV07XG4gICAgICAgICAgICBuZXdTdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDhhZWI1YjBmNGNmMGU2ODgzN2RcIikiXSwibmFtZXMiOlsiQUREX1BST0RVQ1QiLCJSRU1PVkVfUFJPRFVDVCIsInN0YXRlUHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwicmVkdWNlciIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXlsb2FkIiwibmV3U3RhdGUiLCJmaWx0ZXIiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==