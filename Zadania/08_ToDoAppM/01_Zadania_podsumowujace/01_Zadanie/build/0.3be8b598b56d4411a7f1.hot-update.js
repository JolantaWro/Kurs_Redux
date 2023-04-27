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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
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
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/".concat(filteredTasks.id),
    key: filteredTasks.id
  }, filteredTasks.title, " ", filteredTasks.description));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d290fceb12ef8cf7071")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYmU4YjU5OGI1NmQ0NDExYTdmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN1QjtBQUNIO0FBRTlDLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBZEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7RUFFckIsSUFBQUcsVUFBQSxHQUFhUCwyREFBUyxFQUFFO0lBQWpCUSxFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNUSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsRUFBRSxDQUFDO0VBQ2YsSUFBTUMsYUFBYSxHQUFHUix5REFBTyxDQUFDRyxRQUFRLEVBQUVNLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDLENBQUM7RUFFckQsb0JBQ0lWLDBEQUFBLGNBQ0tXLGFBQWEsQ0FBQ0csTUFBTSxLQUFLLENBQUMsaUJBQUlkLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFhLEdBQUMsaUJBQVksQ0FBTSxFQUc3RUosYUFBYSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxpQkFBSWQsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQ2UsRUFBRSxNQUFBQyxNQUFBLENBQU1OLGFBQWEsQ0FBQ0QsRUFBRSxDQUFHO0lBQUNRLEdBQUcsRUFBRVAsYUFBYSxDQUFDRDtFQUFHLEdBQUVDLGFBQWEsQ0FBQ1EsS0FBSyxFQUFDLEdBQUMsRUFBQ1IsYUFBYSxDQUFDUyxXQUFXLENBQVEsQ0FRNUk7QUFFZCxDQUFDO0FBRUQsaUVBQWVoQixVQUFVOzs7Ozs7OztVQzVCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9TaW5nbGVUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFsbFRhc2tzKVxuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc29sZS5sb2coaWQpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj59XG5cbiAgICAgICAgICAgIHsvKntmaWx0ZXJlZFRhc2tzLmxlbmd0aCA+IDAgJiYgPGxpIGtleT17ZmlsdGVyZWRUYXNrcy5pZH0+e2ZpbHRlcmVkVGFza3MudGl0bGV9PGJyLz57ZmlsdGVyZWRUYXNrcy5kZXNjcmlwdGlvbn08L2xpPn0qL31cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA+IDAgJiYgPExpbmsgdG89e2AvJHtmaWx0ZXJlZFRhc2tzLmlkfWB9IGtleT17ZmlsdGVyZWRUYXNrcy5pZH0+e2ZpbHRlcmVkVGFza3MudGl0bGV9IHtmaWx0ZXJlZFRhc2tzLmRlc2NyaXB0aW9ufTwvTGluaz59XG5cbiAgICAgICAgICAgIHsvKntsaXN0RWxlbWVudHMubGVuZ3RoID4gMCAmJiBsaXN0RWxlbWVudHMubWFwKGVsID0+ICgqL31cbiAgICAgICAgICAgIHsvKiAgICA8TGluayB0bz17YC8ke3BhdGh9LyR7ZWwuaWR9YH0gY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIiBrZXk9e2VsLmlkfT4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPjxpIGNsYXNzTmFtZT17YGZhcyBmYS0ke2ljb25OYW1lfWB9Lz48L3NwYW4+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgIHtlbC5uYW1lfSovfVxuICAgICAgICAgICAgey8qICAgIDwvTGluaz4qL31cbiAgICAgICAgICAgIHsvKikpfSovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZDI5MGZjZWIxMmVmOGNmNzA3MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJnZXRUYXNrIiwiU2luZ2xlVGFzayIsIl9yZWYiLCJhbGxUYXNrcyIsImNvbnNvbGUiLCJsb2ciLCJfdXNlUGFyYW1zIiwiaWQiLCJmaWx0ZXJlZFRhc2tzIiwicGFyc2VJbnQiLCJjcmVhdGVFbGVtZW50IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwidG8iLCJjb25jYXQiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==