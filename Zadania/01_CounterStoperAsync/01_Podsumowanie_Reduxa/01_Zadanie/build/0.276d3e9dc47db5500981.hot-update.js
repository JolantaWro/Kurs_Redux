"use strict";
self["webpackHotUpdatees6_react"](0,{

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
/* harmony export */   "setValue": () => (/* binding */ setValue),
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
var setValue = function setValue(value) {
  return {
    type: SET_VALUE,
    payload: value
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
/******/ 	__webpack_require__.h = () => ("0d66ee0b3e2266f42e5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNzZkM2U5ZGM0N2RiNTUwMDk4MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRyx1QkFBdUI7QUFDNUMsSUFBTUMsZUFBZSxHQUFHLDBCQUEwQjtBQUNsRCxJQUFNQyxlQUFlLEdBQUcsMEJBQTBCO0FBQ2xELElBQU1DLFNBQVMsR0FBRyxzQkFBc0I7QUFFeEMsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUE7RUFBQSxPQUFVO0lBQUVDLElBQUksRUFBRUw7RUFBYSxDQUFDO0FBQUEsQ0FBQztBQUUzQyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQTtFQUFBLE9BQVMsVUFBQ0MsUUFBUSxFQUFLO0lBQzVDLElBQU1DLFVBQVUsR0FBR0MsV0FBVyxDQUFDO01BQUEsT0FBTUYsUUFBUSxDQUFDSCxJQUFJLEVBQUUsQ0FBQztJQUFBLEdBQUUsSUFBSSxDQUFDO0lBQzVERyxRQUFRLENBQUM7TUFBRUYsSUFBSSxFQUFFSixlQUFlO01BQUVTLE9BQU8sRUFBRTtRQUFFRixVQUFVLEVBQVZBO01BQVc7SUFBRSxDQUFDLENBQUM7RUFDaEUsQ0FBQztBQUFBO0FBRU0sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUE7RUFBQSxPQUFTLFVBQUNKLFFBQVEsRUFBRUssUUFBUSxFQUFLO0lBQ3JELElBQU1KLFVBQVUsR0FBR0ksUUFBUSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0wsVUFBVTtJQUNoRE0sYUFBYSxDQUFDTixVQUFVLENBQUM7SUFDekJELFFBQVEsQ0FBQztNQUFFRixJQUFJLEVBQUVIO0lBQWdCLENBQUMsQ0FBQztFQUN2QyxDQUFDO0FBQUE7QUFFTSxJQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsS0FBSztFQUFBLE9BQU07SUFDaENYLElBQUksRUFBRUYsU0FBUztJQUNmTyxPQUFPLEVBQUVNO0VBQ2IsQ0FBQztBQUFBLENBQUM7QUFDSyxJQUFNQyxVQUFVLEdBQUcsa0JBQWtCO0FBQ3JDLElBQU1DLFlBQVksR0FBRyxvQkFBb0I7QUFFekMsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUE7RUFBQSxPQUFTLFVBQUNaLFFBQVEsRUFBRUssUUFBUSxFQUFLO0lBQ2pETCxRQUFRLENBQUM7TUFDTEYsSUFBSSxFQUFFWSxVQUFVO01BQ2hCUCxPQUFPLEVBQUU7UUFBRU0sS0FBSyxFQUFFSixRQUFRLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDRztNQUFNO0lBQy9DLENBQUMsQ0FBQztFQUNOLENBQUM7QUFBQTtBQUVNLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxLQUFLO0VBQUEsT0FBTTtJQUNsQ2hCLElBQUksRUFBRWEsWUFBWTtJQUNsQlIsT0FBTyxFQUFFO01BQUVXLEtBQUssRUFBTEE7SUFBTTtFQUNyQixDQUFDO0FBQUEsQ0FBQzs7Ozs7Ozs7VUNuQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8yMi8wMV9Qb2RzdW1vd2FuaWVfUmVkdXhhLzAxX1phZGFuaWUvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDT1VOVEVSX1RJQ0sgPSBcIkBjb3VudGVyL2NvdW50ZXItdGlja1wiO1xuZXhwb3J0IGNvbnN0IENPVU5URVJfU1RBUlRFRCA9IFwiQGNvdW50ZXIvY291bnRlci1zdGFydGVkXCI7XG5leHBvcnQgY29uc3QgQ09VTlRFUl9TVE9QUEVEID0gXCJAY291bnRlci9jb3VudGVyLXN0b3BwZWRcIjtcbmV4cG9ydCBjb25zdCBTRVRfVkFMVUUgPSBcIkBjb3VudGVyL2NvdW50ZXItc2V0XCI7XG5cbmV4cG9ydCBjb25zdCB0aWNrID0gKCkgPT4gKHsgdHlwZTogQ09VTlRFUl9USUNLIH0pO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRDb3VudGVyID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IGRpc3BhdGNoKHRpY2soKSksIDEwMDApO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ09VTlRFUl9TVEFSVEVELCBwYXlsb2FkOiB7IGludGVydmFsSWQgfSB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wQ291bnRlciA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gZ2V0U3RhdGUoKS5jb3VudGVyLmludGVydmFsSWQ7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENPVU5URVJfU1RPUFBFRCB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4gKHtcbiAgICB0eXBlOiBTRVRfVkFMVUUsXG4gICAgcGF5bG9hZDogdmFsdWVcbn0pO1xuZXhwb3J0IGNvbnN0IElURU1fQURERUQgPSBcIkBsaXN0L2l0ZW0tYWRkZWRcIjtcbmV4cG9ydCBjb25zdCBJVEVNX1JFTU9WRUQgPSBcIkBsaXN0L2l0ZW0tcmVtb3ZlZFwiO1xuXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IElURU1fQURERUQsXG4gICAgICAgIHBheWxvYWQ6IHsgdmFsdWU6IGdldFN0YXRlKCkuY291bnRlci52YWx1ZSB9LFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoaW5kZXgpID0+ICh7XG4gICAgdHlwZTogSVRFTV9SRU1PVkVELFxuICAgIHBheWxvYWQ6IHsgaW5kZXggfSxcbn0pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBkNjZlZTBiM2UyMjY2ZjQyZTVkXCIpIl0sIm5hbWVzIjpbIkNPVU5URVJfVElDSyIsIkNPVU5URVJfU1RBUlRFRCIsIkNPVU5URVJfU1RPUFBFRCIsIlNFVF9WQUxVRSIsInRpY2siLCJ0eXBlIiwic3RhcnRDb3VudGVyIiwiZGlzcGF0Y2giLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwYXlsb2FkIiwic3RvcENvdW50ZXIiLCJnZXRTdGF0ZSIsImNvdW50ZXIiLCJjbGVhckludGVydmFsIiwic2V0VmFsdWUiLCJ2YWx1ZSIsIklURU1fQURERUQiLCJJVEVNX1JFTU9WRUQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==