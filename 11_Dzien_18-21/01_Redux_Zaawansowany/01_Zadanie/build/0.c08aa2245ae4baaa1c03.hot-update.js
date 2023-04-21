self["webpackHotUpdatees6_react"](0,{

/***/ 30:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(114);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80);







// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(
//     <Provider store={store}>
//         <Main />
//     </Provider>
// )
react_dom__WEBPACK_IMPORTED_MODULE_3__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null)), document.getElementById("app"));

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);


var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}];
var LastProducts = function LastProducts() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie produkty",
    theme: "is-danger",
    path: "products",
    iconName: "pizza-slice",
    listElements: fakeProducts
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastProducts);

/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);


var fakeRecipes = [{
  id: 1,
  name: "Pomidorowa"
}, {
  id: 2,
  name: "Kurczak curry"
}, {
  id: 3,
  name: "Sajgonki"
}, {
  id: 4,
  name: "Hamburger"
}, {
  id: 5,
  name: "Schabowy z ziemniakami"
}];
var LastRecipes = function LastRecipes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Ostatnie przepisy",
    theme: "is-primary",
    path: "recipes",
    iconName: "folder",
    listElements: fakeRecipes
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastRecipes);

/***/ }),

/***/ 109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LastRecipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _LastProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);



var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "columns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastRecipes__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "column is-one-third"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LastProducts__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
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

/***/ 27:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(104);
/* harmony import */ var _Products_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(105);
/* harmony import */ var _Recipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(106);
/* harmony import */ var _Recipes_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(107);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(109);
/* harmony import */ var _containers_Products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(112);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../containers/AddProducts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(108);














var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/products",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Products__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/products/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_SingleProduct__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/products/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Products_Add__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/recipes",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RecipesContainer, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/recipes/add",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipes_Add__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var Panel = function Panel(_ref) {
  var theme = _ref.theme,
    title = _ref.title,
    iconName = _ref.iconName,
    path = _ref.path,
    listElements = _ref.listElements,
    _ref$heading = _ref.heading,
    heading = _ref$heading === void 0 ? true : _ref$heading,
    _ref$footer = _ref.footer,
    footer = _ref$footer === void 0 ? true : _ref$footer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel ".concat(theme)
  }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "panel-heading"
  }, title), listElements.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panel-block"
  }, "Brak wpis\xF3w!"), listElements.length > 0 && listElements.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/".concat(path, "/").concat(el.id),
      className: "panel-block",
      key: el.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "panel-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fas fa-".concat(iconName)
    })), el.name);
  }), footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/".concat(path),
    className: "button is-link is-outlined is-fullwidth",
    style: {
      margin: ".8rem"
    }
  }, "Zobacz wi\u0119cej")));
};
Panel.propTypes = {
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  iconName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  path: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  listElements: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  footer: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);

/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var AddProduct = /*#__PURE__*/function (_Component) {
  _inherits(AddProduct, _Component);
  var _super = _createSuper(AddProduct);
  function AddProduct(props) {
    var _this;
    _classCallCheck(this, AddProduct);
    _this = _super.call(this, props);
    // state = {
    //   name: "",
    // };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.onSaveProduct(_this.state.name);
      // this.setState({name: ""}) do poprawy
    };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.state = {
      name: ""
    };
    return _this;
  }
  _createClass(AddProduct, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "title"
      }, "Dodaj produkt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Nazwa produktu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nazwa produktu",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field is-grouped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button is-link"
      }, "Dodaj produkt"))))));
    }
  }]);
  return AddProduct;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProduct);

/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);


var AllProducts = function AllProducts(_ref) {
  var allProducts = _ref.allProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie produkty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "products",
    listElements: allProducts,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllProducts);

/***/ }),

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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


var AddRecipe = /*#__PURE__*/function (_Component) {
  _inherits(AddRecipe, _Component);
  var _super = _createSuper(AddRecipe);
  function AddRecipe(props) {
    var _this;
    _classCallCheck(this, AddRecipe);
    _this = _super.call(this, props);
    // state = {
    //   name: "",
    //   products: [{key: 0}],
    //   lastKey: 0
    // };
    _this.handleChange = function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    };
    _this.handleSubmit = function (e) {
      e.preventDefault();
      console.log(_this.state);
      _this.props.onSaveRecipe(_this.state);
    };
    _this.handleAddProduct = function () {
      _this.setState(function (_ref) {
        var lastKey = _ref.lastKey,
          products = _ref.products;
        return {
          products: [].concat(_toConsumableArray(products), [{
            key: lastKey + 1
          }]),
          lastKey: lastKey + 1
        };
      });
    };
    _this.handleProductChoose = function (index, id) {
      console.log(index, id);
      _this.setState(function (_ref2) {
        var products = _ref2.products;
        return {
          products: products.map(function (el) {
            return el.key === index ? _objectSpread(_objectSpread({}, el), {}, {
              id: id
            }) : el;
          })
        };
      });
    };
    _this.handleProductDelete = function (index) {
      _this.setState(function (_ref3) {
        var products = _ref3.products;
        return {
          products: products.filter(function (el, i) {
            return index !== i;
          })
        };
      });
    };
    _this.state = {
      name: "",
      products: [{
        key: 0
      }],
      lastKey: 0
    };
    return _this;
  }
  _createClass(AddRecipe, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        autoComplete: "off",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: "title"
      }, "Dodaj przepis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Nazwa przepisu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nazwa przepisu",
        onChange: this.handleChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "label"
      }, "Opis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "input",
        type: "text",
        name: "desc",
        id: "desc",
        placeholder: "Opis przepisu",
        onChange: this.handleChange
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "subtitle is-4"
      }, "Lista produkt\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "box"
      }, this.state.products.map(function (product, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: product.key,
          id: product.id ? product.id : "",
          index: product.key,
          number: i,
          onChange: _this2.handleProductChoose,
          onClose: _this2.handleProductDelete
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "button is-primary",
        onClick: this.handleAddProduct
      }, "Dodaj produkt do przepisu")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "field is-grouped"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "control"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "button is-link"
      }, "Dodaj przepis"))));
    }
  }]);
  return AddRecipe;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRecipe);

/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var fakeProducts = [{
  id: 1,
  name: "Pomidory"
}, {
  id: 2,
  name: "Przyprawa curry"
}, {
  id: 3,
  name: "Olej"
}, {
  id: 4,
  name: "Wołowina 500g"
}, {
  id: 5,
  name: "Ziemniaki"
}];
var SingleProduct = function SingleProduct(_ref) {
  var id = _ref.id,
    index = _ref.index,
    number = _ref.number,
    _onChange = _ref.onChange,
    onClose = _ref.onClose;
  // const [idProduct, setProductID] = useState(useParams().id)
  //
  // console.log(id)

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "message is-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "message-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Produkt ", number + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "delete",
    onClick: function onClick() {
      return onClose(index);
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
      return _onChange(index, e.target.value);
    },
    value: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Wybierz..."), fakeProducts.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: product.id
    }, product.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-small is-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-pizza-slice"
  }))))));
};
SingleProduct.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  number: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProduct);

/***/ }),

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);



//
// const fakeRecipes = [
//   {
//     id: 1,
//     name: "Pomidorówka",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [1, 2, 3]
//   },
//   {
//     id: 2,
//     name: "Coś innego",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [3, 1]
//   },
//   {
//     id: 3,
//     name: "Jeszcze inny przepis",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [5, 6]
//   }
// ];

var AllRecipes = function AllRecipes(_ref) {
  var allRecipes = _ref.allRecipes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Wszystkie przepisy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Panel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    iconName: "folder",
    path: "recipes",
    listElements: allRecipes,
    heading: false,
    footer: false
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllRecipes);

/***/ }),

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);



var Products = function Products(_ref) {
  var allProducts = _ref.allProducts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"], {
    allProducts: allProducts
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    allProducts: state.products
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(Products));

/***/ }),

/***/ 99:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(9);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(100);
  var loggedTypeFailures = {};
  var has = __webpack_require__(101);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ 103:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(100);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 98:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(9);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(95);
var assign = __webpack_require__(99);

var ReactPropTypesSecret = __webpack_require__(100);
var has = __webpack_require__(101);
var checkPropTypes = __webpack_require__(102);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 94:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(95);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(98)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(103)();
}


/***/ }),

/***/ 100:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 101:
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/***/ 96:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
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

/***/ 95:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(9);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(96);
} else {
  module.exports = __webpack_require__(97);
}


/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
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

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
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
/******/ 	__webpack_require__.h = () => ("6d8b832ddf7b75f1f234")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMDhhYTIyNDVhZTRiYWFhMWMwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyx3QkFBd0I7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFH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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG9FQUFvRTtBQUNwRTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sR0FBRzs7QUFFVix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLFVBQVUsSUFBSTtBQUNkLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLE1BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsZ0NBQWdDO0FBQ2hDO0FBQ0EsUUFBUSxJQUFJO0FBQ1osS0FBSztBQUNMOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGdJQUFnSTtBQUNoSSxvRkFBb0Y7O0FBRXBGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0EsZ0hBQWdIOztBQUVoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsR0FBRzs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQSx1RUFBdUU7O0FBRXZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBLHlHQUF5Rzs7QUFFekc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUc7O0FBRXJHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sY0FBYztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUhBQWlIO0FBQ2pIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7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QUNBLE1BQU0sT0FBTztBQUNiO0FBQ0EsTUFBTSxPQUFPLGlDQUFpQyxpRUFBYztBQUM1RDs7QUFFQTtBQUNBLE1BQU0sT0FBTyxpQ0FBaUMsaUVBQWM7QUFDNUQ7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLCtEQUFZO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLHNFQUFtQjtBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUV3eUI7QUFDMXlCOzs7Ozs7Ozs7VUNsNUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vcm91dGVyL2Rpc3Qvcm91dGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0hvbWUvTGFzdFByb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvSG9tZS9MYXN0UmVjaXBlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9BZGQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgtMjEvMDFfUmVkdXhfWmFhd2Fuc293YW55LzAxX1phZGFuaWUvanMvY29tcG9uZW50cy9Qcm9kdWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb21wb25lbnRzL1JlY2lwZXMvQWRkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9TaW5nbGVQcm9kdWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LTIxLzAxX1JlZHV4X1phYXdhbnNvd2FueS8wMV9aYWRhbmllL2pzL2NvbXBvbmVudHMvUmVjaXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC0yMS8wMV9SZWR1eF9aYWF3YW5zb3dhbnkvMDFfWmFkYW5pZS9qcy9jb250YWluZXJzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL2hhcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcmVtaXgtcnVuL3JvdXRlciB2MS41LjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIFR5cGVzIGFuZCBDb25zdGFudHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQWN0aW9ucyByZXByZXNlbnQgdGhlIHR5cGUgb2YgY2hhbmdlIHRvIGEgbG9jYXRpb24gdmFsdWUuXG4gKi9cbnZhciBBY3Rpb247XG5cbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gIC8qKlxuICAgKiBBIFBPUCBpbmRpY2F0ZXMgYSBjaGFuZ2UgdG8gYW4gYXJiaXRyYXJ5IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrLCBzdWNoXG4gICAqIGFzIGEgYmFjayBvciBmb3J3YXJkIG5hdmlnYXRpb24uIEl0IGRvZXMgbm90IGRlc2NyaWJlIHRoZSBkaXJlY3Rpb24gb2YgdGhlXG4gICAqIG5hdmlnYXRpb24sIG9ubHkgdGhhdCB0aGUgY3VycmVudCBpbmRleCBjaGFuZ2VkLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIHRoZSBkZWZhdWx0IGFjdGlvbiBmb3IgbmV3bHkgY3JlYXRlZCBoaXN0b3J5IG9iamVjdHMuXG4gICAqL1xuICBBY3Rpb25bXCJQb3BcIl0gPSBcIlBPUFwiO1xuICAvKipcbiAgICogQSBQVVNIIGluZGljYXRlcyBhIG5ldyBlbnRyeSBiZWluZyBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaCBhcyB3aGVuXG4gICAqIGEgbGluayBpcyBjbGlja2VkIGFuZCBhIG5ldyBwYWdlIGxvYWRzLiBXaGVuIHRoaXMgaGFwcGVucywgYWxsIHN1YnNlcXVlbnRcbiAgICogZW50cmllcyBpbiB0aGUgc3RhY2sgYXJlIGxvc3QuXG4gICAqL1xuXG4gIEFjdGlvbltcIlB1c2hcIl0gPSBcIlBVU0hcIjtcbiAgLyoqXG4gICAqIEEgUkVQTEFDRSBpbmRpY2F0ZXMgdGhlIGVudHJ5IGF0IHRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrXG4gICAqIGJlaW5nIHJlcGxhY2VkIGJ5IGEgbmV3IG9uZS5cbiAgICovXG5cbiAgQWN0aW9uW1wiUmVwbGFjZVwiXSA9IFwiUkVQTEFDRVwiO1xufSkoQWN0aW9uIHx8IChBY3Rpb24gPSB7fSkpO1xuXG5jb25zdCBQb3BTdGF0ZUV2ZW50VHlwZSA9IFwicG9wc3RhdGVcIjtcbi8qKlxuICogTWVtb3J5IGhpc3Rvcnkgc3RvcmVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIG1lbW9yeS4gSXQgaXMgZGVzaWduZWQgZm9yIHVzZVxuICogaW4gc3RhdGVmdWwgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzIGxpa2UgdGVzdHMgYW5kIFJlYWN0IE5hdGl2ZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGxldCB7XG4gICAgaW5pdGlhbEVudHJpZXMgPSBbXCIvXCJdLFxuICAgIGluaXRpYWxJbmRleCxcbiAgICB2NUNvbXBhdCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgZW50cmllczsgLy8gRGVjbGFyZSBzbyB3ZSBjYW4gYWNjZXNzIGZyb20gY3JlYXRlTWVtb3J5TG9jYXRpb25cblxuICBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKGVudHJ5LCB0eXBlb2YgZW50cnkgPT09IFwic3RyaW5nXCIgPyBudWxsIDogZW50cnkuc3RhdGUsIGluZGV4ID09PSAwID8gXCJkZWZhdWx0XCIgOiB1bmRlZmluZWQpKTtcbiAgbGV0IGluZGV4ID0gY2xhbXBJbmRleChpbml0aWFsSW5kZXggPT0gbnVsbCA/IGVudHJpZXMubGVuZ3RoIC0gMSA6IGluaXRpYWxJbmRleCk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGNsYW1wSW5kZXgobikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCAwKSwgZW50cmllcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZW50cmllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUsIGtleSkge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oZW50cmllcyA/IGdldEN1cnJlbnRMb2NhdGlvbigpLnBhdGhuYW1lIDogXCIvXCIsIHRvLCBzdGF0ZSwga2V5KTtcbiAgICB3YXJuaW5nKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gXCIvXCIsIFwicmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5OiBcIiArIEpTT04uc3RyaW5naWZ5KHRvKSk7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZih0bykge1xuICAgIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVIcmVmLFxuXG4gICAgY3JlYXRlVVJMKHRvKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTChjcmVhdGVIcmVmKHRvKSwgXCJodHRwOi8vbG9jYWxob3N0XCIpO1xuICAgIH0sXG5cbiAgICBlbmNvZGVMb2NhdGlvbih0bykge1xuICAgICAgbGV0IHBhdGggPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogcGF0aC5wYXRobmFtZSB8fCBcIlwiLFxuICAgICAgICBzZWFyY2g6IHBhdGguc2VhcmNoIHx8IFwiXCIsXG4gICAgICAgIGhhc2g6IHBhdGguaGFzaCB8fCBcIlwiXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXNoKHRvLCBzdGF0ZSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgZW50cmllcy5sZW5ndGgsIG5leHRMb2NhdGlvbik7XG5cbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUpO1xuICAgICAgZW50cmllc1tpbmRleF0gPSBuZXh0TG9jYXRpb247XG5cbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdvKGRlbHRhKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgICAgbGV0IG5leHRJbmRleCA9IGNsYW1wSW5kZXgoaW5kZXggKyBkZWx0YSk7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gZW50cmllc1tuZXh0SW5kZXhdO1xuICAgICAgaW5kZXggPSBuZXh0SW5kZXg7XG5cbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGxpc3Rlbihmbikge1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuLyoqXG4gKiBCcm93c2VyIGhpc3Rvcnkgc3RvcmVzIHRoZSBsb2NhdGlvbiBpbiByZWd1bGFyIFVSTHMuIFRoaXMgaXMgdGhlIHN0YW5kYXJkIGZvclxuICogbW9zdCB3ZWIgYXBwcywgYnV0IGl0IHJlcXVpcmVzIHNvbWUgY29uZmlndXJhdGlvbiBvbiB0aGUgc2VydmVyIHRvIGVuc3VyZSB5b3VcbiAqIHNlcnZlIHRoZSBzYW1lIGFwcCBhdCBtdWx0aXBsZSBVUkxzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9oaXN0b3J5L3RyZWUvbWFpbi9kb2NzL2FwaS1yZWZlcmVuY2UubWQjY3JlYXRlYnJvd3Nlcmhpc3RvcnlcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VyTG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKFwiXCIsIHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0sIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VySHJlZih3aW5kb3csIHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cblxuICByZXR1cm4gZ2V0VXJsQmFzZWRIaXN0b3J5KGNyZWF0ZUJyb3dzZXJMb2NhdGlvbiwgY3JlYXRlQnJvd3NlckhyZWYsIG51bGwsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBIYXNoIGhpc3Rvcnkgc3RvcmVzIHRoZSBsb2NhdGlvbiBpbiB3aW5kb3cubG9jYXRpb24uaGFzaC4gVGhpcyBtYWtlcyBpdCBpZGVhbFxuICogZm9yIHNpdHVhdGlvbnMgd2hlcmUgeW91IGRvbid0IHdhbnQgdG8gc2VuZCB0aGUgbG9jYXRpb24gdG8gdGhlIHNlcnZlciBmb3JcbiAqIHNvbWUgcmVhc29uLCBlaXRoZXIgYmVjYXVzZSB5b3UgZG8gY2Fubm90IGNvbmZpZ3VyZSBpdCBvciB0aGUgVVJMIHNwYWNlIGlzXG4gKiByZXNlcnZlZCBmb3Igc29tZXRoaW5nIGVsc2UuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL2hpc3RvcnkvdHJlZS9tYWluL2RvY3MvYXBpLXJlZmVyZW5jZS5tZCNjcmVhdGVoYXNoaGlzdG9yeVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgICBoYXNoID0gXCJcIlxuICAgIH0gPSBwYXJzZVBhdGgod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXCJcIiwge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSwgLy8gc3RhdGUgZGVmYXVsdHMgdG8gYG51bGxgIGJlY2F1c2UgYHdpbmRvdy5oaXN0b3J5LnN0YXRlYCBkb2VzXG4gICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLCBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUua2V5IHx8IFwiZGVmYXVsdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hIcmVmKHdpbmRvdywgdG8pIHtcbiAgICBsZXQgYmFzZSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtcbiAgICBsZXQgaHJlZiA9IFwiXCI7XG5cbiAgICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG4gICAgICBocmVmID0gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBocmVmICsgXCIjXCIgKyAodHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKSk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUhhc2hMb2NhdGlvbihsb2NhdGlvbiwgdG8pIHtcbiAgICB3YXJuaW5nKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gXCIvXCIsIFwicmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGhhc2ggaGlzdG9yeS5wdXNoKFwiICsgSlNPTi5zdHJpbmdpZnkodG8pICsgXCIpXCIpO1xuICB9XG5cbiAgcmV0dXJuIGdldFVybEJhc2VkSGlzdG9yeShjcmVhdGVIYXNoTG9jYXRpb24sIGNyZWF0ZUhhc2hIcmVmLCB2YWxpZGF0ZUhhc2hMb2NhdGlvbiwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBpbnZhcmlhbnQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIGhpc3RvcnkhXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBlcnJvciBpcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOCk7XG59XG4vKipcbiAqIEZvciBicm93c2VyLWJhc2VkIGhpc3Rvcmllcywgd2UgY29tYmluZSB0aGUgc3RhdGUgYW5kIGtleSBpbnRvIGFuIG9iamVjdFxuICovXG5cblxuZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCkge1xuICByZXR1cm4ge1xuICAgIHVzcjogbG9jYXRpb24uc3RhdGUsXG4gICAga2V5OiBsb2NhdGlvbi5rZXksXG4gICAgaWR4OiBpbmRleFxuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgTG9jYXRpb24gb2JqZWN0IHdpdGggYSB1bmlxdWUga2V5IGZyb20gdGhlIGdpdmVuIFBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGN1cnJlbnQsIHRvLCBzdGF0ZSwga2V5KSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBudWxsO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uID0gX2V4dGVuZHMoe1xuICAgIHBhdGhuYW1lOiB0eXBlb2YgY3VycmVudCA9PT0gXCJzdHJpbmdcIiA/IGN1cnJlbnQgOiBjdXJyZW50LnBhdGhuYW1lLFxuICAgIHNlYXJjaDogXCJcIixcbiAgICBoYXNoOiBcIlwiXG4gIH0sIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bywge1xuICAgIHN0YXRlLFxuICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmUgY2xlYW5lZCB1cC4gIHB1c2gvcmVwbGFjZSBzaG91bGQgcHJvYmFibHkganVzdCB0YWtlXG4gICAgLy8gZnVsbCBMb2NhdGlvbnMgbm93IGFuZCBhdm9pZCB0aGUgbmVlZCB0byBydW4gdGhyb3VnaCB0aGlzIGZsb3cgYXQgYWxsXG4gICAgLy8gQnV0IHRoYXQncyBhIHByZXR0eSBiaWcgcmVmYWN0b3IgdG8gdGhlIGN1cnJlbnQgdGVzdCBzdWl0ZSBzbyBnb2luZyB0b1xuICAgIC8vIGtlZXAgYXMgaXMgZm9yIHRoZSB0aW1lIGJlaW5nIGFuZCBqdXN0IGxldCBhbnkgaW5jb21pbmcga2V5cyB0YWtlIHByZWNlZGVuY2VcbiAgICBrZXk6IHRvICYmIHRvLmtleSB8fCBrZXkgfHwgY3JlYXRlS2V5KClcbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgc3RyaW5nIFVSTCBwYXRoIGZyb20gdGhlIGdpdmVuIHBhdGhuYW1lLCBzZWFyY2gsIGFuZCBoYXNoIGNvbXBvbmVudHMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUGF0aChfcmVmKSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSBfcmVmO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gXCI/XCIpIHBhdGhuYW1lICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09IFwiP1wiID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4gIGlmIChoYXNoICYmIGhhc2ggIT09IFwiI1wiKSBwYXRobmFtZSArPSBoYXNoLmNoYXJBdCgwKSA9PT0gXCIjXCIgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aG5hbWU7XG59XG4vKipcbiAqIFBhcnNlcyBhIHN0cmluZyBVUkwgcGF0aCBpbnRvIGl0cyBzZXBhcmF0ZSBwYXRobmFtZSwgc2VhcmNoLCBhbmQgaGFzaCBjb21wb25lbnRzLlxuICovXG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIGxldCBwYXJzZWRQYXRoID0ge307XG5cbiAgaWYgKHBhdGgpIHtcbiAgICBsZXQgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5oYXNoID0gcGF0aC5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBzZWFyY2hJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIik7XG5cbiAgICBpZiAoc2VhcmNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5zZWFyY2ggPSBwYXRoLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXJzZWRQYXRoLnBhdGhuYW1lID0gcGF0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsQmFzZWRIaXN0b3J5KGdldExvY2F0aW9uLCBjcmVhdGVIcmVmLCB2YWxpZGF0ZUxvY2F0aW9uLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBsZXQge1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LFxuICAgIHY1Q29tcGF0ID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuICBsZXQgaW5kZXggPSBnZXRJbmRleCgpOyAvLyBJbmRleCBzaG91bGQgb25seSBiZSBudWxsIHdoZW4gd2UgaW5pdGlhbGl6ZS4gSWYgbm90LCBpdCdzIGJlY2F1c2UgdGhlXG4gIC8vIHVzZXIgY2FsbGVkIGhpc3RvcnkucHVzaFN0YXRlIG9yIGhpc3RvcnkucmVwbGFjZVN0YXRlIGRpcmVjdGx5LCBpbiB3aGljaFxuICAvLyBjYXNlIHdlIHNob3VsZCBsb2cgYSB3YXJuaW5nIGFzIGl0IHdpbGwgcmVzdWx0IGluIGJ1Z3MuXG5cbiAgaWYgKGluZGV4ID09IG51bGwpIHtcbiAgICBpbmRleCA9IDA7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGdsb2JhbEhpc3Rvcnkuc3RhdGUsIHtcbiAgICAgIGlkeDogaW5kZXhcbiAgICB9KSwgXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbmRleCgpIHtcbiAgICBsZXQgc3RhdGUgPSBnbG9iYWxIaXN0b3J5LnN0YXRlIHx8IHtcbiAgICAgIGlkeDogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIHN0YXRlLmlkeDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcCgpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIGxldCBuZXh0SW5kZXggPSBnZXRJbmRleCgpO1xuICAgIGxldCBkZWx0YSA9IG5leHRJbmRleCA9PSBudWxsID8gbnVsbCA6IG5leHRJbmRleCAtIGluZGV4O1xuICAgIGluZGV4ID0gbmV4dEluZGV4O1xuXG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCkgKyAxO1xuICAgIGxldCBoaXN0b3J5U3RhdGUgPSBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KTtcbiAgICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTsgLy8gdHJ5Li4uY2F0Y2ggYmVjYXVzZSBpT1MgbGltaXRzIHVzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHMgOi9cblxuICAgIHRyeSB7XG4gICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIsIHVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFRoZXkgYXJlIGdvaW5nIHRvIGxvc2Ugc3RhdGUgaGVyZSwgYnV0IHRoZXJlIGlzIG5vIHJlYWxcbiAgICAgIC8vIHdheSB0byB3YXJuIHRoZW0gYWJvdXQgaXQgc2luY2UgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoLi4uXG4gICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuXG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcblxuICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICBkZWx0YTogMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVVJMKHRvKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiBpcyBcIm51bGxcIiAodGhlIGxpdGVyYWwgc3RyaW5nIHZhbHVlKSBpbiBGaXJlZm94XG4gICAgLy8gdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLCBub3RhYmx5IHdoZW4gc2VydmluZyBmcm9tIGEgbG9jYWwgSFRNTCBmaWxlXG4gICAgLy8gU2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg3ODI5N1xuICAgIGxldCBiYXNlID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPT0gXCJudWxsXCIgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIDogd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGhyZWYgPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICAgIGludmFyaWFudChiYXNlLCBcIk5vIHdpbmRvdy5sb2NhdGlvbi4ob3JpZ2lufGhyZWYpIGF2YWlsYWJsZSB0byBjcmVhdGUgVVJMIGZvciBocmVmOiBcIiArIGhyZWYpO1xuICAgIHJldHVybiBuZXcgVVJMKGhyZWYsIGJhc2UpO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcblxuICAgIGdldCBsb2NhdGlvbigpIHtcbiAgICAgIHJldHVybiBnZXRMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpO1xuICAgIH0sXG5cbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGhpc3Rvcnkgb25seSBhY2NlcHRzIG9uZSBhY3RpdmUgbGlzdGVuZXJcIik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVIcmVmKHRvKSB7XG4gICAgICByZXR1cm4gY3JlYXRlSHJlZih3aW5kb3csIHRvKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlVVJMLFxuXG4gICAgZW5jb2RlTG9jYXRpb24odG8pIHtcbiAgICAgIC8vIEVuY29kZSBhIExvY2F0aW9uIHRoZSBzYW1lIHdheSB3aW5kb3cubG9jYXRpb24gd291bGRcbiAgICAgIGxldCB1cmwgPSBjcmVhdGVVUkwodG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHVybC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLFxuICAgICAgICBoYXNoOiB1cmwuaGFzaFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgcHVzaCxcbiAgICByZXBsYWNlLFxuXG4gICAgZ28obikge1xuICAgICAgcmV0dXJuIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gICAgfVxuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufSAvLyNlbmRyZWdpb25cblxudmFyIFJlc3VsdFR5cGU7XG5cbihmdW5jdGlvbiAoUmVzdWx0VHlwZSkge1xuICBSZXN1bHRUeXBlW1wiZGF0YVwiXSA9IFwiZGF0YVwiO1xuICBSZXN1bHRUeXBlW1wiZGVmZXJyZWRcIl0gPSBcImRlZmVycmVkXCI7XG4gIFJlc3VsdFR5cGVbXCJyZWRpcmVjdFwiXSA9IFwicmVkaXJlY3RcIjtcbiAgUmVzdWx0VHlwZVtcImVycm9yXCJdID0gXCJlcnJvclwiO1xufSkoUmVzdWx0VHlwZSB8fCAoUmVzdWx0VHlwZSA9IHt9KSk7XG5cbmNvbnN0IGltbXV0YWJsZVJvdXRlS2V5cyA9IG5ldyBTZXQoW1wibGF6eVwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJwYXRoXCIsIFwiaWRcIiwgXCJpbmRleFwiLCBcImNoaWxkcmVuXCJdKTtcblxuZnVuY3Rpb24gaXNJbmRleFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiByb3V0ZS5pbmRleCA9PT0gdHJ1ZTtcbn0gLy8gV2FsayB0aGUgcm91dGUgdHJlZSBnZW5lcmF0aW5nIHVuaXF1ZSBJRHMgd2hlcmUgbmVjZXNzYXJ5IHNvIHdlIGFyZSB3b3JraW5nXG4vLyBzb2xlbHkgd2l0aCBBZ25vc3RpY0RhdGFSb3V0ZU9iamVjdCdzIHdpdGhpbiB0aGUgUm91dGVyXG5cblxuZnVuY3Rpb24gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZXMsIGRldGVjdEVycm9yQm91bmRhcnksIHBhcmVudFBhdGgsIG1hbmlmZXN0KSB7XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gW107XG4gIH1cblxuICBpZiAobWFuaWZlc3QgPT09IHZvaWQgMCkge1xuICAgIG1hbmlmZXN0ID0ge307XG4gIH1cblxuICByZXR1cm4gcm91dGVzLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcbiAgICBsZXQgaWQgPSB0eXBlb2Ygcm91dGUuaWQgPT09IFwic3RyaW5nXCIgPyByb3V0ZS5pZCA6IHRyZWVQYXRoLmpvaW4oXCItXCIpO1xuICAgIGludmFyaWFudChyb3V0ZS5pbmRleCAhPT0gdHJ1ZSB8fCAhcm91dGUuY2hpbGRyZW4sIFwiQ2Fubm90IHNwZWNpZnkgY2hpbGRyZW4gb24gYW4gaW5kZXggcm91dGVcIik7XG4gICAgaW52YXJpYW50KCFtYW5pZmVzdFtpZF0sIFwiRm91bmQgYSByb3V0ZSBpZCBjb2xsaXNpb24gb24gaWQgXFxcIlwiICsgaWQgKyBcIlxcXCIuICBSb3V0ZSBcIiArIFwiaWQncyBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZSB3aXRoaW4gRGF0YSBSb3V0ZXIgdXNhZ2VzXCIpO1xuXG4gICAgaWYgKGlzSW5kZXhSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGxldCBpbmRleFJvdXRlID0gX2V4dGVuZHMoe30sIHJvdXRlLCB7XG4gICAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGRldGVjdEVycm9yQm91bmRhcnkocm91dGUpLFxuICAgICAgICBpZFxuICAgICAgfSk7XG5cbiAgICAgIG1hbmlmZXN0W2lkXSA9IGluZGV4Um91dGU7XG4gICAgICByZXR1cm4gaW5kZXhSb3V0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHBhdGhPckxheW91dFJvdXRlID0gX2V4dGVuZHMoe30sIHJvdXRlLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBoYXNFcnJvckJvdW5kYXJ5OiBkZXRlY3RFcnJvckJvdW5kYXJ5KHJvdXRlKSxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSk7XG5cbiAgICAgIG1hbmlmZXN0W2lkXSA9IHBhdGhPckxheW91dFJvdXRlO1xuXG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAgICAgcGF0aE9yTGF5b3V0Um91dGUuY2hpbGRyZW4gPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlLmNoaWxkcmVuLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCB0cmVlUGF0aCwgbWFuaWZlc3QpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0aE9yTGF5b3V0Um91dGU7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gcm91dGVzIHRvIGEgbG9jYXRpb24gYW5kIHJldHVybnMgdGhlIG1hdGNoIGRhdGEuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9tYXRjaC1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gIGxldCBwYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCIsIGJhc2VuYW1lKTtcblxuICBpZiAocGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgbWF0Y2hlcyA9PSBudWxsICYmIGkgPCBicmFuY2hlcy5sZW5ndGg7ICsraSkge1xuICAgIG1hdGNoZXMgPSBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaGVzW2ldLCAvLyBJbmNvbWluZyBwYXRobmFtZXMgYXJlIGdlbmVyYWxseSBlbmNvZGVkIGZyb20gZWl0aGVyIHdpbmRvdy5sb2NhdGlvblxuICAgIC8vIG9yIGZyb20gcm91dGVyLm5hdmlnYXRlLCBidXQgd2Ugd2FudCB0byBtYXRjaCBhZ2FpbnN0IHRoZSB1bmVuY29kZWRcbiAgICAvLyBwYXRocyBpbiB0aGUgcm91dGUgZGVmaW5pdGlvbnMuICBNZW1vcnkgcm91dGVyIGxvY2F0aW9ucyB3b24ndCBiZVxuICAgIC8vIGVuY29kZWQgaGVyZSBidXQgdGhlcmUgYWxzbyBzaG91bGRuJ3QgYmUgYW55dGhpbmcgdG8gZGVjb2RlIHNvIHRoaXNcbiAgICAvLyBzaG91bGQgYmUgYSBzYWZlIG9wZXJhdGlvbi4gIFRoaXMgYXZvaWRzIG5lZWRpbmcgbWF0Y2hSb3V0ZXMgdG8gYmVcbiAgICAvLyBoaXN0b3J5LWF3YXJlLlxuICAgIHNhZmVseURlY29kZVVSSShwYXRobmFtZSkpO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Sb3V0ZXMocm91dGVzLCBicmFuY2hlcywgcGFyZW50c01ldGEsIHBhcmVudFBhdGgpIHtcbiAgaWYgKGJyYW5jaGVzID09PSB2b2lkIDApIHtcbiAgICBicmFuY2hlcyA9IFtdO1xuICB9XG5cbiAgaWYgKHBhcmVudHNNZXRhID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRzTWV0YSA9IFtdO1xuICB9XG5cbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBcIlwiO1xuICB9XG5cbiAgbGV0IGZsYXR0ZW5Sb3V0ZSA9IChyb3V0ZSwgaW5kZXgsIHJlbGF0aXZlUGF0aCkgPT4ge1xuICAgIGxldCBtZXRhID0ge1xuICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGggPT09IHVuZGVmaW5lZCA/IHJvdXRlLnBhdGggfHwgXCJcIiA6IHJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09IHRydWUsXG4gICAgICBjaGlsZHJlbkluZGV4OiBpbmRleCxcbiAgICAgIHJvdXRlXG4gICAgfTtcblxuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgaW52YXJpYW50KG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgocGFyZW50UGF0aCksIFwiQWJzb2x1dGUgcm91dGUgcGF0aCBcXFwiXCIgKyBtZXRhLnJlbGF0aXZlUGF0aCArIFwiXFxcIiBuZXN0ZWQgdW5kZXIgcGF0aCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIFwiKSArIFwibXVzdCBzdGFydCB3aXRoIHRoZSBjb21iaW5lZCBwYXRoIG9mIGFsbCBpdHMgcGFyZW50IHJvdXRlcy5cIik7XG4gICAgICBtZXRhLnJlbGF0aXZlUGF0aCA9IG1ldGEucmVsYXRpdmVQYXRoLnNsaWNlKHBhcmVudFBhdGgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGpvaW5QYXRocyhbcGFyZW50UGF0aCwgbWV0YS5yZWxhdGl2ZVBhdGhdKTtcbiAgICBsZXQgcm91dGVzTWV0YSA9IHBhcmVudHNNZXRhLmNvbmNhdChtZXRhKTsgLy8gQWRkIHRoZSBjaGlsZHJlbiBiZWZvcmUgYWRkaW5nIHRoaXMgcm91dGUgdG8gdGhlIGFycmF5IHNvIHdlIHRyYXZlcnNlIHRoZVxuICAgIC8vIHJvdXRlIHRyZWUgZGVwdGgtZmlyc3QgYW5kIGNoaWxkIHJvdXRlcyBhcHBlYXIgYmVmb3JlIHRoZWlyIHBhcmVudHMgaW5cbiAgICAvLyB0aGUgXCJmbGF0dGVuZWRcIiB2ZXJzaW9uLlxuXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGludmFyaWFudCggLy8gT3VyIHR5cGVzIGtub3cgYmV0dGVyLCBidXQgcnVudGltZSBKUyBtYXkgbm90IVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgcm91dGUuaW5kZXggIT09IHRydWUsIFwiSW5kZXggcm91dGVzIG11c3Qgbm90IGhhdmUgY2hpbGQgcm91dGVzLiBQbGVhc2UgcmVtb3ZlIFwiICsgKFwiYWxsIGNoaWxkIHJvdXRlcyBmcm9tIHJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIi5cIikpO1xuICAgICAgZmxhdHRlblJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgYnJhbmNoZXMsIHJvdXRlc01ldGEsIHBhdGgpO1xuICAgIH0gLy8gUm91dGVzIHdpdGhvdXQgYSBwYXRoIHNob3VsZG4ndCBldmVyIG1hdGNoIGJ5IHRoZW1zZWx2ZXMgdW5sZXNzIHRoZXkgYXJlXG4gICAgLy8gaW5kZXggcm91dGVzLCBzbyBkb24ndCBhZGQgdGhlbSB0byB0aGUgbGlzdCBvZiBwb3NzaWJsZSBicmFuY2hlcy5cblxuXG4gICAgaWYgKHJvdXRlLnBhdGggPT0gbnVsbCAmJiAhcm91dGUuaW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBicmFuY2hlcy5wdXNoKHtcbiAgICAgIHBhdGgsXG4gICAgICBzY29yZTogY29tcHV0ZVNjb3JlKHBhdGgsIHJvdXRlLmluZGV4KSxcbiAgICAgIHJvdXRlc01ldGFcbiAgICB9KTtcbiAgfTtcblxuICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgdmFyIF9yb3V0ZSRwYXRoO1xuXG4gICAgLy8gY29hcnNlLWdyYWluIGNoZWNrIGZvciBvcHRpb25hbCBwYXJhbXNcbiAgICBpZiAocm91dGUucGF0aCA9PT0gXCJcIiB8fCAhKChfcm91dGUkcGF0aCA9IHJvdXRlLnBhdGgpICE9IG51bGwgJiYgX3JvdXRlJHBhdGguaW5jbHVkZXMoXCI/XCIpKSkge1xuICAgICAgZmxhdHRlblJvdXRlKHJvdXRlLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGV4cGxvZGVkIG9mIGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHJvdXRlLnBhdGgpKSB7XG4gICAgICAgIGZsYXR0ZW5Sb3V0ZShyb3V0ZSwgaW5kZXgsIGV4cGxvZGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYnJhbmNoZXM7XG59XG4vKipcbiAqIENvbXB1dGVzIGFsbCBjb21iaW5hdGlvbnMgb2Ygb3B0aW9uYWwgcGF0aCBzZWdtZW50cyBmb3IgYSBnaXZlbiBwYXRoLFxuICogZXhjbHVkaW5nIGNvbWJpbmF0aW9ucyB0aGF0IGFyZSBhbWJpZ3VvdXMgYW5kIG9mIGxvd2VyIHByaW9yaXR5LlxuICpcbiAqIEZvciBleGFtcGxlLCBgL29uZS86dHdvPy90aHJlZS86Zm91cj8vOmZpdmU/YCBleHBsb2RlcyB0bzpcbiAqIC0gYC9vbmUvdGhyZWVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWVgXG4gKiAtIGAvb25lL3RocmVlLzpmb3VyYFxuICogLSBgL29uZS90aHJlZS86Zml2ZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zm91cmBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zml2ZWBcbiAqIC0gYC9vbmUvdGhyZWUvOmZvdXIvOmZpdmVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZvdXIvOmZpdmVgXG4gKi9cblxuXG5mdW5jdGlvbiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhwYXRoKSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGxldCBbZmlyc3QsIC4uLnJlc3RdID0gc2VnbWVudHM7IC8vIE9wdGlvbmFsIHBhdGggc2VnbWVudHMgYXJlIGRlbm90ZWQgYnkgYSB0cmFpbGluZyBgP2BcblxuICBsZXQgaXNPcHRpb25hbCA9IGZpcnN0LmVuZHNXaXRoKFwiP1wiKTsgLy8gQ29tcHV0ZSB0aGUgY29ycmVzcG9uZGluZyByZXF1aXJlZCBzZWdtZW50OiBgZm9vP2AgLT4gYGZvb2BcblxuICBsZXQgcmVxdWlyZWQgPSBmaXJzdC5yZXBsYWNlKC9cXD8kLywgXCJcIik7XG5cbiAgaWYgKHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSW50ZXByZXQgZW1wdHkgc3RyaW5nIGFzIG9taXR0aW5nIGFuIG9wdGlvbmFsIHNlZ21lbnRcbiAgICAvLyBgW1wib25lXCIsIFwiXCIsIFwidGhyZWVcIl1gIGNvcnJlc3BvbmRzIHRvIG9taXR0aW5nIGA6dHdvYCBmcm9tIGAvb25lLzp0d28/L3RocmVlYCAtPiBgL29uZS90aHJlZWBcbiAgICByZXR1cm4gaXNPcHRpb25hbCA/IFtyZXF1aXJlZCwgXCJcIl0gOiBbcmVxdWlyZWRdO1xuICB9XG5cbiAgbGV0IHJlc3RFeHBsb2RlZCA9IGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHJlc3Quam9pbihcIi9cIikpO1xuICBsZXQgcmVzdWx0ID0gW107IC8vIEFsbCBjaGlsZCBwYXRocyB3aXRoIHRoZSBwcmVmaXguICBEbyB0aGlzIGZvciBhbGwgY2hpbGRyZW4gYmVmb3JlIHRoZVxuICAvLyBvcHRpb25hbCB2ZXJzaW9uIGZvciBhbGwgY2hpbGRyZW4gc28gd2UgZ2V0IGNvbnNpc3RlbnQgb3JkZXJpbmcgd2hlcmUgdGhlXG4gIC8vIHBhcmVudCBvcHRpb25hbCBhc3BlY3QgaXMgcHJlZmVycmVkIGFzIHJlcXVpcmVkLiAgT3RoZXJ3aXNlLCB3ZSBjYW4gZ2V0XG4gIC8vIGNoaWxkIHNlY3Rpb25zIGludGVyc3BlcnNlZCB3aGVyZSBkZWVwZXIgb3B0aW9uYWwgc2VnbWVudHMgYXJlIGhpZ2hlciB0aGFuXG4gIC8vIHBhcmVudCBvcHRpb25hbCBzZWdtZW50cywgd2hlcmUgZm9yIGV4YW1wbGUsIC86dHdvIHdvdWxkIGV4cGxvZGVzIF9lYXJsaWVyX1xuICAvLyB0aGVuIC86b25lLiAgQnkgYWx3YXlzIGluY2x1ZGluZyB0aGUgcGFyZW50IGFzIHJlcXVpcmVkIF9mb3IgYWxsIGNoaWxkcmVuX1xuICAvLyBmaXJzdCwgd2UgYXZvaWQgdGhpcyBpc3N1ZVxuXG4gIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZC5tYXAoc3VicGF0aCA9PiBzdWJwYXRoID09PSBcIlwiID8gcmVxdWlyZWQgOiBbcmVxdWlyZWQsIHN1YnBhdGhdLmpvaW4oXCIvXCIpKSk7IC8vIFRoZW4gaWYgdGhpcyBpcyBhbiBvcHRpb25hbCB2YWx1ZSwgYWRkIGFsbCBjaGlsZCB2ZXJzaW9ucyB3aXRob3V0XG5cbiAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICByZXN1bHQucHVzaCguLi5yZXN0RXhwbG9kZWQpO1xuICB9IC8vIGZvciBhYnNvbHV0ZSBwYXRocywgZW5zdXJlIGAvYCBpbnN0ZWFkIG9mIGVtcHR5IHNlZ21lbnRcblxuXG4gIHJldHVybiByZXN1bHQubWFwKGV4cGxvZGVkID0+IHBhdGguc3RhcnRzV2l0aChcIi9cIikgJiYgZXhwbG9kZWQgPT09IFwiXCIgPyBcIi9cIiA6IGV4cGxvZGVkKTtcbn1cblxuZnVuY3Rpb24gcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpIHtcbiAgYnJhbmNoZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAhPT0gYi5zY29yZSA/IGIuc2NvcmUgLSBhLnNjb3JlIC8vIEhpZ2hlciBzY29yZSBmaXJzdFxuICA6IGNvbXBhcmVJbmRleGVzKGEucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpLCBiLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSkpO1xufVxuXG5jb25zdCBwYXJhbVJlID0gL146XFx3KyQvO1xuY29uc3QgZHluYW1pY1NlZ21lbnRWYWx1ZSA9IDM7XG5jb25zdCBpbmRleFJvdXRlVmFsdWUgPSAyO1xuY29uc3QgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xuY29uc3Qgc3RhdGljU2VnbWVudFZhbHVlID0gMTA7XG5jb25zdCBzcGxhdFBlbmFsdHkgPSAtMjtcblxuY29uc3QgaXNTcGxhdCA9IHMgPT4gcyA9PT0gXCIqXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShwYXRoLCBpbmRleCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgbGV0IGluaXRpYWxTY29yZSA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICBpZiAoc2VnbWVudHMuc29tZShpc1NwbGF0KSkge1xuICAgIGluaXRpYWxTY29yZSArPSBzcGxhdFBlbmFsdHk7XG4gIH1cblxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzLmZpbHRlcihzID0+ICFpc1NwbGF0KHMpKS5yZWR1Y2UoKHNjb3JlLCBzZWdtZW50KSA9PiBzY29yZSArIChwYXJhbVJlLnRlc3Qoc2VnbWVudCkgPyBkeW5hbWljU2VnbWVudFZhbHVlIDogc2VnbWVudCA9PT0gXCJcIiA/IGVtcHR5U2VnbWVudFZhbHVlIDogc3RhdGljU2VnbWVudFZhbHVlKSwgaW5pdGlhbFNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUluZGV4ZXMoYSwgYikge1xuICBsZXQgc2libGluZ3MgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5zbGljZSgwLCAtMSkuZXZlcnkoKG4sIGkpID0+IG4gPT09IGJbaV0pO1xuICByZXR1cm4gc2libGluZ3MgPyAvLyBJZiB0d28gcm91dGVzIGFyZSBzaWJsaW5ncywgd2Ugc2hvdWxkIHRyeSB0byBtYXRjaCB0aGUgZWFybGllciBzaWJsaW5nXG4gIC8vIGZpcnN0LiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gaGF2ZSBmaW5lLWdyYWluZWQgY29udHJvbCBvdmVyIHRoZSBtYXRjaGluZ1xuICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgLy8gd2FudCB0aGVtIHRyaWVkLlxuICBhW2EubGVuZ3RoIC0gMV0gLSBiW2IubGVuZ3RoIC0gMV0gOiAvLyBPdGhlcndpc2UsIGl0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgdG8gcmFuayBub24tc2libGluZ3MgYnkgaW5kZXgsXG4gIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAwO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaCwgcGF0aG5hbWUpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXNNZXRhXG4gIH0gPSBicmFuY2g7XG4gIGxldCBtYXRjaGVkUGFyYW1zID0ge307XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBcIi9cIjtcbiAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlc01ldGEubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbWV0YSA9IHJvdXRlc01ldGFbaV07XG4gICAgbGV0IGVuZCA9IGkgPT09IHJvdXRlc01ldGEubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkUGF0aG5hbWUgPT09IFwiL1wiID8gcGF0aG5hbWUgOiBwYXRobmFtZS5zbGljZShtYXRjaGVkUGF0aG5hbWUubGVuZ3RoKSB8fCBcIi9cIjtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbmRcbiAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gICAgT2JqZWN0LmFzc2lnbihtYXRjaGVkUGFyYW1zLCBtYXRjaC5wYXJhbXMpO1xuICAgIGxldCByb3V0ZSA9IG1ldGEucm91dGU7XG4gICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgIC8vIFRPRE86IENhbiB0aGlzIGFzIGJlIGF2b2lkZWQ/XG4gICAgICBwYXJhbXM6IG1hdGNoZWRQYXJhbXMsXG4gICAgICBwYXRobmFtZTogam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lXSksXG4gICAgICBwYXRobmFtZUJhc2U6IG5vcm1hbGl6ZVBhdGhuYW1lKGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKSksXG4gICAgICByb3V0ZVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cbi8qKlxuICogUmV0dXJucyBhIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvZ2VuZXJhdGUtcGF0aFxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKG9yaWdpbmFsUGF0aCwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmFtcyA9IHt9O1xuICB9XG5cbiAgbGV0IHBhdGggPSBvcmlnaW5hbFBhdGg7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpICYmIHBhdGggIT09IFwiKlwiICYmICFwYXRoLmVuZHNXaXRoKFwiLypcIikpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSk7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIik7XG4gIH0gLy8gZW5zdXJlIGAvYCBpcyBhZGRlZCBhdCB0aGUgYmVnaW5uaW5nIGlmIHRoZSBwYXRoIGlzIGFic29sdXRlXG5cblxuICBjb25zdCBwcmVmaXggPSBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gXCIvXCIgOiBcIlwiO1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoL1xcLysvKS5tYXAoKHNlZ21lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IGlzTGFzdFNlZ21lbnQgPSBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMTsgLy8gb25seSBhcHBseSB0aGUgc3BsYXQgaWYgaXQncyB0aGUgbGFzdCBzZWdtZW50XG5cbiAgICBpZiAoaXNMYXN0U2VnbWVudCAmJiBzZWdtZW50ID09PSBcIipcIikge1xuICAgICAgY29uc3Qgc3RhciA9IFwiKlwiO1xuICAgICAgY29uc3Qgc3RhclBhcmFtID0gcGFyYW1zW3N0YXJdOyAvLyBBcHBseSB0aGUgc3BsYXRcblxuICAgICAgcmV0dXJuIHN0YXJQYXJhbTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXlNYXRjaCA9IHNlZ21lbnQubWF0Y2goL146KFxcdyspKFxcPz8pJC8pO1xuXG4gICAgaWYgKGtleU1hdGNoKSB7XG4gICAgICBjb25zdCBbLCBrZXksIG9wdGlvbmFsXSA9IGtleU1hdGNoO1xuICAgICAgbGV0IHBhcmFtID0gcGFyYW1zW2tleV07XG5cbiAgICAgIGlmIChvcHRpb25hbCA9PT0gXCI/XCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtID09IG51bGwgPyBcIlwiIDogcGFyYW07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbSA9PSBudWxsKSB7XG4gICAgICAgIGludmFyaWFudChmYWxzZSwgXCJNaXNzaW5nIFxcXCI6XCIgKyBrZXkgKyBcIlxcXCIgcGFyYW1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9IC8vIFJlbW92ZSBhbnkgb3B0aW9uYWwgbWFya2VycyBmcm9tIG9wdGlvbmFsIHN0YXRpYyBzZWdtZW50c1xuXG5cbiAgICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9cXD8kL2csIFwiXCIpO1xuICB9KSAvLyBSZW1vdmUgZW1wdHkgc2VnbWVudHNcbiAgLmZpbHRlcihzZWdtZW50ID0+ICEhc2VnbWVudCk7XG4gIHJldHVybiBwcmVmaXggKyBzZWdtZW50cy5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogUGVyZm9ybXMgcGF0dGVybiBtYXRjaGluZyBvbiBhIFVSTCBwYXRobmFtZSBhbmQgcmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dFxuICogdGhlIG1hdGNoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvbWF0Y2gtcGF0aFxuICovXG5cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSkge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcbiAgICBwYXR0ZXJuID0ge1xuICAgICAgcGF0aDogcGF0dGVybixcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgZW5kOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGxldCBbbWF0Y2hlciwgcGFyYW1OYW1lc10gPSBjb21waWxlUGF0aChwYXR0ZXJuLnBhdGgsIHBhdHRlcm4uY2FzZVNlbnNpdGl2ZSwgcGF0dGVybi5lbmQpO1xuICBsZXQgbWF0Y2ggPSBwYXRobmFtZS5tYXRjaChtYXRjaGVyKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBtYXRjaFswXTtcbiAgbGV0IHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gIGxldCBjYXB0dXJlR3JvdXBzID0gbWF0Y2guc2xpY2UoMSk7XG4gIGxldCBwYXJhbXMgPSBwYXJhbU5hbWVzLnJlZHVjZSgobWVtbywgcGFyYW1OYW1lLCBpbmRleCkgPT4ge1xuICAgIC8vIFdlIG5lZWQgdG8gY29tcHV0ZSB0aGUgcGF0aG5hbWVCYXNlIGhlcmUgdXNpbmcgdGhlIHJhdyBzcGxhdCB2YWx1ZVxuICAgIC8vIGluc3RlYWQgb2YgdXNpbmcgcGFyYW1zW1wiKlwiXSBsYXRlciBiZWNhdXNlIGl0IHdpbGwgYmUgZGVjb2RlZCB0aGVuXG4gICAgaWYgKHBhcmFtTmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgIGxldCBzcGxhdFZhbHVlID0gY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIjtcbiAgICAgIHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5zbGljZSgwLCBtYXRjaGVkUGF0aG5hbWUubGVuZ3RoIC0gc3BsYXRWYWx1ZS5sZW5ndGgpLnJlcGxhY2UoLyguKVxcLyskLywgXCIkMVwiKTtcbiAgICB9XG5cbiAgICBtZW1vW3BhcmFtTmFtZV0gPSBzYWZlbHlEZWNvZGVVUklDb21wb25lbnQoY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIiwgcGFyYW1OYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICBwYXRobmFtZTogbWF0Y2hlZFBhdGhuYW1lLFxuICAgIHBhdGhuYW1lQmFzZSxcbiAgICBwYXR0ZXJuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgsIGNhc2VTZW5zaXRpdmUsIGVuZCkge1xuICBpZiAoY2FzZVNlbnNpdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7XG4gICAgZW5kID0gdHJ1ZTtcbiAgfVxuXG4gIHdhcm5pbmcocGF0aCA9PT0gXCIqXCIgfHwgIXBhdGguZW5kc1dpdGgoXCIqXCIpIHx8IHBhdGguZW5kc1dpdGgoXCIvKlwiKSwgXCJSb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgXCIgKyAoXCJcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiIGJlY2F1c2UgdGhlIGAqYCBjaGFyYWN0ZXIgbXVzdCBcIikgKyBcImFsd2F5cyBmb2xsb3cgYSBgL2AgaW4gdGhlIHBhdHRlcm4uIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCBcIiArIChcInBsZWFzZSBjaGFuZ2UgdGhlIHJvdXRlIHBhdGggdG8gXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIi5cIikpO1xuICBsZXQgcGFyYW1OYW1lcyA9IFtdO1xuICBsZXQgcmVnZXhwU291cmNlID0gXCJeXCIgKyBwYXRoLnJlcGxhY2UoL1xcLypcXCo/JC8sIFwiXCIpIC8vIElnbm9yZSB0cmFpbGluZyAvIGFuZCAvKiwgd2UnbGwgaGFuZGxlIGl0IGJlbG93XG4gIC5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKSAvLyBNYWtlIHN1cmUgaXQgaGFzIGEgbGVhZGluZyAvXG4gIC5yZXBsYWNlKC9bXFxcXC4qK14kP3t9fCgpW1xcXV0vZywgXCJcXFxcJCZcIikgLy8gRXNjYXBlIHNwZWNpYWwgcmVnZXggY2hhcnNcbiAgLnJlcGxhY2UoL1xcLzooXFx3KykvZywgKF8sIHBhcmFtTmFtZSkgPT4ge1xuICAgIHBhcmFtTmFtZXMucHVzaChwYXJhbU5hbWUpO1xuICAgIHJldHVybiBcIi8oW15cXFxcL10rKVwiO1xuICB9KTtcblxuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goXCIqXCIpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBwYXRoID09PSBcIipcIiB8fCBwYXRoID09PSBcIi8qXCIgPyBcIiguKikkXCIgLy8gQWxyZWFkeSBtYXRjaGVkIHRoZSBpbml0aWFsIC8sIGp1c3QgbWF0Y2ggdGhlIHJlc3RcbiAgICA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7IC8vIERvbid0IGluY2x1ZGUgdGhlIC8gaW4gcGFyYW1zW1wiKlwiXVxuICB9IGVsc2UgaWYgKGVuZCkge1xuICAgIC8vIFdoZW4gbWF0Y2hpbmcgdG8gdGhlIGVuZCwgaWdub3JlIHRyYWlsaW5nIHNsYXNoZXNcbiAgICByZWdleHBTb3VyY2UgKz0gXCJcXFxcLyokXCI7XG4gIH0gZWxzZSBpZiAocGF0aCAhPT0gXCJcIiAmJiBwYXRoICE9PSBcIi9cIikge1xuICAgIC8vIElmIG91ciBwYXRoIGlzIG5vbi1lbXB0eSBhbmQgY29udGFpbnMgYW55dGhpbmcgYmV5b25kIGFuIGluaXRpYWwgc2xhc2gsXG4gICAgLy8gdGhlbiB3ZSBoYXZlIF9zb21lXyBmb3JtIG9mIHBhdGggaW4gb3VyIHJlZ2V4IHNvIHdlIHNob3VsZCBleHBlY3QgdG9cbiAgICAvLyBtYXRjaCBvbmx5IGlmIHdlIGZpbmQgdGhlIGVuZCBvZiB0aGlzIHBhdGggc2VnbWVudC4gIExvb2sgZm9yIGFuIG9wdGlvbmFsXG4gICAgLy8gbm9uLWNhcHR1cmVkIHRyYWlsaW5nIHNsYXNoICh0byBtYXRjaCBhIHBvcnRpb24gb2YgdGhlIFVSTCkgb3IgdGhlIGVuZFxuICAgIC8vIG9mIHRoZSBwYXRoIChpZiB3ZSd2ZSBtYXRjaGVkIHRvIHRoZSBlbmQpLiAgV2UgdXNlZCB0byBkbyB0aGlzIHdpdGggYVxuICAgIC8vIHdvcmQgYm91bmRhcnkgYnV0IHRoYXQgZ2l2ZXMgZmFsc2UgcG9zaXRpdmVzIG9uIHJvdXRlcyBsaWtlXG4gICAgLy8gL3VzZXItcHJlZmVyZW5jZXMgc2luY2UgYC1gIGNvdW50cyBhcyBhIHdvcmQgYm91bmRhcnkuXG4gICAgcmVnZXhwU291cmNlICs9IFwiKD86KD89XFxcXC98JCkpXCI7XG4gIH0gZWxzZSA7XG5cbiAgbGV0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKHJlZ2V4cFNvdXJjZSwgY2FzZVNlbnNpdGl2ZSA/IHVuZGVmaW5lZCA6IFwiaVwiKTtcbiAgcmV0dXJuIFttYXRjaGVyLCBwYXJhbU5hbWVzXTtcbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJUaGUgVVJMIHBhdGggXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgY291bGQgbm90IGJlIGRlY29kZWQgYmVjYXVzZSBpdCBpcyBpcyBhIFwiICsgXCJtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHkgZHVlIHRvIGEgYmFkIHBlcmNlbnQgXCIgKyAoXCJlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYWZlbHlEZWNvZGVVUklDb21wb25lbnQodmFsdWUsIHBhcmFtTmFtZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiVGhlIHZhbHVlIGZvciB0aGUgVVJMIHBhcmFtIFxcXCJcIiArIHBhcmFtTmFtZSArIFwiXFxcIiB3aWxsIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2VcIiArIChcIiB0aGUgc3RyaW5nIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIGlzIGEgbWFsZm9ybWVkIFVSTCBzZWdtZW50LiBUaGlzIGlzIHByb2JhYmx5XCIpICsgKFwiIGR1ZSB0byBhIGJhZCBwZXJjZW50IGVuY29kaW5nIChcIiArIGVycm9yICsgXCIpLlwiKSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSByZXR1cm4gcGF0aG5hbWU7XG5cbiAgaWYgKCFwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYmFzZW5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBXZSB3YW50IHRvIGxlYXZlIHRyYWlsaW5nIHNsYXNoIGJlaGF2aW9yIGluIHRoZSB1c2VyJ3MgY29udHJvbCwgc28gaWYgdGhleVxuICAvLyBzcGVjaWZ5IGEgYmFzZW5hbWUgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLCB3ZSBzaG91bGQgc3VwcG9ydCBpdFxuXG5cbiAgbGV0IHN0YXJ0SW5kZXggPSBiYXNlbmFtZS5lbmRzV2l0aChcIi9cIikgPyBiYXNlbmFtZS5sZW5ndGggLSAxIDogYmFzZW5hbWUubGVuZ3RoO1xuICBsZXQgbmV4dENoYXIgPSBwYXRobmFtZS5jaGFyQXQoc3RhcnRJbmRleCk7XG5cbiAgaWYgKG5leHRDaGFyICYmIG5leHRDaGFyICE9PSBcIi9cIikge1xuICAgIC8vIHBhdGhuYW1lIGRvZXMgbm90IHN0YXJ0IHdpdGggYmFzZW5hbWUvXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcGF0aG5hbWUuc2xpY2Uoc3RhcnRJbmRleCkgfHwgXCIvXCI7XG59XG4vKipcbiAqIFJldHVybnMgYSByZXNvbHZlZCBwYXRoIG9iamVjdCByZWxhdGl2ZSB0byB0aGUgZ2l2ZW4gcGF0aG5hbWUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9yZXNvbHZlLXBhdGhcbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCh0bywgZnJvbVBhdGhuYW1lKSB7XG4gIGlmIChmcm9tUGF0aG5hbWUgPT09IHZvaWQgMCkge1xuICAgIGZyb21QYXRobmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZTogdG9QYXRobmFtZSxcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gIGxldCBwYXRobmFtZSA9IHRvUGF0aG5hbWUgPyB0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvXCIpID8gdG9QYXRobmFtZSA6IHJlc29sdmVQYXRobmFtZSh0b1BhdGhuYW1lLCBmcm9tUGF0aG5hbWUpIDogZnJvbVBhdGhuYW1lO1xuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaDogbm9ybWFsaXplU2VhcmNoKHNlYXJjaCksXG4gICAgaGFzaDogbm9ybWFsaXplSGFzaChoYXNoKVxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUocmVsYXRpdmVQYXRoLCBmcm9tUGF0aG5hbWUpIHtcbiAgbGV0IHNlZ21lbnRzID0gZnJvbVBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikuc3BsaXQoXCIvXCIpO1xuICBsZXQgcmVsYXRpdmVTZWdtZW50cyA9IHJlbGF0aXZlUGF0aC5zcGxpdChcIi9cIik7XG4gIHJlbGF0aXZlU2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICBpZiAoc2VnbWVudCA9PT0gXCIuLlwiKSB7XG4gICAgICAvLyBLZWVwIHRoZSByb290IFwiXCIgc2VnbWVudCBzbyB0aGUgcGF0aG5hbWUgc3RhcnRzIGF0IC9cbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSBzZWdtZW50cy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09IFwiLlwiKSB7XG4gICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWdtZW50cy5sZW5ndGggPiAxID8gc2VnbWVudHMuam9pbihcIi9cIikgOiBcIi9cIjtcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFBhdGhFcnJvcihjaGFyLCBmaWVsZCwgZGVzdCwgcGF0aCkge1xuICByZXR1cm4gXCJDYW5ub3QgaW5jbHVkZSBhICdcIiArIGNoYXIgKyBcIicgY2hhcmFjdGVyIGluIGEgbWFudWFsbHkgc3BlY2lmaWVkIFwiICsgKFwiYHRvLlwiICsgZmllbGQgKyBcImAgZmllbGQgW1wiICsgSlNPTi5zdHJpbmdpZnkocGF0aCkgKyBcIl0uICBQbGVhc2Ugc2VwYXJhdGUgaXQgb3V0IHRvIHRoZSBcIikgKyAoXCJgdG8uXCIgKyBkZXN0ICsgXCJgIGZpZWxkLiBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgcHJvdmlkZSB0aGUgZnVsbCBwYXRoIGFzIFwiKSArIFwiYSBzdHJpbmcgaW4gPExpbmsgdG89XFxcIi4uLlxcXCI+IGFuZCB0aGUgcm91dGVyIHdpbGwgcGFyc2UgaXQgZm9yIHlvdS5cIjtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqXG4gKiBXaGVuIHByb2Nlc3NpbmcgcmVsYXRpdmUgbmF2aWdhdGlvbiB3ZSB3YW50IHRvIGlnbm9yZSBhbmNlc3RvciByb3V0ZXMgdGhhdFxuICogZG8gbm90IGNvbnRyaWJ1dGUgdG8gdGhlIHBhdGgsIHN1Y2ggdGhhdCBpbmRleC9wYXRobGVzcyBsYXlvdXQgcm91dGVzIGRvbid0XG4gKiBpbnRlcmZlcmUuXG4gKlxuICogRm9yIGV4YW1wbGUsIHdoZW4gbW92aW5nIGEgcm91dGUgZWxlbWVudCBpbnRvIGFuIGluZGV4IHJvdXRlIGFuZC9vciBhXG4gKiBwYXRobGVzcyBsYXlvdXQgcm91dGUsIHJlbGF0aXZlIGxpbmsgYmVoYXZpb3IgY29udGFpbmVkIHdpdGhpbiBzaG91bGQgc3RheVxuICogdGhlIHNhbWUuICBCb3RoIG9mIHRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgc2hvdWxkIGxpbmsgYmFjayB0byB0aGUgcm9vdDpcbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICogICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudHNcIiBlbGVtZW50PXs8TGluayB0bz1cIi4uXCJ9PlxuICogICA8L1JvdXRlPlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gKiAgICAgPFJvdXRlIHBhdGg9XCJhY2NvdW50c1wiPlxuICogICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxBY2NvdW50c0xheW91dCAvPn0+ICAgICAgIC8vIDwtLSBEb2VzIG5vdCBjb250cmlidXRlXG4gKiAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8TGluayB0bz1cIi4uXCJ9IC8+ICAvLyA8LS0gRG9lcyBub3QgY29udHJpYnV0ZVxuICogICAgICAgPC9Sb3V0ZVxuICogICAgIDwvUm91dGU+XG4gKiAgIDwvUm91dGU+XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKSB7XG4gIHJldHVybiBtYXRjaGVzLmZpbHRlcigobWF0Y2gsIGluZGV4KSA9PiBpbmRleCA9PT0gMCB8fCBtYXRjaC5yb3V0ZS5wYXRoICYmIG1hdGNoLnJvdXRlLnBhdGgubGVuZ3RoID4gMCk7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVRvKHRvQXJnLCByb3V0ZVBhdGhuYW1lcywgbG9jYXRpb25QYXRobmFtZSwgaXNQYXRoUmVsYXRpdmUpIHtcbiAgaWYgKGlzUGF0aFJlbGF0aXZlID09PSB2b2lkIDApIHtcbiAgICBpc1BhdGhSZWxhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHRvO1xuXG4gIGlmICh0eXBlb2YgdG9BcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICB0byA9IHBhcnNlUGF0aCh0b0FyZyk7XG4gIH0gZWxzZSB7XG4gICAgdG8gPSBfZXh0ZW5kcyh7fSwgdG9BcmcpO1xuICAgIGludmFyaWFudCghdG8ucGF0aG5hbWUgfHwgIXRvLnBhdGhuYW1lLmluY2x1ZGVzKFwiP1wiKSwgZ2V0SW52YWxpZFBhdGhFcnJvcihcIj9cIiwgXCJwYXRobmFtZVwiLCBcInNlYXJjaFwiLCB0bykpO1xuICAgIGludmFyaWFudCghdG8ucGF0aG5hbWUgfHwgIXRvLnBhdGhuYW1lLmluY2x1ZGVzKFwiI1wiKSwgZ2V0SW52YWxpZFBhdGhFcnJvcihcIiNcIiwgXCJwYXRobmFtZVwiLCBcImhhc2hcIiwgdG8pKTtcbiAgICBpbnZhcmlhbnQoIXRvLnNlYXJjaCB8fCAhdG8uc2VhcmNoLmluY2x1ZGVzKFwiI1wiKSwgZ2V0SW52YWxpZFBhdGhFcnJvcihcIiNcIiwgXCJzZWFyY2hcIiwgXCJoYXNoXCIsIHRvKSk7XG4gIH1cblxuICBsZXQgaXNFbXB0eVBhdGggPSB0b0FyZyA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIjtcbiAgbGV0IHRvUGF0aG5hbWUgPSBpc0VtcHR5UGF0aCA/IFwiL1wiIDogdG8ucGF0aG5hbWU7XG4gIGxldCBmcm9tOyAvLyBSb3V0aW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHBhdGhuYW1lIGlmIGV4cGxpY2l0bHkgcmVxdWVzdGVkLlxuICAvL1xuICAvLyBJZiBhIHBhdGhuYW1lIGlzIGV4cGxpY2l0bHkgcHJvdmlkZWQgaW4gYHRvYCwgaXQgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAvLyByb3V0ZSBjb250ZXh0LiBUaGlzIGlzIGV4cGxhaW5lZCBpbiBgTm90ZSBvbiBgPExpbmsgdG8+YCB2YWx1ZXNgIGluIG91clxuICAvLyBtaWdyYXRpb24gZ3VpZGUgZnJvbSB2NSBhcyBhIG1lYW5zIG9mIGRpc2FtYmlndWF0aW9uIGJldHdlZW4gYHRvYCB2YWx1ZXNcbiAgLy8gdGhhdCBiZWdpbiB3aXRoIGAvYCBhbmQgdGhvc2UgdGhhdCBkbyBub3QuIEhvd2V2ZXIsIHRoaXMgaXMgcHJvYmxlbWF0aWMgZm9yXG4gIC8vIGB0b2AgdmFsdWVzIHRoYXQgZG8gbm90IHByb3ZpZGUgYSBwYXRobmFtZS4gYHRvYCBjYW4gc2ltcGx5IGJlIGEgc2VhcmNoIG9yXG4gIC8vIGhhc2ggc3RyaW5nLCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBhc3N1bWUgdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyByZWxhdGl2ZVxuICAvLyB0byB0aGUgY3VycmVudCBsb2NhdGlvbidzIHBhdGhuYW1lIGFuZCAqbm90KiB0aGUgcm91dGUgcGF0aG5hbWUuXG5cbiAgaWYgKGlzUGF0aFJlbGF0aXZlIHx8IHRvUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIGZyb20gPSBsb2NhdGlvblBhdGhuYW1lO1xuICB9IGVsc2Uge1xuICAgIGxldCByb3V0ZVBhdGhuYW1lSW5kZXggPSByb3V0ZVBhdGhuYW1lcy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi4uXCIpKSB7XG4gICAgICBsZXQgdG9TZWdtZW50cyA9IHRvUGF0aG5hbWUuc3BsaXQoXCIvXCIpOyAvLyBFYWNoIGxlYWRpbmcgLi4gc2VnbWVudCBtZWFucyBcImdvIHVwIG9uZSByb3V0ZVwiIGluc3RlYWQgb2YgXCJnbyB1cCBvbmVcbiAgICAgIC8vIFVSTCBzZWdtZW50XCIuICBUaGlzIGlzIGEga2V5IGRpZmZlcmVuY2UgZnJvbSBob3cgPGEgaHJlZj4gd29ya3MgYW5kIGFcbiAgICAgIC8vIG1ham9yIHJlYXNvbiB3ZSBjYWxsIHRoaXMgYSBcInRvXCIgdmFsdWUgaW5zdGVhZCBvZiBhIFwiaHJlZlwiLlxuXG4gICAgICB3aGlsZSAodG9TZWdtZW50c1swXSA9PT0gXCIuLlwiKSB7XG4gICAgICAgIHRvU2VnbWVudHMuc2hpZnQoKTtcbiAgICAgICAgcm91dGVQYXRobmFtZUluZGV4IC09IDE7XG4gICAgICB9XG5cbiAgICAgIHRvLnBhdGhuYW1lID0gdG9TZWdtZW50cy5qb2luKFwiL1wiKTtcbiAgICB9IC8vIElmIHRoZXJlIGFyZSBtb3JlIFwiLi5cIiBzZWdtZW50cyB0aGFuIHBhcmVudCByb3V0ZXMsIHJlc29sdmUgcmVsYXRpdmUgdG9cbiAgICAvLyB0aGUgcm9vdCAvIFVSTC5cblxuXG4gICAgZnJvbSA9IHJvdXRlUGF0aG5hbWVJbmRleCA+PSAwID8gcm91dGVQYXRobmFtZXNbcm91dGVQYXRobmFtZUluZGV4XSA6IFwiL1wiO1xuICB9XG5cbiAgbGV0IHBhdGggPSByZXNvbHZlUGF0aCh0bywgZnJvbSk7IC8vIEVuc3VyZSB0aGUgcGF0aG5hbWUgaGFzIGEgdHJhaWxpbmcgc2xhc2ggaWYgdGhlIG9yaWdpbmFsIFwidG9cIiBoYWQgb25lXG5cbiAgbGV0IGhhc0V4cGxpY2l0VHJhaWxpbmdTbGFzaCA9IHRvUGF0aG5hbWUgJiYgdG9QYXRobmFtZSAhPT0gXCIvXCIgJiYgdG9QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7IC8vIE9yIGlmIHRoaXMgd2FzIGEgbGluayB0byB0aGUgY3VycmVudCBwYXRoIHdoaWNoIGhhcyBhIHRyYWlsaW5nIHNsYXNoXG5cbiAgbGV0IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoID0gKGlzRW1wdHlQYXRoIHx8IHRvUGF0aG5hbWUgPT09IFwiLlwiKSAmJiBsb2NhdGlvblBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcblxuICBpZiAoIXBhdGgucGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpICYmIChoYXNFeHBsaWNpdFRyYWlsaW5nU2xhc2ggfHwgaGFzQ3VycmVudFRyYWlsaW5nU2xhc2gpKSB7XG4gICAgcGF0aC5wYXRobmFtZSArPSBcIi9cIjtcbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdldFRvUGF0aG5hbWUodG8pIHtcbiAgLy8gRW1wdHkgc3RyaW5ncyBzaG91bGQgYmUgdHJlYXRlZCB0aGUgc2FtZSBhcyAvIHBhdGhzXG4gIHJldHVybiB0byA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKS5wYXRobmFtZSA6IHRvLnBhdGhuYW1lO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IGpvaW5QYXRocyA9IHBhdGhzID0+IHBhdGhzLmpvaW4oXCIvXCIpLnJlcGxhY2UoL1xcL1xcLysvZywgXCIvXCIpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG5vcm1hbGl6ZVBhdGhuYW1lID0gcGF0aG5hbWUgPT4gcGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBub3JtYWxpemVTZWFyY2ggPSBzZWFyY2ggPT4gIXNlYXJjaCB8fCBzZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IHNlYXJjaC5zdGFydHNXaXRoKFwiP1wiKSA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG5vcm1hbGl6ZUhhc2ggPSBoYXNoID0+ICFoYXNoIHx8IGhhc2ggPT09IFwiI1wiID8gXCJcIiA6IGhhc2guc3RhcnRzV2l0aChcIiNcIikgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuLyoqXG4gKiBUaGlzIGlzIGEgc2hvcnRjdXQgZm9yIGNyZWF0aW5nIGBhcHBsaWNhdGlvbi9qc29uYCByZXNwb25zZXMuIENvbnZlcnRzIGBkYXRhYFxuICogdG8gSlNPTiBhbmQgc2V0cyB0aGUgYENvbnRlbnQtVHlwZWAgaGVhZGVyLlxuICovXG5cbmNvbnN0IGpzb24gPSBmdW5jdGlvbiBqc29uKGRhdGEsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSB7fTtcbiAgfVxuXG4gIGxldCByZXNwb25zZUluaXQgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQ7XG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVzcG9uc2VJbml0LmhlYWRlcnMpO1xuXG4gIGlmICghaGVhZGVycy5oYXMoXCJDb250ZW50LVR5cGVcIikpIHtcbiAgICBoZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIik7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCBfZXh0ZW5kcyh7fSwgcmVzcG9uc2VJbml0LCB7XG4gICAgaGVhZGVyc1xuICB9KSk7XG59O1xuY2xhc3MgQWJvcnRlZERlZmVycmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuY2xhc3MgRGVmZXJyZWREYXRhIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzcG9uc2VJbml0KSB7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuZGVmZXJyZWRLZXlzID0gW107XG4gICAgaW52YXJpYW50KGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSksIFwiZGVmZXIoKSBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0c1wiKTsgLy8gU2V0IHVwIGFuIEFib3J0Q29udHJvbGxlciArIFByb21pc2Ugd2UgY2FuIHJhY2UgYWdhaW5zdCB0byBleGl0IGVhcmx5XG4gICAgLy8gY2FuY2VsbGF0aW9uXG5cbiAgICBsZXQgcmVqZWN0O1xuICAgIHRoaXMuYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcblxuICAgIGxldCBvbkFib3J0ID0gKCkgPT4gcmVqZWN0KG5ldyBBYm9ydGVkRGVmZXJyZWRFcnJvcihcIkRlZmVycmVkIGRhdGEgYWJvcnRlZFwiKSk7XG5cbiAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwgPSAoKSA9PiB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcblxuICAgIHRoaXMuY29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLnJlZHVjZSgoYWNjLCBfcmVmKSA9PiB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gX3JlZjtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICBba2V5XTogdGhpcy50cmFja1Byb21pc2Uoa2V5LCB2YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0sIHt9KTtcblxuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIEFsbCBpbmNvbWluZyB2YWx1ZXMgd2VyZSByZXNvbHZlZFxuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0ID0gcmVzcG9uc2VJbml0O1xuICB9XG5cbiAgdHJhY2tQcm9taXNlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZlcnJlZEtleXMucHVzaChrZXkpO1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuYWRkKGtleSk7IC8vIFdlIHN0b3JlIGEgbGl0dGxlIHdyYXBwZXIgcHJvbWlzZSB0aGF0IHdpbGwgYmUgZXh0ZW5kZWQgd2l0aFxuICAgIC8vIF9kYXRhL19lcnJvciBwcm9wcyB1cG9uIHJlc29sdmUvcmVqZWN0XG5cbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmFjZShbdmFsdWUsIHRoaXMuYWJvcnRQcm9taXNlXSkudGhlbihkYXRhID0+IHRoaXMub25TZXR0bGUocHJvbWlzZSwga2V5LCBudWxsLCBkYXRhKSwgZXJyb3IgPT4gdGhpcy5vblNldHRsZShwcm9taXNlLCBrZXksIGVycm9yKSk7IC8vIFJlZ2lzdGVyIHJlamVjdGlvbiBsaXN0ZW5lcnMgdG8gYXZvaWQgdW5jYXVnaHQgcHJvbWlzZSByZWplY3Rpb25zIG9uXG4gICAgLy8gZXJyb3JzIG9yIGFib3J0ZWQgZGVmZXJyZWQgdmFsdWVzXG5cbiAgICBwcm9taXNlLmNhdGNoKCgpID0+IHt9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIG9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkICYmIGVycm9yIGluc3RhbmNlb2YgQWJvcnRlZERlZmVycmVkRXJyb3IpIHtcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuZGVsZXRlKGtleSk7XG5cbiAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAvLyBOb3RoaW5nIGxlZnQgdG8gYWJvcnQhXG4gICAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwoKTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZGF0YVwiLCB7XG4gICAgICBnZXQ6ICgpID0+IGRhdGFcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoZmFsc2UsIGtleSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBlbWl0KGFib3J0ZWQsIHNldHRsZWRLZXkpIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyKGFib3J0ZWQsIHNldHRsZWRLZXkpKTtcbiAgfVxuXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuY29udHJvbGxlci5hYm9ydCgpO1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5wZW5kaW5nS2V5c1NldC5kZWxldGUoaykpO1xuICAgIHRoaXMuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIHJlc29sdmVEYXRhKHNpZ25hbCkge1xuICAgIGxldCBhYm9ydGVkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuZG9uZSkge1xuICAgICAgbGV0IG9uQWJvcnQgPSAoKSA9PiB0aGlzLmNhbmNlbCgpO1xuXG4gICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuICAgICAgYWJvcnRlZCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnN1YnNjcmliZShhYm9ydGVkID0+IHtcbiAgICAgICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuXG4gICAgICAgICAgaWYgKGFib3J0ZWQgfHwgdGhpcy5kb25lKSB7XG4gICAgICAgICAgICByZXNvbHZlKGFib3J0ZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWJvcnRlZDtcbiAgfVxuXG4gIGdldCBkb25lKCkge1xuICAgIHJldHVybiB0aGlzLnBlbmRpbmdLZXlzU2V0LnNpemUgPT09IDA7XG4gIH1cblxuICBnZXQgdW53cmFwcGVkRGF0YSgpIHtcbiAgICBpbnZhcmlhbnQodGhpcy5kYXRhICE9PSBudWxsICYmIHRoaXMuZG9uZSwgXCJDYW4gb25seSB1bndyYXAgZGF0YSBvbiBpbml0aWFsaXplZCBhbmQgc2V0dGxlZCBkZWZlcnJlZHNcIik7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZGF0YSkucmVkdWNlKChhY2MsIF9yZWYyKSA9PiB7XG4gICAgICBsZXQgW2tleSwgdmFsdWVdID0gX3JlZjI7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgW2tleV06IHVud3JhcFRyYWNrZWRQcm9taXNlKHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZ2V0IHBlbmRpbmdLZXlzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucGVuZGluZ0tleXNTZXQpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gaXNUcmFja2VkUHJvbWlzZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlICYmIHZhbHVlLl90cmFja2VkID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiB1bndyYXBUcmFja2VkUHJvbWlzZSh2YWx1ZSkge1xuICBpZiAoIWlzVHJhY2tlZFByb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlLl9lcnJvcikge1xuICAgIHRocm93IHZhbHVlLl9lcnJvcjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZS5fZGF0YTtcbn1cblxuY29uc3QgZGVmZXIgPSBmdW5jdGlvbiBkZWZlcihkYXRhLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0ge307XG4gIH1cblxuICBsZXQgcmVzcG9uc2VJbml0ID0gdHlwZW9mIGluaXQgPT09IFwibnVtYmVyXCIgPyB7XG4gICAgc3RhdHVzOiBpbml0XG4gIH0gOiBpbml0O1xuICByZXR1cm4gbmV3IERlZmVycmVkRGF0YShkYXRhLCByZXNwb25zZUluaXQpO1xufTtcbi8qKlxuICogQSByZWRpcmVjdCByZXNwb25zZS4gU2V0cyB0aGUgc3RhdHVzIGNvZGUgYW5kIHRoZSBgTG9jYXRpb25gIGhlYWRlci5cbiAqIERlZmF1bHRzIHRvIFwiMzAyIEZvdW5kXCIuXG4gKi9cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdCh1cmwsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSAzMDI7XG4gIH1cblxuICBsZXQgcmVzcG9uc2VJbml0ID0gaW5pdDtcblxuICBpZiAodHlwZW9mIHJlc3BvbnNlSW5pdCA9PT0gXCJudW1iZXJcIikge1xuICAgIHJlc3BvbnNlSW5pdCA9IHtcbiAgICAgIHN0YXR1czogcmVzcG9uc2VJbml0XG4gICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcmVzcG9uc2VJbml0LnN0YXR1cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJlc3BvbnNlSW5pdC5zdGF0dXMgPSAzMDI7XG4gIH1cblxuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcbiAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCB1cmwpO1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIF9leHRlbmRzKHt9LCByZXNwb25zZUluaXQsIHtcbiAgICBoZWFkZXJzXG4gIH0pKTtcbn07XG4vKipcbiAqIEBwcml2YXRlXG4gKiBVdGlsaXR5IGNsYXNzIHdlIHVzZSB0byBob2xkIGF1dG8tdW53cmFwcGVkIDR4eC81eHggUmVzcG9uc2UgYm9kaWVzXG4gKi9cblxuY2xhc3MgRXJyb3JSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaW50ZXJuYWwpIHtcbiAgICBpZiAoaW50ZXJuYWwgPT09IHZvaWQgMCkge1xuICAgICAgaW50ZXJuYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0IHx8IFwiXCI7XG4gICAgdGhpcy5pbnRlcm5hbCA9IGludGVybmFsO1xuXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgdGhpcy5lcnJvciA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG5cbn1cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVycm9yIGlzIGFuIEVycm9yUmVzcG9uc2UgZ2VuZXJhdGVkIGZyb20gYSA0eHgvNXh4XG4gKiBSZXNwb25zZSB0aHJvd24gZnJvbSBhbiBhY3Rpb24vbG9hZGVyXG4gKi9cblxuZnVuY3Rpb24gaXNSb3V0ZUVycm9yUmVzcG9uc2UoZXJyb3IpIHtcbiAgcmV0dXJuIGVycm9yICE9IG51bGwgJiYgdHlwZW9mIGVycm9yLnN0YXR1cyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzVGV4dCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZXJyb3IuaW50ZXJuYWwgPT09IFwiYm9vbGVhblwiICYmIFwiZGF0YVwiIGluIGVycm9yO1xufVxuXG5jb25zdCB2YWxpZE11dGF0aW9uTWV0aG9kc0FyciA9IFtcInBvc3RcIiwgXCJwdXRcIiwgXCJwYXRjaFwiLCBcImRlbGV0ZVwiXTtcbmNvbnN0IHZhbGlkTXV0YXRpb25NZXRob2RzID0gbmV3IFNldCh2YWxpZE11dGF0aW9uTWV0aG9kc0Fycik7XG5jb25zdCB2YWxpZFJlcXVlc3RNZXRob2RzQXJyID0gW1wiZ2V0XCIsIC4uLnZhbGlkTXV0YXRpb25NZXRob2RzQXJyXTtcbmNvbnN0IHZhbGlkUmVxdWVzdE1ldGhvZHMgPSBuZXcgU2V0KHZhbGlkUmVxdWVzdE1ldGhvZHNBcnIpO1xuY29uc3QgcmVkaXJlY3RTdGF0dXNDb2RlcyA9IG5ldyBTZXQoWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XSk7XG5jb25zdCByZWRpcmVjdFByZXNlcnZlTWV0aG9kU3RhdHVzQ29kZXMgPSBuZXcgU2V0KFszMDcsIDMwOF0pO1xuY29uc3QgSURMRV9OQVZJR0FUSU9OID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGxvY2F0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICBmb3JtRGF0YTogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9GRVRDSEVSID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGRhdGE6IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWRcbn07XG5jb25zdCBJRExFX0JMT0NLRVIgPSB7XG4gIHN0YXRlOiBcInVuYmxvY2tlZFwiLFxuICBwcm9jZWVkOiB1bmRlZmluZWQsXG4gIHJlc2V0OiB1bmRlZmluZWQsXG4gIGxvY2F0aW9uOiB1bmRlZmluZWRcbn07XG5jb25zdCBBQlNPTFVURV9VUkxfUkVHRVggPSAvXig/OlthLXpdW2EtejAtOSsuLV0qOnxcXC9cXC8pL2k7XG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgaXNTZXJ2ZXIgPSAhaXNCcm93c2VyO1xuXG5jb25zdCBkZWZhdWx0RGV0ZWN0RXJyb3JCb3VuZGFyeSA9IHJvdXRlID0+IEJvb2xlYW4ocm91dGUuaGFzRXJyb3JCb3VuZGFyeSk7IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBjcmVhdGVSb3V0ZXJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlIGEgcm91dGVyIGFuZCBsaXN0ZW4gdG8gaGlzdG9yeSBQT1AgbmF2aWdhdGlvbnNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihpbml0KSB7XG4gIGludmFyaWFudChpbml0LnJvdXRlcy5sZW5ndGggPiAwLCBcIllvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgcm91dGVzIGFycmF5IHRvIGNyZWF0ZVJvdXRlclwiKTtcbiAgbGV0IGRldGVjdEVycm9yQm91bmRhcnkgPSBpbml0LmRldGVjdEVycm9yQm91bmRhcnkgfHwgZGVmYXVsdERldGVjdEVycm9yQm91bmRhcnk7IC8vIFJvdXRlcyBrZXllZCBieSBJRFxuXG4gIGxldCBtYW5pZmVzdCA9IHt9OyAvLyBSb3V0ZXMgaW4gdHJlZSBmb3JtYXQgZm9yIG1hdGNoaW5nXG5cbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKGluaXQucm91dGVzLCBkZXRlY3RFcnJvckJvdW5kYXJ5LCB1bmRlZmluZWQsIG1hbmlmZXN0KTtcbiAgbGV0IGluRmxpZ2h0RGF0YVJvdXRlczsgLy8gQ29uZmlnIGRyaXZlbiBiZWhhdmlvciBmbGFnc1xuXG4gIGxldCBmdXR1cmUgPSBfZXh0ZW5kcyh7XG4gICAgdjdfbm9ybWFsaXplRm9ybU1ldGhvZDogZmFsc2VcbiAgfSwgaW5pdC5mdXR1cmUpOyAvLyBDbGVhbnVwIGZ1bmN0aW9uIGZvciBoaXN0b3J5XG5cblxuICBsZXQgdW5saXN0ZW5IaXN0b3J5ID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbnMgdG8gY2FsbCBvbiBhbGwgc3RhdGUgY2hhbmdlc1xuXG4gIGxldCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBvYmplY3QgdG8gaG9sZCBzY3JvbGwgcmVzdG9yYXRpb24gbG9jYXRpb25zIGR1cmluZyByb3V0aW5nXG5cbiAgbGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbiB0byBnZXQgc2Nyb2xsIHJlc3RvcmF0aW9uIGtleXNcblxuICBsZXQgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuXG4gIGxldCBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7IC8vIE9uZS10aW1lIGZsYWcgdG8gY29udHJvbCB0aGUgaW5pdGlhbCBoeWRyYXRpb24gc2Nyb2xsIHJlc3RvcmF0aW9uLiAgQmVjYXVzZVxuICAvLyB3ZSBkb24ndCBnZXQgdGhlIHNhdmVkIHBvc2l0aW9ucyBmcm9tIDxTY3JvbGxSZXN0b3JhdGlvbiAvPiB1bnRpbCBfYWZ0ZXJfXG4gIC8vIHRoZSBpbml0aWFsIHJlbmRlciwgd2UgbmVlZCB0byBtYW51YWxseSB0cmlnZ2VyIGEgc2VwYXJhdGUgdXBkYXRlU3RhdGUgdG9cbiAgLy8gc2VuZCBhbG9uZyB0aGUgcmVzdG9yZVNjcm9sbFBvc2l0aW9uXG4gIC8vIFNldCB0byB0cnVlIGlmIHdlIGhhdmUgYGh5ZHJhdGlvbkRhdGFgIHNpbmNlIHdlIGFzc3VtZSB3ZSB3ZXJlIFNTUidkIGFuZCB0aGF0XG4gIC8vIFNTUiBkaWQgdGhlIGluaXRpYWwgc2Nyb2xsIHJlc3RvcmF0aW9uLlxuXG4gIGxldCBpbml0aWFsU2Nyb2xsUmVzdG9yZWQgPSBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbDtcbiAgbGV0IGluaXRpYWxNYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLCBpbml0LmJhc2VuYW1lKTtcbiAgbGV0IGluaXRpYWxFcnJvcnMgPSBudWxsO1xuXG4gIGlmIChpbml0aWFsTWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgLy8gSWYgd2UgZG8gbm90IG1hdGNoIGEgdXNlci1wcm92aWRlZC1yb3V0ZSwgZmFsbCBiYWNrIHRvIHRoZSByb290XG4gICAgLy8gdG8gYWxsb3cgdGhlIGVycm9yIGJvdW5kYXJ5IHRvIHRha2Ugb3ZlclxuICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICBwYXRobmFtZTogaW5pdC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgfSk7XG4gICAgbGV0IHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICByb3V0ZVxuICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgIGluaXRpYWxNYXRjaGVzID0gbWF0Y2hlcztcbiAgICBpbml0aWFsRXJyb3JzID0ge1xuICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgbGV0IGluaXRpYWxpemVkID0gLy8gQWxsIGluaXRpYWxNYXRjaGVzIG5lZWQgdG8gYmUgbG9hZGVkIGJlZm9yZSB3ZSdyZSByZWFkeS4gIElmIHdlIGhhdmUgbGF6eVxuICAvLyBmdW5jdGlvbnMgYXJvdW5kIHN0aWxsIHRoZW4gd2UnbGwgbmVlZCB0byBydW4gdGhlbSBpbiBpbml0aWFsaXplKClcbiAgIWluaXRpYWxNYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmxhenkpICYmICggLy8gQW5kIHdlIGhhdmUgdG8gZWl0aGVyIGhhdmUgbm8gbG9hZGVycyBvciBoYXZlIGJlZW4gcHJvdmlkZWQgaHlkcmF0aW9uRGF0YVxuICAhaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubG9hZGVyKSB8fCBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbCk7XG4gIGxldCByb3V0ZXI7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBoaXN0b3J5QWN0aW9uOiBpbml0Lmhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBpbml0Lmhpc3RvcnkubG9jYXRpb24sXG4gICAgbWF0Y2hlczogaW5pdGlhbE1hdGNoZXMsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgIC8vIERvbid0IHJlc3RvcmUgb24gaW5pdGlhbCB1cGRhdGVTdGF0ZSgpIGlmIHdlIHdlcmUgU1NSJ2RcbiAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsID8gZmFsc2UgOiBudWxsLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldDogZmFsc2UsXG4gICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICBsb2FkZXJEYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmxvYWRlckRhdGEgfHwge30sXG4gICAgYWN0aW9uRGF0YTogaW5pdC5oeWRyYXRpb25EYXRhICYmIGluaXQuaHlkcmF0aW9uRGF0YS5hY3Rpb25EYXRhIHx8IG51bGwsXG4gICAgZXJyb3JzOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmVycm9ycyB8fCBpbml0aWFsRXJyb3JzLFxuICAgIGZldGNoZXJzOiBuZXcgTWFwKCksXG4gICAgYmxvY2tlcnM6IG5ldyBNYXAoKVxuICB9OyAvLyAtLSBTdGF0ZWZ1bCBpbnRlcm5hbCB2YXJpYWJsZXMgdG8gbWFuYWdlIG5hdmlnYXRpb25zIC0tXG4gIC8vIEN1cnJlbnQgbmF2aWdhdGlvbiBpbiBwcm9ncmVzcyAodG8gYmUgY29tbWl0dGVkIGluIGNvbXBsZXRlTmF2aWdhdGlvbilcblxuICBsZXQgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7IC8vIFNob3VsZCB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHByZXZlbnQgdGhlIHNjcm9sbCByZXNldCBpZiBzY3JvbGwgY2Fubm90XG4gIC8vIGJlIHJlc3RvcmVkP1xuXG4gIGxldCBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gZmFsc2U7IC8vIEFib3J0Q29udHJvbGxlciBmb3IgdGhlIGFjdGl2ZSBuYXZpZ2F0aW9uXG5cbiAgbGV0IHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcjsgLy8gV2UgdXNlIHRoaXMgdG8gYXZvaWQgdG91Y2hpbmcgaGlzdG9yeSBpbiBjb21wbGV0ZU5hdmlnYXRpb24gaWYgYVxuICAvLyByZXZhbGlkYXRpb24gaXMgZW50aXJlbHkgdW5pbnRlcnJ1cHRlZFxuXG4gIGxldCBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgZmxhZyB0byBmb3JjZSByZXZhbGlkYXRpb24gb2YgYWxsIGxvYWRlcnM6XG4gIC8vICAtIHN1Ym1pc3Npb25zIChjb21wbGV0ZWQgb3IgaW50ZXJydXB0ZWQpXG4gIC8vICAtIHVzZVJldmFsaWRhdGUoKVxuICAvLyAgLSBYLVJlbWl4LVJldmFsaWRhdGUgKGZyb20gcmVkaXJlY3QpXG5cbiAgbGV0IGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSByb3V0ZXMgdGhhdCByZXF1aXJlIHJldmFsaWRhdGlvbiBkdWVcbiAgLy8gdG8gYSBjYW5jZWxsZWQgZGVmZXJyZWQgb24gYWN0aW9uIHN1Ym1pc3Npb25cblxuICBsZXQgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSBmZXRjaGVyIGxvYWRzIHRoYXQgd2VyZSBjYW5jZWxsZWQgYnkgYW5cbiAgLy8gYWN0aW9uIG5hdmlnYXRpb24gYW5kIHJlcXVpcmUgcmV2YWxpZGF0aW9uXG5cbiAgbGV0IGNhbmNlbGxlZEZldGNoZXJMb2FkcyA9IFtdOyAvLyBBYm9ydENvbnRyb2xsZXJzIGZvciBhbnkgaW4tZmxpZ2h0IGZldGNoZXJzXG5cbiAgbGV0IGZldGNoQ29udHJvbGxlcnMgPSBuZXcgTWFwKCk7IC8vIFRyYWNrIGxvYWRzIGJhc2VkIG9uIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHN0YXJ0ZWRcblxuICBsZXQgaW5jcmVtZW50aW5nTG9hZElkID0gMDsgLy8gVHJhY2sgdGhlIG91dHN0YW5kaW5nIHBlbmRpbmcgbmF2aWdhdGlvbiBkYXRhIGxvYWQgdG8gYmUgY29tcGFyZWQgYWdhaW5zdFxuICAvLyB0aGUgZ2xvYmFsbHkgaW5jcmVtZW50aW5nIGxvYWQgd2hlbiBhIGZldGNoZXIgbG9hZCBsYW5kcyBhZnRlciBhIGNvbXBsZXRlZFxuICAvLyBuYXZpZ2F0aW9uXG5cbiAgbGV0IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkID0gLTE7IC8vIEZldGNoZXJzIHRoYXQgdHJpZ2dlcmVkIGRhdGEgcmVsb2FkcyBhcyBhIHJlc3VsdCBvZiB0aGVpciBhY3Rpb25zXG5cbiAgbGV0IGZldGNoUmVsb2FkSWRzID0gbmV3IE1hcCgpOyAvLyBGZXRjaGVycyB0aGF0IHRyaWdnZXJlZCByZWRpcmVjdCBuYXZpZ2F0aW9ucyBmcm9tIHRoZWlyIGFjdGlvbnNcblxuICBsZXQgZmV0Y2hSZWRpcmVjdElkcyA9IG5ldyBTZXQoKTsgLy8gTW9zdCByZWNlbnQgaHJlZi9tYXRjaCBmb3IgZmV0Y2hlci5sb2FkIGNhbGxzIGZvciBmZXRjaGVyc1xuXG4gIGxldCBmZXRjaExvYWRNYXRjaGVzID0gbmV3IE1hcCgpOyAvLyBTdG9yZSBEZWZlcnJlZERhdGEgaW5zdGFuY2VzIGZvciBhY3RpdmUgcm91dGUgbWF0Y2hlcy4gIFdoZW4gYVxuICAvLyByb3V0ZSBsb2FkZXIgcmV0dXJucyBkZWZlcigpIHdlIHN0aWNrIG9uZSBpbiBoZXJlLiAgVGhlbiwgd2hlbiBhIG5lc3RlZFxuICAvLyBwcm9taXNlIHJlc29sdmVzIHdlIHVwZGF0ZSBsb2FkZXJEYXRhLiAgSWYgYSBuZXcgbmF2aWdhdGlvbiBzdGFydHMgd2VcbiAgLy8gY2FuY2VsIGFjdGl2ZSBkZWZlcnJlZHMgZm9yIGVsaW1pbmF0ZWQgcm91dGVzLlxuXG4gIGxldCBhY3RpdmVEZWZlcnJlZHMgPSBuZXcgTWFwKCk7IC8vIFN0b3JlIGJsb2NrZXIgZnVuY3Rpb25zIGluIGEgc2VwYXJhdGUgTWFwIG91dHNpZGUgb2Ygcm91dGVyIHN0YXRlIHNpbmNlXG4gIC8vIHdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIFVJIHN0YXRlIGlmIHRoZXkgY2hhbmdlXG5cbiAgbGV0IGJsb2NrZXJGdW5jdGlvbnMgPSBuZXcgTWFwKCk7IC8vIEZsYWcgdG8gaWdub3JlIHRoZSBuZXh0IGhpc3RvcnkgdXBkYXRlLCBzbyB3ZSBjYW4gcmV2ZXJ0IHRoZSBVUkwgY2hhbmdlIG9uXG4gIC8vIGEgUE9QIG5hdmlnYXRpb24gdGhhdCB3YXMgYmxvY2tlZCBieSB0aGUgdXNlciB3aXRob3V0IHRvdWNoaW5nIHJvdXRlciBzdGF0ZVxuXG4gIGxldCBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlOyAvLyBJbml0aWFsaXplIHRoZSByb3V0ZXIsIGFsbCBzaWRlIGVmZmVjdHMgc2hvdWxkIGJlIGtpY2tlZCBvZmYgZnJvbSBoZXJlLlxuICAvLyBJbXBsZW1lbnRlZCBhcyBhIEZsdWVudCBBUEkgZm9yIGVhc2Ugb2Y6XG4gIC8vICAgbGV0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcihpbml0KS5pbml0aWFsaXplKCk7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBJZiBoaXN0b3J5IGluZm9ybXMgdXMgb2YgYSBQT1AgbmF2aWdhdGlvbiwgc3RhcnQgdGhlIG5hdmlnYXRpb24gYnV0IGRvIG5vdCB1cGRhdGVcbiAgICAvLyBzdGF0ZS4gIFdlJ2xsIHVwZGF0ZSBvdXIgb3duIHN0YXRlIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG4gICAgdW5saXN0ZW5IaXN0b3J5ID0gaW5pdC5oaXN0b3J5Lmxpc3RlbihfcmVmID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGlvbjogaGlzdG9yeUFjdGlvbixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9ID0gX3JlZjtcblxuICAgICAgLy8gSWdub3JlIHRoaXMgZXZlbnQgaWYgaXQgd2FzIGp1c3QgdXMgcmVzZXR0aW5nIHRoZSBVUkwgZnJvbSBhXG4gICAgICAvLyBibG9ja2VkIFBPUCBuYXZpZ2F0aW9uXG4gICAgICBpZiAoaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUpIHtcbiAgICAgICAgaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuaW5nKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCB8fCBkZWx0YSAhPSBudWxsLCBcIllvdSBhcmUgdHJ5aW5nIHRvIHVzZSBhIGJsb2NrZXIgb24gYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIFwiICsgXCJ0aGF0IHdhcyBub3QgY3JlYXRlZCBieSBAcmVtaXgtcnVuL3JvdXRlci4gVGhpcyB3aWxsIGZhaWwgc2lsZW50bHkgaW4gXCIgKyBcInByb2R1Y3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5hdmlnYXRpbmcgb3V0c2lkZSB0aGUgcm91dGVyIFwiICsgXCJ2aWEgYHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZWAvYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCBpbnN0ZWFkIG9mIHVzaW5nIFwiICsgXCJyb3V0ZXIgbmF2aWdhdGlvbiBBUElzLiAgVGhpcyBjYW4gYWxzbyBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBcIiArIFwiY3JlYXRlSGFzaFJvdXRlciBhbmQgdGhlIHVzZXIgbWFudWFsbHkgY2hhbmdlcyB0aGUgVVJMLlwiKTtcbiAgICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaGlzdG9yeUFjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChibG9ja2VyS2V5ICYmIGRlbHRhICE9IG51bGwpIHtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgVVJMIHRvIG1hdGNoIHRoZSBjdXJyZW50IFVJLCBidXQgZG9uJ3QgdXBkYXRlIHJvdXRlciBzdGF0ZVxuICAgICAgICBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGluaXQuaGlzdG9yeS5nbyhkZWx0YSAqIC0xKTsgLy8gUHV0IHRoZSBibG9ja2VyIGludG8gYSBibG9ja2VkIHN0YXRlXG5cbiAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgc3RhdGU6IFwiYmxvY2tlZFwiLFxuICAgICAgICAgIGxvY2F0aW9uLFxuXG4gICAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgIH0pOyAvLyBSZS1kbyB0aGUgc2FtZSBQT1AgbmF2aWdhdGlvbiB3ZSBqdXN0IGJsb2NrZWRcblxuICAgICAgICAgICAgaW5pdC5oaXN0b3J5LmdvKGRlbHRhKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICBkZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpO1xuICAgICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICBibG9ja2VyczogbmV3IE1hcChyb3V0ZXIuc3RhdGUuYmxvY2tlcnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbik7XG4gICAgfSk7IC8vIEtpY2sgb2ZmIGluaXRpYWwgZGF0YSBsb2FkIGlmIG5lZWRlZC4gIFVzZSBQb3AgdG8gYXZvaWQgbW9kaWZ5aW5nIGhpc3RvcnlcbiAgICAvLyBOb3RlIHdlIGRvbid0IGRvIGFueSBoYW5kbGluZyBvZiBsYXp5IGhlcmUuICBGb3IgU1BBJ3MgaXQnbGwgZ2V0IGhhbmRsZWRcbiAgICAvLyBpbiB0aGUgbm9ybWFsIG5hdmlnYXRpb24gZmxvdy4gIEZvciBTU1IgaXQncyBleHBlY3RlZCB0aGF0IGxhenkgbW9kdWxlcyBhcmVcbiAgICAvLyByZXNvbHZlZCBwcmlvciB0byByb3V0ZXIgY3JlYXRpb24gc2luY2Ugd2UgY2FuJ3QgZ28gaW50byBhIGZhbGxiYWNrRWxlbWVudFxuICAgIC8vIFVJIGZvciBTU1InZCBhcHBzXG5cbiAgICBpZiAoIXN0YXRlLmluaXRpYWxpemVkKSB7XG4gICAgICBzdGFydE5hdmlnYXRpb24oQWN0aW9uLlBvcCwgc3RhdGUubG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiByb3V0ZXI7XG4gIH0gLy8gQ2xlYW4gdXAgYSByb3V0ZXIgYW5kIGl0J3Mgc2lkZSBlZmZlY3RzXG5cblxuICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh1bmxpc3Rlbkhpc3RvcnkpIHtcbiAgICAgIHVubGlzdGVuSGlzdG9yeSgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHN0YXRlLmZldGNoZXJzLmZvckVhY2goKF8sIGtleSkgPT4gZGVsZXRlRmV0Y2hlcihrZXkpKTtcbiAgICBzdGF0ZS5ibG9ja2Vycy5mb3JFYWNoKChfLCBrZXkpID0+IGRlbGV0ZUJsb2NrZXIoa2V5KSk7XG4gIH0gLy8gU3Vic2NyaWJlIHRvIHN0YXRlIHVwZGF0ZXMgZm9yIHRoZSByb3V0ZXJcblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShmbikge1xuICAgIHN1YnNjcmliZXJzLmFkZChmbik7XG4gICAgcmV0dXJuICgpID0+IHN1YnNjcmliZXJzLmRlbGV0ZShmbik7XG4gIH0gLy8gVXBkYXRlIG91ciBzdGF0ZSBhbmQgbm90aWZ5IHRoZSBjYWxsaW5nIGNvbnRleHQgb2YgdGhlIGNoYW5nZVxuXG5cbiAgZnVuY3Rpb24gdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgIHN1YnNjcmliZXJzLmZvckVhY2goc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyKHN0YXRlKSk7XG4gIH0gLy8gQ29tcGxldGUgYSBuYXZpZ2F0aW9uIHJldHVybmluZyB0aGUgc3RhdGUubmF2aWdhdGlvbiBiYWNrIHRvIHRoZSBJRExFX05BVklHQVRJT05cbiAgLy8gYW5kIHNldHRpbmcgc3RhdGUuW2hpc3RvcnlBY3Rpb24vbG9jYXRpb24vbWF0Y2hlc10gdG8gdGhlIG5ldyByb3V0ZS5cbiAgLy8gLSBMb2NhdGlvbiBpcyBhIHJlcXVpcmVkIHBhcmFtXG4gIC8vIC0gTmF2aWdhdGlvbiB3aWxsIGFsd2F5cyBiZSBzZXQgdG8gSURMRV9OQVZJR0FUSU9OXG4gIC8vIC0gQ2FuIHBhc3MgYW55IG90aGVyIHN0YXRlIGluIG5ld1N0YXRlXG5cblxuICBmdW5jdGlvbiBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIG5ld1N0YXRlKSB7XG4gICAgdmFyIF9sb2NhdGlvbiRzdGF0ZSwgX2xvY2F0aW9uJHN0YXRlMjtcblxuICAgIC8vIERlZHVjZSBpZiB3ZSdyZSBpbiBhIGxvYWRpbmcvYWN0aW9uUmVsb2FkIHN0YXRlOlxuICAgIC8vIC0gV2UgaGF2ZSBjb21taXR0ZWQgYWN0aW9uRGF0YSBpbiB0aGUgc3RvcmVcbiAgICAvLyAtIFRoZSBjdXJyZW50IG5hdmlnYXRpb24gd2FzIGEgbXV0YXRpb24gc3VibWlzc2lvblxuICAgIC8vIC0gV2UncmUgcGFzdCB0aGUgc3VibWl0dGluZyBzdGF0ZSBhbmQgaW50byB0aGUgbG9hZGluZyBzdGF0ZVxuICAgIC8vIC0gVGhlIGxvY2F0aW9uIGJlaW5nIGxvYWRlZCBpcyBub3QgdGhlIHJlc3VsdCBvZiBhIHJlZGlyZWN0XG4gICAgbGV0IGlzQWN0aW9uUmVsb2FkID0gc3RhdGUuYWN0aW9uRGF0YSAhPSBudWxsICYmIHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiBzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiAoKF9sb2NhdGlvbiRzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2xvY2F0aW9uJHN0YXRlLl9pc1JlZGlyZWN0KSAhPT0gdHJ1ZTtcbiAgICBsZXQgYWN0aW9uRGF0YTtcblxuICAgIGlmIChuZXdTdGF0ZS5hY3Rpb25EYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGUuYWN0aW9uRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBhY3Rpb25EYXRhID0gbmV3U3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVtcHR5IGFjdGlvbkRhdGEgLT4gY2xlYXIgcHJpb3IgYWN0aW9uRGF0YSBkdWUgdG8gYW4gYWN0aW9uIGVycm9yXG4gICAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBY3Rpb25SZWxvYWQpIHtcbiAgICAgIC8vIEtlZXAgdGhlIGN1cnJlbnQgZGF0YSBpZiB3ZSdyZSB3cmFwcGluZyB1cCB0aGUgYWN0aW9uIHJlbG9hZFxuICAgICAgYWN0aW9uRGF0YSA9IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsZWFyIGFjdGlvbkRhdGEgb24gYW55IG90aGVyIGNvbXBsZXRlZCBuYXZpZ2F0aW9uc1xuICAgICAgYWN0aW9uRGF0YSA9IG51bGw7XG4gICAgfSAvLyBBbHdheXMgcHJlc2VydmUgYW55IGV4aXN0aW5nIGxvYWRlckRhdGEgZnJvbSByZS11c2VkIHJvdXRlc1xuXG5cbiAgICBsZXQgbG9hZGVyRGF0YSA9IG5ld1N0YXRlLmxvYWRlckRhdGEgPyBtZXJnZUxvYWRlckRhdGEoc3RhdGUubG9hZGVyRGF0YSwgbmV3U3RhdGUubG9hZGVyRGF0YSwgbmV3U3RhdGUubWF0Y2hlcyB8fCBbXSwgbmV3U3RhdGUuZXJyb3JzKSA6IHN0YXRlLmxvYWRlckRhdGE7IC8vIE9uIGEgc3VjY2Vzc2Z1bCBuYXZpZ2F0aW9uIHdlIGNhbiBhc3N1bWUgd2UgZ290IHRocm91Z2ggYWxsIGJsb2NrZXJzXG4gICAgLy8gc28gd2UgY2FuIHN0YXJ0IGZyZXNoXG5cbiAgICBmb3IgKGxldCBba2V5XSBvZiBibG9ja2VyRnVuY3Rpb25zKSB7XG4gICAgICBkZWxldGVCbG9ja2VyKGtleSk7XG4gICAgfSAvLyBBbHdheXMgcmVzcGVjdCB0aGUgdXNlciBmbGFnLiAgT3RoZXJ3aXNlIGRvbid0IHJlc2V0IG9uIG11dGF0aW9uXG4gICAgLy8gc3VibWlzc2lvbiBuYXZpZ2F0aW9ucyB1bmxlc3MgdGhleSByZWRpcmVjdFxuXG5cbiAgICBsZXQgcHJldmVudFNjcm9sbFJlc2V0ID0gcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSB8fCBzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QgIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCkgJiYgKChfbG9jYXRpb24kc3RhdGUyID0gbG9jYXRpb24uc3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbG9jYXRpb24kc3RhdGUyLl9pc1JlZGlyZWN0KSAhPT0gdHJ1ZTtcblxuICAgIGlmIChpbkZsaWdodERhdGFSb3V0ZXMpIHtcbiAgICAgIGRhdGFSb3V0ZXMgPSBpbkZsaWdodERhdGFSb3V0ZXM7XG4gICAgICBpbkZsaWdodERhdGFSb3V0ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe30sIG5ld1N0YXRlLCB7XG4gICAgICBhY3Rpb25EYXRhLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGhpc3RvcnlBY3Rpb246IHBlbmRpbmdBY3Rpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUubWF0Y2hlcyB8fCBzdGF0ZS5tYXRjaGVzKSxcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgIH0pKTtcblxuICAgIGlmIChpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIDsgZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlBvcCkgOyBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUHVzaCkge1xuICAgICAgaW5pdC5oaXN0b3J5LnB1c2gobG9jYXRpb24sIGxvY2F0aW9uLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5SZXBsYWNlKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH0gLy8gUmVzZXQgc3RhdGVmdWwgbmF2aWdhdGlvbiB2YXJzXG5cblxuICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSBmYWxzZTtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTtcbiAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMgPSBbXTtcbiAgfSAvLyBUcmlnZ2VyIGEgbmF2aWdhdGlvbiBldmVudCwgd2hpY2ggY2FuIGVpdGhlciBiZSBhIG51bWVyaWNhbCBQT1Agb3IgYSBQVVNIXG4gIC8vIHJlcGxhY2Ugd2l0aCBhbiBvcHRpb25hbCBzdWJtaXNzaW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZSh0bywgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgIHBhdGgsXG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgZXJyb3JcbiAgICB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKHRvLCBmdXR1cmUsIG9wdHMpO1xuICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBzdGF0ZS5sb2NhdGlvbjtcbiAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhdGUubG9jYXRpb24sIHBhdGgsIG9wdHMgJiYgb3B0cy5zdGF0ZSk7IC8vIFdoZW4gdXNpbmcgbmF2aWdhdGUgYXMgYSBQVVNIL1JFUExBQ0Ugd2UgYXJlbid0IHJlYWRpbmcgYW4gYWxyZWFkeS1lbmNvZGVkXG4gICAgLy8gVVJMIGZyb20gd2luZG93LmxvY2F0aW9uLCBzbyB3ZSBuZWVkIHRvIGVuY29kZSBpdCBoZXJlIHNvIHRoZSBiZWhhdmlvclxuICAgIC8vIHJlbWFpbnMgdGhlIHNhbWUgYXMgUE9QIGFuZCBub24tZGF0YS1yb3V0ZXIgdXNhZ2VzLiAgbmV3IFVSTCgpIGRvZXMgYWxsXG4gICAgLy8gdGhlIHNhbWUgZW5jb2Rpbmcgd2UnZCBnZXQgZnJvbSBhIGhpc3RvcnkucHVzaFN0YXRlL3dpbmRvdy5sb2NhdGlvbiByZWFkXG4gICAgLy8gd2l0aG91dCBoYXZpbmcgdG8gdG91Y2ggaGlzdG9yeVxuXG4gICAgbmV4dExvY2F0aW9uID0gX2V4dGVuZHMoe30sIG5leHRMb2NhdGlvbiwgaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKG5leHRMb2NhdGlvbikpO1xuICAgIGxldCB1c2VyUmVwbGFjZSA9IG9wdHMgJiYgb3B0cy5yZXBsYWNlICE9IG51bGwgPyBvcHRzLnJlcGxhY2UgOiB1bmRlZmluZWQ7XG4gICAgbGV0IGhpc3RvcnlBY3Rpb24gPSBBY3Rpb24uUHVzaDtcblxuICAgIGlmICh1c2VyUmVwbGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAodXNlclJlcGxhY2UgPT09IGZhbHNlKSA7IGVsc2UgaWYgKHN1Ym1pc3Npb24gIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkgJiYgc3VibWlzc2lvbi5mb3JtQWN0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgLy8gQnkgZGVmYXVsdCBvbiBzdWJtaXNzaW9ucyB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3ZSBSRVBMQUNFIHNvIHRoYXRcbiAgICAgIC8vIHVzZXJzIGRvbid0IGhhdmUgdG8gZG91YmxlLWNsaWNrIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgdG8gdGhlIHByaW9yXG4gICAgICAvLyBsb2NhdGlvbi4gIElmIHRoZSB1c2VyIHJlZGlyZWN0cyB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBmcm9tIHRoZVxuICAgICAgLy8gYWN0aW9uL2xvYWRlciB0aGlzIHdpbGwgYmUgaWdub3JlZCBhbmQgdGhlIHJlZGlyZWN0IHdpbGwgYmUgYSBQVVNIXG4gICAgICBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgfVxuXG4gICAgbGV0IHByZXZlbnRTY3JvbGxSZXNldCA9IG9wdHMgJiYgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIiBpbiBvcHRzID8gb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUgOiB1bmRlZmluZWQ7XG4gICAgbGV0IGJsb2NrZXJLZXkgPSBzaG91bGRCbG9ja05hdmlnYXRpb24oe1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKGJsb2NrZXJLZXkpIHtcbiAgICAgIC8vIFB1dCB0aGUgYmxvY2tlciBpbnRvIGEgYmxvY2tlZCBzdGF0ZVxuICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgIHN0YXRlOiBcImJsb2NrZWRcIixcbiAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcblxuICAgICAgICBwcm9jZWVkKCkge1xuICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgc3RhdGU6IFwicHJvY2VlZGluZ1wiLFxuICAgICAgICAgICAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb25cbiAgICAgICAgICB9KTsgLy8gU2VuZCB0aGUgc2FtZSBuYXZpZ2F0aW9uIHRocm91Z2hcblxuICAgICAgICAgIG5hdmlnYXRlKHRvLCBvcHRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICBkZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpO1xuICAgICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbmV4dExvY2F0aW9uLCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgLy8gU2VuZCB0aHJvdWdoIHRoZSBmb3JtRGF0YSBzZXJpYWxpemF0aW9uIGVycm9yIGlmIHdlIGhhdmUgb25lIHNvIHdlIGNhblxuICAgICAgLy8gcmVuZGVyIGF0IHRoZSByaWdodCBlcnJvciBib3VuZGFyeSBhZnRlciB3ZSBtYXRjaCByb3V0ZXNcbiAgICAgIHBlbmRpbmdFcnJvcjogZXJyb3IsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICByZXBsYWNlOiBvcHRzICYmIG9wdHMucmVwbGFjZVxuICAgIH0pO1xuICB9IC8vIFJldmFsaWRhdGUgYWxsIGN1cnJlbnQgbG9hZGVycy4gIElmIGEgbmF2aWdhdGlvbiBpcyBpbiBwcm9ncmVzcyBvciBpZiB0aGlzXG4gIC8vIGlzIGludGVycnVwdGVkIGJ5IGEgbmF2aWdhdGlvbiwgYWxsb3cgdGhpcyB0byBcInN1Y2NlZWRcIiBieSBjYWxsaW5nIGFsbFxuICAvLyBsb2FkZXJzIGR1cmluZyB0aGUgbmV4dCBsb2FkZXIgcm91bmRcblxuXG4gIGZ1bmN0aW9uIHJldmFsaWRhdGUoKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICByZXZhbGlkYXRpb246IFwibG9hZGluZ1wiXG4gICAgfSk7IC8vIElmIHdlJ3JlIGN1cnJlbnRseSBzdWJtaXR0aW5nIGFuIGFjdGlvbiwgd2UgZG9uJ3QgbmVlZCB0byBzdGFydCBhIG5ld1xuICAgIC8vIG5hdmlnYXRpb24sIHdlJ2xsIGp1c3QgbGV0IHRoZSBmb2xsb3cgdXAgbG9hZGVyIGV4ZWN1dGlvbiBjYWxsIGFsbCBsb2FkZXJzXG5cbiAgICBpZiAoc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJzdWJtaXR0aW5nXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlJ3JlIGN1cnJlbnRseSBpbiBhbiBpZGxlIHN0YXRlLCBzdGFydCBhIG5ldyBuYXZpZ2F0aW9uIGZvciB0aGUgY3VycmVudFxuICAgIC8vIGFjdGlvbi9sb2NhdGlvbiBhbmQgbWFyayBpdCBhcyB1bmludGVycnVwdGVkLCB3aGljaCB3aWxsIHNraXAgdGhlIGhpc3RvcnlcbiAgICAvLyB1cGRhdGUgaW4gY29tcGxldGVOYXZpZ2F0aW9uXG5cblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKHN0YXRlLmhpc3RvcnlBY3Rpb24sIHN0YXRlLmxvY2F0aW9uLCB7XG4gICAgICAgIHN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBPdGhlcndpc2UsIGlmIHdlJ3JlIGN1cnJlbnRseSBpbiBhIGxvYWRpbmcgc3RhdGUsIGp1c3Qgc3RhcnQgYSBuZXdcbiAgICAvLyBuYXZpZ2F0aW9uIHRvIHRoZSBuYXZpZ2F0aW9uLmxvY2F0aW9uIGJ1dCBkbyBub3QgdHJpZ2dlciBhbiB1bmludGVycnVwdGVkXG4gICAgLy8gcmV2YWxpZGF0aW9uIHNvIHRoYXQgaGlzdG9yeSBjb3JyZWN0bHkgdXBkYXRlcyBvbmNlIHRoZSBuYXZpZ2F0aW9uIGNvbXBsZXRlc1xuXG5cbiAgICBzdGFydE5hdmlnYXRpb24ocGVuZGluZ0FjdGlvbiB8fCBzdGF0ZS5oaXN0b3J5QWN0aW9uLCBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICBvdmVycmlkZU5hdmlnYXRpb246IHN0YXRlLm5hdmlnYXRpb25cbiAgICB9KTtcbiAgfSAvLyBTdGFydCBhIG5hdmlnYXRpb24gdG8gdGhlIGdpdmVuIGFjdGlvbi9sb2NhdGlvbi4gIENhbiBvcHRpb25hbGx5IHByb3ZpZGUgYVxuICAvLyBvdmVycmlkZU5hdmlnYXRpb24gd2hpY2ggd2lsbCBvdmVycmlkZSB0aGUgbm9ybWFsTG9hZCBpbiB0aGUgY2FzZSBvZiBhIHJlZGlyZWN0XG4gIC8vIG5hdmlnYXRpb25cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbiwgb3B0cykge1xuICAgIC8vIEFib3J0IGFueSBpbi1wcm9ncmVzcyBuYXZpZ2F0aW9ucyBhbmQgc3RhcnQgYSBuZXcgb25lLiBVbnNldCBhbnkgb25nb2luZ1xuICAgIC8vIHVuaW50ZXJydXB0ZWQgcmV2YWxpZGF0aW9ucyB1bmxlc3MgdG9sZCBvdGhlcndpc2UsIHNpbmNlIHdlIHdhbnQgdGhpc1xuICAgIC8vIG5ldyBuYXZpZ2F0aW9uIHRvIHVwZGF0ZSBoaXN0b3J5IG5vcm1hbGx5XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgcGVuZGluZ0FjdGlvbiA9IGhpc3RvcnlBY3Rpb247XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gKG9wdHMgJiYgb3B0cy5zdGFydFVuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pID09PSB0cnVlOyAvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBldmVyeSB0aW1lIHdlIHN0YXJ0IGEgbmV3IG5hdmlnYXRpb24sXG4gICAgLy8gYW5kIHRyYWNrIHdoZXRoZXIgd2Ugc2hvdWxkIHJlc2V0IHNjcm9sbCBvbiBjb21wbGV0aW9uXG5cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IGxvYWRpbmdOYXZpZ2F0aW9uID0gb3B0cyAmJiBvcHRzLm92ZXJyaWRlTmF2aWdhdGlvbjtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBsb2NhdGlvbiwgaW5pdC5iYXNlbmFtZSk7IC8vIFNob3J0IGNpcmN1aXQgd2l0aCBhIDQwNCBvbiB0aGUgcm9vdCBlcnJvciBib3VuZGFyeSBpZiB3ZSBtYXRjaCBub3RoaW5nXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXNUb1VzZSk7IC8vIENhbmNlbCBhbGwgcGVuZGluZyBkZWZlcnJlZCBvbiA0MDRzIHNpbmNlIHdlIGRvbid0IGtlZXAgYW55IHJvdXRlc1xuXG4gICAgICBjYW5jZWxBY3RpdmVEZWZlcnJlZHMoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFNob3J0IGNpcmN1aXQgaWYgaXQncyBvbmx5IGEgaGFzaCBjaGFuZ2UgYW5kIG5vdCBhIG11dGF0aW9uIHN1Ym1pc3Npb25cbiAgICAvLyBGb3IgZXhhbXBsZSwgb24gL3BhZ2UjaGFzaCBhbmQgc3VibWl0IGEgPEZvcm0gbWV0aG9kPVwicG9zdFwiPiB3aGljaCB3aWxsXG4gICAgLy8gZGVmYXVsdCB0byBhIG5hdmlnYXRpb24gdG8gL3BhZ2VcblxuXG4gICAgaWYgKGlzSGFzaENoYW5nZU9ubHkoc3RhdGUubG9jYXRpb24sIGxvY2F0aW9uKSAmJiAhKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSkge1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGEgY29udHJvbGxlci9SZXF1ZXN0IGZvciB0aGlzIG5hdmlnYXRpb25cblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCByZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBsb2NhdGlvbiwgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbCwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24pO1xuICAgIGxldCBwZW5kaW5nQWN0aW9uRGF0YTtcbiAgICBsZXQgcGVuZGluZ0Vycm9yO1xuXG4gICAgaWYgKG9wdHMgJiYgb3B0cy5wZW5kaW5nRXJyb3IpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwZW5kaW5nRXJyb3IsIGl0IG1lYW5zIHRoZSB1c2VyIGF0dGVtcHRlZCBhIEdFVCBzdWJtaXNzaW9uXG4gICAgICAvLyB3aXRoIGJpbmFyeSBGb3JtRGF0YSBzbyBhc3NpZ24gaGVyZSBhbmQgc2tpcCB0byBoYW5kbGVMb2FkZXJzLiAgVGhhdFxuICAgICAgLy8gd2F5IHdlIGhhbmRsZSBjYWxsaW5nIGxvYWRlcnMgYWJvdmUgdGhlIGJvdW5kYXJ5IGV0Yy4gIEl0J3Mgbm90IHJlYWxseVxuICAgICAgLy8gZGlmZmVyZW50IGZyb20gYW4gYWN0aW9uRXJyb3IgaW4gdGhhdCBzZW5zZS5cbiAgICAgIHBlbmRpbmdFcnJvciA9IHtcbiAgICAgICAgW2ZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcykucm91dGUuaWRdOiBvcHRzLnBlbmRpbmdFcnJvclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICAvLyBDYWxsIGFjdGlvbiBpZiB3ZSByZWNlaXZlZCBhbiBhY3Rpb24gc3VibWlzc2lvblxuICAgICAgbGV0IGFjdGlvbk91dHB1dCA9IGF3YWl0IGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgb3B0cy5zdWJtaXNzaW9uLCBtYXRjaGVzLCB7XG4gICAgICAgIHJlcGxhY2U6IG9wdHMucmVwbGFjZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3Rpb25PdXRwdXQuc2hvcnRDaXJjdWl0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nQWN0aW9uRGF0YSA9IGFjdGlvbk91dHB1dC5wZW5kaW5nQWN0aW9uRGF0YTtcbiAgICAgIHBlbmRpbmdFcnJvciA9IGFjdGlvbk91dHB1dC5wZW5kaW5nQWN0aW9uRXJyb3I7XG5cbiAgICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGxvY2F0aW9uXG4gICAgICB9LCBvcHRzLnN1Ym1pc3Npb24pO1xuXG4gICAgICBsb2FkaW5nTmF2aWdhdGlvbiA9IG5hdmlnYXRpb247IC8vIENyZWF0ZSBhIEdFVCByZXF1ZXN0IGZvciB0aGUgbG9hZGVyc1xuXG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdC51cmwsIHtcbiAgICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbFxuICAgICAgfSk7XG4gICAgfSAvLyBDYWxsIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIHNob3J0Q2lyY3VpdGVkLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBhd2FpdCBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBsb2FkaW5nTmF2aWdhdGlvbiwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24sIG9wdHMgJiYgb3B0cy5mZXRjaGVyU3VibWlzc2lvbiwgb3B0cyAmJiBvcHRzLnJlcGxhY2UsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpO1xuXG4gICAgaWYgKHNob3J0Q2lyY3VpdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDbGVhbiB1cCBub3cgdGhhdCB0aGUgYWN0aW9uL2xvYWRlcnMgaGF2ZSBjb21wbGV0ZWQuICBEb24ndCBjbGVhbiB1cCBpZlxuICAgIC8vIHdlIHNob3J0IGNpcmN1aXRlZCBiZWNhdXNlIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciB3aWxsIGhhdmUgYWxyZWFkeVxuICAgIC8vIGJlZW4gYXNzaWduZWQgdG8gYSBuZXcgY29udHJvbGxlciBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgX2V4dGVuZHMoe1xuICAgICAgbWF0Y2hlc1xuICAgIH0sIHBlbmRpbmdBY3Rpb25EYXRhID8ge1xuICAgICAgYWN0aW9uRGF0YTogcGVuZGluZ0FjdGlvbkRhdGFcbiAgICB9IDoge30sIHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9KSk7XG4gIH0gLy8gQ2FsbCB0aGUgYWN0aW9uIG1hdGNoZWQgYnkgdGhlIGxlYWYgcm91dGUgZm9yIHRoaXMgbmF2aWdhdGlvbiBhbmQgaGFuZGxlXG4gIC8vIHJlZGlyZWN0cy9lcnJvcnNcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgc3VibWlzc2lvbiwgbWF0Y2hlcywgb3B0cykge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7IC8vIFB1dCB1cyBpbiBhIHN1Ym1pdHRpbmcgc3RhdGVcblxuICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwic3VibWl0dGluZ1wiLFxuICAgICAgbG9jYXRpb25cbiAgICB9LCBzdWJtaXNzaW9uKTtcblxuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hdmlnYXRpb25cbiAgICB9KTsgLy8gQ2FsbCBvdXIgYWN0aW9uIGFuZCBnZXQgdGhlIHJlc3VsdFxuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgYWN0aW9uTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG5cbiAgICBpZiAoIWFjdGlvbk1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhYWN0aW9uTWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIHJlcXVlc3QsIGFjdGlvbk1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCByZXBsYWNlO1xuXG4gICAgICBpZiAob3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlID0gb3B0cy5yZXBsYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGlkbid0IGV4cGxpY2l0eSBpbmRpY2F0ZSByZXBsYWNlIGJlaGF2aW9yLCByZXBsYWNlIGlmXG4gICAgICAgIC8vIHdlIHJlZGlyZWN0ZWQgdG8gdGhlIGV4YWN0IHNhbWUgbG9jYXRpb24gd2UncmUgY3VycmVudGx5IGF0IHRvIGF2b2lkXG4gICAgICAgIC8vIGRvdWJsZSBiYWNrLWJ1dHRvbnNcbiAgICAgICAgcmVwbGFjZSA9IHJlc3VsdC5sb2NhdGlvbiA9PT0gc3RhdGUubG9jYXRpb24ucGF0aG5hbWUgKyBzdGF0ZS5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZXN1bHQsIHtcbiAgICAgICAgc3VibWlzc2lvbixcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTdG9yZSBvZmYgdGhlIHBlbmRpbmcgZXJyb3IgLSB3ZSB1c2UgaXQgdG8gZGV0ZXJtaW5lIHdoaWNoIGxvYWRlcnNcbiAgICAgIC8vIHRvIGNhbGwgYW5kIHdpbGwgY29tbWl0IGl0IHdoZW4gd2UgY29tcGxldGUgdGhlIG5hdmlnYXRpb25cbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBhY3Rpb25NYXRjaC5yb3V0ZS5pZCk7IC8vIEJ5IGRlZmF1bHQsIGFsbCBzdWJtaXNzaW9ucyBhcmUgUkVQTEFDRSBuYXZpZ2F0aW9ucywgYnV0IGlmIHRoZVxuICAgICAgLy8gYWN0aW9uIHRocmV3IGFuIGVycm9yIHRoYXQnbGwgYmUgcmVuZGVyZWQgaW4gYW4gZXJyb3JFbGVtZW50LCB3ZSBmYWxsXG4gICAgICAvLyBiYWNrIHRvIFBVU0ggc28gdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgYmFjayB0b1xuICAgICAgLy8gdGhlIHByZS1zdWJtaXNzaW9uIGZvcm0gbG9jYXRpb24gdG8gdHJ5IGFnYWluXG5cbiAgICAgIGlmICgob3B0cyAmJiBvcHRzLnJlcGxhY2UpICE9PSB0cnVlKSB7XG4gICAgICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gU2VuZCBiYWNrIGFuIGVtcHR5IG9iamVjdCB3ZSBjYW4gdXNlIHRvIGNsZWFyIG91dCBhbnkgcHJpb3IgYWN0aW9uRGF0YVxuICAgICAgICBwZW5kaW5nQWN0aW9uRGF0YToge30sXG4gICAgICAgIHBlbmRpbmdBY3Rpb25FcnJvcjoge1xuICAgICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhOiB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBDYWxsIGFsbCBhcHBsaWNhYmxlIGxvYWRlcnMgZm9yIHRoZSBnaXZlbiBtYXRjaGVzLCBoYW5kbGluZyByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgZXRjLlxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9hZGVycyhyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgb3ZlcnJpZGVOYXZpZ2F0aW9uLCBzdWJtaXNzaW9uLCBmZXRjaGVyU3VibWlzc2lvbiwgcmVwbGFjZSwgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvcikge1xuICAgIC8vIEZpZ3VyZSBvdXQgdGhlIHJpZ2h0IG5hdmlnYXRpb24gd2Ugd2FudCB0byB1c2UgZm9yIGRhdGEgbG9hZGluZ1xuICAgIGxldCBsb2FkaW5nTmF2aWdhdGlvbiA9IG92ZXJyaWRlTmF2aWdhdGlvbjtcblxuICAgIGlmICghbG9hZGluZ05hdmlnYXRpb24pIHtcbiAgICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZFxuICAgICAgfSwgc3VibWlzc2lvbik7XG5cbiAgICAgIGxvYWRpbmdOYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgICB9IC8vIElmIHRoaXMgd2FzIGEgcmVkaXJlY3QgZnJvbSBhbiBhY3Rpb24gd2UgZG9uJ3QgaGF2ZSBhIFwic3VibWlzc2lvblwiIGJ1dFxuICAgIC8vIHdlIGhhdmUgaXQgb24gdGhlIGxvYWRpbmcgbmF2aWdhdGlvbiBzbyB1c2UgdGhhdCBpZiBhdmFpbGFibGVcblxuXG4gICAgbGV0IGFjdGl2ZVN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uIHx8IGZldGNoZXJTdWJtaXNzaW9uID8gc3VibWlzc2lvbiB8fCBmZXRjaGVyU3VibWlzc2lvbiA6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1NZXRob2QgJiYgbG9hZGluZ05hdmlnYXRpb24uZm9ybUFjdGlvbiAmJiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRGF0YSAmJiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRW5jVHlwZSA/IHtcbiAgICAgIGZvcm1NZXRob2Q6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtQWN0aW9uLFxuICAgICAgZm9ybURhdGE6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1EYXRhLFxuICAgICAgZm9ybUVuY1R5cGU6IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1FbmNUeXBlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgW21hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzXSA9IGdldE1hdGNoZXNUb0xvYWQoaW5pdC5oaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgYWN0aXZlU3VibWlzc2lvbiwgbG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIGZldGNoTG9hZE1hdGNoZXMsIHJvdXRlc1RvVXNlLCBpbml0LmJhc2VuYW1lLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKTsgLy8gQ2FuY2VsIHBlbmRpbmcgZGVmZXJyZWRzIGZvciBuby1sb25nZXItbWF0Y2hlZCByb3V0ZXMgb3Igcm91dGVzIHdlJ3JlXG4gICAgLy8gYWJvdXQgdG8gcmVsb2FkLiAgTm90ZSB0aGF0IGlmIHRoaXMgaXMgYW4gYWN0aW9uIHJlbG9hZCB3ZSB3b3VsZCBoYXZlXG4gICAgLy8gYWxyZWFkeSBjYW5jZWxsZWQgYWxsIHBlbmRpbmcgZGVmZXJyZWRzIHNvIHRoaXMgd291bGQgYmUgYSBuby1vcFxuXG4gICAgY2FuY2VsQWN0aXZlRGVmZXJyZWRzKHJvdXRlSWQgPT4gIShtYXRjaGVzICYmIG1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpKSB8fCBtYXRjaGVzVG9Mb2FkICYmIG1hdGNoZXNUb0xvYWQuc29tZShtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpKTsgLy8gU2hvcnQgY2lyY3VpdCBpZiB3ZSBoYXZlIG5vIGxvYWRlcnMgdG8gcnVuXG5cbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDAgJiYgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIF9leHRlbmRzKHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIC8vIENvbW1pdCBwZW5kaW5nIGVycm9yIGlmIHdlJ3JlIHNob3J0IGNpcmN1aXRpbmdcbiAgICAgICAgZXJyb3JzOiBwZW5kaW5nRXJyb3IgfHwgbnVsbFxuICAgICAgfSwgcGVuZGluZ0FjdGlvbkRhdGEgPyB7XG4gICAgICAgIGFjdGlvbkRhdGE6IHBlbmRpbmdBY3Rpb25EYXRhXG4gICAgICB9IDoge30pKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdGhpcyBpcyBhbiB1bmludGVycnVwdGVkIHJldmFsaWRhdGlvbiwgd2UgcmVtYWluIGluIG91ciBjdXJyZW50IGlkbGVcbiAgICAvLyBzdGF0ZS4gIElmIG5vdCwgd2UgbmVlZCB0byBzd2l0Y2ggdG8gb3VyIGxvYWRpbmcgc3RhdGUgYW5kIGxvYWQgZGF0YSxcbiAgICAvLyBwcmVzZXJ2aW5nIGFueSBuZXcgYWN0aW9uIGRhdGEgb3IgZXhpc3RpbmcgYWN0aW9uIGRhdGEgKGluIHRoZSBjYXNlIG9mXG4gICAgLy8gYSByZXZhbGlkYXRpb24gaW50ZXJydXB0aW5nIGFuIGFjdGlvblJlbG9hZClcblxuXG4gICAgaWYgKCFpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4ge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChyZi5rZXkpO1xuICAgICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IHtcbiAgICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgZGF0YTogZmV0Y2hlciAmJiBmZXRjaGVyLmRhdGEsXG4gICAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHJmLmtleSwgcmV2YWxpZGF0aW5nRmV0Y2hlcik7XG4gICAgICB9KTtcbiAgICAgIGxldCBhY3Rpb25EYXRhID0gcGVuZGluZ0FjdGlvbkRhdGEgfHwgc3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgbmF2aWdhdGlvbjogbG9hZGluZ05hdmlnYXRpb25cbiAgICAgIH0sIGFjdGlvbkRhdGEgPyBPYmplY3Qua2V5cyhhY3Rpb25EYXRhKS5sZW5ndGggPT09IDAgPyB7XG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGxcbiAgICAgIH0gOiB7XG4gICAgICAgIGFjdGlvbkRhdGFcbiAgICAgIH0gOiB7fSwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMCA/IHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9IDoge30pKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA9ICsraW5jcmVtZW50aW5nTG9hZElkO1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5zZXQocmYua2V5LCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIpKTtcbiAgICBsZXQge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUubWF0Y2hlcywgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIHJlcXVlc3QpO1xuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gQ2xlYW4gdXAgX2FmdGVyXyBsb2FkZXJzIGhhdmUgY29tcGxldGVkLiAgRG9uJ3QgY2xlYW4gdXAgaWYgd2Ugc2hvcnRcbiAgICAvLyBjaXJjdWl0ZWQgYmVjYXVzZSBmZXRjaENvbnRyb2xsZXJzIHdvdWxkIGhhdmUgYmVlbiBhYm9ydGVkIGFuZFxuICAgIC8vIHJlYXNzaWduZWQgdG8gbmV3IGNvbnRyb2xsZXJzIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXG5cblxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUocmYua2V5KSk7IC8vIElmIGFueSBsb2FkZXJzIHJldHVybmVkIGEgcmVkaXJlY3QgUmVzcG9uc2UsIHN0YXJ0IGEgbmV3IFJFUExBQ0UgbmF2aWdhdGlvblxuXG4gICAgbGV0IHJlZGlyZWN0ID0gZmluZFJlZGlyZWN0KHJlc3VsdHMpO1xuXG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QsIHtcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG5cblxuICAgIGxldCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSA9IHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBsb2FkZXJSZXN1bHRzLCBwZW5kaW5nRXJyb3IsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCBmZXRjaGVyUmVzdWx0cywgYWN0aXZlRGVmZXJyZWRzKTsgLy8gV2lyZSB1cCBzdWJzY3JpYmVycyB0byB1cGRhdGUgbG9hZGVyRGF0YSBhcyBwcm9taXNlcyBzZXR0bGVcblxuICAgIGFjdGl2ZURlZmVycmVkcy5mb3JFYWNoKChkZWZlcnJlZERhdGEsIHJvdXRlSWQpID0+IHtcbiAgICAgIGRlZmVycmVkRGF0YS5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgIC8vIE5vdGU6IE5vIG5lZWQgdG8gdXBkYXRlU3RhdGUgaGVyZSBzaW5jZSB0aGUgVHJhY2tlZFByb21pc2Ugb25cbiAgICAgICAgLy8gbG9hZGVyRGF0YSBpcyBzdGFibGUgYWNyb3NzIHJlc29sdmUvcmVqZWN0XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIGluc3RhbmNlIGlmIHdlIHdlcmUgYWJvcnRlZCBvciBpZiBwcm9taXNlcyBoYXZlIHNldHRsZWRcbiAgICAgICAgaWYgKGFib3J0ZWQgfHwgZGVmZXJyZWREYXRhLmRvbmUpIHtcbiAgICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtYXJrRmV0Y2hSZWRpcmVjdHNEb25lKCk7XG4gICAgbGV0IGRpZEFib3J0RmV0Y2hMb2FkcyA9IGFib3J0U3RhbGVGZXRjaExvYWRzKHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0sIGRpZEFib3J0RmV0Y2hMb2FkcyB8fCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwID8ge1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSA6IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZldGNoZXIoa2V5KSB7XG4gICAgcmV0dXJuIHN0YXRlLmZldGNoZXJzLmdldChrZXkpIHx8IElETEVfRkVUQ0hFUjtcbiAgfSAvLyBUcmlnZ2VyIGEgZmV0Y2hlciBsb2FkL3N1Ym1pdCBmb3IgdGhlIGdpdmVuIGZldGNoZXIga2V5XG5cblxuICBmdW5jdGlvbiBmZXRjaChrZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpIHtcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJvdXRlci5mZXRjaCgpIHdhcyBjYWxsZWQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLCBidXQgaXQgc2hvdWxkbid0IGJlLiBcIiArIFwiWW91IGFyZSBsaWtlbHkgY2FsbGluZyBhIHVzZUZldGNoZXIoKSBtZXRob2QgaW4gdGhlIGJvZHkgb2YgeW91ciBjb21wb25lbnQuIFwiICsgXCJUcnkgbW92aW5nIGl0IHRvIGEgdXNlRWZmZWN0IG9yIGEgY2FsbGJhY2suXCIpO1xuICAgIH1cblxuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICBsZXQgcm91dGVzVG9Vc2UgPSBpbkZsaWdodERhdGFSb3V0ZXMgfHwgZGF0YVJvdXRlcztcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBocmVmLCBpbml0LmJhc2VuYW1lKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGhyZWZcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb25cbiAgICB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKGhyZWYsIGZ1dHVyZSwgb3B0cywgdHJ1ZSk7XG4gICAgbGV0IG1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgcGF0aCk7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IChvcHRzICYmIG9wdHMucHJldmVudFNjcm9sbFJlc2V0KSA9PT0gdHJ1ZTtcblxuICAgIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgaGFuZGxlRmV0Y2hlckFjdGlvbihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFN0b3JlIG9mZiB0aGUgbWF0Y2ggc28gd2UgY2FuIGNhbGwgaXQncyBzaG91bGRSZXZhbGlkYXRlIG9uIHN1YnNlcXVlbnRcbiAgICAvLyByZXZhbGlkYXRpb25zXG5cblxuICAgIGZldGNoTG9hZE1hdGNoZXMuc2V0KGtleSwge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHBhdGhcbiAgICB9KTtcbiAgICBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pO1xuICB9IC8vIENhbGwgdGhlIGFjdGlvbiBmb3IgdGhlIG1hdGNoZWQgZmV0Y2hlci5zdWJtaXQoKSwgYW5kIHRoZW4gaGFuZGxlIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBhbmQgcmV2YWxpZGF0aW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCBzdWJtaXNzaW9uKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuXG4gICAgaWYgKCFtYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIW1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogcGF0aCxcbiAgICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgICAgfSk7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBzdWJtaXR0aW5nIHN0YXRlXG5cblxuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcblxuICAgIGxldCBmZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwic3VibWl0dGluZ1wiXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pOyAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBmZXRjaGVyXG5cbiAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCBmZXRjaFJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIHBhdGgsIGFib3J0Q29udHJvbGxlci5zaWduYWwsIHN1Ym1pc3Npb24pO1xuICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KGtleSwgYWJvcnRDb250cm9sbGVyKTtcbiAgICBsZXQgYWN0aW9uUmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIGZldGNoUmVxdWVzdCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgcm91dGVyLmJhc2VuYW1lKTtcblxuICAgIGlmIChmZXRjaFJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIC8vIFdlIGNhbiBkZWxldGUgdGhpcyBzbyBsb25nIGFzIHdlIHdlcmVuJ3QgYWJvcnRlZCBieSBvdSBvdXIgb3duIGZldGNoZXJcbiAgICAgIC8vIHJlLXN1Ym1pdCB3aGljaCB3b3VsZCBoYXZlIHB1dCBfbmV3XyBjb250cm9sbGVyIGlzIGluIGZldGNoQ29udHJvbGxlcnNcbiAgICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpID09PSBhYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuXG4gICAgICBsZXQgbG9hZGluZ0ZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIlxuICAgICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZGluZ0ZldGNoZXIpO1xuICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCBhY3Rpb25SZXN1bHQsIHtcbiAgICAgICAgc3VibWlzc2lvbixcbiAgICAgICAgaXNGZXRjaEFjdGlvblJlZGlyZWN0OiB0cnVlXG4gICAgICB9KTtcbiAgICB9IC8vIFByb2Nlc3MgYW55IG5vbi1yZWRpcmVjdCBlcnJvcnMgdGhyb3duXG5cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGFjdGlvblJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfSAvLyBTdGFydCB0aGUgZGF0YSBsb2FkIGZvciBjdXJyZW50IG1hdGNoZXMsIG9yIHRoZSBuZXh0IGxvY2F0aW9uIGlmIHdlJ3JlXG4gICAgLy8gaW4gdGhlIG1pZGRsZSBvZiBhIG5hdmlnYXRpb25cblxuXG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24gfHwgc3RhdGUubG9jYXRpb247XG4gICAgbGV0IHJldmFsaWRhdGlvblJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIG5leHRMb2NhdGlvbiwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IG1hdGNoZXMgPSBzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIiA/IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCBpbml0LmJhc2VuYW1lKSA6IHN0YXRlLm1hdGNoZXM7XG4gICAgaW52YXJpYW50KG1hdGNoZXMsIFwiRGlkbid0IGZpbmQgYW55IG1hdGNoZXMgYWZ0ZXIgZmV0Y2hlciBhY3Rpb25cIik7XG4gICAgbGV0IGxvYWRJZCA9ICsraW5jcmVtZW50aW5nTG9hZElkO1xuICAgIGZldGNoUmVsb2FkSWRzLnNldChrZXksIGxvYWRJZCk7XG5cbiAgICBsZXQgbG9hZEZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBkYXRhOiBhY3Rpb25SZXN1bHQuZGF0YVxuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBsb2FkRmV0Y2hlcik7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIHN1Ym1pc3Npb24sIG5leHRMb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hMb2FkTWF0Y2hlcywgcm91dGVzVG9Vc2UsIGluaXQuYmFzZW5hbWUsIHtcbiAgICAgIFttYXRjaC5yb3V0ZS5pZF06IGFjdGlvblJlc3VsdC5kYXRhXG4gICAgfSwgdW5kZWZpbmVkIC8vIE5vIG5lZWQgdG8gc2VuZCB0aHJvdWdoIGVycm9ycyBzaW5jZSB3ZSBzaG9ydCBjaXJjdWl0IGFib3ZlXG4gICAgKTsgLy8gUHV0IGFsbCByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgaW50byB0aGUgbG9hZGluZyBzdGF0ZSwgZXhjZXB0IGZvciB0aGVcbiAgICAvLyBjdXJyZW50IGZldGNoZXIgd2hpY2ggd2Ugd2FudCB0byBrZWVwIGluIGl0J3MgY3VycmVudCBsb2FkaW5nIHN0YXRlIHdoaWNoXG4gICAgLy8gY29udGFpbnMgaXQncyBhY3Rpb24gc3VibWlzc2lvbiBpbmZvICsgYWN0aW9uIGRhdGFcblxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZpbHRlcihyZiA9PiByZi5rZXkgIT09IGtleSkuZm9yRWFjaChyZiA9PiB7XG4gICAgICBsZXQgc3RhbGVLZXkgPSByZi5rZXk7XG4gICAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KHN0YWxlS2V5KTtcbiAgICAgIGxldCByZXZhbGlkYXRpbmdGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciAmJiBleGlzdGluZ0ZldGNoZXIuZGF0YSxcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9O1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHN0YWxlS2V5LCByZXZhbGlkYXRpbmdGZXRjaGVyKTtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KHN0YWxlS2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIH0pO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICAgIGxldCB7XG4gICAgICByZXN1bHRzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfSA9IGF3YWl0IGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShzdGF0ZS5tYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVycywgcmV2YWxpZGF0aW9uUmVxdWVzdCk7XG5cbiAgICBpZiAoYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHIgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUoci5rZXkpKTtcbiAgICBsZXQgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QocmVzdWx0cyk7XG5cbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QpO1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIHN0YXRlLm1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIHVuZGVmaW5lZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpO1xuICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgIGRhdGE6IGFjdGlvblJlc3VsdC5kYXRhLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH07XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2Fkcyhsb2FkSWQpOyAvLyBJZiB3ZSBhcmUgY3VycmVudGx5IGluIGEgbmF2aWdhdGlvbiBsb2FkaW5nIHN0YXRlIGFuZCB0aGlzIGZldGNoZXIgaXNcbiAgICAvLyBtb3JlIHJlY2VudCB0aGFuIHRoZSBuYXZpZ2F0aW9uLCB3ZSB3YW50IHRoZSBuZXdlciBkYXRhIHNvIGFib3J0IHRoZVxuICAgIC8vIG5hdmlnYXRpb24gYW5kIGNvbXBsZXRlIGl0IHdpdGggdGhlIGZldGNoZXIgZGF0YVxuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGxvYWRJZCA+IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKSB7XG4gICAgICBpbnZhcmlhbnQocGVuZGluZ0FjdGlvbiwgXCJFeHBlY3RlZCBwZW5kaW5nIGFjdGlvblwiKTtcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXBkYXRlIHdpdGggdGhlIGZldGNoZXIgZGF0YSwgcHJlc2VydmluZyBhbnkgZXhpc3RpbmdcbiAgICAgIC8vIGxvYWRlckRhdGEgZm9yIGxvYWRlcnMgdGhhdCBkaWQgbm90IG5lZWQgdG8gcmVsb2FkLiAgV2UgaGF2ZSB0b1xuICAgICAgLy8gbWFudWFsbHkgbWVyZ2UgaGVyZSBzaW5jZSB3ZSBhcmVuJ3QgZ29pbmcgdGhyb3VnaCBjb21wbGV0ZU5hdmlnYXRpb25cbiAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBsb2FkZXJEYXRhOiBtZXJnZUxvYWRlckRhdGEoc3RhdGUubG9hZGVyRGF0YSwgbG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKVxuICAgICAgfSwgZGlkQWJvcnRGZXRjaExvYWRzID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSkpO1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSAvLyBDYWxsIHRoZSBtYXRjaGVkIGxvYWRlciBmb3IgZmV0Y2hlci5sb2FkKCksIGhhbmRsaW5nIHJlZGlyZWN0cywgZXJyb3JzLCBldGMuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pIHtcbiAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7IC8vIFB1dCB0aGlzIGZldGNoZXIgaW50byBpdCdzIGxvYWRpbmcgc3RhdGVcblxuICAgIGxldCBsb2FkaW5nRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRpbmdGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTsgLy8gQ2FsbCB0aGUgbG9hZGVyIGZvciB0aGlzIGZldGNoZXIgcm91dGUgbWF0Y2hcblxuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgcGF0aCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgZmV0Y2hSZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSk7IC8vIERlZmVycmVkIGlzbid0IHN1cHBvcnRlZCBmb3IgZmV0Y2hlciBsb2FkcywgYXdhaXQgZXZlcnl0aGluZyBhbmQgdHJlYXQgaXRcbiAgICAvLyBhcyBhIG5vcm1hbCBsb2FkLiAgcmVzb2x2ZURlZmVycmVkRGF0YSB3aWxsIHJldHVybiB1bmRlZmluZWQgaWYgdGhpc1xuICAgIC8vIGZldGNoZXIgZ2V0cyBhYm9ydGVkLCBzbyB3ZSBqdXN0IGxlYXZlIHJlc3VsdCB1bnRvdWNoZWQgYW5kIHNob3J0IGNpcmN1aXRcbiAgICAvLyBiZWxvdyBpZiB0aGF0IGhhcHBlbnNcblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdCA9IChhd2FpdCByZXNvbHZlRGVmZXJyZWREYXRhKHJlc3VsdCwgZmV0Y2hSZXF1ZXN0LnNpZ25hbCwgdHJ1ZSkpIHx8IHJlc3VsdDtcbiAgICB9IC8vIFdlIGNhbiBkZWxldGUgdGhpcyBzbyBsb25nIGFzIHdlIHdlcmVuJ3QgYWJvcnRlZCBieSBvdSBvdXIgb3duIGZldGNoZXJcbiAgICAvLyByZS1sb2FkIHdoaWNoIHdvdWxkIGhhdmUgcHV0IF9uZXdfIGNvbnRyb2xsZXIgaXMgaW4gZmV0Y2hDb250cm9sbGVyc1xuXG5cbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KSA9PT0gYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgIH1cblxuICAgIGlmIChmZXRjaFJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHRoZSBsb2FkZXIgdGhyZXcgYSByZWRpcmVjdCBSZXNwb25zZSwgc3RhcnQgYSBuZXcgUkVQTEFDRSBuYXZpZ2F0aW9uXG5cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZXN1bHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUHJvY2VzcyBhbnkgbm9uLXJlZGlyZWN0IGVycm9ycyB0aHJvd25cblxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7IC8vIFRPRE86IEluIHJlbWl4LCB0aGlzIHdvdWxkIHJlc2V0IHRvIElETEVfTkFWSUdBVElPTiBpZiBpdCB3YXMgYSBjYXRjaCAtXG4gICAgICAvLyBkbyB3ZSBuZWVkIHRvIGJlaGF2ZSBhbnkgZGlmZmVyZW50bHkgd2l0aCBvdXIgbm9uLXJlZGlyZWN0IGVycm9ycz9cbiAgICAgIC8vIFdoYXQgaWYgaXQgd2FzIGEgbm9uLXJlZGlyZWN0IFJlc3BvbnNlP1xuXG4gICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52YXJpYW50KCFpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCksIFwiVW5oYW5kbGVkIGZldGNoZXIgZGVmZXJyZWQgZGF0YVwiKTsgLy8gUHV0IHRoZSBmZXRjaGVyIGJhY2sgaW50byBhbiBpZGxlIHN0YXRlXG5cbiAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9O1xuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBoYW5kbGUgcmVkaXJlY3RzIHJldHVybmVkIGZyb20gYW4gYWN0aW9uIG9yIGxvYWRlci5cbiAgICogTm9ybWFsbHksIGEgcmVkaXJlY3QgXCJyZXBsYWNlc1wiIHRoZSBuYXZpZ2F0aW9uIHRoYXQgdHJpZ2dlcmVkIGl0LiAgU28sIGZvclxuICAgKiBleGFtcGxlOlxuICAgKlxuICAgKiAgLSB1c2VyIGlzIG9uIC9hXG4gICAqICAtIHVzZXIgY2xpY2tzIGEgbGluayB0byAvYlxuICAgKiAgLSBsb2FkZXIgZm9yIC9iIHJlZGlyZWN0cyB0byAvY1xuICAgKlxuICAgKiBJbiBhIG5vbi1KUyBhcHAgdGhlIGJyb3dzZXIgd291bGQgdHJhY2sgdGhlIGluLWZsaWdodCBuYXZpZ2F0aW9uIHRvIC9iIGFuZFxuICAgKiB0aGVuIHJlcGxhY2UgaXQgd2l0aCAvYyB3aGVuIGl0IGVuY291bnRlcmVkIHRoZSByZWRpcmVjdCByZXNwb25zZS4gIEluXG4gICAqIHRoZSBlbmQgaXQgd291bGQgb25seSBldmVyIHVwZGF0ZSB0aGUgVVJMIGJhciB3aXRoIC9jLlxuICAgKlxuICAgKiBJbiBjbGllbnQtc2lkZSByb3V0aW5nIHVzaW5nIHB1c2hTdGF0ZS9yZXBsYWNlU3RhdGUsIHdlIGFpbSB0byBlbXVsYXRlXG4gICAqIHRoaXMgYmVoYXZpb3IgYW5kIHdlIGFsc28gZG8gbm90IHVwZGF0ZSBoaXN0b3J5IHVudGlsIHRoZSBlbmQgb2YgdGhlXG4gICAqIG5hdmlnYXRpb24gKGluY2x1ZGluZyBwcm9jZXNzZWQgcmVkaXJlY3RzKS4gIFRoaXMgbWVhbnMgdGhhdCB3ZSBuZXZlclxuICAgKiBhY3R1YWxseSB0b3VjaCBoaXN0b3J5IHVudGlsIHdlJ3ZlIHByb2Nlc3NlZCByZWRpcmVjdHMsIHNvIHdlIGp1c3QgdXNlXG4gICAqIHRoZSBoaXN0b3J5IGFjdGlvbiBmcm9tIHRoZSBvcmlnaW5hbCBuYXZpZ2F0aW9uIChQVVNIIG9yIFJFUExBQ0UpLlxuICAgKi9cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZWRpcmVjdCwgX3RlbXApIHtcbiAgICB2YXIgX3dpbmRvdztcblxuICAgIGxldCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIGlzRmV0Y2hBY3Rpb25SZWRpcmVjdFxuICAgIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcblxuICAgIGlmIChyZWRpcmVjdC5yZXZhbGlkYXRlKSB7XG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgcmVkaXJlY3RMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLmxvY2F0aW9uLCByZWRpcmVjdC5sb2NhdGlvbiwgLy8gVE9ETzogVGhpcyBjYW4gYmUgcmVtb3ZlZCBvbmNlIHdlIGdldCByaWQgb2YgdXNlVHJhbnNpdGlvbiBpbiBSZW1peCB2MlxuICAgIF9leHRlbmRzKHtcbiAgICAgIF9pc1JlZGlyZWN0OiB0cnVlXG4gICAgfSwgaXNGZXRjaEFjdGlvblJlZGlyZWN0ID8ge1xuICAgICAgX2lzRmV0Y2hBY3Rpb25SZWRpcmVjdDogdHJ1ZVxuICAgIH0gOiB7fSkpO1xuICAgIGludmFyaWFudChyZWRpcmVjdExvY2F0aW9uLCBcIkV4cGVjdGVkIGEgbG9jYXRpb24gb24gdGhlIHJlZGlyZWN0IG5hdmlnYXRpb25cIik7IC8vIENoZWNrIGlmIHRoaXMgYW4gYWJzb2x1dGUgZXh0ZXJuYWwgcmVkaXJlY3QgdGhhdCBnb2VzIHRvIGEgbmV3IG9yaWdpblxuXG4gICAgaWYgKEFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KHJlZGlyZWN0LmxvY2F0aW9uKSAmJiBpc0Jyb3dzZXIgJiYgdHlwZW9mICgoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cubG9jYXRpb24pICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBsZXQgdXJsID0gaW5pdC5oaXN0b3J5LmNyZWF0ZVVSTChyZWRpcmVjdC5sb2NhdGlvbik7XG4gICAgICBsZXQgaXNEaWZmZXJlbnRCYXNlbmFtZSA9IHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBpbml0LmJhc2VuYW1lIHx8IFwiL1wiKSA9PSBudWxsO1xuXG4gICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPT0gdXJsLm9yaWdpbiB8fCBpc0RpZmZlcmVudEJhc2VuYW1lKSB7XG4gICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24ocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gLy8gVGhlcmUncyBubyBuZWVkIHRvIGFib3J0IG9uIHJlZGlyZWN0cywgc2luY2Ugd2UgZG9uJ3QgZGV0ZWN0IHRoZVxuICAgIC8vIHJlZGlyZWN0IHVudGlsIHRoZSBhY3Rpb24vbG9hZGVycyBoYXZlIHNldHRsZWRcblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBsZXQgcmVkaXJlY3RIaXN0b3J5QWN0aW9uID0gcmVwbGFjZSA9PT0gdHJ1ZSA/IEFjdGlvbi5SZXBsYWNlIDogQWN0aW9uLlB1c2g7IC8vIFVzZSB0aGUgaW5jb21pbmcgc3VibWlzc2lvbiBpZiBwcm92aWRlZCwgZmFsbGJhY2sgb24gdGhlIGFjdGl2ZSBvbmUgaW5cbiAgICAvLyBzdGF0ZS5uYXZpZ2F0aW9uXG5cbiAgICBsZXQge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhXG4gICAgfSA9IHN0YXRlLm5hdmlnYXRpb247XG5cbiAgICBpZiAoIXN1Ym1pc3Npb24gJiYgZm9ybU1ldGhvZCAmJiBmb3JtQWN0aW9uICYmIGZvcm1EYXRhICYmIGZvcm1FbmNUeXBlKSB7XG4gICAgICBzdWJtaXNzaW9uID0ge1xuICAgICAgICBmb3JtTWV0aG9kLFxuICAgICAgICBmb3JtQWN0aW9uLFxuICAgICAgICBmb3JtRW5jVHlwZSxcbiAgICAgICAgZm9ybURhdGFcbiAgICAgIH07XG4gICAgfSAvLyBJZiB0aGlzIHdhcyBhIDMwNy8zMDggc3VibWlzc2lvbiB3ZSB3YW50IHRvIHByZXNlcnZlIHRoZSBIVFRQIG1ldGhvZCBhbmRcbiAgICAvLyByZS1zdWJtaXQgdGhlIEdFVC9QT1NUL1BVVC9QQVRDSC9ERUxFVEUgYXMgYSBzdWJtaXNzaW9uIG5hdmlnYXRpb24gdG8gdGhlXG4gICAgLy8gcmVkaXJlY3RlZCBsb2NhdGlvblxuXG5cbiAgICBpZiAocmVkaXJlY3RQcmVzZXJ2ZU1ldGhvZFN0YXR1c0NvZGVzLmhhcyhyZWRpcmVjdC5zdGF0dXMpICYmIHN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICBhd2FpdCBzdGFydE5hdmlnYXRpb24ocmVkaXJlY3RIaXN0b3J5QWN0aW9uLCByZWRpcmVjdExvY2F0aW9uLCB7XG4gICAgICAgIHN1Ym1pc3Npb246IF9leHRlbmRzKHt9LCBzdWJtaXNzaW9uLCB7XG4gICAgICAgICAgZm9ybUFjdGlvbjogcmVkaXJlY3QubG9jYXRpb25cbiAgICAgICAgfSksXG4gICAgICAgIC8vIFByZXNlcnZlIHRoaXMgZmxhZyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0ZldGNoQWN0aW9uUmVkaXJlY3QpIHtcbiAgICAgIC8vIEZvciBhIGZldGNoIGFjdGlvbiByZWRpcmVjdCwgd2Uga2ljayBvZmYgYSBuZXcgbG9hZGluZyBuYXZpZ2F0aW9uXG4gICAgICAvLyB3aXRob3V0IHRoZSBmZXRjaGVyIHN1Ym1pc3Npb24sIGJ1dCB3ZSBzZW5kIGl0IGFsb25nIGZvciBzaG91bGRSZXZhbGlkYXRlXG4gICAgICBhd2FpdCBzdGFydE5hdmlnYXRpb24ocmVkaXJlY3RIaXN0b3J5QWN0aW9uLCByZWRpcmVjdExvY2F0aW9uLCB7XG4gICAgICAgIG92ZXJyaWRlTmF2aWdhdGlvbjoge1xuICAgICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgICBsb2NhdGlvbjogcmVkaXJlY3RMb2NhdGlvbixcbiAgICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICBmZXRjaGVyU3VibWlzc2lvbjogc3VibWlzc2lvbixcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBraWNrIG9mZiBhIG5ldyBsb2FkaW5nIG5hdmlnYXRpb24sIHByZXNlcnZpbmcgdGhlXG4gICAgICAvLyBzdWJtaXNzaW9uIGluZm8gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGlzIG5hdmlnYXRpb25cbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWRpcmVjdExvY2F0aW9uLFxuICAgICAgICAgIGZvcm1NZXRob2Q6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1NZXRob2QgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybUFjdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybURhdGE6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1EYXRhIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFByZXNlcnZlIHRoaXMgZmxhZyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBmZXRjaGVyc1RvTG9hZCwgcmVxdWVzdCkge1xuICAgIC8vIENhbGwgYWxsIG5hdmlnYXRpb24gbG9hZGVycyBhbmQgcmV2YWxpZGF0aW5nIGZldGNoZXIgbG9hZGVycyBpbiBwYXJhbGxlbCxcbiAgICAvLyB0aGVuIHNsaWNlIG9mZiB0aGUgcmVzdWx0cyBpbnRvIHNlcGFyYXRlIGFycmF5cyBzbyB3ZSBjYW4gaGFuZGxlIHRoZW1cbiAgICAvLyBhY2NvcmRpbmdseVxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIHJvdXRlci5iYXNlbmFtZSkpLCAuLi5mZXRjaGVyc1RvTG9hZC5tYXAoZiA9PiB7XG4gICAgICBpZiAoZi5tYXRjaGVzICYmIGYubWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIGYucGF0aCwgcmVxdWVzdC5zaWduYWwpLCBmLm1hdGNoLCBmLm1hdGNoZXMsIG1hbmlmZXN0LCBkZXRlY3RFcnJvckJvdW5kYXJ5LCByb3V0ZXIuYmFzZW5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGVycm9yID0ge1xuICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgICAgICBwYXRobmFtZTogZi5wYXRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfVxuICAgIH0pXSk7XG4gICAgbGV0IGxvYWRlclJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1hdGNoZXNUb0xvYWQubGVuZ3RoKTtcbiAgICBsZXQgZmV0Y2hlclJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKG1hdGNoZXNUb0xvYWQubGVuZ3RoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgcmVxdWVzdC5zaWduYWwsIGZhbHNlLCBzdGF0ZS5sb2FkZXJEYXRhKSwgcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgZmV0Y2hlcnNUb0xvYWQubWFwKGYgPT4gZi5tYXRjaCksIGZldGNoZXJSZXN1bHRzLCByZXF1ZXN0LnNpZ25hbCwgdHJ1ZSldKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpIHtcbiAgICAvLyBFdmVyeSBpbnRlcnJ1cHRpb24gdHJpZ2dlcnMgYSByZXZhbGlkYXRpb25cbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTsgLy8gQ2FuY2VsIHBlbmRpbmcgcm91dGUtbGV2ZWwgZGVmZXJyZWRzIGFuZCBtYXJrIGNhbmNlbGxlZCByb3V0ZXMgZm9yXG4gICAgLy8gcmV2YWxpZGF0aW9uXG5cbiAgICBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5wdXNoKC4uLmNhbmNlbEFjdGl2ZURlZmVycmVkcygpKTsgLy8gQWJvcnQgaW4tZmxpZ2h0IGZldGNoZXIgbG9hZHNcblxuICAgIGZldGNoTG9hZE1hdGNoZXMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkge1xuICAgICAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMucHVzaChrZXkpO1xuICAgICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yKSB7XG4gICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgIGRlbGV0ZUZldGNoZXIoa2V5KTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiBlcnJvclxuICAgICAgfSxcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlRmV0Y2hlcihrZXkpIHtcbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWJvcnRGZXRjaGVyKGtleSkge1xuICAgIGxldCBjb250cm9sbGVyID0gZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KTtcbiAgICBpbnZhcmlhbnQoY29udHJvbGxlciwgXCJFeHBlY3RlZCBmZXRjaCBjb250cm9sbGVyOiBcIiArIGtleSk7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrRmV0Y2hlcnNEb25lKGtleXMpIHtcbiAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgbGV0IGZldGNoZXIgPSBnZXRGZXRjaGVyKGtleSk7XG4gICAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgICAgZGF0YTogZmV0Y2hlci5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpIHtcbiAgICBsZXQgZG9uZUtleXMgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBvZiBmZXRjaFJlZGlyZWN0SWRzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgaW52YXJpYW50KGZldGNoZXIsIFwiRXhwZWN0ZWQgZmV0Y2hlcjogXCIgKyBrZXkpO1xuXG4gICAgICBpZiAoZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgZmV0Y2hSZWRpcmVjdElkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgZG9uZUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtGZXRjaGVyc0RvbmUoZG9uZUtleXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWJvcnRTdGFsZUZldGNoTG9hZHMobGFuZGVkSWQpIHtcbiAgICBsZXQgeWVldGVkS2V5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgW2tleSwgaWRdIG9mIGZldGNoUmVsb2FkSWRzKSB7XG4gICAgICBpZiAoaWQgPCBsYW5kZWRJZCkge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG5cbiAgICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgICAgICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgeWVldGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRmV0Y2hlcnNEb25lKHllZXRlZEtleXMpO1xuICAgIHJldHVybiB5ZWV0ZWRLZXlzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCbG9ja2VyKGtleSwgZm4pIHtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChrZXkpIHx8IElETEVfQkxPQ0tFUjtcblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLmdldChrZXkpICE9PSBmbikge1xuICAgICAgYmxvY2tlckZ1bmN0aW9ucy5zZXQoa2V5LCBmbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVCbG9ja2VyKGtleSkge1xuICAgIHN0YXRlLmJsb2NrZXJzLmRlbGV0ZShrZXkpO1xuICAgIGJsb2NrZXJGdW5jdGlvbnMuZGVsZXRlKGtleSk7XG4gIH0gLy8gVXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgYmxvY2tlcnMsIGVuc3VyaW5nIHZhbGlkIHN0YXRlIHRyYW5zaXRpb25zXG5cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyKGtleSwgbmV3QmxvY2tlcikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSOyAvLyBQb29yIG1hbnMgc3RhdGUgbWFjaGluZSA6KVxuICAgIC8vIGh0dHBzOi8vbWVybWFpZC5saXZlL2VkaXQjcGFrbzplTnFWa2M5T3d6QU14bDhsOG5uakFZckV0RElPSEVCSWd3dktKVFJlR3kzX2xEcElxTzI3azZhd01HMFhjckxsbno4N253ZG9uRVNvZ0tYWEJ1RTc5cnE3NVhaTzMteUhkczBSSlZ1djcwWXJQbFVyQ0VlMkhmck9SUzNydWJxWmZ1aHRwZzVDOXdrNXRaNFZLY1JVcTg4cTlaOFJTMC00OGNFMWlISmtMMHVnYkh1Rkx1czlMNnNwWnk4blg5TVAyQ05kb21WYXBvc3F1M2ZHYXlUOFQ4LWpKUXdoZXBvX1V0cGdCUWFERVVvbTA0ZFpoQU4xYUpCRGxVS0pCeEUxY2VCMlNtajBNbG4tSUJXNUFGVTJkd1Vpa3R0XzJRYXEyZEJmYUtkRXVwODVVVjdZZC1kS2psbmthYmwyUHZyMERUa1RyZU1cblxuICAgIGludmFyaWFudChibG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiwgXCJJbnZhbGlkIGJsb2NrZXIgc3RhdGUgdHJhbnNpdGlvbjogXCIgKyBibG9ja2VyLnN0YXRlICsgXCIgLT4gXCIgKyBuZXdCbG9ja2VyLnN0YXRlKTtcbiAgICBzdGF0ZS5ibG9ja2Vycy5zZXQoa2V5LCBuZXdCbG9ja2VyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJsb2NrTmF2aWdhdGlvbihfcmVmMikge1xuICAgIGxldCB7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSA9IF9yZWYyO1xuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gV2Ugb255IHN1cHBvcnQgYSBzaW5nbGUgYWN0aXZlIGJsb2NrZXIgYXQgdGhlIG1vbWVudCBzaW5jZSB3ZSBkb24ndCBoYXZlXG4gICAgLy8gYW55IGNvbXBlbGxpbmcgdXNlIGNhc2VzIGZvciBtdWx0aS1ibG9ja2VyIHlldFxuXG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5zaXplID4gMSkge1xuICAgICAgd2FybmluZyhmYWxzZSwgXCJBIHJvdXRlciBvbmx5IHN1cHBvcnRzIG9uZSBibG9ja2VyIGF0IGEgdGltZVwiKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cmllcyA9IEFycmF5LmZyb20oYmxvY2tlckZ1bmN0aW9ucy5lbnRyaWVzKCkpO1xuICAgIGxldCBbYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uXSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChibG9ja2VyS2V5KTtcblxuICAgIGlmIChibG9ja2VyICYmIGJsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiKSB7XG4gICAgICAvLyBJZiB0aGUgYmxvY2tlciBpcyBjdXJyZW50bHkgcHJvY2VlZGluZywgd2UgZG9uJ3QgbmVlZCB0byByZS1jaGVja1xuICAgICAgLy8gaXQgYW5kIGNhbiBsZXQgdGhpcyBuYXZpZ2F0aW9uIGNvbnRpbnVlXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBBdCB0aGlzIHBvaW50LCB3ZSBrbm93IHdlJ3JlIHVuYmxvY2tlZC9ibG9ja2VkIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGhlXG4gICAgLy8gdXNlci1wcm92aWRlZCBibG9ja2VyIGZ1bmN0aW9uXG5cblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb24oe1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pKSB7XG4gICAgICByZXR1cm4gYmxvY2tlcktleTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBY3RpdmVEZWZlcnJlZHMocHJlZGljYXRlKSB7XG4gICAgbGV0IGNhbmNlbGxlZFJvdXRlSWRzID0gW107XG4gICAgYWN0aXZlRGVmZXJyZWRzLmZvckVhY2goKGRmZCwgcm91dGVJZCkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUgfHwgcHJlZGljYXRlKHJvdXRlSWQpKSB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgZGVmZXJyZWQgLSBidXQgZG8gbm90IHJlbW92ZSBmcm9tIGFjdGl2ZURlZmVycmVkcyBoZXJlIC1cbiAgICAgICAgLy8gd2UgcmVseSBvbiB0aGUgc3Vic2NyaWJlcnMgdG8gZG8gdGhhdCBzbyBvdXIgdGVzdHMgY2FuIGFzc2VydCBwcm9wZXJcbiAgICAgICAgLy8gY2xlYW51cCB2aWEgX2ludGVybmFsQWN0aXZlRGVmZXJyZWRzXG4gICAgICAgIGRmZC5jYW5jZWwoKTtcbiAgICAgICAgY2FuY2VsbGVkUm91dGVJZHMucHVzaChyb3V0ZUlkKTtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLmRlbGV0ZShyb3V0ZUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2FuY2VsbGVkUm91dGVJZHM7XG4gIH0gLy8gT3B0IGluIHRvIGNhcHR1cmluZyBhbmQgcmVwb3J0aW5nIHNjcm9sbCBwb3NpdGlvbnMgZHVyaW5nIG5hdmlnYXRpb25zLFxuICAvLyB1c2VkIGJ5IHRoZSA8U2Nyb2xsUmVzdG9yYXRpb24+IGNvbXBvbmVudFxuXG5cbiAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsUmVzdG9yYXRpb24ocG9zaXRpb25zLCBnZXRQb3NpdGlvbiwgZ2V0S2V5KSB7XG4gICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gICAgZ2V0U2Nyb2xsUG9zaXRpb24gPSBnZXRQb3NpdGlvbjtcblxuICAgIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gZ2V0S2V5IHx8IChsb2NhdGlvbiA9PiBsb2NhdGlvbi5rZXkpOyAvLyBQZXJmb3JtIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbiwgc2luY2Ugd2UgbWlzcyB0aGUgYm9hdCBvblxuICAgIC8vIHRoZSBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgYmVjYXVzZSB3ZSd2ZSBub3QgeWV0IHJlbmRlcmVkIDxTY3JvbGxSZXN0b3JhdGlvbi8+XG4gICAgLy8gYW5kIHRoZXJlZm9yZSBoYXZlIG5vIHNhdmVkU2Nyb2xsUG9zaXRpb25zIGF2YWlsYWJsZVxuXG5cbiAgICBpZiAoIWluaXRpYWxTY3JvbGxSZXN0b3JlZCAmJiBzdGF0ZS5uYXZpZ2F0aW9uID09PSBJRExFX05BVklHQVRJT04pIHtcbiAgICAgIGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IHRydWU7XG4gICAgICBsZXQgeSA9IGdldFNhdmVkU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuXG4gICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDtcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgICAgIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQgdXNlck1hdGNoZXMgPSBtYXRjaGVzLm1hcChtID0+IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSk7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIHVzZXJNYXRjaGVzKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQgdXNlck1hdGNoZXMgPSBtYXRjaGVzLm1hcChtID0+IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSk7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIHVzZXJNYXRjaGVzKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBsZXQgeSA9IHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbnRlcm5hbFNldFJvdXRlcyhuZXdSb3V0ZXMpIHtcbiAgICBpbkZsaWdodERhdGFSb3V0ZXMgPSBuZXdSb3V0ZXM7XG4gIH1cblxuICByb3V0ZXIgPSB7XG4gICAgZ2V0IGJhc2VuYW1lKCkge1xuICAgICAgcmV0dXJuIGluaXQuYmFzZW5hbWU7XG4gICAgfSxcblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgIHJldHVybiBkYXRhUm91dGVzO1xuICAgIH0sXG5cbiAgICBpbml0aWFsaXplLFxuICAgIHN1YnNjcmliZSxcbiAgICBlbmFibGVTY3JvbGxSZXN0b3JhdGlvbixcbiAgICBuYXZpZ2F0ZSxcbiAgICBmZXRjaCxcbiAgICByZXZhbGlkYXRlLFxuICAgIC8vIFBhc3N0aHJvdWdoIHRvIGhpc3RvcnktYXdhcmUgY3JlYXRlSHJlZiB1c2VkIGJ5IHVzZUhyZWYgc28gd2UgZ2V0IHByb3BlclxuICAgIC8vIGhhc2gtYXdhcmUgVVJMcyBpbiBET00gcGF0aHNcbiAgICBjcmVhdGVIcmVmOiB0byA9PiBpbml0Lmhpc3RvcnkuY3JlYXRlSHJlZih0byksXG4gICAgZW5jb2RlTG9jYXRpb246IHRvID0+IGluaXQuaGlzdG9yeS5lbmNvZGVMb2NhdGlvbih0byksXG4gICAgZ2V0RmV0Y2hlcixcbiAgICBkZWxldGVGZXRjaGVyLFxuICAgIGRpc3Bvc2UsXG4gICAgZ2V0QmxvY2tlcixcbiAgICBkZWxldGVCbG9ja2VyLFxuICAgIF9pbnRlcm5hbEZldGNoQ29udHJvbGxlcnM6IGZldGNoQ29udHJvbGxlcnMsXG4gICAgX2ludGVybmFsQWN0aXZlRGVmZXJyZWRzOiBhY3RpdmVEZWZlcnJlZHMsXG4gICAgLy8gVE9ETzogUmVtb3ZlIHNldFJvdXRlcywgaXQncyB0ZW1wb3JhcnkgdG8gYXZvaWQgZGVhbGluZyB3aXRoXG4gICAgLy8gdXBkYXRpbmcgdGhlIHRyZWUgd2hpbGUgdmFsaWRhdGluZyB0aGUgdXBkYXRlIGFsZ29yaXRobS5cbiAgICBfaW50ZXJuYWxTZXRSb3V0ZXNcbiAgfTtcbiAgcmV0dXJuIHJvdXRlcjtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVN0YXRpY0hhbmRsZXJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IFVOU0FGRV9ERUZFUlJFRF9TWU1CT0wgPSBTeW1ib2woXCJkZWZlcnJlZFwiKTtcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRpY0hhbmRsZXIocm91dGVzLCBvcHRzKSB7XG4gIGludmFyaWFudChyb3V0ZXMubGVuZ3RoID4gMCwgXCJZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IHJvdXRlcyBhcnJheSB0byBjcmVhdGVTdGF0aWNIYW5kbGVyXCIpO1xuICBsZXQgbWFuaWZlc3QgPSB7fTtcbiAgbGV0IGRldGVjdEVycm9yQm91bmRhcnkgPSAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5kZXRlY3RFcnJvckJvdW5kYXJ5KSB8fCBkZWZhdWx0RGV0ZWN0RXJyb3JCb3VuZGFyeTtcbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlcywgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgdW5kZWZpbmVkLCBtYW5pZmVzdCk7XG4gIGxldCBiYXNlbmFtZSA9IChvcHRzID8gb3B0cy5iYXNlbmFtZSA6IG51bGwpIHx8IFwiL1wiO1xuICAvKipcbiAgICogVGhlIHF1ZXJ5KCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciBkb2N1bWVudCByZXF1ZXN0cywgaW4gd2hpY2ggd2Ugd2FudCB0b1xuICAgKiBjYWxsIGFuIG9wdGlvbmFsIGFjdGlvbiBhbmQgcG90ZW50aWFsbHkgbXVsdGlwbGUgbG9hZGVycyBmb3IgYWxsIG5lc3RlZFxuICAgKiByb3V0ZXMuICBJdCByZXR1cm5zIGEgU3RhdGljSGFuZGxlckNvbnRleHQgb2JqZWN0LCB3aGljaCBpcyB2ZXJ5IHNpbWlsYXJcbiAgICogdG8gdGhlIHJvdXRlciBzdGF0ZSAobG9jYXRpb24sIGxvYWRlckRhdGEsIGFjdGlvbkRhdGEsIGVycm9ycywgZXRjLikgYW5kXG4gICAqIGFsc28gYWRkcyBTU1Itc3BlY2lmaWMgaW5mb3JtYXRpb24gc3VjaCBhcyB0aGUgc3RhdHVzQ29kZSBhbmQgaGVhZGVyc1xuICAgKiBmcm9tIGFjdGlvbi9sb2FkZXJzIFJlc3BvbnNlcy5cbiAgICpcbiAgICogSXQgX3Nob3VsZF8gbmV2ZXIgdGhyb3cgYW5kIHNob3VsZCByZXBvcnQgYWxsIGVycm9ycyB0aHJvdWdoIHRoZVxuICAgKiByZXR1cm5lZCBjb250ZXh0LmVycm9ycyBvYmplY3QsIHByb3Blcmx5IGFzc29jaWF0aW5nIGVycm9ycyB0byB0aGVpciBlcnJvclxuICAgKiBib3VuZGFyeS4gIEFkZGl0aW9uYWxseSwgaXQgdHJhY2tzIF9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkIHdoaWNoIGNhbiBiZVxuICAgKiB1c2VkIHRvIGVtdWxhdGUgUmVhY3QgZXJyb3IgYm91bmRhcmllcyBkdXJpbmcgU1NyIGJ5IHBlcmZvcm1pbmcgYSBzZWNvbmRcbiAgICogcGFzcyBvbmx5IGRvd24gdG8gdGhlIGJvdW5kYXJ5SWQuXG4gICAqXG4gICAqIFRoZSBvbmUgZXhjZXB0aW9uIHdoZXJlIHdlIGRvIG5vdCByZXR1cm4gYSBTdGF0aWNIYW5kbGVyQ29udGV4dCBpcyB3aGVuIGFcbiAgICogcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmV0dXJuZWQgb3IgdGhyb3duIGZyb20gYW55IGFjdGlvbi9sb2FkZXIuICBXZVxuICAgKiBwcm9wYWdhdGUgdGhhdCBvdXQgYW5kIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIHNvIHRoZSBIVFRQIHNlcnZlciBjYW5cbiAgICogcmV0dXJuIGl0IGRpcmVjdGx5LlxuICAgKi9cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeShyZXF1ZXN0LCBfdGVtcDIpIHtcbiAgICBsZXQge1xuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFwiXCIsIGNyZWF0ZVBhdGgodXJsKSwgbnVsbCwgXCJkZWZhdWx0XCIpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGJhc2VuYW1lKTsgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcblxuICAgIGlmICghaXNWYWxpZE1ldGhvZChtZXRob2QpICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBtZXRob2ROb3RBbGxvd2VkTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBtYXRjaGVzOiBtZXRob2ROb3RBbGxvd2VkTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXNDb2RlOiBlcnJvci5zdGF0dXMsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcblxuICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSAvLyBXaGVuIHJldHVybmluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCwgd2UgcGF0Y2ggYmFjayBpbiB0aGUgbG9jYXRpb24gaGVyZVxuICAgIC8vIHNpbmNlIHdlIG5lZWQgaXQgZm9yIFJlYWN0IENvbnRleHQuICBCdXQgdGhpcyBoZWxwcyBrZWVwIG91ciBzdWJtaXQgYW5kXG4gICAgLy8gbG9hZFJvdXRlRGF0YSBvcGVyYXRpbmcgb24gYSBSZXF1ZXN0IGluc3RlYWQgb2YgYSBMb2NhdGlvblxuXG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9jYXRpb24sXG4gICAgICBiYXNlbmFtZVxuICAgIH0sIHJlc3VsdCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBxdWVyeVJvdXRlKCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciB0YXJnZXRlZCByb3V0ZSByZXF1ZXN0cywgZWl0aGVyXG4gICAqIGZvciBmZXRjaCA/X2RhdGEgcmVxdWVzdHMgb3IgcmVzb3VyY2Ugcm91dGUgcmVxdWVzdHMuICBJbiB0aGlzIGNhc2UsIHdlXG4gICAqIGFyZSBvbmx5IGV2ZXIgY2FsbGluZyBhIHNpbmdsZSBhY3Rpb24gb3IgbG9hZGVyLCBhbmQgd2UgYXJlIHJldHVybmluZyB0aGVcbiAgICogcmV0dXJuZWQgdmFsdWUgZGlyZWN0bHkuICBJbiBtb3N0IGNhc2VzLCB0aGlzIHdpbGwgYmUgYSBSZXNwb25zZSByZXR1cm5lZFxuICAgKiBmcm9tIHRoZSBhY3Rpb24vbG9hZGVyLCBidXQgaXQgbWF5IGJlIGEgcHJpbWl0aXZlIG9yIG90aGVyIHZhbHVlIGFzIHdlbGwgLVxuICAgKiBhbmQgaW4gc3VjaCBjYXNlcyB0aGUgY2FsbGluZyBjb250ZXh0IHNob3VsZCBoYW5kbGUgdGhhdCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogV2UgZG8gcmVzcGVjdCB0aGUgdGhyb3cvcmV0dXJuIGRpZmZlcmVudGlhdGlvbiwgc28gaWYgYW4gYWN0aW9uL2xvYWRlclxuICAgKiB0aHJvd3MsIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCB0aHJvdyB0aGUgdmFsdWUuICBUaGlzIGlzIGltcG9ydGFudCBzbyB3ZVxuICAgKiBjYW4gZG8gcHJvcGVyIGJvdW5kYXJ5IGlkZW50aWZpY2F0aW9uIGluIFJlbWl4IHdoZXJlIGEgdGhyb3duIFJlc3BvbnNlXG4gICAqIG11c3QgZ28gdG8gdGhlIENhdGNoIEJvdW5kYXJ5IGJ1dCBhIHJldHVybmVkIFJlc3BvbnNlIGlzIGhhcHB5LXBhdGguXG4gICAqXG4gICAqIE9uZSB0aGluZyB0byBub3RlIGlzIHRoYXQgYW55IFJvdXRlci1pbml0aWF0ZWQgRXJyb3JzIHRoYXQgbWFrZSBzZW5zZVxuICAgKiB0byBhc3NvY2lhdGUgd2l0aCBhIHN0YXR1cyBjb2RlIHdpbGwgYmUgdGhyb3duIGFzIGFuIEVycm9yUmVzcG9uc2VcbiAgICogaW5zdGFuY2Ugd2hpY2ggaW5jbHVkZSB0aGUgcmF3IEVycm9yLCBzdWNoIHRoYXQgdGhlIGNhbGxpbmcgY29udGV4dCBjYW5cbiAgICogc2VyaWFsaXplIHRoZSBlcnJvciBhcyB0aGV5IHNlZSBmaXQgd2hpbGUgaW5jbHVkaW5nIHRoZSBwcm9wZXIgcmVzcG9uc2VcbiAgICogY29kZS4gIEV4YW1wbGVzIGhlcmUgYXJlIDQwNCBhbmQgNDA1IGVycm9ycyB0aGF0IG9jY3VyIHByaW9yIHRvIHJlYWNoaW5nXG4gICAqIGFueSB1c2VyLWRlZmluZWQgbG9hZGVycy5cbiAgICovXG5cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeVJvdXRlKHJlcXVlc3QsIF90ZW1wMykge1xuICAgIGxldCB7XG4gICAgICByb3V0ZUlkLFxuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMztcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFwiXCIsIGNyZWF0ZVBhdGgodXJsKSwgbnVsbCwgXCJkZWZhdWx0XCIpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGJhc2VuYW1lKTsgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcblxuICAgIGlmICghaXNWYWxpZE1ldGhvZChtZXRob2QpICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIgJiYgbWV0aG9kICE9PSBcIk9QVElPTlNcIikge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBtYXRjaCA9IHJvdXRlSWQgPyBtYXRjaGVzLmZpbmQobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSA6IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKTtcblxuICAgIGlmIChyb3V0ZUlkICYmICFtYXRjaCkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDMsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCkge1xuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGl0IEkgZG9uJ3QgdGhpbms/XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCBtYXRjaCk7XG5cbiAgICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxldCBlcnJvciA9IHJlc3VsdC5lcnJvcnMgPyBPYmplY3QudmFsdWVzKHJlc3VsdC5lcnJvcnMpWzBdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHdlIGdvdCBiYWNrIHJlc3VsdC5lcnJvcnMsIHRoYXQgbWVhbnMgdGhlIGxvYWRlci9hY3Rpb24gdGhyZXdcbiAgICAgIC8vIF9zb21ldGhpbmdfIHRoYXQgd2Fzbid0IGEgUmVzcG9uc2UsIGJ1dCBpdCdzIG5vdCBndWFyYW50ZWVkL3JlcXVpcmVkXG4gICAgICAvLyB0byBiZSBhbiBgaW5zdGFuY2VvZiBFcnJvcmAgZWl0aGVyLCBzbyB3ZSBoYXZlIHRvIHVzZSB0aHJvdyBoZXJlIHRvXG4gICAgICAvLyBwcmVzZXJ2ZSB0aGUgXCJlcnJvclwiIHN0YXRlIG91dHNpZGUgb2YgcXVlcnlJbXBsLlxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSAvLyBQaWNrIG9mZiB0aGUgcmlnaHQgc3RhdGUgdmFsdWUgdG8gcmV0dXJuXG5cblxuICAgIGlmIChyZXN1bHQuYWN0aW9uRGF0YSkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVzdWx0LmFjdGlvbkRhdGEpWzBdO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQubG9hZGVyRGF0YSkge1xuICAgICAgdmFyIF9yZXN1bHQkYWN0aXZlRGVmZXJyZTtcblxuICAgICAgbGV0IGRhdGEgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5sb2FkZXJEYXRhKVswXTtcblxuICAgICAgaWYgKChfcmVzdWx0JGFjdGl2ZURlZmVycmUgPSByZXN1bHQuYWN0aXZlRGVmZXJyZWRzKSAhPSBudWxsICYmIF9yZXN1bHQkYWN0aXZlRGVmZXJyZVttYXRjaC5yb3V0ZS5pZF0pIHtcbiAgICAgICAgZGF0YVtVTlNBRkVfREVGRVJSRURfU1lNQk9MXSA9IHJlc3VsdC5hY3RpdmVEZWZlcnJlZHNbbWF0Y2gucm91dGUuaWRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCkge1xuICAgIGludmFyaWFudChyZXF1ZXN0LnNpZ25hbCwgXCJxdWVyeSgpL3F1ZXJ5Um91dGUoKSByZXF1ZXN0cyBtdXN0IGNvbnRhaW4gYW4gQWJvcnRDb250cm9sbGVyIHNpZ25hbFwiKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoaXNNdXRhdGlvbk1ldGhvZChyZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgc3VibWl0KHJlcXVlc3QsIG1hdGNoZXMsIHJvdXRlTWF0Y2ggfHwgZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCAhPSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGxvYWRSb3V0ZURhdGEocmVxdWVzdCwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2gpO1xuICAgICAgcmV0dXJuIGlzUmVzcG9uc2UocmVzdWx0KSA/IHJlc3VsdCA6IF9leHRlbmRzKHt9LCByZXN1bHQsIHtcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge31cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIElmIHRoZSB1c2VyIHRocmV3L3JldHVybmVkIGEgUmVzcG9uc2UgaW4gY2FsbExvYWRlck9yQWN0aW9uLCB3ZSB0aHJvd1xuICAgICAgLy8gaXQgdG8gYmFpbCBvdXQgYW5kIHRoZW4gcmV0dXJuIG9yIHRocm93IGhlcmUgYmFzZWQgb24gd2hldGhlciB0aGUgdXNlclxuICAgICAgLy8gcmV0dXJuZWQgb3IgdGhyZXdcbiAgICAgIGlmIChpc1F1ZXJ5Um91dGVSZXNwb25zZShlKSkge1xuICAgICAgICBpZiAoZS50eXBlID09PSBSZXN1bHRUeXBlLmVycm9yICYmICFpc1JlZGlyZWN0UmVzcG9uc2UoZS5yZXNwb25zZSkpIHtcbiAgICAgICAgICB0aHJvdyBlLnJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGUucmVzcG9uc2U7XG4gICAgICB9IC8vIFJlZGlyZWN0cyBhcmUgYWx3YXlzIHJldHVybmVkIHNpbmNlIHRoZXkgZG9uJ3QgcHJvcGFnYXRlIHRvIGNhdGNoXG4gICAgICAvLyBib3VuZGFyaWVzXG5cblxuICAgICAgaWYgKGlzUmVkaXJlY3RSZXNwb25zZShlKSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXQocmVxdWVzdCwgbWF0Y2hlcywgYWN0aW9uTWF0Y2gsIHJlcXVlc3RDb250ZXh0LCBpc1JvdXRlUmVxdWVzdCkge1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIWFjdGlvbk1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhYWN0aW9uTWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIHJlcXVlc3QsIGFjdGlvbk1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgYmFzZW5hbWUsIHRydWUsIGlzUm91dGVSZXF1ZXN0LCByZXF1ZXN0Q29udGV4dCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gVWhoaGggLSB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIHdlIHNob3VsZCBhbHdheXMgdGhyb3cgdGhlc2UgZnJvbVxuICAgICAgLy8gY2FsbExvYWRlck9yQWN0aW9uLCBidXQgdGhlIHR5cGUgbmFycm93aW5nIGhlcmUga2VlcHMgVFMgaGFwcHkgYW5kIHdlXG4gICAgICAvLyBjYW4gZ2V0IGJhY2sgb24gdGhlIFwidGhyb3cgYWxsIHJlZGlyZWN0IHJlc3BvbnNlc1wiIHRyYWluIGhlcmUgc2hvdWxkXG4gICAgICAvLyB0aGlzIGV2ZXIgaGFwcGVuIDovXG4gICAgICB0aHJvdyBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBMb2NhdGlvbjogcmVzdWx0LmxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAvLyBOb3RlOiBUaGlzIHNob3VsZCBvbmx5IGJlIG5vbi1SZXNwb25zZSB2YWx1ZXMgaWYgd2UgZ2V0IGhlcmUsIHNpbmNlXG4gICAgICAvLyBpc1JvdXRlUmVxdWVzdCBzaG91bGQgdGhyb3cgYW55IFJlc3BvbnNlIHJlY2VpdmVkIGluIGNhbGxMb2FkZXJPckFjdGlvblxuICAgICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXM6IFthY3Rpb25NYXRjaF0sXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiB7XG4gICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAvLyBOb3RlOiBzdGF0dXNDb2RlICsgaGVhZGVycyBhcmUgdW51c2VkIGhlcmUgc2luY2UgcXVlcnlSb3V0ZSB3aWxsXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIG9yIHZhbHVlXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCB1bmRlZmluZWQsIHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgIH0pOyAvLyBhY3Rpb24gc3RhdHVzIGNvZGVzIHRha2UgcHJlY2VkZW5jZSBvdmVyIGxvYWRlciBzdGF0dXMgY29kZXNcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICAgIHN0YXR1c0NvZGU6IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwLFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmhlYWRlcnNcbiAgICAgICAgfSA6IHt9KVxuICAgICAgfSk7XG4gICAgfSAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcblxuXG4gICAgbGV0IGxvYWRlclJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgcmVkaXJlY3Q6IHJlcXVlc3QucmVkaXJlY3QsXG4gICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgfSk7XG4gICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKGxvYWRlclJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHJlc3VsdC5zdGF0dXNDb2RlID8ge1xuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1c0NvZGVcbiAgICB9IDoge30sIHtcbiAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgIH0sXG4gICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICB9IDoge30pXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoLCBwZW5kaW5nQWN0aW9uRXJyb3IpIHtcbiAgICBsZXQgaXNSb3V0ZVJlcXVlc3QgPSByb3V0ZU1hdGNoICE9IG51bGw7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnlSb3V0ZSgpKVxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0ICYmICEocm91dGVNYXRjaCAhPSBudWxsICYmIHJvdXRlTWF0Y2gucm91dGUubG9hZGVyKSAmJiAhKHJvdXRlTWF0Y2ggIT0gbnVsbCAmJiByb3V0ZU1hdGNoLnJvdXRlLmxhenkpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWQ6IHJvdXRlTWF0Y2ggPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlTWF0Y2gucm91dGUuaWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0TWF0Y2hlcyA9IHJvdXRlTWF0Y2ggPyBbcm91dGVNYXRjaF0gOiBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBPYmplY3Qua2V5cyhwZW5kaW5nQWN0aW9uRXJyb3IgfHwge30pWzBdKTtcbiAgICBsZXQgbWF0Y2hlc1RvTG9hZCA9IHJlcXVlc3RNYXRjaGVzLmZpbHRlcihtID0+IG0ucm91dGUubG9hZGVyIHx8IG0ucm91dGUubGF6eSk7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnkoKSlcblxuICAgIGlmIChtYXRjaGVzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgLy8gQWRkIGEgbnVsbCBmb3IgYWxsIG1hdGNoZWQgcm91dGVzIGZvciBwcm9wZXIgcmV2YWxpZGF0aW9uIG9uIHRoZSBjbGllbnRcbiAgICAgICAgbG9hZGVyRGF0YTogbWF0Y2hlcy5yZWR1Y2UoKGFjYywgbSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgICBbbS5yb3V0ZS5pZF06IG51bGxcbiAgICAgICAgfSksIHt9KSxcbiAgICAgICAgZXJyb3JzOiBwZW5kaW5nQWN0aW9uRXJyb3IgfHwgbnVsbCxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIGRldGVjdEVycm9yQm91bmRhcnksIGJhc2VuYW1lLCB0cnVlLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpKV0pO1xuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1ldGhvZCArIFwiKCkgY2FsbCBhYm9ydGVkXCIpO1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IGFjdGl2ZURlZmVycmVkcyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgY29udGV4dCA9IHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0FjdGlvbkVycm9yLCBhY3RpdmVEZWZlcnJlZHMpOyAvLyBBZGQgYSBudWxsIGZvciBhbnkgbm9uLWxvYWRlciBtYXRjaGVzIGZvciBwcm9wZXIgcmV2YWxpZGF0aW9uIG9uIHRoZSBjbGllbnRcblxuICAgIGxldCBleGVjdXRlZExvYWRlcnMgPSBuZXcgU2V0KG1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IG1hdGNoLnJvdXRlLmlkKSk7XG4gICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgIGlmICghZXhlY3V0ZWRMb2FkZXJzLmhhcyhtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgICAgY29udGV4dC5sb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgYWN0aXZlRGVmZXJyZWRzOiBhY3RpdmVEZWZlcnJlZHMuc2l6ZSA+IDAgPyBPYmplY3QuZnJvbUVudHJpZXMoYWN0aXZlRGVmZXJyZWRzLmVudHJpZXMoKSkgOiBudWxsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRhdGFSb3V0ZXMsXG4gICAgcXVlcnksXG4gICAgcXVlcnlSb3V0ZVxuICB9O1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gSGVscGVyc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBHaXZlbiBhbiBleGlzdGluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCBhbmQgYW4gZXJyb3IgdGhyb3duIGF0IHJlbmRlciB0aW1lLFxuICogcHJvdmlkZSBhbiB1cGRhdGVkIFN0YXRpY0hhbmRsZXJDb250ZXh0IHN1aXRhYmxlIGZvciBhIHNlY29uZCBTU1IgcmVuZGVyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvcihyb3V0ZXMsIGNvbnRleHQsIGVycm9yKSB7XG4gIGxldCBuZXdDb250ZXh0ID0gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgZXJyb3JzOiB7XG4gICAgICBbY29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB8fCByb3V0ZXNbMF0uaWRdOiBlcnJvclxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzU3VibWlzc2lvbk5hdmlnYXRpb24ob3B0cykge1xuICByZXR1cm4gb3B0cyAhPSBudWxsICYmIFwiZm9ybURhdGFcIiBpbiBvcHRzO1xufSAvLyBOb3JtYWxpemUgbmF2aWdhdGlvbiBvcHRpb25zIGJ5IGNvbnZlcnRpbmcgZm9ybU1ldGhvZD1HRVQgZm9ybURhdGEgb2JqZWN0cyB0b1xuLy8gVVJMU2VhcmNoUGFyYW1zIHNvIHRoZXkgYmVoYXZlIGlkZW50aWNhbGx5IHRvIGxpbmtzIHdpdGggcXVlcnkgcGFyYW1zXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKHRvLCBmdXR1cmUsIG9wdHMsIGlzRmV0Y2hlcikge1xuICBpZiAoaXNGZXRjaGVyID09PSB2b2lkIDApIHtcbiAgICBpc0ZldGNoZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXRoID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTsgLy8gUmV0dXJuIGxvY2F0aW9uIHZlcmJhdGltIG9uIG5vbi1zdWJtaXNzaW9uIG5hdmlnYXRpb25zXG5cbiAgaWYgKCFvcHRzIHx8ICFpc1N1Ym1pc3Npb25OYXZpZ2F0aW9uKG9wdHMpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9wdHMuZm9ybU1ldGhvZCAmJiAhaXNWYWxpZE1ldGhvZChvcHRzLmZvcm1NZXRob2QpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsXG4gICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiBvcHRzLmZvcm1NZXRob2RcbiAgICAgIH0pXG4gICAgfTtcbiAgfSAvLyBDcmVhdGUgYSBTdWJtaXNzaW9uIG9uIG5vbi1HRVQgbmF2aWdhdGlvbnNcblxuXG4gIGxldCBzdWJtaXNzaW9uO1xuXG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgbGV0IGZvcm1NZXRob2QgPSBvcHRzLmZvcm1NZXRob2QgfHwgXCJnZXRcIjtcbiAgICBzdWJtaXNzaW9uID0ge1xuICAgICAgZm9ybU1ldGhvZDogZnV0dXJlLnY3X25vcm1hbGl6ZUZvcm1NZXRob2QgPyBmb3JtTWV0aG9kLnRvVXBwZXJDYXNlKCkgOiBmb3JtTWV0aG9kLnRvTG93ZXJDYXNlKCksXG4gICAgICBmb3JtQWN0aW9uOiBzdHJpcEhhc2hGcm9tUGF0aChwYXRoKSxcbiAgICAgIGZvcm1FbmNUeXBlOiBvcHRzICYmIG9wdHMuZm9ybUVuY1R5cGUgfHwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgIGZvcm1EYXRhOiBvcHRzLmZvcm1EYXRhXG4gICAgfTtcblxuICAgIGlmIChpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHN1Ym1pc3Npb25cbiAgICAgIH07XG4gICAgfVxuICB9IC8vIEZsYXR0ZW4gc3VibWlzc2lvbiBvbnRvIFVSTFNlYXJjaFBhcmFtcyBmb3IgR0VUIHN1Ym1pc3Npb25zXG5cblxuICBsZXQgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChwYXRoKTtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKG9wdHMuZm9ybURhdGEpOyAvLyBTaW5jZSBmZXRjaGVyIEdFVCBzdWJtaXNzaW9ucyBvbmx5IHJ1biBhIHNpbmdsZSBsb2FkZXIgKGFzIG9wcG9zZWQgdG9cbiAgLy8gbmF2aWdhdGlvbiBHRVQgc3VibWlzc2lvbnMgd2hpY2ggcnVuIGFsbCBsb2FkZXJzKSwgd2UgbmVlZCB0byBwcmVzZXJ2ZVxuICAvLyBhbnkgaW5jb21pbmcgP2luZGV4IHBhcmFtc1xuXG4gIGlmIChpc0ZldGNoZXIgJiYgcGFyc2VkUGF0aC5zZWFyY2ggJiYgaGFzTmFrZWRJbmRleFF1ZXJ5KHBhcnNlZFBhdGguc2VhcmNoKSkge1xuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoXCJpbmRleFwiLCBcIlwiKTtcbiAgfVxuXG4gIHBhcnNlZFBhdGguc2VhcmNoID0gXCI/XCIgKyBzZWFyY2hQYXJhbXM7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY3JlYXRlUGF0aChwYXJzZWRQYXRoKSxcbiAgICBzdWJtaXNzaW9uXG4gIH07XG59IC8vIEZpbHRlciBvdXQgYWxsIHJvdXRlcyBiZWxvdyBhbnkgY2F1Z2h0IGVycm9yIGFzIHRoZXkgYXJlbid0IGdvaW5nIHRvXG4vLyByZW5kZXIgc28gd2UgZG9uJ3QgbmVlZCB0byBsb2FkIHRoZW1cblxuXG5mdW5jdGlvbiBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBib3VuZGFyeUlkKSB7XG4gIGxldCBib3VuZGFyeU1hdGNoZXMgPSBtYXRjaGVzO1xuXG4gIGlmIChib3VuZGFyeUlkKSB7XG4gICAgbGV0IGluZGV4ID0gbWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkID09PSBib3VuZGFyeUlkKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBib3VuZGFyeU1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKDAsIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRhcnlNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBnZXRNYXRjaGVzVG9Mb2FkKGhpc3RvcnksIHN0YXRlLCBtYXRjaGVzLCBzdWJtaXNzaW9uLCBsb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hMb2FkTWF0Y2hlcywgcm91dGVzVG9Vc2UsIGJhc2VuYW1lLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKSB7XG4gIGxldCBhY3Rpb25SZXN1bHQgPSBwZW5kaW5nRXJyb3IgPyBPYmplY3QudmFsdWVzKHBlbmRpbmdFcnJvcilbMF0gOiBwZW5kaW5nQWN0aW9uRGF0YSA/IE9iamVjdC52YWx1ZXMocGVuZGluZ0FjdGlvbkRhdGEpWzBdIDogdW5kZWZpbmVkO1xuICBsZXQgY3VycmVudFVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKHN0YXRlLmxvY2F0aW9uKTtcbiAgbGV0IG5leHRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChsb2NhdGlvbik7XG4gIGxldCBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSA9IC8vIEZvcmNlZCByZXZhbGlkYXRpb24gZHVlIHRvIHN1Ym1pc3Npb24sIHVzZVJldmFsaWRhdGUsIG9yIFgtUmVtaXgtUmV2YWxpZGF0ZVxuICBpc1JldmFsaWRhdGlvblJlcXVpcmVkIHx8IC8vIENsaWNrZWQgdGhlIHNhbWUgbGluaywgcmVzdWJtaXR0ZWQgYSBHRVQgZm9ybVxuICBjdXJyZW50VXJsLnRvU3RyaW5nKCkgPT09IG5leHRVcmwudG9TdHJpbmcoKSB8fCAvLyBTZWFyY2ggcGFyYW1zIGFmZmVjdCBhbGwgbG9hZGVyc1xuICBjdXJyZW50VXJsLnNlYXJjaCAhPT0gbmV4dFVybC5zZWFyY2g7IC8vIFBpY2sgbmF2aWdhdGlvbiBtYXRjaGVzIHRoYXQgYXJlIG5ldC1uZXcgb3IgcXVhbGlmeSBmb3IgcmV2YWxpZGF0aW9uXG5cbiAgbGV0IGJvdW5kYXJ5SWQgPSBwZW5kaW5nRXJyb3IgPyBPYmplY3Qua2V5cyhwZW5kaW5nRXJyb3IpWzBdIDogdW5kZWZpbmVkO1xuICBsZXQgYm91bmRhcnlNYXRjaGVzID0gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgYm91bmRhcnlJZCk7XG4gIGxldCBuYXZpZ2F0aW9uTWF0Y2hlcyA9IGJvdW5kYXJ5TWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGlmIChtYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICAvLyBXZSBoYXZlbid0IGxvYWRlZCB0aGlzIHJvdXRlIHlldCBzbyB3ZSBkb24ndCBrbm93IGlmIGl0J3MgZ290IGEgbG9hZGVyIVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLnJvdXRlLmxvYWRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBBbHdheXMgY2FsbCB0aGUgbG9hZGVyIG9uIG5ldyByb3V0ZSBpbnN0YW5jZXMgYW5kIHBlbmRpbmcgZGVmZXIgY2FuY2VsbGF0aW9uc1xuXG5cbiAgICBpZiAoaXNOZXdMb2FkZXIoc3RhdGUubG9hZGVyRGF0YSwgc3RhdGUubWF0Y2hlc1tpbmRleF0sIG1hdGNoKSB8fCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5zb21lKGlkID0+IGlkID09PSBtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gVGhpcyBpcyB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igd2hlbiB3ZSByZXZhbGlkYXRlLiAgSWYgdGhlIHJvdXRlXG4gICAgLy8gcHJvdmlkZXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24sIHRoZW4gd2UgZ2l2ZSB0aGVtIGZ1bGwgY29udHJvbCBidXRcbiAgICAvLyBwcm92aWRlIHRoaXMgdmFsdWUgc28gdGhleSBjYW4gbGV2ZXJhZ2UgaXQgaWYgbmVlZGVkIGFmdGVyIHRoZXkgY2hlY2tcbiAgICAvLyB0aGVpciBvd24gc3BlY2lmaWMgdXNlIGNhc2VzXG5cblxuICAgIGxldCBjdXJyZW50Um91dGVNYXRjaCA9IHN0YXRlLm1hdGNoZXNbaW5kZXhdO1xuICAgIGxldCBuZXh0Um91dGVNYXRjaCA9IG1hdGNoO1xuICAgIHJldHVybiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKG1hdGNoLCBfZXh0ZW5kcyh7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgY3VycmVudFBhcmFtczogY3VycmVudFJvdXRlTWF0Y2gucGFyYW1zLFxuICAgICAgbmV4dFVybCxcbiAgICAgIG5leHRQYXJhbXM6IG5leHRSb3V0ZU1hdGNoLnBhcmFtc1xuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGFjdGlvblJlc3VsdCxcbiAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlOiBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSB8fCBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudFJvdXRlTWF0Y2gsIG5leHRSb3V0ZU1hdGNoKVxuICAgIH0pKTtcbiAgfSk7IC8vIFBpY2sgZmV0Y2hlci5sb2FkcyB0aGF0IG5lZWQgdG8gYmUgcmV2YWxpZGF0ZWRcblxuICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlcnMgPSBbXTtcbiAgZmV0Y2hMb2FkTWF0Y2hlcy5mb3JFYWNoKChmLCBrZXkpID0+IHtcbiAgICAvLyBEb24ndCByZXZhbGlkYXRlIGlmIGZldGNoZXIgd29uJ3QgYmUgcHJlc2VudCBpbiB0aGUgc3Vic2VxdWVudCByZW5kZXJcbiAgICBpZiAoIW1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IGYucm91dGVJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmV0Y2hlck1hdGNoZXMgPSBtYXRjaFJvdXRlcyhyb3V0ZXNUb1VzZSwgZi5wYXRoLCBiYXNlbmFtZSk7IC8vIElmIHRoZSBmZXRjaGVyIHBhdGggbm8gbG9uZ2VyIG1hdGNoZXMsIHB1c2ggaXQgaW4gd2l0aCBudWxsIG1hdGNoZXMgc29cbiAgICAvLyB3ZSBjYW4gdHJpZ2dlciBhIDQwNCBpbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGFcblxuICAgIGlmICghZmV0Y2hlck1hdGNoZXMpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXlcbiAgICAgIH0sIGYsIHtcbiAgICAgICAgbWF0Y2hlczogbnVsbCxcbiAgICAgICAgbWF0Y2g6IG51bGxcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmV0Y2hlck1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2goZmV0Y2hlck1hdGNoZXMsIGYucGF0aCk7XG5cbiAgICBpZiAoY2FuY2VsbGVkRmV0Y2hlckxvYWRzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXksXG4gICAgICAgIG1hdGNoZXM6IGZldGNoZXJNYXRjaGVzLFxuICAgICAgICBtYXRjaDogZmV0Y2hlck1hdGNoXG4gICAgICB9LCBmKSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZXZhbGlkYXRpbmcgZmV0Y2hlcnMgYXJlIGRlY291cGxlZCBmcm9tIHRoZSByb3V0ZSBtYXRjaGVzIHNpbmNlIHRoZXlcbiAgICAvLyBoaXQgYSBzdGF0aWMgaHJlZiwgc28gdGhleSBfYWx3YXlzXyBjaGVjayBzaG91bGRSZXZhbGlkYXRlIGFuZCB0aGVcbiAgICAvLyBkZWZhdWx0IGlzIHN0cmljdGx5IGlmIGEgcmV2YWxpZGF0aW9uIGlzIGV4cGxpY2l0bHkgcmVxdWlyZWQgKGFjdGlvblxuICAgIC8vIHN1Ym1pc3Npb25zLCB1c2VSZXZhbGlkYXRvciwgWC1SZW1peC1SZXZhbGlkYXRlKS5cblxuXG4gICAgbGV0IHNob3VsZFJldmFsaWRhdGUgPSBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGZldGNoZXJNYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIGN1cnJlbnRQYXJhbXM6IHN0YXRlLm1hdGNoZXNbc3RhdGUubWF0Y2hlcy5sZW5ndGggLSAxXS5wYXJhbXMsXG4gICAgICBuZXh0VXJsLFxuICAgICAgbmV4dFBhcmFtczogbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtc1xuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGFjdGlvblJlc3VsdCxcbiAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlXG4gICAgfSkpO1xuXG4gICAgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXksXG4gICAgICAgIG1hdGNoZXM6IGZldGNoZXJNYXRjaGVzLFxuICAgICAgICBtYXRjaDogZmV0Y2hlck1hdGNoXG4gICAgICB9LCBmKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFtuYXZpZ2F0aW9uTWF0Y2hlcywgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdO1xufVxuXG5mdW5jdGlvbiBpc05ld0xvYWRlcihjdXJyZW50TG9hZGVyRGF0YSwgY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgaXNOZXcgPSAvLyBbYV0gLT4gW2EsIGJdXG4gICFjdXJyZW50TWF0Y2ggfHwgLy8gW2EsIGJdIC0+IFthLCBjXVxuICBtYXRjaC5yb3V0ZS5pZCAhPT0gY3VycmVudE1hdGNoLnJvdXRlLmlkOyAvLyBIYW5kbGUgdGhlIGNhc2UgdGhhdCB3ZSBkb24ndCBoYXZlIGRhdGEgZm9yIGEgcmUtdXNlZCByb3V0ZSwgcG90ZW50aWFsbHlcbiAgLy8gZnJvbSBhIHByaW9yIGVycm9yIG9yIGZyb20gYSBjYW5jZWxsZWQgcGVuZGluZyBkZWZlcnJlZFxuXG4gIGxldCBpc01pc3NpbmdEYXRhID0gY3VycmVudExvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID09PSB1bmRlZmluZWQ7IC8vIEFsd2F5cyBsb2FkIGlmIHRoaXMgaXMgYSBuZXQtbmV3IHJvdXRlIG9yIHdlIGRvbid0IHlldCBoYXZlIGRhdGFcblxuICByZXR1cm4gaXNOZXcgfHwgaXNNaXNzaW5nRGF0YTtcbn1cblxuZnVuY3Rpb24gaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRNYXRjaCwgbWF0Y2gpIHtcbiAgbGV0IGN1cnJlbnRQYXRoID0gY3VycmVudE1hdGNoLnJvdXRlLnBhdGg7XG4gIHJldHVybiAoLy8gcGFyYW0gY2hhbmdlIGZvciB0aGlzIG1hdGNoLCAvdXNlcnMvMTIzIC0+IC91c2Vycy80NTZcbiAgICBjdXJyZW50TWF0Y2gucGF0aG5hbWUgIT09IG1hdGNoLnBhdGhuYW1lIHx8IC8vIHNwbGF0IHBhcmFtIGNoYW5nZWQsIHdoaWNoIGlzIG5vdCBwcmVzZW50IGluIG1hdGNoLnBhdGhcbiAgICAvLyBlLmcuIC9maWxlcy9pbWFnZXMvYXZhdGFyLmpwZyAtPiBmaWxlcy9maW5hbmNlcy54bHNcbiAgICBjdXJyZW50UGF0aCAhPSBudWxsICYmIGN1cnJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSAmJiBjdXJyZW50TWF0Y2gucGFyYW1zW1wiKlwiXSAhPT0gbWF0Y2gucGFyYW1zW1wiKlwiXVxuICApO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGxvYWRlck1hdGNoLCBhcmcpIHtcbiAgaWYgKGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUpIHtcbiAgICBsZXQgcm91dGVDaG9pY2UgPSBsb2FkZXJNYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKGFyZyk7XG5cbiAgICBpZiAodHlwZW9mIHJvdXRlQ2hvaWNlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIHJvdXRlQ2hvaWNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmcuZGVmYXVsdFNob3VsZFJldmFsaWRhdGU7XG59XG4vKipcbiAqIEV4ZWN1dGUgcm91dGUubGF6eSgpIG1ldGhvZHMgdG8gbGF6aWx5IGxvYWQgcm91dGUgbW9kdWxlcyAobG9hZGVyLCBhY3Rpb24sXG4gKiBzaG91bGRSZXZhbGlkYXRlKSBhbmQgdXBkYXRlIHRoZSByb3V0ZU1hbmlmZXN0IGluIHBsYWNlIHdoaWNoIHNoYXJlcyBvYmplY3RzXG4gKiB3aXRoIGRhdGFSb3V0ZXMgc28gdGhvc2UgZ2V0IHVwZGF0ZWQgYXMgd2VsbC5cbiAqL1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRMYXp5Um91dGVNb2R1bGUocm91dGUsIGRldGVjdEVycm9yQm91bmRhcnksIG1hbmlmZXN0KSB7XG4gIGlmICghcm91dGUubGF6eSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBsYXp5Um91dGUgPSBhd2FpdCByb3V0ZS5sYXp5KCk7IC8vIElmIHRoZSBsYXp5IHJvdXRlIGZ1bmN0aW9uIHdhcyBleGVjdXRlZCBhbmQgcmVtb3ZlZCBieSBhbm90aGVyIHBhcmFsbGVsXG4gIC8vIGNhbGwgdGhlbiB3ZSBjYW4gcmV0dXJuIC0gZmlyc3QgbGF6eSgpIHRvIGZpbmlzaCB3aW5zIGJlY2F1c2UgdGhlIHJldHVyblxuICAvLyB2YWx1ZSBvZiBsYXp5IGlzIGV4cGVjdGVkIHRvIGJlIHN0YXRpY1xuXG4gIGlmICghcm91dGUubGF6eSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCByb3V0ZVRvVXBkYXRlID0gbWFuaWZlc3Rbcm91dGUuaWRdO1xuICBpbnZhcmlhbnQocm91dGVUb1VwZGF0ZSwgXCJObyByb3V0ZSBmb3VuZCBpbiBtYW5pZmVzdFwiKTsgLy8gVXBkYXRlIHRoZSByb3V0ZSBpbiBwbGFjZS4gIFRoaXMgc2hvdWxkIGJlIHNhZmUgYmVjYXVzZSB0aGVyZSdzIG5vIHdheVxuICAvLyB3ZSBjb3VsZCB5ZXQgYmUgc2l0dGluZyBvbiB0aGlzIHJvdXRlIGFzIHdlIGNhbid0IGdldCB0aGVyZSB3aXRob3V0XG4gIC8vIHJlc29sdmluZyBsYXp5KCkgZmlyc3QuXG4gIC8vXG4gIC8vIFRoaXMgaXMgZGlmZmVyZW50IHRoYW4gdGhlIEhNUiBcInVwZGF0ZVwiIHVzZS1jYXNlIHdoZXJlIHdlIG1heSBhY3RpdmVseSBiZVxuICAvLyBvbiB0aGUgcm91dGUgYmVpbmcgdXBkYXRlZC4gIFRoZSBtYWluIGNvbmNlcm4gYm9pbHMgZG93biB0byBcImRvZXMgdGhpc1xuICAvLyBtdXRhdGlvbiBhZmZlY3QgYW55IG9uZ29pbmcgbmF2aWdhdGlvbnMgb3IgYW55IGN1cnJlbnQgc3RhdGUubWF0Y2hlc1xuICAvLyB2YWx1ZXM/XCIuICBJZiBub3QsIGl0IHNob3VsZCBiZSBzYWZlIHRvIHVwZGF0ZSBpbiBwbGFjZS5cblxuICBsZXQgcm91dGVVcGRhdGVzID0ge307XG5cbiAgZm9yIChsZXQgbGF6eVJvdXRlUHJvcGVydHkgaW4gbGF6eVJvdXRlKSB7XG4gICAgbGV0IHN0YXRpY1JvdXRlVmFsdWUgPSByb3V0ZVRvVXBkYXRlW2xhenlSb3V0ZVByb3BlcnR5XTtcbiAgICBsZXQgaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkID0gc3RhdGljUm91dGVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIC8vIFRoaXMgcHJvcGVydHkgaXNuJ3Qgc3RhdGljIHNpbmNlIGl0IHNob3VsZCBhbHdheXMgYmUgdXBkYXRlZCBiYXNlZFxuICAgIC8vIG9uIHRoZSByb3V0ZSB1cGRhdGVzXG4gICAgbGF6eVJvdXRlUHJvcGVydHkgIT09IFwiaGFzRXJyb3JCb3VuZGFyeVwiO1xuICAgIHdhcm5pbmcoIWlzUHJvcGVydHlTdGF0aWNhbGx5RGVmaW5lZCwgXCJSb3V0ZSBcXFwiXCIgKyByb3V0ZVRvVXBkYXRlLmlkICsgXCJcXFwiIGhhcyBhIHN0YXRpYyBwcm9wZXJ0eSBcXFwiXCIgKyBsYXp5Um91dGVQcm9wZXJ0eSArIFwiXFxcIiBcIiArIFwiZGVmaW5lZCBidXQgaXRzIGxhenkgZnVuY3Rpb24gaXMgYWxzbyByZXR1cm5pbmcgYSB2YWx1ZSBmb3IgdGhpcyBwcm9wZXJ0eS4gXCIgKyAoXCJUaGUgbGF6eSByb3V0ZSBwcm9wZXJ0eSBcXFwiXCIgKyBsYXp5Um91dGVQcm9wZXJ0eSArIFwiXFxcIiB3aWxsIGJlIGlnbm9yZWQuXCIpKTtcblxuICAgIGlmICghaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkICYmICFpbW11dGFibGVSb3V0ZUtleXMuaGFzKGxhenlSb3V0ZVByb3BlcnR5KSkge1xuICAgICAgcm91dGVVcGRhdGVzW2xhenlSb3V0ZVByb3BlcnR5XSA9IGxhenlSb3V0ZVtsYXp5Um91dGVQcm9wZXJ0eV07XG4gICAgfVxuICB9IC8vIE11dGF0ZSB0aGUgcm91dGUgd2l0aCB0aGUgcHJvdmlkZWQgdXBkYXRlcy4gIERvIHRoaXMgZmlyc3Qgc28gd2UgcGFzc1xuICAvLyB0aGUgdXBkYXRlZCB2ZXJzaW9uIHRvIGRldGVjdEVycm9yQm91bmRhcnlcblxuXG4gIE9iamVjdC5hc3NpZ24ocm91dGVUb1VwZGF0ZSwgcm91dGVVcGRhdGVzKTsgLy8gTXV0YXRlIHRoZSBgaGFzRXJyb3JCb3VuZGFyeWAgcHJvcGVydHkgb24gdGhlIHJvdXRlIGJhc2VkIG9uIHRoZSByb3V0ZVxuICAvLyB1cGRhdGVzIGFuZCByZW1vdmUgdGhlIGBsYXp5YCBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNvbHZlIHRoZSBsYXp5XG4gIC8vIHJvdXRlIGFnYWluLlxuXG4gIE9iamVjdC5hc3NpZ24ocm91dGVUb1VwZGF0ZSwge1xuICAgIC8vIFRvIGtlZXAgdGhpbmdzIGZyYW1ld29yayBhZ25vc3RpYywgd2UgdXNlIHRoZSBwcm92aWRlZFxuICAgIC8vIGBkZXRlY3RFcnJvckJvdW5kYXJ5YCBmdW5jdGlvbiB0byBzZXQgdGhlIGBoYXNFcnJvckJvdW5kYXJ5YCByb3V0ZVxuICAgIC8vIHByb3BlcnR5IHNpbmNlIHRoZSBsb2dpYyB3aWxsIGRpZmZlciBiZXR3ZWVuIGZyYW1ld29ya3MuXG4gICAgaGFzRXJyb3JCb3VuZGFyeTogZGV0ZWN0RXJyb3JCb3VuZGFyeShfZXh0ZW5kcyh7fSwgcm91dGVUb1VwZGF0ZSkpLFxuICAgIGxhenk6IHVuZGVmaW5lZFxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbExvYWRlck9yQWN0aW9uKHR5cGUsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgYmFzZW5hbWUsIGlzU3RhdGljUmVxdWVzdCwgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0KSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZW5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGlmIChpc1N0YXRpY1JlcXVlc3QgPT09IHZvaWQgMCkge1xuICAgIGlzU3RhdGljUmVxdWVzdCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUm91dGVSZXF1ZXN0ID09PSB2b2lkIDApIHtcbiAgICBpc1JvdXRlUmVxdWVzdCA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHJlc3VsdFR5cGU7XG4gIGxldCByZXN1bHQ7XG4gIGxldCBvblJlamVjdDtcblxuICBsZXQgcnVuSGFuZGxlciA9IGhhbmRsZXIgPT4ge1xuICAgIC8vIFNldHVwIGEgcHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHNvIHRoYXQgYWJvcnQgc2lnbmFscyBzaG9ydCBjaXJjdWl0XG4gICAgbGV0IHJlamVjdDtcbiAgICBsZXQgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuXG4gICAgb25SZWplY3QgPSAoKSA9PiByZWplY3QoKTtcblxuICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvblJlamVjdCk7XG4gICAgcmV0dXJuIFByb21pc2UucmFjZShbaGFuZGxlcih7XG4gICAgICByZXF1ZXN0LFxuICAgICAgcGFyYW1zOiBtYXRjaC5wYXJhbXMsXG4gICAgICBjb250ZXh0OiByZXF1ZXN0Q29udGV4dFxuICAgIH0pLCBhYm9ydFByb21pc2VdKTtcbiAgfTtcblxuICB0cnkge1xuICAgIGxldCBoYW5kbGVyID0gbWF0Y2gucm91dGVbdHlwZV07XG5cbiAgICBpZiAobWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgLy8gUnVuIHN0YXRpY2FsbHkgZGVmaW5lZCBoYW5kbGVyIGluIHBhcmFsbGVsIHdpdGggbGF6eSgpXG4gICAgICAgIGxldCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbcnVuSGFuZGxlcihoYW5kbGVyKSwgbG9hZExhenlSb3V0ZU1vZHVsZShtYXRjaC5yb3V0ZSwgZGV0ZWN0RXJyb3JCb3VuZGFyeSwgbWFuaWZlc3QpXSk7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvYWQgbGF6eSByb3V0ZSBtb2R1bGUsIHRoZW4gcnVuIGFueSByZXR1cm5lZCBoYW5kbGVyXG4gICAgICAgIGF3YWl0IGxvYWRMYXp5Um91dGVNb2R1bGUobWF0Y2gucm91dGUsIGRldGVjdEVycm9yQm91bmRhcnksIG1hbmlmZXN0KTtcbiAgICAgICAgaGFuZGxlciA9IG1hdGNoLnJvdXRlW3R5cGVdO1xuXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgLy8gSGFuZGxlciBzdGlsbCBydW4gZXZlbiBpZiB3ZSBnb3QgaW50ZXJydXB0ZWQgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3lcbiAgICAgICAgICAvLyB3aXRoIHVuLWFib3J0YWJsZSBiZWhhdmlvciBvZiBoYW5kbGVyIGV4ZWN1dGlvbiBvbiBub24tbGF6eSBvclxuICAgICAgICAgIC8vIHByZXZpb3VzbHktbGF6eS1sb2FkZWQgcm91dGVzXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcnVuSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgICAgICByb3V0ZUlkOiBtYXRjaC5yb3V0ZS5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGxhenkoKSByb3V0ZSBoYXMgbm8gbG9hZGVyIHRvIHJ1bi4gIFNob3J0IGNpcmN1aXQgaGVyZSBzbyB3ZSBkb24ndFxuICAgICAgICAgIC8vIGhpdCB0aGUgaW52YXJpYW50IGJlbG93IHRoYXQgZXJyb3JzIG9uIHJldHVybmluZyB1bmRlZmluZWQuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52YXJpYW50KGhhbmRsZXIsIFwiQ291bGQgbm90IGZpbmQgdGhlIFwiICsgdHlwZSArIFwiIHRvIHJ1biBvbiB0aGUgXFxcIlwiICsgbWF0Y2gucm91dGUuaWQgKyBcIlxcXCIgcm91dGVcIik7XG4gICAgICByZXN1bHQgPSBhd2FpdCBydW5IYW5kbGVyKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIGludmFyaWFudChyZXN1bHQgIT09IHVuZGVmaW5lZCwgXCJZb3UgZGVmaW5lZCBcIiArICh0eXBlID09PSBcImFjdGlvblwiID8gXCJhbiBhY3Rpb25cIiA6IFwiYSBsb2FkZXJcIikgKyBcIiBmb3Igcm91dGUgXCIgKyAoXCJcXFwiXCIgKyBtYXRjaC5yb3V0ZS5pZCArIFwiXFxcIiBidXQgZGlkbid0IHJldHVybiBhbnl0aGluZyBmcm9tIHlvdXIgYFwiICsgdHlwZSArIFwiYCBcIikgKyBcImZ1bmN0aW9uLiBQbGVhc2UgcmV0dXJuIGEgdmFsdWUgb3IgYG51bGxgLlwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlc3VsdFR5cGUgPSBSZXN1bHRUeXBlLmVycm9yO1xuICAgIHJlc3VsdCA9IGU7XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKG9uUmVqZWN0KSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICBsZXQgc3RhdHVzID0gcmVzdWx0LnN0YXR1czsgLy8gUHJvY2VzcyByZWRpcmVjdHNcblxuICAgIGlmIChyZWRpcmVjdFN0YXR1c0NvZGVzLmhhcyhzdGF0dXMpKSB7XG4gICAgICBsZXQgbG9jYXRpb24gPSByZXN1bHQuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKTtcbiAgICAgIGludmFyaWFudChsb2NhdGlvbiwgXCJSZWRpcmVjdHMgcmV0dXJuZWQvdGhyb3duIGZyb20gbG9hZGVycy9hY3Rpb25zIG11c3QgaGF2ZSBhIExvY2F0aW9uIGhlYWRlclwiKTsgLy8gU3VwcG9ydCByZWxhdGl2ZSByb3V0aW5nIGluIGludGVybmFsIHJlZGlyZWN0c1xuXG4gICAgICBpZiAoIUFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KGxvY2F0aW9uKSkge1xuICAgICAgICBsZXQgYWN0aXZlTWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5pbmRleE9mKG1hdGNoKSArIDEpO1xuICAgICAgICBsZXQgcm91dGVQYXRobmFtZXMgPSBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhhY3RpdmVNYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKTtcbiAgICAgICAgbGV0IHJlc29sdmVkTG9jYXRpb24gPSByZXNvbHZlVG8obG9jYXRpb24sIHJvdXRlUGF0aG5hbWVzLCBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSk7XG4gICAgICAgIGludmFyaWFudChjcmVhdGVQYXRoKHJlc29sdmVkTG9jYXRpb24pLCBcIlVuYWJsZSB0byByZXNvbHZlIHJlZGlyZWN0IGxvY2F0aW9uOiBcIiArIGxvY2F0aW9uKTsgLy8gUHJlcGVuZCB0aGUgYmFzZW5hbWUgdG8gdGhlIHJlZGlyZWN0IGxvY2F0aW9uIGlmIHdlIGhhdmUgb25lXG5cbiAgICAgICAgaWYgKGJhc2VuYW1lKSB7XG4gICAgICAgICAgbGV0IHBhdGggPSByZXNvbHZlZExvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICAgIHJlc29sdmVkTG9jYXRpb24ucGF0aG5hbWUgPSBwYXRoID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYXRpb24gPSBjcmVhdGVQYXRoKHJlc29sdmVkTG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmICghaXNTdGF0aWNSZXF1ZXN0KSB7XG4gICAgICAgIC8vIFN0cmlwIG9mZiB0aGUgcHJvdG9jb2wrb3JpZ2luIGZvciBzYW1lLW9yaWdpbiArIHNhbWUtYmFzZW5hbWUgYWJzb2x1dGVcbiAgICAgICAgLy8gcmVkaXJlY3RzLiBJZiB0aGlzIGlzIGEgc3RhdGljIHJlcXVlc3QsIHdlIGNhbiBsZXQgaXQgZ28gYmFjayB0byB0aGVcbiAgICAgICAgLy8gYnJvd3NlciBhcy1pc1xuICAgICAgICBsZXQgY3VycmVudFVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICBsZXQgdXJsID0gbG9jYXRpb24uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgbG9jYXRpb24pIDogbmV3IFVSTChsb2NhdGlvbik7XG4gICAgICAgIGxldCBpc1NhbWVCYXNlbmFtZSA9IHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBiYXNlbmFtZSkgIT0gbnVsbDtcblxuICAgICAgICBpZiAodXJsLm9yaWdpbiA9PT0gY3VycmVudFVybC5vcmlnaW4gJiYgaXNTYW1lQmFzZW5hbWUpIHtcbiAgICAgICAgICBsb2NhdGlvbiA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2ggKyB1cmwuaGFzaDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEb24ndCBwcm9jZXNzIHJlZGlyZWN0cyBpbiB0aGUgcm91dGVyIGR1cmluZyBzdGF0aWMgcmVxdWVzdHMgcmVxdWVzdHMuXG4gICAgICAvLyBJbnN0ZWFkLCB0aHJvdyB0aGUgUmVzcG9uc2UgYW5kIGxldCB0aGUgc2VydmVyIGhhbmRsZSBpdCB3aXRoIGFuIEhUVFBcbiAgICAgIC8vIHJlZGlyZWN0LiAgV2UgYWxzbyB1cGRhdGUgdGhlIExvY2F0aW9uIGhlYWRlciBpbiBwbGFjZSBpbiB0aGlzIGZsb3cgc29cbiAgICAgIC8vIGJhc2VuYW1lIGFuZCByZWxhdGl2ZSByb3V0aW5nIGlzIHRha2VuIGludG8gYWNjb3VudFxuXG5cbiAgICAgIGlmIChpc1N0YXRpY1JlcXVlc3QpIHtcbiAgICAgICAgcmVzdWx0LmhlYWRlcnMuc2V0KFwiTG9jYXRpb25cIiwgbG9jYXRpb24pO1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUucmVkaXJlY3QsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHJldmFsaWRhdGU6IHJlc3VsdC5oZWFkZXJzLmdldChcIlgtUmVtaXgtUmV2YWxpZGF0ZVwiKSAhPT0gbnVsbFxuICAgICAgfTtcbiAgICB9IC8vIEZvciBTU1Igc2luZ2xlLXJvdXRlIHJlcXVlc3RzLCB3ZSB3YW50IHRvIGhhbmQgUmVzcG9uc2VzIGJhY2sgZGlyZWN0bHlcbiAgICAvLyB3aXRob3V0IHVud3JhcHBpbmcuICBXZSBkbyB0aGlzIHdpdGggdGhlIFF1ZXJ5Um91dGVSZXNwb25zZSB3cmFwcGVyXG4gICAgLy8gaW50ZXJmYWNlIHNvIHdlIGNhbiBrbm93IHdoZXRoZXIgaXQgd2FzIHJldHVybmVkIG9yIHRocm93blxuXG5cbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgICB0aHJvdyB7XG4gICAgICAgIHR5cGU6IHJlc3VsdFR5cGUgfHwgUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICByZXNwb25zZTogcmVzdWx0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCBkYXRhO1xuICAgIGxldCBjb250ZW50VHlwZSA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTsgLy8gQ2hlY2sgYmV0d2VlbiB3b3JkIGJvdW5kYXJpZXMgaW5zdGVhZCBvZiBzdGFydHNXaXRoKCkgZHVlIHRvIHRoZSBsYXN0XG4gICAgLy8gcGFyYWdyYXBoIG9mIGh0dHBzOi8vaHR0cHdnLm9yZy9zcGVjcy9yZmM5MTEwLmh0bWwjZmllbGQuY29udGVudC10eXBlXG5cbiAgICBpZiAoY29udGVudFR5cGUgJiYgL1xcYmFwcGxpY2F0aW9uXFwvanNvblxcYi8udGVzdChjb250ZW50VHlwZSkpIHtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0VHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogcmVzdWx0VHlwZSxcbiAgICAgICAgZXJyb3I6IG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQsIGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgZGF0YSxcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgIH07XG4gIH1cblxuICBpZiAocmVzdWx0VHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiByZXN1bHRUeXBlLFxuICAgICAgZXJyb3I6IHJlc3VsdFxuICAgIH07XG4gIH1cblxuICBpZiAoaXNEZWZlcnJlZERhdGEocmVzdWx0KSkge1xuICAgIHZhciBfcmVzdWx0JGluaXQsIF9yZXN1bHQkaW5pdDI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5kZWZlcnJlZCxcbiAgICAgIGRlZmVycmVkRGF0YTogcmVzdWx0LFxuICAgICAgc3RhdHVzQ29kZTogKF9yZXN1bHQkaW5pdCA9IHJlc3VsdC5pbml0KSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3VsdCRpbml0LnN0YXR1cyxcbiAgICAgIGhlYWRlcnM6ICgoX3Jlc3VsdCRpbml0MiA9IHJlc3VsdC5pbml0KSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3VsdCRpbml0Mi5oZWFkZXJzKSAmJiBuZXcgSGVhZGVycyhyZXN1bHQuaW5pdC5oZWFkZXJzKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICBkYXRhOiByZXN1bHRcbiAgfTtcbn0gLy8gVXRpbGl0eSBtZXRob2QgZm9yIGNyZWF0aW5nIHRoZSBSZXF1ZXN0IGluc3RhbmNlcyBmb3IgbG9hZGVycy9hY3Rpb25zIGR1cmluZ1xuLy8gY2xpZW50LXNpZGUgbmF2aWdhdGlvbnMgYW5kIGZldGNoZXMuICBEdXJpbmcgU1NSIHdlIHdpbGwgYWx3YXlzIGhhdmUgYVxuLy8gUmVxdWVzdCBpbnN0YW5jZSBmcm9tIHRoZSBzdGF0aWMgaGFuZGxlciAocXVlcnkvcXVlcnlSb3V0ZSlcblxuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChoaXN0b3J5LCBsb2NhdGlvbiwgc2lnbmFsLCBzdWJtaXNzaW9uKSB7XG4gIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdHJpcEhhc2hGcm9tUGF0aChsb2NhdGlvbikpLnRvU3RyaW5nKCk7XG4gIGxldCBpbml0ID0ge1xuICAgIHNpZ25hbFxuICB9O1xuXG4gIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YVxuICAgIH0gPSBzdWJtaXNzaW9uOyAvLyBEaWRuJ3QgdGhpbmsgd2UgbmVlZGVkIHRoaXMgYnV0IGl0IHR1cm5zIG91dCB1bmxpa2Ugb3RoZXIgbWV0aG9kcywgcGF0Y2hcbiAgICAvLyB3b24ndCBiZSBwcm9wZXJseSBub3JtYWxpemVkIHRvIHVwcGVyY2FzZSBhbmQgcmVzdWx0cyBpbiBhIDQwNSBlcnJvci5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW1ldGhvZFxuXG4gICAgaW5pdC5tZXRob2QgPSBmb3JtTWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgaW5pdC5ib2R5ID0gZm9ybUVuY1R5cGUgPT09IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgPyBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhmb3JtRGF0YSkgOiBmb3JtRGF0YTtcbiAgfSAvLyBDb250ZW50LVR5cGUgaXMgaW5mZXJyZWQgKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdClcblxuXG4gIHJldHVybiBuZXcgUmVxdWVzdCh1cmwsIGluaXQpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhmb3JtRGF0YSkge1xuICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNjb252ZXJ0aW5nLWFuLWVudHJ5LWxpc3QtdG8tYS1saXN0LW9mLW5hbWUtdmFsdWUtcGFpcnNcbiAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUgaW5zdGFuY2VvZiBGaWxlID8gdmFsdWUubmFtZSA6IHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCBhY3RpdmVEZWZlcnJlZHMpIHtcbiAgLy8gRmlsbCBpbiBsb2FkZXJEYXRhL2Vycm9ycyBmcm9tIG91ciBsb2FkZXJzXG4gIGxldCBsb2FkZXJEYXRhID0ge307XG4gIGxldCBlcnJvcnMgPSBudWxsO1xuICBsZXQgc3RhdHVzQ29kZTtcbiAgbGV0IGZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgbGV0IGxvYWRlckhlYWRlcnMgPSB7fTsgLy8gUHJvY2VzcyBsb2FkZXIgcmVzdWx0cyBpbnRvIHN0YXRlLmxvYWRlckRhdGEvc3RhdGUuZXJyb3JzXG5cbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgbGV0IGlkID0gbWF0Y2hlc1RvTG9hZFtpbmRleF0ucm91dGUuaWQ7XG4gICAgaW52YXJpYW50KCFpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCksIFwiQ2Fubm90IGhhbmRsZSByZWRpcmVjdCByZXN1bHRzIGluIHByb2Nlc3NMb2FkZXJEYXRhXCIpO1xuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gTG9vayB1cHdhcmRzIGZyb20gdGhlIG1hdGNoZWQgcm91dGUgZm9yIHRoZSBjbG9zZXN0IGFuY2VzdG9yXG4gICAgICAvLyBlcnJvciBib3VuZGFyeSwgZGVmYXVsdGluZyB0byB0aGUgcm9vdCBtYXRjaFxuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGlkKTtcbiAgICAgIGxldCBlcnJvciA9IHJlc3VsdC5lcnJvcjsgLy8gSWYgd2UgaGF2ZSBhIHBlbmRpbmcgYWN0aW9uIGVycm9yLCB3ZSByZXBvcnQgaXQgYXQgdGhlIGhpZ2hlc3Qtcm91dGVcbiAgICAgIC8vIHRoYXQgdGhyb3dzIGEgbG9hZGVyIGVycm9yLCBhbmQgdGhlbiBjbGVhciBpdCBvdXQgdG8gaW5kaWNhdGUgdGhhdFxuICAgICAgLy8gaXQgd2FzIGNvbnN1bWVkXG5cbiAgICAgIGlmIChwZW5kaW5nRXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBPYmplY3QudmFsdWVzKHBlbmRpbmdFcnJvcilbMF07XG4gICAgICAgIHBlbmRpbmdFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IHt9OyAvLyBQcmVmZXIgaGlnaGVyIGVycm9yIHZhbHVlcyBpZiBsb3dlciBlcnJvcnMgYnViYmxlIHRvIHRoZSBzYW1lIGJvdW5kYXJ5XG5cbiAgICAgIGlmIChlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0gPT0gbnVsbCkge1xuICAgICAgICBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0gPSBlcnJvcjtcbiAgICAgIH0gLy8gQ2xlYXIgb3VyIGFueSBwcmlvciBsb2FkZXJEYXRhIGZvciB0aGUgdGhyb3dpbmcgcm91dGVcblxuXG4gICAgICBsb2FkZXJEYXRhW2lkXSA9IHVuZGVmaW5lZDsgLy8gT25jZSB3ZSBmaW5kIG91ciBmaXJzdCAoaGlnaGVzdCkgZXJyb3IsIHdlIHNldCB0aGUgc3RhdHVzIGNvZGUgYW5kXG4gICAgICAvLyBwcmV2ZW50IGRlZXBlciBzdGF0dXMgY29kZXMgZnJvbSBvdmVycmlkaW5nXG5cbiAgICAgIGlmICghZm91bmRFcnJvcikge1xuICAgICAgICBmb3VuZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgc3RhdHVzQ29kZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgbG9hZGVySGVhZGVyc1tpZF0gPSByZXN1bHQuaGVhZGVycztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICBhY3RpdmVEZWZlcnJlZHMuc2V0KGlkLCByZXN1bHQuZGVmZXJyZWREYXRhKTtcbiAgICAgICAgbG9hZGVyRGF0YVtpZF0gPSByZXN1bHQuZGVmZXJyZWREYXRhLmRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkZXJEYXRhW2lkXSA9IHJlc3VsdC5kYXRhO1xuICAgICAgfSAvLyBFcnJvciBzdGF0dXMgY29kZXMgYWx3YXlzIG92ZXJyaWRlIHN1Y2Nlc3Mgc3RhdHVzIGNvZGVzLCBidXQgaWYgYWxsXG4gICAgICAvLyBsb2FkZXJzIGFyZSBzdWNjZXNzZnVsIHdlIHRha2UgdGhlIGRlZXBlc3Qgc3RhdHVzIGNvZGUuXG5cblxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXNDb2RlICE9IG51bGwgJiYgcmVzdWx0LnN0YXR1c0NvZGUgIT09IDIwMCAmJiAhZm91bmRFcnJvcikge1xuICAgICAgICBzdGF0dXNDb2RlID0gcmVzdWx0LnN0YXR1c0NvZGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuaGVhZGVycykge1xuICAgICAgICBsb2FkZXJIZWFkZXJzW2lkXSA9IHJlc3VsdC5oZWFkZXJzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIElmIHdlIGRpZG4ndCBjb25zdW1lIHRoZSBwZW5kaW5nIGFjdGlvbiBlcnJvciAoaS5lLiwgYWxsIGxvYWRlcnNcbiAgLy8gcmVzb2x2ZWQpLCB0aGVuIGNvbnN1bWUgaXQgaGVyZS4gIEFsc28gY2xlYXIgb3V0IGFueSBsb2FkZXJEYXRhIGZvciB0aGVcbiAgLy8gdGhyb3dpbmcgcm91dGVcblxuICBpZiAocGVuZGluZ0Vycm9yKSB7XG4gICAgZXJyb3JzID0gcGVuZGluZ0Vycm9yO1xuICAgIGxvYWRlckRhdGFbT2JqZWN0LmtleXMocGVuZGluZ0Vycm9yKVswXV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzLFxuICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUgfHwgMjAwLFxuICAgIGxvYWRlckhlYWRlcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpIHtcbiAgbGV0IHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9yc1xuICB9ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nRXJyb3IsIGFjdGl2ZURlZmVycmVkcyk7IC8vIFByb2Nlc3MgcmVzdWx0cyBmcm9tIG91ciByZXZhbGlkYXRpbmcgZmV0Y2hlcnNcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IHtcbiAgICAgIGtleSxcbiAgICAgIG1hdGNoXG4gICAgfSA9IHJldmFsaWRhdGluZ0ZldGNoZXJzW2luZGV4XTtcbiAgICBpbnZhcmlhbnQoZmV0Y2hlclJlc3VsdHMgIT09IHVuZGVmaW5lZCAmJiBmZXRjaGVyUmVzdWx0c1tpbmRleF0gIT09IHVuZGVmaW5lZCwgXCJEaWQgbm90IGZpbmQgY29ycmVzcG9uZGluZyBmZXRjaGVyIHJlc3VsdFwiKTtcbiAgICBsZXQgcmVzdWx0ID0gZmV0Y2hlclJlc3VsdHNbaW5kZXhdOyAvLyBQcm9jZXNzIGZldGNoZXIgbm9uLXJlZGlyZWN0IGVycm9yc1xuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIG1hdGNoID09IG51bGwgPyB2b2lkIDAgOiBtYXRjaC5yb3V0ZS5pZCk7XG5cbiAgICAgIGlmICghKGVycm9ycyAmJiBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0pKSB7XG4gICAgICAgIGVycm9ycyA9IF9leHRlbmRzKHt9LCBlcnJvcnMsIHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFNob3VsZCBuZXZlciBnZXQgaGVyZSwgcmVkaXJlY3RzIHNob3VsZCBnZXQgcHJvY2Vzc2VkIGFib3ZlLCBidXQgd2VcbiAgICAgIC8vIGtlZXAgdGhpcyB0byB0eXBlIG5hcnJvdyB0byBhIHN1Y2Nlc3MgcmVzdWx0IGluIHRoZSBlbHNlXG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVW5oYW5kbGVkIGZldGNoZXIgcmV2YWxpZGF0aW9uIHJlZGlyZWN0XCIpO1xuICAgIH0gZWxzZSBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIGRlZmVycmVkIGRhdGEgc2hvdWxkIGJlIGF3YWl0ZWQgZm9yIGZldGNoZXJzXG4gICAgICAvLyBpbiByZXNvbHZlRGVmZXJyZWRSZXN1bHRzXG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVW5oYW5kbGVkIGZldGNoZXIgZGVmZXJyZWQgZGF0YVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9yc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxvYWRlckRhdGEobG9hZGVyRGF0YSwgbmV3TG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKSB7XG4gIGxldCBtZXJnZWRMb2FkZXJEYXRhID0gX2V4dGVuZHMoe30sIG5ld0xvYWRlckRhdGEpO1xuXG4gIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICBsZXQgaWQgPSBtYXRjaC5yb3V0ZS5pZDtcblxuICAgIGlmIChuZXdMb2FkZXJEYXRhLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgaWYgKG5ld0xvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkTG9hZGVyRGF0YVtpZF0gPSBuZXdMb2FkZXJEYXRhW2lkXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQgJiYgbWF0Y2gucm91dGUubG9hZGVyKSB7XG4gICAgICAvLyBQcmVzZXJ2ZSBleGlzdGluZyBrZXlzIG5vdCBpbmNsdWRlZCBpbiBuZXdMb2FkZXJEYXRhIGFuZCB3aGVyZSBhIGxvYWRlclxuICAgICAgLy8gd2Fzbid0IHJlbW92ZWQgYnkgSE1SXG4gICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IGxvYWRlckRhdGFbaWRdO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gRG9uJ3Qga2VlcCBhbnkgbG9hZGVyIGRhdGEgYmVsb3cgdGhlIGJvdW5kYXJ5XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkTG9hZGVyRGF0YTtcbn0gLy8gRmluZCB0aGUgbmVhcmVzdCBlcnJvciBib3VuZGFyeSwgbG9va2luZyB1cHdhcmRzIGZyb20gdGhlIGxlYWYgcm91dGUgKG9yIHRoZVxuLy8gcm91dGUgc3BlY2lmaWVkIGJ5IHJvdXRlSWQpIGZvciB0aGUgY2xvc2VzdCBhbmNlc3RvciBlcnJvciBib3VuZGFyeSxcbi8vIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2hcblxuXG5mdW5jdGlvbiBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIHJvdXRlSWQpIHtcbiAgbGV0IGVsaWdpYmxlTWF0Y2hlcyA9IHJvdXRlSWQgPyBtYXRjaGVzLnNsaWNlKDAsIG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkgKyAxKSA6IFsuLi5tYXRjaGVzXTtcbiAgcmV0dXJuIGVsaWdpYmxlTWF0Y2hlcy5yZXZlcnNlKCkuZmluZChtID0+IG0ucm91dGUuaGFzRXJyb3JCb3VuZGFyeSA9PT0gdHJ1ZSkgfHwgbWF0Y2hlc1swXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXMpIHtcbiAgLy8gUHJlZmVyIGEgcm9vdCBsYXlvdXQgcm91dGUgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIHNoaW0gaW4gYSByb3V0ZSBvYmplY3RcbiAgbGV0IHJvdXRlID0gcm91dGVzLmZpbmQociA9PiByLmluZGV4IHx8ICFyLnBhdGggfHwgci5wYXRoID09PSBcIi9cIikgfHwge1xuICAgIGlkOiBcIl9fc2hpbS1lcnJvci1yb3V0ZV9fXCJcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBbe1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgcGF0aG5hbWVCYXNlOiBcIlwiLFxuICAgICAgcm91dGVcbiAgICB9XSxcbiAgICByb3V0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKHN0YXR1cywgX3RlbXA0KSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUsXG4gICAgcm91dGVJZCxcbiAgICBtZXRob2QsXG4gICAgdHlwZVxuICB9ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNDtcbiAgbGV0IHN0YXR1c1RleHQgPSBcIlVua25vd24gU2VydmVyIEVycm9yXCI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlVua25vd24gQHJlbWl4LXJ1bi9yb3V0ZXIgZXJyb3JcIjtcblxuICBpZiAoc3RhdHVzID09PSA0MDApIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJCYWQgUmVxdWVzdFwiO1xuXG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtYWRlIGEgXCIgKyBtZXRob2QgKyBcIiByZXF1ZXN0IHRvIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiIGJ1dCBcIiArIChcImRpZCBub3QgcHJvdmlkZSBhIGBsb2FkZXJgIGZvciByb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiLCBcIikgKyBcInNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRlZmVyLWFjdGlvblwiKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImRlZmVyKCkgaXMgbm90IHN1cHBvcnRlZCBpbiBhY3Rpb25zXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiRm9yYmlkZGVuXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJSb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiIGRvZXMgbm90IG1hdGNoIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA0KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTm90IEZvdW5kXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJObyByb3V0ZSBtYXRjaGVzIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA1KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCI7XG5cbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCIgcmVxdWVzdCB0byBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIiBidXQgXCIgKyAoXCJkaWQgbm90IHByb3ZpZGUgYW4gYGFjdGlvbmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJJbnZhbGlkIHJlcXVlc3QgbWV0aG9kIFxcXCJcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCJcXFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cyB8fCA1MDAsIHN0YXR1c1RleHQsIG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpLCB0cnVlKTtcbn0gLy8gRmluZCBhbnkgcmV0dXJuZWQgcmVkaXJlY3QgZXJyb3JzLCBzdGFydGluZyBmcm9tIHRoZSBsb3dlc3QgbWF0Y2hcblxuXG5mdW5jdGlvbiBmaW5kUmVkaXJlY3QocmVzdWx0cykge1xuICBmb3IgKGxldCBpID0gcmVzdWx0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBIYXNoRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHBhdGgpIDogcGF0aDtcbiAgcmV0dXJuIGNyZWF0ZVBhdGgoX2V4dGVuZHMoe30sIHBhcnNlZFBhdGgsIHtcbiAgICBoYXNoOiBcIlwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gaXNIYXNoQ2hhbmdlT25seShhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggIT09IGIuaGFzaDtcbn1cblxuZnVuY3Rpb24gaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBSZXN1bHRUeXBlLmRlZmVycmVkO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC50eXBlKSA9PT0gUmVzdWx0VHlwZS5yZWRpcmVjdDtcbn1cblxuZnVuY3Rpb24gaXNEZWZlcnJlZERhdGEodmFsdWUpIHtcbiAgbGV0IGRlZmVycmVkID0gdmFsdWU7XG4gIHJldHVybiBkZWZlcnJlZCAmJiB0eXBlb2YgZGVmZXJyZWQgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlZmVycmVkLmRhdGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlZmVycmVkLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBkZWZlcnJlZC5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZGVmZXJyZWQucmVzb2x2ZURhdGEgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuZnVuY3Rpb24gaXNSZXNwb25zZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB2YWx1ZS5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZS5oZWFkZXJzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS5ib2R5ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuXG5mdW5jdGlvbiBpc1JlZGlyZWN0UmVzcG9uc2UocmVzdWx0KSB7XG4gIGlmICghaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gIGxldCBsb2NhdGlvbiA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICByZXR1cm4gc3RhdHVzID49IDMwMCAmJiBzdGF0dXMgPD0gMzk5ICYmIGxvY2F0aW9uICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzUXVlcnlSb3V0ZVJlc3BvbnNlKG9iaikge1xuICByZXR1cm4gb2JqICYmIGlzUmVzcG9uc2Uob2JqLnJlc3BvbnNlKSAmJiAob2JqLnR5cGUgPT09IFJlc3VsdFR5cGUuZGF0YSB8fCBSZXN1bHRUeXBlLmVycm9yKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZE1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkUmVxdWVzdE1ldGhvZHMuaGFzKG1ldGhvZC50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gaXNNdXRhdGlvbk1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkTXV0YXRpb25NZXRob2RzLmhhcyhtZXRob2QudG9Mb3dlckNhc2UoKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVEZWZlcnJlZFJlc3VsdHMoY3VycmVudE1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHNpZ25hbCwgaXNGZXRjaGVyLCBjdXJyZW50TG9hZGVyRGF0YSkge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tpbmRleF07XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlc1RvTG9hZFtpbmRleF07IC8vIElmIHdlIGRvbid0IGhhdmUgYSBtYXRjaCwgdGhlbiB3ZSBjYW4gaGF2ZSBhIGRlZmVycmVkIHJlc3VsdCB0byBkb1xuICAgIC8vIGFueXRoaW5nIHdpdGguICBUaGlzIGlzIGZvciByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgd2hlcmUgdGhlIHJvdXRlIHdhc1xuICAgIC8vIHJlbW92ZWQgZHVyaW5nIEhNUlxuXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRNYXRjaCA9IGN1cnJlbnRNYXRjaGVzLmZpbmQobSA9PiBtLnJvdXRlLmlkID09PSBtYXRjaC5yb3V0ZS5pZCk7XG4gICAgbGV0IGlzUmV2YWxpZGF0aW5nTG9hZGVyID0gY3VycmVudE1hdGNoICE9IG51bGwgJiYgIWlzTmV3Um91dGVJbnN0YW5jZShjdXJyZW50TWF0Y2gsIG1hdGNoKSAmJiAoY3VycmVudExvYWRlckRhdGEgJiYgY3VycmVudExvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdKSAhPT0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSAmJiAoaXNGZXRjaGVyIHx8IGlzUmV2YWxpZGF0aW5nTG9hZGVyKSkge1xuICAgICAgLy8gTm90ZTogd2UgZG8gbm90IGhhdmUgdG8gdG91Y2ggYWN0aXZlRGVmZXJyZWRzIGhlcmUgc2luY2Ugd2UgcmFjZSB0aGVtXG4gICAgICAvLyBhZ2FpbnN0IHRoZSBzaWduYWwgaW4gcmVzb2x2ZURlZmVycmVkRGF0YSBhbmQgdGhleSdsbCBnZXQgYWJvcnRlZFxuICAgICAgLy8gdGhlcmUgaWYgbmVlZGVkXG4gICAgICBhd2FpdCByZXNvbHZlRGVmZXJyZWREYXRhKHJlc3VsdCwgc2lnbmFsLCBpc0ZldGNoZXIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gcmVzdWx0IHx8IHJlc3VsdHNbaW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIHNpZ25hbCwgdW53cmFwKSB7XG4gIGlmICh1bndyYXAgPT09IHZvaWQgMCkge1xuICAgIHVud3JhcCA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IGFib3J0ZWQgPSBhd2FpdCByZXN1bHQuZGVmZXJyZWREYXRhLnJlc29sdmVEYXRhKHNpZ25hbCk7XG5cbiAgaWYgKGFib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodW53cmFwKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRlZmVycmVkRGF0YS51bndyYXBwZWREYXRhXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEhhbmRsZSBhbnkgVHJhY2tlZFByb21pc2UuX2Vycm9yIHZhbHVlcyBlbmNvdW50ZXJlZCB3aGlsZSB1bndyYXBwaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICBkYXRhOiByZXN1bHQuZGVmZXJyZWREYXRhLmRhdGFcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzTmFrZWRJbmRleFF1ZXJ5KHNlYXJjaCkge1xuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLmdldEFsbChcImluZGV4XCIpLnNvbWUodiA9PiB2ID09PSBcIlwiKTtcbn0gLy8gTm90ZTogVGhpcyBzaG91bGQgbWF0Y2ggdGhlIGZvcm1hdCBleHBvcnRlZCBieSB1c2VNYXRjaGVzLCBzbyBpZiB5b3UgY2hhbmdlXG4vLyB0aGlzIHBsZWFzZSBhbHNvIGNoYW5nZSB0aGF0IDopICBFdmVudHVhbGx5IHdlJ2xsIERSWSB0aGlzIHVwXG5cblxuZnVuY3Rpb24gY3JlYXRlVXNlTWF0Y2hlc01hdGNoKG1hdGNoLCBsb2FkZXJEYXRhKSB7XG4gIGxldCB7XG4gICAgcm91dGUsXG4gICAgcGF0aG5hbWUsXG4gICAgcGFyYW1zXG4gIH0gPSBtYXRjaDtcbiAgcmV0dXJuIHtcbiAgICBpZDogcm91dGUuaWQsXG4gICAgcGF0aG5hbWUsXG4gICAgcGFyYW1zLFxuICAgIGRhdGE6IGxvYWRlckRhdGFbcm91dGUuaWRdLFxuICAgIGhhbmRsZTogcm91dGUuaGFuZGxlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKSB7XG4gIGxldCBzZWFyY2ggPSB0eXBlb2YgbG9jYXRpb24gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb24pLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaDtcblxuICBpZiAobWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmluZGV4ICYmIGhhc05ha2VkSW5kZXhRdWVyeShzZWFyY2ggfHwgXCJcIikpIHtcbiAgICAvLyBSZXR1cm4gdGhlIGxlYWYgaW5kZXggcm91dGUgd2hlbiBpbmRleCBpcyBwcmVzZW50XG4gICAgcmV0dXJuIG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgfSAvLyBPdGhlcndpc2UgZ3JhYiB0aGUgZGVlcGVzdCBcInBhdGggY29udHJpYnV0aW5nXCIgbWF0Y2ggKGlnbm9yaW5nIGluZGV4IGFuZFxuICAvLyBwYXRobGVzcyBsYXlvdXQgcm91dGVzKVxuXG5cbiAgbGV0IHBhdGhNYXRjaGVzID0gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcyk7XG4gIHJldHVybiBwYXRoTWF0Y2hlc1twYXRoTWF0Y2hlcy5sZW5ndGggLSAxXTtcbn0gLy8jZW5kcmVnaW9uXG5cbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24sIEVycm9yUmVzcG9uc2UsIElETEVfQkxPQ0tFUiwgSURMRV9GRVRDSEVSLCBJRExFX05BVklHQVRJT04sIFVOU0FGRV9ERUZFUlJFRF9TWU1CT0wsIERlZmVycmVkRGF0YSBhcyBVTlNBRkVfRGVmZXJyZWREYXRhLCBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzIGFzIFVOU0FGRV9jb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzLCBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyBhcyBVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMsIGludmFyaWFudCBhcyBVTlNBRkVfaW52YXJpYW50LCB3YXJuaW5nIGFzIFVOU0FGRV93YXJuaW5nLCBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlciwgY3JlYXRlU3RhdGljSGFuZGxlciwgZGVmZXIsIGdlbmVyYXRlUGF0aCwgZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvciwgZ2V0VG9QYXRobmFtZSwgaXNEZWZlcnJlZERhdGEsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqb2luUGF0aHMsIGpzb24sIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIG5vcm1hbGl6ZVBhdGhuYW1lLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZXNvbHZlUGF0aCwgcmVzb2x2ZVRvLCBzdHJpcEJhc2VuYW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9yZWR1eC9zdG9yZSdcclxuXHJcblxyXG4vLyBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuLy8gY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxuLy8gcm9vdC5yZW5kZXIoXHJcbi8vICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuLy8gICAgICAgICA8TWFpbiAvPlxyXG4vLyAgICAgPC9Qcm92aWRlcj5cclxuLy8gKVxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8TWFpbiAvPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG5jb25zdCBmYWtlUHJvZHVjdHMgPSBbXHJcbiAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3J5XCJ9LFxyXG4gIHtpZDogMiwgbmFtZTogXCJQcnp5cHJhd2EgY3VycnlcIn0sXHJcbiAge2lkOiAzLCBuYW1lOiBcIk9sZWpcIn0sXHJcbiAge2lkOiA0LCBuYW1lOiBcIldvxYJvd2luYSA1MDBnXCJ9LFxyXG4gIHtpZDogNSwgbmFtZTogXCJaaWVtbmlha2lcIn1cclxuXTtcclxuXHJcbmNvbnN0IExhc3RQcm9kdWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhbmVsXHJcbiAgICAgIHRpdGxlPVwiT3N0YXRuaWUgcHJvZHVrdHlcIlxyXG4gICAgICB0aGVtZT1cImlzLWRhbmdlclwiXHJcbiAgICAgIHBhdGg9XCJwcm9kdWN0c1wiXHJcbiAgICAgIGljb25OYW1lPVwicGl6emEtc2xpY2VcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e2Zha2VQcm9kdWN0c30gLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFzdFByb2R1Y3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhbmVsIGZyb20gXCIuLi9QYW5lbFwiO1xyXG5cclxuY29uc3QgZmFrZVJlY2lwZXMgPSBbXHJcbiAge2lkOiAxLCBuYW1lOiBcIlBvbWlkb3Jvd2FcIn0sXHJcbiAge2lkOiAyLCBuYW1lOiBcIkt1cmN6YWsgY3VycnlcIn0sXHJcbiAge2lkOiAzLCBuYW1lOiBcIlNhamdvbmtpXCJ9LFxyXG4gIHtpZDogNCwgbmFtZTogXCJIYW1idXJnZXJcIn0sXHJcbiAge2lkOiA1LCBuYW1lOiBcIlNjaGFib3d5IHogemllbW5pYWthbWlcIn1cclxuXTtcclxuXHJcbmNvbnN0IExhc3RSZWNpcGVzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFuZWxcclxuICAgICAgdGl0bGU9XCJPc3RhdG5pZSBwcnplcGlzeVwiXHJcbiAgICAgIHRoZW1lPVwiaXMtcHJpbWFyeVwiXHJcbiAgICAgIHBhdGg9XCJyZWNpcGVzXCJcclxuICAgICAgaWNvbk5hbWU9XCJmb2xkZXJcIlxyXG4gICAgICBsaXN0RWxlbWVudHM9e2Zha2VSZWNpcGVzfSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0UmVjaXBlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXN0UmVjaXBlcyBmcm9tIFwiLi9MYXN0UmVjaXBlc1wiO1xyXG5pbXBvcnQgTGFzdFByb2R1Y3RzIGZyb20gXCIuL0xhc3RQcm9kdWN0c1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxyXG4gICAgICAgIDxMYXN0UmVjaXBlcy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIj5cclxuICAgICAgICA8TGFzdFByb2R1Y3RzLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IHtOYXZMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIG1haW46IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjNyZW1cIlxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBoYXMtc2hhZG93IGlzLXNwYWNlZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW0gdGl0bGUgaXMtNFwiPlR3b2plUHJ6ZXBpc3kucGw8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjaXBlc1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZvbGRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByemVwaXN5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGhhcy10ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGl6emEtc2xpY2VcIi8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWt0eTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cIm1lbnVcIiBzdHlsZT17e21hcmdpblJpZ2h0OiBcIjRyZW1cIiwgbWFyZ2luVG9wOiBcIjFyZW1cIn19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgUG9kc3Ryb255XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvXCJ9IGV4YWN0IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+U3Ryb25hIGfFgsOzd25hPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9yZWNpcGVzXCJ9IGV4YWN0IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJ6ZXBpc3k8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL3Byb2R1Y3RzXCJ9IGV4YWN0IGFjdGl2ZUNsYXNzTmFtZT17XCJpcy1hY3RpdmVcIn0+UHJvZHVrdHk8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgIEFrY2plXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvcmVjaXBlcy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcnplcGlzPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9wcm9kdWN0cy9hZGRcIn0gYWN0aXZlQ2xhc3NOYW1lPXtcImlzLWFjdGl2ZVwifT5Eb2RhaiBQcm9kdWt0PC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mb3VyLWZpZnRoc1wiPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFJvdXRlciwgUm91dGVzfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiXHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi9QYW5lbFwiO1xyXG5pbXBvcnQgQWxsUHJvZHVjdHMgZnJvbSBcIi4vUHJvZHVjdHNcIjtcclxuaW1wb3J0IEFkZFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdHMvQWRkXCI7XHJcbmltcG9ydCBBbGxSZWNpcGVzIGZyb20gXCIuL1JlY2lwZXNcIjtcclxuaW1wb3J0IEFkZFJlY2lwZSBmcm9tIFwiLi9SZWNpcGVzL0FkZFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vY29udGFpbmVycy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgQWRkUHJvZHVjdHMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQWRkUHJvZHVjdHNcIjtcclxuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSBcIi4vUmVjaXBlcy9TaW5nbGVQcm9kdWN0XCI7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxSb3V0ZSBwYXRoPVwiL3Byb2R1Y3RzXCIgZWxlbWVudD17PFByb2R1Y3RzQ29udGFpbmVyIC8+fSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0c1wiIGVsZW1lbnQ9ezxQcm9kdWN0cyAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy86aWRcIiBlbGVtZW50PXs8U2luZ2xlUHJvZHVjdC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Um91dGUgcGF0aD1cIi9wcm9kdWN0cy9hZGRcIiBlbGVtZW50PXs8QWRkUHJvZHVjdCAvPn0gLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZHVjdHMvYWRkXCIgZWxlbWVudD17PEFkZFByb2R1Y3QgLz59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVjaXBlc1wiIGVsZW1lbnQ9ezxSZWNpcGVzQ29udGFpbmVyIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlY2lwZXMvYWRkXCIgZWxlbWVudD17PEFkZFJlY2lwZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8Um91dGUgcGF0aD1cIi9yZWNpcGVzLzppZFwiIGVsZW1lbnQ9ezxTaW5nbGVSZWNpcGUvPn0vPiovfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iLCJpbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgUGFuZWwgPSAoe3RoZW1lLCB0aXRsZSwgaWNvbk5hbWUsIHBhdGgsIGxpc3RFbGVtZW50cywgaGVhZGluZyA9IHRydWUsIGZvb3RlciA9IHRydWV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcGFuZWwgJHt0aGVtZX1gfT5cclxuICAgICAge2hlYWRpbmcgJiYgPHAgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9wPn1cclxuXHJcbiAgICAgIHtsaXN0RWxlbWVudHMubGVuZ3RoID09PSAwICYmIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYmxvY2tcIj5CcmFrIHdwaXPDs3chPC9kaXY+fVxyXG5cclxuICAgICAge2xpc3RFbGVtZW50cy5sZW5ndGggPiAwICYmIGxpc3RFbGVtZW50cy5tYXAoZWwgPT4gKFxyXG4gICAgICAgIDxMaW5rIHRvPXtgLyR7cGF0aH0vJHtlbC5pZH1gfSBjbGFzc05hbWU9XCJwYW5lbC1ibG9ja1wiIGtleT17ZWwuaWR9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaWNvblwiPjxpIGNsYXNzTmFtZT17YGZhcyBmYS0ke2ljb25OYW1lfWB9Lz48L3NwYW4+XHJcbiAgICAgICAgICB7ZWwubmFtZX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAge2Zvb3RlciAmJiA8Zm9vdGVyIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89e2AvJHtwYXRofWB9IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rIGlzLW91dGxpbmVkIGlzLWZ1bGx3aWR0aFwiIHN0eWxlPXt7bWFyZ2luOiBcIi44cmVtXCJ9fT5ab2JhY3ogd2nEmWNlajwvTGluaz5cclxuICAgICAgPC9mb290ZXI+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuUGFuZWwucHJvcFR5cGVzID0ge1xyXG4gIHRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxpc3RFbGVtZW50czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgaGVhZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZm9vdGVyOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFuZWw7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgQWRkUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6IFwiXCJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHN0YXRlID0ge1xyXG4gIC8vICAgbmFtZTogXCJcIixcclxuICAvLyB9O1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2F2ZVByb2R1Y3QodGhpcy5zdGF0ZS5uYW1lKVxyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7bmFtZTogXCJcIn0pIGRvIHBvcHJhd3lcclxuICB9O1xyXG5cclxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByb2R1a3Q8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+TmF6d2EgcHJvZHVrdHU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJvZHVrdHVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBpcy1ncm91cGVkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJvZHVrdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFuZWwgZnJvbSBcIi4uL1BhbmVsXCI7XHJcblxyXG5cclxuY29uc3QgQWxsUHJvZHVjdHMgPSAoe2FsbFByb2R1Y3RzfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+V3N6eXN0a2llIHByb2R1a3R5PC9oMT5cclxuICAgICAgPFBhbmVsIGljb25OYW1lPXtcImZvbGRlclwifSBwYXRoPXtcInByb2R1Y3RzXCJ9IGxpc3RFbGVtZW50cz17YWxsUHJvZHVjdHN9IGhlYWRpbmc9e2ZhbHNlfSBmb290ZXI9e2ZhbHNlfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbFByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tIFwiLi9TaW5nbGVQcm9kdWN0XCI7XHJcblxyXG5cclxuY2xhc3MgQWRkUmVjaXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXHJcbiAgICAgIGxhc3RLZXk6IDBcclxuICAgIH1cclxuICB9XHJcbiAgLy8gc3RhdGUgPSB7XHJcbiAgLy8gICBuYW1lOiBcIlwiLFxyXG4gIC8vICAgcHJvZHVjdHM6IFt7a2V5OiAwfV0sXHJcbiAgLy8gICBsYXN0S2V5OiAwXHJcbiAgLy8gfTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2F2ZVJlY2lwZSh0aGlzLnN0YXRlKVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKCh7bGFzdEtleSwgcHJvZHVjdHN9KSA9PiAoe1xyXG4gICAgICBwcm9kdWN0czogWy4uLnByb2R1Y3RzLCB7a2V5OiBsYXN0S2V5ICsgMX1dLFxyXG4gICAgICBsYXN0S2V5OiBsYXN0S2V5ICsgMVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2R1Y3RDaG9vc2UgPSAoaW5kZXgsIGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCwgaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoe3Byb2R1Y3RzfSkgPT4gKHtcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcChlbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmtleSA9PT0gaW5kZXggPyB7Li4uZWwsIGlkfSA6IGVsO1xyXG4gICAgICB9KVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVByb2R1Y3REZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHtwcm9kdWN0c30pID0+ICh7XHJcbiAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5maWx0ZXIoKGVsLCBpKSA9PiBpbmRleCAhPT0gaSlcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvZGFqIHByemVwaXM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk5hendhIHByemVwaXN1PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmF6d2EgcHJ6ZXBpc3VcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPk9waXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjXCJcclxuICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGlzIHByemVwaXN1XCJcclxuICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNFwiPkxpc3RhIHByb2R1a3TDs3c8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcclxuICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3RcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3Qua2V5fVxyXG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkID8gcHJvZHVjdC5pZCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e3Byb2R1Y3Qua2V5fVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9kdWN0Q2hvb3NlfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlUHJvZHVjdERlbGV0ZX0vPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICBEb2RhaiBwcm9kdWt0IGRvIHByemVwaXN1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rXCI+RG9kYWogcHJ6ZXBpczwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRSZWNpcGU7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7dXNlUGFyYW1zfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgZmFrZVByb2R1Y3RzID0gW1xyXG4gIHtpZDogMSwgbmFtZTogXCJQb21pZG9yeVwifSxcclxuICB7aWQ6IDIsIG5hbWU6IFwiUHJ6eXByYXdhIGN1cnJ5XCJ9LFxyXG4gIHtpZDogMywgbmFtZTogXCJPbGVqXCJ9LFxyXG4gIHtpZDogNCwgbmFtZTogXCJXb8WCb3dpbmEgNTAwZ1wifSxcclxuICB7aWQ6IDUsIG5hbWU6IFwiWmllbW5pYWtpXCJ9XHJcbl07XHJcblxyXG5jb25zdCBTaW5nbGVQcm9kdWN0ID0gKHtpZCwgaW5kZXgsIG51bWJlciwgb25DaGFuZ2UsIG9uQ2xvc2V9KSA9PiB7XHJcblxyXG4gICAgLy8gY29uc3QgW2lkUHJvZHVjdCwgc2V0UHJvZHVjdElEXSA9IHVzZVN0YXRlKHVzZVBhcmFtcygpLmlkKVxyXG4gICAgLy9cclxuICAgIC8vIGNvbnNvbGUubG9nKGlkKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1kYXJrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cclxuICAgICAgICA8cD5Qcm9kdWt0IHtudW1iZXIgKyAxfTwvcD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBvbkNsb3NlKGluZGV4KX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XeWJpZXJ6Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zha2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwcm9kdWN0LmlkfT57cHJvZHVjdC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBpenphLXNsaWNlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblNpbmdsZVByb2R1Y3QucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBudW1iZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYW5lbCBmcm9tIFwiLi4vUGFuZWxcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy9cclxuLy8gY29uc3QgZmFrZVJlY2lwZXMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBuYW1lOiBcIlBvbWlkb3LDs3drYVwiLFxyXG4vLyAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcclxuLy8gICAgIHByb2R1Y3RzOiBbMSwgMiwgM11cclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAyLFxyXG4vLyAgICAgbmFtZTogXCJDb8WbIGlubmVnb1wiLFxyXG4vLyAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcclxuLy8gICAgIHByb2R1Y3RzOiBbMywgMV1cclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAzLFxyXG4vLyAgICAgbmFtZTogXCJKZXN6Y3plIGlubnkgcHJ6ZXBpc1wiLFxyXG4vLyAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXRxdWUgZGljdGEgZG9sb3JlbXF1ZSBkb2xvcnVtIGV4ZXJjaXRhdGlvbmVtIG1haW9yZXMgbWF4aW1lIG1vbGVzdGlhZSBvZmZpY2lpcywgcXVhc2kgcXVvcyB2b2x1cHRhdGUuIEF1dCBlc3NlIGxhYm9yaW9zYW0gbmVjZXNzaXRhdGlidXMgcXVhbSBxdW9zIHN1c2NpcGl0IHVsbGFtLiBBbWV0LCBkb2xvci5cIixcclxuLy8gICAgIHByb2R1Y3RzOiBbNSwgNl1cclxuLy8gICB9XHJcbi8vIF07XHJcblxyXG5jb25zdCBBbGxSZWNpcGVzID0gKHthbGxSZWNpcGVzfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+V3N6eXN0a2llIHByemVwaXN5PC9oMT5cclxuICAgICAgPFBhbmVsIGljb25OYW1lPXtcImZvbGRlclwifVxyXG4gICAgICAgICAgICAgcGF0aD17XCJyZWNpcGVzXCJ9XHJcbiAgICAgICAgICAgICBsaXN0RWxlbWVudHM9e2FsbFJlY2lwZXN9XHJcbiAgICAgICAgICAgICBoZWFkaW5nPXtmYWxzZX1cclxuICAgICAgICAgICAgIGZvb3Rlcj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsUmVjaXBlcztcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBbGxQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHsgYWxsUHJvZHVjdHMgfSkgPT4ge1xyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBbGxQcm9kdWN0cyBhbGxQcm9kdWN0cz17YWxsUHJvZHVjdHN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGFsbFByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0c1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZHVjdHMpOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IHJlcXVpcmUoJy4vbGliL2hhcycpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7IC8qKi8gfVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArXG4gICAgICAgICAgICAgICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBiaWdpbnQ6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vbGliL2hhcycpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYmlnaW50OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYmlnaW50JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UsIGRhdGEpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnID8gZGF0YToge307XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJyksXG4gICAgICAgICAge2V4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICB2YXIgY2hlY2tlclJlc3VsdCA9IGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChjaGVja2VyUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tlclJlc3VsdC5kYXRhICYmIGhhcyhjaGVja2VyUmVzdWx0LmRhdGEsICdleHBlY3RlZFR5cGUnKSkge1xuICAgICAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChjaGVja2VyUmVzdWx0LmRhdGEuZXhwZWN0ZWRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGV4cGVjdGVkVHlwZXNNZXNzYWdlID0gKGV4cGVjdGVkVHlwZXMubGVuZ3RoID4gMCkgPyAnLCBleHBlY3RlZCBvbmUgb2YgdHlwZSBbJyArIGV4cGVjdGVkVHlwZXMuam9pbignLCAnKSArICddJzogJyc7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgJyArIGV4cGVjdGVkVHlwZXNNZXNzYWdlICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZhbGlkVmFsaWRhdG9yRXJyb3IoY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwga2V5LCB0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXkgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGUgKyAnYC4nXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gaW52YWxpZFZhbGlkYXRvckVycm9yKGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIGtleSwgZ2V0UHJlY2lzZVR5cGUoY2hlY2tlcikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKGhhcyhzaGFwZVR5cGVzLCBrZXkpICYmIHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGludmFsaWRWYWxpZGF0b3JFcnJvcihjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBrZXksIGdldFByZWNpc2VUeXBlKGNoZWNrZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/XG5TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxyPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsdD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LHY9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYmxvY2tcIik6NjAxMjEsdz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx4PWI/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExOCx5PWI/U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpOjYwMTE5O1xuZnVuY3Rpb24geihhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgdDpjYXNlIHI6Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIEEoYSl7cmV0dXJuIHooYSk9PT1tfWV4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtleHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXQ7ZXhwb3J0cy5NZW1vPXI7ZXhwb3J0cy5Qb3J0YWw9ZDtcbmV4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gQShhKXx8eihhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT1BO2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1rfTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT10fTtcbmV4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cn07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Zn07ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cH07XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fGE9PT1xfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXR8fGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1ufHxhLiQkdHlwZW9mPT09d3x8YS4kJHR5cGVvZj09PXh8fGEuJCR0eXBlb2Y9PT15fHxhLiQkdHlwZW9mPT09dil9O2V4cG9ydHMudHlwZU9mPXo7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIERPTSB2Ni4xMC4wXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5LCBSb3V0ZXIsIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgdXNlSHJlZiwgdXNlUmVzb2x2ZWRQYXRoLCB1c2VMb2NhdGlvbiwgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIHVzZU5hdmlnYXRlLCBjcmVhdGVQYXRoLCBVTlNBRkVfUm91dGVDb250ZXh0LCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0aW9uLCB1bnN0YWJsZV91c2VCbG9ja2VyLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEF3YWl0LCBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBOYXZpZ2F0aW9uVHlwZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJQcm92aWRlciwgUm91dGVzLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIGNyZWF0ZU1lbW9yeVJvdXRlciwgY3JlYXRlUGF0aCwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLCBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZW5kZXJNYXRjaGVzLCByZXNvbHZlUGF0aCwgdW5zdGFibGVfdXNlQmxvY2tlciwgdXNlQWN0aW9uRGF0YSwgdXNlQXN5bmNFcnJvciwgdXNlQXN5bmNWYWx1ZSwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2FkZXJEYXRhLCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUmV2YWxpZGF0b3IsIHVzZVJvdXRlRXJyb3IsIHVzZVJvdXRlTG9hZGVyRGF0YSwgdXNlUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBFcnJvclJlc3BvbnNlLCBzdHJpcEJhc2VuYW1lLCBVTlNBRkVfd2FybmluZywgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzIH0gZnJvbSAnQHJlbWl4LXJ1bi9yb3V0ZXInO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5jb25zdCBkZWZhdWx0TWV0aG9kID0gXCJnZXRcIjtcbmNvbnN0IGRlZmF1bHRFbmNUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbmZ1bmN0aW9uIGlzSHRtbEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiB0eXBlb2Ygb2JqZWN0LnRhZ05hbWUgPT09IFwic3RyaW5nXCI7XG59XG5mdW5jdGlvbiBpc0J1dHRvbkVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJidXR0b25cIjtcbn1cbmZ1bmN0aW9uIGlzRm9ybUVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJmb3JtXCI7XG59XG5mdW5jdGlvbiBpc0lucHV0RWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIGlzSHRtbEVsZW1lbnQob2JqZWN0KSAmJiBvYmplY3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCI7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFByb2Nlc3NMaW5rQ2xpY2soZXZlbnQsIHRhcmdldCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwICYmICggLy8gSWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICF0YXJnZXQgfHwgdGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmIC8vIExldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIElnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gIDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QgdXNpbmcgdGhlIGdpdmVuIGluaXRpYWxpemVyLlxuICpcbiAqIFRoaXMgaXMgaWRlbnRpY2FsIHRvIGBuZXcgVVJMU2VhcmNoUGFyYW1zKGluaXQpYCBleGNlcHQgaXQgYWxzb1xuICogc3VwcG9ydHMgYXJyYXlzIGFzIHZhbHVlcyBpbiB0aGUgb2JqZWN0IGZvcm0gb2YgdGhlIGluaXRpYWxpemVyXG4gKiBpbnN0ZWFkIG9mIGp1c3Qgc3RyaW5ncy4gVGhpcyBpcyBjb252ZW5pZW50IHdoZW4geW91IG5lZWQgbXVsdGlwbGVcbiAqIHZhbHVlcyBmb3IgYSBnaXZlbiBrZXksIGJ1dCBkb24ndCB3YW50IHRvIHVzZSBhbiBhcnJheSBpbml0aWFsaXplci5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaW5zdGVhZCBvZjpcbiAqXG4gKiAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtcbiAqICAgICBbJ3NvcnQnLCAnbmFtZSddLFxuICogICAgIFsnc29ydCcsICdwcmljZSddXG4gKiAgIF0pO1xuICpcbiAqIHlvdSBjYW4gZG86XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gY3JlYXRlU2VhcmNoUGFyYW1zKHtcbiAqICAgICBzb3J0OiBbJ25hbWUnLCAncHJpY2UnXVxuICogICB9KTtcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hQYXJhbXMoaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IFwiXCI7XG4gIH1cblxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh0eXBlb2YgaW5pdCA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KGluaXQpIHx8IGluaXQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgPyBpbml0IDogT2JqZWN0LmtleXMoaW5pdCkucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBpbml0W2tleV07XG4gICAgcmV0dXJuIG1lbW8uY29uY2F0KEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKHYgPT4gW2tleSwgdl0pIDogW1trZXksIHZhbHVlXV0pO1xuICB9LCBbXSkpO1xufVxuZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zRm9yTG9jYXRpb24obG9jYXRpb25TZWFyY2gsIGRlZmF1bHRTZWFyY2hQYXJhbXMpIHtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyhsb2NhdGlvblNlYXJjaCk7XG5cbiAgaWYgKGRlZmF1bHRTZWFyY2hQYXJhbXMpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgZGVmYXVsdFNlYXJjaFBhcmFtcy5rZXlzKCkpIHtcbiAgICAgIGlmICghc2VhcmNoUGFyYW1zLmhhcyhrZXkpKSB7XG4gICAgICAgIGRlZmF1bHRTZWFyY2hQYXJhbXMuZ2V0QWxsKGtleSkuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cbmZ1bmN0aW9uIGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGRlZmF1bHRBY3Rpb24sIG9wdGlvbnMpIHtcbiAgbGV0IG1ldGhvZDtcbiAgbGV0IGFjdGlvbjtcbiAgbGV0IGVuY1R5cGU7XG4gIGxldCBmb3JtRGF0YTtcblxuICBpZiAoaXNGb3JtRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgbGV0IHN1Ym1pc3Npb25UcmlnZ2VyID0gb3B0aW9ucy5zdWJtaXNzaW9uVHJpZ2dlcjtcbiAgICBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCB0YXJnZXQuZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IGRlZmF1bHRNZXRob2Q7XG4gICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSB8fCBkZWZhdWx0QWN0aW9uO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFyZ2V0KTtcblxuICAgIGlmIChzdWJtaXNzaW9uVHJpZ2dlciAmJiBzdWJtaXNzaW9uVHJpZ2dlci5uYW1lKSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoc3VibWlzc2lvblRyaWdnZXIubmFtZSwgc3VibWlzc2lvblRyaWdnZXIudmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0J1dHRvbkVsZW1lbnQodGFyZ2V0KSB8fCBpc0lucHV0RWxlbWVudCh0YXJnZXQpICYmICh0YXJnZXQudHlwZSA9PT0gXCJzdWJtaXRcIiB8fCB0YXJnZXQudHlwZSA9PT0gXCJpbWFnZVwiKSkge1xuICAgIGxldCBmb3JtID0gdGFyZ2V0LmZvcm07XG5cbiAgICBpZiAoZm9ybSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3VibWl0IGEgPGJ1dHRvbj4gb3IgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCI+IHdpdGhvdXQgYSA8Zm9ybT5cIik7XG4gICAgfSAvLyA8YnV0dG9uPi88aW5wdXQgdHlwZT1cInN1Ym1pdFwiPiBtYXkgb3ZlcnJpZGUgYXR0cmlidXRlcyBvZiA8Zm9ybT5cblxuXG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIikgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZm9ybWFjdGlvblwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSB8fCBkZWZhdWx0QWN0aW9uO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1lbmN0eXBlXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwiZW5jdHlwZVwiKSB8fCBkZWZhdWx0RW5jVHlwZTtcbiAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTsgLy8gSW5jbHVkZSBuYW1lICsgdmFsdWUgZnJvbSBhIDxidXR0b24+LCBhcHBlbmRpbmcgaW4gY2FzZSB0aGUgYnV0dG9uIG5hbWVcbiAgICAvLyBtYXRjaGVzIGFuIGV4aXN0aW5nIGlucHV0IG5hbWVcblxuICAgIGlmICh0YXJnZXQubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldC5uYW1lLCB0YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0h0bWxFbGVtZW50KHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3VibWl0IGVsZW1lbnQgdGhhdCBpcyBub3QgPGZvcm0+LCA8YnV0dG9uPiwgb3IgXCIgKyBcIjxpbnB1dCB0eXBlPVxcXCJzdWJtaXR8aW1hZ2VcXFwiPlwiKTtcbiAgfSBlbHNlIHtcbiAgICBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IGRlZmF1bHRBY3Rpb247XG4gICAgZW5jVHlwZSA9IG9wdGlvbnMuZW5jVHlwZSB8fCBkZWZhdWx0RW5jVHlwZTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgZm9ybURhdGEgPSB0YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgW25hbWUsIHZhbHVlXSBvZiB0YXJnZXQpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXModGFyZ2V0KSkge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB0YXJnZXRbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHtcbiAgICBwcm90b2NvbCxcbiAgICBob3N0XG4gIH0gPSB3aW5kb3cubG9jYXRpb247XG4gIGxldCB1cmwgPSBuZXcgVVJMKGFjdGlvbiwgcHJvdG9jb2wgKyBcIi8vXCIgKyBob3N0KTtcbiAgcmV0dXJuIHtcbiAgICB1cmwsXG4gICAgbWV0aG9kOiBtZXRob2QudG9Mb3dlckNhc2UoKSxcbiAgICBlbmNUeXBlLFxuICAgIGZvcm1EYXRhXG4gIH07XG59XG5cbmNvbnN0IF9leGNsdWRlZCA9IFtcIm9uQ2xpY2tcIiwgXCJyZWxhdGl2ZVwiLCBcInJlbG9hZERvY3VtZW50XCIsIFwicmVwbGFjZVwiLCBcInN0YXRlXCIsIFwidGFyZ2V0XCIsIFwidG9cIiwgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIl0sXG4gICAgICBfZXhjbHVkZWQyID0gW1wiYXJpYS1jdXJyZW50XCIsIFwiY2FzZVNlbnNpdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImVuZFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJjaGlsZHJlblwiXSxcbiAgICAgIF9leGNsdWRlZDMgPSBbXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJtZXRob2RcIiwgXCJhY3Rpb25cIiwgXCJvblN1Ym1pdFwiLCBcImZldGNoZXJLZXlcIiwgXCJyb3V0ZUlkXCIsIFwicmVsYXRpdmVcIiwgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIl07XG5mdW5jdGlvbiBjcmVhdGVCcm93c2VyUm91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZnV0dXJlLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdzogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy53aW5kb3dcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhKSB8fCBwYXJzZUh5ZHJhdGlvbkRhdGEoKSxcbiAgICByb3V0ZXMsXG4gICAgZGV0ZWN0RXJyb3JCb3VuZGFyeTogVU5TQUZFX2RldGVjdEVycm9yQm91bmRhcnlcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlSGFzaFJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSxcbiAgICBoaXN0b3J5OiBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3c6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMud2luZG93XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSkgfHwgcGFyc2VIeWRyYXRpb25EYXRhKCksXG4gICAgcm91dGVzLFxuICAgIGRldGVjdEVycm9yQm91bmRhcnk6IFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5XG4gIH0pLmluaXRpYWxpemUoKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIeWRyYXRpb25EYXRhKCkge1xuICB2YXIgX3dpbmRvdztcblxuICBsZXQgc3RhdGUgPSAoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cuX19zdGF0aWNSb3V0ZXJIeWRyYXRpb25EYXRhO1xuXG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5lcnJvcnMpIHtcbiAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgZXJyb3JzOiBkZXNlcmlhbGl6ZUVycm9ycyhzdGF0ZS5lcnJvcnMpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplRXJyb3JzKGVycm9ycykge1xuICBpZiAoIWVycm9ycykgcmV0dXJuIG51bGw7XG4gIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZXJyb3JzKTtcbiAgbGV0IHNlcmlhbGl6ZWQgPSB7fTtcblxuICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIGVudHJpZXMpIHtcbiAgICAvLyBIZXkgeW91ISAgSWYgeW91IGNoYW5nZSB0aGlzLCBwbGVhc2UgY2hhbmdlIHRoZSBjb3JyZXNwb25kaW5nIGxvZ2ljIGluXG4gICAgLy8gc2VyaWFsaXplRXJyb3JzIGluIHJlYWN0LXJvdXRlci1kb20vc2VydmVyLnRzeCA6KVxuICAgIGlmICh2YWwgJiYgdmFsLl9fdHlwZSA9PT0gXCJSb3V0ZUVycm9yUmVzcG9uc2VcIikge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gbmV3IEVycm9yUmVzcG9uc2UodmFsLnN0YXR1cywgdmFsLnN0YXR1c1RleHQsIHZhbC5kYXRhLCB2YWwuaW50ZXJuYWwgPT09IHRydWUpO1xuICAgIH0gZWxzZSBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiRXJyb3JcIikge1xuICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHZhbC5tZXNzYWdlKTsgLy8gV2lwZSBhd2F5IHRoZSBjbGllbnQtc2lkZSBzdGFjayB0cmFjZS4gIE5vdGhpbmcgdG8gZmlsbCBpdCBpbiB3aXRoXG4gICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHNlcmlhbGl6ZSBTU1Igc3RhY2sgdHJhY2VzIGZvciBzZWN1cml0eSByZWFzb25zXG5cbiAgICAgIGVycm9yLnN0YWNrID0gXCJcIjtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gUHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKi9cblxuXG5mdW5jdGlvbiBCcm93c2VyUm91dGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWY7XG4gIGxldCBoaXN0b3J5UmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnkoe1xuICAgICAgd2luZG93LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFN0b3JlcyB0aGUgbG9jYXRpb24gaW4gdGhlIGhhc2hcbiAqIHBvcnRpb24gb2YgdGhlIFVSTCBzbyBpdCBpcyBub3Qgc2VudCB0byB0aGUgc2VydmVyLlxuICovXG5cbmZ1bmN0aW9uIEhhc2hSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUhhc2hIaXN0b3J5KHtcbiAgICAgIHdpbmRvdyxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIHRoYXQgYWNjZXB0cyBhIHByZS1pbnN0YW50aWF0ZWQgaGlzdG9yeSBvYmplY3QuIEl0J3MgaW1wb3J0YW50XG4gKiB0byBub3RlIHRoYXQgdXNpbmcgeW91ciBvd24gaGlzdG9yeSBvYmplY3QgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkIGFuZCBtYXkgYWRkXG4gKiB0d28gdmVyc2lvbnMgb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0byB5b3VyIGJ1bmRsZXMgdW5sZXNzIHlvdSB1c2UgdGhlIHNhbWVcbiAqIHZlcnNpb24gb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0aGF0IFJlYWN0IFJvdXRlciB1c2VzIGludGVybmFsbHkuXG4gKi9cblxuZnVuY3Rpb24gSGlzdG9yeVJvdXRlcihfcmVmMykge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGhpc3RvcnlcbiAgfSA9IF9yZWYzO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGlzdG9yeVJvdXRlci5kaXNwbGF5TmFtZSA9IFwidW5zdGFibGVfSGlzdG9yeVJvdXRlclwiO1xufVxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IEFCU09MVVRFX1VSTF9SRUdFWCA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cbmNvbnN0IExpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rV2l0aFJlZihfcmVmNCwgcmVmKSB7XG4gIGxldCB7XG4gICAgb25DbGljayxcbiAgICByZWxhdGl2ZSxcbiAgICByZWxvYWREb2N1bWVudCxcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldCxcbiAgICB0byxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IF9yZWY0LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBfZXhjbHVkZWQpO1xuXG4gIGxldCB7XG4gICAgYmFzZW5hbWVcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX05hdmlnYXRpb25Db250ZXh0KTsgLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgYWJzb2x1dGUgVVJMc1xuXG4gIGxldCBhYnNvbHV0ZUhyZWY7XG4gIGxldCBpc0V4dGVybmFsID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiAmJiBBQlNPTFVURV9VUkxfUkVHRVgudGVzdCh0bykpIHtcbiAgICAvLyBSZW5kZXIgdGhlIGFic29sdXRlIGhyZWYgc2VydmVyLSBhbmQgY2xpZW50LXNpZGVcbiAgICBhYnNvbHV0ZUhyZWYgPSB0bzsgLy8gT25seSBjaGVjayBmb3IgZXh0ZXJuYWwgb3JpZ2lucyBjbGllbnQtc2lkZVxuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgbGV0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIGxldCB0YXJnZXRVcmwgPSB0by5zdGFydHNXaXRoKFwiLy9cIikgPyBuZXcgVVJMKGN1cnJlbnRVcmwucHJvdG9jb2wgKyB0bykgOiBuZXcgVVJMKHRvKTtcbiAgICAgIGxldCBwYXRoID0gc3RyaXBCYXNlbmFtZSh0YXJnZXRVcmwucGF0aG5hbWUsIGJhc2VuYW1lKTtcblxuICAgICAgaWYgKHRhcmdldFVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luICYmIHBhdGggIT0gbnVsbCkge1xuICAgICAgICAvLyBTdHJpcCB0aGUgcHJvdG9jb2wvb3JpZ2luL2Jhc2VuYW1lIGZvciBzYW1lLW9yaWdpbiBhYnNvbHV0ZSBVUkxzXG4gICAgICAgIHRvID0gcGF0aCArIHRhcmdldFVybC5zZWFyY2ggKyB0YXJnZXRVcmwuaGFzaDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRXh0ZXJuYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZW5kZXJlZCBpbnRvIDxhIGhyZWY+IGZvciByZWxhdGl2ZSBVUkxzXG5cblxuICBsZXQgaHJlZiA9IHVzZUhyZWYodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGludGVybmFsT25DbGljayA9IHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIHtcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldCxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAob25DbGljaykgb25DbGljayhldmVudCk7XG5cbiAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGludGVybmFsT25DbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBocmVmOiBhYnNvbHV0ZUhyZWYgfHwgaHJlZixcbiAgICAgIG9uQ2xpY2s6IGlzRXh0ZXJuYWwgfHwgcmVsb2FkRG9jdW1lbnQgPyBvbkNsaWNrIDogaGFuZGxlQ2xpY2ssXG4gICAgICByZWY6IHJlZixcbiAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgfSkpXG4gICk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBMaW5rLmRpc3BsYXlOYW1lID0gXCJMaW5rXCI7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxuY29uc3QgTmF2TGluayA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkxpbmtXaXRoUmVmKF9yZWY1LCByZWYpIHtcbiAgbGV0IHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFByb3AgPSBcInBhZ2VcIixcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wID0gXCJcIixcbiAgICBlbmQgPSBmYWxzZSxcbiAgICBzdHlsZTogc3R5bGVQcm9wLFxuICAgIHRvLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmNSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgX2V4Y2x1ZGVkMik7XG5cbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZTogcmVzdC5yZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlclN0YXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB0b1BhdGhuYW1lID0gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKHBhdGgpLnBhdGhuYW1lIDogcGF0aC5wYXRobmFtZTtcbiAgbGV0IGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgbGV0IG5leHRMb2NhdGlvblBhdGhuYW1lID0gcm91dGVyU3RhdGUgJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbiAmJiByb3V0ZXJTdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uID8gcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbi5wYXRobmFtZSA6IG51bGw7XG5cbiAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XG4gICAgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBuZXh0TG9jYXRpb25QYXRobmFtZSA9IG5leHRMb2NhdGlvblBhdGhuYW1lID8gbmV4dExvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gICAgdG9QYXRobmFtZSA9IHRvUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGxldCBpc0FjdGl2ZSA9IGxvY2F0aW9uUGF0aG5hbWUgPT09IHRvUGF0aG5hbWUgfHwgIWVuZCAmJiBsb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIjtcbiAgbGV0IGlzUGVuZGluZyA9IG5leHRMb2NhdGlvblBhdGhuYW1lICE9IG51bGwgJiYgKG5leHRMb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuc3RhcnRzV2l0aCh0b1BhdGhuYW1lKSAmJiBuZXh0TG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIik7XG4gIGxldCBhcmlhQ3VycmVudCA9IGlzQWN0aXZlID8gYXJpYUN1cnJlbnRQcm9wIDogdW5kZWZpbmVkO1xuICBsZXQgY2xhc3NOYW1lO1xuXG4gIGlmICh0eXBlb2YgY2xhc3NOYW1lUHJvcCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lUHJvcCh7XG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGlzUGVuZGluZ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBjbGFzc05hbWUgcHJvcCBpcyBub3QgYSBmdW5jdGlvbiwgd2UgdXNlIGEgZGVmYXVsdCBgYWN0aXZlYFxuICAgIC8vIGNsYXNzIGZvciA8TmF2TGluayAvPnMgdGhhdCBhcmUgYWN0aXZlLiBJbiB2NSBgYWN0aXZlYCB3YXMgdGhlIGRlZmF1bHRcbiAgICAvLyB2YWx1ZSBmb3IgYGFjdGl2ZUNsYXNzTmFtZWAsIGJ1dCB3ZSBhcmUgcmVtb3ZpbmcgdGhhdCBBUEkgYW5kIGNhbiBzdGlsbFxuICAgIC8vIHVzZSB0aGUgb2xkIGRlZmF1bHQgYmVoYXZpb3IgZm9yIGEgY2xlYW5lciB1cGdyYWRlIHBhdGggYW5kIGtlZXAgdGhlXG4gICAgLy8gc2ltcGxlIHN0eWxpbmcgcnVsZXMgd29ya2luZyBhcyB0aGV5IGN1cnJlbnRseSBkby5cbiAgICBjbGFzc05hbWUgPSBbY2xhc3NOYW1lUHJvcCwgaXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbCwgaXNQZW5kaW5nID8gXCJwZW5kaW5nXCIgOiBudWxsXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH1cblxuICBsZXQgc3R5bGUgPSB0eXBlb2Ygc3R5bGVQcm9wID09PSBcImZ1bmN0aW9uXCIgPyBzdHlsZVByb3Aoe1xuICAgIGlzQWN0aXZlLFxuICAgIGlzUGVuZGluZ1xuICB9KSA6IHN0eWxlUHJvcDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnQsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHRvOiB0b1xuICB9KSwgdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbih7XG4gICAgaXNBY3RpdmUsXG4gICAgaXNQZW5kaW5nXG4gIH0pIDogY2hpbGRyZW4pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xufVxuLyoqXG4gKiBBIGBAcmVtaXgtcnVuL3JvdXRlcmAtYXdhcmUgYDxmb3JtPmAuIEl0IGJlaGF2ZXMgbGlrZSBhIG5vcm1hbCBmb3JtIGV4Y2VwdFxuICogdGhhdCB0aGUgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2VydmVyIGlzIHdpdGggYGZldGNoYCBpbnN0ZWFkIG9mIG5ldyBkb2N1bWVudFxuICogcmVxdWVzdHMsIGFsbG93aW5nIGNvbXBvbmVudHMgdG8gYWRkIG5pY2VyIFVYIHRvIHRoZSBwYWdlIGFzIHRoZSBmb3JtIGlzXG4gKiBzdWJtaXR0ZWQgYW5kIHJldHVybnMgd2l0aCBkYXRhLlxuICovXG5cblxuY29uc3QgRm9ybSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRm9ybS5kaXNwbGF5TmFtZSA9IFwiRm9ybVwiO1xufVxuXG5jb25zdCBGb3JtSW1wbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChfcmVmNiwgZm9yd2FyZGVkUmVmKSA9PiB7XG4gIGxldCB7XG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSxcbiAgICBtZXRob2QgPSBkZWZhdWx0TWV0aG9kLFxuICAgIGFjdGlvbixcbiAgICBvblN1Ym1pdCxcbiAgICBmZXRjaGVyS2V5LFxuICAgIHJvdXRlSWQsXG4gICAgcmVsYXRpdmUsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0XG4gIH0gPSBfcmVmNixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjYsIF9leGNsdWRlZDMpO1xuXG4gIGxldCBzdWJtaXQgPSB1c2VTdWJtaXRJbXBsKGZldGNoZXJLZXksIHJvdXRlSWQpO1xuICBsZXQgZm9ybU1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSBcImdldFwiID8gXCJnZXRcIiA6IFwicG9zdFwiO1xuICBsZXQgZm9ybUFjdGlvbiA9IHVzZUZvcm1BY3Rpb24oYWN0aW9uLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG5cbiAgbGV0IHN1Ym1pdEhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgb25TdWJtaXQgJiYgb25TdWJtaXQoZXZlbnQpO1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc3VibWl0dGVyID0gZXZlbnQubmF0aXZlRXZlbnQuc3VibWl0dGVyO1xuICAgIGxldCBzdWJtaXRNZXRob2QgPSAoc3VibWl0dGVyID09IG51bGwgPyB2b2lkIDAgOiBzdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiKSkgfHwgbWV0aG9kO1xuICAgIHN1Ym1pdChzdWJtaXR0ZXIgfHwgZXZlbnQuY3VycmVudFRhcmdldCwge1xuICAgICAgbWV0aG9kOiBzdWJtaXRNZXRob2QsXG4gICAgICByZXBsYWNlLFxuICAgICAgcmVsYXRpdmUsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgYWN0aW9uOiBmb3JtQWN0aW9uLFxuICAgIG9uU3VibWl0OiByZWxvYWREb2N1bWVudCA/IG9uU3VibWl0IDogc3VibWl0SGFuZGxlclxuICB9LCBwcm9wcykpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRm9ybUltcGwuZGlzcGxheU5hbWUgPSBcIkZvcm1JbXBsXCI7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHdpbGwgZW11bGF0ZSB0aGUgYnJvd3NlcidzIHNjcm9sbCByZXN0b3JhdGlvbiBvbiBsb2NhdGlvblxuICogY2hhbmdlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIFNjcm9sbFJlc3RvcmF0aW9uKF9yZWY3KSB7XG4gIGxldCB7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSA9IF9yZWY3O1xuICB1c2VTY3JvbGxSZXN0b3JhdGlvbih7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSk7XG4gIHJldHVybiBudWxsO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFNjcm9sbFJlc3RvcmF0aW9uLmRpc3BsYXlOYW1lID0gXCJTY3JvbGxSZXN0b3JhdGlvblwiO1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gSG9va3Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxudmFyIERhdGFSb3V0ZXJIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJIb29rKSB7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlU2Nyb2xsUmVzdG9yYXRpb25cIl0gPSBcInVzZVNjcm9sbFJlc3RvcmF0aW9uXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlU3VibWl0SW1wbFwiXSA9IFwidXNlU3VibWl0SW1wbFwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZUZldGNoZXJcIl0gPSBcInVzZUZldGNoZXJcIjtcbn0pKERhdGFSb3V0ZXJIb29rIHx8IChEYXRhUm91dGVySG9vayA9IHt9KSk7XG5cbnZhciBEYXRhUm91dGVyU3RhdGVIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJTdGF0ZUhvb2spIHtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUZldGNoZXJzXCJdID0gXCJ1c2VGZXRjaGVyc1wiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlU2Nyb2xsUmVzdG9yYXRpb25cIl0gPSBcInVzZVNjcm9sbFJlc3RvcmF0aW9uXCI7XG59KShEYXRhUm91dGVyU3RhdGVIb29rIHx8IChEYXRhUm91dGVyU3RhdGVIb29rID0ge30pKTtcblxuZnVuY3Rpb24gZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkge1xuICByZXR1cm4gaG9va05hbWUgKyBcIiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVycy9waWNraW5nLWEtcm91dGVyLlwiO1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgIXN0YXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBzdGF0ZTtcbn1cbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpY2sgYmVoYXZpb3IgZm9yIHJvdXRlciBgPExpbms+YCBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bCBpZlxuICogeW91IG5lZWQgdG8gY3JlYXRlIGN1c3RvbSBgPExpbms+YCBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgY2xpY2sgYmVoYXZpb3Igd2VcbiAqIHVzZSBpbiBvdXIgZXhwb3J0ZWQgYDxMaW5rPmAuXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHRhcmdldCxcbiAgICByZXBsYWNlOiByZXBsYWNlUHJvcCxcbiAgICBzdGF0ZSxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmIChzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJZiB0aGUgVVJMIGhhc24ndCBjaGFuZ2VkLCBhIHJlZ3VsYXIgPGE+IHdpbGwgZG8gYSByZXBsYWNlIGluc3RlYWQgb2ZcbiAgICAgIC8vIGEgcHVzaCwgc28gZG8gdGhlIHNhbWUgaGVyZSB1bmxlc3MgdGhlIHJlcGxhY2UgcHJvcCBpcyBleHBsaWNpdGx5IHNldFxuXG4gICAgICBsZXQgcmVwbGFjZSA9IHJlcGxhY2VQcm9wICE9PSB1bmRlZmluZWQgPyByZXBsYWNlUHJvcCA6IGNyZWF0ZVBhdGgobG9jYXRpb24pID09PSBjcmVhdGVQYXRoKHBhdGgpO1xuICAgICAgbmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgcmVsYXRpdmVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgcGF0aCwgcmVwbGFjZVByb3AsIHN0YXRlLCB0YXJnZXQsIHRvLCBwcmV2ZW50U2Nyb2xsUmVzZXQsIHJlbGF0aXZlXSk7XG59XG4vKipcbiAqIEEgY29udmVuaWVudCB3cmFwcGVyIGZvciByZWFkaW5nIGFuZCB3cml0aW5nIHNlYXJjaCBwYXJhbWV0ZXJzIHZpYSB0aGVcbiAqIFVSTFNlYXJjaFBhcmFtcyBpbnRlcmZhY2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIsIFwiWW91IGNhbm5vdCB1c2UgdGhlIGB1c2VTZWFyY2hQYXJhbXNgIGhvb2sgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3QgXCIgKyBcInN1cHBvcnQgdGhlIFVSTFNlYXJjaFBhcmFtcyBBUEkuIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgSW50ZXJuZXQgXCIgKyBcIkV4cGxvcmVyIDExLCB3ZSByZWNvbW1lbmQgeW91IGxvYWQgYSBwb2x5ZmlsbCBzdWNoIGFzIFwiICsgXCJodHRwczovL2dpdGh1Yi5jb20vdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXNcXG5cXG5cIiArIFwiSWYgeW91J3JlIHVuc3VyZSBob3cgdG8gbG9hZCBwb2x5ZmlsbHMsIHdlIHJlY29tbWVuZCB5b3UgY2hlY2sgb3V0IFwiICsgXCJodHRwczovL3BvbHlmaWxsLmlvL3YzLyB3aGljaCBwcm92aWRlcyBzb21lIHJlY29tbWVuZGF0aW9ucyBhYm91dCBob3cgXCIgKyBcInRvIGxvYWQgcG9seWZpbGxzIG9ubHkgZm9yIHVzZXJzIHRoYXQgbmVlZCB0aGVtLCBpbnN0ZWFkIG9mIGZvciBldmVyeSBcIiArIFwidXNlci5cIikgOiB2b2lkIDA7XG4gIGxldCBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QudXNlUmVmKGNyZWF0ZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkpO1xuICBsZXQgaGFzU2V0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gLy8gT25seSBtZXJnZSBpbiB0aGUgZGVmYXVsdHMgaWYgd2UgaGF2ZW4ndCB5ZXQgY2FsbGVkIHNldFNlYXJjaFBhcmFtcy5cbiAgLy8gT25jZSB3ZSBjYWxsIHRoYXQgd2Ugd2FudCB0aG9zZSB0byB0YWtlIHByZWNlZGVuY2UsIG90aGVyd2lzZSB5b3UgY2FuJ3RcbiAgLy8gcmVtb3ZlIGEgcGFyYW0gd2l0aCBzZXRTZWFyY2hQYXJhbXMoe30pIGlmIGl0IGhhcyBhbiBpbml0aWFsIHZhbHVlXG4gIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uLnNlYXJjaCwgaGFzU2V0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQgPyBudWxsIDogZGVmYXVsdFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50KSwgW2xvY2F0aW9uLnNlYXJjaF0pO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgc2V0U2VhcmNoUGFyYW1zID0gUmVhY3QudXNlQ2FsbGJhY2soKG5leHRJbml0LCBuYXZpZ2F0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBuZXdTZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXModHlwZW9mIG5leHRJbml0ID09PSBcImZ1bmN0aW9uXCIgPyBuZXh0SW5pdChzZWFyY2hQYXJhbXMpIDogbmV4dEluaXQpO1xuICAgIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBuYXZpZ2F0ZShcIj9cIiArIG5ld1NlYXJjaFBhcmFtcywgbmF2aWdhdGVPcHRpb25zKTtcbiAgfSwgW25hdmlnYXRlLCBzZWFyY2hQYXJhbXNdKTtcbiAgcmV0dXJuIFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc107XG59XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIHByb2dyYW1tYXRpY2FsbHkgc3VibWl0IGEgZm9ybSAob3JcbiAqIHNvbWUgYXJiaXRyYXJ5IGRhdGEpIHRvIHRoZSBzZXJ2ZXIuXG4gKi9cblxuZnVuY3Rpb24gdXNlU3VibWl0KCkge1xuICByZXR1cm4gdXNlU3VibWl0SW1wbCgpO1xufVxuXG5mdW5jdGlvbiB1c2VTdWJtaXRJbXBsKGZldGNoZXJLZXksIHJvdXRlSWQpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZVN1Ym1pdEltcGwpO1xuICBsZXQgZGVmYXVsdEFjdGlvbiA9IHVzZUZvcm1BY3Rpb24oKTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBjYWxsaW5nIHN1Ym1pdCBkdXJpbmcgdGhlIHNlcnZlciByZW5kZXIuIFwiICsgXCJUcnkgY2FsbGluZyBzdWJtaXQgd2l0aGluIGEgYHVzZUVmZmVjdGAgb3IgY2FsbGJhY2sgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGVuY1R5cGUsXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIHVybFxuICAgIH0gPSBnZXRGb3JtU3VibWlzc2lvbkluZm8odGFyZ2V0LCBkZWZhdWx0QWN0aW9uLCBvcHRpb25zKTtcbiAgICBsZXQgaHJlZiA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gICAgbGV0IG9wdHMgPSB7XG4gICAgICByZXBsYWNlOiBvcHRpb25zLnJlcGxhY2UsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdGlvbnMucHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgZm9ybURhdGEsXG4gICAgICBmb3JtTWV0aG9kOiBtZXRob2QsXG4gICAgICBmb3JtRW5jVHlwZTogZW5jVHlwZVxuICAgIH07XG5cbiAgICBpZiAoZmV0Y2hlcktleSkge1xuICAgICAgIShyb3V0ZUlkICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgdXNlRmV0Y2hlcigpXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByb3V0ZXIuZmV0Y2goZmV0Y2hlcktleSwgcm91dGVJZCwgaHJlZiwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShocmVmLCBvcHRzKTtcbiAgICB9XG4gIH0sIFtkZWZhdWx0QWN0aW9uLCByb3V0ZXIsIGZldGNoZXJLZXksIHJvdXRlSWRdKTtcbn1cblxuZnVuY3Rpb24gdXNlRm9ybUFjdGlvbihhY3Rpb24sIF90ZW1wMikge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyO1xuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCByb3V0ZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9Sb3V0ZUNvbnRleHQpO1xuICAhcm91dGVDb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJ1c2VGb3JtQWN0aW9uIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IFttYXRjaF0gPSByb3V0ZUNvbnRleHQubWF0Y2hlcy5zbGljZSgtMSk7IC8vIFNoYWxsb3cgY2xvbmUgcGF0aCBzbyB3ZSBjYW4gbW9kaWZ5IGl0IGJlbG93LCBvdGhlcndpc2Ugd2UgbW9kaWZ5IHRoZVxuICAvLyBvYmplY3QgcmVmZXJlbmNlZCBieSB1c2VNZW1vIGluc2lkZSB1c2VSZXNvbHZlZFBhdGhcblxuICBsZXQgcGF0aCA9IF9leHRlbmRzKHt9LCB1c2VSZXNvbHZlZFBhdGgoYWN0aW9uID8gYWN0aW9uIDogXCIuXCIsIHtcbiAgICByZWxhdGl2ZVxuICB9KSk7IC8vIFByZXZpb3VzbHkgd2Ugc2V0IHRoZSBkZWZhdWx0IGFjdGlvbiB0byBcIi5cIi4gVGhlIHByb2JsZW0gd2l0aCB0aGlzIGlzIHRoYXRcbiAgLy8gYHVzZVJlc29sdmVkUGF0aChcIi5cIilgIGV4Y2x1ZGVzIHNlYXJjaCBwYXJhbXMgYW5kIHRoZSBoYXNoIG9mIHRoZSByZXNvbHZlZFxuICAvLyBVUkwuIFRoaXMgaXMgdGhlIGludGVuZGVkIGJlaGF2aW9yIG9mIHdoZW4gXCIuXCIgaXMgc3BlY2lmaWNhbGx5IHByb3ZpZGVkIGFzXG4gIC8vIHRoZSBmb3JtIGFjdGlvbiwgYnV0IGluY29uc2lzdGVudCB3LyBicm93c2VycyB3aGVuIHRoZSBhY3Rpb24gaXMgb21pdHRlZC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9yZW1peC9pc3N1ZXMvOTI3XG5cblxuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIGlmIChhY3Rpb24gPT0gbnVsbCkge1xuICAgIC8vIFNhZmUgdG8gd3JpdGUgdG8gdGhlc2UgZGlyZWN0bHkgaGVyZSBzaW5jZSBpZiBhY3Rpb24gd2FzIHVuZGVmaW5lZCwgd2VcbiAgICAvLyB3b3VsZCBoYXZlIGNhbGxlZCB1c2VSZXNvbHZlZFBhdGgoXCIuXCIpIHdoaWNoIHdpbGwgbmV2ZXIgaW5jbHVkZSBhIHNlYXJjaFxuICAgIC8vIG9yIGhhc2hcbiAgICBwYXRoLnNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICBwYXRoLmhhc2ggPSBsb2NhdGlvbi5oYXNoOyAvLyBXaGVuIGdyYWJiaW5nIHNlYXJjaCBwYXJhbXMgZnJvbSB0aGUgVVJMLCByZW1vdmUgdGhlIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBpbnNlcnRlZCA/aW5kZXggcGFyYW0gc28gd2UgbWF0Y2ggdGhlIHVzZVJlc29sdmVkUGF0aCBzZWFyY2ggYmVoYXZpb3JcbiAgICAvLyB3aGljaCB3b3VsZCBub3QgaW5jbHVkZSA/aW5kZXhcblxuICAgIGlmIChtYXRjaC5yb3V0ZS5pbmRleCkge1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGF0aC5zZWFyY2gpO1xuICAgICAgcGFyYW1zLmRlbGV0ZShcImluZGV4XCIpO1xuICAgICAgcGF0aC5zZWFyY2ggPSBwYXJhbXMudG9TdHJpbmcoKSA/IFwiP1wiICsgcGFyYW1zLnRvU3RyaW5nKCkgOiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGlmICgoIWFjdGlvbiB8fCBhY3Rpb24gPT09IFwiLlwiKSAmJiBtYXRjaC5yb3V0ZS5pbmRleCkge1xuICAgIHBhdGguc2VhcmNoID0gcGF0aC5zZWFyY2ggPyBwYXRoLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgXCI/aW5kZXgmXCIpIDogXCI/aW5kZXhcIjtcbiAgfSAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gIC8vIHRvIGNyZWF0aW5nIHRoZSBmb3JtIGFjdGlvbi4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4ganVzdCB1c2VcbiAgLy8gdGhlIHJhdyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlXG4gIC8vIHByZXNlbmNlIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBhY3Rpb25zXG5cblxuICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgcGF0aC5wYXRobmFtZSA9IHBhdGgucGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUGF0aChwYXRoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmV0Y2hlckZvcm0oZmV0Y2hlcktleSwgcm91dGVJZCkge1xuICBsZXQgRmV0Y2hlckZvcm0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICByZWY6IHJlZixcbiAgICAgIGZldGNoZXJLZXk6IGZldGNoZXJLZXksXG4gICAgICByb3V0ZUlkOiByb3V0ZUlkXG4gICAgfSkpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgRmV0Y2hlckZvcm0uZGlzcGxheU5hbWUgPSBcImZldGNoZXIuRm9ybVwiO1xuICB9XG5cbiAgcmV0dXJuIEZldGNoZXJGb3JtO1xufVxuXG5sZXQgZmV0Y2hlcklkID0gMDtcbi8qKlxuICogSW50ZXJhY3RzIHdpdGggcm91dGUgbG9hZGVycyBhbmQgYWN0aW9ucyB3aXRob3V0IGNhdXNpbmcgYSBuYXZpZ2F0aW9uLiBHcmVhdFxuICogZm9yIGFueSBpbnRlcmFjdGlvbiB0aGF0IHN0YXlzIG9uIHRoZSBzYW1lIHBhZ2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlRmV0Y2hlcigpIHtcbiAgdmFyIF9yb3V0ZSRtYXRjaGVzO1xuXG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VGZXRjaGVyKTtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJ1c2VGZXRjaGVyIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHJvdXRlSWQgPSAoX3JvdXRlJG1hdGNoZXMgPSByb3V0ZS5tYXRjaGVzW3JvdXRlLm1hdGNoZXMubGVuZ3RoIC0gMV0pID09IG51bGwgPyB2b2lkIDAgOiBfcm91dGUkbWF0Y2hlcy5yb3V0ZS5pZDtcbiAgIShyb3V0ZUlkICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJ1c2VGZXRjaGVyIGNhbiBvbmx5IGJlIHVzZWQgb24gcm91dGVzIHRoYXQgY29udGFpbiBhIHVuaXF1ZSBcXFwiaWRcXFwiXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbZmV0Y2hlcktleV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBTdHJpbmcoKytmZXRjaGVySWQpKTtcbiAgbGV0IFtGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICAhcm91dGVJZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIGZldGNoZXIuRm9ybSgpXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIGNyZWF0ZUZldGNoZXJGb3JtKGZldGNoZXJLZXksIHJvdXRlSWQpO1xuICB9KTtcbiAgbGV0IFtsb2FkXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IGhyZWYgPT4ge1xuICAgICFyb3V0ZXIgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlciBhdmFpbGFibGUgZm9yIGZldGNoZXIubG9hZCgpXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgIXJvdXRlSWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlSWQgYXZhaWxhYmxlIGZvciBmZXRjaGVyLmxvYWQoKVwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJvdXRlci5mZXRjaChmZXRjaGVyS2V5LCByb3V0ZUlkLCBocmVmKTtcbiAgfSk7XG4gIGxldCBzdWJtaXQgPSB1c2VTdWJtaXRJbXBsKGZldGNoZXJLZXksIHJvdXRlSWQpO1xuICBsZXQgZmV0Y2hlciA9IHJvdXRlci5nZXRGZXRjaGVyKGZldGNoZXJLZXkpO1xuICBsZXQgZmV0Y2hlcldpdGhDb21wb25lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiBfZXh0ZW5kcyh7XG4gICAgRm9ybSxcbiAgICBzdWJtaXQsXG4gICAgbG9hZFxuICB9LCBmZXRjaGVyKSwgW2ZldGNoZXIsIEZvcm0sIHN1Ym1pdCwgbG9hZF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIElzIHRoaXMgYnVzdGVkIHdoZW4gdGhlIFJlYWN0IHRlYW0gZ2V0cyByZWFsIHdlaXJkIGFuZCBjYWxscyBlZmZlY3RzXG4gICAgLy8gdHdpY2Ugb24gbW91bnQ/ICBXZSByZWFsbHkganVzdCBuZWVkIHRvIGdhcmJhZ2UgY29sbGVjdCBoZXJlIHdoZW4gdGhpc1xuICAgIC8vIGZldGNoZXIgaXMgbm8gbG9uZ2VyIGFyb3VuZC5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyb3V0ZXIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm8gZmV0Y2hlciBhdmFpbGFibGUgdG8gY2xlYW4gdXAgZnJvbSB1c2VGZXRjaGVyKClcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLmRlbGV0ZUZldGNoZXIoZmV0Y2hlcktleSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlciwgZmV0Y2hlcktleV0pO1xuICByZXR1cm4gZmV0Y2hlcldpdGhDb21wb25lbnRzO1xufVxuLyoqXG4gKiBQcm92aWRlcyBhbGwgZmV0Y2hlcnMgY3VycmVudGx5IG9uIHRoZSBwYWdlLiBVc2VmdWwgZm9yIGxheW91dHMgYW5kIHBhcmVudFxuICogcm91dGVzIHRoYXQgbmVlZCB0byBwcm92aWRlIHBlbmRpbmcvb3B0aW1pc3RpYyBVSSByZWdhcmRpbmcgdGhlIGZldGNoLlxuICovXG5cbmZ1bmN0aW9uIHVzZUZldGNoZXJzKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VGZXRjaGVycyk7XG4gIHJldHVybiBbLi4uc3RhdGUuZmV0Y2hlcnMudmFsdWVzKCldO1xufVxuY29uc3QgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZID0gXCJyZWFjdC1yb3V0ZXItc2Nyb2xsLXBvc2l0aW9uc1wiO1xubGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0ge307XG4vKipcbiAqIFdoZW4gcmVuZGVyZWQgaW5zaWRlIGEgUm91dGVyUHJvdmlkZXIsIHdpbGwgcmVzdG9yZSBzY3JvbGwgcG9zaXRpb25zIG9uIG5hdmlnYXRpb25zXG4gKi9cblxuZnVuY3Rpb24gdXNlU2Nyb2xsUmVzdG9yYXRpb24oX3RlbXAzKSB7XG4gIGxldCB7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDM7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTY3JvbGxSZXN0b3JhdGlvbik7XG4gIGxldCB7XG4gICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICB9ID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgbGV0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0aW9uKCk7IC8vIFRyaWdnZXIgbWFudWFsIHNjcm9sbCByZXN0b3JhdGlvbiB3aGlsZSB3ZSdyZSBhY3RpdmVcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIjtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIjtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFNhdmUgcG9zaXRpb25zIG9uIHBhZ2VoaWRlXG5cbiAgdXNlUGFnZUhpZGUoUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgbGV0IGtleSA9IChnZXRLZXkgPyBnZXRLZXkobG9jYXRpb24sIG1hdGNoZXMpIDogbnVsbCkgfHwgbG9jYXRpb24ua2V5O1xuICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIH1cblxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkU2Nyb2xsUG9zaXRpb25zKSk7XG4gICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIjtcbiAgfSwgW3N0b3JhZ2VLZXksIGdldEtleSwgbmF2aWdhdGlvbi5zdGF0ZSwgbG9jYXRpb24sIG1hdGNoZXNdKSk7IC8vIFJlYWQgaW4gYW55IHNhdmVkIHNjcm9sbCBsb2NhdGlvbnNcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBzZXNzaW9uUG9zaXRpb25zID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5IHx8IFNDUk9MTF9SRVNUT1JBVElPTl9TVE9SQUdFX0tFWSk7XG5cbiAgICAgICAgaWYgKHNlc3Npb25Qb3NpdGlvbnMpIHtcbiAgICAgICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IEpTT04ucGFyc2Uoc2Vzc2lvblBvc2l0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyBuby1vcCwgdXNlIGRlZmF1bHQgZW1wdHkgb2JqZWN0XG4gICAgICB9XG4gICAgfSwgW3N0b3JhZ2VLZXldKTsgLy8gRW5hYmxlIHNjcm9sbCByZXN0b3JhdGlvbiBpbiB0aGUgcm91dGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbiA9IHJvdXRlciA9PSBudWxsID8gdm9pZCAwIDogcm91dGVyLmVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKHNhdmVkU2Nyb2xsUG9zaXRpb25zLCAoKSA9PiB3aW5kb3cuc2Nyb2xsWSwgZ2V0S2V5KTtcbiAgICAgIHJldHVybiAoKSA9PiBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gJiYgZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uKCk7XG4gICAgfSwgW3JvdXRlciwgZ2V0S2V5XSk7IC8vIFJlc3RvcmUgc2Nyb2xsaW5nIHdoZW4gc3RhdGUucmVzdG9yZVNjcm9sbFBvc2l0aW9uIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcblxuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBFeHBsaWNpdCBmYWxzZSBtZWFucyBkb24ndCBkbyBhbnl0aGluZyAodXNlZCBmb3Igc3VibWlzc2lvbnMpXG4gICAgICBpZiAocmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGJlZW4gaGVyZSBiZWZvcmUsIHNjcm9sbCB0byBpdFxuXG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIHRyeSB0byBzY3JvbGwgdG8gdGhlIGhhc2hcblxuXG4gICAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbi5oYXNoLnNsaWNlKDEpKTtcblxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEb24ndCByZXNldCBpZiB0aGlzIG5hdmlnYXRpb24gb3B0ZWQgb3V0XG5cblxuICAgICAgaWYgKHByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIG90aGVyd2lzZSBnbyB0byB0aGUgdG9wIG9uIG5ldyBsb2NhdGlvbnNcblxuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSwgW2xvY2F0aW9uLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24sIHByZXZlbnRTY3JvbGxSZXNldF0pO1xuICB9XG59XG4vKipcbiAqIFNldHVwIGEgY2FsbGJhY2sgdG8gYmUgZmlyZWQgb24gdGhlIHdpbmRvdydzIGBiZWZvcmV1bmxvYWRgIGV2ZW50LiBUaGlzIGlzXG4gKiB1c2VmdWwgZm9yIHNhdmluZyBzb21lIGRhdGEgdG8gYHdpbmRvdy5sb2NhbFN0b3JhZ2VgIGp1c3QgYmVmb3JlIHRoZSBwYWdlXG4gKiByZWZyZXNoZXMuXG4gKlxuICogTm90ZTogVGhlIGBjYWxsYmFja2AgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24gY3JlYXRlZCB3aXRoXG4gKiBgUmVhY3QudXNlQ2FsbGJhY2soKWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQmVmb3JlVW5sb2FkKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGxldCB7XG4gICAgY2FwdHVyZVxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3B0cyA9IGNhcHR1cmUgIT0gbnVsbCA/IHtcbiAgICAgIGNhcHR1cmVcbiAgICB9IDogdW5kZWZpbmVkO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIH07XG4gIH0sIFtjYWxsYmFjaywgY2FwdHVyZV0pO1xufVxuLyoqXG4gKiBTZXR1cCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIG9uIHRoZSB3aW5kb3cncyBgcGFnZWhpZGVgIGV2ZW50LiBUaGlzIGlzXG4gKiB1c2VmdWwgZm9yIHNhdmluZyBzb21lIGRhdGEgdG8gYHdpbmRvdy5sb2NhbFN0b3JhZ2VgIGp1c3QgYmVmb3JlIHRoZSBwYWdlXG4gKiByZWZyZXNoZXMuICBUaGlzIGV2ZW50IGlzIGJldHRlciBzdXBwb3J0ZWQgdGhhbiBiZWZvcmV1bmxvYWQgYWNyb3NzIGJyb3dzZXJzLlxuICpcbiAqIE5vdGU6IFRoZSBgY2FsbGJhY2tgIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uIGNyZWF0ZWQgd2l0aFxuICogYFJlYWN0LnVzZUNhbGxiYWNrKClgLlxuICovXG5cbmZ1bmN0aW9uIHVzZVBhZ2VIaWRlKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGxldCB7XG4gICAgY2FwdHVyZVxuICB9ID0gb3B0aW9ucyB8fCB7fTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3B0cyA9IGNhcHR1cmUgIT0gbnVsbCA/IHtcbiAgICAgIGNhcHR1cmVcbiAgICB9IDogdW5kZWZpbmVkO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogV3JhcHBlciBhcm91bmQgdXNlQmxvY2tlciB0byBzaG93IGEgd2luZG93LmNvbmZpcm0gcHJvbXB0IHRvIHVzZXJzIGluc3RlYWRcbiAqIG9mIGJ1aWxkaW5nIGEgY3VzdG9tIFVJIHdpdGggdXNlQmxvY2tlci5cbiAqXG4gKiBXYXJuaW5nOiBUaGlzIGhhcyAqYSBsb3Qgb2Ygcm91Z2ggZWRnZXMqIGFuZCBiZWhhdmVzIHZlcnkgZGlmZmVyZW50bHkgKGFuZFxuICogdmVyeSBpbmNvcnJlY3RseSBpbiBzb21lIGNhc2VzKSBhY3Jvc3MgYnJvd3NlcnMgaWYgdXNlciBjbGljayBhZGRpdGlvblxuICogYmFjay9mb3J3YXJkIG5hdmlnYXRpb25zIHdoaWxlIHRoZSBjb25maXJtIGlzIG9wZW4uICBVc2UgYXQgeW91ciBvd24gcmlzay5cbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZVByb21wdChfcmVmOCkge1xuICBsZXQge1xuICAgIHdoZW4sXG4gICAgbWVzc2FnZVxuICB9ID0gX3JlZjg7XG4gIGxldCBibG9ja2VyID0gdW5zdGFibGVfdXNlQmxvY2tlcih3aGVuKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgIXdoZW4pIHtcbiAgICAgIGJsb2NrZXIucmVzZXQoKTtcbiAgICB9XG4gIH0sIFtibG9ja2VyLCB3aGVuXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiKSB7XG4gICAgICBsZXQgcHJvY2VlZCA9IHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpO1xuXG4gICAgICBpZiAocHJvY2VlZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGJsb2NrZXIucHJvY2VlZCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbYmxvY2tlciwgbWVzc2FnZV0pO1xufVxuIC8vI2VuZHJlZ2lvblxuXG5leHBvcnQgeyBCcm93c2VyUm91dGVyLCBGb3JtLCBIYXNoUm91dGVyLCBMaW5rLCBOYXZMaW5rLCBTY3JvbGxSZXN0b3JhdGlvbiwgdXNlU2Nyb2xsUmVzdG9yYXRpb24gYXMgVU5TQUZFX3VzZVNjcm9sbFJlc3RvcmF0aW9uLCBjcmVhdGVCcm93c2VyUm91dGVyLCBjcmVhdGVIYXNoUm91dGVyLCBjcmVhdGVTZWFyY2hQYXJhbXMsIEhpc3RvcnlSb3V0ZXIgYXMgdW5zdGFibGVfSGlzdG9yeVJvdXRlciwgdXNlUHJvbXB0IGFzIHVuc3RhYmxlX3VzZVByb21wdCwgdXNlQmVmb3JlVW5sb2FkLCB1c2VGZXRjaGVyLCB1c2VGZXRjaGVycywgdXNlRm9ybUFjdGlvbiwgdXNlTGlua0NsaWNrSGFuZGxlciwgdXNlU2VhcmNoUGFyYW1zLCB1c2VTdWJtaXQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBSZWFjdCBSb3V0ZXIgdjYuMTAuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyBVTlNBRkVfaW52YXJpYW50LCBqb2luUGF0aHMsIG1hdGNoUGF0aCwgVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzLCBVTlNBRkVfd2FybmluZywgcmVzb2x2ZVRvLCBwYXJzZVBhdGgsIG1hdGNoUm91dGVzLCBBY3Rpb24sIGlzUm91dGVFcnJvclJlc3BvbnNlLCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBzdHJpcEJhc2VuYW1lLCBBYm9ydGVkRGVmZXJyZWRFcnJvciwgY3JlYXRlUm91dGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9yb3V0ZXInO1xuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEFjdGlvbiBhcyBOYXZpZ2F0aW9uVHlwZSwgY3JlYXRlUGF0aCwgZGVmZXIsIGdlbmVyYXRlUGF0aCwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGpzb24sIG1hdGNoUGF0aCwgbWF0Y2hSb3V0ZXMsIHBhcnNlUGF0aCwgcmVkaXJlY3QsIHJlc29sdmVQYXRoIH0gZnJvbSAnQHJlbWl4LXJ1bi9yb3V0ZXInO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5cbmZ1bmN0aW9uIGlzUG9seWZpbGwoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbmNvbnN0IGlzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmlzIDogaXNQb2x5ZmlsbDsgLy8gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgbmFtZWQgaW1wb3J0cyBiZWNhdXNlIFJvbGx1cCB1c2VzIGR5bmFtaWNcbi8vIGRpc3BhdGNoIGZvciBDb21tb25KUyBpbnRlcm9wIG5hbWVkIGltcG9ydHMuXG5cbmNvbnN0IHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VEZWJ1Z1ZhbHVlXG59ID0gUmVhY3Q7XG5sZXQgZGlkV2Fybk9sZDE4QWxwaGEgPSBmYWxzZTtcbmxldCBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IGZhbHNlOyAvLyBEaXNjbGFpbWVyOiBUaGlzIHNoaW0gYnJlYWtzIG1hbnkgb2YgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3Jrc1xuLy8gYmVjYXVzZSBvZiBhIHZlcnkgcGFydGljdWxhciBzZXQgb2YgaW1wbGVtZW50YXRpb24gZGV0YWlscyBhbmQgYXNzdW1wdGlvbnNcbi8vIC0tIGNoYW5nZSBhbnkgb25lIG9mIHRoZW0gYW5kIGl0IHdpbGwgYnJlYWsuIFRoZSBtb3N0IGltcG9ydGFudCBhc3N1bXB0aW9uXG4vLyBpcyB0aGF0IHVwZGF0ZXMgYXJlIGFsd2F5cyBzeW5jaHJvbm91cywgYmVjYXVzZSBjb25jdXJyZW50IHJlbmRlcmluZyBpc1xuLy8gb25seSBhdmFpbGFibGUgaW4gdmVyc2lvbnMgb2YgUmVhY3QgdGhhdCBhbHNvIGhhdmUgYSBidWlsdC1pblxuLy8gdXNlU3luY0V4dGVybmFsU3RvcmUgQVBJLiBBbmQgd2Ugb25seSB1c2UgdGhpcyBzaGltIHdoZW4gdGhlIGJ1aWx0LWluIEFQSVxuLy8gZG9lcyBub3QgZXhpc3QuXG4vL1xuLy8gRG8gbm90IGFzc3VtZSB0aGF0IHRoZSBjbGV2ZXIgaGFja3MgdXNlZCBieSB0aGlzIGhvb2sgYWxzbyB3b3JrIGluIGdlbmVyYWwuXG4vLyBUaGUgcG9pbnQgb2YgdGhpcyBzaGltIGlzIHRvIHJlcGxhY2UgdGhlIG5lZWQgZm9yIGhhY2tzIGJ5IG90aGVyIGxpYnJhcmllcy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4vLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbi8vIHdpbGwgbmVlZCB0byB0cmFjayB0aGF0IHRoZW1zZWx2ZXMgYW5kIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZVxuLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghZGlkV2Fybk9sZDE4QWxwaGEpIHtcbiAgICAgIGlmIChcInN0YXJ0VHJhbnNpdGlvblwiIGluIFJlYWN0KSB7XG4gICAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgXCIgKyBcImRvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSBcIiArIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUgc2hpbSB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseS4gVXBncmFkZSBcIiArIFwidG8gYSBuZXdlciBwcmUtcmVsZWFzZS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFJlYWQgdGhlIGN1cnJlbnQgc25hcHNob3QgZnJvbSB0aGUgc3RvcmUgb24gZXZlcnkgcmVuZGVyLiBBZ2FpbiwgdGhpc1xuICAvLyBicmVha3MgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3JrcyBoZXJlIGJlY2F1c2Ugb2Ygc3BlY2lmaWNcbiAgLy8gaW1wbGVtZW50YXRpb24gZGV0YWlscywgbW9zdCBpbXBvcnRhbnRseSB0aGF0IHVwZGF0ZXMgYXJlXG4gIC8vIGFsd2F5cyBzeW5jaHJvbm91cy5cblxuXG4gIGNvbnN0IHZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgY29uc3QgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gICAgICBpZiAoIWlzKHZhbHVlLCBjYWNoZWRWYWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXCIpO1xuICAgICAgICBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIEJlY2F1c2UgdXBkYXRlcyBhcmUgc3luY2hyb25vdXMsIHdlIGRvbid0IHF1ZXVlIHRoZW0uIEluc3RlYWQgd2UgZm9yY2UgYVxuICAvLyByZS1yZW5kZXIgd2hlbmV2ZXIgdGhlIHN1YnNjcmliZWQgc3RhdGUgY2hhbmdlcyBieSB1cGRhdGluZyBhbiBzb21lXG4gIC8vIGFyYml0cmFyeSB1c2VTdGF0ZSBob29rLiBUaGVuLCBkdXJpbmcgcmVuZGVyLCB3ZSBjYWxsIGdldFNuYXBzaG90IHRvIHJlYWRcbiAgLy8gdGhlIGN1cnJlbnQgdmFsdWUuXG4gIC8vXG4gIC8vIEJlY2F1c2Ugd2UgZG9uJ3QgYWN0dWFsbHkgdXNlIHRoZSBzdGF0ZSByZXR1cm5lZCBieSB0aGUgdXNlU3RhdGUgaG9vaywgd2VcbiAgLy8gY2FuIHNhdmUgYSBiaXQgb2YgbWVtb3J5IGJ5IHN0b3Jpbmcgb3RoZXIgc3R1ZmYgaW4gdGhhdCBzbG90LlxuICAvL1xuICAvLyBUbyBpbXBsZW1lbnQgdGhlIGVhcmx5IGJhaWxvdXQsIHdlIG5lZWQgdG8gdHJhY2sgc29tZSB0aGluZ3Mgb24gYSBtdXRhYmxlXG4gIC8vIG9iamVjdC4gVXN1YWxseSwgd2Ugd291bGQgcHV0IHRoYXQgaW4gYSB1c2VSZWYgaG9vaywgYnV0IHdlIGNhbiBzdGFzaCBpdCBpblxuICAvLyBvdXIgdXNlU3RhdGUgaG9vayBpbnN0ZWFkLlxuICAvL1xuICAvLyBUbyBmb3JjZSBhIHJlLXJlbmRlciwgd2UgY2FsbCBmb3JjZVVwZGF0ZSh7aW5zdH0pLiBUaGF0IHdvcmtzIGJlY2F1c2UgdGhlXG4gIC8vIG5ldyBvYmplY3QgYWx3YXlzIGZhaWxzIGFuIGVxdWFsaXR5IGNoZWNrLlxuXG5cbiAgY29uc3QgW3tcbiAgICBpbnN0XG4gIH0sIGZvcmNlVXBkYXRlXSA9IHVzZVN0YXRlKHtcbiAgICBpbnN0OiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGdldFNuYXBzaG90XG4gICAgfVxuICB9KTsgLy8gVHJhY2sgdGhlIGxhdGVzdCBnZXRTbmFwc2hvdCBmdW5jdGlvbiB3aXRoIGEgcmVmLiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbiAgLy8gaW4gdGhlIGxheW91dCBwaGFzZSBzbyB3ZSBjYW4gYWNjZXNzIGl0IGR1cmluZyB0aGUgdGVhcmluZyBjaGVjayB0aGF0XG4gIC8vIGhhcHBlbnMgb24gc3Vic2NyaWJlLlxuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICAgIGluc3QuZ2V0U25hcHNob3QgPSBnZXRTbmFwc2hvdDsgLy8gV2hlbmV2ZXIgZ2V0U25hcHNob3Qgb3Igc3Vic2NyaWJlIGNoYW5nZXMsIHdlIG5lZWQgdG8gY2hlY2sgaW4gdGhlXG4gICAgLy8gY29tbWl0IHBoYXNlIGlmIHRoZXJlIHdhcyBhbiBpbnRlcmxlYXZlZCBtdXRhdGlvbi4gSW4gY29uY3VycmVudCBtb2RlXG4gICAgLy8gdGhpcyBjYW4gaGFwcGVuIGFsbCB0aGUgdGltZSwgYnV0IGV2ZW4gaW4gc3luY2hyb25vdXMgbW9kZSwgYW4gZWFybGllclxuICAgIC8vIGVmZmVjdCBtYXkgaGF2ZSBtdXRhdGVkIHRoZSBzdG9yZS5cblxuICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAvLyBGb3JjZSBhIHJlLXJlbmRlci5cbiAgICAgIGZvcmNlVXBkYXRlKHtcbiAgICAgICAgaW5zdFxuICAgICAgfSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgcmlnaHQgYmVmb3JlIHN1YnNjcmliaW5nLiBTdWJzZXF1ZW50IGNoYW5nZXMgd2lsbCBiZVxuICAgIC8vIGRldGVjdGVkIGluIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlci5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3RcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3JlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgLy8gVE9ETzogQmVjYXVzZSB0aGVyZSBpcyBubyBjcm9zcy1yZW5kZXJlciBBUEkgZm9yIGJhdGNoaW5nIHVwZGF0ZXMsIGl0J3NcbiAgICAgIC8vIHVwIHRvIHRoZSBjb25zdW1lciBvZiB0aGlzIGxpYnJhcnkgdG8gd3JhcCB0aGVpciBzdWJzY3JpcHRpb24gZXZlbnRcbiAgICAgIC8vIHdpdGggdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMuIFNob3VsZCB3ZSB0cnkgdG8gZGV0ZWN0IHdoZW4gdGhpcyBpc24ndFxuICAgICAgLy8gdGhlIGNhc2UgYW5kIHByaW50IGEgd2FybmluZyBpbiBkZXZlbG9wbWVudD9cbiAgICAgIC8vIFRoZSBzdG9yZSBjaGFuZ2VkLiBDaGVjayBpZiB0aGUgc25hcHNob3QgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHdlXG4gICAgICAvLyByZWFkIGZyb20gdGhlIHN0b3JlLlxuICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICAgIGZvcmNlVXBkYXRlKHtcbiAgICAgICAgICBpbnN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07IC8vIFN1YnNjcmliZSB0byB0aGUgc3RvcmUgYW5kIHJldHVybiBhIGNsZWFuLXVwIGZ1bmN0aW9uLlxuXG5cbiAgICByZXR1cm4gc3Vic2NyaWJlKGhhbmRsZVN0b3JlQ2hhbmdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc3Vic2NyaWJlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICBjb25zdCBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gIGNvbnN0IHByZXZWYWx1ZSA9IGluc3QudmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgIHJldHVybiAhaXMocHJldlZhbHVlLCBuZXh0VmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4gIC8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuICAvLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbiAgLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbn1cblxuLyoqXG4gKiBJbmxpbmVkIGludG8gdGhlIHJlYWN0LXJvdXRlciByZXBvIHNpbmNlIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIGRvZXMgbm90XG4gKiBwcm92aWRlIGEgVU1ELWNvbXBhdGlibGUgcGFja2FnZSwgc28gd2UgbmVlZCB0aGlzIHRvIGJlIGFibGUgdG8gZGlzdHJpYnV0ZVxuICogVU1EIHJlYWN0LXJvdXRlciBidW5kbGVzXG4gKi9cbmNvbnN0IGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xuY29uc3QgaXNTZXJ2ZXJFbnZpcm9ubWVudCA9ICFjYW5Vc2VET007XG5jb25zdCBzaGltID0gaXNTZXJ2ZXJFbnZpcm9ubWVudCA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEgOiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyO1xuY29uc3QgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBcInVzZVN5bmNFeHRlcm5hbFN0b3JlXCIgaW4gUmVhY3QgPyAobW9kdWxlID0+IG1vZHVsZS51c2VTeW5jRXh0ZXJuYWxTdG9yZSkoUmVhY3QpIDogc2hpbTtcblxuY29uc3QgRGF0YVJvdXRlckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEYXRhUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclwiO1xufVxuXG5jb25zdCBEYXRhUm91dGVyU3RhdGVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlclN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclN0YXRlXCI7XG59XG5cbmNvbnN0IEF3YWl0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEF3YWl0Q29udGV4dC5kaXNwbGF5TmFtZSA9IFwiQXdhaXRcIjtcbn1cblxuY29uc3QgTmF2aWdhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBOYXZpZ2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTmF2aWdhdGlvblwiO1xufVxuXG5jb25zdCBMb2NhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBMb2NhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkxvY2F0aW9uXCI7XG59XG5cbmNvbnN0IFJvdXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgb3V0bGV0OiBudWxsLFxuICBtYXRjaGVzOiBbXVxufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZVwiO1xufVxuXG5jb25zdCBSb3V0ZUVycm9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlRXJyb3JDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZUVycm9yXCI7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmdWxsIGhyZWYgZm9yIHRoZSBnaXZlbiBcInRvXCIgdmFsdWUuIFRoaXMgaXMgdXNlZnVsIGZvciBidWlsZGluZ1xuICogY3VzdG9tIGxpbmtzIHRoYXQgYXJlIGFsc28gYWNjZXNzaWJsZSBhbmQgcHJlc2VydmUgcmlnaHQtY2xpY2sgYmVoYXZpb3IuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtaHJlZlxuICovXG5cbmZ1bmN0aW9uIHVzZUhyZWYodG8sIF90ZW1wKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgaGFzaCxcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hcbiAgfSA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICBsZXQgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZTsgLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgaHJlZi4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4ganVzdCB1c2UgdGhlIHJhd1xuICAvLyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlXG4gIC8vIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuXG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aG5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IuY3JlYXRlSHJlZih7XG4gICAgcGF0aG5hbWU6IGpvaW5lZFBhdGhuYW1lLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlcj4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtaW4tcm91dGVyLWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VJblJvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkgIT0gbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbG9jYXRpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VMb2NhdGlvbigpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubG9jYXRpb247XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGlvbi10eXBlXG4gKi9cblxuZnVuY3Rpb24gdXNlTmF2aWdhdGlvblR5cGUoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubmF2aWdhdGlvblR5cGU7XG59XG4vKipcbiAqIFJldHVybnMgYSBQYXRoTWF0Y2ggb2JqZWN0IGlmIHRoZSBnaXZlbiBwYXR0ZXJuIG1hdGNoZXMgdGhlIGN1cnJlbnQgVVJMLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgXCJhY3RpdmVcIiBzdGF0ZSwgZS5nLlxuICogPE5hdkxpbms+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW1hdGNoXG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2gocGF0dGVybikge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBwYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWF0Y2hQYXRoKHBhdHRlcm4sIHBhdGhuYW1lKSwgW3BhdGhuYW1lLCBwYXR0ZXJuXSk7XG59XG4vKipcbiAqIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBuYXZpZ2F0ZSgpIGZ1bmN0aW9uIHJldHVybmVkIGZyb20gdXNlTmF2aWdhdGUoKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW1wZXJhdGl2ZSBtZXRob2QgZm9yIGNoYW5naW5nIHRoZSBsb2NhdGlvbi4gVXNlZCBieSA8TGluaz5zLCBidXRcbiAqIG1heSBhbHNvIGJlIHVzZWQgYnkgb3RoZXIgZWxlbWVudHMgdG8gY2hhbmdlIHRoZSBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1uYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZSgpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VOYXZpZ2F0ZSgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICBsZXQgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoYWN0aXZlUmVmLmN1cnJlbnQsIFwiWW91IHNob3VsZCBjYWxsIG5hdmlnYXRlKCkgaW4gYSBSZWFjdC51c2VFZmZlY3QoKSwgbm90IHdoZW4gXCIgKyBcInlvdXIgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkLlwiKSA6IHZvaWQgMDtcbiAgICBpZiAoIWFjdGl2ZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICBuYXZpZ2F0b3IuZ28odG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwYXRoID0gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIG9wdGlvbnMucmVsYXRpdmUgPT09IFwicGF0aFwiKTsgLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAgIC8vIHRvIGhhbmRpbmcgb2ZmIHRvIGhpc3RvcnkuICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIHdlXG4gICAgLy8gbmF2aWdhdGUgdG8gdGhlIHJhdyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbFxuICAgIC8vIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2Ugb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGxpbmtzXG5cbiAgICBpZiAoYmFzZW5hbWUgIT09IFwiL1wiKSB7XG4gICAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgICB9XG5cbiAgICAoISFvcHRpb25zLnJlcGxhY2UgPyBuYXZpZ2F0b3IucmVwbGFjZSA6IG5hdmlnYXRvci5wdXNoKShwYXRoLCBvcHRpb25zLnN0YXRlLCBvcHRpb25zKTtcbiAgfSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHJvdXRlUGF0aG5hbWVzSnNvbiwgbG9jYXRpb25QYXRobmFtZV0pO1xuICByZXR1cm4gbmF2aWdhdGU7XG59XG5jb25zdCBPdXRsZXRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4vKipcbiAqIFJldHVybnMgdGhlIGNvbnRleHQgKGlmIHByb3ZpZGVkKSBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1vdXRsZXQtY29udGV4dFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldENvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KE91dGxldENvbnRleHQpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS4gVXNlZCBpbnRlcm5hbGx5IGJ5IDxPdXRsZXQ+IHRvIHJlbmRlciBjaGlsZCByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0XG4gKi9cblxuZnVuY3Rpb24gdXNlT3V0bGV0KGNvbnRleHQpIHtcbiAgbGV0IG91dGxldCA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KS5vdXRsZXQ7XG5cbiAgaWYgKG91dGxldCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChPdXRsZXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29udGV4dFxuICAgIH0sIG91dGxldCk7XG4gIH1cblxuICByZXR1cm4gb3V0bGV0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiBrZXkvdmFsdWUgcGFpcnMgb2YgdGhlIGR5bmFtaWMgcGFyYW1zIGZyb20gdGhlIGN1cnJlbnRcbiAqIFVSTCB0aGF0IHdlcmUgbWF0Y2hlZCBieSB0aGUgcm91dGUgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1wYXJhbXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xufVxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGF0aG5hbWUgb2YgdGhlIGdpdmVuIGB0b2AgdmFsdWUgYWdhaW5zdCB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1yZXNvbHZlZC1wYXRoXG4gKi9cblxuZnVuY3Rpb24gdXNlUmVzb2x2ZWRQYXRoKHRvLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKSwgW3RvLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgb2YgdGhlIHJvdXRlIHRoYXQgbWF0Y2hlZCB0aGUgY3VycmVudCBsb2NhdGlvbiwgcHJlcGFyZWRcbiAqIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dCB0byByZW5kZXIgdGhlIHJlbWFpbmRlciBvZiB0aGUgcm91dGUgdHJlZS4gUm91dGVcbiAqIGVsZW1lbnRzIGluIHRoZSB0cmVlIG11c3QgcmVuZGVyIGFuIDxPdXRsZXQ+IHRvIHJlbmRlciB0aGVpciBjaGlsZCByb3V0ZSdzXG4gKiBlbGVtZW50LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLXJvdXRlc1xuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlUm91dGVzKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgZGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlczogcGFyZW50TWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IHBhcmVudE1hdGNoZXNbcGFyZW50TWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgbGV0IHBhcmVudFBhcmFtcyA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xuICBsZXQgcGFyZW50UGF0aG5hbWUgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50UGF0aG5hbWVCYXNlID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWVCYXNlIDogXCIvXCI7XG4gIGxldCBwYXJlbnRSb3V0ZSA9IHJvdXRlTWF0Y2ggJiYgcm91dGVNYXRjaC5yb3V0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gWW91IHdvbid0IGdldCBhIHdhcm5pbmcgYWJvdXQgMiBkaWZmZXJlbnQgPFJvdXRlcz4gdW5kZXIgYSA8Um91dGU+XG4gICAgLy8gd2l0aG91dCBhIHRyYWlsaW5nICosIGJ1dCB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgd2FybmluZyBhbnl3YXkgc2luY2Ugd2VcbiAgICAvLyBjYW5ub3QgZXZlbiBnaXZlIHRoZSB3YXJuaW5nIHVubGVzcyB0aGV5IGxhbmQgYXQgdGhlIHBhcmVudCByb3V0ZS5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyA8Um91dGVzPlxuICAgIC8vICAgey8qIFRoaXMgcm91dGUgcGF0aCBNVVNUIGVuZCB3aXRoIC8qIGJlY2F1c2Ugb3RoZXJ3aXNlXG4gICAgLy8gICAgICAgaXQgd2lsbCBuZXZlciBtYXRjaCAvYmxvZy9wb3N0LzEyMyAqL31cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZ1wiIGVsZW1lbnQ9ezxCbG9nIC8+fSAvPlxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nL2ZlZWRcIiBlbGVtZW50PXs8QmxvZ0ZlZWQgLz59IC8+XG4gICAgLy8gPC9Sb3V0ZXM+XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBCbG9nKCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPFJvdXRlcz5cbiAgICAvLyAgICAgICA8Um91dGUgcGF0aD1cInBvc3QvOmlkXCIgZWxlbWVudD17PFBvc3QgLz59IC8+XG4gICAgLy8gICAgIDwvUm91dGVzPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gICAgbGV0IHBhcmVudFBhdGggPSBwYXJlbnRSb3V0ZSAmJiBwYXJlbnRSb3V0ZS5wYXRoIHx8IFwiXCI7XG4gICAgd2FybmluZ09uY2UocGFyZW50UGF0aG5hbWUsICFwYXJlbnRSb3V0ZSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSwgXCJZb3UgcmVuZGVyZWQgZGVzY2VuZGFudCA8Um91dGVzPiAob3IgY2FsbGVkIGB1c2VSb3V0ZXMoKWApIGF0IFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aG5hbWUgKyBcIlxcXCIgKHVuZGVyIDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+KSBidXQgdGhlIFwiKSArIFwicGFyZW50IHJvdXRlIHBhdGggaGFzIG5vIHRyYWlsaW5nIFxcXCIqXFxcIi4gVGhpcyBtZWFucyBpZiB5b3UgbmF2aWdhdGUgXCIgKyBcImRlZXBlciwgdGhlIHBhcmVudCB3b24ndCBtYXRjaCBhbnltb3JlIGFuZCB0aGVyZWZvcmUgdGhlIGNoaWxkIFwiICsgXCJyb3V0ZXMgd2lsbCBuZXZlciByZW5kZXIuXFxuXFxuXCIgKyAoXCJQbGVhc2UgY2hhbmdlIHRoZSBwYXJlbnQgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4gdG8gPFJvdXRlIFwiKSArIChcInBhdGg9XFxcIlwiICsgKHBhcmVudFBhdGggPT09IFwiL1wiID8gXCIqXCIgOiBwYXJlbnRQYXRoICsgXCIvKlwiKSArIFwiXFxcIj4uXCIpKTtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbkFyZykge1xuICAgIHZhciBfcGFyc2VkTG9jYXRpb25BcmckcGE7XG5cbiAgICBsZXQgcGFyc2VkTG9jYXRpb25BcmcgPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gICAgIShwYXJlbnRQYXRobmFtZUJhc2UgPT09IFwiL1wiIHx8ICgoX3BhcnNlZExvY2F0aW9uQXJnJHBhID0gcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUpID09IG51bGwgPyB2b2lkIDAgOiBfcGFyc2VkTG9jYXRpb25BcmckcGEuc3RhcnRzV2l0aChwYXJlbnRQYXRobmFtZUJhc2UpKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIldoZW4gb3ZlcnJpZGluZyB0aGUgbG9jYXRpb24gdXNpbmcgYDxSb3V0ZXMgbG9jYXRpb24+YCBvciBgdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb24pYCwgXCIgKyBcInRoZSBsb2NhdGlvbiBwYXRobmFtZSBtdXN0IGJlZ2luIHdpdGggdGhlIHBvcnRpb24gb2YgdGhlIFVSTCBwYXRobmFtZSB0aGF0IHdhcyBcIiArIChcIm1hdGNoZWQgYnkgYWxsIHBhcmVudCByb3V0ZXMuIFRoZSBjdXJyZW50IHBhdGhuYW1lIGJhc2UgaXMgXFxcIlwiICsgcGFyZW50UGF0aG5hbWVCYXNlICsgXCJcXFwiIFwiKSArIChcImJ1dCBwYXRobmFtZSBcXFwiXCIgKyBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSArIFwiXFxcIiB3YXMgZ2l2ZW4gaW4gdGhlIGBsb2NhdGlvbmAgcHJvcC5cIikpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbG9jYXRpb24gPSBwYXJzZWRMb2NhdGlvbkFyZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbUNvbnRleHQ7XG4gIH1cblxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UocGFyZW50UGF0aG5hbWVCYXNlLmxlbmd0aCkgfHwgXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB7XG4gICAgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhwYXJlbnRSb3V0ZSB8fCBtYXRjaGVzICE9IG51bGwsIFwiTm8gcm91dGVzIG1hdGNoZWQgbG9jYXRpb24gXFxcIlwiICsgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoICsgXCJcXFwiIFwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhtYXRjaGVzID09IG51bGwgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmVsZW1lbnQgIT09IHVuZGVmaW5lZCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuQ29tcG9uZW50ICE9PSB1bmRlZmluZWQsIFwiTWF0Y2hlZCBsZWFmIHJvdXRlIGF0IGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBcIiArIFwiZG9lcyBub3QgaGF2ZSBhbiBlbGVtZW50IG9yIENvbXBvbmVudC4gVGhpcyBtZWFucyBpdCB3aWxsIHJlbmRlciBhbiA8T3V0bGV0IC8+IHdpdGggYSBcIiArIFwibnVsbCB2YWx1ZSBieSBkZWZhdWx0IHJlc3VsdGluZyBpbiBhbiBcXFwiZW1wdHlcXFwiIHBhZ2UuXCIpIDogdm9pZCAwO1xuICB9XG5cbiAgbGV0IHJlbmRlcmVkTWF0Y2hlcyA9IF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMgJiYgbWF0Y2hlcy5tYXAobWF0Y2ggPT4gT2JqZWN0LmFzc2lnbih7fSwgbWF0Y2gsIHtcbiAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudFBhcmFtcywgbWF0Y2gucGFyYW1zKSxcbiAgICBwYXRobmFtZTogam9pblBhdGhzKFtwYXJlbnRQYXRobmFtZUJhc2UsIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzXG4gICAgbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKG1hdGNoLnBhdGhuYW1lKS5wYXRobmFtZSA6IG1hdGNoLnBhdGhuYW1lXSksXG4gICAgcGF0aG5hbWVCYXNlOiBtYXRjaC5wYXRobmFtZUJhc2UgPT09IFwiL1wiID8gcGFyZW50UGF0aG5hbWVCYXNlIDogam9pblBhdGhzKFtwYXJlbnRQYXRobmFtZUJhc2UsIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzXG4gICAgbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKG1hdGNoLnBhdGhuYW1lQmFzZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICB9KSksIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgfHwgdW5kZWZpbmVkKTsgLy8gV2hlbiBhIHVzZXIgcGFzc2VzIGluIGEgYGxvY2F0aW9uQXJnYCwgdGhlIGFzc29jaWF0ZWQgcm91dGVzIG5lZWQgdG9cbiAgLy8gYmUgd3JhcHBlZCBpbiBhIG5ldyBgTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyYCBpbiBvcmRlciBmb3IgYHVzZUxvY2F0aW9uYFxuICAvLyB0byB1c2UgdGhlIHNjb3BlZCBsb2NhdGlvbiBpbnN0ZWFkIG9mIHRoZSBnbG9iYWwgbG9jYXRpb24uXG5cblxuICBpZiAobG9jYXRpb25BcmcgJiYgcmVuZGVyZWRNYXRjaGVzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbG9jYXRpb246IF9leHRlbmRzKHtcbiAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgICAgIGhhc2g6IFwiXCIsXG4gICAgICAgICAgc3RhdGU6IG51bGwsXG4gICAgICAgICAga2V5OiBcImRlZmF1bHRcIlxuICAgICAgICB9LCBsb2NhdGlvbiksXG4gICAgICAgIG5hdmlnYXRpb25UeXBlOiBBY3Rpb24uUG9wXG4gICAgICB9XG4gICAgfSwgcmVuZGVyZWRNYXRjaGVzKTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRFcnJvckNvbXBvbmVudCgpIHtcbiAgbGV0IGVycm9yID0gdXNlUm91dGVFcnJvcigpO1xuICBsZXQgbWVzc2FnZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGVycm9yLnN0YXR1cyArIFwiIFwiICsgZXJyb3Iuc3RhdHVzVGV4dCA6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICBsZXQgc3RhY2sgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3Iuc3RhY2sgOiBudWxsO1xuICBsZXQgbGlnaHRncmV5ID0gXCJyZ2JhKDIwMCwyMDAsMjAwLCAwLjUpXCI7XG4gIGxldCBwcmVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIwLjVyZW1cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgY29kZVN0eWxlcyA9IHtcbiAgICBwYWRkaW5nOiBcIjJweCA0cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgZGV2SW5mbyA9IG51bGw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGRldkluZm8gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiXFx1RDgzRFxcdURDQkYgSGV5IGRldmVsb3BlciBcXHVEODNEXFx1REM0QlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBwcm92aWRlIGEgd2F5IGJldHRlciBVWCB0aGFuIHRoaXMgd2hlbiB5b3VyIGFwcCB0aHJvd3MgZXJyb3JzIGJ5IHByb3ZpZGluZyB5b3VyIG93blxceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICBzdHlsZTogY29kZVN0eWxlc1xuICAgIH0sIFwiRXJyb3JCb3VuZGFyeVwiKSwgXCIgcHJvcCBvblxceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICBzdHlsZTogY29kZVN0eWxlc1xuICAgIH0sIFwiPFJvdXRlPlwiKSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiVW5leHBlY3RlZCBBcHBsaWNhdGlvbiBFcnJvciFcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIG1lc3NhZ2UpLCBzdGFjayA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICBzdHlsZTogcHJlU3R5bGVzXG4gIH0sIHN0YWNrKSA6IG51bGwsIGRldkluZm8pO1xufVxuXG5jbGFzcyBSZW5kZXJFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5sb2NhdGlvbixcbiAgICAgIGVycm9yOiBwcm9wcy5lcnJvclxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vIFdoZW4gd2UgZ2V0IGludG8gYW4gZXJyb3Igc3RhdGUsIHRoZSB1c2VyIHdpbGwgbGlrZWx5IGNsaWNrIFwiYmFja1wiIHRvIHRoZVxuICAgIC8vIHByZXZpb3VzIHBhZ2UgdGhhdCBkaWRuJ3QgaGF2ZSBhbiBlcnJvci4gQmVjYXVzZSB0aGlzIHdyYXBzIHRoZSBlbnRpcmVcbiAgICAvLyBhcHBsaWNhdGlvbiwgdGhhdCB3aWxsIGhhdmUgbm8gZWZmZWN0LS10aGUgZXJyb3IgcGFnZSBjb250aW51ZXMgdG8gZGlzcGxheS5cbiAgICAvLyBUaGlzIGdpdmVzIHVzIGEgbWVjaGFuaXNtIHRvIHJlY292ZXIgZnJvbSB0aGUgZXJyb3Igd2hlbiB0aGUgbG9jYXRpb24gY2hhbmdlcy5cbiAgICAvL1xuICAgIC8vIFdoZXRoZXIgd2UncmUgaW4gYW4gZXJyb3Igc3RhdGUgb3Igbm90LCB3ZSB1cGRhdGUgdGhlIGxvY2F0aW9uIGluIHN0YXRlXG4gICAgLy8gc28gdGhhdCB3aGVuIHdlIGFyZSBpbiBhbiBlcnJvciBzdGF0ZSwgaXQgZ2V0cyByZXNldCB3aGVuIGEgbmV3IGxvY2F0aW9uXG4gICAgLy8gY29tZXMgaW4gYW5kIHRoZSB1c2VyIHJlY292ZXJzIGZyb20gdGhlIGVycm9yLlxuICAgIGlmIChzdGF0ZS5sb2NhdGlvbiAhPT0gcHJvcHMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBwcm9wcy5lcnJvcixcbiAgICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uXG4gICAgICB9O1xuICAgIH0gLy8gSWYgd2UncmUgbm90IGNoYW5naW5nIGxvY2F0aW9ucywgcHJlc2VydmUgdGhlIGxvY2F0aW9uIGJ1dCBzdGlsbCBzdXJmYWNlXG4gICAgLy8gYW55IG5ldyBlcnJvcnMgdGhhdCBtYXkgY29tZSB0aHJvdWdoLiBXZSByZXRhaW4gdGhlIGV4aXN0aW5nIGVycm9yLCB3ZSBkb1xuICAgIC8vIHRoaXMgYmVjYXVzZSB0aGUgZXJyb3IgcHJvdmlkZWQgZnJvbSB0aGUgYXBwIHN0YXRlIG1heSBiZSBjbGVhcmVkIHdpdGhvdXRcbiAgICAvLyB0aGUgbG9jYXRpb24gY2hhbmdpbmcuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3IgfHwgc3RhdGUuZXJyb3IsXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb25cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZWFjdCBSb3V0ZXIgY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5lcnJvciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMucm91dGVDb250ZXh0XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVFcnJvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgfSkpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIFJlbmRlcmVkUm91dGUoX3JlZikge1xuICBsZXQge1xuICAgIHJvdXRlQ29udGV4dCxcbiAgICBtYXRjaCxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7IC8vIFRyYWNrIGhvdyBkZWVwIHdlIGdvdCBpbiBvdXIgcmVuZGVyIHBhc3MgdG8gZW11bGF0ZSBTU1IgY29tcG9uZW50RGlkQ2F0Y2hcbiAgLy8gaW4gYSBEYXRhU3RhdGljUm91dGVyXG5cbiAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpYyAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0ICYmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgbWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkpIHtcbiAgICBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkID0gbWF0Y2gucm91dGUuaWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJvdXRlQ29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMsIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZSkge1xuICBpZiAocGFyZW50TWF0Y2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50TWF0Y2hlcyA9IFtdO1xuICB9XG5cbiAgaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuICAgIGlmIChkYXRhUm91dGVyU3RhdGUgIT0gbnVsbCAmJiBkYXRhUm91dGVyU3RhdGUuZXJyb3JzKSB7XG4gICAgICAvLyBEb24ndCBiYWlsIGlmIHdlIGhhdmUgZGF0YSByb3V0ZXIgZXJyb3JzIHNvIHdlIGNhbiByZW5kZXIgdGhlbSBpbiB0aGVcbiAgICAgIC8vIGJvdW5kYXJ5LiAgVXNlIHRoZSBwcmUtbWF0Y2hlZCAob3Igc2hpbW1lZCkgbWF0Y2hlc1xuICAgICAgbWF0Y2hlcyA9IGRhdGFSb3V0ZXJTdGF0ZS5tYXRjaGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVuZGVyZWRNYXRjaGVzID0gbWF0Y2hlczsgLy8gSWYgd2UgaGF2ZSBkYXRhIGVycm9ycywgdHJpbSBtYXRjaGVzIHRvIHRoZSBoaWdoZXN0IGVycm9yIGJvdW5kYXJ5XG5cbiAgbGV0IGVycm9ycyA9IGRhdGFSb3V0ZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogZGF0YVJvdXRlclN0YXRlLmVycm9ycztcblxuICBpZiAoZXJyb3JzICE9IG51bGwpIHtcbiAgICBsZXQgZXJyb3JJbmRleCA9IHJlbmRlcmVkTWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkICYmIChlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttLnJvdXRlLmlkXSkpO1xuICAgICEoZXJyb3JJbmRleCA+PSAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiQ291bGQgbm90IGZpbmQgYSBtYXRjaGluZyByb3V0ZSBmb3IgdGhlIGN1cnJlbnQgZXJyb3JzOiBcIiArIGVycm9ycykgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZW5kZXJlZE1hdGNoZXMgPSByZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgTWF0aC5taW4ocmVuZGVyZWRNYXRjaGVzLmxlbmd0aCwgZXJyb3JJbmRleCArIDEpKTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgbGV0IGVycm9yID0gbWF0Y2gucm91dGUuaWQgPyBlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttYXRjaC5yb3V0ZS5pZF0gOiBudWxsOyAvLyBPbmx5IGRhdGEgcm91dGVycyBoYW5kbGUgZXJyb3JzXG5cbiAgICBsZXQgZXJyb3JFbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUpIHtcbiAgICAgIGlmIChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5KSB7XG4gICAgICAgIGVycm9yRWxlbWVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnksIG51bGwpO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQpIHtcbiAgICAgICAgZXJyb3JFbGVtZW50ID0gbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdEVycm9yQ29tcG9uZW50LCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hlcyA9IHBhcmVudE1hdGNoZXMuY29uY2F0KHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBpbmRleCArIDEpKTtcblxuICAgIGxldCBnZXRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IG91dGxldDtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNoaWxkcmVuID0gZXJyb3JFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5Db21wb25lbnQpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChtYXRjaC5yb3V0ZS5Db21wb25lbnQsIG51bGwpO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5lbGVtZW50KSB7XG4gICAgICAgIGNoaWxkcmVuID0gbWF0Y2gucm91dGUuZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlcmVkUm91dGUsIHtcbiAgICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgICByb3V0ZUNvbnRleHQ6IHtcbiAgICAgICAgICBvdXRsZXQsXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pO1xuICAgIH07IC8vIE9ubHkgd3JhcCBpbiBhbiBlcnJvciBib3VuZGFyeSB3aXRoaW4gZGF0YSByb3V0ZXIgdXNhZ2VzIHdoZW4gd2UgaGF2ZSBhblxuICAgIC8vIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50IG9uIHRoaXMgcm91dGUuICBPdGhlcndpc2UgbGV0IGl0IGJ1YmJsZSB1cCB0b1xuICAgIC8vIGFuIGFuY2VzdG9yIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50XG5cblxuICAgIHJldHVybiBkYXRhUm91dGVyU3RhdGUgJiYgKG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnkgfHwgbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IGluZGV4ID09PSAwKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlckVycm9yQm91bmRhcnksIHtcbiAgICAgIGxvY2F0aW9uOiBkYXRhUm91dGVyU3RhdGUubG9jYXRpb24sXG4gICAgICBjb21wb25lbnQ6IGVycm9yRWxlbWVudCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbigpLFxuICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgIG91dGxldDogbnVsbCxcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfVxuICAgIH0pIDogZ2V0Q2hpbGRyZW4oKTtcbiAgfSwgbnVsbCk7XG59XG52YXIgRGF0YVJvdXRlckhvb2s7XG5cbihmdW5jdGlvbiAoRGF0YVJvdXRlckhvb2spIHtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VCbG9ja2VyXCJdID0gXCJ1c2VCbG9ja2VyXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VCbG9ja2VyXCJdID0gXCJ1c2VCbG9ja2VyXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VMb2FkZXJEYXRhXCJdID0gXCJ1c2VMb2FkZXJEYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VBY3Rpb25EYXRhXCJdID0gXCJ1c2VBY3Rpb25EYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUVycm9yXCJdID0gXCJ1c2VSb3V0ZUVycm9yXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VOYXZpZ2F0aW9uXCJdID0gXCJ1c2VOYXZpZ2F0aW9uXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUxvYWRlckRhdGFcIl0gPSBcInVzZVJvdXRlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTWF0Y2hlc1wiXSA9IFwidXNlTWF0Y2hlc1wiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG59KShEYXRhUm91dGVyU3RhdGVIb29rIHx8IChEYXRhUm91dGVyU3RhdGVIb29rID0ge30pKTtcblxuZnVuY3Rpb24gZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkge1xuICByZXR1cm4gaG9va05hbWUgKyBcIiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVycy9waWNraW5nLWEtcm91dGVyLlwiO1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gICFjdHggPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGN0eDtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlclN0YXRlKGhvb2tOYW1lKSB7XG4gIGxldCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVzZVJvdXRlQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gcm91dGU7XG59XG5cbmZ1bmN0aW9uIHVzZUN1cnJlbnRSb3V0ZUlkKGhvb2tOYW1lKSB7XG4gIGxldCByb3V0ZSA9IHVzZVJvdXRlQ29udGV4dChob29rTmFtZSk7XG4gIGxldCB0aGlzUm91dGUgPSByb3V0ZS5tYXRjaGVzW3JvdXRlLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICF0aGlzUm91dGUucm91dGUuaWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBob29rTmFtZSArIFwiIGNhbiBvbmx5IGJlIHVzZWQgb24gcm91dGVzIHRoYXQgY29udGFpbiBhIHVuaXF1ZSBcXFwiaWRcXFwiXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiB0aGlzUm91dGUucm91dGUuaWQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiwgZGVmYXVsdGluZyB0byBhbiBcImlkbGVcIiBuYXZpZ2F0aW9uIHdoZW5cbiAqIG5vIG5hdmlnYXRpb24gaXMgaW4gcHJvZ3Jlc3NcbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb24oKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU5hdmlnYXRpb24pO1xuICByZXR1cm4gc3RhdGUubmF2aWdhdGlvbjtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJldmFsaWRhdGUgZnVuY3Rpb24gZm9yIG1hbnVhbGx5IHRyaWdnZXJpbmcgcmV2YWxpZGF0aW9uLCBhcyB3ZWxsXG4gKiBhcyB0aGUgY3VycmVudCBzdGF0ZSBvZiBhbnkgbWFudWFsIHJldmFsaWRhdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VSZXZhbGlkYXRvcigpIHtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlUmV2YWxpZGF0b3IpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSZXZhbGlkYXRvcik7XG4gIHJldHVybiB7XG4gICAgcmV2YWxpZGF0ZTogZGF0YVJvdXRlckNvbnRleHQucm91dGVyLnJldmFsaWRhdGUsXG4gICAgc3RhdGU6IHN0YXRlLnJldmFsaWRhdGlvblxuICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3RpdmUgcm91dGUgbWF0Y2hlcywgdXNlZnVsIGZvciBhY2Nlc3NpbmcgbG9hZGVyRGF0YSBmb3JcbiAqIHBhcmVudC9jaGlsZCByb3V0ZXMgb3IgdGhlIHJvdXRlIFwiaGFuZGxlXCIgcHJvcGVydHlcbiAqL1xuXG5mdW5jdGlvbiB1c2VNYXRjaGVzKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXMsXG4gICAgbG9hZGVyRGF0YVxuICB9ID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTWF0Y2hlcyk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoZXMubWFwKG1hdGNoID0+IHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gbWF0Y2g7IC8vIE5vdGU6IFRoaXMgc3RydWN0dXJlIG1hdGNoZXMgdGhhdCBjcmVhdGVkIGJ5IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaFxuICAgIC8vIGluIHRoZSBAcmVtaXgtcnVuL3JvdXRlciAsIHNvIGlmIHlvdSBjaGFuZ2UgdGhpcyBwbGVhc2UgYWxzbyBjaGFuZ2VcbiAgICAvLyB0aGF0IDopICBFdmVudHVhbGx5IHdlJ2xsIERSWSB0aGlzIHVwXG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IG1hdGNoLnJvdXRlLmlkLFxuICAgICAgcGF0aG5hbWUsXG4gICAgICBwYXJhbXMsXG4gICAgICBkYXRhOiBsb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSxcbiAgICAgIGhhbmRsZTogbWF0Y2gucm91dGUuaGFuZGxlXG4gICAgfTtcbiAgfSksIFttYXRjaGVzLCBsb2FkZXJEYXRhXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxvYWRlciBkYXRhIGZvciB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBsb2FkZXJcbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2FkZXJEYXRhKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VMb2FkZXJEYXRhKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuXG4gIGlmIChzdGF0ZS5lcnJvcnMgJiYgc3RhdGUuZXJyb3JzW3JvdXRlSWRdICE9IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiWW91IGNhbm5vdCBgdXNlTG9hZGVyRGF0YWAgaW4gYW4gZXJyb3JFbGVtZW50IChyb3V0ZUlkOiBcIiArIHJvdXRlSWQgKyBcIilcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5sb2FkZXJEYXRhW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXJEYXRhIGZvciB0aGUgZ2l2ZW4gcm91dGVJZFxuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlTG9hZGVyRGF0YShyb3V0ZUlkKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlTG9hZGVyRGF0YSk7XG4gIHJldHVybiBzdGF0ZS5sb2FkZXJEYXRhW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3Rpb24gZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgYWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gdXNlQWN0aW9uRGF0YSgpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlQWN0aW9uRGF0YSk7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJ1c2VBY3Rpb25EYXRhIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoKHN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBzdGF0ZS5hY3Rpb25EYXRhKSB8fCB7fSlbMF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgZXJyb3IsIHdoaWNoIGNvdWxkIGJlIGEgbG9hZGVyL2FjdGlvblxuICogZXJyb3Igb3IgYSByZW5kZXIgZXJyb3IuICBUaGlzIGlzIGludGVuZGVkIHRvIGJlIGNhbGxlZCBmcm9tIHlvdXJcbiAqIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50IHRvIGRpc3BsYXkgYSBwcm9wZXIgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZUVycm9yKCkge1xuICB2YXIgX3N0YXRlJGVycm9ycztcblxuICBsZXQgZXJyb3IgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlRXJyb3JDb250ZXh0KTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUVycm9yKTsgLy8gSWYgdGhpcyB3YXMgYSByZW5kZXIgZXJyb3IsIHdlIHB1dCBpdCBpbiBhIFJvdXRlRXJyb3IgY29udGV4dCBpbnNpZGVcbiAgLy8gb2YgUmVuZGVyRXJyb3JCb3VuZGFyeVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSAvLyBPdGhlcndpc2UgbG9vayBmb3IgZXJyb3JzIGZyb20gb3VyIGRhdGEgcm91dGVyIHN0YXRlXG5cblxuICByZXR1cm4gKF9zdGF0ZSRlcnJvcnMgPSBzdGF0ZS5lcnJvcnMpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZXJyb3JzW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoYXBweS1wYXRoIGRhdGEgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciA8QXdhaXQgLz4gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VBc3luY1ZhbHVlKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2RhdGE7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVycm9yIGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgPEF3YWl0IC8+IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQXN5bmNFcnJvcigpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9lcnJvcjtcbn1cbmxldCBibG9ja2VySWQgPSAwO1xuLyoqXG4gKiBBbGxvdyB0aGUgYXBwbGljYXRpb24gdG8gYmxvY2sgbmF2aWdhdGlvbnMgd2l0aGluIHRoZSBTUEEgYW5kIHByZXNlbnQgdGhlXG4gKiB1c2VyIGEgY29uZmlybWF0aW9uIGRpYWxvZyB0byBjb25maXJtIHRoZSBuYXZpZ2F0aW9uLiAgTW9zdGx5IHVzZWQgdG8gYXZvaWRcbiAqIHVzaW5nIGhhbGYtZmlsbGVkIGZvcm0gZGF0YS4gIFRoaXMgZG9lcyBub3QgaGFuZGxlIGhhcmQtcmVsb2FkcyBvclxuICogY3Jvc3Mtb3JpZ2luIG5hdmlnYXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJsb2NrZXIoc2hvdWxkQmxvY2spIHtcbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZUJsb2NrZXIpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VCbG9ja2VyKTtcbiAgbGV0IFtibG9ja2VyS2V5XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IFN0cmluZygrK2Jsb2NrZXJJZCkpO1xuICBsZXQgYmxvY2tlckZ1bmN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soYXJncyA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBzaG91bGRCbG9jayA9PT0gXCJmdW5jdGlvblwiID8gISFzaG91bGRCbG9jayhhcmdzKSA6ICEhc2hvdWxkQmxvY2s7XG4gIH0sIFtzaG91bGRCbG9ja10pO1xuICBsZXQgYmxvY2tlciA9IHJvdXRlci5nZXRCbG9ja2VyKGJsb2NrZXJLZXksIGJsb2NrZXJGdW5jdGlvbik7IC8vIENsZWFudXAgb24gdW5tb3VudFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiByb3V0ZXIuZGVsZXRlQmxvY2tlcihibG9ja2VyS2V5KSwgW3JvdXRlciwgYmxvY2tlcktleV0pOyAvLyBQcmVmZXIgdGhlIGJsb2NrZXIgZnJvbSBzdGF0ZSBzaW5jZSBEYXRhUm91dGVyQ29udGV4dCBpcyBtZW1vaXplZCBzbyB0aGlzXG4gIC8vIGVuc3VyZXMgd2UgdXBkYXRlIG9uIGJsb2NrZXIgc3RhdGUgdXBkYXRlc1xuXG4gIHJldHVybiBzdGF0ZS5ibG9ja2Vycy5nZXQoYmxvY2tlcktleSkgfHwgYmxvY2tlcjtcbn1cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIFJlbWl4IFJvdXRlciBpbnN0YW5jZSwgcmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBVSVxuICovXG5mdW5jdGlvbiBSb3V0ZXJQcm92aWRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgZmFsbGJhY2tFbGVtZW50LFxuICAgIHJvdXRlclxuICB9ID0gX3JlZjtcbiAgbGV0IGdldFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gcm91dGVyLnN0YXRlLCBbcm91dGVyXSk7IC8vIFN5bmMgcm91dGVyIHN0YXRlIHRvIG91ciBjb21wb25lbnQgc3RhdGUgdG8gZm9yY2UgcmUtcmVuZGVyc1xuXG4gIGxldCBzdGF0ZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHJvdXRlci5zdWJzY3JpYmUsIGdldFN0YXRlLCAvLyBXZSBoYXZlIHRvIHByb3ZpZGUgdGhpcyBzbyBSZWFjdEAxOCBkb2Vzbid0IGNvbXBsYWluIGR1cmluZyBoeWRyYXRpb24sXG4gIC8vIGJ1dCB3ZSBwYXNzIG91ciBzZXJpYWxpemVkIGh5ZHJhdGlvbiBkYXRhIGludG8gdGhlIHJvdXRlciBzbyBzdGF0ZSBoZXJlXG4gIC8vIGlzIGFscmVhZHkgc3luY2VkIHdpdGggd2hhdCB0aGUgc2VydmVyIHNhd1xuICBnZXRTdGF0ZSk7XG4gIGxldCBuYXZpZ2F0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlSHJlZjogcm91dGVyLmNyZWF0ZUhyZWYsXG4gICAgICBlbmNvZGVMb2NhdGlvbjogcm91dGVyLmVuY29kZUxvY2F0aW9uLFxuICAgICAgZ286IG4gPT4gcm91dGVyLm5hdmlnYXRlKG4pLFxuICAgICAgcHVzaDogKHRvLCBzdGF0ZSwgb3B0cykgPT4gcm91dGVyLm5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMucHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KSxcbiAgICAgIHJlcGxhY2U6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSlcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG4gIGxldCBiYXNlbmFtZSA9IHJvdXRlci5iYXNlbmFtZSB8fCBcIi9cIjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJvdXRlcixcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBmYWxzZSxcbiAgICBiYXNlbmFtZVxuICB9KSwgW3JvdXRlciwgbmF2aWdhdG9yLCBiYXNlbmFtZV0pOyAvLyBUaGUgZnJhZ21lbnQgYW5kIHtudWxsfSBoZXJlIGFyZSBpbXBvcnRhbnQhICBXZSBuZWVkIHRoZW0gdG8ga2VlcCBSZWFjdCAxOCdzXG4gIC8vIHVzZUlkIGhhcHB5IHdoZW4gd2UgYXJlIHNlcnZlci1yZW5kZXJpbmcgc2luY2Ugd2UgbWF5IGhhdmUgYSA8c2NyaXB0PiBoZXJlXG4gIC8vIGNvbnRhaW5pbmcgdGhlIGh5ZHJhdGVkIHNlcnZlci1zaWRlIHN0YXRpY0NvbnRleHQgKGZyb20gU3RhdGljUm91dGVyUHJvdmlkZXIpLlxuICAvLyB1c2VJZCByZWxpZXMgb24gdGhlIGNvbXBvbmVudCB0cmVlIHN0cnVjdHVyZSB0byBnZW5lcmF0ZSBkZXRlcm1pbmlzdGljIGlkJ3NcbiAgLy8gc28gd2UgbmVlZCB0byBlbnN1cmUgaXQgcmVtYWlucyB0aGUgc2FtZSBvbiB0aGUgY2xpZW50IGV2ZW4gdGhvdWdoXG4gIC8vIHdlIGRvbid0IG5lZWQgdGhlIDxzY3JpcHQ+IHRhZ1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZGF0YVJvdXRlckNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlclN0YXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdGF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogcm91dGVyLmJhc2VuYW1lLFxuICAgIGxvY2F0aW9uOiByb3V0ZXIuc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHJvdXRlci5zdGF0ZS5oaXN0b3J5QWN0aW9uLFxuICAgIG5hdmlnYXRvcjogbmF2aWdhdG9yXG4gIH0sIHJvdXRlci5zdGF0ZS5pbml0aWFsaXplZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlcywgbnVsbCkgOiBmYWxsYmFja0VsZW1lbnQpKSksIG51bGwpO1xufVxuXG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvbWVtb3J5LXJvdXRlclxuICovXG5mdW5jdGlvbiBNZW1vcnlSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXhcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXgsXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBOb3RlOiBUaGlzIEFQSSBpcyBtb3N0bHkgdXNlZnVsIGluIFJlYWN0LkNvbXBvbmVudCBzdWJjbGFzc2VzIHRoYXQgYXJlIG5vdFxuICogYWJsZSB0byB1c2UgaG9va3MuIEluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgdGhlXG4gKiBgdXNlTmF2aWdhdGVgIGhvb2sgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gTmF2aWdhdGUoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICB0byxcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfcmVmMztcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgLy8gdGhlIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCI8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKCFSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWMsIFwiPE5hdmlnYXRlPiBtdXN0IG5vdCBiZSB1c2VkIG9uIHRoZSBpbml0aWFsIHJlbmRlciBpbiBhIDxTdGF0aWNSb3V0ZXI+LiBcIiArIFwiVGhpcyBpcyBhIG5vLW9wLCBidXQgeW91IHNob3VsZCBtb2RpZnkgeW91ciBjb2RlIHNvIHRoZSA8TmF2aWdhdGU+IGlzIFwiICsgXCJvbmx5IGV2ZXIgcmVuZGVyZWQgaW4gcmVzcG9uc2UgdG8gc29tZSB1c2VyIGludGVyYWN0aW9uIG9yIHN0YXRlIGNoYW5nZS5cIikgOiB2b2lkIDA7XG4gIGxldCBkYXRhUm91dGVyU3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEF2b2lkIGtpY2tpbmcgb2ZmIG11bHRpcGxlIG5hdmlnYXRpb25zIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYVxuICAgIC8vIGRhdGEtcm91dGVyIG5hdmlnYXRpb24sIHNpbmNlIGNvbXBvbmVudHMgZ2V0IHJlLXJlbmRlcmVkIHdoZW4gd2UgZW50ZXJcbiAgICAvLyBhIHN1Ym1pdHRpbmcvbG9hZGluZyBzdGF0ZVxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUgJiYgZGF0YVJvdXRlclN0YXRlLm5hdmlnYXRpb24uc3RhdGUgIT09IFwiaWRsZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmF2aWdhdGUodG8sIHtcbiAgICAgIHJlcGxhY2UsXG4gICAgICBzdGF0ZSxcbiAgICAgIHJlbGF0aXZlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYXQgYSBjZXJ0YWluIFVSTCBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZVxuICovXG5mdW5jdGlvbiBSb3V0ZShfcHJvcHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJBIDxSb3V0ZT4gaXMgb25seSBldmVyIHRvIGJlIHVzZWQgYXMgdGhlIGNoaWxkIG9mIDxSb3V0ZXM+IGVsZW1lbnQsIFwiICsgXCJuZXZlciByZW5kZXJlZCBkaXJlY3RseS4gUGxlYXNlIHdyYXAgeW91ciA8Um91dGU+IGluIGEgPFJvdXRlcz4uXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGxvY2F0aW9uIGNvbnRleHQgZm9yIHRoZSByZXN0IG9mIHRoZSBhcHAuXG4gKlxuICogTm90ZTogWW91IHVzdWFsbHkgd29uJ3QgcmVuZGVyIGEgPFJvdXRlcj4gZGlyZWN0bHkuIEluc3RlYWQsIHlvdSdsbCByZW5kZXIgYVxuICogcm91dGVyIHRoYXQgaXMgbW9yZSBzcGVjaWZpYyB0byB5b3VyIGVudmlyb25tZW50IHN1Y2ggYXMgYSA8QnJvd3NlclJvdXRlcj5cbiAqIGluIHdlYiBicm93c2VycyBvciBhIDxTdGF0aWNSb3V0ZXI+IGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvcm91dGVyXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcihfcmVmNCkge1xuICBsZXQge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgICBjaGlsZHJlbiA9IG51bGwsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uUHJvcCxcbiAgICBuYXZpZ2F0aW9uVHlwZSA9IEFjdGlvbi5Qb3AsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlXG4gIH0gPSBfcmVmNDtcbiAgISF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCByZW5kZXIgYSA8Um91dGVyPiBpbnNpZGUgYW5vdGhlciA8Um91dGVyPi5cIiArIFwiIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBQcmVzZXJ2ZSB0cmFpbGluZyBzbGFzaGVzIG9uIGJhc2VuYW1lLCBzbyB3ZSBjYW4gbGV0IHRoZSB1c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGVuZm9yY2VtZW50IG9mIHRyYWlsaW5nIHNsYXNoZXMgdGhyb3VnaG91dCB0aGUgYXBwXG5cbiAgbGV0IGJhc2VuYW1lID0gYmFzZW5hbWVQcm9wLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuICBsZXQgbmF2aWdhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcFxuICB9KSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHN0YXRpY1Byb3BdKTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uUHJvcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxvY2F0aW9uUHJvcCA9IHBhcnNlUGF0aChsb2NhdGlvblByb3ApO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCIsXG4gICAgc3RhdGUgPSBudWxsLFxuICAgIGtleSA9IFwiZGVmYXVsdFwiXG4gIH0gPSBsb2NhdGlvblByb3A7XG4gIGxldCBsb2NhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJhaWxpbmdQYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKTtcblxuICAgIGlmICh0cmFpbGluZ1BhdGhuYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAga2V5XG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvblR5cGVcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXksIG5hdmlnYXRpb25UeXBlXSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGxvY2F0aW9uQ29udGV4dCAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb25Db250ZXh0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBuYXZpZ2F0aW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgdmFsdWU6IGxvY2F0aW9uQ29udGV4dFxuICB9KSk7XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgbmVzdGVkIHRyZWUgb2YgPFJvdXRlPiBlbGVtZW50cyB0aGF0IHJlbmRlcnMgdGhlIGJyYW5jaFxuICogdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL3JvdXRlc1xuICovXG5mdW5jdGlvbiBSb3V0ZXMoX3JlZjUpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBsb2NhdGlvblxuICB9ID0gX3JlZjU7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpOyAvLyBXaGVuIGluIGEgRGF0YVJvdXRlckNvbnRleHQgX3dpdGhvdXRfIGNoaWxkcmVuLCB3ZSB1c2UgdGhlIHJvdXRlciByb3V0ZXNcbiAgLy8gZGlyZWN0bHkuICBJZiB3ZSBoYXZlIGNoaWxkcmVuLCB0aGVuIHdlJ3JlIGluIGEgZGVzY2VuZGFudCB0cmVlIGFuZCB3ZVxuICAvLyBuZWVkIHRvIHVzZSBjaGlsZCByb3V0ZXMuXG5cbiAgbGV0IHJvdXRlcyA9IGRhdGFSb3V0ZXJDb250ZXh0ICYmICFjaGlsZHJlbiA/IGRhdGFSb3V0ZXJDb250ZXh0LnJvdXRlci5yb3V0ZXMgOiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICByZXR1cm4gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb24pO1xufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB1c2UgZm9yIHJlbmRlcmluZyBsYXppbHkgbG9hZGVkIGRhdGEgZnJvbSByZXR1cm5pbmcgZGVmZXIoKVxuICogaW4gYSBsb2FkZXIgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gQXdhaXQoX3JlZjYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvckVsZW1lbnQsXG4gICAgcmVzb2x2ZVxuICB9ID0gX3JlZjY7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdEVycm9yQm91bmRhcnksIHtcbiAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgIGVycm9yRWxlbWVudDogZXJyb3JFbGVtZW50XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc29sdmVBd2FpdCwgbnVsbCwgY2hpbGRyZW4pKTtcbn1cbnZhciBBd2FpdFJlbmRlclN0YXR1cztcblxuKGZ1bmN0aW9uIChBd2FpdFJlbmRlclN0YXR1cykge1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInBlbmRpbmdcIl0gPSAwXSA9IFwicGVuZGluZ1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInN1Y2Nlc3NcIl0gPSAxXSA9IFwic3VjY2Vzc1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcImVycm9yXCJdID0gMl0gPSBcImVycm9yXCI7XG59KShBd2FpdFJlbmRlclN0YXR1cyB8fCAoQXdhaXRSZW5kZXJTdGF0dXMgPSB7fSkpO1xuXG5jb25zdCBuZXZlclNldHRsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuXG5jbGFzcyBBd2FpdEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihcIjxBd2FpdD4gY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBlcnJvckVsZW1lbnQsXG4gICAgICByZXNvbHZlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHByb21pc2UgPSBudWxsO1xuICAgIGxldCBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuXG4gICAgaWYgKCEocmVzb2x2ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAvLyBEaWRuJ3QgZ2V0IGEgcHJvbWlzZSAtIHByb3ZpZGUgYXMgYSByZXNvbHZlZCBwcm9taXNlXG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlc29sdmVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgLy8gQ2F1Z2h0IGEgcmVuZGVyIGVycm9yLCBwcm92aWRlIGl0IGFzIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3I7XG4gICAgICBsZXQgcmVuZGVyRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KCkuY2F0Y2goKCkgPT4ge30pOyAvLyBBdm9pZCB1bmhhbmRsZWQgcmVqZWN0aW9uIHdhcm5pbmdzXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gcmVuZGVyRXJyb3JcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzb2x2ZS5fdHJhY2tlZCkge1xuICAgICAgLy8gQWxyZWFkeSB0cmFja2VkIHByb21pc2UgLSBjaGVjayBjb250ZW50c1xuICAgICAgcHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICBzdGF0dXMgPSBwcm9taXNlLl9lcnJvciAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgOiBwcm9taXNlLl9kYXRhICE9PSB1bmRlZmluZWQgPyBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzIDogQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmF3ICh1bnRyYWNrZWQpIHByb21pc2UgLSB0cmFjayBpdFxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSByZXNvbHZlLnRoZW4oZGF0YSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZGF0YVwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZGF0YVxuICAgICAgfSksIGVycm9yID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiBwcm9taXNlLl9lcnJvciBpbnN0YW5jZW9mIEFib3J0ZWREZWZlcnJlZEVycm9yKSB7XG4gICAgICAvLyBGcmVlemUgdGhlIFVJIGJ5IHRocm93aW5nIGEgbmV2ZXIgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgdGhyb3cgbmV2ZXJTZXR0bGVkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiAhZXJyb3JFbGVtZW50KSB7XG4gICAgICAvLyBObyBlcnJvckVsZW1lbnQsIHRocm93IHRvIHRoZSBuZWFyZXN0IHJvdXRlLWxldmVsIGVycm9yIGJvdW5kYXJ5XG4gICAgICB0aHJvdyBwcm9taXNlLl9lcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvcikge1xuICAgICAgLy8gUmVuZGVyIHZpYSBvdXIgZXJyb3JFbGVtZW50XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9taXNlLFxuICAgICAgICBjaGlsZHJlbjogZXJyb3JFbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAvLyBSZW5kZXIgY2hpbGRyZW4gd2l0aCByZXNvbHZlZCB2YWx1ZVxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9IC8vIFRocm93IHRvIHRoZSBzdXNwZW5zZSBib3VuZGFyeVxuXG5cbiAgICB0aHJvdyBwcm9taXNlO1xuICB9XG5cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqIEluZGlyZWN0aW9uIHRvIGxldmVyYWdlIHVzZUFzeW5jVmFsdWUgZm9yIGEgcmVuZGVyLXByb3AgQVBJIG9uIDxBd2FpdD5cbiAqL1xuXG5cbmZ1bmN0aW9uIFJlc29sdmVBd2FpdChfcmVmNykge1xuICBsZXQge1xuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmNztcbiAgbGV0IGRhdGEgPSB1c2VBc3luY1ZhbHVlKCk7XG4gIGxldCB0b1JlbmRlciA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oZGF0YSkgOiBjaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0b1JlbmRlcik7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFVUSUxTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlcyBhIHJvdXRlIGNvbmZpZyBmcm9tIGEgUmVhY3QgXCJjaGlsZHJlblwiIG9iamVjdCwgd2hpY2ggaXMgdXN1YWxseVxuICogZWl0aGVyIGEgYDxSb3V0ZT5gIGVsZW1lbnQgb3IgYW4gYXJyYXkgb2YgdGhlbS4gVXNlZCBpbnRlcm5hbGx5IGJ5XG4gKiBgPFJvdXRlcz5gIHRvIGNyZWF0ZSBhIHJvdXRlIGNvbmZpZyBmcm9tIGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2NyZWF0ZS1yb3V0ZXMtZnJvbS1jaGlsZHJlblxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gW107XG4gIH1cblxuICBsZXQgcm91dGVzID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSWdub3JlIG5vbi1lbGVtZW50cy4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIG1vcmUgZWFzaWx5IGlubGluZVxuICAgICAgLy8gY29uZGl0aW9uYWxzIGluIHRoZWlyIHJvdXRlIGNvbmZpZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdHJlZVBhdGggPSBbLi4ucGFyZW50UGF0aCwgaW5kZXhdO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJbXCIgKyAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gXCJzdHJpbmdcIiA/IGVsZW1lbnQudHlwZSA6IGVsZW1lbnQudHlwZS5uYW1lKSArIFwiXSBpcyBub3QgYSA8Um91dGU+IGNvbXBvbmVudC4gQWxsIGNvbXBvbmVudCBjaGlsZHJlbiBvZiA8Um91dGVzPiBtdXN0IGJlIGEgPFJvdXRlPiBvciA8UmVhY3QuRnJhZ21lbnQ+XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISghZWxlbWVudC5wcm9wcy5pbmRleCB8fCAhZWxlbWVudC5wcm9wcy5jaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkFuIGluZGV4IHJvdXRlIGNhbm5vdCBoYXZlIGNoaWxkIHJvdXRlcy5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBsZXQgcm91dGUgPSB7XG4gICAgICBpZDogZWxlbWVudC5wcm9wcy5pZCB8fCB0cmVlUGF0aC5qb2luKFwiLVwiKSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIENvbXBvbmVudDogZWxlbWVudC5wcm9wcy5Db21wb25lbnQsXG4gICAgICBpbmRleDogZWxlbWVudC5wcm9wcy5pbmRleCxcbiAgICAgIHBhdGg6IGVsZW1lbnQucHJvcHMucGF0aCxcbiAgICAgIGxvYWRlcjogZWxlbWVudC5wcm9wcy5sb2FkZXIsXG4gICAgICBhY3Rpb246IGVsZW1lbnQucHJvcHMuYWN0aW9uLFxuICAgICAgZXJyb3JFbGVtZW50OiBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCxcbiAgICAgIEVycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSxcbiAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSAhPSBudWxsIHx8IGVsZW1lbnQucHJvcHMuZXJyb3JFbGVtZW50ICE9IG51bGwsXG4gICAgICBzaG91bGRSZXZhbGlkYXRlOiBlbGVtZW50LnByb3BzLnNob3VsZFJldmFsaWRhdGUsXG4gICAgICBoYW5kbGU6IGVsZW1lbnQucHJvcHMuaGFuZGxlLFxuICAgICAgbGF6eTogZWxlbWVudC5wcm9wcy5sYXp5XG4gICAgfTtcblxuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuLCB0cmVlUGF0aCk7XG4gICAgfVxuXG4gICAgcm91dGVzLnB1c2gocm91dGUpO1xuICB9KTtcbiAgcmV0dXJuIHJvdXRlcztcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IG9mIGBtYXRjaFJvdXRlcygpYCBpbnRvIGEgUmVhY3QgZWxlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RFcnJvckJvdW5kYXJ5KHJvdXRlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAocm91dGUuQ29tcG9uZW50ICYmIHJvdXRlLmVsZW1lbnQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGZhbHNlLCBcIllvdSBzaG91bGQgbm90IGluY2x1ZGUgYm90aCBgQ29tcG9uZW50YCBhbmQgYGVsZW1lbnRgIG9uIHlvdXIgcm91dGUgLSBcIiArIFwiYGVsZW1lbnRgIHdpbGwgYmUgaWdub3JlZC5cIikgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgaWYgKHJvdXRlLkVycm9yQm91bmRhcnkgJiYgcm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYEVycm9yQm91bmRhcnlgIGFuZCBgZXJyb3JFbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBlcnJvckVsZW1lbnRgIHdpbGwgYmUgaWdub3JlZC5cIikgOiB2b2lkIDA7XG4gICAgfVxuICB9IC8vIE5vdGU6IHRoaXMgY2hlY2sgYWxzbyBvY2N1cnMgaW4gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIHNvIHVwZGF0ZVxuICAvLyB0aGVyZSBpZiB5b3UgY2hhbmdlIHRoaXNcblxuXG4gIHJldHVybiBCb29sZWFuKHJvdXRlLkVycm9yQm91bmRhcnkpIHx8IEJvb2xlYW4ocm91dGUuZXJyb3JFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5Um91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZnV0dXJlLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXM6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXg6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEluZGV4XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhLFxuICAgIHJvdXRlcyxcbiAgICBkZXRlY3RFcnJvckJvdW5kYXJ5XG4gIH0pLmluaXRpYWxpemUoKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgeyBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJQcm92aWRlciwgUm91dGVzLCBEYXRhUm91dGVyQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIExvY2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBOYXZpZ2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFJvdXRlQ29udGV4dCBhcyBVTlNBRkVfUm91dGVDb250ZXh0LCBkZXRlY3RFcnJvckJvdW5kYXJ5IGFzIFVOU0FGRV9kZXRlY3RFcnJvckJvdW5kYXJ5LCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIGFzIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cywgcmVuZGVyTWF0Y2hlcywgdXNlQmxvY2tlciBhcyB1bnN0YWJsZV91c2VCbG9ja2VyLCB1c2VBY3Rpb25EYXRhLCB1c2VBc3luY0Vycm9yLCB1c2VBc3luY1ZhbHVlLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb24sIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSZXZhbGlkYXRvciwgdXNlUm91dGVFcnJvciwgdXNlUm91dGVMb2FkZXJEYXRhLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmQ4YjgzMmRkZjdiNzVmMWYyMzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJNYWluIiwiY3JlYXRlUm9vdCIsIlJlYWN0RE9NIiwiUHJvdmlkZXIiLCJzdG9yZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUGFuZWwiLCJmYWtlUHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJMYXN0UHJvZHVjdHMiLCJ0aXRsZSIsInRoZW1lIiwicGF0aCIsImljb25OYW1lIiwibGlzdEVsZW1lbnRzIiwiZmFrZVJlY2lwZXMiLCJMYXN0UmVjaXBlcyIsIkhvbWUiLCJjbGFzc05hbWUiLCJOYXZMaW5rIiwiTGF5b3V0IiwiX3JlZiIsImNoaWxkcmVuIiwic3R5bGVzIiwibWFpbiIsIm1hcmdpblRvcCIsIkZyYWdtZW50IiwidG8iLCJhY3RpdmVDbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0IiwiZXhhY3QiLCJCcm93c2VyUm91dGVyIiwiUm91dGUiLCJSb3V0ZXIiLCJSb3V0ZXMiLCJBbGxQcm9kdWN0cyIsIkFkZFByb2R1Y3QiLCJBbGxSZWNpcGVzIiwiQWRkUmVjaXBlIiwiUHJvZHVjdHMiLCJBZGRQcm9kdWN0cyIsIlNpbmdsZVByb2R1Y3QiLCJlbGVtZW50IiwiUmVjaXBlc0NvbnRhaW5lciIsIkxpbmsiLCJQcm9wVHlwZXMiLCJfcmVmJGhlYWRpbmciLCJoZWFkaW5nIiwiX3JlZiRmb290ZXIiLCJmb290ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJtYXAiLCJlbCIsImtleSIsIm1hcmdpbiIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImJvb2wiLCJDb21wb25lbnQiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJvblNhdmVQcm9kdWN0Iiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJzZXRTdGF0ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInRhcmdldCIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImFsbFByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsIm9uU2F2ZVJlY2lwZSIsImhhbmRsZUFkZFByb2R1Y3QiLCJsYXN0S2V5IiwicHJvZHVjdHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJoYW5kbGVQcm9kdWN0Q2hvb3NlIiwiaW5kZXgiLCJfcmVmMiIsIl9vYmplY3RTcHJlYWQiLCJoYW5kbGVQcm9kdWN0RGVsZXRlIiwiX3JlZjMiLCJmaWx0ZXIiLCJpIiwiX3RoaXMyIiwicHJvZHVjdCIsIm51bWJlciIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJmdW5jIiwiY29ubmVjdCIsImFsbFJlY2lwZXMiLCJtYXBTdGF0ZVRvUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9