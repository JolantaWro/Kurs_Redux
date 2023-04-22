"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerRecipes": () => (/* binding */ reducerRecipes)
/* harmony export */ });
/* harmony import */ var _actions_recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
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
      return [].concat(_toConsumableArray(state), [{
        lastKey: recipeId,
        name: action.payload.name,
        description: action.payload.description,
        products: [action.payload.product]
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
/******/ 	__webpack_require__.h = () => ("a5b9f7aed2dcbb2a2b87")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kN2ZkMGJjZDU1MDY4ZmZkMjM5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRTlDLFNBQVNDLFlBQVlBLENBQUNDLEtBQUssRUFBRTtFQUN6QixJQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNELEtBQUssRUFBRUUsT0FBTztJQUFBLE9BQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLEVBQUUsRUFBRUwsS0FBSyxDQUFDO0VBQUEsR0FBRSxDQUFDLENBQUMsQ0FBQztFQUMvRSxPQUFPQSxLQUFLLEdBQUcsQ0FBQztBQUNwQjtBQUVBLElBQU1NLG1CQUFtQixHQUFHLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUEyQztFQUFBLElBQXZDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFSCxtQkFBbUI7RUFBQSxJQUFFTSxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDN0QsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS2hCLHdEQUFVO01BQ1gsSUFBTWlCLFFBQVEsR0FBR2hCLFlBQVksQ0FBQ1UsS0FBSyxDQUFDO01BQ3BDLFVBQUFPLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV1IsS0FBSyxJQUFFO1FBQ2RTLE9BQU8sRUFBRUgsUUFBUTtRQUNqQkksSUFBSSxFQUFFTixNQUFNLENBQUNPLE9BQU8sQ0FBQ0QsSUFBSTtRQUN6QkUsV0FBVyxFQUFFUixNQUFNLENBQUNPLE9BQU8sQ0FBQ0MsV0FBVztRQUN2Q0MsUUFBUSxFQUFFLENBQUNULE1BQU0sQ0FBQ08sT0FBTyxDQUFDRyxPQUFPO01BRXJDLENBQUM7SUFDTDtJQUNBO0lBQ0E7TUFDSSxPQUFPZCxLQUFLO0VBQUE7QUFFeEIsQ0FBQzs7Ozs7Ozs7VUMvQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy9yZWNpcGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfUkVDSVBFfSBmcm9tIFwiLi4vYWN0aW9ucy9yZWNpcGVzXCI7XG5cbmZ1bmN0aW9uIG1heElkUHJvZHVjdChhcnJheSkge1xuICAgIGNvbnN0IG1heElkID0gYXJyYXkucmVkdWNlKChtYXhJZCwgZWxlbWVudCkgPT4gTWF0aC5tYXgoZWxlbWVudC5pZCwgbWF4SWQpLCAtMSlcbiAgICByZXR1cm4gbWF4SWQgKyAxXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZVJlY2lwZXMgPSBbXVxuLy8gY29uc3QgaW5pdGlhbFN0YXRlUmVjaXBlcyA9IFt7XG4vLyAgICAgbmFtZTogXCJcIixcbi8vICAgICBkZXNjcmlwdGlvbjogXCJcIixcbi8vICAgICBwcm9kdWN0czogW10sXG4vLyAgICAgbGFzdEtleTogMFxuLy8gfV1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJSZWNpcGVzID0gKHN0YXRlPSBpbml0aWFsU3RhdGVSZWNpcGVzLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1JFQ0lQRTpcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwZUlkID0gbWF4SWRQcm9kdWN0KHN0YXRlKVxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge1xuICAgICAgICAgICAgICAgIGxhc3RLZXk6IHJlY2lwZUlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGFjdGlvbi5wYXlsb2FkLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLnBheWxvYWQucHJvZHVjdF1cblxuICAgICAgICAgICAgfV1cbiAgICAgICAgLy8gY2FzZSBSRU1PVkVfUFJPRFVDVDpcbiAgICAgICAgLy8gICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE1YjlmN2FlZDJkY2JiMmEyYjg3XCIpIl0sIm5hbWVzIjpbIkFERF9SRUNJUEUiLCJtYXhJZFByb2R1Y3QiLCJhcnJheSIsIm1heElkIiwicmVkdWNlIiwiZWxlbWVudCIsIk1hdGgiLCJtYXgiLCJpZCIsImluaXRpYWxTdGF0ZVJlY2lwZXMiLCJyZWR1Y2VyUmVjaXBlcyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInJlY2lwZUlkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwibGFzdEtleSIsIm5hbWUiLCJwYXlsb2FkIiwiZGVzY3JpcHRpb24iLCJwcm9kdWN0cyIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9