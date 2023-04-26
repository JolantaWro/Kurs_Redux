"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "tasksDoneSelector": () => (/* binding */ tasksDoneSelector),
/* harmony export */   "tasksSelector": () => (/* binding */ tasksSelector)
/* harmony export */ });
var tasksSelector = function tasksSelector(state) {
  return state.tasks;
};
var tasksDoneSelector = function tasksDoneSelector(tasks) {
  console.log(tasks);
  return tasks.filter(function (item) {
    return item.open === true;
  });
};
var getTask = function getTask(task, selector) {
  return task.filter(function (element) {
    return element.id === selector;
  });
};

//const selectProducts = (state) => {
//     let price = useParams()
//     try {
//         price = price.price
//         console.log(price)
//         return state.items.filter(item => item.price <= price)
//     } catch {
//         return state.items
//     }
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("382c113b5783e29ac4e4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYzExNWY4OTc4OTZmMjE5NjkzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBR0MsS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsS0FBSztBQUFBO0FBQzFDLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlELEtBQUssRUFBSztFQUN4Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQztFQUNsQixPQUFPQSxLQUFLLENBQUNJLE1BQU0sQ0FBQyxVQUFBQyxJQUFJO0lBQUEsT0FBSUEsSUFBSSxDQUFDQyxJQUFJLEtBQUssSUFBSTtFQUFBLEVBQUM7QUFDbkQsQ0FBQztBQUNNLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxJQUFJLEVBQUVDLFFBQVEsRUFBSztFQUN2QyxPQUFPRCxJQUFJLENBQUNKLE1BQU0sQ0FBQyxVQUFBTSxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDQyxFQUFFLEtBQUtGLFFBQVE7RUFBQSxFQUFDO0FBQzFELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vWmFkYW5pYS8wOF9Ub0RvQXBwTS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdGFza3NTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnRhc2tzXG5leHBvcnQgY29uc3QgdGFza3NEb25lU2VsZWN0b3IgPSAodGFza3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0YXNrcylcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vcGVuID09PSB0cnVlKVxufVxuZXhwb3J0IGNvbnN0IGdldFRhc2sgPSAodGFzaywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gdGFzay5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBzZWxlY3Rvcilcbn07XG5cbi8vY29uc3Qgc2VsZWN0UHJvZHVjdHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICBsZXQgcHJpY2UgPSB1c2VQYXJhbXMoKVxuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIHByaWNlID0gcHJpY2UucHJpY2Vcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJpY2UpXG4vLyAgICAgICAgIHJldHVybiBzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlIDw9IHByaWNlKVxuLy8gICAgIH0gY2F0Y2gge1xuLy8gICAgICAgICByZXR1cm4gc3RhdGUuaXRlbXNcbi8vICAgICB9XG4vLyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzgyYzExM2I1NzgzZTI5YWM0ZTRcIikiXSwibmFtZXMiOlsidGFza3NTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ0YXNrc0RvbmVTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpdGVtIiwib3BlbiIsImdldFRhc2siLCJ0YXNrIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9