"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "tasksDoneSelector": () => (/* binding */ tasksDoneSelector),
/* harmony export */   "tasksSelector": () => (/* binding */ tasksSelector),
/* harmony export */   "tasksToDoSelector": () => (/* binding */ tasksToDoSelector)
/* harmony export */ });
var tasksSelector = function tasksSelector(state) {
  return state.tasks;
};
var tasksDoneSelector = function tasksDoneSelector(tasks) {
  return tasks.filter(function (item) {
    return item.open === false;
  });
};
var tasksToDoSelector = function tasksToDoSelector(tasks) {
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
/******/ 	__webpack_require__.h = () => ("98c93eac3bc71011a847")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zODJjMTEzYjU3ODNlMjlhYzRlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUdDLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUs7QUFBQTtBQUMxQyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJRCxLQUFLLEVBQUs7RUFDeEMsT0FBT0EsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQUMsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ0MsSUFBSSxLQUFLLEtBQUs7RUFBQSxFQUFDO0FBQ3BELENBQUM7QUFFTSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJTCxLQUFLLEVBQUs7RUFDeEMsT0FBT0EsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQUMsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ0MsSUFBSSxLQUFLLElBQUk7RUFBQSxFQUFDO0FBQ25ELENBQUM7QUFDTSxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsSUFBSSxFQUFFQyxRQUFRLEVBQUs7RUFDdkMsT0FBT0QsSUFBSSxDQUFDTCxNQUFNLENBQUMsVUFBQU8sT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLRixRQUFRO0VBQUEsRUFBQztBQUMxRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRhc2tzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS50YXNrc1xuZXhwb3J0IGNvbnN0IHRhc2tzRG9uZVNlbGVjdG9yID0gKHRhc2tzKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihpdGVtID0+IGl0ZW0ub3BlbiA9PT0gZmFsc2UpXG59XG5cbmV4cG9ydCBjb25zdCB0YXNrc1RvRG9TZWxlY3RvciA9ICh0YXNrcykgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm9wZW4gPT09IHRydWUpXG59XG5leHBvcnQgY29uc3QgZ2V0VGFzayA9ICh0YXNrLCBzZWxlY3RvcikgPT4ge1xuICAgIHJldHVybiB0YXNrLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQuaWQgPT09IHNlbGVjdG9yKVxufTtcblxuLy9jb25zdCBzZWxlY3RQcm9kdWN0cyA9IChzdGF0ZSkgPT4ge1xuLy8gICAgIGxldCBwcmljZSA9IHVzZVBhcmFtcygpXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgcHJpY2UgPSBwcmljZS5wcmljZVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcmljZSlcbi8vICAgICAgICAgcmV0dXJuIHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJpY2UgPD0gcHJpY2UpXG4vLyAgICAgfSBjYXRjaCB7XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZS5pdGVtc1xuLy8gICAgIH1cbi8vIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5OGM5M2VhYzNiYzcxMDExYTg0N1wiKSJdLCJuYW1lcyI6WyJ0YXNrc1NlbGVjdG9yIiwic3RhdGUiLCJ0YXNrcyIsInRhc2tzRG9uZVNlbGVjdG9yIiwiZmlsdGVyIiwiaXRlbSIsIm9wZW4iLCJ0YXNrc1RvRG9TZWxlY3RvciIsImdldFRhc2siLCJ0YXNrIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9