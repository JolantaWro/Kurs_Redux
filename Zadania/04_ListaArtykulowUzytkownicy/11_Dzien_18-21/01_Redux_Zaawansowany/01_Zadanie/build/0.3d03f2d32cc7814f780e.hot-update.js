"use strict";
self["webpackHotUpdatees6_react"](0,Array(33).concat([
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);




var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Router, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Layout = function Layout(_ref) {
  var children = _ref.children;
  var styles = {
    main: {
      marginTop: "3rem"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar has-shadow is-spaced"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "navbar-item title is-4"
  }, "TwojePrzepisy.pl")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/recipes",
    className: "navbar-item",
    activeClassName: "is-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon has-text-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-folder"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Przepisy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products",
    className: "navbar-item",
    activeClassName: "is-active"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon has-text-danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Produkty")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "container",
    style: styles.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-fifth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "menu",
    style: {
      marginRight: "4rem",
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "menu-label"
  }, "Podstrony"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/",
    exact: true,
    activeClassName: "is-active"
  }, "Strona g\u0142\xF3wna")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/recipes",
    exact: true,
    activeClassName: "is-active"
  }, "Przepisy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products",
    exact: true,
    activeClassName: "is-active"
  }, "Produkty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "menu-label"
  }, "Akcje"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/recipes/add",
    activeClassName: "is-active"
  }, "Dodaj Przepis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {
    to: "/products/add",
    activeClassName: "is-active"
  }, "Dodaj Produkt"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-four-fifths"
  }, children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Await),
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.MemoryRouter),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Navigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   "Outlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Outlet),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Router),
/* harmony export */   "RouterProvider": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.RouterProvider),
/* harmony export */   "Routes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Routes),
/* harmony export */   "ScrollRestoration": () => (/* binding */ ScrollRestoration),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext),
/* harmony export */   "UNSAFE_useScrollRestoration": () => (/* binding */ useScrollRestoration),
/* harmony export */   "createBrowserRouter": () => (/* binding */ createBrowserRouter),
/* harmony export */   "createHashRouter": () => (/* binding */ createHashRouter),
/* harmony export */   "createMemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromElements),
/* harmony export */   "createSearchParams": () => (/* binding */ createSearchParams),
/* harmony export */   "defer": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   "renderMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.renderMatches),
/* harmony export */   "resolvePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   "unstable_HistoryRouter": () => (/* binding */ HistoryRouter),
/* harmony export */   "unstable_useBlocker": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker),
/* harmony export */   "unstable_usePrompt": () => (/* binding */ usePrompt),
/* harmony export */   "useActionData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useActionData),
/* harmony export */   "useAsyncError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncValue),
/* harmony export */   "useBeforeUnload": () => (/* binding */ useBeforeUnload),
/* harmony export */   "useFetcher": () => (/* binding */ useFetcher),
/* harmony export */   "useFetchers": () => (/* binding */ useFetchers),
/* harmony export */   "useFormAction": () => (/* binding */ useFormAction),
/* harmony export */   "useHref": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useHref),
/* harmony export */   "useInRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useInRouterContext),
/* harmony export */   "useLinkClickHandler": () => (/* binding */ useLinkClickHandler),
/* harmony export */   "useLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLoaderData),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation),
/* harmony export */   "useMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatch),
/* harmony export */   "useMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches),
/* harmony export */   "useNavigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate),
/* harmony export */   "useNavigation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation),
/* harmony export */   "useNavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigationType),
/* harmony export */   "useOutlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutlet),
/* harmony export */   "useOutletContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutletContext),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useParams),
/* harmony export */   "useResolvedPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRevalidator),
/* harmony export */   "useRouteError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRoutes),
/* harmony export */   "useSearchParams": () => (/* binding */ useSearchParams),
/* harmony export */   "useSubmit": () => (/* binding */ useSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);

  if (defaultSearchParams) {
    for (let key of defaultSearchParams.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }
  }

  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
      _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    detectErrorBoundary: react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_detectErrorBoundary
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    detectErrorBoundary: react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_detectErrorBoundary
  }).initialize();
}

function parseHydrationData() {
  var _window;

  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }

  return state;
}

function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};

  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }

  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (process.env.NODE_ENV !== "production") {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext); // Rendered into <a href> for absolute URLs

  let absoluteHref;
  let isExternal = false;

  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to; // Only check for external origins client-side

    if (isBrowser) {
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(targetUrl.pathname, basename);

      if (targetUrl.origin === currentUrl.origin && path != null) {
        // Strip the protocol/origin/basename for same-origin absolute URLs
        to = path + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
  } // Rendered into <a href> for relative URLs


  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
    ref: ref
  }));
});

if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}

const FormImpl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative,
    preventScrollReset
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  FormImpl.displayName = "FormImpl";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */


function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}

if (process.env.NODE_ENV !== "production") {
  ScrollRestoration.displayName = "ScrollRestoration";
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
  process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : void 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}

function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for useFetcher()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
  }

  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
}

function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });

  if (process.env.NODE_ENV !== "production") {
    FetcherForm.displayName = "fetcher.Form";
  }

  return FetcherForm;
}

let fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;

  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
  let [fetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => String(++fetcherId));
  let [Form] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for fetcher.Form()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => href => {
    !router ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No router available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No fetcher available to clean up from useFetcher()");
        return;
      }

      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation)(); // Trigger manual scroll restoration while we're active

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on pagehide

  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }

    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);

        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it


      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash


      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));

        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Don't reset if this navigation opted out


      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations


      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */


function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);

      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
}
 //#endregion


//# sourceMappingURL=index.js.map


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* binding */ AbortedDeferredError),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "ErrorResponse": () => (/* binding */ ErrorResponse),
/* harmony export */   "IDLE_BLOCKER": () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   "IDLE_FETCHER": () => (/* binding */ IDLE_FETCHER),
/* harmony export */   "IDLE_NAVIGATION": () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   "UNSAFE_DEFERRED_SYMBOL": () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   "UNSAFE_DeferredData": () => (/* binding */ DeferredData),
/* harmony export */   "UNSAFE_convertRoutesToDataRoutes": () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   "UNSAFE_getPathContributingMatches": () => (/* binding */ getPathContributingMatches),
/* harmony export */   "UNSAFE_invariant": () => (/* binding */ invariant),
/* harmony export */   "UNSAFE_warning": () => (/* binding */ warning),
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ createPath),
/* harmony export */   "createRouter": () => (/* binding */ createRouter),
/* harmony export */   "createStaticHandler": () => (/* binding */ createStaticHandler),
/* harmony export */   "defer": () => (/* binding */ defer),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "getStaticContextFromError": () => (/* binding */ getStaticContextFromError),
/* harmony export */   "getToPathname": () => (/* binding */ getToPathname),
/* harmony export */   "isDeferredData": () => (/* binding */ isDeferredData),
/* harmony export */   "isRouteErrorResponse": () => (/* binding */ isRouteErrorResponse),
/* harmony export */   "joinPaths": () => (/* binding */ joinPaths),
/* harmony export */   "json": () => (/* binding */ json),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "matchRoutes": () => (/* binding */ matchRoutes),
/* harmony export */   "normalizePathname": () => (/* binding */ normalizePathname),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "redirect": () => (/* binding */ redirect),
/* harmony export */   "resolvePath": () => (/* binding */ resolvePath),
/* harmony export */   "resolveTo": () => (/* binding */ resolveTo),
/* harmony export */   "stripBasename": () => (/* binding */ stripBasename)
/* harmony export */ });
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref,

    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },

    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },

    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;

      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }

  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }

  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }

  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;

    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }

  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    createURL,

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, detectErrorBoundary, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (manifest === void 0) {
    manifest = {};
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        hasErrorBoundary: detectErrorBoundary(route),
        id
      });

      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        hasErrorBoundary: detectErrorBoundary(route),
        children: undefined
      });

      manifest[id] = pathOrLayoutRoute;

      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, detectErrorBoundary, treePath, manifest);
      }

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  } // ensure `/` is added at the beginning if the path is absolute


  const prefix = path.startsWith("/") ? "/" : "";
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1; // only apply the splat if it's the last segment

    if (isLastSegment && segment === "*") {
      const star = "*";
      const starParam = params[star]; // Apply the splat

      return starParam;
    }

    const keyMatch = segment.match(/^:(\w+)(\??)$/);

    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];

      if (optional === "?") {
        return param == null ? "" : param;
      }

      if (param == null) {
        invariant(false, "Missing \":" + key + "\" param");
      }

      return param;
    } // Remove any optional markers from optional static segments


    return segment.replace(/\?$/g, "");
  }) // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});

    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }

    this.init = responseInit;
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeysSet.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }

  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeysSet.size === 0;
  }

  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */

function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser;

const defaultDetectErrorBoundary = route => Boolean(route.hasErrorBoundary); //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */


function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let detectErrorBoundary = init.detectErrorBoundary || defaultDetectErrorBoundary; // Routes keyed by ID

  let manifest = {}; // Routes in tree format for matching

  let dataRoutes = convertRoutesToDataRoutes(init.routes, detectErrorBoundary, undefined, manifest);
  let inFlightDataRoutes; // Config driven behavior flags

  let future = _extends({
    v7_normalizeFormMethod: false
  }, init.future); // Cleanup function for history


  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = // All initialMatches need to be loaded before we're ready.  If we have lazy
  // functions around still then we'll need to run them in initialize()
  !initialMatches.some(m => m.route.lazy) && ( // And we have to either have no loaders or have been provided hydrationData
  !initialMatches.some(m => m.route.loader) || init.hydrationData != null);
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change

  let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state

  let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;

      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }

      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });

      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1); // Put the blocker into a blocked state

        updateBlocker(blockerKey, {
          state: "blocked",
          location,

          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            }); // Re-do the same POP navigation we just blocked

            init.history.go(delta);
          },

          reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(router.state.blockers)
            });
          }

        });
        return;
      }

      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _location$state, _location$state2;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
    // so we can start fresh

    for (let [key] of blockerFunctions) {
      deleteBlocker(key);
    } // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect


    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;

    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }

    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers: new Map(state.blockers)
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, future, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;

    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });

    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,

        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          }); // Send the same navigation through

          navigate(to, opts);
        },

        reset() {
          deleteBlocker(blockerKey);
          updateState({
            blockers: new Map(state.blockers)
          });
        }

      });
      return;
    }

    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change and not a mutation submission
    // For example, on /page#hash and submit a <Form method="post"> which will
    // default to a navigation to /page


    if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, detectErrorBoundary, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    } // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available


    let activeSubmission = submission || fetcherSubmission ? submission || fetcherSubmission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
      formMethod: loadingNavigation.formMethod,
      formAction: loadingNavigation.formAction,
      formData: loadingNavigation.formData,
      formEncType: loadingNavigation.formEncType
    } : undefined;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, init.basename, pendingActionData, pendingError); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(rf => fetchControllers.set(rf.key, pendingNavigationController));
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, {
        replace
      });
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = matchRoutes(routesToUse, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, future, opts, true);
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, detectErrorBoundary, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, {
        submission,
        isFetchActionRedirect: true
      });
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, init.basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, init.basename, {
      [match.route.id]: actionResult.data
    }, undefined // No need to send through errors since we short circuit above
    ); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, detectErrorBoundary, router.basename); // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, _temp) {
    var _window;

    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin

    if (ABSOLUTE_URL_REGEX.test(redirect.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let url = init.history.createURL(redirect.location);
      let isDifferentBasename = stripBasename(url.pathname, init.basename || "/") == null;

      if (window.location.origin !== url.origin || isDifferentBasename) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
    // state.navigation

    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation;

    if (!submission && formMethod && formAction && formData && formEncType) {
      submission = {
        formMethod,
        formAction,
        formEncType,
        formData
      };
    } // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location


    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, submission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else if (isFetchActionRedirect) {
      // For a fetch action redirect, we kick off a new loading navigation
      // without the fetcher submission, but we send it along for shouldRevalidate
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined
        },
        fetcherSubmission: submission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: submission ? submission.formMethod : undefined,
          formAction: submission ? submission.formAction : undefined,
          formEncType: submission ? submission.formEncType : undefined,
          formData: submission ? submission.formData : undefined
        },
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, detectErrorBoundary, router.basename)), ...fetchersToLoad.map(f => {
      if (f.matches && f.match) {
        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, manifest, detectErrorBoundary, router.basename);
      } else {
        let error = {
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        };
        return error;
      }
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;

    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }

    return blocker;
  }

  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  } // Utility function to update blockers, ensuring valid state transitions


  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    state.blockers.set(key, newBlocker);
    updateState({
      blockers: new Map(state.blockers)
    });
  }

  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;

    if (blockerFunctions.size === 0) {
      return;
    } // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet


    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }

    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);

    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    } // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function


    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  function _internalSetRoutes(newRoutes) {
    inFlightDataRoutes = newRoutes;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let detectErrorBoundary = (opts == null ? void 0 : opts.detectErrorBoundary) || defaultDetectErrorBoundary;
  let dataRoutes = convertRoutesToDataRoutes(routes, detectErrorBoundary, undefined, manifest);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }

    if (result.loaderData) {
      var _result$activeDeferre;

      let data = Object.values(result.loaderData)[0];

      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }

      return data;
    }

    return undefined;
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, detectErrorBoundary, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, detectErrorBoundary, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    } // Process and commit output from loaders


    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client

    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, future, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    let formMethod = opts.formMethod || "get";
    submission = {
      formMethod: future.v7_normalizeFormMethod ? formMethod.toUpperCase() : formMethod.toLowerCase(),
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);
  let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
  // navigation GET submissions which run all loaders), we need to preserve
  // any incoming ?index params

  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }

  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let defaultShouldRevalidate = // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }

    if (match.route.loader == null) {
      return false;
    } // Always call the loader on new route instances and pending defer cancellations


    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    } // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases


    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  }); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate if fetcher won't be present in the subsequent render
    if (!matches.some(m => m.route.id === f.routeId)) {
      return;
    }

    let fetcherMatches = matchRoutes(routesToUse, f.path, basename); // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData

    if (!fetcherMatches) {
      revalidatingFetchers.push(_extends({
        key
      }, f, {
        matches: null,
        match: null
      }));
      return;
    }

    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);

    if (cancelledFetcherLoads.includes(key)) {
      revalidatingFetchers.push(_extends({
        key,
        matches: fetcherMatches,
        match: fetcherMatch
      }, f));
      return;
    } // Revalidating fetchers are decoupled from the route matches since they
    // hit a static href, so they _always_ check shouldRevalidate and the
    // default is strictly if a revalidation is explicitly required (action
    // submissions, useRevalidator, X-Remix-Revalidate).


    let shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
      currentUrl,
      currentParams: state.matches[state.matches.length - 1].params,
      nextUrl,
      nextParams: matches[matches.length - 1].params
    }, submission, {
      actionResult,
      defaultShouldRevalidate
    }));

    if (shouldRevalidate) {
      revalidatingFetchers.push(_extends({
        key,
        matches: fetcherMatches,
        match: fetcherMatch
      }, f));
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */


async function loadLazyRouteModule(route, detectErrorBoundary, manifest) {
  if (!route.lazy) {
    return;
  }

  let lazyRoute = await route.lazy(); // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static

  if (!route.lazy) {
    return;
  }

  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest"); // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.

  let routeUpdates = {};

  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));

    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  } // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to detectErrorBoundary


  Object.assign(routeToUpdate, routeUpdates); // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.

  Object.assign(routeToUpdate, {
    // To keep things framework agnostic, we use the provided
    // `detectErrorBoundary` function to set the `hasErrorBoundary` route
    // property since the logic will differ between frameworks.
    hasErrorBoundary: detectErrorBoundary(_extends({}, routeToUpdate)),
    lazy: undefined
  });
}

async function callLoaderOrAction(type, request, match, matches, manifest, detectErrorBoundary, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result;
  let onReject;

  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);

    onReject = () => reject();

    request.signal.addEventListener("abort", onReject);
    return Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
  };

  try {
    let handler = match.route[type];

    if (match.route.lazy) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let values = await Promise.all([runHandler(handler), loadLazyRouteModule(match.route, detectErrorBoundary, manifest)]);
        result = values[0];
      } else {
        // Load lazy route module, then run any returned handler
        await loadLazyRouteModule(match.route, detectErrorBoundary, manifest);
        handler = match.route[type];

        if (handler) {
          // Handler still run even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          throw getInternalRouterError(405, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            data: undefined
          };
        }
      }
    } else {
      invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
      result = await runHandler(handler);
    }

    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects

      if (!ABSOLUTE_URL_REGEX.test(location)) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
        }

        location = createPath(resolvedLocation);
      } else if (!isStaticRequest) {
        // Strip off the protocol+origin for same-origin + same-basename absolute
        // redirects. If this is a static request, we can let it go back to the
        // browser as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
        let isSameBasename = stripBasename(url.pathname, basename) != null;

        if (url.origin === currentUrl.origin && isSameBasename) {
          location = url.pathname + url.search + url.hash;
        }
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (isDeferredData(result)) {
    var _result$init, _result$init2;

    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission; // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method

    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, value instanceof File ? value.name : value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      } // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.


      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}

function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index]; // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR

    if (!match) {
      continue;
    }

    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion


//# sourceMappingURL=router.js.map


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* binding */ Await),
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Navigate": () => (/* binding */ Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action),
/* harmony export */   "Outlet": () => (/* binding */ Outlet),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "RouterProvider": () => (/* binding */ RouterProvider),
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* binding */ DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* binding */ DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* binding */ LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* binding */ NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* binding */ RouteContext),
/* harmony export */   "UNSAFE_detectErrorBoundary": () => (/* binding */ detectErrorBoundary),
/* harmony export */   "createMemoryRouter": () => (/* binding */ createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "defer": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.redirect),
/* harmony export */   "renderMatches": () => (/* binding */ renderMatches),
/* harmony export */   "resolvePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolvePath),
/* harmony export */   "unstable_useBlocker": () => (/* binding */ useBlocker),
/* harmony export */   "useActionData": () => (/* binding */ useActionData),
/* harmony export */   "useAsyncError": () => (/* binding */ useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* binding */ useAsyncValue),
/* harmony export */   "useHref": () => (/* binding */ useHref),
/* harmony export */   "useInRouterContext": () => (/* binding */ useInRouterContext),
/* harmony export */   "useLoaderData": () => (/* binding */ useLoaderData),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "useMatches": () => (/* binding */ useMatches),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useNavigation": () => (/* binding */ useNavigation),
/* harmony export */   "useNavigationType": () => (/* binding */ useNavigationType),
/* harmony export */   "useOutlet": () => (/* binding */ useOutlet),
/* harmony export */   "useOutletContext": () => (/* binding */ useOutletContext),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useResolvedPath": () => (/* binding */ useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* binding */ useRevalidator),
/* harmony export */   "useRouteError": () => (/* binding */ useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* binding */ useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = react__WEBPACK_IMPORTED_MODULE_1__;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if (true) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that " + "does not support useSyncExternalStore. The " + "use-sync-external-store shim will not work correctly. Upgrade " + "to a newer pre-release.");
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();

      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
const useSyncExternalStore = true ? (module => module.useSyncExternalStore)(react__WEBPACK_IMPORTED_MODULE_1__) : shim;

const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let dataRouterStateContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (process.env.NODE_ENV !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes)(routes, {
    pathname: remainingPathname
  });

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : void 0;
  }

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action.Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;

  if (process.env.NODE_ENV !== "production") {
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " prop on\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      style: codeStyles
    }, "<Route>")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}

class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "Could not find a matching route for the current errors: " + errors) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = null;

    if (dataRouterState) {
      if (match.route.ErrorBoundary) {
        errorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(match.route.ErrorBoundary, null);
      } else if (match.route.errorElement) {
        errorElement = match.route.errorElement;
      } else {
        errorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DefaultErrorComponent, null);
      }
    }

    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

    let getChildren = () => {
      let children = outlet;

      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches
        },
        children: children
      });
    }; // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement


    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return state;
}

function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return route;
}

function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */


function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => matches.map(match => {
    let {
      pathname,
      params
    } = match; // Note: This structure matches that created by createUseMatchesMatch
    // in the @remix-run/router , so if you change this please also change
    // that :)  Eventually we'll DRY this up

    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);

  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }

  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state


  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_1__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_1__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */

function useBlocker(shouldBlock) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => String(++blockerId));
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(args => {
    return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
  }, [shouldBlock]);
  let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => () => router.deleteBlocker(blockerKey), [router, blockerKey]); // Prefer the blocker from state since DataRouterContext is memoized so this
  // ensures we update on blocker state updates

  return state.blockers.get(blockerKey) || blocker;
}
const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(false, message) : void 0;
  }
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router
  } = _ref;
  let getState = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => router.state, [router]); // Sync router state to our component state to force re-renders

  let state = useSyncExternalStore(router.subscribe, getState, // We have to provide this so React@18 doesn't complain during hydration,
  // but we pass our serialized hydration data into the router so state here
  // is already synced with what the server saw
  getState);
  let navigator = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]); // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Routes, null) : fallbackElement))), null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref2) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref3;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(!react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let dataRouterState = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  let navigate = useNavigate();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }

    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.stripBasename)(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (locationContext == null) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref6) {
  let {
    children,
    errorElement,
    resolve
  } = _ref6;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

const neverSettledPromise = new Promise(() => {});

class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }

  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;

    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }

    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }

    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }

    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }

    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    } // Throw to the suspense boundary


    throw promise;
  }

}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */


function ResolveAwait(_ref7) {
  let {
    children
  } = _ref7;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    let treePath = [...parentPath, index];

    if (element.type === react__WEBPACK_IMPORTED_MODULE_1__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }

    !(element.type === Route) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    !(!element.props.index || !element.props.children) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_invariant)(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}

function detectErrorBoundary(route) {
  if (process.env.NODE_ENV !== "production") {
    if (route.Component && route.element) {
      process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`element` will be ignored.") : void 0;
    }

    if (route.ErrorBoundary && route.errorElement) {
      process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`errorElement` will be ignored.") : void 0;
    }
  } // Note: this check also occurs in createRoutesFromChildren so update
  // there if you change this


  return Boolean(route.ErrorBoundary) || Boolean(route.errorElement);
}

function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: opts == null ? void 0 : opts.future,
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    detectErrorBoundary
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.Provider),
/* harmony export */   "ReactReduxContext": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.ReactReduxContext),
/* harmony export */   "batch": () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates),
/* harmony export */   "connect": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.connect),
/* harmony export */   "createDispatchHook": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createDispatchHook),
/* harmony export */   "createSelectorHook": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createSelectorHook),
/* harmony export */   "createStoreHook": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   "shallowEqual": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.shallowEqual),
/* harmony export */   "useDispatch": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useDispatch),
/* harmony export */   "useSelector": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useSelector),
/* harmony export */   "useStore": () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.






(0,_hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.initializeUseSelector)(use_sync_external_store_shim_with_selector__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStoreWithSelector);
(0,_components_connect__WEBPACK_IMPORTED_MODULE_5__.initializeConnect)(use_sync_external_store_shim__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_3__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_2__.unstable_batchedUpdates);



/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(40);
} else {
  module.exports = __webpack_require__(41);
}


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(24);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(24);

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

// dispatch for CommonJS interop named imports.

var useState = React.useState,
    useEffect = React.useEffect,
    useLayoutEffect = React.useLayoutEffect,
    useDebugValue = React.useDebugValue;
var didWarnOld18Alpha = false;
var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  {
    if (!didWarnOld18Alpha) {
      if (React.startTransition !== undefined) {
        didWarnOld18Alpha = true;

        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  var value = getSnapshot();

  {
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();

      if (!objectIs(value, cachedValue)) {
        error('The result of getSnapshot should be cached to avoid an infinite loop');

        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  var _useState = useState({
    inst: {
      value: value,
      getSnapshot: getSnapshot
    }
  }),
      inst = _useState[0].inst,
      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.


  useLayoutEffect(function () {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(function () {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst: inst
      });
    }

    var handleStoreChange = function () {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst: inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  var prevValue = inst.value;

  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

var isServerEnvironment = !canUseDOM;

var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

exports.useSyncExternalStore = useSyncExternalStore$2;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(43);
} else {
  module.exports = __webpack_require__(44);
}


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(24),n=__webpack_require__(39);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var React = __webpack_require__(24);
var shim = __webpack_require__(39);

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var useSyncExternalStore = shim.useSyncExternalStore;

// for CommonJS interop.

var useRef = React.useRef,
    useEffect = React.useEffect,
    useMemo = React.useMemo,
    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  // Use this to track the rendered snapshot.
  var instRef = useRef(null);
  var inst;

  if (instRef.current === null) {
    inst = {
      hasValue: false,
      value: null
    };
    instRef.current = inst;
  } else {
    inst = instRef.current;
  }

  var _useMemo = useMemo(function () {
    // Track the memoized state using closure variables that are local to this
    // memoized instance of a getSnapshot function. Intentionally not using a
    // useRef hook, because that state would be shared across all concurrent
    // copies of the hook/component.
    var hasMemo = false;
    var memoizedSnapshot;
    var memoizedSelection;

    var memoizedSelector = function (nextSnapshot) {
      if (!hasMemo) {
        // The first time the hook is called, there is no memoized result.
        hasMemo = true;
        memoizedSnapshot = nextSnapshot;

        var _nextSelection = selector(nextSnapshot);

        if (isEqual !== undefined) {
          // Even if the selector has changed, the currently rendered selection
          // may be equal to the new selection. We should attempt to reuse the
          // current value if possible, to preserve downstream memoizations.
          if (inst.hasValue) {
            var currentSelection = inst.value;

            if (isEqual(currentSelection, _nextSelection)) {
              memoizedSelection = currentSelection;
              return currentSelection;
            }
          }
        }

        memoizedSelection = _nextSelection;
        return _nextSelection;
      } // We may be able to reuse the previous invocation's result.


      // We may be able to reuse the previous invocation's result.
      var prevSnapshot = memoizedSnapshot;
      var prevSelection = memoizedSelection;

      if (objectIs(prevSnapshot, nextSnapshot)) {
        // The snapshot is the same as last time. Reuse the previous selection.
        return prevSelection;
      } // The snapshot has changed, so we need to compute a new selection.


      // The snapshot has changed, so we need to compute a new selection.
      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.

      // If a custom isEqual function is provided, use that to check if the data
      // has changed. If it hasn't, return the previous selection. That signals
      // to React that the selections are conceptually equal, and we can bail
      // out of rendering.
      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
        return prevSelection;
      }

      memoizedSnapshot = nextSnapshot;
      memoizedSelection = nextSelection;
      return nextSelection;
    }; // Assigning this to a constant so that Flow knows it can't change.


    // Assigning this to a constant so that Flow knows it can't change.
    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

    var getSnapshotWithSelector = function () {
      return memoizedSelector(getSnapshot());
    };

    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
      return memoizedSelector(maybeGetServerSnapshot());
    };
    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
      getSelection = _useMemo[0],
      getServerSelection = _useMemo[1];

  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
  useEffect(function () {
    inst.hasValue = true;
    inst.value = value;
  }, [value]);
  useDebugValue(value);
  return value;
}

exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unstable_batchedUpdates": () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBatch": () => (/* binding */ getBatch),
/* harmony export */   "setBatch": () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

const getBatch = () => batch;

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectorHook": () => (/* binding */ createSelectorHook),
/* harmony export */   "initializeUseSelector": () => (/* binding */ initializeUseSelector),
/* harmony export */   "useSelector": () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* provided dependency */ var process = __webpack_require__(9);




let useSyncExternalStoreWithSelector = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_3__.notInitialized;
const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext) {
  const useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  return function useSelector(selector, equalityFn = refEquality) {
    if (process.env.NODE_ENV !== 'production') {
      if (!selector) {
        throw new Error(`You must pass a selector to useSelector`);
      }

      if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useSelector`);
      }

      if (typeof equalityFn !== 'function') {
        throw new Error(`You must pass a function as an equality function to useSelector`);
      }
    }

    const {
      store,
      subscription,
      getServerState
    } = useReduxContext();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

const useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useReduxContext": () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* provided dependency */ var process = __webpack_require__(9);



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if (process.env.NODE_ENV !== 'production' && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactReduxContext": () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var process = __webpack_require__(9);

const ReactReduxContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (process.env.NODE_ENV !== 'production') {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "notInitialized": () => (/* binding */ notInitialized)
/* harmony export */ });
const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initializeConnect": () => (/* binding */ initializeConnect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony import */ var _connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64);
/* harmony import */ var _connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72);
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49);
/* harmony import */ var _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50);
/* provided dependency */ var process = __webpack_require__(9);


const _excluded = ["reactReduxForwardedRef"];

/* eslint-disable valid-jsdoc, @typescript-eslint/no-unused-vars */













let useSyncExternalStore = _utils_useSyncExternalStore__WEBPACK_IMPORTED_MODULE_14__.notInitialized;
const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these

const EMPTY_ARRAY = [null, 0];
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areStatePropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  areMergedPropsEqual = _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_11__["default"],
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = _Context__WEBPACK_IMPORTED_MODULE_13__.ReactReduxContext
} = {}) {
  if (process.env.NODE_ENV !== 'production') {
    if (pure !== undefined && !hasWarnedAboutDeprecatedPureOption) {
      hasWarnedAboutDeprecatedPureOption = true;
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_12__["default"])('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
    }
  }

  const Context = context;
  const initMapStateToProps = (0,_connect_mapStateToProps__WEBPACK_IMPORTED_MODULE_7__.mapStateToPropsFactory)(mapStateToProps);
  const initMapDispatchToProps = (0,_connect_mapDispatchToProps__WEBPACK_IMPORTED_MODULE_6__.mapDispatchToPropsFactory)(mapDispatchToProps);
  const initMergeProps = (0,_connect_mergeProps__WEBPACK_IMPORTED_MODULE_8__.mergePropsFactory)(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (process.env.NODE_ENV !== 'production' && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (process.env.NODE_ENV !== 'production' && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error(`Could not find "store" in the context of ` + `"${displayName}". Either wrap the root component in a <Provider>, ` + `or pass a custom React context provider to <Provider> and the corresponding ` + `React context consumer to ${displayName} in connect options.`);
      } // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return (0,_connect_selectorFactory__WEBPACK_IMPORTED_MODULE_5__["default"])(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_9__.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      const lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      const childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      const renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      const isProcessingDispatch = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      const latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_10__.useIsomorphicLayoutEffect)(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);

/***/ }),
/* 52 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),
/* 53 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var reactIs = __webpack_require__(55);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 55 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(56);
} else {
  module.exports = __webpack_require__(57);
}


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),
/* 58 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(59);
} else {
  module.exports = __webpack_require__(60);
}


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_SERVER_CONTEXT_TYPE:
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}
function isSuspenseList(object) {
  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.SuspenseList = SuspenseList;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isSuspenseList = isSuspenseList;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   "pureFinalPropsSelectorFactory": () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* provided dependency */ var process = __webpack_require__(9);

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);

  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps);
  }

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);


function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, 'mapStateToProps');
  verify(mapDispatchToProps, 'mapDispatchToProps');
  verify(mergeProps, 'mergeProps');
}

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDispatchToPropsFactory": () => (/* binding */ mapDispatchToPropsFactory)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);



function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDependsOnOwnProps": () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   "wrapMapToPropsConstant": () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   "wrapMapToPropsFunc": () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* provided dependency */ var process = __webpack_require__(9);

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInvalidArgFactory": () => (/* binding */ createInvalidArgFactory)
/* harmony export */ });
function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStateToPropsFactory": () => (/* binding */ mapStateToPropsFactory)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);


function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_1__.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMergeProps": () => (/* binding */ defaultMergeProps),
/* harmony export */   "mergePropsFactory": () => (/* binding */ mergePropsFactory),
/* harmony export */   "wrapMergePropsFunc": () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* provided dependency */ var process = __webpack_require__(9);



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (process.env.NODE_ENV !== 'production') (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0,_invalidArgFactory__WEBPACK_IMPORTED_MODULE_2__.createInvalidArgFactory)(mergeProps, 'mergeProps');
}

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubscription": () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  const batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canUseDOM": () => (/* binding */ canUseDOM),
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file

const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Provider": () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "ReactReduxContext": () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   "connect": () => (/* reexport safe */ _components_connect__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "createDispatchHook": () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.createDispatchHook),
/* harmony export */   "createSelectorHook": () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.createSelectorHook),
/* harmony export */   "createStoreHook": () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.createStoreHook),
/* harmony export */   "shallowEqual": () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "useDispatch": () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__.useDispatch),
/* harmony export */   "useSelector": () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__.useSelector),
/* harmony export */   "useStore": () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77);
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);










/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);





function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined
    };
  }, [store, serverState]);
  const previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => store.getState(), [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDispatchHook": () => (/* binding */ createDispatchHook),
/* harmony export */   "useDispatch": () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

const useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStoreHook": () => (/* binding */ createStoreHook),
/* harmony export */   "useStore": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

const useStore = /*#__PURE__*/createStoreHook();

/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ })
]),
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0d6130127dbd5cd86bc0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FB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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7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R0FBRywrQ0FBZSxHQUFHLDBEQUFlO0FBQ25FO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakMsWUFBWSxjQUFjO0FBQzFCO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQSwwREFBMEQsMEJBQTBCO0FBQ3BGO0FBQ0E7QUFDQSxnQkFBZ0IsTUFBTTtBQUN0QiwwQkFBMEIsZ0JBQWdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7QUN4QzRCO0FBQ3VCO0FBQ29CO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLFVBQVU7QUFDdkI7O0FBRU8sbUNBQW1DLGtFQUFpQjtBQUMzRDtBQUNBLGNBQWMsa0VBQWlCLEdBQUcsNkRBQXNCLFNBQVMsaURBQVU7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxQkFBcUI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7O1VDckNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vcm91dGVyL2Rpc3Qvcm91dGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iYXRjaC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVJlZHV4Q29udGV4dC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9jb25uZWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvc2VsZWN0b3JGYWN0b3J5LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvaW52YWxpZEFyZ0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21lcmdlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9leHBvcnRzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL1Byb3ZpZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8UHJvdmlkZXI+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cblxuICAgIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgbWFpbjoge1xuICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIlxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBoYXMtc2hhZG93IGlzLXNwYWNlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gdGl0bGUgaXMtNFwiPlR3b2plUHJ6ZXBpc3kucGw8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3JlY2lwZXNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaGFzLXRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZvbGRlclwiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+UHJ6ZXBpc3k8L3NwYW4+XG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcHJvZHVjdHNcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaGFzLXRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlByb2R1a3R5PC9zcGFuPlxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLWZpZnRoXCI+XG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjRyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIn19PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICBQb2RzdHJvbnlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9cIn0gZXhhY3QgYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5TdHJvbmEgZ8WCw7N3bmE8L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzXCJ9IGV4YWN0IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJ6ZXBpc3k8L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0c1wifSBleGFjdCBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PlByb2R1a3R5PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxuICAgICAgICAgICAgICBBa2NqZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3JlY2lwZXMvYWRkXCJ9IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+RG9kYWogUHJ6ZXBpczwvTmF2TGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzL2FkZFwifSBhY3RpdmVDbGFzc05hbWU9e1wiaXMtYWN0aXZlXCJ9PkRvZGFqIFByb2R1a3Q8L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mb3VyLWZpZnRoc1wiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCIvKipcbiAqIFJlYWN0IFJvdXRlciBET00gdjYuMTAuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeSwgUm91dGVyLCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIHVzZUhyZWYsIHVzZVJlc29sdmVkUGF0aCwgdXNlTG9jYXRpb24sIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgY3JlYXRlUGF0aCwgVU5TQUZFX1JvdXRlQ29udGV4dCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGlvbiwgdW5zdGFibGVfdXNlQmxvY2tlciwgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgTmF2aWdhdGlvblR5cGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlcywgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0LCBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBVTlNBRkVfUm91dGVDb250ZXh0LCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVuZGVyTWF0Y2hlcywgcmVzb2x2ZVBhdGgsIHVuc3RhYmxlX3VzZUJsb2NrZXIsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgRXJyb3JSZXNwb25zZSwgc3RyaXBCYXNlbmFtZSwgVU5TQUZFX3dhcm5pbmcsIFVOU0FGRV9pbnZhcmlhbnQsIGpvaW5QYXRocyB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuY29uc3QgZGVmYXVsdE1ldGhvZCA9IFwiZ2V0XCI7XG5jb25zdCBkZWZhdWx0RW5jVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5mdW5jdGlvbiBpc0h0bWxFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdC50YWdOYW1lID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNCdXR0b25FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYnV0dG9uXCI7XG59XG5mdW5jdGlvbiBpc0Zvcm1FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZm9ybVwiO1xufVxuZnVuY3Rpb24gaXNJbnB1dEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICA7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuXG4gIGlmIChkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXMua2V5cygpKSB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmdldEFsbChrZXkpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5mdW5jdGlvbiBnZXRGb3JtU3VibWlzc2lvbkluZm8odGFyZ2V0LCBkZWZhdWx0QWN0aW9uLCBvcHRpb25zKSB7XG4gIGxldCBtZXRob2Q7XG4gIGxldCBhY3Rpb247XG4gIGxldCBlbmNUeXBlO1xuICBsZXQgZm9ybURhdGE7XG5cbiAgaWYgKGlzRm9ybUVsZW1lbnQodGFyZ2V0KSkge1xuICAgIGxldCBzdWJtaXNzaW9uVHJpZ2dlciA9IG9wdGlvbnMuc3VibWlzc2lvblRyaWdnZXI7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG5cbiAgICBpZiAoc3VibWlzc2lvblRyaWdnZXIgJiYgc3VibWlzc2lvblRyaWdnZXIubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHN1Ym1pc3Npb25UcmlnZ2VyLm5hbWUsIHN1Ym1pc3Npb25UcmlnZ2VyLnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdXR0b25FbGVtZW50KHRhcmdldCkgfHwgaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSAmJiAodGFyZ2V0LnR5cGUgPT09IFwic3VibWl0XCIgfHwgdGFyZ2V0LnR5cGUgPT09IFwiaW1hZ2VcIikpIHtcbiAgICBsZXQgZm9ybSA9IHRhcmdldC5mb3JtO1xuXG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiPiB3aXRob3V0IGEgPGZvcm0+XCIpO1xuICAgIH0gLy8gPGJ1dHRvbj4vPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gbWF5IG92ZXJyaWRlIGF0dHJpYnV0ZXMgb2YgPGZvcm0+XG5cblxuICAgIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IGRlZmF1bHRNZXRob2Q7XG4gICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1hY3Rpb25cIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtZW5jdHlwZVwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7IC8vIEluY2x1ZGUgbmFtZSArIHZhbHVlIGZyb20gYSA8YnV0dG9uPiwgYXBwZW5kaW5nIGluIGNhc2UgdGhlIGJ1dHRvbiBuYW1lXG4gICAgLy8gbWF0Y2hlcyBhbiBleGlzdGluZyBpbnB1dCBuYW1lXG5cbiAgICBpZiAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXQubmFtZSwgdGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNIdG1sRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBlbGVtZW50IHRoYXQgaXMgbm90IDxmb3JtPiwgPGJ1dHRvbj4sIG9yIFwiICsgXCI8aW5wdXQgdHlwZT1cXFwic3VibWl0fGltYWdlXFxcIj5cIik7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBkZWZhdWx0QWN0aW9uO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgZGVmYXVsdEVuY1R5cGU7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGZvcm1EYXRhID0gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgdGFyZ2V0KSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdGFyZ2V0W25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCB7XG4gICAgcHJvdG9jb2wsXG4gICAgaG9zdFxuICB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBsZXQgdXJsID0gbmV3IFVSTChhY3Rpb24sIHByb3RvY29sICsgXCIvL1wiICsgaG9zdCk7XG4gIHJldHVybiB7XG4gICAgdXJsLFxuICAgIG1ldGhvZDogbWV0aG9kLnRvTG93ZXJDYXNlKCksXG4gICAgZW5jVHlwZSxcbiAgICBmb3JtRGF0YVxuICB9O1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJvbkNsaWNrXCIsIFwicmVsYXRpdmVcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcImFyaWEtY3VycmVudFwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJlbmRcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiY2hpbGRyZW5cIl0sXG4gICAgICBfZXhjbHVkZWQzID0gW1wicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwibWV0aG9kXCIsIFwiYWN0aW9uXCIsIFwib25TdWJtaXRcIiwgXCJmZXRjaGVyS2V5XCIsIFwicm91dGVJZFwiLCBcInJlbGF0aXZlXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdO1xuZnVuY3Rpb24gY3JlYXRlQnJvd3NlclJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3c6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMud2luZG93XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSkgfHwgcGFyc2VIeWRyYXRpb25EYXRhKCksXG4gICAgcm91dGVzLFxuICAgIGRldGVjdEVycm9yQm91bmRhcnk6IFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5XG4gIH0pLmluaXRpYWxpemUoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmJhc2VuYW1lLFxuICAgIGZ1dHVyZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mdXR1cmUsXG4gICAgaGlzdG9yeTogY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlcyxcbiAgICBkZXRlY3RFcnJvckJvdW5kYXJ5OiBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeVxuICB9KS5pbml0aWFsaXplKCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHlkcmF0aW9uRGF0YSgpIHtcbiAgdmFyIF93aW5kb3c7XG5cbiAgbGV0IHN0YXRlID0gKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YTtcblxuICBpZiAoc3RhdGUgJiYgc3RhdGUuZXJyb3JzKSB7XG4gICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgIGVycm9yczogZGVzZXJpYWxpemVFcnJvcnMoc3RhdGUuZXJyb3JzKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9ycyhlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMpIHJldHVybiBudWxsO1xuICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGVycm9ycyk7XG4gIGxldCBzZXJpYWxpemVkID0ge307XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBlbnRyaWVzKSB7XG4gICAgLy8gSGV5IHlvdSEgIElmIHlvdSBjaGFuZ2UgdGhpcywgcGxlYXNlIGNoYW5nZSB0aGUgY29ycmVzcG9uZGluZyBsb2dpYyBpblxuICAgIC8vIHNlcmlhbGl6ZUVycm9ycyBpbiByZWFjdC1yb3V0ZXItZG9tL3NlcnZlci50c3ggOilcbiAgICBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiUm91dGVFcnJvclJlc3BvbnNlXCIpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IG5ldyBFcnJvclJlc3BvbnNlKHZhbC5zdGF0dXMsIHZhbC5zdGF0dXNUZXh0LCB2YWwuZGF0YSwgdmFsLmludGVybmFsID09PSB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIkVycm9yXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcih2YWwubWVzc2FnZSk7IC8vIFdpcGUgYXdheSB0aGUgY2xpZW50LXNpZGUgc3RhY2sgdHJhY2UuICBOb3RoaW5nIHRvIGZpbGwgaXQgaW4gd2l0aFxuICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBzZXJpYWxpemUgU1NSIHN0YWNrIHRyYWNlcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuXG4gICAgICBlcnJvci5zdGFjayA9IFwiXCI7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICovXG5cblxuZnVuY3Rpb24gQnJvd3NlclJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdyxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuXG5mdW5jdGlvbiBIYXNoUm91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCB0aGF0IGFjY2VwdHMgYSBwcmUtaW5zdGFudGlhdGVkIGhpc3Rvcnkgb2JqZWN0LiBJdCdzIGltcG9ydGFudFxuICogdG8gbm90ZSB0aGF0IHVzaW5nIHlvdXIgb3duIGhpc3Rvcnkgb2JqZWN0IGlzIGhpZ2hseSBkaXNjb3VyYWdlZCBhbmQgbWF5IGFkZFxuICogdHdvIHZlcnNpb25zIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdG8geW91ciBidW5kbGVzIHVubGVzcyB5b3UgdXNlIHRoZSBzYW1lXG4gKiB2ZXJzaW9uIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdGhhdCBSZWFjdCBSb3V0ZXIgdXNlcyBpbnRlcm5hbGx5LlxuICovXG5cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmMztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhpc3RvcnlSb3V0ZXIuZGlzcGxheU5hbWUgPSBcInVuc3RhYmxlX0hpc3RvcnlSb3V0ZXJcIjtcbn1cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBBQlNPTFVURV9VUkxfUkVHRVggPSAvXig/OlthLXpdW2EtejAtOSsuLV0qOnxcXC9cXC8pL2k7XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5jb25zdCBMaW5rID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua1dpdGhSZWYoX3JlZjQsIHJlZikge1xuICBsZXQge1xuICAgIG9uQ2xpY2ssXG4gICAgcmVsYXRpdmUsXG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgdG8sXG4gICAgcHJldmVudFNjcm9sbFJlc2V0XG4gIH0gPSBfcmVmNCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcblxuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7IC8vIFJlbmRlcmVkIGludG8gPGEgaHJlZj4gZm9yIGFic29sdXRlIFVSTHNcblxuICBsZXQgYWJzb2x1dGVIcmVmO1xuICBsZXQgaXNFeHRlcm5hbCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgJiYgQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QodG8pKSB7XG4gICAgLy8gUmVuZGVyIHRoZSBhYnNvbHV0ZSBocmVmIHNlcnZlci0gYW5kIGNsaWVudC1zaWRlXG4gICAgYWJzb2x1dGVIcmVmID0gdG87IC8vIE9ubHkgY2hlY2sgZm9yIGV4dGVybmFsIG9yaWdpbnMgY2xpZW50LXNpZGVcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICBsZXQgdGFyZ2V0VXJsID0gdG8uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgdG8pIDogbmV3IFVSTCh0byk7XG4gICAgICBsZXQgcGF0aCA9IHN0cmlwQmFzZW5hbWUodGFyZ2V0VXJsLnBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRVcmwub3JpZ2luID09PSBjdXJyZW50VXJsLm9yaWdpbiAmJiBwYXRoICE9IG51bGwpIHtcbiAgICAgICAgLy8gU3RyaXAgdGhlIHByb3RvY29sL29yaWdpbi9iYXNlbmFtZSBmb3Igc2FtZS1vcmlnaW4gYWJzb2x1dGUgVVJMc1xuICAgICAgICB0byA9IHBhdGggKyB0YXJnZXRVcmwuc2VhcmNoICsgdGFyZ2V0VXJsLmhhc2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0V4dGVybmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgcmVsYXRpdmUgVVJMc1xuXG5cbiAgbGV0IGhyZWYgPSB1c2VIcmVmKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBpbnRlcm5hbE9uQ2xpY2sgPSB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBpbnRlcm5hbE9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogYWJzb2x1dGVIcmVmIHx8IGhyZWYsXG4gICAgICBvbkNsaWNrOiBpc0V4dGVybmFsIHx8IHJlbG9hZERvY3VtZW50ID8gb25DbGljayA6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiByZWYsXG4gICAgICB0YXJnZXQ6IHRhcmdldFxuICAgIH0pKVxuICApO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xufVxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuXG5cbmNvbnN0IE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZMaW5rV2l0aFJlZihfcmVmNSwgcmVmKSB7XG4gIGxldCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRQcm9wID0gXCJwYWdlXCIsXG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCA9IFwiXCIsXG4gICAgZW5kID0gZmFsc2UsXG4gICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICB0byxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIF9leGNsdWRlZDIpO1xuXG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmU6IHJlc3QucmVsYXRpdmVcbiAgfSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgdG9QYXRobmFtZSA9IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihwYXRoKS5wYXRobmFtZSA6IHBhdGgucGF0aG5hbWU7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuXG4gIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgIGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV4dExvY2F0aW9uUGF0aG5hbWUgPSBuZXh0TG9jYXRpb25QYXRobmFtZSA/IG5leHRMb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICAgIHRvUGF0aG5hbWUgPSB0b1BhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBsZXQgaXNBY3RpdmUgPSBsb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbG9jYXRpb25QYXRobmFtZS5zdGFydHNXaXRoKHRvUGF0aG5hbWUpICYmIGxvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCI7XG4gIGxldCBpc1BlbmRpbmcgPSBuZXh0TG9jYXRpb25QYXRobmFtZSAhPSBudWxsICYmIChuZXh0TG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIG5leHRMb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCIpO1xuICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHVuZGVmaW5lZDtcbiAgbGV0IGNsYXNzTmFtZTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc1BlbmRpbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGwsIGlzUGVuZGluZyA/IFwicGVuZGluZ1wiIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgbGV0IHN0eWxlID0gdHlwZW9mIHN0eWxlUHJvcCA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGVQcm9wKHtcbiAgICBpc0FjdGl2ZSxcbiAgICBpc1BlbmRpbmdcbiAgfSkgOiBzdHlsZVByb3A7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB0bzogdG9cbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oe1xuICAgIGlzQWN0aXZlLFxuICAgIGlzUGVuZGluZ1xuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbn1cbi8qKlxuICogQSBgQHJlbWl4LXJ1bi9yb3V0ZXJgLWF3YXJlIGA8Zm9ybT5gLiBJdCBiZWhhdmVzIGxpa2UgYSBub3JtYWwgZm9ybSBleGNlcHRcbiAqIHRoYXQgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIHNlcnZlciBpcyB3aXRoIGBmZXRjaGAgaW5zdGVhZCBvZiBuZXcgZG9jdW1lbnRcbiAqIHJlcXVlc3RzLCBhbGxvd2luZyBjb21wb25lbnRzIHRvIGFkZCBuaWNlciBVWCB0byB0aGUgcGFnZSBhcyB0aGUgZm9ybSBpc1xuICogc3VibWl0dGVkIGFuZCByZXR1cm5zIHdpdGggZGF0YS5cbiAqL1xuXG5cbmNvbnN0IEZvcm0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm0uZGlzcGxheU5hbWUgPSBcIkZvcm1cIjtcbn1cblxuY29uc3QgRm9ybUltcGwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoX3JlZjYsIGZvcndhcmRlZFJlZikgPT4ge1xuICBsZXQge1xuICAgIHJlbG9hZERvY3VtZW50LFxuICAgIHJlcGxhY2UsXG4gICAgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgICBhY3Rpb24sXG4gICAgb25TdWJtaXQsXG4gICAgZmV0Y2hlcktleSxcbiAgICByb3V0ZUlkLFxuICAgIHJlbGF0aXZlLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICB9ID0gX3JlZjYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY2LCBfZXhjbHVkZWQzKTtcblxuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZvcm1NZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gXCJnZXRcIiA/IFwiZ2V0XCIgOiBcInBvc3RcIjtcbiAgbGV0IGZvcm1BY3Rpb24gPSB1c2VGb3JtQWN0aW9uKGFjdGlvbiwge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGxldCBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdHRlciA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnN1Ym1pdHRlcjtcbiAgICBsZXQgc3VibWl0TWV0aG9kID0gKHN1Ym1pdHRlciA9PSBudWxsID8gdm9pZCAwIDogc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikpIHx8IG1ldGhvZDtcbiAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgIG1ldGhvZDogc3VibWl0TWV0aG9kLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBmb3J3YXJkZWRSZWYsXG4gICAgbWV0aG9kOiBmb3JtTWV0aG9kLFxuICAgIGFjdGlvbjogZm9ybUFjdGlvbixcbiAgICBvblN1Ym1pdDogcmVsb2FkRG9jdW1lbnQgPyBvblN1Ym1pdCA6IHN1Ym1pdEhhbmRsZXJcbiAgfSwgcHJvcHMpKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm1JbXBsLmRpc3BsYXlOYW1lID0gXCJGb3JtSW1wbFwiO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB3aWxsIGVtdWxhdGUgdGhlIGJyb3dzZXIncyBzY3JvbGwgcmVzdG9yYXRpb24gb24gbG9jYXRpb25cbiAqIGNoYW5nZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBTY3JvbGxSZXN0b3JhdGlvbihfcmVmNykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfcmVmNztcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24oe1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTY3JvbGxSZXN0b3JhdGlvbi5kaXNwbGF5TmFtZSA9IFwiU2Nyb2xsUmVzdG9yYXRpb25cIjtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhvb2tzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBEYXRhUm91dGVySG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVySG9vaykge1xuICBEYXRhUm91dGVySG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVN1Ym1pdEltcGxcIl0gPSBcInVzZVN1Ym1pdEltcGxcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VGZXRjaGVyXCJdID0gXCJ1c2VGZXRjaGVyXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyc1wiXSA9IFwidXNlRmV0Y2hlcnNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0KTtcbiAgIWN0eCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gY3R4O1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGUoaG9va05hbWUpIHtcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWNrIGJlaGF2aW9yIGZvciByb3V0ZXIgYDxMaW5rPmAgY29tcG9uZW50cy4gVGhpcyBpcyB1c2VmdWwgaWZcbiAqIHlvdSBuZWVkIHRvIGNyZWF0ZSBjdXN0b20gYDxMaW5rPmAgY29tcG9uZW50cyB3aXRoIHRoZSBzYW1lIGNsaWNrIGJlaGF2aW9yIHdlXG4gKiB1c2UgaW4gb3VyIGV4cG9ydGVkIGA8TGluaz5gLlxuICovXG5cblxuZnVuY3Rpb24gdXNlTGlua0NsaWNrSGFuZGxlcih0bywgX3RlbXApIHtcbiAgbGV0IHtcbiAgICB0YXJnZXQsXG4gICAgcmVwbGFjZTogcmVwbGFjZVByb3AsXG4gICAgc3RhdGUsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBpZiAoc2hvdWxkUHJvY2Vzc0xpbmtDbGljayhldmVudCwgdGFyZ2V0KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gSWYgdGhlIFVSTCBoYXNuJ3QgY2hhbmdlZCwgYSByZWd1bGFyIDxhPiB3aWxsIGRvIGEgcmVwbGFjZSBpbnN0ZWFkIG9mXG4gICAgICAvLyBhIHB1c2gsIHNvIGRvIHRoZSBzYW1lIGhlcmUgdW5sZXNzIHRoZSByZXBsYWNlIHByb3AgaXMgZXhwbGljaXRseSBzZXRcblxuICAgICAgbGV0IHJlcGxhY2UgPSByZXBsYWNlUHJvcCAhPT0gdW5kZWZpbmVkID8gcmVwbGFjZVByb3AgOiBjcmVhdGVQYXRoKGxvY2F0aW9uKSA9PT0gY3JlYXRlUGF0aChwYXRoKTtcbiAgICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIHJlbGF0aXZlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHBhdGgsIHJlcGxhY2VQcm9wLCBzdGF0ZSwgdGFyZ2V0LCB0bywgcHJldmVudFNjcm9sbFJlc2V0LCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBBIGNvbnZlbmllbnQgd3JhcHBlciBmb3IgcmVhZGluZyBhbmQgd3JpdGluZyBzZWFyY2ggcGFyYW1ldGVycyB2aWEgdGhlXG4gKiBVUkxTZWFyY2hQYXJhbXMgaW50ZXJmYWNlLlxuICovXG5cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSBcInVuZGVmaW5lZFwiLCBcIllvdSBjYW5ub3QgdXNlIHRoZSBgdXNlU2VhcmNoUGFyYW1zYCBob29rIGluIGEgYnJvd3NlciB0aGF0IGRvZXMgbm90IFwiICsgXCJzdXBwb3J0IHRoZSBVUkxTZWFyY2hQYXJhbXMgQVBJLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IEludGVybmV0IFwiICsgXCJFeHBsb3JlciAxMSwgd2UgcmVjb21tZW5kIHlvdSBsb2FkIGEgcG9seWZpbGwgc3VjaCBhcyBcIiArIFwiaHR0cHM6Ly9naXRodWIuY29tL3VuZ2FwL3VybC1zZWFyY2gtcGFyYW1zXFxuXFxuXCIgKyBcIklmIHlvdSdyZSB1bnN1cmUgaG93IHRvIGxvYWQgcG9seWZpbGxzLCB3ZSByZWNvbW1lbmQgeW91IGNoZWNrIG91dCBcIiArIFwiaHR0cHM6Ly9wb2x5ZmlsbC5pby92My8gd2hpY2ggcHJvdmlkZXMgc29tZSByZWNvbW1lbmRhdGlvbnMgYWJvdXQgaG93IFwiICsgXCJ0byBsb2FkIHBvbHlmaWxscyBvbmx5IGZvciB1c2VycyB0aGF0IG5lZWQgdGhlbSwgaW5zdGVhZCBvZiBmb3IgZXZlcnkgXCIgKyBcInVzZXIuXCIpIDogdm9pZCAwO1xuICBsZXQgZGVmYXVsdFNlYXJjaFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihjcmVhdGVTZWFyY2hQYXJhbXMoZGVmYXVsdEluaXQpKTtcbiAgbGV0IGhhc1NldFNlYXJjaFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IC8vIE9ubHkgbWVyZ2UgaW4gdGhlIGRlZmF1bHRzIGlmIHdlIGhhdmVuJ3QgeWV0IGNhbGxlZCBzZXRTZWFyY2hQYXJhbXMuXG4gIC8vIE9uY2Ugd2UgY2FsbCB0aGF0IHdlIHdhbnQgdGhvc2UgdG8gdGFrZSBwcmVjZWRlbmNlLCBvdGhlcndpc2UgeW91IGNhbid0XG4gIC8vIHJlbW92ZSBhIHBhcmFtIHdpdGggc2V0U2VhcmNoUGFyYW1zKHt9KSBpZiBpdCBoYXMgYW4gaW5pdGlhbCB2YWx1ZVxuICBnZXRTZWFyY2hQYXJhbXNGb3JMb2NhdGlvbihsb2NhdGlvbi5zZWFyY2gsIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID8gbnVsbCA6IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCksIFtsb2NhdGlvbi5zZWFyY2hdKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHNldFNlYXJjaFBhcmFtcyA9IFJlYWN0LnVzZUNhbGxiYWNrKChuZXh0SW5pdCwgbmF2aWdhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgbmV3U2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zKHR5cGVvZiBuZXh0SW5pdCA9PT0gXCJmdW5jdGlvblwiID8gbmV4dEluaXQoc2VhcmNoUGFyYW1zKSA6IG5leHRJbml0KTtcbiAgICBoYXNTZXRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgbmF2aWdhdGUoXCI/XCIgKyBuZXdTZWFyY2hQYXJhbXMsIG5hdmlnYXRlT3B0aW9ucyk7XG4gIH0sIFtuYXZpZ2F0ZSwgc2VhcmNoUGFyYW1zXSk7XG4gIHJldHVybiBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IHN1Ym1pdCBhIGZvcm0gKG9yXG4gKiBzb21lIGFyYml0cmFyeSBkYXRhKSB0byB0aGUgc2VydmVyLlxuICovXG5cbmZ1bmN0aW9uIHVzZVN1Ym1pdCgpIHtcbiAgcmV0dXJuIHVzZVN1Ym1pdEltcGwoKTtcbn1cblxuZnVuY3Rpb24gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTdWJtaXRJbXBsKTtcbiAgbGV0IGRlZmF1bHRBY3Rpb24gPSB1c2VGb3JtQWN0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgY2FsbGluZyBzdWJtaXQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLiBcIiArIFwiVHJ5IGNhbGxpbmcgc3VibWl0IHdpdGhpbiBhIGB1c2VFZmZlY3RgIG9yIGNhbGxiYWNrIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBtZXRob2QsXG4gICAgICBlbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICB1cmxcbiAgICB9ID0gZ2V0Rm9ybVN1Ym1pc3Npb25JbmZvKHRhcmdldCwgZGVmYXVsdEFjdGlvbiwgb3B0aW9ucyk7XG4gICAgbGV0IGhyZWYgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgcmVwbGFjZTogb3B0aW9ucy5yZXBsYWNlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRpb25zLnByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybU1ldGhvZDogbWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGU6IGVuY1R5cGVcbiAgICB9O1xuXG4gICAgaWYgKGZldGNoZXJLZXkpIHtcbiAgICAgICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIHVzZUZldGNoZXIoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoaHJlZiwgb3B0cyk7XG4gICAgfVxuICB9LCBbZGVmYXVsdEFjdGlvbiwgcm91dGVyLCBmZXRjaGVyS2V5LCByb3V0ZUlkXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUZvcm1BY3Rpb24oYWN0aW9uLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgcm91dGVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlQ29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRm9ybUFjdGlvbiBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbbWF0Y2hdID0gcm91dGVDb250ZXh0Lm1hdGNoZXMuc2xpY2UoLTEpOyAvLyBTaGFsbG93IGNsb25lIHBhdGggc28gd2UgY2FuIG1vZGlmeSBpdCBiZWxvdywgb3RoZXJ3aXNlIHdlIG1vZGlmeSB0aGVcbiAgLy8gb2JqZWN0IHJlZmVyZW5jZWQgYnkgdXNlTWVtbyBpbnNpZGUgdXNlUmVzb2x2ZWRQYXRoXG5cbiAgbGV0IHBhdGggPSBfZXh0ZW5kcyh7fSwgdXNlUmVzb2x2ZWRQYXRoKGFjdGlvbiA/IGFjdGlvbiA6IFwiLlwiLCB7XG4gICAgcmVsYXRpdmVcbiAgfSkpOyAvLyBQcmV2aW91c2x5IHdlIHNldCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gXCIuXCIuIFRoZSBwcm9ibGVtIHdpdGggdGhpcyBpcyB0aGF0XG4gIC8vIGB1c2VSZXNvbHZlZFBhdGgoXCIuXCIpYCBleGNsdWRlcyBzZWFyY2ggcGFyYW1zIGFuZCB0aGUgaGFzaCBvZiB0aGUgcmVzb2x2ZWRcbiAgLy8gVVJMLiBUaGlzIGlzIHRoZSBpbnRlbmRlZCBiZWhhdmlvciBvZiB3aGVuIFwiLlwiIGlzIHNwZWNpZmljYWxseSBwcm92aWRlZCBhc1xuICAvLyB0aGUgZm9ybSBhY3Rpb24sIGJ1dCBpbmNvbnNpc3RlbnQgdy8gYnJvd3NlcnMgd2hlbiB0aGUgYWN0aW9uIGlzIG9taXR0ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXgvaXNzdWVzLzkyN1xuXG5cbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAvLyBTYWZlIHRvIHdyaXRlIHRvIHRoZXNlIGRpcmVjdGx5IGhlcmUgc2luY2UgaWYgYWN0aW9uIHdhcyB1bmRlZmluZWQsIHdlXG4gICAgLy8gd291bGQgaGF2ZSBjYWxsZWQgdXNlUmVzb2x2ZWRQYXRoKFwiLlwiKSB3aGljaCB3aWxsIG5ldmVyIGluY2x1ZGUgYSBzZWFyY2hcbiAgICAvLyBvciBoYXNoXG4gICAgcGF0aC5zZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgcGF0aC5oYXNoID0gbG9jYXRpb24uaGFzaDsgLy8gV2hlbiBncmFiYmluZyBzZWFyY2ggcGFyYW1zIGZyb20gdGhlIFVSTCwgcmVtb3ZlIHRoZSBhdXRvbWF0aWNhbGx5XG4gICAgLy8gaW5zZXJ0ZWQgP2luZGV4IHBhcmFtIHNvIHdlIG1hdGNoIHRoZSB1c2VSZXNvbHZlZFBhdGggc2VhcmNoIGJlaGF2aW9yXG4gICAgLy8gd2hpY2ggd291bGQgbm90IGluY2x1ZGUgP2luZGV4XG5cbiAgICBpZiAobWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhdGguc2VhcmNoKTtcbiAgICAgIHBhcmFtcy5kZWxldGUoXCJpbmRleFwiKTtcbiAgICAgIHBhdGguc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCkgPyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpIDogXCJcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoKCFhY3Rpb24gfHwgYWN0aW9uID09PSBcIi5cIikgJiYgbWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICBwYXRoLnNlYXJjaCA9IHBhdGguc2VhcmNoID8gcGF0aC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sIFwiP2luZGV4JlwiKSA6IFwiP2luZGV4XCI7XG4gIH0gLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgZm9ybSBhY3Rpb24uICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlXG4gIC8vIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZVxuICAvLyBwcmVzZW5jZSBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgYWN0aW9uc1xuXG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBhdGgocGF0aCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZldGNoZXJGb3JtKGZldGNoZXJLZXksIHJvdXRlSWQpIHtcbiAgbGV0IEZldGNoZXJGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBmZXRjaGVyS2V5OiBmZXRjaGVyS2V5LFxuICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIEZldGNoZXJGb3JtLmRpc3BsYXlOYW1lID0gXCJmZXRjaGVyLkZvcm1cIjtcbiAgfVxuXG4gIHJldHVybiBGZXRjaGVyRm9ybTtcbn1cblxubGV0IGZldGNoZXJJZCA9IDA7XG4vKipcbiAqIEludGVyYWN0cyB3aXRoIHJvdXRlIGxvYWRlcnMgYW5kIGFjdGlvbnMgd2l0aG91dCBjYXVzaW5nIGEgbmF2aWdhdGlvbi4gR3JlYXRcbiAqIGZvciBhbnkgaW50ZXJhY3Rpb24gdGhhdCBzdGF5cyBvbiB0aGUgc2FtZSBwYWdlLlxuICovXG5cbmZ1bmN0aW9uIHVzZUZldGNoZXIoKSB7XG4gIHZhciBfcm91dGUkbWF0Y2hlcztcblxuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlRmV0Y2hlcik7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX1JvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCByb3V0ZUlkID0gKF9yb3V0ZSRtYXRjaGVzID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdKSA9PSBudWxsID8gdm9pZCAwIDogX3JvdXRlJG1hdGNoZXMucm91dGUuaWQ7XG4gICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgW2ZldGNoZXJLZXldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gU3RyaW5nKCsrZmV0Y2hlcklkKSk7XG4gIGxldCBbRm9ybV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgIXJvdXRlSWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlSWQgYXZhaWxhYmxlIGZvciBmZXRjaGVyLkZvcm0oKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBjcmVhdGVGZXRjaGVyRm9ybShmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgfSk7XG4gIGxldCBbbG9hZF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBocmVmID0+IHtcbiAgICAhcm91dGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZXIgYXZhaWxhYmxlIGZvciBmZXRjaGVyLmxvYWQoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICFyb3V0ZUlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5sb2FkKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByb3V0ZXIuZmV0Y2goZmV0Y2hlcktleSwgcm91dGVJZCwgaHJlZik7XG4gIH0pO1xuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZldGNoZXIgPSByb3V0ZXIuZ2V0RmV0Y2hlcihmZXRjaGVyS2V5KTtcbiAgbGV0IGZldGNoZXJXaXRoQ29tcG9uZW50cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gX2V4dGVuZHMoe1xuICAgIEZvcm0sXG4gICAgc3VibWl0LFxuICAgIGxvYWRcbiAgfSwgZmV0Y2hlciksIFtmZXRjaGVyLCBGb3JtLCBzdWJtaXQsIGxvYWRdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJcyB0aGlzIGJ1c3RlZCB3aGVuIHRoZSBSZWFjdCB0ZWFtIGdldHMgcmVhbCB3ZWlyZCBhbmQgY2FsbHMgZWZmZWN0c1xuICAgIC8vIHR3aWNlIG9uIG1vdW50PyAgV2UgcmVhbGx5IGp1c3QgbmVlZCB0byBnYXJiYWdlIGNvbGxlY3QgaGVyZSB3aGVuIHRoaXNcbiAgICAvLyBmZXRjaGVyIGlzIG5vIGxvbmdlciBhcm91bmQuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcm91dGVyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIGZldGNoZXIgYXZhaWxhYmxlIHRvIGNsZWFuIHVwIGZyb20gdXNlRmV0Y2hlcigpXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5kZWxldGVGZXRjaGVyKGZldGNoZXJLZXkpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIsIGZldGNoZXJLZXldKTtcbiAgcmV0dXJuIGZldGNoZXJXaXRoQ29tcG9uZW50cztcbn1cbi8qKlxuICogUHJvdmlkZXMgYWxsIGZldGNoZXJzIGN1cnJlbnRseSBvbiB0aGUgcGFnZS4gVXNlZnVsIGZvciBsYXlvdXRzIGFuZCBwYXJlbnRcbiAqIHJvdXRlcyB0aGF0IG5lZWQgdG8gcHJvdmlkZSBwZW5kaW5nL29wdGltaXN0aWMgVUkgcmVnYXJkaW5nIHRoZSBmZXRjaC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VGZXRjaGVycygpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlRmV0Y2hlcnMpO1xuICByZXR1cm4gWy4uLnN0YXRlLmZldGNoZXJzLnZhbHVlcygpXTtcbn1cbmNvbnN0IFNDUk9MTF9SRVNUT1JBVElPTl9TVE9SQUdFX0tFWSA9IFwicmVhY3Qtcm91dGVyLXNjcm9sbC1wb3NpdGlvbnNcIjtcbmxldCBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IHt9O1xuLyoqXG4gKiBXaGVuIHJlbmRlcmVkIGluc2lkZSBhIFJvdXRlclByb3ZpZGVyLCB3aWxsIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9ucyBvbiBuYXZpZ2F0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKF90ZW1wMykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQge1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVNjcm9sbFJlc3RvcmF0aW9uKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGxldCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpOyAvLyBUcmlnZ2VyIG1hbnVhbCBzY3JvbGwgcmVzdG9yYXRpb24gd2hpbGUgd2UncmUgYWN0aXZlXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBTYXZlIHBvc2l0aW9ucyBvbiBwYWdlaGlkZVxuXG4gIHVzZVBhZ2VIaWRlKFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIGxldCBrZXkgPSAoZ2V0S2V5ID8gZ2V0S2V5KGxvY2F0aW9uLCBtYXRjaGVzKSA6IG51bGwpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZFNjcm9sbFBvc2l0aW9ucykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gIH0sIFtzdG9yYWdlS2V5LCBnZXRLZXksIG5hdmlnYXRpb24uc3RhdGUsIGxvY2F0aW9uLCBtYXRjaGVzXSkpOyAvLyBSZWFkIGluIGFueSBzYXZlZCBzY3JvbGwgbG9jYXRpb25zXG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc2Vzc2lvblBvc2l0aW9ucyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVkpO1xuXG4gICAgICAgIGlmIChzZXNzaW9uUG9zaXRpb25zKSB7XG4gICAgICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBKU09OLnBhcnNlKHNlc3Npb25Qb3NpdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gbm8tb3AsIHVzZSBkZWZhdWx0IGVtcHR5IG9iamVjdFxuICAgICAgfVxuICAgIH0sIFtzdG9yYWdlS2V5XSk7IC8vIEVuYWJsZSBzY3JvbGwgcmVzdG9yYXRpb24gaW4gdGhlIHJvdXRlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gPSByb3V0ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlci5lbmFibGVTY3JvbGxSZXN0b3JhdGlvbihzYXZlZFNjcm9sbFBvc2l0aW9ucywgKCkgPT4gd2luZG93LnNjcm9sbFksIGdldEtleSk7XG4gICAgICByZXR1cm4gKCkgPT4gZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uICYmIGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbigpO1xuICAgIH0sIFtyb3V0ZXIsIGdldEtleV0pOyAvLyBSZXN0b3JlIHNjcm9sbGluZyB3aGVuIHN0YXRlLnJlc3RvcmVTY3JvbGxQb3NpdGlvbiBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gRXhwbGljaXQgZmFsc2UgbWVhbnMgZG9uJ3QgZG8gYW55dGhpbmcgKHVzZWQgZm9yIHN1Ym1pc3Npb25zKVxuICAgICAgaWYgKHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBiZWVuIGhlcmUgYmVmb3JlLCBzY3JvbGwgdG8gaXRcblxuXG4gICAgICBpZiAodHlwZW9mIHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyB0cnkgdG8gc2Nyb2xsIHRvIHRoZSBoYXNoXG5cblxuICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRG9uJ3QgcmVzZXQgaWYgdGhpcyBuYXZpZ2F0aW9uIG9wdGVkIG91dFxuXG5cbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgZ28gdG8gdGhlIHRvcCBvbiBuZXcgbG9jYXRpb25zXG5cblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0sIFtsb2NhdGlvbiwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXRdKTtcbiAgfVxufVxuLyoqXG4gKiBTZXR1cCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIG9uIHRoZSB3aW5kb3cncyBgYmVmb3JldW5sb2FkYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLlxuICpcbiAqIE5vdGU6IFRoZSBgY2FsbGJhY2tgIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uIGNyZWF0ZWQgd2l0aFxuICogYFJlYWN0LnVzZUNhbGxiYWNrKClgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJlZm9yZVVubG9hZChjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogU2V0dXAgYSBjYWxsYmFjayB0byBiZSBmaXJlZCBvbiB0aGUgd2luZG93J3MgYHBhZ2VoaWRlYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLiAgVGhpcyBldmVudCBpcyBiZXR0ZXIgc3VwcG9ydGVkIHRoYW4gYmVmb3JldW5sb2FkIGFjcm9zcyBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBUaGUgYGNhbGxiYWNrYCBhcmd1bWVudCBzaG91bGQgYmUgYSBmdW5jdGlvbiBjcmVhdGVkIHdpdGhcbiAqIGBSZWFjdC51c2VDYWxsYmFjaygpYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VQYWdlSGlkZShjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgfTtcbiAgfSwgW2NhbGxiYWNrLCBjYXB0dXJlXSk7XG59XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIHVzZUJsb2NrZXIgdG8gc2hvdyBhIHdpbmRvdy5jb25maXJtIHByb21wdCB0byB1c2VycyBpbnN0ZWFkXG4gKiBvZiBidWlsZGluZyBhIGN1c3RvbSBVSSB3aXRoIHVzZUJsb2NrZXIuXG4gKlxuICogV2FybmluZzogVGhpcyBoYXMgKmEgbG90IG9mIHJvdWdoIGVkZ2VzKiBhbmQgYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IChhbmRcbiAqIHZlcnkgaW5jb3JyZWN0bHkgaW4gc29tZSBjYXNlcykgYWNyb3NzIGJyb3dzZXJzIGlmIHVzZXIgY2xpY2sgYWRkaXRpb25cbiAqIGJhY2svZm9yd2FyZCBuYXZpZ2F0aW9ucyB3aGlsZSB0aGUgY29uZmlybSBpcyBvcGVuLiAgVXNlIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VQcm9tcHQoX3JlZjgpIHtcbiAgbGV0IHtcbiAgICB3aGVuLFxuICAgIG1lc3NhZ2VcbiAgfSA9IF9yZWY4O1xuICBsZXQgYmxvY2tlciA9IHVuc3RhYmxlX3VzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmICF3aGVuKSB7XG4gICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgfVxuICB9LCBbYmxvY2tlciwgd2hlbl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIikge1xuICAgICAgbGV0IHByb2NlZWQgPSB3aW5kb3cuY29uZmlybShtZXNzYWdlKTtcblxuICAgICAgaWYgKHByb2NlZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChibG9ja2VyLnByb2NlZWQsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIG1lc3NhZ2VdKTtcbn1cbiAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgRm9ybSwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZVNjcm9sbFJlc3RvcmF0aW9uIGFzIFVOU0FGRV91c2VTY3JvbGxSZXN0b3JhdGlvbiwgY3JlYXRlQnJvd3NlclJvdXRlciwgY3JlYXRlSGFzaFJvdXRlciwgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZVByb21wdCBhcyB1bnN0YWJsZV91c2VQcm9tcHQsIHVzZUJlZm9yZVVubG9hZCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogQHJlbWl4LXJ1bi9yb3V0ZXIgdjEuNS4wXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBUeXBlcyBhbmQgQ29uc3RhbnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEFjdGlvbnMgcmVwcmVzZW50IHRoZSB0eXBlIG9mIGNoYW5nZSB0byBhIGxvY2F0aW9uIHZhbHVlLlxuICovXG52YXIgQWN0aW9uO1xuXG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAvKipcbiAgICogQSBQT1AgaW5kaWNhdGVzIGEgY2hhbmdlIHRvIGFuIGFyYml0cmFyeSBpbmRleCBpbiB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaFxuICAgKiBhcyBhIGJhY2sgb3IgZm9yd2FyZCBuYXZpZ2F0aW9uLiBJdCBkb2VzIG5vdCBkZXNjcmliZSB0aGUgZGlyZWN0aW9uIG9mIHRoZVxuICAgKiBuYXZpZ2F0aW9uLCBvbmx5IHRoYXQgdGhlIGN1cnJlbnQgaW5kZXggY2hhbmdlZC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBpcyB0aGUgZGVmYXVsdCBhY3Rpb24gZm9yIG5ld2x5IGNyZWF0ZWQgaGlzdG9yeSBvYmplY3RzLlxuICAgKi9cbiAgQWN0aW9uW1wiUG9wXCJdID0gXCJQT1BcIjtcbiAgLyoqXG4gICAqIEEgUFVTSCBpbmRpY2F0ZXMgYSBuZXcgZW50cnkgYmVpbmcgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2ssIHN1Y2ggYXMgd2hlblxuICAgKiBhIGxpbmsgaXMgY2xpY2tlZCBhbmQgYSBuZXcgcGFnZSBsb2Fkcy4gV2hlbiB0aGlzIGhhcHBlbnMsIGFsbCBzdWJzZXF1ZW50XG4gICAqIGVudHJpZXMgaW4gdGhlIHN0YWNrIGFyZSBsb3N0LlxuICAgKi9cblxuICBBY3Rpb25bXCJQdXNoXCJdID0gXCJQVVNIXCI7XG4gIC8qKlxuICAgKiBBIFJFUExBQ0UgaW5kaWNhdGVzIHRoZSBlbnRyeSBhdCB0aGUgY3VycmVudCBpbmRleCBpbiB0aGUgaGlzdG9yeSBzdGFja1xuICAgKiBiZWluZyByZXBsYWNlZCBieSBhIG5ldyBvbmUuXG4gICAqL1xuXG4gIEFjdGlvbltcIlJlcGxhY2VcIl0gPSBcIlJFUExBQ0VcIjtcbn0pKEFjdGlvbiB8fCAoQWN0aW9uID0ge30pKTtcblxuY29uc3QgUG9wU3RhdGVFdmVudFR5cGUgPSBcInBvcHN0YXRlXCI7XG4vKipcbiAqIE1lbW9yeSBoaXN0b3J5IHN0b3JlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiBtZW1vcnkuIEl0IGlzIGRlc2lnbmVkIGZvciB1c2VcbiAqIGluIHN0YXRlZnVsIG5vbi1icm93c2VyIGVudmlyb25tZW50cyBsaWtlIHRlc3RzIGFuZCBSZWFjdCBOYXRpdmUuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBsZXQge1xuICAgIGluaXRpYWxFbnRyaWVzID0gW1wiL1wiXSxcbiAgICBpbml0aWFsSW5kZXgsXG4gICAgdjVDb21wYXQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgbGV0IGVudHJpZXM7IC8vIERlY2xhcmUgc28gd2UgY2FuIGFjY2VzcyBmcm9tIGNyZWF0ZU1lbW9yeUxvY2F0aW9uXG5cbiAgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiBjcmVhdGVNZW1vcnlMb2NhdGlvbihlbnRyeSwgdHlwZW9mIGVudHJ5ID09PSBcInN0cmluZ1wiID8gbnVsbCA6IGVudHJ5LnN0YXRlLCBpbmRleCA9PT0gMCA/IFwiZGVmYXVsdFwiIDogdW5kZWZpbmVkKSk7XG4gIGxldCBpbmRleCA9IGNsYW1wSW5kZXgoaW5pdGlhbEluZGV4ID09IG51bGwgPyBlbnRyaWVzLmxlbmd0aCAtIDEgOiBpbml0aWFsSW5kZXgpO1xuICBsZXQgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgbGV0IGxpc3RlbmVyID0gbnVsbDtcblxuICBmdW5jdGlvbiBjbGFtcEluZGV4KG4pIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgMCksIGVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIGVudHJpZXNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlLCBrZXkpIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGVudHJpZXMgPyBnZXRDdXJyZW50TG9jYXRpb24oKS5wYXRobmFtZSA6IFwiL1wiLCB0bywgc3RhdGUsIGtleSk7XG4gICAgd2FybmluZyhsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgPT09IFwiL1wiLCBcInJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeTogXCIgKyBKU09OLnN0cmluZ2lmeSh0bykpO1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYodG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0ge1xuICAgIGdldCBpbmRleCgpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcblxuICAgIGdldCBsb2NhdGlvbigpIHtcbiAgICAgIHJldHVybiBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSHJlZixcblxuICAgIGNyZWF0ZVVSTCh0bykge1xuICAgICAgcmV0dXJuIG5ldyBVUkwoY3JlYXRlSHJlZih0byksIFwiaHR0cDovL2xvY2FsaG9zdFwiKTtcbiAgICB9LFxuXG4gICAgZW5jb2RlTG9jYXRpb24odG8pIHtcbiAgICAgIGxldCBwYXRoID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGgucGF0aG5hbWUgfHwgXCJcIixcbiAgICAgICAgc2VhcmNoOiBwYXRoLnNlYXJjaCB8fCBcIlwiLFxuICAgICAgICBoYXNoOiBwYXRoLmhhc2ggfHwgXCJcIlxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgcHVzaCh0bywgc3RhdGUpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBpbmRleCArPSAxO1xuICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIGVudHJpZXMubGVuZ3RoLCBuZXh0TG9jYXRpb24pO1xuXG4gICAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZXBsYWNlKHRvLCBzdGF0ZSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlKTtcbiAgICAgIGVudHJpZXNbaW5kZXhdID0gbmV4dExvY2F0aW9uO1xuXG4gICAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuICAgICAgICAgIGRlbHRhOiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnbyhkZWx0YSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgICAgIGxldCBuZXh0SW5kZXggPSBjbGFtcEluZGV4KGluZGV4ICsgZGVsdGEpO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGVudHJpZXNbbmV4dEluZGV4XTtcbiAgICAgIGluZGV4ID0gbmV4dEluZGV4O1xuXG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuICAgICAgICAgIGRlbHRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGxpc3RlbmVyID0gZm47XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH1cblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cbi8qKlxuICogQnJvd3NlciBoaXN0b3J5IHN0b3JlcyB0aGUgbG9jYXRpb24gaW4gcmVndWxhciBVUkxzLiBUaGlzIGlzIHRoZSBzdGFuZGFyZCBmb3JcbiAqIG1vc3Qgd2ViIGFwcHMsIGJ1dCBpdCByZXF1aXJlcyBzb21lIGNvbmZpZ3VyYXRpb24gb24gdGhlIHNlcnZlciB0byBlbnN1cmUgeW91XG4gKiBzZXJ2ZSB0aGUgc2FtZSBhcHAgYXQgbXVsdGlwbGUgVVJMcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vaGlzdG9yeS90cmVlL21haW4vZG9jcy9hcGktcmVmZXJlbmNlLm1kI2NyZWF0ZWJyb3dzZXJoaXN0b3J5XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3Rvcnkob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQnJvd3NlckxvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSkge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihcIlwiLCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9LCAvLyBzdGF0ZSBkZWZhdWx0cyB0byBgbnVsbGAgYmVjYXVzZSBgd2luZG93Lmhpc3Rvcnkuc3RhdGVgIGRvZXNcbiAgICBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUudXNyIHx8IG51bGwsIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS5rZXkgfHwgXCJkZWZhdWx0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQnJvd3NlckhyZWYod2luZG93LCB0bykge1xuICAgIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICB9XG5cbiAgcmV0dXJuIGdldFVybEJhc2VkSGlzdG9yeShjcmVhdGVCcm93c2VyTG9jYXRpb24sIGNyZWF0ZUJyb3dzZXJIcmVmLCBudWxsLCBvcHRpb25zKTtcbn1cbi8qKlxuICogSGFzaCBoaXN0b3J5IHN0b3JlcyB0aGUgbG9jYXRpb24gaW4gd2luZG93LmxvY2F0aW9uLmhhc2guIFRoaXMgbWFrZXMgaXQgaWRlYWxcbiAqIGZvciBzaXR1YXRpb25zIHdoZXJlIHlvdSBkb24ndCB3YW50IHRvIHNlbmQgdGhlIGxvY2F0aW9uIHRvIHRoZSBzZXJ2ZXIgZm9yXG4gKiBzb21lIHJlYXNvbiwgZWl0aGVyIGJlY2F1c2UgeW91IGRvIGNhbm5vdCBjb25maWd1cmUgaXQgb3IgdGhlIFVSTCBzcGFjZSBpc1xuICogcmVzZXJ2ZWQgZm9yIHNvbWV0aGluZyBlbHNlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9oaXN0b3J5L3RyZWUvbWFpbi9kb2NzL2FwaS1yZWZlcmVuY2UubWQjY3JlYXRlaGFzaGhpc3RvcnlcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIYXNoTG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lID0gXCIvXCIsXG4gICAgICBzZWFyY2ggPSBcIlwiLFxuICAgICAgaGFzaCA9IFwiXCJcbiAgICB9ID0gcGFyc2VQYXRoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKFwiXCIsIHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0sIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIYXNoSHJlZih3aW5kb3csIHRvKSB7XG4gICAgbGV0IGJhc2UgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7XG4gICAgbGV0IGhyZWYgPSBcIlwiO1xuXG4gICAgaWYgKGJhc2UgJiYgYmFzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKSB7XG4gICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICBsZXQgaGFzaEluZGV4ID0gdXJsLmluZGV4T2YoXCIjXCIpO1xuICAgICAgaHJlZiA9IGhhc2hJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHJlZiArIFwiI1wiICsgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0bykpO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVIYXNoTG9jYXRpb24obG9jYXRpb24sIHRvKSB7XG4gICAgd2FybmluZyhsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgPT09IFwiL1wiLCBcInJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucHVzaChcIiArIEpTT04uc3RyaW5naWZ5KHRvKSArIFwiKVwiKTtcbiAgfVxuXG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoY3JlYXRlSGFzaExvY2F0aW9uLCBjcmVhdGVIYXNoSHJlZiwgdmFsaWRhdGVIYXNoTG9jYXRpb24sIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gaW52YXJpYW50KHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIGNvbnNvbGUud2FybihtZXNzYWdlKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBXZWxjb21lIHRvIGRlYnVnZ2luZyBoaXN0b3J5IVxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28geW91IGNhbiBtb3JlIGVhc2lseVxuICAgICAgLy8gZmluZCB0aGUgc291cmNlIGZvciBhIHdhcm5pbmcgdGhhdCBhcHBlYXJzIGluIHRoZSBjb25zb2xlIGJ5XG4gICAgICAvLyBlbmFibGluZyBcInBhdXNlIG9uIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIEphdmFTY3JpcHQgZGVidWdnZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDgpO1xufVxuLyoqXG4gKiBGb3IgYnJvd3Nlci1iYXNlZCBoaXN0b3JpZXMsIHdlIGNvbWJpbmUgdGhlIHN0YXRlIGFuZCBrZXkgaW50byBhbiBvYmplY3RcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICB1c3I6IGxvY2F0aW9uLnN0YXRlLFxuICAgIGtleTogbG9jYXRpb24ua2V5LFxuICAgIGlkeDogaW5kZXhcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIExvY2F0aW9uIG9iamVjdCB3aXRoIGEgdW5pcXVlIGtleSBmcm9tIHRoZSBnaXZlbiBQYXRoXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihjdXJyZW50LCB0bywgc3RhdGUsIGtleSkge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gbnVsbDtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbiA9IF9leHRlbmRzKHtcbiAgICBwYXRobmFtZTogdHlwZW9mIGN1cnJlbnQgPT09IFwic3RyaW5nXCIgPyBjdXJyZW50IDogY3VycmVudC5wYXRobmFtZSxcbiAgICBzZWFyY2g6IFwiXCIsXG4gICAgaGFzaDogXCJcIlxuICB9LCB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG8sIHtcbiAgICBzdGF0ZSxcbiAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlIGNsZWFuZWQgdXAuICBwdXNoL3JlcGxhY2Ugc2hvdWxkIHByb2JhYmx5IGp1c3QgdGFrZVxuICAgIC8vIGZ1bGwgTG9jYXRpb25zIG5vdyBhbmQgYXZvaWQgdGhlIG5lZWQgdG8gcnVuIHRocm91Z2ggdGhpcyBmbG93IGF0IGFsbFxuICAgIC8vIEJ1dCB0aGF0J3MgYSBwcmV0dHkgYmlnIHJlZmFjdG9yIHRvIHRoZSBjdXJyZW50IHRlc3Qgc3VpdGUgc28gZ29pbmcgdG9cbiAgICAvLyBrZWVwIGFzIGlzIGZvciB0aGUgdGltZSBiZWluZyBhbmQganVzdCBsZXQgYW55IGluY29taW5nIGtleXMgdGFrZSBwcmVjZWRlbmNlXG4gICAga2V5OiB0byAmJiB0by5rZXkgfHwga2V5IHx8IGNyZWF0ZUtleSgpXG4gIH0pO1xuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHN0cmluZyBVUkwgcGF0aCBmcm9tIHRoZSBnaXZlbiBwYXRobmFtZSwgc2VhcmNoLCBhbmQgaGFzaCBjb21wb25lbnRzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGgoX3JlZikge1xuICBsZXQge1xuICAgIHBhdGhuYW1lID0gXCIvXCIsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIlxuICB9ID0gX3JlZjtcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09IFwiP1wiKSBwYXRobmFtZSArPSBzZWFyY2guY2hhckF0KDApID09PSBcIj9cIiA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuICBpZiAoaGFzaCAmJiBoYXNoICE9PSBcIiNcIikgcGF0aG5hbWUgKz0gaGFzaC5jaGFyQXQoMCkgPT09IFwiI1wiID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbiAgcmV0dXJuIHBhdGhuYW1lO1xufVxuLyoqXG4gKiBQYXJzZXMgYSBzdHJpbmcgVVJMIHBhdGggaW50byBpdHMgc2VwYXJhdGUgcGF0aG5hbWUsIHNlYXJjaCwgYW5kIGhhc2ggY29tcG9uZW50cy5cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHt9O1xuXG4gIGlmIChwYXRoKSB7XG4gICAgbGV0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZihcIiNcIik7XG5cbiAgICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICAgIHBhcnNlZFBhdGguaGFzaCA9IHBhdGguc3Vic3RyKGhhc2hJbmRleCk7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgaGFzaEluZGV4KTtcbiAgICB9XG5cbiAgICBsZXQgc2VhcmNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCI/XCIpO1xuXG4gICAgaWYgKHNlYXJjaEluZGV4ID49IDApIHtcbiAgICAgIHBhcnNlZFBhdGguc2VhcmNoID0gcGF0aC5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAocGF0aCkge1xuICAgICAgcGFyc2VkUGF0aC5wYXRobmFtZSA9IHBhdGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGdldFVybEJhc2VkSGlzdG9yeShnZXRMb2NhdGlvbiwgY3JlYXRlSHJlZiwgdmFsaWRhdGVMb2NhdGlvbiwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgbGV0IHtcbiAgICB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldyxcbiAgICB2NUNvbXBhdCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICBsZXQgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgbGV0IGxpc3RlbmVyID0gbnVsbDtcbiAgbGV0IGluZGV4ID0gZ2V0SW5kZXgoKTsgLy8gSW5kZXggc2hvdWxkIG9ubHkgYmUgbnVsbCB3aGVuIHdlIGluaXRpYWxpemUuIElmIG5vdCwgaXQncyBiZWNhdXNlIHRoZVxuICAvLyB1c2VyIGNhbGxlZCBoaXN0b3J5LnB1c2hTdGF0ZSBvciBoaXN0b3J5LnJlcGxhY2VTdGF0ZSBkaXJlY3RseSwgaW4gd2hpY2hcbiAgLy8gY2FzZSB3ZSBzaG91bGQgbG9nIGEgd2FybmluZyBhcyBpdCB3aWxsIHJlc3VsdCBpbiBidWdzLlxuXG4gIGlmIChpbmRleCA9PSBudWxsKSB7XG4gICAgaW5kZXggPSAwO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKF9leHRlbmRzKHt9LCBnbG9iYWxIaXN0b3J5LnN0YXRlLCB7XG4gICAgICBpZHg6IGluZGV4XG4gICAgfSksIFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5kZXgoKSB7XG4gICAgbGV0IHN0YXRlID0gZ2xvYmFsSGlzdG9yeS5zdGF0ZSB8fCB7XG4gICAgICBpZHg6IG51bGxcbiAgICB9O1xuICAgIHJldHVybiBzdGF0ZS5pZHg7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3AoKSB7XG4gICAgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgICBsZXQgbmV4dEluZGV4ID0gZ2V0SW5kZXgoKTtcbiAgICBsZXQgZGVsdGEgPSBuZXh0SW5kZXggPT0gbnVsbCA/IG51bGwgOiBuZXh0SW5kZXggLSBpbmRleDtcbiAgICBpbmRleCA9IG5leHRJbmRleDtcblxuICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICBkZWx0YVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHVzaCh0bywgc3RhdGUpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihoaXN0b3J5LmxvY2F0aW9uLCB0bywgc3RhdGUpO1xuICAgIGlmICh2YWxpZGF0ZUxvY2F0aW9uKSB2YWxpZGF0ZUxvY2F0aW9uKGxvY2F0aW9uLCB0byk7XG4gICAgaW5kZXggPSBnZXRJbmRleCgpICsgMTtcbiAgICBsZXQgaGlzdG9yeVN0YXRlID0gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCk7XG4gICAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7IC8vIHRyeS4uLmNhdGNoIGJlY2F1c2UgaU9TIGxpbWl0cyB1cyB0byAxMDAgcHVzaFN0YXRlIGNhbGxzIDovXG5cbiAgICB0cnkge1xuICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiLCB1cmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBUaGV5IGFyZSBnb2luZyB0byBsb3NlIHN0YXRlIGhlcmUsIGJ1dCB0aGVyZSBpcyBubyByZWFsXG4gICAgICAvLyB3YXkgdG8gd2FybiB0aGVtIGFib3V0IGl0IHNpbmNlIHRoZSBwYWdlIHdpbGwgcmVmcmVzaC4uLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cblxuICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICBkZWx0YTogMVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZSh0bywgc3RhdGUpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihoaXN0b3J5LmxvY2F0aW9uLCB0bywgc3RhdGUpO1xuICAgIGlmICh2YWxpZGF0ZUxvY2F0aW9uKSB2YWxpZGF0ZUxvY2F0aW9uKGxvY2F0aW9uLCB0byk7XG4gICAgaW5kZXggPSBnZXRJbmRleCgpO1xuICAgIGxldCBoaXN0b3J5U3RhdGUgPSBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KTtcbiAgICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIsIHVybCk7XG5cbiAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGE6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVSTCh0bykge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gaXMgXCJudWxsXCIgKHRoZSBsaXRlcmFsIHN0cmluZyB2YWx1ZSkgaW4gRmlyZWZveFxuICAgIC8vIHVuZGVyIGNlcnRhaW4gY29uZGl0aW9ucywgbm90YWJseSB3aGVuIHNlcnZpbmcgZnJvbSBhIGxvY2FsIEhUTUwgZmlsZVxuICAgIC8vIFNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04NzgyOTdcbiAgICBsZXQgYmFzZSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gIT09IFwibnVsbFwiID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGxldCBocmVmID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTtcbiAgICBpbnZhcmlhbnQoYmFzZSwgXCJObyB3aW5kb3cubG9jYXRpb24uKG9yaWdpbnxocmVmKSBhdmFpbGFibGUgdG8gY3JlYXRlIFVSTCBmb3IgaHJlZjogXCIgKyBocmVmKTtcbiAgICByZXR1cm4gbmV3IFVSTChocmVmLCBiYXNlKTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0ge1xuICAgIGdldCBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG5cbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0TG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KTtcbiAgICB9LFxuXG4gICAgbGlzdGVuKGZuKSB7XG4gICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBoaXN0b3J5IG9ubHkgYWNjZXB0cyBvbmUgYWN0aXZlIGxpc3RlbmVyXCIpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgaGFuZGxlUG9wKTtcbiAgICAgIGxpc3RlbmVyID0gZm47XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgaGFuZGxlUG9wKTtcbiAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSHJlZih0bykge1xuICAgICAgcmV0dXJuIGNyZWF0ZUhyZWYod2luZG93LCB0byk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVVSTCxcblxuICAgIGVuY29kZUxvY2F0aW9uKHRvKSB7XG4gICAgICAvLyBFbmNvZGUgYSBMb2NhdGlvbiB0aGUgc2FtZSB3YXkgd2luZG93LmxvY2F0aW9uIHdvdWxkXG4gICAgICBsZXQgdXJsID0gY3JlYXRlVVJMKHRvKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2hcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHB1c2gsXG4gICAgcmVwbGFjZSxcblxuICAgIGdvKG4pIHtcbiAgICAgIHJldHVybiBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICAgIH1cblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn0gLy8jZW5kcmVnaW9uXG5cbnZhciBSZXN1bHRUeXBlO1xuXG4oZnVuY3Rpb24gKFJlc3VsdFR5cGUpIHtcbiAgUmVzdWx0VHlwZVtcImRhdGFcIl0gPSBcImRhdGFcIjtcbiAgUmVzdWx0VHlwZVtcImRlZmVycmVkXCJdID0gXCJkZWZlcnJlZFwiO1xuICBSZXN1bHRUeXBlW1wicmVkaXJlY3RcIl0gPSBcInJlZGlyZWN0XCI7XG4gIFJlc3VsdFR5cGVbXCJlcnJvclwiXSA9IFwiZXJyb3JcIjtcbn0pKFJlc3VsdFR5cGUgfHwgKFJlc3VsdFR5cGUgPSB7fSkpO1xuXG5jb25zdCBpbW11dGFibGVSb3V0ZUtleXMgPSBuZXcgU2V0KFtcImxhenlcIiwgXCJjYXNlU2Vuc2l0aXZlXCIsIFwicGF0aFwiLCBcImlkXCIsIFwiaW5kZXhcIiwgXCJjaGlsZHJlblwiXSk7XG5cbmZ1bmN0aW9uIGlzSW5kZXhSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuaW5kZXggPT09IHRydWU7XG59IC8vIFdhbGsgdGhlIHJvdXRlIHRyZWUgZ2VuZXJhdGluZyB1bmlxdWUgSURzIHdoZXJlIG5lY2Vzc2FyeSBzbyB3ZSBhcmUgd29ya2luZ1xuLy8gc29sZWx5IHdpdGggQWdub3N0aWNEYXRhUm91dGVPYmplY3QncyB3aXRoaW4gdGhlIFJvdXRlclxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGVzLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBwYXJlbnRQYXRoLCBtYW5pZmVzdCkge1xuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFtdO1xuICB9XG5cbiAgaWYgKG1hbmlmZXN0ID09PSB2b2lkIDApIHtcbiAgICBtYW5pZmVzdCA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlcy5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgIGxldCB0cmVlUGF0aCA9IFsuLi5wYXJlbnRQYXRoLCBpbmRleF07XG4gICAgbGV0IGlkID0gdHlwZW9mIHJvdXRlLmlkID09PSBcInN0cmluZ1wiID8gcm91dGUuaWQgOiB0cmVlUGF0aC5qb2luKFwiLVwiKTtcbiAgICBpbnZhcmlhbnQocm91dGUuaW5kZXggIT09IHRydWUgfHwgIXJvdXRlLmNoaWxkcmVuLCBcIkNhbm5vdCBzcGVjaWZ5IGNoaWxkcmVuIG9uIGFuIGluZGV4IHJvdXRlXCIpO1xuICAgIGludmFyaWFudCghbWFuaWZlc3RbaWRdLCBcIkZvdW5kIGEgcm91dGUgaWQgY29sbGlzaW9uIG9uIGlkIFxcXCJcIiArIGlkICsgXCJcXFwiLiAgUm91dGUgXCIgKyBcImlkJ3MgbXVzdCBiZSBnbG9iYWxseSB1bmlxdWUgd2l0aGluIERhdGEgUm91dGVyIHVzYWdlc1wiKTtcblxuICAgIGlmIChpc0luZGV4Um91dGUocm91dGUpKSB7XG4gICAgICBsZXQgaW5kZXhSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwge1xuICAgICAgICBoYXNFcnJvckJvdW5kYXJ5OiBkZXRlY3RFcnJvckJvdW5kYXJ5KHJvdXRlKSxcbiAgICAgICAgaWRcbiAgICAgIH0pO1xuXG4gICAgICBtYW5pZmVzdFtpZF0gPSBpbmRleFJvdXRlO1xuICAgICAgcmV0dXJuIGluZGV4Um91dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoT3JMYXlvdXRSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwge1xuICAgICAgICBpZCxcbiAgICAgICAgaGFzRXJyb3JCb3VuZGFyeTogZGV0ZWN0RXJyb3JCb3VuZGFyeShyb3V0ZSksXG4gICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuXG4gICAgICBtYW5pZmVzdFtpZF0gPSBwYXRoT3JMYXlvdXRSb3V0ZTtcblxuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgICAgIHBhdGhPckxheW91dFJvdXRlLmNoaWxkcmVuID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgdHJlZVBhdGgsIG1hbmlmZXN0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhdGhPckxheW91dFJvdXRlO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIE1hdGNoZXMgdGhlIGdpdmVuIHJvdXRlcyB0byBhIGxvY2F0aW9uIGFuZCByZXR1cm5zIHRoZSBtYXRjaCBkYXRhLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvbWF0Y2gtcm91dGVzXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZXMocm91dGVzLCBsb2NhdGlvbkFyZywgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSB2b2lkIDApIHtcbiAgICBiYXNlbmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICBsZXQgcGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKGxvY2F0aW9uLnBhdGhuYW1lIHx8IFwiL1wiLCBiYXNlbmFtZSk7XG5cbiAgaWYgKHBhdGhuYW1lID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBicmFuY2hlcyA9IGZsYXR0ZW5Sb3V0ZXMocm91dGVzKTtcbiAgcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpO1xuICBsZXQgbWF0Y2hlcyA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDA7IG1hdGNoZXMgPT0gbnVsbCAmJiBpIDwgYnJhbmNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICBtYXRjaGVzID0gbWF0Y2hSb3V0ZUJyYW5jaChicmFuY2hlc1tpXSwgLy8gSW5jb21pbmcgcGF0aG5hbWVzIGFyZSBnZW5lcmFsbHkgZW5jb2RlZCBmcm9tIGVpdGhlciB3aW5kb3cubG9jYXRpb25cbiAgICAvLyBvciBmcm9tIHJvdXRlci5uYXZpZ2F0ZSwgYnV0IHdlIHdhbnQgdG8gbWF0Y2ggYWdhaW5zdCB0aGUgdW5lbmNvZGVkXG4gICAgLy8gcGF0aHMgaW4gdGhlIHJvdXRlIGRlZmluaXRpb25zLiAgTWVtb3J5IHJvdXRlciBsb2NhdGlvbnMgd29uJ3QgYmVcbiAgICAvLyBlbmNvZGVkIGhlcmUgYnV0IHRoZXJlIGFsc28gc2hvdWxkbid0IGJlIGFueXRoaW5nIHRvIGRlY29kZSBzbyB0aGlzXG4gICAgLy8gc2hvdWxkIGJlIGEgc2FmZSBvcGVyYXRpb24uICBUaGlzIGF2b2lkcyBuZWVkaW5nIG1hdGNoUm91dGVzIHRvIGJlXG4gICAgLy8gaGlzdG9yeS1hd2FyZS5cbiAgICBzYWZlbHlEZWNvZGVVUkkocGF0aG5hbWUpKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuUm91dGVzKHJvdXRlcywgYnJhbmNoZXMsIHBhcmVudHNNZXRhLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChicmFuY2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgYnJhbmNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRzTWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50c01ldGEgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gXCJcIjtcbiAgfVxuXG4gIGxldCBmbGF0dGVuUm91dGUgPSAocm91dGUsIGluZGV4LCByZWxhdGl2ZVBhdGgpID0+IHtcbiAgICBsZXQgbWV0YSA9IHtcbiAgICAgIHJlbGF0aXZlUGF0aDogcmVsYXRpdmVQYXRoID09PSB1bmRlZmluZWQgPyByb3V0ZS5wYXRoIHx8IFwiXCIgOiByZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiByb3V0ZS5jYXNlU2Vuc2l0aXZlID09PSB0cnVlLFxuICAgICAgY2hpbGRyZW5JbmRleDogaW5kZXgsXG4gICAgICByb3V0ZVxuICAgIH07XG5cbiAgICBpZiAobWV0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIGludmFyaWFudChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHBhcmVudFBhdGgpLCBcIkFic29sdXRlIHJvdXRlIHBhdGggXFxcIlwiICsgbWV0YS5yZWxhdGl2ZVBhdGggKyBcIlxcXCIgbmVzdGVkIHVuZGVyIHBhdGggXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiIGlzIG5vdCB2YWxpZC4gQW4gYWJzb2x1dGUgY2hpbGQgcm91dGUgcGF0aCBcIikgKyBcIm11c3Qgc3RhcnQgd2l0aCB0aGUgY29tYmluZWQgcGF0aCBvZiBhbGwgaXRzIHBhcmVudCByb3V0ZXMuXCIpO1xuICAgICAgbWV0YS5yZWxhdGl2ZVBhdGggPSBtZXRhLnJlbGF0aXZlUGF0aC5zbGljZShwYXJlbnRQYXRoLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSBqb2luUGF0aHMoW3BhcmVudFBhdGgsIG1ldGEucmVsYXRpdmVQYXRoXSk7XG4gICAgbGV0IHJvdXRlc01ldGEgPSBwYXJlbnRzTWV0YS5jb25jYXQobWV0YSk7IC8vIEFkZCB0aGUgY2hpbGRyZW4gYmVmb3JlIGFkZGluZyB0aGlzIHJvdXRlIHRvIHRoZSBhcnJheSBzbyB3ZSB0cmF2ZXJzZSB0aGVcbiAgICAvLyByb3V0ZSB0cmVlIGRlcHRoLWZpcnN0IGFuZCBjaGlsZCByb3V0ZXMgYXBwZWFyIGJlZm9yZSB0aGVpciBwYXJlbnRzIGluXG4gICAgLy8gdGhlIFwiZmxhdHRlbmVkXCIgdmVyc2lvbi5cblxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBpbnZhcmlhbnQoIC8vIE91ciB0eXBlcyBrbm93IGJldHRlciwgYnV0IHJ1bnRpbWUgSlMgbWF5IG5vdCFcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIHJvdXRlLmluZGV4ICE9PSB0cnVlLCBcIkluZGV4IHJvdXRlcyBtdXN0IG5vdCBoYXZlIGNoaWxkIHJvdXRlcy4gUGxlYXNlIHJlbW92ZSBcIiArIChcImFsbCBjaGlsZCByb3V0ZXMgZnJvbSByb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIuXCIpKTtcbiAgICAgIGZsYXR0ZW5Sb3V0ZXMocm91dGUuY2hpbGRyZW4sIGJyYW5jaGVzLCByb3V0ZXNNZXRhLCBwYXRoKTtcbiAgICB9IC8vIFJvdXRlcyB3aXRob3V0IGEgcGF0aCBzaG91bGRuJ3QgZXZlciBtYXRjaCBieSB0aGVtc2VsdmVzIHVubGVzcyB0aGV5IGFyZVxuICAgIC8vIGluZGV4IHJvdXRlcywgc28gZG9uJ3QgYWRkIHRoZW0gdG8gdGhlIGxpc3Qgb2YgcG9zc2libGUgYnJhbmNoZXMuXG5cblxuICAgIGlmIChyb3V0ZS5wYXRoID09IG51bGwgJiYgIXJvdXRlLmluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYnJhbmNoZXMucHVzaCh7XG4gICAgICBwYXRoLFxuICAgICAgc2NvcmU6IGNvbXB1dGVTY29yZShwYXRoLCByb3V0ZS5pbmRleCksXG4gICAgICByb3V0ZXNNZXRhXG4gICAgfSk7XG4gIH07XG5cbiAgcm91dGVzLmZvckVhY2goKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgIHZhciBfcm91dGUkcGF0aDtcblxuICAgIC8vIGNvYXJzZS1ncmFpbiBjaGVjayBmb3Igb3B0aW9uYWwgcGFyYW1zXG4gICAgaWYgKHJvdXRlLnBhdGggPT09IFwiXCIgfHwgISgoX3JvdXRlJHBhdGggPSByb3V0ZS5wYXRoKSAhPSBudWxsICYmIF9yb3V0ZSRwYXRoLmluY2x1ZGVzKFwiP1wiKSkpIHtcbiAgICAgIGZsYXR0ZW5Sb3V0ZShyb3V0ZSwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBleHBsb2RlZCBvZiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhyb3V0ZS5wYXRoKSkge1xuICAgICAgICBmbGF0dGVuUm91dGUocm91dGUsIGluZGV4LCBleHBsb2RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGJyYW5jaGVzO1xufVxuLyoqXG4gKiBDb21wdXRlcyBhbGwgY29tYmluYXRpb25zIG9mIG9wdGlvbmFsIHBhdGggc2VnbWVudHMgZm9yIGEgZ2l2ZW4gcGF0aCxcbiAqIGV4Y2x1ZGluZyBjb21iaW5hdGlvbnMgdGhhdCBhcmUgYW1iaWd1b3VzIGFuZCBvZiBsb3dlciBwcmlvcml0eS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYC9vbmUvOnR3bz8vdGhyZWUvOmZvdXI/LzpmaXZlP2AgZXhwbG9kZXMgdG86XG4gKiAtIGAvb25lL3RocmVlYFxuICogLSBgL29uZS86dHdvL3RocmVlYFxuICogLSBgL29uZS90aHJlZS86Zm91cmBcbiAqIC0gYC9vbmUvdGhyZWUvOmZpdmVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZvdXJgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZpdmVgXG4gKiAtIGAvb25lL3RocmVlLzpmb3VyLzpmaXZlYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmb3VyLzpmaXZlYFxuICovXG5cblxuZnVuY3Rpb24gZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocGF0aCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBsZXQgW2ZpcnN0LCAuLi5yZXN0XSA9IHNlZ21lbnRzOyAvLyBPcHRpb25hbCBwYXRoIHNlZ21lbnRzIGFyZSBkZW5vdGVkIGJ5IGEgdHJhaWxpbmcgYD9gXG5cbiAgbGV0IGlzT3B0aW9uYWwgPSBmaXJzdC5lbmRzV2l0aChcIj9cIik7IC8vIENvbXB1dGUgdGhlIGNvcnJlc3BvbmRpbmcgcmVxdWlyZWQgc2VnbWVudDogYGZvbz9gIC0+IGBmb29gXG5cbiAgbGV0IHJlcXVpcmVkID0gZmlyc3QucmVwbGFjZSgvXFw/JC8sIFwiXCIpO1xuXG4gIGlmIChyZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIEludGVwcmV0IGVtcHR5IHN0cmluZyBhcyBvbWl0dGluZyBhbiBvcHRpb25hbCBzZWdtZW50XG4gICAgLy8gYFtcIm9uZVwiLCBcIlwiLCBcInRocmVlXCJdYCBjb3JyZXNwb25kcyB0byBvbWl0dGluZyBgOnR3b2AgZnJvbSBgL29uZS86dHdvPy90aHJlZWAgLT4gYC9vbmUvdGhyZWVgXG4gICAgcmV0dXJuIGlzT3B0aW9uYWwgPyBbcmVxdWlyZWQsIFwiXCJdIDogW3JlcXVpcmVkXTtcbiAgfVxuXG4gIGxldCByZXN0RXhwbG9kZWQgPSBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhyZXN0LmpvaW4oXCIvXCIpKTtcbiAgbGV0IHJlc3VsdCA9IFtdOyAvLyBBbGwgY2hpbGQgcGF0aHMgd2l0aCB0aGUgcHJlZml4LiAgRG8gdGhpcyBmb3IgYWxsIGNoaWxkcmVuIGJlZm9yZSB0aGVcbiAgLy8gb3B0aW9uYWwgdmVyc2lvbiBmb3IgYWxsIGNoaWxkcmVuIHNvIHdlIGdldCBjb25zaXN0ZW50IG9yZGVyaW5nIHdoZXJlIHRoZVxuICAvLyBwYXJlbnQgb3B0aW9uYWwgYXNwZWN0IGlzIHByZWZlcnJlZCBhcyByZXF1aXJlZC4gIE90aGVyd2lzZSwgd2UgY2FuIGdldFxuICAvLyBjaGlsZCBzZWN0aW9ucyBpbnRlcnNwZXJzZWQgd2hlcmUgZGVlcGVyIG9wdGlvbmFsIHNlZ21lbnRzIGFyZSBoaWdoZXIgdGhhblxuICAvLyBwYXJlbnQgb3B0aW9uYWwgc2VnbWVudHMsIHdoZXJlIGZvciBleGFtcGxlLCAvOnR3byB3b3VsZCBleHBsb2RlcyBfZWFybGllcl9cbiAgLy8gdGhlbiAvOm9uZS4gIEJ5IGFsd2F5cyBpbmNsdWRpbmcgdGhlIHBhcmVudCBhcyByZXF1aXJlZCBfZm9yIGFsbCBjaGlsZHJlbl9cbiAgLy8gZmlyc3QsIHdlIGF2b2lkIHRoaXMgaXNzdWVcblxuICByZXN1bHQucHVzaCguLi5yZXN0RXhwbG9kZWQubWFwKHN1YnBhdGggPT4gc3VicGF0aCA9PT0gXCJcIiA/IHJlcXVpcmVkIDogW3JlcXVpcmVkLCBzdWJwYXRoXS5qb2luKFwiL1wiKSkpOyAvLyBUaGVuIGlmIHRoaXMgaXMgYW4gb3B0aW9uYWwgdmFsdWUsIGFkZCBhbGwgY2hpbGQgdmVyc2lvbnMgd2l0aG91dFxuXG4gIGlmIChpc09wdGlvbmFsKSB7XG4gICAgcmVzdWx0LnB1c2goLi4ucmVzdEV4cGxvZGVkKTtcbiAgfSAvLyBmb3IgYWJzb2x1dGUgcGF0aHMsIGVuc3VyZSBgL2AgaW5zdGVhZCBvZiBlbXB0eSBzZWdtZW50XG5cblxuICByZXR1cm4gcmVzdWx0Lm1hcChleHBsb2RlZCA9PiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpICYmIGV4cGxvZGVkID09PSBcIlwiID8gXCIvXCIgOiBleHBsb2RlZCk7XG59XG5cbmZ1bmN0aW9uIHJhbmtSb3V0ZUJyYW5jaGVzKGJyYW5jaGVzKSB7XG4gIGJyYW5jaGVzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgIT09IGIuc2NvcmUgPyBiLnNjb3JlIC0gYS5zY29yZSAvLyBIaWdoZXIgc2NvcmUgZmlyc3RcbiAgOiBjb21wYXJlSW5kZXhlcyhhLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSwgYi5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCkpKTtcbn1cblxuY29uc3QgcGFyYW1SZSA9IC9eOlxcdyskLztcbmNvbnN0IGR5bmFtaWNTZWdtZW50VmFsdWUgPSAzO1xuY29uc3QgaW5kZXhSb3V0ZVZhbHVlID0gMjtcbmNvbnN0IGVtcHR5U2VnbWVudFZhbHVlID0gMTtcbmNvbnN0IHN0YXRpY1NlZ21lbnRWYWx1ZSA9IDEwO1xuY29uc3Qgc3BsYXRQZW5hbHR5ID0gLTI7XG5cbmNvbnN0IGlzU3BsYXQgPSBzID0+IHMgPT09IFwiKlwiO1xuXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUocGF0aCwgaW5kZXgpIHtcbiAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGxldCBpbml0aWFsU2NvcmUgPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgaWYgKHNlZ21lbnRzLnNvbWUoaXNTcGxhdCkpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gc3BsYXRQZW5hbHR5O1xuICB9XG5cbiAgaWYgKGluZGV4KSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IGluZGV4Um91dGVWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cy5maWx0ZXIocyA9PiAhaXNTcGxhdChzKSkucmVkdWNlKChzY29yZSwgc2VnbWVudCkgPT4gc2NvcmUgKyAocGFyYW1SZS50ZXN0KHNlZ21lbnQpID8gZHluYW1pY1NlZ21lbnRWYWx1ZSA6IHNlZ21lbnQgPT09IFwiXCIgPyBlbXB0eVNlZ21lbnRWYWx1ZSA6IHN0YXRpY1NlZ21lbnRWYWx1ZSksIGluaXRpYWxTY29yZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVJbmRleGVzKGEsIGIpIHtcbiAgbGV0IHNpYmxpbmdzID0gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuc2xpY2UoMCwgLTEpLmV2ZXJ5KChuLCBpKSA9PiBuID09PSBiW2ldKTtcbiAgcmV0dXJuIHNpYmxpbmdzID8gLy8gSWYgdHdvIHJvdXRlcyBhcmUgc2libGluZ3MsIHdlIHNob3VsZCB0cnkgdG8gbWF0Y2ggdGhlIGVhcmxpZXIgc2libGluZ1xuICAvLyBmaXJzdC4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIGhhdmUgZmluZS1ncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgbWF0Y2hpbmdcbiAgLy8gYmVoYXZpb3IgYnkgc2ltcGx5IHB1dHRpbmcgcm91dGVzIHdpdGggaWRlbnRpY2FsIHBhdGhzIGluIHRoZSBvcmRlciB0aGV5XG4gIC8vIHdhbnQgdGhlbSB0cmllZC5cbiAgYVthLmxlbmd0aCAtIDFdIC0gYltiLmxlbmd0aCAtIDFdIDogLy8gT3RoZXJ3aXNlLCBpdCBkb2Vzbid0IHJlYWxseSBtYWtlIHNlbnNlIHRvIHJhbmsgbm9uLXNpYmxpbmdzIGJ5IGluZGV4LFxuICAvLyBzbyB0aGV5IHNvcnQgZXF1YWxseS5cbiAgMDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZUJyYW5jaChicmFuY2gsIHBhdGhuYW1lKSB7XG4gIGxldCB7XG4gICAgcm91dGVzTWV0YVxuICB9ID0gYnJhbmNoO1xuICBsZXQgbWF0Y2hlZFBhcmFtcyA9IHt9O1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXNNZXRhLmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IG1ldGEgPSByb3V0ZXNNZXRhW2ldO1xuICAgIGxldCBlbmQgPSBpID09PSByb3V0ZXNNZXRhLmxlbmd0aCAtIDE7XG4gICAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gbWF0Y2hlZFBhdGhuYW1lID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UobWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCkgfHwgXCIvXCI7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hQYXRoKHtcbiAgICAgIHBhdGg6IG1ldGEucmVsYXRpdmVQYXRoLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogbWV0YS5jYXNlU2Vuc2l0aXZlLFxuICAgICAgZW5kXG4gICAgfSwgcmVtYWluaW5nUGF0aG5hbWUpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICAgIE9iamVjdC5hc3NpZ24obWF0Y2hlZFBhcmFtcywgbWF0Y2gucGFyYW1zKTtcbiAgICBsZXQgcm91dGUgPSBtZXRhLnJvdXRlO1xuICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAvLyBUT0RPOiBDYW4gdGhpcyBhcyBiZSBhdm9pZGVkP1xuICAgICAgcGFyYW1zOiBtYXRjaGVkUGFyYW1zLFxuICAgICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZV0pLFxuICAgICAgcGF0aG5hbWVCYXNlOiBub3JtYWxpemVQYXRobmFtZShqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSkpLFxuICAgICAgcm91dGVcbiAgICB9KTtcblxuICAgIGlmIChtYXRjaC5wYXRobmFtZUJhc2UgIT09IFwiL1wiKSB7XG4gICAgICBtYXRjaGVkUGF0aG5hbWUgPSBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG4vKipcbiAqIFJldHVybnMgYSBwYXRoIHdpdGggcGFyYW1zIGludGVycG9sYXRlZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2dlbmVyYXRlLXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChvcmlnaW5hbFBhdGgsIHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIGxldCBwYXRoID0gb3JpZ2luYWxQYXRoO1xuXG4gIGlmIChwYXRoLmVuZHNXaXRoKFwiKlwiKSAmJiBwYXRoICE9PSBcIipcIiAmJiAhcGF0aC5lbmRzV2l0aChcIi8qXCIpKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJSb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgXCIgKyAoXCJcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiIGJlY2F1c2UgdGhlIGAqYCBjaGFyYWN0ZXIgbXVzdCBcIikgKyBcImFsd2F5cyBmb2xsb3cgYSBgL2AgaW4gdGhlIHBhdHRlcm4uIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCBcIiArIChcInBsZWFzZSBjaGFuZ2UgdGhlIHJvdXRlIHBhdGggdG8gXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIi5cIikpO1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpO1xuICB9IC8vIGVuc3VyZSBgL2AgaXMgYWRkZWQgYXQgdGhlIGJlZ2lubmluZyBpZiB0aGUgcGF0aCBpcyBhYnNvbHV0ZVxuXG5cbiAgY29uc3QgcHJlZml4ID0gcGF0aC5zdGFydHNXaXRoKFwiL1wiKSA/IFwiL1wiIDogXCJcIjtcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KC9cXC8rLykubWFwKChzZWdtZW50LCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBjb25zdCBpc0xhc3RTZWdtZW50ID0gaW5kZXggPT09IGFycmF5Lmxlbmd0aCAtIDE7IC8vIG9ubHkgYXBwbHkgdGhlIHNwbGF0IGlmIGl0J3MgdGhlIGxhc3Qgc2VnbWVudFxuXG4gICAgaWYgKGlzTGFzdFNlZ21lbnQgJiYgc2VnbWVudCA9PT0gXCIqXCIpIHtcbiAgICAgIGNvbnN0IHN0YXIgPSBcIipcIjtcbiAgICAgIGNvbnN0IHN0YXJQYXJhbSA9IHBhcmFtc1tzdGFyXTsgLy8gQXBwbHkgdGhlIHNwbGF0XG5cbiAgICAgIHJldHVybiBzdGFyUGFyYW07XG4gICAgfVxuXG4gICAgY29uc3Qga2V5TWF0Y2ggPSBzZWdtZW50Lm1hdGNoKC9eOihcXHcrKShcXD8/KSQvKTtcblxuICAgIGlmIChrZXlNYXRjaCkge1xuICAgICAgY29uc3QgWywga2V5LCBvcHRpb25hbF0gPSBrZXlNYXRjaDtcbiAgICAgIGxldCBwYXJhbSA9IHBhcmFtc1trZXldO1xuXG4gICAgICBpZiAob3B0aW9uYWwgPT09IFwiP1wiKSB7XG4gICAgICAgIHJldHVybiBwYXJhbSA9PSBudWxsID8gXCJcIiA6IHBhcmFtO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW0gPT0gbnVsbCkge1xuICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiTWlzc2luZyBcXFwiOlwiICsga2V5ICsgXCJcXFwiIHBhcmFtXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSAvLyBSZW1vdmUgYW55IG9wdGlvbmFsIG1hcmtlcnMgZnJvbSBvcHRpb25hbCBzdGF0aWMgc2VnbWVudHNcblxuXG4gICAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvXFw/JC9nLCBcIlwiKTtcbiAgfSkgLy8gUmVtb3ZlIGVtcHR5IHNlZ21lbnRzXG4gIC5maWx0ZXIoc2VnbWVudCA9PiAhIXNlZ21lbnQpO1xuICByZXR1cm4gcHJlZml4ICsgc2VnbWVudHMuam9pbihcIi9cIik7XG59XG4vKipcbiAqIFBlcmZvcm1zIHBhdHRlcm4gbWF0Y2hpbmcgb24gYSBVUkwgcGF0aG5hbWUgYW5kIHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXRcbiAqIHRoZSBtYXRjaC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL21hdGNoLXBhdGhcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XG4gICAgcGF0dGVybiA9IHtcbiAgICAgIHBhdGg6IHBhdHRlcm4sXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIGVuZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBsZXQgW21hdGNoZXIsIHBhcmFtTmFtZXNdID0gY29tcGlsZVBhdGgocGF0dGVybi5wYXRoLCBwYXR0ZXJuLmNhc2VTZW5zaXRpdmUsIHBhdHRlcm4uZW5kKTtcbiAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobWF0Y2hlcik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gbWF0Y2hbMF07XG4gIGxldCBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICBsZXQgY2FwdHVyZUdyb3VwcyA9IG1hdGNoLnNsaWNlKDEpO1xuICBsZXQgcGFyYW1zID0gcGFyYW1OYW1lcy5yZWR1Y2UoKG1lbW8sIHBhcmFtTmFtZSwgaW5kZXgpID0+IHtcbiAgICAvLyBXZSBuZWVkIHRvIGNvbXB1dGUgdGhlIHBhdGhuYW1lQmFzZSBoZXJlIHVzaW5nIHRoZSByYXcgc3BsYXQgdmFsdWVcbiAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nIHBhcmFtc1tcIipcIl0gbGF0ZXIgYmVjYXVzZSBpdCB3aWxsIGJlIGRlY29kZWQgdGhlblxuICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICBsZXQgc3BsYXRWYWx1ZSA9IGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCI7XG4gICAgICBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUuc2xpY2UoMCwgbWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCAtIHNwbGF0VmFsdWUubGVuZ3RoKS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gICAgfVxuXG4gICAgbWVtb1twYXJhbU5hbWVdID0gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCIsIHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcGF0aG5hbWU6IG1hdGNoZWRQYXRobmFtZSxcbiAgICBwYXRobmFtZUJhc2UsXG4gICAgcGF0dGVyblxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21waWxlUGF0aChwYXRoLCBjYXNlU2Vuc2l0aXZlLCBlbmQpIHtcbiAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IHZvaWQgMCkge1xuICAgIGVuZCA9IHRydWU7XG4gIH1cblxuICB3YXJuaW5nKHBhdGggPT09IFwiKlwiIHx8ICFwYXRoLmVuZHNXaXRoKFwiKlwiKSB8fCBwYXRoLmVuZHNXaXRoKFwiLypcIiksIFwiUm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3ZXJlIFwiICsgKFwiXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIiBiZWNhdXNlIHRoZSBgKmAgY2hhcmFjdGVyIG11c3QgXCIpICsgXCJhbHdheXMgZm9sbG93IGEgYC9gIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgXCIgKyAoXCJwbGVhc2UgY2hhbmdlIHRoZSByb3V0ZSBwYXRoIHRvIFxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIuXCIpKTtcbiAgbGV0IHBhcmFtTmFtZXMgPSBbXTtcbiAgbGV0IHJlZ2V4cFNvdXJjZSA9IFwiXlwiICsgcGF0aC5yZXBsYWNlKC9cXC8qXFwqPyQvLCBcIlwiKSAvLyBJZ25vcmUgdHJhaWxpbmcgLyBhbmQgLyosIHdlJ2xsIGhhbmRsZSBpdCBiZWxvd1xuICAucmVwbGFjZSgvXlxcLyovLCBcIi9cIikgLy8gTWFrZSBzdXJlIGl0IGhhcyBhIGxlYWRpbmcgL1xuICAucmVwbGFjZSgvW1xcXFwuKiteJD97fXwoKVtcXF1dL2csIFwiXFxcXCQmXCIpIC8vIEVzY2FwZSBzcGVjaWFsIHJlZ2V4IGNoYXJzXG4gIC5yZXBsYWNlKC9cXC86KFxcdyspL2csIChfLCBwYXJhbU5hbWUpID0+IHtcbiAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICByZXR1cm4gXCIvKFteXFxcXC9dKylcIjtcbiAgfSk7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpKSB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKFwiKlwiKTtcbiAgICByZWdleHBTb3VyY2UgKz0gcGF0aCA9PT0gXCIqXCIgfHwgcGF0aCA9PT0gXCIvKlwiID8gXCIoLiopJFwiIC8vIEFscmVhZHkgbWF0Y2hlZCB0aGUgaW5pdGlhbCAvLCBqdXN0IG1hdGNoIHRoZSByZXN0XG4gICAgOiBcIig/OlxcXFwvKC4rKXxcXFxcLyopJFwiOyAvLyBEb24ndCBpbmNsdWRlIHRoZSAvIGluIHBhcmFtc1tcIipcIl1cbiAgfSBlbHNlIGlmIChlbmQpIHtcbiAgICAvLyBXaGVuIG1hdGNoaW5nIHRvIHRoZSBlbmQsIGlnbm9yZSB0cmFpbGluZyBzbGFzaGVzXG4gICAgcmVnZXhwU291cmNlICs9IFwiXFxcXC8qJFwiO1xuICB9IGVsc2UgaWYgKHBhdGggIT09IFwiXCIgJiYgcGF0aCAhPT0gXCIvXCIpIHtcbiAgICAvLyBJZiBvdXIgcGF0aCBpcyBub24tZW1wdHkgYW5kIGNvbnRhaW5zIGFueXRoaW5nIGJleW9uZCBhbiBpbml0aWFsIHNsYXNoLFxuICAgIC8vIHRoZW4gd2UgaGF2ZSBfc29tZV8gZm9ybSBvZiBwYXRoIGluIG91ciByZWdleCBzbyB3ZSBzaG91bGQgZXhwZWN0IHRvXG4gICAgLy8gbWF0Y2ggb25seSBpZiB3ZSBmaW5kIHRoZSBlbmQgb2YgdGhpcyBwYXRoIHNlZ21lbnQuICBMb29rIGZvciBhbiBvcHRpb25hbFxuICAgIC8vIG5vbi1jYXB0dXJlZCB0cmFpbGluZyBzbGFzaCAodG8gbWF0Y2ggYSBwb3J0aW9uIG9mIHRoZSBVUkwpIG9yIHRoZSBlbmRcbiAgICAvLyBvZiB0aGUgcGF0aCAoaWYgd2UndmUgbWF0Y2hlZCB0byB0aGUgZW5kKS4gIFdlIHVzZWQgdG8gZG8gdGhpcyB3aXRoIGFcbiAgICAvLyB3b3JkIGJvdW5kYXJ5IGJ1dCB0aGF0IGdpdmVzIGZhbHNlIHBvc2l0aXZlcyBvbiByb3V0ZXMgbGlrZVxuICAgIC8vIC91c2VyLXByZWZlcmVuY2VzIHNpbmNlIGAtYCBjb3VudHMgYXMgYSB3b3JkIGJvdW5kYXJ5LlxuICAgIHJlZ2V4cFNvdXJjZSArPSBcIig/Oig/PVxcXFwvfCQpKVwiO1xuICB9IGVsc2UgO1xuXG4gIGxldCBtYXRjaGVyID0gbmV3IFJlZ0V4cChyZWdleHBTb3VyY2UsIGNhc2VTZW5zaXRpdmUgPyB1bmRlZmluZWQgOiBcImlcIik7XG4gIHJldHVybiBbbWF0Y2hlciwgcGFyYW1OYW1lc107XG59XG5cbmZ1bmN0aW9uIHNhZmVseURlY29kZVVSSSh2YWx1ZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUkkodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiVGhlIFVSTCBwYXRoIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIGNvdWxkIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2UgaXQgaXMgaXMgYSBcIiArIFwibWFsZm9ybWVkIFVSTCBzZWdtZW50LiBUaGlzIGlzIHByb2JhYmx5IGR1ZSB0byBhIGJhZCBwZXJjZW50IFwiICsgKFwiZW5jb2RpbmcgKFwiICsgZXJyb3IgKyBcIikuXCIpKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLCBwYXJhbU5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlRoZSB2YWx1ZSBmb3IgdGhlIFVSTCBwYXJhbSBcXFwiXCIgKyBwYXJhbU5hbWUgKyBcIlxcXCIgd2lsbCBub3QgYmUgZGVjb2RlZCBiZWNhdXNlXCIgKyAoXCIgdGhlIHN0cmluZyBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBpcyBhIG1hbGZvcm1lZCBVUkwgc2VnbWVudC4gVGhpcyBpcyBwcm9iYWJseVwiKSArIChcIiBkdWUgdG8gYSBiYWQgcGVyY2VudCBlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRobmFtZSwgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSBcIi9cIikgcmV0dXJuIHBhdGhuYW1lO1xuXG4gIGlmICghcGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGJhc2VuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gV2Ugd2FudCB0byBsZWF2ZSB0cmFpbGluZyBzbGFzaCBiZWhhdmlvciBpbiB0aGUgdXNlcidzIGNvbnRyb2wsIHNvIGlmIHRoZXlcbiAgLy8gc3BlY2lmeSBhIGJhc2VuYW1lIHdpdGggYSB0cmFpbGluZyBzbGFzaCwgd2Ugc2hvdWxkIHN1cHBvcnQgaXRcblxuXG4gIGxldCBzdGFydEluZGV4ID0gYmFzZW5hbWUuZW5kc1dpdGgoXCIvXCIpID8gYmFzZW5hbWUubGVuZ3RoIC0gMSA6IGJhc2VuYW1lLmxlbmd0aDtcbiAgbGV0IG5leHRDaGFyID0gcGF0aG5hbWUuY2hhckF0KHN0YXJ0SW5kZXgpO1xuXG4gIGlmIChuZXh0Q2hhciAmJiBuZXh0Q2hhciAhPT0gXCIvXCIpIHtcbiAgICAvLyBwYXRobmFtZSBkb2VzIG5vdCBzdGFydCB3aXRoIGJhc2VuYW1lL1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhuYW1lLnNsaWNlKHN0YXJ0SW5kZXgpIHx8IFwiL1wiO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzb2x2ZWQgcGF0aCBvYmplY3QgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIHBhdGhuYW1lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvcmVzb2x2ZS1wYXRoXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGgodG8sIGZyb21QYXRobmFtZSkge1xuICBpZiAoZnJvbVBhdGhuYW1lID09PSB2b2lkIDApIHtcbiAgICBmcm9tUGF0aG5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IHRvUGF0aG5hbWUsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIlxuICB9ID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvO1xuICBsZXQgcGF0aG5hbWUgPSB0b1BhdGhuYW1lID8gdG9QYXRobmFtZS5zdGFydHNXaXRoKFwiL1wiKSA/IHRvUGF0aG5hbWUgOiByZXNvbHZlUGF0aG5hbWUodG9QYXRobmFtZSwgZnJvbVBhdGhuYW1lKSA6IGZyb21QYXRobmFtZTtcbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2g6IG5vcm1hbGl6ZVNlYXJjaChzZWFyY2gpLFxuICAgIGhhc2g6IG5vcm1hbGl6ZUhhc2goaGFzaClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHJlbGF0aXZlUGF0aCwgZnJvbVBhdGhuYW1lKSB7XG4gIGxldCBzZWdtZW50cyA9IGZyb21QYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgbGV0IHJlbGF0aXZlU2VnbWVudHMgPSByZWxhdGl2ZVBhdGguc3BsaXQoXCIvXCIpO1xuICByZWxhdGl2ZVNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgaWYgKHNlZ21lbnQgPT09IFwiLi5cIikge1xuICAgICAgLy8gS2VlcCB0aGUgcm9vdCBcIlwiIHNlZ21lbnQgc28gdGhlIHBhdGhuYW1lIHN0YXJ0cyBhdCAvXG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkgc2VnbWVudHMucG9wKCk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ICE9PSBcIi5cIikge1xuICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID4gMSA/IHNlZ21lbnRzLmpvaW4oXCIvXCIpIDogXCIvXCI7XG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRQYXRoRXJyb3IoY2hhciwgZmllbGQsIGRlc3QsIHBhdGgpIHtcbiAgcmV0dXJuIFwiQ2Fubm90IGluY2x1ZGUgYSAnXCIgKyBjaGFyICsgXCInIGNoYXJhY3RlciBpbiBhIG1hbnVhbGx5IHNwZWNpZmllZCBcIiArIChcImB0by5cIiArIGZpZWxkICsgXCJgIGZpZWxkIFtcIiArIEpTT04uc3RyaW5naWZ5KHBhdGgpICsgXCJdLiAgUGxlYXNlIHNlcGFyYXRlIGl0IG91dCB0byB0aGUgXCIpICsgKFwiYHRvLlwiICsgZGVzdCArIFwiYCBmaWVsZC4gQWx0ZXJuYXRpdmVseSB5b3UgbWF5IHByb3ZpZGUgdGhlIGZ1bGwgcGF0aCBhcyBcIikgKyBcImEgc3RyaW5nIGluIDxMaW5rIHRvPVxcXCIuLi5cXFwiPiBhbmQgdGhlIHJvdXRlciB3aWxsIHBhcnNlIGl0IGZvciB5b3UuXCI7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKlxuICogV2hlbiBwcm9jZXNzaW5nIHJlbGF0aXZlIG5hdmlnYXRpb24gd2Ugd2FudCB0byBpZ25vcmUgYW5jZXN0b3Igcm91dGVzIHRoYXRcbiAqIGRvIG5vdCBjb250cmlidXRlIHRvIHRoZSBwYXRoLCBzdWNoIHRoYXQgaW5kZXgvcGF0aGxlc3MgbGF5b3V0IHJvdXRlcyBkb24ndFxuICogaW50ZXJmZXJlLlxuICpcbiAqIEZvciBleGFtcGxlLCB3aGVuIG1vdmluZyBhIHJvdXRlIGVsZW1lbnQgaW50byBhbiBpbmRleCByb3V0ZSBhbmQvb3IgYVxuICogcGF0aGxlc3MgbGF5b3V0IHJvdXRlLCByZWxhdGl2ZSBsaW5rIGJlaGF2aW9yIGNvbnRhaW5lZCB3aXRoaW4gc2hvdWxkIHN0YXlcbiAqIHRoZSBzYW1lLiAgQm90aCBvZiB0aGUgZm9sbG93aW5nIGV4YW1wbGVzIHNob3VsZCBsaW5rIGJhY2sgdG8gdGhlIHJvb3Q6XG4gKlxuICogICA8Um91dGUgcGF0aD1cIi9cIj5cbiAqICAgICA8Um91dGUgcGF0aD1cImFjY291bnRzXCIgZWxlbWVudD17PExpbmsgdG89XCIuLlwifT5cbiAqICAgPC9Sb3V0ZT5cbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICogICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudHNcIj5cbiAqICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8QWNjb3VudHNMYXlvdXQgLz59PiAgICAgICAvLyA8LS0gRG9lcyBub3QgY29udHJpYnV0ZVxuICogICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PExpbmsgdG89XCIuLlwifSAvPiAgLy8gPC0tIERvZXMgbm90IGNvbnRyaWJ1dGVcbiAqICAgICAgIDwvUm91dGVcbiAqICAgICA8L1JvdXRlPlxuICogICA8L1JvdXRlPlxuICovXG5cblxuZnVuY3Rpb24gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykge1xuICByZXR1cm4gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4gaW5kZXggPT09IDAgfHwgbWF0Y2gucm91dGUucGF0aCAmJiBtYXRjaC5yb3V0ZS5wYXRoLmxlbmd0aCA+IDApO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVUbyh0b0FyZywgcm91dGVQYXRobmFtZXMsIGxvY2F0aW9uUGF0aG5hbWUsIGlzUGF0aFJlbGF0aXZlKSB7XG4gIGlmIChpc1BhdGhSZWxhdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgaXNQYXRoUmVsYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCB0bztcblxuICBpZiAodHlwZW9mIHRvQXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgdG8gPSBwYXJzZVBhdGgodG9BcmcpO1xuICB9IGVsc2Uge1xuICAgIHRvID0gX2V4dGVuZHMoe30sIHRvQXJnKTtcbiAgICBpbnZhcmlhbnQoIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIj9cIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCI/XCIsIFwicGF0aG5hbWVcIiwgXCJzZWFyY2hcIiwgdG8pKTtcbiAgICBpbnZhcmlhbnQoIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIiNcIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCIjXCIsIFwicGF0aG5hbWVcIiwgXCJoYXNoXCIsIHRvKSk7XG4gICAgaW52YXJpYW50KCF0by5zZWFyY2ggfHwgIXRvLnNlYXJjaC5pbmNsdWRlcyhcIiNcIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCIjXCIsIFwic2VhcmNoXCIsIFwiaGFzaFwiLCB0bykpO1xuICB9XG5cbiAgbGV0IGlzRW1wdHlQYXRoID0gdG9BcmcgPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCI7XG4gIGxldCB0b1BhdGhuYW1lID0gaXNFbXB0eVBhdGggPyBcIi9cIiA6IHRvLnBhdGhuYW1lO1xuICBsZXQgZnJvbTsgLy8gUm91dGluZyBpcyByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBwYXRobmFtZSBpZiBleHBsaWNpdGx5IHJlcXVlc3RlZC5cbiAgLy9cbiAgLy8gSWYgYSBwYXRobmFtZSBpcyBleHBsaWNpdGx5IHByb3ZpZGVkIGluIGB0b2AsIGl0IHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGVcbiAgLy8gcm91dGUgY29udGV4dC4gVGhpcyBpcyBleHBsYWluZWQgaW4gYE5vdGUgb24gYDxMaW5rIHRvPmAgdmFsdWVzYCBpbiBvdXJcbiAgLy8gbWlncmF0aW9uIGd1aWRlIGZyb20gdjUgYXMgYSBtZWFucyBvZiBkaXNhbWJpZ3VhdGlvbiBiZXR3ZWVuIGB0b2AgdmFsdWVzXG4gIC8vIHRoYXQgYmVnaW4gd2l0aCBgL2AgYW5kIHRob3NlIHRoYXQgZG8gbm90LiBIb3dldmVyLCB0aGlzIGlzIHByb2JsZW1hdGljIGZvclxuICAvLyBgdG9gIHZhbHVlcyB0aGF0IGRvIG5vdCBwcm92aWRlIGEgcGF0aG5hbWUuIGB0b2AgY2FuIHNpbXBseSBiZSBhIHNlYXJjaCBvclxuICAvLyBoYXNoIHN0cmluZywgaW4gd2hpY2ggY2FzZSB3ZSBzaG91bGQgYXNzdW1lIHRoYXQgdGhlIG5hdmlnYXRpb24gaXMgcmVsYXRpdmVcbiAgLy8gdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24ncyBwYXRobmFtZSBhbmQgKm5vdCogdGhlIHJvdXRlIHBhdGhuYW1lLlxuXG4gIGlmIChpc1BhdGhSZWxhdGl2ZSB8fCB0b1BhdGhuYW1lID09IG51bGwpIHtcbiAgICBmcm9tID0gbG9jYXRpb25QYXRobmFtZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcm91dGVQYXRobmFtZUluZGV4ID0gcm91dGVQYXRobmFtZXMubGVuZ3RoIC0gMTtcblxuICAgIGlmICh0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIuLlwiKSkge1xuICAgICAgbGV0IHRvU2VnbWVudHMgPSB0b1BhdGhuYW1lLnNwbGl0KFwiL1wiKTsgLy8gRWFjaCBsZWFkaW5nIC4uIHNlZ21lbnQgbWVhbnMgXCJnbyB1cCBvbmUgcm91dGVcIiBpbnN0ZWFkIG9mIFwiZ28gdXAgb25lXG4gICAgICAvLyBVUkwgc2VnbWVudFwiLiAgVGhpcyBpcyBhIGtleSBkaWZmZXJlbmNlIGZyb20gaG93IDxhIGhyZWY+IHdvcmtzIGFuZCBhXG4gICAgICAvLyBtYWpvciByZWFzb24gd2UgY2FsbCB0aGlzIGEgXCJ0b1wiIHZhbHVlIGluc3RlYWQgb2YgYSBcImhyZWZcIi5cblxuICAgICAgd2hpbGUgKHRvU2VnbWVudHNbMF0gPT09IFwiLi5cIikge1xuICAgICAgICB0b1NlZ21lbnRzLnNoaWZ0KCk7XG4gICAgICAgIHJvdXRlUGF0aG5hbWVJbmRleCAtPSAxO1xuICAgICAgfVxuXG4gICAgICB0by5wYXRobmFtZSA9IHRvU2VnbWVudHMuam9pbihcIi9cIik7XG4gICAgfSAvLyBJZiB0aGVyZSBhcmUgbW9yZSBcIi4uXCIgc2VnbWVudHMgdGhhbiBwYXJlbnQgcm91dGVzLCByZXNvbHZlIHJlbGF0aXZlIHRvXG4gICAgLy8gdGhlIHJvb3QgLyBVUkwuXG5cblxuICAgIGZyb20gPSByb3V0ZVBhdGhuYW1lSW5kZXggPj0gMCA/IHJvdXRlUGF0aG5hbWVzW3JvdXRlUGF0aG5hbWVJbmRleF0gOiBcIi9cIjtcbiAgfVxuXG4gIGxldCBwYXRoID0gcmVzb2x2ZVBhdGgodG8sIGZyb20pOyAvLyBFbnN1cmUgdGhlIHBhdGhuYW1lIGhhcyBhIHRyYWlsaW5nIHNsYXNoIGlmIHRoZSBvcmlnaW5hbCBcInRvXCIgaGFkIG9uZVxuXG4gIGxldCBoYXNFeHBsaWNpdFRyYWlsaW5nU2xhc2ggPSB0b1BhdGhuYW1lICYmIHRvUGF0aG5hbWUgIT09IFwiL1wiICYmIHRvUGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpOyAvLyBPciBpZiB0aGlzIHdhcyBhIGxpbmsgdG8gdGhlIGN1cnJlbnQgcGF0aCB3aGljaCBoYXMgYSB0cmFpbGluZyBzbGFzaFxuXG4gIGxldCBoYXNDdXJyZW50VHJhaWxpbmdTbGFzaCA9IChpc0VtcHR5UGF0aCB8fCB0b1BhdGhuYW1lID09PSBcIi5cIikgJiYgbG9jYXRpb25QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7XG5cbiAgaWYgKCFwYXRoLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSAmJiAoaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoIHx8IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoKSkge1xuICAgIHBhdGgucGF0aG5hbWUgKz0gXCIvXCI7XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRUb1BhdGhuYW1lKHRvKSB7XG4gIC8vIEVtcHR5IHN0cmluZ3Mgc2hvdWxkIGJlIHRyZWF0ZWQgdGhlIHNhbWUgYXMgLyBwYXRoc1xuICByZXR1cm4gdG8gPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykucGF0aG5hbWUgOiB0by5wYXRobmFtZTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBqb2luUGF0aHMgPSBwYXRocyA9PiBwYXRocy5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8rL2csIFwiL1wiKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBub3JtYWxpemVQYXRobmFtZSA9IHBhdGhuYW1lID0+IHBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikucmVwbGFjZSgvXlxcLyovLCBcIi9cIik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgbm9ybWFsaXplU2VhcmNoID0gc2VhcmNoID0+ICFzZWFyY2ggfHwgc2VhcmNoID09PSBcIj9cIiA/IFwiXCIgOiBzZWFyY2guc3RhcnRzV2l0aChcIj9cIikgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBub3JtYWxpemVIYXNoID0gaGFzaCA9PiAhaGFzaCB8fCBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbi8qKlxuICogVGhpcyBpcyBhIHNob3J0Y3V0IGZvciBjcmVhdGluZyBgYXBwbGljYXRpb24vanNvbmAgcmVzcG9uc2VzLiBDb252ZXJ0cyBgZGF0YWBcbiAqIHRvIEpTT04gYW5kIHNldHMgdGhlIGBDb250ZW50LVR5cGVgIGhlYWRlci5cbiAqL1xuXG5jb25zdCBqc29uID0gZnVuY3Rpb24ganNvbihkYXRhLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0ge307XG4gIH1cblxuICBsZXQgcmVzcG9uc2VJbml0ID0gdHlwZW9mIGluaXQgPT09IFwibnVtYmVyXCIgPyB7XG4gICAgc3RhdHVzOiBpbml0XG4gIH0gOiBpbml0O1xuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcblxuICBpZiAoIWhlYWRlcnMuaGFzKFwiQ29udGVudC1UeXBlXCIpKSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSwgX2V4dGVuZHMoe30sIHJlc3BvbnNlSW5pdCwge1xuICAgIGhlYWRlcnNcbiAgfSkpO1xufTtcbmNsYXNzIEFib3J0ZWREZWZlcnJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige31cbmNsYXNzIERlZmVycmVkRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlc3BvbnNlSW5pdCkge1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRlZmVycmVkS2V5cyA9IFtdO1xuICAgIGludmFyaWFudChkYXRhICYmIHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEpLCBcImRlZmVyKCkgb25seSBhY2NlcHRzIHBsYWluIG9iamVjdHNcIik7IC8vIFNldCB1cCBhbiBBYm9ydENvbnRyb2xsZXIgKyBQcm9taXNlIHdlIGNhbiByYWNlIGFnYWluc3QgdG8gZXhpdCBlYXJseVxuICAgIC8vIGNhbmNlbGxhdGlvblxuXG4gICAgbGV0IHJlamVjdDtcbiAgICB0aGlzLmFib3J0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByKSA9PiByZWplY3QgPSByKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBsZXQgb25BYm9ydCA9ICgpID0+IHJlamVjdChuZXcgQWJvcnRlZERlZmVycmVkRXJyb3IoXCJEZWZlcnJlZCBkYXRhIGFib3J0ZWRcIikpO1xuXG4gICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsID0gKCkgPT4gdGhpcy5jb250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICB0aGlzLmRhdGEgPSBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKGFjYywgX3JlZikgPT4ge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IF9yZWY7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgW2tleV06IHRoaXMudHJhY2tQcm9taXNlKGtleSwgdmFsdWUpXG4gICAgICB9KTtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAvLyBBbGwgaW5jb21pbmcgdmFsdWVzIHdlcmUgcmVzb2x2ZWRcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCA9IHJlc3BvbnNlSW5pdDtcbiAgfVxuXG4gIHRyYWNrUHJvbWlzZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuZGVmZXJyZWRLZXlzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmFkZChrZXkpOyAvLyBXZSBzdG9yZSBhIGxpdHRsZSB3cmFwcGVyIHByb21pc2UgdGhhdCB3aWxsIGJlIGV4dGVuZGVkIHdpdGhcbiAgICAvLyBfZGF0YS9fZXJyb3IgcHJvcHMgdXBvbiByZXNvbHZlL3JlamVjdFxuXG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJhY2UoW3ZhbHVlLCB0aGlzLmFib3J0UHJvbWlzZV0pLnRoZW4oZGF0YSA9PiB0aGlzLm9uU2V0dGxlKHByb21pc2UsIGtleSwgbnVsbCwgZGF0YSksIGVycm9yID0+IHRoaXMub25TZXR0bGUocHJvbWlzZSwga2V5LCBlcnJvcikpOyAvLyBSZWdpc3RlciByZWplY3Rpb24gbGlzdGVuZXJzIHRvIGF2b2lkIHVuY2F1Z2h0IHByb21pc2UgcmVqZWN0aW9ucyBvblxuICAgIC8vIGVycm9ycyBvciBhYm9ydGVkIGRlZmVycmVkIHZhbHVlc1xuXG4gICAgcHJvbWlzZS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBvblNldHRsZShwcm9taXNlLCBrZXksIGVycm9yLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCAmJiBlcnJvciBpbnN0YW5jZW9mIEFib3J0ZWREZWZlcnJlZEVycm9yKSB7XG4gICAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwoKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmRlbGV0ZShrZXkpO1xuXG4gICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgLy8gTm90aGluZyBsZWZ0IHRvIGFib3J0IVxuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdChmYWxzZSwga2V5KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgZ2V0OiAoKSA9PiBkYXRhXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZW1pdChhYm9ydGVkLCBzZXR0bGVkS2V5KSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihhYm9ydGVkLCBzZXR0bGVkS2V5KSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmFkZChmbik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKGZuKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmZvckVhY2goKHYsIGspID0+IHRoaXMucGVuZGluZ0tleXNTZXQuZGVsZXRlKGspKTtcbiAgICB0aGlzLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBhc3luYyByZXNvbHZlRGF0YShzaWduYWwpIHtcbiAgICBsZXQgYWJvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgIGxldCBvbkFib3J0ID0gKCkgPT4gdGhpcy5jYW5jZWwoKTtcblxuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIGFib3J0ZWQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcblxuICAgICAgICAgIGlmIChhYm9ydGVkIHx8IHRoaXMuZG9uZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShhYm9ydGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFib3J0ZWQ7XG4gIH1cblxuICBnZXQgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZW5kaW5nS2V5c1NldC5zaXplID09PSAwO1xuICB9XG5cbiAgZ2V0IHVud3JhcHBlZERhdGEoKSB7XG4gICAgaW52YXJpYW50KHRoaXMuZGF0YSAhPT0gbnVsbCAmJiB0aGlzLmRvbmUsIFwiQ2FuIG9ubHkgdW53cmFwIGRhdGEgb24gaW5pdGlhbGl6ZWQgYW5kIHNldHRsZWQgZGVmZXJyZWRzXCIpO1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLmRhdGEpLnJlZHVjZSgoYWNjLCBfcmVmMikgPT4ge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IF9yZWYyO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIFtrZXldOiB1bndyYXBUcmFja2VkUHJvbWlzZSh2YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGdldCBwZW5kaW5nS2V5cygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnBlbmRpbmdLZXlzU2V0KTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGlzVHJhY2tlZFByb21pc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5fdHJhY2tlZCA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdW53cmFwVHJhY2tlZFByb21pc2UodmFsdWUpIHtcbiAgaWYgKCFpc1RyYWNrZWRQcm9taXNlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5fZXJyb3IpIHtcbiAgICB0aHJvdyB2YWx1ZS5fZXJyb3I7XG4gIH1cblxuICByZXR1cm4gdmFsdWUuX2RhdGE7XG59XG5cbmNvbnN0IGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoZGF0YSwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IHt9O1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IHR5cGVvZiBpbml0ID09PSBcIm51bWJlclwiID8ge1xuICAgIHN0YXR1czogaW5pdFxuICB9IDogaW5pdDtcbiAgcmV0dXJuIG5ldyBEZWZlcnJlZERhdGEoZGF0YSwgcmVzcG9uc2VJbml0KTtcbn07XG4vKipcbiAqIEEgcmVkaXJlY3QgcmVzcG9uc2UuIFNldHMgdGhlIHN0YXR1cyBjb2RlIGFuZCB0aGUgYExvY2F0aW9uYCBoZWFkZXIuXG4gKiBEZWZhdWx0cyB0byBcIjMwMiBGb3VuZFwiLlxuICovXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QodXJsLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0gMzAyO1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IGluaXQ7XG5cbiAgaWYgKHR5cGVvZiByZXNwb25zZUluaXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXNwb25zZUluaXQgPSB7XG4gICAgICBzdGF0dXM6IHJlc3BvbnNlSW5pdFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlc3BvbnNlSW5pdC5zdGF0dXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZUluaXQuc3RhdHVzID0gMzAyO1xuICB9XG5cbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXNwb25zZUluaXQuaGVhZGVycyk7XG4gIGhlYWRlcnMuc2V0KFwiTG9jYXRpb25cIiwgdXJsKTtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCBfZXh0ZW5kcyh7fSwgcmVzcG9uc2VJbml0LCB7XG4gICAgaGVhZGVyc1xuICB9KSk7XG59O1xuLyoqXG4gKiBAcHJpdmF0ZVxuICogVXRpbGl0eSBjbGFzcyB3ZSB1c2UgdG8gaG9sZCBhdXRvLXVud3JhcHBlZCA0eHgvNXh4IFJlc3BvbnNlIGJvZGllc1xuICovXG5cbmNsYXNzIEVycm9yUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGludGVybmFsKSB7XG4gICAgaWYgKGludGVybmFsID09PSB2b2lkIDApIHtcbiAgICAgIGludGVybmFsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCB8fCBcIlwiO1xuICAgIHRoaXMuaW50ZXJuYWwgPSBpbnRlcm5hbDtcblxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuZXJyb3IgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlcnJvciBpcyBhbiBFcnJvclJlc3BvbnNlIGdlbmVyYXRlZCBmcm9tIGEgNHh4LzV4eFxuICogUmVzcG9uc2UgdGhyb3duIGZyb20gYW4gYWN0aW9uL2xvYWRlclxuICovXG5cbmZ1bmN0aW9uIGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSB7XG4gIHJldHVybiBlcnJvciAhPSBudWxsICYmIHR5cGVvZiBlcnJvci5zdGF0dXMgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVycm9yLnN0YXR1c1RleHQgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGVycm9yLmludGVybmFsID09PSBcImJvb2xlYW5cIiAmJiBcImRhdGFcIiBpbiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRNdXRhdGlvbk1ldGhvZHNBcnIgPSBbXCJwb3N0XCIsIFwicHV0XCIsIFwicGF0Y2hcIiwgXCJkZWxldGVcIl07XG5jb25zdCB2YWxpZE11dGF0aW9uTWV0aG9kcyA9IG5ldyBTZXQodmFsaWRNdXRhdGlvbk1ldGhvZHNBcnIpO1xuY29uc3QgdmFsaWRSZXF1ZXN0TWV0aG9kc0FyciA9IFtcImdldFwiLCAuLi52YWxpZE11dGF0aW9uTWV0aG9kc0Fycl07XG5jb25zdCB2YWxpZFJlcXVlc3RNZXRob2RzID0gbmV3IFNldCh2YWxpZFJlcXVlc3RNZXRob2RzQXJyKTtcbmNvbnN0IHJlZGlyZWN0U3RhdHVzQ29kZXMgPSBuZXcgU2V0KFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF0pO1xuY29uc3QgcmVkaXJlY3RQcmVzZXJ2ZU1ldGhvZFN0YXR1c0NvZGVzID0gbmV3IFNldChbMzA3LCAzMDhdKTtcbmNvbnN0IElETEVfTkFWSUdBVElPTiA9IHtcbiAgc3RhdGU6IFwiaWRsZVwiLFxuICBsb2NhdGlvbjogdW5kZWZpbmVkLFxuICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgZm9ybURhdGE6IHVuZGVmaW5lZFxufTtcbmNvbnN0IElETEVfRkVUQ0hFUiA9IHtcbiAgc3RhdGU6IFwiaWRsZVwiLFxuICBkYXRhOiB1bmRlZmluZWQsXG4gIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICBmb3JtRGF0YTogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9CTE9DS0VSID0ge1xuICBzdGF0ZTogXCJ1bmJsb2NrZWRcIixcbiAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICByZXNldDogdW5kZWZpbmVkLFxuICBsb2NhdGlvbjogdW5kZWZpbmVkXG59O1xuY29uc3QgQUJTT0xVVEVfVVJMX1JFR0VYID0gL14oPzpbYS16XVthLXowLTkrLi1dKjp8XFwvXFwvKS9pO1xuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IGlzU2VydmVyID0gIWlzQnJvd3NlcjtcblxuY29uc3QgZGVmYXVsdERldGVjdEVycm9yQm91bmRhcnkgPSByb3V0ZSA9PiBCb29sZWFuKHJvdXRlLmhhc0Vycm9yQm91bmRhcnkpOyAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gY3JlYXRlUm91dGVyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZSBhIHJvdXRlciBhbmQgbGlzdGVuIHRvIGhpc3RvcnkgUE9QIG5hdmlnYXRpb25zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoaW5pdCkge1xuICBpbnZhcmlhbnQoaW5pdC5yb3V0ZXMubGVuZ3RoID4gMCwgXCJZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IHJvdXRlcyBhcnJheSB0byBjcmVhdGVSb3V0ZXJcIik7XG4gIGxldCBkZXRlY3RFcnJvckJvdW5kYXJ5ID0gaW5pdC5kZXRlY3RFcnJvckJvdW5kYXJ5IHx8IGRlZmF1bHREZXRlY3RFcnJvckJvdW5kYXJ5OyAvLyBSb3V0ZXMga2V5ZWQgYnkgSURcblxuICBsZXQgbWFuaWZlc3QgPSB7fTsgLy8gUm91dGVzIGluIHRyZWUgZm9ybWF0IGZvciBtYXRjaGluZ1xuXG4gIGxldCBkYXRhUm91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhpbml0LnJvdXRlcywgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgdW5kZWZpbmVkLCBtYW5pZmVzdCk7XG4gIGxldCBpbkZsaWdodERhdGFSb3V0ZXM7IC8vIENvbmZpZyBkcml2ZW4gYmVoYXZpb3IgZmxhZ3NcblxuICBsZXQgZnV0dXJlID0gX2V4dGVuZHMoe1xuICAgIHY3X25vcm1hbGl6ZUZvcm1NZXRob2Q6IGZhbHNlXG4gIH0sIGluaXQuZnV0dXJlKTsgLy8gQ2xlYW51cCBmdW5jdGlvbiBmb3IgaGlzdG9yeVxuXG5cbiAgbGV0IHVubGlzdGVuSGlzdG9yeSA9IG51bGw7IC8vIEV4dGVybmFsbHktcHJvdmlkZWQgZnVuY3Rpb25zIHRvIGNhbGwgb24gYWxsIHN0YXRlIGNoYW5nZXNcblxuICBsZXQgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7IC8vIEV4dGVybmFsbHktcHJvdmlkZWQgb2JqZWN0IHRvIGhvbGQgc2Nyb2xsIHJlc3RvcmF0aW9uIGxvY2F0aW9ucyBkdXJpbmcgcm91dGluZ1xuXG4gIGxldCBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IG51bGw7IC8vIEV4dGVybmFsbHktcHJvdmlkZWQgZnVuY3Rpb24gdG8gZ2V0IHNjcm9sbCByZXN0b3JhdGlvbiBrZXlzXG5cbiAgbGV0IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbiB0byBnZXQgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cblxuICBsZXQgZ2V0U2Nyb2xsUG9zaXRpb24gPSBudWxsOyAvLyBPbmUtdGltZSBmbGFnIHRvIGNvbnRyb2wgdGhlIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbi4gIEJlY2F1c2VcbiAgLy8gd2UgZG9uJ3QgZ2V0IHRoZSBzYXZlZCBwb3NpdGlvbnMgZnJvbSA8U2Nyb2xsUmVzdG9yYXRpb24gLz4gdW50aWwgX2FmdGVyX1xuICAvLyB0aGUgaW5pdGlhbCByZW5kZXIsIHdlIG5lZWQgdG8gbWFudWFsbHkgdHJpZ2dlciBhIHNlcGFyYXRlIHVwZGF0ZVN0YXRlIHRvXG4gIC8vIHNlbmQgYWxvbmcgdGhlIHJlc3RvcmVTY3JvbGxQb3NpdGlvblxuICAvLyBTZXQgdG8gdHJ1ZSBpZiB3ZSBoYXZlIGBoeWRyYXRpb25EYXRhYCBzaW5jZSB3ZSBhc3N1bWUgd2Ugd2VyZSBTU1InZCBhbmQgdGhhdFxuICAvLyBTU1IgZGlkIHRoZSBpbml0aWFsIHNjcm9sbCByZXN0b3JhdGlvbi5cblxuICBsZXQgaW5pdGlhbFNjcm9sbFJlc3RvcmVkID0gaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGw7XG4gIGxldCBpbml0aWFsTWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGluaXQuaGlzdG9yeS5sb2NhdGlvbiwgaW5pdC5iYXNlbmFtZSk7XG4gIGxldCBpbml0aWFsRXJyb3JzID0gbnVsbDtcblxuICBpZiAoaW5pdGlhbE1hdGNoZXMgPT0gbnVsbCkge1xuICAgIC8vIElmIHdlIGRvIG5vdCBtYXRjaCBhIHVzZXItcHJvdmlkZWQtcm91dGUsIGZhbGwgYmFjayB0byB0aGUgcm9vdFxuICAgIC8vIHRvIGFsbG93IHRoZSBlcnJvciBib3VuZGFyeSB0byB0YWtlIG92ZXJcbiAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgcGF0aG5hbWU6IGluaXQuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZVxuICAgIH0pO1xuICAgIGxldCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgcm91dGVcbiAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICBpbml0aWFsTWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgaW5pdGlhbEVycm9ycyA9IHtcbiAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGxldCBpbml0aWFsaXplZCA9IC8vIEFsbCBpbml0aWFsTWF0Y2hlcyBuZWVkIHRvIGJlIGxvYWRlZCBiZWZvcmUgd2UncmUgcmVhZHkuICBJZiB3ZSBoYXZlIGxhenlcbiAgLy8gZnVuY3Rpb25zIGFyb3VuZCBzdGlsbCB0aGVuIHdlJ2xsIG5lZWQgdG8gcnVuIHRoZW0gaW4gaW5pdGlhbGl6ZSgpXG4gICFpbml0aWFsTWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5sYXp5KSAmJiAoIC8vIEFuZCB3ZSBoYXZlIHRvIGVpdGhlciBoYXZlIG5vIGxvYWRlcnMgb3IgaGF2ZSBiZWVuIHByb3ZpZGVkIGh5ZHJhdGlvbkRhdGFcbiAgIWluaXRpYWxNYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmxvYWRlcikgfHwgaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGwpO1xuICBsZXQgcm91dGVyO1xuICBsZXQgc3RhdGUgPSB7XG4gICAgaGlzdG9yeUFjdGlvbjogaW5pdC5oaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaW5pdC5oaXN0b3J5LmxvY2F0aW9uLFxuICAgIG1hdGNoZXM6IGluaXRpYWxNYXRjaGVzLFxuICAgIGluaXRpYWxpemVkLFxuICAgIG5hdmlnYXRpb246IElETEVfTkFWSUdBVElPTixcbiAgICAvLyBEb24ndCByZXN0b3JlIG9uIGluaXRpYWwgdXBkYXRlU3RhdGUoKSBpZiB3ZSB3ZXJlIFNTUidkXG4gICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uOiBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbCA/IGZhbHNlIDogbnVsbCxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IGZhbHNlLFxuICAgIHJldmFsaWRhdGlvbjogXCJpZGxlXCIsXG4gICAgbG9hZGVyRGF0YTogaW5pdC5oeWRyYXRpb25EYXRhICYmIGluaXQuaHlkcmF0aW9uRGF0YS5sb2FkZXJEYXRhIHx8IHt9LFxuICAgIGFjdGlvbkRhdGE6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEuYWN0aW9uRGF0YSB8fCBudWxsLFxuICAgIGVycm9yczogaW5pdC5oeWRyYXRpb25EYXRhICYmIGluaXQuaHlkcmF0aW9uRGF0YS5lcnJvcnMgfHwgaW5pdGlhbEVycm9ycyxcbiAgICBmZXRjaGVyczogbmV3IE1hcCgpLFxuICAgIGJsb2NrZXJzOiBuZXcgTWFwKClcbiAgfTsgLy8gLS0gU3RhdGVmdWwgaW50ZXJuYWwgdmFyaWFibGVzIHRvIG1hbmFnZSBuYXZpZ2F0aW9ucyAtLVxuICAvLyBDdXJyZW50IG5hdmlnYXRpb24gaW4gcHJvZ3Jlc3MgKHRvIGJlIGNvbW1pdHRlZCBpbiBjb21wbGV0ZU5hdmlnYXRpb24pXG5cbiAgbGV0IHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUG9wOyAvLyBTaG91bGQgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBwcmV2ZW50IHRoZSBzY3JvbGwgcmVzZXQgaWYgc2Nyb2xsIGNhbm5vdFxuICAvLyBiZSByZXN0b3JlZD9cblxuICBsZXQgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IGZhbHNlOyAvLyBBYm9ydENvbnRyb2xsZXIgZm9yIHRoZSBhY3RpdmUgbmF2aWdhdGlvblxuXG4gIGxldCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXI7IC8vIFdlIHVzZSB0aGlzIHRvIGF2b2lkIHRvdWNoaW5nIGhpc3RvcnkgaW4gY29tcGxldGVOYXZpZ2F0aW9uIGlmIGFcbiAgLy8gcmV2YWxpZGF0aW9uIGlzIGVudGlyZWx5IHVuaW50ZXJydXB0ZWRcblxuICBsZXQgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gZmFsc2U7IC8vIFVzZSB0aGlzIGludGVybmFsIGZsYWcgdG8gZm9yY2UgcmV2YWxpZGF0aW9uIG9mIGFsbCBsb2FkZXJzOlxuICAvLyAgLSBzdWJtaXNzaW9ucyAoY29tcGxldGVkIG9yIGludGVycnVwdGVkKVxuICAvLyAgLSB1c2VSZXZhbGlkYXRlKClcbiAgLy8gIC0gWC1SZW1peC1SZXZhbGlkYXRlIChmcm9tIHJlZGlyZWN0KVxuXG4gIGxldCBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7IC8vIFVzZSB0aGlzIGludGVybmFsIGFycmF5IHRvIGNhcHR1cmUgcm91dGVzIHRoYXQgcmVxdWlyZSByZXZhbGlkYXRpb24gZHVlXG4gIC8vIHRvIGEgY2FuY2VsbGVkIGRlZmVycmVkIG9uIGFjdGlvbiBzdWJtaXNzaW9uXG5cbiAgbGV0IGNhbmNlbGxlZERlZmVycmVkUm91dGVzID0gW107IC8vIFVzZSB0aGlzIGludGVybmFsIGFycmF5IHRvIGNhcHR1cmUgZmV0Y2hlciBsb2FkcyB0aGF0IHdlcmUgY2FuY2VsbGVkIGJ5IGFuXG4gIC8vIGFjdGlvbiBuYXZpZ2F0aW9uIGFuZCByZXF1aXJlIHJldmFsaWRhdGlvblxuXG4gIGxldCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMgPSBbXTsgLy8gQWJvcnRDb250cm9sbGVycyBmb3IgYW55IGluLWZsaWdodCBmZXRjaGVyc1xuXG4gIGxldCBmZXRjaENvbnRyb2xsZXJzID0gbmV3IE1hcCgpOyAvLyBUcmFjayBsb2FkcyBiYXNlZCBvbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSBzdGFydGVkXG5cbiAgbGV0IGluY3JlbWVudGluZ0xvYWRJZCA9IDA7IC8vIFRyYWNrIHRoZSBvdXRzdGFuZGluZyBwZW5kaW5nIG5hdmlnYXRpb24gZGF0YSBsb2FkIHRvIGJlIGNvbXBhcmVkIGFnYWluc3RcbiAgLy8gdGhlIGdsb2JhbGx5IGluY3JlbWVudGluZyBsb2FkIHdoZW4gYSBmZXRjaGVyIGxvYWQgbGFuZHMgYWZ0ZXIgYSBjb21wbGV0ZWRcbiAgLy8gbmF2aWdhdGlvblxuXG4gIGxldCBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA9IC0xOyAvLyBGZXRjaGVycyB0aGF0IHRyaWdnZXJlZCBkYXRhIHJlbG9hZHMgYXMgYSByZXN1bHQgb2YgdGhlaXIgYWN0aW9uc1xuXG4gIGxldCBmZXRjaFJlbG9hZElkcyA9IG5ldyBNYXAoKTsgLy8gRmV0Y2hlcnMgdGhhdCB0cmlnZ2VyZWQgcmVkaXJlY3QgbmF2aWdhdGlvbnMgZnJvbSB0aGVpciBhY3Rpb25zXG5cbiAgbGV0IGZldGNoUmVkaXJlY3RJZHMgPSBuZXcgU2V0KCk7IC8vIE1vc3QgcmVjZW50IGhyZWYvbWF0Y2ggZm9yIGZldGNoZXIubG9hZCBjYWxscyBmb3IgZmV0Y2hlcnNcblxuICBsZXQgZmV0Y2hMb2FkTWF0Y2hlcyA9IG5ldyBNYXAoKTsgLy8gU3RvcmUgRGVmZXJyZWREYXRhIGluc3RhbmNlcyBmb3IgYWN0aXZlIHJvdXRlIG1hdGNoZXMuICBXaGVuIGFcbiAgLy8gcm91dGUgbG9hZGVyIHJldHVybnMgZGVmZXIoKSB3ZSBzdGljayBvbmUgaW4gaGVyZS4gIFRoZW4sIHdoZW4gYSBuZXN0ZWRcbiAgLy8gcHJvbWlzZSByZXNvbHZlcyB3ZSB1cGRhdGUgbG9hZGVyRGF0YS4gIElmIGEgbmV3IG5hdmlnYXRpb24gc3RhcnRzIHdlXG4gIC8vIGNhbmNlbCBhY3RpdmUgZGVmZXJyZWRzIGZvciBlbGltaW5hdGVkIHJvdXRlcy5cblxuICBsZXQgYWN0aXZlRGVmZXJyZWRzID0gbmV3IE1hcCgpOyAvLyBTdG9yZSBibG9ja2VyIGZ1bmN0aW9ucyBpbiBhIHNlcGFyYXRlIE1hcCBvdXRzaWRlIG9mIHJvdXRlciBzdGF0ZSBzaW5jZVxuICAvLyB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSBVSSBzdGF0ZSBpZiB0aGV5IGNoYW5nZVxuXG4gIGxldCBibG9ja2VyRnVuY3Rpb25zID0gbmV3IE1hcCgpOyAvLyBGbGFnIHRvIGlnbm9yZSB0aGUgbmV4dCBoaXN0b3J5IHVwZGF0ZSwgc28gd2UgY2FuIHJldmVydCB0aGUgVVJMIGNoYW5nZSBvblxuICAvLyBhIFBPUCBuYXZpZ2F0aW9uIHRoYXQgd2FzIGJsb2NrZWQgYnkgdGhlIHVzZXIgd2l0aG91dCB0b3VjaGluZyByb3V0ZXIgc3RhdGVcblxuICBsZXQgaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUgPSBmYWxzZTsgLy8gSW5pdGlhbGl6ZSB0aGUgcm91dGVyLCBhbGwgc2lkZSBlZmZlY3RzIHNob3VsZCBiZSBraWNrZWQgb2ZmIGZyb20gaGVyZS5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgYSBGbHVlbnQgQVBJIGZvciBlYXNlIG9mOlxuICAvLyAgIGxldCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoaW5pdCkuaW5pdGlhbGl6ZSgpO1xuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gSWYgaGlzdG9yeSBpbmZvcm1zIHVzIG9mIGEgUE9QIG5hdmlnYXRpb24sIHN0YXJ0IHRoZSBuYXZpZ2F0aW9uIGJ1dCBkbyBub3QgdXBkYXRlXG4gICAgLy8gc3RhdGUuICBXZSdsbCB1cGRhdGUgb3VyIG93biBzdGF0ZSBvbmNlIHRoZSBuYXZpZ2F0aW9uIGNvbXBsZXRlc1xuICAgIHVubGlzdGVuSGlzdG9yeSA9IGluaXQuaGlzdG9yeS5saXN0ZW4oX3JlZiA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBhY3Rpb246IGhpc3RvcnlBY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBkZWx0YVxuICAgICAgfSA9IF9yZWY7XG5cbiAgICAgIC8vIElnbm9yZSB0aGlzIGV2ZW50IGlmIGl0IHdhcyBqdXN0IHVzIHJlc2V0dGluZyB0aGUgVVJMIGZyb20gYVxuICAgICAgLy8gYmxvY2tlZCBQT1AgbmF2aWdhdGlvblxuICAgICAgaWYgKGlnbm9yZU5leHRIaXN0b3J5VXBkYXRlKSB7XG4gICAgICAgIGlnbm9yZU5leHRIaXN0b3J5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgd2FybmluZyhibG9ja2VyRnVuY3Rpb25zLnNpemUgPT09IDAgfHwgZGVsdGEgIT0gbnVsbCwgXCJZb3UgYXJlIHRyeWluZyB0byB1c2UgYSBibG9ja2VyIG9uIGEgUE9QIG5hdmlnYXRpb24gdG8gYSBsb2NhdGlvbiBcIiArIFwidGhhdCB3YXMgbm90IGNyZWF0ZWQgYnkgQHJlbWl4LXJ1bi9yb3V0ZXIuIFRoaXMgd2lsbCBmYWlsIHNpbGVudGx5IGluIFwiICsgXCJwcm9kdWN0aW9uLiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSBuYXZpZ2F0aW5nIG91dHNpZGUgdGhlIHJvdXRlciBcIiArIFwidmlhIGB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGVgL2B3aW5kb3cubG9jYXRpb24uaGFzaGAgaW5zdGVhZCBvZiB1c2luZyBcIiArIFwicm91dGVyIG5hdmlnYXRpb24gQVBJcy4gIFRoaXMgY2FuIGFsc28gaGFwcGVuIGlmIHlvdSBhcmUgdXNpbmcgXCIgKyBcImNyZWF0ZUhhc2hSb3V0ZXIgYW5kIHRoZSB1c2VyIG1hbnVhbGx5IGNoYW5nZXMgdGhlIFVSTC5cIik7XG4gICAgICBsZXQgYmxvY2tlcktleSA9IHNob3VsZEJsb2NrTmF2aWdhdGlvbih7XG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICAgIG5leHRMb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYmxvY2tlcktleSAmJiBkZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIFVSTCB0byBtYXRjaCB0aGUgY3VycmVudCBVSSwgYnV0IGRvbid0IHVwZGF0ZSByb3V0ZXIgc3RhdGVcbiAgICAgICAgaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUgPSB0cnVlO1xuICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEgKiAtMSk7IC8vIFB1dCB0aGUgYmxvY2tlciBpbnRvIGEgYmxvY2tlZCBzdGF0ZVxuXG4gICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgIHN0YXRlOiBcImJsb2NrZWRcIixcbiAgICAgICAgICBsb2NhdGlvbixcblxuICAgICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICAgICAgc3RhdGU6IFwicHJvY2VlZGluZ1wiLFxuICAgICAgICAgICAgICBwcm9jZWVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHJlc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgICB9KTsgLy8gUmUtZG8gdGhlIHNhbWUgUE9QIG5hdmlnYXRpb24gd2UganVzdCBibG9ja2VkXG5cbiAgICAgICAgICAgIGluaXQuaGlzdG9yeS5nbyhkZWx0YSk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgZGVsZXRlQmxvY2tlcihibG9ja2VyS2V5KTtcbiAgICAgICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgYmxvY2tlcnM6IG5ldyBNYXAocm91dGVyLnN0YXRlLmJsb2NrZXJzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbG9jYXRpb24pO1xuICAgIH0pOyAvLyBLaWNrIG9mZiBpbml0aWFsIGRhdGEgbG9hZCBpZiBuZWVkZWQuICBVc2UgUG9wIHRvIGF2b2lkIG1vZGlmeWluZyBoaXN0b3J5XG4gICAgLy8gTm90ZSB3ZSBkb24ndCBkbyBhbnkgaGFuZGxpbmcgb2YgbGF6eSBoZXJlLiAgRm9yIFNQQSdzIGl0J2xsIGdldCBoYW5kbGVkXG4gICAgLy8gaW4gdGhlIG5vcm1hbCBuYXZpZ2F0aW9uIGZsb3cuICBGb3IgU1NSIGl0J3MgZXhwZWN0ZWQgdGhhdCBsYXp5IG1vZHVsZXMgYXJlXG4gICAgLy8gcmVzb2x2ZWQgcHJpb3IgdG8gcm91dGVyIGNyZWF0aW9uIHNpbmNlIHdlIGNhbid0IGdvIGludG8gYSBmYWxsYmFja0VsZW1lbnRcbiAgICAvLyBVSSBmb3IgU1NSJ2QgYXBwc1xuXG4gICAgaWYgKCFzdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKEFjdGlvbi5Qb3AsIHN0YXRlLmxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm91dGVyO1xuICB9IC8vIENsZWFuIHVwIGEgcm91dGVyIGFuZCBpdCdzIHNpZGUgZWZmZWN0c1xuXG5cbiAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodW5saXN0ZW5IaXN0b3J5KSB7XG4gICAgICB1bmxpc3Rlbkhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVycy5jbGVhcigpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChfLCBrZXkpID0+IGRlbGV0ZUZldGNoZXIoa2V5KSk7XG4gICAgc3RhdGUuYmxvY2tlcnMuZm9yRWFjaCgoXywga2V5KSA9PiBkZWxldGVCbG9ja2VyKGtleSkpO1xuICB9IC8vIFN1YnNjcmliZSB0byBzdGF0ZSB1cGRhdGVzIGZvciB0aGUgcm91dGVyXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZm4pIHtcbiAgICBzdWJzY3JpYmVycy5hZGQoZm4pO1xuICAgIHJldHVybiAoKSA9PiBzdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9IC8vIFVwZGF0ZSBvdXIgc3RhdGUgYW5kIG5vdGlmeSB0aGUgY2FsbGluZyBjb250ZXh0IG9mIHRoZSBjaGFuZ2VcblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihzdGF0ZSkpO1xuICB9IC8vIENvbXBsZXRlIGEgbmF2aWdhdGlvbiByZXR1cm5pbmcgdGhlIHN0YXRlLm5hdmlnYXRpb24gYmFjayB0byB0aGUgSURMRV9OQVZJR0FUSU9OXG4gIC8vIGFuZCBzZXR0aW5nIHN0YXRlLltoaXN0b3J5QWN0aW9uL2xvY2F0aW9uL21hdGNoZXNdIHRvIHRoZSBuZXcgcm91dGUuXG4gIC8vIC0gTG9jYXRpb24gaXMgYSByZXF1aXJlZCBwYXJhbVxuICAvLyAtIE5hdmlnYXRpb24gd2lsbCBhbHdheXMgYmUgc2V0IHRvIElETEVfTkFWSUdBVElPTlxuICAvLyAtIENhbiBwYXNzIGFueSBvdGhlciBzdGF0ZSBpbiBuZXdTdGF0ZVxuXG5cbiAgZnVuY3Rpb24gY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZSkge1xuICAgIHZhciBfbG9jYXRpb24kc3RhdGUsIF9sb2NhdGlvbiRzdGF0ZTI7XG5cbiAgICAvLyBEZWR1Y2UgaWYgd2UncmUgaW4gYSBsb2FkaW5nL2FjdGlvblJlbG9hZCBzdGF0ZTpcbiAgICAvLyAtIFdlIGhhdmUgY29tbWl0dGVkIGFjdGlvbkRhdGEgaW4gdGhlIHN0b3JlXG4gICAgLy8gLSBUaGUgY3VycmVudCBuYXZpZ2F0aW9uIHdhcyBhIG11dGF0aW9uIHN1Ym1pc3Npb25cbiAgICAvLyAtIFdlJ3JlIHBhc3QgdGhlIHN1Ym1pdHRpbmcgc3RhdGUgYW5kIGludG8gdGhlIGxvYWRpbmcgc3RhdGVcbiAgICAvLyAtIFRoZSBsb2NhdGlvbiBiZWluZyBsb2FkZWQgaXMgbm90IHRoZSByZXN1bHQgb2YgYSByZWRpcmVjdFxuICAgIGxldCBpc0FjdGlvblJlbG9hZCA9IHN0YXRlLmFjdGlvbkRhdGEgIT0gbnVsbCAmJiBzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QgIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCkgJiYgc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgKChfbG9jYXRpb24kc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sb2NhdGlvbiRzdGF0ZS5faXNSZWRpcmVjdCkgIT09IHRydWU7XG4gICAgbGV0IGFjdGlvbkRhdGE7XG5cbiAgICBpZiAobmV3U3RhdGUuYWN0aW9uRGF0YSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld1N0YXRlLmFjdGlvbkRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWN0aW9uRGF0YSA9IG5ld1N0YXRlLmFjdGlvbkRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFbXB0eSBhY3Rpb25EYXRhIC0+IGNsZWFyIHByaW9yIGFjdGlvbkRhdGEgZHVlIHRvIGFuIGFjdGlvbiBlcnJvclxuICAgICAgICBhY3Rpb25EYXRhID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWN0aW9uUmVsb2FkKSB7XG4gICAgICAvLyBLZWVwIHRoZSBjdXJyZW50IGRhdGEgaWYgd2UncmUgd3JhcHBpbmcgdXAgdGhlIGFjdGlvbiByZWxvYWRcbiAgICAgIGFjdGlvbkRhdGEgPSBzdGF0ZS5hY3Rpb25EYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbGVhciBhY3Rpb25EYXRhIG9uIGFueSBvdGhlciBjb21wbGV0ZWQgbmF2aWdhdGlvbnNcbiAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgIH0gLy8gQWx3YXlzIHByZXNlcnZlIGFueSBleGlzdGluZyBsb2FkZXJEYXRhIGZyb20gcmUtdXNlZCByb3V0ZXNcblxuXG4gICAgbGV0IGxvYWRlckRhdGEgPSBuZXdTdGF0ZS5sb2FkZXJEYXRhID8gbWVyZ2VMb2FkZXJEYXRhKHN0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLm1hdGNoZXMgfHwgW10sIG5ld1N0YXRlLmVycm9ycykgOiBzdGF0ZS5sb2FkZXJEYXRhOyAvLyBPbiBhIHN1Y2Nlc3NmdWwgbmF2aWdhdGlvbiB3ZSBjYW4gYXNzdW1lIHdlIGdvdCB0aHJvdWdoIGFsbCBibG9ja2Vyc1xuICAgIC8vIHNvIHdlIGNhbiBzdGFydCBmcmVzaFxuXG4gICAgZm9yIChsZXQgW2tleV0gb2YgYmxvY2tlckZ1bmN0aW9ucykge1xuICAgICAgZGVsZXRlQmxvY2tlcihrZXkpO1xuICAgIH0gLy8gQWx3YXlzIHJlc3BlY3QgdGhlIHVzZXIgZmxhZy4gIE90aGVyd2lzZSBkb24ndCByZXNldCBvbiBtdXRhdGlvblxuICAgIC8vIHN1Ym1pc3Npb24gbmF2aWdhdGlvbnMgdW5sZXNzIHRoZXkgcmVkaXJlY3RcblxuXG4gICAgbGV0IHByZXZlbnRTY3JvbGxSZXNldCA9IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUgfHwgc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QpICYmICgoX2xvY2F0aW9uJHN0YXRlMiA9IGxvY2F0aW9uLnN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2xvY2F0aW9uJHN0YXRlMi5faXNSZWRpcmVjdCkgIT09IHRydWU7XG5cbiAgICBpZiAoaW5GbGlnaHREYXRhUm91dGVzKSB7XG4gICAgICBkYXRhUm91dGVzID0gaW5GbGlnaHREYXRhUm91dGVzO1xuICAgICAgaW5GbGlnaHREYXRhUm91dGVzID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHt9LCBuZXdTdGF0ZSwge1xuICAgICAgYWN0aW9uRGF0YSxcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBoaXN0b3J5QWN0aW9uOiBwZW5kaW5nQWN0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb246IElETEVfTkFWSUdBVElPTixcbiAgICAgIHJldmFsaWRhdGlvbjogXCJpZGxlXCIsXG4gICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IGdldFNhdmVkU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG5ld1N0YXRlLm1hdGNoZXMgfHwgc3RhdGUubWF0Y2hlcyksXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICB9KSk7XG5cbiAgICBpZiAoaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uKSA7IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5Qb3ApIDsgZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlB1c2gpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5wdXNoKGxvY2F0aW9uLCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUmVwbGFjZSkge1xuICAgICAgaW5pdC5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24sIGxvY2F0aW9uLnN0YXRlKTtcbiAgICB9IC8vIFJlc2V0IHN0YXRlZnVsIG5hdmlnYXRpb24gdmFyc1xuXG5cbiAgICBwZW5kaW5nQWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gZmFsc2U7XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gZmFsc2U7XG4gICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIGNhbmNlbGxlZERlZmVycmVkUm91dGVzID0gW107XG4gICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzID0gW107XG4gIH0gLy8gVHJpZ2dlciBhIG5hdmlnYXRpb24gZXZlbnQsIHdoaWNoIGNhbiBlaXRoZXIgYmUgYSBudW1lcmljYWwgUE9QIG9yIGEgUFVTSFxuICAvLyByZXBsYWNlIHdpdGggYW4gb3B0aW9uYWwgc3VibWlzc2lvblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGUodG8sIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpbml0Lmhpc3RvcnkuZ28odG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBwYXRoLFxuICAgICAgc3VibWlzc2lvbixcbiAgICAgIGVycm9yXG4gICAgfSA9IG5vcm1hbGl6ZU5hdmlnYXRlT3B0aW9ucyh0bywgZnV0dXJlLCBvcHRzKTtcbiAgICBsZXQgY3VycmVudExvY2F0aW9uID0gc3RhdGUubG9jYXRpb247XG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLmxvY2F0aW9uLCBwYXRoLCBvcHRzICYmIG9wdHMuc3RhdGUpOyAvLyBXaGVuIHVzaW5nIG5hdmlnYXRlIGFzIGEgUFVTSC9SRVBMQUNFIHdlIGFyZW4ndCByZWFkaW5nIGFuIGFscmVhZHktZW5jb2RlZFxuICAgIC8vIFVSTCBmcm9tIHdpbmRvdy5sb2NhdGlvbiwgc28gd2UgbmVlZCB0byBlbmNvZGUgaXQgaGVyZSBzbyB0aGUgYmVoYXZpb3JcbiAgICAvLyByZW1haW5zIHRoZSBzYW1lIGFzIFBPUCBhbmQgbm9uLWRhdGEtcm91dGVyIHVzYWdlcy4gIG5ldyBVUkwoKSBkb2VzIGFsbFxuICAgIC8vIHRoZSBzYW1lIGVuY29kaW5nIHdlJ2QgZ2V0IGZyb20gYSBoaXN0b3J5LnB1c2hTdGF0ZS93aW5kb3cubG9jYXRpb24gcmVhZFxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIHRvIHRvdWNoIGhpc3RvcnlcblxuICAgIG5leHRMb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBuZXh0TG9jYXRpb24sIGluaXQuaGlzdG9yeS5lbmNvZGVMb2NhdGlvbihuZXh0TG9jYXRpb24pKTtcbiAgICBsZXQgdXNlclJlcGxhY2UgPSBvcHRzICYmIG9wdHMucmVwbGFjZSAhPSBudWxsID8gb3B0cy5yZXBsYWNlIDogdW5kZWZpbmVkO1xuICAgIGxldCBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlB1c2g7XG5cbiAgICBpZiAodXNlclJlcGxhY2UgPT09IHRydWUpIHtcbiAgICAgIGhpc3RvcnlBY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICB9IGVsc2UgaWYgKHVzZXJSZXBsYWNlID09PSBmYWxzZSkgOyBlbHNlIGlmIChzdWJtaXNzaW9uICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpICYmIHN1Ym1pc3Npb24uZm9ybUFjdGlvbiA9PT0gc3RhdGUubG9jYXRpb24ucGF0aG5hbWUgKyBzdGF0ZS5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIC8vIEJ5IGRlZmF1bHQgb24gc3VibWlzc2lvbnMgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2UgUkVQTEFDRSBzbyB0aGF0XG4gICAgICAvLyB1c2VycyBkb24ndCBoYXZlIHRvIGRvdWJsZS1jbGljayB0aGUgYmFjayBidXR0b24gdG8gZ2V0IHRvIHRoZSBwcmlvclxuICAgICAgLy8gbG9jYXRpb24uICBJZiB0aGUgdXNlciByZWRpcmVjdHMgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gZnJvbSB0aGVcbiAgICAgIC8vIGFjdGlvbi9sb2FkZXIgdGhpcyB3aWxsIGJlIGlnbm9yZWQgYW5kIHRoZSByZWRpcmVjdCB3aWxsIGJlIGEgUFVTSFxuICAgICAgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIH1cblxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBvcHRzICYmIFwicHJldmVudFNjcm9sbFJlc2V0XCIgaW4gb3B0cyA/IG9wdHMucHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIDogdW5kZWZpbmVkO1xuICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KTtcblxuICAgIGlmIChibG9ja2VyS2V5KSB7XG4gICAgICAvLyBQdXQgdGhlIGJsb2NrZXIgaW50byBhIGJsb2NrZWQgc3RhdGVcbiAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG5cbiAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICAgIHN0YXRlOiBcInByb2NlZWRpbmdcIixcbiAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uXG4gICAgICAgICAgfSk7IC8vIFNlbmQgdGhlIHNhbWUgbmF2aWdhdGlvbiB0aHJvdWdoXG5cbiAgICAgICAgICBuYXZpZ2F0ZSh0bywgb3B0cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgZGVsZXRlQmxvY2tlcihibG9ja2VyS2V5KTtcbiAgICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgc3RhcnROYXZpZ2F0aW9uKGhpc3RvcnlBY3Rpb24sIG5leHRMb2NhdGlvbiwge1xuICAgICAgc3VibWlzc2lvbixcbiAgICAgIC8vIFNlbmQgdGhyb3VnaCB0aGUgZm9ybURhdGEgc2VyaWFsaXphdGlvbiBlcnJvciBpZiB3ZSBoYXZlIG9uZSBzbyB3ZSBjYW5cbiAgICAgIC8vIHJlbmRlciBhdCB0aGUgcmlnaHQgZXJyb3IgYm91bmRhcnkgYWZ0ZXIgd2UgbWF0Y2ggcm91dGVzXG4gICAgICBwZW5kaW5nRXJyb3I6IGVycm9yLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgcmVwbGFjZTogb3B0cyAmJiBvcHRzLnJlcGxhY2VcbiAgICB9KTtcbiAgfSAvLyBSZXZhbGlkYXRlIGFsbCBjdXJyZW50IGxvYWRlcnMuICBJZiBhIG5hdmlnYXRpb24gaXMgaW4gcHJvZ3Jlc3Mgb3IgaWYgdGhpc1xuICAvLyBpcyBpbnRlcnJ1cHRlZCBieSBhIG5hdmlnYXRpb24sIGFsbG93IHRoaXMgdG8gXCJzdWNjZWVkXCIgYnkgY2FsbGluZyBhbGxcbiAgLy8gbG9hZGVycyBkdXJpbmcgdGhlIG5leHQgbG9hZGVyIHJvdW5kXG5cblxuICBmdW5jdGlvbiByZXZhbGlkYXRlKCkge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgcmV2YWxpZGF0aW9uOiBcImxvYWRpbmdcIlxuICAgIH0pOyAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgc3VibWl0dGluZyBhbiBhY3Rpb24sIHdlIGRvbid0IG5lZWQgdG8gc3RhcnQgYSBuZXdcbiAgICAvLyBuYXZpZ2F0aW9uLCB3ZSdsbCBqdXN0IGxldCB0aGUgZm9sbG93IHVwIGxvYWRlciBleGVjdXRpb24gY2FsbCBhbGwgbG9hZGVyc1xuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgaW4gYW4gaWRsZSBzdGF0ZSwgc3RhcnQgYSBuZXcgbmF2aWdhdGlvbiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBhY3Rpb24vbG9jYXRpb24gYW5kIG1hcmsgaXQgYXMgdW5pbnRlcnJ1cHRlZCwgd2hpY2ggd2lsbCBza2lwIHRoZSBoaXN0b3J5XG4gICAgLy8gdXBkYXRlIGluIGNvbXBsZXRlTmF2aWdhdGlvblxuXG5cbiAgICBpZiAoc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHN0YXJ0TmF2aWdhdGlvbihzdGF0ZS5oaXN0b3J5QWN0aW9uLCBzdGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICBzdGFydFVuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb246IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gT3RoZXJ3aXNlLCBpZiB3ZSdyZSBjdXJyZW50bHkgaW4gYSBsb2FkaW5nIHN0YXRlLCBqdXN0IHN0YXJ0IGEgbmV3XG4gICAgLy8gbmF2aWdhdGlvbiB0byB0aGUgbmF2aWdhdGlvbi5sb2NhdGlvbiBidXQgZG8gbm90IHRyaWdnZXIgYW4gdW5pbnRlcnJ1cHRlZFxuICAgIC8vIHJldmFsaWRhdGlvbiBzbyB0aGF0IGhpc3RvcnkgY29ycmVjdGx5IHVwZGF0ZXMgb25jZSB0aGUgbmF2aWdhdGlvbiBjb21wbGV0ZXNcblxuXG4gICAgc3RhcnROYXZpZ2F0aW9uKHBlbmRpbmdBY3Rpb24gfHwgc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwge1xuICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiBzdGF0ZS5uYXZpZ2F0aW9uXG4gICAgfSk7XG4gIH0gLy8gU3RhcnQgYSBuYXZpZ2F0aW9uIHRvIHRoZSBnaXZlbiBhY3Rpb24vbG9jYXRpb24uICBDYW4gb3B0aW9uYWxseSBwcm92aWRlIGFcbiAgLy8gb3ZlcnJpZGVOYXZpZ2F0aW9uIHdoaWNoIHdpbGwgb3ZlcnJpZGUgdGhlIG5vcm1hbExvYWQgaW4gdGhlIGNhc2Ugb2YgYSByZWRpcmVjdFxuICAvLyBuYXZpZ2F0aW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbG9jYXRpb24sIG9wdHMpIHtcbiAgICAvLyBBYm9ydCBhbnkgaW4tcHJvZ3Jlc3MgbmF2aWdhdGlvbnMgYW5kIHN0YXJ0IGEgbmV3IG9uZS4gVW5zZXQgYW55IG9uZ29pbmdcbiAgICAvLyB1bmludGVycnVwdGVkIHJldmFsaWRhdGlvbnMgdW5sZXNzIHRvbGQgb3RoZXJ3aXNlLCBzaW5jZSB3ZSB3YW50IHRoaXNcbiAgICAvLyBuZXcgbmF2aWdhdGlvbiB0byB1cGRhdGUgaGlzdG9yeSBub3JtYWxseVxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIHBlbmRpbmdBY3Rpb24gPSBoaXN0b3J5QWN0aW9uO1xuICAgIGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbiA9IChvcHRzICYmIG9wdHMuc3RhcnRVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uKSA9PT0gdHJ1ZTsgLy8gU2F2ZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gZXZlcnkgdGltZSB3ZSBzdGFydCBhIG5ldyBuYXZpZ2F0aW9uLFxuICAgIC8vIGFuZCB0cmFjayB3aGV0aGVyIHdlIHNob3VsZCByZXNldCBzY3JvbGwgb24gY29tcGxldGlvblxuXG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKHN0YXRlLmxvY2F0aW9uLCBzdGF0ZS5tYXRjaGVzKTtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gKG9wdHMgJiYgb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQpID09PSB0cnVlO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCBsb2FkaW5nTmF2aWdhdGlvbiA9IG9wdHMgJiYgb3B0cy5vdmVycmlkZU5hdmlnYXRpb247XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgbG9jYXRpb24sIGluaXQuYmFzZW5hbWUpOyAvLyBTaG9ydCBjaXJjdWl0IHdpdGggYSA0MDQgb24gdGhlIHJvb3QgZXJyb3IgYm91bmRhcnkgaWYgd2UgbWF0Y2ggbm90aGluZ1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMocm91dGVzVG9Vc2UpOyAvLyBDYW5jZWwgYWxsIHBlbmRpbmcgZGVmZXJyZWQgb24gNDA0cyBzaW5jZSB3ZSBkb24ndCBrZWVwIGFueSByb3V0ZXNcblxuICAgICAgY2FuY2VsQWN0aXZlRGVmZXJyZWRzKCk7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTaG9ydCBjaXJjdWl0IGlmIGl0J3Mgb25seSBhIGhhc2ggY2hhbmdlIGFuZCBub3QgYSBtdXRhdGlvbiBzdWJtaXNzaW9uXG4gICAgLy8gRm9yIGV4YW1wbGUsIG9uIC9wYWdlI2hhc2ggYW5kIHN1Ym1pdCBhIDxGb3JtIG1ldGhvZD1cInBvc3RcIj4gd2hpY2ggd2lsbFxuICAgIC8vIGRlZmF1bHQgdG8gYSBuYXZpZ2F0aW9uIHRvIC9wYWdlXG5cblxuICAgIGlmIChpc0hhc2hDaGFuZ2VPbmx5KHN0YXRlLmxvY2F0aW9uLCBsb2NhdGlvbikgJiYgIShvcHRzICYmIG9wdHMuc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKG9wdHMuc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkpIHtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENyZWF0ZSBhIGNvbnRyb2xsZXIvUmVxdWVzdCBmb3IgdGhpcyBuYXZpZ2F0aW9uXG5cblxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgcmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgbG9jYXRpb24sIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5zaWduYWwsIG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uKTtcbiAgICBsZXQgcGVuZGluZ0FjdGlvbkRhdGE7XG4gICAgbGV0IHBlbmRpbmdFcnJvcjtcblxuICAgIGlmIChvcHRzICYmIG9wdHMucGVuZGluZ0Vycm9yKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGVuZGluZ0Vycm9yLCBpdCBtZWFucyB0aGUgdXNlciBhdHRlbXB0ZWQgYSBHRVQgc3VibWlzc2lvblxuICAgICAgLy8gd2l0aCBiaW5hcnkgRm9ybURhdGEgc28gYXNzaWduIGhlcmUgYW5kIHNraXAgdG8gaGFuZGxlTG9hZGVycy4gIFRoYXRcbiAgICAgIC8vIHdheSB3ZSBoYW5kbGUgY2FsbGluZyBsb2FkZXJzIGFib3ZlIHRoZSBib3VuZGFyeSBldGMuICBJdCdzIG5vdCByZWFsbHlcbiAgICAgIC8vIGRpZmZlcmVudCBmcm9tIGFuIGFjdGlvbkVycm9yIGluIHRoYXQgc2Vuc2UuXG4gICAgICBwZW5kaW5nRXJyb3IgPSB7XG4gICAgICAgIFtmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMpLnJvdXRlLmlkXTogb3B0cy5wZW5kaW5nRXJyb3JcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChvcHRzICYmIG9wdHMuc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKG9wdHMuc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgLy8gQ2FsbCBhY3Rpb24gaWYgd2UgcmVjZWl2ZWQgYW4gYWN0aW9uIHN1Ym1pc3Npb25cbiAgICAgIGxldCBhY3Rpb25PdXRwdXQgPSBhd2FpdCBoYW5kbGVBY3Rpb24ocmVxdWVzdCwgbG9jYXRpb24sIG9wdHMuc3VibWlzc2lvbiwgbWF0Y2hlcywge1xuICAgICAgICByZXBsYWNlOiBvcHRzLnJlcGxhY2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aW9uT3V0cHV0LnNob3J0Q2lyY3VpdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGVuZGluZ0FjdGlvbkRhdGEgPSBhY3Rpb25PdXRwdXQucGVuZGluZ0FjdGlvbkRhdGE7XG4gICAgICBwZW5kaW5nRXJyb3IgPSBhY3Rpb25PdXRwdXQucGVuZGluZ0FjdGlvbkVycm9yO1xuXG4gICAgICBsZXQgbmF2aWdhdGlvbiA9IF9leHRlbmRzKHtcbiAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICBsb2NhdGlvblxuICAgICAgfSwgb3B0cy5zdWJtaXNzaW9uKTtcblxuICAgICAgbG9hZGluZ05hdmlnYXRpb24gPSBuYXZpZ2F0aW9uOyAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcblxuICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QudXJsLCB7XG4gICAgICAgIHNpZ25hbDogcmVxdWVzdC5zaWduYWxcbiAgICAgIH0pO1xuICAgIH0gLy8gQ2FsbCBsb2FkZXJzXG5cblxuICAgIGxldCB7XG4gICAgICBzaG9ydENpcmN1aXRlZCxcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gYXdhaXQgaGFuZGxlTG9hZGVycyhyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgbG9hZGluZ05hdmlnYXRpb24sIG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uLCBvcHRzICYmIG9wdHMuZmV0Y2hlclN1Ym1pc3Npb24sIG9wdHMgJiYgb3B0cy5yZXBsYWNlLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKTtcblxuICAgIGlmIChzaG9ydENpcmN1aXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ2xlYW4gdXAgbm93IHRoYXQgdGhlIGFjdGlvbi9sb2FkZXJzIGhhdmUgY29tcGxldGVkLiAgRG9uJ3QgY2xlYW4gdXAgaWZcbiAgICAvLyB3ZSBzaG9ydCBjaXJjdWl0ZWQgYmVjYXVzZSBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgd2lsbCBoYXZlIGFscmVhZHlcbiAgICAvLyBiZWVuIGFzc2lnbmVkIHRvIGEgbmV3IGNvbnRyb2xsZXIgZm9yIHRoZSBuZXh0IG5hdmlnYXRpb25cblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIF9leHRlbmRzKHtcbiAgICAgIG1hdGNoZXNcbiAgICB9LCBwZW5kaW5nQWN0aW9uRGF0YSA/IHtcbiAgICAgIGFjdGlvbkRhdGE6IHBlbmRpbmdBY3Rpb25EYXRhXG4gICAgfSA6IHt9LCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSkpO1xuICB9IC8vIENhbGwgdGhlIGFjdGlvbiBtYXRjaGVkIGJ5IHRoZSBsZWFmIHJvdXRlIGZvciB0aGlzIG5hdmlnYXRpb24gYW5kIGhhbmRsZVxuICAvLyByZWRpcmVjdHMvZXJyb3JzXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBY3Rpb24ocmVxdWVzdCwgbG9jYXRpb24sIHN1Ym1pc3Npb24sIG1hdGNoZXMsIG9wdHMpIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpOyAvLyBQdXQgdXMgaW4gYSBzdWJtaXR0aW5nIHN0YXRlXG5cbiAgICBsZXQgbmF2aWdhdGlvbiA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcInN1Ym1pdHRpbmdcIixcbiAgICAgIGxvY2F0aW9uXG4gICAgfSwgc3VibWlzc2lvbik7XG5cbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBuYXZpZ2F0aW9uXG4gICAgfSk7IC8vIENhbGwgb3VyIGFjdGlvbiBhbmQgZ2V0IHRoZSByZXN1bHRcblxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGFjdGlvbk1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuXG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIWFjdGlvbk1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCByZXF1ZXN0LCBhY3Rpb25NYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgcmVwbGFjZTtcblxuICAgICAgaWYgKG9wdHMgJiYgb3B0cy5yZXBsYWNlICE9IG51bGwpIHtcbiAgICAgICAgcmVwbGFjZSA9IG9wdHMucmVwbGFjZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIGRpZG4ndCBleHBsaWNpdHkgaW5kaWNhdGUgcmVwbGFjZSBiZWhhdmlvciwgcmVwbGFjZSBpZlxuICAgICAgICAvLyB3ZSByZWRpcmVjdGVkIHRvIHRoZSBleGFjdCBzYW1lIGxvY2F0aW9uIHdlJ3JlIGN1cnJlbnRseSBhdCB0byBhdm9pZFxuICAgICAgICAvLyBkb3VibGUgYmFjay1idXR0b25zXG4gICAgICAgIHJlcGxhY2UgPSByZXN1bHQubG9jYXRpb24gPT09IHN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lICsgc3RhdGUubG9jYXRpb24uc2VhcmNoO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVzdWx0LCB7XG4gICAgICAgIHN1Ym1pc3Npb24sXG4gICAgICAgIHJlcGxhY2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpOyAvLyBCeSBkZWZhdWx0LCBhbGwgc3VibWlzc2lvbnMgYXJlIFJFUExBQ0UgbmF2aWdhdGlvbnMsIGJ1dCBpZiB0aGVcbiAgICAgIC8vIGFjdGlvbiB0aHJldyBhbiBlcnJvciB0aGF0J2xsIGJlIHJlbmRlcmVkIGluIGFuIGVycm9yRWxlbWVudCwgd2UgZmFsbFxuICAgICAgLy8gYmFjayB0byBQVVNIIHNvIHRoYXQgdGhlIHVzZXIgY2FuIHVzZSB0aGUgYmFjayBidXR0b24gdG8gZ2V0IGJhY2sgdG9cbiAgICAgIC8vIHRoZSBwcmUtc3VibWlzc2lvbiBmb3JtIGxvY2F0aW9uIHRvIHRyeSBhZ2FpblxuXG4gICAgICBpZiAoKG9wdHMgJiYgb3B0cy5yZXBsYWNlKSAhPT0gdHJ1ZSkge1xuICAgICAgICBwZW5kaW5nQWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFNlbmQgYmFjayBhbiBlbXB0eSBvYmplY3Qgd2UgY2FuIHVzZSB0byBjbGVhciBvdXQgYW55IHByaW9yIGFjdGlvbkRhdGFcbiAgICAgICAgcGVuZGluZ0FjdGlvbkRhdGE6IHt9LFxuICAgICAgICBwZW5kaW5nQWN0aW9uRXJyb3I6IHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwZW5kaW5nQWN0aW9uRGF0YToge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZGF0YVxuICAgICAgfVxuICAgIH07XG4gIH0gLy8gQ2FsbCBhbGwgYXBwbGljYWJsZSBsb2FkZXJzIGZvciB0aGUgZ2l2ZW4gbWF0Y2hlcywgaGFuZGxpbmcgcmVkaXJlY3RzLFxuICAvLyBlcnJvcnMsIGV0Yy5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvYWRlcnMocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIG92ZXJyaWRlTmF2aWdhdGlvbiwgc3VibWlzc2lvbiwgZmV0Y2hlclN1Ym1pc3Npb24sIHJlcGxhY2UsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpIHtcbiAgICAvLyBGaWd1cmUgb3V0IHRoZSByaWdodCBuYXZpZ2F0aW9uIHdlIHdhbnQgdG8gdXNlIGZvciBkYXRhIGxvYWRpbmdcbiAgICBsZXQgbG9hZGluZ05hdmlnYXRpb24gPSBvdmVycmlkZU5hdmlnYXRpb247XG5cbiAgICBpZiAoIWxvYWRpbmdOYXZpZ2F0aW9uKSB7XG4gICAgICBsZXQgbmF2aWdhdGlvbiA9IF9leHRlbmRzKHtcbiAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWRcbiAgICAgIH0sIHN1Ym1pc3Npb24pO1xuXG4gICAgICBsb2FkaW5nTmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gICAgfSAvLyBJZiB0aGlzIHdhcyBhIHJlZGlyZWN0IGZyb20gYW4gYWN0aW9uIHdlIGRvbid0IGhhdmUgYSBcInN1Ym1pc3Npb25cIiBidXRcbiAgICAvLyB3ZSBoYXZlIGl0IG9uIHRoZSBsb2FkaW5nIG5hdmlnYXRpb24gc28gdXNlIHRoYXQgaWYgYXZhaWxhYmxlXG5cblxuICAgIGxldCBhY3RpdmVTdWJtaXNzaW9uID0gc3VibWlzc2lvbiB8fCBmZXRjaGVyU3VibWlzc2lvbiA/IHN1Ym1pc3Npb24gfHwgZmV0Y2hlclN1Ym1pc3Npb24gOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtTWV0aG9kICYmIGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1BY3Rpb24gJiYgbG9hZGluZ05hdmlnYXRpb24uZm9ybURhdGEgJiYgbG9hZGluZ05hdmlnYXRpb24uZm9ybUVuY1R5cGUgPyB7XG4gICAgICBmb3JtTWV0aG9kOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbjogbG9hZGluZ05hdmlnYXRpb24uZm9ybUFjdGlvbixcbiAgICAgIGZvcm1EYXRhOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRGF0YSxcbiAgICAgIGZvcm1FbmNUeXBlOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRW5jVHlwZVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIGFjdGl2ZVN1Ym1pc3Npb24sIGxvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBmZXRjaExvYWRNYXRjaGVzLCByb3V0ZXNUb1VzZSwgaW5pdC5iYXNlbmFtZSwgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvcik7IC8vIENhbmNlbCBwZW5kaW5nIGRlZmVycmVkcyBmb3Igbm8tbG9uZ2VyLW1hdGNoZWQgcm91dGVzIG9yIHJvdXRlcyB3ZSdyZVxuICAgIC8vIGFib3V0IHRvIHJlbG9hZC4gIE5vdGUgdGhhdCBpZiB0aGlzIGlzIGFuIGFjdGlvbiByZWxvYWQgd2Ugd291bGQgaGF2ZVxuICAgIC8vIGFscmVhZHkgY2FuY2VsbGVkIGFsbCBwZW5kaW5nIGRlZmVycmVkcyBzbyB0aGlzIHdvdWxkIGJlIGEgbm8tb3BcblxuICAgIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhyb3V0ZUlkID0+ICEobWF0Y2hlcyAmJiBtYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSkgfHwgbWF0Y2hlc1RvTG9hZCAmJiBtYXRjaGVzVG9Mb2FkLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSk7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1blxuXG4gICAgaWYgKG1hdGNoZXNUb0xvYWQubGVuZ3RoID09PSAwICYmIHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBfZXh0ZW5kcyh7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICAvLyBDb21taXQgcGVuZGluZyBlcnJvciBpZiB3ZSdyZSBzaG9ydCBjaXJjdWl0aW5nXG4gICAgICAgIGVycm9yczogcGVuZGluZ0Vycm9yIHx8IG51bGxcbiAgICAgIH0sIHBlbmRpbmdBY3Rpb25EYXRhID8ge1xuICAgICAgICBhY3Rpb25EYXRhOiBwZW5kaW5nQWN0aW9uRGF0YVxuICAgICAgfSA6IHt9KSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIElmIHRoaXMgaXMgYW4gdW5pbnRlcnJ1cHRlZCByZXZhbGlkYXRpb24sIHdlIHJlbWFpbiBpbiBvdXIgY3VycmVudCBpZGxlXG4gICAgLy8gc3RhdGUuICBJZiBub3QsIHdlIG5lZWQgdG8gc3dpdGNoIHRvIG91ciBsb2FkaW5nIHN0YXRlIGFuZCBsb2FkIGRhdGEsXG4gICAgLy8gcHJlc2VydmluZyBhbnkgbmV3IGFjdGlvbiBkYXRhIG9yIGV4aXN0aW5nIGFjdGlvbiBkYXRhIChpbiB0aGUgY2FzZSBvZlxuICAgIC8vIGEgcmV2YWxpZGF0aW9uIGludGVycnVwdGluZyBhbiBhY3Rpb25SZWxvYWQpXG5cblxuICAgIGlmICghaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHJmID0+IHtcbiAgICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQocmYua2V5KTtcbiAgICAgICAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXIgPSB7XG4gICAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICAgIGRhdGE6IGZldGNoZXIgJiYgZmV0Y2hlci5kYXRhLFxuICAgICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRlLmZldGNoZXJzLnNldChyZi5rZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgYWN0aW9uRGF0YSA9IHBlbmRpbmdBY3Rpb25EYXRhIHx8IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgIG5hdmlnYXRpb246IGxvYWRpbmdOYXZpZ2F0aW9uXG4gICAgICB9LCBhY3Rpb25EYXRhID8gT2JqZWN0LmtleXMoYWN0aW9uRGF0YSkubGVuZ3RoID09PSAwID8ge1xuICAgICAgICBhY3Rpb25EYXRhOiBudWxsXG4gICAgICB9IDoge1xuICAgICAgICBhY3Rpb25EYXRhXG4gICAgICB9IDoge30sIHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA+IDAgPyB7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSA6IHt9KSk7XG4gICAgfVxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHJmID0+IGZldGNoQ29udHJvbGxlcnMuc2V0KHJmLmtleSwgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyKSk7XG4gICAgbGV0IHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICB9ID0gYXdhaXQgY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKHN0YXRlLm1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCByZXF1ZXN0KTtcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIENsZWFuIHVwIF9hZnRlcl8gbG9hZGVycyBoYXZlIGNvbXBsZXRlZC4gIERvbid0IGNsZWFuIHVwIGlmIHdlIHNob3J0XG4gICAgLy8gY2lyY3VpdGVkIGJlY2F1c2UgZmV0Y2hDb250cm9sbGVycyB3b3VsZCBoYXZlIGJlZW4gYWJvcnRlZCBhbmRcbiAgICAvLyByZWFzc2lnbmVkIHRvIG5ldyBjb250cm9sbGVycyBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuXG5cbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHJmID0+IGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKHJmLmtleSkpOyAvLyBJZiBhbnkgbG9hZGVycyByZXR1cm5lZCBhIHJlZGlyZWN0IFJlc3BvbnNlLCBzdGFydCBhIG5ldyBSRVBMQUNFIG5hdmlnYXRpb25cblxuICAgIGxldCByZWRpcmVjdCA9IGZpbmRSZWRpcmVjdChyZXN1bHRzKTtcblxuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgYXdhaXQgc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0LCB7XG4gICAgICAgIHJlcGxhY2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSAvLyBQcm9jZXNzIGFuZCBjb21taXQgb3V0cHV0IGZyb20gbG9hZGVyc1xuXG5cbiAgICBsZXQge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgcGVuZGluZ0Vycm9yLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcyk7IC8vIFdpcmUgdXAgc3Vic2NyaWJlcnMgdG8gdXBkYXRlIGxvYWRlckRhdGEgYXMgcHJvbWlzZXMgc2V0dGxlXG5cbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGVmZXJyZWREYXRhLCByb3V0ZUlkKSA9PiB7XG4gICAgICBkZWZlcnJlZERhdGEuc3Vic2NyaWJlKGFib3J0ZWQgPT4ge1xuICAgICAgICAvLyBOb3RlOiBObyBuZWVkIHRvIHVwZGF0ZVN0YXRlIGhlcmUgc2luY2UgdGhlIFRyYWNrZWRQcm9taXNlIG9uXG4gICAgICAgIC8vIGxvYWRlckRhdGEgaXMgc3RhYmxlIGFjcm9zcyByZXNvbHZlL3JlamVjdFxuICAgICAgICAvLyBSZW1vdmUgdGhpcyBpbnN0YW5jZSBpZiB3ZSB3ZXJlIGFib3J0ZWQgb3IgaWYgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkXG4gICAgICAgIGlmIChhYm9ydGVkIHx8IGRlZmVycmVkRGF0YS5kb25lKSB7XG4gICAgICAgICAgYWN0aXZlRGVmZXJyZWRzLmRlbGV0ZShyb3V0ZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9LCBkaWRBYm9ydEZldGNoTG9hZHMgfHwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMCA/IHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0gOiB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGZXRjaGVyKGtleSkge1xuICAgIHJldHVybiBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KSB8fCBJRExFX0ZFVENIRVI7XG4gIH0gLy8gVHJpZ2dlciBhIGZldGNoZXIgbG9hZC9zdWJtaXQgZm9yIHRoZSBnaXZlbiBmZXRjaGVyIGtleVxuXG5cbiAgZnVuY3Rpb24gZmV0Y2goa2V5LCByb3V0ZUlkLCBocmVmLCBvcHRzKSB7XG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyb3V0ZXIuZmV0Y2goKSB3YXMgY2FsbGVkIGR1cmluZyB0aGUgc2VydmVyIHJlbmRlciwgYnV0IGl0IHNob3VsZG4ndCBiZS4gXCIgKyBcIllvdSBhcmUgbGlrZWx5IGNhbGxpbmcgYSB1c2VGZXRjaGVyKCkgbWV0aG9kIGluIHRoZSBib2R5IG9mIHlvdXIgY29tcG9uZW50LiBcIiArIFwiVHJ5IG1vdmluZyBpdCB0byBhIHVzZUVmZmVjdCBvciBhIGNhbGxiYWNrLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgaHJlZiwgaW5pdC5iYXNlbmFtZSk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBocmVmXG4gICAgICB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgIHBhdGgsXG4gICAgICBzdWJtaXNzaW9uXG4gICAgfSA9IG5vcm1hbGl6ZU5hdmlnYXRlT3B0aW9ucyhocmVmLCBmdXR1cmUsIG9wdHMsIHRydWUpO1xuICAgIGxldCBtYXRjaCA9IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIHBhdGgpO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG5cbiAgICBpZiAoc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGhhbmRsZUZldGNoZXJBY3Rpb24oa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgbWF0Y2hlcywgc3VibWlzc2lvbik7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTdG9yZSBvZmYgdGhlIG1hdGNoIHNvIHdlIGNhbiBjYWxsIGl0J3Mgc2hvdWxkUmV2YWxpZGF0ZSBvbiBzdWJzZXF1ZW50XG4gICAgLy8gcmV2YWxpZGF0aW9uc1xuXG5cbiAgICBmZXRjaExvYWRNYXRjaGVzLnNldChrZXksIHtcbiAgICAgIHJvdXRlSWQsXG4gICAgICBwYXRoXG4gICAgfSk7XG4gICAgaGFuZGxlRmV0Y2hlckxvYWRlcihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgfSAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBtYXRjaGVkIGZldGNoZXIuc3VibWl0KCksIGFuZCB0aGVuIGhhbmRsZSByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgYW5kIHJldmFsaWRhdGlvblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmV0Y2hlckFjdGlvbihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCByZXF1ZXN0TWF0Y2hlcywgc3VibWlzc2lvbikge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcblxuICAgIGlmICghbWF0Y2gucm91dGUuYWN0aW9uICYmICFtYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IHBhdGgsXG4gICAgICAgIHJvdXRlSWQ6IHJvdXRlSWRcbiAgICAgIH0pO1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUHV0IHRoaXMgZmV0Y2hlciBpbnRvIGl0J3Mgc3VibWl0dGluZyBzdGF0ZVxuXG5cbiAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG5cbiAgICBsZXQgZmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcInN1Ym1pdHRpbmdcIlxuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciAmJiBleGlzdGluZ0ZldGNoZXIuZGF0YSxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBmZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTsgLy8gQ2FsbCB0aGUgYWN0aW9uIGZvciB0aGUgZmV0Y2hlclxuXG4gICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBwYXRoLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLCBzdWJtaXNzaW9uKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLnNldChrZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgbGV0IGFjdGlvblJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCBmZXRjaFJlcXVlc3QsIG1hdGNoLCByZXF1ZXN0TWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSk7XG5cbiAgICBpZiAoZmV0Y2hSZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3Ugb3VyIG93biBmZXRjaGVyXG4gICAgICAvLyByZS1zdWJtaXQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG4gICAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KSA9PT0gYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgZmV0Y2hSZWRpcmVjdElkcy5hZGQoa2V5KTtcblxuICAgICAgbGV0IGxvYWRpbmdGZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCJcbiAgICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRpbmdGZXRjaGVyKTtcbiAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgYWN0aW9uUmVzdWx0LCB7XG4gICAgICAgIHN1Ym1pc3Npb24sXG4gICAgICAgIGlzRmV0Y2hBY3Rpb25SZWRpcmVjdDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSAvLyBQcm9jZXNzIGFueSBub24tcmVkaXJlY3QgZXJyb3JzIHRocm93blxuXG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBhY3Rpb25SZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuICAgIH0gLy8gU3RhcnQgdGhlIGRhdGEgbG9hZCBmb3IgY3VycmVudCBtYXRjaGVzLCBvciB0aGUgbmV4dCBsb2NhdGlvbiBpZiB3ZSdyZVxuICAgIC8vIGluIHRoZSBtaWRkbGUgb2YgYSBuYXZpZ2F0aW9uXG5cblxuICAgIGxldCBuZXh0TG9jYXRpb24gPSBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uIHx8IHN0YXRlLmxvY2F0aW9uO1xuICAgIGxldCByZXZhbGlkYXRpb25SZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBuZXh0TG9jYXRpb24sIGFib3J0Q29udHJvbGxlci5zaWduYWwpO1xuICAgIGxldCByb3V0ZXNUb1VzZSA9IGluRmxpZ2h0RGF0YVJvdXRlcyB8fCBkYXRhUm91dGVzO1xuICAgIGxldCBtYXRjaGVzID0gc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSAhPT0gXCJpZGxlXCIgPyBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwgaW5pdC5iYXNlbmFtZSkgOiBzdGF0ZS5tYXRjaGVzO1xuICAgIGludmFyaWFudChtYXRjaGVzLCBcIkRpZG4ndCBmaW5kIGFueSBtYXRjaGVzIGFmdGVyIGZldGNoZXIgYWN0aW9uXCIpO1xuICAgIGxldCBsb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICBmZXRjaFJlbG9hZElkcy5zZXQoa2V5LCBsb2FkSWQpO1xuXG4gICAgbGV0IGxvYWRGZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZGF0YTogYWN0aW9uUmVzdWx0LmRhdGFcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZEZldGNoZXIpO1xuICAgIGxldCBbbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdID0gZ2V0TWF0Y2hlc1RvTG9hZChpbml0Lmhpc3RvcnksIHN0YXRlLCBtYXRjaGVzLCBzdWJtaXNzaW9uLCBuZXh0TG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIGZldGNoTG9hZE1hdGNoZXMsIHJvdXRlc1RvVXNlLCBpbml0LmJhc2VuYW1lLCB7XG4gICAgICBbbWF0Y2gucm91dGUuaWRdOiBhY3Rpb25SZXN1bHQuZGF0YVxuICAgIH0sIHVuZGVmaW5lZCAvLyBObyBuZWVkIHRvIHNlbmQgdGhyb3VnaCBlcnJvcnMgc2luY2Ugd2Ugc2hvcnQgY2lyY3VpdCBhYm92ZVxuICAgICk7IC8vIFB1dCBhbGwgcmV2YWxpZGF0aW5nIGZldGNoZXJzIGludG8gdGhlIGxvYWRpbmcgc3RhdGUsIGV4Y2VwdCBmb3IgdGhlXG4gICAgLy8gY3VycmVudCBmZXRjaGVyIHdoaWNoIHdlIHdhbnQgdG8ga2VlcCBpbiBpdCdzIGN1cnJlbnQgbG9hZGluZyBzdGF0ZSB3aGljaFxuICAgIC8vIGNvbnRhaW5zIGl0J3MgYWN0aW9uIHN1Ym1pc3Npb24gaW5mbyArIGFjdGlvbiBkYXRhXG5cbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5maWx0ZXIocmYgPT4gcmYua2V5ICE9PSBrZXkpLmZvckVhY2gocmYgPT4ge1xuICAgICAgbGV0IHN0YWxlS2V5ID0gcmYua2V5O1xuICAgICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChzdGFsZUtleSk7XG4gICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IHtcbiAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICBkYXRhOiBleGlzdGluZ0ZldGNoZXIgJiYgZXhpc3RpbmdGZXRjaGVyLmRhdGEsXG4gICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChzdGFsZUtleSwgcmV2YWxpZGF0aW5nRmV0Y2hlcik7XG4gICAgICBmZXRjaENvbnRyb2xsZXJzLnNldChzdGFsZUtleSwgYWJvcnRDb250cm9sbGVyKTtcbiAgICB9KTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgICBsZXQge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUubWF0Y2hlcywgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIHJldmFsaWRhdGlvblJlcXVlc3QpO1xuXG4gICAgaWYgKGFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyID0+IGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKHIua2V5KSk7XG4gICAgbGV0IHJlZGlyZWN0ID0gZmluZFJlZGlyZWN0KHJlc3VsdHMpO1xuXG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0KTtcbiAgICB9IC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG5cblxuICAgIGxldCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSA9IHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBzdGF0ZS5tYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBsb2FkZXJSZXN1bHRzLCB1bmRlZmluZWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCBmZXRjaGVyUmVzdWx0cywgYWN0aXZlRGVmZXJyZWRzKTtcbiAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICBkYXRhOiBhY3Rpb25SZXN1bHQuZGF0YSxcbiAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9O1xuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICBsZXQgZGlkQWJvcnRGZXRjaExvYWRzID0gYWJvcnRTdGFsZUZldGNoTG9hZHMobG9hZElkKTsgLy8gSWYgd2UgYXJlIGN1cnJlbnRseSBpbiBhIG5hdmlnYXRpb24gbG9hZGluZyBzdGF0ZSBhbmQgdGhpcyBmZXRjaGVyIGlzXG4gICAgLy8gbW9yZSByZWNlbnQgdGhhbiB0aGUgbmF2aWdhdGlvbiwgd2Ugd2FudCB0aGUgbmV3ZXIgZGF0YSBzbyBhYm9ydCB0aGVcbiAgICAvLyBuYXZpZ2F0aW9uIGFuZCBjb21wbGV0ZSBpdCB3aXRoIHRoZSBmZXRjaGVyIGRhdGFcblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBsb2FkSWQgPiBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCkge1xuICAgICAgaW52YXJpYW50KHBlbmRpbmdBY3Rpb24sIFwiRXhwZWN0ZWQgcGVuZGluZyBhY3Rpb25cIik7XG4gICAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24oc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBqdXN0IHVwZGF0ZSB3aXRoIHRoZSBmZXRjaGVyIGRhdGEsIHByZXNlcnZpbmcgYW55IGV4aXN0aW5nXG4gICAgICAvLyBsb2FkZXJEYXRhIGZvciBsb2FkZXJzIHRoYXQgZGlkIG5vdCBuZWVkIHRvIHJlbG9hZC4gIFdlIGhhdmUgdG9cbiAgICAgIC8vIG1hbnVhbGx5IG1lcmdlIGhlcmUgc2luY2Ugd2UgYXJlbid0IGdvaW5nIHRocm91Z2ggY29tcGxldGVOYXZpZ2F0aW9uXG4gICAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbG9hZGVyRGF0YTogbWVyZ2VMb2FkZXJEYXRhKHN0YXRlLmxvYWRlckRhdGEsIGxvYWRlckRhdGEsIG1hdGNoZXMsIGVycm9ycylcbiAgICAgIH0sIGRpZEFib3J0RmV0Y2hMb2FkcyA/IHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9IDoge30pKTtcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0gLy8gQ2FsbCB0aGUgbWF0Y2hlZCBsb2FkZXIgZm9yIGZldGNoZXIubG9hZCgpLCBoYW5kbGluZyByZWRpcmVjdHMsIGVycm9ycywgZXRjLlxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmV0Y2hlckxvYWRlcihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKSB7XG4gICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpOyAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBsb2FkaW5nIHN0YXRlXG5cbiAgICBsZXQgbG9hZGluZ0ZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZFxuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciAmJiBleGlzdGluZ0ZldGNoZXIuZGF0YSxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBsb2FkaW5nRmV0Y2hlcik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7IC8vIENhbGwgdGhlIGxvYWRlciBmb3IgdGhpcyBmZXRjaGVyIHJvdXRlIG1hdGNoXG5cbiAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCBmZXRjaFJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIHBhdGgsIGFib3J0Q29udHJvbGxlci5zaWduYWwpO1xuICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KGtleSwgYWJvcnRDb250cm9sbGVyKTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIGZldGNoUmVxdWVzdCwgbWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCByb3V0ZXIuYmFzZW5hbWUpOyAvLyBEZWZlcnJlZCBpc24ndCBzdXBwb3J0ZWQgZm9yIGZldGNoZXIgbG9hZHMsIGF3YWl0IGV2ZXJ5dGhpbmcgYW5kIHRyZWF0IGl0XG4gICAgLy8gYXMgYSBub3JtYWwgbG9hZC4gIHJlc29sdmVEZWZlcnJlZERhdGEgd2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoaXNcbiAgICAvLyBmZXRjaGVyIGdldHMgYWJvcnRlZCwgc28gd2UganVzdCBsZWF2ZSByZXN1bHQgdW50b3VjaGVkIGFuZCBzaG9ydCBjaXJjdWl0XG4gICAgLy8gYmVsb3cgaWYgdGhhdCBoYXBwZW5zXG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSAoYXdhaXQgcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIGZldGNoUmVxdWVzdC5zaWduYWwsIHRydWUpKSB8fCByZXN1bHQ7XG4gICAgfSAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3Ugb3VyIG93biBmZXRjaGVyXG4gICAgLy8gcmUtbG9hZCB3aGljaCB3b3VsZCBoYXZlIHB1dCBfbmV3XyBjb250cm9sbGVyIGlzIGluIGZldGNoQ29udHJvbGxlcnNcblxuXG4gICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICBpZiAoZmV0Y2hSZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB0aGUgbG9hZGVyIHRocmV3IGEgcmVkaXJlY3QgUmVzcG9uc2UsIHN0YXJ0IGEgbmV3IFJFUExBQ0UgbmF2aWdhdGlvblxuXG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFByb2Nlc3MgYW55IG5vbi1yZWRpcmVjdCBlcnJvcnMgdGhyb3duXG5cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCByb3V0ZUlkKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpOyAvLyBUT0RPOiBJbiByZW1peCwgdGhpcyB3b3VsZCByZXNldCB0byBJRExFX05BVklHQVRJT04gaWYgaXQgd2FzIGEgY2F0Y2ggLVxuICAgICAgLy8gZG8gd2UgbmVlZCB0byBiZWhhdmUgYW55IGRpZmZlcmVudGx5IHdpdGggb3VyIG5vbi1yZWRpcmVjdCBlcnJvcnM/XG4gICAgICAvLyBXaGF0IGlmIGl0IHdhcyBhIG5vbi1yZWRpcmVjdCBSZXNwb25zZT9cblxuICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycyksXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludmFyaWFudCghaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7IC8vIFB1dCB0aGUgZmV0Y2hlciBiYWNrIGludG8gYW4gaWRsZSBzdGF0ZVxuXG4gICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfTtcbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGFuZGxlIHJlZGlyZWN0cyByZXR1cm5lZCBmcm9tIGFuIGFjdGlvbiBvciBsb2FkZXIuXG4gICAqIE5vcm1hbGx5LCBhIHJlZGlyZWN0IFwicmVwbGFjZXNcIiB0aGUgbmF2aWdhdGlvbiB0aGF0IHRyaWdnZXJlZCBpdC4gIFNvLCBmb3JcbiAgICogZXhhbXBsZTpcbiAgICpcbiAgICogIC0gdXNlciBpcyBvbiAvYVxuICAgKiAgLSB1c2VyIGNsaWNrcyBhIGxpbmsgdG8gL2JcbiAgICogIC0gbG9hZGVyIGZvciAvYiByZWRpcmVjdHMgdG8gL2NcbiAgICpcbiAgICogSW4gYSBub24tSlMgYXBwIHRoZSBicm93c2VyIHdvdWxkIHRyYWNrIHRoZSBpbi1mbGlnaHQgbmF2aWdhdGlvbiB0byAvYiBhbmRcbiAgICogdGhlbiByZXBsYWNlIGl0IHdpdGggL2Mgd2hlbiBpdCBlbmNvdW50ZXJlZCB0aGUgcmVkaXJlY3QgcmVzcG9uc2UuICBJblxuICAgKiB0aGUgZW5kIGl0IHdvdWxkIG9ubHkgZXZlciB1cGRhdGUgdGhlIFVSTCBiYXIgd2l0aCAvYy5cbiAgICpcbiAgICogSW4gY2xpZW50LXNpZGUgcm91dGluZyB1c2luZyBwdXNoU3RhdGUvcmVwbGFjZVN0YXRlLCB3ZSBhaW0gdG8gZW11bGF0ZVxuICAgKiB0aGlzIGJlaGF2aW9yIGFuZCB3ZSBhbHNvIGRvIG5vdCB1cGRhdGUgaGlzdG9yeSB1bnRpbCB0aGUgZW5kIG9mIHRoZVxuICAgKiBuYXZpZ2F0aW9uIChpbmNsdWRpbmcgcHJvY2Vzc2VkIHJlZGlyZWN0cykuICBUaGlzIG1lYW5zIHRoYXQgd2UgbmV2ZXJcbiAgICogYWN0dWFsbHkgdG91Y2ggaGlzdG9yeSB1bnRpbCB3ZSd2ZSBwcm9jZXNzZWQgcmVkaXJlY3RzLCBzbyB3ZSBqdXN0IHVzZVxuICAgKiB0aGUgaGlzdG9yeSBhY3Rpb24gZnJvbSB0aGUgb3JpZ2luYWwgbmF2aWdhdGlvbiAoUFVTSCBvciBSRVBMQUNFKS5cbiAgICovXG5cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QsIF90ZW1wKSB7XG4gICAgdmFyIF93aW5kb3c7XG5cbiAgICBsZXQge1xuICAgICAgc3VibWlzc2lvbixcbiAgICAgIHJlcGxhY2UsXG4gICAgICBpc0ZldGNoQWN0aW9uUmVkaXJlY3RcbiAgICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG5cbiAgICBpZiAocmVkaXJlY3QucmV2YWxpZGF0ZSkge1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHJlZGlyZWN0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcmVkaXJlY3QubG9jYXRpb24sIC8vIFRPRE86IFRoaXMgY2FuIGJlIHJlbW92ZWQgb25jZSB3ZSBnZXQgcmlkIG9mIHVzZVRyYW5zaXRpb24gaW4gUmVtaXggdjJcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBfaXNSZWRpcmVjdDogdHJ1ZVxuICAgIH0sIGlzRmV0Y2hBY3Rpb25SZWRpcmVjdCA/IHtcbiAgICAgIF9pc0ZldGNoQWN0aW9uUmVkaXJlY3Q6IHRydWVcbiAgICB9IDoge30pKTtcbiAgICBpbnZhcmlhbnQocmVkaXJlY3RMb2NhdGlvbiwgXCJFeHBlY3RlZCBhIGxvY2F0aW9uIG9uIHRoZSByZWRpcmVjdCBuYXZpZ2F0aW9uXCIpOyAvLyBDaGVjayBpZiB0aGlzIGFuIGFic29sdXRlIGV4dGVybmFsIHJlZGlyZWN0IHRoYXQgZ29lcyB0byBhIG5ldyBvcmlnaW5cblxuICAgIGlmIChBQlNPTFVURV9VUkxfUkVHRVgudGVzdChyZWRpcmVjdC5sb2NhdGlvbikgJiYgaXNCcm93c2VyICYmIHR5cGVvZiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmxvY2F0aW9uKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbGV0IHVybCA9IGluaXQuaGlzdG9yeS5jcmVhdGVVUkwocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgbGV0IGlzRGlmZmVyZW50QmFzZW5hbWUgPSBzdHJpcEJhc2VuYW1lKHVybC5wYXRobmFtZSwgaW5pdC5iYXNlbmFtZSB8fCBcIi9cIikgPT0gbnVsbDtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gIT09IHVybC5vcmlnaW4gfHwgaXNEaWZmZXJlbnRCYXNlbmFtZSkge1xuICAgICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0LmxvY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHJlZGlyZWN0LmxvY2F0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBhYm9ydCBvbiByZWRpcmVjdHMsIHNpbmNlIHdlIGRvbid0IGRldGVjdCB0aGVcbiAgICAvLyByZWRpcmVjdCB1bnRpbCB0aGUgYWN0aW9uL2xvYWRlcnMgaGF2ZSBzZXR0bGVkXG5cblxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgbGV0IHJlZGlyZWN0SGlzdG9yeUFjdGlvbiA9IHJlcGxhY2UgPT09IHRydWUgPyBBY3Rpb24uUmVwbGFjZSA6IEFjdGlvbi5QdXNoOyAvLyBVc2UgdGhlIGluY29taW5nIHN1Ym1pc3Npb24gaWYgcHJvdmlkZWQsIGZhbGxiYWNrIG9uIHRoZSBhY3RpdmUgb25lIGluXG4gICAgLy8gc3RhdGUubmF2aWdhdGlvblxuXG4gICAgbGV0IHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YVxuICAgIH0gPSBzdGF0ZS5uYXZpZ2F0aW9uO1xuXG4gICAgaWYgKCFzdWJtaXNzaW9uICYmIGZvcm1NZXRob2QgJiYgZm9ybUFjdGlvbiAmJiBmb3JtRGF0YSAmJiBmb3JtRW5jVHlwZSkge1xuICAgICAgc3VibWlzc2lvbiA9IHtcbiAgICAgICAgZm9ybU1ldGhvZCxcbiAgICAgICAgZm9ybUFjdGlvbixcbiAgICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICAgIGZvcm1EYXRhXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdGhpcyB3YXMgYSAzMDcvMzA4IHN1Ym1pc3Npb24gd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGUgSFRUUCBtZXRob2QgYW5kXG4gICAgLy8gcmUtc3VibWl0IHRoZSBHRVQvUE9TVC9QVVQvUEFUQ0gvREVMRVRFIGFzIGEgc3VibWlzc2lvbiBuYXZpZ2F0aW9uIHRvIHRoZVxuICAgIC8vIHJlZGlyZWN0ZWQgbG9jYXRpb25cblxuXG4gICAgaWYgKHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2Rlcy5oYXMocmVkaXJlY3Quc3RhdHVzKSAmJiBzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBzdWJtaXNzaW9uOiBfZXh0ZW5kcyh7fSwgc3VibWlzc2lvbiwge1xuICAgICAgICAgIGZvcm1BY3Rpb246IHJlZGlyZWN0LmxvY2F0aW9uXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGlzIGZsYWcgYWNyb3NzIHJlZGlyZWN0c1xuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNGZXRjaEFjdGlvblJlZGlyZWN0KSB7XG4gICAgICAvLyBGb3IgYSBmZXRjaCBhY3Rpb24gcmVkaXJlY3QsIHdlIGtpY2sgb2ZmIGEgbmV3IGxvYWRpbmcgbmF2aWdhdGlvblxuICAgICAgLy8gd2l0aG91dCB0aGUgZmV0Y2hlciBzdWJtaXNzaW9uLCBidXQgd2Ugc2VuZCBpdCBhbG9uZyBmb3Igc2hvdWxkUmV2YWxpZGF0ZVxuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb246IHtcbiAgICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgbG9jYXRpb246IHJlZGlyZWN0TG9jYXRpb24sXG4gICAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hlclN1Ym1pc3Npb246IHN1Ym1pc3Npb24sXG4gICAgICAgIC8vIFByZXNlcnZlIHRoaXMgZmxhZyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgd2Uga2ljayBvZmYgYSBuZXcgbG9hZGluZyBuYXZpZ2F0aW9uLCBwcmVzZXJ2aW5nIHRoZVxuICAgICAgLy8gc3VibWlzc2lvbiBpbmZvIGZvciB0aGUgZHVyYXRpb24gb2YgdGhpcyBuYXZpZ2F0aW9uXG4gICAgICBhd2FpdCBzdGFydE5hdmlnYXRpb24ocmVkaXJlY3RIaXN0b3J5QWN0aW9uLCByZWRpcmVjdExvY2F0aW9uLCB7XG4gICAgICAgIG92ZXJyaWRlTmF2aWdhdGlvbjoge1xuICAgICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgICBsb2NhdGlvbjogcmVkaXJlY3RMb2NhdGlvbixcbiAgICAgICAgICBmb3JtTWV0aG9kOiBzdWJtaXNzaW9uID8gc3VibWlzc2lvbi5mb3JtTWV0aG9kIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1BY3Rpb246IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1BY3Rpb24gOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUVuY1R5cGU6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1FbmNUeXBlIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1EYXRhOiBzdWJtaXNzaW9uID8gc3VibWlzc2lvbi5mb3JtRGF0YSA6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGlzIGZsYWcgYWNyb3NzIHJlZGlyZWN0c1xuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShjdXJyZW50TWF0Y2hlcywgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgZmV0Y2hlcnNUb0xvYWQsIHJlcXVlc3QpIHtcbiAgICAvLyBDYWxsIGFsbCBuYXZpZ2F0aW9uIGxvYWRlcnMgYW5kIHJldmFsaWRhdGluZyBmZXRjaGVyIGxvYWRlcnMgaW4gcGFyYWxsZWwsXG4gICAgLy8gdGhlbiBzbGljZSBvZmYgdGhlIHJlc3VsdHMgaW50byBzZXBhcmF0ZSBhcnJheXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtXG4gICAgLy8gYWNjb3JkaW5nbHlcbiAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFsuLi5tYXRjaGVzVG9Mb2FkLm1hcChtYXRjaCA9PiBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgcmVxdWVzdCwgbWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCByb3V0ZXIuYmFzZW5hbWUpKSwgLi4uZmV0Y2hlcnNUb0xvYWQubWFwKGYgPT4ge1xuICAgICAgaWYgKGYubWF0Y2hlcyAmJiBmLm1hdGNoKSB7XG4gICAgICAgIHJldHVybiBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBmLnBhdGgsIHJlcXVlc3Quc2lnbmFsKSwgZi5tYXRjaCwgZi5tYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBlcnJvciA9IHtcbiAgICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGYucGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9KV0pO1xuICAgIGxldCBsb2FkZXJSZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBtYXRjaGVzVG9Mb2FkLmxlbmd0aCk7XG4gICAgbGV0IGZldGNoZXJSZXN1bHRzID0gcmVzdWx0cy5zbGljZShtYXRjaGVzVG9Mb2FkLmxlbmd0aCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3Jlc29sdmVEZWZlcnJlZFJlc3VsdHMoY3VycmVudE1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIHJlcXVlc3Quc2lnbmFsLCBmYWxzZSwgc3RhdGUubG9hZGVyRGF0YSksIHJlc29sdmVEZWZlcnJlZFJlc3VsdHMoY3VycmVudE1hdGNoZXMsIGZldGNoZXJzVG9Mb2FkLm1hcChmID0+IGYubWF0Y2gpLCBmZXRjaGVyUmVzdWx0cywgcmVxdWVzdC5zaWduYWwsIHRydWUpXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJydXB0QWN0aXZlTG9hZHMoKSB7XG4gICAgLy8gRXZlcnkgaW50ZXJydXB0aW9uIHRyaWdnZXJzIGEgcmV2YWxpZGF0aW9uXG4gICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IHRydWU7IC8vIENhbmNlbCBwZW5kaW5nIHJvdXRlLWxldmVsIGRlZmVycmVkcyBhbmQgbWFyayBjYW5jZWxsZWQgcm91dGVzIGZvclxuICAgIC8vIHJldmFsaWRhdGlvblxuXG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMucHVzaCguLi5jYW5jZWxBY3RpdmVEZWZlcnJlZHMoKSk7IC8vIEFib3J0IGluLWZsaWdodCBmZXRjaGVyIGxvYWRzXG5cbiAgICBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLnB1c2goa2V5KTtcbiAgICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvcikge1xuICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCByb3V0ZUlkKTtcbiAgICBkZWxldGVGZXRjaGVyKGtleSk7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZXJyb3JzOiB7XG4gICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogZXJyb3JcbiAgICAgIH0sXG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUZldGNoZXIoa2V5KSB7XG4gICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgIGZldGNoTG9hZE1hdGNoZXMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hSZWRpcmVjdElkcy5kZWxldGUoa2V5KTtcbiAgICBzdGF0ZS5mZXRjaGVycy5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFib3J0RmV0Y2hlcihrZXkpIHtcbiAgICBsZXQgY29udHJvbGxlciA9IGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSk7XG4gICAgaW52YXJpYW50KGNvbnRyb2xsZXIsIFwiRXhwZWN0ZWQgZmV0Y2ggY29udHJvbGxlcjogXCIgKyBrZXkpO1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFya0ZldGNoZXJzRG9uZShrZXlzKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcbiAgICAgIGxldCBmZXRjaGVyID0gZ2V0RmV0Y2hlcihrZXkpO1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICAgIGRhdGE6IGZldGNoZXIuZGF0YSxcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9O1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKSB7XG4gICAgbGV0IGRvbmVLZXlzID0gW107XG5cbiAgICBmb3IgKGxldCBrZXkgb2YgZmV0Y2hSZWRpcmVjdElkcykge1xuICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcbiAgICAgIGludmFyaWFudChmZXRjaGVyLCBcIkV4cGVjdGVkIGZldGNoZXI6IFwiICsga2V5KTtcblxuICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGZldGNoUmVkaXJlY3RJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgIGRvbmVLZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRmV0Y2hlcnNEb25lKGRvbmVLZXlzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFib3J0U3RhbGVGZXRjaExvYWRzKGxhbmRlZElkKSB7XG4gICAgbGV0IHllZXRlZEtleXMgPSBbXTtcblxuICAgIGZvciAobGV0IFtrZXksIGlkXSBvZiBmZXRjaFJlbG9hZElkcykge1xuICAgICAgaWYgKGlkIDwgbGFuZGVkSWQpIHtcbiAgICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcbiAgICAgICAgaW52YXJpYW50KGZldGNoZXIsIFwiRXhwZWN0ZWQgZmV0Y2hlcjogXCIgKyBrZXkpO1xuXG4gICAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgICAgICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIHllZXRlZEtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFya0ZldGNoZXJzRG9uZSh5ZWV0ZWRLZXlzKTtcbiAgICByZXR1cm4geWVldGVkS2V5cy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmxvY2tlcihrZXksIGZuKSB7XG4gICAgbGV0IGJsb2NrZXIgPSBzdGF0ZS5ibG9ja2Vycy5nZXQoa2V5KSB8fCBJRExFX0JMT0NLRVI7XG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5nZXQoa2V5KSAhPT0gZm4pIHtcbiAgICAgIGJsb2NrZXJGdW5jdGlvbnMuc2V0KGtleSwgZm4pO1xuICAgIH1cblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlQmxvY2tlcihrZXkpIHtcbiAgICBzdGF0ZS5ibG9ja2Vycy5kZWxldGUoa2V5KTtcbiAgICBibG9ja2VyRnVuY3Rpb25zLmRlbGV0ZShrZXkpO1xuICB9IC8vIFV0aWxpdHkgZnVuY3Rpb24gdG8gdXBkYXRlIGJsb2NrZXJzLCBlbnN1cmluZyB2YWxpZCBzdGF0ZSB0cmFuc2l0aW9uc1xuXG5cbiAgZnVuY3Rpb24gdXBkYXRlQmxvY2tlcihrZXksIG5ld0Jsb2NrZXIpIHtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChrZXkpIHx8IElETEVfQkxPQ0tFUjsgLy8gUG9vciBtYW5zIHN0YXRlIG1hY2hpbmUgOilcbiAgICAvLyBodHRwczovL21lcm1haWQubGl2ZS9lZGl0I3Bha286ZU5xVmtjOU93ekFNeGw4bDhubmpBWXJFdERJT0hFQklnd3ZLSlRSZUd5M19sRHBJcU8yN2s2YXdNRzBYY3JMbG56ODdud2RvbkVTb2dLWFhCdUU3OXJxNzVYWk8zLXlIZHMwUkpWdXY3MFlyUGxVckNFZTJIZnJPUlMzcnVicVpmdWh0cGc1Qzl3azV0WjRWS2NSVXE4OHE5WjhSUzAtNDhjRTFpSEprTDB1Z2JIdUZMdXM5TDZzcFp5OG5YOU1QMkNOZG9tVmFwb3NxdTNmR2F5VDhUOC1qSlF3aGVwb19VdHBnQlFhREVVb20wNGRaaEFOMWFKQkRsVUtKQnhFMWNlQjJTbWowTWxuLUlCVzVBRlUyZHdVaWt0dF8yUWFxMmRCZmFLZEV1cDg1VVY3WWQtZEtqbG5rYWJsMlB2cjBEVGtUcmVNXG5cbiAgICBpbnZhcmlhbnQoYmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIsIFwiSW52YWxpZCBibG9ja2VyIHN0YXRlIHRyYW5zaXRpb246IFwiICsgYmxvY2tlci5zdGF0ZSArIFwiIC0+IFwiICsgbmV3QmxvY2tlci5zdGF0ZSk7XG4gICAgc3RhdGUuYmxvY2tlcnMuc2V0KGtleSwgbmV3QmxvY2tlcik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgYmxvY2tlcnM6IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCbG9ja05hdmlnYXRpb24oX3JlZjIpIHtcbiAgICBsZXQge1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0gPSBfcmVmMjtcblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFdlIG9ueSBzdXBwb3J0IGEgc2luZ2xlIGFjdGl2ZSBibG9ja2VyIGF0IHRoZSBtb21lbnQgc2luY2Ugd2UgZG9uJ3QgaGF2ZVxuICAgIC8vIGFueSBjb21wZWxsaW5nIHVzZSBjYXNlcyBmb3IgbXVsdGktYmxvY2tlciB5ZXRcblxuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA+IDEpIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiQSByb3V0ZXIgb25seSBzdXBwb3J0cyBvbmUgYmxvY2tlciBhdCBhIHRpbWVcIik7XG4gICAgfVxuXG4gICAgbGV0IGVudHJpZXMgPSBBcnJheS5mcm9tKGJsb2NrZXJGdW5jdGlvbnMuZW50cmllcygpKTtcbiAgICBsZXQgW2Jsb2NrZXJLZXksIGJsb2NrZXJGdW5jdGlvbl0gPSBlbnRyaWVzW2VudHJpZXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IGJsb2NrZXIgPSBzdGF0ZS5ibG9ja2Vycy5nZXQoYmxvY2tlcktleSk7XG5cbiAgICBpZiAoYmxvY2tlciAmJiBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIikge1xuICAgICAgLy8gSWYgdGhlIGJsb2NrZXIgaXMgY3VycmVudGx5IHByb2NlZWRpbmcsIHdlIGRvbid0IG5lZWQgdG8gcmUtY2hlY2tcbiAgICAgIC8vIGl0IGFuZCBjYW4gbGV0IHRoaXMgbmF2aWdhdGlvbiBjb250aW51ZVxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQXQgdGhpcyBwb2ludCwgd2Uga25vdyB3ZSdyZSB1bmJsb2NrZWQvYmxvY2tlZCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRoZVxuICAgIC8vIHVzZXItcHJvdmlkZWQgYmxvY2tlciBmdW5jdGlvblxuXG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9uKHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KSkge1xuICAgICAgcmV0dXJuIGJsb2NrZXJLZXk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWN0aXZlRGVmZXJyZWRzKHByZWRpY2F0ZSkge1xuICAgIGxldCBjYW5jZWxsZWRSb3V0ZUlkcyA9IFtdO1xuICAgIGFjdGl2ZURlZmVycmVkcy5mb3JFYWNoKChkZmQsIHJvdXRlSWQpID0+IHtcbiAgICAgIGlmICghcHJlZGljYXRlIHx8IHByZWRpY2F0ZShyb3V0ZUlkKSkge1xuICAgICAgICAvLyBDYW5jZWwgdGhlIGRlZmVycmVkIC0gYnV0IGRvIG5vdCByZW1vdmUgZnJvbSBhY3RpdmVEZWZlcnJlZHMgaGVyZSAtXG4gICAgICAgIC8vIHdlIHJlbHkgb24gdGhlIHN1YnNjcmliZXJzIHRvIGRvIHRoYXQgc28gb3VyIHRlc3RzIGNhbiBhc3NlcnQgcHJvcGVyXG4gICAgICAgIC8vIGNsZWFudXAgdmlhIF9pbnRlcm5hbEFjdGl2ZURlZmVycmVkc1xuICAgICAgICBkZmQuY2FuY2VsKCk7XG4gICAgICAgIGNhbmNlbGxlZFJvdXRlSWRzLnB1c2gocm91dGVJZCk7XG4gICAgICAgIGFjdGl2ZURlZmVycmVkcy5kZWxldGUocm91dGVJZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNhbmNlbGxlZFJvdXRlSWRzO1xuICB9IC8vIE9wdCBpbiB0byBjYXB0dXJpbmcgYW5kIHJlcG9ydGluZyBzY3JvbGwgcG9zaXRpb25zIGR1cmluZyBuYXZpZ2F0aW9ucyxcbiAgLy8gdXNlZCBieSB0aGUgPFNjcm9sbFJlc3RvcmF0aW9uPiBjb21wb25lbnRcblxuXG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKHBvc2l0aW9ucywgZ2V0UG9zaXRpb24sIGdldEtleSkge1xuICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gcG9zaXRpb25zO1xuICAgIGdldFNjcm9sbFBvc2l0aW9uID0gZ2V0UG9zaXRpb247XG5cbiAgICBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSA9IGdldEtleSB8fCAobG9jYXRpb24gPT4gbG9jYXRpb24ua2V5KTsgLy8gUGVyZm9ybSBpbml0aWFsIGh5ZHJhdGlvbiBzY3JvbGwgcmVzdG9yYXRpb24sIHNpbmNlIHdlIG1pc3MgdGhlIGJvYXQgb25cbiAgICAvLyB0aGUgaW5pdGlhbCB1cGRhdGVTdGF0ZSgpIGJlY2F1c2Ugd2UndmUgbm90IHlldCByZW5kZXJlZCA8U2Nyb2xsUmVzdG9yYXRpb24vPlxuICAgIC8vIGFuZCB0aGVyZWZvcmUgaGF2ZSBubyBzYXZlZFNjcm9sbFBvc2l0aW9ucyBhdmFpbGFibGVcblxuXG4gICAgaWYgKCFpbml0aWFsU2Nyb2xsUmVzdG9yZWQgJiYgc3RhdGUubmF2aWdhdGlvbiA9PT0gSURMRV9OQVZJR0FUSU9OKSB7XG4gICAgICBpbml0aWFsU2Nyb2xsUmVzdG9yZWQgPSB0cnVlO1xuICAgICAgbGV0IHkgPSBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKHN0YXRlLmxvY2F0aW9uLCBzdGF0ZS5tYXRjaGVzKTtcblxuICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uOiB5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSA9IG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbWF0Y2hlcykge1xuICAgIGlmIChzYXZlZFNjcm9sbFBvc2l0aW9ucyAmJiBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSAmJiBnZXRTY3JvbGxQb3NpdGlvbikge1xuICAgICAgbGV0IHVzZXJNYXRjaGVzID0gbWF0Y2hlcy5tYXAobSA9PiBjcmVhdGVVc2VNYXRjaGVzTWF0Y2gobSwgc3RhdGUubG9hZGVyRGF0YSkpO1xuICAgICAgbGV0IGtleSA9IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5KGxvY2F0aW9uLCB1c2VyTWF0Y2hlcykgfHwgbG9jYXRpb24ua2V5O1xuICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XSA9IGdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbWF0Y2hlcykge1xuICAgIGlmIChzYXZlZFNjcm9sbFBvc2l0aW9ucyAmJiBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSAmJiBnZXRTY3JvbGxQb3NpdGlvbikge1xuICAgICAgbGV0IHVzZXJNYXRjaGVzID0gbWF0Y2hlcy5tYXAobSA9PiBjcmVhdGVVc2VNYXRjaGVzTWF0Y2gobSwgc3RhdGUubG9hZGVyRGF0YSkpO1xuICAgICAgbGV0IGtleSA9IGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5KGxvY2F0aW9uLCB1c2VyTWF0Y2hlcykgfHwgbG9jYXRpb24ua2V5O1xuICAgICAgbGV0IHkgPSBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBfaW50ZXJuYWxTZXRSb3V0ZXMobmV3Um91dGVzKSB7XG4gICAgaW5GbGlnaHREYXRhUm91dGVzID0gbmV3Um91dGVzO1xuICB9XG5cbiAgcm91dGVyID0ge1xuICAgIGdldCBiYXNlbmFtZSgpIHtcbiAgICAgIHJldHVybiBpbml0LmJhc2VuYW1lO1xuICAgIH0sXG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICByZXR1cm4gZGF0YVJvdXRlcztcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZSxcbiAgICBzdWJzY3JpYmUsXG4gICAgZW5hYmxlU2Nyb2xsUmVzdG9yYXRpb24sXG4gICAgbmF2aWdhdGUsXG4gICAgZmV0Y2gsXG4gICAgcmV2YWxpZGF0ZSxcbiAgICAvLyBQYXNzdGhyb3VnaCB0byBoaXN0b3J5LWF3YXJlIGNyZWF0ZUhyZWYgdXNlZCBieSB1c2VIcmVmIHNvIHdlIGdldCBwcm9wZXJcbiAgICAvLyBoYXNoLWF3YXJlIFVSTHMgaW4gRE9NIHBhdGhzXG4gICAgY3JlYXRlSHJlZjogdG8gPT4gaW5pdC5oaXN0b3J5LmNyZWF0ZUhyZWYodG8pLFxuICAgIGVuY29kZUxvY2F0aW9uOiB0byA9PiBpbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24odG8pLFxuICAgIGdldEZldGNoZXIsXG4gICAgZGVsZXRlRmV0Y2hlcixcbiAgICBkaXNwb3NlLFxuICAgIGdldEJsb2NrZXIsXG4gICAgZGVsZXRlQmxvY2tlcixcbiAgICBfaW50ZXJuYWxGZXRjaENvbnRyb2xsZXJzOiBmZXRjaENvbnRyb2xsZXJzLFxuICAgIF9pbnRlcm5hbEFjdGl2ZURlZmVycmVkczogYWN0aXZlRGVmZXJyZWRzLFxuICAgIC8vIFRPRE86IFJlbW92ZSBzZXRSb3V0ZXMsIGl0J3MgdGVtcG9yYXJ5IHRvIGF2b2lkIGRlYWxpbmcgd2l0aFxuICAgIC8vIHVwZGF0aW5nIHRoZSB0cmVlIHdoaWxlIHZhbGlkYXRpbmcgdGhlIHVwZGF0ZSBhbGdvcml0aG0uXG4gICAgX2ludGVybmFsU2V0Um91dGVzXG4gIH07XG4gIHJldHVybiByb3V0ZXI7XG59IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBjcmVhdGVTdGF0aWNIYW5kbGVyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBVTlNBRkVfREVGRVJSRURfU1lNQk9MID0gU3ltYm9sKFwiZGVmZXJyZWRcIik7XG5mdW5jdGlvbiBjcmVhdGVTdGF0aWNIYW5kbGVyKHJvdXRlcywgb3B0cykge1xuICBpbnZhcmlhbnQocm91dGVzLmxlbmd0aCA+IDAsIFwiWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSByb3V0ZXMgYXJyYXkgdG8gY3JlYXRlU3RhdGljSGFuZGxlclwiKTtcbiAgbGV0IG1hbmlmZXN0ID0ge307XG4gIGxldCBkZXRlY3RFcnJvckJvdW5kYXJ5ID0gKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZGV0ZWN0RXJyb3JCb3VuZGFyeSkgfHwgZGVmYXVsdERldGVjdEVycm9yQm91bmRhcnk7XG4gIGxldCBkYXRhUm91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZXMsIGRldGVjdEVycm9yQm91bmRhcnksIHVuZGVmaW5lZCwgbWFuaWZlc3QpO1xuICBsZXQgYmFzZW5hbWUgPSAob3B0cyA/IG9wdHMuYmFzZW5hbWUgOiBudWxsKSB8fCBcIi9cIjtcbiAgLyoqXG4gICAqIFRoZSBxdWVyeSgpIG1ldGhvZCBpcyBpbnRlbmRlZCBmb3IgZG9jdW1lbnQgcmVxdWVzdHMsIGluIHdoaWNoIHdlIHdhbnQgdG9cbiAgICogY2FsbCBhbiBvcHRpb25hbCBhY3Rpb24gYW5kIHBvdGVudGlhbGx5IG11bHRpcGxlIGxvYWRlcnMgZm9yIGFsbCBuZXN0ZWRcbiAgICogcm91dGVzLiAgSXQgcmV0dXJucyBhIFN0YXRpY0hhbmRsZXJDb250ZXh0IG9iamVjdCwgd2hpY2ggaXMgdmVyeSBzaW1pbGFyXG4gICAqIHRvIHRoZSByb3V0ZXIgc3RhdGUgKGxvY2F0aW9uLCBsb2FkZXJEYXRhLCBhY3Rpb25EYXRhLCBlcnJvcnMsIGV0Yy4pIGFuZFxuICAgKiBhbHNvIGFkZHMgU1NSLXNwZWNpZmljIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIHN0YXR1c0NvZGUgYW5kIGhlYWRlcnNcbiAgICogZnJvbSBhY3Rpb24vbG9hZGVycyBSZXNwb25zZXMuXG4gICAqXG4gICAqIEl0IF9zaG91bGRfIG5ldmVyIHRocm93IGFuZCBzaG91bGQgcmVwb3J0IGFsbCBlcnJvcnMgdGhyb3VnaCB0aGVcbiAgICogcmV0dXJuZWQgY29udGV4dC5lcnJvcnMgb2JqZWN0LCBwcm9wZXJseSBhc3NvY2lhdGluZyBlcnJvcnMgdG8gdGhlaXIgZXJyb3JcbiAgICogYm91bmRhcnkuICBBZGRpdGlvbmFsbHksIGl0IHRyYWNrcyBfZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB3aGljaCBjYW4gYmVcbiAgICogdXNlZCB0byBlbXVsYXRlIFJlYWN0IGVycm9yIGJvdW5kYXJpZXMgZHVyaW5nIFNTciBieSBwZXJmb3JtaW5nIGEgc2Vjb25kXG4gICAqIHBhc3Mgb25seSBkb3duIHRvIHRoZSBib3VuZGFyeUlkLlxuICAgKlxuICAgKiBUaGUgb25lIGV4Y2VwdGlvbiB3aGVyZSB3ZSBkbyBub3QgcmV0dXJuIGEgU3RhdGljSGFuZGxlckNvbnRleHQgaXMgd2hlbiBhXG4gICAqIHJlZGlyZWN0IHJlc3BvbnNlIGlzIHJldHVybmVkIG9yIHRocm93biBmcm9tIGFueSBhY3Rpb24vbG9hZGVyLiAgV2VcbiAgICogcHJvcGFnYXRlIHRoYXQgb3V0IGFuZCByZXR1cm4gdGhlIHJhdyBSZXNwb25zZSBzbyB0aGUgSFRUUCBzZXJ2ZXIgY2FuXG4gICAqIHJldHVybiBpdCBkaXJlY3RseS5cbiAgICovXG5cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnkocmVxdWVzdCwgX3RlbXAyKSB7XG4gICAgbGV0IHtcbiAgICAgIHJlcXVlc3RDb250ZXh0XG4gICAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihcIlwiLCBjcmVhdGVQYXRoKHVybCksIG51bGwsIFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGxvY2F0aW9uLCBiYXNlbmFtZSk7IC8vIFNTUiBzdXBwb3J0cyBIRUFEIHJlcXVlc3RzIHdoaWxlIFNQQSBkb2Vzbid0XG5cbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2RcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbWV0aG9kTm90QWxsb3dlZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VuYW1lLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2hlczogbWV0aG9kTm90QWxsb3dlZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXNDb2RlOiBlcnJvci5zdGF0dXMsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhc2VuYW1lLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCk7XG5cbiAgICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gLy8gV2hlbiByZXR1cm5pbmcgU3RhdGljSGFuZGxlckNvbnRleHQsIHdlIHBhdGNoIGJhY2sgaW4gdGhlIGxvY2F0aW9uIGhlcmVcbiAgICAvLyBzaW5jZSB3ZSBuZWVkIGl0IGZvciBSZWFjdCBDb250ZXh0LiAgQnV0IHRoaXMgaGVscHMga2VlcCBvdXIgc3VibWl0IGFuZFxuICAgIC8vIGxvYWRSb3V0ZURhdGEgb3BlcmF0aW5nIG9uIGEgUmVxdWVzdCBpbnN0ZWFkIG9mIGEgTG9jYXRpb25cblxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYmFzZW5hbWVcbiAgICB9LCByZXN1bHQpO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgcXVlcnlSb3V0ZSgpIG1ldGhvZCBpcyBpbnRlbmRlZCBmb3IgdGFyZ2V0ZWQgcm91dGUgcmVxdWVzdHMsIGVpdGhlclxuICAgKiBmb3IgZmV0Y2ggP19kYXRhIHJlcXVlc3RzIG9yIHJlc291cmNlIHJvdXRlIHJlcXVlc3RzLiAgSW4gdGhpcyBjYXNlLCB3ZVxuICAgKiBhcmUgb25seSBldmVyIGNhbGxpbmcgYSBzaW5nbGUgYWN0aW9uIG9yIGxvYWRlciwgYW5kIHdlIGFyZSByZXR1cm5pbmcgdGhlXG4gICAqIHJldHVybmVkIHZhbHVlIGRpcmVjdGx5LiAgSW4gbW9zdCBjYXNlcywgdGhpcyB3aWxsIGJlIGEgUmVzcG9uc2UgcmV0dXJuZWRcbiAgICogZnJvbSB0aGUgYWN0aW9uL2xvYWRlciwgYnV0IGl0IG1heSBiZSBhIHByaW1pdGl2ZSBvciBvdGhlciB2YWx1ZSBhcyB3ZWxsIC1cbiAgICogYW5kIGluIHN1Y2ggY2FzZXMgdGhlIGNhbGxpbmcgY29udGV4dCBzaG91bGQgaGFuZGxlIHRoYXQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIFdlIGRvIHJlc3BlY3QgdGhlIHRocm93L3JldHVybiBkaWZmZXJlbnRpYXRpb24sIHNvIGlmIGFuIGFjdGlvbi9sb2FkZXJcbiAgICogdGhyb3dzLCB0aGVuIHRoaXMgbWV0aG9kIHdpbGwgdGhyb3cgdGhlIHZhbHVlLiAgVGhpcyBpcyBpbXBvcnRhbnQgc28gd2VcbiAgICogY2FuIGRvIHByb3BlciBib3VuZGFyeSBpZGVudGlmaWNhdGlvbiBpbiBSZW1peCB3aGVyZSBhIHRocm93biBSZXNwb25zZVxuICAgKiBtdXN0IGdvIHRvIHRoZSBDYXRjaCBCb3VuZGFyeSBidXQgYSByZXR1cm5lZCBSZXNwb25zZSBpcyBoYXBweS1wYXRoLlxuICAgKlxuICAgKiBPbmUgdGhpbmcgdG8gbm90ZSBpcyB0aGF0IGFueSBSb3V0ZXItaW5pdGlhdGVkIEVycm9ycyB0aGF0IG1ha2Ugc2Vuc2VcbiAgICogdG8gYXNzb2NpYXRlIHdpdGggYSBzdGF0dXMgY29kZSB3aWxsIGJlIHRocm93biBhcyBhbiBFcnJvclJlc3BvbnNlXG4gICAqIGluc3RhbmNlIHdoaWNoIGluY2x1ZGUgdGhlIHJhdyBFcnJvciwgc3VjaCB0aGF0IHRoZSBjYWxsaW5nIGNvbnRleHQgY2FuXG4gICAqIHNlcmlhbGl6ZSB0aGUgZXJyb3IgYXMgdGhleSBzZWUgZml0IHdoaWxlIGluY2x1ZGluZyB0aGUgcHJvcGVyIHJlc3BvbnNlXG4gICAqIGNvZGUuICBFeGFtcGxlcyBoZXJlIGFyZSA0MDQgYW5kIDQwNSBlcnJvcnMgdGhhdCBvY2N1ciBwcmlvciB0byByZWFjaGluZ1xuICAgKiBhbnkgdXNlci1kZWZpbmVkIGxvYWRlcnMuXG4gICAqL1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnlSb3V0ZShyZXF1ZXN0LCBfdGVtcDMpIHtcbiAgICBsZXQge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHJlcXVlc3RDb250ZXh0XG4gICAgfSA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDM7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihcIlwiLCBjcmVhdGVQYXRoKHVybCksIG51bGwsIFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGxvY2F0aW9uLCBiYXNlbmFtZSk7IC8vIFNTUiBzdXBwb3J0cyBIRUFEIHJlcXVlc3RzIHdoaWxlIFNQQSBkb2Vzbid0XG5cbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiSEVBRFwiICYmIG1ldGhvZCAhPT0gXCJPUFRJT05TXCIpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgbWF0Y2ggPSByb3V0ZUlkID8gbWF0Y2hlcy5maW5kKG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkgOiBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG5cbiAgICBpZiAocm91dGVJZCAmJiAhbWF0Y2gpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAzLCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2gpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhpdCBJIGRvbid0IHRoaW5rP1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgbWF0Y2gpO1xuXG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZXQgZXJyb3IgPSByZXN1bHQuZXJyb3JzID8gT2JqZWN0LnZhbHVlcyhyZXN1bHQuZXJyb3JzKVswXSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB3ZSBnb3QgYmFjayByZXN1bHQuZXJyb3JzLCB0aGF0IG1lYW5zIHRoZSBsb2FkZXIvYWN0aW9uIHRocmV3XG4gICAgICAvLyBfc29tZXRoaW5nXyB0aGF0IHdhc24ndCBhIFJlc3BvbnNlLCBidXQgaXQncyBub3QgZ3VhcmFudGVlZC9yZXF1aXJlZFxuICAgICAgLy8gdG8gYmUgYW4gYGluc3RhbmNlb2YgRXJyb3JgIGVpdGhlciwgc28gd2UgaGF2ZSB0byB1c2UgdGhyb3cgaGVyZSB0b1xuICAgICAgLy8gcHJlc2VydmUgdGhlIFwiZXJyb3JcIiBzdGF0ZSBvdXRzaWRlIG9mIHF1ZXJ5SW1wbC5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gLy8gUGljayBvZmYgdGhlIHJpZ2h0IHN0YXRlIHZhbHVlIHRvIHJldHVyblxuXG5cbiAgICBpZiAocmVzdWx0LmFjdGlvbkRhdGEpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlc3VsdC5hY3Rpb25EYXRhKVswXTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmxvYWRlckRhdGEpIHtcbiAgICAgIHZhciBfcmVzdWx0JGFjdGl2ZURlZmVycmU7XG5cbiAgICAgIGxldCBkYXRhID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQubG9hZGVyRGF0YSlbMF07XG5cbiAgICAgIGlmICgoX3Jlc3VsdCRhY3RpdmVEZWZlcnJlID0gcmVzdWx0LmFjdGl2ZURlZmVycmVkcykgIT0gbnVsbCAmJiBfcmVzdWx0JGFjdGl2ZURlZmVycmVbbWF0Y2gucm91dGUuaWRdKSB7XG4gICAgICAgIGRhdGFbVU5TQUZFX0RFRkVSUkVEX1NZTUJPTF0gPSByZXN1bHQuYWN0aXZlRGVmZXJyZWRzW21hdGNoLnJvdXRlLmlkXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2gpIHtcbiAgICBpbnZhcmlhbnQocmVxdWVzdC5zaWduYWwsIFwicXVlcnkoKS9xdWVyeVJvdXRlKCkgcmVxdWVzdHMgbXVzdCBjb250YWluIGFuIEFib3J0Q29udHJvbGxlciBzaWduYWxcIik7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGlzTXV0YXRpb25NZXRob2QocmVxdWVzdC5tZXRob2QudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHN1Ym1pdChyZXF1ZXN0LCBtYXRjaGVzLCByb3V0ZU1hdGNoIHx8IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKSwgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2ggIT0gbnVsbCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoKTtcbiAgICAgIHJldHVybiBpc1Jlc3BvbnNlKHJlc3VsdCkgPyByZXN1bHQgOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7XG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB0aHJldy9yZXR1cm5lZCBhIFJlc3BvbnNlIGluIGNhbGxMb2FkZXJPckFjdGlvbiwgd2UgdGhyb3dcbiAgICAgIC8vIGl0IHRvIGJhaWwgb3V0IGFuZCB0aGVuIHJldHVybiBvciB0aHJvdyBoZXJlIGJhc2VkIG9uIHdoZXRoZXIgdGhlIHVzZXJcbiAgICAgIC8vIHJldHVybmVkIG9yIHRocmV3XG4gICAgICBpZiAoaXNRdWVyeVJvdXRlUmVzcG9uc2UoZSkpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvciAmJiAhaXNSZWRpcmVjdFJlc3BvbnNlKGUucmVzcG9uc2UpKSB7XG4gICAgICAgICAgdGhyb3cgZS5yZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlLnJlc3BvbnNlO1xuICAgICAgfSAvLyBSZWRpcmVjdHMgYXJlIGFsd2F5cyByZXR1cm5lZCBzaW5jZSB0aGV5IGRvbid0IHByb3BhZ2F0ZSB0byBjYXRjaFxuICAgICAgLy8gYm91bmRhcmllc1xuXG5cbiAgICAgIGlmIChpc1JlZGlyZWN0UmVzcG9uc2UoZSkpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0KHJlcXVlc3QsIG1hdGNoZXMsIGFjdGlvbk1hdGNoLCByZXF1ZXN0Q29udGV4dCwgaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIWFjdGlvbk1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCByZXF1ZXN0LCBhY3Rpb25NYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIGJhc2VuYW1lLCB0cnVlLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBsZXQgbWV0aG9kID0gaXNSb3V0ZVJlcXVlc3QgPyBcInF1ZXJ5Um91dGVcIiA6IFwicXVlcnlcIjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1ldGhvZCArIFwiKCkgY2FsbCBhYm9ydGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFVoaGhoIC0gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCB3ZSBzaG91bGQgYWx3YXlzIHRocm93IHRoZXNlIGZyb21cbiAgICAgIC8vIGNhbGxMb2FkZXJPckFjdGlvbiwgYnV0IHRoZSB0eXBlIG5hcnJvd2luZyBoZXJlIGtlZXBzIFRTIGhhcHB5IGFuZCB3ZVxuICAgICAgLy8gY2FuIGdldCBiYWNrIG9uIHRoZSBcInRocm93IGFsbCByZWRpcmVjdCByZXNwb25zZXNcIiB0cmFpbiBoZXJlIHNob3VsZFxuICAgICAgLy8gdGhpcyBldmVyIGhhcHBlbiA6L1xuICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgc3RhdHVzOiByZXN1bHQuc3RhdHVzLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgTG9jYXRpb246IHJlc3VsdC5sb2NhdGlvblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgLy8gTm90ZTogVGhpcyBzaG91bGQgb25seSBiZSBub24tUmVzcG9uc2UgdmFsdWVzIGlmIHdlIGdldCBoZXJlLCBzaW5jZVxuICAgICAgLy8gaXNSb3V0ZVJlcXVlc3Qgc2hvdWxkIHRocm93IGFueSBSZXNwb25zZSByZWNlaXZlZCBpbiBjYWxsTG9hZGVyT3JBY3Rpb25cbiAgICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzOiBbYWN0aW9uTWF0Y2hdLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgLy8gTm90ZTogc3RhdHVzQ29kZSArIGhlYWRlcnMgYXJlIHVudXNlZCBoZXJlIHNpbmNlIHF1ZXJ5Um91dGUgd2lsbFxuICAgICAgICAvLyByZXR1cm4gdGhlIHJhdyBSZXNwb25zZSBvciB2YWx1ZVxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFN0b3JlIG9mZiB0aGUgcGVuZGluZyBlcnJvciAtIHdlIHVzZSBpdCB0byBkZXRlcm1pbmUgd2hpY2ggbG9hZGVyc1xuICAgICAgLy8gdG8gY2FsbCBhbmQgd2lsbCBjb21taXQgaXQgd2hlbiB3ZSBjb21wbGV0ZSB0aGUgbmF2aWdhdGlvblxuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGFjdGlvbk1hdGNoLnJvdXRlLmlkKTtcbiAgICAgIGxldCBjb250ZXh0ID0gYXdhaXQgbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgdW5kZWZpbmVkLCB7XG4gICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICB9KTsgLy8gYWN0aW9uIHN0YXR1cyBjb2RlcyB0YWtlIHByZWNlZGVuY2Ugb3ZlciBsb2FkZXIgc3RhdHVzIGNvZGVzXG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQuZXJyb3IpID8gcmVzdWx0LmVycm9yLnN0YXR1cyA6IDUwMCxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczogX2V4dGVuZHMoe30sIHJlc3VsdC5oZWFkZXJzID8ge1xuICAgICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICAgIH0gOiB7fSlcbiAgICAgIH0pO1xuICAgIH0gLy8gQ3JlYXRlIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSBsb2FkZXJzXG5cblxuICAgIGxldCBsb2FkZXJSZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdC51cmwsIHtcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICAgIHJlZGlyZWN0OiByZXF1ZXN0LnJlZGlyZWN0LFxuICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbFxuICAgIH0pO1xuICAgIGxldCBjb250ZXh0ID0gYXdhaXQgbG9hZFJvdXRlRGF0YShsb2FkZXJSZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCByZXN1bHQuc3RhdHVzQ29kZSA/IHtcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXNDb2RlXG4gICAgfSA6IHt9LCB7XG4gICAgICBhY3Rpb25EYXRhOiB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICB9LFxuICAgICAgYWN0aW9uSGVhZGVyczogX2V4dGVuZHMoe30sIHJlc3VsdC5oZWFkZXJzID8ge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfSA6IHt9KVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCwgcGVuZGluZ0FjdGlvbkVycm9yKSB7XG4gICAgbGV0IGlzUm91dGVSZXF1ZXN0ID0gcm91dGVNYXRjaCAhPSBudWxsOyAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW4gKHF1ZXJ5Um91dGUoKSlcblxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCAmJiAhKHJvdXRlTWF0Y2ggIT0gbnVsbCAmJiByb3V0ZU1hdGNoLnJvdXRlLmxvYWRlcikgJiYgIShyb3V0ZU1hdGNoICE9IG51bGwgJiYgcm91dGVNYXRjaC5yb3V0ZS5sYXp5KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkOiByb3V0ZU1hdGNoID09IG51bGwgPyB2b2lkIDAgOiByb3V0ZU1hdGNoLnJvdXRlLmlkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdE1hdGNoZXMgPSByb3V0ZU1hdGNoID8gW3JvdXRlTWF0Y2hdIDogZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgT2JqZWN0LmtleXMocGVuZGluZ0FjdGlvbkVycm9yIHx8IHt9KVswXSk7XG4gICAgbGV0IG1hdGNoZXNUb0xvYWQgPSByZXF1ZXN0TWF0Y2hlcy5maWx0ZXIobSA9PiBtLnJvdXRlLmxvYWRlciB8fCBtLnJvdXRlLmxhenkpOyAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW4gKHF1ZXJ5KCkpXG5cbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIC8vIEFkZCBhIG51bGwgZm9yIGFsbCBtYXRjaGVkIHJvdXRlcyBmb3IgcHJvcGVyIHJldmFsaWRhdGlvbiBvbiB0aGUgY2xpZW50XG4gICAgICAgIGxvYWRlckRhdGE6IG1hdGNoZXMucmVkdWNlKChhY2MsIG0pID0+IE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgICAgW20ucm91dGUuaWRdOiBudWxsXG4gICAgICAgIH0pLCB7fSksXG4gICAgICAgIGVycm9yczogcGVuZGluZ0FjdGlvbkVycm9yIHx8IG51bGwsXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFsuLi5tYXRjaGVzVG9Mb2FkLm1hcChtYXRjaCA9PiBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgcmVxdWVzdCwgbWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBiYXNlbmFtZSwgdHJ1ZSwgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0KSldKTtcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICBsZXQgbWV0aG9kID0gaXNSb3V0ZVJlcXVlc3QgPyBcInF1ZXJ5Um91dGVcIiA6IFwicXVlcnlcIjtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXRob2QgKyBcIigpIGNhbGwgYWJvcnRlZFwiKTtcbiAgICB9IC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG5cblxuICAgIGxldCBhY3RpdmVEZWZlcnJlZHMgPSBuZXcgTWFwKCk7XG4gICAgbGV0IGNvbnRleHQgPSBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdBY3Rpb25FcnJvciwgYWN0aXZlRGVmZXJyZWRzKTsgLy8gQWRkIGEgbnVsbCBmb3IgYW55IG5vbi1sb2FkZXIgbWF0Y2hlcyBmb3IgcHJvcGVyIHJldmFsaWRhdGlvbiBvbiB0aGUgY2xpZW50XG5cbiAgICBsZXQgZXhlY3V0ZWRMb2FkZXJzID0gbmV3IFNldChtYXRjaGVzVG9Mb2FkLm1hcChtYXRjaCA9PiBtYXRjaC5yb3V0ZS5pZCkpO1xuICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICBpZiAoIWV4ZWN1dGVkTG9hZGVycy5oYXMobWF0Y2gucm91dGUuaWQpKSB7XG4gICAgICAgIGNvbnRleHQubG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0gPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgbWF0Y2hlcyxcbiAgICAgIGFjdGl2ZURlZmVycmVkczogYWN0aXZlRGVmZXJyZWRzLnNpemUgPiAwID8gT2JqZWN0LmZyb21FbnRyaWVzKGFjdGl2ZURlZmVycmVkcy5lbnRyaWVzKCkpIDogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhUm91dGVzLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5Um91dGVcbiAgfTtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhlbHBlcnNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogR2l2ZW4gYW4gZXhpc3RpbmcgU3RhdGljSGFuZGxlckNvbnRleHQgYW5kIGFuIGVycm9yIHRocm93biBhdCByZW5kZXIgdGltZSxcbiAqIHByb3ZpZGUgYW4gdXBkYXRlZCBTdGF0aWNIYW5kbGVyQ29udGV4dCBzdWl0YWJsZSBmb3IgYSBzZWNvbmQgU1NSIHJlbmRlclxuICovXG5cbmZ1bmN0aW9uIGdldFN0YXRpY0NvbnRleHRGcm9tRXJyb3Iocm91dGVzLCBjb250ZXh0LCBlcnJvcikge1xuICBsZXQgbmV3Q29udGV4dCA9IF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgc3RhdHVzQ29kZTogNTAwLFxuICAgIGVycm9yczoge1xuICAgICAgW2NvbnRleHQuX2RlZXBlc3RSZW5kZXJlZEJvdW5kYXJ5SWQgfHwgcm91dGVzWzBdLmlkXTogZXJyb3JcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZXdDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBpc1N1Ym1pc3Npb25OYXZpZ2F0aW9uKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgIT0gbnVsbCAmJiBcImZvcm1EYXRhXCIgaW4gb3B0cztcbn0gLy8gTm9ybWFsaXplIG5hdmlnYXRpb24gb3B0aW9ucyBieSBjb252ZXJ0aW5nIGZvcm1NZXRob2Q9R0VUIGZvcm1EYXRhIG9iamVjdHMgdG9cbi8vIFVSTFNlYXJjaFBhcmFtcyBzbyB0aGV5IGJlaGF2ZSBpZGVudGljYWxseSB0byBsaW5rcyB3aXRoIHF1ZXJ5IHBhcmFtc1xuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5hdmlnYXRlT3B0aW9ucyh0bywgZnV0dXJlLCBvcHRzLCBpc0ZldGNoZXIpIHtcbiAgaWYgKGlzRmV0Y2hlciA9PT0gdm9pZCAwKSB7XG4gICAgaXNGZXRjaGVyID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7IC8vIFJldHVybiBsb2NhdGlvbiB2ZXJiYXRpbSBvbiBub24tc3VibWlzc2lvbiBuYXZpZ2F0aW9uc1xuXG4gIGlmICghb3B0cyB8fCAhaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoXG4gICAgfTtcbiAgfVxuXG4gIGlmIChvcHRzLmZvcm1NZXRob2QgJiYgIWlzVmFsaWRNZXRob2Qob3B0cy5mb3JtTWV0aG9kKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoLFxuICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogb3B0cy5mb3JtTWV0aG9kXG4gICAgICB9KVxuICAgIH07XG4gIH0gLy8gQ3JlYXRlIGEgU3VibWlzc2lvbiBvbiBub24tR0VUIG5hdmlnYXRpb25zXG5cblxuICBsZXQgc3VibWlzc2lvbjtcblxuICBpZiAob3B0cy5mb3JtRGF0YSkge1xuICAgIGxldCBmb3JtTWV0aG9kID0gb3B0cy5mb3JtTWV0aG9kIHx8IFwiZ2V0XCI7XG4gICAgc3VibWlzc2lvbiA9IHtcbiAgICAgIGZvcm1NZXRob2Q6IGZ1dHVyZS52N19ub3JtYWxpemVGb3JtTWV0aG9kID8gZm9ybU1ldGhvZC50b1VwcGVyQ2FzZSgpIDogZm9ybU1ldGhvZC50b0xvd2VyQ2FzZSgpLFxuICAgICAgZm9ybUFjdGlvbjogc3RyaXBIYXNoRnJvbVBhdGgocGF0aCksXG4gICAgICBmb3JtRW5jVHlwZTogb3B0cyAmJiBvcHRzLmZvcm1FbmNUeXBlIHx8IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICBmb3JtRGF0YTogb3B0cy5mb3JtRGF0YVxuICAgIH07XG5cbiAgICBpZiAoaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBzdWJtaXNzaW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSAvLyBGbGF0dGVuIHN1Ym1pc3Npb24gb250byBVUkxTZWFyY2hQYXJhbXMgZm9yIEdFVCBzdWJtaXNzaW9uc1xuXG5cbiAgbGV0IHBhcnNlZFBhdGggPSBwYXJzZVBhdGgocGF0aCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhvcHRzLmZvcm1EYXRhKTsgLy8gU2luY2UgZmV0Y2hlciBHRVQgc3VibWlzc2lvbnMgb25seSBydW4gYSBzaW5nbGUgbG9hZGVyIChhcyBvcHBvc2VkIHRvXG4gIC8vIG5hdmlnYXRpb24gR0VUIHN1Ym1pc3Npb25zIHdoaWNoIHJ1biBhbGwgbG9hZGVycyksIHdlIG5lZWQgdG8gcHJlc2VydmVcbiAgLy8gYW55IGluY29taW5nID9pbmRleCBwYXJhbXNcblxuICBpZiAoaXNGZXRjaGVyICYmIHBhcnNlZFBhdGguc2VhcmNoICYmIGhhc05ha2VkSW5kZXhRdWVyeShwYXJzZWRQYXRoLnNlYXJjaCkpIHtcbiAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKFwiaW5kZXhcIiwgXCJcIik7XG4gIH1cblxuICBwYXJzZWRQYXRoLnNlYXJjaCA9IFwiP1wiICsgc2VhcmNoUGFyYW1zO1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNyZWF0ZVBhdGgocGFyc2VkUGF0aCksXG4gICAgc3VibWlzc2lvblxuICB9O1xufSAvLyBGaWx0ZXIgb3V0IGFsbCByb3V0ZXMgYmVsb3cgYW55IGNhdWdodCBlcnJvciBhcyB0aGV5IGFyZW4ndCBnb2luZyB0b1xuLy8gcmVuZGVyIHNvIHdlIGRvbid0IG5lZWQgdG8gbG9hZCB0aGVtXG5cblxuZnVuY3Rpb24gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgYm91bmRhcnlJZCkge1xuICBsZXQgYm91bmRhcnlNYXRjaGVzID0gbWF0Y2hlcztcblxuICBpZiAoYm91bmRhcnlJZCkge1xuICAgIGxldCBpbmRleCA9IG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gYm91bmRhcnlJZCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgYm91bmRhcnlNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgwLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kYXJ5TWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hlc1RvTG9hZChoaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIGZldGNoTG9hZE1hdGNoZXMsIHJvdXRlc1RvVXNlLCBiYXNlbmFtZSwgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvcikge1xuICBsZXQgYWN0aW9uUmVzdWx0ID0gcGVuZGluZ0Vycm9yID8gT2JqZWN0LnZhbHVlcyhwZW5kaW5nRXJyb3IpWzBdIDogcGVuZGluZ0FjdGlvbkRhdGEgPyBPYmplY3QudmFsdWVzKHBlbmRpbmdBY3Rpb25EYXRhKVswXSA6IHVuZGVmaW5lZDtcbiAgbGV0IGN1cnJlbnRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdGF0ZS5sb2NhdGlvbik7XG4gIGxldCBuZXh0VXJsID0gaGlzdG9yeS5jcmVhdGVVUkwobG9jYXRpb24pO1xuICBsZXQgZGVmYXVsdFNob3VsZFJldmFsaWRhdGUgPSAvLyBGb3JjZWQgcmV2YWxpZGF0aW9uIGR1ZSB0byBzdWJtaXNzaW9uLCB1c2VSZXZhbGlkYXRlLCBvciBYLVJlbWl4LVJldmFsaWRhdGVcbiAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCB8fCAvLyBDbGlja2VkIHRoZSBzYW1lIGxpbmssIHJlc3VibWl0dGVkIGEgR0VUIGZvcm1cbiAgY3VycmVudFVybC50b1N0cmluZygpID09PSBuZXh0VXJsLnRvU3RyaW5nKCkgfHwgLy8gU2VhcmNoIHBhcmFtcyBhZmZlY3QgYWxsIGxvYWRlcnNcbiAgY3VycmVudFVybC5zZWFyY2ggIT09IG5leHRVcmwuc2VhcmNoOyAvLyBQaWNrIG5hdmlnYXRpb24gbWF0Y2hlcyB0aGF0IGFyZSBuZXQtbmV3IG9yIHF1YWxpZnkgZm9yIHJldmFsaWRhdGlvblxuXG4gIGxldCBib3VuZGFyeUlkID0gcGVuZGluZ0Vycm9yID8gT2JqZWN0LmtleXMocGVuZGluZ0Vycm9yKVswXSA6IHVuZGVmaW5lZDtcbiAgbGV0IGJvdW5kYXJ5TWF0Y2hlcyA9IGdldExvYWRlck1hdGNoZXNVbnRpbEJvdW5kYXJ5KG1hdGNoZXMsIGJvdW5kYXJ5SWQpO1xuICBsZXQgbmF2aWdhdGlvbk1hdGNoZXMgPSBib3VuZGFyeU1hdGNoZXMuZmlsdGVyKChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICBpZiAobWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgLy8gV2UgaGF2ZW4ndCBsb2FkZWQgdGhpcyByb3V0ZSB5ZXQgc28gd2UgZG9uJ3Qga25vdyBpZiBpdCdzIGdvdCBhIGxvYWRlciFcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtYXRjaC5yb3V0ZS5sb2FkZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gQWx3YXlzIGNhbGwgdGhlIGxvYWRlciBvbiBuZXcgcm91dGUgaW5zdGFuY2VzIGFuZCBwZW5kaW5nIGRlZmVyIGNhbmNlbGxhdGlvbnNcblxuXG4gICAgaWYgKGlzTmV3TG9hZGVyKHN0YXRlLmxvYWRlckRhdGEsIHN0YXRlLm1hdGNoZXNbaW5kZXhdLCBtYXRjaCkgfHwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMuc29tZShpZCA9PiBpZCA9PT0gbWF0Y2gucm91dGUuaWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZm9yIHdoZW4gd2UgcmV2YWxpZGF0ZS4gIElmIHRoZSByb3V0ZVxuICAgIC8vIHByb3ZpZGVzIGl0J3Mgb3duIGltcGxlbWVudGF0aW9uLCB0aGVuIHdlIGdpdmUgdGhlbSBmdWxsIGNvbnRyb2wgYnV0XG4gICAgLy8gcHJvdmlkZSB0aGlzIHZhbHVlIHNvIHRoZXkgY2FuIGxldmVyYWdlIGl0IGlmIG5lZWRlZCBhZnRlciB0aGV5IGNoZWNrXG4gICAgLy8gdGhlaXIgb3duIHNwZWNpZmljIHVzZSBjYXNlc1xuXG5cbiAgICBsZXQgY3VycmVudFJvdXRlTWF0Y2ggPSBzdGF0ZS5tYXRjaGVzW2luZGV4XTtcbiAgICBsZXQgbmV4dFJvdXRlTWF0Y2ggPSBtYXRjaDtcbiAgICByZXR1cm4gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihtYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIGN1cnJlbnRQYXJhbXM6IGN1cnJlbnRSb3V0ZU1hdGNoLnBhcmFtcyxcbiAgICAgIG5leHRVcmwsXG4gICAgICBuZXh0UGFyYW1zOiBuZXh0Um91dGVNYXRjaC5wYXJhbXNcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTogZGVmYXVsdFNob3VsZFJldmFsaWRhdGUgfHwgaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRSb3V0ZU1hdGNoLCBuZXh0Um91dGVNYXRjaClcbiAgICB9KSk7XG4gIH0pOyAvLyBQaWNrIGZldGNoZXIubG9hZHMgdGhhdCBuZWVkIHRvIGJlIHJldmFsaWRhdGVkXG5cbiAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXJzID0gW107XG4gIGZldGNoTG9hZE1hdGNoZXMuZm9yRWFjaCgoZiwga2V5KSA9PiB7XG4gICAgLy8gRG9uJ3QgcmV2YWxpZGF0ZSBpZiBmZXRjaGVyIHdvbid0IGJlIHByZXNlbnQgaW4gdGhlIHN1YnNlcXVlbnQgcmVuZGVyXG4gICAgaWYgKCFtYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSBmLnJvdXRlSWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZldGNoZXJNYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIGYucGF0aCwgYmFzZW5hbWUpOyAvLyBJZiB0aGUgZmV0Y2hlciBwYXRoIG5vIGxvbmdlciBtYXRjaGVzLCBwdXNoIGl0IGluIHdpdGggbnVsbCBtYXRjaGVzIHNvXG4gICAgLy8gd2UgY2FuIHRyaWdnZXIgYSA0MDQgaW4gY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhXG5cbiAgICBpZiAoIWZldGNoZXJNYXRjaGVzKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKF9leHRlbmRzKHtcbiAgICAgICAga2V5XG4gICAgICB9LCBmLCB7XG4gICAgICAgIG1hdGNoZXM6IG51bGwsXG4gICAgICAgIG1hdGNoOiBudWxsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGZldGNoZXJNYXRjaCA9IGdldFRhcmdldE1hdGNoKGZldGNoZXJNYXRjaGVzLCBmLnBhdGgpO1xuXG4gICAgaWYgKGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKF9leHRlbmRzKHtcbiAgICAgICAga2V5LFxuICAgICAgICBtYXRjaGVzOiBmZXRjaGVyTWF0Y2hlcyxcbiAgICAgICAgbWF0Y2g6IGZldGNoZXJNYXRjaFxuICAgICAgfSwgZikpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUmV2YWxpZGF0aW5nIGZldGNoZXJzIGFyZSBkZWNvdXBsZWQgZnJvbSB0aGUgcm91dGUgbWF0Y2hlcyBzaW5jZSB0aGV5XG4gICAgLy8gaGl0IGEgc3RhdGljIGhyZWYsIHNvIHRoZXkgX2Fsd2F5c18gY2hlY2sgc2hvdWxkUmV2YWxpZGF0ZSBhbmQgdGhlXG4gICAgLy8gZGVmYXVsdCBpcyBzdHJpY3RseSBpZiBhIHJldmFsaWRhdGlvbiBpcyBleHBsaWNpdGx5IHJlcXVpcmVkIChhY3Rpb25cbiAgICAvLyBzdWJtaXNzaW9ucywgdXNlUmV2YWxpZGF0b3IsIFgtUmVtaXgtUmV2YWxpZGF0ZSkuXG5cblxuICAgIGxldCBzaG91bGRSZXZhbGlkYXRlID0gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihmZXRjaGVyTWF0Y2gsIF9leHRlbmRzKHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICBjdXJyZW50UGFyYW1zOiBzdGF0ZS5tYXRjaGVzW3N0YXRlLm1hdGNoZXMubGVuZ3RoIC0gMV0ucGFyYW1zLFxuICAgICAgbmV4dFVybCxcbiAgICAgIG5leHRQYXJhbXM6IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5wYXJhbXNcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZVxuICAgIH0pKTtcblxuICAgIGlmIChzaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKF9leHRlbmRzKHtcbiAgICAgICAga2V5LFxuICAgICAgICBtYXRjaGVzOiBmZXRjaGVyTWF0Y2hlcyxcbiAgICAgICAgbWF0Y2g6IGZldGNoZXJNYXRjaFxuICAgICAgfSwgZikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbbmF2aWdhdGlvbk1hdGNoZXMsIHJldmFsaWRhdGluZ0ZldGNoZXJzXTtcbn1cblxuZnVuY3Rpb24gaXNOZXdMb2FkZXIoY3VycmVudExvYWRlckRhdGEsIGN1cnJlbnRNYXRjaCwgbWF0Y2gpIHtcbiAgbGV0IGlzTmV3ID0gLy8gW2FdIC0+IFthLCBiXVxuICAhY3VycmVudE1hdGNoIHx8IC8vIFthLCBiXSAtPiBbYSwgY11cbiAgbWF0Y2gucm91dGUuaWQgIT09IGN1cnJlbnRNYXRjaC5yb3V0ZS5pZDsgLy8gSGFuZGxlIHRoZSBjYXNlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBkYXRhIGZvciBhIHJlLXVzZWQgcm91dGUsIHBvdGVudGlhbGx5XG4gIC8vIGZyb20gYSBwcmlvciBlcnJvciBvciBmcm9tIGEgY2FuY2VsbGVkIHBlbmRpbmcgZGVmZXJyZWRcblxuICBsZXQgaXNNaXNzaW5nRGF0YSA9IGN1cnJlbnRMb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSA9PT0gdW5kZWZpbmVkOyAvLyBBbHdheXMgbG9hZCBpZiB0aGlzIGlzIGEgbmV0LW5ldyByb3V0ZSBvciB3ZSBkb24ndCB5ZXQgaGF2ZSBkYXRhXG5cbiAgcmV0dXJuIGlzTmV3IHx8IGlzTWlzc2luZ0RhdGE7XG59XG5cbmZ1bmN0aW9uIGlzTmV3Um91dGVJbnN0YW5jZShjdXJyZW50TWF0Y2gsIG1hdGNoKSB7XG4gIGxldCBjdXJyZW50UGF0aCA9IGN1cnJlbnRNYXRjaC5yb3V0ZS5wYXRoO1xuICByZXR1cm4gKC8vIHBhcmFtIGNoYW5nZSBmb3IgdGhpcyBtYXRjaCwgL3VzZXJzLzEyMyAtPiAvdXNlcnMvNDU2XG4gICAgY3VycmVudE1hdGNoLnBhdGhuYW1lICE9PSBtYXRjaC5wYXRobmFtZSB8fCAvLyBzcGxhdCBwYXJhbSBjaGFuZ2VkLCB3aGljaCBpcyBub3QgcHJlc2VudCBpbiBtYXRjaC5wYXRoXG4gICAgLy8gZS5nLiAvZmlsZXMvaW1hZ2VzL2F2YXRhci5qcGcgLT4gZmlsZXMvZmluYW5jZXMueGxzXG4gICAgY3VycmVudFBhdGggIT0gbnVsbCAmJiBjdXJyZW50UGF0aC5lbmRzV2l0aChcIipcIikgJiYgY3VycmVudE1hdGNoLnBhcmFtc1tcIipcIl0gIT09IG1hdGNoLnBhcmFtc1tcIipcIl1cbiAgKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihsb2FkZXJNYXRjaCwgYXJnKSB7XG4gIGlmIChsb2FkZXJNYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgbGV0IHJvdXRlQ2hvaWNlID0gbG9hZGVyTWF0Y2gucm91dGUuc2hvdWxkUmV2YWxpZGF0ZShhcmcpO1xuXG4gICAgaWYgKHR5cGVvZiByb3V0ZUNob2ljZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHJldHVybiByb3V0ZUNob2ljZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJnLmRlZmF1bHRTaG91bGRSZXZhbGlkYXRlO1xufVxuLyoqXG4gKiBFeGVjdXRlIHJvdXRlLmxhenkoKSBtZXRob2RzIHRvIGxhemlseSBsb2FkIHJvdXRlIG1vZHVsZXMgKGxvYWRlciwgYWN0aW9uLFxuICogc2hvdWxkUmV2YWxpZGF0ZSkgYW5kIHVwZGF0ZSB0aGUgcm91dGVNYW5pZmVzdCBpbiBwbGFjZSB3aGljaCBzaGFyZXMgb2JqZWN0c1xuICogd2l0aCBkYXRhUm91dGVzIHNvIHRob3NlIGdldCB1cGRhdGVkIGFzIHdlbGwuXG4gKi9cblxuXG5hc3luYyBmdW5jdGlvbiBsb2FkTGF6eVJvdXRlTW9kdWxlKHJvdXRlLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBtYW5pZmVzdCkge1xuICBpZiAoIXJvdXRlLmxhenkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgbGF6eVJvdXRlID0gYXdhaXQgcm91dGUubGF6eSgpOyAvLyBJZiB0aGUgbGF6eSByb3V0ZSBmdW5jdGlvbiB3YXMgZXhlY3V0ZWQgYW5kIHJlbW92ZWQgYnkgYW5vdGhlciBwYXJhbGxlbFxuICAvLyBjYWxsIHRoZW4gd2UgY2FuIHJldHVybiAtIGZpcnN0IGxhenkoKSB0byBmaW5pc2ggd2lucyBiZWNhdXNlIHRoZSByZXR1cm5cbiAgLy8gdmFsdWUgb2YgbGF6eSBpcyBleHBlY3RlZCB0byBiZSBzdGF0aWNcblxuICBpZiAoIXJvdXRlLmxhenkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcm91dGVUb1VwZGF0ZSA9IG1hbmlmZXN0W3JvdXRlLmlkXTtcbiAgaW52YXJpYW50KHJvdXRlVG9VcGRhdGUsIFwiTm8gcm91dGUgZm91bmQgaW4gbWFuaWZlc3RcIik7IC8vIFVwZGF0ZSB0aGUgcm91dGUgaW4gcGxhY2UuICBUaGlzIHNob3VsZCBiZSBzYWZlIGJlY2F1c2UgdGhlcmUncyBubyB3YXlcbiAgLy8gd2UgY291bGQgeWV0IGJlIHNpdHRpbmcgb24gdGhpcyByb3V0ZSBhcyB3ZSBjYW4ndCBnZXQgdGhlcmUgd2l0aG91dFxuICAvLyByZXNvbHZpbmcgbGF6eSgpIGZpcnN0LlxuICAvL1xuICAvLyBUaGlzIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBITVIgXCJ1cGRhdGVcIiB1c2UtY2FzZSB3aGVyZSB3ZSBtYXkgYWN0aXZlbHkgYmVcbiAgLy8gb24gdGhlIHJvdXRlIGJlaW5nIHVwZGF0ZWQuICBUaGUgbWFpbiBjb25jZXJuIGJvaWxzIGRvd24gdG8gXCJkb2VzIHRoaXNcbiAgLy8gbXV0YXRpb24gYWZmZWN0IGFueSBvbmdvaW5nIG5hdmlnYXRpb25zIG9yIGFueSBjdXJyZW50IHN0YXRlLm1hdGNoZXNcbiAgLy8gdmFsdWVzP1wiLiAgSWYgbm90LCBpdCBzaG91bGQgYmUgc2FmZSB0byB1cGRhdGUgaW4gcGxhY2UuXG5cbiAgbGV0IHJvdXRlVXBkYXRlcyA9IHt9O1xuXG4gIGZvciAobGV0IGxhenlSb3V0ZVByb3BlcnR5IGluIGxhenlSb3V0ZSkge1xuICAgIGxldCBzdGF0aWNSb3V0ZVZhbHVlID0gcm91dGVUb1VwZGF0ZVtsYXp5Um91dGVQcm9wZXJ0eV07XG4gICAgbGV0IGlzUHJvcGVydHlTdGF0aWNhbGx5RGVmaW5lZCA9IHN0YXRpY1JvdXRlVmFsdWUgIT09IHVuZGVmaW5lZCAmJiAvLyBUaGlzIHByb3BlcnR5IGlzbid0IHN0YXRpYyBzaW5jZSBpdCBzaG91bGQgYWx3YXlzIGJlIHVwZGF0ZWQgYmFzZWRcbiAgICAvLyBvbiB0aGUgcm91dGUgdXBkYXRlc1xuICAgIGxhenlSb3V0ZVByb3BlcnR5ICE9PSBcImhhc0Vycm9yQm91bmRhcnlcIjtcbiAgICB3YXJuaW5nKCFpc1Byb3BlcnR5U3RhdGljYWxseURlZmluZWQsIFwiUm91dGUgXFxcIlwiICsgcm91dGVUb1VwZGF0ZS5pZCArIFwiXFxcIiBoYXMgYSBzdGF0aWMgcHJvcGVydHkgXFxcIlwiICsgbGF6eVJvdXRlUHJvcGVydHkgKyBcIlxcXCIgXCIgKyBcImRlZmluZWQgYnV0IGl0cyBsYXp5IGZ1bmN0aW9uIGlzIGFsc28gcmV0dXJuaW5nIGEgdmFsdWUgZm9yIHRoaXMgcHJvcGVydHkuIFwiICsgKFwiVGhlIGxhenkgcm91dGUgcHJvcGVydHkgXFxcIlwiICsgbGF6eVJvdXRlUHJvcGVydHkgKyBcIlxcXCIgd2lsbCBiZSBpZ25vcmVkLlwiKSk7XG5cbiAgICBpZiAoIWlzUHJvcGVydHlTdGF0aWNhbGx5RGVmaW5lZCAmJiAhaW1tdXRhYmxlUm91dGVLZXlzLmhhcyhsYXp5Um91dGVQcm9wZXJ0eSkpIHtcbiAgICAgIHJvdXRlVXBkYXRlc1tsYXp5Um91dGVQcm9wZXJ0eV0gPSBsYXp5Um91dGVbbGF6eVJvdXRlUHJvcGVydHldO1xuICAgIH1cbiAgfSAvLyBNdXRhdGUgdGhlIHJvdXRlIHdpdGggdGhlIHByb3ZpZGVkIHVwZGF0ZXMuICBEbyB0aGlzIGZpcnN0IHNvIHdlIHBhc3NcbiAgLy8gdGhlIHVwZGF0ZWQgdmVyc2lvbiB0byBkZXRlY3RFcnJvckJvdW5kYXJ5XG5cblxuICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIHJvdXRlVXBkYXRlcyk7IC8vIE11dGF0ZSB0aGUgYGhhc0Vycm9yQm91bmRhcnlgIHByb3BlcnR5IG9uIHRoZSByb3V0ZSBiYXNlZCBvbiB0aGUgcm91dGVcbiAgLy8gdXBkYXRlcyBhbmQgcmVtb3ZlIHRoZSBgbGF6eWAgZnVuY3Rpb24gc28gd2UgZG9uJ3QgcmVzb2x2ZSB0aGUgbGF6eVxuICAvLyByb3V0ZSBhZ2Fpbi5cblxuICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIHtcbiAgICAvLyBUbyBrZWVwIHRoaW5ncyBmcmFtZXdvcmsgYWdub3N0aWMsIHdlIHVzZSB0aGUgcHJvdmlkZWRcbiAgICAvLyBgZGV0ZWN0RXJyb3JCb3VuZGFyeWAgZnVuY3Rpb24gdG8gc2V0IHRoZSBgaGFzRXJyb3JCb3VuZGFyeWAgcm91dGVcbiAgICAvLyBwcm9wZXJ0eSBzaW5jZSB0aGUgbG9naWMgd2lsbCBkaWZmZXIgYmV0d2VlbiBmcmFtZXdvcmtzLlxuICAgIGhhc0Vycm9yQm91bmRhcnk6IGRldGVjdEVycm9yQm91bmRhcnkoX2V4dGVuZHMoe30sIHJvdXRlVG9VcGRhdGUpKSxcbiAgICBsYXp5OiB1bmRlZmluZWRcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGxMb2FkZXJPckFjdGlvbih0eXBlLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIGJhc2VuYW1lLCBpc1N0YXRpY1JlcXVlc3QsIGlzUm91dGVSZXF1ZXN0LCByZXF1ZXN0Q29udGV4dCkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cblxuICBpZiAoaXNTdGF0aWNSZXF1ZXN0ID09PSB2b2lkIDApIHtcbiAgICBpc1N0YXRpY1JlcXVlc3QgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc1JvdXRlUmVxdWVzdCA9PT0gdm9pZCAwKSB7XG4gICAgaXNSb3V0ZVJlcXVlc3QgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCByZXN1bHRUeXBlO1xuICBsZXQgcmVzdWx0O1xuICBsZXQgb25SZWplY3Q7XG5cbiAgbGV0IHJ1bkhhbmRsZXIgPSBoYW5kbGVyID0+IHtcbiAgICAvLyBTZXR1cCBhIHByb21pc2Ugd2UgY2FuIHJhY2UgYWdhaW5zdCBzbyB0aGF0IGFib3J0IHNpZ25hbHMgc2hvcnQgY2lyY3VpdFxuICAgIGxldCByZWplY3Q7XG4gICAgbGV0IGFib3J0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByKSA9PiByZWplY3QgPSByKTtcblxuICAgIG9uUmVqZWN0ID0gKCkgPT4gcmVqZWN0KCk7XG5cbiAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuICAgIHJldHVybiBQcm9taXNlLnJhY2UoW2hhbmRsZXIoe1xuICAgICAgcmVxdWVzdCxcbiAgICAgIHBhcmFtczogbWF0Y2gucGFyYW1zLFxuICAgICAgY29udGV4dDogcmVxdWVzdENvbnRleHRcbiAgICB9KSwgYWJvcnRQcm9taXNlXSk7XG4gIH07XG5cbiAgdHJ5IHtcbiAgICBsZXQgaGFuZGxlciA9IG1hdGNoLnJvdXRlW3R5cGVdO1xuXG4gICAgaWYgKG1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIC8vIFJ1biBzdGF0aWNhbGx5IGRlZmluZWQgaGFuZGxlciBpbiBwYXJhbGxlbCB3aXRoIGxhenkoKVxuICAgICAgICBsZXQgdmFsdWVzID0gYXdhaXQgUHJvbWlzZS5hbGwoW3J1bkhhbmRsZXIoaGFuZGxlciksIGxvYWRMYXp5Um91dGVNb2R1bGUobWF0Y2gucm91dGUsIGRldGVjdEVycm9yQm91bmRhcnksIG1hbmlmZXN0KV0pO1xuICAgICAgICByZXN1bHQgPSB2YWx1ZXNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb2FkIGxhenkgcm91dGUgbW9kdWxlLCB0aGVuIHJ1biBhbnkgcmV0dXJuZWQgaGFuZGxlclxuICAgICAgICBhd2FpdCBsb2FkTGF6eVJvdXRlTW9kdWxlKG1hdGNoLnJvdXRlLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCBtYW5pZmVzdCk7XG4gICAgICAgIGhhbmRsZXIgPSBtYXRjaC5yb3V0ZVt0eXBlXTtcblxuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIC8vIEhhbmRsZXIgc3RpbGwgcnVuIGV2ZW4gaWYgd2UgZ290IGludGVycnVwdGVkIHRvIG1haW50YWluIGNvbnNpc3RlbmN5XG4gICAgICAgICAgLy8gd2l0aCB1bi1hYm9ydGFibGUgYmVoYXZpb3Igb2YgaGFuZGxlciBleGVjdXRpb24gb24gbm9uLWxhenkgb3JcbiAgICAgICAgICAvLyBwcmV2aW91c2x5LWxhenktbG9hZGVkIHJvdXRlc1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJ1bkhhbmRsZXIoaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICAgICAgcm91dGVJZDogbWF0Y2gucm91dGUuaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBsYXp5KCkgcm91dGUgaGFzIG5vIGxvYWRlciB0byBydW4uICBTaG9ydCBjaXJjdWl0IGhlcmUgc28gd2UgZG9uJ3RcbiAgICAgICAgICAvLyBoaXQgdGhlIGludmFyaWFudCBiZWxvdyB0aGF0IGVycm9ycyBvbiByZXR1cm5pbmcgdW5kZWZpbmVkLlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludmFyaWFudChoYW5kbGVyLCBcIkNvdWxkIG5vdCBmaW5kIHRoZSBcIiArIHR5cGUgKyBcIiB0byBydW4gb24gdGhlIFxcXCJcIiArIG1hdGNoLnJvdXRlLmlkICsgXCJcXFwiIHJvdXRlXCIpO1xuICAgICAgcmVzdWx0ID0gYXdhaXQgcnVuSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBpbnZhcmlhbnQocmVzdWx0ICE9PSB1bmRlZmluZWQsIFwiWW91IGRlZmluZWQgXCIgKyAodHlwZSA9PT0gXCJhY3Rpb25cIiA/IFwiYW4gYWN0aW9uXCIgOiBcImEgbG9hZGVyXCIpICsgXCIgZm9yIHJvdXRlIFwiICsgKFwiXFxcIlwiICsgbWF0Y2gucm91dGUuaWQgKyBcIlxcXCIgYnV0IGRpZG4ndCByZXR1cm4gYW55dGhpbmcgZnJvbSB5b3VyIGBcIiArIHR5cGUgKyBcImAgXCIpICsgXCJmdW5jdGlvbi4gUGxlYXNlIHJldHVybiBhIHZhbHVlIG9yIGBudWxsYC5cIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXN1bHRUeXBlID0gUmVzdWx0VHlwZS5lcnJvcjtcbiAgICByZXN1bHQgPSBlO1xuICB9IGZpbmFsbHkge1xuICAgIGlmIChvblJlamVjdCkge1xuICAgICAgcmVxdWVzdC5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uUmVqZWN0KTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7IC8vIFByb2Nlc3MgcmVkaXJlY3RzXG5cbiAgICBpZiAocmVkaXJlY3RTdGF0dXNDb2Rlcy5oYXMoc3RhdHVzKSkge1xuICAgICAgbGV0IGxvY2F0aW9uID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gICAgICBpbnZhcmlhbnQobG9jYXRpb24sIFwiUmVkaXJlY3RzIHJldHVybmVkL3Rocm93biBmcm9tIGxvYWRlcnMvYWN0aW9ucyBtdXN0IGhhdmUgYSBMb2NhdGlvbiBoZWFkZXJcIik7IC8vIFN1cHBvcnQgcmVsYXRpdmUgcm91dGluZyBpbiBpbnRlcm5hbCByZWRpcmVjdHNcblxuICAgICAgaWYgKCFBQlNPTFVURV9VUkxfUkVHRVgudGVzdChsb2NhdGlvbikpIHtcbiAgICAgICAgbGV0IGFjdGl2ZU1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXhPZihtYXRjaCkgKyAxKTtcbiAgICAgICAgbGV0IHJvdXRlUGF0aG5hbWVzID0gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMoYWN0aXZlTWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSk7XG4gICAgICAgIGxldCByZXNvbHZlZExvY2F0aW9uID0gcmVzb2x2ZVRvKGxvY2F0aW9uLCByb3V0ZVBhdGhuYW1lcywgbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUpO1xuICAgICAgICBpbnZhcmlhbnQoY3JlYXRlUGF0aChyZXNvbHZlZExvY2F0aW9uKSwgXCJVbmFibGUgdG8gcmVzb2x2ZSByZWRpcmVjdCBsb2NhdGlvbjogXCIgKyBsb2NhdGlvbik7IC8vIFByZXBlbmQgdGhlIGJhc2VuYW1lIHRvIHRoZSByZWRpcmVjdCBsb2NhdGlvbiBpZiB3ZSBoYXZlIG9uZVxuXG4gICAgICAgIGlmIChiYXNlbmFtZSkge1xuICAgICAgICAgIGxldCBwYXRoID0gcmVzb2x2ZWRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICByZXNvbHZlZExvY2F0aW9uLnBhdGhuYW1lID0gcGF0aCA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uID0gY3JlYXRlUGF0aChyZXNvbHZlZExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzU3RhdGljUmVxdWVzdCkge1xuICAgICAgICAvLyBTdHJpcCBvZmYgdGhlIHByb3RvY29sK29yaWdpbiBmb3Igc2FtZS1vcmlnaW4gKyBzYW1lLWJhc2VuYW1lIGFic29sdXRlXG4gICAgICAgIC8vIHJlZGlyZWN0cy4gSWYgdGhpcyBpcyBhIHN0YXRpYyByZXF1ZXN0LCB3ZSBjYW4gbGV0IGl0IGdvIGJhY2sgdG8gdGhlXG4gICAgICAgIC8vIGJyb3dzZXIgYXMtaXNcbiAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgbGV0IHVybCA9IGxvY2F0aW9uLnN0YXJ0c1dpdGgoXCIvL1wiKSA/IG5ldyBVUkwoY3VycmVudFVybC5wcm90b2NvbCArIGxvY2F0aW9uKSA6IG5ldyBVUkwobG9jYXRpb24pO1xuICAgICAgICBsZXQgaXNTYW1lQmFzZW5hbWUgPSBzdHJpcEJhc2VuYW1lKHVybC5wYXRobmFtZSwgYmFzZW5hbWUpICE9IG51bGw7XG5cbiAgICAgICAgaWYgKHVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luICYmIGlzU2FtZUJhc2VuYW1lKSB7XG4gICAgICAgICAgbG9jYXRpb24gPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoICsgdXJsLmhhc2g7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRG9uJ3QgcHJvY2VzcyByZWRpcmVjdHMgaW4gdGhlIHJvdXRlciBkdXJpbmcgc3RhdGljIHJlcXVlc3RzIHJlcXVlc3RzLlxuICAgICAgLy8gSW5zdGVhZCwgdGhyb3cgdGhlIFJlc3BvbnNlIGFuZCBsZXQgdGhlIHNlcnZlciBoYW5kbGUgaXQgd2l0aCBhbiBIVFRQXG4gICAgICAvLyByZWRpcmVjdC4gIFdlIGFsc28gdXBkYXRlIHRoZSBMb2NhdGlvbiBoZWFkZXIgaW4gcGxhY2UgaW4gdGhpcyBmbG93IHNvXG4gICAgICAvLyBiYXNlbmFtZSBhbmQgcmVsYXRpdmUgcm91dGluZyBpcyB0YWtlbiBpbnRvIGFjY291bnRcblxuXG4gICAgICBpZiAoaXNTdGF0aWNSZXF1ZXN0KSB7XG4gICAgICAgIHJlc3VsdC5oZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIGxvY2F0aW9uKTtcbiAgICAgICAgdGhyb3cgcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLnJlZGlyZWN0LFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICByZXZhbGlkYXRlOiByZXN1bHQuaGVhZGVycy5nZXQoXCJYLVJlbWl4LVJldmFsaWRhdGVcIikgIT09IG51bGxcbiAgICAgIH07XG4gICAgfSAvLyBGb3IgU1NSIHNpbmdsZS1yb3V0ZSByZXF1ZXN0cywgd2Ugd2FudCB0byBoYW5kIFJlc3BvbnNlcyBiYWNrIGRpcmVjdGx5XG4gICAgLy8gd2l0aG91dCB1bndyYXBwaW5nLiAgV2UgZG8gdGhpcyB3aXRoIHRoZSBRdWVyeVJvdXRlUmVzcG9uc2Ugd3JhcHBlclxuICAgIC8vIGludGVyZmFjZSBzbyB3ZSBjYW4ga25vdyB3aGV0aGVyIGl0IHdhcyByZXR1cm5lZCBvciB0aHJvd25cblxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgICAgdGhyb3cge1xuICAgICAgICB0eXBlOiByZXN1bHRUeXBlIHx8IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgcmVzcG9uc2U6IHJlc3VsdFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGVudFR5cGUgPSByZXN1bHQuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7IC8vIENoZWNrIGJldHdlZW4gd29yZCBib3VuZGFyaWVzIGluc3RlYWQgb2Ygc3RhcnRzV2l0aCgpIGR1ZSB0byB0aGUgbGFzdFxuICAgIC8vIHBhcmFncmFwaCBvZiBodHRwczovL2h0dHB3Zy5vcmcvc3BlY3MvcmZjOTExMC5odG1sI2ZpZWxkLmNvbnRlbnQtdHlwZVxuXG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIC9cXGJhcHBsaWNhdGlvblxcL2pzb25cXGIvLnRlc3QoY29udGVudFR5cGUpKSB7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3VsdC50ZXh0KCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHJlc3VsdFR5cGUsXG4gICAgICAgIGVycm9yOiBuZXcgRXJyb3JSZXNwb25zZShzdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0LCBkYXRhKSxcbiAgICAgICAgaGVhZGVyczogcmVzdWx0LmhlYWRlcnNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgIGRhdGEsXG4gICAgICBzdGF0dXNDb2RlOiByZXN1bHQuc3RhdHVzLFxuICAgICAgaGVhZGVyczogcmVzdWx0LmhlYWRlcnNcbiAgICB9O1xuICB9XG5cbiAgaWYgKHJlc3VsdFR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogcmVzdWx0VHlwZSxcbiAgICAgIGVycm9yOiByZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgaWYgKGlzRGVmZXJyZWREYXRhKHJlc3VsdCkpIHtcbiAgICB2YXIgX3Jlc3VsdCRpbml0LCBfcmVzdWx0JGluaXQyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGVmZXJyZWQsXG4gICAgICBkZWZlcnJlZERhdGE6IHJlc3VsdCxcbiAgICAgIHN0YXR1c0NvZGU6IChfcmVzdWx0JGluaXQgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdC5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiAoKF9yZXN1bHQkaW5pdDIgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdDIuaGVhZGVycykgJiYgbmV3IEhlYWRlcnMocmVzdWx0LmluaXQuaGVhZGVycylcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgZGF0YTogcmVzdWx0XG4gIH07XG59IC8vIFV0aWxpdHkgbWV0aG9kIGZvciBjcmVhdGluZyB0aGUgUmVxdWVzdCBpbnN0YW5jZXMgZm9yIGxvYWRlcnMvYWN0aW9ucyBkdXJpbmdcbi8vIGNsaWVudC1zaWRlIG5hdmlnYXRpb25zIGFuZCBmZXRjaGVzLiAgRHVyaW5nIFNTUiB3ZSB3aWxsIGFsd2F5cyBoYXZlIGFcbi8vIFJlcXVlc3QgaW5zdGFuY2UgZnJvbSB0aGUgc3RhdGljIGhhbmRsZXIgKHF1ZXJ5L3F1ZXJ5Um91dGUpXG5cblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaGlzdG9yeSwgbG9jYXRpb24sIHNpZ25hbCwgc3VibWlzc2lvbikge1xuICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVVUkwoc3RyaXBIYXNoRnJvbVBhdGgobG9jYXRpb24pKS50b1N0cmluZygpO1xuICBsZXQgaW5pdCA9IHtcbiAgICBzaWduYWxcbiAgfTtcblxuICBpZiAoc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICBsZXQge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGFcbiAgICB9ID0gc3VibWlzc2lvbjsgLy8gRGlkbid0IHRoaW5rIHdlIG5lZWRlZCB0aGlzIGJ1dCBpdCB0dXJucyBvdXQgdW5saWtlIG90aGVyIG1ldGhvZHMsIHBhdGNoXG4gICAgLy8gd29uJ3QgYmUgcHJvcGVybHkgbm9ybWFsaXplZCB0byB1cHBlcmNhc2UgYW5kIHJlc3VsdHMgaW4gYSA0MDUgZXJyb3IuXG4gICAgLy8gU2VlOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1tZXRob2RcblxuICAgIGluaXQubWV0aG9kID0gZm9ybU1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIGluaXQuYm9keSA9IGZvcm1FbmNUeXBlID09PSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiID8gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMoZm9ybURhdGEpIDogZm9ybURhdGE7XG4gIH0gLy8gQ29udGVudC1UeXBlIGlzIGluZmVycmVkIChodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZG9tLXJlcXVlc3QpXG5cblxuICByZXR1cm4gbmV3IFJlcXVlc3QodXJsLCBpbml0KTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMoZm9ybURhdGEpIHtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjY29udmVydGluZy1hbi1lbnRyeS1saXN0LXRvLWEtbGlzdC1vZi1uYW1lLXZhbHVlLXBhaXJzXG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlIGluc3RhbmNlb2YgRmlsZSA/IHZhbHVlLm5hbWUgOiB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgYWN0aXZlRGVmZXJyZWRzKSB7XG4gIC8vIEZpbGwgaW4gbG9hZGVyRGF0YS9lcnJvcnMgZnJvbSBvdXIgbG9hZGVyc1xuICBsZXQgbG9hZGVyRGF0YSA9IHt9O1xuICBsZXQgZXJyb3JzID0gbnVsbDtcbiAgbGV0IHN0YXR1c0NvZGU7XG4gIGxldCBmb3VuZEVycm9yID0gZmFsc2U7XG4gIGxldCBsb2FkZXJIZWFkZXJzID0ge307IC8vIFByb2Nlc3MgbG9hZGVyIHJlc3VsdHMgaW50byBzdGF0ZS5sb2FkZXJEYXRhL3N0YXRlLmVycm9yc1xuXG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgIGxldCBpZCA9IG1hdGNoZXNUb0xvYWRbaW5kZXhdLnJvdXRlLmlkO1xuICAgIGludmFyaWFudCghaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpLCBcIkNhbm5vdCBoYW5kbGUgcmVkaXJlY3QgcmVzdWx0cyBpbiBwcm9jZXNzTG9hZGVyRGF0YVwiKTtcblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIExvb2sgdXB3YXJkcyBmcm9tIHRoZSBtYXRjaGVkIHJvdXRlIGZvciB0aGUgY2xvc2VzdCBhbmNlc3RvclxuICAgICAgLy8gZXJyb3IgYm91bmRhcnksIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2hcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBpZCk7XG4gICAgICBsZXQgZXJyb3IgPSByZXN1bHQuZXJyb3I7IC8vIElmIHdlIGhhdmUgYSBwZW5kaW5nIGFjdGlvbiBlcnJvciwgd2UgcmVwb3J0IGl0IGF0IHRoZSBoaWdoZXN0LXJvdXRlXG4gICAgICAvLyB0aGF0IHRocm93cyBhIGxvYWRlciBlcnJvciwgYW5kIHRoZW4gY2xlYXIgaXQgb3V0IHRvIGluZGljYXRlIHRoYXRcbiAgICAgIC8vIGl0IHdhcyBjb25zdW1lZFxuXG4gICAgICBpZiAocGVuZGluZ0Vycm9yKSB7XG4gICAgICAgIGVycm9yID0gT2JqZWN0LnZhbHVlcyhwZW5kaW5nRXJyb3IpWzBdO1xuICAgICAgICBwZW5kaW5nRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGVycm9ycyA9IGVycm9ycyB8fCB7fTsgLy8gUHJlZmVyIGhpZ2hlciBlcnJvciB2YWx1ZXMgaWYgbG93ZXIgZXJyb3JzIGJ1YmJsZSB0byB0aGUgc2FtZSBib3VuZGFyeVxuXG4gICAgICBpZiAoZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdID09IG51bGwpIHtcbiAgICAgICAgZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdID0gZXJyb3I7XG4gICAgICB9IC8vIENsZWFyIG91ciBhbnkgcHJpb3IgbG9hZGVyRGF0YSBmb3IgdGhlIHRocm93aW5nIHJvdXRlXG5cblxuICAgICAgbG9hZGVyRGF0YVtpZF0gPSB1bmRlZmluZWQ7IC8vIE9uY2Ugd2UgZmluZCBvdXIgZmlyc3QgKGhpZ2hlc3QpIGVycm9yLCB3ZSBzZXQgdGhlIHN0YXR1cyBjb2RlIGFuZFxuICAgICAgLy8gcHJldmVudCBkZWVwZXIgc3RhdHVzIGNvZGVzIGZyb20gb3ZlcnJpZGluZ1xuXG4gICAgICBpZiAoIWZvdW5kRXJyb3IpIHtcbiAgICAgICAgZm91bmRFcnJvciA9IHRydWU7XG4gICAgICAgIHN0YXR1c0NvZGUgPSBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQuZXJyb3IpID8gcmVzdWx0LmVycm9yLnN0YXR1cyA6IDUwMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLnNldChpZCwgcmVzdWx0LmRlZmVycmVkRGF0YSk7XG4gICAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGVyRGF0YVtpZF0gPSByZXN1bHQuZGF0YTtcbiAgICAgIH0gLy8gRXJyb3Igc3RhdHVzIGNvZGVzIGFsd2F5cyBvdmVycmlkZSBzdWNjZXNzIHN0YXR1cyBjb2RlcywgYnV0IGlmIGFsbFxuICAgICAgLy8gbG9hZGVycyBhcmUgc3VjY2Vzc2Z1bCB3ZSB0YWtlIHRoZSBkZWVwZXN0IHN0YXR1cyBjb2RlLlxuXG5cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzQ29kZSAhPSBudWxsICYmIHJlc3VsdC5zdGF0dXNDb2RlICE9PSAyMDAgJiYgIWZvdW5kRXJyb3IpIHtcbiAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3VsdC5zdGF0dXNDb2RlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgbG9hZGVySGVhZGVyc1tpZF0gPSByZXN1bHQuaGVhZGVycztcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBJZiB3ZSBkaWRuJ3QgY29uc3VtZSB0aGUgcGVuZGluZyBhY3Rpb24gZXJyb3IgKGkuZS4sIGFsbCBsb2FkZXJzXG4gIC8vIHJlc29sdmVkKSwgdGhlbiBjb25zdW1lIGl0IGhlcmUuICBBbHNvIGNsZWFyIG91dCBhbnkgbG9hZGVyRGF0YSBmb3IgdGhlXG4gIC8vIHRocm93aW5nIHJvdXRlXG5cbiAgaWYgKHBlbmRpbmdFcnJvcikge1xuICAgIGVycm9ycyA9IHBlbmRpbmdFcnJvcjtcbiAgICBsb2FkZXJEYXRhW09iamVjdC5rZXlzKHBlbmRpbmdFcnJvcilbMF1dID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9ycyxcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIHx8IDIwMCxcbiAgICBsb2FkZXJIZWFkZXJzXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nRXJyb3IsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCBmZXRjaGVyUmVzdWx0cywgYWN0aXZlRGVmZXJyZWRzKSB7XG4gIGxldCB7XG4gICAgbG9hZGVyRGF0YSxcbiAgICBlcnJvcnNcbiAgfSA9IHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCBhY3RpdmVEZWZlcnJlZHMpOyAvLyBQcm9jZXNzIHJlc3VsdHMgZnJvbSBvdXIgcmV2YWxpZGF0aW5nIGZldGNoZXJzXG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCB7XG4gICAgICBrZXksXG4gICAgICBtYXRjaFxuICAgIH0gPSByZXZhbGlkYXRpbmdGZXRjaGVyc1tpbmRleF07XG4gICAgaW52YXJpYW50KGZldGNoZXJSZXN1bHRzICE9PSB1bmRlZmluZWQgJiYgZmV0Y2hlclJlc3VsdHNbaW5kZXhdICE9PSB1bmRlZmluZWQsIFwiRGlkIG5vdCBmaW5kIGNvcnJlc3BvbmRpbmcgZmV0Y2hlciByZXN1bHRcIik7XG4gICAgbGV0IHJlc3VsdCA9IGZldGNoZXJSZXN1bHRzW2luZGV4XTsgLy8gUHJvY2VzcyBmZXRjaGVyIG5vbi1yZWRpcmVjdCBlcnJvcnNcblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCBtYXRjaCA9PSBudWxsID8gdm9pZCAwIDogbWF0Y2gucm91dGUuaWQpO1xuXG4gICAgICBpZiAoIShlcnJvcnMgJiYgZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdKSkge1xuICAgICAgICBlcnJvcnMgPSBfZXh0ZW5kcyh7fSwgZXJyb3JzLCB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIHJlZGlyZWN0cyBzaG91bGQgZ2V0IHByb2Nlc3NlZCBhYm92ZSwgYnV0IHdlXG4gICAgICAvLyBrZWVwIHRoaXMgdG8gdHlwZSBuYXJyb3cgdG8gYSBzdWNjZXNzIHJlc3VsdCBpbiB0aGUgZWxzZVxuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIHJldmFsaWRhdGlvbiByZWRpcmVjdFwiKTtcbiAgICB9IGVsc2UgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU2hvdWxkIG5ldmVyIGdldCBoZXJlLCBkZWZlcnJlZCBkYXRhIHNob3VsZCBiZSBhd2FpdGVkIGZvciBmZXRjaGVyc1xuICAgICAgLy8gaW4gcmVzb2x2ZURlZmVycmVkUmVzdWx0c1xuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9O1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZGVyRGF0YSxcbiAgICBlcnJvcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VMb2FkZXJEYXRhKGxvYWRlckRhdGEsIG5ld0xvYWRlckRhdGEsIG1hdGNoZXMsIGVycm9ycykge1xuICBsZXQgbWVyZ2VkTG9hZGVyRGF0YSA9IF9leHRlbmRzKHt9LCBuZXdMb2FkZXJEYXRhKTtcblxuICBmb3IgKGxldCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgbGV0IGlkID0gbWF0Y2gucm91dGUuaWQ7XG5cbiAgICBpZiAobmV3TG9hZGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIGlmIChuZXdMb2FkZXJEYXRhW2lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZExvYWRlckRhdGFbaWRdID0gbmV3TG9hZGVyRGF0YVtpZF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2FkZXJEYXRhW2lkXSAhPT0gdW5kZWZpbmVkICYmIG1hdGNoLnJvdXRlLmxvYWRlcikge1xuICAgICAgLy8gUHJlc2VydmUgZXhpc3Rpbmcga2V5cyBub3QgaW5jbHVkZWQgaW4gbmV3TG9hZGVyRGF0YSBhbmQgd2hlcmUgYSBsb2FkZXJcbiAgICAgIC8vIHdhc24ndCByZW1vdmVkIGJ5IEhNUlxuICAgICAgbWVyZ2VkTG9hZGVyRGF0YVtpZF0gPSBsb2FkZXJEYXRhW2lkXTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIC8vIERvbid0IGtlZXAgYW55IGxvYWRlciBkYXRhIGJlbG93IHRoZSBib3VuZGFyeVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlZExvYWRlckRhdGE7XG59IC8vIEZpbmQgdGhlIG5lYXJlc3QgZXJyb3IgYm91bmRhcnksIGxvb2tpbmcgdXB3YXJkcyBmcm9tIHRoZSBsZWFmIHJvdXRlIChvciB0aGVcbi8vIHJvdXRlIHNwZWNpZmllZCBieSByb3V0ZUlkKSBmb3IgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgZXJyb3IgYm91bmRhcnksXG4vLyBkZWZhdWx0aW5nIHRvIHRoZSByb290IG1hdGNoXG5cblxuZnVuY3Rpb24gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCByb3V0ZUlkKSB7XG4gIGxldCBlbGlnaWJsZU1hdGNoZXMgPSByb3V0ZUlkID8gbWF0Y2hlcy5zbGljZSgwLCBtYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpICsgMSkgOiBbLi4ubWF0Y2hlc107XG4gIHJldHVybiBlbGlnaWJsZU1hdGNoZXMucmV2ZXJzZSgpLmZpbmQobSA9PiBtLnJvdXRlLmhhc0Vycm9yQm91bmRhcnkgPT09IHRydWUpIHx8IG1hdGNoZXNbMF07XG59XG5cbmZ1bmN0aW9uIGdldFNob3J0Q2lyY3VpdE1hdGNoZXMocm91dGVzKSB7XG4gIC8vIFByZWZlciBhIHJvb3QgbGF5b3V0IHJvdXRlIGlmIHByZXNlbnQsIG90aGVyd2lzZSBzaGltIGluIGEgcm91dGUgb2JqZWN0XG4gIGxldCByb3V0ZSA9IHJvdXRlcy5maW5kKHIgPT4gci5pbmRleCB8fCAhci5wYXRoIHx8IHIucGF0aCA9PT0gXCIvXCIpIHx8IHtcbiAgICBpZDogXCJfX3NoaW0tZXJyb3Itcm91dGVfX1wiXG4gIH07XG4gIHJldHVybiB7XG4gICAgbWF0Y2hlczogW3tcbiAgICAgIHBhcmFtczoge30sXG4gICAgICBwYXRobmFtZTogXCJcIixcbiAgICAgIHBhdGhuYW1lQmFzZTogXCJcIixcbiAgICAgIHJvdXRlXG4gICAgfV0sXG4gICAgcm91dGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcihzdGF0dXMsIF90ZW1wNCkge1xuICBsZXQge1xuICAgIHBhdGhuYW1lLFxuICAgIHJvdXRlSWQsXG4gICAgbWV0aG9kLFxuICAgIHR5cGVcbiAgfSA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQ7XG4gIGxldCBzdGF0dXNUZXh0ID0gXCJVbmtub3duIFNlcnZlciBFcnJvclwiO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJVbmtub3duIEByZW1peC1ydW4vcm91dGVyIGVycm9yXCI7XG5cbiAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiQmFkIFJlcXVlc3RcIjtcblxuICAgIGlmIChtZXRob2QgJiYgcGF0aG5hbWUgJiYgcm91dGVJZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJZb3UgbWFkZSBhIFwiICsgbWV0aG9kICsgXCIgcmVxdWVzdCB0byBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIiBidXQgXCIgKyAoXCJkaWQgbm90IHByb3ZpZGUgYSBgbG9hZGVyYCBmb3Igcm91dGUgXFxcIlwiICsgcm91dGVJZCArIFwiXFxcIiwgXCIpICsgXCJzbyB0aGVyZSBpcyBubyB3YXkgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LlwiO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkZWZlci1hY3Rpb25cIikge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJkZWZlcigpIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYWN0aW9uc1wiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwMykge1xuICAgIHN0YXR1c1RleHQgPSBcIkZvcmJpZGRlblwiO1xuICAgIGVycm9yTWVzc2FnZSA9IFwiUm91dGUgXFxcIlwiICsgcm91dGVJZCArIFwiXFxcIiBkb2VzIG5vdCBtYXRjaCBVUkwgXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCJcIjtcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwNCkge1xuICAgIHN0YXR1c1RleHQgPSBcIk5vdCBGb3VuZFwiO1xuICAgIGVycm9yTWVzc2FnZSA9IFwiTm8gcm91dGUgbWF0Y2hlcyBVUkwgXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCJcIjtcbiAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDQwNSkge1xuICAgIHN0YXR1c1RleHQgPSBcIk1ldGhvZCBOb3QgQWxsb3dlZFwiO1xuXG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtYWRlIGEgXCIgKyBtZXRob2QudG9VcHBlckNhc2UoKSArIFwiIHJlcXVlc3QgdG8gXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCIgYnV0IFwiICsgKFwiZGlkIG5vdCBwcm92aWRlIGFuIGBhY3Rpb25gIGZvciByb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiLCBcIikgKyBcInNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuXCI7XG4gICAgfSBlbHNlIGlmIChtZXRob2QpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiSW52YWxpZCByZXF1ZXN0IG1ldGhvZCBcXFwiXCIgKyBtZXRob2QudG9VcHBlckNhc2UoKSArIFwiXFxcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3JSZXNwb25zZShzdGF0dXMgfHwgNTAwLCBzdGF0dXNUZXh0LCBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKSwgdHJ1ZSk7XG59IC8vIEZpbmQgYW55IHJldHVybmVkIHJlZGlyZWN0IGVycm9ycywgc3RhcnRpbmcgZnJvbSB0aGUgbG93ZXN0IG1hdGNoXG5cblxuZnVuY3Rpb24gZmluZFJlZGlyZWN0KHJlc3VsdHMpIHtcbiAgZm9yIChsZXQgaSA9IHJlc3VsdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwSGFzaEZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhcnNlZFBhdGggPSB0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChwYXRoKSA6IHBhdGg7XG4gIHJldHVybiBjcmVhdGVQYXRoKF9leHRlbmRzKHt9LCBwYXJzZWRQYXRoLCB7XG4gICAgaGFzaDogXCJcIlxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGlzSGFzaENoYW5nZU9ubHkoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoICE9PSBiLmhhc2g7XG59XG5cbmZ1bmN0aW9uIGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudHlwZSA9PT0gUmVzdWx0VHlwZS5kZWZlcnJlZDtcbn1cblxuZnVuY3Rpb24gaXNFcnJvclJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBSZXN1bHRUeXBlLmVycm9yO1xufVxuXG5mdW5jdGlvbiBpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gKHJlc3VsdCAmJiByZXN1bHQudHlwZSkgPT09IFJlc3VsdFR5cGUucmVkaXJlY3Q7XG59XG5cbmZ1bmN0aW9uIGlzRGVmZXJyZWREYXRhKHZhbHVlKSB7XG4gIGxldCBkZWZlcnJlZCA9IHZhbHVlO1xuICByZXR1cm4gZGVmZXJyZWQgJiYgdHlwZW9mIGRlZmVycmVkID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBkZWZlcnJlZC5kYXRhID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBkZWZlcnJlZC5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZGVmZXJyZWQuY2FuY2VsID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGRlZmVycmVkLnJlc29sdmVEYXRhID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbmZ1bmN0aW9uIGlzUmVzcG9uc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnN0YXR1cyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzVGV4dCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUuaGVhZGVycyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUuYm9keSAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cblxuZnVuY3Rpb24gaXNSZWRpcmVjdFJlc3BvbnNlKHJlc3VsdCkge1xuICBpZiAoIWlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGxldCBzdGF0dXMgPSByZXN1bHQuc3RhdHVzO1xuICBsZXQgbG9jYXRpb24gPSByZXN1bHQuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKTtcbiAgcmV0dXJuIHN0YXR1cyA+PSAzMDAgJiYgc3RhdHVzIDw9IDM5OSAmJiBsb2NhdGlvbiAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1F1ZXJ5Um91dGVSZXNwb25zZShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBpc1Jlc3BvbnNlKG9iai5yZXNwb25zZSkgJiYgKG9iai50eXBlID09PSBSZXN1bHRUeXBlLmRhdGEgfHwgUmVzdWx0VHlwZS5lcnJvcik7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiB2YWxpZFJlcXVlc3RNZXRob2RzLmhhcyhtZXRob2QudG9Mb3dlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIGlzTXV0YXRpb25NZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiB2YWxpZE11dGF0aW9uTWV0aG9kcy5oYXMobWV0aG9kLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBzaWduYWwsIGlzRmV0Y2hlciwgY3VycmVudExvYWRlckRhdGEpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3VsdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbaW5kZXhdO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoZXNUb0xvYWRbaW5kZXhdOyAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbWF0Y2gsIHRoZW4gd2UgY2FuIGhhdmUgYSBkZWZlcnJlZCByZXN1bHQgdG8gZG9cbiAgICAvLyBhbnl0aGluZyB3aXRoLiAgVGhpcyBpcyBmb3IgcmV2YWxpZGF0aW5nIGZldGNoZXJzIHdoZXJlIHRoZSByb3V0ZSB3YXNcbiAgICAvLyByZW1vdmVkIGR1cmluZyBITVJcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50TWF0Y2ggPSBjdXJyZW50TWF0Y2hlcy5maW5kKG0gPT4gbS5yb3V0ZS5pZCA9PT0gbWF0Y2gucm91dGUuaWQpO1xuICAgIGxldCBpc1JldmFsaWRhdGluZ0xvYWRlciA9IGN1cnJlbnRNYXRjaCAhPSBudWxsICYmICFpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkgJiYgKGN1cnJlbnRMb2FkZXJEYXRhICYmIGN1cnJlbnRMb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSkgIT09IHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkgJiYgKGlzRmV0Y2hlciB8fCBpc1JldmFsaWRhdGluZ0xvYWRlcikpIHtcbiAgICAgIC8vIE5vdGU6IHdlIGRvIG5vdCBoYXZlIHRvIHRvdWNoIGFjdGl2ZURlZmVycmVkcyBoZXJlIHNpbmNlIHdlIHJhY2UgdGhlbVxuICAgICAgLy8gYWdhaW5zdCB0aGUgc2lnbmFsIGluIHJlc29sdmVEZWZlcnJlZERhdGEgYW5kIHRoZXknbGwgZ2V0IGFib3J0ZWRcbiAgICAgIC8vIHRoZXJlIGlmIG5lZWRlZFxuICAgICAgYXdhaXQgcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIHNpZ25hbCwgaXNGZXRjaGVyKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHJlc3VsdCB8fCByZXN1bHRzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIHVud3JhcCkge1xuICBpZiAodW53cmFwID09PSB2b2lkIDApIHtcbiAgICB1bndyYXAgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBhYm9ydGVkID0gYXdhaXQgcmVzdWx0LmRlZmVycmVkRGF0YS5yZXNvbHZlRGF0YShzaWduYWwpO1xuXG4gIGlmIChhYm9ydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHVud3JhcCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kZWZlcnJlZERhdGEudW53cmFwcGVkRGF0YVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBIYW5kbGUgYW55IFRyYWNrZWRQcm9taXNlLl9lcnJvciB2YWx1ZXMgZW5jb3VudGVyZWQgd2hpbGUgdW53cmFwcGluZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgZGF0YTogcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc05ha2VkSW5kZXhRdWVyeShzZWFyY2gpIHtcbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKS5nZXRBbGwoXCJpbmRleFwiKS5zb21lKHYgPT4gdiA9PT0gXCJcIik7XG59IC8vIE5vdGU6IFRoaXMgc2hvdWxkIG1hdGNoIHRoZSBmb3JtYXQgZXhwb3J0ZWQgYnkgdXNlTWF0Y2hlcywgc28gaWYgeW91IGNoYW5nZVxuLy8gdGhpcyBwbGVhc2UgYWxzbyBjaGFuZ2UgdGhhdCA6KSAgRXZlbnR1YWxseSB3ZSdsbCBEUlkgdGhpcyB1cFxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtYXRjaCwgbG9hZGVyRGF0YSkge1xuICBsZXQge1xuICAgIHJvdXRlLFxuICAgIHBhdGhuYW1lLFxuICAgIHBhcmFtc1xuICB9ID0gbWF0Y2g7XG4gIHJldHVybiB7XG4gICAgaWQ6IHJvdXRlLmlkLFxuICAgIHBhdGhuYW1lLFxuICAgIHBhcmFtcyxcbiAgICBkYXRhOiBsb2FkZXJEYXRhW3JvdXRlLmlkXSxcbiAgICBoYW5kbGU6IHJvdXRlLmhhbmRsZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbikge1xuICBsZXQgc2VhcmNoID0gdHlwZW9mIGxvY2F0aW9uID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uKS5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2g7XG5cbiAgaWYgKG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5pbmRleCAmJiBoYXNOYWtlZEluZGV4UXVlcnkoc2VhcmNoIHx8IFwiXCIpKSB7XG4gICAgLy8gUmV0dXJuIHRoZSBsZWFmIGluZGV4IHJvdXRlIHdoZW4gaW5kZXggaXMgcHJlc2VudFxuICAgIHJldHVybiBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIH0gLy8gT3RoZXJ3aXNlIGdyYWIgdGhlIGRlZXBlc3QgXCJwYXRoIGNvbnRyaWJ1dGluZ1wiIG1hdGNoIChpZ25vcmluZyBpbmRleCBhbmRcbiAgLy8gcGF0aGxlc3MgbGF5b3V0IHJvdXRlcylcblxuXG4gIGxldCBwYXRoTWF0Y2hlcyA9IGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpO1xuICByZXR1cm4gcGF0aE1hdGNoZXNbcGF0aE1hdGNoZXMubGVuZ3RoIC0gMV07XG59IC8vI2VuZHJlZ2lvblxuXG5leHBvcnQgeyBBYm9ydGVkRGVmZXJyZWRFcnJvciwgQWN0aW9uLCBFcnJvclJlc3BvbnNlLCBJRExFX0JMT0NLRVIsIElETEVfRkVUQ0hFUiwgSURMRV9OQVZJR0FUSU9OLCBVTlNBRkVfREVGRVJSRURfU1lNQk9MLCBEZWZlcnJlZERhdGEgYXMgVU5TQUZFX0RlZmVycmVkRGF0YSwgY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyBhcyBVTlNBRkVfY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcywgZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMgYXMgVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzLCBpbnZhcmlhbnQgYXMgVU5TQUZFX2ludmFyaWFudCwgd2FybmluZyBhcyBVTlNBRkVfd2FybmluZywgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVQYXRoLCBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVN0YXRpY0hhbmRsZXIsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGdldFN0YXRpY0NvbnRleHRGcm9tRXJyb3IsIGdldFRvUGF0aG5hbWUsIGlzRGVmZXJyZWREYXRhLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgam9pblBhdGhzLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBub3JtYWxpemVQYXRobmFtZSwgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVzb2x2ZVBhdGgsIHJlc29sdmVUbywgc3RyaXBCYXNlbmFtZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcFxuIiwiLyoqXG4gKiBSZWFjdCBSb3V0ZXIgdjYuMTAuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyBVTlNBRkVfaW52YXJpYW50LCBqb2luUGF0aHMsIG1hdGNoUGF0aCwgVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzLCBVTlNBRkVfd2FybmluZywgcmVzb2x2ZVRvLCBwYXJzZVBhdGgsIG1hdGNoUm91dGVzLCBBY3Rpb24sIGlzUm91dGVFcnJvclJlc3BvbnNlLCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBzdHJpcEJhc2VuYW1lLCBBYm9ydGVkRGVmZXJyZWRFcnJvciwgY3JlYXRlUm91dGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9yb3V0ZXInO1xuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEFjdGlvbiBhcyBOYXZpZ2F0aW9uVHlwZSwgY3JlYXRlUGF0aCwgZGVmZXIsIGdlbmVyYXRlUGF0aCwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGpzb24sIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIHBhcnNlUGF0aCwgcmVkaXJlY3QsIHJlc29sdmVQYXRoIH0gZnJvbSAnQHJlbWl4LXJ1bi9yb3V0ZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5cbmZ1bmN0aW9uIGlzUG9seWZpbGwoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbmNvbnN0IGlzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmlzIDogaXNQb2x5ZmlsbDsgLy8gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgbmFtZWQgaW1wb3J0cyBiZWNhdXNlIFJvbGx1cCB1c2VzIGR5bmFtaWNcbi8vIGRpc3BhdGNoIGZvciBDb21tb25KUyBpbnRlcm9wIG5hbWVkIGltcG9ydHMuXG5cbmNvbnN0IHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VEZWJ1Z1ZhbHVlXG59ID0gUmVhY3Q7XG5sZXQgZGlkV2Fybk9sZDE4QWxwaGEgPSBmYWxzZTtcbmxldCBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IGZhbHNlOyAvLyBEaXNjbGFpbWVyOiBUaGlzIHNoaW0gYnJlYWtzIG1hbnkgb2YgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3Jrc1xuLy8gYmVjYXVzZSBvZiBhIHZlcnkgcGFydGljdWxhciBzZXQgb2YgaW1wbGVtZW50YXRpb24gZGV0YWlscyBhbmQgYXNzdW1wdGlvbnNcbi8vIC0tIGNoYW5nZSBhbnkgb25lIG9mIHRoZW0gYW5kIGl0IHdpbGwgYnJlYWsuIFRoZSBtb3N0IGltcG9ydGFudCBhc3N1bXB0aW9uXG4vLyBpcyB0aGF0IHVwZGF0ZXMgYXJlIGFsd2F5cyBzeW5jaHJvbm91cywgYmVjYXVzZSBjb25jdXJyZW50IHJlbmRlcmluZyBpc1xuLy8gb25seSBhdmFpbGFibGUgaW4gdmVyc2lvbnMgb2YgUmVhY3QgdGhhdCBhbHNvIGhhdmUgYSBidWlsdC1pblxuLy8gdXNlU3luY0V4dGVybmFsU3RvcmUgQVBJLiBBbmQgd2Ugb25seSB1c2UgdGhpcyBzaGltIHdoZW4gdGhlIGJ1aWx0LWluIEFQSVxuLy8gZG9lcyBub3QgZXhpc3QuXG4vL1xuLy8gRG8gbm90IGFzc3VtZSB0aGF0IHRoZSBjbGV2ZXIgaGFja3MgdXNlZCBieSB0aGlzIGhvb2sgYWxzbyB3b3JrIGluIGdlbmVyYWwuXG4vLyBUaGUgcG9pbnQgb2YgdGhpcyBzaGltIGlzIHRvIHJlcGxhY2UgdGhlIG5lZWQgZm9yIGhhY2tzIGJ5IG90aGVyIGxpYnJhcmllcy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4vLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbi8vIHdpbGwgbmVlZCB0byB0cmFjayB0aGF0IHRoZW1zZWx2ZXMgYW5kIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZVxuLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghZGlkV2Fybk9sZDE4QWxwaGEpIHtcbiAgICAgIGlmIChcInN0YXJ0VHJhbnNpdGlvblwiIGluIFJlYWN0KSB7XG4gICAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgXCIgKyBcImRvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSBcIiArIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUgc2hpbSB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseS4gVXBncmFkZSBcIiArIFwidG8gYSBuZXdlciBwcmUtcmVsZWFzZS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFJlYWQgdGhlIGN1cnJlbnQgc25hcHNob3QgZnJvbSB0aGUgc3RvcmUgb24gZXZlcnkgcmVuZGVyLiBBZ2FpbiwgdGhpc1xuICAvLyBicmVha3MgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3JrcyBoZXJlIGJlY2F1c2Ugb2Ygc3BlY2lmaWNcbiAgLy8gaW1wbGVtZW50YXRpb24gZGV0YWlscywgbW9zdCBpbXBvcnRhbnRseSB0aGF0IHVwZGF0ZXMgYXJlXG4gIC8vIGFsd2F5cyBzeW5jaHJvbm91cy5cblxuXG4gIGNvbnN0IHZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgY29uc3QgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gICAgICBpZiAoIWlzKHZhbHVlLCBjYWNoZWRWYWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXCIpO1xuICAgICAgICBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIEJlY2F1c2UgdXBkYXRlcyBhcmUgc3luY2hyb25vdXMsIHdlIGRvbid0IHF1ZXVlIHRoZW0uIEluc3RlYWQgd2UgZm9yY2UgYVxuICAvLyByZS1yZW5kZXIgd2hlbmV2ZXIgdGhlIHN1YnNjcmliZWQgc3RhdGUgY2hhbmdlcyBieSB1cGRhdGluZyBhbiBzb21lXG4gIC8vIGFyYml0cmFyeSB1c2VTdGF0ZSBob29rLiBUaGVuLCBkdXJpbmcgcmVuZGVyLCB3ZSBjYWxsIGdldFNuYXBzaG90IHRvIHJlYWRcbiAgLy8gdGhlIGN1cnJlbnQgdmFsdWUuXG4gIC8vXG4gIC8vIEJlY2F1c2Ugd2UgZG9uJ3QgYWN0dWFsbHkgdXNlIHRoZSBzdGF0ZSByZXR1cm5lZCBieSB0aGUgdXNlU3RhdGUgaG9vaywgd2VcbiAgLy8gY2FuIHNhdmUgYSBiaXQgb2YgbWVtb3J5IGJ5IHN0b3Jpbmcgb3RoZXIgc3R1ZmYgaW4gdGhhdCBzbG90LlxuICAvL1xuICAvLyBUbyBpbXBsZW1lbnQgdGhlIGVhcmx5IGJhaWxvdXQsIHdlIG5lZWQgdG8gdHJhY2sgc29tZSB0aGluZ3Mgb24gYSBtdXRhYmxlXG4gIC8vIG9iamVjdC4gVXN1YWxseSwgd2Ugd291bGQgcHV0IHRoYXQgaW4gYSB1c2VSZWYgaG9vaywgYnV0IHdlIGNhbiBzdGFzaCBpdCBpblxuICAvLyBvdXIgdXNlU3RhdGUgaG9vayBpbnN0ZWFkLlxuICAvL1xuICAvLyBUbyBmb3JjZSBhIHJlLXJlbmRlciwgd2UgY2FsbCBmb3JjZVVwZGF0ZSh7aW5zdH0pLiBUaGF0IHdvcmtzIGJlY2F1c2UgdGhlXG4gIC8vIG5ldyBvYmplY3QgYWx3YXlzIGZhaWxzIGFuIGVxdWFsaXR5IGNoZWNrLlxuXG5cbiAgY29uc3QgW3tcbiAgICBpbnN0XG4gIH0sIGZvcmNlVXBkYXRlXSA9IHVzZVN0YXRlKHtcbiAgICBpbnN0OiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGdldFNuYXBzaG90XG4gICAgfVxuICB9KTsgLy8gVHJhY2sgdGhlIGxhdGVzdCBnZXRTbmFwc2hvdCBmdW5jdGlvbiB3aXRoIGEgcmVmLiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbiAgLy8gaW4gdGhlIGxheW91dCBwaGFzZSBzbyB3ZSBjYW4gYWNjZXNzIGl0IGR1cmluZyB0aGUgdGVhcmluZyBjaGVjayB0aGF0XG4gIC8vIGhhcHBlbnMgb24gc3Vic2NyaWJlLlxuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICAgIGluc3QuZ2V0U25hcHNob3QgPSBnZXRTbmFwc2hvdDsgLy8gV2hlbmV2ZXIgZ2V0U25hcHNob3Qgb3Igc3Vic2NyaWJlIGNoYW5nZXMsIHdlIG5lZWQgdG8gY2hlY2sgaW4gdGhlXG4gICAgLy8gY29tbWl0IHBoYXNlIGlmIHRoZXJlIHdhcyBhbiBpbnRlcmxlYXZlZCBtdXRhdGlvbi4gSW4gY29uY3VycmVudCBtb2RlXG4gICAgLy8gdGhpcyBjYW4gaGFwcGVuIGFsbCB0aGUgdGltZSwgYnV0IGV2ZW4gaW4gc3luY2hyb25vdXMgbW9kZSwgYW4gZWFybGllclxuICAgIC8vIGVmZmVjdCBtYXkgaGF2ZSBtdXRhdGVkIHRoZSBzdG9yZS5cblxuICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAvLyBGb3JjZSBhIHJlLXJlbmRlci5cbiAgICAgIGZvcmNlVXBkYXRlKHtcbiAgICAgICAgaW5zdFxuICAgICAgfSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgcmlnaHQgYmVmb3JlIHN1YnNjcmliaW5nLiBTdWJzZXF1ZW50IGNoYW5nZXMgd2lsbCBiZVxuICAgIC8vIGRldGVjdGVkIGluIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlci5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3RcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3JlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgLy8gVE9ETzogQmVjYXVzZSB0aGVyZSBpcyBubyBjcm9zcy1yZW5kZXJlciBBUEkgZm9yIGJhdGNoaW5nIHVwZGF0ZXMsIGl0J3NcbiAgICAgIC8vIHVwIHRvIHRoZSBjb25zdW1lciBvZiB0aGlzIGxpYnJhcnkgdG8gd3JhcCB0aGVpciBzdWJzY3JpcHRpb24gZXZlbnRcbiAgICAgIC8vIHdpdGggdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMuIFNob3VsZCB3ZSB0cnkgdG8gZGV0ZWN0IHdoZW4gdGhpcyBpc24ndFxuICAgICAgLy8gdGhlIGNhc2UgYW5kIHByaW50IGEgd2FybmluZyBpbiBkZXZlbG9wbWVudD9cbiAgICAgIC8vIFRoZSBzdG9yZSBjaGFuZ2VkLiBDaGVjayBpZiB0aGUgc25hcHNob3QgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHdlXG4gICAgICAvLyByZWFkIGZyb20gdGhlIHN0b3JlLlxuICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICAgIGZvcmNlVXBkYXRlKHtcbiAgICAgICAgICBpbnN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07IC8vIFN1YnNjcmliZSB0byB0aGUgc3RvcmUgYW5kIHJldHVybiBhIGNsZWFuLXVwIGZ1bmN0aW9uLlxuXG5cbiAgICByZXR1cm4gc3Vic2NyaWJlKGhhbmRsZVN0b3JlQ2hhbmdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc3Vic2NyaWJlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICBjb25zdCBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gIGNvbnN0IHByZXZWYWx1ZSA9IGluc3QudmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgIHJldHVybiAhaXMocHJldlZhbHVlLCBuZXh0VmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4gIC8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuICAvLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbiAgLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbn1cblxuLyoqXG4gKiBJbmxpbmVkIGludG8gdGhlIHJlYWN0LXJvdXRlciByZXBvIHNpbmNlIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIGRvZXMgbm90XG4gKiBwcm92aWRlIGEgVU1ELWNvbXBhdGlibGUgcGFja2FnZSwgc28gd2UgbmVlZCB0aGlzIHRvIGJlIGFibGUgdG8gZGlzdHJpYnV0ZVxuICogVU1EIHJlYWN0LXJvdXRlciBidW5kbGVzXG4gKi9cbmNvbnN0IGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xuY29uc3QgaXNTZXJ2ZXJFbnZpcm9ubWVudCA9ICFjYW5Vc2VET007XG5jb25zdCBzaGltID0gaXNTZXJ2ZXJFbnZpcm9ubWVudCA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEgOiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyO1xuY29uc3QgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBcInVzZVN5bmNFeHRlcm5hbFN0b3JlXCIgaW4gUmVhY3QgPyAobW9kdWxlID0+IG1vZHVsZS51c2VTeW5jRXh0ZXJuYWxTdG9yZSkoUmVhY3QpIDogc2hpbTtcblxuY29uc3QgRGF0YVJvdXRlckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEYXRhUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclwiO1xufVxuXG5jb25zdCBEYXRhUm91dGVyU3RhdGVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlclN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclN0YXRlXCI7XG59XG5cbmNvbnN0IEF3YWl0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEF3YWl0Q29udGV4dC5kaXNwbGF5TmFtZSA9IFwiQXdhaXRcIjtcbn1cblxuY29uc3QgTmF2aWdhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBOYXZpZ2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTmF2aWdhdGlvblwiO1xufVxuXG5jb25zdCBMb2NhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBMb2NhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkxvY2F0aW9uXCI7XG59XG5cbmNvbnN0IFJvdXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgb3V0bGV0OiBudWxsLFxuICBtYXRjaGVzOiBbXVxufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZVwiO1xufVxuXG5jb25zdCBSb3V0ZUVycm9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlRXJyb3JDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZUVycm9yXCI7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmdWxsIGhyZWYgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUuIFRoaXMgaXMgdXNlZnVsIGZvciBidWlsZGluZ1xuICogY3VzdG9tIGxpbmtzIHRoYXQgYXJlIGFsc28gYWNjZXNzaWJsZSBhbmQgcHJlc2VydmUgcmlnaHQtY2xpY2sgYmVoYXZpb3IuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtaHJlZlxuICovXG5cbmZ1bmN0aW9uIHVzZUhyZWYodG8sIF90ZW1wKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgaGFzaCxcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hcbiAgfSA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICBsZXQgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZTsgLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgaHJlZi4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4ganVzdCB1c2UgdGhlIHJhd1xuICAvLyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlXG4gIC8vIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuXG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aG5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IuY3JlYXRlSHJlZih7XG4gICAgcGF0aG5hbWU6IGpvaW5lZFBhdGhuYW1lLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlcj4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtaW4tcm91dGVyLWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VJblJvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkgIT0gbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbG9jYXRpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VMb2NhdGlvbigpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubG9jYXRpb247XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGlvbi10eXBlXG4gKi9cblxuZnVuY3Rpb24gdXNlTmF2aWdhdGlvblR5cGUoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubmF2aWdhdGlvblR5cGU7XG59XG4vKipcbiAqIFJldHVybnMgYSBQYXRoTWF0Y2ggb2JqZWN0IGlmIHRoZSBnaXZlbiBwYXR0ZXJuIG1hdGNoZXMgdGhlIGN1cnJlbnQgVVJMLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgXCJhY3RpdmVcIiBzdGF0ZSwgZS5nLlxuICogPE5hdkxpbms+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW1hdGNoXG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2gocGF0dGVybikge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBwYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWF0Y2hQYXRoKHBhdHRlcm4sIHBhdGhuYW1lKSwgW3BhdGhuYW1lLCBwYXR0ZXJuXSk7XG59XG4vKipcbiAqIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBuYXZpZ2F0ZSgpIGZ1bmN0aW9uIHJldHVybmVkIGZyb20gdXNlTmF2aWdhdGUoKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW1wZXJhdGl2ZSBtZXRob2QgZm9yIGNoYW5naW5nIHRoZSBsb2NhdGlvbi4gVXNlZCBieSA8TGluaz5zLCBidXRcbiAqIG1heSBhbHNvIGJlIHVzZWQgYnkgb3RoZXIgZWxlbWVudHMgdG8gY2hhbmdlIHRoZSBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1uYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZSgpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VOYXZpZ2F0ZSgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICBsZXQgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoYWN0aXZlUmVmLmN1cnJlbnQsIFwiWW91IHNob3VsZCBjYWxsIG5hdmlnYXRlKCkgaW4gYSBSZWFjdC51c2VFZmZlY3QoKSwgbm90IHdoZW4gXCIgKyBcInlvdXIgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkLlwiKSA6IHZvaWQgMDtcbiAgICBpZiAoIWFjdGl2ZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICBuYXZpZ2F0b3IuZ28odG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwYXRoID0gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIG9wdGlvbnMucmVsYXRpdmUgPT09IFwicGF0aFwiKTsgLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAgIC8vIHRvIGhhbmRpbmcgb2ZmIHRvIGhpc3RvcnkuICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIHdlXG4gICAgLy8gbmF2aWdhdGUgdG8gdGhlIHJhdyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbFxuICAgIC8vIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2Ugb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGxpbmtzXG5cbiAgICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgICB9XG5cbiAgICAoISFvcHRpb25zLnJlcGxhY2UgPyBuYXZpZ2F0b3IucmVwbGFjZSA6IG5hdmlnYXRvci5wdXNoKShwYXRoLCBvcHRpb25zLnN0YXRlLCBvcHRpb25zKTtcbiAgfSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHJvdXRlUGF0aG5hbWVzSnNvbiwgbG9jYXRpb25QYXRobmFtZV0pO1xuICByZXR1cm4gbmF2aWdhdGU7XG59XG5jb25zdCBPdXRsZXRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4vKipcbiAqIFJldHVybnMgdGhlIGNvbnRleHQgKGlmIHByb3ZpZGVkKSBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1vdXRsZXQtY29udGV4dFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldENvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KE91dGxldENvbnRleHQpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS4gVXNlZCBpbnRlcm5hbGx5IGJ5IDxPdXRsZXQ+IHRvIHJlbmRlciBjaGlsZCByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0XG4gKi9cblxuZnVuY3Rpb24gdXNlT3V0bGV0KGNvbnRleHQpIHtcbiAgbGV0IG91dGxldCA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KS5vdXRsZXQ7XG5cbiAgaWYgKG91dGxldCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPdXRsZXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29udGV4dFxuICAgIH0sIG91dGxldCk7XG4gIH1cblxuICByZXR1cm4gb3V0bGV0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiBrZXkvdmFsdWUgcGFpcnMgb2YgdGhlIGR5bmFtaWMgcGFyYW1zIGZyb20gdGhlIGN1cnJlbnRcbiAqIFVSTCB0aGF0IHdlcmUgbWF0Y2hlZCBieSB0aGUgcm91dGUgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1wYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xufVxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGF0aG5hbWUgb2YgdGhlIGdpdmVuIGB0b2AgdmFsdWUgYWdhaW5zdCB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1yZXNvbHZlZC1wYXRoXG4gKi9cblxuZnVuY3Rpb24gdXNlUmVzb2x2ZWRQYXRoKHRvLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKSwgW3RvLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgb2YgdGhlIHJvdXRlIHRoYXQgbWF0Y2hlZCB0aGUgY3VycmVudCBsb2NhdGlvbiwgcHJlcGFyZWRcbiAqIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dCB0byByZW5kZXIgdGhlIHJlbWFpbmRlciBvZiB0aGUgcm91dGUgdHJlZS4gUm91dGVcbiAqIGVsZW1lbnRzIGluIHRoZSB0cmVlIG11c3QgcmVuZGVyIGFuIDxPdXRsZXQ+IHRvIHJlbmRlciB0aGVpciBjaGlsZCByb3V0ZSdzXG4gKiBlbGVtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLXJvdXRlc1xuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlUm91dGVzKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgZGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlczogcGFyZW50TWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IHBhcmVudE1hdGNoZXNbcGFyZW50TWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgbGV0IHBhcmVudFBhcmFtcyA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xuICBsZXQgcGFyZW50UGF0aG5hbWUgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50UGF0aG5hbWVCYXNlID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWVCYXNlIDogXCIvXCI7XG4gIGxldCBwYXJlbnRSb3V0ZSA9IHJvdXRlTWF0Y2ggJiYgcm91dGVNYXRjaC5yb3V0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gWW91IHdvbid0IGdldCBhIHdhcm5pbmcgYWJvdXQgMiBkaWZmZXJlbnQgPFJvdXRlcz4gdW5kZXIgYSA8Um91dGU+XG4gICAgLy8gd2l0aG91dCBhIHRyYWlsaW5nICosIGJ1dCB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgd2FybmluZyBhbnl3YXkgc2luY2Ugd2VcbiAgICAvLyBjYW5ub3QgZXZlbiBnaXZlIHRoZSB3YXJuaW5nIHVubGVzcyB0aGV5IGxhbmQgYXQgdGhlIHBhcmVudCByb3V0ZS5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyA8Um91dGVzPlxuICAgIC8vICAgey8qIFRoaXMgcm91dGUgcGF0aCBNVVNUIGVuZCB3aXRoIC8qIGJlY2F1c2Ugb3RoZXJ3aXNlXG4gICAgLy8gICAgICAgaXQgd2lsbCBuZXZlciBtYXRjaCAvYmxvZy9wb3N0LzEyMyAqL31cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZ1wiIGVsZW1lbnQ9ezxCbG9nIC8+fSAvPlxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nL2ZlZWRcIiBlbGVtZW50PXs8QmxvZ0ZlZWQgLz59IC8+XG4gICAgLy8gPC9Sb3V0ZXM+XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBCbG9nKCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPFJvdXRlcz5cbiAgICAvLyAgICAgICA8Um91dGUgcGF0aD1cInBvc3QvOmlkXCIgZWxlbWVudD17PFBvc3QgLz59IC8+XG4gICAgLy8gICAgIDwvUm91dGVzPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gICAgbGV0IHBhcmVudFBhdGggPSBwYXJlbnRSb3V0ZSAmJiBwYXJlbnRSb3V0ZS5wYXRoIHx8IFwiXCI7XG4gICAgd2FybmluZ09uY2UocGFyZW50UGF0aG5hbWUsICFwYXJlbnRSb3V0ZSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSwgXCJZb3UgcmVuZGVyZWQgZGVzY2VuZGFudCA8Um91dGVzPiAob3IgY2FsbGVkIGB1c2VSb3V0ZXMoKWApIGF0IFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aG5hbWUgKyBcIlxcXCIgKHVuZGVyIDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+KSBidXQgdGhlIFwiKSArIFwicGFyZW50IHJvdXRlIHBhdGggaGFzIG5vIHRyYWlsaW5nIFxcXCIqXFxcIi4gVGhpcyBtZWFucyBpZiB5b3UgbmF2aWdhdGUgXCIgKyBcImRlZXBlciwgdGhlIHBhcmVudCB3b24ndCBtYXRjaCBhbnltb3JlIGFuZCB0aGVyZWZvcmUgdGhlIGNoaWxkIFwiICsgXCJyb3V0ZXMgd2lsbCBuZXZlciByZW5kZXIuXFxuXFxuXCIgKyAoXCJQbGVhc2UgY2hhbmdlIHRoZSBwYXJlbnQgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4gdG8gPFJvdXRlIFwiKSArIChcInBhdGg9XFxcIlwiICsgKHBhcmVudFBhdGggPT09IFwiL1wiID8gXCIqXCIgOiBwYXJlbnRQYXRoICsgXCIvKlwiKSArIFwiXFxcIj4uXCIpKTtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbkFyZykge1xuICAgIHZhciBfcGFyc2VkTG9jYXRpb25BcmckcGE7XG5cbiAgICBsZXQgcGFyc2VkTG9jYXRpb25BcmcgPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gICAgIShwYXJlbnRQYXRobmFtZUJhc2UgPT09IFwiL1wiIHx8ICgoX3BhcnNlZExvY2F0aW9uQXJnJHBhID0gcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUpID09IG51bGwgPyB2b2lkIDAgOiBfcGFyc2VkTG9jYXRpb25BcmckcGEuc3RhcnRzV2l0aChwYXJlbnRQYXRobmFtZUJhc2UpKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIldoZW4gb3ZlcnJpZGluZyB0aGUgbG9jYXRpb24gdXNpbmcgYDxSb3V0ZXMgbG9jYXRpb24+YCBvciBgdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb24pYCwgXCIgKyBcInRoZSBsb2NhdGlvbiBwYXRobmFtZSBtdXN0IGJlZ2luIHdpdGggdGhlIHBvcnRpb24gb2YgdGhlIFVSTCBwYXRobmFtZSB0aGF0IHdhcyBcIiArIChcIm1hdGNoZWQgYnkgYWxsIHBhcmVudCByb3V0ZXMuIFRoZSBjdXJyZW50IHBhdGhuYW1lIGJhc2UgaXMgXFxcIlwiICsgcGFyZW50UGF0aG5hbWVCYXNlICsgXCJcXFwiIFwiKSArIChcImJ1dCBwYXRobmFtZSBcXFwiXCIgKyBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSArIFwiXFxcIiB3YXMgZ2l2ZW4gaW4gdGhlIGBsb2NhdGlvbmAgcHJvcC5cIikpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbG9jYXRpb24gPSBwYXJzZWRMb2NhdGlvbkFyZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbUNvbnRleHQ7XG4gIH1cblxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UocGFyZW50UGF0aG5hbWVCYXNlLmxlbmd0aCkgfHwgXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB7XG4gICAgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhwYXJlbnRSb3V0ZSB8fCBtYXRjaGVzICE9IG51bGwsIFwiTm8gcm91dGVzIG1hdGNoZWQgbG9jYXRpb24gXFxcIlwiICsgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoICsgXCJcXFwiIFwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhtYXRjaGVzID09IG51bGwgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmVsZW1lbnQgIT09IHVuZGVmaW5lZCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuQ29tcG9uZW50ICE9PSB1bmRlZmluZWQsIFwiTWF0Y2hlZCBsZWFmIHJvdXRlIGF0IGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBcIiArIFwiZG9lcyBub3QgaGF2ZSBhbiBlbGVtZW50IG9yIENvbXBvbmVudC4gVGhpcyBtZWFucyBpdCB3aWxsIHJlbmRlciBhbiA8T3V0bGV0IC8+IHdpdGggYSBcIiArIFwibnVsbCB2YWx1ZSBieSBkZWZhdWx0IHJlc3VsdGluZyBpbiBhbiBcXFwiZW1wdHlcXFwiIHBhZ2UuXCIpIDogdm9pZCAwO1xuICB9XG5cbiAgbGV0IHJlbmRlcmVkTWF0Y2hlcyA9IF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMgJiYgbWF0Y2hlcy5tYXAobWF0Y2ggPT4gT2JqZWN0LmFzc2lnbih7fSwgbWF0Y2gsIHtcbiAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudFBhcmFtcywgbWF0Y2gucGFyYW1zKSxcbiAgICBwYXRobmFtZTogam9pblBhdGhzKFtwYXJlbnRQYXRobmFtZUJhc2UsIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzXG4gICAgbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKG1hdGNoLnBhdGhuYW1lKS5wYXRobmFtZSA6IG1hdGNoLnBhdGhuYW1lXSksXG4gICAgcGF0aG5hbWVCYXNlOiBtYXRjaC5wYXRobmFtZUJhc2UgPT09IFwiL1wiID8gcGFyZW50UGF0aG5hbWVCYXNlIDogam9pblBhdGhzKFtwYXJlbnRQYXRobmFtZUJhc2UsIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzXG4gICAgbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKG1hdGNoLnBhdGhuYW1lQmFzZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICB9KSksIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgfHwgdW5kZWZpbmVkKTsgLy8gV2hlbiBhIHVzZXIgcGFzc2VzIGluIGEgYGxvY2F0aW9uQXJnYCwgdGhlIGFzc29jaWF0ZWQgcm91dGVzIG5lZWQgdG9cbiAgLy8gYmUgd3JhcHBlZCBpbiBhIG5ldyBgTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyYCBpbiBvcmRlciBmb3IgYHVzZUxvY2F0aW9uYFxuICAvLyB0byB1c2UgdGhlIHNjb3BlZCBsb2NhdGlvbiBpbnN0ZWFkIG9mIHRoZSBnbG9iYWwgbG9jYXRpb24uXG5cblxuICBpZiAobG9jYXRpb25BcmcgJiYgcmVuZGVyZWRNYXRjaGVzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbG9jYXRpb246IF9leHRlbmRzKHtcbiAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgICAgIGhhc2g6IFwiXCIsXG4gICAgICAgICAgc3RhdGU6IG51bGwsXG4gICAgICAgICAga2V5OiBcImRlZmF1bHRcIlxuICAgICAgICB9LCBsb2NhdGlvbiksXG4gICAgICAgIG5hdmlnYXRpb25UeXBlOiBBY3Rpb24uUG9wXG4gICAgICB9XG4gICAgfSwgcmVuZGVyZWRNYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRFcnJvckNvbXBvbmVudCgpIHtcbiAgbGV0IGVycm9yID0gdXNlUm91dGVFcnJvcigpO1xuICBsZXQgbWVzc2FnZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGVycm9yLnN0YXR1cyArIFwiIFwiICsgZXJyb3Iuc3RhdHVzVGV4dCA6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICBsZXQgc3RhY2sgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3Iuc3RhY2sgOiBudWxsO1xuICBsZXQgbGlnaHRncmV5ID0gXCJyZ2JhKDIwMCwyMDAsMjAwLCAwLjUpXCI7XG4gIGxldCBwcmVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIwLjVyZW1cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgY29kZVN0eWxlcyA9IHtcbiAgICBwYWRkaW5nOiBcIjJweCA0cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgZGV2SW5mbyA9IG51bGw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGRldkluZm8gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiXFx1RDgzRFxcdURDQkYgSGV5IGRldmVsb3BlciBcXHVEODNEXFx1REM0QlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBwcm92aWRlIGEgd2F5IGJldHRlciBVWCB0aGFuIHRoaXMgd2hlbiB5b3VyIGFwcCB0aHJvd3MgZXJyb3JzIGJ5IHByb3ZpZGluZyB5b3VyIG93blxceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICBzdHlsZTogY29kZVN0eWxlc1xuICAgIH0sIFwiRXJyb3JCb3VuZGFyeVwiKSwgXCIgcHJvcCBvblxceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICBzdHlsZTogY29kZVN0eWxlc1xuICAgIH0sIFwiPFJvdXRlPlwiKSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiVW5leHBlY3RlZCBBcHBsaWNhdGlvbiBFcnJvciFcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIG1lc3NhZ2UpLCBzdGFjayA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICBzdHlsZTogcHJlU3R5bGVzXG4gIH0sIHN0YWNrKSA6IG51bGwsIGRldkluZm8pO1xufVxuXG5jbGFzcyBSZW5kZXJFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5sb2NhdGlvbixcbiAgICAgIGVycm9yOiBwcm9wcy5lcnJvclxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vIFdoZW4gd2UgZ2V0IGludG8gYW4gZXJyb3Igc3RhdGUsIHRoZSB1c2VyIHdpbGwgbGlrZWx5IGNsaWNrIFwiYmFja1wiIHRvIHRoZVxuICAgIC8vIHByZXZpb3VzIHBhZ2UgdGhhdCBkaWRuJ3QgaGF2ZSBhbiBlcnJvci4gQmVjYXVzZSB0aGlzIHdyYXBzIHRoZSBlbnRpcmVcbiAgICAvLyBhcHBsaWNhdGlvbiwgdGhhdCB3aWxsIGhhdmUgbm8gZWZmZWN0LS10aGUgZXJyb3IgcGFnZSBjb250aW51ZXMgdG8gZGlzcGxheS5cbiAgICAvLyBUaGlzIGdpdmVzIHVzIGEgbWVjaGFuaXNtIHRvIHJlY292ZXIgZnJvbSB0aGUgZXJyb3Igd2hlbiB0aGUgbG9jYXRpb24gY2hhbmdlcy5cbiAgICAvL1xuICAgIC8vIFdoZXRoZXIgd2UncmUgaW4gYW4gZXJyb3Igc3RhdGUgb3Igbm90LCB3ZSB1cGRhdGUgdGhlIGxvY2F0aW9uIGluIHN0YXRlXG4gICAgLy8gc28gdGhhdCB3aGVuIHdlIGFyZSBpbiBhbiBlcnJvciBzdGF0ZSwgaXQgZ2V0cyByZXNldCB3aGVuIGEgbmV3IGxvY2F0aW9uXG4gICAgLy8gY29tZXMgaW4gYW5kIHRoZSB1c2VyIHJlY292ZXJzIGZyb20gdGhlIGVycm9yLlxuICAgIGlmIChzdGF0ZS5sb2NhdGlvbiAhPT0gcHJvcHMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBwcm9wcy5lcnJvcixcbiAgICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uXG4gICAgICB9O1xuICAgIH0gLy8gSWYgd2UncmUgbm90IGNoYW5naW5nIGxvY2F0aW9ucywgcHJlc2VydmUgdGhlIGxvY2F0aW9uIGJ1dCBzdGlsbCBzdXJmYWNlXG4gICAgLy8gYW55IG5ldyBlcnJvcnMgdGhhdCBtYXkgY29tZSB0aHJvdWdoLiBXZSByZXRhaW4gdGhlIGV4aXN0aW5nIGVycm9yLCB3ZSBkb1xuICAgIC8vIHRoaXMgYmVjYXVzZSB0aGUgZXJyb3IgcHJvdmlkZWQgZnJvbSB0aGUgYXBwIHN0YXRlIG1heSBiZSBjbGVhcmVkIHdpdGhvdXRcbiAgICAvLyB0aGUgbG9jYXRpb24gY2hhbmdpbmcuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3IgfHwgc3RhdGUuZXJyb3IsXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb25cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZWFjdCBSb3V0ZXIgY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5lcnJvciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMucm91dGVDb250ZXh0XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVFcnJvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgfSkpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIFJlbmRlcmVkUm91dGUoX3JlZikge1xuICBsZXQge1xuICAgIHJvdXRlQ29udGV4dCxcbiAgICBtYXRjaCxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7IC8vIFRyYWNrIGhvdyBkZWVwIHdlIGdvdCBpbiBvdXIgcmVuZGVyIHBhc3MgdG8gZW11bGF0ZSBTU1IgY29tcG9uZW50RGlkQ2F0Y2hcbiAgLy8gaW4gYSBEYXRhU3RhdGljUm91dGVyXG5cbiAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpYyAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0ICYmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgbWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkpIHtcbiAgICBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkID0gbWF0Y2gucm91dGUuaWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJvdXRlQ29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMsIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZSkge1xuICBpZiAocGFyZW50TWF0Y2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50TWF0Y2hlcyA9IFtdO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuICAgIGlmIChkYXRhUm91dGVyU3RhdGUgIT0gbnVsbCAmJiBkYXRhUm91dGVyU3RhdGUuZXJyb3JzKSB7XG4gICAgICAvLyBEb24ndCBiYWlsIGlmIHdlIGhhdmUgZGF0YSByb3V0ZXIgZXJyb3JzIHNvIHdlIGNhbiByZW5kZXIgdGhlbSBpbiB0aGVcbiAgICAgIC8vIGJvdW5kYXJ5LiAgVXNlIHRoZSBwcmUtbWF0Y2hlZCAob3Igc2hpbW1lZCkgbWF0Y2hlc1xuICAgICAgbWF0Y2hlcyA9IGRhdGFSb3V0ZXJTdGF0ZS5tYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVuZGVyZWRNYXRjaGVzID0gbWF0Y2hlczsgLy8gSWYgd2UgaGF2ZSBkYXRhIGVycm9ycywgdHJpbSBtYXRjaGVzIHRvIHRoZSBoaWdoZXN0IGVycm9yIGJvdW5kYXJ5XG5cbiAgbGV0IGVycm9ycyA9IGRhdGFSb3V0ZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogZGF0YVJvdXRlclN0YXRlLmVycm9ycztcblxuICBpZiAoZXJyb3JzICE9IG51bGwpIHtcbiAgICBsZXQgZXJyb3JJbmRleCA9IHJlbmRlcmVkTWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkICYmIChlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttLnJvdXRlLmlkXSkpO1xuICAgICEoZXJyb3JJbmRleCA+PSAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiQ291bGQgbm90IGZpbmQgYSBtYXRjaGluZyByb3V0ZSBmb3IgdGhlIGN1cnJlbnQgZXJyb3JzOiBcIiArIGVycm9ycykgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZW5kZXJlZE1hdGNoZXMgPSByZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgTWF0aC5taW4ocmVuZGVyZWRNYXRjaGVzLmxlbmd0aCwgZXJyb3JJbmRleCArIDEpKTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgbGV0IGVycm9yID0gbWF0Y2gucm91dGUuaWQgPyBlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttYXRjaC5yb3V0ZS5pZF0gOiBudWxsOyAvLyBPbmx5IGRhdGEgcm91dGVycyBoYW5kbGUgZXJyb3JzXG5cbiAgICBsZXQgZXJyb3JFbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUpIHtcbiAgICAgIGlmIChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5KSB7XG4gICAgICAgIGVycm9yRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnksIG51bGwpO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQpIHtcbiAgICAgICAgZXJyb3JFbGVtZW50ID0gbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdEVycm9yQ29tcG9uZW50LCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hlcyA9IHBhcmVudE1hdGNoZXMuY29uY2F0KHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBpbmRleCArIDEpKTtcblxuICAgIGxldCBnZXRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IG91dGxldDtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNoaWxkcmVuID0gZXJyb3JFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5Db21wb25lbnQpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChtYXRjaC5yb3V0ZS5Db21wb25lbnQsIG51bGwpO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5lbGVtZW50KSB7XG4gICAgICAgIGNoaWxkcmVuID0gbWF0Y2gucm91dGUuZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlcmVkUm91dGUsIHtcbiAgICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgICByb3V0ZUNvbnRleHQ6IHtcbiAgICAgICAgICBvdXRsZXQsXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pO1xuICAgIH07IC8vIE9ubHkgd3JhcCBpbiBhbiBlcnJvciBib3VuZGFyeSB3aXRoaW4gZGF0YSByb3V0ZXIgdXNhZ2VzIHdoZW4gd2UgaGF2ZSBhblxuICAgIC8vIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50IG9uIHRoaXMgcm91dGUuICBPdGhlcndpc2UgbGV0IGl0IGJ1YmJsZSB1cCB0b1xuICAgIC8vIGFuIGFuY2VzdG9yIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50XG5cblxuICAgIHJldHVybiBkYXRhUm91dGVyU3RhdGUgJiYgKG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnkgfHwgbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IGluZGV4ID09PSAwKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlckVycm9yQm91bmRhcnksIHtcbiAgICAgIGxvY2F0aW9uOiBkYXRhUm91dGVyU3RhdGUubG9jYXRpb24sXG4gICAgICBjb21wb25lbnQ6IGVycm9yRWxlbWVudCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbigpLFxuICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgIG91dGxldDogbnVsbCxcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfVxuICAgIH0pIDogZ2V0Q2hpbGRyZW4oKTtcbiAgfSwgbnVsbCk7XG59XG52YXIgRGF0YVJvdXRlckhvb2s7XG5cbihmdW5jdGlvbiAoRGF0YVJvdXRlckhvb2spIHtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VCbG9ja2VyXCJdID0gXCJ1c2VCbG9ja2VyXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VCbG9ja2VyXCJdID0gXCJ1c2VCbG9ja2VyXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VMb2FkZXJEYXRhXCJdID0gXCJ1c2VMb2FkZXJEYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VBY3Rpb25EYXRhXCJdID0gXCJ1c2VBY3Rpb25EYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUVycm9yXCJdID0gXCJ1c2VSb3V0ZUVycm9yXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VOYXZpZ2F0aW9uXCJdID0gXCJ1c2VOYXZpZ2F0aW9uXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUxvYWRlckRhdGFcIl0gPSBcInVzZVJvdXRlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTWF0Y2hlc1wiXSA9IFwidXNlTWF0Y2hlc1wiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG59KShEYXRhUm91dGVyU3RhdGVIb29rIHx8IChEYXRhUm91dGVyU3RhdGVIb29rID0ge30pKTtcblxuZnVuY3Rpb24gZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkge1xuICByZXR1cm4gaG9va05hbWUgKyBcIiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVycy9waWNraW5nLWEtcm91dGVyLlwiO1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gICFjdHggPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGN0eDtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlclN0YXRlKGhvb2tOYW1lKSB7XG4gIGxldCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVzZVJvdXRlQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gcm91dGU7XG59XG5cbmZ1bmN0aW9uIHVzZUN1cnJlbnRSb3V0ZUlkKGhvb2tOYW1lKSB7XG4gIGxldCByb3V0ZSA9IHVzZVJvdXRlQ29udGV4dChob29rTmFtZSk7XG4gIGxldCB0aGlzUm91dGUgPSByb3V0ZS5tYXRjaGVzW3JvdXRlLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICF0aGlzUm91dGUucm91dGUuaWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBob29rTmFtZSArIFwiIGNhbiBvbmx5IGJlIHVzZWQgb24gcm91dGVzIHRoYXQgY29udGFpbiBhIHVuaXF1ZSBcXFwiaWRcXFwiXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiB0aGlzUm91dGUucm91dGUuaWQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiwgZGVmYXVsdGluZyB0byBhbiBcImlkbGVcIiBuYXZpZ2F0aW9uIHdoZW5cbiAqIG5vIG5hdmlnYXRpb24gaXMgaW4gcHJvZ3Jlc3NcbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb24oKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU5hdmlnYXRpb24pO1xuICByZXR1cm4gc3RhdGUubmF2aWdhdGlvbjtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJldmFsaWRhdGUgZnVuY3Rpb24gZm9yIG1hbnVhbGx5IHRyaWdnZXJpbmcgcmV2YWxpZGF0aW9uLCBhcyB3ZWxsXG4gKiBhcyB0aGUgY3VycmVudCBzdGF0ZSBvZiBhbnkgbWFudWFsIHJldmFsaWRhdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VSZXZhbGlkYXRvcigpIHtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlUmV2YWxpZGF0b3IpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSZXZhbGlkYXRvcik7XG4gIHJldHVybiB7XG4gICAgcmV2YWxpZGF0ZTogZGF0YVJvdXRlckNvbnRleHQucm91dGVyLnJldmFsaWRhdGUsXG4gICAgc3RhdGU6IHN0YXRlLnJldmFsaWRhdGlvblxuICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3RpdmUgcm91dGUgbWF0Y2hlcywgdXNlZnVsIGZvciBhY2Nlc3NpbmcgbG9hZGVyRGF0YSBmb3JcbiAqIHBhcmVudC9jaGlsZCByb3V0ZXMgb3IgdGhlIHJvdXRlIFwiaGFuZGxlXCIgcHJvcGVydHlcbiAqL1xuXG5mdW5jdGlvbiB1c2VNYXRjaGVzKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXMsXG4gICAgbG9hZGVyRGF0YVxuICB9ID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTWF0Y2hlcyk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoZXMubWFwKG1hdGNoID0+IHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gbWF0Y2g7IC8vIE5vdGU6IFRoaXMgc3RydWN0dXJlIG1hdGNoZXMgdGhhdCBjcmVhdGVkIGJ5IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaFxuICAgIC8vIGluIHRoZSBAcmVtaXgtcnVuL3JvdXRlciAsIHNvIGlmIHlvdSBjaGFuZ2UgdGhpcyBwbGVhc2UgYWxzbyBjaGFuZ2VcbiAgICAvLyB0aGF0IDopICBFdmVudHVhbGx5IHdlJ2xsIERSWSB0aGlzIHVwXG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IG1hdGNoLnJvdXRlLmlkLFxuICAgICAgcGF0aG5hbWUsXG4gICAgICBwYXJhbXMsXG4gICAgICBkYXRhOiBsb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSxcbiAgICAgIGhhbmRsZTogbWF0Y2gucm91dGUuaGFuZGxlXG4gICAgfTtcbiAgfSksIFttYXRjaGVzLCBsb2FkZXJEYXRhXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxvYWRlciBkYXRhIGZvciB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBsb2FkZXJcbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2FkZXJEYXRhKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VMb2FkZXJEYXRhKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuXG4gIGlmIChzdGF0ZS5lcnJvcnMgJiYgc3RhdGUuZXJyb3JzW3JvdXRlSWRdICE9IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiWW91IGNhbm5vdCBgdXNlTG9hZGVyRGF0YWAgaW4gYW4gZXJyb3JFbGVtZW50IChyb3V0ZUlkOiBcIiArIHJvdXRlSWQgKyBcIilcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5sb2FkZXJEYXRhW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXJEYXRhIGZvciB0aGUgZ2l2ZW4gcm91dGVJZFxuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlTG9hZGVyRGF0YShyb3V0ZUlkKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlTG9hZGVyRGF0YSk7XG4gIHJldHVybiBzdGF0ZS5sb2FkZXJEYXRhW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3Rpb24gZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgYWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gdXNlQWN0aW9uRGF0YSgpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlQWN0aW9uRGF0YSk7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJ1c2VBY3Rpb25EYXRhIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoKHN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBzdGF0ZS5hY3Rpb25EYXRhKSB8fCB7fSlbMF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgZXJyb3IsIHdoaWNoIGNvdWxkIGJlIGEgbG9hZGVyL2FjdGlvblxuICogZXJyb3Igb3IgYSByZW5kZXIgZXJyb3IuICBUaGlzIGlzIGludGVuZGVkIHRvIGJlIGNhbGxlZCBmcm9tIHlvdXJcbiAqIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50IHRvIGRpc3BsYXkgYSBwcm9wZXIgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZUVycm9yKCkge1xuICB2YXIgX3N0YXRlJGVycm9ycztcblxuICBsZXQgZXJyb3IgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlRXJyb3JDb250ZXh0KTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUVycm9yKTsgLy8gSWYgdGhpcyB3YXMgYSByZW5kZXIgZXJyb3IsIHdlIHB1dCBpdCBpbiBhIFJvdXRlRXJyb3IgY29udGV4dCBpbnNpZGVcbiAgLy8gb2YgUmVuZGVyRXJyb3JCb3VuZGFyeVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSAvLyBPdGhlcndpc2UgbG9vayBmb3IgZXJyb3JzIGZyb20gb3VyIGRhdGEgcm91dGVyIHN0YXRlXG5cblxuICByZXR1cm4gKF9zdGF0ZSRlcnJvcnMgPSBzdGF0ZS5lcnJvcnMpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZXJyb3JzW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoYXBweS1wYXRoIGRhdGEgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciA8QXdhaXQgLz4gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VBc3luY1ZhbHVlKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2RhdGE7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVycm9yIGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgPEF3YWl0IC8+IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQXN5bmNFcnJvcigpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9lcnJvcjtcbn1cbmxldCBibG9ja2VySWQgPSAwO1xuLyoqXG4gKiBBbGxvdyB0aGUgYXBwbGljYXRpb24gdG8gYmxvY2sgbmF2aWdhdGlvbnMgd2l0aGluIHRoZSBTUEEgYW5kIHByZXNlbnQgdGhlXG4gKiB1c2VyIGEgY29uZmlybWF0aW9uIGRpYWxvZyB0byBjb25maXJtIHRoZSBuYXZpZ2F0aW9uLiAgTW9zdGx5IHVzZWQgdG8gYXZvaWRcbiAqIHVzaW5nIGhhbGYtZmlsbGVkIGZvcm0gZGF0YS4gIFRoaXMgZG9lcyBub3QgaGFuZGxlIGhhcmQtcmVsb2FkcyBvclxuICogY3Jvc3Mtb3JpZ2luIG5hdmlnYXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJsb2NrZXIoc2hvdWxkQmxvY2spIHtcbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZUJsb2NrZXIpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VCbG9ja2VyKTtcbiAgbGV0IFtibG9ja2VyS2V5XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IFN0cmluZygrK2Jsb2NrZXJJZCkpO1xuICBsZXQgYmxvY2tlckZ1bmN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soYXJncyA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBzaG91bGRCbG9jayA9PT0gXCJmdW5jdGlvblwiID8gISFzaG91bGRCbG9jayhhcmdzKSA6ICEhc2hvdWxkQmxvY2s7XG4gIH0sIFtzaG91bGRCbG9ja10pO1xuICBsZXQgYmxvY2tlciA9IHJvdXRlci5nZXRCbG9ja2VyKGJsb2NrZXJLZXksIGJsb2NrZXJGdW5jdGlvbik7IC8vIENsZWFudXAgb24gdW5tb3VudFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiByb3V0ZXIuZGVsZXRlQmxvY2tlcihibG9ja2VyS2V5KSwgW3JvdXRlciwgYmxvY2tlcktleV0pOyAvLyBQcmVmZXIgdGhlIGJsb2NrZXIgZnJvbSBzdGF0ZSBzaW5jZSBEYXRhUm91dGVyQ29udGV4dCBpcyBtZW1vaXplZCBzbyB0aGlzXG4gIC8vIGVuc3VyZXMgd2UgdXBkYXRlIG9uIGJsb2NrZXIgc3RhdGUgdXBkYXRlc1xuXG4gIHJldHVybiBzdGF0ZS5ibG9ja2Vycy5nZXQoYmxvY2tlcktleSkgfHwgYmxvY2tlcjtcbn1cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIFJlbWl4IFJvdXRlciBpbnN0YW5jZSwgcmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBVSVxuICovXG5mdW5jdGlvbiBSb3V0ZXJQcm92aWRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgZmFsbGJhY2tFbGVtZW50LFxuICAgIHJvdXRlclxuICB9ID0gX3JlZjtcbiAgbGV0IGdldFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gcm91dGVyLnN0YXRlLCBbcm91dGVyXSk7IC8vIFN5bmMgcm91dGVyIHN0YXRlIHRvIG91ciBjb21wb25lbnQgc3RhdGUgdG8gZm9yY2UgcmUtcmVuZGVyc1xuXG4gIGxldCBzdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHJvdXRlci5zdWJzY3JpYmUsIGdldFN0YXRlLCAvLyBXZSBoYXZlIHRvIHByb3ZpZGUgdGhpcyBzbyBSZWFjdEAxOCBkb2Vzbid0IGNvbXBsYWluIGR1cmluZyBoeWRyYXRpb24sXG4gIC8vIGJ1dCB3ZSBwYXNzIG91ciBzZXJpYWxpemVkIGh5ZHJhdGlvbiBkYXRhIGludG8gdGhlIHJvdXRlciBzbyBzdGF0ZSBoZXJlXG4gIC8vIGlzIGFscmVhZHkgc3luY2VkIHdpdGggd2hhdCB0aGUgc2VydmVyIHNhd1xuICBnZXRTdGF0ZSk7XG4gIGxldCBuYXZpZ2F0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlSHJlZjogcm91dGVyLmNyZWF0ZUhyZWYsXG4gICAgICBlbmNvZGVMb2NhdGlvbjogcm91dGVyLmVuY29kZUxvY2F0aW9uLFxuICAgICAgZ286IG4gPT4gcm91dGVyLm5hdmlnYXRlKG4pLFxuICAgICAgcHVzaDogKHRvLCBzdGF0ZSwgb3B0cykgPT4gcm91dGVyLm5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMucHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KSxcbiAgICAgIHJlcGxhY2U6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSlcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG4gIGxldCBiYXNlbmFtZSA9IHJvdXRlci5iYXNlbmFtZSB8fCBcIi9cIjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJvdXRlcixcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBmYWxzZSxcbiAgICBiYXNlbmFtZVxuICB9KSwgW3JvdXRlciwgbmF2aWdhdG9yLCBiYXNlbmFtZV0pOyAvLyBUaGUgZnJhZ21lbnQgYW5kIHtudWxsfSBoZXJlIGFyZSBpbXBvcnRhbnQhICBXZSBuZWVkIHRoZW0gdG8ga2VlcCBSZWFjdCAxOCdzXG4gIC8vIHVzZUlkIGhhcHB5IHdoZW4gd2UgYXJlIHNlcnZlci1yZW5kZXJpbmcgc2luY2Ugd2UgbWF5IGhhdmUgYSA8c2NyaXB0PiBoZXJlXG4gIC8vIGNvbnRhaW5pbmcgdGhlIGh5ZHJhdGVkIHNlcnZlci1zaWRlIHN0YXRpY0NvbnRleHQgKGZyb20gU3RhdGljUm91dGVyUHJvdmlkZXIpLlxuICAvLyB1c2VJZCByZWxpZXMgb24gdGhlIGNvbXBvbmVudCB0cmVlIHN0cnVjdHVyZSB0byBnZW5lcmF0ZSBkZXRlcm1pbmlzdGljIGlkJ3NcbiAgLy8gc28gd2UgbmVlZCB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBvbiB0aGUgY2xpZW50IGV2ZW4gdGhvdWdoXG4gIC8vIHdlIGRvbid0IG5lZWQgdGhlIDxzY3JpcHQ+IHRhZ1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZGF0YVJvdXRlckNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlclN0YXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdGF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogcm91dGVyLmJhc2VuYW1lLFxuICAgIGxvY2F0aW9uOiByb3V0ZXIuc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHJvdXRlci5zdGF0ZS5oaXN0b3J5QWN0aW9uLFxuICAgIG5hdmlnYXRvcjogbmF2aWdhdG9yXG4gIH0sIHJvdXRlci5zdGF0ZS5pbml0aWFsaXplZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlcywgbnVsbCkgOiBmYWxsYmFja0VsZW1lbnQpKSksIG51bGwpO1xufVxuXG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvbWVtb3J5LXJvdXRlclxuICovXG5mdW5jdGlvbiBNZW1vcnlSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXhcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXgsXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBOb3RlOiBUaGlzIEFQSSBpcyBtb3N0bHkgdXNlZnVsIGluIFJlYWN0LkNvbXBvbmVudCBzdWJjbGFzc2VzIHRoYXQgYXJlIG5vdFxuICogYWJsZSB0byB1c2UgaG9va3MuIEluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgdGhlXG4gKiBgdXNlTmF2aWdhdGVgIGhvb2sgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gTmF2aWdhdGUoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICB0byxcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfcmVmMztcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgLy8gdGhlIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCI8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKCFSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWMsIFwiPE5hdmlnYXRlPiBtdXN0IG5vdCBiZSB1c2VkIG9uIHRoZSBpbml0aWFsIHJlbmRlciBpbiBhIDxTdGF0aWNSb3V0ZXI+LiBcIiArIFwiVGhpcyBpcyBhIG5vLW9wLCBidXQgeW91IHNob3VsZCBtb2RpZnkgeW91ciBjb2RlIHNvIHRoZSA8TmF2aWdhdGU+IGlzIFwiICsgXCJvbmx5IGV2ZXIgcmVuZGVyZWQgaW4gcmVzcG9uc2UgdG8gc29tZSB1c2VyIGludGVyYWN0aW9uIG9yIHN0YXRlIGNoYW5nZS5cIikgOiB2b2lkIDA7XG4gIGxldCBkYXRhUm91dGVyU3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEF2b2lkIGtpY2tpbmcgb2ZmIG11bHRpcGxlIG5hdmlnYXRpb25zIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYVxuICAgIC8vIGRhdGEtcm91dGVyIG5hdmlnYXRpb24sIHNpbmNlIGNvbXBvbmVudHMgZ2V0IHJlLXJlbmRlcmVkIHdoZW4gd2UgZW50ZXJcbiAgICAvLyBhIHN1Ym1pdHRpbmcvbG9hZGluZyBzdGF0ZVxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUgJiYgZGF0YVJvdXRlclN0YXRlLm5hdmlnYXRpb24uc3RhdGUgIT09IFwiaWRsZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmF2aWdhdGUodG8sIHtcbiAgICAgIHJlcGxhY2UsXG4gICAgICBzdGF0ZSxcbiAgICAgIHJlbGF0aXZlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYXQgYSBjZXJ0YWluIFVSTCBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZVxuICovXG5mdW5jdGlvbiBSb3V0ZShfcHJvcHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJBIDxSb3V0ZT4gaXMgb25seSBldmVyIHRvIGJlIHVzZWQgYXMgdGhlIGNoaWxkIG9mIDxSb3V0ZXM+IGVsZW1lbnQsIFwiICsgXCJuZXZlciByZW5kZXJlZCBkaXJlY3RseS4gUGxlYXNlIHdyYXAgeW91ciA8Um91dGU+IGluIGEgPFJvdXRlcz4uXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGxvY2F0aW9uIGNvbnRleHQgZm9yIHRoZSByZXN0IG9mIHRoZSBhcHAuXG4gKlxuICogTm90ZTogWW91IHVzdWFsbHkgd29uJ3QgcmVuZGVyIGEgPFJvdXRlcj4gZGlyZWN0bHkuIEluc3RlYWQsIHlvdSdsbCByZW5kZXIgYVxuICogcm91dGVyIHRoYXQgaXMgbW9yZSBzcGVjaWZpYyB0byB5b3VyIGVudmlyb25tZW50IHN1Y2ggYXMgYSA8QnJvd3NlclJvdXRlcj5cbiAqIGluIHdlYiBicm93c2VycyBvciBhIDxTdGF0aWNSb3V0ZXI+IGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvcm91dGVyXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcihfcmVmNCkge1xuICBsZXQge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgICBjaGlsZHJlbiA9IG51bGwsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uUHJvcCxcbiAgICBuYXZpZ2F0aW9uVHlwZSA9IEFjdGlvbi5Qb3AsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlXG4gIH0gPSBfcmVmNDtcbiAgISF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCByZW5kZXIgYSA8Um91dGVyPiBpbnNpZGUgYW5vdGhlciA8Um91dGVyPi5cIiArIFwiIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBQcmVzZXJ2ZSB0cmFpbGluZyBzbGFzaGVzIG9uIGJhc2VuYW1lLCBzbyB3ZSBjYW4gbGV0IHRoZSB1c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGVuZm9yY2VtZW50IG9mIHRyYWlsaW5nIHNsYXNoZXMgdGhyb3VnaG91dCB0aGUgYXBwXG5cbiAgbGV0IGJhc2VuYW1lID0gYmFzZW5hbWVQcm9wLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuICBsZXQgbmF2aWdhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcFxuICB9KSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHN0YXRpY1Byb3BdKTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uUHJvcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxvY2F0aW9uUHJvcCA9IHBhcnNlUGF0aChsb2NhdGlvblByb3ApO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCIsXG4gICAgc3RhdGUgPSBudWxsLFxuICAgIGtleSA9IFwiZGVmYXVsdFwiXG4gIH0gPSBsb2NhdGlvblByb3A7XG4gIGxldCBsb2NhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJhaWxpbmdQYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKTtcblxuICAgIGlmICh0cmFpbGluZ1BhdGhuYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAga2V5XG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvblR5cGVcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXksIG5hdmlnYXRpb25UeXBlXSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGxvY2F0aW9uQ29udGV4dCAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb25Db250ZXh0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBuYXZpZ2F0aW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgdmFsdWU6IGxvY2F0aW9uQ29udGV4dFxuICB9KSk7XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgbmVzdGVkIHRyZWUgb2YgPFJvdXRlPiBlbGVtZW50cyB0aGF0IHJlbmRlcnMgdGhlIGJyYW5jaFxuICogdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL3JvdXRlc1xuICovXG5mdW5jdGlvbiBSb3V0ZXMoX3JlZjUpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBsb2NhdGlvblxuICB9ID0gX3JlZjU7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpOyAvLyBXaGVuIGluIGEgRGF0YVJvdXRlckNvbnRleHQgX3dpdGhvdXRfIGNoaWxkcmVuLCB3ZSB1c2UgdGhlIHJvdXRlciByb3V0ZXNcbiAgLy8gZGlyZWN0bHkuICBJZiB3ZSBoYXZlIGNoaWxkcmVuLCB0aGVuIHdlJ3JlIGluIGEgZGVzY2VuZGFudCB0cmVlIGFuZCB3ZVxuICAvLyBuZWVkIHRvIHVzZSBjaGlsZCByb3V0ZXMuXG5cbiAgbGV0IHJvdXRlcyA9IGRhdGFSb3V0ZXJDb250ZXh0ICYmICFjaGlsZHJlbiA/IGRhdGFSb3V0ZXJDb250ZXh0LnJvdXRlci5yb3V0ZXMgOiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICByZXR1cm4gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb24pO1xufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB1c2UgZm9yIHJlbmRlcmluZyBsYXppbHkgbG9hZGVkIGRhdGEgZnJvbSByZXR1cm5pbmcgZGVmZXIoKVxuICogaW4gYSBsb2FkZXIgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gQXdhaXQoX3JlZjYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvckVsZW1lbnQsXG4gICAgcmVzb2x2ZVxuICB9ID0gX3JlZjY7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdEVycm9yQm91bmRhcnksIHtcbiAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgIGVycm9yRWxlbWVudDogZXJyb3JFbGVtZW50XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc29sdmVBd2FpdCwgbnVsbCwgY2hpbGRyZW4pKTtcbn1cbnZhciBBd2FpdFJlbmRlclN0YXR1cztcblxuKGZ1bmN0aW9uIChBd2FpdFJlbmRlclN0YXR1cykge1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInBlbmRpbmdcIl0gPSAwXSA9IFwicGVuZGluZ1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInN1Y2Nlc3NcIl0gPSAxXSA9IFwic3VjY2Vzc1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcImVycm9yXCJdID0gMl0gPSBcImVycm9yXCI7XG59KShBd2FpdFJlbmRlclN0YXR1cyB8fCAoQXdhaXRSZW5kZXJTdGF0dXMgPSB7fSkpO1xuXG5jb25zdCBuZXZlclNldHRsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuXG5jbGFzcyBBd2FpdEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihcIjxBd2FpdD4gY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBlcnJvckVsZW1lbnQsXG4gICAgICByZXNvbHZlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHByb21pc2UgPSBudWxsO1xuICAgIGxldCBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuXG4gICAgaWYgKCEocmVzb2x2ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAvLyBEaWRuJ3QgZ2V0IGEgcHJvbWlzZSAtIHByb3ZpZGUgYXMgYSByZXNvbHZlZCBwcm9taXNlXG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlc29sdmVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgLy8gQ2F1Z2h0IGEgcmVuZGVyIGVycm9yLCBwcm92aWRlIGl0IGFzIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3I7XG4gICAgICBsZXQgcmVuZGVyRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KCkuY2F0Y2goKCkgPT4ge30pOyAvLyBBdm9pZCB1bmhhbmRsZWQgcmVqZWN0aW9uIHdhcm5pbmdzXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gcmVuZGVyRXJyb3JcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzb2x2ZS5fdHJhY2tlZCkge1xuICAgICAgLy8gQWxyZWFkeSB0cmFja2VkIHByb21pc2UgLSBjaGVjayBjb250ZW50c1xuICAgICAgcHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICBzdGF0dXMgPSBwcm9taXNlLl9lcnJvciAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgOiBwcm9taXNlLl9kYXRhICE9PSB1bmRlZmluZWQgPyBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzIDogQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmF3ICh1bnRyYWNrZWQpIHByb21pc2UgLSB0cmFjayBpdFxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSByZXNvbHZlLnRoZW4oZGF0YSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZGF0YVwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZGF0YVxuICAgICAgfSksIGVycm9yID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiBwcm9taXNlLl9lcnJvciBpbnN0YW5jZW9mIEFib3J0ZWREZWZlcnJlZEVycm9yKSB7XG4gICAgICAvLyBGcmVlemUgdGhlIFVJIGJ5IHRocm93aW5nIGEgbmV2ZXIgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgdGhyb3cgbmV2ZXJTZXR0bGVkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiAhZXJyb3JFbGVtZW50KSB7XG4gICAgICAvLyBObyBlcnJvckVsZW1lbnQsIHRocm93IHRvIHRoZSBuZWFyZXN0IHJvdXRlLWxldmVsIGVycm9yIGJvdW5kYXJ5XG4gICAgICB0aHJvdyBwcm9taXNlLl9lcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvcikge1xuICAgICAgLy8gUmVuZGVyIHZpYSBvdXIgZXJyb3JFbGVtZW50XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9taXNlLFxuICAgICAgICBjaGlsZHJlbjogZXJyb3JFbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAvLyBSZW5kZXIgY2hpbGRyZW4gd2l0aCByZXNvbHZlZCB2YWx1ZVxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9IC8vIFRocm93IHRvIHRoZSBzdXNwZW5zZSBib3VuZGFyeVxuXG5cbiAgICB0aHJvdyBwcm9taXNlO1xuICB9XG5cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqIEluZGlyZWN0aW9uIHRvIGxldmVyYWdlIHVzZUFzeW5jVmFsdWUgZm9yIGEgcmVuZGVyLXByb3AgQVBJIG9uIDxBd2FpdD5cbiAqL1xuXG5cbmZ1bmN0aW9uIFJlc29sdmVBd2FpdChfcmVmNykge1xuICBsZXQge1xuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmNztcbiAgbGV0IGRhdGEgPSB1c2VBc3luY1ZhbHVlKCk7XG4gIGxldCB0b1JlbmRlciA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oZGF0YSkgOiBjaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0b1JlbmRlcik7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFVUSUxTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlcyBhIHJvdXRlIGNvbmZpZyBmcm9tIGEgUmVhY3QgXCJjaGlsZHJlblwiIG9iamVjdCwgd2hpY2ggaXMgdXN1YWxseVxuICogZWl0aGVyIGEgYDxSb3V0ZT5gIGVsZW1lbnQgb3IgYW4gYXJyYXkgb2YgdGhlbS4gVXNlZCBpbnRlcm5hbGx5IGJ5XG4gKiBgPFJvdXRlcz5gIHRvIGNyZWF0ZSBhIHJvdXRlIGNvbmZpZyBmcm9tIGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2NyZWF0ZS1yb3V0ZXMtZnJvbS1jaGlsZHJlblxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gW107XG4gIH1cblxuICBsZXQgcm91dGVzID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSWdub3JlIG5vbi1lbGVtZW50cy4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIG1vcmUgZWFzaWx5IGlubGluZVxuICAgICAgLy8gY29uZGl0aW9uYWxzIGluIHRoZWlyIHJvdXRlIGNvbmZpZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdHJlZVBhdGggPSBbLi4ucGFyZW50UGF0aCwgaW5kZXhdO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJbXCIgKyAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gXCJzdHJpbmdcIiA/IGVsZW1lbnQudHlwZSA6IGVsZW1lbnQudHlwZS5uYW1lKSArIFwiXSBpcyBub3QgYSA8Um91dGU+IGNvbXBvbmVudC4gQWxsIGNvbXBvbmVudCBjaGlsZHJlbiBvZiA8Um91dGVzPiBtdXN0IGJlIGEgPFJvdXRlPiBvciA8UmVhY3QuRnJhZ21lbnQ+XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISghZWxlbWVudC5wcm9wcy5pbmRleCB8fCAhZWxlbWVudC5wcm9wcy5jaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkFuIGluZGV4IHJvdXRlIGNhbm5vdCBoYXZlIGNoaWxkIHJvdXRlcy5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBsZXQgcm91dGUgPSB7XG4gICAgICBpZDogZWxlbWVudC5wcm9wcy5pZCB8fCB0cmVlUGF0aC5qb2luKFwiLVwiKSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIENvbXBvbmVudDogZWxlbWVudC5wcm9wcy5Db21wb25lbnQsXG4gICAgICBpbmRleDogZWxlbWVudC5wcm9wcy5pbmRleCxcbiAgICAgIHBhdGg6IGVsZW1lbnQucHJvcHMucGF0aCxcbiAgICAgIGxvYWRlcjogZWxlbWVudC5wcm9wcy5sb2FkZXIsXG4gICAgICBhY3Rpb246IGVsZW1lbnQucHJvcHMuYWN0aW9uLFxuICAgICAgZXJyb3JFbGVtZW50OiBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCxcbiAgICAgIEVycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSxcbiAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSAhPSBudWxsIHx8IGVsZW1lbnQucHJvcHMuZXJyb3JFbGVtZW50ICE9IG51bGwsXG4gICAgICBzaG91bGRSZXZhbGlkYXRlOiBlbGVtZW50LnByb3BzLnNob3VsZFJldmFsaWRhdGUsXG4gICAgICBoYW5kbGU6IGVsZW1lbnQucHJvcHMuaGFuZGxlLFxuICAgICAgbGF6eTogZWxlbWVudC5wcm9wcy5sYXp5XG4gICAgfTtcblxuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuLCB0cmVlUGF0aCk7XG4gICAgfVxuXG4gICAgcm91dGVzLnB1c2gocm91dGUpO1xuICB9KTtcbiAgcmV0dXJuIHJvdXRlcztcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IG9mIGBtYXRjaFJvdXRlcygpYCBpbnRvIGEgUmVhY3QgZWxlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RFcnJvckJvdW5kYXJ5KHJvdXRlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocm91dGUuQ29tcG9uZW50ICYmIHJvdXRlLmVsZW1lbnQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGZhbHNlLCBcIllvdSBzaG91bGQgbm90IGluY2x1ZGUgYm90aCBgQ29tcG9uZW50YCBhbmQgYGVsZW1lbnRgIG9uIHlvdXIgcm91dGUgLSBcIiArIFwiYGVsZW1lbnRgIHdpbGwgYmUgaWdub3JlZC5cIikgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLkVycm9yQm91bmRhcnkgJiYgcm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYEVycm9yQm91bmRhcnlgIGFuZCBgZXJyb3JFbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBlcnJvckVsZW1lbnRgIHdpbGwgYmUgaWdub3JlZC5cIikgOiB2b2lkIDA7XG4gICAgfVxuICB9IC8vIE5vdGU6IHRoaXMgY2hlY2sgYWxzbyBvY2N1cnMgaW4gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIHNvIHVwZGF0ZVxuICAvLyB0aGVyZSBpZiB5b3UgY2hhbmdlIHRoaXNcblxuXG4gIHJldHVybiBCb29sZWFuKHJvdXRlLkVycm9yQm91bmRhcnkpIHx8IEJvb2xlYW4ocm91dGUuZXJyb3JFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5Um91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZnV0dXJlLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXM6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXg6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEluZGV4XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhLFxuICAgIHJvdXRlcyxcbiAgICBkZXRlY3RFcnJvckJvdW5kYXJ5XG4gIH0pLmluaXRpYWxpemUoKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgeyBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJQcm92aWRlciwgUm91dGVzLCBEYXRhUm91dGVyQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIExvY2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBOYXZpZ2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFJvdXRlQ29udGV4dCBhcyBVTlNBRkVfUm91dGVDb250ZXh0LCBkZXRlY3RFcnJvckJvdW5kYXJ5IGFzIFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5LCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIGFzIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cywgcmVuZGVyTWF0Y2hlcywgdXNlQmxvY2tlciBhcyB1bnN0YWJsZV91c2VCbG9ja2VyLCB1c2VBY3Rpb25EYXRhLCB1c2VBc3luY0Vycm9yLCB1c2VBc3luY1ZhbHVlLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb24sIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSZXZhbGlkYXRvciwgdXNlUm91dGVFcnJvciwgdXNlUm91dGVMb2FkZXJEYXRhLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLy8gVGhlIHByaW1hcnkgZW50cnkgcG9pbnQgYXNzdW1lcyB3ZSdyZSB3b3JraW5nIHdpdGggc3RhbmRhcmQgUmVhY3RET00vUk4sIGJ1dFxuLy8gb2xkZXIgdmVyc2lvbnMgdGhhdCBkbyBub3QgaW5jbHVkZSBgdXNlU3luY0V4dGVybmFsU3RvcmVgIChSZWFjdCAxNi45IC0gMTcueCkuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoZSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSBjb21wYXQgc2hpbSBpcyBuZWVkZWQuXG5pbXBvcnQgeyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gJ3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0nO1xuaW1wb3J0IHsgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgfSBmcm9tICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL3dpdGgtc2VsZWN0b3InO1xuaW1wb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgYXMgYmF0Y2ggfSBmcm9tICcuL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMnO1xuaW1wb3J0IHsgc2V0QmF0Y2ggfSBmcm9tICcuL3V0aWxzL2JhdGNoJztcbmltcG9ydCB7IGluaXRpYWxpemVVc2VTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbm5lY3QgfSBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdCc7XG5pbml0aWFsaXplVXNlU2VsZWN0b3IodXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IpO1xuaW5pdGlhbGl6ZUNvbm5lY3QodXNlU3luY0V4dGVybmFsU3RvcmUpOyAvLyBFbmFibGUgYmF0Y2hlZCB1cGRhdGVzIGluIG91ciBzdWJzY3JpcHRpb25zIGZvciB1c2Vcbi8vIHdpdGggc3RhbmRhcmQgUmVhY3QgcmVuZGVyZXJzIChSZWFjdERPTSwgUmVhY3QgTmF0aXZlKVxuXG5zZXRCYXRjaChiYXRjaCk7XG5leHBvcnQgeyBiYXRjaCB9O1xuZXhwb3J0ICogZnJvbSAnLi9leHBvcnRzJzsiLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBlPXJlcXVpcmUoXCJyZWFjdFwiKTtmdW5jdGlvbiBoKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgaz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpoLGw9ZS51c2VTdGF0ZSxtPWUudXNlRWZmZWN0LG49ZS51c2VMYXlvdXRFZmZlY3QscD1lLnVzZURlYnVnVmFsdWU7ZnVuY3Rpb24gcShhLGIpe3ZhciBkPWIoKSxmPWwoe2luc3Q6e3ZhbHVlOmQsZ2V0U25hcHNob3Q6Yn19KSxjPWZbMF0uaW5zdCxnPWZbMV07bihmdW5jdGlvbigpe2MudmFsdWU9ZDtjLmdldFNuYXBzaG90PWI7cihjKSYmZyh7aW5zdDpjfSl9LFthLGQsYl0pO20oZnVuY3Rpb24oKXtyKGMpJiZnKHtpbnN0OmN9KTtyZXR1cm4gYShmdW5jdGlvbigpe3IoYykmJmcoe2luc3Q6Y30pfSl9LFthXSk7cChkKTtyZXR1cm4gZH1cbmZ1bmN0aW9uIHIoYSl7dmFyIGI9YS5nZXRTbmFwc2hvdDthPWEudmFsdWU7dHJ5e3ZhciBkPWIoKTtyZXR1cm4hayhhLGQpfWNhdGNoKGYpe3JldHVybiEwfX1mdW5jdGlvbiB0KGEsYil7cmV0dXJuIGIoKX12YXIgdT1cInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ/dDpxO2V4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmU9dm9pZCAwIT09ZS51c2VTeW5jRXh0ZXJuYWxTdG9yZT9lLnVzZVN5bmNFeHRlcm5hbFN0b3JlOnU7XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxuLy8gZGlzcGF0Y2ggZm9yIENvbW1vbkpTIGludGVyb3AgbmFtZWQgaW1wb3J0cy5cblxudmFyIHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUsXG4gICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgIHVzZUxheW91dEVmZmVjdCA9IFJlYWN0LnVzZUxheW91dEVmZmVjdCxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTtcbnZhciBkaWRXYXJuT2xkMThBbHBoYSA9IGZhbHNlO1xudmFyIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gZmFsc2U7IC8vIERpc2NsYWltZXI6IFRoaXMgc2hpbSBicmVha3MgbWFueSBvZiB0aGUgcnVsZXMgb2YgUmVhY3QsIGFuZCBvbmx5IHdvcmtzXG4vLyBiZWNhdXNlIG9mIGEgdmVyeSBwYXJ0aWN1bGFyIHNldCBvZiBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGFuZCBhc3N1bXB0aW9uc1xuLy8gLS0gY2hhbmdlIGFueSBvbmUgb2YgdGhlbSBhbmQgaXQgd2lsbCBicmVhay4gVGhlIG1vc3QgaW1wb3J0YW50IGFzc3VtcHRpb25cbi8vIGlzIHRoYXQgdXBkYXRlcyBhcmUgYWx3YXlzIHN5bmNocm9ub3VzLCBiZWNhdXNlIGNvbmN1cnJlbnQgcmVuZGVyaW5nIGlzXG4vLyBvbmx5IGF2YWlsYWJsZSBpbiB2ZXJzaW9ucyBvZiBSZWFjdCB0aGF0IGFsc28gaGF2ZSBhIGJ1aWx0LWluXG4vLyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSBBUEkuIEFuZCB3ZSBvbmx5IHVzZSB0aGlzIHNoaW0gd2hlbiB0aGUgYnVpbHQtaW4gQVBJXG4vLyBkb2VzIG5vdCBleGlzdC5cbi8vXG4vLyBEbyBub3QgYXNzdW1lIHRoYXQgdGhlIGNsZXZlciBoYWNrcyB1c2VkIGJ5IHRoaXMgaG9vayBhbHNvIHdvcmsgaW4gZ2VuZXJhbC5cbi8vIFRoZSBwb2ludCBvZiB0aGlzIHNoaW0gaXMgdG8gcmVwbGFjZSB0aGUgbmVlZCBmb3IgaGFja3MgYnkgb3RoZXIgbGlicmFyaWVzLlxuXG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4vLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbi8vIHdpbGwgbmVlZCB0byB0cmFjayB0aGF0IHRoZW1zZWx2ZXMgYW5kIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZVxuLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuZ2V0U2VydmVyU25hcHNob3QpIHtcbiAge1xuICAgIGlmICghZGlkV2Fybk9sZDE4QWxwaGEpIHtcbiAgICAgIGlmIChSZWFjdC5zdGFydFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkaWRXYXJuT2xkMThBbHBoYSA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJ1lvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgJyArICdkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgJyArICd1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBzaGltIHdpbGwgbm90IHdvcmsgY29ycmVjdGx5LiBVcGdyYWRlICcgKyAndG8gYSBuZXdlciBwcmUtcmVsZWFzZS4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVhZCB0aGUgY3VycmVudCBzbmFwc2hvdCBmcm9tIHRoZSBzdG9yZSBvbiBldmVyeSByZW5kZXIuIEFnYWluLCB0aGlzXG4gIC8vIGJyZWFrcyB0aGUgcnVsZXMgb2YgUmVhY3QsIGFuZCBvbmx5IHdvcmtzIGhlcmUgYmVjYXVzZSBvZiBzcGVjaWZpY1xuICAvLyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLCBtb3N0IGltcG9ydGFudGx5IHRoYXQgdXBkYXRlcyBhcmVcbiAgLy8gYWx3YXlzIHN5bmNocm9ub3VzLlxuXG5cbiAgdmFyIHZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgdmFyIGNhY2hlZFZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICAgICAgaWYgKCFvYmplY3RJcyh2YWx1ZSwgY2FjaGVkVmFsdWUpKSB7XG4gICAgICAgIGVycm9yKCdUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCcpO1xuXG4gICAgICAgIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQmVjYXVzZSB1cGRhdGVzIGFyZSBzeW5jaHJvbm91cywgd2UgZG9uJ3QgcXVldWUgdGhlbS4gSW5zdGVhZCB3ZSBmb3JjZSBhXG4gIC8vIHJlLXJlbmRlciB3aGVuZXZlciB0aGUgc3Vic2NyaWJlZCBzdGF0ZSBjaGFuZ2VzIGJ5IHVwZGF0aW5nIGFuIHNvbWVcbiAgLy8gYXJiaXRyYXJ5IHVzZVN0YXRlIGhvb2suIFRoZW4sIGR1cmluZyByZW5kZXIsIHdlIGNhbGwgZ2V0U25hcHNob3QgdG8gcmVhZFxuICAvLyB0aGUgY3VycmVudCB2YWx1ZS5cbiAgLy9cbiAgLy8gQmVjYXVzZSB3ZSBkb24ndCBhY3R1YWxseSB1c2UgdGhlIHN0YXRlIHJldHVybmVkIGJ5IHRoZSB1c2VTdGF0ZSBob29rLCB3ZVxuICAvLyBjYW4gc2F2ZSBhIGJpdCBvZiBtZW1vcnkgYnkgc3RvcmluZyBvdGhlciBzdHVmZiBpbiB0aGF0IHNsb3QuXG4gIC8vXG4gIC8vIFRvIGltcGxlbWVudCB0aGUgZWFybHkgYmFpbG91dCwgd2UgbmVlZCB0byB0cmFjayBzb21lIHRoaW5ncyBvbiBhIG11dGFibGVcbiAgLy8gb2JqZWN0LiBVc3VhbGx5LCB3ZSB3b3VsZCBwdXQgdGhhdCBpbiBhIHVzZVJlZiBob29rLCBidXQgd2UgY2FuIHN0YXNoIGl0IGluXG4gIC8vIG91ciB1c2VTdGF0ZSBob29rIGluc3RlYWQuXG4gIC8vXG4gIC8vIFRvIGZvcmNlIGEgcmUtcmVuZGVyLCB3ZSBjYWxsIGZvcmNlVXBkYXRlKHtpbnN0fSkuIFRoYXQgd29ya3MgYmVjYXVzZSB0aGVcbiAgLy8gbmV3IG9iamVjdCBhbHdheXMgZmFpbHMgYW4gZXF1YWxpdHkgY2hlY2suXG5cblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoe1xuICAgIGluc3Q6IHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGdldFNuYXBzaG90OiBnZXRTbmFwc2hvdFxuICAgIH1cbiAgfSksXG4gICAgICBpbnN0ID0gX3VzZVN0YXRlWzBdLmluc3QsXG4gICAgICBmb3JjZVVwZGF0ZSA9IF91c2VTdGF0ZVsxXTsgLy8gVHJhY2sgdGhlIGxhdGVzdCBnZXRTbmFwc2hvdCBmdW5jdGlvbiB3aXRoIGEgcmVmLiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbiAgLy8gaW4gdGhlIGxheW91dCBwaGFzZSBzbyB3ZSBjYW4gYWNjZXNzIGl0IGR1cmluZyB0aGUgdGVhcmluZyBjaGVjayB0aGF0XG4gIC8vIGhhcHBlbnMgb24gc3Vic2NyaWJlLlxuXG5cbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpbnN0LnZhbHVlID0gdmFsdWU7XG4gICAgaW5zdC5nZXRTbmFwc2hvdCA9IGdldFNuYXBzaG90OyAvLyBXaGVuZXZlciBnZXRTbmFwc2hvdCBvciBzdWJzY3JpYmUgY2hhbmdlcywgd2UgbmVlZCB0byBjaGVjayBpbiB0aGVcbiAgICAvLyBjb21taXQgcGhhc2UgaWYgdGhlcmUgd2FzIGFuIGludGVybGVhdmVkIG11dGF0aW9uLiBJbiBjb25jdXJyZW50IG1vZGVcbiAgICAvLyB0aGlzIGNhbiBoYXBwZW4gYWxsIHRoZSB0aW1lLCBidXQgZXZlbiBpbiBzeW5jaHJvbm91cyBtb2RlLCBhbiBlYXJsaWVyXG4gICAgLy8gZWZmZWN0IG1heSBoYXZlIG11dGF0ZWQgdGhlIHN0b3JlLlxuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0OiBpbnN0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIHJpZ2h0IGJlZm9yZSBzdWJzY3JpYmluZy4gU3Vic2VxdWVudCBjaGFuZ2VzIHdpbGwgYmVcbiAgICAvLyBkZXRlY3RlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0OiBpbnN0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlU3RvcmVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBUT0RPOiBCZWNhdXNlIHRoZXJlIGlzIG5vIGNyb3NzLXJlbmRlcmVyIEFQSSBmb3IgYmF0Y2hpbmcgdXBkYXRlcywgaXQnc1xuICAgICAgLy8gdXAgdG8gdGhlIGNvbnN1bWVyIG9mIHRoaXMgbGlicmFyeSB0byB3cmFwIHRoZWlyIHN1YnNjcmlwdGlvbiBldmVudFxuICAgICAgLy8gd2l0aCB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcy4gU2hvdWxkIHdlIHRyeSB0byBkZXRlY3Qgd2hlbiB0aGlzIGlzbid0XG4gICAgICAvLyB0aGUgY2FzZSBhbmQgcHJpbnQgYSB3YXJuaW5nIGluIGRldmVsb3BtZW50P1xuICAgICAgLy8gVGhlIHN0b3JlIGNoYW5nZWQuIENoZWNrIGlmIHRoZSBzbmFwc2hvdCBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgd2VcbiAgICAgIC8vIHJlYWQgZnJvbSB0aGUgc3RvcmUuXG4gICAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgICAvLyBGb3JjZSBhIHJlLXJlbmRlci5cbiAgICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICAgIGluc3Q6IGluc3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTsgLy8gU3Vic2NyaWJlIHRvIHRoZSBzdG9yZSBhbmQgcmV0dXJuIGEgY2xlYW4tdXAgZnVuY3Rpb24uXG5cblxuICAgIHJldHVybiBzdWJzY3JpYmUoaGFuZGxlU3RvcmVDaGFuZ2UpO1xuICB9LCBbc3Vic2NyaWJlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICB2YXIgbGF0ZXN0R2V0U25hcHNob3QgPSBpbnN0LmdldFNuYXBzaG90O1xuICB2YXIgcHJldlZhbHVlID0gaW5zdC52YWx1ZTtcblxuICB0cnkge1xuICAgIHZhciBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgIHJldHVybiAhb2JqZWN0SXMocHJldlZhbHVlLCBuZXh0VmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuICAvLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbiAgLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4gIC8vIGZyb20gYGdldFNuYXBzaG90YC5cbiAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnKTtcblxudmFyIGlzU2VydmVyRW52aXJvbm1lbnQgPSAhY2FuVXNlRE9NO1xuXG52YXIgc2hpbSA9IGlzU2VydmVyRW52aXJvbm1lbnQgPyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxIDogdXNlU3luY0V4dGVybmFsU3RvcmU7XG52YXIgdXNlU3luY0V4dGVybmFsU3RvcmUkMiA9IFJlYWN0LnVzZVN5bmNFeHRlcm5hbFN0b3JlICE9PSB1bmRlZmluZWQgPyBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZSA6IHNoaW07XG5cbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBoPXJlcXVpcmUoXCJyZWFjdFwiKSxuPXJlcXVpcmUoXCJ1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltXCIpO2Z1bmN0aW9uIHAoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBxPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOnAscj1uLnVzZVN5bmNFeHRlcm5hbFN0b3JlLHQ9aC51c2VSZWYsdT1oLnVzZUVmZmVjdCx2PWgudXNlTWVtbyx3PWgudXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3I9ZnVuY3Rpb24oYSxiLGUsbCxnKXt2YXIgYz10KG51bGwpO2lmKG51bGw9PT1jLmN1cnJlbnQpe3ZhciBmPXtoYXNWYWx1ZTohMSx2YWx1ZTpudWxsfTtjLmN1cnJlbnQ9Zn1lbHNlIGY9Yy5jdXJyZW50O2M9dihmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7aWYoIWMpe2M9ITA7ZD1hO2E9bChhKTtpZih2b2lkIDAhPT1nJiZmLmhhc1ZhbHVlKXt2YXIgYj1mLnZhbHVlO2lmKGcoYixhKSlyZXR1cm4gaz1ifXJldHVybiBrPWF9Yj1rO2lmKHEoZCxhKSlyZXR1cm4gYjt2YXIgZT1sKGEpO2lmKHZvaWQgMCE9PWcmJmcoYixlKSlyZXR1cm4gYjtkPWE7cmV0dXJuIGs9ZX12YXIgYz0hMSxkLGssbT12b2lkIDA9PT1lP251bGw6ZTtyZXR1cm5bZnVuY3Rpb24oKXtyZXR1cm4gYShiKCkpfSxudWxsPT09bT92b2lkIDA6ZnVuY3Rpb24oKXtyZXR1cm4gYShtKCkpfV19LFtiLGUsbCxnXSk7dmFyIGQ9cihhLGNbMF0sY1sxXSk7XG51KGZ1bmN0aW9uKCl7Zi5oYXNWYWx1ZT0hMDtmLnZhbHVlPWR9LFtkXSk7dyhkKTtyZXR1cm4gZH07XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiB1c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltL3dpdGgtc2VsZWN0b3IuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHNoaW0gPSByZXF1aXJlKCd1c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltJyk7XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciB1c2VTeW5jRXh0ZXJuYWxTdG9yZSA9IHNoaW0udXNlU3luY0V4dGVybmFsU3RvcmU7XG5cbi8vIGZvciBDb21tb25KUyBpbnRlcm9wLlxuXG52YXIgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICB1c2VNZW1vID0gUmVhY3QudXNlTWVtbyxcbiAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTsgLy8gU2FtZSBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSwgYnV0IHN1cHBvcnRzIHNlbGVjdG9yIGFuZCBpc0VxdWFsIGFyZ3VtZW50cy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QsIHNlbGVjdG9yLCBpc0VxdWFsKSB7XG4gIC8vIFVzZSB0aGlzIHRvIHRyYWNrIHRoZSByZW5kZXJlZCBzbmFwc2hvdC5cbiAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpbnN0O1xuXG4gIGlmIChpbnN0UmVmLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICBpbnN0ID0ge1xuICAgICAgaGFzVmFsdWU6IGZhbHNlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gIH0gZWxzZSB7XG4gICAgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgfVxuXG4gIHZhciBfdXNlTWVtbyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIC8vIFRyYWNrIHRoZSBtZW1vaXplZCBzdGF0ZSB1c2luZyBjbG9zdXJlIHZhcmlhYmxlcyB0aGF0IGFyZSBsb2NhbCB0byB0aGlzXG4gICAgLy8gbWVtb2l6ZWQgaW5zdGFuY2Ugb2YgYSBnZXRTbmFwc2hvdCBmdW5jdGlvbi4gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgYVxuICAgIC8vIHVzZVJlZiBob29rLCBiZWNhdXNlIHRoYXQgc3RhdGUgd291bGQgYmUgc2hhcmVkIGFjcm9zcyBhbGwgY29uY3VycmVudFxuICAgIC8vIGNvcGllcyBvZiB0aGUgaG9vay9jb21wb25lbnQuXG4gICAgdmFyIGhhc01lbW8gPSBmYWxzZTtcbiAgICB2YXIgbWVtb2l6ZWRTbmFwc2hvdDtcbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3Rpb247XG5cbiAgICB2YXIgbWVtb2l6ZWRTZWxlY3RvciA9IGZ1bmN0aW9uIChuZXh0U25hcHNob3QpIHtcbiAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB0aGUgaG9vayBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIG1lbW9pemVkIHJlc3VsdC5cbiAgICAgICAgaGFzTWVtbyA9IHRydWU7XG4gICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG5cbiAgICAgICAgdmFyIF9uZXh0U2VsZWN0aW9uID0gc2VsZWN0b3IobmV4dFNuYXBzaG90KTtcblxuICAgICAgICBpZiAoaXNFcXVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gRXZlbiBpZiB0aGUgc2VsZWN0b3IgaGFzIGNoYW5nZWQsIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgc2VsZWN0aW9uXG4gICAgICAgICAgLy8gbWF5IGJlIGVxdWFsIHRvIHRoZSBuZXcgc2VsZWN0aW9uLiBXZSBzaG91bGQgYXR0ZW1wdCB0byByZXVzZSB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IHZhbHVlIGlmIHBvc3NpYmxlLCB0byBwcmVzZXJ2ZSBkb3duc3RyZWFtIG1lbW9pemF0aW9ucy5cbiAgICAgICAgICBpZiAoaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb24gPSBpbnN0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBfbmV4dFNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgbWVtb2l6ZWRTZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZW1vaXplZFNlbGVjdGlvbiA9IF9uZXh0U2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gX25leHRTZWxlY3Rpb247XG4gICAgICB9IC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuXG5cbiAgICAgIC8vIFdlIG1heSBiZSBhYmxlIHRvIHJldXNlIHRoZSBwcmV2aW91cyBpbnZvY2F0aW9uJ3MgcmVzdWx0LlxuICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IG1lbW9pemVkU25hcHNob3Q7XG4gICAgICB2YXIgcHJldlNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuXG4gICAgICBpZiAob2JqZWN0SXMocHJldlNuYXBzaG90LCBuZXh0U25hcHNob3QpKSB7XG4gICAgICAgIC8vIFRoZSBzbmFwc2hvdCBpcyB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuIFJldXNlIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uXG4gICAgICAgIHJldHVybiBwcmV2U2VsZWN0aW9uO1xuICAgICAgfSAvLyBUaGUgc25hcHNob3QgaGFzIGNoYW5nZWQsIHNvIHdlIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBzZWxlY3Rpb24uXG5cblxuICAgICAgLy8gVGhlIHNuYXBzaG90IGhhcyBjaGFuZ2VkLCBzbyB3ZSBuZWVkIHRvIGNvbXB1dGUgYSBuZXcgc2VsZWN0aW9uLlxuICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpOyAvLyBJZiBhIGN1c3RvbSBpc0VxdWFsIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB1c2UgdGhhdCB0byBjaGVjayBpZiB0aGUgZGF0YVxuICAgICAgLy8gaGFzIGNoYW5nZWQuIElmIGl0IGhhc24ndCwgcmV0dXJuIHRoZSBwcmV2aW91cyBzZWxlY3Rpb24uIFRoYXQgc2lnbmFsc1xuICAgICAgLy8gdG8gUmVhY3QgdGhhdCB0aGUgc2VsZWN0aW9ucyBhcmUgY29uY2VwdHVhbGx5IGVxdWFsLCBhbmQgd2UgY2FuIGJhaWxcbiAgICAgIC8vIG91dCBvZiByZW5kZXJpbmcuXG5cbiAgICAgIC8vIElmIGEgY3VzdG9tIGlzRXF1YWwgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIHVzZSB0aGF0IHRvIGNoZWNrIGlmIHRoZSBkYXRhXG4gICAgICAvLyBoYXMgY2hhbmdlZC4gSWYgaXQgaGFzbid0LCByZXR1cm4gdGhlIHByZXZpb3VzIHNlbGVjdGlvbi4gVGhhdCBzaWduYWxzXG4gICAgICAvLyB0byBSZWFjdCB0aGF0IHRoZSBzZWxlY3Rpb25zIGFyZSBjb25jZXB0dWFsbHkgZXF1YWwsIGFuZCB3ZSBjYW4gYmFpbFxuICAgICAgLy8gb3V0IG9mIHJlbmRlcmluZy5cbiAgICAgIGlmIChpc0VxdWFsICE9PSB1bmRlZmluZWQgJiYgaXNFcXVhbChwcmV2U2VsZWN0aW9uLCBuZXh0U2VsZWN0aW9uKSkge1xuICAgICAgICByZXR1cm4gcHJldlNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgIG1lbW9pemVkU2VsZWN0aW9uID0gbmV4dFNlbGVjdGlvbjtcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0aW9uO1xuICAgIH07IC8vIEFzc2lnbmluZyB0aGlzIHRvIGEgY29uc3RhbnQgc28gdGhhdCBGbG93IGtub3dzIGl0IGNhbid0IGNoYW5nZS5cblxuXG4gICAgLy8gQXNzaWduaW5nIHRoaXMgdG8gYSBjb25zdGFudCBzbyB0aGF0IEZsb3cga25vd3MgaXQgY2FuJ3QgY2hhbmdlLlxuICAgIHZhciBtYXliZUdldFNlcnZlclNuYXBzaG90ID0gZ2V0U2VydmVyU25hcHNob3QgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBnZXRTZXJ2ZXJTbmFwc2hvdDtcblxuICAgIHZhciBnZXRTbmFwc2hvdFdpdGhTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0U2VydmVyU25hcHNob3RXaXRoU2VsZWN0b3IgPSBtYXliZUdldFNlcnZlclNuYXBzaG90ID09PSBudWxsID8gdW5kZWZpbmVkIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG1lbW9pemVkU2VsZWN0b3IobWF5YmVHZXRTZXJ2ZXJTbmFwc2hvdCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBbZ2V0U25hcHNob3RXaXRoU2VsZWN0b3IsIGdldFNlcnZlclNuYXBzaG90V2l0aFNlbGVjdG9yXTtcbiAgfSwgW2dldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCwgc2VsZWN0b3IsIGlzRXF1YWxdKSxcbiAgICAgIGdldFNlbGVjdGlvbiA9IF91c2VNZW1vWzBdLFxuICAgICAgZ2V0U2VydmVyU2VsZWN0aW9uID0gX3VzZU1lbW9bMV07XG5cbiAgdmFyIHZhbHVlID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTZWxlY3Rpb24sIGdldFNlcnZlclNlbGVjdGlvbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaW5zdC5oYXNWYWx1ZSA9IHRydWU7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICB9LCBbdmFsdWVdKTtcbiAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIvLyBEZWZhdWx0IHRvIGEgZHVtbXkgXCJiYXRjaFwiIGltcGxlbWVudGF0aW9uIHRoYXQganVzdCBydW5zIHRoZSBjYWxsYmFja1xuZnVuY3Rpb24gZGVmYXVsdE5vb3BCYXRjaChjYWxsYmFjaykge1xuICBjYWxsYmFjaygpO1xufVxuXG5sZXQgYmF0Y2ggPSBkZWZhdWx0Tm9vcEJhdGNoOyAvLyBBbGxvdyBpbmplY3RpbmcgYW5vdGhlciBiYXRjaGluZyBmdW5jdGlvbiBsYXRlclxuXG5leHBvcnQgY29uc3Qgc2V0QmF0Y2ggPSBuZXdCYXRjaCA9PiBiYXRjaCA9IG5ld0JhdGNoOyAvLyBTdXBwbHkgYSBnZXR0ZXIganVzdCB0byBza2lwIGRlYWxpbmcgd2l0aCBFU00gYmluZGluZ3NcblxuZXhwb3J0IGNvbnN0IGdldEJhdGNoID0gKCkgPT4gYmF0Y2g7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRGVidWdWYWx1ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCBhcyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi91c2VSZWR1eENvbnRleHQnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgbm90SW5pdGlhbGl6ZWQgfSBmcm9tICcuLi91dGlscy91c2VTeW5jRXh0ZXJuYWxTdG9yZSc7XG5sZXQgdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3IgPSBub3RJbml0aWFsaXplZDtcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplVXNlU2VsZWN0b3IgPSBmbiA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZm47XG59O1xuXG5jb25zdCByZWZFcXVhbGl0eSA9IChhLCBiKSA9PiBhID09PSBiO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VTZWxlY3RvcmAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29udGV4dH0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVNlbGVjdG9yYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9ySG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0ID0gY29udGV4dCA9PT0gUmVhY3RSZWR1eENvbnRleHQgPyB1c2VEZWZhdWx0UmVkdXhDb250ZXh0IDogKCkgPT4gdXNlQ29udGV4dChjb250ZXh0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVNlbGVjdG9yKHNlbGVjdG9yLCBlcXVhbGl0eUZuID0gcmVmRXF1YWxpdHkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBtdXN0IHBhc3MgYSBzZWxlY3RvciB0byB1c2VTZWxlY3RvcmApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGEgc2VsZWN0b3IgdG8gdXNlU2VsZWN0b3JgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlcXVhbGl0eUZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgcGFzcyBhIGZ1bmN0aW9uIGFzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIHRvIHVzZVNlbGVjdG9yYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZVxuICAgIH0gPSB1c2VSZWR1eENvbnRleHQoKTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmVXaXRoU2VsZWN0b3Ioc3Vic2NyaXB0aW9uLmFkZE5lc3RlZFN1Yiwgc3RvcmUuZ2V0U3RhdGUsIGdldFNlcnZlclN0YXRlIHx8IHN0b3JlLmdldFN0YXRlLCBzZWxlY3RvciwgZXF1YWxpdHlGbik7XG4gICAgdXNlRGVidWdWYWx1ZShzZWxlY3RlZFN0YXRlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZSdzIHN0YXRlLiBUaGlzIGhvb2sgdGFrZXMgYSBzZWxlY3RvciBmdW5jdGlvblxyXG4gKiBhcyBhbiBhcmd1bWVudC4gVGhlIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBzdG9yZSBzdGF0ZS5cclxuICpcclxuICogVGhpcyBob29rIHRha2VzIGFuIG9wdGlvbmFsIGVxdWFsaXR5IGNvbXBhcmlzb24gZnVuY3Rpb24gYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXJcclxuICogdGhhdCBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSB0aGUgd2F5IHRoZSBzZWxlY3RlZCBzdGF0ZSBpcyBjb21wYXJlZCB0byBkZXRlcm1pbmVcclxuICogd2hldGhlciB0aGUgY29tcG9uZW50IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZWxlY3RvciB0aGUgc2VsZWN0b3IgZnVuY3Rpb25cclxuICogQHBhcmFtIHtGdW5jdGlvbj19IGVxdWFsaXR5Rm4gdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGRldGVybWluZSBlcXVhbGl0eVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7YW55fSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICpcclxuICogQGV4YW1wbGVcclxuICpcclxuICogaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBjb3VudGVyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY291bnRlcilcclxuICogICByZXR1cm4gPGRpdj57Y291bnRlcn08L2Rpdj5cclxuICogfVxyXG4gKi9cblxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yID0gLyojX19QVVJFX18qL2NyZWF0ZVNlbGVjdG9ySG9vaygpOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxyXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHV4Q29udGV4dCgpIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbnRleHRWYWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IGZpbmQgcmVhY3QtcmVkdXggY29udGV4dCB2YWx1ZTsgcGxlYXNlIGVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHdyYXBwZWQgaW4gYSA8UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gY29udGV4dFZhbHVlO1xufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUmVhY3RSZWR1eENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RSZWR1eENvbnRleHQuZGlzcGxheU5hbWUgPSAnUmVhY3RSZWR1eCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXhDb250ZXh0OyIsImV4cG9ydCBjb25zdCBub3RJbml0aWFsaXplZCA9ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCd1U0VTIG5vdCBpbml0aWFsaXplZCEnKTtcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmNvbnN0IF9leGNsdWRlZCA9IFtcInJlYWN0UmVkdXhGb3J3YXJkZWRSZWZcIl07XG5cbi8qIGVzbGludC1kaXNhYmxlIHZhbGlkLWpzZG9jLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVmFsaWRFbGVtZW50VHlwZSwgaXNDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuLi9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeSc7XG5pbXBvcnQgeyBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3J5IH0gZnJvbSAnLi4vY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMnO1xuaW1wb3J0IHsgbWFwU3RhdGVUb1Byb3BzRmFjdG9yeSB9IGZyb20gJy4uL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzJztcbmltcG9ydCB7IG1lcmdlUHJvcHNGYWN0b3J5IH0gZnJvbSAnLi4vY29ubmVjdC9tZXJnZVByb3BzJztcbmltcG9ydCB7IGNyZWF0ZVN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi4vdXRpbHMvdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi91dGlscy93YXJuaW5nJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JztcbmltcG9ydCB7IG5vdEluaXRpYWxpemVkIH0gZnJvbSAnLi4vdXRpbHMvdXNlU3luY0V4dGVybmFsU3RvcmUnO1xubGV0IHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gbm90SW5pdGlhbGl6ZWQ7XG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUNvbm5lY3QgPSBmbiA9PiB7XG4gIHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gZm47XG59OyAvLyBEZWZpbmUgc29tZSBjb25zdGFudCBhcnJheXMganVzdCB0byBhdm9pZCByZS1jcmVhdGluZyB0aGVzZVxuXG5jb25zdCBFTVBUWV9BUlJBWSA9IFtudWxsLCAwXTtcbmNvbnN0IE5PX1NVQlNDUklQVElPTl9BUlJBWSA9IFtudWxsLCBudWxsXTsgLy8gQXR0ZW1wdHMgdG8gc3RyaW5naWZ5IHdoYXRldmVyIG5vdC1yZWFsbHktYS1jb21wb25lbnQgdmFsdWUgd2Ugd2VyZSBnaXZlblxuLy8gZm9yIGxvZ2dpbmcgaW4gYW4gZXJyb3IgbWVzc2FnZVxuXG5jb25zdCBzdHJpbmdpZnlDb21wb25lbnQgPSBDb21wID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5cbi8vIFRoaXMgaXMgXCJqdXN0XCIgYSBgdXNlTGF5b3V0RWZmZWN0YCwgYnV0IHdpdGggdHdvIG1vZGlmaWNhdGlvbnM6XG4vLyAtIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIGB1c2VFZmZlY3RgIGluIFNTUiB0byBhdm9pZCBhbm5veWluZyB3YXJuaW5nc1xuLy8gLSB3ZSBleHRyYWN0IHRoaXMgdG8gYSBzZXBhcmF0ZSBmdW5jdGlvbiB0byBhdm9pZCBjbG9zaW5nIG92ZXIgdmFsdWVzXG4vLyAgIGFuZCBjYXVzaW5nIG1lbW9yeSBsZWFrc1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFdpdGhBcmdzKGVmZmVjdEZ1bmMsIGVmZmVjdEFyZ3MsIGRlcGVuZGVuY2llcykge1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IGVmZmVjdEZ1bmMoLi4uZWZmZWN0QXJncyksIGRlcGVuZGVuY2llcyk7XG59IC8vIEVmZmVjdCBjYWxsYmFjaywgZXh0cmFjdGVkOiBhc3NpZ24gdGhlIGxhdGVzdCBwcm9wcyB2YWx1ZXMgdG8gcmVmcyBmb3IgbGF0ZXIgdXNhZ2VcblxuXG5mdW5jdGlvbiBjYXB0dXJlV3JhcHBlclByb3BzKGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgd3JhcHBlclByb3BzLCAvLyBhY3R1YWxDaGlsZFByb3BzOiB1bmtub3duLFxuY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3Vicykge1xuICAvLyBXZSB3YW50IHRvIGNhcHR1cmUgdGhlIHdyYXBwZXIgcHJvcHMgYW5kIGNoaWxkIHByb3BzIHdlIHVzZWQgZm9yIGxhdGVyIGNvbXBhcmlzb25zXG4gIGxhc3RXcmFwcGVyUHJvcHMuY3VycmVudCA9IHdyYXBwZXJQcm9wcztcbiAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICB9XG59IC8vIEVmZmVjdCBjYWxsYmFjaywgZXh0cmFjdGVkOiBzdWJzY3JpYmUgdG8gdGhlIFJlZHV4IHN0b3JlIG9yIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yLFxuLy8gY2hlY2sgZm9yIHVwZGF0ZXMgYWZ0ZXIgZGlzcGF0Y2hlZCBhY3Rpb25zLCBhbmQgdHJpZ2dlciByZS1yZW5kZXJzLlxuXG5cbmZ1bmN0aW9uIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCBjaGlsZFByb3BzU2VsZWN0b3IsIGxhc3RXcmFwcGVyUHJvcHMsIGxhc3RDaGlsZFByb3BzLCByZW5kZXJJc1NjaGVkdWxlZCwgaXNNb3VudGVkLCBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLCBub3RpZnlOZXN0ZWRTdWJzLCAvLyBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoOiBSZWFjdC5EaXNwYXRjaDxhbnk+LFxuYWRkaXRpb25hbFN1YnNjcmliZUxpc3RlbmVyKSB7XG4gIC8vIElmIHdlJ3JlIG5vdCBzdWJzY3JpYmVkIHRvIHRoZSBzdG9yZSwgbm90aGluZyB0byBkbyBoZXJlXG4gIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gKCkgPT4ge307IC8vIENhcHR1cmUgdmFsdWVzIGZvciBjaGVja2luZyBpZiBhbmQgd2hlbiB0aGlzIGNvbXBvbmVudCB1bm1vdW50c1xuXG4gIGxldCBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRocm93bkVycm9yID0gbnVsbDsgLy8gV2UnbGwgcnVuIHRoaXMgY2FsbGJhY2sgZXZlcnkgdGltZSBhIHN0b3JlIHN1YnNjcmlwdGlvbiB1cGRhdGUgcHJvcGFnYXRlcyB0byB0aGlzIGNvbXBvbmVudFxuXG4gIGNvbnN0IGNoZWNrRm9yVXBkYXRlcyA9ICgpID0+IHtcbiAgICBpZiAoZGlkVW5zdWJzY3JpYmUgfHwgIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAvLyBEb24ndCBydW4gc3RhbGUgbGlzdGVuZXJzLlxuICAgICAgLy8gUmVkdXggZG9lc24ndCBndWFyYW50ZWUgdW5zdWJzY3JpcHRpb25zIGhhcHBlbiB1bnRpbCBuZXh0IGRpc3BhdGNoLlxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVE9ETyBXZSdyZSBjdXJyZW50bHkgY2FsbGluZyBnZXRTdGF0ZSBvdXJzZWx2ZXMgaGVyZSwgcmF0aGVyIHRoYW4gbGV0dGluZyBgdVNFU2AgZG8gaXRcblxuXG4gICAgY29uc3QgbGF0ZXN0U3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgbGV0IG5ld0NoaWxkUHJvcHMsIGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFjdHVhbGx5IHJ1biB0aGUgc2VsZWN0b3Igd2l0aCB0aGUgbW9zdCByZWNlbnQgc3RvcmUgc3RhdGUgYW5kIHdyYXBwZXIgcHJvcHNcbiAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmVcbiAgICAgIG5ld0NoaWxkUHJvcHMgPSBjaGlsZFByb3BzU2VsZWN0b3IobGF0ZXN0U3RvcmVTdGF0ZSwgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgICBsYXN0VGhyb3duRXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIGxhc3RUaHJvd25FcnJvciA9IG51bGw7XG4gICAgfSAvLyBJZiB0aGUgY2hpbGQgcHJvcHMgaGF2ZW4ndCBjaGFuZ2VkLCBub3RoaW5nIHRvIGRvIGhlcmUgLSBjYXNjYWRlIHRoZSBzdWJzY3JpcHRpb24gdXBkYXRlXG5cblxuICAgIGlmIChuZXdDaGlsZFByb3BzID09PSBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50KSB7XG4gICAgICBpZiAoIXJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQpIHtcbiAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTYXZlIHJlZmVyZW5jZXMgdG8gdGhlIG5ldyBjaGlsZCBwcm9wcy4gIE5vdGUgdGhhdCB3ZSB0cmFjayB0aGUgXCJjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZVwiXG4gICAgICAvLyBhcyBhIHJlZiBpbnN0ZWFkIG9mIGEgdXNlU3RhdGUvdXNlUmVkdWNlciBiZWNhdXNlIHdlIG5lZWQgYSB3YXkgdG8gZGV0ZXJtaW5lIGlmIHRoYXQgdmFsdWUgaGFzXG4gICAgICAvLyBiZWVuIHByb2Nlc3NlZC4gIElmIHRoaXMgd2VudCBpbnRvIHVzZVN0YXRlL3VzZVJlZHVjZXIsIHdlIGNvdWxkbid0IGNsZWFyIG91dCB0aGUgdmFsdWUgd2l0aG91dFxuICAgICAgLy8gZm9yY2luZyBhbm90aGVyIHJlLXJlbmRlciwgd2hpY2ggd2UgZG9uJ3Qgd2FudC5cbiAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50ID0gbmV3Q2hpbGRQcm9wcztcbiAgICAgIHJlbmRlcklzU2NoZWR1bGVkLmN1cnJlbnQgPSB0cnVlOyAvLyBUT0RPIFRoaXMgaXMgaGFja3kgYW5kIG5vdCBob3cgYHVTRVNgIGlzIG1lYW50IHRvIGJlIHVzZWRcbiAgICAgIC8vIFRyaWdnZXIgdGhlIFJlYWN0IGB1c2VTeW5jRXh0ZXJuYWxTdG9yZWAgc3Vic2NyaWJlclxuXG4gICAgICBhZGRpdGlvbmFsU3Vic2NyaWJlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07IC8vIEFjdHVhbGx5IHN1YnNjcmliZSB0byB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IgKG9yIHN0b3JlKVxuXG5cbiAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBjaGVja0ZvclVwZGF0ZXM7XG4gIHN1YnNjcmlwdGlvbi50cnlTdWJzY3JpYmUoKTsgLy8gUHVsbCBkYXRhIGZyb20gdGhlIHN0b3JlIGFmdGVyIGZpcnN0IHJlbmRlciBpbiBjYXNlIHRoZSBzdG9yZSBoYXNcbiAgLy8gY2hhbmdlZCBzaW5jZSB3ZSBiZWdhbi5cblxuICBjaGVja0ZvclVwZGF0ZXMoKTtcblxuICBjb25zdCB1bnN1YnNjcmliZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgZGlkVW5zdWJzY3JpYmUgPSB0cnVlO1xuICAgIHN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gbnVsbDtcblxuICAgIGlmIChsYXN0VGhyb3duRXJyb3IpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB3ZSBjYXVnaHQgYW4gZXJyb3IgZHVlIHRvIGEgYmFkIG1hcFN0YXRlIGZ1bmN0aW9uLCBidXQgdGhlXG4gICAgICAvLyBwYXJlbnQgcmUtcmVuZGVyZWQgd2l0aG91dCB0aGlzIGNvbXBvbmVudCBhbmQgd2UncmUgYWJvdXQgdG8gdW5tb3VudC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbiBhcyBsb25nIGFzIHdlIGRvIHRvcC1kb3duIHN1YnNjcmlwdGlvbnMgY29ycmVjdGx5LCBidXRcbiAgICAgIC8vIGlmIHdlIGV2ZXIgZG8gdGhvc2Ugd3JvbmcsIHRoaXMgdGhyb3cgd2lsbCBzdXJmYWNlIHRoZSBlcnJvciBpbiBvdXIgdGVzdHMuXG4gICAgICAvLyBJbiB0aGF0IGNhc2UsIHRocm93IHRoZSBlcnJvciBmcm9tIGhlcmUgc28gaXQgZG9lc24ndCBnZXQgbG9zdC5cbiAgICAgIHRocm93IGxhc3RUaHJvd25FcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVuc3Vic2NyaWJlV3JhcHBlcjtcbn0gLy8gUmVkdWNlciBpbml0aWFsIHN0YXRlIGNyZWF0aW9uIGZvciBvdXIgdXBkYXRlIHJlZHVjZXJcblxuXG5jb25zdCBpbml0U3RhdGVVcGRhdGVzID0gKCkgPT4gRU1QVFlfQVJSQVk7XG5cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG4vKipcclxuICogSW5mZXJzIHRoZSB0eXBlIG9mIHByb3BzIHRoYXQgYSBjb25uZWN0b3Igd2lsbCBpbmplY3QgaW50byBhIGNvbXBvbmVudC5cclxuICovXG5cblxubGV0IGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZFB1cmVPcHRpb24gPSBmYWxzZTtcbi8qKlxyXG4gKiBDb25uZWN0cyBhIFJlYWN0IGNvbXBvbmVudCB0byBhIFJlZHV4IHN0b3JlLlxyXG4gKlxyXG4gKiAtIFdpdGhvdXQgYXJndW1lbnRzLCBqdXN0IHdyYXBzIHRoZSBjb21wb25lbnQsIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGJlaGF2aW9yIC8gcHJvcHNcclxuICpcclxuICogLSBJZiAyIHBhcmFtcyBhcmUgcGFzc2VkICgzcmQgcGFyYW0sIG1lcmdlUHJvcHMsIGlzIHNraXBwZWQpLCBkZWZhdWx0IGJlaGF2aW9yXHJcbiAqIGlzIHRvIG92ZXJyaWRlIG93blByb3BzIChhcyBzdGF0ZWQgaW4gdGhlIGRvY3MpLCBzbyB3aGF0IHJlbWFpbnMgaXMgZXZlcnl0aGluZyB0aGF0J3NcclxuICogbm90IGEgc3RhdGUgb3IgZGlzcGF0Y2ggcHJvcFxyXG4gKlxyXG4gKiAtIFdoZW4gM3JkIHBhcmFtIGlzIHBhc3NlZCwgd2UgZG9uJ3Qga25vdyBpZiBvd25Qcm9wcyBwcm9wYWdhdGUgYW5kIHdoZXRoZXIgdGhleVxyXG4gKiBzaG91bGQgYmUgdmFsaWQgY29tcG9uZW50IHByb3BzLCBiZWNhdXNlIGl0IGRlcGVuZHMgb24gbWVyZ2VQcm9wcyBpbXBsZW1lbnRhdGlvbi5cclxuICogQXMgc3VjaCwgaXQgaXMgdGhlIHVzZXIncyByZXNwb25zaWJpbGl0eSB0byBleHRlbmQgb3duUHJvcHMgaW50ZXJmYWNlIGZyb20gc3RhdGUgb3JcclxuICogZGlzcGF0Y2ggcHJvcHMgb3IgYm90aCB3aGVuIGFwcGxpY2FibGVcclxuICpcclxuICogQHBhcmFtIG1hcFN0YXRlVG9Qcm9wcyBBIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdmFsdWVzIGZyb20gc3RhdGVcclxuICogQHBhcmFtIG1hcERpc3BhdGNoVG9Qcm9wcyBTZXR1cCBmb3IgZGlzcGF0Y2hpbmcgYWN0aW9uc1xyXG4gKiBAcGFyYW0gbWVyZ2VQcm9wcyBPcHRpb25hbCBjYWxsYmFjayB0byBtZXJnZSBzdGF0ZSBhbmQgZGlzcGF0Y2ggcHJvcHMgdG9nZXRoZXJcclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgY29uZmlndXJpbmcgdGhlIGNvbm5lY3Rpb25cclxuICpcclxuICovXG5cbmZ1bmN0aW9uIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIHtcbiAgLy8gVGhlIGBwdXJlYCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZCwgc28gVFMgZG9lc24ndCBsaWtlIHVzIGRlc3RydWN0dXJpbmcgdGhpcyB0byBjaGVjayBpdHMgZXhpc3RlbmNlLlxuICAvLyBAdHMtaWdub3JlXG4gIHB1cmUsXG4gIGFyZVN0YXRlc0VxdWFsID0gc3RyaWN0RXF1YWwsXG4gIGFyZU93blByb3BzRXF1YWwgPSBzaGFsbG93RXF1YWwsXG4gIGFyZVN0YXRlUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IHNoYWxsb3dFcXVhbCxcbiAgLy8gdXNlIFJlYWN0J3MgZm9yd2FyZFJlZiB0byBleHBvc2UgYSByZWYgb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50XG4gIGZvcndhcmRSZWYgPSBmYWxzZSxcbiAgLy8gdGhlIGNvbnRleHQgY29uc3VtZXIgdG8gdXNlXG4gIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dFxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHB1cmUgIT09IHVuZGVmaW5lZCAmJiAhaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbikge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkUHVyZU9wdGlvbiA9IHRydWU7XG4gICAgICB3YXJuaW5nKCdUaGUgYHB1cmVgIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBgY29ubmVjdGAgaXMgbm93IGFsd2F5cyBhIFwicHVyZS9tZW1vaXplZFwiIGNvbXBvbmVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0O1xuICBjb25zdCBpbml0TWFwU3RhdGVUb1Byb3BzID0gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpO1xuICBjb25zdCBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICBjb25zdCBpbml0TWVyZ2VQcm9wcyA9IG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpO1xuICBjb25zdCBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMgPSBCb29sZWFuKG1hcFN0YXRlVG9Qcm9wcyk7XG5cbiAgY29uc3Qgd3JhcFdpdGhDb25uZWN0ID0gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWlzVmFsaWRFbGVtZW50VHlwZShXcmFwcGVkQ29tcG9uZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGEgY29tcG9uZW50IHRvIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBjb25uZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7c3RyaW5naWZ5Q29tcG9uZW50KFdyYXBwZWRDb21wb25lbnQpfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSBgQ29ubmVjdCgke3dyYXBwZWRDb21wb25lbnROYW1lfSlgO1xuICAgIGNvbnN0IHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMgPSB7XG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lLFxuICAgICAgV3JhcHBlZENvbXBvbmVudCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMsXG4gICAgICBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgY29uc3QgW3Byb3BzQ29udGV4dCwgcmVhY3RSZWR1eEZvcndhcmRlZFJlZiwgd3JhcHBlclByb3BzXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBEaXN0aW5ndWlzaCBiZXR3ZWVuIGFjdHVhbCBcImRhdGFcIiBwcm9wcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSB3cmFwcGVyIGNvbXBvbmVudCxcbiAgICAgICAgLy8gYW5kIHZhbHVlcyBuZWVkZWQgdG8gY29udHJvbCBiZWhhdmlvciAoZm9yd2FyZGVkIHJlZnMsIGFsdGVybmF0ZSBjb250ZXh0IGluc3RhbmNlcykuXG4gICAgICAgIC8vIFRvIG1haW50YWluIHRoZSB3cmFwcGVyUHJvcHMgb2JqZWN0IHJlZmVyZW5jZSwgbWVtb2l6ZSB0aGlzIGRlc3RydWN0dXJpbmcuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmXG4gICAgICAgIH0gPSBwcm9wcyxcbiAgICAgICAgICAgICAgd3JhcHBlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgICAgICAgcmV0dXJuIFtwcm9wcy5jb250ZXh0LCByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdO1xuICAgICAgfSwgW3Byb3BzXSk7XG4gICAgICBjb25zdCBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpc0NvbnRleHRDb25zdW1lciggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQocHJvcHNDb250ZXh0LkNvbnN1bWVyLCBudWxsKSkgPyBwcm9wc0NvbnRleHQgOiBDb250ZXh0O1xuICAgICAgfSwgW3Byb3BzQ29udGV4dCwgQ29udGV4dF0pOyAvLyBSZXRyaWV2ZSB0aGUgc3RvcmUgYW5kIGFuY2VzdG9yIHN1YnNjcmlwdGlvbiB2aWEgY29udGV4dCwgaWYgYXZhaWxhYmxlXG5cbiAgICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTsgLy8gVGhlIHN0b3JlIF9tdXN0XyBleGlzdCBhcyBlaXRoZXIgYSBwcm9wIG9yIGluIGNvbnRleHQuXG4gICAgICAvLyBXZSdsbCBjaGVjayB0byBzZWUgaWYgaXQgX2xvb2tzXyBsaWtlIGEgUmVkdXggc3RvcmUgZmlyc3QuXG4gICAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBwYXNzIHRocm91Z2ggYSBgc3RvcmVgIHByb3AgdGhhdCBpcyBqdXN0IGEgcGxhaW4gdmFsdWUuXG5cbiAgICAgIGNvbnN0IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA9IEJvb2xlYW4ocHJvcHMuc3RvcmUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZ2V0U3RhdGUpICYmIEJvb2xlYW4ocHJvcHMuc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgY29uc3QgZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPSBCb29sZWFuKGNvbnRleHRWYWx1ZSkgJiYgQm9vbGVhbihjb250ZXh0VmFsdWUuc3RvcmUpO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZGlkU3RvcmVDb21lRnJvbVByb3BzICYmICFkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkIG5vdCBmaW5kIFwic3RvcmVcIiBpbiB0aGUgY29udGV4dCBvZiBgICsgYFwiJHtkaXNwbGF5TmFtZX1cIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgYCArIGBvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgYCArIGBSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvICR7ZGlzcGxheU5hbWV9IGluIGNvbm5lY3Qgb3B0aW9ucy5gKTtcbiAgICAgIH0gLy8gQmFzZWQgb24gdGhlIHByZXZpb3VzIGNoZWNrLCBvbmUgb2YgdGhlc2UgbXVzdCBiZSB0cnVlXG5cblxuICAgICAgY29uc3Qgc3RvcmUgPSBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBwcm9wcy5zdG9yZSA6IGNvbnRleHRWYWx1ZS5zdG9yZTtcbiAgICAgIGNvbnN0IGdldFNlcnZlclN0YXRlID0gZGlkU3RvcmVDb21lRnJvbUNvbnRleHQgPyBjb250ZXh0VmFsdWUuZ2V0U2VydmVyU3RhdGUgOiBzdG9yZS5nZXRTdGF0ZTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNTZWxlY3RvciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAvLyBUaGUgY2hpbGQgcHJvcHMgc2VsZWN0b3IgbmVlZHMgdGhlIHN0b3JlIHJlZmVyZW5jZSBhcyBhbiBpbnB1dC5cbiAgICAgICAgLy8gUmUtY3JlYXRlIHRoaXMgc2VsZWN0b3Igd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMuXG4gICAgICAgIHJldHVybiBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5KHN0b3JlLmRpc3BhdGNoLCBzZWxlY3RvckZhY3RvcnlPcHRpb25zKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuICAgICAgY29uc3QgW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybiBOT19TVUJTQ1JJUFRJT05fQVJSQVk7IC8vIFRoaXMgU3Vic2NyaXB0aW9uJ3Mgc291cmNlIHNob3VsZCBtYXRjaCB3aGVyZSBzdG9yZSBjYW1lIGZyb206IHByb3BzIHZzLiBjb250ZXh0LiBBIGNvbXBvbmVudFxuICAgICAgICAvLyBjb25uZWN0ZWQgdG8gdGhlIHN0b3JlIHZpYSBwcm9wcyBzaG91bGRuJ3QgdXNlIHN1YnNjcmlwdGlvbiBmcm9tIGNvbnRleHQsIG9yIHZpY2UgdmVyc2EuXG5cbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyB1bmRlZmluZWQgOiBjb250ZXh0VmFsdWUuc3Vic2NyaXB0aW9uKTsgLy8gYG5vdGlmeU5lc3RlZFN1YnNgIGlzIGR1cGxpY2F0ZWQgdG8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkIGluXG4gICAgICAgIC8vIHRoZSBtaWRkbGUgb2YgdGhlIG5vdGlmaWNhdGlvbiBsb29wLCB3aGVyZSBgc3Vic2NyaXB0aW9uYCB3aWxsIHRoZW4gYmUgbnVsbC4gVGhpcyBjYW5cbiAgICAgICAgLy8gcHJvYmFibHkgYmUgYXZvaWRlZCBpZiBTdWJzY3JpcHRpb24ncyBsaXN0ZW5lcnMgbG9naWMgaXMgY2hhbmdlZCB0byBub3QgY2FsbCBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdGhhdCBoYXZlIGJlZW4gdW5zdWJzY3JpYmVkIGluIHRoZSAgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcC5cblxuICAgICAgICBjb25zdCBub3RpZnlOZXN0ZWRTdWJzID0gc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMuYmluZChzdWJzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gW3N1YnNjcmlwdGlvbiwgbm90aWZ5TmVzdGVkU3Vic107XG4gICAgICB9LCBbc3RvcmUsIGRpZFN0b3JlQ29tZUZyb21Qcm9wcywgY29udGV4dFZhbHVlXSk7IC8vIERldGVybWluZSB3aGF0IHtzdG9yZSwgc3Vic2NyaXB0aW9ufSB2YWx1ZSBzaG91bGQgYmUgcHV0IGludG8gbmVzdGVkIGNvbnRleHQsIGlmIG5lY2Vzc2FyeSxcbiAgICAgIC8vIGFuZCBtZW1vaXplIHRoYXQgdmFsdWUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgY29udGV4dCB1cGRhdGVzLlxuXG4gICAgICBjb25zdCBvdmVycmlkZGVuQ29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChkaWRTdG9yZUNvbWVGcm9tUHJvcHMpIHtcbiAgICAgICAgICAvLyBUaGlzIGNvbXBvbmVudCBpcyBkaXJlY3RseSBzdWJzY3JpYmVkIHRvIGEgc3RvcmUgZnJvbSBwcm9wcy5cbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IGRlc2NlbmRhbnRzIHJlYWRpbmcgZnJvbSB0aGlzIHN0b3JlIC0gcGFzcyBkb3duIHdoYXRldmVyXG4gICAgICAgICAgLy8gdGhlIGV4aXN0aW5nIGNvbnRleHQgdmFsdWUgaXMgZnJvbSB0aGUgbmVhcmVzdCBjb25uZWN0ZWQgYW5jZXN0b3IuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2UsIHB1dCB0aGlzIGNvbXBvbmVudCdzIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBpbnRvIGNvbnRleHQsIHNvIHRoYXRcbiAgICAgICAgLy8gY29ubmVjdGVkIGRlc2NlbmRhbnRzIHdvbid0IHVwZGF0ZSB1bnRpbCBhZnRlciB0aGlzIGNvbXBvbmVudCBpcyBkb25lXG5cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHRWYWx1ZSwge1xuICAgICAgICAgIHN1YnNjcmlwdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0sIFtkaWRTdG9yZUNvbWVGcm9tUHJvcHMsIGNvbnRleHRWYWx1ZSwgc3Vic2NyaXB0aW9uXSk7IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuICAgICAgY29uc3QgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIGNvbnN0IGxhc3RXcmFwcGVyUHJvcHMgPSB1c2VSZWYod3JhcHBlclByb3BzKTtcbiAgICAgIGNvbnN0IGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUgPSB1c2VSZWYoKTtcbiAgICAgIGNvbnN0IHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGlzUHJvY2Vzc2luZ0Rpc3BhdGNoID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgICBjb25zdCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gdXNlUmVmKCk7XG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zdCBhY3R1YWxDaGlsZFByb3BzU2VsZWN0b3IgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgICAgLy8gLSBUaGlzIHJlbmRlciBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBieSBhIFJlZHV4IHN0b3JlIHVwZGF0ZSB0aGF0IHByb2R1Y2VkIG5ldyBjaGlsZCBwcm9wc1xuICAgICAgICAgIC8vIC0gSG93ZXZlciwgd2UgbWF5IGhhdmUgZ290dGVuIG5ldyB3cmFwcGVyIHByb3BzIGFmdGVyIHRoYXRcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAgIC8vIEJ1dCwgaWYgd2UgaGF2ZSBuZXcgd3JhcHBlciBwcm9wcywgdGhvc2UgbWlnaHQgY2hhbmdlIHRoZSBjaGlsZCBwcm9wcywgc28gd2UgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGluZ3MuXG4gICAgICAgICAgLy8gU28sIHdlJ2xsIHVzZSB0aGUgY2hpbGQgcHJvcHMgZnJvbSBzdG9yZSB1cGRhdGUgb25seSBpZiB0aGUgd3JhcHBlciBwcm9wcyBhcmUgdGhlIHNhbWUgYXMgbGFzdCB0aW1lLlxuICAgICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQ7XG4gICAgICAgICAgfSAvLyBUT0RPIFdlJ3JlIHJlYWRpbmcgdGhlIHN0b3JlIGRpcmVjdGx5IGluIHJlbmRlcigpIGhlcmUuIEJhZCBpZGVhP1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGRvIHRoaXMgYmVjYXVzZSBvbiByZW5kZXJzIF9ub3RfIGNhdXNlZCBieSBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRoZSBsYXRlc3Qgc3RvcmUgc3RhdGVcbiAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgd2hhdCB0aGUgY2hpbGQgcHJvcHMgc2hvdWxkIGJlLlxuXG5cbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgfSwgW3N0b3JlLCB3cmFwcGVyUHJvcHNdKTsgLy8gV2UgbmVlZCB0aGlzIHRvIGV4ZWN1dGUgc3luY2hyb25vdXNseSBldmVyeSB0aW1lIHdlIHJlLXJlbmRlci4gSG93ZXZlciwgUmVhY3Qgd2FybnNcbiAgICAgIC8vIGFib3V0IHVzZUxheW91dEVmZmVjdCBpbiBTU1IsIHNvIHdlIHRyeSB0byBkZXRlY3QgZW52aXJvbm1lbnQgYW5kIGZhbGwgYmFjayB0b1xuICAgICAgLy8ganVzdCB1c2VFZmZlY3QgaW5zdGVhZCB0byBhdm9pZCB0aGUgd2FybmluZywgc2luY2UgbmVpdGhlciB3aWxsIHJ1biBhbnl3YXkuXG5cbiAgICAgIGNvbnN0IHN1YnNjcmliZUZvclJlYWN0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZSA9IHJlYWN0TGlzdGVuZXIgPT4ge1xuICAgICAgICAgIGlmICghc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge307XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1YnNjcmliZVVwZGF0ZXMoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLCBzdG9yZSwgc3Vic2NyaXB0aW9uLCAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2hpbGRQcm9wc1NlbGVjdG9yLCBsYXN0V3JhcHBlclByb3BzLCBsYXN0Q2hpbGRQcm9wcywgcmVuZGVySXNTY2hlZHVsZWQsIGlzTW91bnRlZCwgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSwgbm90aWZ5TmVzdGVkU3VicywgcmVhY3RMaXN0ZW5lcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZTtcbiAgICAgIH0sIFtzdWJzY3JpcHRpb25dKTtcbiAgICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3RXaXRoQXJncyhjYXB0dXJlV3JhcHBlclByb3BzLCBbbGFzdFdyYXBwZXJQcm9wcywgbGFzdENoaWxkUHJvcHMsIHJlbmRlcklzU2NoZWR1bGVkLCB3cmFwcGVyUHJvcHMsIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUsIG5vdGlmeU5lc3RlZFN1YnNdKTtcbiAgICAgIGxldCBhY3R1YWxDaGlsZFByb3BzO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhY3R1YWxDaGlsZFByb3BzID0gdXNlU3luY0V4dGVybmFsU3RvcmUoIC8vIFRPRE8gV2UncmUgcGFzc2luZyB0aHJvdWdoIGEgYmlnIHdyYXBwZXIgdGhhdCBkb2VzIGEgYnVuY2ggb2YgZXh0cmEgc2lkZSBlZmZlY3RzIGJlc2lkZXMgc3Vic2NyaWJpbmdcbiAgICAgICAgc3Vic2NyaWJlRm9yUmVhY3QsIC8vIFRPRE8gVGhpcyBpcyBpbmNyZWRpYmx5IGhhY2t5LiBXZSd2ZSBhbHJlYWR5IHByb2Nlc3NlZCB0aGUgc3RvcmUgdXBkYXRlIGFuZCBjYWxjdWxhdGVkIG5ldyBjaGlsZCBwcm9wcyxcbiAgICAgICAgLy8gVE9ETyBhbmQgd2UncmUganVzdCBwYXNzaW5nIHRoYXQgdGhyb3VnaCBzbyBpdCB0cmlnZ2VycyBhIHJlLXJlbmRlciBmb3IgdXMgcmF0aGVyIHRoYW4gcmVseWluZyBvbiBgdVNFU2AuXG4gICAgICAgIGFjdHVhbENoaWxkUHJvcHNTZWxlY3RvciwgZ2V0U2VydmVyU3RhdGUgPyAoKSA9PiBjaGlsZFByb3BzU2VsZWN0b3IoZ2V0U2VydmVyU3RhdGUoKSwgd3JhcHBlclByb3BzKSA6IGFjdHVhbENoaWxkUHJvcHNTZWxlY3Rvcik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudCkge1xuICAgICAgICAgIDtcbiAgICAgICAgICBlcnIubWVzc2FnZSArPSBgXFxuVGhlIGVycm9yIG1heSBiZSBjb3JyZWxhdGVkIHdpdGggdGhpcyBwcmV2aW91cyBlcnJvcjpcXG4ke2xhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IuY3VycmVudC5zdGFja31cXG5cXG5gO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxhc3RDaGlsZFByb3BzLmN1cnJlbnQgPSBhY3R1YWxDaGlsZFByb3BzO1xuICAgICAgfSk7IC8vIE5vdyB0aGF0IGFsbCB0aGF0J3MgZG9uZSwgd2UgY2FuIGZpbmFsbHkgdHJ5IHRvIGFjdHVhbGx5IHJlbmRlciB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgLy8gV2UgbWVtb2l6ZSB0aGUgZWxlbWVudHMgZm9yIHRoZSByZW5kZXJlZCBjaGlsZCBjb21wb25lbnQgYXMgYW4gb3B0aW1pemF0aW9uLlxuXG4gICAgICBjb25zdCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIGFjdHVhbENoaWxkUHJvcHMsIHtcbiAgICAgICAgICAgIHJlZjogcmVhY3RSZWR1eEZvcndhcmRlZFJlZlxuICAgICAgICAgIH0pKVxuICAgICAgICApO1xuICAgICAgfSwgW3JlYWN0UmVkdXhGb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTsgLy8gSWYgUmVhY3Qgc2VlcyB0aGUgZXhhY3Qgc2FtZSBlbGVtZW50IHJlZmVyZW5jZSBhcyBsYXN0IHRpbWUsIGl0IGJhaWxzIG91dCBvZiByZS1yZW5kZXJpbmdcbiAgICAgIC8vIHRoYXQgY2hpbGQsIHNhbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gUmVhY3QubWVtbygpIG9yIHJldHVybmVkIGZhbHNlIGZyb20gc2hvdWxkQ29tcG9uZW50VXBkYXRlLlxuXG4gICAgICBjb25zdCByZW5kZXJlZENoaWxkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHtcbiAgICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBzdWJzY3JpYmVkIHRvIHN0b3JlIHVwZGF0ZXMsIHdlIG5lZWQgdG8gcGFzcyBpdHMgb3duXG4gICAgICAgICAgLy8gc3Vic2NyaXB0aW9uIGluc3RhbmNlIGRvd24gdG8gb3VyIGRlc2NlbmRhbnRzLiBUaGF0IG1lYW5zIHJlbmRlcmluZyB0aGUgc2FtZVxuICAgICAgICAgIC8vIENvbnRleHQgaW5zdGFuY2UsIGFuZCBwdXR0aW5nIGEgZGlmZmVyZW50IHZhbHVlIGludG8gdGhlIGNvbnRleHQuXG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWVcbiAgICAgICAgICB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfVxuXG4gICAgY29uc3QgX0Nvbm5lY3QgPSBSZWFjdC5tZW1vKENvbm5lY3RGdW5jdGlvbik7XG5cbiAgICAvLyBBZGQgYSBoYWNreSBjYXN0IHRvIGdldCB0aGUgcmlnaHQgb3V0cHV0IHR5cGVcbiAgICBjb25zdCBDb25uZWN0ID0gX0Nvbm5lY3Q7XG4gICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICBDb25uZWN0LmRpc3BsYXlOYW1lID0gQ29ubmVjdEZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG5cbiAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgY29uc3QgX2ZvcndhcmRlZCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gZm9yd2FyZENvbm5lY3RSZWYocHJvcHMsIHJlZikge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICByZWFjdFJlZHV4Rm9yd2FyZGVkUmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcndhcmRlZCA9IF9mb3J3YXJkZWQ7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xuXG4gIHJldHVybiB3cmFwV2l0aENvbm5lY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9cblN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSx3PWI/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LHg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LHk9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7XG5mdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSB0OmNhc2UgcjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW19ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO1xuZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBBKGEpfHx6KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWt9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXR9O1xuZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1yfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1mfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wfTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KX07ZXhwb3J0cy50eXBlT2Y9ejtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGI9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksYz1TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLGQ9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLGU9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLGY9U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpLGc9U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpLGg9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksaz1TeW1ib2wuZm9yKFwicmVhY3Quc2VydmVyX2NvbnRleHRcIiksbD1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksbT1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIiksbj1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxwPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHE9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksdD1TeW1ib2wuZm9yKFwicmVhY3Qub2Zmc2NyZWVuXCIpLHU7dT1TeW1ib2wuZm9yKFwicmVhY3QubW9kdWxlLnJlZmVyZW5jZVwiKTtcbmZ1bmN0aW9uIHYoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHI9YS4kJHR5cGVvZjtzd2l0Y2gocil7Y2FzZSBiOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGQ6Y2FzZSBmOmNhc2UgZTpjYXNlIG06Y2FzZSBuOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBoOmNhc2UgbDpjYXNlIHE6Y2FzZSBwOmNhc2UgZzpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiByfX1jYXNlIGM6cmV0dXJuIHJ9fX1leHBvcnRzLkNvbnRleHRDb25zdW1lcj1oO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWc7ZXhwb3J0cy5FbGVtZW50PWI7ZXhwb3J0cy5Gb3J3YXJkUmVmPWw7ZXhwb3J0cy5GcmFnbWVudD1kO2V4cG9ydHMuTGF6eT1xO2V4cG9ydHMuTWVtbz1wO2V4cG9ydHMuUG9ydGFsPWM7ZXhwb3J0cy5Qcm9maWxlcj1mO2V4cG9ydHMuU3RyaWN0TW9kZT1lO2V4cG9ydHMuU3VzcGVuc2U9bTtcbmV4cG9ydHMuU3VzcGVuc2VMaXN0PW47ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbigpe3JldHVybiExfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9ZnVuY3Rpb24oKXtyZXR1cm4hMX07ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWh9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1nfTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Yn07ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1sfTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1kfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PXF9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09cH07XG5leHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09Y307ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09Zn07ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1lfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1tfTtleHBvcnRzLmlzU3VzcGVuc2VMaXN0PWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09bn07XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZHx8YT09PWZ8fGE9PT1lfHxhPT09bXx8YT09PW58fGE9PT10fHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXF8fGEuJCR0eXBlb2Y9PT1wfHxhLiQkdHlwZW9mPT09Z3x8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1sfHxhLiQkdHlwZW9mPT09dXx8dm9pZCAwIT09YS5nZXRNb2R1bGVJZCk/ITA6ITF9O2V4cG9ydHMudHlwZU9mPXY7XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zZXJ2ZXJfY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBTdXNwZW5zZUxpc3QgPSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZUxpc3Qob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuU3VzcGVuc2VMaXN0ID0gU3VzcGVuc2VMaXN0O1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzU3VzcGVuc2VMaXN0ID0gaXNTdXNwZW5zZUxpc3Q7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5jb25zdCBfZXhjbHVkZWQgPSBbXCJpbml0TWFwU3RhdGVUb1Byb3BzXCIsIFwiaW5pdE1hcERpc3BhdGNoVG9Qcm9wc1wiLCBcImluaXRNZXJnZVByb3BzXCJdO1xuaW1wb3J0IHZlcmlmeVN1YnNlbGVjdG9ycyBmcm9tICcuL3ZlcmlmeVN1YnNlbGVjdG9ycyc7XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCB7XG4gIGFyZVN0YXRlc0VxdWFsLFxuICBhcmVPd25Qcm9wc0VxdWFsLFxuICBhcmVTdGF0ZVByb3BzRXF1YWxcbn0pIHtcbiAgbGV0IGhhc1J1bkF0TGVhc3RPbmNlID0gZmFsc2U7XG4gIGxldCBzdGF0ZTtcbiAgbGV0IG93blByb3BzO1xuICBsZXQgc3RhdGVQcm9wcztcbiAgbGV0IGRpc3BhdGNoUHJvcHM7XG4gIGxldCBtZXJnZWRQcm9wcztcblxuICBmdW5jdGlvbiBoYW5kbGVGaXJzdENhbGwoZmlyc3RTdGF0ZSwgZmlyc3RPd25Qcm9wcykge1xuICAgIHN0YXRlID0gZmlyc3RTdGF0ZTtcbiAgICBvd25Qcm9wcyA9IGZpcnN0T3duUHJvcHM7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIGhhc1J1bkF0TGVhc3RPbmNlID0gdHJ1ZTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCkge1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3U3RhdGUoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBjb25zdCBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgY29uc3QgcHJvcHNDaGFuZ2VkID0gIWFyZU93blByb3BzRXF1YWwobmV4dE93blByb3BzLCBvd25Qcm9wcyk7XG4gICAgY29uc3Qgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUsIG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuICAgIGlmIChwcm9wc0NoYW5nZWQgJiYgc3RhdGVDaGFuZ2VkKSByZXR1cm4gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpO1xuICAgIGlmIChwcm9wc0NoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wcygpO1xuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdTdGF0ZSgpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgcmV0dXJuIGhhc1J1bkF0TGVhc3RPbmNlID8gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA6IGhhbmRsZUZpcnN0Q2FsbChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcyk7XG4gIH07XG59XG4vLyBUT0RPOiBBZGQgbW9yZSBjb21tZW50c1xuLy8gVGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0J3Mgc2hvdWxkQ29tcG9uZW50VXBkYXRlIHRvIHJldHVybiBmYWxzZSBpZiBmaW5hbFxuLy8gcHJvcHMgaGF2ZSBub3QgY2hhbmdlZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgbGV0IHtcbiAgICBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgaW5pdE1lcmdlUHJvcHNcbiAgfSA9IF9yZWYsXG4gICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBpbml0TWFwU3RhdGVUb1Byb3BzKGRpc3BhdGNoLCBvcHRpb25zKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIGNvbnN0IG1lcmdlUHJvcHMgPSBpbml0TWVyZ2VQcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpO1xuICB9XG5cbiAgcmV0dXJuIHB1cmVGaW5hbFByb3BzU2VsZWN0b3JGYWN0b3J5KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwYXRjaCwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSkge1xuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIGZvciAke21ldGhvZE5hbWV9IGluIGNvbm5lY3QuYCk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgJ2RlcGVuZHNPbk93blByb3BzJykpIHtcbiAgICAgIHdhcm5pbmcoYFRoZSBzZWxlY3RvciBmb3IgJHttZXRob2ROYW1lfSBvZiBjb25uZWN0IGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy5gKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKTtcbiAgdmVyaWZ5KG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnKTtcbn0iLCIvKipcclxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG5cbn0iLCJpbXBvcnQgYmluZEFjdGlvbkNyZWF0b3JzIGZyb20gJy4uL3V0aWxzL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5IH0gZnJvbSAnLi9pbnZhbGlkQXJnRmFjdG9yeSc7XG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnb2JqZWN0JyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZGlzcGF0Y2ggPT4gLy8gQHRzLWlnbm9yZVxuICBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaCkpIDogIW1hcERpc3BhdGNoVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZGlzcGF0Y2ggPT4gKHtcbiAgICBkaXNwYXRjaFxuICB9KSkgOiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gLy8gQHRzLWlnbm9yZVxuICB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiBjcmVhdGVJbnZhbGlkQXJnRmFjdG9yeShtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGNvbnN0IGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIGNvbnN0IGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSAoLi4uYXJncykgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvciguLi5hcmdzKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59IiwiaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCAvLyAqIE5vdGU6XG4vLyAgSXQgc2VlbXMgdGhhdCB0aGUgZGlzcGF0Y2ggYXJndW1lbnRcbi8vICBjb3VsZCBiZSBhIGRpc3BhdGNoIGZ1bmN0aW9uIGluIHNvbWUgY2FzZXMgKGV4OiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nKVxuLy8gIGFuZCBhIHN0YXRlIG9iamVjdCBpbiBzb21lIG90aGVycyAoZXg6IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmcpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCkge1xuICAgIGNvbnN0IGNvbnN0YW50ID0gZ2V0Q29uc3RhbnQoZGlzcGF0Y2gpO1xuXG4gICAgZnVuY3Rpb24gY29uc3RhbnRTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBjb25zdGFudDtcbiAgICB9XG5cbiAgICBjb25zdGFudFNlbGVjdG9yLmRlcGVuZHNPbk93blByb3BzID0gZmFsc2U7XG4gICAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3I7XG4gIH07XG59IC8vIGRlcGVuZHNPbk93blByb3BzIGlzIHVzZWQgYnkgY3JlYXRlTWFwVG9Qcm9wc1Byb3h5IHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHBhc3MgcHJvcHMgYXMgYXJnc1xuLy8gdG8gdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgd3JhcHBlZC4gSXQgaXMgYWxzbyB1c2VkIGJ5IG1ha2VQdXJlUHJvcHNTZWxlY3RvciB0byBkZXRlcm1pbmVcbi8vIHdoZXRoZXIgbWFwVG9Qcm9wcyBuZWVkcyB0byBiZSBpbnZva2VkIHdoZW4gcHJvcHMgaGF2ZSBjaGFuZ2VkLlxuLy9cbi8vIEEgbGVuZ3RoIG9mIG9uZSBzaWduYWxzIHRoYXQgbWFwVG9Qcm9wcyBkb2VzIG5vdCBkZXBlbmQgb24gcHJvcHMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbi8vIEEgbGVuZ3RoIG9mIHplcm8gaXMgYXNzdW1lZCB0byBtZWFuIG1hcFRvUHJvcHMgaXMgZ2V0dGluZyBhcmdzIHZpYSBhcmd1bWVudHMgb3IgLi4uYXJncyBhbmRcbi8vIHRoZXJlZm9yZSBub3QgcmVwb3J0aW5nIGl0cyBsZW5ndGggYWNjdXJhdGVseS4uXG4vLyBUT0RPIENhbiB0aGlzIGdldCBwdWxsZWQgb3V0IHNvIHRoYXQgd2UgY2FuIHN1YnNjcmliZSBkaXJlY3RseSB0byB0aGUgc3RvcmUgaWYgd2UgZG9uJ3QgbmVlZCBvd25Qcm9wcz9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59IC8vIFVzZWQgYnkgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24gYW5kIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLFxuLy8gdGhpcyBmdW5jdGlvbiB3cmFwcyBtYXBUb1Byb3BzIGluIGEgcHJveHkgZnVuY3Rpb24gd2hpY2ggZG9lcyBzZXZlcmFsIHRoaW5nczpcbi8vXG4vLyAgKiBEZXRlY3RzIHdoZXRoZXIgdGhlIG1hcFRvUHJvcHMgZnVuY3Rpb24gYmVpbmcgY2FsbGVkIGRlcGVuZHMgb24gcHJvcHMsIHdoaWNoXG4vLyAgICBpcyB1c2VkIGJ5IHNlbGVjdG9yRmFjdG9yeSB0byBkZWNpZGUgaWYgaXQgc2hvdWxkIHJlaW52b2tlIG9uIHByb3BzIGNoYW5nZXMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgaGFuZGxlcyBtYXBUb1Byb3BzIGlmIHJldHVybnMgYW5vdGhlciBmdW5jdGlvbiwgYW5kIHRyZWF0cyB0aGF0XG4vLyAgICBuZXcgZnVuY3Rpb24gYXMgdGhlIHRydWUgbWFwVG9Qcm9wcyBmb3Igc3Vic2VxdWVudCBjYWxscy5cbi8vXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCB2ZXJpZmllcyB0aGUgZmlyc3QgcmVzdWx0IGlzIGEgcGxhaW4gb2JqZWN0LCBpbiBvcmRlciB0byB3YXJuXG4vLyAgICB0aGUgZGV2ZWxvcGVyIHRoYXQgdGhlaXIgbWFwVG9Qcm9wcyBmdW5jdGlvbiBpcyBub3QgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0LlxuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBUb1Byb3BzLCBtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0UHJveHlTZWxlY3RvcihkaXNwYXRjaCwge1xuICAgIGRpc3BsYXlOYW1lXG4gIH0pIHtcbiAgICBjb25zdCBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gsIHVuZGVmaW5lZCk7XG4gICAgfTsgLy8gYWxsb3cgZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSB0byBnZXQgb3duUHJvcHNcblxuXG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuXG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgbGV0IHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn0iLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhgJHttZXRob2ROYW1lfSgpIGluICR7ZGlzcGxheU5hbWV9IG11c3QgcmV0dXJuIGEgcGxhaW4gb2JqZWN0LiBJbnN0ZWFkIHJlY2VpdmVkICR7dmFsdWV9LmApO1xuICB9XG59IiwiLyoqXHJcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICBsZXQgYmFzZVByb3RvID0gcHJvdG87XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cblxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkoYXJnLCBuYW1lKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdmFsdWUgb2YgdHlwZSAke3R5cGVvZiBhcmd9IGZvciAke25hbWV9IGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJHtvcHRpb25zLndyYXBwZWRDb21wb25lbnROYW1lfS5gKTtcbiAgfTtcbn0iLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5IH0gZnJvbSAnLi9pbnZhbGlkQXJnRmFjdG9yeSc7XG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBTdGF0ZVRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KCgpID0+ICh7fSkpIDogdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IC8vIEB0cy1pZ25vcmVcbiAgd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFN0YXRlVG9Qcm9wcywgJ21hcFN0YXRlVG9Qcm9wcycpIDogY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgdmVyaWZ5UGxhaW5PYmplY3QgZnJvbSAnLi4vdXRpbHMvdmVyaWZ5UGxhaW5PYmplY3QnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZEFyZ0ZhY3RvcnkgfSBmcm9tICcuL2ludmFsaWRBcmdGYWN0b3J5JztcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3duUHJvcHMsIHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCB7XG4gICAgZGlzcGxheU5hbWUsXG4gICAgYXJlTWVyZ2VkUHJvcHNFcXVhbFxuICB9KSB7XG4gICAgbGV0IGhhc1J1bk9uY2UgPSBmYWxzZTtcbiAgICBsZXQgbWVyZ2VkUHJvcHM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgY29uc3QgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSkgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUHJvcHNGYWN0b3J5KG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuICFtZXJnZVByb3BzID8gKCkgPT4gZGVmYXVsdE1lcmdlUHJvcHMgOiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IGNyZWF0ZUludmFsaWRBcmdGYWN0b3J5KG1lcmdlUHJvcHMsICdtZXJnZVByb3BzJyk7XG59IiwiaW1wb3J0IHsgZ2V0QmF0Y2ggfSBmcm9tICcuL2JhdGNoJzsgLy8gZW5jYXBzdWxhdGVzIHRoZSBzdWJzY3JpcHRpb24gbG9naWMgZm9yIGNvbm5lY3RpbmcgYSBjb21wb25lbnQgdG8gdGhlIHJlZHV4IHN0b3JlLCBhc1xuLy8gd2VsbCBhcyBuZXN0aW5nIHN1YnNjcmlwdGlvbnMgb2YgZGVzY2VuZGFudCBjb21wb25lbnRzLCBzbyB0aGF0IHdlIGNhbiBlbnN1cmUgdGhlXG4vLyBhbmNlc3RvciBjb21wb25lbnRzIHJlLXJlbmRlciBiZWZvcmUgZGVzY2VuZGFudHNcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICBjb25zdCBiYXRjaCA9IGdldEJhdGNoKCk7XG4gIGxldCBmaXJzdCA9IG51bGw7XG4gIGxldCBsYXN0ID0gbnVsbDtcbiAgcmV0dXJuIHtcbiAgICBjbGVhcigpIHtcbiAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgIGxhc3QgPSBudWxsO1xuICAgIH0sXG5cbiAgICBub3RpZnkoKSB7XG4gICAgICBiYXRjaCgoKSA9PiB7XG4gICAgICAgIGxldCBsaXN0ZW5lciA9IGZpcnN0O1xuXG4gICAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKCk7XG4gICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0KCkge1xuICAgICAgbGV0IGxpc3RlbmVycyA9IFtdO1xuICAgICAgbGV0IGxpc3RlbmVyID0gZmlyc3Q7XG5cbiAgICAgIHdoaWxlIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXIubmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3RlbmVycztcbiAgICB9LFxuXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICBsZXQgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgIGxldCBsaXN0ZW5lciA9IGxhc3QgPSB7XG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICBwcmV2OiBsYXN0XG4gICAgICB9O1xuXG4gICAgICBpZiAobGlzdGVuZXIucHJldikge1xuICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0ID0gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgZmlyc3QgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm5leHQpIHtcbiAgICAgICAgICBsaXN0ZW5lci5uZXh0LnByZXYgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhc3QgPSBsaXN0ZW5lci5wcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLnByZXYpIHtcbiAgICAgICAgICBsaXN0ZW5lci5wcmV2Lm5leHQgPSBsaXN0ZW5lci5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpcnN0ID0gbGlzdGVuZXIubmV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbn1cblxuY29uc3QgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5KCkge30sXG5cbiAgZ2V0OiAoKSA9PiBbXVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oc3RvcmUsIHBhcmVudFN1Yikge1xuICBsZXQgdW5zdWJzY3JpYmU7XG4gIGxldCBsaXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuXG4gIGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRyeVN1YnNjcmliZSgpO1xuICAgIHJldHVybiBsaXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeU5lc3RlZFN1YnMoKSB7XG4gICAgbGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAoc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UpIHtcbiAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHVuc3Vic2NyaWJlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVN1YnNjcmliZSgpIHtcbiAgICBpZiAoIXVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSA9IHBhcmVudFN1YiA/IHBhcmVudFN1Yi5hZGROZXN0ZWRTdWIoaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiBzdG9yZS5zdWJzY3JpYmUoaGFuZGxlQ2hhbmdlV3JhcHBlcik7XG4gICAgICBsaXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cnlVbnN1YnNjcmliZSgpIHtcbiAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICB1bnN1YnNjcmliZSA9IHVuZGVmaW5lZDtcbiAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgbGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgYWRkTmVzdGVkU3ViLFxuICAgIG5vdGlmeU5lc3RlZFN1YnMsXG4gICAgaGFuZGxlQ2hhbmdlV3JhcHBlcixcbiAgICBpc1N1YnNjcmliZWQsXG4gICAgdHJ5U3Vic2NyaWJlLFxuICAgIHRyeVVuc3Vic2NyaWJlLFxuICAgIGdldExpc3RlbmVyczogKCkgPT4gbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBzdWJzY3JpcHRpb247XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7IC8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLiBXZSBuZWVkIHVzZUxheW91dEVmZmVjdCB0byBlbnN1cmUgdGhlIHN0b3JlXG4vLyBzdWJzY3JpcHRpb24gY2FsbGJhY2sgYWx3YXlzIGhhcyB0aGUgc2VsZWN0b3IgZnJvbSB0aGUgbGF0ZXN0IHJlbmRlciBjb21taXRcbi8vIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGEgc3RvcmUgdXBkYXRlIG1heSBoYXBwZW4gYmV0d2VlbiByZW5kZXIgYW5kIHRoZSBlZmZlY3QsXG4vLyB3aGljaCBtYXkgY2F1c2UgbWlzc2VkIHVwZGF0ZXM7IHdlIGFsc28gbXVzdCBlbnN1cmUgdGhlIHN0b3JlIHN1YnNjcmlwdGlvblxuLy8gaXMgY3JlYXRlZCBzeW5jaHJvbm91c2x5LCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IG9jY3VyIGJlZm9yZSB0aGVcbi8vIHN1YnNjcmlwdGlvbiBpcyBjcmVhdGVkIGFuZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUgbWF5IGJlIG9ic2VydmVkXG4vLyBNYXRjaGVzIGxvZ2ljIGluIFJlYWN0J3MgYHNoYXJlZC9FeGVjdXRpb25FbnZpcm9ubWVudGAgZmlsZVxuXG5leHBvcnQgY29uc3QgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyk7XG5leHBvcnQgY29uc3QgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGNhblVzZURPTSA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJpbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1Byb3ZpZGVyJztcbmltcG9ydCBjb25uZWN0IGZyb20gJy4vY29tcG9uZW50cy9jb25uZWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vayB9IGZyb20gJy4vaG9va3MvdXNlRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vayB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vaG9va3MvdXNlU3RvcmUnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IFByb3ZpZGVyLCBSZWFjdFJlZHV4Q29udGV4dCwgY29ubmVjdCwgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vaywgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vaywgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vaywgc2hhbGxvd0VxdWFsIH07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vQ29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVTdWJzY3JpcHRpb24gfSBmcm9tICcuLi91dGlscy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gJy4uL3V0aWxzL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuXG5mdW5jdGlvbiBQcm92aWRlcih7XG4gIHN0b3JlLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgc2VydmVyU3RhdGVcbn0pIHtcbiAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gY3JlYXRlU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBnZXRTZXJ2ZXJTdGF0ZTogc2VydmVyU3RhdGUgPyAoKSA9PiBzZXJ2ZXJTdGF0ZSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH0sIFtzdG9yZSwgc2VydmVyU3RhdGVdKTtcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHVzZU1lbW8oKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKSwgW3N0b3JlXSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHN1YnNjcmlwdGlvblxuICAgIH0gPSBjb250ZXh0VmFsdWU7XG4gICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3VicztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG5cbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9LCBbY29udGV4dFZhbHVlLCBwcmV2aW91c1N0YXRlXSk7XG4gIGNvbnN0IENvbnRleHQgPSBjb250ZXh0IHx8IFJlYWN0UmVkdXhDb250ZXh0OyAvLyBAdHMtaWdub3JlICdBbnlBY3Rpb24nIGlzIGFzc2lnbmFibGUgdG8gdGhlIGNvbnN0cmFpbnQgb2YgdHlwZSAnQScsIGJ1dCAnQScgY291bGQgYmUgaW5zdGFudGlhdGVkIHdpdGggYSBkaWZmZXJlbnQgc3VidHlwZVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICB9LCBjaGlsZHJlbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyOyIsImltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcbmltcG9ydCB7IHVzZVN0b3JlIGFzIHVzZURlZmF1bHRTdG9yZSwgY3JlYXRlU3RvcmVIb29rIH0gZnJvbSAnLi91c2VTdG9yZSc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZURpc3BhdGNoYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlRGlzcGF0Y2hgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc3BhdGNoSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlU3RvcmUgPSAvLyBAdHMtaWdub3JlXG4gIGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICByZXR1cm4gZnVuY3Rpb24gdXNlRGlzcGF0Y2goKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpOyAvLyBAdHMtaWdub3JlXG5cbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggYGRpc3BhdGNoYCBmdW5jdGlvbi5cclxuICpcclxuICogQHJldHVybnMge2FueXxmdW5jdGlvbn0gcmVkdXggc3RvcmUncyBgZGlzcGF0Y2hgIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICogICBjb25zdCBpbmNyZWFzZUNvdW50ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdpbmNyZWFzZS1jb3VudGVyJyB9KSwgW10pXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxkaXY+XHJcbiAqICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAqICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2VDb3VudGVyfT5JbmNyZWFzZSBjb3VudGVyPC9idXR0b24+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApXHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCBjb25zdCB1c2VEaXNwYXRjaCA9IC8qI19fUFVSRV9fKi9jcmVhdGVEaXNwYXRjaEhvb2soKTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db250ZXh0fSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU3RvcmVgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlSG9vayhjb250ZXh0ID0gUmVhY3RSZWR1eENvbnRleHQpIHtcbiAgY29uc3QgdXNlUmVkdXhDb250ZXh0ID0gLy8gQHRzLWlnbm9yZVxuICBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiAoKSA9PiB1c2VDb250ZXh0KGNvbnRleHQpO1xuICByZXR1cm4gZnVuY3Rpb24gdXNlU3RvcmUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RvcmVcbiAgICB9ID0gdXNlUmVkdXhDb250ZXh0KCk7IC8vIEB0cy1pZ25vcmVcblxuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZS5cclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHJlZHV4IHN0b3JlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IEV4YW1wbGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXHJcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVTdG9yZUhvb2soKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZDYxMzAxMjdkYmQ1Y2Q4NmJjMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIlJvdXRlciIsIlByb3ZpZGVyIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIk5hdkxpbmsiLCJfcmVmIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJtYWluIiwibWFyZ2luVG9wIiwiY2xhc3NOYW1lIiwidG8iLCJhY3RpdmVDbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiZXhhY3QiXSwic291cmNlUm9vdCI6IiJ9