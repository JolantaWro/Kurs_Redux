"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 91:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);



var SingleTask = function SingleTask(_ref) {
  var allTasks = _ref.allTasks;
  console.log(allTasks);
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  console.log(id);
  var filteredTasks = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_1__.getTask)(allTasks, parseInt(id));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: filteredTasks.id
  }, filteredTasks.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), filteredTasks.description));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ }),

/***/ 87:
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
var getTask = function getTask(tasks, selector) {
  return tasks.filter(function (element) {
    return element.id === selector;
  });
};

//const selectProducts = (state) => {
//     let price = useParams()
//     try {
//         price = price.price
//         console.log(price)
//         return state.items.filter(item => item.pr"ice <= price)
//     } catch {
//         return state.items
//     }
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6ba00134bf25f62811e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lYjUxMjgyMmMzNGI3ZTYxYmQ2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ0c7QUFFOUMsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBbUI7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUN6QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztFQUVyQixJQUFBRyxVQUFBLEdBQWFQLDJEQUFTLEVBQUU7SUFBakJRLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxFQUFFLENBQUM7RUFDZixJQUFNQyxhQUFhLEdBQUdSLHlEQUFPLENBQUNHLFFBQVEsRUFBRU0sUUFBUSxDQUFDRixFQUFFLENBQUMsQ0FBQztFQUVyRCxvQkFDSVQsMERBQUEsY0FDS1UsYUFBYSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxpQkFBSWIsMERBQUE7SUFBS2MsU0FBUyxFQUFDO0VBQWEsR0FBQyxpQkFBWSxDQUFNLEVBRTdFSixhQUFhLENBQUNHLE1BQU0sR0FBRyxDQUFDLGlCQUFJYiwwREFBQTtJQUFJZSxHQUFHLEVBQUVMLGFBQWEsQ0FBQ0Q7RUFBRyxHQUFFQyxhQUFhLENBQUNNLEtBQUssZUFBQ2hCLDBEQUFBLFlBQUssRUFBQ1UsYUFBYSxDQUFDTyxXQUFXLENBQU0sQ0FFaEg7QUFFZCxDQUFDO0FBRUQsaUVBQWVkLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDckJsQixJQUFNZSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUdDLEtBQUs7RUFBQSxPQUFJQSxLQUFLLENBQUNDLEtBQUs7QUFBQTtBQUMxQyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJRCxLQUFLLEVBQUs7RUFDeEMsT0FBT0EsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQUMsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ0MsSUFBSSxLQUFLLEtBQUs7RUFBQSxFQUFDO0FBQ3BELENBQUM7QUFFTSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJTCxLQUFLLEVBQUs7RUFDeEMsT0FBT0EsS0FBSyxDQUFDRSxNQUFNLENBQUMsVUFBQUMsSUFBSTtJQUFBLE9BQUlBLElBQUksQ0FBQ0MsSUFBSSxLQUFLLElBQUk7RUFBQSxFQUFDO0FBQ25ELENBQUM7QUFDTSxJQUFNdEIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlrQixLQUFLLEVBQUVNLFFBQVEsRUFBSztFQUN4QyxPQUFPTixLQUFLLENBQUNFLE1BQU0sQ0FBQyxVQUFBSyxPQUFPO0lBQUEsT0FBSUEsT0FBTyxDQUFDbEIsRUFBRSxLQUFLaUIsUUFBUTtFQUFBLEVBQUM7QUFDM0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9TaW5nbGVUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc29sZS5sb2coaWQpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj59XG5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA+IDAgJiYgPGxpIGtleT17ZmlsdGVyZWRUYXNrcy5pZH0+e2ZpbHRlcmVkVGFza3MudGl0bGV9PGJyLz57ZmlsdGVyZWRUYXNrcy5kZXNjcmlwdGlvbn08L2xpPn1cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVGFzazsiLCJleHBvcnQgY29uc3QgdGFza3NTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnRhc2tzXG5leHBvcnQgY29uc3QgdGFza3NEb25lU2VsZWN0b3IgPSAodGFza3MpID0+IHtcbiAgICByZXR1cm4gdGFza3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vcGVuID09PSBmYWxzZSlcbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tzVG9Eb1NlbGVjdG9yID0gKHRhc2tzKSA9PiB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbHRlcihpdGVtID0+IGl0ZW0ub3BlbiA9PT0gdHJ1ZSlcbn1cbmV4cG9ydCBjb25zdCBnZXRUYXNrID0gKHRhc2tzLCBzZWxlY3RvcikgPT4ge1xuICAgIHJldHVybiB0YXNrcy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSBzZWxlY3Rvcilcbn07XG5cbi8vY29uc3Qgc2VsZWN0UHJvZHVjdHMgPSAoc3RhdGUpID0+IHtcbi8vICAgICBsZXQgcHJpY2UgPSB1c2VQYXJhbXMoKVxuLy8gICAgIHRyeSB7XG4vLyAgICAgICAgIHByaWNlID0gcHJpY2UucHJpY2Vcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJpY2UpXG4vLyAgICAgICAgIHJldHVybiBzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByXCJpY2UgPD0gcHJpY2UpXG4vLyAgICAgfSBjYXRjaCB7XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZS5pdGVtc1xuLy8gICAgIH1cbi8vIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNmJhMDAxMzRiZjI1ZjYyODExZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVBhcmFtcyIsImdldFRhc2siLCJTaW5nbGVUYXNrIiwiX3JlZiIsImFsbFRhc2tzIiwiY29uc29sZSIsImxvZyIsIl91c2VQYXJhbXMiLCJpZCIsImZpbHRlcmVkVGFza3MiLCJwYXJzZUludCIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFza3NTZWxlY3RvciIsInN0YXRlIiwidGFza3MiLCJ0YXNrc0RvbmVTZWxlY3RvciIsImZpbHRlciIsIml0ZW0iLCJvcGVuIiwidGFza3NUb0RvU2VsZWN0b3IiLCJzZWxlY3RvciIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9