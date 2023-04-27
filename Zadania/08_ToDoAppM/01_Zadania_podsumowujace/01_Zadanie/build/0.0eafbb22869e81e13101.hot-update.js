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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  var filteredTasks = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_1__.getTask)(allTasks, parseInt(id));
  console.log(filteredTasks);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, filteredTasks.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), filteredTasks.description));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8f4a55a65b575ab37620")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wZWFmYmIyMjg2OWU4MWUxMzEwMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VCO0FBQ0g7QUFFOUMsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBbUI7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUV6QixJQUFBQyxVQUFBLEdBQWFMLDJEQUFTLEVBQUU7SUFBakJNLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1QsSUFBTUMsYUFBYSxHQUFHTix5REFBTyxDQUFDRyxRQUFRLEVBQUVJLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDLENBQUM7RUFDckRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhLENBQUM7RUFFMUIsb0JBQ0lULDBEQUFBLGNBQ0tTLGFBQWEsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsaUJBQUlkLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFhLEdBQUMsaUJBQVksQ0FBTSxFQUU3RU4sYUFBYSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxpQkFBSWQsMERBQUEsYUFBS1MsYUFBYSxDQUFDTyxLQUFLLGVBQUNoQiwwREFBQSxZQUFLLEVBQUNTLGFBQWEsQ0FBQ1EsV0FBVyxDQUFNLENBU3pGO0FBRWQsQ0FBQztBQUVELGlFQUFlYixVQUFVOzs7Ozs7OztVQzNCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9TaW5nbGVUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRhc2tzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+QnJhayB3cGlzw7N3ITwvZGl2Pn1cblxuICAgICAgICAgICAge2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiA8aDI+e2ZpbHRlcmVkVGFza3MudGl0bGV9PGJyLz57ZmlsdGVyZWRUYXNrcy5kZXNjcmlwdGlvbn08L2gyPn1cbiAgICAgICAgICAgIHsvKntmaWx0ZXJlZFRhc2tzLmxlbmd0aCA+IDAgJiYgPExpbmsgdG89e2AvJHtmaWx0ZXJlZFRhc2tzLmlkfWB9IGtleT17ZmlsdGVyZWRUYXNrcy5pZH0+e2ZpbHRlcmVkVGFza3MudGl0bGV9IHtmaWx0ZXJlZFRhc2tzLmRlc2NyaXB0aW9ufTwvTGluaz59Ki99XG5cbiAgICAgICAgICAgIHsvKntsaXN0RWxlbWVudHMubGVuZ3RoID4gMCAmJiBsaXN0RWxlbWVudHMubWFwKGVsID0+ICgqL31cbiAgICAgICAgICAgIHsvKiAgICA8TGluayB0bz17YC8ke3BhdGh9LyR7ZWwuaWR9YH0gY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIiBrZXk9e2VsLmlkfT4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPjxpIGNsYXNzTmFtZT17YGZhcyBmYS0ke2ljb25OYW1lfWB9Lz48L3NwYW4+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgIHtlbC5uYW1lfSovfVxuICAgICAgICAgICAgey8qICAgIDwvTGluaz4qL31cbiAgICAgICAgICAgIHsvKikpfSovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZjRhNTVhNjViNTc1YWIzNzYyMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJnZXRUYXNrIiwiU2luZ2xlVGFzayIsIl9yZWYiLCJhbGxUYXNrcyIsIl91c2VQYXJhbXMiLCJpZCIsImZpbHRlcmVkVGFza3MiLCJwYXJzZUludCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=