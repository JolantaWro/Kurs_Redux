"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_RECIPE": () => (/* binding */ ADD_RECIPE),
/* harmony export */   "addRecipe": () => (/* binding */ addRecipe)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ADD_RECIPE = "ADD_RECIPE";
var addRecipe = function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: {
      name: recipe.name,
      description: recipe.description,
      products: _toConsumableArray(recipe.products)
    }
  };
};

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerRecipes": () => (/* binding */ reducerRecipes)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
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

function maxIdProduct(array) {
  var maxId = array.reduce(function (maxId, element) {
    return Math.max(element.id, maxId);
  }, -1);
  return maxId + 1;
}
var initialStateRecipes = [];
var reducerRecipes = function reducerRecipes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateRecipes;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_recipes__WEBPACK_IMPORTED_MODULE_0__.ADD_RECIPE:
      var recipeId = maxIdProduct(state);
      return [].concat(_toConsumableArray(state), [_objectSpread({
        id: recipeId
      }, action.payload)]);
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
/******/ 	__webpack_require__.h = () => ("2beabd32ade3a09b8b0a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41YTE4NTQ1MDc5OTkyODE2NGI0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLFlBQVk7QUFFL0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLE1BQU07RUFBQSxPQUFNO0lBQ2xDQyxJQUFJLEVBQUVILFVBQVU7SUFDaEJJLE9BQU8sRUFBRTtNQUNMQyxJQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFBSTtNQUNqQkMsV0FBVyxFQUFFSixNQUFNLENBQUNJLFdBQVc7TUFDL0JDLFFBQVEsRUFBQUMsa0JBQUEsQ0FBTU4sTUFBTSxDQUFDSyxRQUFRO0lBQ2pDO0VBQ0osQ0FBQztBQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Q0QztBQUU5QyxTQUFTRSxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7RUFDekIsSUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFDRCxLQUFLLEVBQUVFLE9BQU87SUFBQSxPQUFLQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxFQUFFLEVBQUVMLEtBQUssQ0FBQztFQUFBLEdBQUUsQ0FBQyxDQUFDLENBQUM7RUFDL0UsT0FBT0EsS0FBSyxHQUFHLENBQUM7QUFDcEI7QUFFQSxJQUFNTSxtQkFBbUIsR0FBRyxFQUFFO0FBR3ZCLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUEyQztFQUFBLElBQXZDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFSCxtQkFBbUI7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0QsUUFBUUMsTUFBTSxDQUFDcEIsSUFBSTtJQUNmLEtBQUtILHdEQUFVO01BQ1gsSUFBTXdCLFFBQVEsR0FBR2YsWUFBWSxDQUFDVSxLQUFLLENBQUM7TUFDcEMsVUFBQU0sTUFBQSxDQUFBakIsa0JBQUEsQ0FBV1csS0FBSyxJQUFBTyxhQUFBO1FBQUdWLEVBQUUsRUFBRVE7TUFBUSxHQUFLRCxNQUFNLENBQUNuQixPQUFPO0lBQ3REO0lBQ0E7SUFDQTtNQUNJLE9BQU9lLEtBQUs7RUFBQTtBQUV4QixDQUFDOzs7Ozs7OztVQ3BCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL3JlZHV4L2FjdGlvbnMvcmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy9yZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9SRUNJUEUgPSBcIkFERF9SRUNJUEVcIjtcblxuZXhwb3J0IGNvbnN0IGFkZFJlY2lwZSA9IChyZWNpcGUpID0+ICh7XG4gICAgdHlwZTogQUREX1JFQ0lQRSxcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIG5hbWU6IHJlY2lwZS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogcmVjaXBlLmRlc2NyaXB0aW9uLFxuICAgICAgICBwcm9kdWN0czogWy4uLnJlY2lwZS5wcm9kdWN0c11cbiAgICB9XG59KTsiLCJpbXBvcnQge0FERF9SRUNJUEV9IGZyb20gXCIuLi9hY3Rpb25zL3JlY2lwZXNcIjtcblxuZnVuY3Rpb24gbWF4SWRQcm9kdWN0KGFycmF5KSB7XG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxuICAgIHJldHVybiBtYXhJZCArIDFcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlUmVjaXBlcyA9IFtdXG5cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJSZWNpcGVzID0gKHN0YXRlPSBpbml0aWFsU3RhdGVSZWNpcGVzLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1JFQ0lQRTpcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwZUlkID0gbWF4SWRQcm9kdWN0KHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge2lkOiByZWNpcGVJZCwgLi4uYWN0aW9uLnBheWxvYWR9XVxuICAgICAgICAvLyBjYXNlIFJFTU9WRV9QUk9EVUNUOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmJlYWJkMzJhZGUzYTA5YjhiMGFcIikiXSwibmFtZXMiOlsiQUREX1JFQ0lQRSIsImFkZFJlY2lwZSIsInJlY2lwZSIsInR5cGUiLCJwYXlsb2FkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJvZHVjdHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJtYXhJZFByb2R1Y3QiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImluaXRpYWxTdGF0ZVJlY2lwZXMiLCJyZWR1Y2VyUmVjaXBlcyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwicmVjaXBlSWQiLCJjb25jYXQiLCJfb2JqZWN0U3ByZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==