"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);





var mapStateToProps = function mapStateToProps(state) {
  return {
    value: state.counter.value,
    isCounting: state.counter.isCounting
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    startCounter: function startCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.startCounter)());
    },
    stopCounter: function stopCounter() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.stopCounter)());
    }
  };
};
var CounterContainer = function CounterContainer(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    number = _useParams.number;
  useEffect(function () {
    updateStartingValue(parseInt(number, 10));
  }, [number]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Counter, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(CounterContainer));

/***/ }),

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COUNTER_STARTED": () => (/* binding */ COUNTER_STARTED),
/* harmony export */   "COUNTER_STOPPED": () => (/* binding */ COUNTER_STOPPED),
/* harmony export */   "COUNTER_TICK": () => (/* binding */ COUNTER_TICK),
/* harmony export */   "ITEM_ADDED": () => (/* binding */ ITEM_ADDED),
/* harmony export */   "ITEM_REMOVED": () => (/* binding */ ITEM_REMOVED),
/* harmony export */   "SET_VALUE": () => (/* binding */ SET_VALUE),
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "startCounter": () => (/* binding */ startCounter),
/* harmony export */   "stopCounter": () => (/* binding */ stopCounter),
/* harmony export */   "tick": () => (/* binding */ tick)
/* harmony export */ });
var COUNTER_TICK = "@counter/counter-tick";
var COUNTER_STARTED = "@counter/counter-started";
var COUNTER_STOPPED = "@counter/counter-stopped";
var SET_VALUE = "@counter/counter-set";
var tick = function tick() {
  return {
    type: COUNTER_TICK
  };
};
var startCounter = function startCounter() {
  return function (dispatch) {
    var intervalId = setInterval(function () {
      return dispatch(tick());
    }, 1000);
    dispatch({
      type: COUNTER_STARTED,
      payload: {
        intervalId: intervalId
      }
    });
  };
};
var stopCounter = function stopCounter() {
  return function (dispatch, getState) {
    var intervalId = getState().counter.intervalId;
    clearInterval(intervalId);
    dispatch({
      type: COUNTER_STOPPED
    });
  };
};
var ITEM_ADDED = "@list/item-added";
var ITEM_REMOVED = "@list/item-removed";
var addItem = function addItem() {
  return function (dispatch, getState) {
    dispatch({
      type: ITEM_ADDED,
      payload: {
        value: getState().counter.value
      }
    });
  };
};
var removeItem = function removeItem(index) {
  return {
    type: ITEM_REMOVED,
    payload: {
      index: index
    }
  };
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("276d3e9dc47db5500981")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZjRkMzIyOTE3MGEwODZjNTQ1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVTtBQUNhO0FBQ25DO0FBQ2lCO0FBRTNDLElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENDLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFPLENBQUNELEtBQUs7SUFDMUJFLFVBQVUsRUFBRUgsS0FBSyxDQUFDRSxPQUFPLENBQUNDO0VBQzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBSUMsUUFBUTtFQUFBLE9BQU07SUFDdENWLFlBQVksRUFBRSxTQUFBQSxhQUFBO01BQUEsT0FBTVUsUUFBUSxDQUFDViw0REFBWSxFQUFFLENBQUM7SUFBQTtJQUM1Q0MsV0FBVyxFQUFFLFNBQUFBLFlBQUE7TUFBQSxPQUFNUyxRQUFRLENBQUNULDJEQUFXLEVBQUUsQ0FBQztJQUFBO0VBQzlDLENBQUM7QUFBQSxDQUFDO0FBSUYsSUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUMsS0FBSyxFQUFLO0VBQ2hDLElBQUFDLFVBQUEsR0FBbUJWLDJEQUFTLEVBQUU7SUFBdEJXLE1BQU0sR0FBQUQsVUFBQSxDQUFOQyxNQUFNO0VBR2RDLFNBQVMsQ0FBQyxZQUFNO0lBQ1pDLG1CQUFtQixDQUFDQyxRQUFRLENBQUNILE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztFQUM3QyxDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDLENBQUM7RUFFWixvQkFDSVosMERBQUEsMkJBQ0lBLDBEQUFBLENBQUNILHdEQUFPLEVBQUthLEtBQUssQ0FBRyxDQUNuQjtBQUVkLENBQUM7QUFFRCxpRUFBZWQsb0RBQU8sQ0FBQ00sZUFBZSxFQUFFSyxrQkFBa0IsQ0FBQyxDQUFDRSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN0RSxJQUFNUSxZQUFZLEdBQUcsdUJBQXVCO0FBQzVDLElBQU1DLGVBQWUsR0FBRywwQkFBMEI7QUFDbEQsSUFBTUMsZUFBZSxHQUFHLDBCQUEwQjtBQUNsRCxJQUFNQyxTQUFTLEdBQUcsc0JBQXNCO0FBRXhDLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFJQSxDQUFBO0VBQUEsT0FBVTtJQUFFQyxJQUFJLEVBQUVMO0VBQWEsQ0FBQztBQUFBLENBQUM7QUFFM0MsSUFBTW5CLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBO0VBQUEsT0FBUyxVQUFDVSxRQUFRLEVBQUs7SUFDNUMsSUFBTWUsVUFBVSxHQUFHQyxXQUFXLENBQUM7TUFBQSxPQUFNaEIsUUFBUSxDQUFDYSxJQUFJLEVBQUUsQ0FBQztJQUFBLEdBQUUsSUFBSSxDQUFDO0lBQzVEYixRQUFRLENBQUM7TUFBRWMsSUFBSSxFQUFFSixlQUFlO01BQUVPLE9BQU8sRUFBRTtRQUFFRixVQUFVLEVBQVZBO01BQVc7SUFBRSxDQUFDLENBQUM7RUFDaEUsQ0FBQztBQUFBO0FBRU0sSUFBTXhCLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBO0VBQUEsT0FBUyxVQUFDUyxRQUFRLEVBQUVrQixRQUFRLEVBQUs7SUFDckQsSUFBTUgsVUFBVSxHQUFHRyxRQUFRLEVBQUUsQ0FBQ3JCLE9BQU8sQ0FBQ2tCLFVBQVU7SUFDaERJLGFBQWEsQ0FBQ0osVUFBVSxDQUFDO0lBQ3pCZixRQUFRLENBQUM7TUFBRWMsSUFBSSxFQUFFSDtJQUFnQixDQUFDLENBQUM7RUFDdkMsQ0FBQztBQUFBO0FBQ00sSUFBTVMsVUFBVSxHQUFHLGtCQUFrQjtBQUNyQyxJQUFNQyxZQUFZLEdBQUcsb0JBQW9CO0FBRXpDLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBO0VBQUEsT0FBUyxVQUFDdEIsUUFBUSxFQUFFa0IsUUFBUSxFQUFLO0lBQ2pEbEIsUUFBUSxDQUFDO01BQ0xjLElBQUksRUFBRU0sVUFBVTtNQUNoQkgsT0FBTyxFQUFFO1FBQUVyQixLQUFLLEVBQUVzQixRQUFRLEVBQUUsQ0FBQ3JCLE9BQU8sQ0FBQ0Q7TUFBTTtJQUMvQyxDQUFDLENBQUM7RUFDTixDQUFDO0FBQUE7QUFFTSxJQUFNMkIsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLEtBQUs7RUFBQSxPQUFNO0lBQ2xDVixJQUFJLEVBQUVPLFlBQVk7SUFDbEJKLE9BQU8sRUFBRTtNQUFFTyxLQUFLLEVBQUxBO0lBQU07RUFDckIsQ0FBQztBQUFBLENBQUM7Ozs7Ozs7O1VDOUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMjIvMDFfUG9kc3Vtb3dhbmllX1JlZHV4YS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENvdW50ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudGVyXCI7XG5pbXBvcnQgeyBzdGFydENvdW50ZXIsIHN0b3BDb3VudGVyIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIHZhbHVlOiBzdGF0ZS5jb3VudGVyLnZhbHVlLFxuICAgIGlzQ291bnRpbmc6IHN0YXRlLmNvdW50ZXIuaXNDb3VudGluZyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgc3RhcnRDb3VudGVyOiAoKSA9PiBkaXNwYXRjaChzdGFydENvdW50ZXIoKSksXG4gICAgc3RvcENvdW50ZXI6ICgpID0+IGRpc3BhdGNoKHN0b3BDb3VudGVyKCkpLFxufSk7XG5cblxuXG5jb25zdCBDb3VudGVyQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBudW1iZXIgfSA9IHVzZVBhcmFtcygpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB1cGRhdGVTdGFydGluZ1ZhbHVlKHBhcnNlSW50KG51bWJlciwgMTApKVxuICAgIH0sIFtudW1iZXJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q291bnRlciB7Li4ucHJvcHN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXJDb250YWluZXIpO1xuIiwiZXhwb3J0IGNvbnN0IENPVU5URVJfVElDSyA9IFwiQGNvdW50ZXIvY291bnRlci10aWNrXCI7XG5leHBvcnQgY29uc3QgQ09VTlRFUl9TVEFSVEVEID0gXCJAY291bnRlci9jb3VudGVyLXN0YXJ0ZWRcIjtcbmV4cG9ydCBjb25zdCBDT1VOVEVSX1NUT1BQRUQgPSBcIkBjb3VudGVyL2NvdW50ZXItc3RvcHBlZFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9WQUxVRSA9IFwiQGNvdW50ZXIvY291bnRlci1zZXRcIjtcblxuZXhwb3J0IGNvbnN0IHRpY2sgPSAoKSA9PiAoeyB0eXBlOiBDT1VOVEVSX1RJQ0sgfSk7XG5cbmV4cG9ydCBjb25zdCBzdGFydENvdW50ZXIgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gZGlzcGF0Y2godGljaygpKSwgMTAwMCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDT1VOVEVSX1NUQVJURUQsIHBheWxvYWQ6IHsgaW50ZXJ2YWxJZCB9IH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0b3BDb3VudGVyID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBnZXRTdGF0ZSgpLmNvdW50ZXIuaW50ZXJ2YWxJZDtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ09VTlRFUl9TVE9QUEVEIH0pO1xufTtcbmV4cG9ydCBjb25zdCBJVEVNX0FEREVEID0gXCJAbGlzdC9pdGVtLWFkZGVkXCI7XG5leHBvcnQgY29uc3QgSVRFTV9SRU1PVkVEID0gXCJAbGlzdC9pdGVtLXJlbW92ZWRcIjtcblxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJVEVNX0FEREVELFxuICAgICAgICBwYXlsb2FkOiB7IHZhbHVlOiBnZXRTdGF0ZSgpLmNvdW50ZXIudmFsdWUgfSxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGluZGV4KSA9PiAoe1xuICAgIHR5cGU6IElURU1fUkVNT1ZFRCxcbiAgICBwYXlsb2FkOiB7IGluZGV4IH0sXG59KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNzZkM2U5ZGM0N2RiNTUwMDk4MVwiKSJdLCJuYW1lcyI6WyJjb25uZWN0IiwiQ291bnRlciIsInN0YXJ0Q291bnRlciIsInN0b3BDb3VudGVyIiwiUmVhY3QiLCJ1c2VQYXJhbXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiY291bnRlciIsImlzQ291bnRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIkNvdW50ZXJDb250YWluZXIiLCJwcm9wcyIsIl91c2VQYXJhbXMiLCJudW1iZXIiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVTdGFydGluZ1ZhbHVlIiwicGFyc2VJbnQiLCJjcmVhdGVFbGVtZW50IiwiQ09VTlRFUl9USUNLIiwiQ09VTlRFUl9TVEFSVEVEIiwiQ09VTlRFUl9TVE9QUEVEIiwiU0VUX1ZBTFVFIiwidGljayIsInR5cGUiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwYXlsb2FkIiwiZ2V0U3RhdGUiLCJjbGVhckludGVydmFsIiwiSVRFTV9BRERFRCIsIklURU1fUkVNT1ZFRCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9