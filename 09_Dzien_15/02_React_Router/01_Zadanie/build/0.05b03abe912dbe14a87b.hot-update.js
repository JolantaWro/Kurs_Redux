self["webpackHotUpdatees6_react"](0,{

/***/ 77:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gworonowski/workspaceReact/Kurs_Redux/09_Dzien_15/02_React_Router/01_Zadanie/js/components/Cart.js: Missing initializer in const declaration. (12:26)\n\n\u001b[0m \u001b[90m 10 |\u001b[39m     console\u001b[33m.\u001b[39mlog(\u001b[32m\"selectorValue\"\u001b[39m\u001b[33m,\u001b[39m selectorValue)\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 |\u001b[39m     \u001b[36mconst\u001b[39m newStateProducts\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m     \u001b[90m//\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m     \u001b[90m// const filteredState = getProduct(allProducts, parseInt(idProduct));\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m     \u001b[90m// const product = filteredState[0]\u001b[39m\u001b[0m\n    at instantiate (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.parseVar (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13196:16)\n    at JSXParserMixin.parseVarStatement (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13027:10)\n    at JSXParserMixin.parseStatementContent (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12624:23)\n    at JSXParserMixin.parseStatementLike (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12544:17)\n    at JSXParserMixin.parseStatementListItem (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:12524:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13116:61)\n    at JSXParserMixin.parseBlockBody (/home/gworonowski/workspaceReact/Kurs_Redux/node_modules/@babel/parser/lib/index.js:13109:10)");

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Cart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.productsSelector)(state),
    sum: (0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.sumPriceSelector)(state)
  };
};

//values: state.routes

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addProduct: function addProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.addProduct)(product));
    },
    removeProduct: function removeProduct(product) {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.removeProduct)(product));
    }
    // filterPrice: (value) => dispatch(getPriceValue(value))
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)((_components_Cart__WEBPACK_IMPORTED_MODULE_2___default())));

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filteredProducts": () => (/* binding */ filteredProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var productsSelector = function productsSelector(state) {
  return state.products;
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products.reduce(function (acc, item) {
    return acc + Number(item.price);
  }, 0);
});
var filteredProducts = function filteredProducts(products, selector) {
  return products.filter(function (element) {
    return element.price >= selector;
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b5c591a394ddcb6789c2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNWIwM2FiZTkxMmRiZTE0YTg3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ1U7QUFDRTtBQUNxQjtBQUMwQjtBQUdyRixJQUFNUSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUdDLEtBQUs7RUFBQSxPQUFLO0lBQzlCQyxRQUFRLEVBQUVKLGtFQUFnQixDQUFDRyxLQUFLLENBQUM7SUFDakNFLEdBQUcsRUFBRUosa0VBQWdCLENBQUNFLEtBQUs7RUFDL0IsQ0FBQztBQUFBLENBQUM7O0FBRUY7O0FBRUEsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBR0MsUUFBUTtFQUFBLE9BQUs7SUFDcENWLFVBQVUsRUFBRSxTQUFBQSxXQUFDVyxPQUFPO01BQUEsT0FBS0QsUUFBUSxDQUFDViwwREFBVSxDQUFDVyxPQUFPLENBQUMsQ0FBQztJQUFBO0lBQ3REVixhQUFhLEVBQUUsU0FBQUEsY0FBQ1UsT0FBTztNQUFBLE9BQUtELFFBQVEsQ0FBQ1QsNkRBQWEsQ0FBQ1UsT0FBTyxDQUFDLENBQUM7SUFBQTtJQUM1RDtFQUdKLENBQUM7QUFBQSxDQUFDOztBQUVGLGlFQUFlYixvREFBTyxDQUFDTyxlQUFlLEVBQUVJLGtCQUFrQixDQUFDLENBQUNWLHlEQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFCakU7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7QUFHbEMsSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBR0csS0FBSztFQUFBLE9BQUlBLEtBQUssQ0FBQ0MsUUFBUTtBQUFBO0FBQ2hELElBQU1ILGdCQUFnQixHQUFHUSx3REFBYyxDQUMxQ1QsZ0JBQWdCLEVBQ2hCLFVBQUFJLFFBQVE7RUFBQSxPQUFHQSxRQUFRLENBQUNNLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLElBQUk7SUFBQSxPQUNqQ0QsR0FBRyxHQUFHRSxNQUFNLENBQUNELElBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQUEsQ0FDM0IsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUNSO0FBRU0sSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSVgsUUFBUSxFQUFFWSxRQUFRLEVBQUs7RUFDcEQsT0FBT1osUUFBUSxDQUFDYSxNQUFNLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlBLE9BQU8sQ0FBQ0osS0FBSyxJQUFJRSxRQUFRO0VBQUEsRUFBQztBQUNoRSxDQUFDOzs7Ozs7OztVQ2pCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBXIHR5bSBwbGlrdSBuYWxlxbx5IHd5a29uYcSHIGNvbm5lY3Rcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQ2FydCk7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnRcIjtcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7Z2V0UHJpY2VWYWx1ZSwgcHJvZHVjdHNTZWxlY3Rvciwgc3VtUHJpY2VTZWxlY3Rvcn0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZSlcbn0pO1xuXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxuICAgIHJlbW92ZVByb2R1Y3Q6IChwcm9kdWN0KSA9PiBkaXNwYXRjaChyZW1vdmVQcm9kdWN0KHByb2R1Y3QpKSxcbiAgICAvLyBmaWx0ZXJQcmljZTogKHZhbHVlKSA9PiBkaXNwYXRjaChnZXRQcmljZVZhbHVlKHZhbHVlKSlcblxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7IiwiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcbmV4cG9ydCBjb25zdCBzdW1QcmljZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXG4gICAgICAgIGFjYyArIE51bWJlcihpdGVtLnByaWNlKVxuICAgICksIDApXG4pO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IChwcm9kdWN0cywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5wcmljZSA+PSBzZWxlY3Rvcilcbn07XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNWM1OTFhMzk0ZGRjYjY3ODljMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJDYXJ0IiwiYWRkUHJvZHVjdCIsInJlbW92ZVByb2R1Y3QiLCJnZXRQcmljZVZhbHVlIiwicHJvZHVjdHNTZWxlY3RvciIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiY3JlYXRlU2VsZWN0b3IiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwiTnVtYmVyIiwicHJpY2UiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2VsZWN0b3IiLCJmaWx0ZXIiLCJlbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==