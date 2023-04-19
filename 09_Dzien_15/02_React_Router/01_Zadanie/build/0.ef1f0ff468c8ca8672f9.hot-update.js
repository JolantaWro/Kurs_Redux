"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92);






var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/:filterValue",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    exact: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null)));

// const Root = ({ store }) => {
//     return (
//         <Provider store={store}>
//             <HashRouter>
//                 <Routes>
//                     <Route path="/:filter" element={<Cart />} />
//                     <Route path="" element={<Cart />} />
//                 </Routes>
//             </HashRouter>
//         </Provider>
//     )
// }
//
// //<Route path="/:field" element={<App />} />
//
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<Root store={store} />);

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    filterValue = _useParams.filterValue;
  console.log(filterValue);
  console.log((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)());
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/100"
  }, "do 100z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addProduct: addProduct
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    removeProduct: removeProduct,
    products: products
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Do zap\u0142aty: ", sum, " PLN"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);
  var _super = _createSuper(Form);
  function Form(props) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, props);
    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.addProduct(_this.state);
      _this.setState({
        name: "",
        price: ""
      });
      console.log(_this.state);
    };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    };
    _this.state = {
      name: "",
      price: ""
    };
    return _this;
  }
  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
        name = _this$state.name,
        price = _this$state.price;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.onSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        name: "name",
        placeholder: "nazwa",
        onChange: this.handleChange,
        value: name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "number",
        name: "price",
        placeholder: "cena",
        onChange: this.handleChange,
        value: price
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "submit"
      }, "Dodaj produkt"));
    }
  }]);
  return Form;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var List = function List(_ref) {
  var products = _ref.products,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: product.name
    }, product.name, " - ", product.price, " PLN", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return removeProduct(product);
      }
    }, "Usu\u0144"));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);





var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
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
    },
    filterPrice: function filterPrice(value) {
      return dispatch((0,_redux_selectors__WEBPACK_IMPORTED_MODULE_4__.filterProductsPrice)(value));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterProductsPrice": () => (/* binding */ filterProductsPrice)
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

var filterProductsPrice = function filterProductsPrice(products, status) {
  return products.filter(function (item) {
    return item.price >= status;
  });
};

// const productsSelector = state => state.products
// const taxPercentSelector = state => state.shop.taxPercent
//
var sumPriceSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(filterProductsPrice, function (products) {
  return products.reduce(function (acc, item) {
    return acc + item.price;
  }, 0);
});
//
// const taxSelector = createSelector(
//     subtotalSelector,
//     taxPercentSelector,
//     (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

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
/******/ 	__webpack_require__.h = () => ("a5eab4e2e9b99a05ef58")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLDJHQUEyRyxhQUFhO0FBQ3hIO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBOztBQUVBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxrQ0FBa0M7O0FBRWxDO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQSw4R0FBOEc7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLEtBQUssZ0NBQWdDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ08sMERBQTBELDJEQUFjO0FBQy9FO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7O1VDaklBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAyX1JlYWN0X1JvdXRlci8wMV9aYWRhbmllL2pzL2NvbnRhaW5lcnMvQ2FydC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOV9Eemllbl8xNS8wMl9SZWFjdF9Sb3V0ZXIvMDFfWmFkYW5pZS9qcy9yZWR1eC9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2RlZmF1bHRNZW1vaXplLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuL2NvbnRhaW5lcnMvQ2FydFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvOmZpbHRlclZhbHVlXCIgZWxlbWVudD17PENhcnQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgIGVsZW1lbnQ9ezxDYXJ0IC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XHJcbnJvb3QucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPEFwcCAvPlxyXG4gICAgPC9Qcm92aWRlcj4pXHJcblxyXG5cclxuLy8gY29uc3QgUm9vdCA9ICh7IHN0b3JlIH0pID0+IHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbi8vICAgICAgICAgICAgIDxIYXNoUm91dGVyPlxyXG4vLyAgICAgICAgICAgICAgICAgPFJvdXRlcz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi86ZmlsdGVyXCIgZWxlbWVudD17PENhcnQgLz59IC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJcIiBlbGVtZW50PXs8Q2FydCAvPn0gLz5cclxuLy8gICAgICAgICAgICAgICAgIDwvUm91dGVzPlxyXG4vLyAgICAgICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbi8vICAgICAgICAgPC9Qcm92aWRlcj5cclxuLy8gICAgIClcclxuLy8gfVxyXG4vL1xyXG4vLyAvLzxSb3V0ZSBwYXRoPVwiLzpmaWVsZFwiIGVsZW1lbnQ9ezxBcHAgLz59IC8+XHJcbi8vXHJcbi8vIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4vLyBjb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4vLyByb290LnJlbmRlcig8Um9vdCBzdG9yZT17c3RvcmV9IC8+KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5pbXBvcnQge0xpbmssIHVzZVBhcmFtc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IENhcnQgPSAoeyBwcm9kdWN0cywgc3VtLCBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0IH0pID0+IHtcclxuICAgIGNvbnN0IHsgZmlsdGVyVmFsdWUgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKVxyXG4gICAgY29uc29sZS5sb2codXNlUGFyYW1zKCkpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e1wiL1wifT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTBcIn0+ZG8gMTB6xYI8L0xpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvNTBcIn0+ZG8gNTB6xYI8L0xpbms+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz17XCIvMTAwXCJ9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGFkZFByb2R1Y3Q9e2FkZFByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdCByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBwcmljZTogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmFkZFByb2R1Y3QodGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBcIlwiLCBwcmljZTogXCJcIn0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICB9O1xyXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHByaWNlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJuYXp3YVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e25hbWV9IC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBwbGFjZWhvbGRlcj1cImNlbmFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXtwcmljZX0gLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Eb2RhaiBwcm9kdWt0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMaXN0ID0gKHsgcHJvZHVjdHMsIHJlbW92ZVByb2R1Y3QgfSkgPT4gKFxyXG4gIDx1bD5cclxuICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgPGxpIGtleT17cHJvZHVjdC5uYW1lfT5cclxuICAgICAgICB7cHJvZHVjdC5uYW1lfSAtIHtwcm9kdWN0LnByaWNlfSBQTE5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlVzdcWEPC9idXR0b24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApKX1cclxuICA8L3VsPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiLy8gVyB0eW0gcGxpa3UgbmFsZcW8eSB3eWtvbmHEhyBjb25uZWN0XHJcbi8vIG9yYXogc2tvcnp5c3RhxIcgeiBzZWxla3RvcsOzdyB6YWltcGxlbWVudG93YW55Y2ggdyBwbGlrdSByZWR1eC9zZWxlY3RvcnNcclxuLy8gcGFtacSZdGFqIG8gd3lla3Nwb3J0b3dhbml1IGtvbnRlbmVyYTpcclxuLy8gZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKENhcnQpO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0XCI7XHJcbmltcG9ydCB7YWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHtmaWx0ZXJQcm9kdWN0c1ByaWNlfSBmcm9tIFwiLi4vcmVkdXgvc2VsZWN0b3JzXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHNcclxuXHJcblxyXG59KTtcclxuXHJcbi8vdmFsdWVzOiBzdGF0ZS5yb3V0ZXNcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBhZGRQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2goYWRkUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICByZW1vdmVQcm9kdWN0OiAocHJvZHVjdCkgPT4gZGlzcGF0Y2gocmVtb3ZlUHJvZHVjdChwcm9kdWN0KSksXHJcbiAgICBmaWx0ZXJQcmljZTogKHZhbHVlKSA9PiBkaXNwYXRjaChmaWx0ZXJQcm9kdWN0c1ByaWNlKHZhbHVlLCApKVxyXG5cclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7IiwiLy8gTWllanNjZSBuYSBzZWxla3Rvcnk6XHJcbi8vIHNlbGVjdFByb2R1Y3RzIC0gZG8gd3liaWVyYW5pYS9maWx0cm93YW5pYSBwcm9kdWt0w7N3XHJcbi8vIHN1bSAtIGRvIG9ibGljemFuaWEgc3VteVxyXG4vLyBwYW1pxJl0YWogYWJ5IGplIHd5ZWtzcG9ydG93YcSHXHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvZHVjdHNQcmljZSA9IChwcm9kdWN0cywgc3RhdHVzKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wcmljZSA+PSBzdGF0dXMpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBjb25zdCBwcm9kdWN0c1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUucHJvZHVjdHNcclxuLy8gY29uc3QgdGF4UGVyY2VudFNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUuc2hvcC50YXhQZXJjZW50XHJcbi8vXHJcbmNvbnN0IHN1bVByaWNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcclxuICAgIGZpbHRlclByb2R1Y3RzUHJpY2UsXHJcbiAgICBwcm9kdWN0cz0+IHByb2R1Y3RzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiAoXHJcbiAgICAgICAgYWNjICsgaXRlbS5wcmljZVxyXG4gICAgKSwgMClcclxuKVxyXG4vL1xyXG4vLyBjb25zdCB0YXhTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgICAgc3VidG90YWxTZWxlY3RvcixcclxuLy8gICAgIHRheFBlcmNlbnRTZWxlY3RvcixcclxuLy8gICAgIChzdWJ0b3RhbCwgdGF4UGVyY2VudCkgPT4gc3VidG90YWwgKiAodGF4UGVyY2VudCAvIDEwMClcclxuLy8gKSIsIi8vIENhY2hlIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIEVyaWsgUmFzbXVzc2VuJ3MgYGxydS1tZW1vaXplYDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL2xydS1tZW1vaXplXG52YXIgTk9UX0ZPVU5EID0gJ05PVF9GT1VORCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGVxdWFscykge1xuICB2YXIgZW50cnk7XG4gIHJldHVybiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAoZW50cnkgJiYgZXF1YWxzKGVudHJ5LmtleSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgICBlbnRyeSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldEVudHJpZXM6IGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gZW50cnkgPyBbZW50cnldIDogW107XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBlbnRyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGVxdWFscykge1xuICB2YXIgZW50cmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgY2FjaGVJbmRleCA9IGVudHJpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIGVxdWFscyhrZXksIGVudHJ5LmtleSk7XG4gICAgfSk7IC8vIFdlIGZvdW5kIGEgY2FjaGVkIGVudHJ5XG5cbiAgICBpZiAoY2FjaGVJbmRleCA+IC0xKSB7XG4gICAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2NhY2hlSW5kZXhdOyAvLyBDYWNoZWQgZW50cnkgbm90IGF0IHRvcCBvZiBjYWNoZSwgbW92ZSBpdCB0byB0aGUgdG9wXG5cbiAgICAgIGlmIChjYWNoZUluZGV4ID4gMCkge1xuICAgICAgICBlbnRyaWVzLnNwbGljZShjYWNoZUluZGV4LCAxKTtcbiAgICAgICAgZW50cmllcy51bnNoaWZ0KGVudHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgIH0gLy8gTm8gZW50cnkgZm91bmQgaW4gY2FjaGUsIHJldHVybiBzZW50aW5lbFxuXG5cbiAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZ2V0KGtleSkgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gVE9ETyBJcyB1bnNoaWZ0IHNsb3c/XG4gICAgICBlbnRyaWVzLnVuc2hpZnQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gbWF4U2l6ZSkge1xuICAgICAgICBlbnRyaWVzLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBlbnRyaWVzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0LFxuICAgIHB1dDogcHV0LFxuICAgIGdldEVudHJpZXM6IGdldEVudHJpZXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwocHJldiwgbmV4dCkge1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuXG5cbiAgICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuLy8gZGVmYXVsdE1lbW9pemUgbm93IHN1cHBvcnRzIGEgY29uZmlndXJhYmxlIGNhY2hlIHNpemUgd2l0aCBMUlUgYmVoYXZpb3IsXG4vLyBhbmQgb3B0aW9uYWwgY29tcGFyaXNvbiBvZiB0aGUgcmVzdWx0IHZhbHVlIHdpdGggZXhpc3RpbmcgdmFsdWVzXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYywgZXF1YWxpdHlDaGVja09yT3B0aW9ucykge1xuICB2YXIgcHJvdmlkZWRPcHRpb25zID0gdHlwZW9mIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgPT09ICdvYmplY3QnID8gZXF1YWxpdHlDaGVja09yT3B0aW9ucyA6IHtcbiAgICBlcXVhbGl0eUNoZWNrOiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zXG4gIH07XG4gIHZhciBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPSBwcm92aWRlZE9wdGlvbnMuZXF1YWxpdHlDaGVjayxcbiAgICAgIGVxdWFsaXR5Q2hlY2sgPSBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPT09IHZvaWQgMCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogX3Byb3ZpZGVkT3B0aW9ucyRlcXVhLFxuICAgICAgX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID0gcHJvdmlkZWRPcHRpb25zLm1heFNpemUsXG4gICAgICBtYXhTaXplID0gX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID09PSB2b2lkIDAgPyAxIDogX3Byb3ZpZGVkT3B0aW9ucyRtYXhTLFxuICAgICAgcmVzdWx0RXF1YWxpdHlDaGVjayA9IHByb3ZpZGVkT3B0aW9ucy5yZXN1bHRFcXVhbGl0eUNoZWNrO1xuICB2YXIgY29tcGFyYXRvciA9IGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcihlcXVhbGl0eUNoZWNrKTtcbiAgdmFyIGNhY2hlID0gbWF4U2l6ZSA9PT0gMSA/IGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGNvbXBhcmF0b3IpIDogY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgY29tcGFyYXRvcik7IC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgIHZhciB2YWx1ZSA9IGNhY2hlLmdldChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHZhbHVlID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZhbHVlID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAocmVzdWx0RXF1YWxpdHlDaGVjaykge1xuICAgICAgICB2YXIgZW50cmllcyA9IGNhY2hlLmdldEVudHJpZXMoKTtcbiAgICAgICAgdmFyIG1hdGNoaW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdEVxdWFsaXR5Q2hlY2soZW50cnkudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRW50cnkpIHtcbiAgICAgICAgICB2YWx1ZSA9IG1hdGNoaW5nRW50cnkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FjaGUucHV0KGFyZ3VtZW50cywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1lbW9pemVkLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIG1lbW9pemVkO1xufSIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9IGZyb20gJy4vZGVmYXVsdE1lbW9pemUnO1xuZXhwb3J0IHsgZGVmYXVsdE1lbW9pemUsIGRlZmF1bHRFcXVhbGl0eUNoZWNrIH07XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJyA/IFwiZnVuY3Rpb24gXCIgKyAoZGVwLm5hbWUgfHwgJ3VubmFtZWQnKSArIFwiKClcIiA6IHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCBidXQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogW1wiICsgZGVwZW5kZW5jeVR5cGVzICsgXCJdXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9uc0Zyb21BcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc0Zyb21BcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjcmVhdGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG5cbiAgICB2YXIgX2xhc3RSZXN1bHQ7IC8vIER1ZSB0byB0aGUgaW50cmljYWNpZXMgb2YgcmVzdCBwYXJhbXMsIHdlIGNhbid0IGRvIGFuIG9wdGlvbmFsIGFyZyBhZnRlciBgLi4uZnVuY3NgLlxuICAgIC8vIFNvLCBzdGFydCBieSBkZWNsYXJpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZS5cbiAgICAvLyAoQW5kIHllcywgdGhlIHdvcmRzICdtZW1vaXplJyBhbmQgJ29wdGlvbnMnIGFwcGVhciB0b28gbWFueSB0aW1lcyBpbiB0aGlzIG5leHQgc2VxdWVuY2UuKVxuXG5cbiAgICB2YXIgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0ge1xuICAgICAgbWVtb2l6ZU9wdGlvbnM6IHVuZGVmaW5lZFxuICAgIH07IC8vIE5vcm1hbGx5LCB0aGUgcmVzdWx0IGZ1bmMgb3IgXCJvdXRwdXQgc2VsZWN0b3JcIiBpcyB0aGUgbGFzdCBhcmdcblxuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7IC8vIElmIHRoZSByZXN1bHQgZnVuYyBpcyBhY3R1YWxseSBhbiBfb2JqZWN0XywgYXNzdW1lIGl0J3Mgb3VyIG9wdGlvbnMgb2JqZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgPT09ICdvYmplY3QnKSB7XG4gICAgICBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSByZXN1bHRGdW5jOyAvLyBhbmQgcG9wIHRoZSByZWFsIHJlc3VsdCBmdW5jIG9mZlxuXG4gICAgICByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFuIG91dHB1dCBmdW5jdGlvbiBhZnRlciB0aGUgaW5wdXRzLCBidXQgcmVjZWl2ZWQ6IFtcIiArIHR5cGVvZiByZXN1bHRGdW5jICsgXCJdXCIpO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIHNldCBvZiBvcHRpb25zIHdlJ3JlIHVzaW5nLiBQcmVmZXIgb3B0aW9ucyBwYXNzZWQgZGlyZWN0bHksXG4gICAgLy8gYnV0IGZhbGwgYmFjayB0byBvcHRpb25zIGdpdmVuIHRvIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvci5cblxuXG4gICAgdmFyIF9kaXJlY3RseVBhc3NlZE9wdGlvbiA9IGRpcmVjdGx5UGFzc2VkT3B0aW9ucyxcbiAgICAgICAgX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbi5tZW1vaXplT3B0aW9ucyxcbiAgICAgICAgbWVtb2l6ZU9wdGlvbnMgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID09PSB2b2lkIDAgPyBtZW1vaXplT3B0aW9uc0Zyb21BcmdzIDogX2RpcmVjdGx5UGFzc2VkT3B0aW9uMjsgLy8gU2ltcGxpZnlpbmcgYXNzdW1wdGlvbjogaXQncyB1bmxpa2VseSB0aGF0IHRoZSBmaXJzdCBvcHRpb25zIGFyZyBvZiB0aGUgcHJvdmlkZWQgbWVtb2l6ZXJcbiAgICAvLyBpcyBhbiBhcnJheS4gSW4gbW9zdCBsaWJzIEkndmUgbG9va2VkIGF0LCBpdCdzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIG9yIG9wdGlvbnMgb2JqZWN0LlxuICAgIC8vIEJhc2VkIG9uIHRoYXQsIGlmIGBtZW1vaXplT3B0aW9uc2AgX2lzXyBhbiBhcnJheSwgd2UgYXNzdW1lIGl0J3MgYSBmdWxsXG4gICAgLy8gdXNlci1wcm92aWRlZCBhcnJheSBvZiBvcHRpb25zLiBPdGhlcndpc2UsIGl0IG11c3QgYmUganVzdCB0aGUgX2ZpcnN0XyBhcmcsIGFuZCBzb1xuICAgIC8vIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXkgc28gd2UgY2FuIGFwcGx5IGl0LlxuXG4gICAgdmFyIGZpbmFsTWVtb2l6ZU9wdGlvbnMgPSBBcnJheS5pc0FycmF5KG1lbW9pemVPcHRpb25zKSA/IG1lbW9pemVPcHRpb25zIDogW21lbW9pemVPcHRpb25zXTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh2b2lkIDAsIFtmdW5jdGlvbiByZWNvbXB1dGF0aW9uV3JhcHBlcigpIHtcbiAgICAgIF9yZWNvbXB1dGF0aW9ucysrOyAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChmaW5hbE1lbW9pemVPcHRpb25zKSk7IC8vIElmIGEgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIGV4YWN0IHNhbWUgYXJndW1lbnRzIHdlIGRvbid0IG5lZWQgdG8gdHJhdmVyc2Ugb3VyIGRlcGVuZGVuY2llcyBhZ2Fpbi5cblxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gZGVwZW5kZW5jaWVzQ2hlY2tlcigpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgIHZhciBsZW5ndGggPSBkZXBlbmRlbmNpZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBhbmQgbXV0YXRlIGEgbG9jYWwgbGlzdCBvZiBwYXJhbXMgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuXG4gICAgICBfbGFzdFJlc3VsdCA9IG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oc2VsZWN0b3IsIHtcbiAgICAgIHJlc3VsdEZ1bmM6IHJlc3VsdEZ1bmMsXG4gICAgICBtZW1vaXplZFJlc3VsdEZ1bmM6IG1lbW9pemVkUmVzdWx0RnVuYyxcbiAgICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLFxuICAgICAgbGFzdFJlc3VsdDogZnVuY3Rpb24gbGFzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgICAgfSxcbiAgICAgIHJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucztcbiAgICAgIH0sXG4gICAgICByZXNldFJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZXNldFJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zID0gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07IC8vIEB0cy1pZ25vcmVcblxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcjtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuLy8gTWFudWFsIGRlZmluaXRpb24gb2Ygc3RhdGUgYW5kIG91dHB1dCBhcmd1bWVudHNcbmV4cG9ydCB2YXIgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycywgc2VsZWN0b3JDcmVhdG9yKSB7XG4gIGlmIChzZWxlY3RvckNyZWF0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArIChcIndoZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhIFwiICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG5cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBzZWxlY3RvckNyZWF0b3IoIC8vIEB0cy1pZ25vcmVcbiAgb2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgdmFsdWVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRTZWxlY3Rvcjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTVlYWI0ZTJlOWI5OWEwNWVmNThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQ2FydCIsInN0b3JlIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJBcHAiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJwYXRoIiwiZWxlbWVudCIsImV4YWN0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJGb3JtIiwiTGlzdCIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJfcmVmIiwicHJvZHVjdHMiLCJzdW0iLCJhZGRQcm9kdWN0IiwicmVtb3ZlUHJvZHVjdCIsIl91c2VQYXJhbXMiLCJmaWx0ZXJWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ0byIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5hbWUiLCJwcmljZSIsImhhbmRsZUNoYW5nZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX3RoaXMkc3RhdGUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCIsIm1hcCIsInByb2R1Y3QiLCJvbkNsaWNrIiwiY29ubmVjdCIsImZpbHRlclByb2R1Y3RzUHJpY2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZpbHRlclByaWNlIiwiY3JlYXRlU2VsZWN0b3IiLCJzdGF0dXMiLCJmaWx0ZXIiLCJpdGVtIiwic3VtUHJpY2VTZWxlY3RvciIsInJlZHVjZSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=