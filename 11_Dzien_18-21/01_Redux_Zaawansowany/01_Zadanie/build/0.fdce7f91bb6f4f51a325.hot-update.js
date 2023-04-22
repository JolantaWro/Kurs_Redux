"use strict";
self["webpackHotUpdatees6_react"](0,{

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
// const initialStateRecipes = [{
//     name: "",
//     description: "",
//     products: [],
//     lastKey: 0
// }]

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
/******/ 	__webpack_require__.h = () => ("078a6812d6829e74e706")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZGNlN2Y5MWJiNmY0ZjUxYTMyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLFNBQVNDLFlBQVlBLENBQUNDLEtBQUssRUFBRTtFQUN6QixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNELEtBQUssRUFBRUUsT0FBTztJQUFBLE9BQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLEVBQUUsRUFBRUwsS0FBSyxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUMsQ0FBQztFQUMvRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQztBQUNwQjtBQUVBLElBQU1NLG1CQUFtQixHQUFHLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUEyQztFQUFBLElBQXZDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFSCxtQkFBbUI7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0QsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS2hCLHdEQUFVO01BQ1gsSUFBTWlCLFFBQVEsR0FBR2hCLFlBQVksQ0FBQ1UsS0FBSyxDQUFDO01BQ3BDLFVBQUFPLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1IsS0FBSyxJQUFBUyxhQUFBO1FBQUdaLEVBQUUsRUFBRVM7TUFBUSxHQUFLRixNQUFNLENBQUNNLE9BQU87SUFDdEQ7SUFDQTtJQUNBO01BQ0ksT0FBT1YsS0FBSztFQUFBO0FBRXhCLENBQUM7Ozs7Ozs7O1VDekJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvcmVkdXgvcmVkdWNlcnMvcmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUREX1JFQ0lQRX0gZnJvbSBcIi4uL2FjdGlvbnMvcmVjaXBlc1wiO1xuXG5mdW5jdGlvbiBtYXhJZFByb2R1Y3QoYXJyYXkpIHtcbiAgICBjb25zdCBtYXhJZCA9IGFycmF5LnJlZHVjZSgobWF4SWQsIGVsZW1lbnQpID0+IE1hdGgubWF4KGVsZW1lbnQuaWQsIG1heElkKSwgLTEpXG4gICAgcmV0dXJuIG1heElkICsgMVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGVSZWNpcGVzID0gW11cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZVJlY2lwZXMgPSBbe1xuLy8gICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4vLyAgICAgcHJvZHVjdHM6IFtdLFxuLy8gICAgIGxhc3RLZXk6IDBcbi8vIH1dXG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUmVjaXBlcyA9IChzdGF0ZT0gaW5pdGlhbFN0YXRlUmVjaXBlcywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9SRUNJUEU6XG4gICAgICAgICAgICBjb25zdCByZWNpcGVJZCA9IG1heElkUHJvZHVjdChzdGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUseyBpZDogcmVjaXBlSWQsIC4uLmFjdGlvbi5wYXlsb2FkLCB9XVxuICAgICAgICAvLyBjYXNlIFJFTU9WRV9QUk9EVUNUOlxuICAgICAgICAvLyAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQubmFtZSAhPT0gYWN0aW9uLnBheWxvYWQubmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDc4YTY4MTJkNjgyOWU3NGU3MDZcIikiXSwibmFtZXMiOlsiQUREX1JFQ0lQRSIsIm1heElkUHJvZHVjdCIsImFycmF5IiwibWF4SWQiLCJyZWR1Y2UiLCJlbGVtZW50IiwiTWF0aCIsIm1heCIsImlkIiwiaW5pdGlhbFN0YXRlUmVjaXBlcyIsInJlZHVjZXJSZWNpcGVzIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJ0eXBlIiwicmVjaXBlSWQiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=