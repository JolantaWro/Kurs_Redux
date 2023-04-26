"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
var createStore = function createStore(reducer, initialState) {
  var currentState = initialState;
  var listeners = [];
  return {
    dispatch: function dispatch(action) {
      currentState = reducer(currentState, action);
      listeners.forEach(function (listenerFunction) {
        return listenerFunction();
      });
    },
    getState: function getState() {
      return currentState;
    },
    subscribe: function subscribe(listener) {
      listeners.push(listener);
      return function () {
        listeners = listeners.filter(function (l) {
          return l !== listener;
        });
      };
    }
  };
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("296139af86372804ed6e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40ODI2MGUwZjkxZjUxZDEzNDAzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxPQUFPLEVBQUVDLFlBQVksRUFBSztFQUMzQyxJQUFJQyxZQUFZLEdBQUdELFlBQVk7RUFDL0IsSUFBSUUsU0FBUyxHQUFHLEVBQUU7RUFFbEIsT0FBTTtJQUNGQyxRQUFRLFdBQUFBLFNBQUNDLE1BQU0sRUFBRTtNQUNiSCxZQUFZLEdBQUdGLE9BQU8sQ0FBQ0UsWUFBWSxFQUFFRyxNQUFNLENBQUM7TUFDNUNGLFNBQVMsQ0FBQ0csT0FBTyxDQUFDLFVBQUNDLGdCQUFnQjtRQUFBLE9BQUtBLGdCQUFnQixFQUFFO01BQUEsRUFBQztJQUMvRCxDQUFDO0lBQ0RDLFFBQVEsV0FBQUEsU0FBQSxFQUFHO01BQ1AsT0FBT04sWUFBWTtJQUN2QixDQUFDO0lBQ0RPLFNBQVMsV0FBQUEsVUFBQ0MsUUFBUSxFQUFFO01BQ2hCUCxTQUFTLENBQUNRLElBQUksQ0FBQ0QsUUFBUSxDQUFDO01BQ3hCLE9BQU8sWUFBWTtRQUNmUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDLFVBQUNDLENBQUM7VUFBQSxPQUFLQSxDQUFDLEtBQUlILFFBQVE7UUFBQSxFQUFDO01BQ3RELENBQUM7SUFDTDtFQUNKLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7VUN2QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAxX0ltcGxlbWVudGFjamEvMDFfSW1wbGVtZW50YWNqYV9SZWR1eC9qcy9yZWR1eC9jdXN0b21TdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBaYWRhbmllIHogd3lrxYJhZG93Y8SFXHJcbiAqIEltcGxlbWVudGFjamEgd8WCYXNuZWdvIFN0b3JlXHJcbiAqL1xyXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyLCBpbml0aWFsU3RhdGUpID0+IHtcclxuICAgIGxldCBjdXJyZW50U3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICBsZXQgbGlzdGVuZXJzID0gW107XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbikge1xyXG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSByZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyRnVuY3Rpb24pID0+IGxpc3RlbmVyRnVuY3Rpb24oKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobCkgPT4gbCE9PSBsaXN0ZW5lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlU3RvcmUgfTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjk2MTM5YWY4NjM3MjgwNGVkNmVcIikiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFN0YXRlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJmb3JFYWNoIiwibGlzdGVuZXJGdW5jdGlvbiIsImdldFN0YXRlIiwic3Vic2NyaWJlIiwibGlzdGVuZXIiLCJwdXNoIiwiZmlsdGVyIiwibCJdLCJzb3VyY2VSb290IjoiIn0=