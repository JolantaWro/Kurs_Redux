"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 78:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var quotes = [{
  "tags": ["god", "science", "atheism", "short", "technology", "religion"],
  "quote": "There is no great invention, from fire to flying, which has not been hailed as an insult to some god.",
  "lang": "en",
  "author": "John Burdon Sanderson Haldane"
}, {
  "tags": ["science", "skepticism", "atheism", "short", "religion"],
  "quote": "That which can be asserted without evidence, can be dismissed without evidence.",
  "lang": "en",
  "author": "Christopher Hitchens"
}, {
  "tags": ["computer science", "technology", "algorithms", "moore's law", "progress"],
  "quote": "When it comes to the growth of the size of problems we can attack with an algorithm, we have a reversal: exponential algorithms make polynomially slow progress, while polynomial algorithms advance exponentially fast! For Moore's law to be reflected in the world we need efficient algorithms.",
  "lang": "en",
  "author": "Christos Papadimitriou, Sanjoy Dasgupta, Umesh Vazirani"
}, {
  "tags": ["short", "definition", "creativity", "entrepreneurship"],
  "quote": "Vuja de is when you look at something you've seen many times before and all of a sudden see it with fresh eyes.",
  "lang": "en"
}, {
  "tags": ["short", "rationalisation"],
  "quote": "A man generally has two reasons for doing a thing; one that sounds good, and a real one.",
  "lang": "en",
  "author": "John Pierpont Morgan"
}, {
  "tags": ["science", "skepticism", "rationality", "knowledge"],
  "quote": "Your strength as a rationalist is your ability to be more confused by fiction than by reality. If you are equally good at explaining any outcome, you have zero knowledge.",
  "lang": "en",
  "author": "Eliezer Yudkowsky"
}, {
  "tags": ["science", "short", "technology", "nanotechnology"],
  "quote": "Ribosomes are proof that nanomachines built of protein and RNA can be programmed to build complex molecules.",
  "lang": "en",
  "author": "Kim Eric Drexler"
}, {
  "tags": ["short", "computer science", "software engineering", "startup", "programming"],
  "quote": "The computing scientist's main challenge is not to get confused by the complexities of his own making.",
  "lang": "en",
  "author": "Edsger Wybe Dijkstra"
}, {
  "tags": ["ethics", "antinatalism"],
  "quote": "[...] the true reason for making someone to come into being is never for the person’s own sake, but always for the interest of his/her progenitors, in a clear attitude of manipulation; radical manipulation indeed because, in contrast with usual manipulation of people already alive, manipulation in procreation affects the very being of the person, and not only some of his/her predicates.",
  "lang": "en",
  "author": "Julio Cabrera"
}, {
  "tags": ["science", "short", "rationality", "statistics"],
  "quote": "[A]ll models are wrong, but some are useful.",
  "lang": "en",
  "author": "George Edward Pelham Box"
}, {
  "tags": ["ai", "computer science", "simulation"],
  "quote": "A computer cannot realise a solution of the Navier-Stokes equations in which the solution variables refer to atmospheric pressure, velocity, density etc. because a computer does not possess these quantities. A computer can only represent variables such as atmospheric pressure.",
  "lang": "en",
  "author": "Gordon McCabe"
}, {
  "tags": ["suffering", "animals", "earth"],
  "quote": "If we imagined that from now on, animals started emitting a red light every time they suffered, then from space, Earth would no longer be a blue planet, but a red and glowing on.",
  "lang": "en",
  "author": "Ole Martin Moen"
}, {
  "tags": ["ethics", "short", "consciousness", "negative utilitarianism", "mind", "value"],
  "quote": "Like redness, “mattering”, or simply \"value\", is inherent to [the sensations below hedonic zero].",
  "lang": "en",
  "author": "Magnus Vinding"
}, {
  "tags": ["science", "research"],
  "quote": "Assigning fixed quantitative values to arbitrary qualitative categories results only in false precision and gives the impression that the measurement contains more information than the researcher actually has.",
  "lang": "en",
  "author": "Mark D. White"
}, {
  "tags": ["science", "ethics", "transhumanism", "future"],
  "quote": "Can Ethics ever aspire to be a rigorous academic discipline that delivers an impartial perspective embracing the interests of all sentient life: the well being of posthuman, human and non-human animals; hypothetical extra-terrestrial life, future \"cyborgs\", and artificial life alike? Or will Ethics always serve to rationalize the self-interest of the world’s most powerful lifeforms?",
  "lang": "en",
  "author": "David Pearce"
}, {
  "tags": ["skepticism", "atheism", "short", "religion", "rationality"],
  "quote": "Choosing beliefs freely is not what rational minds do.",
  "lang": "en",
  "author": "Sam Harris"
}, {
  "tags": ["software engineering", "programming"],
  "quote": "Code comments that tell you nothing useful are a waste of space. The code will always tell you how something is done; code comments should tell you why.",
  "lang": "en",
  "author": "Edward Guiness"
}, {
  "tags": ["ethics", "vegan", "discrimination", "speciesism"],
  "quote": "If possessing a higher degree of intelligence does not entitle one human to use another for his or her own ends, how can it entitle humans to exploit non-humans?",
  "lang": "en",
  "author": "Peter Singer"
}, {
  "who": "Richard Noonan",
  "tags": ["fiction", "short", "money"],
  "quote": "[A] person needs money in order to never think about them.",
  "lang": "en",
  "author": "Arkady Strugatsky, Boris Strugatsky"
}, {
  "tags": ["short", "strategy"],
  "quote": "[I]t is far better to know the terrain than to plan on taking one particular path through the woods.",
  "lang": "en",
  "author": "Roger Fisher, William Ury"
}];
var api = {
  fetchQuote: function fetchQuote() {
    return new Promise(function (resolve, reject) {
      var wait = Math.floor(Math.random() * 3) + 3;
      setTimeout(function () {
        var index = Math.floor(Math.random() * 20);
        console.log(index);
        console.log(quotes[index]);
        resolve(quotes[index]);
      }, wait * 1000);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);




var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store;
  return {
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error
  };
};
var mapDispatchToProps = function mapDispatchToProps() {
  var dispatch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : store.dispatch;
  return {
    fetchQuote: function fetchQuote() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.fetchQuoteAsync)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(_components_Quote__WEBPACK_IMPORTED_MODULE_2__["default"]));
// import React from "react";
//
// export default () => <div/>

/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_FAV": () => (/* binding */ ADD_FAV),
/* harmony export */   "QUOTE_ERROR": () => (/* binding */ QUOTE_ERROR),
/* harmony export */   "QUOTE_FETCHED": () => (/* binding */ QUOTE_FETCHED),
/* harmony export */   "QUOTE_FETCHING": () => (/* binding */ QUOTE_FETCHING),
/* harmony export */   "quoteError": () => (/* binding */ quoteError),
/* harmony export */   "quoteFetched": () => (/* binding */ quoteFetched),
/* harmony export */   "startFetching": () => (/* binding */ startFetching)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);

var QUOTE_FETCHING = "QUOTE_FETCHING";
var QUOTE_FETCHED = "QUOTE_FETCHED";
var QUOTE_ERROR = "QUOTE_ERROR";
var ADD_FAV = "ADD_FAV";
var startFetching = function startFetching() {
  return {
    type: QUOTE_FETCHING
  };
};
var quoteFetched = function quoteFetched(value) {
  return {
    type: QUOTE_FETCHED,
    payload: value
  };
};
var quoteError = function quoteError(value) {
  return {
    type: QUOTE_ERROR,
    payload: value
  };
};
var fetchQuote = function fetchQuote() {
  return function (dispatch) {
    dispatch(startFetching);
    _api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchQuote().then(function (response) {
      dispatch(quoteFetched({
        response: response
      }));
    })["catch"](function (err) {
      quoteError(err);
    });
  };
};

// const fetchQuoteAsync = () => {
//     return async function(dispatch) {
//         dispatch(startFetching());
//         try {
//             const quote = await api.fetchQuote();
//             dispatch(quoteFetched(quote));
//         } catch (error) {
//             dispatch(quoteError(error.message));
//         }
//     };
// };

// const { results } = await (await.response).json();



/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var initialState = {
  loading: false,
  error: "",
  quote: null
};
function reducerQuote() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHING:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: true
        });
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_FETCHED:
      {
        return {
          loading: false,
          quote: action.payload,
          error: null
        };
      }
    case _actions__WEBPACK_IMPORTED_MODULE_0__.QUOTE_ERROR:
      {
        return {
          loading: false,
          quote: null,
          error: action.payload
        };
      }
    default:
      return state;
  }
}

// function reducerFavourites(state=[], action) {
//     switch (action.type) {
//         case ADD_FAV:
//             return [...state, action.payload]
//     }
//
// }

var rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  quote: reducerQuote
  // favourites: reducerFavourites
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducers);

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);




var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_0__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e17d7a0dc8d9416b66b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0E7TUFDSSxPQUFPbEIsS0FBSztFQUFBO0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU00QixZQUFZLEdBQUdMLHNEQUFlLENBQUM7RUFDakNsQixLQUFLLEVBQUVvQjtFQUNQO0FBQ0osQ0FBQyxDQUFDOztBQUVGLGlFQUFlRyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNsRHdCO0FBQ2Q7QUFDQTtBQUNMO0FBRWhDLElBQU14QixLQUFLLEdBQUcwQixrREFBVyxDQUNyQkYsZ0RBQVksRUFDWkMsc0RBQWUsQ0FBQ0UsbURBQUssQ0FBQyxDQUN6QjtBQUVELGlFQUFlM0IsS0FBSzs7Ozs7Ozs7VUNWcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvY29udGFpbmVycy9RdW90ZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX0FzeW5jaHJvbmljem5vc2MvMDFfWmFkYW5pZS9qcy9yZWR1eC9hY3Rpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDFfQXN5bmNocm9uaWN6bm9zYy8wMV9aYWRhbmllL2pzL3JlZHV4L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV9Bc3luY2hyb25pY3pub3NjLzAxX1phZGFuaWUvanMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdW90ZXMgPSBbe1xuICBcInRhZ3NcIjogW1wiZ29kXCIsIFwic2NpZW5jZVwiLCBcImF0aGVpc21cIiwgXCJzaG9ydFwiLCBcInRlY2hub2xvZ3lcIiwgXCJyZWxpZ2lvblwiXSxcbiAgXCJxdW90ZVwiOiBcIlRoZXJlIGlzIG5vIGdyZWF0IGludmVudGlvbiwgZnJvbSBmaXJlIHRvIGZseWluZywgd2hpY2ggaGFzIG5vdCBiZWVuIGhhaWxlZCBhcyBhbiBpbnN1bHQgdG8gc29tZSBnb2QuXCIsXG4gIFwibGFuZ1wiOiBcImVuXCIsXG4gIFwiYXV0aG9yXCI6IFwiSm9obiBCdXJkb24gU2FuZGVyc29uIEhhbGRhbmVcIlxufSwge1xuICBcInRhZ3NcIjogW1wic2NpZW5jZVwiLCBcInNrZXB0aWNpc21cIiwgXCJhdGhlaXNtXCIsIFwic2hvcnRcIiwgXCJyZWxpZ2lvblwiXSxcbiAgXCJxdW90ZVwiOiBcIlRoYXQgd2hpY2ggY2FuIGJlIGFzc2VydGVkIHdpdGhvdXQgZXZpZGVuY2UsIGNhbiBiZSBkaXNtaXNzZWQgd2l0aG91dCBldmlkZW5jZS5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJDaHJpc3RvcGhlciBIaXRjaGVuc1wiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJjb21wdXRlciBzY2llbmNlXCIsIFwidGVjaG5vbG9neVwiLCBcImFsZ29yaXRobXNcIiwgXCJtb29yZSdzIGxhd1wiLCBcInByb2dyZXNzXCJdLFxuICBcInF1b3RlXCI6IFwiV2hlbiBpdCBjb21lcyB0byB0aGUgZ3Jvd3RoIG9mIHRoZSBzaXplIG9mIHByb2JsZW1zIHdlIGNhbiBhdHRhY2sgd2l0aCBhbiBhbGdvcml0aG0sIHdlIGhhdmUgYSByZXZlcnNhbDogZXhwb25lbnRpYWwgYWxnb3JpdGhtcyBtYWtlIHBvbHlub21pYWxseSBzbG93IHByb2dyZXNzLCB3aGlsZSBwb2x5bm9taWFsIGFsZ29yaXRobXMgYWR2YW5jZSBleHBvbmVudGlhbGx5IGZhc3QhIEZvciBNb29yZSdzIGxhdyB0byBiZSByZWZsZWN0ZWQgaW4gdGhlIHdvcmxkIHdlIG5lZWQgZWZmaWNpZW50IGFsZ29yaXRobXMuXCIsXG4gIFwibGFuZ1wiOiBcImVuXCIsXG4gIFwiYXV0aG9yXCI6IFwiQ2hyaXN0b3MgUGFwYWRpbWl0cmlvdSwgU2Fuam95IERhc2d1cHRhLCBVbWVzaCBWYXppcmFuaVwiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJzaG9ydFwiLCBcImRlZmluaXRpb25cIiwgXCJjcmVhdGl2aXR5XCIsIFwiZW50cmVwcmVuZXVyc2hpcFwiXSxcbiAgXCJxdW90ZVwiOiBcIlZ1amEgZGUgaXMgd2hlbiB5b3UgbG9vayBhdCBzb21ldGhpbmcgeW91J3ZlIHNlZW4gbWFueSB0aW1lcyBiZWZvcmUgYW5kIGFsbCBvZiBhIHN1ZGRlbiBzZWUgaXQgd2l0aCBmcmVzaCBleWVzLlwiLFxuICBcImxhbmdcIjogXCJlblwiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJzaG9ydFwiLCBcInJhdGlvbmFsaXNhdGlvblwiXSxcbiAgXCJxdW90ZVwiOiBcIkEgbWFuIGdlbmVyYWxseSBoYXMgdHdvIHJlYXNvbnMgZm9yIGRvaW5nIGEgdGhpbmc7IG9uZSB0aGF0IHNvdW5kcyBnb29kLCBhbmQgYSByZWFsIG9uZS5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJKb2huIFBpZXJwb250IE1vcmdhblwiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJzY2llbmNlXCIsIFwic2tlcHRpY2lzbVwiLCBcInJhdGlvbmFsaXR5XCIsIFwia25vd2xlZGdlXCJdLFxuICBcInF1b3RlXCI6IFwiWW91ciBzdHJlbmd0aCBhcyBhIHJhdGlvbmFsaXN0IGlzIHlvdXIgYWJpbGl0eSB0byBiZSBtb3JlIGNvbmZ1c2VkIGJ5IGZpY3Rpb24gdGhhbiBieSByZWFsaXR5LiBJZiB5b3UgYXJlIGVxdWFsbHkgZ29vZCBhdCBleHBsYWluaW5nIGFueSBvdXRjb21lLCB5b3UgaGF2ZSB6ZXJvIGtub3dsZWRnZS5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJFbGllemVyIFl1ZGtvd3NreVwiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJzY2llbmNlXCIsIFwic2hvcnRcIiwgXCJ0ZWNobm9sb2d5XCIsIFwibmFub3RlY2hub2xvZ3lcIl0sXG4gIFwicXVvdGVcIjogXCJSaWJvc29tZXMgYXJlIHByb29mIHRoYXQgbmFub21hY2hpbmVzIGJ1aWx0IG9mIHByb3RlaW4gYW5kIFJOQSBjYW4gYmUgcHJvZ3JhbW1lZCB0byBidWlsZCBjb21wbGV4IG1vbGVjdWxlcy5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJLaW0gRXJpYyBEcmV4bGVyXCJcbn0sIHtcbiAgXCJ0YWdzXCI6IFtcInNob3J0XCIsIFwiY29tcHV0ZXIgc2NpZW5jZVwiLCBcInNvZnR3YXJlIGVuZ2luZWVyaW5nXCIsIFwic3RhcnR1cFwiLCBcInByb2dyYW1taW5nXCJdLFxuICBcInF1b3RlXCI6IFwiVGhlIGNvbXB1dGluZyBzY2llbnRpc3QncyBtYWluIGNoYWxsZW5nZSBpcyBub3QgdG8gZ2V0IGNvbmZ1c2VkIGJ5IHRoZSBjb21wbGV4aXRpZXMgb2YgaGlzIG93biBtYWtpbmcuXCIsXG4gIFwibGFuZ1wiOiBcImVuXCIsXG4gIFwiYXV0aG9yXCI6IFwiRWRzZ2VyIFd5YmUgRGlqa3N0cmFcIlxufSwge1xuICBcInRhZ3NcIjogW1wiZXRoaWNzXCIsIFwiYW50aW5hdGFsaXNtXCJdLFxuICBcInF1b3RlXCI6IFwiWy4uLl0gdGhlIHRydWUgcmVhc29uIGZvciBtYWtpbmcgc29tZW9uZSB0byBjb21lIGludG8gYmVpbmcgaXMgbmV2ZXIgZm9yIHRoZSBwZXJzb27igJlzIG93biBzYWtlLCBidXQgYWx3YXlzIGZvciB0aGUgaW50ZXJlc3Qgb2YgaGlzL2hlciBwcm9nZW5pdG9ycywgaW4gYSBjbGVhciBhdHRpdHVkZSBvZiBtYW5pcHVsYXRpb247IHJhZGljYWwgbWFuaXB1bGF0aW9uIGluZGVlZCBiZWNhdXNlLCBpbiBjb250cmFzdCB3aXRoIHVzdWFsIG1hbmlwdWxhdGlvbiBvZiBwZW9wbGUgYWxyZWFkeSBhbGl2ZSwgbWFuaXB1bGF0aW9uIGluIHByb2NyZWF0aW9uIGFmZmVjdHMgdGhlIHZlcnkgYmVpbmcgb2YgdGhlIHBlcnNvbiwgYW5kIG5vdCBvbmx5IHNvbWUgb2YgaGlzL2hlciBwcmVkaWNhdGVzLlwiLFxuICBcImxhbmdcIjogXCJlblwiLFxuICBcImF1dGhvclwiOiBcIkp1bGlvIENhYnJlcmFcIlxufSwge1xuICBcInRhZ3NcIjogW1wic2NpZW5jZVwiLCBcInNob3J0XCIsIFwicmF0aW9uYWxpdHlcIiwgXCJzdGF0aXN0aWNzXCJdLFxuICBcInF1b3RlXCI6IFwiW0FdbGwgbW9kZWxzIGFyZSB3cm9uZywgYnV0IHNvbWUgYXJlIHVzZWZ1bC5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJHZW9yZ2UgRWR3YXJkIFBlbGhhbSBCb3hcIlxufSwge1xuICBcInRhZ3NcIjogW1wiYWlcIiwgXCJjb21wdXRlciBzY2llbmNlXCIsIFwic2ltdWxhdGlvblwiXSxcbiAgXCJxdW90ZVwiOiBcIkEgY29tcHV0ZXIgY2Fubm90IHJlYWxpc2UgYSBzb2x1dGlvbiBvZiB0aGUgTmF2aWVyLVN0b2tlcyBlcXVhdGlvbnMgaW4gd2hpY2ggdGhlIHNvbHV0aW9uIHZhcmlhYmxlcyByZWZlciB0byBhdG1vc3BoZXJpYyBwcmVzc3VyZSwgdmVsb2NpdHksIGRlbnNpdHkgZXRjLiBiZWNhdXNlIGEgY29tcHV0ZXIgZG9lcyBub3QgcG9zc2VzcyB0aGVzZSBxdWFudGl0aWVzLiBBIGNvbXB1dGVyIGNhbiBvbmx5IHJlcHJlc2VudCB2YXJpYWJsZXMgc3VjaCBhcyBhdG1vc3BoZXJpYyBwcmVzc3VyZS5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJHb3Jkb24gTWNDYWJlXCJcbn0sIHtcbiAgXCJ0YWdzXCI6IFtcInN1ZmZlcmluZ1wiLCBcImFuaW1hbHNcIiwgXCJlYXJ0aFwiXSxcbiAgXCJxdW90ZVwiOiBcIklmIHdlIGltYWdpbmVkIHRoYXQgZnJvbSBub3cgb24sIGFuaW1hbHMgc3RhcnRlZCBlbWl0dGluZyBhIHJlZCBsaWdodCBldmVyeSB0aW1lIHRoZXkgc3VmZmVyZWQsIHRoZW4gZnJvbSBzcGFjZSwgRWFydGggd291bGQgbm8gbG9uZ2VyIGJlIGEgYmx1ZSBwbGFuZXQsIGJ1dCBhIHJlZCBhbmQgZ2xvd2luZyBvbi5cIixcbiAgXCJsYW5nXCI6IFwiZW5cIixcbiAgXCJhdXRob3JcIjogXCJPbGUgTWFydGluIE1vZW5cIlxufSwge1xuICBcInRhZ3NcIjogW1wiZXRoaWNzXCIsIFwic2hvcnRcIiwgXCJjb25zY2lvdXNuZXNzXCIsIFwibmVnYXRpdmUgdXRpbGl0YXJpYW5pc21cIiwgXCJtaW5kXCIsIFwidmFsdWVcIl0sXG4gIFwicXVvdGVcIjogXCJMaWtlIHJlZG5lc3MsIOKAnG1hdHRlcmluZ+KAnSwgb3Igc2ltcGx5IFxcXCJ2YWx1ZVxcXCIsIGlzIGluaGVyZW50IHRvIFt0aGUgc2Vuc2F0aW9ucyBiZWxvdyBoZWRvbmljIHplcm9dLlwiLFxuICBcImxhbmdcIjogXCJlblwiLFxuICBcImF1dGhvclwiOiBcIk1hZ251cyBWaW5kaW5nXCJcbn0sIHtcbiAgXCJ0YWdzXCI6IFtcInNjaWVuY2VcIiwgXCJyZXNlYXJjaFwiXSxcbiAgXCJxdW90ZVwiOiBcIkFzc2lnbmluZyBmaXhlZCBxdWFudGl0YXRpdmUgdmFsdWVzIHRvIGFyYml0cmFyeSBxdWFsaXRhdGl2ZSBjYXRlZ29yaWVzIHJlc3VsdHMgb25seSBpbiBmYWxzZSBwcmVjaXNpb24gYW5kIGdpdmVzIHRoZSBpbXByZXNzaW9uIHRoYXQgdGhlIG1lYXN1cmVtZW50IGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24gdGhhbiB0aGUgcmVzZWFyY2hlciBhY3R1YWxseSBoYXMuXCIsXG4gIFwibGFuZ1wiOiBcImVuXCIsXG4gIFwiYXV0aG9yXCI6IFwiTWFyayBELiBXaGl0ZVwiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJzY2llbmNlXCIsIFwiZXRoaWNzXCIsIFwidHJhbnNodW1hbmlzbVwiLCBcImZ1dHVyZVwiXSxcbiAgXCJxdW90ZVwiOiBcIkNhbiBFdGhpY3MgZXZlciBhc3BpcmUgdG8gYmUgYSByaWdvcm91cyBhY2FkZW1pYyBkaXNjaXBsaW5lIHRoYXQgZGVsaXZlcnMgYW4gaW1wYXJ0aWFsIHBlcnNwZWN0aXZlIGVtYnJhY2luZyB0aGUgaW50ZXJlc3RzIG9mIGFsbCBzZW50aWVudCBsaWZlOiB0aGUgd2VsbCBiZWluZyBvZiBwb3N0aHVtYW4sIGh1bWFuIGFuZCBub24taHVtYW4gYW5pbWFsczsgaHlwb3RoZXRpY2FsIGV4dHJhLXRlcnJlc3RyaWFsIGxpZmUsIGZ1dHVyZSBcXFwiY3lib3Jnc1xcXCIsIGFuZCBhcnRpZmljaWFsIGxpZmUgYWxpa2U/IE9yIHdpbGwgRXRoaWNzIGFsd2F5cyBzZXJ2ZSB0byByYXRpb25hbGl6ZSB0aGUgc2VsZi1pbnRlcmVzdCBvZiB0aGUgd29ybGTigJlzIG1vc3QgcG93ZXJmdWwgbGlmZWZvcm1zP1wiLFxuICBcImxhbmdcIjogXCJlblwiLFxuICBcImF1dGhvclwiOiBcIkRhdmlkIFBlYXJjZVwiXG59LCB7XG4gIFwidGFnc1wiOiBbXCJza2VwdGljaXNtXCIsIFwiYXRoZWlzbVwiLCBcInNob3J0XCIsIFwicmVsaWdpb25cIiwgXCJyYXRpb25hbGl0eVwiXSxcbiAgXCJxdW90ZVwiOiBcIkNob29zaW5nIGJlbGllZnMgZnJlZWx5IGlzIG5vdCB3aGF0IHJhdGlvbmFsIG1pbmRzIGRvLlwiLFxuICBcImxhbmdcIjogXCJlblwiLFxuICBcImF1dGhvclwiOiBcIlNhbSBIYXJyaXNcIlxufSwge1xuICBcInRhZ3NcIjogW1wic29mdHdhcmUgZW5naW5lZXJpbmdcIiwgXCJwcm9ncmFtbWluZ1wiXSxcbiAgXCJxdW90ZVwiOiBcIkNvZGUgY29tbWVudHMgdGhhdCB0ZWxsIHlvdSBub3RoaW5nIHVzZWZ1bCBhcmUgYSB3YXN0ZSBvZiBzcGFjZS4gVGhlIGNvZGUgd2lsbCBhbHdheXMgdGVsbCB5b3UgaG93IHNvbWV0aGluZyBpcyBkb25lOyBjb2RlIGNvbW1lbnRzIHNob3VsZCB0ZWxsIHlvdSB3aHkuXCIsXG4gIFwibGFuZ1wiOiBcImVuXCIsXG4gIFwiYXV0aG9yXCI6IFwiRWR3YXJkIEd1aW5lc3NcIlxufSwge1xuICBcInRhZ3NcIjogW1wiZXRoaWNzXCIsIFwidmVnYW5cIiwgXCJkaXNjcmltaW5hdGlvblwiLCBcInNwZWNpZXNpc21cIl0sXG4gIFwicXVvdGVcIjogXCJJZiBwb3NzZXNzaW5nIGEgaGlnaGVyIGRlZ3JlZSBvZiBpbnRlbGxpZ2VuY2UgZG9lcyBub3QgZW50aXRsZSBvbmUgaHVtYW4gdG8gdXNlIGFub3RoZXIgZm9yIGhpcyBvciBoZXIgb3duIGVuZHMsIGhvdyBjYW4gaXQgZW50aXRsZSBodW1hbnMgdG8gZXhwbG9pdCBub24taHVtYW5zP1wiLFxuICBcImxhbmdcIjogXCJlblwiLFxuICBcImF1dGhvclwiOiBcIlBldGVyIFNpbmdlclwiXG59LCB7XG4gIFwid2hvXCI6IFwiUmljaGFyZCBOb29uYW5cIixcbiAgXCJ0YWdzXCI6IFtcImZpY3Rpb25cIiwgXCJzaG9ydFwiLCBcIm1vbmV5XCJdLFxuICBcInF1b3RlXCI6IFwiW0FdIHBlcnNvbiBuZWVkcyBtb25leSBpbiBvcmRlciB0byBuZXZlciB0aGluayBhYm91dCB0aGVtLlwiLFxuICBcImxhbmdcIjogXCJlblwiLFxuICBcImF1dGhvclwiOiBcIkFya2FkeSBTdHJ1Z2F0c2t5LCBCb3JpcyBTdHJ1Z2F0c2t5XCJcbn0sIHtcbiAgXCJ0YWdzXCI6IFtcInNob3J0XCIsIFwic3RyYXRlZ3lcIl0sXG4gIFwicXVvdGVcIjogXCJbSV10IGlzIGZhciBiZXR0ZXIgdG8ga25vdyB0aGUgdGVycmFpbiB0aGFuIHRvIHBsYW4gb24gdGFraW5nIG9uZSBwYXJ0aWN1bGFyIHBhdGggdGhyb3VnaCB0aGUgd29vZHMuXCIsXG4gIFwibGFuZ1wiOiBcImVuXCIsXG4gIFwiYXV0aG9yXCI6IFwiUm9nZXIgRmlzaGVyLCBXaWxsaWFtIFVyeVwiXG59XTtcblxuY29uc3QgYXBpID0ge1xuICBmZXRjaFF1b3RlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIGNvbnN0IHdhaXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDM7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhxdW90ZXNbaW5kZXhdKTtcbiAgICAgICAgcmVzb2x2ZShxdW90ZXNbaW5kZXhdKTtcbiAgICAgIH0sIHdhaXQgKiAxMDAwKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBRdW90ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9RdW90ZVwiO1xuaW1wb3J0IHtmZXRjaFF1b3RlLCBmZXRjaFF1b3RlQXN5bmN9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZT1zdG9yZSkgPT4gKHtcbiAgICBxdW90ZTogc3RhdGUucXVvdGUucXVvdGUsXG4gICAgbG9hZGluZzogc3RhdGUucXVvdGUubG9hZGluZyxcbiAgICBlcnJvcjogc3RhdGUucXVvdGUuZXJyb3Jcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaD1zdG9yZS5kaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaFF1b3RlOiAoKSA9PiBkaXNwYXRjaChmZXRjaFF1b3RlQXN5bmMoKSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFF1b3RlKVxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy9cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IDxkaXYvPiIsImltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaVwiO1xuXG5jb25zdCBRVU9URV9GRVRDSElORyA9IFwiUVVPVEVfRkVUQ0hJTkdcIjtcbmNvbnN0IFFVT1RFX0ZFVENIRUQgPSBcIlFVT1RFX0ZFVENIRURcIjtcbmNvbnN0IFFVT1RFX0VSUk9SID0gXCJRVU9URV9FUlJPUlwiO1xuY29uc3QgQUREX0ZBViA9IFwiQUREX0ZBVlwiO1xuXG5jb25zdCBzdGFydEZldGNoaW5nID0gKCkgPT4gKHtcbiAgICB0eXBlOiBRVU9URV9GRVRDSElOR1xufSk7XG5cbmNvbnN0IHF1b3RlRmV0Y2hlZCA9ICh2YWx1ZSkgPT4gKHtcbiAgICB0eXBlOiBRVU9URV9GRVRDSEVELFxuICAgIHBheWxvYWQ6IHZhbHVlXG5cbn0pO1xuXG5jb25zdCBxdW90ZUVycm9yID0gKHZhbHVlKSA9PiAoe1xuICAgIHR5cGU6IFFVT1RFX0VSUk9SLFxuICAgIHBheWxvYWQ6IHZhbHVlXG59KTtcblxuY29uc3QgZmV0Y2hRdW90ZSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHN0YXJ0RmV0Y2hpbmcpO1xuICAgIGFwaS5mZXRjaFF1b3RlKClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChxdW90ZUZldGNoZWQoe3Jlc3BvbnNlfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBxdW90ZUVycm9yKGVycilcbiAgICAgICAgfSlcblxufVxuXG4vLyBjb25zdCBmZXRjaFF1b3RlQXN5bmMgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4vLyAgICAgICAgIGRpc3BhdGNoKHN0YXJ0RmV0Y2hpbmcoKSk7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICBjb25zdCBxdW90ZSA9IGF3YWl0IGFwaS5mZXRjaFF1b3RlKCk7XG4vLyAgICAgICAgICAgICBkaXNwYXRjaChxdW90ZUZldGNoZWQocXVvdGUpKTtcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGRpc3BhdGNoKHF1b3RlRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcbi8vIH07XG5cbi8vIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgKGF3YWl0LnJlc3BvbnNlKS5qc29uKCk7XG5cbmV4cG9ydCB7IFFVT1RFX0ZFVENISU5HLCBRVU9URV9GRVRDSEVELCBRVU9URV9FUlJPUiwgQUREX0ZBViwgc3RhcnRGZXRjaGluZywgcXVvdGVFcnJvciwgcXVvdGVGZXRjaGVkIH0iLCJpbXBvcnQge0FERF9GQVYsIFFVT1RFX0VSUk9SLCBRVU9URV9GRVRDSEVELCBRVU9URV9GRVRDSElOR30gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogXCJcIixcbiAgICBxdW90ZTogbnVsbFxufVxuXG5mdW5jdGlvbiByZWR1Y2VyUXVvdGUgKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgUVVPVEVfRkVUQ0hJTkc6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgUVVPVEVfRkVUQ0hFRDoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBxdW90ZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFFVT1RFX0VSUk9SOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHF1b3RlOiBudWxsLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHJlZHVjZXJGYXZvdXJpdGVzKHN0YXRlPVtdLCBhY3Rpb24pIHtcbi8vICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICAgIGNhc2UgQUREX0ZBVjpcbi8vICAgICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgIH1cbi8vXG4vLyB9XG5cbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcXVvdGU6IHJlZHVjZXJRdW90ZSxcbiAgICAvLyBmYXZvdXJpdGVzOiByZWR1Y2VyRmF2b3VyaXRlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzOyIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCB7ZmV0Y2hRdW90ZX0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VycyxcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUxN2Q3YTBkYzhkOTQxNmI2NmIxXCIpIl0sIm5hbWVzIjpbInF1b3RlcyIsImFwaSIsImZldGNoUXVvdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndhaXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJjb25uZWN0IiwiUXVvdGUiLCJmZXRjaFF1b3RlQXN5bmMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInN0b3JlIiwicXVvdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlFVT1RFX0ZFVENISU5HIiwiUVVPVEVfRkVUQ0hFRCIsIlFVT1RFX0VSUk9SIiwiQUREX0ZBViIsInN0YXJ0RmV0Y2hpbmciLCJ0eXBlIiwicXVvdGVGZXRjaGVkIiwidmFsdWUiLCJwYXlsb2FkIiwicXVvdGVFcnJvciIsInRoZW4iLCJyZXNwb25zZSIsImVyciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJRdW90ZSIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJyb290UmVkdWNlcnMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rIl0sInNvdXJjZVJvb3QiOiIifQ==