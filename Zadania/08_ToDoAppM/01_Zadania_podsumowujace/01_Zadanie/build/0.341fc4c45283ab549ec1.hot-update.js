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
  }, "Brak wpis\xF3w!"), filteredTasks.length > 0 && filteredTasks.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, el.id, " ", el.title, " ", el.description);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTask);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a3eead0d229c0cb3ca61")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNDFmYzRjNDUyODNhYjU0OWVjMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VCO0FBQ0g7QUFFOUMsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBbUI7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUV6QixJQUFBQyxVQUFBLEdBQWFMLDJEQUFTLEVBQUU7SUFBakJNLEVBQUUsR0FBQUQsVUFBQSxDQUFGQyxFQUFFO0VBQ1QsSUFBTUMsYUFBYSxHQUFHTix5REFBTyxDQUFDRyxRQUFRLEVBQUVJLFFBQVEsQ0FBQ0YsRUFBRSxDQUFDLENBQUM7RUFDckRHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxhQUFhLENBQUM7RUFFMUIsb0JBQ0lULDBEQUFBLGNBQ0tTLGFBQWEsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsaUJBQUlkLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFhLEdBQUMsaUJBQVksQ0FBTSxFQUc3RU4sYUFBYSxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxJQUFLTCxhQUFhLENBQUNPLEdBQUcsQ0FBQyxVQUFBQyxFQUFFO0lBQUEsb0JBQUtqQiwwREFBQSxhQUFLaUIsRUFBRSxDQUFDVCxFQUFFLEVBQUMsR0FBQyxFQUFDUyxFQUFFLENBQUNDLEtBQUssRUFBQyxHQUFDLEVBQUNELEVBQUUsQ0FBQ0UsV0FBVyxDQUFNO0VBQUEsQ0FBQyxDQUFFLENBU3BHO0FBRWQsQ0FBQztBQUVELGlFQUFlZixVQUFVOzs7Ozs7OztVQzVCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9aYWRhbmlhLzA4X1RvRG9BcHBNLzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvVGFzay9TaW5nbGVUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGluaywgdXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRUYXNrfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzXCI7XG5cbmNvbnN0IFNpbmdsZVRhc2sgPSAoe2FsbFRhc2tzfSkgPT4ge1xuXG4gICAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGdldFRhc2soYWxsVGFza3MsIHBhcnNlSW50KGlkKSlcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRhc2tzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFRhc2tzLmxlbmd0aCA9PT0gMCAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCI+QnJhayB3cGlzw7N3ITwvZGl2Pn1cblxuICAgICAgICAgICAgey8qe2ZpbHRlcmVkVGFza3MubGVuZ3RoID4gMCAmJiAoPGgyPntmaWx0ZXJlZFRhc2tzLnRpdGxlfSB7ZmlsdGVyZWRUYXNrcy5kZXNjcmlwdGlvbn08L2gyPil9Ki99XG4gICAgICAgICAgICB7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPiAwICYmIChmaWx0ZXJlZFRhc2tzLm1hcChlbCA9PiAoPGgyPntlbC5pZH0ge2VsLnRpdGxlfSB7ZWwuZGVzY3JpcHRpb259PC9oMj4pKSl9XG4gICAgICAgICAgICB7Lyp7ZmlsdGVyZWRUYXNrcy5sZW5ndGggPiAwICYmIDxMaW5rIHRvPXtgLyR7ZmlsdGVyZWRUYXNrcy5pZH1gfSBrZXk9e2ZpbHRlcmVkVGFza3MuaWR9PntmaWx0ZXJlZFRhc2tzLnRpdGxlfSB7ZmlsdGVyZWRUYXNrcy5kZXNjcmlwdGlvbn08L0xpbms+fSovfVxuXG4gICAgICAgICAgICB7Lyp7bGlzdEVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgbGlzdEVsZW1lbnRzLm1hcChlbCA9PiAoKi99XG4gICAgICAgICAgICB7LyogICAgPExpbmsgdG89e2AvJHtwYXRofS8ke2VsLmlkfWB9IGNsYXNzTmFtZT1cInBhbmVsLWJsb2NrXCIga2V5PXtlbC5pZH0+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLWljb25cIj48aSBjbGFzc05hbWU9e2BmYXMgZmEtJHtpY29uTmFtZX1gfS8+PC9zcGFuPiovfVxuICAgICAgICAgICAgey8qICAgICAgICB7ZWwubmFtZX0qL31cbiAgICAgICAgICAgIHsvKiAgICA8L0xpbms+Ki99XG4gICAgICAgICAgICB7LyopKX0qL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTNlZWFkMGQyMjljMGNiM2NhNjFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlUGFyYW1zIiwiZ2V0VGFzayIsIlNpbmdsZVRhc2siLCJfcmVmIiwiYWxsVGFza3MiLCJfdXNlUGFyYW1zIiwiaWQiLCJmaWx0ZXJlZFRhc2tzIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImxlbmd0aCIsImNsYXNzTmFtZSIsIm1hcCIsImVsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=