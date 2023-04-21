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

var initialStateProducts = [{
  id: 0,
  name: ""
}];
var reducerProducts = function reducerProducts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateProducts;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_products__WEBPACK_IMPORTED_MODULE_0__.ADD_PRODUCT:
      var productId = maxIdProduct(state);
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
/******/ 	__webpack_require__.h = () => ("2de2505359fbc9c5707a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZWU3ZWYzMDQ5NDU4OGNiMzI0Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ3pCLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQ0QsS0FBSyxFQUFFRSxPQUFPO0lBQUEsT0FBS0MsSUFBSSxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csRUFBRSxFQUFFTCxLQUFLLENBQUM7RUFBQSxHQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9FLE9BQU9BLEtBQUssR0FBRyxDQUFDO0FBQ3BCO0FBR2dEO0FBRWhELElBQU1PLG9CQUFvQixHQUFHLENBQ3pCO0VBQ0lGLEVBQUUsRUFBRSxDQUFDO0VBQ0xHLElBQUksRUFBRTtBQUNWLENBQUMsQ0FDSjtBQUNNLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBQSxFQUE0QztFQUFBLElBQXhDQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFFSixvQkFBb0I7RUFBQSxJQUFFTyxNQUFNLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxPQUFBRCxTQUFBLE1BQUFFLFNBQUE7RUFDL0QsUUFBUUMsTUFBTSxDQUFDQyxJQUFJO0lBQ2YsS0FBS1QsMERBQVc7TUFDWixJQUFNVSxTQUFTLEdBQUdsQixZQUFZLENBQUNZLEtBQUssQ0FBQztNQUNyQyxVQUFBTyxNQUFBLENBQUFDLGtCQUFBLENBQVdSLEtBQUssSUFBRTtRQUFDTCxFQUFFLEVBQUVXLFNBQVM7UUFBRVIsSUFBSSxFQUFFTSxNQUFNLENBQUNLO01BQU8sQ0FBQztJQUMzRDtJQUNBO0lBQ0E7TUFDSSxPQUFPVCxLQUFLO0VBQUE7QUFFeEIsQ0FBQzs7Ozs7Ozs7VUMxQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9yZWR1Y2Vycy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtBRERfUFJPRFVDVCwgUkVNT1ZFX1BST0RVQ1R9IGZyb20gXCIuL2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIG1heElkUHJvZHVjdChhcnJheSkge1xyXG4gICAgY29uc3QgbWF4SWQgPSBhcnJheS5yZWR1Y2UoKG1heElkLCBlbGVtZW50KSA9PiBNYXRoLm1heChlbGVtZW50LmlkLCBtYXhJZCksIC0xKVxyXG4gICAgcmV0dXJuIG1heElkICsgMVxyXG59XHJcblxyXG5cclxuaW1wb3J0IHtBRERfUFJPRFVDVH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdHNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZVByb2R1Y3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIG5hbWU6IFwiXCJcclxuICAgIH1cclxuXVxyXG5leHBvcnQgY29uc3QgcmVkdWNlclByb2R1Y3RzID0gKHN0YXRlPSBpbml0aWFsU3RhdGVQcm9kdWN0cywgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUFJPRFVDVDpcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gbWF4SWRQcm9kdWN0KHN0YXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN0YXRlLCB7aWQ6IHByb2R1Y3RJZCwgbmFtZTogYWN0aW9uLnBheWxvYWR9XVxyXG4gICAgICAgIC8vIGNhc2UgUkVNT1ZFX1BST0RVQ1Q6XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgIT09IGFjdGlvbi5wYXlsb2FkLm5hbWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmRlMjUwNTM1OWZiYzljNTcwN2FcIikiXSwibmFtZXMiOlsibWF4SWRQcm9kdWN0IiwiYXJyYXkiLCJtYXhJZCIsInJlZHVjZSIsImVsZW1lbnQiLCJNYXRoIiwibWF4IiwiaWQiLCJBRERfUFJPRFVDVCIsImluaXRpYWxTdGF0ZVByb2R1Y3RzIiwibmFtZSIsInJlZHVjZXJQcm9kdWN0cyIsInN0YXRlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWN0aW9uIiwidHlwZSIsInByb2R1Y3RJZCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9