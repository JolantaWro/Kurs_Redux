"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 91:
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);




var Cart = function Cart(_ref) {
  var products = _ref.products,
    sum = _ref.sum,
    addProduct = _ref.addProduct,
    removeProduct = _ref.removeProduct;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, "Wszystkie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/10"
  }, "do 10z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/50"
  }, "do 50z\u0142"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
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

/***/ 90:
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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
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

/***/ 92:
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
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fc513f0493da44c34f0c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYjc1YmUwZGY2NWQ5MDMzMTdkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyx3QkFBd0I7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFH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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sR0FBRzs7QUFFVix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLFVBQVUsSUFBSTtBQUNkLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLE1BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsZ0NBQWdDO0FBQ2hDO0FBQ0EsUUFBUSxJQUFJO0FBQ1osS0FBSztBQUNMOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGdJQUFnSTtBQUNoSSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0EsZ0hBQWdIOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsR0FBRzs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQSx1RUFBdUU7O0FBRXZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLHlHQUF5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUc7O0FBRXJHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sY0FBYztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxPQUFPO0FBQ2I7QUFDQSxNQUFNLE9BQU8saUNBQWlDLGlFQUFjO0FBQzVEOztBQUVBO0FBQ0EsTUFBTSxPQUFPLGlDQUFpQyxpRUFBYztBQUM1RDtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsK0RBQVk7QUFDckI7QUFDQTtBQUNBLGFBQWEsc0VBQW1CO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRXd5QjtBQUMxeUI7Ozs7Ozs7OztVQ2w1Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvQHJlbWl4LXJ1bi9yb3V0ZXIvZGlzdC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDlfRHppZW5fMTUvMDJfUmVhY3RfUm91dGVyLzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcmVtaXgtcnVuL3JvdXRlciB2MS41LjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIFR5cGVzIGFuZCBDb25zdGFudHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQWN0aW9ucyByZXByZXNlbnQgdGhlIHR5cGUgb2YgY2hhbmdlIHRvIGEgbG9jYXRpb24gdmFsdWUuXG4gKi9cbnZhciBBY3Rpb247XG5cbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gIC8qKlxuICAgKiBBIFBPUCBpbmRpY2F0ZXMgYSBjaGFuZ2UgdG8gYW4gYXJiaXRyYXJ5IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrLCBzdWNoXG4gICAqIGFzIGEgYmFjayBvciBmb3J3YXJkIG5hdmlnYXRpb24uIEl0IGRvZXMgbm90IGRlc2NyaWJlIHRoZSBkaXJlY3Rpb24gb2YgdGhlXG4gICAqIG5hdmlnYXRpb24sIG9ubHkgdGhhdCB0aGUgY3VycmVudCBpbmRleCBjaGFuZ2VkLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIHRoZSBkZWZhdWx0IGFjdGlvbiBmb3IgbmV3bHkgY3JlYXRlZCBoaXN0b3J5IG9iamVjdHMuXG4gICAqL1xuICBBY3Rpb25bXCJQb3BcIl0gPSBcIlBPUFwiO1xuICAvKipcbiAgICogQSBQVVNIIGluZGljYXRlcyBhIG5ldyBlbnRyeSBiZWluZyBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaCBhcyB3aGVuXG4gICAqIGEgbGluayBpcyBjbGlja2VkIGFuZCBhIG5ldyBwYWdlIGxvYWRzLiBXaGVuIHRoaXMgaGFwcGVucywgYWxsIHN1YnNlcXVlbnRcbiAgICogZW50cmllcyBpbiB0aGUgc3RhY2sgYXJlIGxvc3QuXG4gICAqL1xuXG4gIEFjdGlvbltcIlB1c2hcIl0gPSBcIlBVU0hcIjtcbiAgLyoqXG4gICAqIEEgUkVQTEFDRSBpbmRpY2F0ZXMgdGhlIGVudHJ5IGF0IHRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrXG4gICAqIGJlaW5nIHJlcGxhY2VkIGJ5IGEgbmV3IG9uZS5cbiAgICovXG5cbiAgQWN0aW9uW1wiUmVwbGFjZVwiXSA9IFwiUkVQTEFDRVwiO1xufSkoQWN0aW9uIHx8IChBY3Rpb24gPSB7fSkpO1xuXG5jb25zdCBQb3BTdGF0ZUV2ZW50VHlwZSA9IFwicG9wc3RhdGVcIjtcbi8qKlxuICogTWVtb3J5IGhpc3Rvcnkgc3RvcmVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIG1lbW9yeS4gSXQgaXMgZGVzaWduZWQgZm9yIHVzZVxuICogaW4gc3RhdGVmdWwgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzIGxpa2UgdGVzdHMgYW5kIFJlYWN0IE5hdGl2ZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGxldCB7XG4gICAgaW5pdGlhbEVudHJpZXMgPSBbXCIvXCJdLFxuICAgIGluaXRpYWxJbmRleCxcbiAgICB2NUNvbXBhdCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgZW50cmllczsgLy8gRGVjbGFyZSBzbyB3ZSBjYW4gYWNjZXNzIGZyb20gY3JlYXRlTWVtb3J5TG9jYXRpb25cblxuICBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKGVudHJ5LCB0eXBlb2YgZW50cnkgPT09IFwic3RyaW5nXCIgPyBudWxsIDogZW50cnkuc3RhdGUsIGluZGV4ID09PSAwID8gXCJkZWZhdWx0XCIgOiB1bmRlZmluZWQpKTtcbiAgbGV0IGluZGV4ID0gY2xhbXBJbmRleChpbml0aWFsSW5kZXggPT0gbnVsbCA/IGVudHJpZXMubGVuZ3RoIC0gMSA6IGluaXRpYWxJbmRleCk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGNsYW1wSW5kZXgobikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCAwKSwgZW50cmllcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZW50cmllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUsIGtleSkge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oZW50cmllcyA/IGdldEN1cnJlbnRMb2NhdGlvbigpLnBhdGhuYW1lIDogXCIvXCIsIHRvLCBzdGF0ZSwga2V5KTtcbiAgICB3YXJuaW5nKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gXCIvXCIsIFwicmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5OiBcIiArIEpTT04uc3RyaW5naWZ5KHRvKSk7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZih0bykge1xuICAgIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVIcmVmLFxuXG4gICAgY3JlYXRlVVJMKHRvKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTChjcmVhdGVIcmVmKHRvKSwgXCJodHRwOi8vbG9jYWxob3N0XCIpO1xuICAgIH0sXG5cbiAgICBlbmNvZGVMb2NhdGlvbih0bykge1xuICAgICAgbGV0IHBhdGggPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogcGF0aC5wYXRobmFtZSB8fCBcIlwiLFxuICAgICAgICBzZWFyY2g6IHBhdGguc2VhcmNoIHx8IFwiXCIsXG4gICAgICAgIGhhc2g6IHBhdGguaGFzaCB8fCBcIlwiXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXNoKHRvLCBzdGF0ZSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgZW50cmllcy5sZW5ndGgsIG5leHRMb2NhdGlvbik7XG5cbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUpO1xuICAgICAgZW50cmllc1tpbmRleF0gPSBuZXh0TG9jYXRpb247XG5cbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdvKGRlbHRhKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgICAgbGV0IG5leHRJbmRleCA9IGNsYW1wSW5kZXgoaW5kZXggKyBkZWx0YSk7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gZW50cmllc1tuZXh0SW5kZXhdO1xuICAgICAgaW5kZXggPSBuZXh0SW5kZXg7XG5cbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGxpc3Rlbihmbikge1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuLyoqXG4gKiBCcm93c2VyIGhpc3Rvcnkgc3RvcmVzIHRoZSBsb2NhdGlvbiBpbiByZWd1bGFyIFVSTHMuIFRoaXMgaXMgdGhlIHN0YW5kYXJkIGZvclxuICogbW9zdCB3ZWIgYXBwcywgYnV0IGl0IHJlcXVpcmVzIHNvbWUgY29uZmlndXJhdGlvbiBvbiB0aGUgc2VydmVyIHRvIGVuc3VyZSB5b3VcbiAqIHNlcnZlIHRoZSBzYW1lIGFwcCBhdCBtdWx0aXBsZSBVUkxzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9oaXN0b3J5L3RyZWUvbWFpbi9kb2NzL2FwaS1yZWZlcmVuY2UubWQjY3JlYXRlYnJvd3Nlcmhpc3RvcnlcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VyTG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKFwiXCIsIHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0sIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VySHJlZih3aW5kb3csIHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cblxuICByZXR1cm4gZ2V0VXJsQmFzZWRIaXN0b3J5KGNyZWF0ZUJyb3dzZXJMb2NhdGlvbiwgY3JlYXRlQnJvd3NlckhyZWYsIG51bGwsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBIYXNoIGhpc3Rvcnkgc3RvcmVzIHRoZSBsb2NhdGlvbiBpbiB3aW5kb3cubG9jYXRpb24uaGFzaC4gVGhpcyBtYWtlcyBpdCBpZGVhbFxuICogZm9yIHNpdHVhdGlvbnMgd2hlcmUgeW91IGRvbid0IHdhbnQgdG8gc2VuZCB0aGUgbG9jYXRpb24gdG8gdGhlIHNlcnZlciBmb3JcbiAqIHNvbWUgcmVhc29uLCBlaXRoZXIgYmVjYXVzZSB5b3UgZG8gY2Fubm90IGNvbmZpZ3VyZSBpdCBvciB0aGUgVVJMIHNwYWNlIGlzXG4gKiByZXNlcnZlZCBmb3Igc29tZXRoaW5nIGVsc2UuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL2hpc3RvcnkvdHJlZS9tYWluL2RvY3MvYXBpLXJlZmVyZW5jZS5tZCNjcmVhdGVoYXNoaGlzdG9yeVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgICBoYXNoID0gXCJcIlxuICAgIH0gPSBwYXJzZVBhdGgod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXCJcIiwge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSwgLy8gc3RhdGUgZGVmYXVsdHMgdG8gYG51bGxgIGJlY2F1c2UgYHdpbmRvdy5oaXN0b3J5LnN0YXRlYCBkb2VzXG4gICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLCBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUua2V5IHx8IFwiZGVmYXVsdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hIcmVmKHdpbmRvdywgdG8pIHtcbiAgICBsZXQgYmFzZSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtcbiAgICBsZXQgaHJlZiA9IFwiXCI7XG5cbiAgICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG4gICAgICBocmVmID0gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBocmVmICsgXCIjXCIgKyAodHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKSk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUhhc2hMb2NhdGlvbihsb2NhdGlvbiwgdG8pIHtcbiAgICB3YXJuaW5nKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gXCIvXCIsIFwicmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGhhc2ggaGlzdG9yeS5wdXNoKFwiICsgSlNPTi5zdHJpbmdpZnkodG8pICsgXCIpXCIpO1xuICB9XG5cbiAgcmV0dXJuIGdldFVybEJhc2VkSGlzdG9yeShjcmVhdGVIYXNoTG9jYXRpb24sIGNyZWF0ZUhhc2hIcmVmLCB2YWxpZGF0ZUhhc2hMb2NhdGlvbiwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBpbnZhcmlhbnQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIGhpc3RvcnkhXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBlcnJvciBpcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOCk7XG59XG4vKipcbiAqIEZvciBicm93c2VyLWJhc2VkIGhpc3Rvcmllcywgd2UgY29tYmluZSB0aGUgc3RhdGUgYW5kIGtleSBpbnRvIGFuIG9iamVjdFxuICovXG5cblxuZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCkge1xuICByZXR1cm4ge1xuICAgIHVzcjogbG9jYXRpb24uc3RhdGUsXG4gICAga2V5OiBsb2NhdGlvbi5rZXksXG4gICAgaWR4OiBpbmRleFxuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgTG9jYXRpb24gb2JqZWN0IHdpdGggYSB1bmlxdWUga2V5IGZyb20gdGhlIGdpdmVuIFBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGN1cnJlbnQsIHRvLCBzdGF0ZSwga2V5KSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBudWxsO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uID0gX2V4dGVuZHMoe1xuICAgIHBhdGhuYW1lOiB0eXBlb2YgY3VycmVudCA9PT0gXCJzdHJpbmdcIiA/IGN1cnJlbnQgOiBjdXJyZW50LnBhdGhuYW1lLFxuICAgIHNlYXJjaDogXCJcIixcbiAgICBoYXNoOiBcIlwiXG4gIH0sIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bywge1xuICAgIHN0YXRlLFxuICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmUgY2xlYW5lZCB1cC4gIHB1c2gvcmVwbGFjZSBzaG91bGQgcHJvYmFibHkganVzdCB0YWtlXG4gICAgLy8gZnVsbCBMb2NhdGlvbnMgbm93IGFuZCBhdm9pZCB0aGUgbmVlZCB0byBydW4gdGhyb3VnaCB0aGlzIGZsb3cgYXQgYWxsXG4gICAgLy8gQnV0IHRoYXQncyBhIHByZXR0eSBiaWcgcmVmYWN0b3IgdG8gdGhlIGN1cnJlbnQgdGVzdCBzdWl0ZSBzbyBnb2luZyB0b1xuICAgIC8vIGtlZXAgYXMgaXMgZm9yIHRoZSB0aW1lIGJlaW5nIGFuZCBqdXN0IGxldCBhbnkgaW5jb21pbmcga2V5cyB0YWtlIHByZWNlZGVuY2VcbiAgICBrZXk6IHRvICYmIHRvLmtleSB8fCBrZXkgfHwgY3JlYXRlS2V5KClcbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgc3RyaW5nIFVSTCBwYXRoIGZyb20gdGhlIGdpdmVuIHBhdGhuYW1lLCBzZWFyY2gsIGFuZCBoYXNoIGNvbXBvbmVudHMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUGF0aChfcmVmKSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSBfcmVmO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gXCI/XCIpIHBhdGhuYW1lICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09IFwiP1wiID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4gIGlmIChoYXNoICYmIGhhc2ggIT09IFwiI1wiKSBwYXRobmFtZSArPSBoYXNoLmNoYXJBdCgwKSA9PT0gXCIjXCIgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aG5hbWU7XG59XG4vKipcbiAqIFBhcnNlcyBhIHN0cmluZyBVUkwgcGF0aCBpbnRvIGl0cyBzZXBhcmF0ZSBwYXRobmFtZSwgc2VhcmNoLCBhbmQgaGFzaCBjb21wb25lbnRzLlxuICovXG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIGxldCBwYXJzZWRQYXRoID0ge307XG5cbiAgaWYgKHBhdGgpIHtcbiAgICBsZXQgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5oYXNoID0gcGF0aC5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBzZWFyY2hJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIik7XG5cbiAgICBpZiAoc2VhcmNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5zZWFyY2ggPSBwYXRoLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXJzZWRQYXRoLnBhdGhuYW1lID0gcGF0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsQmFzZWRIaXN0b3J5KGdldExvY2F0aW9uLCBjcmVhdGVIcmVmLCB2YWxpZGF0ZUxvY2F0aW9uLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBsZXQge1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LFxuICAgIHY1Q29tcGF0ID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuICBsZXQgaW5kZXggPSBnZXRJbmRleCgpOyAvLyBJbmRleCBzaG91bGQgb25seSBiZSBudWxsIHdoZW4gd2UgaW5pdGlhbGl6ZS4gSWYgbm90LCBpdCdzIGJlY2F1c2UgdGhlXG4gIC8vIHVzZXIgY2FsbGVkIGhpc3RvcnkucHVzaFN0YXRlIG9yIGhpc3RvcnkucmVwbGFjZVN0YXRlIGRpcmVjdGx5LCBpbiB3aGljaFxuICAvLyBjYXNlIHdlIHNob3VsZCBsb2cgYSB3YXJuaW5nIGFzIGl0IHdpbGwgcmVzdWx0IGluIGJ1Z3MuXG5cbiAgaWYgKGluZGV4ID09IG51bGwpIHtcbiAgICBpbmRleCA9IDA7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGdsb2JhbEhpc3Rvcnkuc3RhdGUsIHtcbiAgICAgIGlkeDogaW5kZXhcbiAgICB9KSwgXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbmRleCgpIHtcbiAgICBsZXQgc3RhdGUgPSBnbG9iYWxIaXN0b3J5LnN0YXRlIHx8IHtcbiAgICAgIGlkeDogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIHN0YXRlLmlkeDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcCgpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIGxldCBuZXh0SW5kZXggPSBnZXRJbmRleCgpO1xuICAgIGxldCBkZWx0YSA9IG5leHRJbmRleCA9PSBudWxsID8gbnVsbCA6IG5leHRJbmRleCAtIGluZGV4O1xuICAgIGluZGV4ID0gbmV4dEluZGV4O1xuXG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCkgKyAxO1xuICAgIGxldCBoaXN0b3J5U3RhdGUgPSBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KTtcbiAgICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTsgLy8gdHJ5Li4uY2F0Y2ggYmVjYXVzZSBpT1MgbGltaXRzIHVzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHMgOi9cblxuICAgIHRyeSB7XG4gICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIsIHVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFRoZXkgYXJlIGdvaW5nIHRvIGxvc2Ugc3RhdGUgaGVyZSwgYnV0IHRoZXJlIGlzIG5vIHJlYWxcbiAgICAgIC8vIHdheSB0byB3YXJuIHRoZW0gYWJvdXQgaXQgc2luY2UgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoLi4uXG4gICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuXG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcblxuICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICBkZWx0YTogMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVVJMKHRvKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiBpcyBcIm51bGxcIiAodGhlIGxpdGVyYWwgc3RyaW5nIHZhbHVlKSBpbiBGaXJlZm94XG4gICAgLy8gdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLCBub3RhYmx5IHdoZW4gc2VydmluZyBmcm9tIGEgbG9jYWwgSFRNTCBmaWxlXG4gICAgLy8gU2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg3ODI5N1xuICAgIGxldCBiYXNlID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPT0gXCJudWxsXCIgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIDogd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGhyZWYgPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICAgIGludmFyaWFudChiYXNlLCBcIk5vIHdpbmRvdy5sb2NhdGlvbi4ob3JpZ2lufGhyZWYpIGF2YWlsYWJsZSB0byBjcmVhdGUgVVJMIGZvciBocmVmOiBcIiArIGhyZWYpO1xuICAgIHJldHVybiBuZXcgVVJMKGhyZWYsIGJhc2UpO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcblxuICAgIGdldCBsb2NhdGlvbigpIHtcbiAgICAgIHJldHVybiBnZXRMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpO1xuICAgIH0sXG5cbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGhpc3Rvcnkgb25seSBhY2NlcHRzIG9uZSBhY3RpdmUgbGlzdGVuZXJcIik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVIcmVmKHRvKSB7XG4gICAgICByZXR1cm4gY3JlYXRlSHJlZih3aW5kb3csIHRvKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlVVJMLFxuXG4gICAgZW5jb2RlTG9jYXRpb24odG8pIHtcbiAgICAgIC8vIEVuY29kZSBhIExvY2F0aW9uIHRoZSBzYW1lIHdheSB3aW5kb3cubG9jYXRpb24gd291bGRcbiAgICAgIGxldCB1cmwgPSBjcmVhdGVVUkwodG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHVybC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLFxuICAgICAgICBoYXNoOiB1cmwuaGFzaFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgcHVzaCxcbiAgICByZXBsYWNlLFxuXG4gICAgZ28obikge1xuICAgICAgcmV0dXJuIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gICAgfVxuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufSAvLyNlbmRyZWdpb25cblxudmFyIFJlc3VsdFR5cGU7XG5cbihmdW5jdGlvbiAoUmVzdWx0VHlwZSkge1xuICBSZXN1bHRUeXBlW1wiZGF0YVwiXSA9IFwiZGF0YVwiO1xuICBSZXN1bHRUeXBlW1wiZGVmZXJyZWRcIl0gPSBcImRlZmVycmVkXCI7XG4gIFJlc3VsdFR5cGVbXCJyZWRpcmVjdFwiXSA9IFwicmVkaXJlY3RcIjtcbiAgUmVzdWx0VHlwZVtcImVycm9yXCJdID0gXCJlcnJvclwiO1xufSkoUmVzdWx0VHlwZSB8fCAoUmVzdWx0VHlwZSA9IHt9KSk7XG5cbmNvbnN0IGltbXV0YWJsZVJvdXRlS2V5cyA9IG5ldyBTZXQoW1wibGF6eVwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJwYXRoXCIsIFwiaWRcIiwgXCJpbmRleFwiLCBcImNoaWxkcmVuXCJdKTtcblxuZnVuY3Rpb24gaXNJbmRleFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiByb3V0ZS5pbmRleCA9PT0gdHJ1ZTtcbn0gLy8gV2FsayB0aGUgcm91dGUgdHJlZSBnZW5lcmF0aW5nIHVuaXF1ZSBJRHMgd2hlcmUgbmVjZXNzYXJ5IHNvIHdlIGFyZSB3b3JraW5nXG4vLyBzb2xlbHkgd2l0aCBBZ25vc3RpY0RhdGFSb3V0ZU9iamVjdCdzIHdpdGhpbiB0aGUgUm91dGVyXG5cblxuZnVuY3Rpb24gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZXMsIGRldGVjdEVycm9yQm91bmRhcnksIHBhcmVudFBhdGgsIG1hbmlmZXN0KSB7XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gW107XG4gIH1cblxuICBpZiAobWFuaWZlc3QgPT09IHZvaWQgMCkge1xuICAgIG1hbmlmZXN0ID0ge307XG4gIH1cblxuICByZXR1cm4gcm91dGVzLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcbiAgICBsZXQgaWQgPSB0eXBlb2Ygcm91dGUuaWQgPT09IFwic3RyaW5nXCIgPyByb3V0ZS5pZCA6IHRyZWVQYXRoLmpvaW4oXCItXCIpO1xuICAgIGludmFyaWFudChyb3V0ZS5pbmRleCAhPT0gdHJ1ZSB8fCAhcm91dGUuY2hpbGRyZW4sIFwiQ2Fubm90IHNwZWNpZnkgY2hpbGRyZW4gb24gYW4gaW5kZXggcm91dGVcIik7XG4gICAgaW52YXJpYW50KCFtYW5pZmVzdFtpZF0sIFwiRm91bmQgYSByb3V0ZSBpZCBjb2xsaXNpb24gb24gaWQgXFxcIlwiICsgaWQgKyBcIlxcXCIuICBSb3V0ZSBcIiArIFwiaWQncyBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZSB3aXRoaW4gRGF0YSBSb3V0ZXIgdXNhZ2VzXCIpO1xuXG4gICAgaWYgKGlzSW5kZXhSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGxldCBpbmRleFJvdXRlID0gX2V4dGVuZHMoe30sIHJvdXRlLCB7XG4gICAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGRldGVjdEVycm9yQm91bmRhcnkocm91dGUpLFxuICAgICAgICBpZFxuICAgICAgfSk7XG5cbiAgICAgIG1hbmlmZXN0W2lkXSA9IGluZGV4Um91dGU7XG4gICAgICByZXR1cm4gaW5kZXhSb3V0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhdGhPckxheW91dFJvdXRlID0gX2V4dGVuZHMoe30sIHJvdXRlLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBoYXNFcnJvckJvdW5kYXJ5OiBkZXRlY3RFcnJvckJvdW5kYXJ5KHJvdXRlKSxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSk7XG5cbiAgICAgIG1hbmlmZXN0W2lkXSA9IHBhdGhPckxheW91dFJvdXRlO1xuXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAgICAgcGF0aE9yTGF5b3V0Um91dGUuY2hpbGRyZW4gPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlLmNoaWxkcmVuLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCB0cmVlUGF0aCwgbWFuaWZlc3QpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0aE9yTGF5b3V0Um91dGU7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gcm91dGVzIHRvIGEgbG9jYXRpb24gYW5kIHJldHVybnMgdGhlIG1hdGNoIGRhdGEuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9tYXRjaC1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gIGxldCBwYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCIsIGJhc2VuYW1lKTtcblxuICBpZiAocGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgbWF0Y2hlcyA9PSBudWxsICYmIGkgPCBicmFuY2hlcy5sZW5ndGg7ICsraSkge1xuICAgIG1hdGNoZXMgPSBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaGVzW2ldLCAvLyBJbmNvbWluZyBwYXRobmFtZXMgYXJlIGdlbmVyYWxseSBlbmNvZGVkIGZyb20gZWl0aGVyIHdpbmRvdy5sb2NhdGlvblxuICAgIC8vIG9yIGZyb20gcm91dGVyLm5hdmlnYXRlLCBidXQgd2Ugd2FudCB0byBtYXRjaCBhZ2FpbnN0IHRoZSB1bmVuY29kZWRcbiAgICAvLyBwYXRocyBpbiB0aGUgcm91dGUgZGVmaW5pdGlvbnMuICBNZW1vcnkgcm91dGVyIGxvY2F0aW9ucyB3b24ndCBiZVxuICAgIC8vIGVuY29kZWQgaGVyZSBidXQgdGhlcmUgYWxzbyBzaG91bGRuJ3QgYmUgYW55dGhpbmcgdG8gZGVjb2RlIHNvIHRoaXNcbiAgICAvLyBzaG91bGQgYmUgYSBzYWZlIG9wZXJhdGlvbi4gIFRoaXMgYXZvaWRzIG5lZWRpbmcgbWF0Y2hSb3V0ZXMgdG8gYmVcbiAgICAvLyBoaXN0b3J5LWF3YXJlLlxuICAgIHNhZmVseURlY29kZVVSSShwYXRobmFtZSkpO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Sb3V0ZXMocm91dGVzLCBicmFuY2hlcywgcGFyZW50c01ldGEsIHBhcmVudFBhdGgpIHtcbiAgaWYgKGJyYW5jaGVzID09PSB2b2lkIDApIHtcbiAgICBicmFuY2hlcyA9IFtdO1xuICB9XG5cbiAgaWYgKHBhcmVudHNNZXRhID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRzTWV0YSA9IFtdO1xuICB9XG5cbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBcIlwiO1xuICB9XG5cbiAgbGV0IGZsYXR0ZW5Sb3V0ZSA9IChyb3V0ZSwgaW5kZXgsIHJlbGF0aXZlUGF0aCkgPT4ge1xuICAgIGxldCBtZXRhID0ge1xuICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGggPT09IHVuZGVmaW5lZCA/IHJvdXRlLnBhdGggfHwgXCJcIiA6IHJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09IHRydWUsXG4gICAgICBjaGlsZHJlbkluZGV4OiBpbmRleCxcbiAgICAgIHJvdXRlXG4gICAgfTtcblxuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgaW52YXJpYW50KG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgocGFyZW50UGF0aCksIFwiQWJzb2x1dGUgcm91dGUgcGF0aCBcXFwiXCIgKyBtZXRhLnJlbGF0aXZlUGF0aCArIFwiXFxcIiBuZXN0ZWQgdW5kZXIgcGF0aCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIFwiKSArIFwibXVzdCBzdGFydCB3aXRoIHRoZSBjb21iaW5lZCBwYXRoIG9mIGFsbCBpdHMgcGFyZW50IHJvdXRlcy5cIik7XG4gICAgICBtZXRhLnJlbGF0aXZlUGF0aCA9IG1ldGEucmVsYXRpdmVQYXRoLnNsaWNlKHBhcmVudFBhdGgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGpvaW5QYXRocyhbcGFyZW50UGF0aCwgbWV0YS5yZWxhdGl2ZVBhdGhdKTtcbiAgICBsZXQgcm91dGVzTWV0YSA9IHBhcmVudHNNZXRhLmNvbmNhdChtZXRhKTsgLy8gQWRkIHRoZSBjaGlsZHJlbiBiZWZvcmUgYWRkaW5nIHRoaXMgcm91dGUgdG8gdGhlIGFycmF5IHNvIHdlIHRyYXZlcnNlIHRoZVxuICAgIC8vIHJvdXRlIHRyZWUgZGVwdGgtZmlyc3QgYW5kIGNoaWxkIHJvdXRlcyBhcHBlYXIgYmVmb3JlIHRoZWlyIHBhcmVudHMgaW5cbiAgICAvLyB0aGUgXCJmbGF0dGVuZWRcIiB2ZXJzaW9uLlxuXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGludmFyaWFudCggLy8gT3VyIHR5cGVzIGtub3cgYmV0dGVyLCBidXQgcnVudGltZSBKUyBtYXkgbm90IVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgcm91dGUuaW5kZXggIT09IHRydWUsIFwiSW5kZXggcm91dGVzIG11c3Qgbm90IGhhdmUgY2hpbGQgcm91dGVzLiBQbGVhc2UgcmVtb3ZlIFwiICsgKFwiYWxsIGNoaWxkIHJvdXRlcyBmcm9tIHJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIi5cIikpO1xuICAgICAgZmxhdHRlblJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgYnJhbmNoZXMsIHJvdXRlc01ldGEsIHBhdGgpO1xuICAgIH0gLy8gUm91dGVzIHdpdGhvdXQgYSBwYXRoIHNob3VsZG4ndCBldmVyIG1hdGNoIGJ5IHRoZW1zZWx2ZXMgdW5sZXNzIHRoZXkgYXJlXG4gICAgLy8gaW5kZXggcm91dGVzLCBzbyBkb24ndCBhZGQgdGhlbSB0byB0aGUgbGlzdCBvZiBwb3NzaWJsZSBicmFuY2hlcy5cblxuXG4gICAgaWYgKHJvdXRlLnBhdGggPT0gbnVsbCAmJiAhcm91dGUuaW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBicmFuY2hlcy5wdXNoKHtcbiAgICAgIHBhdGgsXG4gICAgICBzY29yZTogY29tcHV0ZVNjb3JlKHBhdGgsIHJvdXRlLmluZGV4KSxcbiAgICAgIHJvdXRlc01ldGFcbiAgICB9KTtcbiAgfTtcblxuICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgdmFyIF9yb3V0ZSRwYXRoO1xuXG4gICAgLy8gY29hcnNlLWdyYWluIGNoZWNrIGZvciBvcHRpb25hbCBwYXJhbXNcbiAgICBpZiAocm91dGUucGF0aCA9PT0gXCJcIiB8fCAhKChfcm91dGUkcGF0aCA9IHJvdXRlLnBhdGgpICE9IG51bGwgJiYgX3JvdXRlJHBhdGguaW5jbHVkZXMoXCI/XCIpKSkge1xuICAgICAgZmxhdHRlblJvdXRlKHJvdXRlLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGV4cGxvZGVkIG9mIGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHJvdXRlLnBhdGgpKSB7XG4gICAgICAgIGZsYXR0ZW5Sb3V0ZShyb3V0ZSwgaW5kZXgsIGV4cGxvZGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYnJhbmNoZXM7XG59XG4vKipcbiAqIENvbXB1dGVzIGFsbCBjb21iaW5hdGlvbnMgb2Ygb3B0aW9uYWwgcGF0aCBzZWdtZW50cyBmb3IgYSBnaXZlbiBwYXRoLFxuICogZXhjbHVkaW5nIGNvbWJpbmF0aW9ucyB0aGF0IGFyZSBhbWJpZ3VvdXMgYW5kIG9mIGxvd2VyIHByaW9yaXR5LlxuICpcbiAqIEZvciBleGFtcGxlLCBgL29uZS86dHdvPy90aHJlZS86Zm91cj8vOmZpdmU/YCBleHBsb2RlcyB0bzpcbiAqIC0gYC9vbmUvdGhyZWVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWVgXG4gKiAtIGAvb25lL3RocmVlLzpmb3VyYFxuICogLSBgL29uZS90aHJlZS86Zml2ZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zm91cmBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zml2ZWBcbiAqIC0gYC9vbmUvdGhyZWUvOmZvdXIvOmZpdmVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZvdXIvOmZpdmVgXG4gKi9cblxuXG5mdW5jdGlvbiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhwYXRoKSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGxldCBbZmlyc3QsIC4uLnJlc3RdID0gc2VnbWVudHM7IC8vIE9wdGlvbmFsIHBhdGggc2VnbWVudHMgYXJlIGRlbm90ZWQgYnkgYSB0cmFpbGluZyBgP2BcblxuICBsZXQgaXNPcHRpb25hbCA9IGZpcnN0LmVuZHNXaXRoKFwiP1wiKTsgLy8gQ29tcHV0ZSB0aGUgY29ycmVzcG9uZGluZyByZXF1aXJlZCBzZWdtZW50OiBgZm9vP2AgLT4gYGZvb2BcblxuICBsZXQgcmVxdWlyZWQgPSBmaXJzdC5yZXBsYWNlKC9cXD8kLywgXCJcIik7XG5cbiAgaWYgKHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSW50ZXByZXQgZW1wdHkgc3RyaW5nIGFzIG9taXR0aW5nIGFuIG9wdGlvbmFsIHNlZ21lbnRcbiAgICAvLyBgW1wib25lXCIsIFwiXCIsIFwidGhyZWVcIl1gIGNvcnJlc3BvbmRzIHRvIG9taXR0aW5nIGA6dHdvYCBmcm9tIGAvb25lLzp0d28/L3RocmVlYCAtPiBgL29uZS90aHJlZWBcbiAgICByZXR1cm4gaXNPcHRpb25hbCA/IFtyZXF1aXJlZCwgXCJcIl0gOiBbcmVxdWlyZWRdO1xuICB9XG5cbiAgbGV0IHJlc3RFeHBsb2RlZCA9IGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHJlc3Quam9pbihcIi9cIikpO1xuICBsZXQgcmVzdWx0ID0gW107IC8vIEFsbCBjaGlsZCBwYXRocyB3aXRoIHRoZSBwcmVmaXguICBEbyB0aGlzIGZvciBhbGwgY2hpbGRyZW4gYmVmb3JlIHRoZVxuICAvLyBvcHRpb25hbCB2ZXJzaW9uIGZvciBhbGwgY2hpbGRyZW4gc28gd2UgZ2V0IGNvbnNpc3RlbnQgb3JkZXJpbmcgd2hlcmUgdGhlXG4gIC8vIHBhcmVudCBvcHRpb25hbCBhc3BlY3QgaXMgcHJlZmVycmVkIGFzIHJlcXVpcmVkLiAgT3RoZXJ3aXNlLCB3ZSBjYW4gZ2V0XG4gIC8vIGNoaWxkIHNlY3Rpb25zIGludGVyc3BlcnNlZCB3aGVyZSBkZWVwZXIgb3B0aW9uYWwgc2VnbWVudHMgYXJlIGhpZ2hlciB0aGFuXG4gIC8vIHBhcmVudCBvcHRpb25hbCBzZWdtZW50cywgd2hlcmUgZm9yIGV4YW1wbGUsIC86dHdvIHdvdWxkIGV4cGxvZGVzIF9lYXJsaWVyX1xuICAvLyB0aGVuIC86b25lLiAgQnkgYWx3YXlzIGluY2x1ZGluZyB0aGUgcGFyZW50IGFzIHJlcXVpcmVkIF9mb3IgYWxsIGNoaWxkcmVuX1xuICAvLyBmaXJzdCwgd2UgYXZvaWQgdGhpcyBpc3N1ZVxuXG4gIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZC5tYXAoc3VicGF0aCA9PiBzdWJwYXRoID09PSBcIlwiID8gcmVxdWlyZWQgOiBbcmVxdWlyZWQsIHN1YnBhdGhdLmpvaW4oXCIvXCIpKSk7IC8vIFRoZW4gaWYgdGhpcyBpcyBhbiBvcHRpb25hbCB2YWx1ZSwgYWRkIGFsbCBjaGlsZCB2ZXJzaW9ucyB3aXRob3V0XG5cbiAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICByZXN1bHQucHVzaCguLi5yZXN0RXhwbG9kZWQpO1xuICB9IC8vIGZvciBhYnNvbHV0ZSBwYXRocywgZW5zdXJlIGAvYCBpbnN0ZWFkIG9mIGVtcHR5IHNlZ21lbnRcblxuXG4gIHJldHVybiByZXN1bHQubWFwKGV4cGxvZGVkID0+IHBhdGguc3RhcnRzV2l0aChcIi9cIikgJiYgZXhwbG9kZWQgPT09IFwiXCIgPyBcIi9cIiA6IGV4cGxvZGVkKTtcbn1cblxuZnVuY3Rpb24gcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpIHtcbiAgYnJhbmNoZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAhPT0gYi5zY29yZSA/IGIuc2NvcmUgLSBhLnNjb3JlIC8vIEhpZ2hlciBzY29yZSBmaXJzdFxuICA6IGNvbXBhcmVJbmRleGVzKGEucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpLCBiLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSkpO1xufVxuXG5jb25zdCBwYXJhbVJlID0gL146XFx3KyQvO1xuY29uc3QgZHluYW1pY1NlZ21lbnRWYWx1ZSA9IDM7XG5jb25zdCBpbmRleFJvdXRlVmFsdWUgPSAyO1xuY29uc3QgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xuY29uc3Qgc3RhdGljU2VnbWVudFZhbHVlID0gMTA7XG5jb25zdCBzcGxhdFBlbmFsdHkgPSAtMjtcblxuY29uc3QgaXNTcGxhdCA9IHMgPT4gcyA9PT0gXCIqXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShwYXRoLCBpbmRleCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgbGV0IGluaXRpYWxTY29yZSA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICBpZiAoc2VnbWVudHMuc29tZShpc1NwbGF0KSkge1xuICAgIGluaXRpYWxTY29yZSArPSBzcGxhdFBlbmFsdHk7XG4gIH1cblxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzLmZpbHRlcihzID0+ICFpc1NwbGF0KHMpKS5yZWR1Y2UoKHNjb3JlLCBzZWdtZW50KSA9PiBzY29yZSArIChwYXJhbVJlLnRlc3Qoc2VnbWVudCkgPyBkeW5hbWljU2VnbWVudFZhbHVlIDogc2VnbWVudCA9PT0gXCJcIiA/IGVtcHR5U2VnbWVudFZhbHVlIDogc3RhdGljU2VnbWVudFZhbHVlKSwgaW5pdGlhbFNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUluZGV4ZXMoYSwgYikge1xuICBsZXQgc2libGluZ3MgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5zbGljZSgwLCAtMSkuZXZlcnkoKG4sIGkpID0+IG4gPT09IGJbaV0pO1xuICByZXR1cm4gc2libGluZ3MgPyAvLyBJZiB0d28gcm91dGVzIGFyZSBzaWJsaW5ncywgd2Ugc2hvdWxkIHRyeSB0byBtYXRjaCB0aGUgZWFybGllciBzaWJsaW5nXG4gIC8vIGZpcnN0LiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gaGF2ZSBmaW5lLWdyYWluZWQgY29udHJvbCBvdmVyIHRoZSBtYXRjaGluZ1xuICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgLy8gd2FudCB0aGVtIHRyaWVkLlxuICBhW2EubGVuZ3RoIC0gMV0gLSBiW2IubGVuZ3RoIC0gMV0gOiAvLyBPdGhlcndpc2UsIGl0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgdG8gcmFuayBub24tc2libGluZ3MgYnkgaW5kZXgsXG4gIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAwO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaCwgcGF0aG5hbWUpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXNNZXRhXG4gIH0gPSBicmFuY2g7XG4gIGxldCBtYXRjaGVkUGFyYW1zID0ge307XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBcIi9cIjtcbiAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlc01ldGEubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbWV0YSA9IHJvdXRlc01ldGFbaV07XG4gICAgbGV0IGVuZCA9IGkgPT09IHJvdXRlc01ldGEubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkUGF0aG5hbWUgPT09IFwiL1wiID8gcGF0aG5hbWUgOiBwYXRobmFtZS5zbGljZShtYXRjaGVkUGF0aG5hbWUubGVuZ3RoKSB8fCBcIi9cIjtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbmRcbiAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gICAgT2JqZWN0LmFzc2lnbihtYXRjaGVkUGFyYW1zLCBtYXRjaC5wYXJhbXMpO1xuICAgIGxldCByb3V0ZSA9IG1ldGEucm91dGU7XG4gICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgIC8vIFRPRE86IENhbiB0aGlzIGFzIGJlIGF2b2lkZWQ/XG4gICAgICBwYXJhbXM6IG1hdGNoZWRQYXJhbXMsXG4gICAgICBwYXRobmFtZTogam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lXSksXG4gICAgICBwYXRobmFtZUJhc2U6IG5vcm1hbGl6ZVBhdGhuYW1lKGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKSksXG4gICAgICByb3V0ZVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cbi8qKlxuICogUmV0dXJucyBhIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvZ2VuZXJhdGUtcGF0aFxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKG9yaWdpbmFsUGF0aCwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmFtcyA9IHt9O1xuICB9XG5cbiAgbGV0IHBhdGggPSBvcmlnaW5hbFBhdGg7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpICYmIHBhdGggIT09IFwiKlwiICYmICFwYXRoLmVuZHNXaXRoKFwiLypcIikpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSk7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIik7XG4gIH0gLy8gZW5zdXJlIGAvYCBpcyBhZGRlZCBhdCB0aGUgYmVnaW5uaW5nIGlmIHRoZSBwYXRoIGlzIGFic29sdXRlXG5cblxuICBjb25zdCBwcmVmaXggPSBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gXCIvXCIgOiBcIlwiO1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoL1xcLysvKS5tYXAoKHNlZ21lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IGlzTGFzdFNlZ21lbnQgPSBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMTsgLy8gb25seSBhcHBseSB0aGUgc3BsYXQgaWYgaXQncyB0aGUgbGFzdCBzZWdtZW50XG5cbiAgICBpZiAoaXNMYXN0U2VnbWVudCAmJiBzZWdtZW50ID09PSBcIipcIikge1xuICAgICAgY29uc3Qgc3RhciA9IFwiKlwiO1xuICAgICAgY29uc3Qgc3RhclBhcmFtID0gcGFyYW1zW3N0YXJdOyAvLyBBcHBseSB0aGUgc3BsYXRcblxuICAgICAgcmV0dXJuIHN0YXJQYXJhbTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlNYXRjaCA9IHNlZ21lbnQubWF0Y2goL146KFxcdyspKFxcPz8pJC8pO1xuXG4gICAgaWYgKGtleU1hdGNoKSB7XG4gICAgICBjb25zdCBbLCBrZXksIG9wdGlvbmFsXSA9IGtleU1hdGNoO1xuICAgICAgbGV0IHBhcmFtID0gcGFyYW1zW2tleV07XG5cbiAgICAgIGlmIChvcHRpb25hbCA9PT0gXCI/XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtID09IG51bGwgPyBcIlwiIDogcGFyYW07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbSA9PSBudWxsKSB7XG4gICAgICAgIGludmFyaWFudChmYWxzZSwgXCJNaXNzaW5nIFxcXCI6XCIgKyBrZXkgKyBcIlxcXCIgcGFyYW1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9IC8vIFJlbW92ZSBhbnkgb3B0aW9uYWwgbWFya2VycyBmcm9tIG9wdGlvbmFsIHN0YXRpYyBzZWdtZW50c1xuXG5cbiAgICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9cXD8kL2csIFwiXCIpO1xuICB9KSAvLyBSZW1vdmUgZW1wdHkgc2VnbWVudHNcbiAgLmZpbHRlcihzZWdtZW50ID0+ICEhc2VnbWVudCk7XG4gIHJldHVybiBwcmVmaXggKyBzZWdtZW50cy5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogUGVyZm9ybXMgcGF0dGVybiBtYXRjaGluZyBvbiBhIFVSTCBwYXRobmFtZSBhbmQgcmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dFxuICogdGhlIG1hdGNoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvbWF0Y2gtcGF0aFxuICovXG5cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSkge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcbiAgICBwYXR0ZXJuID0ge1xuICAgICAgcGF0aDogcGF0dGVybixcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgZW5kOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGxldCBbbWF0Y2hlciwgcGFyYW1OYW1lc10gPSBjb21waWxlUGF0aChwYXR0ZXJuLnBhdGgsIHBhdHRlcm4uY2FzZVNlbnNpdGl2ZSwgcGF0dGVybi5lbmQpO1xuICBsZXQgbWF0Y2ggPSBwYXRobmFtZS5tYXRjaChtYXRjaGVyKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBtYXRjaFswXTtcbiAgbGV0IHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gIGxldCBjYXB0dXJlR3JvdXBzID0gbWF0Y2guc2xpY2UoMSk7XG4gIGxldCBwYXJhbXMgPSBwYXJhbU5hbWVzLnJlZHVjZSgobWVtbywgcGFyYW1OYW1lLCBpbmRleCkgPT4ge1xuICAgIC8vIFdlIG5lZWQgdG8gY29tcHV0ZSB0aGUgcGF0aG5hbWVCYXNlIGhlcmUgdXNpbmcgdGhlIHJhdyBzcGxhdCB2YWx1ZVxuICAgIC8vIGluc3RlYWQgb2YgdXNpbmcgcGFyYW1zW1wiKlwiXSBsYXRlciBiZWNhdXNlIGl0IHdpbGwgYmUgZGVjb2RlZCB0aGVuXG4gICAgaWYgKHBhcmFtTmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgIGxldCBzcGxhdFZhbHVlID0gY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIjtcbiAgICAgIHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5zbGljZSgwLCBtYXRjaGVkUGF0aG5hbWUubGVuZ3RoIC0gc3BsYXRWYWx1ZS5sZW5ndGgpLnJlcGxhY2UoLyguKVxcLyskLywgXCIkMVwiKTtcbiAgICB9XG5cbiAgICBtZW1vW3BhcmFtTmFtZV0gPSBzYWZlbHlEZWNvZGVVUklDb21wb25lbnQoY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIiwgcGFyYW1OYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICBwYXRobmFtZTogbWF0Y2hlZFBhdGhuYW1lLFxuICAgIHBhdGhuYW1lQmFzZSxcbiAgICBwYXR0ZXJuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgsIGNhc2VTZW5zaXRpdmUsIGVuZCkge1xuICBpZiAoY2FzZVNlbnNpdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7XG4gICAgZW5kID0gdHJ1ZTtcbiAgfVxuXG4gIHdhcm5pbmcocGF0aCA9PT0gXCIqXCIgfHwgIXBhdGguZW5kc1dpdGgoXCIqXCIpIHx8IHBhdGguZW5kc1dpdGgoXCIvKlwiKSwgXCJSb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgXCIgKyAoXCJcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiIGJlY2F1c2UgdGhlIGAqYCBjaGFyYWN0ZXIgbXVzdCBcIikgKyBcImFsd2F5cyBmb2xsb3cgYSBgL2AgaW4gdGhlIHBhdHRlcm4uIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCBcIiArIChcInBsZWFzZSBjaGFuZ2UgdGhlIHJvdXRlIHBhdGggdG8gXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIi5cIikpO1xuICBsZXQgcGFyYW1OYW1lcyA9IFtdO1xuICBsZXQgcmVnZXhwU291cmNlID0gXCJeXCIgKyBwYXRoLnJlcGxhY2UoL1xcLypcXCo/JC8sIFwiXCIpIC8vIElnbm9yZSB0cmFpbGluZyAvIGFuZCAvKiwgd2UnbGwgaGFuZGxlIGl0IGJlbG93XG4gIC5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKSAvLyBNYWtlIHN1cmUgaXQgaGFzIGEgbGVhZGluZyAvXG4gIC5yZXBsYWNlKC9bXFxcXC4qK14kP3t9fCgpW1xcXV0vZywgXCJcXFxcJCZcIikgLy8gRXNjYXBlIHNwZWNpYWwgcmVnZXggY2hhcnNcbiAgLnJlcGxhY2UoL1xcLzooXFx3KykvZywgKF8sIHBhcmFtTmFtZSkgPT4ge1xuICAgIHBhcmFtTmFtZXMucHVzaChwYXJhbU5hbWUpO1xuICAgIHJldHVybiBcIi8oW15cXFxcL10rKVwiO1xuICB9KTtcblxuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goXCIqXCIpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBwYXRoID09PSBcIipcIiB8fCBwYXRoID09PSBcIi8qXCIgPyBcIiguKikkXCIgLy8gQWxyZWFkeSBtYXRjaGVkIHRoZSBpbml0aWFsIC8sIGp1c3QgbWF0Y2ggdGhlIHJlc3RcbiAgICA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7IC8vIERvbid0IGluY2x1ZGUgdGhlIC8gaW4gcGFyYW1zW1wiKlwiXVxuICB9IGVsc2UgaWYgKGVuZCkge1xuICAgIC8vIFdoZW4gbWF0Y2hpbmcgdG8gdGhlIGVuZCwgaWdub3JlIHRyYWlsaW5nIHNsYXNoZXNcbiAgICByZWdleHBTb3VyY2UgKz0gXCJcXFxcLyokXCI7XG4gIH0gZWxzZSBpZiAocGF0aCAhPT0gXCJcIiAmJiBwYXRoICE9PSBcIi9cIikge1xuICAgIC8vIElmIG91ciBwYXRoIGlzIG5vbi1lbXB0eSBhbmQgY29udGFpbnMgYW55dGhpbmcgYmV5b25kIGFuIGluaXRpYWwgc2xhc2gsXG4gICAgLy8gdGhlbiB3ZSBoYXZlIF9zb21lXyBmb3JtIG9mIHBhdGggaW4gb3VyIHJlZ2V4IHNvIHdlIHNob3VsZCBleHBlY3QgdG9cbiAgICAvLyBtYXRjaCBvbmx5IGlmIHdlIGZpbmQgdGhlIGVuZCBvZiB0aGlzIHBhdGggc2VnbWVudC4gIExvb2sgZm9yIGFuIG9wdGlvbmFsXG4gICAgLy8gbm9uLWNhcHR1cmVkIHRyYWlsaW5nIHNsYXNoICh0byBtYXRjaCBhIHBvcnRpb24gb2YgdGhlIFVSTCkgb3IgdGhlIGVuZFxuICAgIC8vIG9mIHRoZSBwYXRoIChpZiB3ZSd2ZSBtYXRjaGVkIHRvIHRoZSBlbmQpLiAgV2UgdXNlZCB0byBkbyB0aGlzIHdpdGggYVxuICAgIC8vIHdvcmQgYm91bmRhcnkgYnV0IHRoYXQgZ2l2ZXMgZmFsc2UgcG9zaXRpdmVzIG9uIHJvdXRlcyBsaWtlXG4gICAgLy8gL3VzZXItcHJlZmVyZW5jZXMgc2luY2UgYC1gIGNvdW50cyBhcyBhIHdvcmQgYm91bmRhcnkuXG4gICAgcmVnZXhwU291cmNlICs9IFwiKD86KD89XFxcXC98JCkpXCI7XG4gIH0gZWxzZSA7XG5cbiAgbGV0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKHJlZ2V4cFNvdXJjZSwgY2FzZVNlbnNpdGl2ZSA/IHVuZGVmaW5lZCA6IFwiaVwiKTtcbiAgcmV0dXJuIFttYXRjaGVyLCBwYXJhbU5hbWVzXTtcbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJUaGUgVVJMIHBhdGggXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgY291bGQgbm90IGJlIGRlY29kZWQgYmVjYXVzZSBpdCBpcyBpcyBhIFwiICsgXCJtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHkgZHVlIHRvIGEgYmFkIHBlcmNlbnQgXCIgKyAoXCJlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYWZlbHlEZWNvZGVVUklDb21wb25lbnQodmFsdWUsIHBhcmFtTmFtZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiVGhlIHZhbHVlIGZvciB0aGUgVVJMIHBhcmFtIFxcXCJcIiArIHBhcmFtTmFtZSArIFwiXFxcIiB3aWxsIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2VcIiArIChcIiB0aGUgc3RyaW5nIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIGlzIGEgbWFsZm9ybWVkIFVSTCBzZWdtZW50LiBUaGlzIGlzIHByb2JhYmx5XCIpICsgKFwiIGR1ZSB0byBhIGJhZCBwZXJjZW50IGVuY29kaW5nIChcIiArIGVycm9yICsgXCIpLlwiKSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSByZXR1cm4gcGF0aG5hbWU7XG5cbiAgaWYgKCFwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYmFzZW5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBXZSB3YW50IHRvIGxlYXZlIHRyYWlsaW5nIHNsYXNoIGJlaGF2aW9yIGluIHRoZSB1c2VyJ3MgY29udHJvbCwgc28gaWYgdGhleVxuICAvLyBzcGVjaWZ5IGEgYmFzZW5hbWUgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLCB3ZSBzaG91bGQgc3VwcG9ydCBpdFxuXG5cbiAgbGV0IHN0YXJ0SW5kZXggPSBiYXNlbmFtZS5lbmRzV2l0aChcIi9cIikgPyBiYXNlbmFtZS5sZW5ndGggLSAxIDogYmFzZW5hbWUubGVuZ3RoO1xuICBsZXQgbmV4dENoYXIgPSBwYXRobmFtZS5jaGFyQXQoc3RhcnRJbmRleCk7XG5cbiAgaWYgKG5leHRDaGFyICYmIG5leHRDaGFyICE9PSBcIi9cIikge1xuICAgIC8vIHBhdGhuYW1lIGRvZXMgbm90IHN0YXJ0IHdpdGggYmFzZW5hbWUvXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcGF0aG5hbWUuc2xpY2Uoc3RhcnRJbmRleCkgfHwgXCIvXCI7XG59XG4vKipcbiAqIFJldHVybnMgYSByZXNvbHZlZCBwYXRoIG9iamVjdCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gcGF0aG5hbWUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9yZXNvbHZlLXBhdGhcbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCh0bywgZnJvbVBhdGhuYW1lKSB7XG4gIGlmIChmcm9tUGF0aG5hbWUgPT09IHZvaWQgMCkge1xuICAgIGZyb21QYXRobmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZTogdG9QYXRobmFtZSxcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gIGxldCBwYXRobmFtZSA9IHRvUGF0aG5hbWUgPyB0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvXCIpID8gdG9QYXRobmFtZSA6IHJlc29sdmVQYXRobmFtZSh0b1BhdGhuYW1lLCBmcm9tUGF0aG5hbWUpIDogZnJvbVBhdGhuYW1lO1xuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaDogbm9ybWFsaXplU2VhcmNoKHNlYXJjaCksXG4gICAgaGFzaDogbm9ybWFsaXplSGFzaChoYXNoKVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUocmVsYXRpdmVQYXRoLCBmcm9tUGF0aG5hbWUpIHtcbiAgbGV0IHNlZ21lbnRzID0gZnJvbVBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICBsZXQgcmVsYXRpdmVTZWdtZW50cyA9IHJlbGF0aXZlUGF0aC5zcGxpdChcIi9cIik7XG4gIHJlbGF0aXZlU2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICBpZiAoc2VnbWVudCA9PT0gXCIuLlwiKSB7XG4gICAgICAvLyBLZWVwIHRoZSByb290IFwiXCIgc2VnbWVudCBzbyB0aGUgcGF0aG5hbWUgc3RhcnRzIGF0IC9cbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSBzZWdtZW50cy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09IFwiLlwiKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWdtZW50cy5sZW5ndGggPiAxID8gc2VnbWVudHMuam9pbihcIi9cIikgOiBcIi9cIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFBhdGhFcnJvcihjaGFyLCBmaWVsZCwgZGVzdCwgcGF0aCkge1xuICByZXR1cm4gXCJDYW5ub3QgaW5jbHVkZSBhICdcIiArIGNoYXIgKyBcIicgY2hhcmFjdGVyIGluIGEgbWFudWFsbHkgc3BlY2lmaWVkIFwiICsgKFwiYHRvLlwiICsgZmllbGQgKyBcImAgZmllbGQgW1wiICsgSlNPTi5zdHJpbmdpZnkocGF0aCkgKyBcIl0uICBQbGVhc2Ugc2VwYXJhdGUgaXQgb3V0IHRvIHRoZSBcIikgKyAoXCJgdG8uXCIgKyBkZXN0ICsgXCJgIGZpZWxkLiBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgcHJvdmlkZSB0aGUgZnVsbCBwYXRoIGFzIFwiKSArIFwiYSBzdHJpbmcgaW4gPExpbmsgdG89XFxcIi4uLlxcXCI+IGFuZCB0aGUgcm91dGVyIHdpbGwgcGFyc2UgaXQgZm9yIHlvdS5cIjtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqXG4gKiBXaGVuIHByb2Nlc3NpbmcgcmVsYXRpdmUgbmF2aWdhdGlvbiB3ZSB3YW50IHRvIGlnbm9yZSBhbmNlc3RvciByb3V0ZXMgdGhhdFxuICogZG8gbm90IGNvbnRyaWJ1dGUgdG8gdGhlIHBhdGgsIHN1Y2ggdGhhdCBpbmRleC9wYXRobGVzcyBsYXlvdXQgcm91dGVzIGRvbid0XG4gKiBpbnRlcmZlcmUuXG4gKlxuICogRm9yIGV4YW1wbGUsIHdoZW4gbW92aW5nIGEgcm91dGUgZWxlbWVudCBpbnRvIGFuIGluZGV4IHJvdXRlIGFuZC9vciBhXG4gKiBwYXRobGVzcyBsYXlvdXQgcm91dGUsIHJlbGF0aXZlIGxpbmsgYmVoYXZpb3IgY29udGFpbmVkIHdpdGhpbiBzaG91bGQgc3RheVxuICogdGhlIHNhbWUuICBCb3RoIG9mIHRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgc2hvdWxkIGxpbmsgYmFjayB0byB0aGUgcm9vdDpcbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICogICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudHNcIiBlbGVtZW50PXs8TGluayB0bz1cIi4uXCJ9PlxuICogICA8L1JvdXRlPlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gKiAgICAgPFJvdXRlIHBhdGg9XCJhY2NvdW50c1wiPlxuICogICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxBY2NvdW50c0xheW91dCAvPn0+ICAgICAgIC8vIDwtLSBEb2VzIG5vdCBjb250cmlidXRlXG4gKiAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8TGluayB0bz1cIi4uXCJ9IC8+ICAvLyA8LS0gRG9lcyBub3QgY29udHJpYnV0ZVxuICogICAgICAgPC9Sb3V0ZVxuICogICAgIDwvUm91dGU+XG4gKiAgIDwvUm91dGU+XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBtYXRjaGVzLmZpbHRlcigobWF0Y2gsIGluZGV4KSA9PiBpbmRleCA9PT0gMCB8fCBtYXRjaC5yb3V0ZS5wYXRoICYmIG1hdGNoLnJvdXRlLnBhdGgubGVuZ3RoID4gMCk7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVRvKHRvQXJnLCByb3V0ZVBhdGhuYW1lcywgbG9jYXRpb25QYXRobmFtZSwgaXNQYXRoUmVsYXRpdmUpIHtcbiAgaWYgKGlzUGF0aFJlbGF0aXZlID09PSB2b2lkIDApIHtcbiAgICBpc1BhdGhSZWxhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHRvO1xuXG4gIGlmICh0eXBlb2YgdG9BcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0byA9IHBhcnNlUGF0aCh0b0FyZyk7XG4gIH0gZWxzZSB7XG4gICAgdG8gPSBfZXh0ZW5kcyh7fSwgdG9BcmcpO1xuICAgIGludmFyaWFudCghdG8ucGF0aG5hbWUgfHwgIXRvLnBhdGhuYW1lLmluY2x1ZGVzKFwiP1wiKSwgZ2V0SW52YWxpZFBhdGhFcnJvcihcIj9cIiwgXCJwYXRobmFtZVwiLCBcInNlYXJjaFwiLCB0bykpO1xuICAgIGludmFyaWFudCghdG8ucGF0aG5hbWUgfHwgIXRvLnBhdGhuYW1lLmluY2x1ZGVzKFwiI1wiKSwgZ2V0SW52YWxpZFBhdGhFcnJvcihcIiNcIiwgXCJwYXRobmFtZVwiLCBcImhhc2hcIiwgdG8pKTtcbiAgICBpbnZhcmlhbnQoIXRvLnNlYXJjaCB8fCAhdG8uc2VhcmNoLmluY2x1ZGVzKFwiI1wiKSwgZ2V0SW52YWxpZFBhdGhFcnJvcihcIiNcIiwgXCJzZWFyY2hcIiwgXCJoYXNoXCIsIHRvKSk7XG4gIH1cblxuICBsZXQgaXNFbXB0eVBhdGggPSB0b0FyZyA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIjtcbiAgbGV0IHRvUGF0aG5hbWUgPSBpc0VtcHR5UGF0aCA/IFwiL1wiIDogdG8ucGF0aG5hbWU7XG4gIGxldCBmcm9tOyAvLyBSb3V0aW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHBhdGhuYW1lIGlmIGV4cGxpY2l0bHkgcmVxdWVzdGVkLlxuICAvL1xuICAvLyBJZiBhIHBhdGhuYW1lIGlzIGV4cGxpY2l0bHkgcHJvdmlkZWQgaW4gYHRvYCwgaXQgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAvLyByb3V0ZSBjb250ZXh0LiBUaGlzIGlzIGV4cGxhaW5lZCBpbiBgTm90ZSBvbiBgPExpbmsgdG8+YCB2YWx1ZXNgIGluIG91clxuICAvLyBtaWdyYXRpb24gZ3VpZGUgZnJvbSB2NSBhcyBhIG1lYW5zIG9mIGRpc2FtYmlndWF0aW9uIGJldHdlZW4gYHRvYCB2YWx1ZXNcbiAgLy8gdGhhdCBiZWdpbiB3aXRoIGAvYCBhbmQgdGhvc2UgdGhhdCBkbyBub3QuIEhvd2V2ZXIsIHRoaXMgaXMgcHJvYmxlbWF0aWMgZm9yXG4gIC8vIGB0b2AgdmFsdWVzIHRoYXQgZG8gbm90IHByb3ZpZGUgYSBwYXRobmFtZS4gYHRvYCBjYW4gc2ltcGx5IGJlIGEgc2VhcmNoIG9yXG4gIC8vIGhhc2ggc3RyaW5nLCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBhc3N1bWUgdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyByZWxhdGl2ZVxuICAvLyB0byB0aGUgY3VycmVudCBsb2NhdGlvbidzIHBhdGhuYW1lIGFuZCAqbm90KiB0aGUgcm91dGUgcGF0aG5hbWUuXG5cbiAgaWYgKGlzUGF0aFJlbGF0aXZlIHx8IHRvUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIGZyb20gPSBsb2NhdGlvblBhdGhuYW1lO1xuICB9IGVsc2Uge1xuICAgIGxldCByb3V0ZVBhdGhuYW1lSW5kZXggPSByb3V0ZVBhdGhuYW1lcy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi4uXCIpKSB7XG4gICAgICBsZXQgdG9TZWdtZW50cyA9IHRvUGF0aG5hbWUuc3BsaXQoXCIvXCIpOyAvLyBFYWNoIGxlYWRpbmcgLi4gc2VnbWVudCBtZWFucyBcImdvIHVwIG9uZSByb3V0ZVwiIGluc3RlYWQgb2YgXCJnbyB1cCBvbmVcbiAgICAgIC8vIFVSTCBzZWdtZW50XCIuICBUaGlzIGlzIGEga2V5IGRpZmZlcmVuY2UgZnJvbSBob3cgPGEgaHJlZj4gd29ya3MgYW5kIGFcbiAgICAgIC8vIG1ham9yIHJlYXNvbiB3ZSBjYWxsIHRoaXMgYSBcInRvXCIgdmFsdWUgaW5zdGVhZCBvZiBhIFwiaHJlZlwiLlxuXG4gICAgICB3aGlsZSAodG9TZWdtZW50c1swXSA9PT0gXCIuLlwiKSB7XG4gICAgICAgIHRvU2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgcm91dGVQYXRobmFtZUluZGV4IC09IDE7XG4gICAgICB9XG5cbiAgICAgIHRvLnBhdGhuYW1lID0gdG9TZWdtZW50cy5qb2luKFwiL1wiKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBtb3JlIFwiLi5cIiBzZWdtZW50cyB0aGFuIHBhcmVudCByb3V0ZXMsIHJlc29sdmUgcmVsYXRpdmUgdG9cbiAgICAvLyB0aGUgcm9vdCAvIFVSTC5cblxuXG4gICAgZnJvbSA9IHJvdXRlUGF0aG5hbWVJbmRleCA+PSAwID8gcm91dGVQYXRobmFtZXNbcm91dGVQYXRobmFtZUluZGV4XSA6IFwiL1wiO1xuICB9XG5cbiAgbGV0IHBhdGggPSByZXNvbHZlUGF0aCh0bywgZnJvbSk7IC8vIEVuc3VyZSB0aGUgcGF0aG5hbWUgaGFzIGEgdHJhaWxpbmcgc2xhc2ggaWYgdGhlIG9yaWdpbmFsIFwidG9cIiBoYWQgb25lXG5cbiAgbGV0IGhhc0V4cGxpY2l0VHJhaWxpbmdTbGFzaCA9IHRvUGF0aG5hbWUgJiYgdG9QYXRobmFtZSAhPT0gXCIvXCIgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7IC8vIE9yIGlmIHRoaXMgd2FzIGEgbGluayB0byB0aGUgY3VycmVudCBwYXRoIHdoaWNoIGhhcyBhIHRyYWlsaW5nIHNsYXNoXG5cbiAgbGV0IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoID0gKGlzRW1wdHlQYXRoIHx8IHRvUGF0aG5hbWUgPT09IFwiLlwiKSAmJiBsb2NhdGlvblBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcblxuICBpZiAoIXBhdGgucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpICYmIChoYXNFeHBsaWNpdFRyYWlsaW5nU2xhc2ggfHwgaGFzQ3VycmVudFRyYWlsaW5nU2xhc2gpKSB7XG4gICAgcGF0aC5wYXRobmFtZSArPSBcIi9cIjtcbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdldFRvUGF0aG5hbWUodG8pIHtcbiAgLy8gRW1wdHkgc3RyaW5ncyBzaG91bGQgYmUgdHJlYXRlZCB0aGUgc2FtZSBhcyAvIHBhdGhzXG4gIHJldHVybiB0byA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKS5wYXRobmFtZSA6IHRvLnBhdGhuYW1lO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IGpvaW5QYXRocyA9IHBhdGhzID0+IHBhdGhzLmpvaW4oXCIvXCIpLnJlcGxhY2UoL1xcL1xcLysvZywgXCIvXCIpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG5vcm1hbGl6ZVBhdGhuYW1lID0gcGF0aG5hbWUgPT4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBub3JtYWxpemVTZWFyY2ggPSBzZWFyY2ggPT4gIXNlYXJjaCB8fCBzZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IHNlYXJjaC5zdGFydHNXaXRoKFwiP1wiKSA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG5vcm1hbGl6ZUhhc2ggPSBoYXNoID0+ICFoYXNoIHx8IGhhc2ggPT09IFwiI1wiID8gXCJcIiA6IGhhc2guc3RhcnRzV2l0aChcIiNcIikgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuLyoqXG4gKiBUaGlzIGlzIGEgc2hvcnRjdXQgZm9yIGNyZWF0aW5nIGBhcHBsaWNhdGlvbi9qc29uYCByZXNwb25zZXMuIENvbnZlcnRzIGBkYXRhYFxuICogdG8gSlNPTiBhbmQgc2V0cyB0aGUgYENvbnRlbnQtVHlwZWAgaGVhZGVyLlxuICovXG5cbmNvbnN0IGpzb24gPSBmdW5jdGlvbiBqc29uKGRhdGEsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSB7fTtcbiAgfVxuXG4gIGxldCByZXNwb25zZUluaXQgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQ7XG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVzcG9uc2VJbml0LmhlYWRlcnMpO1xuXG4gIGlmICghaGVhZGVycy5oYXMoXCJDb250ZW50LVR5cGVcIikpIHtcbiAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBfZXh0ZW5kcyh7fSwgcmVzcG9uc2VJbml0LCB7XG4gICAgaGVhZGVyc1xuICB9KSk7XG59O1xuY2xhc3MgQWJvcnRlZERlZmVycmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuY2xhc3MgRGVmZXJyZWREYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzcG9uc2VJbml0KSB7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuZGVmZXJyZWRLZXlzID0gW107XG4gICAgaW52YXJpYW50KGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSksIFwiZGVmZXIoKSBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0c1wiKTsgLy8gU2V0IHVwIGFuIEFib3J0Q29udHJvbGxlciArIFByb21pc2Ugd2UgY2FuIHJhY2UgYWdhaW5zdCB0byBleGl0IGVhcmx5XG4gICAgLy8gY2FuY2VsbGF0aW9uXG5cbiAgICBsZXQgcmVqZWN0O1xuICAgIHRoaXMuYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGxldCBvbkFib3J0ID0gKCkgPT4gcmVqZWN0KG5ldyBBYm9ydGVkRGVmZXJyZWRFcnJvcihcIkRlZmVycmVkIGRhdGEgYWJvcnRlZFwiKSk7XG5cbiAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwgPSAoKSA9PiB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcblxuICAgIHRoaXMuY29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoYWNjLCBfcmVmKSA9PiB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gX3JlZjtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICBba2V5XTogdGhpcy50cmFja1Byb21pc2Uoa2V5LCB2YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0sIHt9KTtcblxuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIEFsbCBpbmNvbWluZyB2YWx1ZXMgd2VyZSByZXNvbHZlZFxuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ID0gcmVzcG9uc2VJbml0O1xuICB9XG5cbiAgdHJhY2tQcm9taXNlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZlcnJlZEtleXMucHVzaChrZXkpO1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuYWRkKGtleSk7IC8vIFdlIHN0b3JlIGEgbGl0dGxlIHdyYXBwZXIgcHJvbWlzZSB0aGF0IHdpbGwgYmUgZXh0ZW5kZWQgd2l0aFxuICAgIC8vIF9kYXRhL19lcnJvciBwcm9wcyB1cG9uIHJlc29sdmUvcmVqZWN0XG5cbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmFjZShbdmFsdWUsIHRoaXMuYWJvcnRQcm9taXNlXSkudGhlbihkYXRhID0+IHRoaXMub25TZXR0bGUocHJvbWlzZSwga2V5LCBudWxsLCBkYXRhKSwgZXJyb3IgPT4gdGhpcy5vblNldHRsZShwcm9taXNlLCBrZXksIGVycm9yKSk7IC8vIFJlZ2lzdGVyIHJlamVjdGlvbiBsaXN0ZW5lcnMgdG8gYXZvaWQgdW5jYXVnaHQgcHJvbWlzZSByZWplY3Rpb25zIG9uXG4gICAgLy8gZXJyb3JzIG9yIGFib3J0ZWQgZGVmZXJyZWQgdmFsdWVzXG5cbiAgICBwcm9taXNlLmNhdGNoKCgpID0+IHt9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIG9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkICYmIGVycm9yIGluc3RhbmNlb2YgQWJvcnRlZERlZmVycmVkRXJyb3IpIHtcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuZGVsZXRlKGtleSk7XG5cbiAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAvLyBOb3RoaW5nIGxlZnQgdG8gYWJvcnQhXG4gICAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwoKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZGF0YVwiLCB7XG4gICAgICBnZXQ6ICgpID0+IGRhdGFcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoZmFsc2UsIGtleSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBlbWl0KGFib3J0ZWQsIHNldHRsZWRLZXkpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyKGFib3J0ZWQsIHNldHRsZWRLZXkpKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuY29udHJvbGxlci5hYm9ydCgpO1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5wZW5kaW5nS2V5c1NldC5kZWxldGUoaykpO1xuICAgIHRoaXMuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIHJlc29sdmVEYXRhKHNpZ25hbCkge1xuICAgIGxldCBhYm9ydGVkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuZG9uZSkge1xuICAgICAgbGV0IG9uQWJvcnQgPSAoKSA9PiB0aGlzLmNhbmNlbCgpO1xuXG4gICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgICAgYWJvcnRlZCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnN1YnNjcmliZShhYm9ydGVkID0+IHtcbiAgICAgICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuXG4gICAgICAgICAgaWYgKGFib3J0ZWQgfHwgdGhpcy5kb25lKSB7XG4gICAgICAgICAgICByZXNvbHZlKGFib3J0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWJvcnRlZDtcbiAgfVxuXG4gIGdldCBkb25lKCkge1xuICAgIHJldHVybiB0aGlzLnBlbmRpbmdLZXlzU2V0LnNpemUgPT09IDA7XG4gIH1cblxuICBnZXQgdW53cmFwcGVkRGF0YSgpIHtcbiAgICBpbnZhcmlhbnQodGhpcy5kYXRhICE9PSBudWxsICYmIHRoaXMuZG9uZSwgXCJDYW4gb25seSB1bndyYXAgZGF0YSBvbiBpbml0aWFsaXplZCBhbmQgc2V0dGxlZCBkZWZlcnJlZHNcIik7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZGF0YSkucmVkdWNlKChhY2MsIF9yZWYyKSA9PiB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gX3JlZjI7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgW2tleV06IHVud3JhcFRyYWNrZWRQcm9taXNlKHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZ2V0IHBlbmRpbmdLZXlzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucGVuZGluZ0tleXNTZXQpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gaXNUcmFja2VkUHJvbWlzZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlICYmIHZhbHVlLl90cmFja2VkID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiB1bndyYXBUcmFja2VkUHJvbWlzZSh2YWx1ZSkge1xuICBpZiAoIWlzVHJhY2tlZFByb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlLl9lcnJvcikge1xuICAgIHRocm93IHZhbHVlLl9lcnJvcjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS5fZGF0YTtcbn1cblxuY29uc3QgZGVmZXIgPSBmdW5jdGlvbiBkZWZlcihkYXRhLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0ge307XG4gIH1cblxuICBsZXQgcmVzcG9uc2VJbml0ID0gdHlwZW9mIGluaXQgPT09IFwibnVtYmVyXCIgPyB7XG4gICAgc3RhdHVzOiBpbml0XG4gIH0gOiBpbml0O1xuICByZXR1cm4gbmV3IERlZmVycmVkRGF0YShkYXRhLCByZXNwb25zZUluaXQpO1xufTtcbi8qKlxuICogQSByZWRpcmVjdCByZXNwb25zZS4gU2V0cyB0aGUgc3RhdHVzIGNvZGUgYW5kIHRoZSBgTG9jYXRpb25gIGhlYWRlci5cbiAqIERlZmF1bHRzIHRvIFwiMzAyIEZvdW5kXCIuXG4gKi9cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCh1cmwsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSAzMDI7XG4gIH1cblxuICBsZXQgcmVzcG9uc2VJbml0ID0gaW5pdDtcblxuICBpZiAodHlwZW9mIHJlc3BvbnNlSW5pdCA9PT0gXCJudW1iZXJcIikge1xuICAgIHJlc3BvbnNlSW5pdCA9IHtcbiAgICAgIHN0YXR1czogcmVzcG9uc2VJbml0XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzcG9uc2VJbml0LnN0YXR1cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlc3BvbnNlSW5pdC5zdGF0dXMgPSAzMDI7XG4gIH1cblxuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcbiAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCB1cmwpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIF9leHRlbmRzKHt9LCByZXNwb25zZUluaXQsIHtcbiAgICBoZWFkZXJzXG4gIH0pKTtcbn07XG4vKipcbiAqIEBwcml2YXRlXG4gKiBVdGlsaXR5IGNsYXNzIHdlIHVzZSB0byBob2xkIGF1dG8tdW53cmFwcGVkIDR4eC81eHggUmVzcG9uc2UgYm9kaWVzXG4gKi9cblxuY2xhc3MgRXJyb3JSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaW50ZXJuYWwpIHtcbiAgICBpZiAoaW50ZXJuYWwgPT09IHZvaWQgMCkge1xuICAgICAgaW50ZXJuYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0IHx8IFwiXCI7XG4gICAgdGhpcy5pbnRlcm5hbCA9IGludGVybmFsO1xuXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgdGhpcy5lcnJvciA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbn1cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVycm9yIGlzIGFuIEVycm9yUmVzcG9uc2UgZ2VuZXJhdGVkIGZyb20gYSA0eHgvNXh4XG4gKiBSZXNwb25zZSB0aHJvd24gZnJvbSBhbiBhY3Rpb24vbG9hZGVyXG4gKi9cblxuZnVuY3Rpb24gaXNSb3V0ZUVycm9yUmVzcG9uc2UoZXJyb3IpIHtcbiAgcmV0dXJuIGVycm9yICE9IG51bGwgJiYgdHlwZW9mIGVycm9yLnN0YXR1cyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzVGV4dCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZXJyb3IuaW50ZXJuYWwgPT09IFwiYm9vbGVhblwiICYmIFwiZGF0YVwiIGluIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZE11dGF0aW9uTWV0aG9kc0FyciA9IFtcInBvc3RcIiwgXCJwdXRcIiwgXCJwYXRjaFwiLCBcImRlbGV0ZVwiXTtcbmNvbnN0IHZhbGlkTXV0YXRpb25NZXRob2RzID0gbmV3IFNldCh2YWxpZE11dGF0aW9uTWV0aG9kc0Fycik7XG5jb25zdCB2YWxpZFJlcXVlc3RNZXRob2RzQXJyID0gW1wiZ2V0XCIsIC4uLnZhbGlkTXV0YXRpb25NZXRob2RzQXJyXTtcbmNvbnN0IHZhbGlkUmVxdWVzdE1ldGhvZHMgPSBuZXcgU2V0KHZhbGlkUmVxdWVzdE1ldGhvZHNBcnIpO1xuY29uc3QgcmVkaXJlY3RTdGF0dXNDb2RlcyA9IG5ldyBTZXQoWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XSk7XG5jb25zdCByZWRpcmVjdFByZXNlcnZlTWV0aG9kU3RhdHVzQ29kZXMgPSBuZXcgU2V0KFszMDcsIDMwOF0pO1xuY29uc3QgSURMRV9OQVZJR0FUSU9OID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGxvY2F0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICBmb3JtRGF0YTogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9GRVRDSEVSID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGRhdGE6IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWRcbn07XG5jb25zdCBJRExFX0JMT0NLRVIgPSB7XG4gIHN0YXRlOiBcInVuYmxvY2tlZFwiLFxuICBwcm9jZWVkOiB1bmRlZmluZWQsXG4gIHJlc2V0OiB1bmRlZmluZWQsXG4gIGxvY2F0aW9uOiB1bmRlZmluZWRcbn07XG5jb25zdCBBQlNPTFVURV9VUkxfUkVHRVggPSAvXig/OlthLXpdW2EtejAtOSsuLV0qOnxcXC9cXC8pL2k7XG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgaXNTZXJ2ZXIgPSAhaXNCcm93c2VyO1xuXG5jb25zdCBkZWZhdWx0RGV0ZWN0RXJyb3JCb3VuZGFyeSA9IHJvdXRlID0+IEJvb2xlYW4ocm91dGUuaGFzRXJyb3JCb3VuZGFyeSk7IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBjcmVhdGVSb3V0ZXJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlIGEgcm91dGVyIGFuZCBsaXN0ZW4gdG8gaGlzdG9yeSBQT1AgbmF2aWdhdGlvbnNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihpbml0KSB7XG4gIGludmFyaWFudChpbml0LnJvdXRlcy5sZW5ndGggPiAwLCBcIllvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgcm91dGVzIGFycmF5IHRvIGNyZWF0ZVJvdXRlclwiKTtcbiAgbGV0IGRldGVjdEVycm9yQm91bmRhcnkgPSBpbml0LmRldGVjdEVycm9yQm91bmRhcnkgfHwgZGVmYXVsdERldGVjdEVycm9yQm91bmRhcnk7IC8vIFJvdXRlcyBrZXllZCBieSBJRFxuXG4gIGxldCBtYW5pZmVzdCA9IHt9OyAvLyBSb3V0ZXMgaW4gdHJlZSBmb3JtYXQgZm9yIG1hdGNoaW5nXG5cbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKGluaXQucm91dGVzLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCB1bmRlZmluZWQsIG1hbmlmZXN0KTtcbiAgbGV0IGluRmxpZ2h0RGF0YVJvdXRlczsgLy8gQ29uZmlnIGRyaXZlbiBiZWhhdmlvciBmbGFnc1xuXG4gIGxldCBmdXR1cmUgPSBfZXh0ZW5kcyh7XG4gICAgdjdfbm9ybWFsaXplRm9ybU1ldGhvZDogZmFsc2VcbiAgfSwgaW5pdC5mdXR1cmUpOyAvLyBDbGVhbnVwIGZ1bmN0aW9uIGZvciBoaXN0b3J5XG5cblxuICBsZXQgdW5saXN0ZW5IaXN0b3J5ID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbnMgdG8gY2FsbCBvbiBhbGwgc3RhdGUgY2hhbmdlc1xuXG4gIGxldCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBvYmplY3QgdG8gaG9sZCBzY3JvbGwgcmVzdG9yYXRpb24gbG9jYXRpb25zIGR1cmluZyByb3V0aW5nXG5cbiAgbGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbiB0byBnZXQgc2Nyb2xsIHJlc3RvcmF0aW9uIGtleXNcblxuICBsZXQgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuXG4gIGxldCBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7IC8vIE9uZS10aW1lIGZsYWcgdG8gY29udHJvbCB0aGUgaW5pdGlhbCBoeWRyYXRpb24gc2Nyb2xsIHJlc3RvcmF0aW9uLiAgQmVjYXVzZVxuICAvLyB3ZSBkb24ndCBnZXQgdGhlIHNhdmVkIHBvc2l0aW9ucyBmcm9tIDxTY3JvbGxSZXN0b3JhdGlvbiAvPiB1bnRpbCBfYWZ0ZXJfXG4gIC8vIHRoZSBpbml0aWFsIHJlbmRlciwgd2UgbmVlZCB0byBtYW51YWxseSB0cmlnZ2VyIGEgc2VwYXJhdGUgdXBkYXRlU3RhdGUgdG9cbiAgLy8gc2VuZCBhbG9uZyB0aGUgcmVzdG9yZVNjcm9sbFBvc2l0aW9uXG4gIC8vIFNldCB0byB0cnVlIGlmIHdlIGhhdmUgYGh5ZHJhdGlvbkRhdGFgIHNpbmNlIHdlIGFzc3VtZSB3ZSB3ZXJlIFNTUidkIGFuZCB0aGF0XG4gIC8vIFNTUiBkaWQgdGhlIGluaXRpYWwgc2Nyb2xsIHJlc3RvcmF0aW9uLlxuXG4gIGxldCBpbml0aWFsU2Nyb2xsUmVzdG9yZWQgPSBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbDtcbiAgbGV0IGluaXRpYWxNYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLCBpbml0LmJhc2VuYW1lKTtcbiAgbGV0IGluaXRpYWxFcnJvcnMgPSBudWxsO1xuXG4gIGlmIChpbml0aWFsTWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgLy8gSWYgd2UgZG8gbm90IG1hdGNoIGEgdXNlci1wcm92aWRlZC1yb3V0ZSwgZmFsbCBiYWNrIHRvIHRoZSByb290XG4gICAgLy8gdG8gYWxsb3cgdGhlIGVycm9yIGJvdW5kYXJ5IHRvIHRha2Ugb3ZlclxuICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICBwYXRobmFtZTogaW5pdC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgfSk7XG4gICAgbGV0IHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICByb3V0ZVxuICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgIGluaXRpYWxNYXRjaGVzID0gbWF0Y2hlcztcbiAgICBpbml0aWFsRXJyb3JzID0ge1xuICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgbGV0IGluaXRpYWxpemVkID0gLy8gQWxsIGluaXRpYWxNYXRjaGVzIG5lZWQgdG8gYmUgbG9hZGVkIGJlZm9yZSB3ZSdyZSByZWFkeS4gIElmIHdlIGhhdmUgbGF6eVxuICAvLyBmdW5jdGlvbnMgYXJvdW5kIHN0aWxsIHRoZW4gd2UnbGwgbmVlZCB0byBydW4gdGhlbSBpbiBpbml0aWFsaXplKClcbiAgIWluaXRpYWxNYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmxhenkpICYmICggLy8gQW5kIHdlIGhhdmUgdG8gZWl0aGVyIGhhdmUgbm8gbG9hZGVycyBvciBoYXZlIGJlZW4gcHJvdmlkZWQgaHlkcmF0aW9uRGF0YVxuICAhaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubG9hZGVyKSB8fCBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbCk7XG4gIGxldCByb3V0ZXI7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBoaXN0b3J5QWN0aW9uOiBpbml0Lmhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBpbml0Lmhpc3RvcnkubG9jYXRpb24sXG4gICAgbWF0Y2hlczogaW5pdGlhbE1hdGNoZXMsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgIC8vIERvbid0IHJlc3RvcmUgb24gaW5pdGlhbCB1cGRhdGVTdGF0ZSgpIGlmIHdlIHdlcmUgU1NSJ2RcbiAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsID8gZmFsc2UgOiBudWxsLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldDogZmFsc2UsXG4gICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICBsb2FkZXJEYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmxvYWRlckRhdGEgfHwge30sXG4gICAgYWN0aW9uRGF0YTogaW5pdC5oeWRyYXRpb25EYXRhICYmIGluaXQuaHlkcmF0aW9uRGF0YS5hY3Rpb25EYXRhIHx8IG51bGwsXG4gICAgZXJyb3JzOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmVycm9ycyB8fCBpbml0aWFsRXJyb3JzLFxuICAgIGZldGNoZXJzOiBuZXcgTWFwKCksXG4gICAgYmxvY2tlcnM6IG5ldyBNYXAoKVxuICB9OyAvLyAtLSBTdGF0ZWZ1bCBpbnRlcm5hbCB2YXJpYWJsZXMgdG8gbWFuYWdlIG5hdmlnYXRpb25zIC0tXG4gIC8vIEN1cnJlbnQgbmF2aWdhdGlvbiBpbiBwcm9ncmVzcyAodG8gYmUgY29tbWl0dGVkIGluIGNvbXBsZXRlTmF2aWdhdGlvbilcblxuICBsZXQgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7IC8vIFNob3VsZCB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHByZXZlbnQgdGhlIHNjcm9sbCByZXNldCBpZiBzY3JvbGwgY2Fubm90XG4gIC8vIGJlIHJlc3RvcmVkP1xuXG4gIGxldCBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gZmFsc2U7IC8vIEFib3J0Q29udHJvbGxlciBmb3IgdGhlIGFjdGl2ZSBuYXZpZ2F0aW9uXG5cbiAgbGV0IHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcjsgLy8gV2UgdXNlIHRoaXMgdG8gYXZvaWQgdG91Y2hpbmcgaGlzdG9yeSBpbiBjb21wbGV0ZU5hdmlnYXRpb24gaWYgYVxuICAvLyByZXZhbGlkYXRpb24gaXMgZW50aXJlbHkgdW5pbnRlcnJ1cHRlZFxuXG4gIGxldCBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgZmxhZyB0byBmb3JjZSByZXZhbGlkYXRpb24gb2YgYWxsIGxvYWRlcnM6XG4gIC8vICAtIHN1Ym1pc3Npb25zIChjb21wbGV0ZWQgb3IgaW50ZXJydXB0ZWQpXG4gIC8vICAtIHVzZVJldmFsaWRhdGUoKVxuICAvLyAgLSBYLVJlbWl4LVJldmFsaWRhdGUgKGZyb20gcmVkaXJlY3QpXG5cbiAgbGV0IGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSByb3V0ZXMgdGhhdCByZXF1aXJlIHJldmFsaWRhdGlvbiBkdWVcbiAgLy8gdG8gYSBjYW5jZWxsZWQgZGVmZXJyZWQgb24gYWN0aW9uIHN1Ym1pc3Npb25cblxuICBsZXQgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSBmZXRjaGVyIGxvYWRzIHRoYXQgd2VyZSBjYW5jZWxsZWQgYnkgYW5cbiAgLy8gYWN0aW9uIG5hdmlnYXRpb24gYW5kIHJlcXVpcmUgcmV2YWxpZGF0aW9uXG5cbiAgbGV0IGNhbmNlbGxlZEZldGNoZXJMb2FkcyA9IFtdOyAvLyBBYm9ydENvbnRyb2xsZXJzIGZvciBhbnkgaW4tZmxpZ2h0IGZldGNoZXJzXG5cbiAgbGV0IGZldGNoQ29udHJvbGxlcnMgPSBuZXcgTWFwKCk7IC8vIFRyYWNrIGxvYWRzIGJhc2VkIG9uIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHN0YXJ0ZWRcblxuICBsZXQgaW5jcmVtZW50aW5nTG9hZElkID0gMDsgLy8gVHJhY2sgdGhlIG91dHN0YW5kaW5nIHBlbmRpbmcgbmF2aWdhdGlvbiBkYXRhIGxvYWQgdG8gYmUgY29tcGFyZWQgYWdhaW5zdFxuICAvLyB0aGUgZ2xvYmFsbHkgaW5jcmVtZW50aW5nIGxvYWQgd2hlbiBhIGZldGNoZXIgbG9hZCBsYW5kcyBhZnRlciBhIGNvbXBsZXRlZFxuICAvLyBuYXZpZ2F0aW9uXG5cbiAgbGV0IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkID0gLTE7IC8vIEZldGNoZXJzIHRoYXQgdHJpZ2dlcmVkIGRhdGEgcmVsb2FkcyBhcyBhIHJlc3VsdCBvZiB0aGVpciBhY3Rpb25zXG5cbiAgbGV0IGZldGNoUmVsb2FkSWRzID0gbmV3IE1hcCgpOyAvLyBGZXRjaGVycyB0aGF0IHRyaWdnZXJlZCByZWRpcmVjdCBuYXZpZ2F0aW9ucyBmcm9tIHRoZWlyIGFjdGlvbnNcblxuICBsZXQgZmV0Y2hSZWRpcmVjdElkcyA9IG5ldyBTZXQoKTsgLy8gTW9zdCByZWNlbnQgaHJlZi9tYXRjaCBmb3IgZmV0Y2hlci5sb2FkIGNhbGxzIGZvciBmZXRjaGVyc1xuXG4gIGxldCBmZXRjaExvYWRNYXRjaGVzID0gbmV3IE1hcCgpOyAvLyBTdG9yZSBEZWZlcnJlZERhdGEgaW5zdGFuY2VzIGZvciBhY3RpdmUgcm91dGUgbWF0Y2hlcy4gIFdoZW4gYVxuICAvLyByb3V0ZSBsb2FkZXIgcmV0dXJucyBkZWZlcigpIHdlIHN0aWNrIG9uZSBpbiBoZXJlLiAgVGhlbiwgd2hlbiBhIG5lc3RlZFxuICAvLyBwcm9taXNlIHJlc29sdmVzIHdlIHVwZGF0ZSBsb2FkZXJEYXRhLiAgSWYgYSBuZXcgbmF2aWdhdGlvbiBzdGFydHMgd2VcbiAgLy8gY2FuY2VsIGFjdGl2ZSBkZWZlcnJlZHMgZm9yIGVsaW1pbmF0ZWQgcm91dGVzLlxuXG4gIGxldCBhY3RpdmVEZWZlcnJlZHMgPSBuZXcgTWFwKCk7IC8vIFN0b3JlIGJsb2NrZXIgZnVuY3Rpb25zIGluIGEgc2VwYXJhdGUgTWFwIG91dHNpZGUgb2Ygcm91dGVyIHN0YXRlIHNpbmNlXG4gIC8vIHdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIFVJIHN0YXRlIGlmIHRoZXkgY2hhbmdlXG5cbiAgbGV0IGJsb2NrZXJGdW5jdGlvbnMgPSBuZXcgTWFwKCk7IC8vIEZsYWcgdG8gaWdub3JlIHRoZSBuZXh0IGhpc3RvcnkgdXBkYXRlLCBzbyB3ZSBjYW4gcmV2ZXJ0IHRoZSBVUkwgY2hhbmdlIG9uXG4gIC8vIGEgUE9QIG5hdmlnYXRpb24gdGhhdCB3YXMgYmxvY2tlZCBieSB0aGUgdXNlciB3aXRob3V0IHRvdWNoaW5nIHJvdXRlciBzdGF0ZVxuXG4gIGxldCBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlOyAvLyBJbml0aWFsaXplIHRoZSByb3V0ZXIsIGFsbCBzaWRlIGVmZmVjdHMgc2hvdWxkIGJlIGtpY2tlZCBvZmYgZnJvbSBoZXJlLlxuICAvLyBJbXBsZW1lbnRlZCBhcyBhIEZsdWVudCBBUEkgZm9yIGVhc2Ugb2Y6XG4gIC8vICAgbGV0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcihpbml0KS5pbml0aWFsaXplKCk7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBJZiBoaXN0b3J5IGluZm9ybXMgdXMgb2YgYSBQT1AgbmF2aWdhdGlvbiwgc3RhcnQgdGhlIG5hdmlnYXRpb24gYnV0IGRvIG5vdCB1cGRhdGVcbiAgICAvLyBzdGF0ZS4gIFdlJ2xsIHVwZGF0ZSBvdXIgb3duIHN0YXRlIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG4gICAgdW5saXN0ZW5IaXN0b3J5ID0gaW5pdC5oaXN0b3J5Lmxpc3RlbihfcmVmID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGlvbjogaGlzdG9yeUFjdGlvbixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9ID0gX3JlZjtcblxuICAgICAgLy8gSWdub3JlIHRoaXMgZXZlbnQgaWYgaXQgd2FzIGp1c3QgdXMgcmVzZXR0aW5nIHRoZSBVUkwgZnJvbSBhXG4gICAgICAvLyBibG9ja2VkIFBPUCBuYXZpZ2F0aW9uXG4gICAgICBpZiAoaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUpIHtcbiAgICAgICAgaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuaW5nKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCB8fCBkZWx0YSAhPSBudWxsLCBcIllvdSBhcmUgdHJ5aW5nIHRvIHVzZSBhIGJsb2NrZXIgb24gYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIFwiICsgXCJ0aGF0IHdhcyBub3QgY3JlYXRlZCBieSBAcmVtaXgtcnVuL3JvdXRlci4gVGhpcyB3aWxsIGZhaWwgc2lsZW50bHkgaW4gXCIgKyBcInByb2R1Y3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5hdmlnYXRpbmcgb3V0c2lkZSB0aGUgcm91dGVyIFwiICsgXCJ2aWEgYHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZWAvYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCBpbnN0ZWFkIG9mIHVzaW5nIFwiICsgXCJyb3V0ZXIgbmF2aWdhdGlvbiBBUElzLiAgVGhpcyBjYW4gYWxzbyBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBcIiArIFwiY3JlYXRlSGFzaFJvdXRlciBhbmQgdGhlIHVzZXIgbWFudWFsbHkgY2hhbmdlcyB0aGUgVVJMLlwiKTtcbiAgICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaGlzdG9yeUFjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChibG9ja2VyS2V5ICYmIGRlbHRhICE9IG51bGwpIHtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgVVJMIHRvIG1hdGNoIHRoZSBjdXJyZW50IFVJLCBidXQgZG9uJ3QgdXBkYXRlIHJvdXRlciBzdGF0ZVxuICAgICAgICBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGluaXQuaGlzdG9yeS5nbyhkZWx0YSAqIC0xKTsgLy8gUHV0IHRoZSBibG9ja2VyIGludG8gYSBibG9ja2VkIHN0YXRlXG5cbiAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgc3RhdGU6IFwiYmxvY2tlZFwiLFxuICAgICAgICAgIGxvY2F0aW9uLFxuXG4gICAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgIH0pOyAvLyBSZS1kbyB0aGUgc2FtZSBQT1AgbmF2aWdhdGlvbiB3ZSBqdXN0IGJsb2NrZWRcblxuICAgICAgICAgICAgaW5pdC5oaXN0b3J5LmdvKGRlbHRhKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICBkZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpO1xuICAgICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICBibG9ja2VyczogbmV3IE1hcChyb3V0ZXIuc3RhdGUuYmxvY2tlcnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbik7XG4gICAgfSk7IC8vIEtpY2sgb2ZmIGluaXRpYWwgZGF0YSBsb2FkIGlmIG5lZWRlZC4gIFVzZSBQb3AgdG8gYXZvaWQgbW9kaWZ5aW5nIGhpc3RvcnlcbiAgICAvLyBOb3RlIHdlIGRvbid0IGRvIGFueSBoYW5kbGluZyBvZiBsYXp5IGhlcmUuICBGb3IgU1BBJ3MgaXQnbGwgZ2V0IGhhbmRsZWRcbiAgICAvLyBpbiB0aGUgbm9ybWFsIG5hdmlnYXRpb24gZmxvdy4gIEZvciBTU1IgaXQncyBleHBlY3RlZCB0aGF0IGxhenkgbW9kdWxlcyBhcmVcbiAgICAvLyByZXNvbHZlZCBwcmlvciB0byByb3V0ZXIgY3JlYXRpb24gc2luY2Ugd2UgY2FuJ3QgZ28gaW50byBhIGZhbGxiYWNrRWxlbWVudFxuICAgIC8vIFVJIGZvciBTU1InZCBhcHBzXG5cbiAgICBpZiAoIXN0YXRlLmluaXRpYWxpemVkKSB7XG4gICAgICBzdGFydE5hdmlnYXRpb24oQWN0aW9uLlBvcCwgc3RhdGUubG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByb3V0ZXI7XG4gIH0gLy8gQ2xlYW4gdXAgYSByb3V0ZXIgYW5kIGl0J3Mgc2lkZSBlZmZlY3RzXG5cblxuICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh1bmxpc3Rlbkhpc3RvcnkpIHtcbiAgICAgIHVubGlzdGVuSGlzdG9yeSgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHN0YXRlLmZldGNoZXJzLmZvckVhY2goKF8sIGtleSkgPT4gZGVsZXRlRmV0Y2hlcihrZXkpKTtcbiAgICBzdGF0ZS5ibG9ja2Vycy5mb3JFYWNoKChfLCBrZXkpID0+IGRlbGV0ZUJsb2NrZXIoa2V5KSk7XG4gIH0gLy8gU3Vic2NyaWJlIHRvIHN0YXRlIHVwZGF0ZXMgZm9yIHRoZSByb3V0ZXJcblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShmbikge1xuICAgIHN1YnNjcmliZXJzLmFkZChmbik7XG4gICAgcmV0dXJuICgpID0+IHN1YnNjcmliZXJzLmRlbGV0ZShmbik7XG4gIH0gLy8gVXBkYXRlIG91ciBzdGF0ZSBhbmQgbm90aWZ5IHRoZSBjYWxsaW5nIGNvbnRleHQgb2YgdGhlIGNoYW5nZVxuXG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIHN1YnNjcmliZXJzLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyKHN0YXRlKSk7XG4gIH0gLy8gQ29tcGxldGUgYSBuYXZpZ2F0aW9uIHJldHVybmluZyB0aGUgc3RhdGUubmF2aWdhdGlvbiBiYWNrIHRvIHRoZSBJRExFX05BVklHQVRJT05cbiAgLy8gYW5kIHNldHRpbmcgc3RhdGUuW2hpc3RvcnlBY3Rpb24vbG9jYXRpb24vbWF0Y2hlc10gdG8gdGhlIG5ldyByb3V0ZS5cbiAgLy8gLSBMb2NhdGlvbiBpcyBhIHJlcXVpcmVkIHBhcmFtXG4gIC8vIC0gTmF2aWdhdGlvbiB3aWxsIGFsd2F5cyBiZSBzZXQgdG8gSURMRV9OQVZJR0FUSU9OXG4gIC8vIC0gQ2FuIHBhc3MgYW55IG90aGVyIHN0YXRlIGluIG5ld1N0YXRlXG5cblxuICBmdW5jdGlvbiBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIG5ld1N0YXRlKSB7XG4gICAgdmFyIF9sb2NhdGlvbiRzdGF0ZSwgX2xvY2F0aW9uJHN0YXRlMjtcblxuICAgIC8vIERlZHVjZSBpZiB3ZSdyZSBpbiBhIGxvYWRpbmcvYWN0aW9uUmVsb2FkIHN0YXRlOlxuICAgIC8vIC0gV2UgaGF2ZSBjb21taXR0ZWQgYWN0aW9uRGF0YSBpbiB0aGUgc3RvcmVcbiAgICAvLyAtIFRoZSBjdXJyZW50IG5hdmlnYXRpb24gd2FzIGEgbXV0YXRpb24gc3VibWlzc2lvblxuICAgIC8vIC0gV2UncmUgcGFzdCB0aGUgc3VibWl0dGluZyBzdGF0ZSBhbmQgaW50byB0aGUgbG9hZGluZyBzdGF0ZVxuICAgIC8vIC0gVGhlIGxvY2F0aW9uIGJlaW5nIGxvYWRlZCBpcyBub3QgdGhlIHJlc3VsdCBvZiBhIHJlZGlyZWN0XG4gICAgbGV0IGlzQWN0aW9uUmVsb2FkID0gc3RhdGUuYWN0aW9uRGF0YSAhPSBudWxsICYmIHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiBzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiAoKF9sb2NhdGlvbiRzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2xvY2F0aW9uJHN0YXRlLl9pc1JlZGlyZWN0KSAhPT0gdHJ1ZTtcbiAgICBsZXQgYWN0aW9uRGF0YTtcblxuICAgIGlmIChuZXdTdGF0ZS5hY3Rpb25EYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGUuYWN0aW9uRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBhY3Rpb25EYXRhID0gbmV3U3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVtcHR5IGFjdGlvbkRhdGEgLT4gY2xlYXIgcHJpb3IgYWN0aW9uRGF0YSBkdWUgdG8gYW4gYWN0aW9uIGVycm9yXG4gICAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBY3Rpb25SZWxvYWQpIHtcbiAgICAgIC8vIEtlZXAgdGhlIGN1cnJlbnQgZGF0YSBpZiB3ZSdyZSB3cmFwcGluZyB1cCB0aGUgYWN0aW9uIHJlbG9hZFxuICAgICAgYWN0aW9uRGF0YSA9IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsZWFyIGFjdGlvbkRhdGEgb24gYW55IG90aGVyIGNvbXBsZXRlZCBuYXZpZ2F0aW9uc1xuICAgICAgYWN0aW9uRGF0YSA9IG51bGw7XG4gICAgfSAvLyBBbHdheXMgcHJlc2VydmUgYW55IGV4aXN0aW5nIGxvYWRlckRhdGEgZnJvbSByZS11c2VkIHJvdXRlc1xuXG5cbiAgICBsZXQgbG9hZGVyRGF0YSA9IG5ld1N0YXRlLmxvYWRlckRhdGEgPyBtZXJnZUxvYWRlckRhdGEoc3RhdGUubG9hZGVyRGF0YSwgbmV3U3RhdGUubG9hZGVyRGF0YSwgbmV3U3RhdGUubWF0Y2hlcyB8fCBbXSwgbmV3U3RhdGUuZXJyb3JzKSA6IHN0YXRlLmxvYWRlckRhdGE7IC8vIE9uIGEgc3VjY2Vzc2Z1bCBuYXZpZ2F0aW9uIHdlIGNhbiBhc3N1bWUgd2UgZ290IHRocm91Z2ggYWxsIGJsb2NrZXJzXG4gICAgLy8gc28gd2UgY2FuIHN0YXJ0IGZyZXNoXG5cbiAgICBmb3IgKGxldCBba2V5XSBvZiBibG9ja2VyRnVuY3Rpb25zKSB7XG4gICAgICBkZWxldGVCbG9ja2VyKGtleSk7XG4gICAgfSAvLyBBbHdheXMgcmVzcGVjdCB0aGUgdXNlciBmbGFnLiAgT3RoZXJ3aXNlIGRvbid0IHJlc2V0IG9uIG11dGF0aW9uXG4gICAgLy8gc3VibWlzc2lvbiBuYXZpZ2F0aW9ucyB1bmxlc3MgdGhleSByZWRpcmVjdFxuXG5cbiAgICBsZXQgcHJldmVudFNjcm9sbFJlc2V0ID0gcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSB8fCBzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QgIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCkgJiYgKChfbG9jYXRpb24kc3RhdGUyID0gbG9jYXRpb24uc3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbG9jYXRpb24kc3RhdGUyLl9pc1JlZGlyZWN0KSAhPT0gdHJ1ZTtcblxuICAgIGlmIChpbkZsaWdodERhdGFSb3V0ZXMpIHtcbiAgICAgIGRhdGFSb3V0ZXMgPSBpbkZsaWdodERhdGFSb3V0ZXM7XG4gICAgICBpbkZsaWdodERhdGFSb3V0ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe30sIG5ld1N0YXRlLCB7XG4gICAgICBhY3Rpb25EYXRhLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGhpc3RvcnlBY3Rpb246IHBlbmRpbmdBY3Rpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUubWF0Y2hlcyB8fCBzdGF0ZS5tYXRjaGVzKSxcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgIH0pKTtcblxuICAgIGlmIChpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIDsgZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlBvcCkgOyBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUHVzaCkge1xuICAgICAgaW5pdC5oaXN0b3J5LnB1c2gobG9jYXRpb24sIGxvY2F0aW9uLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5SZXBsYWNlKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH0gLy8gUmVzZXQgc3RhdGVmdWwgbmF2aWdhdGlvbiB2YXJzXG5cblxuICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSBmYWxzZTtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTtcbiAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMgPSBbXTtcbiAgfSAvLyBUcmlnZ2VyIGEgbmF2aWdhdGlvbiBldmVudCwgd2hpY2ggY2FuIGVpdGhlciBiZSBhIG51bWVyaWNhbCBQT1Agb3IgYSBQVVNIXG4gIC8vIHJlcGxhY2Ugd2l0aCBhbiBvcHRpb25hbCBzdWJtaXNzaW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZSh0bywgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgIHBhdGgsXG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgZXJyb3JcbiAgICB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKHRvLCBmdXR1cmUsIG9wdHMpO1xuICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBzdGF0ZS5sb2NhdGlvbjtcbiAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhdGUubG9jYXRpb24sIHBhdGgsIG9wdHMgJiYgb3B0cy5zdGF0ZSk7IC8vIFdoZW4gdXNpbmcgbmF2aWdhdGUgYXMgYSBQVVNIL1JFUExBQ0Ugd2UgYXJlbid0IHJlYWRpbmcgYW4gYWxyZWFkeS1lbmNvZGVkXG4gICAgLy8gVVJMIGZyb20gd2luZG93LmxvY2F0aW9uLCBzbyB3ZSBuZWVkIHRvIGVuY29kZSBpdCBoZXJlIHNvIHRoZSBiZWhhdmlvclxuICAgIC8vIHJlbWFpbnMgdGhlIHNhbWUgYXMgUE9QIGFuZCBub24tZGF0YS1yb3V0ZXIgdXNhZ2VzLiAgbmV3IFVSTCgpIGRvZXMgYWxsXG4gICAgLy8gdGhlIHNhbWUgZW5jb2Rpbmcgd2UnZCBnZXQgZnJvbSBhIGhpc3RvcnkucHVzaFN0YXRlL3dpbmRvdy5sb2NhdGlvbiByZWFkXG4gICAgLy8gd2l0aG91dCBoYXZpbmcgdG8gdG91Y2ggaGlzdG9yeVxuXG4gICAgbmV4dExvY2F0aW9uID0gX2V4dGVuZHMoe30sIG5leHRMb2NhdGlvbiwgaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKG5leHRMb2NhdGlvbikpO1xuICAgIGxldCB1c2VyUmVwbGFjZSA9IG9wdHMgJiYgb3B0cy5yZXBsYWNlICE9IG51bGwgPyBvcHRzLnJlcGxhY2UgOiB1bmRlZmluZWQ7XG4gICAgbGV0IGhpc3RvcnlBY3Rpb24gPSBBY3Rpb24uUHVzaDtcblxuICAgIGlmICh1c2VyUmVwbGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAodXNlclJlcGxhY2UgPT09IGZhbHNlKSA7IGVsc2UgaWYgKHN1Ym1pc3Npb24gIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkgJiYgc3VibWlzc2lvbi5mb3JtQWN0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgLy8gQnkgZGVmYXVsdCBvbiBzdWJtaXNzaW9ucyB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3ZSBSRVBMQUNFIHNvIHRoYXRcbiAgICAgIC8vIHVzZXJzIGRvbid0IGhhdmUgdG8gZG91YmxlLWNsaWNrIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgdG8gdGhlIHByaW9yXG4gICAgICAvLyBsb2NhdGlvbi4gIElmIHRoZSB1c2VyIHJlZGlyZWN0cyB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBmcm9tIHRoZVxuICAgICAgLy8gYWN0aW9uL2xvYWRlciB0aGlzIHdpbGwgYmUgaWdub3JlZCBhbmQgdGhlIHJlZGlyZWN0IHdpbGwgYmUgYSBQVVNIXG4gICAgICBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgfVxuXG4gICAgbGV0IHByZXZlbnRTY3JvbGxSZXNldCA9IG9wdHMgJiYgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIiBpbiBvcHRzID8gb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUgOiB1bmRlZmluZWQ7XG4gICAgbGV0IGJsb2NrZXJLZXkgPSBzaG91bGRCbG9ja05hdmlnYXRpb24oe1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKGJsb2NrZXJLZXkpIHtcbiAgICAgIC8vIFB1dCB0aGUgYmxvY2tlciBpbnRvIGEgYmxvY2tlZCBzdGF0ZVxuICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgIHN0YXRlOiBcImJsb2NrZWRcIixcbiAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcblxuICAgICAgICBwcm9jZWVkKCkge1xuICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgc3RhdGU6IFwicHJvY2VlZGluZ1wiLFxuICAgICAgICAgICAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb25cbiAgICAgICAgICB9KTsgLy8gU2VuZCB0aGUgc2FtZSBuYXZpZ2F0aW9uIHRocm91Z2hcblxuICAgICAgICAgIG5hdmlnYXRlKHRvLCBvcHRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICBkZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpO1xuICAgICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbmV4dExvY2F0aW9uLCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgLy8gU2VuZCB0aHJvdWdoIHRoZSBmb3JtRGF0YSBzZXJpYWxpemF0aW9uIGVycm9yIGlmIHdlIGhhdmUgb25lIHNvIHdlIGNhblxuICAgICAgLy8gcmVuZGVyIGF0IHRoZSByaWdodCBlcnJvciBib3VuZGFyeSBhZnRlciB3ZSBtYXRjaCByb3V0ZXNcbiAgICAgIHBlbmRpbmdFcnJvcjogZXJyb3IsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICByZXBsYWNlOiBvcHRzICYmIG9wdHMucmVwbGFjZVxuICAgIH0pO1xuICB9IC8vIFJldmFsaWRhdGUgYWxsIGN1cnJlbnQgbG9hZGVycy4gIElmIGEgbmF2aWdhdGlvbiBpcyBpbiBwcm9ncmVzcyBvciBpZiB0aGlzXG4gIC8vIGlzIGludGVycnVwdGVkIGJ5IGEgbmF2aWdhdGlvbiwgYWxsb3cgdGhpcyB0byBcInN1Y2NlZWRcIiBieSBjYWxsaW5nIGFsbFxuICAvLyBsb2FkZXJzIGR1cmluZyB0aGUgbmV4dCBsb2FkZXIgcm91bmRcblxuXG4gIGZ1bmN0aW9uIHJldmFsaWRhdGUoKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICByZXZhbGlkYXRpb246IFwibG9hZGluZ1wiXG4gICAgfSk7IC8vIElmIHdlJ3JlIGN1cnJlbnRseSBzdWJtaXR0aW5nIGFuIGFjdGlvbiwgd2UgZG9uJ3QgbmVlZCB0byBzdGFydCBhIG5ld1xuICAgIC8vIG5hdmlnYXRpb24sIHdlJ2xsIGp1c3QgbGV0IHRoZSBmb2xsb3cgdXAgbG9hZGVyIGV4ZWN1dGlvbiBjYWxsIGFsbCBsb2FkZXJzXG5cbiAgICBpZiAoc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlJ3JlIGN1cnJlbnRseSBpbiBhbiBpZGxlIHN0YXRlLCBzdGFydCBhIG5ldyBuYXZpZ2F0aW9uIGZvciB0aGUgY3VycmVudFxuICAgIC8vIGFjdGlvbi9sb2NhdGlvbiBhbmQgbWFyayBpdCBhcyB1bmludGVycnVwdGVkLCB3aGljaCB3aWxsIHNraXAgdGhlIGhpc3RvcnlcbiAgICAvLyB1cGRhdGUgaW4gY29tcGxldGVOYXZpZ2F0aW9uXG5cblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKHN0YXRlLmhpc3RvcnlBY3Rpb24sIHN0YXRlLmxvY2F0aW9uLCB7XG4gICAgICAgIHN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBPdGhlcndpc2UsIGlmIHdlJ3JlIGN1cnJlbnRseSBpbiBhIGxvYWRpbmcgc3RhdGUsIGp1c3Qgc3RhcnQgYSBuZXdcbiAgICAvLyBuYXZpZ2F0aW9uIHRvIHRoZSBuYXZpZ2F0aW9uLmxvY2F0aW9uIGJ1dCBkbyBub3QgdHJpZ2dlciBhbiB1bmludGVycnVwdGVkXG4gICAgLy8gcmV2YWxpZGF0aW9uIHNvIHRoYXQgaGlzdG9yeSBjb3JyZWN0bHkgdXBkYXRlcyBvbmNlIHRoZSBuYXZpZ2F0aW9uIGNvbXBsZXRlc1xuXG5cbiAgICBzdGFydE5hdmlnYXRpb24ocGVuZGluZ0FjdGlvbiB8fCBzdGF0ZS5oaXN0b3J5QWN0aW9uLCBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICBvdmVycmlkZU5hdmlnYXRpb246IHN0YXRlLm5hdmlnYXRpb25cbiAgICB9KTtcbiAgfSAvLyBTdGFydCBhIG5hdmlnYXRpb24gdG8gdGhlIGdpdmVuIGFjdGlvbi9sb2NhdGlvbi4gIENhbiBvcHRpb25hbGx5IHByb3ZpZGUgYVxuICAvLyBvdmVycmlkZU5hdmlnYXRpb24gd2hpY2ggd2lsbCBvdmVycmlkZSB0aGUgbm9ybWFsTG9hZCBpbiB0aGUgY2FzZSBvZiBhIHJlZGlyZWN0XG4gIC8vIG5hdmlnYXRpb25cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbiwgb3B0cykge1xuICAgIC8vIEFib3J0IGFueSBpbi1wcm9ncmVzcyBuYXZpZ2F0aW9ucyBhbmQgc3RhcnQgYSBuZXcgb25lLiBVbnNldCBhbnkgb25nb2luZ1xuICAgIC8vIHVuaW50ZXJydXB0ZWQgcmV2YWxpZGF0aW9ucyB1bmxlc3MgdG9sZCBvdGhlcndpc2UsIHNpbmNlIHdlIHdhbnQgdGhpc1xuICAgIC8vIG5ldyBuYXZpZ2F0aW9uIHRvIHVwZGF0ZSBoaXN0b3J5IG5vcm1hbGx5XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgcGVuZGluZ0FjdGlvbiA9IGhpc3RvcnlBY3Rpb247XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gKG9wdHMgJiYgb3B0cy5zdGFydFVuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pID09PSB0cnVlOyAvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBldmVyeSB0aW1lIHdlIHN0YXJ0IGEgbmV3IG5hdmlnYXRpb24sXG4gICAgLy8gYW5kIHRyYWNrIHdoZXRoZXIgd2Ugc2hvdWxkIHJlc2V0IHNjcm9sbCBvbiBjb21wbGV0aW9uXG5cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IGxvYWRpbmdOYXZpZ2F0aW9uID0gb3B0cyAmJiBvcHRzLm92ZXJyaWRlTmF2aWdhdGlvbjtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBsb2NhdGlvbiwgaW5pdC5iYXNlbmFtZSk7IC8vIFNob3J0IGNpcmN1aXQgd2l0aCBhIDQwNCBvbiB0aGUgcm9vdCBlcnJvciBib3VuZGFyeSBpZiB3ZSBtYXRjaCBub3RoaW5nXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXNUb1VzZSk7IC8vIENhbmNlbCBhbGwgcGVuZGluZyBkZWZlcnJlZCBvbiA0MDRzIHNpbmNlIHdlIGRvbid0IGtlZXAgYW55IHJvdXRlc1xuXG4gICAgICBjYW5jZWxBY3RpdmVEZWZlcnJlZHMoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFNob3J0IGNpcmN1aXQgaWYgaXQncyBvbmx5IGEgaGFzaCBjaGFuZ2UgYW5kIG5vdCBhIG11dGF0aW9uIHN1Ym1pc3Npb25cbiAgICAvLyBGb3IgZXhhbXBsZSwgb24gL3BhZ2UjaGFzaCBhbmQgc3VibWl0IGEgPEZvcm0gbWV0aG9kPVwicG9zdFwiPiB3aGljaCB3aWxsXG4gICAgLy8gZGVmYXVsdCB0byBhIG5hdmlnYXRpb24gdG8gL3BhZ2VcblxuXG4gICAgaWYgKGlzSGFzaENoYW5nZU9ubHkoc3RhdGUubG9jYXRpb24sIGxvY2F0aW9uKSAmJiAhKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSkge1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGEgY29udHJvbGxlci9SZXF1ZXN0IGZvciB0aGlzIG5hdmlnYXRpb25cblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCByZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBsb2NhdGlvbiwgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbCwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24pO1xuICAgIGxldCBwZW5kaW5nQWN0aW9uRGF0YTtcbiAgICBsZXQgcGVuZGluZ0Vycm9yO1xuXG4gICAgaWYgKG9wdHMgJiYgb3B0cy5wZW5kaW5nRXJyb3IpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwZW5kaW5nRXJyb3IsIGl0IG1lYW5zIHRoZSB1c2VyIGF0dGVtcHRlZCBhIEdFVCBzdWJtaXNzaW9uXG4gICAgICAvLyB3aXRoIGJpbmFyeSBGb3JtRGF0YSBzbyBhc3NpZ24gaGVyZSBhbmQgc2tpcCB0byBoYW5kbGVMb2FkZXJzLiAgVGhhdFxuICAgICAgLy8gd2F5IHdlIGhhbmRsZSBjYWxsaW5nIGxvYWRlcnMgYWJvdmUgdGhlIGJvdW5kYXJ5IGV0Yy4gIEl0J3Mgbm90IHJlYWxseVxuICAgICAgLy8gZGlmZmVyZW50IGZyb20gYW4gYWN0aW9uRXJyb3IgaW4gdGhhdCBzZW5zZS5cbiAgICAgIHBlbmRpbmdFcnJvciA9IHtcbiAgICAgICAgW2ZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcykucm91dGUuaWRdOiBvcHRzLnBlbmRpbmdFcnJvclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICAvLyBDYWxsIGFjdGlvbiBpZiB3ZSByZWNlaXZlZCBhbiBhY3Rpb24gc3VibWlzc2lvblxuICAgICAgbGV0IGFjdGlvbk91dHB1dCA9IGF3YWl0IGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgb3B0cy5zdWJtaXNzaW9uLCBtYXRjaGVzLCB7XG4gICAgICAgIHJlcGxhY2U6IG9wdHMucmVwbGFjZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3Rpb25PdXRwdXQuc2hvcnRDaXJjdWl0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nQWN0aW9uRGF0YSA9IGFjdGlvbk91dHB1dC5wZW5kaW5nQWN0aW9uRGF0YTtcbiAgICAgIHBlbmRpbmdFcnJvciA9IGFjdGlvbk91dHB1dC5wZW5kaW5nQWN0aW9uRXJyb3I7XG5cbiAgICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGxvY2F0aW9uXG4gICAgICB9LCBvcHRzLnN1Ym1pc3Npb24pO1xuXG4gICAgICBsb2FkaW5nTmF2aWdhdGlvbiA9IG5hdmlnYXRpb247IC8vIENyZWF0ZSBhIEdFVCByZXF1ZXN0IGZvciB0aGUgbG9hZGVyc1xuXG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdC51cmwsIHtcbiAgICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbFxuICAgICAgfSk7XG4gICAgfSAvLyBDYWxsIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIHNob3J0Q2lyY3VpdGVkLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBhd2FpdCBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBsb2FkaW5nTmF2aWdhdGlvbiwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24sIG9wdHMgJiYgb3B0cy5mZXRjaGVyU3VibWlzc2lvbiwgb3B0cyAmJiBvcHRzLnJlcGxhY2UsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpO1xuXG4gICAgaWYgKHNob3J0Q2lyY3VpdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDbGVhbiB1cCBub3cgdGhhdCB0aGUgYWN0aW9uL2xvYWRlcnMgaGF2ZSBjb21wbGV0ZWQuICBEb24ndCBjbGVhbiB1cCBpZlxuICAgIC8vIHdlIHNob3J0IGNpcmN1aXRlZCBiZWNhdXNlIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciB3aWxsIGhhdmUgYWxyZWFkeVxuICAgIC8vIGJlZW4gYXNzaWduZWQgdG8gYSBuZXcgY29udHJvbGxlciBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgX2V4dGVuZHMoe1xuICAgICAgbWF0Y2hlc1xuICAgIH0sIHBlbmRpbmdBY3Rpb25EYXRhID8ge1xuICAgICAgYWN0aW9uRGF0YTogcGVuZGluZ0FjdGlvbkRhdGFcbiAgICB9IDoge30sIHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9KSk7XG4gIH0gLy8gQ2FsbCB0aGUgYWN0aW9uIG1hdGNoZWQgYnkgdGhlIGxlYWYgcm91dGUgZm9yIHRoaXMgbmF2aWdhdGlvbiBhbmQgaGFuZGxlXG4gIC8vIHJlZGlyZWN0cy9lcnJvcnNcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgc3VibWlzc2lvbiwgbWF0Y2hlcywgb3B0cykge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7IC8vIFB1dCB1cyBpbiBhIHN1Ym1pdHRpbmcgc3RhdGVcblxuICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwic3VibWl0dGluZ1wiLFxuICAgICAgbG9jYXRpb25cbiAgICB9LCBzdWJtaXNzaW9uKTtcblxuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hdmlnYXRpb25cbiAgICB9KTsgLy8gQ2FsbCBvdXIgYWN0aW9uIGFuZCBnZXQgdGhlIHJlc3VsdFxuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgYWN0aW9uTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG5cbiAgICBpZiAoIWFjdGlvbk1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhYWN0aW9uTWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIHJlcXVlc3QsIGFjdGlvbk1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCByZXBsYWNlO1xuXG4gICAgICBpZiAob3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlID0gb3B0cy5yZXBsYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGlkbid0IGV4cGxpY2l0eSBpbmRpY2F0ZSByZXBsYWNlIGJlaGF2aW9yLCByZXBsYWNlIGlmXG4gICAgICAgIC8vIHdlIHJlZGlyZWN0ZWQgdG8gdGhlIGV4YWN0IHNhbWUgbG9jYXRpb24gd2UncmUgY3VycmVudGx5IGF0IHRvIGF2b2lkXG4gICAgICAgIC8vIGRvdWJsZSBiYWNrLWJ1dHRvbnNcbiAgICAgICAgcmVwbGFjZSA9IHJlc3VsdC5sb2NhdGlvbiA9PT0gc3RhdGUubG9jYXRpb24ucGF0aG5hbWUgKyBzdGF0ZS5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZXN1bHQsIHtcbiAgICAgICAgc3VibWlzc2lvbixcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTdG9yZSBvZmYgdGhlIHBlbmRpbmcgZXJyb3IgLSB3ZSB1c2UgaXQgdG8gZGV0ZXJtaW5lIHdoaWNoIGxvYWRlcnNcbiAgICAgIC8vIHRvIGNhbGwgYW5kIHdpbGwgY29tbWl0IGl0IHdoZW4gd2UgY29tcGxldGUgdGhlIG5hdmlnYXRpb25cbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBhY3Rpb25NYXRjaC5yb3V0ZS5pZCk7IC8vIEJ5IGRlZmF1bHQsIGFsbCBzdWJtaXNzaW9ucyBhcmUgUkVQTEFDRSBuYXZpZ2F0aW9ucywgYnV0IGlmIHRoZVxuICAgICAgLy8gYWN0aW9uIHRocmV3IGFuIGVycm9yIHRoYXQnbGwgYmUgcmVuZGVyZWQgaW4gYW4gZXJyb3JFbGVtZW50LCB3ZSBmYWxsXG4gICAgICAvLyBiYWNrIHRvIFBVU0ggc28gdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgYmFjayB0b1xuICAgICAgLy8gdGhlIHByZS1zdWJtaXNzaW9uIGZvcm0gbG9jYXRpb24gdG8gdHJ5IGFnYWluXG5cbiAgICAgIGlmICgob3B0cyAmJiBvcHRzLnJlcGxhY2UpICE9PSB0cnVlKSB7XG4gICAgICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gU2VuZCBiYWNrIGFuIGVtcHR5IG9iamVjdCB3ZSBjYW4gdXNlIHRvIGNsZWFyIG91dCBhbnkgcHJpb3IgYWN0aW9uRGF0YVxuICAgICAgICBwZW5kaW5nQWN0aW9uRGF0YToge30sXG4gICAgICAgIHBlbmRpbmdBY3Rpb25FcnJvcjoge1xuICAgICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhOiB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBDYWxsIGFsbCBhcHBsaWNhYmxlIGxvYWRlcnMgZm9yIHRoZSBnaXZlbiBtYXRjaGVzLCBoYW5kbGluZyByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgZXRjLlxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9hZGVycyhyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgb3ZlcnJpZGVOYXZpZ2F0aW9uLCBzdWJtaXNzaW9uLCBmZXRjaGVyU3VibWlzc2lvbiwgcmVwbGFjZSwgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvcikge1xuICAgIC8vIEZpZ3VyZSBvdXQgdGhlIHJpZ2h0IG5hdmlnYXRpb24gd2Ugd2FudCB0byB1c2UgZm9yIGRhdGEgbG9hZGluZ1xuICAgIGxldCBsb2FkaW5nTmF2aWdhdGlvbiA9IG92ZXJyaWRlTmF2aWdhdGlvbjtcblxuICAgIGlmICghbG9hZGluZ05hdmlnYXRpb24pIHtcbiAgICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZFxuICAgICAgfSwgc3VibWlzc2lvbik7XG5cbiAgICAgIGxvYWRpbmdOYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgICB9IC8vIElmIHRoaXMgd2FzIGEgcmVkaXJlY3QgZnJvbSBhbiBhY3Rpb24gd2UgZG9uJ3QgaGF2ZSBhIFwic3VibWlzc2lvblwiIGJ1dFxuICAgIC8vIHdlIGhhdmUgaXQgb24gdGhlIGxvYWRpbmcgbmF2aWdhdGlvbiBzbyB1c2UgdGhhdCBpZiBhdmFpbGFibGVcblxuXG4gICAgbGV0IGFjdGl2ZVN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uIHx8IGZldGNoZXJTdWJtaXNzaW9uID8gc3VibWlzc2lvbiB8fCBmZXRjaGVyU3VibWlzc2lvbiA6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1NZXRob2QgJiYgbG9hZGluZ05hdmlnYXRpb24uZm9ybUFjdGlvbiAmJiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRGF0YSAmJiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRW5jVHlwZSA/IHtcbiAgICAgIGZvcm1NZXRob2Q6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtQWN0aW9uLFxuICAgICAgZm9ybURhdGE6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1EYXRhLFxuICAgICAgZm9ybUVuY1R5cGU6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1FbmNUeXBlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgW21hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzXSA9IGdldE1hdGNoZXNUb0xvYWQoaW5pdC5oaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgYWN0aXZlU3VibWlzc2lvbiwgbG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIGZldGNoTG9hZE1hdGNoZXMsIHJvdXRlc1RvVXNlLCBpbml0LmJhc2VuYW1lLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKTsgLy8gQ2FuY2VsIHBlbmRpbmcgZGVmZXJyZWRzIGZvciBuby1sb25nZXItbWF0Y2hlZCByb3V0ZXMgb3Igcm91dGVzIHdlJ3JlXG4gICAgLy8gYWJvdXQgdG8gcmVsb2FkLiAgTm90ZSB0aGF0IGlmIHRoaXMgaXMgYW4gYWN0aW9uIHJlbG9hZCB3ZSB3b3VsZCBoYXZlXG4gICAgLy8gYWxyZWFkeSBjYW5jZWxsZWQgYWxsIHBlbmRpbmcgZGVmZXJyZWRzIHNvIHRoaXMgd291bGQgYmUgYSBuby1vcFxuXG4gICAgY2FuY2VsQWN0aXZlRGVmZXJyZWRzKHJvdXRlSWQgPT4gIShtYXRjaGVzICYmIG1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpKSB8fCBtYXRjaGVzVG9Mb2FkICYmIG1hdGNoZXNUb0xvYWQuc29tZShtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpKTsgLy8gU2hvcnQgY2lyY3VpdCBpZiB3ZSBoYXZlIG5vIGxvYWRlcnMgdG8gcnVuXG5cbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDAgJiYgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIF9leHRlbmRzKHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIC8vIENvbW1pdCBwZW5kaW5nIGVycm9yIGlmIHdlJ3JlIHNob3J0IGNpcmN1aXRpbmdcbiAgICAgICAgZXJyb3JzOiBwZW5kaW5nRXJyb3IgfHwgbnVsbFxuICAgICAgfSwgcGVuZGluZ0FjdGlvbkRhdGEgPyB7XG4gICAgICAgIGFjdGlvbkRhdGE6IHBlbmRpbmdBY3Rpb25EYXRhXG4gICAgICB9IDoge30pKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdGhpcyBpcyBhbiB1bmludGVycnVwdGVkIHJldmFsaWRhdGlvbiwgd2UgcmVtYWluIGluIG91ciBjdXJyZW50IGlkbGVcbiAgICAvLyBzdGF0ZS4gIElmIG5vdCwgd2UgbmVlZCB0byBzd2l0Y2ggdG8gb3VyIGxvYWRpbmcgc3RhdGUgYW5kIGxvYWQgZGF0YSxcbiAgICAvLyBwcmVzZXJ2aW5nIGFueSBuZXcgYWN0aW9uIGRhdGEgb3IgZXhpc3RpbmcgYWN0aW9uIGRhdGEgKGluIHRoZSBjYXNlIG9mXG4gICAgLy8gYSByZXZhbGlkYXRpb24gaW50ZXJydXB0aW5nIGFuIGFjdGlvblJlbG9hZClcblxuXG4gICAgaWYgKCFpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4ge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChyZi5rZXkpO1xuICAgICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IHtcbiAgICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgZGF0YTogZmV0Y2hlciAmJiBmZXRjaGVyLmRhdGEsXG4gICAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHJmLmtleSwgcmV2YWxpZGF0aW5nRmV0Y2hlcik7XG4gICAgICB9KTtcbiAgICAgIGxldCBhY3Rpb25EYXRhID0gcGVuZGluZ0FjdGlvbkRhdGEgfHwgc3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgbmF2aWdhdGlvbjogbG9hZGluZ05hdmlnYXRpb25cbiAgICAgIH0sIGFjdGlvbkRhdGEgPyBPYmplY3Qua2V5cyhhY3Rpb25EYXRhKS5sZW5ndGggPT09IDAgPyB7XG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGxcbiAgICAgIH0gOiB7XG4gICAgICAgIGFjdGlvbkRhdGFcbiAgICAgIH0gOiB7fSwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMCA/IHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9IDoge30pKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA9ICsraW5jcmVtZW50aW5nTG9hZElkO1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5zZXQocmYua2V5LCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIpKTtcbiAgICBsZXQge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUubWF0Y2hlcywgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIHJlcXVlc3QpO1xuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gQ2xlYW4gdXAgX2FmdGVyXyBsb2FkZXJzIGhhdmUgY29tcGxldGVkLiAgRG9uJ3QgY2xlYW4gdXAgaWYgd2Ugc2hvcnRcbiAgICAvLyBjaXJjdWl0ZWQgYmVjYXVzZSBmZXRjaENvbnRyb2xsZXJzIHdvdWxkIGhhdmUgYmVlbiBhYm9ydGVkIGFuZFxuICAgIC8vIHJlYXNzaWduZWQgdG8gbmV3IGNvbnRyb2xsZXJzIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXG5cblxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUocmYua2V5KSk7IC8vIElmIGFueSBsb2FkZXJzIHJldHVybmVkIGEgcmVkaXJlY3QgUmVzcG9uc2UsIHN0YXJ0IGEgbmV3IFJFUExBQ0UgbmF2aWdhdGlvblxuXG4gICAgbGV0IHJlZGlyZWN0ID0gZmluZFJlZGlyZWN0KHJlc3VsdHMpO1xuXG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QsIHtcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG5cblxuICAgIGxldCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSA9IHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBsb2FkZXJSZXN1bHRzLCBwZW5kaW5nRXJyb3IsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCBmZXRjaGVyUmVzdWx0cywgYWN0aXZlRGVmZXJyZWRzKTsgLy8gV2lyZSB1cCBzdWJzY3JpYmVycyB0byB1cGRhdGUgbG9hZGVyRGF0YSBhcyBwcm9taXNlcyBzZXR0bGVcblxuICAgIGFjdGl2ZURlZmVycmVkcy5mb3JFYWNoKChkZWZlcnJlZERhdGEsIHJvdXRlSWQpID0+IHtcbiAgICAgIGRlZmVycmVkRGF0YS5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgIC8vIE5vdGU6IE5vIG5lZWQgdG8gdXBkYXRlU3RhdGUgaGVyZSBzaW5jZSB0aGUgVHJhY2tlZFByb21pc2Ugb25cbiAgICAgICAgLy8gbG9hZGVyRGF0YSBpcyBzdGFibGUgYWNyb3NzIHJlc29sdmUvcmVqZWN0XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIGluc3RhbmNlIGlmIHdlIHdlcmUgYWJvcnRlZCBvciBpZiBwcm9taXNlcyBoYXZlIHNldHRsZWRcbiAgICAgICAgaWYgKGFib3J0ZWQgfHwgZGVmZXJyZWREYXRhLmRvbmUpIHtcbiAgICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtYXJrRmV0Y2hSZWRpcmVjdHNEb25lKCk7XG4gICAgbGV0IGRpZEFib3J0RmV0Y2hMb2FkcyA9IGFib3J0U3RhbGVGZXRjaExvYWRzKHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0sIGRpZEFib3J0RmV0Y2hMb2FkcyB8fCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwID8ge1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSA6IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZldGNoZXIoa2V5KSB7XG4gICAgcmV0dXJuIHN0YXRlLmZldGNoZXJzLmdldChrZXkpIHx8IElETEVfRkVUQ0hFUjtcbiAgfSAvLyBUcmlnZ2VyIGEgZmV0Y2hlciBsb2FkL3N1Ym1pdCBmb3IgdGhlIGdpdmVuIGZldGNoZXIga2V5XG5cblxuICBmdW5jdGlvbiBmZXRjaChrZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpIHtcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJvdXRlci5mZXRjaCgpIHdhcyBjYWxsZWQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLCBidXQgaXQgc2hvdWxkbid0IGJlLiBcIiArIFwiWW91IGFyZSBsaWtlbHkgY2FsbGluZyBhIHVzZUZldGNoZXIoKSBtZXRob2QgaW4gdGhlIGJvZHkgb2YgeW91ciBjb21wb25lbnQuIFwiICsgXCJUcnkgbW92aW5nIGl0IHRvIGEgdXNlRWZmZWN0IG9yIGEgY2FsbGJhY2suXCIpO1xuICAgIH1cblxuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBocmVmLCBpbml0LmJhc2VuYW1lKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGhyZWZcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb25cbiAgICB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKGhyZWYsIGZ1dHVyZSwgb3B0cywgdHJ1ZSk7XG4gICAgbGV0IG1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgcGF0aCk7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IChvcHRzICYmIG9wdHMucHJldmVudFNjcm9sbFJlc2V0KSA9PT0gdHJ1ZTtcblxuICAgIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgaGFuZGxlRmV0Y2hlckFjdGlvbihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFN0b3JlIG9mZiB0aGUgbWF0Y2ggc28gd2UgY2FuIGNhbGwgaXQncyBzaG91bGRSZXZhbGlkYXRlIG9uIHN1YnNlcXVlbnRcbiAgICAvLyByZXZhbGlkYXRpb25zXG5cblxuICAgIGZldGNoTG9hZE1hdGNoZXMuc2V0KGtleSwge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHBhdGhcbiAgICB9KTtcbiAgICBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pO1xuICB9IC8vIENhbGwgdGhlIGFjdGlvbiBmb3IgdGhlIG1hdGNoZWQgZmV0Y2hlci5zdWJtaXQoKSwgYW5kIHRoZW4gaGFuZGxlIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBhbmQgcmV2YWxpZGF0aW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCBzdWJtaXNzaW9uKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuXG4gICAgaWYgKCFtYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIW1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogcGF0aCxcbiAgICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgICAgfSk7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBzdWJtaXR0aW5nIHN0YXRlXG5cblxuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcblxuICAgIGxldCBmZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwic3VibWl0dGluZ1wiXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pOyAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBmZXRjaGVyXG5cbiAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCBmZXRjaFJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIHBhdGgsIGFib3J0Q29udHJvbGxlci5zaWduYWwsIHN1Ym1pc3Npb24pO1xuICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KGtleSwgYWJvcnRDb250cm9sbGVyKTtcbiAgICBsZXQgYWN0aW9uUmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIGZldGNoUmVxdWVzdCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKTtcblxuICAgIGlmIChmZXRjaFJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIC8vIFdlIGNhbiBkZWxldGUgdGhpcyBzbyBsb25nIGFzIHdlIHdlcmVuJ3QgYWJvcnRlZCBieSBvdSBvdXIgb3duIGZldGNoZXJcbiAgICAgIC8vIHJlLXN1Ym1pdCB3aGljaCB3b3VsZCBoYXZlIHB1dCBfbmV3XyBjb250cm9sbGVyIGlzIGluIGZldGNoQ29udHJvbGxlcnNcbiAgICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpID09PSBhYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuXG4gICAgICBsZXQgbG9hZGluZ0ZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIlxuICAgICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZGluZ0ZldGNoZXIpO1xuICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCBhY3Rpb25SZXN1bHQsIHtcbiAgICAgICAgc3VibWlzc2lvbixcbiAgICAgICAgaXNGZXRjaEFjdGlvblJlZGlyZWN0OiB0cnVlXG4gICAgICB9KTtcbiAgICB9IC8vIFByb2Nlc3MgYW55IG5vbi1yZWRpcmVjdCBlcnJvcnMgdGhyb3duXG5cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGFjdGlvblJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfSAvLyBTdGFydCB0aGUgZGF0YSBsb2FkIGZvciBjdXJyZW50IG1hdGNoZXMsIG9yIHRoZSBuZXh0IGxvY2F0aW9uIGlmIHdlJ3JlXG4gICAgLy8gaW4gdGhlIG1pZGRsZSBvZiBhIG5hdmlnYXRpb25cblxuXG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24gfHwgc3RhdGUubG9jYXRpb247XG4gICAgbGV0IHJldmFsaWRhdGlvblJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIG5leHRMb2NhdGlvbiwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IG1hdGNoZXMgPSBzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIiA/IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCBpbml0LmJhc2VuYW1lKSA6IHN0YXRlLm1hdGNoZXM7XG4gICAgaW52YXJpYW50KG1hdGNoZXMsIFwiRGlkbid0IGZpbmQgYW55IG1hdGNoZXMgYWZ0ZXIgZmV0Y2hlciBhY3Rpb25cIik7XG4gICAgbGV0IGxvYWRJZCA9ICsraW5jcmVtZW50aW5nTG9hZElkO1xuICAgIGZldGNoUmVsb2FkSWRzLnNldChrZXksIGxvYWRJZCk7XG5cbiAgICBsZXQgbG9hZEZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBkYXRhOiBhY3Rpb25SZXN1bHQuZGF0YVxuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBsb2FkRmV0Y2hlcik7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIHN1Ym1pc3Npb24sIG5leHRMb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hMb2FkTWF0Y2hlcywgcm91dGVzVG9Vc2UsIGluaXQuYmFzZW5hbWUsIHtcbiAgICAgIFttYXRjaC5yb3V0ZS5pZF06IGFjdGlvblJlc3VsdC5kYXRhXG4gICAgfSwgdW5kZWZpbmVkIC8vIE5vIG5lZWQgdG8gc2VuZCB0aHJvdWdoIGVycm9ycyBzaW5jZSB3ZSBzaG9ydCBjaXJjdWl0IGFib3ZlXG4gICAgKTsgLy8gUHV0IGFsbCByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgaW50byB0aGUgbG9hZGluZyBzdGF0ZSwgZXhjZXB0IGZvciB0aGVcbiAgICAvLyBjdXJyZW50IGZldGNoZXIgd2hpY2ggd2Ugd2FudCB0byBrZWVwIGluIGl0J3MgY3VycmVudCBsb2FkaW5nIHN0YXRlIHdoaWNoXG4gICAgLy8gY29udGFpbnMgaXQncyBhY3Rpb24gc3VibWlzc2lvbiBpbmZvICsgYWN0aW9uIGRhdGFcblxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZpbHRlcihyZiA9PiByZi5rZXkgIT09IGtleSkuZm9yRWFjaChyZiA9PiB7XG4gICAgICBsZXQgc3RhbGVLZXkgPSByZi5rZXk7XG4gICAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KHN0YWxlS2V5KTtcbiAgICAgIGxldCByZXZhbGlkYXRpbmdGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciAmJiBleGlzdGluZ0ZldGNoZXIuZGF0YSxcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9O1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHN0YWxlS2V5LCByZXZhbGlkYXRpbmdGZXRjaGVyKTtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KHN0YWxlS2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIH0pO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICAgIGxldCB7XG4gICAgICByZXN1bHRzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfSA9IGF3YWl0IGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShzdGF0ZS5tYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVycywgcmV2YWxpZGF0aW9uUmVxdWVzdCk7XG5cbiAgICBpZiAoYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHIgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUoci5rZXkpKTtcbiAgICBsZXQgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QocmVzdWx0cyk7XG5cbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QpO1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIHN0YXRlLm1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIHVuZGVmaW5lZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpO1xuICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgIGRhdGE6IGFjdGlvblJlc3VsdC5kYXRhLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH07XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2Fkcyhsb2FkSWQpOyAvLyBJZiB3ZSBhcmUgY3VycmVudGx5IGluIGEgbmF2aWdhdGlvbiBsb2FkaW5nIHN0YXRlIGFuZCB0aGlzIGZldGNoZXIgaXNcbiAgICAvLyBtb3JlIHJlY2VudCB0aGFuIHRoZSBuYXZpZ2F0aW9uLCB3ZSB3YW50IHRoZSBuZXdlciBkYXRhIHNvIGFib3J0IHRoZVxuICAgIC8vIG5hdmlnYXRpb24gYW5kIGNvbXBsZXRlIGl0IHdpdGggdGhlIGZldGNoZXIgZGF0YVxuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGxvYWRJZCA+IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKSB7XG4gICAgICBpbnZhcmlhbnQocGVuZGluZ0FjdGlvbiwgXCJFeHBlY3RlZCBwZW5kaW5nIGFjdGlvblwiKTtcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXBkYXRlIHdpdGggdGhlIGZldGNoZXIgZGF0YSwgcHJlc2VydmluZyBhbnkgZXhpc3RpbmdcbiAgICAgIC8vIGxvYWRlckRhdGEgZm9yIGxvYWRlcnMgdGhhdCBkaWQgbm90IG5lZWQgdG8gcmVsb2FkLiAgV2UgaGF2ZSB0b1xuICAgICAgLy8gbWFudWFsbHkgbWVyZ2UgaGVyZSBzaW5jZSB3ZSBhcmVuJ3QgZ29pbmcgdGhyb3VnaCBjb21wbGV0ZU5hdmlnYXRpb25cbiAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBsb2FkZXJEYXRhOiBtZXJnZUxvYWRlckRhdGEoc3RhdGUubG9hZGVyRGF0YSwgbG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKVxuICAgICAgfSwgZGlkQWJvcnRGZXRjaExvYWRzID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSkpO1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSAvLyBDYWxsIHRoZSBtYXRjaGVkIGxvYWRlciBmb3IgZmV0Y2hlci5sb2FkKCksIGhhbmRsaW5nIHJlZGlyZWN0cywgZXJyb3JzLCBldGMuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pIHtcbiAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7IC8vIFB1dCB0aGlzIGZldGNoZXIgaW50byBpdCdzIGxvYWRpbmcgc3RhdGVcblxuICAgIGxldCBsb2FkaW5nRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRpbmdGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTsgLy8gQ2FsbCB0aGUgbG9hZGVyIGZvciB0aGlzIGZldGNoZXIgcm91dGUgbWF0Y2hcblxuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgcGF0aCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgZmV0Y2hSZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSk7IC8vIERlZmVycmVkIGlzbid0IHN1cHBvcnRlZCBmb3IgZmV0Y2hlciBsb2FkcywgYXdhaXQgZXZlcnl0aGluZyBhbmQgdHJlYXQgaXRcbiAgICAvLyBhcyBhIG5vcm1hbCBsb2FkLiAgcmVzb2x2ZURlZmVycmVkRGF0YSB3aWxsIHJldHVybiB1bmRlZmluZWQgaWYgdGhpc1xuICAgIC8vIGZldGNoZXIgZ2V0cyBhYm9ydGVkLCBzbyB3ZSBqdXN0IGxlYXZlIHJlc3VsdCB1bnRvdWNoZWQgYW5kIHNob3J0IGNpcmN1aXRcbiAgICAvLyBiZWxvdyBpZiB0aGF0IGhhcHBlbnNcblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IChhd2FpdCByZXNvbHZlRGVmZXJyZWREYXRhKHJlc3VsdCwgZmV0Y2hSZXF1ZXN0LnNpZ25hbCwgdHJ1ZSkpIHx8IHJlc3VsdDtcbiAgICB9IC8vIFdlIGNhbiBkZWxldGUgdGhpcyBzbyBsb25nIGFzIHdlIHdlcmVuJ3QgYWJvcnRlZCBieSBvdSBvdXIgb3duIGZldGNoZXJcbiAgICAvLyByZS1sb2FkIHdoaWNoIHdvdWxkIGhhdmUgcHV0IF9uZXdfIGNvbnRyb2xsZXIgaXMgaW4gZmV0Y2hDb250cm9sbGVyc1xuXG5cbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KSA9PT0gYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgIH1cblxuICAgIGlmIChmZXRjaFJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHRoZSBsb2FkZXIgdGhyZXcgYSByZWRpcmVjdCBSZXNwb25zZSwgc3RhcnQgYSBuZXcgUkVQTEFDRSBuYXZpZ2F0aW9uXG5cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZXN1bHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUHJvY2VzcyBhbnkgbm9uLXJlZGlyZWN0IGVycm9ycyB0aHJvd25cblxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7IC8vIFRPRE86IEluIHJlbWl4LCB0aGlzIHdvdWxkIHJlc2V0IHRvIElETEVfTkFWSUdBVElPTiBpZiBpdCB3YXMgYSBjYXRjaCAtXG4gICAgICAvLyBkbyB3ZSBuZWVkIHRvIGJlaGF2ZSBhbnkgZGlmZmVyZW50bHkgd2l0aCBvdXIgbm9uLXJlZGlyZWN0IGVycm9ycz9cbiAgICAgIC8vIFdoYXQgaWYgaXQgd2FzIGEgbm9uLXJlZGlyZWN0IFJlc3BvbnNlP1xuXG4gICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52YXJpYW50KCFpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCksIFwiVW5oYW5kbGVkIGZldGNoZXIgZGVmZXJyZWQgZGF0YVwiKTsgLy8gUHV0IHRoZSBmZXRjaGVyIGJhY2sgaW50byBhbiBpZGxlIHN0YXRlXG5cbiAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9O1xuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBoYW5kbGUgcmVkaXJlY3RzIHJldHVybmVkIGZyb20gYW4gYWN0aW9uIG9yIGxvYWRlci5cbiAgICogTm9ybWFsbHksIGEgcmVkaXJlY3QgXCJyZXBsYWNlc1wiIHRoZSBuYXZpZ2F0aW9uIHRoYXQgdHJpZ2dlcmVkIGl0LiAgU28sIGZvclxuICAgKiBleGFtcGxlOlxuICAgKlxuICAgKiAgLSB1c2VyIGlzIG9uIC9hXG4gICAqICAtIHVzZXIgY2xpY2tzIGEgbGluayB0byAvYlxuICAgKiAgLSBsb2FkZXIgZm9yIC9iIHJlZGlyZWN0cyB0byAvY1xuICAgKlxuICAgKiBJbiBhIG5vbi1KUyBhcHAgdGhlIGJyb3dzZXIgd291bGQgdHJhY2sgdGhlIGluLWZsaWdodCBuYXZpZ2F0aW9uIHRvIC9iIGFuZFxuICAgKiB0aGVuIHJlcGxhY2UgaXQgd2l0aCAvYyB3aGVuIGl0IGVuY291bnRlcmVkIHRoZSByZWRpcmVjdCByZXNwb25zZS4gIEluXG4gICAqIHRoZSBlbmQgaXQgd291bGQgb25seSBldmVyIHVwZGF0ZSB0aGUgVVJMIGJhciB3aXRoIC9jLlxuICAgKlxuICAgKiBJbiBjbGllbnQtc2lkZSByb3V0aW5nIHVzaW5nIHB1c2hTdGF0ZS9yZXBsYWNlU3RhdGUsIHdlIGFpbSB0byBlbXVsYXRlXG4gICAqIHRoaXMgYmVoYXZpb3IgYW5kIHdlIGFsc28gZG8gbm90IHVwZGF0ZSBoaXN0b3J5IHVudGlsIHRoZSBlbmQgb2YgdGhlXG4gICAqIG5hdmlnYXRpb24gKGluY2x1ZGluZyBwcm9jZXNzZWQgcmVkaXJlY3RzKS4gIFRoaXMgbWVhbnMgdGhhdCB3ZSBuZXZlclxuICAgKiBhY3R1YWxseSB0b3VjaCBoaXN0b3J5IHVudGlsIHdlJ3ZlIHByb2Nlc3NlZCByZWRpcmVjdHMsIHNvIHdlIGp1c3QgdXNlXG4gICAqIHRoZSBoaXN0b3J5IGFjdGlvbiBmcm9tIHRoZSBvcmlnaW5hbCBuYXZpZ2F0aW9uIChQVVNIIG9yIFJFUExBQ0UpLlxuICAgKi9cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZWRpcmVjdCwgX3RlbXApIHtcbiAgICB2YXIgX3dpbmRvdztcblxuICAgIGxldCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIGlzRmV0Y2hBY3Rpb25SZWRpcmVjdFxuICAgIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcblxuICAgIGlmIChyZWRpcmVjdC5yZXZhbGlkYXRlKSB7XG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgcmVkaXJlY3RMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLmxvY2F0aW9uLCByZWRpcmVjdC5sb2NhdGlvbiwgLy8gVE9ETzogVGhpcyBjYW4gYmUgcmVtb3ZlZCBvbmNlIHdlIGdldCByaWQgb2YgdXNlVHJhbnNpdGlvbiBpbiBSZW1peCB2MlxuICAgIF9leHRlbmRzKHtcbiAgICAgIF9pc1JlZGlyZWN0OiB0cnVlXG4gICAgfSwgaXNGZXRjaEFjdGlvblJlZGlyZWN0ID8ge1xuICAgICAgX2lzRmV0Y2hBY3Rpb25SZWRpcmVjdDogdHJ1ZVxuICAgIH0gOiB7fSkpO1xuICAgIGludmFyaWFudChyZWRpcmVjdExvY2F0aW9uLCBcIkV4cGVjdGVkIGEgbG9jYXRpb24gb24gdGhlIHJlZGlyZWN0IG5hdmlnYXRpb25cIik7IC8vIENoZWNrIGlmIHRoaXMgYW4gYWJzb2x1dGUgZXh0ZXJuYWwgcmVkaXJlY3QgdGhhdCBnb2VzIHRvIGEgbmV3IG9yaWdpblxuXG4gICAgaWYgKEFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KHJlZGlyZWN0LmxvY2F0aW9uKSAmJiBpc0Jyb3dzZXIgJiYgdHlwZW9mICgoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cubG9jYXRpb24pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBsZXQgdXJsID0gaW5pdC5oaXN0b3J5LmNyZWF0ZVVSTChyZWRpcmVjdC5sb2NhdGlvbik7XG4gICAgICBsZXQgaXNEaWZmZXJlbnRCYXNlbmFtZSA9IHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBpbml0LmJhc2VuYW1lIHx8IFwiL1wiKSA9PSBudWxsO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPT0gdXJsLm9yaWdpbiB8fCBpc0RpZmZlcmVudEJhc2VuYW1lKSB7XG4gICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24ocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gLy8gVGhlcmUncyBubyBuZWVkIHRvIGFib3J0IG9uIHJlZGlyZWN0cywgc2luY2Ugd2UgZG9uJ3QgZGV0ZWN0IHRoZVxuICAgIC8vIHJlZGlyZWN0IHVudGlsIHRoZSBhY3Rpb24vbG9hZGVycyBoYXZlIHNldHRsZWRcblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBsZXQgcmVkaXJlY3RIaXN0b3J5QWN0aW9uID0gcmVwbGFjZSA9PT0gdHJ1ZSA/IEFjdGlvbi5SZXBsYWNlIDogQWN0aW9uLlB1c2g7IC8vIFVzZSB0aGUgaW5jb21pbmcgc3VibWlzc2lvbiBpZiBwcm92aWRlZCwgZmFsbGJhY2sgb24gdGhlIGFjdGl2ZSBvbmUgaW5cbiAgICAvLyBzdGF0ZS5uYXZpZ2F0aW9uXG5cbiAgICBsZXQge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhXG4gICAgfSA9IHN0YXRlLm5hdmlnYXRpb247XG5cbiAgICBpZiAoIXN1Ym1pc3Npb24gJiYgZm9ybU1ldGhvZCAmJiBmb3JtQWN0aW9uICYmIGZvcm1EYXRhICYmIGZvcm1FbmNUeXBlKSB7XG4gICAgICBzdWJtaXNzaW9uID0ge1xuICAgICAgICBmb3JtTWV0aG9kLFxuICAgICAgICBmb3JtQWN0aW9uLFxuICAgICAgICBmb3JtRW5jVHlwZSxcbiAgICAgICAgZm9ybURhdGFcbiAgICAgIH07XG4gICAgfSAvLyBJZiB0aGlzIHdhcyBhIDMwNy8zMDggc3VibWlzc2lvbiB3ZSB3YW50IHRvIHByZXNlcnZlIHRoZSBIVFRQIG1ldGhvZCBhbmRcbiAgICAvLyByZS1zdWJtaXQgdGhlIEdFVC9QT1NUL1BVVC9QQVRDSC9ERUxFVEUgYXMgYSBzdWJtaXNzaW9uIG5hdmlnYXRpb24gdG8gdGhlXG4gICAgLy8gcmVkaXJlY3RlZCBsb2NhdGlvblxuXG5cbiAgICBpZiAocmVkaXJlY3RQcmVzZXJ2ZU1ldGhvZFN0YXR1c0NvZGVzLmhhcyhyZWRpcmVjdC5zdGF0dXMpICYmIHN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICBhd2FpdCBzdGFydE5hdmlnYXRpb24ocmVkaXJlY3RIaXN0b3J5QWN0aW9uLCByZWRpcmVjdExvY2F0aW9uLCB7XG4gICAgICAgIHN1Ym1pc3Npb246IF9leHRlbmRzKHt9LCBzdWJtaXNzaW9uLCB7XG4gICAgICAgICAgZm9ybUFjdGlvbjogcmVkaXJlY3QubG9jYXRpb25cbiAgICAgICAgfSksXG4gICAgICAgIC8vIFByZXNlcnZlIHRoaXMgZmxhZyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0ZldGNoQWN0aW9uUmVkaXJlY3QpIHtcbiAgICAgIC8vIEZvciBhIGZldGNoIGFjdGlvbiByZWRpcmVjdCwgd2Uga2ljayBvZmYgYSBuZXcgbG9hZGluZyBuYXZpZ2F0aW9uXG4gICAgICAvLyB3aXRob3V0IHRoZSBmZXRjaGVyIHN1Ym1pc3Npb24sIGJ1dCB3ZSBzZW5kIGl0IGFsb25nIGZvciBzaG91bGRSZXZhbGlkYXRlXG4gICAgICBhd2FpdCBzdGFydE5hdmlnYXRpb24ocmVkaXJlY3RIaXN0b3J5QWN0aW9uLCByZWRpcmVjdExvY2F0aW9uLCB7XG4gICAgICAgIG92ZXJyaWRlTmF2aWdhdGlvbjoge1xuICAgICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgICBsb2NhdGlvbjogcmVkaXJlY3RMb2NhdGlvbixcbiAgICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICBmZXRjaGVyU3VibWlzc2lvbjogc3VibWlzc2lvbixcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBraWNrIG9mZiBhIG5ldyBsb2FkaW5nIG5hdmlnYXRpb24sIHByZXNlcnZpbmcgdGhlXG4gICAgICAvLyBzdWJtaXNzaW9uIGluZm8gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGlzIG5hdmlnYXRpb25cbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWRpcmVjdExvY2F0aW9uLFxuICAgICAgICAgIGZvcm1NZXRob2Q6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1NZXRob2QgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybUFjdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybURhdGE6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1EYXRhIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFByZXNlcnZlIHRoaXMgZmxhZyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBmZXRjaGVyc1RvTG9hZCwgcmVxdWVzdCkge1xuICAgIC8vIENhbGwgYWxsIG5hdmlnYXRpb24gbG9hZGVycyBhbmQgcmV2YWxpZGF0aW5nIGZldGNoZXIgbG9hZGVycyBpbiBwYXJhbGxlbCxcbiAgICAvLyB0aGVuIHNsaWNlIG9mZiB0aGUgcmVzdWx0cyBpbnRvIHNlcGFyYXRlIGFycmF5cyBzbyB3ZSBjYW4gaGFuZGxlIHRoZW1cbiAgICAvLyBhY2NvcmRpbmdseVxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSkpLCAuLi5mZXRjaGVyc1RvTG9hZC5tYXAoZiA9PiB7XG4gICAgICBpZiAoZi5tYXRjaGVzICYmIGYubWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIGYucGF0aCwgcmVxdWVzdC5zaWduYWwpLCBmLm1hdGNoLCBmLm1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCByb3V0ZXIuYmFzZW5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGVycm9yID0ge1xuICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgICAgICBwYXRobmFtZTogZi5wYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfVxuICAgIH0pXSk7XG4gICAgbGV0IGxvYWRlclJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1hdGNoZXNUb0xvYWQubGVuZ3RoKTtcbiAgICBsZXQgZmV0Y2hlclJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKG1hdGNoZXNUb0xvYWQubGVuZ3RoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgcmVxdWVzdC5zaWduYWwsIGZhbHNlLCBzdGF0ZS5sb2FkZXJEYXRhKSwgcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgZmV0Y2hlcnNUb0xvYWQubWFwKGYgPT4gZi5tYXRjaCksIGZldGNoZXJSZXN1bHRzLCByZXF1ZXN0LnNpZ25hbCwgdHJ1ZSldKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpIHtcbiAgICAvLyBFdmVyeSBpbnRlcnJ1cHRpb24gdHJpZ2dlcnMgYSByZXZhbGlkYXRpb25cbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTsgLy8gQ2FuY2VsIHBlbmRpbmcgcm91dGUtbGV2ZWwgZGVmZXJyZWRzIGFuZCBtYXJrIGNhbmNlbGxlZCByb3V0ZXMgZm9yXG4gICAgLy8gcmV2YWxpZGF0aW9uXG5cbiAgICBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5wdXNoKC4uLmNhbmNlbEFjdGl2ZURlZmVycmVkcygpKTsgLy8gQWJvcnQgaW4tZmxpZ2h0IGZldGNoZXIgbG9hZHNcblxuICAgIGZldGNoTG9hZE1hdGNoZXMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkge1xuICAgICAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMucHVzaChrZXkpO1xuICAgICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yKSB7XG4gICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgIGRlbGV0ZUZldGNoZXIoa2V5KTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiBlcnJvclxuICAgICAgfSxcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlRmV0Y2hlcihrZXkpIHtcbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWJvcnRGZXRjaGVyKGtleSkge1xuICAgIGxldCBjb250cm9sbGVyID0gZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KTtcbiAgICBpbnZhcmlhbnQoY29udHJvbGxlciwgXCJFeHBlY3RlZCBmZXRjaCBjb250cm9sbGVyOiBcIiArIGtleSk7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrRmV0Y2hlcnNEb25lKGtleXMpIHtcbiAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgbGV0IGZldGNoZXIgPSBnZXRGZXRjaGVyKGtleSk7XG4gICAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgICAgZGF0YTogZmV0Y2hlci5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpIHtcbiAgICBsZXQgZG9uZUtleXMgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBvZiBmZXRjaFJlZGlyZWN0SWRzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgaW52YXJpYW50KGZldGNoZXIsIFwiRXhwZWN0ZWQgZmV0Y2hlcjogXCIgKyBrZXkpO1xuXG4gICAgICBpZiAoZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgZmV0Y2hSZWRpcmVjdElkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgZG9uZUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtGZXRjaGVyc0RvbmUoZG9uZUtleXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWJvcnRTdGFsZUZldGNoTG9hZHMobGFuZGVkSWQpIHtcbiAgICBsZXQgeWVldGVkS2V5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgW2tleSwgaWRdIG9mIGZldGNoUmVsb2FkSWRzKSB7XG4gICAgICBpZiAoaWQgPCBsYW5kZWRJZCkge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG5cbiAgICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgICAgICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgeWVldGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRmV0Y2hlcnNEb25lKHllZXRlZEtleXMpO1xuICAgIHJldHVybiB5ZWV0ZWRLZXlzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCbG9ja2VyKGtleSwgZm4pIHtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChrZXkpIHx8IElETEVfQkxPQ0tFUjtcblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLmdldChrZXkpICE9PSBmbikge1xuICAgICAgYmxvY2tlckZ1bmN0aW9ucy5zZXQoa2V5LCBmbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVCbG9ja2VyKGtleSkge1xuICAgIHN0YXRlLmJsb2NrZXJzLmRlbGV0ZShrZXkpO1xuICAgIGJsb2NrZXJGdW5jdGlvbnMuZGVsZXRlKGtleSk7XG4gIH0gLy8gVXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgYmxvY2tlcnMsIGVuc3VyaW5nIHZhbGlkIHN0YXRlIHRyYW5zaXRpb25zXG5cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyKGtleSwgbmV3QmxvY2tlcikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSOyAvLyBQb29yIG1hbnMgc3RhdGUgbWFjaGluZSA6KVxuICAgIC8vIGh0dHBzOi8vbWVybWFpZC5saXZlL2VkaXQjcGFrbzplTnFWa2M5T3d6QU14bDhsOG5uakFZckV0RElPSEVCSWd3dktKVFJlR3kzX2xEcElxTzI3azZhd01HMFhjckxsbno4N253ZG9uRVNvZ0tYWEJ1RTc5cnE3NVhaTzMteUhkczBSSlZ1djcwWXJQbFVyQ0VlMkhmck9SUzNydWJxWmZ1aHRwZzVDOXdrNXRaNFZLY1JVcTg4cTlaOFJTMC00OGNFMWlISmtMMHVnYkh1Rkx1czlMNnNwWnk4blg5TVAyQ05kb21WYXBvc3F1M2ZHYXlUOFQ4LWpKUXdoZXBvX1V0cGdCUWFERVVvbTA0ZFpoQU4xYUpCRGxVS0pCeEUxY2VCMlNtajBNbG4tSUJXNUFGVTJkd1Vpa3R0XzJRYXEyZEJmYUtkRXVwODVVVjdZZC1kS2psbmthYmwyUHZyMERUa1RyZU1cblxuICAgIGludmFyaWFudChibG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiwgXCJJbnZhbGlkIGJsb2NrZXIgc3RhdGUgdHJhbnNpdGlvbjogXCIgKyBibG9ja2VyLnN0YXRlICsgXCIgLT4gXCIgKyBuZXdCbG9ja2VyLnN0YXRlKTtcbiAgICBzdGF0ZS5ibG9ja2Vycy5zZXQoa2V5LCBuZXdCbG9ja2VyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJsb2NrTmF2aWdhdGlvbihfcmVmMikge1xuICAgIGxldCB7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSA9IF9yZWYyO1xuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gV2Ugb255IHN1cHBvcnQgYSBzaW5nbGUgYWN0aXZlIGJsb2NrZXIgYXQgdGhlIG1vbWVudCBzaW5jZSB3ZSBkb24ndCBoYXZlXG4gICAgLy8gYW55IGNvbXBlbGxpbmcgdXNlIGNhc2VzIGZvciBtdWx0aS1ibG9ja2VyIHlldFxuXG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5zaXplID4gMSkge1xuICAgICAgd2FybmluZyhmYWxzZSwgXCJBIHJvdXRlciBvbmx5IHN1cHBvcnRzIG9uZSBibG9ja2VyIGF0IGEgdGltZVwiKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cmllcyA9IEFycmF5LmZyb20oYmxvY2tlckZ1bmN0aW9ucy5lbnRyaWVzKCkpO1xuICAgIGxldCBbYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uXSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChibG9ja2VyS2V5KTtcblxuICAgIGlmIChibG9ja2VyICYmIGJsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiKSB7XG4gICAgICAvLyBJZiB0aGUgYmxvY2tlciBpcyBjdXJyZW50bHkgcHJvY2VlZGluZywgd2UgZG9uJ3QgbmVlZCB0byByZS1jaGVja1xuICAgICAgLy8gaXQgYW5kIGNhbiBsZXQgdGhpcyBuYXZpZ2F0aW9uIGNvbnRpbnVlXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBBdCB0aGlzIHBvaW50LCB3ZSBrbm93IHdlJ3JlIHVuYmxvY2tlZC9ibG9ja2VkIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGhlXG4gICAgLy8gdXNlci1wcm92aWRlZCBibG9ja2VyIGZ1bmN0aW9uXG5cblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb24oe1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pKSB7XG4gICAgICByZXR1cm4gYmxvY2tlcktleTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBY3RpdmVEZWZlcnJlZHMocHJlZGljYXRlKSB7XG4gICAgbGV0IGNhbmNlbGxlZFJvdXRlSWRzID0gW107XG4gICAgYWN0aXZlRGVmZXJyZWRzLmZvckVhY2goKGRmZCwgcm91dGVJZCkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUgfHwgcHJlZGljYXRlKHJvdXRlSWQpKSB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgZGVmZXJyZWQgLSBidXQgZG8gbm90IHJlbW92ZSBmcm9tIGFjdGl2ZURlZmVycmVkcyBoZXJlIC1cbiAgICAgICAgLy8gd2UgcmVseSBvbiB0aGUgc3Vic2NyaWJlcnMgdG8gZG8gdGhhdCBzbyBvdXIgdGVzdHMgY2FuIGFzc2VydCBwcm9wZXJcbiAgICAgICAgLy8gY2xlYW51cCB2aWEgX2ludGVybmFsQWN0aXZlRGVmZXJyZWRzXG4gICAgICAgIGRmZC5jYW5jZWwoKTtcbiAgICAgICAgY2FuY2VsbGVkUm91dGVJZHMucHVzaChyb3V0ZUlkKTtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLmRlbGV0ZShyb3V0ZUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2FuY2VsbGVkUm91dGVJZHM7XG4gIH0gLy8gT3B0IGluIHRvIGNhcHR1cmluZyBhbmQgcmVwb3J0aW5nIHNjcm9sbCBwb3NpdGlvbnMgZHVyaW5nIG5hdmlnYXRpb25zLFxuICAvLyB1c2VkIGJ5IHRoZSA8U2Nyb2xsUmVzdG9yYXRpb24+IGNvbXBvbmVudFxuXG5cbiAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsUmVzdG9yYXRpb24ocG9zaXRpb25zLCBnZXRQb3NpdGlvbiwgZ2V0S2V5KSB7XG4gICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gICAgZ2V0U2Nyb2xsUG9zaXRpb24gPSBnZXRQb3NpdGlvbjtcblxuICAgIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gZ2V0S2V5IHx8IChsb2NhdGlvbiA9PiBsb2NhdGlvbi5rZXkpOyAvLyBQZXJmb3JtIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbiwgc2luY2Ugd2UgbWlzcyB0aGUgYm9hdCBvblxuICAgIC8vIHRoZSBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgYmVjYXVzZSB3ZSd2ZSBub3QgeWV0IHJlbmRlcmVkIDxTY3JvbGxSZXN0b3JhdGlvbi8+XG4gICAgLy8gYW5kIHRoZXJlZm9yZSBoYXZlIG5vIHNhdmVkU2Nyb2xsUG9zaXRpb25zIGF2YWlsYWJsZVxuXG5cbiAgICBpZiAoIWluaXRpYWxTY3JvbGxSZXN0b3JlZCAmJiBzdGF0ZS5uYXZpZ2F0aW9uID09PSBJRExFX05BVklHQVRJT04pIHtcbiAgICAgIGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IHRydWU7XG4gICAgICBsZXQgeSA9IGdldFNhdmVkU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuXG4gICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDtcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgICAgIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQgdXNlck1hdGNoZXMgPSBtYXRjaGVzLm1hcChtID0+IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSk7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIHVzZXJNYXRjaGVzKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQgdXNlck1hdGNoZXMgPSBtYXRjaGVzLm1hcChtID0+IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSk7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIHVzZXJNYXRjaGVzKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBsZXQgeSA9IHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbnRlcm5hbFNldFJvdXRlcyhuZXdSb3V0ZXMpIHtcbiAgICBpbkZsaWdodERhdGFSb3V0ZXMgPSBuZXdSb3V0ZXM7XG4gIH1cblxuICByb3V0ZXIgPSB7XG4gICAgZ2V0IGJhc2VuYW1lKCkge1xuICAgICAgcmV0dXJuIGluaXQuYmFzZW5hbWU7XG4gICAgfSxcblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgIHJldHVybiBkYXRhUm91dGVzO1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplLFxuICAgIHN1YnNjcmliZSxcbiAgICBlbmFibGVTY3JvbGxSZXN0b3JhdGlvbixcbiAgICBuYXZpZ2F0ZSxcbiAgICBmZXRjaCxcbiAgICByZXZhbGlkYXRlLFxuICAgIC8vIFBhc3N0aHJvdWdoIHRvIGhpc3RvcnktYXdhcmUgY3JlYXRlSHJlZiB1c2VkIGJ5IHVzZUhyZWYgc28gd2UgZ2V0IHByb3BlclxuICAgIC8vIGhhc2gtYXdhcmUgVVJMcyBpbiBET00gcGF0aHNcbiAgICBjcmVhdGVIcmVmOiB0byA9PiBpbml0Lmhpc3RvcnkuY3JlYXRlSHJlZih0byksXG4gICAgZW5jb2RlTG9jYXRpb246IHRvID0+IGluaXQuaGlzdG9yeS5lbmNvZGVMb2NhdGlvbih0byksXG4gICAgZ2V0RmV0Y2hlcixcbiAgICBkZWxldGVGZXRjaGVyLFxuICAgIGRpc3Bvc2UsXG4gICAgZ2V0QmxvY2tlcixcbiAgICBkZWxldGVCbG9ja2VyLFxuICAgIF9pbnRlcm5hbEZldGNoQ29udHJvbGxlcnM6IGZldGNoQ29udHJvbGxlcnMsXG4gICAgX2ludGVybmFsQWN0aXZlRGVmZXJyZWRzOiBhY3RpdmVEZWZlcnJlZHMsXG4gICAgLy8gVE9ETzogUmVtb3ZlIHNldFJvdXRlcywgaXQncyB0ZW1wb3JhcnkgdG8gYXZvaWQgZGVhbGluZyB3aXRoXG4gICAgLy8gdXBkYXRpbmcgdGhlIHRyZWUgd2hpbGUgdmFsaWRhdGluZyB0aGUgdXBkYXRlIGFsZ29yaXRobS5cbiAgICBfaW50ZXJuYWxTZXRSb3V0ZXNcbiAgfTtcbiAgcmV0dXJuIHJvdXRlcjtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVN0YXRpY0hhbmRsZXJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IFVOU0FGRV9ERUZFUlJFRF9TWU1CT0wgPSBTeW1ib2woXCJkZWZlcnJlZFwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRpY0hhbmRsZXIocm91dGVzLCBvcHRzKSB7XG4gIGludmFyaWFudChyb3V0ZXMubGVuZ3RoID4gMCwgXCJZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IHJvdXRlcyBhcnJheSB0byBjcmVhdGVTdGF0aWNIYW5kbGVyXCIpO1xuICBsZXQgbWFuaWZlc3QgPSB7fTtcbiAgbGV0IGRldGVjdEVycm9yQm91bmRhcnkgPSAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5kZXRlY3RFcnJvckJvdW5kYXJ5KSB8fCBkZWZhdWx0RGV0ZWN0RXJyb3JCb3VuZGFyeTtcbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlcywgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgdW5kZWZpbmVkLCBtYW5pZmVzdCk7XG4gIGxldCBiYXNlbmFtZSA9IChvcHRzID8gb3B0cy5iYXNlbmFtZSA6IG51bGwpIHx8IFwiL1wiO1xuICAvKipcbiAgICogVGhlIHF1ZXJ5KCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciBkb2N1bWVudCByZXF1ZXN0cywgaW4gd2hpY2ggd2Ugd2FudCB0b1xuICAgKiBjYWxsIGFuIG9wdGlvbmFsIGFjdGlvbiBhbmQgcG90ZW50aWFsbHkgbXVsdGlwbGUgbG9hZGVycyBmb3IgYWxsIG5lc3RlZFxuICAgKiByb3V0ZXMuICBJdCByZXR1cm5zIGEgU3RhdGljSGFuZGxlckNvbnRleHQgb2JqZWN0LCB3aGljaCBpcyB2ZXJ5IHNpbWlsYXJcbiAgICogdG8gdGhlIHJvdXRlciBzdGF0ZSAobG9jYXRpb24sIGxvYWRlckRhdGEsIGFjdGlvbkRhdGEsIGVycm9ycywgZXRjLikgYW5kXG4gICAqIGFsc28gYWRkcyBTU1Itc3BlY2lmaWMgaW5mb3JtYXRpb24gc3VjaCBhcyB0aGUgc3RhdHVzQ29kZSBhbmQgaGVhZGVyc1xuICAgKiBmcm9tIGFjdGlvbi9sb2FkZXJzIFJlc3BvbnNlcy5cbiAgICpcbiAgICogSXQgX3Nob3VsZF8gbmV2ZXIgdGhyb3cgYW5kIHNob3VsZCByZXBvcnQgYWxsIGVycm9ycyB0aHJvdWdoIHRoZVxuICAgKiByZXR1cm5lZCBjb250ZXh0LmVycm9ycyBvYmplY3QsIHByb3Blcmx5IGFzc29jaWF0aW5nIGVycm9ycyB0byB0aGVpciBlcnJvclxuICAgKiBib3VuZGFyeS4gIEFkZGl0aW9uYWxseSwgaXQgdHJhY2tzIF9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkIHdoaWNoIGNhbiBiZVxuICAgKiB1c2VkIHRvIGVtdWxhdGUgUmVhY3QgZXJyb3IgYm91bmRhcmllcyBkdXJpbmcgU1NyIGJ5IHBlcmZvcm1pbmcgYSBzZWNvbmRcbiAgICogcGFzcyBvbmx5IGRvd24gdG8gdGhlIGJvdW5kYXJ5SWQuXG4gICAqXG4gICAqIFRoZSBvbmUgZXhjZXB0aW9uIHdoZXJlIHdlIGRvIG5vdCByZXR1cm4gYSBTdGF0aWNIYW5kbGVyQ29udGV4dCBpcyB3aGVuIGFcbiAgICogcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmV0dXJuZWQgb3IgdGhyb3duIGZyb20gYW55IGFjdGlvbi9sb2FkZXIuICBXZVxuICAgKiBwcm9wYWdhdGUgdGhhdCBvdXQgYW5kIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIHNvIHRoZSBIVFRQIHNlcnZlciBjYW5cbiAgICogcmV0dXJuIGl0IGRpcmVjdGx5LlxuICAgKi9cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeShyZXF1ZXN0LCBfdGVtcDIpIHtcbiAgICBsZXQge1xuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFwiXCIsIGNyZWF0ZVBhdGgodXJsKSwgbnVsbCwgXCJkZWZhdWx0XCIpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGJhc2VuYW1lKTsgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcblxuICAgIGlmICghaXNWYWxpZE1ldGhvZChtZXRob2QpICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBtZXRob2ROb3RBbGxvd2VkTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBtYXRjaGVzOiBtZXRob2ROb3RBbGxvd2VkTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXNDb2RlOiBlcnJvci5zdGF0dXMsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcblxuICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSAvLyBXaGVuIHJldHVybmluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCwgd2UgcGF0Y2ggYmFjayBpbiB0aGUgbG9jYXRpb24gaGVyZVxuICAgIC8vIHNpbmNlIHdlIG5lZWQgaXQgZm9yIFJlYWN0IENvbnRleHQuICBCdXQgdGhpcyBoZWxwcyBrZWVwIG91ciBzdWJtaXQgYW5kXG4gICAgLy8gbG9hZFJvdXRlRGF0YSBvcGVyYXRpbmcgb24gYSBSZXF1ZXN0IGluc3RlYWQgb2YgYSBMb2NhdGlvblxuXG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9jYXRpb24sXG4gICAgICBiYXNlbmFtZVxuICAgIH0sIHJlc3VsdCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBxdWVyeVJvdXRlKCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciB0YXJnZXRlZCByb3V0ZSByZXF1ZXN0cywgZWl0aGVyXG4gICAqIGZvciBmZXRjaCA/X2RhdGEgcmVxdWVzdHMgb3IgcmVzb3VyY2Ugcm91dGUgcmVxdWVzdHMuICBJbiB0aGlzIGNhc2UsIHdlXG4gICAqIGFyZSBvbmx5IGV2ZXIgY2FsbGluZyBhIHNpbmdsZSBhY3Rpb24gb3IgbG9hZGVyLCBhbmQgd2UgYXJlIHJldHVybmluZyB0aGVcbiAgICogcmV0dXJuZWQgdmFsdWUgZGlyZWN0bHkuICBJbiBtb3N0IGNhc2VzLCB0aGlzIHdpbGwgYmUgYSBSZXNwb25zZSByZXR1cm5lZFxuICAgKiBmcm9tIHRoZSBhY3Rpb24vbG9hZGVyLCBidXQgaXQgbWF5IGJlIGEgcHJpbWl0aXZlIG9yIG90aGVyIHZhbHVlIGFzIHdlbGwgLVxuICAgKiBhbmQgaW4gc3VjaCBjYXNlcyB0aGUgY2FsbGluZyBjb250ZXh0IHNob3VsZCBoYW5kbGUgdGhhdCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogV2UgZG8gcmVzcGVjdCB0aGUgdGhyb3cvcmV0dXJuIGRpZmZlcmVudGlhdGlvbiwgc28gaWYgYW4gYWN0aW9uL2xvYWRlclxuICAgKiB0aHJvd3MsIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCB0aHJvdyB0aGUgdmFsdWUuICBUaGlzIGlzIGltcG9ydGFudCBzbyB3ZVxuICAgKiBjYW4gZG8gcHJvcGVyIGJvdW5kYXJ5IGlkZW50aWZpY2F0aW9uIGluIFJlbWl4IHdoZXJlIGEgdGhyb3duIFJlc3BvbnNlXG4gICAqIG11c3QgZ28gdG8gdGhlIENhdGNoIEJvdW5kYXJ5IGJ1dCBhIHJldHVybmVkIFJlc3BvbnNlIGlzIGhhcHB5LXBhdGguXG4gICAqXG4gICAqIE9uZSB0aGluZyB0byBub3RlIGlzIHRoYXQgYW55IFJvdXRlci1pbml0aWF0ZWQgRXJyb3JzIHRoYXQgbWFrZSBzZW5zZVxuICAgKiB0byBhc3NvY2lhdGUgd2l0aCBhIHN0YXR1cyBjb2RlIHdpbGwgYmUgdGhyb3duIGFzIGFuIEVycm9yUmVzcG9uc2VcbiAgICogaW5zdGFuY2Ugd2hpY2ggaW5jbHVkZSB0aGUgcmF3IEVycm9yLCBzdWNoIHRoYXQgdGhlIGNhbGxpbmcgY29udGV4dCBjYW5cbiAgICogc2VyaWFsaXplIHRoZSBlcnJvciBhcyB0aGV5IHNlZSBmaXQgd2hpbGUgaW5jbHVkaW5nIHRoZSBwcm9wZXIgcmVzcG9uc2VcbiAgICogY29kZS4gIEV4YW1wbGVzIGhlcmUgYXJlIDQwNCBhbmQgNDA1IGVycm9ycyB0aGF0IG9jY3VyIHByaW9yIHRvIHJlYWNoaW5nXG4gICAqIGFueSB1c2VyLWRlZmluZWQgbG9hZGVycy5cbiAgICovXG5cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeVJvdXRlKHJlcXVlc3QsIF90ZW1wMykge1xuICAgIGxldCB7XG4gICAgICByb3V0ZUlkLFxuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMztcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFwiXCIsIGNyZWF0ZVBhdGgodXJsKSwgbnVsbCwgXCJkZWZhdWx0XCIpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGJhc2VuYW1lKTsgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcblxuICAgIGlmICghaXNWYWxpZE1ldGhvZChtZXRob2QpICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIgJiYgbWV0aG9kICE9PSBcIk9QVElPTlNcIikge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBtYXRjaCA9IHJvdXRlSWQgPyBtYXRjaGVzLmZpbmQobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSA6IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKTtcblxuICAgIGlmIChyb3V0ZUlkICYmICFtYXRjaCkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDMsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCkge1xuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGl0IEkgZG9uJ3QgdGhpbms/XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCBtYXRjaCk7XG5cbiAgICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxldCBlcnJvciA9IHJlc3VsdC5lcnJvcnMgPyBPYmplY3QudmFsdWVzKHJlc3VsdC5lcnJvcnMpWzBdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHdlIGdvdCBiYWNrIHJlc3VsdC5lcnJvcnMsIHRoYXQgbWVhbnMgdGhlIGxvYWRlci9hY3Rpb24gdGhyZXdcbiAgICAgIC8vIF9zb21ldGhpbmdfIHRoYXQgd2Fzbid0IGEgUmVzcG9uc2UsIGJ1dCBpdCdzIG5vdCBndWFyYW50ZWVkL3JlcXVpcmVkXG4gICAgICAvLyB0byBiZSBhbiBgaW5zdGFuY2VvZiBFcnJvcmAgZWl0aGVyLCBzbyB3ZSBoYXZlIHRvIHVzZSB0aHJvdyBoZXJlIHRvXG4gICAgICAvLyBwcmVzZXJ2ZSB0aGUgXCJlcnJvclwiIHN0YXRlIG91dHNpZGUgb2YgcXVlcnlJbXBsLlxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSAvLyBQaWNrIG9mZiB0aGUgcmlnaHQgc3RhdGUgdmFsdWUgdG8gcmV0dXJuXG5cblxuICAgIGlmIChyZXN1bHQuYWN0aW9uRGF0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVzdWx0LmFjdGlvbkRhdGEpWzBdO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubG9hZGVyRGF0YSkge1xuICAgICAgdmFyIF9yZXN1bHQkYWN0aXZlRGVmZXJyZTtcblxuICAgICAgbGV0IGRhdGEgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5sb2FkZXJEYXRhKVswXTtcblxuICAgICAgaWYgKChfcmVzdWx0JGFjdGl2ZURlZmVycmUgPSByZXN1bHQuYWN0aXZlRGVmZXJyZWRzKSAhPSBudWxsICYmIF9yZXN1bHQkYWN0aXZlRGVmZXJyZVttYXRjaC5yb3V0ZS5pZF0pIHtcbiAgICAgICAgZGF0YVtVTlNBRkVfREVGRVJSRURfU1lNQk9MXSA9IHJlc3VsdC5hY3RpdmVEZWZlcnJlZHNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCkge1xuICAgIGludmFyaWFudChyZXF1ZXN0LnNpZ25hbCwgXCJxdWVyeSgpL3F1ZXJ5Um91dGUoKSByZXF1ZXN0cyBtdXN0IGNvbnRhaW4gYW4gQWJvcnRDb250cm9sbGVyIHNpZ25hbFwiKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoaXNNdXRhdGlvbk1ldGhvZChyZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgc3VibWl0KHJlcXVlc3QsIG1hdGNoZXMsIHJvdXRlTWF0Y2ggfHwgZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCAhPSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEocmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2gpO1xuICAgICAgcmV0dXJuIGlzUmVzcG9uc2UocmVzdWx0KSA/IHJlc3VsdCA6IF9leHRlbmRzKHt9LCByZXN1bHQsIHtcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge31cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHRoZSB1c2VyIHRocmV3L3JldHVybmVkIGEgUmVzcG9uc2UgaW4gY2FsbExvYWRlck9yQWN0aW9uLCB3ZSB0aHJvd1xuICAgICAgLy8gaXQgdG8gYmFpbCBvdXQgYW5kIHRoZW4gcmV0dXJuIG9yIHRocm93IGhlcmUgYmFzZWQgb24gd2hldGhlciB0aGUgdXNlclxuICAgICAgLy8gcmV0dXJuZWQgb3IgdGhyZXdcbiAgICAgIGlmIChpc1F1ZXJ5Um91dGVSZXNwb25zZShlKSkge1xuICAgICAgICBpZiAoZS50eXBlID09PSBSZXN1bHRUeXBlLmVycm9yICYmICFpc1JlZGlyZWN0UmVzcG9uc2UoZS5yZXNwb25zZSkpIHtcbiAgICAgICAgICB0aHJvdyBlLnJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGUucmVzcG9uc2U7XG4gICAgICB9IC8vIFJlZGlyZWN0cyBhcmUgYWx3YXlzIHJldHVybmVkIHNpbmNlIHRoZXkgZG9uJ3QgcHJvcGFnYXRlIHRvIGNhdGNoXG4gICAgICAvLyBib3VuZGFyaWVzXG5cblxuICAgICAgaWYgKGlzUmVkaXJlY3RSZXNwb25zZShlKSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXQocmVxdWVzdCwgbWF0Y2hlcywgYWN0aW9uTWF0Y2gsIHJlcXVlc3RDb250ZXh0LCBpc1JvdXRlUmVxdWVzdCkge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIWFjdGlvbk1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhYWN0aW9uTWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIHJlcXVlc3QsIGFjdGlvbk1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgYmFzZW5hbWUsIHRydWUsIGlzUm91dGVSZXF1ZXN0LCByZXF1ZXN0Q29udGV4dCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gVWhoaGggLSB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIHdlIHNob3VsZCBhbHdheXMgdGhyb3cgdGhlc2UgZnJvbVxuICAgICAgLy8gY2FsbExvYWRlck9yQWN0aW9uLCBidXQgdGhlIHR5cGUgbmFycm93aW5nIGhlcmUga2VlcHMgVFMgaGFwcHkgYW5kIHdlXG4gICAgICAvLyBjYW4gZ2V0IGJhY2sgb24gdGhlIFwidGhyb3cgYWxsIHJlZGlyZWN0IHJlc3BvbnNlc1wiIHRyYWluIGhlcmUgc2hvdWxkXG4gICAgICAvLyB0aGlzIGV2ZXIgaGFwcGVuIDovXG4gICAgICB0aHJvdyBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBMb2NhdGlvbjogcmVzdWx0LmxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAvLyBOb3RlOiBUaGlzIHNob3VsZCBvbmx5IGJlIG5vbi1SZXNwb25zZSB2YWx1ZXMgaWYgd2UgZ2V0IGhlcmUsIHNpbmNlXG4gICAgICAvLyBpc1JvdXRlUmVxdWVzdCBzaG91bGQgdGhyb3cgYW55IFJlc3BvbnNlIHJlY2VpdmVkIGluIGNhbGxMb2FkZXJPckFjdGlvblxuICAgICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXM6IFthY3Rpb25NYXRjaF0sXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiB7XG4gICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAvLyBOb3RlOiBzdGF0dXNDb2RlICsgaGVhZGVycyBhcmUgdW51c2VkIGhlcmUgc2luY2UgcXVlcnlSb3V0ZSB3aWxsXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIG9yIHZhbHVlXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCB1bmRlZmluZWQsIHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgIH0pOyAvLyBhY3Rpb24gc3RhdHVzIGNvZGVzIHRha2UgcHJlY2VkZW5jZSBvdmVyIGxvYWRlciBzdGF0dXMgY29kZXNcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICAgIHN0YXR1c0NvZGU6IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwLFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmhlYWRlcnNcbiAgICAgICAgfSA6IHt9KVxuICAgICAgfSk7XG4gICAgfSAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcblxuXG4gICAgbGV0IGxvYWRlclJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgcmVkaXJlY3Q6IHJlcXVlc3QucmVkaXJlY3QsXG4gICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgfSk7XG4gICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKGxvYWRlclJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHJlc3VsdC5zdGF0dXNDb2RlID8ge1xuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1c0NvZGVcbiAgICB9IDoge30sIHtcbiAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgIH0sXG4gICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICB9IDoge30pXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoLCBwZW5kaW5nQWN0aW9uRXJyb3IpIHtcbiAgICBsZXQgaXNSb3V0ZVJlcXVlc3QgPSByb3V0ZU1hdGNoICE9IG51bGw7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnlSb3V0ZSgpKVxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0ICYmICEocm91dGVNYXRjaCAhPSBudWxsICYmIHJvdXRlTWF0Y2gucm91dGUubG9hZGVyKSAmJiAhKHJvdXRlTWF0Y2ggIT0gbnVsbCAmJiByb3V0ZU1hdGNoLnJvdXRlLmxhenkpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWQ6IHJvdXRlTWF0Y2ggPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlTWF0Y2gucm91dGUuaWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0TWF0Y2hlcyA9IHJvdXRlTWF0Y2ggPyBbcm91dGVNYXRjaF0gOiBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBPYmplY3Qua2V5cyhwZW5kaW5nQWN0aW9uRXJyb3IgfHwge30pWzBdKTtcbiAgICBsZXQgbWF0Y2hlc1RvTG9hZCA9IHJlcXVlc3RNYXRjaGVzLmZpbHRlcihtID0+IG0ucm91dGUubG9hZGVyIHx8IG0ucm91dGUubGF6eSk7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnkoKSlcblxuICAgIGlmIChtYXRjaGVzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgLy8gQWRkIGEgbnVsbCBmb3IgYWxsIG1hdGNoZWQgcm91dGVzIGZvciBwcm9wZXIgcmV2YWxpZGF0aW9uIG9uIHRoZSBjbGllbnRcbiAgICAgICAgbG9hZGVyRGF0YTogbWF0Y2hlcy5yZWR1Y2UoKGFjYywgbSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgICBbbS5yb3V0ZS5pZF06IG51bGxcbiAgICAgICAgfSksIHt9KSxcbiAgICAgICAgZXJyb3JzOiBwZW5kaW5nQWN0aW9uRXJyb3IgfHwgbnVsbCxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIGJhc2VuYW1lLCB0cnVlLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpKV0pO1xuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1ldGhvZCArIFwiKCkgY2FsbCBhYm9ydGVkXCIpO1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IGFjdGl2ZURlZmVycmVkcyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgY29udGV4dCA9IHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0FjdGlvbkVycm9yLCBhY3RpdmVEZWZlcnJlZHMpOyAvLyBBZGQgYSBudWxsIGZvciBhbnkgbm9uLWxvYWRlciBtYXRjaGVzIGZvciBwcm9wZXIgcmV2YWxpZGF0aW9uIG9uIHRoZSBjbGllbnRcblxuICAgIGxldCBleGVjdXRlZExvYWRlcnMgPSBuZXcgU2V0KG1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IG1hdGNoLnJvdXRlLmlkKSk7XG4gICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgIGlmICghZXhlY3V0ZWRMb2FkZXJzLmhhcyhtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgICAgY29udGV4dC5sb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgYWN0aXZlRGVmZXJyZWRzOiBhY3RpdmVEZWZlcnJlZHMuc2l6ZSA+IDAgPyBPYmplY3QuZnJvbUVudHJpZXMoYWN0aXZlRGVmZXJyZWRzLmVudHJpZXMoKSkgOiBudWxsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRhdGFSb3V0ZXMsXG4gICAgcXVlcnksXG4gICAgcXVlcnlSb3V0ZVxuICB9O1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gSGVscGVyc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBHaXZlbiBhbiBleGlzdGluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCBhbmQgYW4gZXJyb3IgdGhyb3duIGF0IHJlbmRlciB0aW1lLFxuICogcHJvdmlkZSBhbiB1cGRhdGVkIFN0YXRpY0hhbmRsZXJDb250ZXh0IHN1aXRhYmxlIGZvciBhIHNlY29uZCBTU1IgcmVuZGVyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvcihyb3V0ZXMsIGNvbnRleHQsIGVycm9yKSB7XG4gIGxldCBuZXdDb250ZXh0ID0gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgZXJyb3JzOiB7XG4gICAgICBbY29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB8fCByb3V0ZXNbMF0uaWRdOiBlcnJvclxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzU3VibWlzc2lvbk5hdmlnYXRpb24ob3B0cykge1xuICByZXR1cm4gb3B0cyAhPSBudWxsICYmIFwiZm9ybURhdGFcIiBpbiBvcHRzO1xufSAvLyBOb3JtYWxpemUgbmF2aWdhdGlvbiBvcHRpb25zIGJ5IGNvbnZlcnRpbmcgZm9ybU1ldGhvZD1HRVQgZm9ybURhdGEgb2JqZWN0cyB0b1xuLy8gVVJMU2VhcmNoUGFyYW1zIHNvIHRoZXkgYmVoYXZlIGlkZW50aWNhbGx5IHRvIGxpbmtzIHdpdGggcXVlcnkgcGFyYW1zXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKHRvLCBmdXR1cmUsIG9wdHMsIGlzRmV0Y2hlcikge1xuICBpZiAoaXNGZXRjaGVyID09PSB2b2lkIDApIHtcbiAgICBpc0ZldGNoZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXRoID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTsgLy8gUmV0dXJuIGxvY2F0aW9uIHZlcmJhdGltIG9uIG5vbi1zdWJtaXNzaW9uIG5hdmlnYXRpb25zXG5cbiAgaWYgKCFvcHRzIHx8ICFpc1N1Ym1pc3Npb25OYXZpZ2F0aW9uKG9wdHMpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9wdHMuZm9ybU1ldGhvZCAmJiAhaXNWYWxpZE1ldGhvZChvcHRzLmZvcm1NZXRob2QpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsXG4gICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiBvcHRzLmZvcm1NZXRob2RcbiAgICAgIH0pXG4gICAgfTtcbiAgfSAvLyBDcmVhdGUgYSBTdWJtaXNzaW9uIG9uIG5vbi1HRVQgbmF2aWdhdGlvbnNcblxuXG4gIGxldCBzdWJtaXNzaW9uO1xuXG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgbGV0IGZvcm1NZXRob2QgPSBvcHRzLmZvcm1NZXRob2QgfHwgXCJnZXRcIjtcbiAgICBzdWJtaXNzaW9uID0ge1xuICAgICAgZm9ybU1ldGhvZDogZnV0dXJlLnY3X25vcm1hbGl6ZUZvcm1NZXRob2QgPyBmb3JtTWV0aG9kLnRvVXBwZXJDYXNlKCkgOiBmb3JtTWV0aG9kLnRvTG93ZXJDYXNlKCksXG4gICAgICBmb3JtQWN0aW9uOiBzdHJpcEhhc2hGcm9tUGF0aChwYXRoKSxcbiAgICAgIGZvcm1FbmNUeXBlOiBvcHRzICYmIG9wdHMuZm9ybUVuY1R5cGUgfHwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIGZvcm1EYXRhOiBvcHRzLmZvcm1EYXRhXG4gICAgfTtcblxuICAgIGlmIChpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN1Ym1pc3Npb25cbiAgICAgIH07XG4gICAgfVxuICB9IC8vIEZsYXR0ZW4gc3VibWlzc2lvbiBvbnRvIFVSTFNlYXJjaFBhcmFtcyBmb3IgR0VUIHN1Ym1pc3Npb25zXG5cblxuICBsZXQgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChwYXRoKTtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKG9wdHMuZm9ybURhdGEpOyAvLyBTaW5jZSBmZXRjaGVyIEdFVCBzdWJtaXNzaW9ucyBvbmx5IHJ1biBhIHNpbmdsZSBsb2FkZXIgKGFzIG9wcG9zZWQgdG9cbiAgLy8gbmF2aWdhdGlvbiBHRVQgc3VibWlzc2lvbnMgd2hpY2ggcnVuIGFsbCBsb2FkZXJzKSwgd2UgbmVlZCB0byBwcmVzZXJ2ZVxuICAvLyBhbnkgaW5jb21pbmcgP2luZGV4IHBhcmFtc1xuXG4gIGlmIChpc0ZldGNoZXIgJiYgcGFyc2VkUGF0aC5zZWFyY2ggJiYgaGFzTmFrZWRJbmRleFF1ZXJ5KHBhcnNlZFBhdGguc2VhcmNoKSkge1xuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbmRleFwiLCBcIlwiKTtcbiAgfVxuXG4gIHBhcnNlZFBhdGguc2VhcmNoID0gXCI/XCIgKyBzZWFyY2hQYXJhbXM7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY3JlYXRlUGF0aChwYXJzZWRQYXRoKSxcbiAgICBzdWJtaXNzaW9uXG4gIH07XG59IC8vIEZpbHRlciBvdXQgYWxsIHJvdXRlcyBiZWxvdyBhbnkgY2F1Z2h0IGVycm9yIGFzIHRoZXkgYXJlbid0IGdvaW5nIHRvXG4vLyByZW5kZXIgc28gd2UgZG9uJ3QgbmVlZCB0byBsb2FkIHRoZW1cblxuXG5mdW5jdGlvbiBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBib3VuZGFyeUlkKSB7XG4gIGxldCBib3VuZGFyeU1hdGNoZXMgPSBtYXRjaGVzO1xuXG4gIGlmIChib3VuZGFyeUlkKSB7XG4gICAgbGV0IGluZGV4ID0gbWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkID09PSBib3VuZGFyeUlkKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBib3VuZGFyeU1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKDAsIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRhcnlNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBnZXRNYXRjaGVzVG9Mb2FkKGhpc3RvcnksIHN0YXRlLCBtYXRjaGVzLCBzdWJtaXNzaW9uLCBsb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hMb2FkTWF0Y2hlcywgcm91dGVzVG9Vc2UsIGJhc2VuYW1lLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKSB7XG4gIGxldCBhY3Rpb25SZXN1bHQgPSBwZW5kaW5nRXJyb3IgPyBPYmplY3QudmFsdWVzKHBlbmRpbmdFcnJvcilbMF0gOiBwZW5kaW5nQWN0aW9uRGF0YSA/IE9iamVjdC52YWx1ZXMocGVuZGluZ0FjdGlvbkRhdGEpWzBdIDogdW5kZWZpbmVkO1xuICBsZXQgY3VycmVudFVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKHN0YXRlLmxvY2F0aW9uKTtcbiAgbGV0IG5leHRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChsb2NhdGlvbik7XG4gIGxldCBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSA9IC8vIEZvcmNlZCByZXZhbGlkYXRpb24gZHVlIHRvIHN1Ym1pc3Npb24sIHVzZVJldmFsaWRhdGUsIG9yIFgtUmVtaXgtUmV2YWxpZGF0ZVxuICBpc1JldmFsaWRhdGlvblJlcXVpcmVkIHx8IC8vIENsaWNrZWQgdGhlIHNhbWUgbGluaywgcmVzdWJtaXR0ZWQgYSBHRVQgZm9ybVxuICBjdXJyZW50VXJsLnRvU3RyaW5nKCkgPT09IG5leHRVcmwudG9TdHJpbmcoKSB8fCAvLyBTZWFyY2ggcGFyYW1zIGFmZmVjdCBhbGwgbG9hZGVyc1xuICBjdXJyZW50VXJsLnNlYXJjaCAhPT0gbmV4dFVybC5zZWFyY2g7IC8vIFBpY2sgbmF2aWdhdGlvbiBtYXRjaGVzIHRoYXQgYXJlIG5ldC1uZXcgb3IgcXVhbGlmeSBmb3IgcmV2YWxpZGF0aW9uXG5cbiAgbGV0IGJvdW5kYXJ5SWQgPSBwZW5kaW5nRXJyb3IgPyBPYmplY3Qua2V5cyhwZW5kaW5nRXJyb3IpWzBdIDogdW5kZWZpbmVkO1xuICBsZXQgYm91bmRhcnlNYXRjaGVzID0gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgYm91bmRhcnlJZCk7XG4gIGxldCBuYXZpZ2F0aW9uTWF0Y2hlcyA9IGJvdW5kYXJ5TWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGlmIChtYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICAvLyBXZSBoYXZlbid0IGxvYWRlZCB0aGlzIHJvdXRlIHlldCBzbyB3ZSBkb24ndCBrbm93IGlmIGl0J3MgZ290IGEgbG9hZGVyIVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnJvdXRlLmxvYWRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBBbHdheXMgY2FsbCB0aGUgbG9hZGVyIG9uIG5ldyByb3V0ZSBpbnN0YW5jZXMgYW5kIHBlbmRpbmcgZGVmZXIgY2FuY2VsbGF0aW9uc1xuXG5cbiAgICBpZiAoaXNOZXdMb2FkZXIoc3RhdGUubG9hZGVyRGF0YSwgc3RhdGUubWF0Y2hlc1tpbmRleF0sIG1hdGNoKSB8fCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5zb21lKGlkID0+IGlkID09PSBtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gVGhpcyBpcyB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igd2hlbiB3ZSByZXZhbGlkYXRlLiAgSWYgdGhlIHJvdXRlXG4gICAgLy8gcHJvdmlkZXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24sIHRoZW4gd2UgZ2l2ZSB0aGVtIGZ1bGwgY29udHJvbCBidXRcbiAgICAvLyBwcm92aWRlIHRoaXMgdmFsdWUgc28gdGhleSBjYW4gbGV2ZXJhZ2UgaXQgaWYgbmVlZGVkIGFmdGVyIHRoZXkgY2hlY2tcbiAgICAvLyB0aGVpciBvd24gc3BlY2lmaWMgdXNlIGNhc2VzXG5cblxuICAgIGxldCBjdXJyZW50Um91dGVNYXRjaCA9IHN0YXRlLm1hdGNoZXNbaW5kZXhdO1xuICAgIGxldCBuZXh0Um91dGVNYXRjaCA9IG1hdGNoO1xuICAgIHJldHVybiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKG1hdGNoLCBfZXh0ZW5kcyh7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgY3VycmVudFBhcmFtczogY3VycmVudFJvdXRlTWF0Y2gucGFyYW1zLFxuICAgICAgbmV4dFVybCxcbiAgICAgIG5leHRQYXJhbXM6IG5leHRSb3V0ZU1hdGNoLnBhcmFtc1xuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGFjdGlvblJlc3VsdCxcbiAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlOiBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSB8fCBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudFJvdXRlTWF0Y2gsIG5leHRSb3V0ZU1hdGNoKVxuICAgIH0pKTtcbiAgfSk7IC8vIFBpY2sgZmV0Y2hlci5sb2FkcyB0aGF0IG5lZWQgdG8gYmUgcmV2YWxpZGF0ZWRcblxuICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlcnMgPSBbXTtcbiAgZmV0Y2hMb2FkTWF0Y2hlcy5mb3JFYWNoKChmLCBrZXkpID0+IHtcbiAgICAvLyBEb24ndCByZXZhbGlkYXRlIGlmIGZldGNoZXIgd29uJ3QgYmUgcHJlc2VudCBpbiB0aGUgc3Vic2VxdWVudCByZW5kZXJcbiAgICBpZiAoIW1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IGYucm91dGVJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmV0Y2hlck1hdGNoZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgZi5wYXRoLCBiYXNlbmFtZSk7IC8vIElmIHRoZSBmZXRjaGVyIHBhdGggbm8gbG9uZ2VyIG1hdGNoZXMsIHB1c2ggaXQgaW4gd2l0aCBudWxsIG1hdGNoZXMgc29cbiAgICAvLyB3ZSBjYW4gdHJpZ2dlciBhIDQwNCBpbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGFcblxuICAgIGlmICghZmV0Y2hlck1hdGNoZXMpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXlcbiAgICAgIH0sIGYsIHtcbiAgICAgICAgbWF0Y2hlczogbnVsbCxcbiAgICAgICAgbWF0Y2g6IG51bGxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmV0Y2hlck1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2goZmV0Y2hlck1hdGNoZXMsIGYucGF0aCk7XG5cbiAgICBpZiAoY2FuY2VsbGVkRmV0Y2hlckxvYWRzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXksXG4gICAgICAgIG1hdGNoZXM6IGZldGNoZXJNYXRjaGVzLFxuICAgICAgICBtYXRjaDogZmV0Y2hlck1hdGNoXG4gICAgICB9LCBmKSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXZhbGlkYXRpbmcgZmV0Y2hlcnMgYXJlIGRlY291cGxlZCBmcm9tIHRoZSByb3V0ZSBtYXRjaGVzIHNpbmNlIHRoZXlcbiAgICAvLyBoaXQgYSBzdGF0aWMgaHJlZiwgc28gdGhleSBfYWx3YXlzXyBjaGVjayBzaG91bGRSZXZhbGlkYXRlIGFuZCB0aGVcbiAgICAvLyBkZWZhdWx0IGlzIHN0cmljdGx5IGlmIGEgcmV2YWxpZGF0aW9uIGlzIGV4cGxpY2l0bHkgcmVxdWlyZWQgKGFjdGlvblxuICAgIC8vIHN1Ym1pc3Npb25zLCB1c2VSZXZhbGlkYXRvciwgWC1SZW1peC1SZXZhbGlkYXRlKS5cblxuXG4gICAgbGV0IHNob3VsZFJldmFsaWRhdGUgPSBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGZldGNoZXJNYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIGN1cnJlbnRQYXJhbXM6IHN0YXRlLm1hdGNoZXNbc3RhdGUubWF0Y2hlcy5sZW5ndGggLSAxXS5wYXJhbXMsXG4gICAgICBuZXh0VXJsLFxuICAgICAgbmV4dFBhcmFtczogbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtc1xuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGFjdGlvblJlc3VsdCxcbiAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlXG4gICAgfSkpO1xuXG4gICAgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXksXG4gICAgICAgIG1hdGNoZXM6IGZldGNoZXJNYXRjaGVzLFxuICAgICAgICBtYXRjaDogZmV0Y2hlck1hdGNoXG4gICAgICB9LCBmKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFtuYXZpZ2F0aW9uTWF0Y2hlcywgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdO1xufVxuXG5mdW5jdGlvbiBpc05ld0xvYWRlcihjdXJyZW50TG9hZGVyRGF0YSwgY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgaXNOZXcgPSAvLyBbYV0gLT4gW2EsIGJdXG4gICFjdXJyZW50TWF0Y2ggfHwgLy8gW2EsIGJdIC0+IFthLCBjXVxuICBtYXRjaC5yb3V0ZS5pZCAhPT0gY3VycmVudE1hdGNoLnJvdXRlLmlkOyAvLyBIYW5kbGUgdGhlIGNhc2UgdGhhdCB3ZSBkb24ndCBoYXZlIGRhdGEgZm9yIGEgcmUtdXNlZCByb3V0ZSwgcG90ZW50aWFsbHlcbiAgLy8gZnJvbSBhIHByaW9yIGVycm9yIG9yIGZyb20gYSBjYW5jZWxsZWQgcGVuZGluZyBkZWZlcnJlZFxuXG4gIGxldCBpc01pc3NpbmdEYXRhID0gY3VycmVudExvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID09PSB1bmRlZmluZWQ7IC8vIEFsd2F5cyBsb2FkIGlmIHRoaXMgaXMgYSBuZXQtbmV3IHJvdXRlIG9yIHdlIGRvbid0IHlldCBoYXZlIGRhdGFcblxuICByZXR1cm4gaXNOZXcgfHwgaXNNaXNzaW5nRGF0YTtcbn1cblxuZnVuY3Rpb24gaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRNYXRjaCwgbWF0Y2gpIHtcbiAgbGV0IGN1cnJlbnRQYXRoID0gY3VycmVudE1hdGNoLnJvdXRlLnBhdGg7XG4gIHJldHVybiAoLy8gcGFyYW0gY2hhbmdlIGZvciB0aGlzIG1hdGNoLCAvdXNlcnMvMTIzIC0+IC91c2Vycy80NTZcbiAgICBjdXJyZW50TWF0Y2gucGF0aG5hbWUgIT09IG1hdGNoLnBhdGhuYW1lIHx8IC8vIHNwbGF0IHBhcmFtIGNoYW5nZWQsIHdoaWNoIGlzIG5vdCBwcmVzZW50IGluIG1hdGNoLnBhdGhcbiAgICAvLyBlLmcuIC9maWxlcy9pbWFnZXMvYXZhdGFyLmpwZyAtPiBmaWxlcy9maW5hbmNlcy54bHNcbiAgICBjdXJyZW50UGF0aCAhPSBudWxsICYmIGN1cnJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSAmJiBjdXJyZW50TWF0Y2gucGFyYW1zW1wiKlwiXSAhPT0gbWF0Y2gucGFyYW1zW1wiKlwiXVxuICApO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGxvYWRlck1hdGNoLCBhcmcpIHtcbiAgaWYgKGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUpIHtcbiAgICBsZXQgcm91dGVDaG9pY2UgPSBsb2FkZXJNYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKGFyZyk7XG5cbiAgICBpZiAodHlwZW9mIHJvdXRlQ2hvaWNlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIHJvdXRlQ2hvaWNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmcuZGVmYXVsdFNob3VsZFJldmFsaWRhdGU7XG59XG4vKipcbiAqIEV4ZWN1dGUgcm91dGUubGF6eSgpIG1ldGhvZHMgdG8gbGF6aWx5IGxvYWQgcm91dGUgbW9kdWxlcyAobG9hZGVyLCBhY3Rpb24sXG4gKiBzaG91bGRSZXZhbGlkYXRlKSBhbmQgdXBkYXRlIHRoZSByb3V0ZU1hbmlmZXN0IGluIHBsYWNlIHdoaWNoIHNoYXJlcyBvYmplY3RzXG4gKiB3aXRoIGRhdGFSb3V0ZXMgc28gdGhvc2UgZ2V0IHVwZGF0ZWQgYXMgd2VsbC5cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMYXp5Um91dGVNb2R1bGUocm91dGUsIGRldGVjdEVycm9yQm91bmRhcnksIG1hbmlmZXN0KSB7XG4gIGlmICghcm91dGUubGF6eSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBsYXp5Um91dGUgPSBhd2FpdCByb3V0ZS5sYXp5KCk7IC8vIElmIHRoZSBsYXp5IHJvdXRlIGZ1bmN0aW9uIHdhcyBleGVjdXRlZCBhbmQgcmVtb3ZlZCBieSBhbm90aGVyIHBhcmFsbGVsXG4gIC8vIGNhbGwgdGhlbiB3ZSBjYW4gcmV0dXJuIC0gZmlyc3QgbGF6eSgpIHRvIGZpbmlzaCB3aW5zIGJlY2F1c2UgdGhlIHJldHVyblxuICAvLyB2YWx1ZSBvZiBsYXp5IGlzIGV4cGVjdGVkIHRvIGJlIHN0YXRpY1xuXG4gIGlmICghcm91dGUubGF6eSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCByb3V0ZVRvVXBkYXRlID0gbWFuaWZlc3Rbcm91dGUuaWRdO1xuICBpbnZhcmlhbnQocm91dGVUb1VwZGF0ZSwgXCJObyByb3V0ZSBmb3VuZCBpbiBtYW5pZmVzdFwiKTsgLy8gVXBkYXRlIHRoZSByb3V0ZSBpbiBwbGFjZS4gIFRoaXMgc2hvdWxkIGJlIHNhZmUgYmVjYXVzZSB0aGVyZSdzIG5vIHdheVxuICAvLyB3ZSBjb3VsZCB5ZXQgYmUgc2l0dGluZyBvbiB0aGlzIHJvdXRlIGFzIHdlIGNhbid0IGdldCB0aGVyZSB3aXRob3V0XG4gIC8vIHJlc29sdmluZyBsYXp5KCkgZmlyc3QuXG4gIC8vXG4gIC8vIFRoaXMgaXMgZGlmZmVyZW50IHRoYW4gdGhlIEhNUiBcInVwZGF0ZVwiIHVzZS1jYXNlIHdoZXJlIHdlIG1heSBhY3RpdmVseSBiZVxuICAvLyBvbiB0aGUgcm91dGUgYmVpbmcgdXBkYXRlZC4gIFRoZSBtYWluIGNvbmNlcm4gYm9pbHMgZG93biB0byBcImRvZXMgdGhpc1xuICAvLyBtdXRhdGlvbiBhZmZlY3QgYW55IG9uZ29pbmcgbmF2aWdhdGlvbnMgb3IgYW55IGN1cnJlbnQgc3RhdGUubWF0Y2hlc1xuICAvLyB2YWx1ZXM/XCIuICBJZiBub3QsIGl0IHNob3VsZCBiZSBzYWZlIHRvIHVwZGF0ZSBpbiBwbGFjZS5cblxuICBsZXQgcm91dGVVcGRhdGVzID0ge307XG5cbiAgZm9yIChsZXQgbGF6eVJvdXRlUHJvcGVydHkgaW4gbGF6eVJvdXRlKSB7XG4gICAgbGV0IHN0YXRpY1JvdXRlVmFsdWUgPSByb3V0ZVRvVXBkYXRlW2xhenlSb3V0ZVByb3BlcnR5XTtcbiAgICBsZXQgaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkID0gc3RhdGljUm91dGVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIC8vIFRoaXMgcHJvcGVydHkgaXNuJ3Qgc3RhdGljIHNpbmNlIGl0IHNob3VsZCBhbHdheXMgYmUgdXBkYXRlZCBiYXNlZFxuICAgIC8vIG9uIHRoZSByb3V0ZSB1cGRhdGVzXG4gICAgbGF6eVJvdXRlUHJvcGVydHkgIT09IFwiaGFzRXJyb3JCb3VuZGFyeVwiO1xuICAgIHdhcm5pbmcoIWlzUHJvcGVydHlTdGF0aWNhbGx5RGVmaW5lZCwgXCJSb3V0ZSBcXFwiXCIgKyByb3V0ZVRvVXBkYXRlLmlkICsgXCJcXFwiIGhhcyBhIHN0YXRpYyBwcm9wZXJ0eSBcXFwiXCIgKyBsYXp5Um91dGVQcm9wZXJ0eSArIFwiXFxcIiBcIiArIFwiZGVmaW5lZCBidXQgaXRzIGxhenkgZnVuY3Rpb24gaXMgYWxzbyByZXR1cm5pbmcgYSB2YWx1ZSBmb3IgdGhpcyBwcm9wZXJ0eS4gXCIgKyAoXCJUaGUgbGF6eSByb3V0ZSBwcm9wZXJ0eSBcXFwiXCIgKyBsYXp5Um91dGVQcm9wZXJ0eSArIFwiXFxcIiB3aWxsIGJlIGlnbm9yZWQuXCIpKTtcblxuICAgIGlmICghaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkICYmICFpbW11dGFibGVSb3V0ZUtleXMuaGFzKGxhenlSb3V0ZVByb3BlcnR5KSkge1xuICAgICAgcm91dGVVcGRhdGVzW2xhenlSb3V0ZVByb3BlcnR5XSA9IGxhenlSb3V0ZVtsYXp5Um91dGVQcm9wZXJ0eV07XG4gICAgfVxuICB9IC8vIE11dGF0ZSB0aGUgcm91dGUgd2l0aCB0aGUgcHJvdmlkZWQgdXBkYXRlcy4gIERvIHRoaXMgZmlyc3Qgc28gd2UgcGFzc1xuICAvLyB0aGUgdXBkYXRlZCB2ZXJzaW9uIHRvIGRldGVjdEVycm9yQm91bmRhcnlcblxuXG4gIE9iamVjdC5hc3NpZ24ocm91dGVUb1VwZGF0ZSwgcm91dGVVcGRhdGVzKTsgLy8gTXV0YXRlIHRoZSBgaGFzRXJyb3JCb3VuZGFyeWAgcHJvcGVydHkgb24gdGhlIHJvdXRlIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAvLyB1cGRhdGVzIGFuZCByZW1vdmUgdGhlIGBsYXp5YCBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNvbHZlIHRoZSBsYXp5XG4gIC8vIHJvdXRlIGFnYWluLlxuXG4gIE9iamVjdC5hc3NpZ24ocm91dGVUb1VwZGF0ZSwge1xuICAgIC8vIFRvIGtlZXAgdGhpbmdzIGZyYW1ld29yayBhZ25vc3RpYywgd2UgdXNlIHRoZSBwcm92aWRlZFxuICAgIC8vIGBkZXRlY3RFcnJvckJvdW5kYXJ5YCBmdW5jdGlvbiB0byBzZXQgdGhlIGBoYXNFcnJvckJvdW5kYXJ5YCByb3V0ZVxuICAgIC8vIHByb3BlcnR5IHNpbmNlIHRoZSBsb2dpYyB3aWxsIGRpZmZlciBiZXR3ZWVuIGZyYW1ld29ya3MuXG4gICAgaGFzRXJyb3JCb3VuZGFyeTogZGV0ZWN0RXJyb3JCb3VuZGFyeShfZXh0ZW5kcyh7fSwgcm91dGVUb1VwZGF0ZSkpLFxuICAgIGxhenk6IHVuZGVmaW5lZFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbExvYWRlck9yQWN0aW9uKHR5cGUsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgYmFzZW5hbWUsIGlzU3RhdGljUmVxdWVzdCwgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0KSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZW5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGlmIChpc1N0YXRpY1JlcXVlc3QgPT09IHZvaWQgMCkge1xuICAgIGlzU3RhdGljUmVxdWVzdCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUm91dGVSZXF1ZXN0ID09PSB2b2lkIDApIHtcbiAgICBpc1JvdXRlUmVxdWVzdCA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHJlc3VsdFR5cGU7XG4gIGxldCByZXN1bHQ7XG4gIGxldCBvblJlamVjdDtcblxuICBsZXQgcnVuSGFuZGxlciA9IGhhbmRsZXIgPT4ge1xuICAgIC8vIFNldHVwIGEgcHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHNvIHRoYXQgYWJvcnQgc2lnbmFscyBzaG9ydCBjaXJjdWl0XG4gICAgbGV0IHJlamVjdDtcbiAgICBsZXQgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuXG4gICAgb25SZWplY3QgPSAoKSA9PiByZWplY3QoKTtcblxuICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvblJlamVjdCk7XG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbaGFuZGxlcih7XG4gICAgICByZXF1ZXN0LFxuICAgICAgcGFyYW1zOiBtYXRjaC5wYXJhbXMsXG4gICAgICBjb250ZXh0OiByZXF1ZXN0Q29udGV4dFxuICAgIH0pLCBhYm9ydFByb21pc2VdKTtcbiAgfTtcblxuICB0cnkge1xuICAgIGxldCBoYW5kbGVyID0gbWF0Y2gucm91dGVbdHlwZV07XG5cbiAgICBpZiAobWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgLy8gUnVuIHN0YXRpY2FsbHkgZGVmaW5lZCBoYW5kbGVyIGluIHBhcmFsbGVsIHdpdGggbGF6eSgpXG4gICAgICAgIGxldCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbcnVuSGFuZGxlcihoYW5kbGVyKSwgbG9hZExhenlSb3V0ZU1vZHVsZShtYXRjaC5yb3V0ZSwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgbWFuaWZlc3QpXSk7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvYWQgbGF6eSByb3V0ZSBtb2R1bGUsIHRoZW4gcnVuIGFueSByZXR1cm5lZCBoYW5kbGVyXG4gICAgICAgIGF3YWl0IGxvYWRMYXp5Um91dGVNb2R1bGUobWF0Y2gucm91dGUsIGRldGVjdEVycm9yQm91bmRhcnksIG1hbmlmZXN0KTtcbiAgICAgICAgaGFuZGxlciA9IG1hdGNoLnJvdXRlW3R5cGVdO1xuXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgLy8gSGFuZGxlciBzdGlsbCBydW4gZXZlbiBpZiB3ZSBnb3QgaW50ZXJydXB0ZWQgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3lcbiAgICAgICAgICAvLyB3aXRoIHVuLWFib3J0YWJsZSBiZWhhdmlvciBvZiBoYW5kbGVyIGV4ZWN1dGlvbiBvbiBub24tbGF6eSBvclxuICAgICAgICAgIC8vIHByZXZpb3VzbHktbGF6eS1sb2FkZWQgcm91dGVzXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcnVuSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgICAgICByb3V0ZUlkOiBtYXRjaC5yb3V0ZS5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGxhenkoKSByb3V0ZSBoYXMgbm8gbG9hZGVyIHRvIHJ1bi4gIFNob3J0IGNpcmN1aXQgaGVyZSBzbyB3ZSBkb24ndFxuICAgICAgICAgIC8vIGhpdCB0aGUgaW52YXJpYW50IGJlbG93IHRoYXQgZXJyb3JzIG9uIHJldHVybmluZyB1bmRlZmluZWQuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52YXJpYW50KGhhbmRsZXIsIFwiQ291bGQgbm90IGZpbmQgdGhlIFwiICsgdHlwZSArIFwiIHRvIHJ1biBvbiB0aGUgXFxcIlwiICsgbWF0Y2gucm91dGUuaWQgKyBcIlxcXCIgcm91dGVcIik7XG4gICAgICByZXN1bHQgPSBhd2FpdCBydW5IYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGludmFyaWFudChyZXN1bHQgIT09IHVuZGVmaW5lZCwgXCJZb3UgZGVmaW5lZCBcIiArICh0eXBlID09PSBcImFjdGlvblwiID8gXCJhbiBhY3Rpb25cIiA6IFwiYSBsb2FkZXJcIikgKyBcIiBmb3Igcm91dGUgXCIgKyAoXCJcXFwiXCIgKyBtYXRjaC5yb3V0ZS5pZCArIFwiXFxcIiBidXQgZGlkbid0IHJldHVybiBhbnl0aGluZyBmcm9tIHlvdXIgYFwiICsgdHlwZSArIFwiYCBcIikgKyBcImZ1bmN0aW9uLiBQbGVhc2UgcmV0dXJuIGEgdmFsdWUgb3IgYG51bGxgLlwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlc3VsdFR5cGUgPSBSZXN1bHRUeXBlLmVycm9yO1xuICAgIHJlc3VsdCA9IGU7XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKG9uUmVqZWN0KSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICBsZXQgc3RhdHVzID0gcmVzdWx0LnN0YXR1czsgLy8gUHJvY2VzcyByZWRpcmVjdHNcblxuICAgIGlmIChyZWRpcmVjdFN0YXR1c0NvZGVzLmhhcyhzdGF0dXMpKSB7XG4gICAgICBsZXQgbG9jYXRpb24gPSByZXN1bHQuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKTtcbiAgICAgIGludmFyaWFudChsb2NhdGlvbiwgXCJSZWRpcmVjdHMgcmV0dXJuZWQvdGhyb3duIGZyb20gbG9hZGVycy9hY3Rpb25zIG11c3QgaGF2ZSBhIExvY2F0aW9uIGhlYWRlclwiKTsgLy8gU3VwcG9ydCByZWxhdGl2ZSByb3V0aW5nIGluIGludGVybmFsIHJlZGlyZWN0c1xuXG4gICAgICBpZiAoIUFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KGxvY2F0aW9uKSkge1xuICAgICAgICBsZXQgYWN0aXZlTWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5pbmRleE9mKG1hdGNoKSArIDEpO1xuICAgICAgICBsZXQgcm91dGVQYXRobmFtZXMgPSBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhhY3RpdmVNYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKTtcbiAgICAgICAgbGV0IHJlc29sdmVkTG9jYXRpb24gPSByZXNvbHZlVG8obG9jYXRpb24sIHJvdXRlUGF0aG5hbWVzLCBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSk7XG4gICAgICAgIGludmFyaWFudChjcmVhdGVQYXRoKHJlc29sdmVkTG9jYXRpb24pLCBcIlVuYWJsZSB0byByZXNvbHZlIHJlZGlyZWN0IGxvY2F0aW9uOiBcIiArIGxvY2F0aW9uKTsgLy8gUHJlcGVuZCB0aGUgYmFzZW5hbWUgdG8gdGhlIHJlZGlyZWN0IGxvY2F0aW9uIGlmIHdlIGhhdmUgb25lXG5cbiAgICAgICAgaWYgKGJhc2VuYW1lKSB7XG4gICAgICAgICAgbGV0IHBhdGggPSByZXNvbHZlZExvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICAgIHJlc29sdmVkTG9jYXRpb24ucGF0aG5hbWUgPSBwYXRoID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYXRpb24gPSBjcmVhdGVQYXRoKHJlc29sdmVkTG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICghaXNTdGF0aWNSZXF1ZXN0KSB7XG4gICAgICAgIC8vIFN0cmlwIG9mZiB0aGUgcHJvdG9jb2wrb3JpZ2luIGZvciBzYW1lLW9yaWdpbiArIHNhbWUtYmFzZW5hbWUgYWJzb2x1dGVcbiAgICAgICAgLy8gcmVkaXJlY3RzLiBJZiB0aGlzIGlzIGEgc3RhdGljIHJlcXVlc3QsIHdlIGNhbiBsZXQgaXQgZ28gYmFjayB0byB0aGVcbiAgICAgICAgLy8gYnJvd3NlciBhcy1pc1xuICAgICAgICBsZXQgY3VycmVudFVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICBsZXQgdXJsID0gbG9jYXRpb24uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgbG9jYXRpb24pIDogbmV3IFVSTChsb2NhdGlvbik7XG4gICAgICAgIGxldCBpc1NhbWVCYXNlbmFtZSA9IHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBiYXNlbmFtZSkgIT0gbnVsbDtcblxuICAgICAgICBpZiAodXJsLm9yaWdpbiA9PT0gY3VycmVudFVybC5vcmlnaW4gJiYgaXNTYW1lQmFzZW5hbWUpIHtcbiAgICAgICAgICBsb2NhdGlvbiA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2ggKyB1cmwuaGFzaDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEb24ndCBwcm9jZXNzIHJlZGlyZWN0cyBpbiB0aGUgcm91dGVyIGR1cmluZyBzdGF0aWMgcmVxdWVzdHMgcmVxdWVzdHMuXG4gICAgICAvLyBJbnN0ZWFkLCB0aHJvdyB0aGUgUmVzcG9uc2UgYW5kIGxldCB0aGUgc2VydmVyIGhhbmRsZSBpdCB3aXRoIGFuIEhUVFBcbiAgICAgIC8vIHJlZGlyZWN0LiAgV2UgYWxzbyB1cGRhdGUgdGhlIExvY2F0aW9uIGhlYWRlciBpbiBwbGFjZSBpbiB0aGlzIGZsb3cgc29cbiAgICAgIC8vIGJhc2VuYW1lIGFuZCByZWxhdGl2ZSByb3V0aW5nIGlzIHRha2VuIGludG8gYWNjb3VudFxuXG5cbiAgICAgIGlmIChpc1N0YXRpY1JlcXVlc3QpIHtcbiAgICAgICAgcmVzdWx0LmhlYWRlcnMuc2V0KFwiTG9jYXRpb25cIiwgbG9jYXRpb24pO1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUucmVkaXJlY3QsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHJldmFsaWRhdGU6IHJlc3VsdC5oZWFkZXJzLmdldChcIlgtUmVtaXgtUmV2YWxpZGF0ZVwiKSAhPT0gbnVsbFxuICAgICAgfTtcbiAgICB9IC8vIEZvciBTU1Igc2luZ2xlLXJvdXRlIHJlcXVlc3RzLCB3ZSB3YW50IHRvIGhhbmQgUmVzcG9uc2VzIGJhY2sgZGlyZWN0bHlcbiAgICAvLyB3aXRob3V0IHVud3JhcHBpbmcuICBXZSBkbyB0aGlzIHdpdGggdGhlIFF1ZXJ5Um91dGVSZXNwb25zZSB3cmFwcGVyXG4gICAgLy8gaW50ZXJmYWNlIHNvIHdlIGNhbiBrbm93IHdoZXRoZXIgaXQgd2FzIHJldHVybmVkIG9yIHRocm93blxuXG5cbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgICB0aHJvdyB7XG4gICAgICAgIHR5cGU6IHJlc3VsdFR5cGUgfHwgUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICByZXNwb25zZTogcmVzdWx0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCBkYXRhO1xuICAgIGxldCBjb250ZW50VHlwZSA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTsgLy8gQ2hlY2sgYmV0d2VlbiB3b3JkIGJvdW5kYXJpZXMgaW5zdGVhZCBvZiBzdGFydHNXaXRoKCkgZHVlIHRvIHRoZSBsYXN0XG4gICAgLy8gcGFyYWdyYXBoIG9mIGh0dHBzOi8vaHR0cHdnLm9yZy9zcGVjcy9yZmM5MTEwLmh0bWwjZmllbGQuY29udGVudC10eXBlXG5cbiAgICBpZiAoY29udGVudFR5cGUgJiYgL1xcYmFwcGxpY2F0aW9uXFwvanNvblxcYi8udGVzdChjb250ZW50VHlwZSkpIHtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0VHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogcmVzdWx0VHlwZSxcbiAgICAgICAgZXJyb3I6IG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQsIGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgZGF0YSxcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgIH07XG4gIH1cblxuICBpZiAocmVzdWx0VHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiByZXN1bHRUeXBlLFxuICAgICAgZXJyb3I6IHJlc3VsdFxuICAgIH07XG4gIH1cblxuICBpZiAoaXNEZWZlcnJlZERhdGEocmVzdWx0KSkge1xuICAgIHZhciBfcmVzdWx0JGluaXQsIF9yZXN1bHQkaW5pdDI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5kZWZlcnJlZCxcbiAgICAgIGRlZmVycmVkRGF0YTogcmVzdWx0LFxuICAgICAgc3RhdHVzQ29kZTogKF9yZXN1bHQkaW5pdCA9IHJlc3VsdC5pbml0KSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3VsdCRpbml0LnN0YXR1cyxcbiAgICAgIGhlYWRlcnM6ICgoX3Jlc3VsdCRpbml0MiA9IHJlc3VsdC5pbml0KSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3VsdCRpbml0Mi5oZWFkZXJzKSAmJiBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICBkYXRhOiByZXN1bHRcbiAgfTtcbn0gLy8gVXRpbGl0eSBtZXRob2QgZm9yIGNyZWF0aW5nIHRoZSBSZXF1ZXN0IGluc3RhbmNlcyBmb3IgbG9hZGVycy9hY3Rpb25zIGR1cmluZ1xuLy8gY2xpZW50LXNpZGUgbmF2aWdhdGlvbnMgYW5kIGZldGNoZXMuICBEdXJpbmcgU1NSIHdlIHdpbGwgYWx3YXlzIGhhdmUgYVxuLy8gUmVxdWVzdCBpbnN0YW5jZSBmcm9tIHRoZSBzdGF0aWMgaGFuZGxlciAocXVlcnkvcXVlcnlSb3V0ZSlcblxuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChoaXN0b3J5LCBsb2NhdGlvbiwgc2lnbmFsLCBzdWJtaXNzaW9uKSB7XG4gIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdHJpcEhhc2hGcm9tUGF0aChsb2NhdGlvbikpLnRvU3RyaW5nKCk7XG4gIGxldCBpbml0ID0ge1xuICAgIHNpZ25hbFxuICB9O1xuXG4gIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YVxuICAgIH0gPSBzdWJtaXNzaW9uOyAvLyBEaWRuJ3QgdGhpbmsgd2UgbmVlZGVkIHRoaXMgYnV0IGl0IHR1cm5zIG91dCB1bmxpa2Ugb3RoZXIgbWV0aG9kcywgcGF0Y2hcbiAgICAvLyB3b24ndCBiZSBwcm9wZXJseSBub3JtYWxpemVkIHRvIHVwcGVyY2FzZSBhbmQgcmVzdWx0cyBpbiBhIDQwNSBlcnJvci5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW1ldGhvZFxuXG4gICAgaW5pdC5tZXRob2QgPSBmb3JtTWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgaW5pdC5ib2R5ID0gZm9ybUVuY1R5cGUgPT09IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgPyBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhmb3JtRGF0YSkgOiBmb3JtRGF0YTtcbiAgfSAvLyBDb250ZW50LVR5cGUgaXMgaW5mZXJyZWQgKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdClcblxuXG4gIHJldHVybiBuZXcgUmVxdWVzdCh1cmwsIGluaXQpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhmb3JtRGF0YSkge1xuICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNjb252ZXJ0aW5nLWFuLWVudHJ5LWxpc3QtdG8tYS1saXN0LW9mLW5hbWUtdmFsdWUtcGFpcnNcbiAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUgaW5zdGFuY2VvZiBGaWxlID8gdmFsdWUubmFtZSA6IHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCBhY3RpdmVEZWZlcnJlZHMpIHtcbiAgLy8gRmlsbCBpbiBsb2FkZXJEYXRhL2Vycm9ycyBmcm9tIG91ciBsb2FkZXJzXG4gIGxldCBsb2FkZXJEYXRhID0ge307XG4gIGxldCBlcnJvcnMgPSBudWxsO1xuICBsZXQgc3RhdHVzQ29kZTtcbiAgbGV0IGZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgbGV0IGxvYWRlckhlYWRlcnMgPSB7fTsgLy8gUHJvY2VzcyBsb2FkZXIgcmVzdWx0cyBpbnRvIHN0YXRlLmxvYWRlckRhdGEvc3RhdGUuZXJyb3JzXG5cbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgbGV0IGlkID0gbWF0Y2hlc1RvTG9hZFtpbmRleF0ucm91dGUuaWQ7XG4gICAgaW52YXJpYW50KCFpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCksIFwiQ2Fubm90IGhhbmRsZSByZWRpcmVjdCByZXN1bHRzIGluIHByb2Nlc3NMb2FkZXJEYXRhXCIpO1xuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gTG9vayB1cHdhcmRzIGZyb20gdGhlIG1hdGNoZWQgcm91dGUgZm9yIHRoZSBjbG9zZXN0IGFuY2VzdG9yXG4gICAgICAvLyBlcnJvciBib3VuZGFyeSwgZGVmYXVsdGluZyB0byB0aGUgcm9vdCBtYXRjaFxuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGlkKTtcbiAgICAgIGxldCBlcnJvciA9IHJlc3VsdC5lcnJvcjsgLy8gSWYgd2UgaGF2ZSBhIHBlbmRpbmcgYWN0aW9uIGVycm9yLCB3ZSByZXBvcnQgaXQgYXQgdGhlIGhpZ2hlc3Qtcm91dGVcbiAgICAgIC8vIHRoYXQgdGhyb3dzIGEgbG9hZGVyIGVycm9yLCBhbmQgdGhlbiBjbGVhciBpdCBvdXQgdG8gaW5kaWNhdGUgdGhhdFxuICAgICAgLy8gaXQgd2FzIGNvbnN1bWVkXG5cbiAgICAgIGlmIChwZW5kaW5nRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBPYmplY3QudmFsdWVzKHBlbmRpbmdFcnJvcilbMF07XG4gICAgICAgIHBlbmRpbmdFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IHt9OyAvLyBQcmVmZXIgaGlnaGVyIGVycm9yIHZhbHVlcyBpZiBsb3dlciBlcnJvcnMgYnViYmxlIHRvIHRoZSBzYW1lIGJvdW5kYXJ5XG5cbiAgICAgIGlmIChlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0gPT0gbnVsbCkge1xuICAgICAgICBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0gPSBlcnJvcjtcbiAgICAgIH0gLy8gQ2xlYXIgb3VyIGFueSBwcmlvciBsb2FkZXJEYXRhIGZvciB0aGUgdGhyb3dpbmcgcm91dGVcblxuXG4gICAgICBsb2FkZXJEYXRhW2lkXSA9IHVuZGVmaW5lZDsgLy8gT25jZSB3ZSBmaW5kIG91ciBmaXJzdCAoaGlnaGVzdCkgZXJyb3IsIHdlIHNldCB0aGUgc3RhdHVzIGNvZGUgYW5kXG4gICAgICAvLyBwcmV2ZW50IGRlZXBlciBzdGF0dXMgY29kZXMgZnJvbSBvdmVycmlkaW5nXG5cbiAgICAgIGlmICghZm91bmRFcnJvcikge1xuICAgICAgICBmb3VuZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgc3RhdHVzQ29kZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgbG9hZGVySGVhZGVyc1tpZF0gPSByZXN1bHQuaGVhZGVycztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBhY3RpdmVEZWZlcnJlZHMuc2V0KGlkLCByZXN1bHQuZGVmZXJyZWREYXRhKTtcbiAgICAgICAgbG9hZGVyRGF0YVtpZF0gPSByZXN1bHQuZGVmZXJyZWREYXRhLmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkZXJEYXRhW2lkXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgfSAvLyBFcnJvciBzdGF0dXMgY29kZXMgYWx3YXlzIG92ZXJyaWRlIHN1Y2Nlc3Mgc3RhdHVzIGNvZGVzLCBidXQgaWYgYWxsXG4gICAgICAvLyBsb2FkZXJzIGFyZSBzdWNjZXNzZnVsIHdlIHRha2UgdGhlIGRlZXBlc3Qgc3RhdHVzIGNvZGUuXG5cblxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXNDb2RlICE9IG51bGwgJiYgcmVzdWx0LnN0YXR1c0NvZGUgIT09IDIwMCAmJiAhZm91bmRFcnJvcikge1xuICAgICAgICBzdGF0dXNDb2RlID0gcmVzdWx0LnN0YXR1c0NvZGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuaGVhZGVycykge1xuICAgICAgICBsb2FkZXJIZWFkZXJzW2lkXSA9IHJlc3VsdC5oZWFkZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIElmIHdlIGRpZG4ndCBjb25zdW1lIHRoZSBwZW5kaW5nIGFjdGlvbiBlcnJvciAoaS5lLiwgYWxsIGxvYWRlcnNcbiAgLy8gcmVzb2x2ZWQpLCB0aGVuIGNvbnN1bWUgaXQgaGVyZS4gIEFsc28gY2xlYXIgb3V0IGFueSBsb2FkZXJEYXRhIGZvciB0aGVcbiAgLy8gdGhyb3dpbmcgcm91dGVcblxuICBpZiAocGVuZGluZ0Vycm9yKSB7XG4gICAgZXJyb3JzID0gcGVuZGluZ0Vycm9yO1xuICAgIGxvYWRlckRhdGFbT2JqZWN0LmtleXMocGVuZGluZ0Vycm9yKVswXV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzLFxuICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfHwgMjAwLFxuICAgIGxvYWRlckhlYWRlcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpIHtcbiAgbGV0IHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9yc1xuICB9ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nRXJyb3IsIGFjdGl2ZURlZmVycmVkcyk7IC8vIFByb2Nlc3MgcmVzdWx0cyBmcm9tIG91ciByZXZhbGlkYXRpbmcgZmV0Y2hlcnNcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IHtcbiAgICAgIGtleSxcbiAgICAgIG1hdGNoXG4gICAgfSA9IHJldmFsaWRhdGluZ0ZldGNoZXJzW2luZGV4XTtcbiAgICBpbnZhcmlhbnQoZmV0Y2hlclJlc3VsdHMgIT09IHVuZGVmaW5lZCAmJiBmZXRjaGVyUmVzdWx0c1tpbmRleF0gIT09IHVuZGVmaW5lZCwgXCJEaWQgbm90IGZpbmQgY29ycmVzcG9uZGluZyBmZXRjaGVyIHJlc3VsdFwiKTtcbiAgICBsZXQgcmVzdWx0ID0gZmV0Y2hlclJlc3VsdHNbaW5kZXhdOyAvLyBQcm9jZXNzIGZldGNoZXIgbm9uLXJlZGlyZWN0IGVycm9yc1xuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIG1hdGNoID09IG51bGwgPyB2b2lkIDAgOiBtYXRjaC5yb3V0ZS5pZCk7XG5cbiAgICAgIGlmICghKGVycm9ycyAmJiBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0pKSB7XG4gICAgICAgIGVycm9ycyA9IF9leHRlbmRzKHt9LCBlcnJvcnMsIHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFNob3VsZCBuZXZlciBnZXQgaGVyZSwgcmVkaXJlY3RzIHNob3VsZCBnZXQgcHJvY2Vzc2VkIGFib3ZlLCBidXQgd2VcbiAgICAgIC8vIGtlZXAgdGhpcyB0byB0eXBlIG5hcnJvdyB0byBhIHN1Y2Nlc3MgcmVzdWx0IGluIHRoZSBlbHNlXG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVW5oYW5kbGVkIGZldGNoZXIgcmV2YWxpZGF0aW9uIHJlZGlyZWN0XCIpO1xuICAgIH0gZWxzZSBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIGRlZmVycmVkIGRhdGEgc2hvdWxkIGJlIGF3YWl0ZWQgZm9yIGZldGNoZXJzXG4gICAgICAvLyBpbiByZXNvbHZlRGVmZXJyZWRSZXN1bHRzXG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVW5oYW5kbGVkIGZldGNoZXIgZGVmZXJyZWQgZGF0YVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9yc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxvYWRlckRhdGEobG9hZGVyRGF0YSwgbmV3TG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKSB7XG4gIGxldCBtZXJnZWRMb2FkZXJEYXRhID0gX2V4dGVuZHMoe30sIG5ld0xvYWRlckRhdGEpO1xuXG4gIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICBsZXQgaWQgPSBtYXRjaC5yb3V0ZS5pZDtcblxuICAgIGlmIChuZXdMb2FkZXJEYXRhLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgaWYgKG5ld0xvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkTG9hZGVyRGF0YVtpZF0gPSBuZXdMb2FkZXJEYXRhW2lkXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQgJiYgbWF0Y2gucm91dGUubG9hZGVyKSB7XG4gICAgICAvLyBQcmVzZXJ2ZSBleGlzdGluZyBrZXlzIG5vdCBpbmNsdWRlZCBpbiBuZXdMb2FkZXJEYXRhIGFuZCB3aGVyZSBhIGxvYWRlclxuICAgICAgLy8gd2Fzbid0IHJlbW92ZWQgYnkgSE1SXG4gICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IGxvYWRlckRhdGFbaWRdO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gRG9uJ3Qga2VlcCBhbnkgbG9hZGVyIGRhdGEgYmVsb3cgdGhlIGJvdW5kYXJ5XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkTG9hZGVyRGF0YTtcbn0gLy8gRmluZCB0aGUgbmVhcmVzdCBlcnJvciBib3VuZGFyeSwgbG9va2luZyB1cHdhcmRzIGZyb20gdGhlIGxlYWYgcm91dGUgKG9yIHRoZVxuLy8gcm91dGUgc3BlY2lmaWVkIGJ5IHJvdXRlSWQpIGZvciB0aGUgY2xvc2VzdCBhbmNlc3RvciBlcnJvciBib3VuZGFyeSxcbi8vIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2hcblxuXG5mdW5jdGlvbiBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIHJvdXRlSWQpIHtcbiAgbGV0IGVsaWdpYmxlTWF0Y2hlcyA9IHJvdXRlSWQgPyBtYXRjaGVzLnNsaWNlKDAsIG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkgKyAxKSA6IFsuLi5tYXRjaGVzXTtcbiAgcmV0dXJuIGVsaWdpYmxlTWF0Y2hlcy5yZXZlcnNlKCkuZmluZChtID0+IG0ucm91dGUuaGFzRXJyb3JCb3VuZGFyeSA9PT0gdHJ1ZSkgfHwgbWF0Y2hlc1swXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXMpIHtcbiAgLy8gUHJlZmVyIGEgcm9vdCBsYXlvdXQgcm91dGUgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIHNoaW0gaW4gYSByb3V0ZSBvYmplY3RcbiAgbGV0IHJvdXRlID0gcm91dGVzLmZpbmQociA9PiByLmluZGV4IHx8ICFyLnBhdGggfHwgci5wYXRoID09PSBcIi9cIikgfHwge1xuICAgIGlkOiBcIl9fc2hpbS1lcnJvci1yb3V0ZV9fXCJcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBbe1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgcGF0aG5hbWVCYXNlOiBcIlwiLFxuICAgICAgcm91dGVcbiAgICB9XSxcbiAgICByb3V0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKHN0YXR1cywgX3RlbXA0KSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUsXG4gICAgcm91dGVJZCxcbiAgICBtZXRob2QsXG4gICAgdHlwZVxuICB9ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNDtcbiAgbGV0IHN0YXR1c1RleHQgPSBcIlVua25vd24gU2VydmVyIEVycm9yXCI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlVua25vd24gQHJlbWl4LXJ1bi9yb3V0ZXIgZXJyb3JcIjtcblxuICBpZiAoc3RhdHVzID09PSA0MDApIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJCYWQgUmVxdWVzdFwiO1xuXG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtYWRlIGEgXCIgKyBtZXRob2QgKyBcIiByZXF1ZXN0IHRvIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiIGJ1dCBcIiArIChcImRpZCBub3QgcHJvdmlkZSBhIGBsb2FkZXJgIGZvciByb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiLCBcIikgKyBcInNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRlZmVyLWFjdGlvblwiKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImRlZmVyKCkgaXMgbm90IHN1cHBvcnRlZCBpbiBhY3Rpb25zXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiRm9yYmlkZGVuXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJSb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiIGRvZXMgbm90IG1hdGNoIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA0KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTm90IEZvdW5kXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJObyByb3V0ZSBtYXRjaGVzIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA1KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCI7XG5cbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCIgcmVxdWVzdCB0byBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIiBidXQgXCIgKyAoXCJkaWQgbm90IHByb3ZpZGUgYW4gYGFjdGlvbmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJJbnZhbGlkIHJlcXVlc3QgbWV0aG9kIFxcXCJcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCJcXFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cyB8fCA1MDAsIHN0YXR1c1RleHQsIG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpLCB0cnVlKTtcbn0gLy8gRmluZCBhbnkgcmV0dXJuZWQgcmVkaXJlY3QgZXJyb3JzLCBzdGFydGluZyBmcm9tIHRoZSBsb3dlc3QgbWF0Y2hcblxuXG5mdW5jdGlvbiBmaW5kUmVkaXJlY3QocmVzdWx0cykge1xuICBmb3IgKGxldCBpID0gcmVzdWx0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBIYXNoRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHBhdGgpIDogcGF0aDtcbiAgcmV0dXJuIGNyZWF0ZVBhdGgoX2V4dGVuZHMoe30sIHBhcnNlZFBhdGgsIHtcbiAgICBoYXNoOiBcIlwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gaXNIYXNoQ2hhbmdlT25seShhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggIT09IGIuaGFzaDtcbn1cblxuZnVuY3Rpb24gaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBSZXN1bHRUeXBlLmRlZmVycmVkO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC50eXBlKSA9PT0gUmVzdWx0VHlwZS5yZWRpcmVjdDtcbn1cblxuZnVuY3Rpb24gaXNEZWZlcnJlZERhdGEodmFsdWUpIHtcbiAgbGV0IGRlZmVycmVkID0gdmFsdWU7XG4gIHJldHVybiBkZWZlcnJlZCAmJiB0eXBlb2YgZGVmZXJyZWQgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlZmVycmVkLmRhdGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlZmVycmVkLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBkZWZlcnJlZC5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZGVmZXJyZWQucmVzb2x2ZURhdGEgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuZnVuY3Rpb24gaXNSZXNwb25zZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB2YWx1ZS5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZS5oZWFkZXJzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS5ib2R5ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuXG5mdW5jdGlvbiBpc1JlZGlyZWN0UmVzcG9uc2UocmVzdWx0KSB7XG4gIGlmICghaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gIGxldCBsb2NhdGlvbiA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICByZXR1cm4gc3RhdHVzID49IDMwMCAmJiBzdGF0dXMgPD0gMzk5ICYmIGxvY2F0aW9uICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzUXVlcnlSb3V0ZVJlc3BvbnNlKG9iaikge1xuICByZXR1cm4gb2JqICYmIGlzUmVzcG9uc2Uob2JqLnJlc3BvbnNlKSAmJiAob2JqLnR5cGUgPT09IFJlc3VsdFR5cGUuZGF0YSB8fCBSZXN1bHRUeXBlLmVycm9yKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZE1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkUmVxdWVzdE1ldGhvZHMuaGFzKG1ldGhvZC50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gaXNNdXRhdGlvbk1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkTXV0YXRpb25NZXRob2RzLmhhcyhtZXRob2QudG9Mb3dlckNhc2UoKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVEZWZlcnJlZFJlc3VsdHMoY3VycmVudE1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHNpZ25hbCwgaXNGZXRjaGVyLCBjdXJyZW50TG9hZGVyRGF0YSkge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tpbmRleF07XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlc1RvTG9hZFtpbmRleF07IC8vIElmIHdlIGRvbid0IGhhdmUgYSBtYXRjaCwgdGhlbiB3ZSBjYW4gaGF2ZSBhIGRlZmVycmVkIHJlc3VsdCB0byBkb1xuICAgIC8vIGFueXRoaW5nIHdpdGguICBUaGlzIGlzIGZvciByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgd2hlcmUgdGhlIHJvdXRlIHdhc1xuICAgIC8vIHJlbW92ZWQgZHVyaW5nIEhNUlxuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRNYXRjaCA9IGN1cnJlbnRNYXRjaGVzLmZpbmQobSA9PiBtLnJvdXRlLmlkID09PSBtYXRjaC5yb3V0ZS5pZCk7XG4gICAgbGV0IGlzUmV2YWxpZGF0aW5nTG9hZGVyID0gY3VycmVudE1hdGNoICE9IG51bGwgJiYgIWlzTmV3Um91dGVJbnN0YW5jZShjdXJyZW50TWF0Y2gsIG1hdGNoKSAmJiAoY3VycmVudExvYWRlckRhdGEgJiYgY3VycmVudExvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdKSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSAmJiAoaXNGZXRjaGVyIHx8IGlzUmV2YWxpZGF0aW5nTG9hZGVyKSkge1xuICAgICAgLy8gTm90ZTogd2UgZG8gbm90IGhhdmUgdG8gdG91Y2ggYWN0aXZlRGVmZXJyZWRzIGhlcmUgc2luY2Ugd2UgcmFjZSB0aGVtXG4gICAgICAvLyBhZ2FpbnN0IHRoZSBzaWduYWwgaW4gcmVzb2x2ZURlZmVycmVkRGF0YSBhbmQgdGhleSdsbCBnZXQgYWJvcnRlZFxuICAgICAgLy8gdGhlcmUgaWYgbmVlZGVkXG4gICAgICBhd2FpdCByZXNvbHZlRGVmZXJyZWREYXRhKHJlc3VsdCwgc2lnbmFsLCBpc0ZldGNoZXIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gcmVzdWx0IHx8IHJlc3VsdHNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIHNpZ25hbCwgdW53cmFwKSB7XG4gIGlmICh1bndyYXAgPT09IHZvaWQgMCkge1xuICAgIHVud3JhcCA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IGFib3J0ZWQgPSBhd2FpdCByZXN1bHQuZGVmZXJyZWREYXRhLnJlc29sdmVEYXRhKHNpZ25hbCk7XG5cbiAgaWYgKGFib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodW53cmFwKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRlZmVycmVkRGF0YS51bndyYXBwZWREYXRhXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEhhbmRsZSBhbnkgVHJhY2tlZFByb21pc2UuX2Vycm9yIHZhbHVlcyBlbmNvdW50ZXJlZCB3aGlsZSB1bndyYXBwaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICBkYXRhOiByZXN1bHQuZGVmZXJyZWREYXRhLmRhdGFcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzTmFrZWRJbmRleFF1ZXJ5KHNlYXJjaCkge1xuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLmdldEFsbChcImluZGV4XCIpLnNvbWUodiA9PiB2ID09PSBcIlwiKTtcbn0gLy8gTm90ZTogVGhpcyBzaG91bGQgbWF0Y2ggdGhlIGZvcm1hdCBleHBvcnRlZCBieSB1c2VNYXRjaGVzLCBzbyBpZiB5b3UgY2hhbmdlXG4vLyB0aGlzIHBsZWFzZSBhbHNvIGNoYW5nZSB0aGF0IDopICBFdmVudHVhbGx5IHdlJ2xsIERSWSB0aGlzIHVwXG5cblxuZnVuY3Rpb24gY3JlYXRlVXNlTWF0Y2hlc01hdGNoKG1hdGNoLCBsb2FkZXJEYXRhKSB7XG4gIGxldCB7XG4gICAgcm91dGUsXG4gICAgcGF0aG5hbWUsXG4gICAgcGFyYW1zXG4gIH0gPSBtYXRjaDtcbiAgcmV0dXJuIHtcbiAgICBpZDogcm91dGUuaWQsXG4gICAgcGF0aG5hbWUsXG4gICAgcGFyYW1zLFxuICAgIGRhdGE6IGxvYWRlckRhdGFbcm91dGUuaWRdLFxuICAgIGhhbmRsZTogcm91dGUuaGFuZGxlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKSB7XG4gIGxldCBzZWFyY2ggPSB0eXBlb2YgbG9jYXRpb24gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb24pLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaDtcblxuICBpZiAobWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmluZGV4ICYmIGhhc05ha2VkSW5kZXhRdWVyeShzZWFyY2ggfHwgXCJcIikpIHtcbiAgICAvLyBSZXR1cm4gdGhlIGxlYWYgaW5kZXggcm91dGUgd2hlbiBpbmRleCBpcyBwcmVzZW50XG4gICAgcmV0dXJuIG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgfSAvLyBPdGhlcndpc2UgZ3JhYiB0aGUgZGVlcGVzdCBcInBhdGggY29udHJpYnV0aW5nXCIgbWF0Y2ggKGlnbm9yaW5nIGluZGV4IGFuZFxuICAvLyBwYXRobGVzcyBsYXlvdXQgcm91dGVzKVxuXG5cbiAgbGV0IHBhdGhNYXRjaGVzID0gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcyk7XG4gIHJldHVybiBwYXRoTWF0Y2hlc1twYXRoTWF0Y2hlcy5sZW5ndGggLSAxXTtcbn0gLy8jZW5kcmVnaW9uXG5cbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24sIEVycm9yUmVzcG9uc2UsIElETEVfQkxPQ0tFUiwgSURMRV9GRVRDSEVSLCBJRExFX05BVklHQVRJT04sIFVOU0FGRV9ERUZFUlJFRF9TWU1CT0wsIERlZmVycmVkRGF0YSBhcyBVTlNBRkVfRGVmZXJyZWREYXRhLCBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzIGFzIFVOU0FGRV9jb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzLCBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyBhcyBVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMsIGludmFyaWFudCBhcyBVTlNBRkVfaW52YXJpYW50LCB3YXJuaW5nIGFzIFVOU0FGRV93YXJuaW5nLCBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlciwgY3JlYXRlU3RhdGljSGFuZGxlciwgZGVmZXIsIGdlbmVyYXRlUGF0aCwgZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvciwgZ2V0VG9QYXRobmFtZSwgaXNEZWZlcnJlZERhdGEsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqb2luUGF0aHMsIGpzb24sIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIG5vcm1hbGl6ZVBhdGhuYW1lLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZXNvbHZlUGF0aCwgcmVzb2x2ZVRvLCBzdHJpcEJhc2VuYW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBDYXJ0ID0gKHsgcHJvZHVjdHMsIHN1bSwgYWRkUHJvZHVjdCwgcmVtb3ZlUHJvZHVjdCB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgICAgPExpbmsgdG89e1wiL1wifT5Xc3p5c3RraWU8L0xpbms+PGJyIC8+XHJcbiAgICAgIDxMaW5rIHRvPXtcIi8xMFwifT5kbyAxMHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgPExpbmsgdG89e1wiLzUwXCJ9PmRvIDUwesWCPC9MaW5rPjxiciAvPlxyXG4gICAgICA8TGluayB0bz17XCIvMTAwXCJ9PmRvIDEwMHrFgjwvTGluaz48YnIgLz5cclxuICAgICAgPEZvcm0gYWRkUHJvZHVjdD17YWRkUHJvZHVjdH0gLz5cclxuICAgICAgPExpc3QgcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxyXG4gICAgICA8aDE+RG8gemFwxYJhdHk6IHtzdW19IFBMTjwvaDE+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iLCIvKipcbiAqIFJlYWN0IFJvdXRlciBET00gdjYuMTAuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeSwgUm91dGVyLCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIHVzZUhyZWYsIHVzZVJlc29sdmVkUGF0aCwgdXNlTG9jYXRpb24sIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCB1c2VOYXZpZ2F0ZSwgY3JlYXRlUGF0aCwgVU5TQUZFX1JvdXRlQ29udGV4dCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGlvbiwgdW5zdGFibGVfdXNlQmxvY2tlciwgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgTmF2aWdhdGlvblR5cGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlcywgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0LCBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBVTlNBRkVfUm91dGVDb250ZXh0LCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVuZGVyTWF0Y2hlcywgcmVzb2x2ZVBhdGgsIHVuc3RhYmxlX3VzZUJsb2NrZXIsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgRXJyb3JSZXNwb25zZSwgc3RyaXBCYXNlbmFtZSwgVU5TQUZFX3dhcm5pbmcsIFVOU0FGRV9pbnZhcmlhbnQsIGpvaW5QYXRocyB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuY29uc3QgZGVmYXVsdE1ldGhvZCA9IFwiZ2V0XCI7XG5jb25zdCBkZWZhdWx0RW5jVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5mdW5jdGlvbiBpc0h0bWxFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdC50YWdOYW1lID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNCdXR0b25FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYnV0dG9uXCI7XG59XG5mdW5jdGlvbiBpc0Zvcm1FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZm9ybVwiO1xufVxuZnVuY3Rpb24gaXNJbnB1dEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICA7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuXG4gIGlmIChkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXMua2V5cygpKSB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmdldEFsbChrZXkpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5mdW5jdGlvbiBnZXRGb3JtU3VibWlzc2lvbkluZm8odGFyZ2V0LCBkZWZhdWx0QWN0aW9uLCBvcHRpb25zKSB7XG4gIGxldCBtZXRob2Q7XG4gIGxldCBhY3Rpb247XG4gIGxldCBlbmNUeXBlO1xuICBsZXQgZm9ybURhdGE7XG5cbiAgaWYgKGlzRm9ybUVsZW1lbnQodGFyZ2V0KSkge1xuICAgIGxldCBzdWJtaXNzaW9uVHJpZ2dlciA9IG9wdGlvbnMuc3VibWlzc2lvblRyaWdnZXI7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG5cbiAgICBpZiAoc3VibWlzc2lvblRyaWdnZXIgJiYgc3VibWlzc2lvblRyaWdnZXIubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHN1Ym1pc3Npb25UcmlnZ2VyLm5hbWUsIHN1Ym1pc3Npb25UcmlnZ2VyLnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdXR0b25FbGVtZW50KHRhcmdldCkgfHwgaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSAmJiAodGFyZ2V0LnR5cGUgPT09IFwic3VibWl0XCIgfHwgdGFyZ2V0LnR5cGUgPT09IFwiaW1hZ2VcIikpIHtcbiAgICBsZXQgZm9ybSA9IHRhcmdldC5mb3JtO1xuXG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiPiB3aXRob3V0IGEgPGZvcm0+XCIpO1xuICAgIH0gLy8gPGJ1dHRvbj4vPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gbWF5IG92ZXJyaWRlIGF0dHJpYnV0ZXMgb2YgPGZvcm0+XG5cblxuICAgIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IGRlZmF1bHRNZXRob2Q7XG4gICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1hY3Rpb25cIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtZW5jdHlwZVwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7IC8vIEluY2x1ZGUgbmFtZSArIHZhbHVlIGZyb20gYSA8YnV0dG9uPiwgYXBwZW5kaW5nIGluIGNhc2UgdGhlIGJ1dHRvbiBuYW1lXG4gICAgLy8gbWF0Y2hlcyBhbiBleGlzdGluZyBpbnB1dCBuYW1lXG5cbiAgICBpZiAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXQubmFtZSwgdGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNIdG1sRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBlbGVtZW50IHRoYXQgaXMgbm90IDxmb3JtPiwgPGJ1dHRvbj4sIG9yIFwiICsgXCI8aW5wdXQgdHlwZT1cXFwic3VibWl0fGltYWdlXFxcIj5cIik7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBkZWZhdWx0QWN0aW9uO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgZGVmYXVsdEVuY1R5cGU7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGZvcm1EYXRhID0gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgdGFyZ2V0KSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdGFyZ2V0W25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCB7XG4gICAgcHJvdG9jb2wsXG4gICAgaG9zdFxuICB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBsZXQgdXJsID0gbmV3IFVSTChhY3Rpb24sIHByb3RvY29sICsgXCIvL1wiICsgaG9zdCk7XG4gIHJldHVybiB7XG4gICAgdXJsLFxuICAgIG1ldGhvZDogbWV0aG9kLnRvTG93ZXJDYXNlKCksXG4gICAgZW5jVHlwZSxcbiAgICBmb3JtRGF0YVxuICB9O1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJvbkNsaWNrXCIsIFwicmVsYXRpdmVcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcImFyaWEtY3VycmVudFwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJlbmRcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiY2hpbGRyZW5cIl0sXG4gICAgICBfZXhjbHVkZWQzID0gW1wicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwibWV0aG9kXCIsIFwiYWN0aW9uXCIsIFwib25TdWJtaXRcIiwgXCJmZXRjaGVyS2V5XCIsIFwicm91dGVJZFwiLCBcInJlbGF0aXZlXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdO1xuZnVuY3Rpb24gY3JlYXRlQnJvd3NlclJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3c6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMud2luZG93XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSkgfHwgcGFyc2VIeWRyYXRpb25EYXRhKCksXG4gICAgcm91dGVzLFxuICAgIGRldGVjdEVycm9yQm91bmRhcnk6IFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5XG4gIH0pLmluaXRpYWxpemUoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmJhc2VuYW1lLFxuICAgIGZ1dHVyZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mdXR1cmUsXG4gICAgaGlzdG9yeTogY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlcyxcbiAgICBkZXRlY3RFcnJvckJvdW5kYXJ5OiBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeVxuICB9KS5pbml0aWFsaXplKCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHlkcmF0aW9uRGF0YSgpIHtcbiAgdmFyIF93aW5kb3c7XG5cbiAgbGV0IHN0YXRlID0gKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YTtcblxuICBpZiAoc3RhdGUgJiYgc3RhdGUuZXJyb3JzKSB7XG4gICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgIGVycm9yczogZGVzZXJpYWxpemVFcnJvcnMoc3RhdGUuZXJyb3JzKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9ycyhlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMpIHJldHVybiBudWxsO1xuICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGVycm9ycyk7XG4gIGxldCBzZXJpYWxpemVkID0ge307XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBlbnRyaWVzKSB7XG4gICAgLy8gSGV5IHlvdSEgIElmIHlvdSBjaGFuZ2UgdGhpcywgcGxlYXNlIGNoYW5nZSB0aGUgY29ycmVzcG9uZGluZyBsb2dpYyBpblxuICAgIC8vIHNlcmlhbGl6ZUVycm9ycyBpbiByZWFjdC1yb3V0ZXItZG9tL3NlcnZlci50c3ggOilcbiAgICBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiUm91dGVFcnJvclJlc3BvbnNlXCIpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IG5ldyBFcnJvclJlc3BvbnNlKHZhbC5zdGF0dXMsIHZhbC5zdGF0dXNUZXh0LCB2YWwuZGF0YSwgdmFsLmludGVybmFsID09PSB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIkVycm9yXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcih2YWwubWVzc2FnZSk7IC8vIFdpcGUgYXdheSB0aGUgY2xpZW50LXNpZGUgc3RhY2sgdHJhY2UuICBOb3RoaW5nIHRvIGZpbGwgaXQgaW4gd2l0aFxuICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBzZXJpYWxpemUgU1NSIHN0YWNrIHRyYWNlcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuXG4gICAgICBlcnJvci5zdGFjayA9IFwiXCI7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICovXG5cblxuZnVuY3Rpb24gQnJvd3NlclJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdyxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuXG5mdW5jdGlvbiBIYXNoUm91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCB0aGF0IGFjY2VwdHMgYSBwcmUtaW5zdGFudGlhdGVkIGhpc3Rvcnkgb2JqZWN0LiBJdCdzIGltcG9ydGFudFxuICogdG8gbm90ZSB0aGF0IHVzaW5nIHlvdXIgb3duIGhpc3Rvcnkgb2JqZWN0IGlzIGhpZ2hseSBkaXNjb3VyYWdlZCBhbmQgbWF5IGFkZFxuICogdHdvIHZlcnNpb25zIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdG8geW91ciBidW5kbGVzIHVubGVzcyB5b3UgdXNlIHRoZSBzYW1lXG4gKiB2ZXJzaW9uIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdGhhdCBSZWFjdCBSb3V0ZXIgdXNlcyBpbnRlcm5hbGx5LlxuICovXG5cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmMztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhpc3RvcnlSb3V0ZXIuZGlzcGxheU5hbWUgPSBcInVuc3RhYmxlX0hpc3RvcnlSb3V0ZXJcIjtcbn1cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBBQlNPTFVURV9VUkxfUkVHRVggPSAvXig/OlthLXpdW2EtejAtOSsuLV0qOnxcXC9cXC8pL2k7XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5jb25zdCBMaW5rID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua1dpdGhSZWYoX3JlZjQsIHJlZikge1xuICBsZXQge1xuICAgIG9uQ2xpY2ssXG4gICAgcmVsYXRpdmUsXG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgdG8sXG4gICAgcHJldmVudFNjcm9sbFJlc2V0XG4gIH0gPSBfcmVmNCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcblxuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7IC8vIFJlbmRlcmVkIGludG8gPGEgaHJlZj4gZm9yIGFic29sdXRlIFVSTHNcblxuICBsZXQgYWJzb2x1dGVIcmVmO1xuICBsZXQgaXNFeHRlcm5hbCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgJiYgQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QodG8pKSB7XG4gICAgLy8gUmVuZGVyIHRoZSBhYnNvbHV0ZSBocmVmIHNlcnZlci0gYW5kIGNsaWVudC1zaWRlXG4gICAgYWJzb2x1dGVIcmVmID0gdG87IC8vIE9ubHkgY2hlY2sgZm9yIGV4dGVybmFsIG9yaWdpbnMgY2xpZW50LXNpZGVcblxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIGxldCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICBsZXQgdGFyZ2V0VXJsID0gdG8uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgdG8pIDogbmV3IFVSTCh0byk7XG4gICAgICBsZXQgcGF0aCA9IHN0cmlwQmFzZW5hbWUodGFyZ2V0VXJsLnBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICAgIGlmICh0YXJnZXRVcmwub3JpZ2luID09PSBjdXJyZW50VXJsLm9yaWdpbiAmJiBwYXRoICE9IG51bGwpIHtcbiAgICAgICAgLy8gU3RyaXAgdGhlIHByb3RvY29sL29yaWdpbi9iYXNlbmFtZSBmb3Igc2FtZS1vcmlnaW4gYWJzb2x1dGUgVVJMc1xuICAgICAgICB0byA9IHBhdGggKyB0YXJnZXRVcmwuc2VhcmNoICsgdGFyZ2V0VXJsLmhhc2g7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0V4dGVybmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgcmVsYXRpdmUgVVJMc1xuXG5cbiAgbGV0IGhyZWYgPSB1c2VIcmVmKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBpbnRlcm5hbE9uQ2xpY2sgPSB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBpbnRlcm5hbE9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogYWJzb2x1dGVIcmVmIHx8IGhyZWYsXG4gICAgICBvbkNsaWNrOiBpc0V4dGVybmFsIHx8IHJlbG9hZERvY3VtZW50ID8gb25DbGljayA6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiByZWYsXG4gICAgICB0YXJnZXQ6IHRhcmdldFxuICAgIH0pKVxuICApO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xufVxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuXG5cbmNvbnN0IE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZMaW5rV2l0aFJlZihfcmVmNSwgcmVmKSB7XG4gIGxldCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRQcm9wID0gXCJwYWdlXCIsXG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCA9IFwiXCIsXG4gICAgZW5kID0gZmFsc2UsXG4gICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICB0byxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIF9leGNsdWRlZDIpO1xuXG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmU6IHJlc3QucmVsYXRpdmVcbiAgfSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgdG9QYXRobmFtZSA9IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihwYXRoKS5wYXRobmFtZSA6IHBhdGgucGF0aG5hbWU7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuXG4gIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgIGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV4dExvY2F0aW9uUGF0aG5hbWUgPSBuZXh0TG9jYXRpb25QYXRobmFtZSA/IG5leHRMb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICAgIHRvUGF0aG5hbWUgPSB0b1BhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBsZXQgaXNBY3RpdmUgPSBsb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbG9jYXRpb25QYXRobmFtZS5zdGFydHNXaXRoKHRvUGF0aG5hbWUpICYmIGxvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCI7XG4gIGxldCBpc1BlbmRpbmcgPSBuZXh0TG9jYXRpb25QYXRobmFtZSAhPSBudWxsICYmIChuZXh0TG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIG5leHRMb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCIpO1xuICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHVuZGVmaW5lZDtcbiAgbGV0IGNsYXNzTmFtZTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc1BlbmRpbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGwsIGlzUGVuZGluZyA/IFwicGVuZGluZ1wiIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgbGV0IHN0eWxlID0gdHlwZW9mIHN0eWxlUHJvcCA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGVQcm9wKHtcbiAgICBpc0FjdGl2ZSxcbiAgICBpc1BlbmRpbmdcbiAgfSkgOiBzdHlsZVByb3A7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB0bzogdG9cbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oe1xuICAgIGlzQWN0aXZlLFxuICAgIGlzUGVuZGluZ1xuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbn1cbi8qKlxuICogQSBgQHJlbWl4LXJ1bi9yb3V0ZXJgLWF3YXJlIGA8Zm9ybT5gLiBJdCBiZWhhdmVzIGxpa2UgYSBub3JtYWwgZm9ybSBleGNlcHRcbiAqIHRoYXQgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIHNlcnZlciBpcyB3aXRoIGBmZXRjaGAgaW5zdGVhZCBvZiBuZXcgZG9jdW1lbnRcbiAqIHJlcXVlc3RzLCBhbGxvd2luZyBjb21wb25lbnRzIHRvIGFkZCBuaWNlciBVWCB0byB0aGUgcGFnZSBhcyB0aGUgZm9ybSBpc1xuICogc3VibWl0dGVkIGFuZCByZXR1cm5zIHdpdGggZGF0YS5cbiAqL1xuXG5cbmNvbnN0IEZvcm0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm0uZGlzcGxheU5hbWUgPSBcIkZvcm1cIjtcbn1cblxuY29uc3QgRm9ybUltcGwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoX3JlZjYsIGZvcndhcmRlZFJlZikgPT4ge1xuICBsZXQge1xuICAgIHJlbG9hZERvY3VtZW50LFxuICAgIHJlcGxhY2UsXG4gICAgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgICBhY3Rpb24sXG4gICAgb25TdWJtaXQsXG4gICAgZmV0Y2hlcktleSxcbiAgICByb3V0ZUlkLFxuICAgIHJlbGF0aXZlLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICB9ID0gX3JlZjYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY2LCBfZXhjbHVkZWQzKTtcblxuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZvcm1NZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gXCJnZXRcIiA/IFwiZ2V0XCIgOiBcInBvc3RcIjtcbiAgbGV0IGZvcm1BY3Rpb24gPSB1c2VGb3JtQWN0aW9uKGFjdGlvbiwge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGxldCBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdHRlciA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnN1Ym1pdHRlcjtcbiAgICBsZXQgc3VibWl0TWV0aG9kID0gKHN1Ym1pdHRlciA9PSBudWxsID8gdm9pZCAwIDogc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikpIHx8IG1ldGhvZDtcbiAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgIG1ldGhvZDogc3VibWl0TWV0aG9kLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBmb3J3YXJkZWRSZWYsXG4gICAgbWV0aG9kOiBmb3JtTWV0aG9kLFxuICAgIGFjdGlvbjogZm9ybUFjdGlvbixcbiAgICBvblN1Ym1pdDogcmVsb2FkRG9jdW1lbnQgPyBvblN1Ym1pdCA6IHN1Ym1pdEhhbmRsZXJcbiAgfSwgcHJvcHMpKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm1JbXBsLmRpc3BsYXlOYW1lID0gXCJGb3JtSW1wbFwiO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB3aWxsIGVtdWxhdGUgdGhlIGJyb3dzZXIncyBzY3JvbGwgcmVzdG9yYXRpb24gb24gbG9jYXRpb25cbiAqIGNoYW5nZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBTY3JvbGxSZXN0b3JhdGlvbihfcmVmNykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfcmVmNztcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24oe1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTY3JvbGxSZXN0b3JhdGlvbi5kaXNwbGF5TmFtZSA9IFwiU2Nyb2xsUmVzdG9yYXRpb25cIjtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhvb2tzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBEYXRhUm91dGVySG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVySG9vaykge1xuICBEYXRhUm91dGVySG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVN1Ym1pdEltcGxcIl0gPSBcInVzZVN1Ym1pdEltcGxcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VGZXRjaGVyXCJdID0gXCJ1c2VGZXRjaGVyXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyc1wiXSA9IFwidXNlRmV0Y2hlcnNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0KTtcbiAgIWN0eCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gY3R4O1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGUoaG9va05hbWUpIHtcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWNrIGJlaGF2aW9yIGZvciByb3V0ZXIgYDxMaW5rPmAgY29tcG9uZW50cy4gVGhpcyBpcyB1c2VmdWwgaWZcbiAqIHlvdSBuZWVkIHRvIGNyZWF0ZSBjdXN0b20gYDxMaW5rPmAgY29tcG9uZW50cyB3aXRoIHRoZSBzYW1lIGNsaWNrIGJlaGF2aW9yIHdlXG4gKiB1c2UgaW4gb3VyIGV4cG9ydGVkIGA8TGluaz5gLlxuICovXG5cblxuZnVuY3Rpb24gdXNlTGlua0NsaWNrSGFuZGxlcih0bywgX3RlbXApIHtcbiAgbGV0IHtcbiAgICB0YXJnZXQsXG4gICAgcmVwbGFjZTogcmVwbGFjZVByb3AsXG4gICAgc3RhdGUsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGV2ZW50ID0+IHtcbiAgICBpZiAoc2hvdWxkUHJvY2Vzc0xpbmtDbGljayhldmVudCwgdGFyZ2V0KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gSWYgdGhlIFVSTCBoYXNuJ3QgY2hhbmdlZCwgYSByZWd1bGFyIDxhPiB3aWxsIGRvIGEgcmVwbGFjZSBpbnN0ZWFkIG9mXG4gICAgICAvLyBhIHB1c2gsIHNvIGRvIHRoZSBzYW1lIGhlcmUgdW5sZXNzIHRoZSByZXBsYWNlIHByb3AgaXMgZXhwbGljaXRseSBzZXRcblxuICAgICAgbGV0IHJlcGxhY2UgPSByZXBsYWNlUHJvcCAhPT0gdW5kZWZpbmVkID8gcmVwbGFjZVByb3AgOiBjcmVhdGVQYXRoKGxvY2F0aW9uKSA9PT0gY3JlYXRlUGF0aChwYXRoKTtcbiAgICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICAgIHJlbGF0aXZlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtsb2NhdGlvbiwgbmF2aWdhdGUsIHBhdGgsIHJlcGxhY2VQcm9wLCBzdGF0ZSwgdGFyZ2V0LCB0bywgcHJldmVudFNjcm9sbFJlc2V0LCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBBIGNvbnZlbmllbnQgd3JhcHBlciBmb3IgcmVhZGluZyBhbmQgd3JpdGluZyBzZWFyY2ggcGFyYW1ldGVycyB2aWEgdGhlXG4gKiBVUkxTZWFyY2hQYXJhbXMgaW50ZXJmYWNlLlxuICovXG5cbmZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyh0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSBcInVuZGVmaW5lZFwiLCBcIllvdSBjYW5ub3QgdXNlIHRoZSBgdXNlU2VhcmNoUGFyYW1zYCBob29rIGluIGEgYnJvd3NlciB0aGF0IGRvZXMgbm90IFwiICsgXCJzdXBwb3J0IHRoZSBVUkxTZWFyY2hQYXJhbXMgQVBJLiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IEludGVybmV0IFwiICsgXCJFeHBsb3JlciAxMSwgd2UgcmVjb21tZW5kIHlvdSBsb2FkIGEgcG9seWZpbGwgc3VjaCBhcyBcIiArIFwiaHR0cHM6Ly9naXRodWIuY29tL3VuZ2FwL3VybC1zZWFyY2gtcGFyYW1zXFxuXFxuXCIgKyBcIklmIHlvdSdyZSB1bnN1cmUgaG93IHRvIGxvYWQgcG9seWZpbGxzLCB3ZSByZWNvbW1lbmQgeW91IGNoZWNrIG91dCBcIiArIFwiaHR0cHM6Ly9wb2x5ZmlsbC5pby92My8gd2hpY2ggcHJvdmlkZXMgc29tZSByZWNvbW1lbmRhdGlvbnMgYWJvdXQgaG93IFwiICsgXCJ0byBsb2FkIHBvbHlmaWxscyBvbmx5IGZvciB1c2VycyB0aGF0IG5lZWQgdGhlbSwgaW5zdGVhZCBvZiBmb3IgZXZlcnkgXCIgKyBcInVzZXIuXCIpIDogdm9pZCAwO1xuICBsZXQgZGVmYXVsdFNlYXJjaFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihjcmVhdGVTZWFyY2hQYXJhbXMoZGVmYXVsdEluaXQpKTtcbiAgbGV0IGhhc1NldFNlYXJjaFBhcmFtc1JlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IC8vIE9ubHkgbWVyZ2UgaW4gdGhlIGRlZmF1bHRzIGlmIHdlIGhhdmVuJ3QgeWV0IGNhbGxlZCBzZXRTZWFyY2hQYXJhbXMuXG4gIC8vIE9uY2Ugd2UgY2FsbCB0aGF0IHdlIHdhbnQgdGhvc2UgdG8gdGFrZSBwcmVjZWRlbmNlLCBvdGhlcndpc2UgeW91IGNhbid0XG4gIC8vIHJlbW92ZSBhIHBhcmFtIHdpdGggc2V0U2VhcmNoUGFyYW1zKHt9KSBpZiBpdCBoYXMgYW4gaW5pdGlhbCB2YWx1ZVxuICBnZXRTZWFyY2hQYXJhbXNGb3JMb2NhdGlvbihsb2NhdGlvbi5zZWFyY2gsIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID8gbnVsbCA6IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCksIFtsb2NhdGlvbi5zZWFyY2hdKTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgbGV0IHNldFNlYXJjaFBhcmFtcyA9IFJlYWN0LnVzZUNhbGxiYWNrKChuZXh0SW5pdCwgbmF2aWdhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgbmV3U2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zKHR5cGVvZiBuZXh0SW5pdCA9PT0gXCJmdW5jdGlvblwiID8gbmV4dEluaXQoc2VhcmNoUGFyYW1zKSA6IG5leHRJbml0KTtcbiAgICBoYXNTZXRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCA9IHRydWU7XG4gICAgbmF2aWdhdGUoXCI/XCIgKyBuZXdTZWFyY2hQYXJhbXMsIG5hdmlnYXRlT3B0aW9ucyk7XG4gIH0sIFtuYXZpZ2F0ZSwgc2VhcmNoUGFyYW1zXSk7XG4gIHJldHVybiBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IHN1Ym1pdCBhIGZvcm0gKG9yXG4gKiBzb21lIGFyYml0cmFyeSBkYXRhKSB0byB0aGUgc2VydmVyLlxuICovXG5cbmZ1bmN0aW9uIHVzZVN1Ym1pdCgpIHtcbiAgcmV0dXJuIHVzZVN1Ym1pdEltcGwoKTtcbn1cblxuZnVuY3Rpb24gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTdWJtaXRJbXBsKTtcbiAgbGV0IGRlZmF1bHRBY3Rpb24gPSB1c2VGb3JtQWN0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgY2FsbGluZyBzdWJtaXQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLiBcIiArIFwiVHJ5IGNhbGxpbmcgc3VibWl0IHdpdGhpbiBhIGB1c2VFZmZlY3RgIG9yIGNhbGxiYWNrIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBtZXRob2QsXG4gICAgICBlbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICB1cmxcbiAgICB9ID0gZ2V0Rm9ybVN1Ym1pc3Npb25JbmZvKHRhcmdldCwgZGVmYXVsdEFjdGlvbiwgb3B0aW9ucyk7XG4gICAgbGV0IGhyZWYgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgcmVwbGFjZTogb3B0aW9ucy5yZXBsYWNlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRpb25zLnByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybU1ldGhvZDogbWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGU6IGVuY1R5cGVcbiAgICB9O1xuXG4gICAgaWYgKGZldGNoZXJLZXkpIHtcbiAgICAgICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIHVzZUZldGNoZXIoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUoaHJlZiwgb3B0cyk7XG4gICAgfVxuICB9LCBbZGVmYXVsdEFjdGlvbiwgcm91dGVyLCBmZXRjaGVyS2V5LCByb3V0ZUlkXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUZvcm1BY3Rpb24oYWN0aW9uLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgcm91dGVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlQ29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRm9ybUFjdGlvbiBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbbWF0Y2hdID0gcm91dGVDb250ZXh0Lm1hdGNoZXMuc2xpY2UoLTEpOyAvLyBTaGFsbG93IGNsb25lIHBhdGggc28gd2UgY2FuIG1vZGlmeSBpdCBiZWxvdywgb3RoZXJ3aXNlIHdlIG1vZGlmeSB0aGVcbiAgLy8gb2JqZWN0IHJlZmVyZW5jZWQgYnkgdXNlTWVtbyBpbnNpZGUgdXNlUmVzb2x2ZWRQYXRoXG5cbiAgbGV0IHBhdGggPSBfZXh0ZW5kcyh7fSwgdXNlUmVzb2x2ZWRQYXRoKGFjdGlvbiA/IGFjdGlvbiA6IFwiLlwiLCB7XG4gICAgcmVsYXRpdmVcbiAgfSkpOyAvLyBQcmV2aW91c2x5IHdlIHNldCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gXCIuXCIuIFRoZSBwcm9ibGVtIHdpdGggdGhpcyBpcyB0aGF0XG4gIC8vIGB1c2VSZXNvbHZlZFBhdGgoXCIuXCIpYCBleGNsdWRlcyBzZWFyY2ggcGFyYW1zIGFuZCB0aGUgaGFzaCBvZiB0aGUgcmVzb2x2ZWRcbiAgLy8gVVJMLiBUaGlzIGlzIHRoZSBpbnRlbmRlZCBiZWhhdmlvciBvZiB3aGVuIFwiLlwiIGlzIHNwZWNpZmljYWxseSBwcm92aWRlZCBhc1xuICAvLyB0aGUgZm9ybSBhY3Rpb24sIGJ1dCBpbmNvbnNpc3RlbnQgdy8gYnJvd3NlcnMgd2hlbiB0aGUgYWN0aW9uIGlzIG9taXR0ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXgvaXNzdWVzLzkyN1xuXG5cbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAvLyBTYWZlIHRvIHdyaXRlIHRvIHRoZXNlIGRpcmVjdGx5IGhlcmUgc2luY2UgaWYgYWN0aW9uIHdhcyB1bmRlZmluZWQsIHdlXG4gICAgLy8gd291bGQgaGF2ZSBjYWxsZWQgdXNlUmVzb2x2ZWRQYXRoKFwiLlwiKSB3aGljaCB3aWxsIG5ldmVyIGluY2x1ZGUgYSBzZWFyY2hcbiAgICAvLyBvciBoYXNoXG4gICAgcGF0aC5zZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgcGF0aC5oYXNoID0gbG9jYXRpb24uaGFzaDsgLy8gV2hlbiBncmFiYmluZyBzZWFyY2ggcGFyYW1zIGZyb20gdGhlIFVSTCwgcmVtb3ZlIHRoZSBhdXRvbWF0aWNhbGx5XG4gICAgLy8gaW5zZXJ0ZWQgP2luZGV4IHBhcmFtIHNvIHdlIG1hdGNoIHRoZSB1c2VSZXNvbHZlZFBhdGggc2VhcmNoIGJlaGF2aW9yXG4gICAgLy8gd2hpY2ggd291bGQgbm90IGluY2x1ZGUgP2luZGV4XG5cbiAgICBpZiAobWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhdGguc2VhcmNoKTtcbiAgICAgIHBhcmFtcy5kZWxldGUoXCJpbmRleFwiKTtcbiAgICAgIHBhdGguc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCkgPyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpIDogXCJcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoKCFhY3Rpb24gfHwgYWN0aW9uID09PSBcIi5cIikgJiYgbWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICBwYXRoLnNlYXJjaCA9IHBhdGguc2VhcmNoID8gcGF0aC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sIFwiP2luZGV4JlwiKSA6IFwiP2luZGV4XCI7XG4gIH0gLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgZm9ybSBhY3Rpb24uICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlXG4gIC8vIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZVxuICAvLyBwcmVzZW5jZSBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgYWN0aW9uc1xuXG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBhdGgocGF0aCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZldGNoZXJGb3JtKGZldGNoZXJLZXksIHJvdXRlSWQpIHtcbiAgbGV0IEZldGNoZXJGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBmZXRjaGVyS2V5OiBmZXRjaGVyS2V5LFxuICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIEZldGNoZXJGb3JtLmRpc3BsYXlOYW1lID0gXCJmZXRjaGVyLkZvcm1cIjtcbiAgfVxuXG4gIHJldHVybiBGZXRjaGVyRm9ybTtcbn1cblxubGV0IGZldGNoZXJJZCA9IDA7XG4vKipcbiAqIEludGVyYWN0cyB3aXRoIHJvdXRlIGxvYWRlcnMgYW5kIGFjdGlvbnMgd2l0aG91dCBjYXVzaW5nIGEgbmF2aWdhdGlvbi4gR3JlYXRcbiAqIGZvciBhbnkgaW50ZXJhY3Rpb24gdGhhdCBzdGF5cyBvbiB0aGUgc2FtZSBwYWdlLlxuICovXG5cbmZ1bmN0aW9uIHVzZUZldGNoZXIoKSB7XG4gIHZhciBfcm91dGUkbWF0Y2hlcztcblxuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlRmV0Y2hlcik7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX1JvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCByb3V0ZUlkID0gKF9yb3V0ZSRtYXRjaGVzID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdKSA9PSBudWxsID8gdm9pZCAwIDogX3JvdXRlJG1hdGNoZXMucm91dGUuaWQ7XG4gICEocm91dGVJZCAhPSBudWxsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgW2ZldGNoZXJLZXldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gU3RyaW5nKCsrZmV0Y2hlcklkKSk7XG4gIGxldCBbRm9ybV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgIXJvdXRlSWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlSWQgYXZhaWxhYmxlIGZvciBmZXRjaGVyLkZvcm0oKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBjcmVhdGVGZXRjaGVyRm9ybShmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgfSk7XG4gIGxldCBbbG9hZF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBocmVmID0+IHtcbiAgICAhcm91dGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZXIgYXZhaWxhYmxlIGZvciBmZXRjaGVyLmxvYWQoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICFyb3V0ZUlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5sb2FkKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByb3V0ZXIuZmV0Y2goZmV0Y2hlcktleSwgcm91dGVJZCwgaHJlZik7XG4gIH0pO1xuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZldGNoZXIgPSByb3V0ZXIuZ2V0RmV0Y2hlcihmZXRjaGVyS2V5KTtcbiAgbGV0IGZldGNoZXJXaXRoQ29tcG9uZW50cyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gX2V4dGVuZHMoe1xuICAgIEZvcm0sXG4gICAgc3VibWl0LFxuICAgIGxvYWRcbiAgfSwgZmV0Y2hlciksIFtmZXRjaGVyLCBGb3JtLCBzdWJtaXQsIGxvYWRdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJcyB0aGlzIGJ1c3RlZCB3aGVuIHRoZSBSZWFjdCB0ZWFtIGdldHMgcmVhbCB3ZWlyZCBhbmQgY2FsbHMgZWZmZWN0c1xuICAgIC8vIHR3aWNlIG9uIG1vdW50PyAgV2UgcmVhbGx5IGp1c3QgbmVlZCB0byBnYXJiYWdlIGNvbGxlY3QgaGVyZSB3aGVuIHRoaXNcbiAgICAvLyBmZXRjaGVyIGlzIG5vIGxvbmdlciBhcm91bmQuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghcm91dGVyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk5vIGZldGNoZXIgYXZhaWxhYmxlIHRvIGNsZWFuIHVwIGZyb20gdXNlRmV0Y2hlcigpXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5kZWxldGVGZXRjaGVyKGZldGNoZXJLZXkpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIsIGZldGNoZXJLZXldKTtcbiAgcmV0dXJuIGZldGNoZXJXaXRoQ29tcG9uZW50cztcbn1cbi8qKlxuICogUHJvdmlkZXMgYWxsIGZldGNoZXJzIGN1cnJlbnRseSBvbiB0aGUgcGFnZS4gVXNlZnVsIGZvciBsYXlvdXRzIGFuZCBwYXJlbnRcbiAqIHJvdXRlcyB0aGF0IG5lZWQgdG8gcHJvdmlkZSBwZW5kaW5nL29wdGltaXN0aWMgVUkgcmVnYXJkaW5nIHRoZSBmZXRjaC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VGZXRjaGVycygpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlRmV0Y2hlcnMpO1xuICByZXR1cm4gWy4uLnN0YXRlLmZldGNoZXJzLnZhbHVlcygpXTtcbn1cbmNvbnN0IFNDUk9MTF9SRVNUT1JBVElPTl9TVE9SQUdFX0tFWSA9IFwicmVhY3Qtcm91dGVyLXNjcm9sbC1wb3NpdGlvbnNcIjtcbmxldCBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IHt9O1xuLyoqXG4gKiBXaGVuIHJlbmRlcmVkIGluc2lkZSBhIFJvdXRlclByb3ZpZGVyLCB3aWxsIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9ucyBvbiBuYXZpZ2F0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKF90ZW1wMykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQge1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVNjcm9sbFJlc3RvcmF0aW9uKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGxldCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpOyAvLyBUcmlnZ2VyIG1hbnVhbCBzY3JvbGwgcmVzdG9yYXRpb24gd2hpbGUgd2UncmUgYWN0aXZlXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBTYXZlIHBvc2l0aW9ucyBvbiBwYWdlaGlkZVxuXG4gIHVzZVBhZ2VIaWRlKFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIGxldCBrZXkgPSAoZ2V0S2V5ID8gZ2V0S2V5KGxvY2F0aW9uLCBtYXRjaGVzKSA6IG51bGwpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZFNjcm9sbFBvc2l0aW9ucykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gIH0sIFtzdG9yYWdlS2V5LCBnZXRLZXksIG5hdmlnYXRpb24uc3RhdGUsIGxvY2F0aW9uLCBtYXRjaGVzXSkpOyAvLyBSZWFkIGluIGFueSBzYXZlZCBzY3JvbGwgbG9jYXRpb25zXG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc2Vzc2lvblBvc2l0aW9ucyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVkpO1xuXG4gICAgICAgIGlmIChzZXNzaW9uUG9zaXRpb25zKSB7XG4gICAgICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBKU09OLnBhcnNlKHNlc3Npb25Qb3NpdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gbm8tb3AsIHVzZSBkZWZhdWx0IGVtcHR5IG9iamVjdFxuICAgICAgfVxuICAgIH0sIFtzdG9yYWdlS2V5XSk7IC8vIEVuYWJsZSBzY3JvbGwgcmVzdG9yYXRpb24gaW4gdGhlIHJvdXRlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gPSByb3V0ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlci5lbmFibGVTY3JvbGxSZXN0b3JhdGlvbihzYXZlZFNjcm9sbFBvc2l0aW9ucywgKCkgPT4gd2luZG93LnNjcm9sbFksIGdldEtleSk7XG4gICAgICByZXR1cm4gKCkgPT4gZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uICYmIGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbigpO1xuICAgIH0sIFtyb3V0ZXIsIGdldEtleV0pOyAvLyBSZXN0b3JlIHNjcm9sbGluZyB3aGVuIHN0YXRlLnJlc3RvcmVTY3JvbGxQb3NpdGlvbiBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gRXhwbGljaXQgZmFsc2UgbWVhbnMgZG9uJ3QgZG8gYW55dGhpbmcgKHVzZWQgZm9yIHN1Ym1pc3Npb25zKVxuICAgICAgaWYgKHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBiZWVuIGhlcmUgYmVmb3JlLCBzY3JvbGwgdG8gaXRcblxuXG4gICAgICBpZiAodHlwZW9mIHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyB0cnkgdG8gc2Nyb2xsIHRvIHRoZSBoYXNoXG5cblxuICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRG9uJ3QgcmVzZXQgaWYgdGhpcyBuYXZpZ2F0aW9uIG9wdGVkIG91dFxuXG5cbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgZ28gdG8gdGhlIHRvcCBvbiBuZXcgbG9jYXRpb25zXG5cblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0sIFtsb2NhdGlvbiwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXRdKTtcbiAgfVxufVxuLyoqXG4gKiBTZXR1cCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIG9uIHRoZSB3aW5kb3cncyBgYmVmb3JldW5sb2FkYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLlxuICpcbiAqIE5vdGU6IFRoZSBgY2FsbGJhY2tgIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uIGNyZWF0ZWQgd2l0aFxuICogYFJlYWN0LnVzZUNhbGxiYWNrKClgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJlZm9yZVVubG9hZChjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogU2V0dXAgYSBjYWxsYmFjayB0byBiZSBmaXJlZCBvbiB0aGUgd2luZG93J3MgYHBhZ2VoaWRlYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLiAgVGhpcyBldmVudCBpcyBiZXR0ZXIgc3VwcG9ydGVkIHRoYW4gYmVmb3JldW5sb2FkIGFjcm9zcyBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBUaGUgYGNhbGxiYWNrYCBhcmd1bWVudCBzaG91bGQgYmUgYSBmdW5jdGlvbiBjcmVhdGVkIHdpdGhcbiAqIGBSZWFjdC51c2VDYWxsYmFjaygpYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VQYWdlSGlkZShjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgfTtcbiAgfSwgW2NhbGxiYWNrLCBjYXB0dXJlXSk7XG59XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIHVzZUJsb2NrZXIgdG8gc2hvdyBhIHdpbmRvdy5jb25maXJtIHByb21wdCB0byB1c2VycyBpbnN0ZWFkXG4gKiBvZiBidWlsZGluZyBhIGN1c3RvbSBVSSB3aXRoIHVzZUJsb2NrZXIuXG4gKlxuICogV2FybmluZzogVGhpcyBoYXMgKmEgbG90IG9mIHJvdWdoIGVkZ2VzKiBhbmQgYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IChhbmRcbiAqIHZlcnkgaW5jb3JyZWN0bHkgaW4gc29tZSBjYXNlcykgYWNyb3NzIGJyb3dzZXJzIGlmIHVzZXIgY2xpY2sgYWRkaXRpb25cbiAqIGJhY2svZm9yd2FyZCBuYXZpZ2F0aW9ucyB3aGlsZSB0aGUgY29uZmlybSBpcyBvcGVuLiAgVXNlIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VQcm9tcHQoX3JlZjgpIHtcbiAgbGV0IHtcbiAgICB3aGVuLFxuICAgIG1lc3NhZ2VcbiAgfSA9IF9yZWY4O1xuICBsZXQgYmxvY2tlciA9IHVuc3RhYmxlX3VzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmICF3aGVuKSB7XG4gICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgfVxuICB9LCBbYmxvY2tlciwgd2hlbl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIikge1xuICAgICAgbGV0IHByb2NlZWQgPSB3aW5kb3cuY29uZmlybShtZXNzYWdlKTtcblxuICAgICAgaWYgKHByb2NlZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChibG9ja2VyLnByb2NlZWQsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIG1lc3NhZ2VdKTtcbn1cbiAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgRm9ybSwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZVNjcm9sbFJlc3RvcmF0aW9uIGFzIFVOU0FGRV91c2VTY3JvbGxSZXN0b3JhdGlvbiwgY3JlYXRlQnJvd3NlclJvdXRlciwgY3JlYXRlSGFzaFJvdXRlciwgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZVByb21wdCBhcyB1bnN0YWJsZV91c2VQcm9tcHQsIHVzZUJlZm9yZVVubG9hZCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjEwLjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IHsgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzLCBtYXRjaFBhdGgsIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgVU5TQUZFX3dhcm5pbmcsIHJlc29sdmVUbywgcGFyc2VQYXRoLCBtYXRjaFJvdXRlcywgQWN0aW9uLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgc3RyaXBCYXNlbmFtZSwgQWJvcnRlZERlZmVycmVkRXJyb3IsIGNyZWF0ZVJvdXRlciB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24gYXMgTmF2aWdhdGlvblR5cGUsIGNyZWF0ZVBhdGgsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZXNvbHZlUGF0aCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuXG5mdW5jdGlvbiBpc1BvbHlmaWxsKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG5jb25zdCBpcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5pcyA6IGlzUG9seWZpbGw7IC8vIEludGVudGlvbmFsbHkgbm90IHVzaW5nIG5hbWVkIGltcG9ydHMgYmVjYXVzZSBSb2xsdXAgdXNlcyBkeW5hbWljXG4vLyBkaXNwYXRjaCBmb3IgQ29tbW9uSlMgaW50ZXJvcCBuYW1lZCBpbXBvcnRzLlxuXG5jb25zdCB7XG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdCxcbiAgdXNlRGVidWdWYWx1ZVxufSA9IFJlYWN0O1xubGV0IGRpZFdhcm5PbGQxOEFscGhhID0gZmFsc2U7XG5sZXQgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSBmYWxzZTsgLy8gRGlzY2xhaW1lcjogVGhpcyBzaGltIGJyZWFrcyBtYW55IG9mIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3Ncbi8vIGJlY2F1c2Ugb2YgYSB2ZXJ5IHBhcnRpY3VsYXIgc2V0IG9mIGltcGxlbWVudGF0aW9uIGRldGFpbHMgYW5kIGFzc3VtcHRpb25zXG4vLyAtLSBjaGFuZ2UgYW55IG9uZSBvZiB0aGVtIGFuZCBpdCB3aWxsIGJyZWFrLiBUaGUgbW9zdCBpbXBvcnRhbnQgYXNzdW1wdGlvblxuLy8gaXMgdGhhdCB1cGRhdGVzIGFyZSBhbHdheXMgc3luY2hyb25vdXMsIGJlY2F1c2UgY29uY3VycmVudCByZW5kZXJpbmcgaXNcbi8vIG9ubHkgYXZhaWxhYmxlIGluIHZlcnNpb25zIG9mIFJlYWN0IHRoYXQgYWxzbyBoYXZlIGEgYnVpbHQtaW5cbi8vIHVzZVN5bmNFeHRlcm5hbFN0b3JlIEFQSS4gQW5kIHdlIG9ubHkgdXNlIHRoaXMgc2hpbSB3aGVuIHRoZSBidWlsdC1pbiBBUElcbi8vIGRvZXMgbm90IGV4aXN0LlxuLy9cbi8vIERvIG5vdCBhc3N1bWUgdGhhdCB0aGUgY2xldmVyIGhhY2tzIHVzZWQgYnkgdGhpcyBob29rIGFsc28gd29yayBpbiBnZW5lcmFsLlxuLy8gVGhlIHBvaW50IG9mIHRoaXMgc2hpbSBpcyB0byByZXBsYWNlIHRoZSBuZWVkIGZvciBoYWNrcyBieSBvdGhlciBsaWJyYXJpZXMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDIoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuLy8gUmVhY3QgZG8gbm90IGV4cG9zZSBhIHdheSB0byBjaGVjayBpZiB3ZSdyZSBoeWRyYXRpbmcuIFNvIHVzZXJzIG9mIHRoZSBzaGltXG4vLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbi8vIGZyb20gYGdldFNuYXBzaG90YC5cbmdldFNlcnZlclNuYXBzaG90KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWRpZFdhcm5PbGQxOEFscGhhKSB7XG4gICAgICBpZiAoXCJzdGFydFRyYW5zaXRpb25cIiBpbiBSZWFjdCkge1xuICAgICAgICBkaWRXYXJuT2xkMThBbHBoYSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgYXJlIHVzaW5nIGFuIG91dGRhdGVkLCBwcmUtcmVsZWFzZSBhbHBoYSBvZiBSZWFjdCAxOCB0aGF0IFwiICsgXCJkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgXCIgKyBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgXCIgKyBcInRvIGEgbmV3ZXIgcHJlLXJlbGVhc2UuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZWFkIHRoZSBjdXJyZW50IHNuYXBzaG90IGZyb20gdGhlIHN0b3JlIG9uIGV2ZXJ5IHJlbmRlci4gQWdhaW4sIHRoaXNcbiAgLy8gYnJlYWtzIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIG9mIHNwZWNpZmljXG4gIC8vIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIG1vc3QgaW1wb3J0YW50bHkgdGhhdCB1cGRhdGVzIGFyZVxuICAvLyBhbHdheXMgc3luY2hyb25vdXMuXG5cblxuICBjb25zdCB2YWx1ZSA9IGdldFNuYXBzaG90KCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QpIHtcbiAgICAgIGNvbnN0IGNhY2hlZFZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICAgICAgaWYgKCFpcyh2YWx1ZSwgY2FjaGVkVmFsdWUpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcFwiKTtcbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBCZWNhdXNlIHVwZGF0ZXMgYXJlIHN5bmNocm9ub3VzLCB3ZSBkb24ndCBxdWV1ZSB0aGVtLiBJbnN0ZWFkIHdlIGZvcmNlIGFcbiAgLy8gcmUtcmVuZGVyIHdoZW5ldmVyIHRoZSBzdWJzY3JpYmVkIHN0YXRlIGNoYW5nZXMgYnkgdXBkYXRpbmcgYW4gc29tZVxuICAvLyBhcmJpdHJhcnkgdXNlU3RhdGUgaG9vay4gVGhlbiwgZHVyaW5nIHJlbmRlciwgd2UgY2FsbCBnZXRTbmFwc2hvdCB0byByZWFkXG4gIC8vIHRoZSBjdXJyZW50IHZhbHVlLlxuICAvL1xuICAvLyBCZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IHVzZSB0aGUgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHVzZVN0YXRlIGhvb2ssIHdlXG4gIC8vIGNhbiBzYXZlIGEgYml0IG9mIG1lbW9yeSBieSBzdG9yaW5nIG90aGVyIHN0dWZmIGluIHRoYXQgc2xvdC5cbiAgLy9cbiAgLy8gVG8gaW1wbGVtZW50IHRoZSBlYXJseSBiYWlsb3V0LCB3ZSBuZWVkIHRvIHRyYWNrIHNvbWUgdGhpbmdzIG9uIGEgbXV0YWJsZVxuICAvLyBvYmplY3QuIFVzdWFsbHksIHdlIHdvdWxkIHB1dCB0aGF0IGluIGEgdXNlUmVmIGhvb2ssIGJ1dCB3ZSBjYW4gc3Rhc2ggaXQgaW5cbiAgLy8gb3VyIHVzZVN0YXRlIGhvb2sgaW5zdGVhZC5cbiAgLy9cbiAgLy8gVG8gZm9yY2UgYSByZS1yZW5kZXIsIHdlIGNhbGwgZm9yY2VVcGRhdGUoe2luc3R9KS4gVGhhdCB3b3JrcyBiZWNhdXNlIHRoZVxuICAvLyBuZXcgb2JqZWN0IGFsd2F5cyBmYWlscyBhbiBlcXVhbGl0eSBjaGVjay5cblxuXG4gIGNvbnN0IFt7XG4gICAgaW5zdFxuICB9LCBmb3JjZVVwZGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5zdDoge1xuICAgICAgdmFsdWUsXG4gICAgICBnZXRTbmFwc2hvdFxuICAgIH1cbiAgfSk7IC8vIFRyYWNrIHRoZSBsYXRlc3QgZ2V0U25hcHNob3QgZnVuY3Rpb24gd2l0aCBhIHJlZi4gVGhpcyBuZWVkcyB0byBiZSB1cGRhdGVkXG4gIC8vIGluIHRoZSBsYXlvdXQgcGhhc2Ugc28gd2UgY2FuIGFjY2VzcyBpdCBkdXJpbmcgdGhlIHRlYXJpbmcgY2hlY2sgdGhhdFxuICAvLyBoYXBwZW5zIG9uIHN1YnNjcmliZS5cblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7IC8vIFdoZW5ldmVyIGdldFNuYXBzaG90IG9yIHN1YnNjcmliZSBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGNoZWNrIGluIHRoZVxuICAgIC8vIGNvbW1pdCBwaGFzZSBpZiB0aGVyZSB3YXMgYW4gaW50ZXJsZWF2ZWQgbXV0YXRpb24uIEluIGNvbmN1cnJlbnQgbW9kZVxuICAgIC8vIHRoaXMgY2FuIGhhcHBlbiBhbGwgdGhlIHRpbWUsIGJ1dCBldmVuIGluIHN5bmNocm9ub3VzIG1vZGUsIGFuIGVhcmxpZXJcbiAgICAvLyBlZmZlY3QgbWF5IGhhdmUgbXV0YXRlZCB0aGUgc3RvcmUuXG5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3RcbiAgICAgIH0pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIHJpZ2h0IGJlZm9yZSBzdWJzY3JpYmluZy4gU3Vic2VxdWVudCBjaGFuZ2VzIHdpbGwgYmVcbiAgICAvLyBkZXRlY3RlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9yZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIC8vIFRPRE86IEJlY2F1c2UgdGhlcmUgaXMgbm8gY3Jvc3MtcmVuZGVyZXIgQVBJIGZvciBiYXRjaGluZyB1cGRhdGVzLCBpdCdzXG4gICAgICAvLyB1cCB0byB0aGUgY29uc3VtZXIgb2YgdGhpcyBsaWJyYXJ5IHRvIHdyYXAgdGhlaXIgc3Vic2NyaXB0aW9uIGV2ZW50XG4gICAgICAvLyB3aXRoIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLiBTaG91bGQgd2UgdHJ5IHRvIGRldGVjdCB3aGVuIHRoaXMgaXNuJ3RcbiAgICAgIC8vIHRoZSBjYXNlIGFuZCBwcmludCBhIHdhcm5pbmcgaW4gZGV2ZWxvcG1lbnQ/XG4gICAgICAvLyBUaGUgc3RvcmUgY2hhbmdlZC4gQ2hlY2sgaWYgdGhlIHNuYXBzaG90IGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB3ZVxuICAgICAgLy8gcmVhZCBmcm9tIHRoZSBzdG9yZS5cbiAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgICAgaW5zdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBTdWJzY3JpYmUgdG8gdGhlIHN0b3JlIGFuZCByZXR1cm4gYSBjbGVhbi11cCBmdW5jdGlvbi5cblxuXG4gICAgcmV0dXJuIHN1YnNjcmliZShoYW5kbGVTdG9yZUNoYW5nZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3N1YnNjcmliZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpIHtcbiAgY29uc3QgbGF0ZXN0R2V0U25hcHNob3QgPSBpbnN0LmdldFNuYXBzaG90O1xuICBjb25zdCBwcmV2VmFsdWUgPSBpbnN0LnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gbGF0ZXN0R2V0U25hcHNob3QoKTtcbiAgICByZXR1cm4gIWlzKHByZXZWYWx1ZSwgbmV4dFZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuICAvLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbiAgLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4gIC8vIGZyb20gYGdldFNuYXBzaG90YC5cbiAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG59XG5cbi8qKlxuICogSW5saW5lZCBpbnRvIHRoZSByZWFjdC1yb3V0ZXIgcmVwbyBzaW5jZSB1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBkb2VzIG5vdFxuICogcHJvdmlkZSBhIFVNRC1jb21wYXRpYmxlIHBhY2thZ2UsIHNvIHdlIG5lZWQgdGhpcyB0byBiZSBhYmxlIHRvIGRpc3RyaWJ1dGVcbiAqIFVNRCByZWFjdC1yb3V0ZXIgYnVuZGxlc1xuICovXG5jb25zdCBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbmNvbnN0IGlzU2VydmVyRW52aXJvbm1lbnQgPSAhY2FuVXNlRE9NO1xuY29uc3Qgc2hpbSA9IGlzU2VydmVyRW52aXJvbm1lbnQgPyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxIDogdXNlU3luY0V4dGVybmFsU3RvcmUkMjtcbmNvbnN0IHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gXCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVwiIGluIFJlYWN0ID8gKG1vZHVsZSA9PiBtb2R1bGUudXNlU3luY0V4dGVybmFsU3RvcmUpKFJlYWN0KSA6IHNoaW07XG5cbmNvbnN0IERhdGFSb3V0ZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlckNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJcIjtcbn1cblxuY29uc3QgRGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJTdGF0ZVwiO1xufVxuXG5jb25zdCBBd2FpdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBBd2FpdENvbnRleHQuZGlzcGxheU5hbWUgPSBcIkF3YWl0XCI7XG59XG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2aWdhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk5hdmlnYXRpb25cIjtcbn1cblxuY29uc3QgTG9jYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xufVxuXG5jb25zdCBSb3V0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIG91dGxldDogbnVsbCxcbiAgbWF0Y2hlczogW11cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVcIjtcbn1cblxuY29uc3QgUm91dGVFcnJvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUVycm9yQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVFcnJvclwiO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVsbCBocmVmIGZvciB0aGUgZ2l2ZW4gXCJ0b1wiIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYnVpbGRpbmdcbiAqIGN1c3RvbSBsaW5rcyB0aGF0IGFyZSBhbHNvIGFjY2Vzc2libGUgYW5kIHByZXNlcnZlIHJpZ2h0LWNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWhyZWZcbiAqL1xuXG5mdW5jdGlvbiB1c2VIcmVmKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VIcmVmKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIGhhc2gsXG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoXG4gIH0gPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWU7IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgLy8gdG8gY3JlYXRpbmcgdGhlIGhyZWYuICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlIHRoZSByYXdcbiAgLy8gYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZSBwcmVzZW5jZVxuICAvLyBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgbGlua3NcblxuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdG9yLmNyZWF0ZUhyZWYoe1xuICAgIHBhdGhuYW1lOiBqb2luZWRQYXRobmFtZSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaFxuICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBhIDxSb3V0ZXI+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWluLXJvdXRlci1jb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlSW5Sb3V0ZXJDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbG9jYXRpb24gb2JqZWN0LCB3aGljaCByZXByZXNlbnRzIHRoZSBjdXJyZW50IFVSTCBpbiB3ZWJcbiAqIGJyb3dzZXJzLlxuICpcbiAqIE5vdGU6IElmIHlvdSdyZSB1c2luZyB0aGlzIGl0IG1heSBtZWFuIHlvdSdyZSBkb2luZyBzb21lIG9mIHlvdXIgb3duXG4gKiBcInJvdXRpbmdcIiBpbiB5b3VyIGFwcCwgYW5kIHdlJ2QgbGlrZSB0byBrbm93IHdoYXQgeW91ciB1c2UgY2FzZSBpcy4gV2UgbWF5XG4gKiBiZSBhYmxlIHRvIHByb3ZpZGUgc29tZXRoaW5nIGhpZ2hlci1sZXZlbCB0byBiZXR0ZXIgc3VpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWxvY2F0aW9uXG4gKi9cblxuZnVuY3Rpb24gdXNlTG9jYXRpb24oKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gYWN0aW9uIHdoaWNoIGRlc2NyaWJlcyBob3cgdGhlIHJvdXRlciBjYW1lIHRvXG4gKiB0aGUgY3VycmVudCBsb2NhdGlvbiwgZWl0aGVyIGJ5IGEgcG9wLCBwdXNoLCBvciByZXBsYWNlIG9uIHRoZSBoaXN0b3J5IHN0YWNrLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW5hdmlnYXRpb24tdHlwZVxuICovXG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgUGF0aE1hdGNoIG9iamVjdCBpZiB0aGUgZ2l2ZW4gcGF0dGVybiBtYXRjaGVzIHRoZSBjdXJyZW50IFVSTC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IFwiYWN0aXZlXCIgc3RhdGUsIGUuZy5cbiAqIDxOYXZMaW5rPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1tYXRjaFxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoKHBhdHRlcm4pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VNYXRjaCgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgcGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgbmF2aWdhdGUoKSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHVzZU5hdmlnYXRlKCkuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgPExpbms+cywgYnV0XG4gKiBtYXkgYWxzbyBiZSB1c2VkIGJ5IG90aGVyIGVsZW1lbnRzIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTmF2aWdhdGUoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgbGV0IGFjdGl2ZVJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIikgOiB2b2lkIDA7XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbmF2aWdhdG9yLmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lLCBvcHRpb25zLnJlbGF0aXZlID09PSBcInBhdGhcIik7IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgICAvLyB0byBoYW5kaW5nIG9mZiB0byBoaXN0b3J5LiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiB3ZVxuICAgIC8vIG5hdmlnYXRlIHRvIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGxcbiAgICAvLyBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuXG4gICAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgICAgcGF0aC5wYXRobmFtZSA9IHBhdGgucGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgfVxuXG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSwgb3B0aW9ucyk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWVdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0LWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXRDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChPdXRsZXRDb250ZXh0KTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuIFVzZWQgaW50ZXJuYWxseSBieSA8T3V0bGV0PiB0byByZW5kZXIgY2hpbGQgcm91dGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW91dGxldFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuXG4gIGlmIChvdXRsZXQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGV0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBvdXRsZXQpO1xuICB9XG5cbiAgcmV0dXJuIG91dGxldDtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIG9mIHRoZSBkeW5hbWljIHBhcmFtcyBmcm9tIHRoZSBjdXJyZW50XG4gKiBVUkwgdGhhdCB3ZXJlIG1hdGNoZWQgYnkgdGhlIHJvdXRlIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcGFyYW1zXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhdGhuYW1lIG9mIHRoZSBnaXZlbiBgdG9gIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcmVzb2x2ZWQtcGF0aFxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bywgX3RlbXAyKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlID09PSBcInBhdGhcIiksIFt0bywgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lLCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9mIHRoZSByb3V0ZSB0aGF0IG1hdGNoZWQgdGhlIGN1cnJlbnQgbG9jYXRpb24sIHByZXBhcmVkXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHQgdG8gcmVuZGVyIHRoZSByZW1haW5kZXIgb2YgdGhlIHJvdXRlIHRyZWUuIFJvdXRlXG4gKiBlbGVtZW50cyBpbiB0aGUgdHJlZSBtdXN0IHJlbmRlciBhbiA8T3V0bGV0PiB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbkFyZykge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IGRhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBwYXJlbnRNYXRjaGVzW3BhcmVudE1hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGxldCBwYXJlbnRQYXJhbXMgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbiAgbGV0IHBhcmVudFBhdGhuYW1lID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWUgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFBhdGhuYW1lQmFzZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lQmFzZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50Um91dGUgPSByb3V0ZU1hdGNoICYmIHJvdXRlTWF0Y2gucm91dGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIFlvdSB3b24ndCBnZXQgYSB3YXJuaW5nIGFib3V0IDIgZGlmZmVyZW50IDxSb3V0ZXM+IHVuZGVyIGEgPFJvdXRlPlxuICAgIC8vIHdpdGhvdXQgYSB0cmFpbGluZyAqLCBidXQgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IHdhcm5pbmcgYW55d2F5IHNpbmNlIHdlXG4gICAgLy8gY2Fubm90IGV2ZW4gZ2l2ZSB0aGUgd2FybmluZyB1bmxlc3MgdGhleSBsYW5kIGF0IHRoZSBwYXJlbnQgcm91dGUuXG4gICAgLy9cbiAgICAvLyBFeGFtcGxlOlxuICAgIC8vXG4gICAgLy8gPFJvdXRlcz5cbiAgICAvLyAgIHsvKiBUaGlzIHJvdXRlIHBhdGggTVVTVCBlbmQgd2l0aCAvKiBiZWNhdXNlIG90aGVyd2lzZVxuICAgIC8vICAgICAgIGl0IHdpbGwgbmV2ZXIgbWF0Y2ggL2Jsb2cvcG9zdC8xMjMgKi99XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2dcIiBlbGVtZW50PXs8QmxvZyAvPn0gLz5cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZy9mZWVkXCIgZWxlbWVudD17PEJsb2dGZWVkIC8+fSAvPlxuICAgIC8vIDwvUm91dGVzPlxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gQmxvZygpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxSb3V0ZXM+XG4gICAgLy8gICAgICAgPFJvdXRlIHBhdGg9XCJwb3N0LzppZFwiIGVsZW1lbnQ9ezxQb3N0IC8+fSAvPlxuICAgIC8vICAgICA8L1JvdXRlcz5cbiAgICAvLyAgICk7XG4gICAgLy8gfVxuICAgIGxldCBwYXJlbnRQYXRoID0gcGFyZW50Um91dGUgJiYgcGFyZW50Um91dGUucGF0aCB8fCBcIlwiO1xuICAgIHdhcm5pbmdPbmNlKHBhcmVudFBhdGhuYW1lLCAhcGFyZW50Um91dGUgfHwgcGFyZW50UGF0aC5lbmRzV2l0aChcIipcIiksIFwiWW91IHJlbmRlcmVkIGRlc2NlbmRhbnQgPFJvdXRlcz4gKG9yIGNhbGxlZCBgdXNlUm91dGVzKClgKSBhdCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGhuYW1lICsgXCJcXFwiICh1bmRlciA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPikgYnV0IHRoZSBcIikgKyBcInBhcmVudCByb3V0ZSBwYXRoIGhhcyBubyB0cmFpbGluZyBcXFwiKlxcXCIuIFRoaXMgbWVhbnMgaWYgeW91IG5hdmlnYXRlIFwiICsgXCJkZWVwZXIsIHRoZSBwYXJlbnQgd29uJ3QgbWF0Y2ggYW55bW9yZSBhbmQgdGhlcmVmb3JlIHRoZSBjaGlsZCBcIiArIFwicm91dGVzIHdpbGwgbmV2ZXIgcmVuZGVyLlxcblxcblwiICsgKFwiUGxlYXNlIGNoYW5nZSB0aGUgcGFyZW50IDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+IHRvIDxSb3V0ZSBcIikgKyAoXCJwYXRoPVxcXCJcIiArIChwYXJlbnRQYXRoID09PSBcIi9cIiA/IFwiKlwiIDogcGFyZW50UGF0aCArIFwiLypcIikgKyBcIlxcXCI+LlwiKSk7XG4gIH1cblxuICBsZXQgbG9jYXRpb25Gcm9tQ29udGV4dCA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBsb2NhdGlvbjtcblxuICBpZiAobG9jYXRpb25BcmcpIHtcbiAgICB2YXIgX3BhcnNlZExvY2F0aW9uQXJnJHBhO1xuXG4gICAgbGV0IHBhcnNlZExvY2F0aW9uQXJnID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICAgICEocGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiB8fCAoKF9wYXJzZWRMb2NhdGlvbkFyZyRwYSA9IHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lKSA9PSBudWxsID8gdm9pZCAwIDogX3BhcnNlZExvY2F0aW9uQXJnJHBhLnN0YXJ0c1dpdGgocGFyZW50UGF0aG5hbWVCYXNlKSkpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJXaGVuIG92ZXJyaWRpbmcgdGhlIGxvY2F0aW9uIHVzaW5nIGA8Um91dGVzIGxvY2F0aW9uPmAgb3IgYHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKWAsIFwiICsgXCJ0aGUgbG9jYXRpb24gcGF0aG5hbWUgbXVzdCBiZWdpbiB3aXRoIHRoZSBwb3J0aW9uIG9mIHRoZSBVUkwgcGF0aG5hbWUgdGhhdCB3YXMgXCIgKyAoXCJtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFxcXCJcIiArIHBhcmVudFBhdGhuYW1lQmFzZSArIFwiXFxcIiBcIikgKyAoXCJidXQgcGF0aG5hbWUgXFxcIlwiICsgcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUgKyBcIlxcXCIgd2FzIGdpdmVuIGluIHRoZSBgbG9jYXRpb25gIHByb3AuXCIpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxvY2F0aW9uID0gcGFyc2VkTG9jYXRpb25Bcmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbkZyb21Db250ZXh0O1xuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKHBhcmVudFBhdGhuYW1lQmFzZS5sZW5ndGgpIHx8IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcocGFyZW50Um91dGUgfHwgbWF0Y2hlcyAhPSBudWxsLCBcIk5vIHJvdXRlcyBtYXRjaGVkIGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBcIikgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLkNvbXBvbmVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIgKyBcImRvZXMgbm90IGhhdmUgYW4gZWxlbWVudCBvciBDb21wb25lbnQuIFRoaXMgbWVhbnMgaXQgd2lsbCByZW5kZXIgYW4gPE91dGxldCAvPiB3aXRoIGEgXCIgKyBcIm51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzICYmIG1hdGNoZXMubWFwKG1hdGNoID0+IE9iamVjdC5hc3NpZ24oe30sIG1hdGNoLCB7XG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMsIG1hdGNoLnBhcmFtcyksXG4gICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZUJhc2UpLnBhdGhuYW1lIDogbWF0Y2gucGF0aG5hbWVCYXNlXSlcbiAgfSkpLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGVDb250ZXh0IHx8IHVuZGVmaW5lZCk7IC8vIFdoZW4gYSB1c2VyIHBhc3NlcyBpbiBhIGBsb2NhdGlvbkFyZ2AsIHRoZSBhc3NvY2lhdGVkIHJvdXRlcyBuZWVkIHRvXG4gIC8vIGJlIHdyYXBwZWQgaW4gYSBuZXcgYExvY2F0aW9uQ29udGV4dC5Qcm92aWRlcmAgaW4gb3JkZXIgZm9yIGB1c2VMb2NhdGlvbmBcbiAgLy8gdG8gdXNlIHRoZSBzY29wZWQgbG9jYXRpb24gaW5zdGVhZCBvZiB0aGUgZ2xvYmFsIGxvY2F0aW9uLlxuXG5cbiAgaWYgKGxvY2F0aW9uQXJnICYmIHJlbmRlcmVkTWF0Y2hlcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGxvY2F0aW9uOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgICAgIGtleTogXCJkZWZhdWx0XCJcbiAgICAgICAgfSwgbG9jYXRpb24pLFxuICAgICAgICBuYXZpZ2F0aW9uVHlwZTogQWN0aW9uLlBvcFxuICAgICAgfVxuICAgIH0sIHJlbmRlcmVkTWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0RXJyb3JDb21wb25lbnQoKSB7XG4gIGxldCBlcnJvciA9IHVzZVJvdXRlRXJyb3IoKTtcbiAgbGV0IG1lc3NhZ2UgPSBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikgPyBlcnJvci5zdGF0dXMgKyBcIiBcIiArIGVycm9yLnN0YXR1c1RleHQgOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgbGV0IHN0YWNrID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnN0YWNrIDogbnVsbDtcbiAgbGV0IGxpZ2h0Z3JleSA9IFwicmdiYSgyMDAsMjAwLDIwMCwgMC41KVwiO1xuICBsZXQgcHJlU3R5bGVzID0ge1xuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGdyZXlcbiAgfTtcbiAgbGV0IGNvZGVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIycHggNHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGdyZXlcbiAgfTtcbiAgbGV0IGRldkluZm8gPSBudWxsO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBkZXZJbmZvID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlxcdUQ4M0RcXHVEQ0JGIEhleSBkZXZlbG9wZXIgXFx1RDgzRFxcdURDNEJcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIllvdSBjYW4gcHJvdmlkZSBhIHdheSBiZXR0ZXIgVVggdGhhbiB0aGlzIHdoZW4geW91ciBhcHAgdGhyb3dzIGVycm9ycyBieSBwcm92aWRpbmcgeW91ciBvd25cXHhBMFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgc3R5bGU6IGNvZGVTdHlsZXNcbiAgICB9LCBcIkVycm9yQm91bmRhcnlcIiksIFwiIHByb3Agb25cXHhBMFwiLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgc3R5bGU6IGNvZGVTdHlsZXNcbiAgICB9LCBcIjxSb3V0ZT5cIikpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlVuZXhwZWN0ZWQgQXBwbGljYXRpb24gRXJyb3IhXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgfVxuICB9LCBtZXNzYWdlKSwgc3RhY2sgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCB7XG4gICAgc3R5bGU6IHByZVN0eWxlc1xuICB9LCBzdGFjaykgOiBudWxsLCBkZXZJbmZvKTtcbn1cblxuY2xhc3MgUmVuZGVyRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24sXG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAvLyBXaGVuIHdlIGdldCBpbnRvIGFuIGVycm9yIHN0YXRlLCB0aGUgdXNlciB3aWxsIGxpa2VseSBjbGljayBcImJhY2tcIiB0byB0aGVcbiAgICAvLyBwcmV2aW91cyBwYWdlIHRoYXQgZGlkbid0IGhhdmUgYW4gZXJyb3IuIEJlY2F1c2UgdGhpcyB3cmFwcyB0aGUgZW50aXJlXG4gICAgLy8gYXBwbGljYXRpb24sIHRoYXQgd2lsbCBoYXZlIG5vIGVmZmVjdC0tdGhlIGVycm9yIHBhZ2UgY29udGludWVzIHRvIGRpc3BsYXkuXG4gICAgLy8gVGhpcyBnaXZlcyB1cyBhIG1lY2hhbmlzbSB0byByZWNvdmVyIGZyb20gdGhlIGVycm9yIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAgLy9cbiAgICAvLyBXaGV0aGVyIHdlJ3JlIGluIGFuIGVycm9yIHN0YXRlIG9yIG5vdCwgd2UgdXBkYXRlIHRoZSBsb2NhdGlvbiBpbiBzdGF0ZVxuICAgIC8vIHNvIHRoYXQgd2hlbiB3ZSBhcmUgaW4gYW4gZXJyb3Igc3RhdGUsIGl0IGdldHMgcmVzZXQgd2hlbiBhIG5ldyBsb2NhdGlvblxuICAgIC8vIGNvbWVzIGluIGFuZCB0aGUgdXNlciByZWNvdmVycyBmcm9tIHRoZSBlcnJvci5cbiAgICBpZiAoc3RhdGUubG9jYXRpb24gIT09IHByb3BzLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogcHJvcHMuZXJyb3IsXG4gICAgICAgIGxvY2F0aW9uOiBwcm9wcy5sb2NhdGlvblxuICAgICAgfTtcbiAgICB9IC8vIElmIHdlJ3JlIG5vdCBjaGFuZ2luZyBsb2NhdGlvbnMsIHByZXNlcnZlIHRoZSBsb2NhdGlvbiBidXQgc3RpbGwgc3VyZmFjZVxuICAgIC8vIGFueSBuZXcgZXJyb3JzIHRoYXQgbWF5IGNvbWUgdGhyb3VnaC4gV2UgcmV0YWluIHRoZSBleGlzdGluZyBlcnJvciwgd2UgZG9cbiAgICAvLyB0aGlzIGJlY2F1c2UgdGhlIGVycm9yIHByb3ZpZGVkIGZyb20gdGhlIGFwcCBzdGF0ZSBtYXkgYmUgY2xlYXJlZCB3aXRob3V0XG4gICAgLy8gdGhlIGxvY2F0aW9uIGNoYW5naW5nLlxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHByb3BzLmVycm9yIHx8IHN0YXRlLmVycm9yLFxuICAgICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVhY3QgUm91dGVyIGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZXJyb3IgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnJvdXRlQ29udGV4dFxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlRXJyb3JDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5lcnJvcixcbiAgICAgIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNvbXBvbmVudFxuICAgIH0pKSA6IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cblxufVxuXG5mdW5jdGlvbiBSZW5kZXJlZFJvdXRlKF9yZWYpIHtcbiAgbGV0IHtcbiAgICByb3V0ZUNvbnRleHQsXG4gICAgbWF0Y2gsXG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpOyAvLyBUcmFjayBob3cgZGVlcCB3ZSBnb3QgaW4gb3VyIHJlbmRlciBwYXNzIHRvIGVtdWxhdGUgU1NSIGNvbXBvbmVudERpZENhdGNoXG4gIC8vIGluIGEgRGF0YVN0YXRpY1JvdXRlclxuXG4gIGlmIChkYXRhUm91dGVyQ29udGV4dCAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWMgJiYgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljQ29udGV4dCAmJiAobWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnkpKSB7XG4gICAgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljQ29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCA9IG1hdGNoLnJvdXRlLmlkO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByb3V0ZUNvbnRleHRcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGUpIHtcbiAgaWYgKHBhcmVudE1hdGNoZXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlICE9IG51bGwgJiYgZGF0YVJvdXRlclN0YXRlLmVycm9ycykge1xuICAgICAgLy8gRG9uJ3QgYmFpbCBpZiB3ZSBoYXZlIGRhdGEgcm91dGVyIGVycm9ycyBzbyB3ZSBjYW4gcmVuZGVyIHRoZW0gaW4gdGhlXG4gICAgICAvLyBib3VuZGFyeS4gIFVzZSB0aGUgcHJlLW1hdGNoZWQgKG9yIHNoaW1tZWQpIG1hdGNoZXNcbiAgICAgIG1hdGNoZXMgPSBkYXRhUm91dGVyU3RhdGUubWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlbmRlcmVkTWF0Y2hlcyA9IG1hdGNoZXM7IC8vIElmIHdlIGhhdmUgZGF0YSBlcnJvcnMsIHRyaW0gbWF0Y2hlcyB0byB0aGUgaGlnaGVzdCBlcnJvciBib3VuZGFyeVxuXG4gIGxldCBlcnJvcnMgPSBkYXRhUm91dGVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IGRhdGFSb3V0ZXJTdGF0ZS5lcnJvcnM7XG5cbiAgaWYgKGVycm9ycyAhPSBudWxsKSB7XG4gICAgbGV0IGVycm9ySW5kZXggPSByZW5kZXJlZE1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCAmJiAoZXJyb3JzID09IG51bGwgPyB2b2lkIDAgOiBlcnJvcnNbbS5yb3V0ZS5pZF0pKTtcbiAgICAhKGVycm9ySW5kZXggPj0gMCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkNvdWxkIG5vdCBmaW5kIGEgbWF0Y2hpbmcgcm91dGUgZm9yIHRoZSBjdXJyZW50IGVycm9yczogXCIgKyBlcnJvcnMpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmVuZGVyZWRNYXRjaGVzID0gcmVuZGVyZWRNYXRjaGVzLnNsaWNlKDAsIE1hdGgubWluKHJlbmRlcmVkTWF0Y2hlcy5sZW5ndGgsIGVycm9ySW5kZXggKyAxKSk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzLnJlZHVjZVJpZ2h0KChvdXRsZXQsIG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGxldCBlcnJvciA9IG1hdGNoLnJvdXRlLmlkID8gZXJyb3JzID09IG51bGwgPyB2b2lkIDAgOiBlcnJvcnNbbWF0Y2gucm91dGUuaWRdIDogbnVsbDsgLy8gT25seSBkYXRhIHJvdXRlcnMgaGFuZGxlIGVycm9yc1xuXG4gICAgbGV0IGVycm9yRWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlKSB7XG4gICAgICBpZiAobWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkge1xuICAgICAgICBlcnJvckVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5LCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICAgIGVycm9yRWxlbWVudCA9IG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRFcnJvckNvbXBvbmVudCwgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBwYXJlbnRNYXRjaGVzLmNvbmNhdChyZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgaW5kZXggKyAxKSk7XG5cbiAgICBsZXQgZ2V0Q2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSBvdXRsZXQ7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjaGlsZHJlbiA9IGVycm9yRWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuQ29tcG9uZW50KSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQobWF0Y2gucm91dGUuQ29tcG9uZW50LCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZWxlbWVudCkge1xuICAgICAgICBjaGlsZHJlbiA9IG1hdGNoLnJvdXRlLmVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJlZFJvdXRlLCB7XG4gICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgICAgb3V0bGV0LFxuICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9OyAvLyBPbmx5IHdyYXAgaW4gYW4gZXJyb3IgYm91bmRhcnkgd2l0aGluIGRhdGEgcm91dGVyIHVzYWdlcyB3aGVuIHdlIGhhdmUgYW5cbiAgICAvLyBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudCBvbiB0aGlzIHJvdXRlLiAgT3RoZXJ3aXNlIGxldCBpdCBidWJibGUgdXAgdG9cbiAgICAvLyBhbiBhbmNlc3RvciBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudFxuXG5cbiAgICByZXR1cm4gZGF0YVJvdXRlclN0YXRlICYmIChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5IHx8IG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCB8fCBpbmRleCA9PT0gMCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJFcnJvckJvdW5kYXJ5LCB7XG4gICAgICBsb2NhdGlvbjogZGF0YVJvdXRlclN0YXRlLmxvY2F0aW9uLFxuICAgICAgY29tcG9uZW50OiBlcnJvckVsZW1lbnQsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICBvdXRsZXQ6IG51bGwsXG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH1cbiAgICB9KSA6IGdldENoaWxkcmVuKCk7XG4gIH0sIG51bGwpO1xufVxudmFyIERhdGFSb3V0ZXJIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJIb29rKSB7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlQmxvY2tlclwiXSA9IFwidXNlQmxvY2tlclwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xufSkoRGF0YVJvdXRlckhvb2sgfHwgKERhdGFSb3V0ZXJIb29rID0ge30pKTtcblxudmFyIERhdGFSb3V0ZXJTdGF0ZUhvb2s7XG5cbihmdW5jdGlvbiAoRGF0YVJvdXRlclN0YXRlSG9vaykge1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQmxvY2tlclwiXSA9IFwidXNlQmxvY2tlclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTG9hZGVyRGF0YVwiXSA9IFwidXNlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQWN0aW9uRGF0YVwiXSA9IFwidXNlQWN0aW9uRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVFcnJvclwiXSA9IFwidXNlUm91dGVFcnJvclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTmF2aWdhdGlvblwiXSA9IFwidXNlTmF2aWdhdGlvblwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVMb2FkZXJEYXRhXCJdID0gXCJ1c2VSb3V0ZUxvYWRlckRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU1hdGNoZXNcIl0gPSBcInVzZU1hdGNoZXNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHJvdXRlO1xufVxuXG5mdW5jdGlvbiB1c2VDdXJyZW50Um91dGVJZChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpO1xuICBsZXQgdGhpc1JvdXRlID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAhdGhpc1JvdXRlLnJvdXRlLmlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgaG9va05hbWUgKyBcIiBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gdGhpc1JvdXRlLnJvdXRlLmlkO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24sIGRlZmF1bHRpbmcgdG8gYW4gXCJpZGxlXCIgbmF2aWdhdGlvbiB3aGVuXG4gKiBubyBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VOYXZpZ2F0aW9uKTtcbiAgcmV0dXJuIHN0YXRlLm5hdmlnYXRpb247XG59XG4vKipcbiAqIFJldHVybnMgYSByZXZhbGlkYXRlIGZ1bmN0aW9uIGZvciBtYW51YWxseSB0cmlnZ2VyaW5nIHJldmFsaWRhdGlvbiwgYXMgd2VsbFxuICogYXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYW55IG1hbnVhbCByZXZhbGlkYXRpb25zXG4gKi9cblxuZnVuY3Rpb24gdXNlUmV2YWxpZGF0b3IoKSB7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZVJldmFsaWRhdG9yKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUmV2YWxpZGF0b3IpO1xuICByZXR1cm4ge1xuICAgIHJldmFsaWRhdGU6IGRhdGFSb3V0ZXJDb250ZXh0LnJvdXRlci5yZXZhbGlkYXRlLFxuICAgIHN0YXRlOiBzdGF0ZS5yZXZhbGlkYXRpb25cbiAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aXZlIHJvdXRlIG1hdGNoZXMsIHVzZWZ1bCBmb3IgYWNjZXNzaW5nIGxvYWRlckRhdGEgZm9yXG4gKiBwYXJlbnQvY2hpbGQgcm91dGVzIG9yIHRoZSByb3V0ZSBcImhhbmRsZVwiIHByb3BlcnR5XG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2hlcygpIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzLFxuICAgIGxvYWRlckRhdGFcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU1hdGNoZXMpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IG1hdGNoOyAvLyBOb3RlOiBUaGlzIHN0cnVjdHVyZSBtYXRjaGVzIHRoYXQgY3JlYXRlZCBieSBjcmVhdGVVc2VNYXRjaGVzTWF0Y2hcbiAgICAvLyBpbiB0aGUgQHJlbWl4LXJ1bi9yb3V0ZXIgLCBzbyBpZiB5b3UgY2hhbmdlIHRoaXMgcGxlYXNlIGFsc28gY2hhbmdlXG4gICAgLy8gdGhhdCA6KSAgRXZlbnR1YWxseSB3ZSdsbCBEUlkgdGhpcyB1cFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBtYXRjaC5yb3V0ZS5pZCxcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcGFyYW1zLFxuICAgICAgZGF0YTogbG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0sXG4gICAgICBoYW5kbGU6IG1hdGNoLnJvdXRlLmhhbmRsZVxuICAgIH07XG4gIH0pLCBbbWF0Y2hlcywgbG9hZGVyRGF0YV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXIgZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgbG9hZGVyXG4gKi9cblxuZnVuY3Rpb24gdXNlTG9hZGVyRGF0YSgpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTG9hZGVyRGF0YSk7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VMb2FkZXJEYXRhKTtcblxuICBpZiAoc3RhdGUuZXJyb3JzICYmIHN0YXRlLmVycm9yc1tyb3V0ZUlkXSAhPSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIllvdSBjYW5ub3QgYHVzZUxvYWRlckRhdGFgIGluIGFuIGVycm9yRWxlbWVudCAocm91dGVJZDogXCIgKyByb3V0ZUlkICsgXCIpXCIpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyRGF0YSBmb3IgdGhlIGdpdmVuIHJvdXRlSWRcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZUxvYWRlckRhdGEocm91dGVJZCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUxvYWRlckRhdGEpO1xuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aW9uIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGFjdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUFjdGlvbkRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUFjdGlvbkRhdGEpO1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlQWN0aW9uRGF0YSBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKChzdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogc3RhdGUuYWN0aW9uRGF0YSkgfHwge30pWzBdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGVycm9yLCB3aGljaCBjb3VsZCBiZSBhIGxvYWRlci9hY3Rpb25cbiAqIGVycm9yIG9yIGEgcmVuZGVyIGVycm9yLiAgVGhpcyBpcyBpbnRlbmRlZCB0byBiZSBjYWxsZWQgZnJvbSB5b3VyXG4gKiBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudCB0byBkaXNwbGF5IGEgcHJvcGVyIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVFcnJvcigpIHtcbiAgdmFyIF9zdGF0ZSRlcnJvcnM7XG5cbiAgbGV0IGVycm9yID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUVycm9yQ29udGV4dCk7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlRXJyb3IpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7IC8vIElmIHRoaXMgd2FzIGEgcmVuZGVyIGVycm9yLCB3ZSBwdXQgaXQgaW4gYSBSb3V0ZUVycm9yIGNvbnRleHQgaW5zaWRlXG4gIC8vIG9mIFJlbmRlckVycm9yQm91bmRhcnlcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gLy8gT3RoZXJ3aXNlIGxvb2sgZm9yIGVycm9ycyBmcm9tIG91ciBkYXRhIHJvdXRlciBzdGF0ZVxuXG5cbiAgcmV0dXJuIChfc3RhdGUkZXJyb3JzID0gc3RhdGUuZXJyb3JzKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGVycm9yc1tyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaGFwcHktcGF0aCBkYXRhIGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgPEF3YWl0IC8+IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQXN5bmNWYWx1ZSgpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9kYXRhO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlcnJvciBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIDxBd2FpdCAvPiB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUFzeW5jRXJyb3IoKSB7XG4gIGxldCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQXdhaXRDb250ZXh0KTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB2b2lkIDAgOiB2YWx1ZS5fZXJyb3I7XG59XG5sZXQgYmxvY2tlcklkID0gMDtcbi8qKlxuICogQWxsb3cgdGhlIGFwcGxpY2F0aW9uIHRvIGJsb2NrIG5hdmlnYXRpb25zIHdpdGhpbiB0aGUgU1BBIGFuZCBwcmVzZW50IHRoZVxuICogdXNlciBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgdG8gY29uZmlybSB0aGUgbmF2aWdhdGlvbi4gIE1vc3RseSB1c2VkIHRvIGF2b2lkXG4gKiB1c2luZyBoYWxmLWZpbGxlZCBmb3JtIGRhdGEuICBUaGlzIGRvZXMgbm90IGhhbmRsZSBoYXJkLXJlbG9hZHMgb3JcbiAqIGNyb3NzLW9yaWdpbiBuYXZpZ2F0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiB1c2VCbG9ja2VyKHNob3VsZEJsb2NrKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VCbG9ja2VyKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlQmxvY2tlcik7XG4gIGxldCBbYmxvY2tlcktleV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBTdHJpbmcoKytibG9ja2VySWQpKTtcbiAgbGV0IGJsb2NrZXJGdW5jdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGFyZ3MgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygc2hvdWxkQmxvY2sgPT09IFwiZnVuY3Rpb25cIiA/ICEhc2hvdWxkQmxvY2soYXJncykgOiAhIXNob3VsZEJsb2NrO1xuICB9LCBbc2hvdWxkQmxvY2tdKTtcbiAgbGV0IGJsb2NrZXIgPSByb3V0ZXIuZ2V0QmxvY2tlcihibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb24pOyAvLyBDbGVhbnVwIG9uIHVubW91bnRcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gKCkgPT4gcm91dGVyLmRlbGV0ZUJsb2NrZXIoYmxvY2tlcktleSksIFtyb3V0ZXIsIGJsb2NrZXJLZXldKTsgLy8gUHJlZmVyIHRoZSBibG9ja2VyIGZyb20gc3RhdGUgc2luY2UgRGF0YVJvdXRlckNvbnRleHQgaXMgbWVtb2l6ZWQgc28gdGhpc1xuICAvLyBlbnN1cmVzIHdlIHVwZGF0ZSBvbiBibG9ja2VyIHN0YXRlIHVwZGF0ZXNcblxuICByZXR1cm4gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpIHx8IGJsb2NrZXI7XG59XG5jb25zdCBhbHJlYWR5V2FybmVkID0ge307XG5cbmZ1bmN0aW9uIHdhcm5pbmdPbmNlKGtleSwgY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQgJiYgIWFscmVhZHlXYXJuZWRba2V5XSkge1xuICAgIGFscmVhZHlXYXJuZWRba2V5XSA9IHRydWU7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIG1lc3NhZ2UpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBSZW1peCBSb3V0ZXIgaW5zdGFuY2UsIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgVUlcbiAqL1xuZnVuY3Rpb24gUm91dGVyUHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGZhbGxiYWNrRWxlbWVudCxcbiAgICByb3V0ZXJcbiAgfSA9IF9yZWY7XG4gIGxldCBnZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHJvdXRlci5zdGF0ZSwgW3JvdXRlcl0pOyAvLyBTeW5jIHJvdXRlciBzdGF0ZSB0byBvdXIgY29tcG9uZW50IHN0YXRlIHRvIGZvcmNlIHJlLXJlbmRlcnNcblxuICBsZXQgc3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShyb3V0ZXIuc3Vic2NyaWJlLCBnZXRTdGF0ZSwgLy8gV2UgaGF2ZSB0byBwcm92aWRlIHRoaXMgc28gUmVhY3RAMTggZG9lc24ndCBjb21wbGFpbiBkdXJpbmcgaHlkcmF0aW9uLFxuICAvLyBidXQgd2UgcGFzcyBvdXIgc2VyaWFsaXplZCBoeWRyYXRpb24gZGF0YSBpbnRvIHRoZSByb3V0ZXIgc28gc3RhdGUgaGVyZVxuICAvLyBpcyBhbHJlYWR5IHN5bmNlZCB3aXRoIHdoYXQgdGhlIHNlcnZlciBzYXdcbiAgZ2V0U3RhdGUpO1xuICBsZXQgbmF2aWdhdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiBuID0+IHJvdXRlci5uYXZpZ2F0ZShuKSxcbiAgICAgIHB1c2g6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlLCBvcHRzKSA9PiByb3V0ZXIubmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pXG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuICBsZXQgYmFzZW5hbWUgPSByb3V0ZXIuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByb3V0ZXIsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogZmFsc2UsXG4gICAgYmFzZW5hbWVcbiAgfSksIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWVdKTsgLy8gVGhlIGZyYWdtZW50IGFuZCB7bnVsbH0gaGVyZSBhcmUgaW1wb3J0YW50ISAgV2UgbmVlZCB0aGVtIHRvIGtlZXAgUmVhY3QgMTgnc1xuICAvLyB1c2VJZCBoYXBweSB3aGVuIHdlIGFyZSBzZXJ2ZXItcmVuZGVyaW5nIHNpbmNlIHdlIG1heSBoYXZlIGEgPHNjcmlwdD4gaGVyZVxuICAvLyBjb250YWluaW5nIHRoZSBoeWRyYXRlZCBzZXJ2ZXItc2lkZSBzdGF0aWNDb250ZXh0IChmcm9tIFN0YXRpY1JvdXRlclByb3ZpZGVyKS5cbiAgLy8gdXNlSWQgcmVsaWVzIG9uIHRoZSBjb21wb25lbnQgdHJlZSBzdHJ1Y3R1cmUgdG8gZ2VuZXJhdGUgZGV0ZXJtaW5pc3RpYyBpZCdzXG4gIC8vIHNvIHdlIG5lZWQgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgb24gdGhlIGNsaWVudCBldmVuIHRob3VnaFxuICAvLyB3ZSBkb24ndCBuZWVkIHRoZSA8c2NyaXB0PiB0YWdcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGRhdGFSb3V0ZXJDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3RhdGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IHJvdXRlci5iYXNlbmFtZSxcbiAgICBsb2NhdGlvbjogcm91dGVyLnN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiByb3V0ZXIuc3RhdGUuaGlzdG9yeUFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IG5hdmlnYXRvclxuICB9LCByb3V0ZXIuc3RhdGUuaW5pdGlhbGl6ZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXMsIG51bGwpIDogZmFsbGJhY2tFbGVtZW50KSkpLCBudWxsKTtcbn1cblxuLyoqXG4gKiBBIDxSb3V0ZXI+IHRoYXQgc3RvcmVzIGFsbCBlbnRyaWVzIGluIG1lbW9yeS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlci1jb21wb25lbnRzL21lbW9yeS1yb3V0ZXJcbiAqL1xuZnVuY3Rpb24gTWVtb3J5Um91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgaW5pdGlhbEVudHJpZXMsXG4gICAgaW5pdGlhbEluZGV4XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEluZGV4LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogTm90ZTogVGhpcyBBUEkgaXMgbW9zdGx5IHVzZWZ1bCBpbiBSZWFjdC5Db21wb25lbnQgc3ViY2xhc3NlcyB0aGF0IGFyZSBub3RcbiAqIGFibGUgdG8gdXNlIGhvb2tzLiBJbiBmdW5jdGlvbmFsIGNvbXBvbmVudHMsIHdlIHJlY29tbWVuZCB5b3UgdXNlIHRoZVxuICogYHVzZU5hdmlnYXRlYCBob29rIGluc3RlYWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL25hdmlnYXRlXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRlKF9yZWYzKSB7XG4gIGxldCB7XG4gICAgdG8sXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICByZWxhdGl2ZVxuICB9ID0gX3JlZjM7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mXG4gIC8vIHRoZSByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwiPE5hdmlnYXRlPiBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyghUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCkuc3RhdGljLCBcIjxOYXZpZ2F0ZT4gbXVzdCBub3QgYmUgdXNlZCBvbiB0aGUgaW5pdGlhbCByZW5kZXIgaW4gYSA8U3RhdGljUm91dGVyPi4gXCIgKyBcIlRoaXMgaXMgYSBuby1vcCwgYnV0IHlvdSBzaG91bGQgbW9kaWZ5IHlvdXIgY29kZSBzbyB0aGUgPE5hdmlnYXRlPiBpcyBcIiArIFwib25seSBldmVyIHJlbmRlcmVkIGluIHJlc3BvbnNlIHRvIHNvbWUgdXNlciBpbnRlcmFjdGlvbiBvciBzdGF0ZSBjaGFuZ2UuXCIpIDogdm9pZCAwO1xuICBsZXQgZGF0YVJvdXRlclN0YXRlID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBdm9pZCBraWNraW5nIG9mZiBtdWx0aXBsZSBuYXZpZ2F0aW9ucyBpZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGFcbiAgICAvLyBkYXRhLXJvdXRlciBuYXZpZ2F0aW9uLCBzaW5jZSBjb21wb25lbnRzIGdldCByZS1yZW5kZXJlZCB3aGVuIHdlIGVudGVyXG4gICAgLy8gYSBzdWJtaXR0aW5nL2xvYWRpbmcgc3RhdGVcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlICYmIGRhdGFSb3V0ZXJTdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICByZXBsYWNlLFxuICAgICAgc3RhdGUsXG4gICAgICByZWxhdGl2ZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY2hpbGQgcm91dGUncyBlbGVtZW50LCBpZiB0aGVyZSBpcyBvbmUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL291dGxldFxuICovXG5mdW5jdGlvbiBPdXRsZXQocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU91dGxldChwcm9wcy5jb250ZXh0KTtcbn1cblxuLyoqXG4gKiBEZWNsYXJlcyBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IGEgY2VydGFpbiBVUkwgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvcm91dGVcbiAqL1xuZnVuY3Rpb24gUm91dGUoX3Byb3BzKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiQSA8Um91dGU+IGlzIG9ubHkgZXZlciB0byBiZSB1c2VkIGFzIHRoZSBjaGlsZCBvZiA8Um91dGVzPiBlbGVtZW50LCBcIiArIFwibmV2ZXIgcmVuZGVyZWQgZGlyZWN0bHkuIFBsZWFzZSB3cmFwIHlvdXIgPFJvdXRlPiBpbiBhIDxSb3V0ZXM+LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBsb2NhdGlvbiBjb250ZXh0IGZvciB0aGUgcmVzdCBvZiB0aGUgYXBwLlxuICpcbiAqIE5vdGU6IFlvdSB1c3VhbGx5IHdvbid0IHJlbmRlciBhIDxSb3V0ZXI+IGRpcmVjdGx5LiBJbnN0ZWFkLCB5b3UnbGwgcmVuZGVyIGFcbiAqIHJvdXRlciB0aGF0IGlzIG1vcmUgc3BlY2lmaWMgdG8geW91ciBlbnZpcm9ubWVudCBzdWNoIGFzIGEgPEJyb3dzZXJSb3V0ZXI+XG4gKiBpbiB3ZWIgYnJvd3NlcnMgb3IgYSA8U3RhdGljUm91dGVyPiBmb3Igc2VydmVyIHJlbmRlcmluZy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlci1jb21wb25lbnRzL3JvdXRlclxuICovXG5mdW5jdGlvbiBSb3V0ZXIoX3JlZjQpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWVQcm9wID0gXCIvXCIsXG4gICAgY2hpbGRyZW4gPSBudWxsLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblByb3AsXG4gICAgbmF2aWdhdGlvblR5cGUgPSBBY3Rpb24uUG9wLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3AgPSBmYWxzZVxuICB9ID0gX3JlZjQ7XG4gICEhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIllvdSBjYW5ub3QgcmVuZGVyIGEgPFJvdXRlcj4gaW5zaWRlIGFub3RoZXIgPFJvdXRlcj4uXCIgKyBcIiBZb3Ugc2hvdWxkIG5ldmVyIGhhdmUgbW9yZSB0aGFuIG9uZSBpbiB5b3VyIGFwcC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDsgLy8gUHJlc2VydmUgdHJhaWxpbmcgc2xhc2hlcyBvbiBiYXNlbmFtZSwgc28gd2UgY2FuIGxldCB0aGUgdXNlciBjb250cm9sXG4gIC8vIHRoZSBlbmZvcmNlbWVudCBvZiB0cmFpbGluZyBzbGFzaGVzIHRocm91Z2hvdXQgdGhlIGFwcFxuXG4gIGxldCBiYXNlbmFtZSA9IGJhc2VuYW1lUHJvcC5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbiAgbGV0IG5hdmlnYXRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3BcbiAgfSksIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCBzdGF0aWNQcm9wXSk7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvblByb3AgPT09IFwic3RyaW5nXCIpIHtcbiAgICBsb2NhdGlvblByb3AgPSBwYXJzZVBhdGgobG9jYXRpb25Qcm9wKTtcbiAgfVxuXG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiLFxuICAgIHN0YXRlID0gbnVsbCxcbiAgICBrZXkgPSBcImRlZmF1bHRcIlxuICB9ID0gbG9jYXRpb25Qcm9wO1xuICBsZXQgbG9jYXRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICBpZiAodHJhaWxpbmdQYXRobmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgcGF0aG5hbWU6IHRyYWlsaW5nUGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgaGFzaCxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGtleVxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb25UeXBlXG4gICAgfTtcbiAgfSwgW2Jhc2VuYW1lLCBwYXRobmFtZSwgc2VhcmNoLCBoYXNoLCBzdGF0ZSwga2V5LCBuYXZpZ2F0aW9uVHlwZV0pO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhsb2NhdGlvbkNvbnRleHQgIT0gbnVsbCwgXCI8Um91dGVyIGJhc2VuYW1lPVxcXCJcIiArIGJhc2VuYW1lICsgXCJcXFwiPiBpcyBub3QgYWJsZSB0byBtYXRjaCB0aGUgVVJMIFwiICsgKFwiXFxcIlwiICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoICsgXCJcXFwiIGJlY2F1c2UgaXQgZG9lcyBub3Qgc3RhcnQgd2l0aCB0aGUgXCIpICsgXCJiYXNlbmFtZSwgc28gdGhlIDxSb3V0ZXI+IHdvbid0IHJlbmRlciBhbnl0aGluZy5cIikgOiB2b2lkIDA7XG5cbiAgaWYgKGxvY2F0aW9uQ29udGV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbmF2aWdhdGlvbkNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHZhbHVlOiBsb2NhdGlvbkNvbnRleHRcbiAgfSkpO1xufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIG5lc3RlZCB0cmVlIG9mIDxSb3V0ZT4gZWxlbWVudHMgdGhhdCByZW5kZXJzIHRoZSBicmFuY2hcbiAqIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZXNcbiAqL1xuZnVuY3Rpb24gUm91dGVzKF9yZWY1KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgbG9jYXRpb25cbiAgfSA9IF9yZWY1O1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTsgLy8gV2hlbiBpbiBhIERhdGFSb3V0ZXJDb250ZXh0IF93aXRob3V0XyBjaGlsZHJlbiwgd2UgdXNlIHRoZSByb3V0ZXIgcm91dGVzXG4gIC8vIGRpcmVjdGx5LiAgSWYgd2UgaGF2ZSBjaGlsZHJlbiwgdGhlbiB3ZSdyZSBpbiBhIGRlc2NlbmRhbnQgdHJlZSBhbmQgd2VcbiAgLy8gbmVlZCB0byB1c2UgY2hpbGQgcm91dGVzLlxuXG4gIGxldCByb3V0ZXMgPSBkYXRhUm91dGVyQ29udGV4dCAmJiAhY2hpbGRyZW4gPyBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucm91dGVzIDogY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgcmV0dXJuIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdXNlIGZvciByZW5kZXJpbmcgbGF6aWx5IGxvYWRlZCBkYXRhIGZyb20gcmV0dXJuaW5nIGRlZmVyKClcbiAqIGluIGEgbG9hZGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEF3YWl0KF9yZWY2KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3JFbGVtZW50LFxuICAgIHJlc29sdmVcbiAgfSA9IF9yZWY2O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRFcnJvckJvdW5kYXJ5LCB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBlcnJvckVsZW1lbnQ6IGVycm9yRWxlbWVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNvbHZlQXdhaXQsIG51bGwsIGNoaWxkcmVuKSk7XG59XG52YXIgQXdhaXRSZW5kZXJTdGF0dXM7XG5cbihmdW5jdGlvbiAoQXdhaXRSZW5kZXJTdGF0dXMpIHtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJwZW5kaW5nXCJdID0gMF0gPSBcInBlbmRpbmdcIjtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJzdWNjZXNzXCJdID0gMV0gPSBcInN1Y2Nlc3NcIjtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJlcnJvclwiXSA9IDJdID0gXCJlcnJvclwiO1xufSkoQXdhaXRSZW5kZXJTdGF0dXMgfHwgKEF3YWl0UmVuZGVyU3RhdHVzID0ge30pKTtcblxuY29uc3QgbmV2ZXJTZXR0bGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKCgpID0+IHt9KTtcblxuY2xhc3MgQXdhaXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCI8QXdhaXQ+IGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZXJyb3JFbGVtZW50LFxuICAgICAgcmVzb2x2ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwcm9taXNlID0gbnVsbDtcbiAgICBsZXQgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcblxuICAgIGlmICghKHJlc29sdmUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgLy8gRGlkbid0IGdldCBhIHByb21pc2UgLSBwcm92aWRlIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2VzcztcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9kYXRhXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIC8vIENhdWdodCBhIHJlbmRlciBlcnJvciwgcHJvdmlkZSBpdCBhcyBhIHJlamVjdGVkIHByb21pc2VcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yO1xuICAgICAgbGV0IHJlbmRlckVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdCgpLmNhdGNoKCgpID0+IHt9KTsgLy8gQXZvaWQgdW5oYW5kbGVkIHJlamVjdGlvbiB3YXJuaW5nc1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlbmRlckVycm9yXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlc29sdmUuX3RyYWNrZWQpIHtcbiAgICAgIC8vIEFscmVhZHkgdHJhY2tlZCBwcm9taXNlIC0gY2hlY2sgY29udGVudHNcbiAgICAgIHByb21pc2UgPSByZXNvbHZlO1xuICAgICAgc3RhdHVzID0gcHJvbWlzZS5fZXJyb3IgIT09IHVuZGVmaW5lZCA/IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yIDogcHJvbWlzZS5fZGF0YSAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2VzcyA6IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJhdyAodW50cmFja2VkKSBwcm9taXNlIC0gdHJhY2sgaXRcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBwcm9taXNlID0gcmVzb2x2ZS50aGVuKGRhdGEgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGRhdGFcbiAgICAgIH0pLCBlcnJvciA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgcHJvbWlzZS5fZXJyb3IgaW5zdGFuY2VvZiBBYm9ydGVkRGVmZXJyZWRFcnJvcikge1xuICAgICAgLy8gRnJlZXplIHRoZSBVSSBieSB0aHJvd2luZyBhIG5ldmVyIHJlc29sdmVkIHByb21pc2VcbiAgICAgIHRocm93IG5ldmVyU2V0dGxlZFByb21pc2U7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgIWVycm9yRWxlbWVudCkge1xuICAgICAgLy8gTm8gZXJyb3JFbGVtZW50LCB0aHJvdyB0byB0aGUgbmVhcmVzdCByb3V0ZS1sZXZlbCBlcnJvciBib3VuZGFyeVxuICAgICAgdGhyb3cgcHJvbWlzZS5fZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IpIHtcbiAgICAgIC8vIFJlbmRlciB2aWEgb3VyIGVycm9yRWxlbWVudFxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGVycm9yRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2Vzcykge1xuICAgICAgLy8gUmVuZGVyIGNoaWxkcmVuIHdpdGggcmVzb2x2ZWQgdmFsdWVcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHByb21pc2UsXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSk7XG4gICAgfSAvLyBUaHJvdyB0byB0aGUgc3VzcGVuc2UgYm91bmRhcnlcblxuXG4gICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxuXG59XG4vKipcbiAqIEBwcml2YXRlXG4gKiBJbmRpcmVjdGlvbiB0byBsZXZlcmFnZSB1c2VBc3luY1ZhbHVlIGZvciBhIHJlbmRlci1wcm9wIEFQSSBvbiA8QXdhaXQ+XG4gKi9cblxuXG5mdW5jdGlvbiBSZXNvbHZlQXdhaXQoX3JlZjcpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjc7XG4gIGxldCBkYXRhID0gdXNlQXN5bmNWYWx1ZSgpO1xuICBsZXQgdG9SZW5kZXIgPSB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKGRhdGEpIDogY2hpbGRyZW47XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdG9SZW5kZXIpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVVElMU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZSBjb25maWcgZnJvbSBhIFJlYWN0IFwiY2hpbGRyZW5cIiBvYmplY3QsIHdoaWNoIGlzIHVzdWFsbHlcbiAqIGVpdGhlciBhIGA8Um91dGU+YCBlbGVtZW50IG9yIGFuIGFycmF5IG9mIHRoZW0uIFVzZWQgaW50ZXJuYWxseSBieVxuICogYDxSb3V0ZXM+YCB0byBjcmVhdGUgYSByb3V0ZSBjb25maWcgZnJvbSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9jcmVhdGUtcm91dGVzLWZyb20tY2hpbGRyZW5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50UGF0aCkge1xuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFtdO1xuICB9XG5cbiAgbGV0IHJvdXRlcyA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIElnbm9yZSBub24tZWxlbWVudHMuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBtb3JlIGVhc2lseSBpbmxpbmVcbiAgICAgIC8vIGNvbmRpdGlvbmFscyBpbiB0aGVpciByb3V0ZSBjb25maWcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcblxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgICAvLyBUcmFuc3BhcmVudGx5IHN1cHBvcnQgUmVhY3QuRnJhZ21lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgIHJvdXRlcy5wdXNoLmFwcGx5KHJvdXRlcywgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHRyZWVQYXRoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgIShlbGVtZW50LnR5cGUgPT09IFJvdXRlKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiW1wiICsgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZSkgKyBcIl0gaXMgbm90IGEgPFJvdXRlPiBjb21wb25lbnQuIEFsbCBjb21wb25lbnQgY2hpbGRyZW4gb2YgPFJvdXRlcz4gbXVzdCBiZSBhIDxSb3V0ZT4gb3IgPFJlYWN0LkZyYWdtZW50PlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEoIWVsZW1lbnQucHJvcHMuaW5kZXggfHwgIWVsZW1lbnQucHJvcHMuY2hpbGRyZW4pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJBbiBpbmRleCByb3V0ZSBjYW5ub3QgaGF2ZSBjaGlsZCByb3V0ZXMuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbGV0IHJvdXRlID0ge1xuICAgICAgaWQ6IGVsZW1lbnQucHJvcHMuaWQgfHwgdHJlZVBhdGguam9pbihcIi1cIiksXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBlbGVtZW50LnByb3BzLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbGVtZW50OiBlbGVtZW50LnByb3BzLmVsZW1lbnQsXG4gICAgICBDb21wb25lbnQ6IGVsZW1lbnQucHJvcHMuQ29tcG9uZW50LFxuICAgICAgaW5kZXg6IGVsZW1lbnQucHJvcHMuaW5kZXgsXG4gICAgICBwYXRoOiBlbGVtZW50LnByb3BzLnBhdGgsXG4gICAgICBsb2FkZXI6IGVsZW1lbnQucHJvcHMubG9hZGVyLFxuICAgICAgYWN0aW9uOiBlbGVtZW50LnByb3BzLmFjdGlvbixcbiAgICAgIGVycm9yRWxlbWVudDogZWxlbWVudC5wcm9wcy5lcnJvckVsZW1lbnQsXG4gICAgICBFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnksXG4gICAgICBoYXNFcnJvckJvdW5kYXJ5OiBlbGVtZW50LnByb3BzLkVycm9yQm91bmRhcnkgIT0gbnVsbCB8fCBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCAhPSBudWxsLFxuICAgICAgc2hvdWxkUmV2YWxpZGF0ZTogZWxlbWVudC5wcm9wcy5zaG91bGRSZXZhbGlkYXRlLFxuICAgICAgaGFuZGxlOiBlbGVtZW50LnByb3BzLmhhbmRsZSxcbiAgICAgIGxhenk6IGVsZW1lbnQucHJvcHMubGF6eVxuICAgIH07XG5cbiAgICBpZiAoZWxlbWVudC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcm91dGUuY2hpbGRyZW4gPSBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpO1xuICAgIH1cblxuICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgfSk7XG4gIHJldHVybiByb3V0ZXM7XG59XG4vKipcbiAqIFJlbmRlcnMgdGhlIHJlc3VsdCBvZiBgbWF0Y2hSb3V0ZXMoKWAgaW50byBhIFJlYWN0IGVsZW1lbnQuXG4gKi9cblxuZnVuY3Rpb24gcmVuZGVyTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzKTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0RXJyb3JCb3VuZGFyeShyb3V0ZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHJvdXRlLkNvbXBvbmVudCAmJiByb3V0ZS5lbGVtZW50KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYENvbXBvbmVudGAgYW5kIGBlbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBlbGVtZW50YCB3aWxsIGJlIGlnbm9yZWQuXCIpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZS5FcnJvckJvdW5kYXJ5ICYmIHJvdXRlLmVycm9yRWxlbWVudCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgaW5jbHVkZSBib3RoIGBFcnJvckJvdW5kYXJ5YCBhbmQgYGVycm9yRWxlbWVudGAgb24geW91ciByb3V0ZSAtIFwiICsgXCJgZXJyb3JFbGVtZW50YCB3aWxsIGJlIGlnbm9yZWQuXCIpIDogdm9pZCAwO1xuICAgIH1cbiAgfSAvLyBOb3RlOiB0aGlzIGNoZWNrIGFsc28gb2NjdXJzIGluIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiBzbyB1cGRhdGVcbiAgLy8gdGhlcmUgaWYgeW91IGNoYW5nZSB0aGlzXG5cblxuICByZXR1cm4gQm9vbGVhbihyb3V0ZS5FcnJvckJvdW5kYXJ5KSB8fCBCb29sZWFuKHJvdXRlLmVycm9yRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeVJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEluZGV4OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmluaXRpYWxJbmRleFxuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSxcbiAgICByb3V0ZXMsXG4gICAgZGV0ZWN0RXJyb3JCb3VuZGFyeVxuICB9KS5pbml0aWFsaXplKCk7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuZXhwb3J0IHsgQXdhaXQsIE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE91dGxldCwgUm91dGUsIFJvdXRlciwgUm91dGVyUHJvdmlkZXIsIFJvdXRlcywgRGF0YVJvdXRlckNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0LCBEYXRhUm91dGVyU3RhdGVDb250ZXh0IGFzIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBMb2NhdGlvbkNvbnRleHQgYXMgVU5TQUZFX0xvY2F0aW9uQ29udGV4dCwgTmF2aWdhdGlvbkNvbnRleHQgYXMgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCBSb3V0ZUNvbnRleHQgYXMgVU5TQUZFX1JvdXRlQ29udGV4dCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSBhcyBVTlNBRkVfZGV0ZWN0RXJyb3JCb3VuZGFyeSwgY3JlYXRlTWVtb3J5Um91dGVyLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4sIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiBhcyBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsIHJlbmRlck1hdGNoZXMsIHVzZUJsb2NrZXIgYXMgdW5zdGFibGVfdXNlQmxvY2tlciwgdXNlQWN0aW9uRGF0YSwgdXNlQXN5bmNFcnJvciwgdXNlQXN5bmNWYWx1ZSwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2FkZXJEYXRhLCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUmV2YWxpZGF0b3IsIHVzZVJvdXRlRXJyb3IsIHVzZVJvdXRlTG9hZGVyRGF0YSwgdXNlUm91dGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZjNTEzZjA0OTNkYTQ0YzM0ZjBjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9ybSIsIkxpc3QiLCJMaW5rIiwiQ2FydCIsIl9yZWYiLCJwcm9kdWN0cyIsInN1bSIsImFkZFByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0IiwiY3JlYXRlRWxlbWVudCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==