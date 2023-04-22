"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var SingleProduct = function SingleProduct(_ref) {
  var allProducts = _ref.allProducts;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)().id),
    _useState2 = _slicedToArray(_useState, 2),
    idProduct = _useState2[0],
    setIdProduct = _useState2[1];
  var filteredState = (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_1__.getProduct)(allProducts, parseInt(idProduct));
  var product = filteredState[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", product.id + 1, " ", product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return null;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "field"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "control has-icons-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    onChange: function onChange(e) {
      return setIdProduct(e.target.value);
    },
    value: idProduct
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), allProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: product.id,
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);
/* harmony import */ var _redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(118);




var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: (0,_redux_selectors_selectorsProduct__WEBPACK_IMPORTED_MODULE_3__.productsSelector)(state)
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(_components_Products_SingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProduct": () => (/* binding */ getProduct),
/* harmony export */   "lastAddProducts": () => (/* binding */ lastAddProducts),
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);

var productsSelector = function productsSelector(state) {
  return state.products;
};
// export const sumPriceSelector = createSelector(
//     productsSelector,
//     products=> products.reduce((acc, item) => (
//         acc + Number(item.price)
//     ), 0)
// )

var getProduct = function getProduct(products, selector) {
  return products.filter(function (element) {
    return element.id === selector;
  });
};
var lastAddProducts = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products.slice(-5);
});

/***/ }),

/***/ 120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKeyComparator": () => (/* binding */ createCacheKeyComparator),
/* harmony export */   "defaultEqualityCheck": () => (/* binding */ defaultEqualityCheck),
/* harmony export */   "defaultMemoize": () => (/* binding */ defaultMemoize)
/* harmony export */ });
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ 119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createSelectorCreator": () => (/* binding */ createSelectorCreator),
/* harmony export */   "createStructuredSelector": () => (/* binding */ createStructuredSelector),
/* harmony export */   "defaultEqualityCheck": () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultEqualityCheck),
/* harmony export */   "defaultMemoize": () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize)
/* harmony export */ });
/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);



function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3724c078d6d8d972e76f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKd0U7QUFDeEI7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLDJHQUEyRyxhQUFhO0FBQ3hIO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBOztBQUVBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxrQ0FBa0M7O0FBRWxDO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQSw4R0FBOEc7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLEtBQUssZ0NBQWdDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ08sMERBQTBELDJEQUFjO0FBQy9FO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7O1VDaklBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMvc2VsZWN0b3JzUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvZGVmYXVsdE1lbW9pemUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtnZXRQcm9kdWN0fSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1Byb2R1Y3RcIjtcblxuY29uc3QgU2luZ2xlUHJvZHVjdCA9ICh7IGFsbFByb2R1Y3RzIH0pID0+IHtcbiAgICBjb25zdCBbaWRQcm9kdWN0LCBzZXRJZFByb2R1Y3RdID0gdXNlU3RhdGUodXNlUGFyYW1zKCkuaWQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFN0YXRlID0gZ2V0UHJvZHVjdChhbGxQcm9kdWN0cywgcGFyc2VJbnQoaWRQcm9kdWN0KSk7XG4gICAgY29uc3QgcHJvZHVjdCA9IGZpbHRlcmVkU3RhdGVbMF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtZXNzYWdlIGlzLWRhcmtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByb2R1a3Qge3Byb2R1Y3QuaWQgKyAxfSB7cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17KCkgPT4gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IHNldElkUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZFByb2R1Y3R9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24+V3liaWVyei4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge2FsbFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cHJvZHVjdC5pZH0gdmFsdWU9e3Byb2R1Y3QuaWR9Pntwcm9kdWN0Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9kdWN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHMvU2luZ2xlUHJvZHVjdFwiO1xuaW1wb3J0IHtwcm9kdWN0c1NlbGVjdG9yfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VsZWN0b3JzL3NlbGVjdG9yc1Byb2R1Y3RcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBhbGxQcm9kdWN0czogcHJvZHVjdHNTZWxlY3RvcihzdGF0ZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2luZ2xlUHJvZHVjdCk7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcblxuXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTZWxlY3RvciA9IHN0YXRlID0+IHN0YXRlLnByb2R1Y3RzXG4vLyBleHBvcnQgY29uc3Qgc3VtUHJpY2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuLy8gICAgIHByb2R1Y3RzU2VsZWN0b3IsXG4vLyAgICAgcHJvZHVjdHM9PiBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gKFxuLy8gICAgICAgICBhY2MgKyBOdW1iZXIoaXRlbS5wcmljZSlcbi8vICAgICApLCAwKVxuLy8gKVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdCA9IChwcm9kdWN0cywgc2VsZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCA9PT0gc2VsZWN0b3IpXG59O1xuXG5leHBvcnQgY29uc3QgbGFzdEFkZFByb2R1Y3RzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgcHJvZHVjdHNTZWxlY3RvcixcbiAgICAocHJvZHVjdHMpID0+IHByb2R1Y3RzLnNsaWNlKC01KVxuKTsiLCIvLyBDYWNoZSBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBFcmlrIFJhc211c3NlbidzIGBscnUtbWVtb2l6ZWA6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZXJpa3Jhcy9scnUtbWVtb2l6ZVxudmFyIE5PVF9GT1VORCA9ICdOT1RfRk9VTkQnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGV0b25DYWNoZShlcXVhbHMpIHtcbiAgdmFyIGVudHJ5O1xuICByZXR1cm4ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgaWYgKGVudHJ5ICYmIGVxdWFscyhlbnRyeS5rZXksIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSkge1xuICAgICAgZW50cnkgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRFbnRyaWVzOiBmdW5jdGlvbiBnZXRFbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGVudHJ5ID8gW2VudHJ5XSA6IFtdO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgZW50cnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMcnVDYWNoZShtYXhTaXplLCBlcXVhbHMpIHtcbiAgdmFyIGVudHJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGNhY2hlSW5kZXggPSBlbnRyaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHJldHVybiBlcXVhbHMoa2V5LCBlbnRyeS5rZXkpO1xuICAgIH0pOyAvLyBXZSBmb3VuZCBhIGNhY2hlZCBlbnRyeVxuXG4gICAgaWYgKGNhY2hlSW5kZXggPiAtMSkge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tjYWNoZUluZGV4XTsgLy8gQ2FjaGVkIGVudHJ5IG5vdCBhdCB0b3Agb2YgY2FjaGUsIG1vdmUgaXQgdG8gdGhlIHRvcFxuXG4gICAgICBpZiAoY2FjaGVJbmRleCA+IDApIHtcbiAgICAgICAgZW50cmllcy5zcGxpY2UoY2FjaGVJbmRleCwgMSk7XG4gICAgICAgIGVudHJpZXMudW5zaGlmdChlbnRyeSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgICB9IC8vIE5vIGVudHJ5IGZvdW5kIGluIGNhY2hlLCByZXR1cm4gc2VudGluZWxcblxuXG4gICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgaWYgKGdldChrZXkpID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIFRPRE8gSXMgdW5zaGlmdCBzbG93P1xuICAgICAgZW50cmllcy51bnNoaWZ0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IG1heFNpemUpIHtcbiAgICAgICAgZW50cmllcy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgZW50cmllcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldCxcbiAgICBwdXQ6IHB1dCxcbiAgICBnZXRFbnRyaWVzOiBnZXRFbnRyaWVzLFxuICAgIGNsZWFyOiBjbGVhclxuICB9O1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRFcXVhbGl0eUNoZWNrID0gZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXlDb21wYXJhdG9yKGVxdWFsaXR5Q2hlY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKHByZXYsIG5leHQpIHtcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gRG8gdGhpcyBpbiBhIGZvciBsb29wIChhbmQgbm90IGEgYGZvckVhY2hgIG9yIGFuIGBldmVyeWApIHNvIHdlIGNhbiBkZXRlcm1pbmUgZXF1YWxpdHkgYXMgZmFzdCBhcyBwb3NzaWJsZS5cblxuXG4gICAgdmFyIGxlbmd0aCA9IHByZXYubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbi8vIGRlZmF1bHRNZW1vaXplIG5vdyBzdXBwb3J0cyBhIGNvbmZpZ3VyYWJsZSBjYWNoZSBzaXplIHdpdGggTFJVIGJlaGF2aW9yLFxuLy8gYW5kIG9wdGlvbmFsIGNvbXBhcmlzb24gb2YgdGhlIHJlc3VsdCB2YWx1ZSB3aXRoIGV4aXN0aW5nIHZhbHVlc1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNZW1vaXplKGZ1bmMsIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMpIHtcbiAgdmFyIHByb3ZpZGVkT3B0aW9ucyA9IHR5cGVvZiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zID09PSAnb2JqZWN0JyA/IGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgOiB7XG4gICAgZXF1YWxpdHlDaGVjazogZXF1YWxpdHlDaGVja09yT3B0aW9uc1xuICB9O1xuICB2YXIgX3Byb3ZpZGVkT3B0aW9ucyRlcXVhID0gcHJvdmlkZWRPcHRpb25zLmVxdWFsaXR5Q2hlY2ssXG4gICAgICBlcXVhbGl0eUNoZWNrID0gX3Byb3ZpZGVkT3B0aW9ucyRlcXVhID09PSB2b2lkIDAgPyBkZWZhdWx0RXF1YWxpdHlDaGVjayA6IF9wcm92aWRlZE9wdGlvbnMkZXF1YSxcbiAgICAgIF9wcm92aWRlZE9wdGlvbnMkbWF4UyA9IHByb3ZpZGVkT3B0aW9ucy5tYXhTaXplLFxuICAgICAgbWF4U2l6ZSA9IF9wcm92aWRlZE9wdGlvbnMkbWF4UyA9PT0gdm9pZCAwID8gMSA6IF9wcm92aWRlZE9wdGlvbnMkbWF4UyxcbiAgICAgIHJlc3VsdEVxdWFsaXR5Q2hlY2sgPSBwcm92aWRlZE9wdGlvbnMucmVzdWx0RXF1YWxpdHlDaGVjaztcbiAgdmFyIGNvbXBhcmF0b3IgPSBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjayk7XG4gIHZhciBjYWNoZSA9IG1heFNpemUgPT09IDEgPyBjcmVhdGVTaW5nbGV0b25DYWNoZShjb21wYXJhdG9yKSA6IGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGNvbXBhcmF0b3IpOyAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcblxuICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICB2YXIgdmFsdWUgPSBjYWNoZS5nZXQoYXJndW1lbnRzKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YWx1ZSA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHJlc3VsdEVxdWFsaXR5Q2hlY2spIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBjYWNoZS5nZXRFbnRyaWVzKCk7XG4gICAgICAgIHZhciBtYXRjaGluZ0VudHJ5ID0gZW50cmllcy5maW5kKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRFcXVhbGl0eUNoZWNrKGVudHJ5LnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0VudHJ5KSB7XG4gICAgICAgICAgdmFsdWUgPSBtYXRjaGluZ0VudHJ5LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhY2hlLnB1dChhcmd1bWVudHMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBtZW1vaXplZC5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWNoZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiBtZW1vaXplZDtcbn0iLCJpbXBvcnQgeyBkZWZhdWx0TWVtb2l6ZSwgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgfSBmcm9tICcuL2RlZmF1bHRNZW1vaXplJztcbmV4cG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9O1xuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbicgPyBcImZ1bmN0aW9uIFwiICsgKGRlcC5uYW1lIHx8ICd1bm5hbWVkJykgKyBcIigpXCIgOiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdHlwZXM6IFtcIiArIGRlcGVuZGVuY3lUeXBlcyArIFwiXVwiKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnNGcm9tQXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNGcm9tQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY3JlYXRlU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBmdW5jc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBfcmVjb21wdXRhdGlvbnMgPSAwO1xuXG4gICAgdmFyIF9sYXN0UmVzdWx0OyAvLyBEdWUgdG8gdGhlIGludHJpY2FjaWVzIG9mIHJlc3QgcGFyYW1zLCB3ZSBjYW4ndCBkbyBhbiBvcHRpb25hbCBhcmcgYWZ0ZXIgYC4uLmZ1bmNzYC5cbiAgICAvLyBTbywgc3RhcnQgYnkgZGVjbGFyaW5nIHRoZSBkZWZhdWx0IHZhbHVlIGhlcmUuXG4gICAgLy8gKEFuZCB5ZXMsIHRoZSB3b3JkcyAnbWVtb2l6ZScgYW5kICdvcHRpb25zJyBhcHBlYXIgdG9vIG1hbnkgdGltZXMgaW4gdGhpcyBuZXh0IHNlcXVlbmNlLilcblxuXG4gICAgdmFyIGRpcmVjdGx5UGFzc2VkT3B0aW9ucyA9IHtcbiAgICAgIG1lbW9pemVPcHRpb25zOiB1bmRlZmluZWRcbiAgICB9OyAvLyBOb3JtYWxseSwgdGhlIHJlc3VsdCBmdW5jIG9yIFwib3V0cHV0IHNlbGVjdG9yXCIgaXMgdGhlIGxhc3QgYXJnXG5cbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpOyAvLyBJZiB0aGUgcmVzdWx0IGZ1bmMgaXMgYWN0dWFsbHkgYW4gX29iamVjdF8sIGFzc3VtZSBpdCdzIG91ciBvcHRpb25zIG9iamVjdFxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jID09PSAnb2JqZWN0Jykge1xuICAgICAgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0gcmVzdWx0RnVuYzsgLy8gYW5kIHBvcCB0aGUgcmVhbCByZXN1bHQgZnVuYyBvZmZcblxuICAgICAgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0RnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbiBvdXRwdXQgZnVuY3Rpb24gYWZ0ZXIgdGhlIGlucHV0cywgYnV0IHJlY2VpdmVkOiBbXCIgKyB0eXBlb2YgcmVzdWx0RnVuYyArIFwiXVwiKTtcbiAgICB9IC8vIERldGVybWluZSB3aGljaCBzZXQgb2Ygb3B0aW9ucyB3ZSdyZSB1c2luZy4gUHJlZmVyIG9wdGlvbnMgcGFzc2VkIGRpcmVjdGx5LFxuICAgIC8vIGJ1dCBmYWxsIGJhY2sgdG8gb3B0aW9ucyBnaXZlbiB0byBjcmVhdGVTZWxlY3RvckNyZWF0b3IuXG5cblxuICAgIHZhciBfZGlyZWN0bHlQYXNzZWRPcHRpb24gPSBkaXJlY3RseVBhc3NlZE9wdGlvbnMsXG4gICAgICAgIF9kaXJlY3RseVBhc3NlZE9wdGlvbjIgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24ubWVtb2l6ZU9wdGlvbnMsXG4gICAgICAgIG1lbW9pemVPcHRpb25zID0gX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9PT0gdm9pZCAwID8gbWVtb2l6ZU9wdGlvbnNGcm9tQXJncyA6IF9kaXJlY3RseVBhc3NlZE9wdGlvbjI7IC8vIFNpbXBsaWZ5aW5nIGFzc3VtcHRpb246IGl0J3MgdW5saWtlbHkgdGhhdCB0aGUgZmlyc3Qgb3B0aW9ucyBhcmcgb2YgdGhlIHByb3ZpZGVkIG1lbW9pemVyXG4gICAgLy8gaXMgYW4gYXJyYXkuIEluIG1vc3QgbGlicyBJJ3ZlIGxvb2tlZCBhdCwgaXQncyBhbiBlcXVhbGl0eSBmdW5jdGlvbiBvciBvcHRpb25zIG9iamVjdC5cbiAgICAvLyBCYXNlZCBvbiB0aGF0LCBpZiBgbWVtb2l6ZU9wdGlvbnNgIF9pc18gYW4gYXJyYXksIHdlIGFzc3VtZSBpdCdzIGEgZnVsbFxuICAgIC8vIHVzZXItcHJvdmlkZWQgYXJyYXkgb2Ygb3B0aW9ucy4gT3RoZXJ3aXNlLCBpdCBtdXN0IGJlIGp1c3QgdGhlIF9maXJzdF8gYXJnLCBhbmQgc29cbiAgICAvLyB3ZSB3cmFwIGl0IGluIGFuIGFycmF5IHNvIHdlIGNhbiBhcHBseSBpdC5cblxuICAgIHZhciBmaW5hbE1lbW9pemVPcHRpb25zID0gQXJyYXkuaXNBcnJheShtZW1vaXplT3B0aW9ucykgPyBtZW1vaXplT3B0aW9ucyA6IFttZW1vaXplT3B0aW9uc107XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodm9pZCAwLCBbZnVuY3Rpb24gcmVjb21wdXRhdGlvbldyYXBwZXIoKSB7XG4gICAgICBfcmVjb21wdXRhdGlvbnMrKzsgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XS5jb25jYXQoZmluYWxNZW1vaXplT3B0aW9ucykpOyAvLyBJZiBhIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFyZ3VtZW50cyB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIG91ciBkZXBlbmRlbmNpZXMgYWdhaW4uXG5cbiAgICB2YXIgc2VsZWN0b3IgPSBtZW1vaXplKGZ1bmN0aW9uIGRlcGVuZGVuY2llc0NoZWNrZXIoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICB2YXIgbGVuZ3RoID0gZGVwZW5kZW5jaWVzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgYW5kIG11dGF0ZSBhIGxvY2FsIGxpc3Qgb2YgcGFyYW1zIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYXJhbXMucHVzaChkZXBlbmRlbmNpZXNbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICB9IC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG5cblxuICAgICAgX2xhc3RSZXN1bHQgPSBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICAgIHJldHVybiBfbGFzdFJlc3VsdDtcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHNlbGVjdG9yLCB7XG4gICAgICByZXN1bHRGdW5jOiByZXN1bHRGdW5jLFxuICAgICAgbWVtb2l6ZWRSZXN1bHRGdW5jOiBtZW1vaXplZFJlc3VsdEZ1bmMsXG4gICAgICBkZXBlbmRlbmNpZXM6IGRlcGVuZGVuY2llcyxcbiAgICAgIGxhc3RSZXN1bHQ6IGZ1bmN0aW9uIGxhc3RSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiBfbGFzdFJlc3VsdDtcbiAgICAgIH0sXG4gICAgICByZWNvbXB1dGF0aW9uczogZnVuY3Rpb24gcmVjb21wdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfcmVjb21wdXRhdGlvbnM7XG4gICAgICB9LFxuICAgICAgcmVzZXRSZWNvbXB1dGF0aW9uczogZnVuY3Rpb24gcmVzZXRSZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9OyAvLyBAdHMtaWdub3JlXG5cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3I7XG59XG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcbi8vIE1hbnVhbCBkZWZpbml0aW9uIG9mIHN0YXRlIGFuZCBvdXRwdXQgYXJndW1lbnRzXG5leHBvcnQgdmFyIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMsIHNlbGVjdG9yQ3JlYXRvcikge1xuICBpZiAoc2VsZWN0b3JDcmVhdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvcjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIGV4cGVjdHMgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0ICcgKyAoXCJ3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSBcIiArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuXG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgdmFyIHJlc3VsdFNlbGVjdG9yID0gc2VsZWN0b3JDcmVhdG9yKCAvLyBAdHMtaWdub3JlXG4gIG9iamVjdEtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzW2tleV07XG4gIH0pLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHZhbHVlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0U2VsZWN0b3I7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM3MjRjMDc4ZDZkOGQ5NzJlNzZmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJnZXRQcm9kdWN0IiwiU2luZ2xlUHJvZHVjdCIsIl9yZWYiLCJhbGxQcm9kdWN0cyIsIl91c2VTdGF0ZSIsImlkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaWRQcm9kdWN0Iiwic2V0SWRQcm9kdWN0IiwiZmlsdGVyZWRTdGF0ZSIsInBhcnNlSW50IiwicHJvZHVjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJuYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImtleSIsImNvbm5lY3QiLCJwcm9kdWN0c1NlbGVjdG9yIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjcmVhdGVTZWxlY3RvciIsInByb2R1Y3RzIiwic2VsZWN0b3IiLCJmaWx0ZXIiLCJlbGVtZW50IiwibGFzdEFkZFByb2R1Y3RzIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9