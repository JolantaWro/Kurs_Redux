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
    // products: state.products,
    // sum: selectPrice(state)
    // sum: sumPriceSelector(state.products)
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
    // filterPrice: (value) => dispatch(filterProductsPrice(value))
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productsSelector": () => (/* binding */ productsSelector),
/* harmony export */   "selectPrice": () => (/* binding */ selectPrice),
/* harmony export */   "sumPriceSelector": () => (/* binding */ sumPriceSelector)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// export const filterProductsPrice = (products, status) => {
//     return products.filter(item => item.price >= status);
// };

var productsSelector = function productsSelector(state) {
  return state.products;
};
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(productsSelector, function (products) {
  return products.reduce(function (acc, item) {
    return acc + item.price;
  }, 0);
});
var selectPrice = function selectPrice(state) {
  var sumPrice;
  if (state.products) {
    if (state.products.price >= 10) {
      sumPrice = "wiecej niz 10";
    } else if (state.products.price >= 50) {
      sumPrice = "wiecej niz 50";
    }
  }
  return sumPrice;
};

/***/ }),

/***/ 95:
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

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createSelectorCreator": () => (/* binding */ createSelectorCreator),
/* harmony export */   "createStructuredSelector": () => (/* binding */ createStructuredSelector),
/* harmony export */   "defaultEqualityCheck": () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultEqualityCheck),
/* harmony export */   "defaultMemoize": () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize)
/* harmony export */ });
/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);



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
/******/ 	__webpack_require__.h = () => ("700f3eb90fc5846e4620")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUssSUFBSTtBQUNULEdBQUc7QUFDSDtBQUNBOzs7Ozs7OztVQ2pJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2RlZmF1bHRNZW1vaXplLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFcgdHltIHBsaWt1IG5hbGXFvHkgd3lrb25hxIcgY29ubmVjdFxyXG4vLyBvcmF6IHNrb3J6eXN0YcSHIHogc2VsZWt0b3LDs3cgemFpbXBsZW1lbnRvd2FueWNoIHcgcGxpa3UgcmVkdXgvc2VsZWN0b3JzXHJcbi8vIHBhbWnEmXRhaiBvIHd5ZWtzcG9ydG93YW5pdSBrb250ZW5lcmE6XHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShDYXJ0KTtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydFwiO1xyXG5pbXBvcnQge2FkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3R9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7ZmlsdGVyUHJvZHVjdHNQcmljZSwgcHJvZHVjdHNTZWxlY3Rvciwgc2VsZWN0UHJpY2UsIHN1bVByaWNlU2VsZWN0b3J9IGZyb20gXCIuLi9yZWR1eC9zZWxlY3RvcnNcIjtcclxuXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzU2VsZWN0b3Ioc3RhdGUpLFxyXG4gICAgc3VtOiBzdW1QcmljZVNlbGVjdG9yKHN0YXRlKVxyXG4gICAgLy8gcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gICAgLy8gc3VtOiBzZWxlY3RQcmljZShzdGF0ZSlcclxuICAgIC8vIHN1bTogc3VtUHJpY2VTZWxlY3RvcihzdGF0ZS5wcm9kdWN0cylcclxufSk7XHJcblxyXG4vL3ZhbHVlczogc3RhdGUucm91dGVzXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgYWRkUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKGFkZFByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgcmVtb3ZlUHJvZHVjdDogKHByb2R1Y3QpID0+IGRpc3BhdGNoKHJlbW92ZVByb2R1Y3QocHJvZHVjdCkpLFxyXG4gICAgLy8gZmlsdGVyUHJpY2U6ICh2YWx1ZSkgPT4gZGlzcGF0Y2goZmlsdGVyUHJvZHVjdHNQcmljZSh2YWx1ZSkpXHJcblxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXJ0KTsiLCIvLyBNaWVqc2NlIG5hIHNlbGVrdG9yeTpcclxuLy8gc2VsZWN0UHJvZHVjdHMgLSBkbyB3eWJpZXJhbmlhL2ZpbHRyb3dhbmlhIHByb2R1a3TDs3dcclxuLy8gc3VtIC0gZG8gb2JsaWN6YW5pYSBzdW15XHJcbi8vIHBhbWnEmXRhaiBhYnkgamUgd3lla3Nwb3J0b3dhxIdcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBmaWx0ZXJQcm9kdWN0c1ByaWNlID0gKHByb2R1Y3RzLCBzdGF0dXMpID0+IHtcclxuLy8gICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnByaWNlID49IHN0YXR1cyk7XHJcbi8vIH07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3RzU2VsZWN0b3IsXHJcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXHJcbiAgICAgICAgYWNjICsgaXRlbS5wcmljZVxyXG4gICAgKSwgMClcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFByaWNlID0gKHN0YXRlKSA9PiB7XHJcbiAgICBsZXQgc3VtUHJpY2U7XHJcbiAgICBpZiAoc3RhdGUucHJvZHVjdHMpIHtcclxuICAgICAgICBpZiAoc3RhdGUucHJvZHVjdHMucHJpY2UgPj0gMTApIHtcclxuICAgICAgICAgICAgc3VtUHJpY2UgPSBcIndpZWNlaiBuaXogMTBcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucHJvZHVjdHMucHJpY2UgPj0gNTApIHtcclxuICAgICAgICAgICAgc3VtUHJpY2UgPSBcIndpZWNlaiBuaXogNTBcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdW1QcmljZVxyXG59XHJcbiIsIi8vIENhY2hlIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIEVyaWsgUmFzbXVzc2VuJ3MgYGxydS1tZW1vaXplYDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL2xydS1tZW1vaXplXG52YXIgTk9UX0ZPVU5EID0gJ05PVF9GT1VORCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGVxdWFscykge1xuICB2YXIgZW50cnk7XG4gIHJldHVybiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAoZW50cnkgJiYgZXF1YWxzKGVudHJ5LmtleSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgICBlbnRyeSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldEVudHJpZXM6IGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gZW50cnkgPyBbZW50cnldIDogW107XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBlbnRyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGVxdWFscykge1xuICB2YXIgZW50cmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgY2FjaGVJbmRleCA9IGVudHJpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIGVxdWFscyhrZXksIGVudHJ5LmtleSk7XG4gICAgfSk7IC8vIFdlIGZvdW5kIGEgY2FjaGVkIGVudHJ5XG5cbiAgICBpZiAoY2FjaGVJbmRleCA+IC0xKSB7XG4gICAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2NhY2hlSW5kZXhdOyAvLyBDYWNoZWQgZW50cnkgbm90IGF0IHRvcCBvZiBjYWNoZSwgbW92ZSBpdCB0byB0aGUgdG9wXG5cbiAgICAgIGlmIChjYWNoZUluZGV4ID4gMCkge1xuICAgICAgICBlbnRyaWVzLnNwbGljZShjYWNoZUluZGV4LCAxKTtcbiAgICAgICAgZW50cmllcy51bnNoaWZ0KGVudHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgIH0gLy8gTm8gZW50cnkgZm91bmQgaW4gY2FjaGUsIHJldHVybiBzZW50aW5lbFxuXG5cbiAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZ2V0KGtleSkgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gVE9ETyBJcyB1bnNoaWZ0IHNsb3c/XG4gICAgICBlbnRyaWVzLnVuc2hpZnQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gbWF4U2l6ZSkge1xuICAgICAgICBlbnRyaWVzLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBlbnRyaWVzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0LFxuICAgIHB1dDogcHV0LFxuICAgIGdldEVudHJpZXM6IGdldEVudHJpZXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwocHJldiwgbmV4dCkge1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuXG5cbiAgICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuLy8gZGVmYXVsdE1lbW9pemUgbm93IHN1cHBvcnRzIGEgY29uZmlndXJhYmxlIGNhY2hlIHNpemUgd2l0aCBMUlUgYmVoYXZpb3IsXG4vLyBhbmQgb3B0aW9uYWwgY29tcGFyaXNvbiBvZiB0aGUgcmVzdWx0IHZhbHVlIHdpdGggZXhpc3RpbmcgdmFsdWVzXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYywgZXF1YWxpdHlDaGVja09yT3B0aW9ucykge1xuICB2YXIgcHJvdmlkZWRPcHRpb25zID0gdHlwZW9mIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgPT09ICdvYmplY3QnID8gZXF1YWxpdHlDaGVja09yT3B0aW9ucyA6IHtcbiAgICBlcXVhbGl0eUNoZWNrOiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zXG4gIH07XG4gIHZhciBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPSBwcm92aWRlZE9wdGlvbnMuZXF1YWxpdHlDaGVjayxcbiAgICAgIGVxdWFsaXR5Q2hlY2sgPSBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPT09IHZvaWQgMCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogX3Byb3ZpZGVkT3B0aW9ucyRlcXVhLFxuICAgICAgX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID0gcHJvdmlkZWRPcHRpb25zLm1heFNpemUsXG4gICAgICBtYXhTaXplID0gX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID09PSB2b2lkIDAgPyAxIDogX3Byb3ZpZGVkT3B0aW9ucyRtYXhTLFxuICAgICAgcmVzdWx0RXF1YWxpdHlDaGVjayA9IHByb3ZpZGVkT3B0aW9ucy5yZXN1bHRFcXVhbGl0eUNoZWNrO1xuICB2YXIgY29tcGFyYXRvciA9IGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcihlcXVhbGl0eUNoZWNrKTtcbiAgdmFyIGNhY2hlID0gbWF4U2l6ZSA9PT0gMSA/IGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGNvbXBhcmF0b3IpIDogY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgY29tcGFyYXRvcik7IC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgIHZhciB2YWx1ZSA9IGNhY2hlLmdldChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHZhbHVlID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZhbHVlID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAocmVzdWx0RXF1YWxpdHlDaGVjaykge1xuICAgICAgICB2YXIgZW50cmllcyA9IGNhY2hlLmdldEVudHJpZXMoKTtcbiAgICAgICAgdmFyIG1hdGNoaW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdEVxdWFsaXR5Q2hlY2soZW50cnkudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRW50cnkpIHtcbiAgICAgICAgICB2YWx1ZSA9IG1hdGNoaW5nRW50cnkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FjaGUucHV0KGFyZ3VtZW50cywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1lbW9pemVkLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIG1lbW9pemVkO1xufSIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9IGZyb20gJy4vZGVmYXVsdE1lbW9pemUnO1xuZXhwb3J0IHsgZGVmYXVsdE1lbW9pemUsIGRlZmF1bHRFcXVhbGl0eUNoZWNrIH07XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJyA/IFwiZnVuY3Rpb24gXCIgKyAoZGVwLm5hbWUgfHwgJ3VubmFtZWQnKSArIFwiKClcIiA6IHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCBidXQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogW1wiICsgZGVwZW5kZW5jeVR5cGVzICsgXCJdXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9uc0Zyb21BcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc0Zyb21BcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjcmVhdGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG5cbiAgICB2YXIgX2xhc3RSZXN1bHQ7IC8vIER1ZSB0byB0aGUgaW50cmljYWNpZXMgb2YgcmVzdCBwYXJhbXMsIHdlIGNhbid0IGRvIGFuIG9wdGlvbmFsIGFyZyBhZnRlciBgLi4uZnVuY3NgLlxuICAgIC8vIFNvLCBzdGFydCBieSBkZWNsYXJpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZS5cbiAgICAvLyAoQW5kIHllcywgdGhlIHdvcmRzICdtZW1vaXplJyBhbmQgJ29wdGlvbnMnIGFwcGVhciB0b28gbWFueSB0aW1lcyBpbiB0aGlzIG5leHQgc2VxdWVuY2UuKVxuXG5cbiAgICB2YXIgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0ge1xuICAgICAgbWVtb2l6ZU9wdGlvbnM6IHVuZGVmaW5lZFxuICAgIH07IC8vIE5vcm1hbGx5LCB0aGUgcmVzdWx0IGZ1bmMgb3IgXCJvdXRwdXQgc2VsZWN0b3JcIiBpcyB0aGUgbGFzdCBhcmdcblxuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7IC8vIElmIHRoZSByZXN1bHQgZnVuYyBpcyBhY3R1YWxseSBhbiBfb2JqZWN0XywgYXNzdW1lIGl0J3Mgb3VyIG9wdGlvbnMgb2JqZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgPT09ICdvYmplY3QnKSB7XG4gICAgICBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSByZXN1bHRGdW5jOyAvLyBhbmQgcG9wIHRoZSByZWFsIHJlc3VsdCBmdW5jIG9mZlxuXG4gICAgICByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFuIG91dHB1dCBmdW5jdGlvbiBhZnRlciB0aGUgaW5wdXRzLCBidXQgcmVjZWl2ZWQ6IFtcIiArIHR5cGVvZiByZXN1bHRGdW5jICsgXCJdXCIpO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIHNldCBvZiBvcHRpb25zIHdlJ3JlIHVzaW5nLiBQcmVmZXIgb3B0aW9ucyBwYXNzZWQgZGlyZWN0bHksXG4gICAgLy8gYnV0IGZhbGwgYmFjayB0byBvcHRpb25zIGdpdmVuIHRvIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvci5cblxuXG4gICAgdmFyIF9kaXJlY3RseVBhc3NlZE9wdGlvbiA9IGRpcmVjdGx5UGFzc2VkT3B0aW9ucyxcbiAgICAgICAgX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbi5tZW1vaXplT3B0aW9ucyxcbiAgICAgICAgbWVtb2l6ZU9wdGlvbnMgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID09PSB2b2lkIDAgPyBtZW1vaXplT3B0aW9uc0Zyb21BcmdzIDogX2RpcmVjdGx5UGFzc2VkT3B0aW9uMjsgLy8gU2ltcGxpZnlpbmcgYXNzdW1wdGlvbjogaXQncyB1bmxpa2VseSB0aGF0IHRoZSBmaXJzdCBvcHRpb25zIGFyZyBvZiB0aGUgcHJvdmlkZWQgbWVtb2l6ZXJcbiAgICAvLyBpcyBhbiBhcnJheS4gSW4gbW9zdCBsaWJzIEkndmUgbG9va2VkIGF0LCBpdCdzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIG9yIG9wdGlvbnMgb2JqZWN0LlxuICAgIC8vIEJhc2VkIG9uIHRoYXQsIGlmIGBtZW1vaXplT3B0aW9uc2AgX2lzXyBhbiBhcnJheSwgd2UgYXNzdW1lIGl0J3MgYSBmdWxsXG4gICAgLy8gdXNlci1wcm92aWRlZCBhcnJheSBvZiBvcHRpb25zLiBPdGhlcndpc2UsIGl0IG11c3QgYmUganVzdCB0aGUgX2ZpcnN0XyBhcmcsIGFuZCBzb1xuICAgIC8vIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXkgc28gd2UgY2FuIGFwcGx5IGl0LlxuXG4gICAgdmFyIGZpbmFsTWVtb2l6ZU9wdGlvbnMgPSBBcnJheS5pc0FycmF5KG1lbW9pemVPcHRpb25zKSA/IG1lbW9pemVPcHRpb25zIDogW21lbW9pemVPcHRpb25zXTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh2b2lkIDAsIFtmdW5jdGlvbiByZWNvbXB1dGF0aW9uV3JhcHBlcigpIHtcbiAgICAgIF9yZWNvbXB1dGF0aW9ucysrOyAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChmaW5hbE1lbW9pemVPcHRpb25zKSk7IC8vIElmIGEgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIGV4YWN0IHNhbWUgYXJndW1lbnRzIHdlIGRvbid0IG5lZWQgdG8gdHJhdmVyc2Ugb3VyIGRlcGVuZGVuY2llcyBhZ2Fpbi5cblxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gZGVwZW5kZW5jaWVzQ2hlY2tlcigpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgIHZhciBsZW5ndGggPSBkZXBlbmRlbmNpZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBhbmQgbXV0YXRlIGEgbG9jYWwgbGlzdCBvZiBwYXJhbXMgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuXG4gICAgICBfbGFzdFJlc3VsdCA9IG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oc2VsZWN0b3IsIHtcbiAgICAgIHJlc3VsdEZ1bmM6IHJlc3VsdEZ1bmMsXG4gICAgICBtZW1vaXplZFJlc3VsdEZ1bmM6IG1lbW9pemVkUmVzdWx0RnVuYyxcbiAgICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLFxuICAgICAgbGFzdFJlc3VsdDogZnVuY3Rpb24gbGFzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgICAgfSxcbiAgICAgIHJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucztcbiAgICAgIH0sXG4gICAgICByZXNldFJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZXNldFJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zID0gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07IC8vIEB0cy1pZ25vcmVcblxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcjtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuLy8gTWFudWFsIGRlZmluaXRpb24gb2Ygc3RhdGUgYW5kIG91dHB1dCBhcmd1bWVudHNcbmV4cG9ydCB2YXIgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycywgc2VsZWN0b3JDcmVhdG9yKSB7XG4gIGlmIChzZWxlY3RvckNyZWF0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArIChcIndoZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhIFwiICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG5cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBzZWxlY3RvckNyZWF0b3IoIC8vIEB0cy1pZ25vcmVcbiAgb2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgdmFsdWVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRTZWxlY3Rvcjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzAwZjNlYjkwZmM1ODQ2ZTQ2MjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiQ2FydCIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiZmlsdGVyUHJvZHVjdHNQcmljZSIsInByb2R1Y3RzU2VsZWN0b3IiLCJzZWxlY3RQcmljZSIsInN1bVByaWNlU2VsZWN0b3IiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwic3VtIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwcm9kdWN0IiwiY3JlYXRlU2VsZWN0b3IiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwicHJpY2UiLCJzdW1QcmljZSJdLCJzb3VyY2VSb290IjoiIn0=