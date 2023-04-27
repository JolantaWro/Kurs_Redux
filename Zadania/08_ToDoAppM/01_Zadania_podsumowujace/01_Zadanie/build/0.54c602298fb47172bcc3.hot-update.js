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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  var filteredTasks = (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_1__.getTask)(allTasks, parseInt(id));
  console.log(filteredTasks);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, filteredTasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/".concat(filteredTasks.id),
    key: filteredTasks.id
  }, filteredTasks.title, " ", filteredTasks.description));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);


var AllTasks = function AllTasks(_ref) {
  var tasks = _ref.tasks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, tasks.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), tasks.length > 0 && tasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/".concat(el.id),
      key: el.id
    }, el.title, " ", el.description);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllTasks);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0eafbb22869e81e13101")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NGM2MDIyOThmYjQ3MTcyYmNjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN1QjtBQUNIO0FBRTlDLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBQyxJQUFBLEVBQW1CO0VBQUEsSUFBZEMsUUFBUSxHQUFBRCxJQUFBLENBQVJDLFFBQVE7RUFFekIsSUFBQUMsVUFBQSxHQUFhTCwyREFBUyxFQUFFO0lBQWpCTSxFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNULElBQU1DLGFBQWEsR0FBR04seURBQU8sQ0FBQ0csUUFBUSxFQUFFSSxRQUFRLENBQUNGLEVBQUUsQ0FBQyxDQUFDO0VBQ3JERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsYUFBYSxDQUFDO0VBRTFCLG9CQUNJVCwwREFBQSxjQUNLUyxhQUFhLENBQUNLLE1BQU0sS0FBSyxDQUFDLGlCQUFJZCwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBYSxHQUFDLGlCQUFZLENBQU0sRUFHN0VOLGFBQWEsQ0FBQ0ssTUFBTSxHQUFHLENBQUMsaUJBQUlkLDBEQUFBLENBQUNDLGtEQUFJO0lBQUNlLEVBQUUsTUFBQUMsTUFBQSxDQUFNUixhQUFhLENBQUNELEVBQUUsQ0FBRztJQUFDVSxHQUFHLEVBQUVULGFBQWEsQ0FBQ0Q7RUFBRyxHQUFFQyxhQUFhLENBQUNVLEtBQUssRUFBQyxHQUFDLEVBQUNWLGFBQWEsQ0FBQ1csV0FBVyxDQUFRLENBUTVJO0FBRWQsQ0FBQztBQUVELGlFQUFlaEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMzQkM7QUFDWTtBQUd0QyxJQUFNaUIsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUFoQixJQUFBLEVBQWdCO0VBQUEsSUFBWGlCLEtBQUssR0FBQWpCLElBQUEsQ0FBTGlCLEtBQUs7RUFFcEIsb0JBQ0l0QiwwREFBQSxDQUFBQSx1REFBQSxRQUNLc0IsS0FBSyxDQUFDUixNQUFNLEtBQUssQ0FBQyxpQkFBSWQsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWEsR0FBQyxpQkFBWSxDQUFNLEVBR3JFTyxLQUFLLENBQUNSLE1BQU0sR0FBRyxDQUFDLElBQUlRLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLEVBQUU7SUFBQSxvQkFBS3pCLDBEQUFBLENBQUNDLGtEQUFJO01BQUNlLEVBQUUsTUFBQUMsTUFBQSxDQUFNUSxFQUFFLENBQUNqQixFQUFFLENBQUc7TUFBQ1UsR0FBRyxFQUFFTyxFQUFFLENBQUNqQjtJQUFHLEdBQUVpQixFQUFFLENBQUNOLEtBQUssRUFBQyxHQUFDLEVBQUNNLEVBQUUsQ0FBQ0wsV0FBVyxDQUFRO0VBQUEsQ0FBQyxDQUFDLENBQzlHO0FBRVgsQ0FBQztBQUVELGlFQUFlQyxRQUFROzs7Ozs7OztVQ2hCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9TaW5nbGVUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL1phZGFuaWEvMDhfVG9Eb0FwcE0vMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9UYXNrL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRhc2tzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+QnJhayB3cGlzw7N3ITwvZGl2Pn1cblxuICAgICAgICAgICAgey8qe2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiA8bGkga2V5PXtmaWx0ZXJlZFRhc2tzLmlkfT57ZmlsdGVyZWRUYXNrcy50aXRsZX08YnIvPntmaWx0ZXJlZFRhc2tzLmRlc2NyaXB0aW9ufTwvbGk+fSovfVxuICAgICAgICAgICAge2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiA8TGluayB0bz17YC8ke2ZpbHRlcmVkVGFza3MuaWR9YH0ga2V5PXtmaWx0ZXJlZFRhc2tzLmlkfT57ZmlsdGVyZWRUYXNrcy50aXRsZX0ge2ZpbHRlcmVkVGFza3MuZGVzY3JpcHRpb259PC9MaW5rPn1cblxuICAgICAgICAgICAgey8qe2xpc3RFbGVtZW50cy5sZW5ndGggPiAwICYmIGxpc3RFbGVtZW50cy5tYXAoZWwgPT4gKCovfVxuICAgICAgICAgICAgey8qICAgIDxMaW5rIHRvPXtgLyR7cGF0aH0vJHtlbC5pZH1gfSBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiIGtleT17ZWwuaWR9PiovfVxuICAgICAgICAgICAgey8qICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYW5lbC1pY29uXCI+PGkgY2xhc3NOYW1lPXtgZmFzIGZhLSR7aWNvbk5hbWV9YH0vPjwvc3Bhbj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAge2VsLm5hbWV9Ki99XG4gICAgICAgICAgICB7LyogICAgPC9MaW5rPiovfVxuICAgICAgICAgICAgey8qKSl9Ki99XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVUYXNrOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cblxuY29uc3QgQWxsVGFza3MgPSAoe3Rhc2tzfSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHt0YXNrcy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiPkJyYWsgd3Bpc8OzdyE8L2Rpdj59XG5cblxuICAgICAgICAgICAge3Rhc2tzLmxlbmd0aCA+IDAgJiYgdGFza3MubWFwKGVsID0+ICg8TGluayB0bz17YC8ke2VsLmlkfWB9IGtleT17ZWwuaWR9PntlbC50aXRsZX0ge2VsLmRlc2NyaXB0aW9ufTwvTGluaz4pKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsbFRhc2tzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBlYWZiYjIyODY5ZTgxZTEzMTAxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVBhcmFtcyIsImdldFRhc2siLCJTaW5nbGVUYXNrIiwiX3JlZiIsImFsbFRhc2tzIiwiX3VzZVBhcmFtcyIsImlkIiwiZmlsdGVyZWRUYXNrcyIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJ0byIsImNvbmNhdCIsImtleSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJBbGxUYXNrcyIsInRhc2tzIiwiRnJhZ21lbnQiLCJtYXAiLCJlbCJdLCJzb3VyY2VSb290IjoiIn0=