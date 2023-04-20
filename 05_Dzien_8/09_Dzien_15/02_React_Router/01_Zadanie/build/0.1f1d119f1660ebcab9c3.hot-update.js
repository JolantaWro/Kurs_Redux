"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 84:
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
  products.reduce(function (a, b) {
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
/******/ 	__webpack_require__.h = () => ("bb9450e55b9027f76f59")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZjFkMTE5ZjE2NjBlYmNhYjljMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQU1BLENBQUlDLFFBQVEsRUFBSztFQUNoQ0EsUUFBUSxDQUFDQyxNQUFNLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7SUFFdEIsT0FBT0MsTUFBTSxDQUFDRixDQUFDLENBQUNHLEtBQUssQ0FBQyxHQUFHRCxNQUFNLENBQUNELENBQUMsQ0FBQ0UsS0FBSyxDQUFDO0VBQzVDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFTSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxRQUFRLEVBQUVDLElBQUksRUFBSztFQUNuRCxJQUFNQyxjQUFjLEdBQUdELElBQUksQ0FBQ0UsV0FBVyxFQUFFO0VBRXpDLE9BQU9ILFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLE9BQU8sRUFBSztJQUNoQyxJQUFBQyxhQUFBLEdBQXdCRCxPQUFPLENBQUNFLElBQUk7TUFBNUJDLEtBQUssR0FBQUYsYUFBQSxDQUFMRSxLQUFLO01BQUVDLElBQUksR0FBQUgsYUFBQSxDQUFKRyxJQUFJO0lBRW5CLE9BQU9ELEtBQUssQ0FBQ0wsV0FBVyxFQUFFLENBQUNPLFFBQVEsQ0FBQ1IsY0FBYyxDQUFDLElBQUlPLElBQUksQ0FBQ04sV0FBVyxFQUFFLENBQUNPLFFBQVEsQ0FBQ1IsY0FBYyxDQUFDO0VBQ3RHLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7O1VDcEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvcmVkdXgvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XG4vLyBzZWxlY3RQcm9kdWN0cyAtIGRvIHd5YmllcmFuaWEvZmlsdHJvd2FuaWEgcHJvZHVrdMOzd1xuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXG5cbmV4cG9ydCBjb25zdCBnZXRTdW0gPSAocHJvZHVjdHMpID0+IHtcbiAgICBwcm9kdWN0cy5yZWR1Y2UoKGEsIGIpID0+IHtcblxuICAgICAgICByZXR1cm4gTnVtYmVyKGEucHJpY2UpICsgTnVtYmVyKGIucHJpY2UpXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpbHRlcmVkQ29udGFjdHMgPSAoY29udGFjdHMsIHRleHQpID0+IHtcbiAgICBjb25zdCBjb250YWN0c1NlYXJjaCA9IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiBjb250YWN0cy5maWx0ZXIoKGNvbnRhY3QpID0+IHtcbiAgICAgICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gY29udGFjdC5uYW1lO1xuXG4gICAgICAgIHJldHVybiBmaXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RzU2VhcmNoKSB8fCBsYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29udGFjdHNTZWFyY2gpO1xuICAgIH0pO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiOTQ1MGU1NWI5MDI3Zjc2ZjU5XCIpIl0sIm5hbWVzIjpbImdldFN1bSIsInByb2R1Y3RzIiwicmVkdWNlIiwiYSIsImIiLCJOdW1iZXIiLCJwcmljZSIsImdldEZpbHRlcmVkQ29udGFjdHMiLCJjb250YWN0cyIsInRleHQiLCJjb250YWN0c1NlYXJjaCIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwiY29udGFjdCIsIl9jb250YWN0JG5hbWUiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9