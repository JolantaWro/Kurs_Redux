"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ShoppingList = /*#__PURE__*/function () {
  function ShoppingList(rootElement) {
    _classCallCheck(this, ShoppingList);
    this.createUI(rootElement);
    this.reduxConnect();
    this.collectRefs();
    this.applyHandlers();
  }
  _createClass(ShoppingList, [{
    key: "createUI",
    value: function createUI(rootElement) {
      this.rootElement = rootElement;
      this.rootElement.innerHTML = "\n      <div class=\"card-header\">Lista zakup\xF3w</div>\n      <div class=\"card-body\">\n        <form>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Produkt...\" />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-primary\" type=\"button\" id=\"shop-add\">Dodaj</button>\n            </div>\n          </div>\n        </form>\n\n        <ul class=\"list-group mt-3\" id=\"shop-list\">\n        </ul>\n      </div>\n    ";
    }
  }, {
    key: "collectRefs",
    value: function collectRefs() {
      this.form = this.rootElement.querySelector("form");
      this.shopList = this.rootElement.querySelector("#shop-list");
    }
  }, {
    key: "reduxConnect",
    value: function reduxConnect() {
      _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe(function () {
        return console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
      });
    }
  }, {
    key: "applyHandlers",
    value: function applyHandlers() {
      this.form.addEventListener("click", function (e) {
        console.log(e.target.value);
        e.preventDefault();
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
        _redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch({
          type: " ADD_PRODUCT"
        });
      });
    }
  }]);
  return ShoppingList;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37f95e74dee6004c9aec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZmJmZTBlYmFlMDRkNjdlMmUzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNVO0FBQUEsSUFFdkNFLFlBQVk7RUFDaEIsU0FBQUEsYUFBWUMsV0FBVyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsWUFBQTtJQUN2QixJQUFJLENBQUNHLFFBQVEsQ0FBQ0YsV0FBVyxDQUFDO0lBQzFCLElBQUksQ0FBQ0csWUFBWSxFQUFFO0lBQ25CLElBQUksQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCO0VBQUNDLFlBQUEsQ0FBQVAsWUFBQTtJQUFBUSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTixTQUFTRixXQUFXLEVBQUU7TUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7TUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNTLFNBQVMsK2hCQWV6QjtJQUNIO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosWUFBQSxFQUFjO01BQ1osSUFBSSxDQUFDTSxJQUFJLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNXLGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDbEQsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDWixXQUFXLENBQUNXLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDOUQ7RUFBQztJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxhQUFBLEVBQWU7TUFDYk4sOERBQWUsQ0FBQztRQUFBLE9BQU1pQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2xCLDZEQUFjLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQztNQUFBLEVBQUM7SUFFL0Q7RUFBQztJQUFBVixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSCxjQUFBLEVBQWdCO01BQ2QsSUFBSSxDQUFDSyxJQUFJLENBQUNRLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7UUFDekNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ1osS0FBSyxDQUFDO1FBQzNCVyxDQUFDLENBQUNFLGNBQWMsRUFBRTtRQUNsQlAsT0FBTyxDQUFDQyxHQUFHLENBQUNsQiw2REFBYyxFQUFFLENBQUNvQixRQUFRLENBQUM7UUFDdENwQiw2REFBYyxDQUFDO1VBQ2IwQixJQUFJLEVBQUM7UUFDUCxDQUFDLENBQUM7TUFFSixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUEsT0FBQXhCLFlBQUE7QUFBQTtBQUdILGlFQUFlQSxZQUFZOzs7Ozs7OztVQ3REM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAxX1phZGFuaWUvanMvYXBwcy9TaG9wcGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQge0FERF9QUk9EVUNUfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uc1wiO1xuXG5jbGFzcyBTaG9wcGluZ0xpc3Qge1xuICBjb25zdHJ1Y3Rvcihyb290RWxlbWVudCkge1xuICAgIHRoaXMuY3JlYXRlVUkocm9vdEVsZW1lbnQpO1xuICAgIHRoaXMucmVkdXhDb25uZWN0KCk7XG4gICAgdGhpcy5jb2xsZWN0UmVmcygpO1xuICAgIHRoaXMuYXBwbHlIYW5kbGVycygpO1xuICB9XG5cbiAgY3JlYXRlVUkocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5MaXN0YSB6YWt1cMOzdzwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlByb2R1a3QuLi5cIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJzaG9wLWFkZFwiPkRvZGFqPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbXQtM1wiIGlkPVwic2hvcC1saXN0XCI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29sbGVjdFJlZnMoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICB0aGlzLnNob3BMaXN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3AtbGlzdFwiKTtcbiAgfVxuXG4gIHJlZHV4Q29ubmVjdCgpIHtcbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cykpXG5cbiAgfVxuXG4gIGFwcGx5SGFuZGxlcnMoKSB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpXG4gICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6XCIgQUREX1BST0RVQ1RcIlxuICAgICAgfSlcblxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcHBpbmdMaXN0O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzdmOTVlNzRkZWU2MDA0YzlhZWNcIikiXSwibmFtZXMiOlsic3RvcmUiLCJBRERfUFJPRFVDVCIsIlNob3BwaW5nTGlzdCIsInJvb3RFbGVtZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiY3JlYXRlVUkiLCJyZWR1eENvbm5lY3QiLCJjb2xsZWN0UmVmcyIsImFwcGx5SGFuZGxlcnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImlubmVySFRNTCIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwic2hvcExpc3QiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJwcm9kdWN0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9