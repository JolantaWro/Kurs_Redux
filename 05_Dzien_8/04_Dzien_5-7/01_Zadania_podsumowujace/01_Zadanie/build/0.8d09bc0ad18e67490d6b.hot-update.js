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
      this.form.addEventListener("click", function () {
        console.log(_redux_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState().products);
        console.log("wysłano");
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
/******/ 	__webpack_require__.h = () => ("56dfc18dbdfa1daa688c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZDA5YmMwYWQxOGU2NzQ5MGQ2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNVO0FBQUEsSUFFdkNFLFlBQVk7RUFDaEIsU0FBQUEsYUFBWUMsV0FBVyxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsWUFBQTtJQUN2QixJQUFJLENBQUNHLFFBQVEsQ0FBQ0YsV0FBVyxDQUFDO0lBQzFCLElBQUksQ0FBQ0csWUFBWSxFQUFFO0lBQ25CLElBQUksQ0FBQ0MsV0FBVyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCO0VBQUNDLFlBQUEsQ0FBQVAsWUFBQTtJQUFBUSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTixTQUFTRixXQUFXLEVBQUU7TUFDcEIsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7TUFDOUIsSUFBSSxDQUFDQSxXQUFXLENBQUNTLFNBQVMsK2hCQWV6QjtJQUNIO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUosWUFBQSxFQUFjO01BQ1osSUFBSSxDQUFDTSxJQUFJLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUNXLGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDbEQsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDWixXQUFXLENBQUNXLGFBQWEsQ0FBQyxZQUFZLENBQUM7SUFDOUQ7RUFBQztJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTCxhQUFBLEVBQWU7TUFDYk4sOERBQWUsQ0FBQztRQUFBLE9BQU1pQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2xCLDZEQUFjLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQztNQUFBLEVBQUM7SUFFL0Q7RUFBQztJQUFBVixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSCxjQUFBLEVBQWdCO01BQ2QsSUFBSSxDQUFDSyxJQUFJLENBQUNRLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ3hDSixPQUFPLENBQUNDLEdBQUcsQ0FBQ2xCLDZEQUFjLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQztRQUN0Q0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3RCbEIsNkRBQWMsQ0FBQztVQUNidUIsSUFBSSxFQUFDO1FBQ1AsQ0FBQyxDQUFDO01BRUosQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFyQixZQUFBO0FBQUE7QUFHSCxpRUFBZUEsWUFBWTs7Ozs7Ozs7VUNyRDNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAxX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMV9aYWRhbmllL2pzL2FwcHMvU2hvcHBpbmdMaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtBRERfUFJPRFVDVH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuY2xhc3MgU2hvcHBpbmdMaXN0IHtcbiAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQpIHtcbiAgICB0aGlzLmNyZWF0ZVVJKHJvb3RFbGVtZW50KTtcbiAgICB0aGlzLnJlZHV4Q29ubmVjdCgpO1xuICAgIHRoaXMuY29sbGVjdFJlZnMoKTtcbiAgICB0aGlzLmFwcGx5SGFuZGxlcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZVVJKHJvb3RFbGVtZW50KSB7XG4gICAgdGhpcy5yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+TGlzdGEgemFrdXDDs3c8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQcm9kdWt0Li4uXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGlkPVwic2hvcC1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIG10LTNcIiBpZD1cInNob3AtbGlzdFwiPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbGxlY3RSZWZzKCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgdGhpcy5zaG9wTGlzdCA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG9wLWxpc3RcIik7XG4gIH1cblxuICByZWR1eENvbm5lY3QoKSB7XG4gICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkucHJvZHVjdHMpKVxuXG4gIH1cblxuICBhcHBseUhhbmRsZXJzKCkge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cylcbiAgICAgIGNvbnNvbGUubG9nKFwid3lzxYJhbm9cIilcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTpcIiBBRERfUFJPRFVDVFwiXG4gICAgICB9KVxuXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wcGluZ0xpc3Q7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NmRmYzE4ZGJkZmExZGFhNjg4Y1wiKSJdLCJuYW1lcyI6WyJzdG9yZSIsIkFERF9QUk9EVUNUIiwiU2hvcHBpbmdMaXN0Iiwicm9vdEVsZW1lbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJjcmVhdGVVSSIsInJlZHV4Q29ubmVjdCIsImNvbGxlY3RSZWZzIiwiYXBwbHlIYW5kbGVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJzaG9wTGlzdCIsInN1YnNjcmliZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0ZSIsInByb2R1Y3RzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=