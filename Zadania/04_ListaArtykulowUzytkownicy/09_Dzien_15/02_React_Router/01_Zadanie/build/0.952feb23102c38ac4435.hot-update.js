"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products,
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.getSum)(state.products)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilteredContacts": () => (/* binding */ getFilteredContacts),
/* harmony export */   "getSum": () => (/* binding */ getSum)
/* harmony export */ });
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var getSum = function getSum(products) {
  products.reducer(function (a, b) {
    return Number(a.price) + Number(b.price);
  });
};
var getFilteredContacts = function getFilteredContacts(contacts, text) {
  var contactsSearch = text.toLowerCase();
  return contacts.filter(function (contact) {
    var _contact$name = contact.name,
      first = _contact$name.first,
      last = _contact$name.last;
    return first.toLowerCase().includes(contactsSearch) || last.toLowerCase().includes(contactsSearch);
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f73891a50609810b4c3d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NTJmZWIyMzEwMmMzOGFjNDQzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUMwQjtBQUNVO0FBQ0U7QUFDcUI7QUFDakI7QUFHMUMsSUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFHQyxLQUFLO0VBQUEsT0FBSztJQUM5QkMsUUFBUSxFQUFFRCxLQUFLLENBQUNDLFFBQVE7SUFDeEJDLEdBQUcsRUFBRUosd0RBQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRO0VBRzlCLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENSLFVBQVUsRUFBRSxTQUFBQSxXQUFDUyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDUiwwREFBVSxDQUFDUyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REUixhQUFhLEVBQUUsU0FBQUEsY0FBQ1EsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1AsNkRBQWEsQ0FBQ1EsT0FBTyxDQUFDLENBQUM7SUFBQTtFQUVoRSxDQUFDO0FBQUEsQ0FBQztBQUVGLGlFQUFlWCxvREFBTyxDQUFDSyxlQUFlLEVBQUVJLGtCQUFrQixDQUFDLENBQUNSLHdEQUFJLENBQUM7Ozs7Ozs7Ozs7OztBQ3hCakU7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlHLFFBQVEsRUFBSztFQUNoQ0EsUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7SUFDdkIsT0FBT0MsTUFBTSxDQUFDRixDQUFDLENBQUNHLEtBQUssQ0FBQyxHQUFHRCxNQUFNLENBQUNELENBQUMsQ0FBQ0UsS0FBSyxDQUFDO0VBQzVDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFTSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxRQUFRLEVBQUVDLElBQUksRUFBSztFQUNuRCxJQUFNQyxjQUFjLEdBQUdELElBQUksQ0FBQ0UsV0FBVyxFQUFFO0VBRXpDLE9BQU9ILFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLE9BQU8sRUFBSztJQUNoQyxJQUFBQyxhQUFBLEdBQXdCRCxPQUFPLENBQUNFLElBQUk7TUFBNUJDLEtBQUssR0FBQUYsYUFBQSxDQUFMRSxLQUFLO01BQUVDLElBQUksR0FBQUgsYUFBQSxDQUFKRyxJQUFJO0lBRW5CLE9BQU9ELEtBQUssQ0FBQ0wsV0FBVyxFQUFFLENBQUNPLFFBQVEsQ0FBQ1IsY0FBYyxDQUFDLElBQUlPLElBQUksQ0FBQ04sV0FBVyxFQUFFLENBQUNPLFFBQVEsQ0FBQ1IsY0FBYyxDQUFDO0VBQ3RHLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7O1VDbkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL3JlZHV4L3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxuLy8gb3JheiBza29yenlzdGHEhyB6IHNlbGVrdG9yw7N3IHphaW1wbGVtZW50b3dhbnljaCB3IHBsaWt1IHJlZHV4L3NlbGVjdG9yc1xuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xuaW1wb3J0IHthZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0fSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuaW1wb3J0IHtnZXRTdW19IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcbiAgICBzdW06IGdldFN1bShzdGF0ZS5wcm9kdWN0cylcblxuXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTtcbiIsIi8vIE1pZWpzY2UgbmEgc2VsZWt0b3J5OlxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxuLy8gcGFtacSZdGFqIGFieSBqZSB3eWVrc3BvcnRvd2HEh1xuXG5leHBvcnQgY29uc3QgZ2V0U3VtID0gKHByb2R1Y3RzKSA9PiB7XG4gICAgcHJvZHVjdHMucmVkdWNlcigoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyKGEucHJpY2UpICsgTnVtYmVyKGIucHJpY2UpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpbHRlcmVkQ29udGFjdHMgPSAoY29udGFjdHMsIHRleHQpID0+IHtcbiAgICBjb25zdCBjb250YWN0c1NlYXJjaCA9IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBjb250YWN0cy5maWx0ZXIoKGNvbnRhY3QpID0+IHtcbiAgICAgICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gY29udGFjdC5uYW1lO1xuXG4gICAgICAgIHJldHVybiBmaXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKSB8fCBsYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29udGFjdHNTZWFyY2gpO1xuICAgIH0pO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3Mzg5MWE1MDYwOTgxMGI0YzNkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsIkNhcnQiLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsImdldFN1bSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvZHVjdHMiLCJzdW0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByb2R1Y3QiLCJyZWR1Y2VyIiwiYSIsImIiLCJOdW1iZXIiLCJwcmljZSIsImdldEZpbHRlcmVkQ29udGFjdHMiLCJjb250YWN0cyIsInRleHQiLCJjb250YWN0c1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwiY29udGFjdCIsIl9jb250YWN0JG5hbWUiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9