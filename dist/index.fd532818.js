// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"A7H4y":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "62d5dab885897b04655082d4fd532818";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ee1I":[function(require,module,exports) {
var _lightgallery = require("lightgallery");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _lightgalleryDefault = _parcelHelpers.interopDefault(_lightgallery);
require("lightgallery/css/lightgallery.css");
require("lightgallery/css/lg-zoom.css");
require("lightgallery/css/lg-thumbnail.css");
require("lightgallery/css/lg-autoplay.css");
require("lightgallery/css/lg-rotate.css");
var _lightgalleryPluginsThumbnail = require("lightgallery/plugins/thumbnail");
var _lightgalleryPluginsThumbnailDefault = _parcelHelpers.interopDefault(_lightgalleryPluginsThumbnail);
var _lightgalleryPluginsZoom = require("lightgallery/plugins/zoom");
var _lightgalleryPluginsZoomDefault = _parcelHelpers.interopDefault(_lightgalleryPluginsZoom);
var _lightgalleryPluginsAutoplay = require("lightgallery/plugins/autoplay");
var _lightgalleryPluginsAutoplayDefault = _parcelHelpers.interopDefault(_lightgalleryPluginsAutoplay);
var _lightgalleryPluginsRotate = require("lightgallery/plugins/rotate");
var _lightgalleryPluginsRotateDefault = _parcelHelpers.interopDefault(_lightgalleryPluginsRotate);
var _backpax = require("backpax");
var _backpaxDefault = _parcelHelpers.interopDefault(_backpax);
_lightgalleryDefault.default(document.getElementById("aniimated-thumbnials"), {
  plugins: [_lightgalleryPluginsZoomDefault.default, _lightgalleryPluginsThumbnailDefault.default, _lightgalleryPluginsAutoplayDefault.default, _lightgalleryPluginsRotateDefault.default],
  mode: "lg-slide-vertical-growth",
  zoomFromOrigin: false
});
new _backpaxDefault.default(".js-parallax");
window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 37.7893719,
      lng: -122.3942
    },
    zoom: 16,
    heading: 320,
    tilt: 47.5,
    mapId: "90f87356969d889c"
  });
  const buttons = [["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER], ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER], ["Tilt Down", "tilt", 20, google.maps.ControlPosition.TOP_CENTER], ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER]];
  buttons.forEach(([text, mode, amount, position]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");
    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    map.controls[position].push(controlDiv);
  });
  const adjustMap = function (mode, amount) {
    switch (mode) {
      case "tilt":
        map.setTilt(map.getTilt() + amount);
        break;
      case "rotate":
        map.setHeading(map.getHeading() + amount);
        break;
      default:
        break;
    }
  };
};

},{"lightgallery":"VkRZj","lightgallery/css/lightgallery.css":"361NT","lightgallery/css/lg-zoom.css":"2su6H","lightgallery/css/lg-thumbnail.css":"1lbQG","lightgallery/css/lg-autoplay.css":"4q7vd","lightgallery/css/lg-rotate.css":"XGgUr","lightgallery/plugins/thumbnail":"1x4ir","lightgallery/plugins/zoom":"1vCDV","lightgallery/plugins/autoplay":"3sk3r","lightgallery/plugins/rotate":"2D7lr","backpax":"6ypWN","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"VkRZj":[function(require,module,exports) {
var define;
/*!
* lightgallery | 2.1.8 | July 7th 2021
* http://www.lightgalleryjs.com/
* Copyright (c) 2020 Sachin Neravath;
* @license GPLv3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.lightGallery = factory();
})(this, function () {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  var __assign = function () {
    __assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return __assign.apply(this, arguments);
  };
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; (j++, k++)) r[k] = a[j];
    return r;
  }
  (function () {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
      params = params || ({
        bubbles: false,
        cancelable: false,
        detail: null
      });
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    window.CustomEvent = CustomEvent;
  })();
  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
  })();
  var lgQuery = /** @class*/
  (function () {
    function lgQuery(selector) {
      this.cssVenderPrefixes = ['TransitionDuration', 'TransitionTimingFunction', 'Transform', 'Transition'];
      this.selector = this._getSelector(selector);
      this.firstElement = this._getFirstEl();
      return this;
    }
    lgQuery.generateUUID = function () {
      return ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    };
    lgQuery.prototype._getSelector = function (selector, context) {
      if (context === void 0) {
        context = document;
      }
      if (typeof selector !== 'string') {
        return selector;
      }
      context = context || document;
      var fl = selector.substring(0, 1);
      if (fl === '#') {
        return context.querySelector(selector);
      } else {
        return context.querySelectorAll(selector);
      }
    };
    lgQuery.prototype._each = function (func) {
      if (!this.selector) {
        return this;
      }
      if (this.selector.length !== undefined) {
        [].forEach.call(this.selector, func);
      } else {
        func(this.selector, 0);
      }
      return this;
    };
    lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
      // prettier-ignore
      var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
        return group1.toUpperCase();
      });
      if (this.cssVenderPrefixes.indexOf(property) !== -1) {
        el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
        el.style['webkit' + property] = value;
        el.style['moz' + property] = value;
        el.style['ms' + property] = value;
        el.style['o' + property] = value;
      } else {
        el.style[property] = value;
      }
    };
    lgQuery.prototype._getFirstEl = function () {
      if (this.selector && this.selector.length !== undefined) {
        return this.selector[0];
      } else {
        return this.selector;
      }
    };
    lgQuery.prototype.isEventMatched = function (event, eventName) {
      var eventNamespace = eventName.split('.');
      return event.split('.').filter(function (e) {
        return e;
      }).every(function (e) {
        return eventNamespace.indexOf(e) !== -1;
      });
    };
    lgQuery.prototype.attr = function (attr, value) {
      if (value === undefined) {
        if (!this.firstElement) {
          return '';
        }
        return this.firstElement.getAttribute(attr);
      }
      this._each(function (el) {
        el.setAttribute(attr, value);
      });
      return this;
    };
    lgQuery.prototype.find = function (selector) {
      return $LG(this._getSelector(selector, this.selector));
    };
    lgQuery.prototype.first = function () {
      if (this.selector && this.selector.length !== undefined) {
        return $LG(this.selector[0]);
      } else {
        return $LG(this.selector);
      }
    };
    lgQuery.prototype.eq = function (index) {
      return $LG(this.selector[index]);
    };
    lgQuery.prototype.parent = function () {
      return $LG(this.selector.parentElement);
    };
    lgQuery.prototype.get = function () {
      return this._getFirstEl();
    };
    lgQuery.prototype.removeAttr = function (attributes) {
      var attrs = attributes.split(' ');
      this._each(function (el) {
        attrs.forEach(function (attr) {
          return el.removeAttribute(attr);
        });
      });
      return this;
    };
    lgQuery.prototype.wrap = function (className) {
      if (!this.firstElement) {
        return this;
      }
      var wrapper = document.createElement('div');
      wrapper.className = className;
      this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
      this.firstElement.parentNode.removeChild(this.firstElement);
      wrapper.appendChild(this.firstElement);
      return this;
    };
    lgQuery.prototype.addClass = function (classNames) {
      if (classNames === void 0) {
        classNames = '';
      }
      this._each(function (el) {
        // IE doesn't support multiple arguments
        classNames.split(' ').forEach(function (className) {
          el.classList.add(className);
        });
      });
      return this;
    };
    lgQuery.prototype.removeClass = function (classNames) {
      this._each(function (el) {
        // IE doesn't support multiple arguments
        classNames.split(' ').forEach(function (className) {
          el.classList.remove(className);
        });
      });
      return this;
    };
    lgQuery.prototype.hasClass = function (className) {
      if (!this.firstElement) {
        return false;
      }
      return this.firstElement.classList.contains(className);
    };
    lgQuery.prototype.hasAttribute = function (attribute) {
      if (!this.firstElement) {
        return false;
      }
      return this.firstElement.hasAttribute(attribute);
    };
    lgQuery.prototype.toggleClass = function (className) {
      if (!this.firstElement) {
        return this;
      }
      if (this.hasClass(className)) {
        this.removeClass(className);
      } else {
        this.addClass(className);
      }
      return this;
    };
    lgQuery.prototype.css = function (property, value) {
      var _this = this;
      this._each(function (el) {
        _this._setCssVendorPrefix(el, property, value);
      });
      return this;
    };
    // Need to pass separate namespaces for separate elements
    lgQuery.prototype.on = function (events, listener) {
      var _this = this;
      if (!this.selector) {
        return this;
      }
      events.split(' ').forEach(function (event) {
        if (!Array.isArray(lgQuery.eventListeners[event])) {
          lgQuery.eventListeners[event] = [];
        }
        lgQuery.eventListeners[event].push(listener);
        _this.selector.addEventListener(event.split('.')[0], listener);
      });
      return this;
    };
    // @todo - test this
    lgQuery.prototype.once = function (event, listener) {
      var _this = this;
      this.on(event, function () {
        _this.off(event);
        listener(event);
      });
      return this;
    };
    lgQuery.prototype.off = function (event) {
      var _this = this;
      if (!this.selector) {
        return this;
      }
      Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
        if (_this.isEventMatched(event, eventName)) {
          lgQuery.eventListeners[eventName].forEach(function (listener) {
            _this.selector.removeEventListener(eventName.split('.')[0], listener);
          });
          lgQuery.eventListeners[eventName] = [];
        }
      });
      return this;
    };
    lgQuery.prototype.trigger = function (event, detail) {
      if (!this.firstElement) {
        return this;
      }
      var customEvent = new CustomEvent(event.split('.')[0], {
        detail: detail || null
      });
      this.firstElement.dispatchEvent(customEvent);
      return this;
    };
    // Does not support IE
    lgQuery.prototype.load = function (url) {
      var _this = this;
      fetch(url).then(function (res) {
        _this.selector.innerHTML = res;
      });
      return this;
    };
    lgQuery.prototype.html = function (html) {
      if (html === undefined) {
        if (!this.firstElement) {
          return '';
        }
        return this.firstElement.innerHTML;
      }
      this._each(function (el) {
        el.innerHTML = html;
      });
      return this;
    };
    lgQuery.prototype.append = function (html) {
      this._each(function (el) {
        if (typeof html === 'string') {
          el.insertAdjacentHTML('beforeend', html);
        } else {
          el.appendChild(html);
        }
      });
      return this;
    };
    lgQuery.prototype.prepend = function (html) {
      this._each(function (el) {
        el.insertAdjacentHTML('afterbegin', html);
      });
      return this;
    };
    lgQuery.prototype.remove = function () {
      this._each(function (el) {
        el.parentNode.removeChild(el);
      });
      return this;
    };
    lgQuery.prototype.empty = function () {
      this._each(function (el) {
        el.innerHTML = '';
      });
      return this;
    };
    lgQuery.prototype.scrollTop = function (scrollTop) {
      if (scrollTop !== undefined) {
        document.body.scrollTop = scrollTop;
        document.documentElement.scrollTop = scrollTop;
        return this;
      } else {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }
    };
    lgQuery.prototype.scrollLeft = function (scrollLeft) {
      if (scrollLeft !== undefined) {
        document.body.scrollLeft = scrollLeft;
        document.documentElement.scrollLeft = scrollLeft;
        return this;
      } else {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      }
    };
    lgQuery.prototype.offset = function () {
      if (!this.firstElement) {
        return {
          left: 0,
          top: 0
        };
      }
      var rect = this.firstElement.getBoundingClientRect();
      var bodyMarginLeft = $LG('body').style().marginLeft;
      // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
      return {
        left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
        top: rect.top + this.scrollTop()
      };
    };
    lgQuery.prototype.style = function () {
      if (!this.firstElement) {
        return {};
      }
      return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
    };
    // Width without padding and border even if box-sizing is used.
    lgQuery.prototype.width = function () {
      var style = this.style();
      return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    };
    // Height without padding and border even if box-sizing is used.
    lgQuery.prototype.height = function () {
      var style = this.style();
      return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
    };
    lgQuery.eventListeners = {};
    return lgQuery;
  })();
  function $LG(selector) {
    return new lgQuery(selector);
  }
  var defaultDynamicOptions = ['src', 'sources', 'subHtml', 'subHtmlUrl', 'html', 'video', 'poster', 'slideName', 'responsive', 'srcset', 'sizes', 'iframe', 'downloadUrl', 'width', 'facebookShareUrl', 'tweetText', 'iframeTitle', 'twitterShareUrl', 'pinterestShareUrl', 'pinterestText', 'fbHtml', 'disqusIdentifier', 'disqusUrl'];
  // Convert html data-attribute to camalcase
  function convertToData(attr) {
    // FInd a way for lgsize
    if (attr === 'href') {
      return 'src';
    }
    attr = attr.replace('data-', '');
    attr = attr.charAt(0).toLowerCase() + attr.slice(1);
    attr = attr.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    return attr;
  }
  var utils = {
    /**
    * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
    */
    getSize: function (el, container, spacing, defaultLgSize) {
      if (spacing === void 0) {
        spacing = 0;
      }
      var LGel = $LG(el);
      var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
      if (!lgSize) {
        return;
      }
      var isResponsiveSizes = lgSize.split(',');
      // if at-least two viewport sizes are available
      if (isResponsiveSizes[1]) {
        var wWidth = window.innerWidth;
        for (var i = 0; i < isResponsiveSizes.length; i++) {
          var size_1 = isResponsiveSizes[i];
          var responsiveWidth = parseInt(size_1.split('-')[2], 10);
          if (responsiveWidth > wWidth) {
            lgSize = size_1;
            break;
          }
          // take last item as last option
          if (i === isResponsiveSizes.length - 1) {
            lgSize = size_1;
          }
        }
      }
      var size = lgSize.split('-');
      var width = parseInt(size[0], 10);
      var height = parseInt(size[1], 10);
      var cWidth = container.width();
      var cHeight = container.height() - spacing;
      var maxWidth = Math.min(cWidth, width);
      var maxHeight = Math.min(cHeight, height);
      var ratio = Math.min(maxWidth / width, maxHeight / height);
      return {
        width: width * ratio,
        height: height * ratio
      };
    },
    /**
    * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
    * @param {jQuery Element}
    * @returns {String} Transform CSS string
    */
    getTransform: function (el, container, top, bottom, imageSize) {
      if (!imageSize) {
        return;
      }
      var LGel = $LG(el).find('img').first();
      if (!LGel.get()) {
        return;
      }
      var containerRect = container.get().getBoundingClientRect();
      var wWidth = containerRect.width;
      // using innerWidth to include mobile safari bottom bar
      var wHeight = container.height() - (top + bottom);
      var elWidth = LGel.width();
      var elHeight = LGel.height();
      var elStyle = LGel.style();
      var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
      var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
      var scX = elWidth / imageSize.width;
      var scY = elHeight / imageSize.height;
      var transform = 'translate3d(' + (x *= -1) + 'px, ' + (y *= -1) + 'px, 0) scale3d(' + scX + ', ' + scY + ', 1)';
      return transform;
    },
    getIframeMarkup: function (src, iframeWidth, iframeHeight, iframeTitle) {
      var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
      return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; height: " + iframeHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
    },
    getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
      var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
      var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
      var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
      var sourceTag = '';
      if (sources) {
        var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
        sourceTag = sourceObj.map(function (source) {
          var attrs = '';
          Object.keys(source).forEach(function (key) {
            // Do not remove the first space as it is required to separate the attributes
            attrs += " " + key + "=\"" + source[key] + "\"";
          });
          return "<source " + attrs + "></source>";
        });
      }
      return "" + sourceTag + imgMarkup;
    },
    // Get src from responsive src
    getResponsiveSrc: function (srcItms) {
      var rsWidth = [];
      var rsSrc = [];
      var src = '';
      for (var i = 0; i < srcItms.length; i++) {
        var _src = srcItms[i].split(' ');
        // Manage empty space
        if (_src[0] === '') {
          _src.splice(0, 1);
        }
        rsSrc.push(_src[0]);
        rsWidth.push(_src[1]);
      }
      var wWidth = window.innerWidth;
      for (var j = 0; j < rsWidth.length; j++) {
        if (parseInt(rsWidth[j], 10) > wWidth) {
          src = rsSrc[j];
          break;
        }
      }
      return src;
    },
    isImageLoaded: function (img) {
      if (!img) return false;
      // During the onload event, IE correctly identifies any images that
      // weren’t downloaded as not complete. Others should too. Gecko-based
      // browsers act like NS4 in that they report this incorrectly.
      if (!img.complete) {
        return false;
      }
      // However, they do have two very useful properties: naturalWidth and
      // naturalHeight. These give the true size of the image. If it failed
      // to load, either of these should be zero.
      if (img.naturalWidth === 0) {
        return false;
      }
      // No other way of checking: assume it’s ok.
      return true;
    },
    getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, _isVideo) {
      var videoClass = '';
      if (_isVideo && _isVideo.youtube) {
        videoClass = 'lg-has-youtube';
      } else if (_isVideo && _isVideo.vimeo) {
        videoClass = 'lg-has-vimeo';
      } else {
        videoClass = 'lg-has-html5';
      }
      return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"Play video\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>Play video</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
    },
    /**
    * @desc Create dynamic elements array from gallery items when dynamic option is false
    * It helps to avoid frequent DOM interaction
    * and avoid multiple checks for dynamic elments
    *
    * @returns {Array} dynamicEl
    */
    getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
      var dynamicElements = [];
      var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
      [].forEach.call(items, function (item) {
        var dynamicEl = {};
        for (var i = 0; i < item.attributes.length; i++) {
          var attr = item.attributes[i];
          if (attr.specified) {
            var dynamicAttr = convertToData(attr.name);
            var label = '';
            if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
              label = dynamicAttr;
            }
            if (label) {
              dynamicEl[label] = attr.value;
            }
          }
        }
        var currentItem = $LG(item);
        var alt = currentItem.find('img').first().attr('alt');
        var title = currentItem.attr('title');
        var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find('img').first().attr('src');
        dynamicEl.thumb = thumb;
        if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
          dynamicEl.subHtml = title || alt || '';
        }
        dynamicEl.alt = alt || title || '';
        dynamicElements.push(dynamicEl);
      });
      return dynamicElements;
    },
    isMobile: function () {
      return (/iPhone|iPad|iPod|Android/i).test(navigator.userAgent);
    }
  };
  var lightGalleryCoreSettings = {
    mode: 'lg-slide',
    easing: 'ease',
    speed: 400,
    licenseKey: '0000-0000-000-0000',
    height: '100%',
    width: '100%',
    addClass: '',
    startClass: 'lg-start-zoom',
    backdropDuration: 300,
    container: document.body,
    startAnimationDuration: 400,
    zoomFromOrigin: true,
    hideBarsDelay: 0,
    showBarsAfter: 10000,
    slideDelay: 0,
    supportLegacyBrowser: true,
    allowMediaOverlap: false,
    videoMaxSize: '1280-720',
    defaultCaptionHeight: 0,
    ariaLabelledby: '',
    ariaDescribedby: '',
    closable: true,
    swipeToClose: true,
    closeOnTap: true,
    showCloseIcon: true,
    showMaximizeIcon: false,
    loop: true,
    escKey: true,
    keyPress: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    appendSubHtmlTo: '.lg-sub-html',
    subHtmlSelectorRelative: false,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    showAfterLoad: true,
    selector: '',
    selectWithin: '',
    nextHtml: '',
    prevHtml: '',
    index: 0,
    iframeWidth: '100%',
    iframeHeight: '100%',
    download: true,
    counter: true,
    appendCounterTo: '.lg-toolbar',
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: '',
    isMobile: undefined,
    mobileSettings: {
      controls: false,
      showCloseIcon: false,
      download: false
    },
    plugins: []
  };
  /**
  * List of lightGallery events
  * All events should be documented here
  * Below interfaces are used to build the website documentations
  **/
  var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose'
  };
  // @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
  // @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
  // Unique id for each gallery
  var lgId = 0;
  var LightGallery = /** @class*/
  (function () {
    function LightGallery(element, options) {
      this.lgOpened = false;
      this.index = 0;
      // lightGallery modules
      this.plugins = [];
      // false when lightGallery load first slide content;
      this.lGalleryOn = false;
      // True when a slide animation is in progress
      this.lgBusy = false;
      this.currentItemsInDom = [];
      // Scroll top value before lightGallery is opened
      this.prevScrollTop = 0;
      this.isDummyImageRemoved = false;
      this.mediaContainerPosition = {
        top: 0,
        bottom: 0
      };
      if (!element) {
        return this;
      }
      lgId++;
      this.lgId = lgId;
      this.el = element;
      this.LGel = $LG(element);
      this.generateSettings(options);
      this.buildModules();
      // When using dynamic mode, ensure dynamicEl is an array
      if (this.settings.dynamic && this.settings.dynamicEl !== undefined && !Array.isArray(this.settings.dynamicEl)) {
        throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
      }
      this.galleryItems = this.getItems();
      this.normalizeSettings();
      // Gallery items
      this.init();
      this.validateLicense();
      return this;
    }
    LightGallery.prototype.generateSettings = function (options) {
      // lightGallery settings
      this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
      if (this.settings.isMobile && typeof this.settings.isMobile === 'function' ? this.settings.isMobile() : utils.isMobile()) {
        var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
        this.settings = __assign(__assign({}, this.settings), mobileSettings);
      }
    };
    LightGallery.prototype.normalizeSettings = function () {
      if (this.settings.slideEndAnimation) {
        this.settings.hideControlOnEnd = false;
      }
      if (!this.settings.closable) {
        this.settings.swipeToClose = false;
      }
      // And reset it on close to get the correct value next time
      this.zoomFromOrigin = this.settings.zoomFromOrigin;
      // At the moment, Zoom from image doesn't support dynamic options
      // @todo add zoomFromOrigin support for dynamic images
      if (this.settings.dynamic) {
        this.zoomFromOrigin = false;
      }
      if (!this.settings.container) {
        this.settings.container = document.body;
      }
      // settings.preload should not be grater than $item.length
      this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
    };
    LightGallery.prototype.init = function () {
      var _this = this;
      this.addSlideVideoInfo(this.galleryItems);
      this.buildStructure();
      this.LGel.trigger(lGEvents.init, {
        instance: this
      });
      if (this.settings.keyPress) {
        this.keyPress();
      }
      setTimeout(function () {
        _this.enableDrag();
        _this.enableSwipe();
      }, 50);
      this.arrow();
      if (this.settings.mousewheel) {
        this.mousewheel();
      }
      if (!this.settings.dynamic) {
        this.openGalleryOnItemClick();
      }
    };
    LightGallery.prototype.openGalleryOnItemClick = function () {
      var _this = this;
      var _loop_1 = function (index) {
        var element = this_1.items[index];
        var $element = $LG(element);
        // Using different namespace for click because click event should not unbind if selector is same object('this')
        // @todo manage all event listners - should have namespace that represent element
        var uuid = lgQuery.generateUUID();
        $element.attr('data-lg-id', uuid).on("click.lgcustom-item-" + uuid, function (e) {
          e.preventDefault();
          var currentItemIndex = _this.settings.index || index;
          _this.openGallery(currentItemIndex, element);
        });
      };
      var this_1 = this;
      // Using for loop instead of using bubbling as the items can be any html element.
      for (var index = 0; index < this.items.length; index++) {
        _loop_1(index);
      }
    };
    /**
    * Module constructor
    * Modules are build incrementally.
    * Gallery should be opened only once all the modules are initialized.
    * use moduleBuildTimeout to make sure this
    */
    LightGallery.prototype.buildModules = function () {
      var _this = this;
      this.settings.plugins.forEach(function (plugin) {
        _this.plugins.push(new plugin(_this, $LG));
      });
    };
    LightGallery.prototype.validateLicense = function () {
      if (!this.settings.licenseKey) {
        console.error('Please provide a valid license key');
      } else if (this.settings.licenseKey === '0000-0000-000-0000') {
        console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
      }
    };
    LightGallery.prototype.getSlideItem = function (index) {
      return $LG(this.getSlideItemId(index));
    };
    LightGallery.prototype.getSlideItemId = function (index) {
      return "#lg-item-" + this.lgId + "-" + index;
    };
    LightGallery.prototype.getIdName = function (id) {
      return id + "-" + this.lgId;
    };
    LightGallery.prototype.getElementById = function (id) {
      return $LG("#" + this.getIdName(id));
    };
    LightGallery.prototype.manageSingleSlideClassName = function () {
      if (this.galleryItems.length < 2) {
        this.outer.addClass('lg-single-item');
      } else {
        this.outer.removeClass('lg-single-item');
      }
    };
    LightGallery.prototype.buildStructure = function () {
      var _this = this;
      var container = this.$container && this.$container.get();
      if (container) {
        return;
      }
      var controls = '';
      var subHtmlCont = '';
      // Create controls
      if (this.settings.controls) {
        controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"Previous slide\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"Next slide\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
      }
      if (this.settings.appendSubHtmlTo === '.lg-sub-html') {
        subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
      }
      var addClasses = '';
      if (this.settings.allowMediaOverlap) {
        // Do not remove space before last single quote
        addClasses += 'lg-media-overlap ';
      }
      var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : '';
      var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : '';
      var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
      var closeIcon = this.settings.closable && this.settings.showCloseIcon ? "<button type=\"button\" aria-label=\"Close gallery\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>" : '';
      var maximizeIcon = this.settings.showMaximizeIcon ? "<button type=\"button\" aria-label=\"Toggle maximize\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>" : '';
      var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n                    <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg\" style=\"width: " + this.settings.width + "; height:" + this.settings.height + "\">\n                        <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\"></div>\n                        <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                        " + maximizeIcon + "\n                        " + closeIcon + "\n                    </div>\n                    " + controls + "\n                    <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                        " + subHtmlCont + "\n                    </div>\n                </div> \n            </div>\n        </div>\n        ";
      $LG(this.settings.container).css('position', 'relative').append(template);
      this.outer = this.getElementById('lg-outer');
      this.$lgContent = this.getElementById('lg-content');
      this.$lgComponents = this.getElementById('lg-components');
      this.$backdrop = this.getElementById('lg-backdrop');
      this.$container = this.getElementById('lg-container');
      this.$inner = this.getElementById('lg-inner');
      this.$toolbar = this.getElementById('lg-toolbar');
      this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
      var outerClassNames = this.settings.mode + " ";
      this.manageSingleSlideClassName();
      if (this.settings.enableDrag) {
        outerClassNames += 'lg-grab ';
      }
      if (this.settings.showAfterLoad) {
        outerClassNames += 'lg-show-after-load';
      }
      this.outer.addClass(outerClassNames);
      this.$inner.css('transition-timing-function', this.settings.easing);
      this.$inner.css('transition-duration', this.settings.speed + 'ms');
      if (this.settings.download) {
        this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" aria-label=\"Download\" download class=\"lg-download lg-icon\"></a>");
      }
      this.counter();
      $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
        _this.refreshOnResize();
      });
      this.hideBars();
      this.manageCloseGallery();
      this.toggleMaximize();
      this.initModules();
    };
    LightGallery.prototype.refreshOnResize = function () {
      if (this.lgOpened) {
        var currentGalleryItem = this.galleryItems[this.index];
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        var _a = this.getMediaContainerPosition(), top_1 = _a.top, bottom = _a.bottom;
        this.currentImageSize = utils.getSize(this.items[this.index], this.$lgContent, top_1 + bottom, videoInfo && this.settings.videoMaxSize);
        if (videoInfo) {
          this.resizeVideoSlide(this.index, this.currentImageSize);
        }
        if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
          var imgStyle = this.getDummyImgStyles(this.currentImageSize);
          this.outer.find('.lg-current .lg-dummy-img').first().attr('style', imgStyle);
        }
        this.LGel.trigger(lGEvents.containerResize);
      }
    };
    LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
      var lgVideoStyle = this.getVideoContStyle(imageSize);
      var currentSlide = this.getSlideItem(index);
      currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
    };
    /**
    * Update slides dynamically.
    * Add, edit or delete slides dynamically when lightGallery is opened.
    * Modify the current gallery items and pass it via updateSlides method
    * @note
    * - Do not mutate existing lightGallery items directly.
    * - Always pass new list of gallery items
    * - You need to take care of thumbnails outside the gallery if any
    * @param items Gallery items
    * @param index After the update operation, which slide gallery should navigate to
    * @category lGPublicMethods
    * @example
    * const plugin = lightGallery();
    *
    * // Adding slides dynamically
    * let galleryItems = [
    * // Access existing lightGallery items
    * // galleryItems are automatically generated internally from the gallery HTML markup
    * // or directly from galleryItems when dynamic gallery is used
    *   ...plugin.galleryItems,
    *     ...[
    *       {
    *         src: 'img/img-1.png',
    *           thumb: 'img/thumb1.png',
    *         },
    *     ],
    *   ];
    *   plugin.updateSlides(
    *     galleryItems,
    *     plugin.index,
    *   );
    *
    *
    * // Remove slides dynamically
    * galleryItems = JSON.parse(
    *   JSON.stringify(updateSlideInstance.galleryItems),
    * );
    * galleryItems.shift();
    * updateSlideInstance.updateSlides(galleryItems, 1);
    * @see <a href="/demos/update-slides/">Demo</a>
    */
    LightGallery.prototype.updateSlides = function (items, index) {
      if (this.index > items.length - 1) {
        this.index = items.length - 1;
      }
      if (items.length === 1) {
        this.index = 0;
      }
      if (!items.length) {
        this.closeGallery();
        return;
      }
      var currentSrc = this.galleryItems[index].src;
      this.galleryItems = items;
      this.updateControls();
      this.$inner.empty();
      this.currentItemsInDom = [];
      var _index = 0;
      // Find the current index based on source value of the slide
      this.galleryItems.some(function (galleryItem, itemIndex) {
        if (galleryItem.src === currentSrc) {
          _index = itemIndex;
          return true;
        }
        return false;
      });
      this.currentItemsInDom = this.organizeSlideItems(_index, -1);
      this.loadContent(_index, true);
      this.getSlideItem(_index).addClass('lg-current');
      this.index = _index;
      this.updateCurrentCounter(_index);
      this.LGel.trigger(lGEvents.updateSlides);
    };
    // Get gallery items based on multiple conditions
    LightGallery.prototype.getItems = function () {
      // Gallery items
      this.items = [];
      if (!this.settings.dynamic) {
        if (this.settings.selector === 'this') {
          this.items.push(this.el);
        } else if (this.settings.selector) {
          if (typeof this.settings.selector === 'string') {
            if (this.settings.selectWithin) {
              var selectWithin = $LG(this.settings.selectWithin);
              this.items = selectWithin.find(this.settings.selector).get();
            } else {
              this.items = this.el.querySelectorAll(this.settings.selector);
            }
          } else {
            this.items = this.settings.selector;
          }
        } else {
          this.items = this.el.children;
        }
        return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
      } else {
        return this.settings.dynamicEl || [];
      }
    };
    /**
    * Open lightGallery.
    * Open gallery with specific slide by passing index of the slide as parameter.
    * @category lGPublicMethods
    * @param {Number} index  - index of the slide
    * @param {HTMLElement} element - Which image lightGallery should zoom from
    *
    * @example
    * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
    * const dynamicGallery = lightGallery($dynamicGallery, {
    *     dynamic: true,
    *     dynamicEl: [
    *         {
    *              src: 'img/1.jpg',
    *              thumb: 'img/thumb-1.jpg',
    *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
    *         },
    *         ...
    *     ],
    * });
    * $dynamicGallery.addEventListener('click', function () {
    *     // Starts with third item.(Optional).
    *     // This is useful if you want use dynamic mode with
    *     // custom thumbnails (thumbnails outside gallery),
    *     dynamicGallery.openGallery(2);
    * });
    *
    */
    LightGallery.prototype.openGallery = function (index, element) {
      var _this = this;
      if (index === void 0) {
        index = this.settings.index;
      }
      // prevent accidental double execution
      if (this.lgOpened) return;
      this.lgOpened = true;
      this.outer.get().focus();
      this.outer.removeClass('lg-hide-items');
      // Add display block, but still has opacity 0
      this.$container.addClass('lg-show');
      var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
      this.currentItemsInDom = itemsToBeInsertedToDom;
      var items = '';
      itemsToBeInsertedToDom.forEach(function (item) {
        items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
      });
      this.$inner.append(items);
      this.addHtml(index);
      var transform = '';
      this.mediaContainerPosition = this.getMediaContainerPosition();
      var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
      if (!this.settings.allowMediaOverlap) {
        this.setMediaContainerPosition(top, bottom);
      }
      if (this.zoomFromOrigin && element) {
        this.currentImageSize = utils.getSize(element, this.$lgContent, top + bottom, this.galleryItems[index].__slideVideoInfo && this.settings.videoMaxSize);
        transform = utils.getTransform(element, this.$lgContent, top, bottom, this.currentImageSize);
      }
      if (!this.zoomFromOrigin || !transform) {
        this.outer.addClass(this.settings.startClass);
        this.getSlideItem(index).removeClass('lg-complete');
      }
      var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
      setTimeout(function () {
        _this.outer.addClass('lg-components-open');
      }, timeout);
      this.index = index;
      this.LGel.trigger(lGEvents.beforeOpen);
      // add class lg-current to remove initial transition
      this.getSlideItem(index).addClass('lg-current');
      this.lGalleryOn = false;
      // Store the current scroll top value to scroll back after closing the gallery..
      this.prevScrollTop = $LG(window).scrollTop();
      setTimeout(function () {
        // Need to check both zoomFromOrigin and transform values as we need to set set the
        // default opening animation if user missed to add the lg-size attribute
        if (_this.zoomFromOrigin && transform) {
          var currentSlide_1 = _this.getSlideItem(index);
          currentSlide_1.css('transform', transform);
          setTimeout(function () {
            currentSlide_1.addClass('lg-start-progress lg-start-end-progress').css('transition-duration', _this.settings.startAnimationDuration + 'ms');
            _this.outer.addClass('lg-zoom-from-image');
          });
          setTimeout(function () {
            currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
          }, 100);
        }
        setTimeout(function () {
          _this.$backdrop.addClass('in');
          _this.$container.addClass('lg-show-in');
        }, 10);
        // lg-visible class resets gallery opacity to 1
        if (!_this.zoomFromOrigin || !transform) {
          setTimeout(function () {
            _this.outer.addClass('lg-visible');
          }, _this.settings.backdropDuration);
        }
        // initiate slide function
        _this.slide(index, false, false, false);
        _this.LGel.trigger(lGEvents.afterOpen);
      });
      if (document.body === this.settings.container) {
        $LG('html').addClass('lg-on');
      }
    };
    /**
    * Note - Changing the position of the media on every slide transition creates a flickering effect.
    * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
    * if you have dynamic captions for each media,
    * you can provide an appropriate height for the captions via allowMediaOverlap option
    */
    LightGallery.prototype.getMediaContainerPosition = function () {
      if (this.settings.allowMediaOverlap) {
        return {
          top: 0,
          bottom: 0
        };
      }
      var top = this.$toolbar.get().clientHeight || 0;
      var captionHeight = this.settings.defaultCaptionHeight || this.outer.find('.lg-sub-html').get().clientHeight;
      var thumbContainer = this.outer.find('.lg-thumb-outer').get();
      var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
      var bottom = thumbHeight + captionHeight;
      return {
        top: top,
        bottom: bottom
      };
    };
    LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
      if (top === void 0) {
        top = 0;
      }
      if (bottom === void 0) {
        bottom = 0;
      }
      this.$inner.css('top', top + 'px').css('bottom', bottom + 'px');
    };
    LightGallery.prototype.hideBars = function () {
      var _this = this;
      // Hide controllers if mouse doesn't move for some period
      setTimeout(function () {
        _this.outer.removeClass('lg-hide-items');
        if (_this.settings.hideBarsDelay > 0) {
          _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
            _this.outer.removeClass('lg-hide-items');
            clearTimeout(_this.hideBarTimeout);
            // Timeout will be cleared on each slide movement also
            _this.hideBarTimeout = setTimeout(function () {
              _this.outer.addClass('lg-hide-items');
            }, _this.settings.hideBarsDelay);
          });
          _this.outer.trigger('mousemove.lg');
        }
      }, this.settings.showBarsAfter);
    };
    LightGallery.prototype.initPictureFill = function ($img) {
      if (this.settings.supportLegacyBrowser) {
        try {
          picturefill({
            elements: [$img.get()]
          });
        } catch (e) {
          console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
        }
      }
    };
    /**
    *  @desc Create image counter
    *  Ex: 1/10
    */
    LightGallery.prototype.counter = function () {
      if (this.settings.counter) {
        var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> / \n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
        this.outer.find(this.settings.appendCounterTo).append(counterHtml);
      }
    };
    /**
    *  @desc add sub-html into the slide
    *  @param {Number} index - index of the slide
    */
    LightGallery.prototype.addHtml = function (index) {
      var subHtml;
      var subHtmlUrl;
      if (this.galleryItems[index].subHtmlUrl) {
        subHtmlUrl = this.galleryItems[index].subHtmlUrl;
      } else {
        subHtml = this.galleryItems[index].subHtml;
      }
      if (!subHtmlUrl) {
        if (subHtml) {
          // get first letter of sub-html
          // if first letter starts with . or # get the html form the jQuery object
          var fL = subHtml.substring(0, 1);
          if (fL === '.' || fL === '#') {
            if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) {
              subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
            } else {
              subHtml = $LG(subHtml).first().html();
            }
          }
        } else {
          subHtml = '';
        }
      }
      if (this.settings.appendSubHtmlTo === '.lg-sub-html') {
        if (subHtmlUrl) {
          this.outer.find('.lg-sub-html').load(subHtmlUrl);
        } else {
          this.outer.find('.lg-sub-html').html(subHtml);
        }
      } else {
        var currentSlide = $LG(this.getSlideItemId(index));
        if (subHtmlUrl) {
          currentSlide.load(subHtmlUrl);
        } else {
          currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
        }
      }
      // Add lg-empty-html class if title doesn't exist
      if (typeof subHtml !== 'undefined' && subHtml !== null) {
        if (subHtml === '') {
          this.outer.find(this.settings.appendSubHtmlTo).addClass('lg-empty-html');
        } else {
          this.outer.find(this.settings.appendSubHtmlTo).removeClass('lg-empty-html');
        }
      }
      this.LGel.trigger(lGEvents.afterAppendSubHtml, {
        index: index
      });
    };
    /**
    *  @desc Preload slides
    *  @param {Number} index - index of the slide
    * @todo preload not working for the first slide, Also, should work for the first and last slide as well
    */
    LightGallery.prototype.preload = function (index) {
      for (var i = 1; i <= this.settings.preload; i++) {
        if (i >= this.galleryItems.length - index) {
          break;
        }
        this.loadContent(index + i, false);
      }
      for (var j = 1; j <= this.settings.preload; j++) {
        if (index - j < 0) {
          break;
        }
        this.loadContent(index - j, false);
      }
    };
    LightGallery.prototype.getDummyImgStyles = function (imageSize) {
      if (!imageSize) return '';
      return "width:" + imageSize.width + "px; \n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px; \n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getVideoContStyle = function (imageSize) {
      if (!imageSize) return '';
      return "width:" + imageSize.width + "px; \n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
      var $currentItem;
      if (!this.settings.dynamic) {
        $currentItem = $LG(this.items).eq(index);
      }
      if ($currentItem) {
        var _dummyImgSrc = void 0;
        if (!this.settings.exThumbImage) {
          _dummyImgSrc = $currentItem.find('img').first().attr('src');
        } else {
          _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
        }
        if (!_dummyImgSrc) return '';
        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
        var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
        $currentSlide.addClass('lg-first-slide');
        this.outer.addClass('lg-first-slide-loading');
        return dummyImgContent;
      }
      return '';
    };
    LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
      var currentGalleryItem = this.galleryItems[index];
      var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
      // Use the thumbnail as dummy image which will be resized to actual image size and
      // displayed on top of actual image
      var imgContent = '';
      var altAttr = alt ? 'alt="' + alt + '"' : '';
      if (!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize) {
        imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
      } else {
        imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
      }
      var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
      $currentSlide.prepend(imgMarkup);
    };
    LightGallery.prototype.onLgObjectLoad = function ($el, index, delay, speed, dummyImageLoaded) {
      var _this = this;
      if (dummyImageLoaded) {
        this.LGel.trigger(lGEvents.slideItemLoad, {
          index: index,
          delay: delay || 0
        });
      }
      $el.find('.lg-object').first().on('load.lg', function () {
        _this.handleLgObjectLoad($el, index, delay, speed, dummyImageLoaded);
      });
      setTimeout(function () {
        $el.find('.lg-object').first().on('error.lg', function () {
          $el.addClass('lg-complete lg-complete_');
          $el.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
        });
      }, speed);
    };
    LightGallery.prototype.handleLgObjectLoad = function ($el, index, delay, speed, dummyImageLoaded) {
      var _this = this;
      setTimeout(function () {
        $el.addClass('lg-complete lg-complete_');
        if (!dummyImageLoaded) {
          _this.LGel.trigger(lGEvents.slideItemLoad, {
            index: index,
            delay: delay || 0
          });
        }
      }, speed);
    };
    /**
    * @desc Check the given src is video
    * @param {String} src
    * @return {Object} video type
    * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
    *
    * @todo - this information can be moved to dynamicEl to avoid frequent calls
    */
    LightGallery.prototype.isVideo = function (src, index) {
      if (!src) {
        if (this.galleryItems[index].video) {
          return {
            html5: true
          };
        } else {
          console.error('lightGallery :- data-src is not provided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
          return;
        }
      }
      var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
      var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i);
      var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
      if (youtube) {
        return {
          youtube: youtube
        };
      } else if (vimeo) {
        return {
          vimeo: vimeo
        };
      } else if (wistia) {
        return {
          wistia: wistia
        };
      }
    };
    // Add video slideInfo
    LightGallery.prototype.addSlideVideoInfo = function (items) {
      var _this = this;
      items.forEach(function (element, index) {
        element.__slideVideoInfo = _this.isVideo(element.src, index);
      });
    };
    /**
    *  Load slide content into slide.
    *  This is used to load content into slides that is not visible too
    *  @param {Number} index - index of the slide.
    *  @param {Boolean} rec - if true call loadcontent() function again.
    */
    LightGallery.prototype.loadContent = function (index, rec) {
      var _this = this;
      var currentGalleryItem = this.galleryItems[index];
      var $currentSlide = $LG(this.getSlideItemId(index));
      var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
      var src = currentGalleryItem.src;
      var video = currentGalleryItem.video;
      var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
      if (currentGalleryItem.responsive) {
        var srcDyItms = currentGalleryItem.responsive.split(',');
        src = utils.getResponsiveSrc(srcDyItms) || src;
      }
      var videoInfo = currentGalleryItem.__slideVideoInfo;
      var lgVideoStyle = '';
      var iframe = !!currentGalleryItem.iframe;
      if (!$currentSlide.hasClass('lg-loaded')) {
        if (videoInfo) {
          var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
          var videoSize = utils.getSize(this.items[index], this.$lgContent, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
          lgVideoStyle = this.getVideoContStyle(videoSize);
        }
        if (iframe) {
          var markup = utils.getIframeMarkup(src, this.settings.iframeWidth, this.settings.iframeHeight, currentGalleryItem.iframeTitle);
          $currentSlide.prepend(markup);
        } else if (poster) {
          var dummyImg = '';
          var isFirstSlide_1 = !this.lGalleryOn;
          var hasStartAnimation = !this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize;
          if (hasStartAnimation) {
            dummyImg = this.getDummyImageContent($currentSlide, index, '');
          }
          var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, videoInfo);
          $currentSlide.prepend(markup);
          var delay_1 = (hasStartAnimation ? this.settings.startAnimationDuration : this.settings.backdropDuration) + 100;
          setTimeout(function () {
            _this.LGel.trigger(lGEvents.hasVideo, {
              index: index,
              src: src,
              html5Video: _html5Video,
              hasPoster: true,
              isFirstSlide: isFirstSlide_1
            });
          }, delay_1);
        } else if (videoInfo) {
          var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
          $currentSlide.prepend(markup);
          this.LGel.trigger(lGEvents.hasVideo, {
            index: index,
            src: src,
            html5Video: _html5Video,
            hasPoster: false
          });
        } else {
          this.setImgMarkup(src, $currentSlide, index);
          if (srcset || sources) {
            var $img = $currentSlide.find('.lg-object');
            this.initPictureFill($img);
          }
        }
        this.LGel.trigger(lGEvents.afterAppendSlide, {
          index: index
        });
        if (this.lGalleryOn && this.settings.appendSubHtmlTo !== '.lg-sub-html') {
          this.addHtml(index);
        }
      }
      // For first time add some delay for displaying the start animation.
      var _speed = 0;
      // delay for adding complete class. it is 0 except first time.
      var delay = 0;
      if (!this.lGalleryOn) {
        if (this.zoomFromOrigin && this.currentImageSize) {
          delay = this.settings.startAnimationDuration + 10;
        } else {
          delay = this.settings.backdropDuration + 10;
        }
      }
      // Do not change the delay value because it is required for zoom plugin.
      // If gallery opened from direct url (hash) speed value should be 0
      if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
        _speed = delay;
      }
      // Only for first slide
      if (!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize) {
        setTimeout(function () {
          $currentSlide.removeClass('lg-start-end-progress lg-start-progress').removeAttr('style');
        }, this.settings.startAnimationDuration + 100);
        if (!$currentSlide.hasClass('lg-loaded')) {
          setTimeout(function () {
            $currentSlide.find('.lg-img-wrap').append(utils.getImgMarkup(index, src, '', srcset, sizes, currentGalleryItem.sources));
            if (srcset || sources) {
              var $img = $currentSlide.find('.lg-object');
              _this.initPictureFill($img);
            }
            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true);
            var mediaObject = $currentSlide.find('.lg-object').first();
            if (utils.isImageLoaded(mediaObject.get())) {
              _this.loadContentOnLoad(index, $currentSlide, _speed);
            } else {
              mediaObject.on('load.lg error.lg', function () {
                _this.loadContentOnLoad(index, $currentSlide, _speed);
              });
            }
          }, this.settings.startAnimationDuration + 100);
        }
      }
      // SLide content has been added to dom
      $currentSlide.addClass('lg-loaded');
      this.onLgObjectLoad($currentSlide, index, delay, _speed, false);
      // @todo check load state for html5 videos
      if (videoInfo && videoInfo.html5 && !poster) {
        $currentSlide.addClass('lg-complete lg-complete_');
      }
      // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
      if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass('lg-complete_') && !this.lGalleryOn) {
        setTimeout(function () {
          $currentSlide.addClass('lg-complete');
        }, this.settings.backdropDuration);
      }
      // Content loaded
      // Need to set lGalleryOn before calling preload function
      this.lGalleryOn = true;
      if (rec === true) {
        if (!$currentSlide.hasClass('lg-complete_')) {
          $currentSlide.find('.lg-object').first().on('load.lg error.lg', function () {
            _this.preload(index);
          });
        } else {
          this.preload(index);
        }
      }
    };
    LightGallery.prototype.loadContentOnLoad = function (index, $currentSlide, speed) {
      var _this = this;
      setTimeout(function () {
        $currentSlide.find('.lg-dummy-img').remove();
        $currentSlide.removeClass('lg-first-slide');
        _this.outer.removeClass('lg-first-slide-loading');
        _this.isDummyImageRemoved = true;
        _this.preload(index);
      }, speed + 300);
    };
    LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
      var _this = this;
      if (numberOfItems === void 0) {
        numberOfItems = 0;
      }
      var itemsToBeInsertedToDom = [];
      // Minimum 2 items should be there
      var possibleNumberOfItems = Math.max(numberOfItems, 3);
      possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
      var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
      if (this.galleryItems.length <= 3) {
        this.galleryItems.forEach(function (_element, index) {
          itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
        });
        return itemsToBeInsertedToDom;
      }
      if (index < (this.galleryItems.length - 1) / 2) {
        for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
          itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
        }
        var numberOfExistingItems = itemsToBeInsertedToDom.length;
        for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
          itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
        }
      } else {
        for (var idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) {
          itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
        }
        var numberOfExistingItems = itemsToBeInsertedToDom.length;
        for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
          itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
        }
      }
      if (this.settings.loop) {
        if (index === this.galleryItems.length - 1) {
          itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
        } else if (index === 0) {
          itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
        }
      }
      if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
      }
      return itemsToBeInsertedToDom;
    };
    LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
      var _this = this;
      var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
      itemsToBeInsertedToDom.forEach(function (item) {
        if (_this.currentItemsInDom.indexOf(item) === -1) {
          _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
        }
      });
      this.currentItemsInDom.forEach(function (item) {
        if (itemsToBeInsertedToDom.indexOf(item) === -1) {
          $LG("#" + item).remove();
        }
      });
      return itemsToBeInsertedToDom;
    };
    /**
    * Get previous index of the slide
    */
    LightGallery.prototype.getPreviousSlideIndex = function () {
      var prevIndex = 0;
      try {
        var currentItemId = this.outer.find('.lg-current').first().attr('id');
        prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
      } catch (error) {
        prevIndex = 0;
      }
      return prevIndex;
    };
    LightGallery.prototype.setDownloadValue = function (index) {
      if (this.settings.download) {
        var currentGalleryItem = this.galleryItems[index];
        var src = currentGalleryItem.downloadUrl !== false && (currentGalleryItem.downloadUrl || currentGalleryItem.src);
        if (src && !currentGalleryItem.iframe) {
          this.getElementById('lg-download').attr('href', src);
        }
      }
    };
    LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
      var _this = this;
      if (this.lGalleryOn) {
        previousSlideItem.addClass('lg-slide-progress');
      }
      setTimeout(function () {
        // remove all transitions
        _this.outer.addClass('lg-no-trans');
        _this.outer.find('.lg-item').removeClass('lg-prev-slide lg-next-slide');
        if (direction === 'prev') {
          // prevslide
          currentSlideItem.addClass('lg-prev-slide');
          previousSlideItem.addClass('lg-next-slide');
        } else {
          // next slide
          currentSlideItem.addClass('lg-next-slide');
          previousSlideItem.addClass('lg-prev-slide');
        }
        // give 50 ms for browser to add/remove class
        setTimeout(function () {
          _this.outer.find('.lg-item').removeClass('lg-current');
          currentSlideItem.addClass('lg-current');
          // reset all transitions
          _this.outer.removeClass('lg-no-trans');
        }, 50);
      }, this.lGalleryOn ? this.settings.slideDelay : 0);
    };
    /**
    * Goto a specific slide.
    * @param {Number} index - index of the slide
    * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    * @param {Boolean} fromThumb - true if slide function called via thumbnail click
    * @param {String} direction - Direction of the slide(next/prev)
    * @category lGPublicMethods
    * @example
    *  const plugin = lightGallery();
    *  // to go to 3rd slide
    *  plugin.slide(2);
    *
    */
    LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
      var _this = this;
      var prevIndex = this.getPreviousSlideIndex();
      this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
      // Prevent multiple call, Required for hsh plugin
      if (this.lGalleryOn && prevIndex === index) {
        return;
      }
      var numberOfGalleryItems = this.galleryItems.length;
      if (!this.lgBusy) {
        if (this.settings.counter) {
          this.updateCurrentCounter(index);
        }
        var currentSlideItem = this.getSlideItem(index);
        var previousSlideItem_1 = this.getSlideItem(prevIndex);
        var currentGalleryItem = this.galleryItems[index];
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
        this.setDownloadValue(index);
        if (videoInfo) {
          var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
          var videoSize = utils.getSize(this.items[index], this.$lgContent, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
          this.resizeVideoSlide(index, videoSize);
        }
        this.LGel.trigger(lGEvents.beforeSlide, {
          prevIndex: prevIndex,
          index: index,
          fromTouch: !!fromTouch,
          fromThumb: !!fromThumb
        });
        this.lgBusy = true;
        clearTimeout(this.hideBarTimeout);
        this.arrowDisable(index);
        if (!direction) {
          if (index < prevIndex) {
            direction = 'prev';
          } else if (index > prevIndex) {
            direction = 'next';
          }
        }
        if (!fromTouch) {
          this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
        } else {
          this.outer.find('.lg-item').removeClass('lg-prev-slide lg-current lg-next-slide');
          var touchPrev = void 0;
          var touchNext = void 0;
          if (numberOfGalleryItems > 2) {
            touchPrev = index - 1;
            touchNext = index + 1;
            if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
              // next slide
              touchNext = 0;
              touchPrev = numberOfGalleryItems - 1;
            } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
              // prev slide
              touchNext = 0;
              touchPrev = numberOfGalleryItems - 1;
            }
          } else {
            touchPrev = 0;
            touchNext = 1;
          }
          if (direction === 'prev') {
            this.getSlideItem(touchNext).addClass('lg-next-slide');
          } else {
            this.getSlideItem(touchPrev).addClass('lg-prev-slide');
          }
          currentSlideItem.addClass('lg-current');
        }
        // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
        if (!this.lGalleryOn) {
          this.loadContent(index, true);
        }
        setTimeout(function () {
          if (_this.lGalleryOn) {
            _this.loadContent(index, true);
          }
          // Add title if this.settings.appendSubHtmlTo === lg-sub-html
          if (_this.settings.appendSubHtmlTo === '.lg-sub-html') {
            _this.addHtml(index);
          }
        }, (this.lGalleryOn ? this.settings.speed + 50 : 50) + (fromTouch ? 0 : this.settings.slideDelay));
        setTimeout(function () {
          _this.lgBusy = false;
          previousSlideItem_1.removeClass('lg-slide-progress');
          _this.LGel.trigger(lGEvents.afterSlide, {
            prevIndex: prevIndex,
            index: index,
            fromTouch: fromTouch,
            fromThumb: fromThumb
          });
        }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
      }
      this.index = index;
    };
    LightGallery.prototype.updateCurrentCounter = function (index) {
      this.getElementById('lg-counter-current').html(index + 1 + '');
    };
    LightGallery.prototype.updateCounterTotal = function () {
      this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
    };
    LightGallery.prototype.getSlideType = function (item) {
      if (item.__slideVideoInfo) {
        return 'video';
      } else if (item.iframe) {
        return 'iframe';
      } else {
        return 'image';
      }
    };
    LightGallery.prototype.touchMove = function (startCoords, endCoords) {
      var distanceX = endCoords.pageX - startCoords.pageX;
      var distanceY = endCoords.pageY - startCoords.pageY;
      var allowSwipe = false;
      if (this.swipeDirection) {
        allowSwipe = true;
      } else {
        if (Math.abs(distanceX) > 15) {
          this.swipeDirection = 'horizontal';
          allowSwipe = true;
        } else if (Math.abs(distanceY) > 15) {
          this.swipeDirection = 'vertical';
          allowSwipe = true;
        }
      }
      if (!allowSwipe) {
        return;
      }
      var $currentSlide = this.getSlideItem(this.index);
      if (this.swipeDirection === 'horizontal') {
        // reset opacity and transition duration
        this.outer.addClass('lg-dragging');
        // move current slide
        this.setTranslate($currentSlide, distanceX, 0);
        // move next and prev slide with current slide
        var width = $currentSlide.get().offsetWidth;
        var slideWidthAmount = width * 15 / 100;
        var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
        this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
        this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
      } else if (this.swipeDirection === 'vertical') {
        if (this.settings.swipeToClose) {
          this.$container.addClass('lg-dragging-vertical');
          var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
          this.$backdrop.css('opacity', opacity);
          var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
          this.setTranslate($currentSlide, 0, distanceY, scale, scale);
          if (Math.abs(distanceY) > 100) {
            this.outer.addClass('lg-hide-items').removeClass('lg-components-open');
          }
        }
      }
    };
    LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
      var _this = this;
      var distance;
      // keep slide animation for any mode while dragg/swipe
      if (this.settings.mode !== 'lg-slide') {
        this.outer.addClass('lg-slide');
      }
      // set transition duration
      setTimeout(function () {
        _this.$container.removeClass('lg-dragging-vertical');
        _this.outer.removeClass('lg-dragging lg-hide-items').addClass('lg-components-open');
        var triggerClick = true;
        if (_this.swipeDirection === 'horizontal') {
          distance = endCoords.pageX - startCoords.pageX;
          var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
          if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
            _this.goToNextSlide(true);
            triggerClick = false;
          } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
            _this.goToPrevSlide(true);
            triggerClick = false;
          }
        } else if (_this.swipeDirection === 'vertical') {
          distance = Math.abs(endCoords.pageY - startCoords.pageY);
          if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
            _this.closeGallery();
            return;
          } else {
            _this.$backdrop.css('opacity', 1);
          }
        }
        _this.outer.find('.lg-item').removeAttr('style');
        if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
          // Trigger click if distance is less than 5 pix
          var target = $LG(event.target);
          if (_this.isPosterElement(target)) {
            _this.LGel.trigger(lGEvents.posterClick);
          }
        }
        _this.swipeDirection = undefined;
      });
      // remove slide class once drag/swipe is completed if mode is not slide
      setTimeout(function () {
        if (!_this.outer.hasClass('lg-dragging') && _this.settings.mode !== 'lg-slide') {
          _this.outer.removeClass('lg-slide');
        }
      }, this.settings.speed + 100);
    };
    LightGallery.prototype.enableSwipe = function () {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isMoved = false;
      var isSwiping = false;
      if (this.settings.enableSwipe) {
        this.$inner.on('touchstart.lg', function (e) {
          e.preventDefault();
          var $item = _this.getSlideItem(_this.index);
          if (($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && !_this.outer.hasClass('lg-zoomed') && !_this.lgBusy && e.targetTouches.length === 1) {
            isSwiping = true;
            _this.touchAction = 'swipe';
            _this.manageSwipeClass();
            startCoords = {
              pageX: e.targetTouches[0].pageX,
              pageY: e.targetTouches[0].pageY
            };
          }
        });
        this.$inner.on('touchmove.lg', function (e) {
          e.preventDefault();
          if (isSwiping && _this.touchAction === 'swipe' && e.targetTouches.length === 1) {
            endCoords = {
              pageX: e.targetTouches[0].pageX,
              pageY: e.targetTouches[0].pageY
            };
            _this.touchMove(startCoords, endCoords);
            isMoved = true;
          }
        });
        this.$inner.on('touchend.lg', function (event) {
          if (_this.touchAction === 'swipe') {
            if (isMoved) {
              isMoved = false;
              _this.touchEnd(endCoords, startCoords, event);
            } else if (isSwiping) {
              var target = $LG(event.target);
              if (_this.isPosterElement(target)) {
                _this.LGel.trigger(lGEvents.posterClick);
              }
            }
            _this.touchAction = undefined;
            isSwiping = false;
          }
        });
      }
    };
    LightGallery.prototype.enableDrag = function () {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isDraging = false;
      var isMoved = false;
      if (this.settings.enableDrag) {
        this.outer.on('mousedown.lg', function (e) {
          var $item = _this.getSlideItem(_this.index);
          if ($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
            if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
              e.preventDefault();
              if (!_this.lgBusy) {
                _this.manageSwipeClass();
                startCoords = {
                  pageX: e.pageX,
                  pageY: e.pageY
                };
                isDraging = true;
                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.outer.get().scrollLeft += 1;
                _this.outer.get().scrollLeft -= 1;
                // *
                _this.outer.removeClass('lg-grab').addClass('lg-grabbing');
                _this.LGel.trigger(lGEvents.dragStart);
              }
            }
          }
        });
        $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
          if (isDraging && _this.lgOpened) {
            isMoved = true;
            endCoords = {
              pageX: e.pageX,
              pageY: e.pageY
            };
            _this.touchMove(startCoords, endCoords);
            _this.LGel.trigger(lGEvents.dragMove);
          }
        });
        $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
          if (!_this.lgOpened) {
            return;
          }
          var target = $LG(event.target);
          if (isMoved) {
            isMoved = false;
            _this.touchEnd(endCoords, startCoords, event);
            _this.LGel.trigger(lGEvents.dragEnd);
          } else if (_this.isPosterElement(target)) {
            _this.LGel.trigger(lGEvents.posterClick);
          }
          // Prevent execution on click
          if (isDraging) {
            isDraging = false;
            _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
          }
        });
      }
    };
    LightGallery.prototype.manageSwipeClass = function () {
      var _touchNext = this.index + 1;
      var _touchPrev = this.index - 1;
      if (this.settings.loop && this.galleryItems.length > 2) {
        if (this.index === 0) {
          _touchPrev = this.galleryItems.length - 1;
        } else if (this.index === this.galleryItems.length - 1) {
          _touchNext = 0;
        }
      }
      this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
      if (_touchPrev > -1) {
        this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
      }
      this.getSlideItem(_touchNext).addClass('lg-next-slide');
    };
    /**
    * Go to next slide
    * @param {Boolean} fromTouch - true if slide function called via touch event
    * @category lGPublicMethods
    * @example
    *  const plugin = lightGallery();
    *  plugin.goToNextSlide();
    * @see <a href="/demos/methods/">Demo</a>
    */
    LightGallery.prototype.goToNextSlide = function (fromTouch) {
      var _this = this;
      var _loop = this.settings.loop;
      if (fromTouch && this.galleryItems.length < 3) {
        _loop = false;
      }
      if (!this.lgBusy) {
        if (this.index + 1 < this.galleryItems.length) {
          this.index++;
          this.LGel.trigger(lGEvents.beforeNextSlide, {
            index: this.index
          });
          this.slide(this.index, !!fromTouch, false, 'next');
        } else {
          if (_loop) {
            this.index = 0;
            this.LGel.trigger(lGEvents.beforeNextSlide, {
              index: this.index
            });
            this.slide(this.index, !!fromTouch, false, 'next');
          } else if (this.settings.slideEndAnimation && !fromTouch) {
            this.outer.addClass('lg-right-end');
            setTimeout(function () {
              _this.outer.removeClass('lg-right-end');
            }, 400);
          }
        }
      }
    };
    /**
    * Go to previous slides
    * @param {Boolean} fromTouch - true if slide function called via touch event
    * @category lGPublicMethods
    * @example
    *  const plugin = lightGallery({});
    *  plugin.goToPrevSlide();
    * @see <a href="/demos/methods/">Demo</a>
    *
    */
    LightGallery.prototype.goToPrevSlide = function (fromTouch) {
      var _this = this;
      var _loop = this.settings.loop;
      if (fromTouch && this.galleryItems.length < 3) {
        _loop = false;
      }
      if (!this.lgBusy) {
        if (this.index > 0) {
          this.index--;
          this.LGel.trigger(lGEvents.beforePrevSlide, {
            index: this.index,
            fromTouch: fromTouch
          });
          this.slide(this.index, !!fromTouch, false, 'prev');
        } else {
          if (_loop) {
            this.index = this.galleryItems.length - 1;
            this.LGel.trigger(lGEvents.beforePrevSlide, {
              index: this.index,
              fromTouch: fromTouch
            });
            this.slide(this.index, !!fromTouch, false, 'prev');
          } else if (this.settings.slideEndAnimation && !fromTouch) {
            this.outer.addClass('lg-left-end');
            setTimeout(function () {
              _this.outer.removeClass('lg-left-end');
            }, 400);
          }
        }
      }
    };
    LightGallery.prototype.keyPress = function () {
      var _this = this;
      $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
        if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
          e.preventDefault();
          if (_this.settings.allowMediaOverlap && _this.outer.hasClass('lg-can-toggle') && _this.outer.hasClass('lg-components-open')) {
            _this.outer.removeClass('lg-components-open');
          } else {
            _this.closeGallery();
          }
        }
        if (_this.lgOpened && _this.galleryItems.length > 1) {
          if (e.keyCode === 37) {
            e.preventDefault();
            _this.goToPrevSlide();
          }
          if (e.keyCode === 39) {
            e.preventDefault();
            _this.goToNextSlide();
          }
        }
      });
    };
    LightGallery.prototype.arrow = function () {
      var _this = this;
      this.getElementById('lg-prev').on('click.lg', function () {
        _this.goToPrevSlide();
      });
      this.getElementById('lg-next').on('click.lg', function () {
        _this.goToNextSlide();
      });
    };
    LightGallery.prototype.arrowDisable = function (index) {
      // Disable arrows if settings.hideControlOnEnd is true
      if (!this.settings.loop && this.settings.hideControlOnEnd) {
        var $prev = this.getElementById('lg-prev');
        var $next = this.getElementById('lg-next');
        if (index + 1 === this.galleryItems.length) {
          $next.attr('disabled', 'disabled').addClass('disabled');
        } else {
          $next.removeAttr('disabled').removeClass('disabled');
        }
        if (index === 0) {
          $prev.attr('disabled', 'disabled').addClass('disabled');
        } else {
          $prev.removeAttr('disabled').removeClass('disabled');
        }
      }
    };
    LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
      if (scaleX === void 0) {
        scaleX = 1;
      }
      if (scaleY === void 0) {
        scaleY = 1;
      }
      $el.css('transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px) scale3d(' + scaleX + ', ' + scaleY + ', 1)');
    };
    LightGallery.prototype.mousewheel = function () {
      var _this = this;
      this.outer.on('mousewheel.lg', function (e) {
        if (!e.deltaY || _this.galleryItems.length < 2) {
          return;
        }
        if (e.deltaY > 0) {
          _this.goToPrevSlide();
        } else {
          _this.goToNextSlide();
        }
        e.preventDefault();
      });
    };
    LightGallery.prototype.isSlideElement = function (target) {
      return target.hasClass('lg-outer') || target.hasClass('lg-item') || target.hasClass('lg-img-wrap');
    };
    LightGallery.prototype.isPosterElement = function (target) {
      var playButton = this.getSlideItem(this.index).find('.lg-video-play-button').get();
      return target.hasClass('lg-video-poster') || target.hasClass('lg-video-play-button') || playButton && playButton.contains(target.get());
    };
    /**
    * Maximize minimize inline gallery.
    * @category lGPublicMethods
    */
    LightGallery.prototype.toggleMaximize = function () {
      var _this = this;
      this.getElementById('lg-maximize').on('click.lg', function () {
        _this.$container.toggleClass('lg-inline');
        _this.refreshOnResize();
      });
    };
    LightGallery.prototype.invalidateItems = function () {
      for (var index = 0; index < this.items.length; index++) {
        var element = this.items[index];
        var $element = $LG(element);
        $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
      }
    };
    LightGallery.prototype.manageCloseGallery = function () {
      var _this = this;
      if (!this.settings.closable) return;
      var mousedown = false;
      this.getElementById('lg-close').on('click.lg', function () {
        _this.closeGallery();
      });
      if (this.settings.closeOnTap) {
        // If you drag the slide and release outside gallery gets close on chrome
        // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
        this.outer.on('mousedown.lg', function (e) {
          var target = $LG(e.target);
          if (_this.isSlideElement(target)) {
            mousedown = true;
          } else {
            mousedown = false;
          }
        });
        this.outer.on('mousemove.lg', function () {
          mousedown = false;
        });
        this.outer.on('mouseup.lg', function (e) {
          var target = $LG(e.target);
          if (_this.isSlideElement(target) && mousedown) {
            if (!_this.outer.hasClass('lg-dragging')) {
              _this.closeGallery();
            }
          }
        });
      }
    };
    /**
    * Close lightGallery if it is opened.
    *
    * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
    * @return returns the estimated time to close gallery completely including the close animation duration
    * @category lGPublicMethods
    * @example
    *  const plugin = lightGallery();
    *  plugin.closeGallery();
    *
    */
    LightGallery.prototype.closeGallery = function (force) {
      var _this = this;
      if (!this.lgOpened || !this.settings.closable && !force) {
        return 0;
      }
      this.LGel.trigger(lGEvents.beforeClose);
      $LG(window).scrollTop(this.prevScrollTop);
      var currentItem = this.items[this.index];
      var transform;
      if (this.zoomFromOrigin && currentItem) {
        var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
        var imageSize = utils.getSize(currentItem, this.$lgContent, top_4 + bottom, this.galleryItems[this.index].__slideVideoInfo && this.settings.videoMaxSize);
        transform = utils.getTransform(currentItem, this.$lgContent, top_4, bottom, imageSize);
      }
      if (this.zoomFromOrigin && transform) {
        this.outer.addClass('lg-closing lg-zoom-from-image');
        this.getSlideItem(this.index).addClass('lg-start-end-progress').css('transition-duration', this.settings.startAnimationDuration + 'ms').css('transform', transform);
      } else {
        this.outer.addClass('lg-hide-items');
        // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
        // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
        this.outer.removeClass('lg-zoom-from-image');
      }
      // Unbind all events added by lightGallery
      // @todo
      // this.$el.off('.lg.tm');
      this.destroyModules();
      this.lGalleryOn = false;
      this.isDummyImageRemoved = false;
      this.zoomFromOrigin = this.settings.zoomFromOrigin;
      clearTimeout(this.hideBarTimeout);
      this.hideBarTimeout = false;
      $LG('html').removeClass('lg-on');
      this.outer.removeClass('lg-visible lg-components-open');
      // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
      this.$backdrop.removeClass('in').css('opacity', 0);
      var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
      this.$container.removeClass('lg-show-in');
      // Once the closign animation is completed and gallery is invisible
      setTimeout(function () {
        if (_this.zoomFromOrigin && transform) {
          _this.outer.removeClass('lg-zoom-from-image');
        }
        _this.$container.removeClass('lg-show');
        // Need to remove inline opacity as it is used in the stylesheet as well
        _this.$backdrop.removeAttr('style').css('transition-duration', _this.settings.backdropDuration + 'ms');
        _this.outer.removeClass("lg-closing " + _this.settings.startClass);
        _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
        _this.$inner.empty();
        if (_this.lgOpened) {
          _this.LGel.trigger(lGEvents.afterClose, {
            instance: _this
          });
        }
        if (_this.outer.get()) {
          _this.outer.get().blur();
        }
        _this.lgOpened = false;
      }, removeTimeout + 100);
      return removeTimeout + 100;
    };
    LightGallery.prototype.initModules = function () {
      this.plugins.forEach(function (module) {
        try {
          module.init();
        } catch (err) {
          console.warn("lightGallery:- make sure lightGallery module is properly initiated");
        }
      });
    };
    LightGallery.prototype.destroyModules = function (destroy) {
      this.plugins.forEach(function (module) {
        try {
          if (destroy) {
            module.destroy();
          } else {
            module.closeGallery && module.closeGallery();
          }
        } catch (err) {
          console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
        }
      });
    };
    /**
    * Refresh lightGallery with new set of children.
    *
    * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
    *
    * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
    * @see <a href="/demos/dynamic-mode/">Demo</a>
    * @category lGPublicMethods
    * @example
    *  const plugin = lightGallery();
    *  // Delete or add children, then call
    *  plugin.refresh();
    *
    */
    LightGallery.prototype.refresh = function (galleryItems) {
      if (!this.settings.dynamic) {
        this.invalidateItems();
      }
      if (galleryItems) {
        this.galleryItems = galleryItems;
      } else {
        this.galleryItems = this.getItems();
      }
      this.updateControls();
      this.openGalleryOnItemClick();
      this.LGel.trigger(lGEvents.updateSlides);
    };
    LightGallery.prototype.updateControls = function () {
      this.addSlideVideoInfo(this.galleryItems);
      this.updateCounterTotal();
      this.manageSingleSlideClassName();
    };
    /**
    * Destroy lightGallery.
    * Destroy lightGallery and its plugin instances completely
    *
    * @description This method also calls CloseGallery function internally
    * @category lGPublicMethods
    * @example
    *  const plugin = lightGallery();
    *  plugin.destroy();
    *
    */
    LightGallery.prototype.destroy = function () {
      var _this = this;
      var closeTimeout = this.closeGallery(true);
      setTimeout(function () {
        _this.destroyModules(true);
        if (!_this.settings.dynamic) {
          _this.invalidateItems();
        }
        $LG(window).off(".lg.global" + _this.lgId);
        _this.LGel.off('.lg');
        _this.$container.remove();
      }, closeTimeout);
    };
    return LightGallery;
  })();
  function lightGallery(el, options) {
    return new LightGallery(el, options);
  }
  return lightGallery;
});

},{}],"361NT":[function() {},{}],"2su6H":[function() {},{}],"1lbQG":[function() {},{}],"4q7vd":[function() {},{}],"XGgUr":[function() {},{}],"1x4ir":[function(require,module,exports) {
var define;
/*!
* lightgallery | 2.1.8 | July 7th 2021
* http://www.lightgalleryjs.com/
* Copyright (c) 2020 Sachin Neravath;
* @license GPLv3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.lgThumbnail = factory();
})(this, function () {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  var __assign = function () {
    __assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return __assign.apply(this, arguments);
  };
  var thumbnailsSettings = {
    thumbnail: true,
    animateThumb: true,
    currentPagerPosition: 'middle',
    alignThumbnails: 'middle',
    thumbWidth: 100,
    thumbHeight: '80px',
    thumbMargin: 5,
    appendThumbnailsTo: '.lg-components',
    toggleThumb: false,
    enableThumbDrag: true,
    enableThumbSwipe: true,
    thumbnailSwipeThreshold: 10,
    loadYouTubeThumbnail: true,
    youTubeThumbSize: 1
  };
  /**
  * List of lightGallery events
  * All events should be documented here
  * Below interfaces are used to build the website documentations
  **/
  var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose'
  };
  var Thumbnail = /** @class*/
  (function () {
    function Thumbnail(instance, $LG) {
      this.thumbOuterWidth = 0;
      this.thumbTotalWidth = 0;
      this.translateX = 0;
      this.thumbClickable = false;
      // get lightGallery core plugin instance
      this.core = instance;
      this.$LG = $LG;
      return this;
    }
    Thumbnail.prototype.init = function () {
      // extend module default settings with lightGallery core settings
      this.settings = __assign(__assign({}, thumbnailsSettings), this.core.settings);
      this.thumbOuterWidth = 0;
      this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin);
      // Thumbnail animation value
      this.translateX = 0;
      this.setAnimateThumbStyles();
      if (!this.core.settings.allowMediaOverlap) {
        this.settings.toggleThumb = false;
      }
      if (this.settings.thumbnail) {
        this.build();
        if (this.settings.animateThumb) {
          if (this.settings.enableThumbDrag) {
            this.enableThumbDrag();
          }
          if (this.settings.enableThumbSwipe) {
            this.enableThumbSwipe();
          }
          this.thumbClickable = false;
        } else {
          this.thumbClickable = true;
        }
        this.toggleThumbBar();
        this.thumbKeyPress();
      }
    };
    Thumbnail.prototype.build = function () {
      var _this = this;
      this.setThumbMarkup();
      this.manageActiveClassOnSlideChange();
      this.$lgThumb.first().on('click.lg touchend.lg', function (e) {
        var $target = _this.$LG(e.target);
        if (!$target.hasAttribute('data-lg-item-id')) {
          return;
        }
        setTimeout(function () {
          // In IE9 and bellow touch does not support
          // Go to slide if browser does not support css transitions
          if (_this.thumbClickable && !_this.core.lgBusy) {
            var index = parseInt($target.attr('data-lg-item-id'));
            _this.core.slide(index, false, true, false);
          }
        }, 50);
      });
      this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
        var index = event.detail.index;
        _this.animateThumb(index);
      });
      this.core.LGel.on(lGEvents.beforeOpen + ".thumb", function () {
        _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
      });
      this.core.LGel.on(lGEvents.updateSlides + ".thumb", function () {
        _this.rebuildThumbnails();
      });
      this.core.LGel.on(lGEvents.containerResize + ".thumb", function () {
        if (!_this.core.lgOpened) return;
        setTimeout(function () {
          _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
          _this.animateThumb(_this.core.index);
          _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
        }, 50);
      });
    };
    Thumbnail.prototype.setThumbMarkup = function () {
      var thumbOuterClassNames = 'lg-thumb-outer ';
      if (this.settings.alignThumbnails) {
        thumbOuterClassNames += "lg-thumb-align-" + this.settings.alignThumbnails;
      }
      var html = "<div class=\"" + thumbOuterClassNames + "\">\n        <div class=\"lg-thumb lg-group\">\n        </div>\n        </div>";
      this.core.outer.addClass('lg-has-thumb');
      if (this.settings.appendThumbnailsTo === '.lg-components') {
        this.core.$lgComponents.append(html);
      } else {
        this.core.outer.append(html);
      }
      this.$thumbOuter = this.core.outer.find('.lg-thumb-outer').first();
      this.$lgThumb = this.core.outer.find('.lg-thumb').first();
      if (this.settings.animateThumb) {
        this.core.outer.find('.lg-thumb').css('transition-duration', this.core.settings.speed + 'ms').css('width', this.thumbTotalWidth + 'px').css('position', 'relative');
      }
      this.setThumbItemHtml(this.core.galleryItems);
    };
    Thumbnail.prototype.enableThumbDrag = function () {
      var _this = this;
      var thumbDragUtils = {
        cords: {
          startX: 0,
          endX: 0
        },
        isMoved: false,
        newTranslateX: 0,
        startTime: new Date(),
        endTime: new Date(),
        touchMoveTime: 0
      };
      var isDragging = false;
      this.$thumbOuter.addClass('lg-grab');
      this.core.outer.find('.lg-thumb').first().on('mousedown.lg.thumb', function (e) {
        if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
          // execute only on .lg-object
          e.preventDefault();
          thumbDragUtils.cords.startX = e.pageX;
          thumbDragUtils.startTime = new Date();
          _this.thumbClickable = false;
          isDragging = true;
          // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
          _this.core.outer.get().scrollLeft += 1;
          _this.core.outer.get().scrollLeft -= 1;
          // *
          _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
        }
      });
      this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function (e) {
        if (!_this.core.lgOpened) return;
        if (isDragging) {
          thumbDragUtils.cords.endX = e.pageX;
          thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
        }
      });
      this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function () {
        if (!_this.core.lgOpened) return;
        if (thumbDragUtils.isMoved) {
          thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
        } else {
          _this.thumbClickable = true;
        }
        if (isDragging) {
          isDragging = false;
          _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
        }
      });
    };
    Thumbnail.prototype.enableThumbSwipe = function () {
      var _this = this;
      var thumbDragUtils = {
        cords: {
          startX: 0,
          endX: 0
        },
        isMoved: false,
        newTranslateX: 0,
        startTime: new Date(),
        endTime: new Date(),
        touchMoveTime: 0
      };
      this.$lgThumb.on('touchstart.lg', function (e) {
        if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
          e.preventDefault();
          thumbDragUtils.cords.startX = e.targetTouches[0].pageX;
          _this.thumbClickable = false;
          thumbDragUtils.startTime = new Date();
        }
      });
      this.$lgThumb.on('touchmove.lg', function (e) {
        if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
          e.preventDefault();
          thumbDragUtils.cords.endX = e.targetTouches[0].pageX;
          thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
        }
      });
      this.$lgThumb.on('touchend.lg', function () {
        if (thumbDragUtils.isMoved) {
          thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
        } else {
          _this.thumbClickable = true;
        }
      });
    };
    // Rebuild thumbnails
    Thumbnail.prototype.rebuildThumbnails = function () {
      var _this = this;
      // Remove transitions
      this.$thumbOuter.addClass('lg-rebuilding-thumbnails');
      setTimeout(function () {
        _this.thumbTotalWidth = _this.core.galleryItems.length * (_this.settings.thumbWidth + _this.settings.thumbMargin);
        _this.$lgThumb.css('width', _this.thumbTotalWidth + 'px');
        _this.$lgThumb.empty();
        _this.setThumbItemHtml(_this.core.galleryItems);
        _this.animateThumb(_this.core.index);
      }, 50);
      setTimeout(function () {
        _this.$thumbOuter.removeClass('lg-rebuilding-thumbnails');
      }, 200);
    };
    // @ts-check
    Thumbnail.prototype.setTranslate = function (value) {
      this.$lgThumb.css('transform', 'translate3d(-' + value + 'px, 0px, 0px)');
    };
    Thumbnail.prototype.getPossibleTransformX = function (left) {
      if (left > this.thumbTotalWidth - this.thumbOuterWidth) {
        left = this.thumbTotalWidth - this.thumbOuterWidth;
      }
      if (left < 0) {
        left = 0;
      }
      return left;
    };
    Thumbnail.prototype.animateThumb = function (index) {
      this.$lgThumb.css('transition-duration', this.core.settings.speed + 'ms');
      if (this.settings.animateThumb) {
        var position = 0;
        switch (this.settings.currentPagerPosition) {
          case 'left':
            position = 0;
            break;
          case 'middle':
            position = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
            break;
          case 'right':
            position = this.thumbOuterWidth - this.settings.thumbWidth;
        }
        this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * index - 1 - position;
        if (this.translateX > this.thumbTotalWidth - this.thumbOuterWidth) {
          this.translateX = this.thumbTotalWidth - this.thumbOuterWidth;
        }
        if (this.translateX < 0) {
          this.translateX = 0;
        }
        this.setTranslate(this.translateX);
      }
    };
    Thumbnail.prototype.onThumbTouchMove = function (thumbDragUtils) {
      thumbDragUtils.newTranslateX = this.translateX;
      thumbDragUtils.isMoved = true;
      thumbDragUtils.touchMoveTime = new Date().valueOf();
      thumbDragUtils.newTranslateX -= thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
      thumbDragUtils.newTranslateX = this.getPossibleTransformX(thumbDragUtils.newTranslateX);
      // move current slide
      this.setTranslate(thumbDragUtils.newTranslateX);
      this.$thumbOuter.addClass('lg-dragging');
      return thumbDragUtils;
    };
    Thumbnail.prototype.onThumbTouchEnd = function (thumbDragUtils) {
      thumbDragUtils.isMoved = false;
      thumbDragUtils.endTime = new Date();
      this.$thumbOuter.removeClass('lg-dragging');
      var touchDuration = thumbDragUtils.endTime.valueOf() - thumbDragUtils.startTime.valueOf();
      var distanceXnew = thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
      var speedX = Math.abs(distanceXnew) / touchDuration;
      // Some magical numbers
      // Can be improved
      if (speedX > 0.15 && thumbDragUtils.endTime.valueOf() - thumbDragUtils.touchMoveTime < 30) {
        speedX += 1;
        if (speedX > 2) {
          speedX += 1;
        }
        speedX = speedX + speedX * (Math.abs(distanceXnew) / this.thumbOuterWidth);
        this.$lgThumb.css('transition-duration', Math.min(speedX - 1, 2) + 'settings');
        distanceXnew = distanceXnew * speedX;
        this.translateX = this.getPossibleTransformX(this.translateX - distanceXnew);
        this.setTranslate(this.translateX);
      } else {
        this.translateX = thumbDragUtils.newTranslateX;
      }
      if (Math.abs(thumbDragUtils.cords.endX - thumbDragUtils.cords.startX) < this.settings.thumbnailSwipeThreshold) {
        this.thumbClickable = true;
      }
      return thumbDragUtils;
    };
    Thumbnail.prototype.getThumbHtml = function (thumb, index) {
      var slideVideoInfo = this.core.galleryItems[index].__slideVideoInfo || ({});
      var thumbImg;
      if (slideVideoInfo.youtube) {
        if (this.settings.loadYouTubeThumbnail) {
          thumbImg = '//img.youtube.com/vi/' + slideVideoInfo.youtube[1] + '/' + this.settings.youTubeThumbSize + '.jpg';
        } else {
          thumbImg = thumb;
        }
      } else {
        thumbImg = thumb;
      }
      return "<div data-lg-item-id=\"" + index + "\" class=\"lg-thumb-item " + (index === this.core.index ? ' active' : '') + "\" \n        style=\"width:" + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + "px;\">\n            <img data-lg-item-id=\"" + index + "\" src=\"" + thumbImg + "\" />\n        </div>";
    };
    Thumbnail.prototype.getThumbItemHtml = function (items) {
      var thumbList = '';
      for (var i = 0; i < items.length; i++) {
        thumbList += this.getThumbHtml(items[i].thumb, i);
      }
      return thumbList;
    };
    Thumbnail.prototype.setThumbItemHtml = function (items) {
      var thumbList = this.getThumbItemHtml(items);
      this.$lgThumb.html(thumbList);
    };
    Thumbnail.prototype.setAnimateThumbStyles = function () {
      if (this.settings.animateThumb) {
        this.core.outer.addClass('lg-animate-thumb');
      }
    };
    // Manage thumbnail active calss
    Thumbnail.prototype.manageActiveClassOnSlideChange = function () {
      var _this = this;
      // manage active class for thumbnail
      this.core.LGel.on(lGEvents.beforeSlide + ".thumb", function (event) {
        var $thumb = _this.core.outer.find('.lg-thumb-item');
        var index = event.detail.index;
        $thumb.removeClass('active');
        $thumb.eq(index).addClass('active');
      });
    };
    // Toggle thumbnail bar
    Thumbnail.prototype.toggleThumbBar = function () {
      var _this = this;
      if (this.settings.toggleThumb) {
        this.core.outer.addClass('lg-can-toggle');
        this.core.$toolbar.append('<button type="button" aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>');
        this.core.outer.find('.lg-toggle-thumb').first().on('click.lg', function () {
          _this.core.outer.toggleClass('lg-components-open');
        });
      }
    };
    Thumbnail.prototype.thumbKeyPress = function () {
      var _this = this;
      this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function (e) {
        if (!_this.core.lgOpened || !_this.settings.toggleThumb) return;
        if (e.keyCode === 38) {
          e.preventDefault();
          _this.core.outer.addClass('lg-components-open');
        } else if (e.keyCode === 40) {
          e.preventDefault();
          _this.core.outer.removeClass('lg-components-open');
        }
      });
    };
    Thumbnail.prototype.destroy = function () {
      if (this.settings.thumbnail) {
        this.$LG(window).off(".lg.thumb.global" + this.core.lgId);
        this.core.LGel.off('.lg.thumb');
        this.core.LGel.off('.thumb');
        this.$thumbOuter.remove();
        this.core.outer.removeClass('lg-has-thumb');
      }
    };
    return Thumbnail;
  })();
  return Thumbnail;
});

},{}],"1vCDV":[function(require,module,exports) {
var define;
/*!
* lightgallery | 2.1.8 | July 7th 2021
* http://www.lightgalleryjs.com/
* Copyright (c) 2020 Sachin Neravath;
* @license GPLv3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.lgZoom = factory();
})(this, function () {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  var __assign = function () {
    __assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return __assign.apply(this, arguments);
  };
  var zoomSettings = {
    scale: 1,
    zoom: true,
    actualSize: true,
    showZoomInOutIcons: false,
    actualSizeIcons: {
      zoomIn: 'lg-zoom-in',
      zoomOut: 'lg-zoom-out'
    },
    enableZoomAfter: 300
  };
  /**
  * List of lightGallery events
  * All events should be documented here
  * Below interfaces are used to build the website documentations
  **/
  var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose'
  };
  var Zoom = /** @class*/
  (function () {
    function Zoom(instance, $LG) {
      // get lightGallery core plugin instance
      this.core = instance;
      this.$LG = $LG;
      this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
      return this;
    }
    // Append Zoom controls. Actual size, Zoom-in, Zoom-out
    Zoom.prototype.buildTemplates = function () {
      var zoomIcons = this.settings.showZoomInOutIcons ? "<button id=\"" + this.core.getIdName('lg-zoom-in') + "\" type=\"button\" aria-label=\"Zoom in\" class=\"lg-zoom-in lg-icon\"></button><button id=\"" + this.core.getIdName('lg-zoom-out') + "\" type=\"button\" aria-label=\"Zoom out\" class=\"lg-zoom-out lg-icon\"></button>" : '';
      if (this.settings.actualSize) {
        zoomIcons += "<button id=\"" + this.core.getIdName('lg-actual-size') + "\" type=\"button\" aria-label=\"View actual size\" class=\"" + this.settings.actualSizeIcons.zoomIn + " lg-icon\"></button>";
      }
      this.core.outer.addClass('lg-use-transition-for-zoom');
      this.core.$toolbar.first().append(zoomIcons);
    };
    /**
    * @desc Enable zoom option only once the image is completely loaded
    * If zoomFromOrigin is true, Zoom is enabled once the dummy image has been inserted
    *
    * Zoom styles are defined under lg-zoomable CSS class.
    */
    Zoom.prototype.enableZoom = function (event) {
      var _this = this;
      // delay will be 0 except first time
      var _speed = this.settings.enableZoomAfter + event.detail.delay;
      // set _speed value 0 if gallery opened from direct url and if it is first slide
      if (this.$LG('body').first().hasClass('lg-from-hash') && event.detail.delay) {
        // will execute only once
        _speed = 0;
      } else {
        // Remove lg-from-hash to enable starting animation.
        this.$LG('body').first().removeClass('lg-from-hash');
      }
      this.zoomableTimeout = setTimeout(function () {
        _this.core.getSlideItem(event.detail.index).addClass('lg-zoomable');
      }, _speed + 30);
    };
    Zoom.prototype.enableZoomOnSlideItemLoad = function () {
      // Add zoomable class
      this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
    };
    Zoom.prototype.getModifier = function (rotateValue, axis, el) {
      var originalRotate = rotateValue;
      rotateValue = Math.abs(rotateValue);
      var transformValues = this.getCurrentTransform(el);
      if (!transformValues) {
        return 1;
      }
      var modifier = 1;
      if (axis === 'X') {
        var flipHorizontalValue = Math.sign(parseFloat(transformValues[0]));
        if (rotateValue === 0 || rotateValue === 180) {
          modifier = 1;
        } else if (rotateValue === 90) {
          if (originalRotate === -90 && flipHorizontalValue === 1 || originalRotate === 90 && flipHorizontalValue === -1) {
            modifier = -1;
          } else {
            modifier = 1;
          }
        }
        modifier = modifier * flipHorizontalValue;
      } else {
        var flipVerticalValue = Math.sign(parseFloat(transformValues[3]));
        if (rotateValue === 0 || rotateValue === 180) {
          modifier = 1;
        } else if (rotateValue === 90) {
          var sinX = parseFloat(transformValues[1]);
          var sinMinusX = parseFloat(transformValues[2]);
          modifier = Math.sign(sinX * sinMinusX * originalRotate * flipVerticalValue);
        }
        modifier = modifier * flipVerticalValue;
      }
      return modifier;
    };
    Zoom.prototype.getImageSize = function ($image, rotateValue, axis) {
      var imageSizes = {
        y: 'offsetHeight',
        x: 'offsetWidth'
      };
      if (rotateValue === 90) {
        // Swap axis
        if (axis === 'x') {
          axis = 'y';
        } else {
          axis = 'x';
        }
      }
      return $image[imageSizes[axis]];
    };
    Zoom.prototype.getDragCords = function (e, rotateValue) {
      if (rotateValue === 90) {
        return {
          x: e.pageY,
          y: e.pageX
        };
      } else {
        return {
          x: e.pageX,
          y: e.pageY
        };
      }
    };
    Zoom.prototype.getSwipeCords = function (e, rotateValue) {
      var x = e.targetTouches[0].pageX;
      var y = e.targetTouches[0].pageY;
      if (rotateValue === 90) {
        return {
          x: y,
          y: x
        };
      } else {
        return {
          x: x,
          y: y
        };
      }
    };
    Zoom.prototype.getDragAllowedAxises = function ($image, rotateValue) {
      var $lg = this.core.$lgContent.get();
      var scale = parseFloat($image.attr('data-scale')) || 1;
      var imgEl = $image.get();
      var allowY = this.getImageSize(imgEl, rotateValue, 'y') * scale > $lg.clientHeight;
      var allowX = this.getImageSize(imgEl, rotateValue, 'x') * scale > $lg.clientWidth;
      if (rotateValue === 90) {
        return {
          allowX: allowY,
          allowY: allowX
        };
      } else {
        return {
          allowX: allowX,
          allowY: allowY
        };
      }
    };
    /**
    *
    * @param {Element} el
    * @return matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
    * Get the current transform value
    */
    Zoom.prototype.getCurrentTransform = function (el) {
      if (!el) {
        return;
      }
      var st = window.getComputedStyle(el, null);
      var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';
      if (tm !== 'none') {
        return tm.split('(')[1].split(')')[0].split(',');
      }
      return;
    };
    Zoom.prototype.getCurrentRotation = function (el) {
      if (!el) {
        return 0;
      }
      var values = this.getCurrentTransform(el);
      if (values) {
        return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
      }
      return 0;
    };
    /**
    * @desc Image zoom
    * Translate the wrap and scale the image to get better user experience
    *
    * @param {String} scale - Zoom decrement/increment value
    */
    Zoom.prototype.zoomImage = function (scale) {
      var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
      var imageNode = $image.get();
      if (!imageNode) return;
      var containerRect = this.core.outer.get().getBoundingClientRect();
      // Find offset manually to avoid issue after zoom
      var offsetX = (containerRect.width - imageNode.offsetWidth) / 2 + containerRect.left;
      var offsetY = (containerRect.height - imageNode.offsetHeight) / 2 + this.$LG(window).scrollTop() + containerRect.top;
      var originalX;
      var originalY;
      if (scale === 1) {
        this.positionChanged = false;
      }
      if (this.positionChanged) {
        originalX = parseFloat($image.parent().attr('data-x')) / (parseFloat($image.attr('data-scale')) - 1);
        originalY = parseFloat($image.parent().attr('data-y')) / (parseFloat($image.attr('data-scale')) - 1);
        this.pageX = originalX + offsetX;
        this.pageY = originalY + offsetY;
        this.positionChanged = false;
      }
      var _x = this.pageX - offsetX;
      var _y = this.pageY - offsetY;
      var x = (scale - 1) * _x;
      var y = (scale - 1) * _y;
      this.setZoomStyles({
        x: x,
        y: y,
        scale: scale
      });
    };
    /**
    * @desc apply scale3d to image and translate to image wrap
    * @param {style} X,Y and scale
    */
    Zoom.prototype.setZoomStyles = function (style) {
      var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
      var $dummyImage = this.core.outer.find('.lg-current .lg-dummy-img').first();
      var $imageWrap = $image.parent();
      $image.attr('data-scale', style.scale + '').css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
      $dummyImage.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
      var transform = 'translate3d(-' + style.x + 'px, -' + style.y + 'px, 0)';
      $imageWrap.css('transform', transform);
      $imageWrap.attr('data-x', style.x).attr('data-y', style.y);
    };
    /**
    * @param index - Index of the current slide
    * @param event - event will be available only if the function is called on clicking/taping the imags
    */
    Zoom.prototype.setActualSize = function (index, event) {
      var _this = this;
      var currentItem = this.core.galleryItems[this.core.index];
      // Allow zoom only on image
      if (!currentItem.src || this.core.outer.hasClass('lg-first-slide-loading')) {
        return;
      }
      var scale = this.getCurrentImageActualSizeScale();
      if (this.core.outer.hasClass('lg-zoomed')) {
        this.scale = 1;
      } else {
        this.scale = this.getScale(scale);
      }
      this.setPageCords(event);
      this.beginZoom(this.scale);
      this.zoomImage(this.scale);
      setTimeout(function () {
        _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
      }, 10);
    };
    Zoom.prototype.getNaturalWidth = function (index) {
      var $image = this.core.getSlideItem(index).find('.lg-image').first();
      var naturalWidth = this.core.galleryItems[index].width;
      return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
    };
    Zoom.prototype.getActualSizeScale = function (naturalWidth, width) {
      var _scale;
      var scale;
      if (naturalWidth > width) {
        _scale = naturalWidth / width;
        scale = _scale || 2;
      } else {
        scale = 1;
      }
      return scale;
    };
    Zoom.prototype.getCurrentImageActualSizeScale = function () {
      var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
      var width = $image.get().offsetWidth;
      var naturalWidth = this.getNaturalWidth(this.core.index) || width;
      return this.getActualSizeScale(naturalWidth, width);
    };
    Zoom.prototype.getPageCords = function (event) {
      var cords = {};
      if (event) {
        cords.x = event.pageX || event.targetTouches[0].pageX;
        cords.y = event.pageY || event.targetTouches[0].pageY;
      } else {
        var containerRect = this.core.outer.get().getBoundingClientRect();
        cords.x = containerRect.width / 2 + containerRect.left;
        cords.y = containerRect.height / 2 + this.$LG(window).scrollTop() + containerRect.top;
      }
      return cords;
    };
    Zoom.prototype.setPageCords = function (event) {
      var pageCords = this.getPageCords(event);
      this.pageX = pageCords.x;
      this.pageY = pageCords.y;
    };
    // If true, zoomed - in else zoomed out
    Zoom.prototype.beginZoom = function (scale) {
      this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
      if (scale > 1) {
        this.core.outer.addClass('lg-zoomed');
        var $actualSize = this.core.getElementById('lg-actual-size');
        $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
      } else {
        this.resetZoom();
      }
      return scale > 1;
    };
    Zoom.prototype.getScale = function (scale) {
      var actualSizeScale = this.getCurrentImageActualSizeScale();
      if (scale < 1) {
        scale = 1;
      } else if (scale > actualSizeScale) {
        scale = actualSizeScale;
      }
      return scale;
    };
    Zoom.prototype.init = function () {
      var _this = this;
      if (!this.settings.zoom) {
        return;
      }
      this.buildTemplates();
      this.enableZoomOnSlideItemLoad();
      var tapped = null;
      this.core.outer.on('dblclick.lg', function (event) {
        if (!_this.$LG(event.target).hasClass('lg-image')) {
          return;
        }
        _this.setActualSize(_this.core.index, event);
      });
      this.core.outer.on('touchstart.lg', function (event) {
        var $target = _this.$LG(event.target);
        if (event.targetTouches.length === 1 && $target.hasClass('lg-image')) {
          if (!tapped) {
            tapped = setTimeout(function () {
              tapped = null;
            }, 300);
          } else {
            clearTimeout(tapped);
            tapped = null;
            _this.setActualSize(_this.core.index, event);
          }
          event.preventDefault();
        }
      });
      // Update zoom on resize and orientationchange
      this.core.LGel.on(lGEvents.containerResize + ".zoom", function () {
        if (!_this.core.lgOpened) return;
        _this.setPageCords();
        _this.zoomImage(_this.scale);
      });
      this.core.getElementById('lg-zoom-out').on('click.lg', function () {
        if (_this.core.outer.find('.lg-current .lg-image').get()) {
          _this.scale -= _this.settings.scale;
          _this.scale = _this.getScale(_this.scale);
          _this.beginZoom(_this.scale);
          _this.zoomImage(_this.scale);
        }
      });
      this.core.getElementById('lg-zoom-in').on('click.lg', function () {
        _this.zoomIn();
      });
      this.core.getElementById('lg-actual-size').on('click.lg', function () {
        _this.setActualSize(_this.core.index);
      });
      this.core.LGel.on(lGEvents.beforeOpen + ".zoom", function () {
        _this.core.outer.find('.lg-item').removeClass('lg-zoomable');
      });
      // Reset zoom on slide change
      this.core.LGel.on(lGEvents.afterSlide + ".zoom", function (event) {
        var prevIndex = event.detail.prevIndex;
        _this.scale = 1;
        _this.positionChanged = false;
        _this.resetZoom(prevIndex);
      });
      // Drag option after zoom
      this.zoomDrag();
      this.pinchZoom();
      this.zoomSwipe();
      // Store the zoomable timeout value just to clear it while closing
      this.zoomableTimeout = false;
      this.positionChanged = false;
      // Set the initial value center
      this.pageX = this.core.outer.width() / 2;
      this.pageY = this.core.outer.height() / 2 + this.$LG(window).scrollTop();
      this.scale = 1;
    };
    Zoom.prototype.zoomIn = function (scale) {
      var currentItem = this.core.galleryItems[this.core.index];
      // Allow zoom only on image
      if (!currentItem.src) {
        return;
      }
      if (scale) {
        this.scale = scale;
      } else {
        this.scale += this.settings.scale;
      }
      this.scale = this.getScale(this.scale);
      this.beginZoom(this.scale);
      this.zoomImage(this.scale);
    };
    // Reset zoom effect
    Zoom.prototype.resetZoom = function (index) {
      this.core.outer.removeClass('lg-zoomed lg-zoom-drag-transition');
      var $actualSize = this.core.getElementById('lg-actual-size');
      var $item = this.core.getSlideItem(index !== undefined ? index : this.core.index);
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
      $item.find('.lg-img-wrap').first().removeAttr('style data-x data-y');
      $item.find('.lg-image').first().removeAttr('style data-scale');
      // Reset pagx pagy values to center
      this.setPageCords();
    };
    Zoom.prototype.getTouchDistance = function (e) {
      return Math.sqrt((e.targetTouches[0].pageX - e.targetTouches[1].pageX) * (e.targetTouches[0].pageX - e.targetTouches[1].pageX) + (e.targetTouches[0].pageY - e.targetTouches[1].pageY) * (e.targetTouches[0].pageY - e.targetTouches[1].pageY));
    };
    Zoom.prototype.pinchZoom = function () {
      var _this = this;
      var startDist = 0;
      var pinchStarted = false;
      var initScale = 1;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.$inner.on('touchstart.lg', function (e) {
        $item = _this.core.getSlideItem(_this.core.index);
        e.preventDefault();
        if (e.targetTouches.length === 2 && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
          initScale = _this.scale || 1;
          _this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');
          _this.core.touchAction = 'pinch';
          startDist = _this.getTouchDistance(e);
        }
      });
      this.core.$inner.on('touchmove.lg', function (e) {
        e.preventDefault();
        if (e.targetTouches.length === 2 && _this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
          var endDist = _this.getTouchDistance(e);
          var distance = startDist - endDist;
          if (!pinchStarted && Math.abs(distance) > 5) {
            pinchStarted = true;
          }
          if (pinchStarted) {
            _this.scale = Math.max(1, initScale + -distance * 0.008);
            _this.zoomImage(_this.scale);
          }
        }
      });
      this.core.$inner.on('touchend.lg', function (e) {
        if (_this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
          pinchStarted = false;
          startDist = 0;
          if (_this.scale <= 1) {
            _this.resetZoom();
          } else {
            _this.scale = _this.getScale(_this.scale);
            _this.zoomImage(_this.scale);
            _this.core.outer.addClass('lg-zoomed');
          }
          _this.core.touchAction = undefined;
        }
      });
    };
    Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, touchDuration, rotateValue) {
      var rotateEl = this.core.getSlideItem(this.core.index).find('.lg-img-rotate').first().get();
      var distanceXnew = endCoords.x - startCoords.x;
      var distanceYnew = endCoords.y - startCoords.y;
      var speedX = Math.abs(distanceXnew) / touchDuration + 1;
      var speedY = Math.abs(distanceYnew) / touchDuration + 1;
      if (speedX > 2) {
        speedX += 1;
      }
      if (speedY > 2) {
        speedY += 1;
      }
      distanceXnew = distanceXnew * speedX;
      distanceYnew = distanceYnew * speedY;
      var _LGel = this.core.getSlideItem(this.core.index).find('.lg-img-wrap').first();
      var $image = this.core.getSlideItem(this.core.index).find('.lg-object').first();
      var dataX = parseFloat(_LGel.attr('data-x')) || 0;
      var dataY = parseFloat(_LGel.attr('data-y')) || 0;
      var distance = {};
      distance.x = -Math.abs(dataX) + distanceXnew * this.getModifier(rotateValue, 'X', rotateEl);
      distance.y = -Math.abs(dataY) + distanceYnew * this.getModifier(rotateValue, 'Y', rotateEl);
      var possibleSwipeCords = this.getPossibleSwipeDragCords($image, rotateValue);
      if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
        if (allowY) {
          if (distance.y <= -possibleSwipeCords.maxY) {
            distance.y = -possibleSwipeCords.maxY;
          } else if (distance.y >= -possibleSwipeCords.minY) {
            distance.y = -possibleSwipeCords.minY;
          }
        }
        if (allowX) {
          if (distance.x <= -possibleSwipeCords.maxX) {
            distance.x = -possibleSwipeCords.maxX;
          } else if (distance.x >= -possibleSwipeCords.minX) {
            distance.x = -possibleSwipeCords.minX;
          }
        }
        if (allowY) {
          _LGel.attr('data-y', Math.abs(distance.y));
        } else {
          var dataY_1 = parseFloat(_LGel.attr('data-y')) || 0;
          distance.y = -Math.abs(dataY_1);
        }
        if (allowX) {
          _LGel.attr('data-x', Math.abs(distance.x));
        } else {
          var dataX_1 = parseFloat(_LGel.attr('data-x')) || 0;
          distance.x = -Math.abs(dataX_1);
        }
        this.setZoomSwipeStyles(_LGel, distance);
        this.positionChanged = true;
      }
    };
    Zoom.prototype.getZoomSwipeCords = function (startCoords, endCoords, allowX, allowY, possibleSwipeCords, dataY, dataX, rotateValue, rotateEl) {
      var distance = {};
      if (allowY) {
        distance.y = -Math.abs(dataY) + (endCoords.y - startCoords.y) * this.getModifier(rotateValue, 'Y', rotateEl);
        if (distance.y <= -possibleSwipeCords.maxY) {
          var diffMaxY = -possibleSwipeCords.maxY - distance.y;
          distance.y = -possibleSwipeCords.maxY - diffMaxY / 6;
        } else if (distance.y >= -possibleSwipeCords.minY) {
          var diffMinY = distance.y - -possibleSwipeCords.minY;
          distance.y = -possibleSwipeCords.minY + diffMinY / 6;
        }
      } else {
        distance.y = -Math.abs(dataY);
      }
      if (allowX) {
        distance.x = -Math.abs(dataX) + (endCoords.x - startCoords.x) * this.getModifier(rotateValue, 'X', rotateEl);
        if (distance.x <= -possibleSwipeCords.maxX) {
          var diffMaxX = -possibleSwipeCords.maxX - distance.x;
          distance.x = -possibleSwipeCords.maxX - diffMaxX / 6;
        } else if (distance.x >= -possibleSwipeCords.minX) {
          var diffMinX = distance.x - -possibleSwipeCords.minX;
          distance.x = -possibleSwipeCords.minX + diffMinX / 6;
        }
      } else {
        distance.x = -Math.abs(dataX);
      }
      return distance;
    };
    Zoom.prototype.getPossibleSwipeDragCords = function ($image, rotateValue) {
      var $cont = this.core.$lgContent;
      var contHeight = $cont.height();
      var contWidth = $cont.width();
      var imageYSize = this.getImageSize($image.get(), rotateValue, 'y');
      var imageXSize = this.getImageSize($image.get(), rotateValue, 'x');
      var dataY = parseFloat($image.attr('data-scale')) || 1;
      var elDataScale = Math.abs(dataY);
      var minY = (contHeight - imageYSize) / 2;
      var maxY = Math.abs(imageYSize * elDataScale - contHeight + minY);
      var minX = (contWidth - imageXSize) / 2;
      var maxX = Math.abs(imageXSize * elDataScale - contWidth + minX);
      if (rotateValue === 90) {
        return {
          minY: minX,
          maxY: maxX,
          minX: minY,
          maxX: maxY
        };
      } else {
        return {
          minY: minY,
          maxY: maxY,
          minX: minX,
          maxX: maxX
        };
      }
    };
    Zoom.prototype.setZoomSwipeStyles = function (LGel, distance) {
      LGel.css('transform', 'translate3d(' + distance.x + 'px, ' + distance.y + 'px, 0)');
    };
    Zoom.prototype.zoomSwipe = function () {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isMoved = false;
      // Allow x direction drag
      var allowX = false;
      // Allow Y direction drag
      var allowY = false;
      var startTime = new Date();
      var endTime = new Date();
      var dataX = 0;
      var dataY = 0;
      var possibleSwipeCords;
      var _LGel;
      var rotateEl = null;
      var rotateValue = 0;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.$inner.on('touchstart.lg', function (e) {
        e.preventDefault();
        var currentItem = _this.core.galleryItems[_this.core.index];
        // Allow zoom only on image
        if (!currentItem.src) {
          return;
        }
        $item = _this.core.getSlideItem(_this.core.index);
        if ((_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && e.targetTouches.length === 1 && _this.core.outer.hasClass('lg-zoomed')) {
          startTime = new Date();
          _this.core.touchAction = 'zoomSwipe';
          var $image = _this.core.getSlideItem(_this.core.index).find('.lg-object').first();
          _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();
          rotateEl = _this.core.getSlideItem(_this.core.index).find('.lg-img-rotate').first().get();
          rotateValue = _this.getCurrentRotation(rotateEl);
          var dragAllowedAxises = _this.getDragAllowedAxises($image, Math.abs(rotateValue));
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (allowX || allowY) {
            startCoords = _this.getSwipeCords(e, Math.abs(rotateValue));
          }
          dataY = parseFloat(_LGel.attr('data-y'));
          dataX = parseFloat(_LGel.attr('data-x'));
          possibleSwipeCords = _this.getPossibleSwipeDragCords($image, rotateValue);
          // reset opacity and transition duration
          _this.core.outer.addClass('lg-zoom-dragging lg-zoom-drag-transition');
        }
      });
      this.core.$inner.on('touchmove.lg', function (e) {
        e.preventDefault();
        if (e.targetTouches.length === 1 && _this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
          _this.core.touchAction = 'zoomSwipe';
          endCoords = _this.getSwipeCords(e, Math.abs(rotateValue));
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords, dataY, dataX, rotateValue, rotateEl);
          if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            isMoved = true;
            _this.setZoomSwipeStyles(_LGel, distance);
          }
        }
      });
      this.core.$inner.on('touchend.lg', function (e) {
        if (_this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
          _this.core.touchAction = undefined;
          _this.core.outer.removeClass('lg-zoom-dragging');
          if (!isMoved) {
            return;
          }
          isMoved = false;
          endTime = new Date();
          var touchDuration = endTime.valueOf() - startTime.valueOf();
          _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, rotateValue);
        }
      });
    };
    Zoom.prototype.zoomDrag = function () {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isDragging = false;
      var isMoved = false;
      var rotateEl = null;
      var rotateValue = 0;
      // Allow x direction drag
      var allowX = false;
      // Allow Y direction drag
      var allowY = false;
      var startTime;
      var endTime;
      var possibleSwipeCords;
      var dataY;
      var dataX;
      var _LGel;
      this.core.outer.on('mousedown.lg.zoom', function (e) {
        var currentItem = _this.core.galleryItems[_this.core.index];
        // Allow zoom only on image
        if (!currentItem.src) {
          return;
        }
        var $item = _this.core.getSlideItem(_this.core.index);
        if (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
          startTime = new Date();
          // execute only on .lg-object
          var $image = _this.core.getSlideItem(_this.core.index).find('.lg-object').first();
          _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();
          rotateEl = _this.core.getSlideItem(_this.core.index).find('.lg-img-rotate').get();
          rotateValue = _this.getCurrentRotation(rotateEl);
          var dragAllowedAxises = _this.getDragAllowedAxises($image, Math.abs(rotateValue));
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (_this.core.outer.hasClass('lg-zoomed')) {
            if (_this.$LG(e.target).hasClass('lg-object') && (allowX || allowY)) {
              e.preventDefault();
              startCoords = _this.getDragCords(e, Math.abs(rotateValue));
              possibleSwipeCords = _this.getPossibleSwipeDragCords($image, rotateValue);
              isDragging = true;
              dataY = parseFloat(_LGel.attr('data-y'));
              dataX = parseFloat(_LGel.attr('data-x'));
              // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
              _this.core.outer.get().scrollLeft += 1;
              _this.core.outer.get().scrollLeft -= 1;
              _this.core.outer.removeClass('lg-grab').addClass('lg-grabbing lg-zoom-drag-transition lg-zoom-dragging');
            }
          }
        }
      });
      this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (e) {
        if (isDragging) {
          isMoved = true;
          endCoords = _this.getDragCords(e, Math.abs(rotateValue));
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords, dataY, dataX, rotateValue, rotateEl);
          _this.setZoomSwipeStyles(_LGel, distance);
        }
      });
      this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (e) {
        if (isDragging) {
          endTime = new Date();
          isDragging = false;
          _this.core.outer.removeClass('lg-zoom-dragging');
          // Fix for chrome mouse move on click
          if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
            endCoords = _this.getDragCords(e, Math.abs(rotateValue));
            var touchDuration = endTime.valueOf() - startTime.valueOf();
            _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, rotateValue);
          }
          isMoved = false;
        }
        _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
      });
    };
    Zoom.prototype.closeGallery = function () {
      this.resetZoom();
    };
    Zoom.prototype.destroy = function () {
      // Unbind all events added by lightGallery zoom plugin
      this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
      this.core.LGel.off('.lg.zoom');
      this.core.LGel.off('.zoom');
      clearTimeout(this.zoomableTimeout);
      this.zoomableTimeout = false;
    };
    return Zoom;
  })();
  return Zoom;
});

},{}],"3sk3r":[function(require,module,exports) {
var define;
/*!
* lightgallery | 2.1.8 | July 7th 2021
* http://www.lightgalleryjs.com/
* Copyright (c) 2020 Sachin Neravath;
* @license GPLv3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.lgAutoplay = factory();
})(this, function () {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  var __assign = function () {
    __assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return __assign.apply(this, arguments);
  };
  /**
  * List of lightGallery events
  * All events should be documented here
  * Below interfaces are used to build the website documentations
  **/
  var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose'
  };
  var autoplaySettings = {
    autoplay: true,
    slideShowAutoplay: false,
    slideShowInterval: 5000,
    progressBar: true,
    forceSlideShowAutoplay: false,
    autoplayControls: true,
    appendAutoplayControlsTo: '.lg-toolbar'
  };
  /**
  * Creates the autoplay plugin.
  * @param {object} element - lightGallery element
  */
  var Autoplay = /** @class*/
  (function () {
    function Autoplay(instance) {
      this.core = instance;
      // extend module default settings with lightGallery core settings
      this.settings = __assign(__assign({}, autoplaySettings), this.core.settings);
      return this;
    }
    Autoplay.prototype.init = function () {
      var _this = this;
      if (!this.settings.autoplay) {
        return;
      }
      this.interval = false;
      // Identify if slide happened from autoplay
      this.fromAuto = true;
      // Identify if autoplay canceled from touch/drag
      this.pausedOnTouchDrag = false;
      this.pausedOnSlideChange = false;
      // append autoplay controls
      if (this.settings.autoplayControls) {
        this.controls();
      }
      // Create progress bar
      if (this.settings.progressBar) {
        this.core.$lgContent.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
      }
      // Start autoplay
      if (this.settings.slideShowAutoplay) {
        this.core.LGel.once(lGEvents.slideItemLoad + ".autoplay", function () {
          _this.startAuto();
        });
      }
      // cancel interval on touchstart and dragstart
      this.core.LGel.on(lGEvents.dragStart + ".autoplay touchstart.lg.autoplay", function () {
        if (_this.interval) {
          _this.cancelAuto();
          _this.pausedOnTouchDrag = true;
        }
      });
      // restore autoplay if autoplay canceled from touchstart / dragstart
      this.core.LGel.on(lGEvents.dragEnd + ".autoplay touchend.lg.autoplay", function () {
        if (!_this.interval && _this.pausedOnTouchDrag) {
          _this.startAuto();
          _this.pausedOnTouchDrag = false;
        }
      });
      this.core.LGel.on(lGEvents.beforeSlide + ".autoplay", function () {
        _this.showProgressBar();
        if (!_this.fromAuto && _this.interval) {
          _this.cancelAuto();
          _this.pausedOnSlideChange = true;
        } else {
          _this.pausedOnSlideChange = false;
        }
        _this.fromAuto = false;
      });
      // restore autoplay if autoplay canceled from touchstart / dragstart
      this.core.LGel.on(lGEvents.afterSlide + ".autoplay", function () {
        if (_this.pausedOnSlideChange && !_this.interval && _this.settings.forceSlideShowAutoplay) {
          _this.startAuto();
          _this.pausedOnSlideChange = false;
        }
      });
      // set progress
      this.showProgressBar();
    };
    Autoplay.prototype.showProgressBar = function () {
      var _this = this;
      if (this.settings.progressBar && this.fromAuto) {
        var _$progressBar_1 = this.core.outer.find('.lg-progress-bar');
        var _$progress_1 = this.core.outer.find('.lg-progress');
        if (this.interval) {
          _$progress_1.removeAttr('style');
          _$progressBar_1.removeClass('lg-start');
          setTimeout(function () {
            _$progress_1.css('transition', 'width ' + (_this.core.settings.speed + _this.settings.slideShowInterval) + 'ms ease 0s');
            _$progressBar_1.addClass('lg-start');
          }, 20);
        }
      }
    };
    // Manage autoplay via play/stop buttons
    Autoplay.prototype.controls = function () {
      var _this = this;
      var _html = '<button aria-label="Toggle autoplay" type="button" class="lg-autoplay-button lg-icon"></button>';
      // Append autoplay controls
      this.core.outer.find(this.settings.appendAutoplayControlsTo).append(_html);
      this.core.outer.find('.lg-autoplay-button').first().on('click.lg.autoplay', function () {
        if (_this.core.outer.hasClass('lg-show-autoplay')) {
          _this.cancelAuto();
        } else {
          if (!_this.interval) {
            _this.startAuto();
          }
        }
      });
    };
    // Autostart gallery
    Autoplay.prototype.startAuto = function () {
      var _this = this;
      this.core.outer.find('.lg-progress').css('transition', 'width ' + (this.core.settings.speed + this.settings.slideShowInterval) + 'ms ease 0s');
      this.core.outer.addClass('lg-show-autoplay');
      this.core.outer.find('.lg-progress-bar').addClass('lg-start');
      this.interval = setInterval(function () {
        if (_this.core.index + 1 < _this.core.galleryItems.length) {
          _this.core.index++;
        } else {
          _this.core.index = 0;
        }
        _this.fromAuto = true;
        _this.core.slide(_this.core.index, false, false, 'next');
      }, this.core.settings.speed + this.settings.slideShowInterval);
    };
    // cancel Autostart
    Autoplay.prototype.cancelAuto = function () {
      if (this.interval) {
        this.core.outer.find('.lg-progress').removeAttr('style');
        this.core.outer.removeClass('lg-show-autoplay');
        this.core.outer.find('.lg-progress-bar').removeClass('lg-start');
      }
      clearInterval(this.interval);
      this.interval = false;
    };
    Autoplay.prototype.closeGallery = function () {
      this.cancelAuto();
    };
    Autoplay.prototype.destroy = function () {
      if (this.settings.autoplay) {
        this.core.outer.find('.lg-progress-bar').remove();
      }
      // Remove all event listeners added by autoplay plugin
      this.core.LGel.off('.lg.autoplay');
      this.core.LGel.off('.autoplay');
    };
    return Autoplay;
  })();
  return Autoplay;
});

},{}],"2D7lr":[function(require,module,exports) {
var define;
/*!
* lightgallery | 2.1.8 | July 7th 2021
* http://www.lightgalleryjs.com/
* Copyright (c) 2020 Sachin Neravath;
* @license GPLv3
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.lgRotate = factory();
})(this, function () {
  "use strict";
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ******************************************************************************/
  var __assign = function () {
    __assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return __assign.apply(this, arguments);
  };
  /**
  * List of lightGallery events
  * All events should be documented here
  * Below interfaces are used to build the website documentations
  **/
  var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose'
  };
  var rotateSettings = {
    rotate: true,
    rotateLeft: true,
    rotateRight: true,
    flipHorizontal: true,
    flipVertical: true
  };
  var Rotate = /** @class*/
  (function () {
    function Rotate(instance, $LG) {
      // get lightGallery core plugin instance
      this.core = instance;
      this.$LG = $LG;
      // extend module default settings with lightGallery core settings
      this.settings = __assign(__assign({}, rotateSettings), this.core.settings);
      return this;
    }
    Rotate.prototype.buildTemplates = function () {
      var rotateIcons = '';
      if (this.settings.flipVertical) {
        rotateIcons += '<button type="button" id="lg-flip-ver" aria-label="flip vertical" class="lg-flip-ver lg-icon"></button>';
      }
      if (this.settings.flipHorizontal) {
        rotateIcons += '<button type="button" id="lg-flip-hor" aria-label="Flip horizontal" class="lg-flip-hor lg-icon"></button>';
      }
      if (this.settings.rotateLeft) {
        rotateIcons += '<button type="button" id="lg-rotate-left" aria-label="Rotate left" class="lg-rotate-left lg-icon"></button>';
      }
      if (this.settings.rotateRight) {
        rotateIcons += '<button type="button" id="lg-rotate-right" aria-label="Rotate right" class="lg-rotate-right lg-icon"></button>';
      }
      this.core.$toolbar.append(rotateIcons);
    };
    Rotate.prototype.init = function () {
      var _this = this;
      if (!this.settings.rotate) {
        return;
      }
      this.buildTemplates();
      // Save rotate config for each item to persist its rotate, flip values
      // even after navigating to diferent slides
      this.rotateValuesList = {};
      // event triggered after appending slide content
      this.core.LGel.on(lGEvents.afterAppendSlide + ".rotate", function (event) {
        var index = event.detail.index;
        var imageWrap = _this.core.getSlideItem(index).find('.lg-img-wrap').first();
        imageWrap.wrap('lg-img-rotate');
      });
      this.core.outer.find('#lg-rotate-left').first().on('click.lg', this.rotateLeft.bind(this));
      this.core.outer.find('#lg-rotate-right').first().on('click.lg', this.rotateRight.bind(this));
      this.core.outer.find('#lg-flip-hor').first().on('click.lg', this.flipHorizontal.bind(this));
      this.core.outer.find('#lg-flip-ver').first().on('click.lg', this.flipVertical.bind(this));
      // Reset rotate on slide change
      this.core.LGel.on(lGEvents.beforeSlide + ".rotate", function (event) {
        if (!_this.rotateValuesList[event.detail.index]) {
          _this.rotateValuesList[event.detail.index] = {
            rotate: 0,
            flipHorizontal: 1,
            flipVertical: 1
          };
        }
      });
    };
    Rotate.prototype.applyStyles = function () {
      var $image = this.core.getSlideItem(this.core.index).find('.lg-img-rotate').first();
      $image.css('transform', 'rotate(' + this.rotateValuesList[this.core.index].rotate + 'deg)' + ' scale3d(' + this.rotateValuesList[this.core.index].flipHorizontal + ', ' + this.rotateValuesList[this.core.index].flipVertical + ', 1)');
    };
    Rotate.prototype.rotateLeft = function () {
      this.rotateValuesList[this.core.index].rotate -= 90;
      this.applyStyles();
    };
    Rotate.prototype.rotateRight = function () {
      this.rotateValuesList[this.core.index].rotate += 90;
      this.applyStyles();
    };
    Rotate.prototype.getCurrentRotation = function (el) {
      if (!el) {
        return 0;
      }
      var st = this.$LG(el).style();
      var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';
      if (tm !== 'none') {
        var values = tm.split('(')[1].split(')')[0].split(',');
        if (values) {
          var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
          return angle < 0 ? angle + 360 : angle;
        }
      }
      return 0;
    };
    Rotate.prototype.flipHorizontal = function () {
      var rotateEl = this.core.getSlideItem(this.core.index).find('.lg-img-rotate').first().get();
      var currentRotation = this.getCurrentRotation(rotateEl);
      var rotateAxis = 'flipHorizontal';
      if (currentRotation === 90 || currentRotation === 270) {
        rotateAxis = 'flipVertical';
      }
      this.rotateValuesList[this.core.index][rotateAxis] *= -1;
      this.applyStyles();
    };
    Rotate.prototype.flipVertical = function () {
      var rotateEl = this.core.getSlideItem(this.core.index).find('.lg-img-rotate').first().get();
      var currentRotation = this.getCurrentRotation(rotateEl);
      var rotateAxis = 'flipVertical';
      if (currentRotation === 90 || currentRotation === 270) {
        rotateAxis = 'flipHorizontal';
      }
      this.rotateValuesList[this.core.index][rotateAxis] *= -1;
      this.applyStyles();
    };
    Rotate.prototype.isImageOrientationChanged = function () {
      var rotateValue = this.rotateValuesList[this.core.index];
      var isRotated = Math.abs(rotateValue.rotate) % 360 !== 0;
      var ifFlippedHor = rotateValue.flipHorizontal < 0;
      var ifFlippedVer = rotateValue.flipVertical < 0;
      return isRotated || ifFlippedHor || ifFlippedVer;
    };
    Rotate.prototype.closeGallery = function () {
      if (this.isImageOrientationChanged()) {
        this.core.getSlideItem(this.core.index).css('opacity', 0);
      }
      this.rotateValuesList = {};
    };
    Rotate.prototype.destroy = function () {
      // Unbind all events added by lightGallery rotate plugin
      this.core.LGel.off('.lg.rotate');
      this.core.LGel.off('.rotate');
    };
    return Rotate;
  })();
  return Rotate;
});

},{}],"6ypWN":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _util = require('./util');
var assign = require('es6-object-assign').assign;
var find = require('array.prototype.find').shim();
var defaults = {
  speed: "auto"
};
var Backpax = /** @class*/
(function () {
  function Backpax(selector, option) {
    var _this = this;
    if (option === void 0) {
      option = {};
    }
    if (selector instanceof NodeList) {
      this.elements = selector;
    } else {
      this.elements = document.querySelectorAll(selector);
    }
    this.controls = [];
    this.items = [];
    this.options = assign({}, defaults, option);
    this.move = 0;
    this.setup();
    if (("requestAnimationFrame" in window)) {
      document.addEventListener('scroll', function () {
        _this.run();
      }, {
        passive: true
      });
    }
    window.addEventListener('resize', _util.debounce(function () {
      [].forEach.call(_this.elements, function (element, index) {
        var id = element.dataset.id;
        if (id) {
          var insert = document.getElementById(id);
          if (insert) {
            _this.setBestImg(element, insert, index);
          }
        }
      });
    }, 100));
  }
  Backpax.prototype.setBestImg = function (element, insert, index) {
    var width = window.innerWidth;
    var img = element.dataset.img;
    var backgroundImage = img;
    var points = Object.keys(element.dataset).reduce(function (ac, key) {
      if ((/img-\d*/).test(key)) {
        var match = key.match(/img-(\d*)/);
        if (match && match[1]) {
          var point_1 = parseInt(match[1], 10);
          ac.push({
            point: point_1,
            src: element.dataset[key]
          });
        }
      }
      return ac;
    }, []);
    points.sort(function (pointA, pointB) {
      if (pointA.point < pointB.point) {
        return -1;
      }
      return 1;
    });
    var point = points.find(function (p) {
      if (width < p.point) {
        return true;
      }
      return false;
    });
    if (point) {
      backgroundImage = point.src;
    }
    var newBackground = "url(" + backgroundImage + ")";
    if (newBackground !== insert.style.backgroundImage) {
      insert.style.backgroundImage = newBackground;
    }
    this.setImgRatio(element, backgroundImage, index);
  };
  Backpax.prototype.setup = function () {
    var _this = this;
    [].forEach.call(this.elements, function (element, index) {
      element.style.position = 'relative';
      element.style.overflow = 'hidden';
      var id = _util.getRandomId();
      element.dataset.id = id;
      var insert = document.createElement('div');
      element.insertBefore(insert, null);
      _this.setBestImg(element, insert, index);
      insert.id = id;
      insert.style.position = 'absolute';
      insert.style.top = '0';
      insert.style.left = '0';
      insert.style.right = '0';
      insert.style.bottom = '0';
      insert.style.backgroundRepeat = 'no-repeat';
      insert.style.backgroundPosition = 'bottom center';
      insert.style.backgroundSize = 'cover';
      insert.style.transformStyle = 'flat';
      insert.style.backfaceVisibility = 'hidden';
      insert.style.willChange = 'transform';
      _this.items.push({
        element: element,
        insert: insert,
        elementOffsetHeight: element.offsetHeight,
        insertOffsetHeight: 0
      });
    });
  };
  Backpax.prototype.setImgRatio = function (element, image, index) {
    var _this = this;
    var img = new Image();
    img.onload = function () {
      var ratio = img.width / img.height;
      var control = _this.controls[index];
      if (control) {
        control.ratio = ratio;
      } else {
        _this.controls[index] = {
          ratio: ratio,
          speed: parseInt(element.dataset.speed, 10)
        };
      }
      var id = element.dataset.id;
      var insert = document.getElementById(id);
      if (insert) {
        if (element.offsetHeight > element.offsetWidth / ratio) {
          insert.style.height = element.style.height;
          insert.style.width = element.offsetHeight * ratio + "px";
        } else {
          insert.style.height = element.offsetWidth / ratio + "px";
          insert.style.width = '100%';
        }
        _this.items[index].insertOffsetHeight = insert.offsetHeight;
      }
    };
    img.src = image;
  };
  Backpax.prototype.run = function () {
    var _this = this;
    var top = _util.getScrollTop();
    var windowHeight = window.innerHeight;
    [].forEach.call(this.items, function (item, index) {
      var element = item.element;
      var insert = item.insert;
      var offset = element.getBoundingClientRect().top + top;
      if (!_this.controls[index] || !_this.controls[index].ratio) {
        return;
      }
      var ratio = _this.controls[index].ratio;
      var elementHeight = item.elementOffsetHeight;
      var insertHeight = item.insertOffsetHeight;
      if (top + windowHeight < offset) {
        return;
      }
      var move = top + windowHeight - offset;
      var bottom = elementHeight - insertHeight;
      var speed = _this.options.speed;
      if (speed === 'auto') {
        if (ratio) {
          speed = (insertHeight - elementHeight) / (windowHeight + elementHeight / 2);
        } else {
          return;
        }
      }
      if (_this.controls[index] && _this.controls[index].speed) {
        speed = _this.controls[index].speed;
      }
      var final = bottom + move * speed;
      if (move !== _this.move) {
        requestAnimationFrame(function () {
          insert.style.transform = "translateY(" + Math.round(final) + "px)";
        });
      }
      _this.move = move;
    });
  };
  return Backpax;
})();
exports.default = Backpax;

},{"./util":"3RCQ5","es6-object-assign":"5Xduk","array.prototype.find":"6vRHe","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3RCQ5":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getRandomId", function () {
  return getRandomId;
});
_parcelHelpers.export(exports, "getScrollTop", function () {
  return getScrollTop;
});
_parcelHelpers.export(exports, "getScrollLeft", function () {
  return getScrollLeft;
});
_parcelHelpers.export(exports, "getOffset", function () {
  return getOffset;
});
_parcelHelpers.export(exports, "debounce", function () {
  return debounce;
});
var getRandomId = function () {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};
var getScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
var getScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
var getOffset = function (el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + getScrollTop(),
    left: rect.left + getScrollLeft()
  };
};
var debounce = function (func, wait, immediate) {
  if (immediate === void 0) {
    immediate = false;
  }
  var timeout;
  return function () {
    var later = function () {
      timeout = undefined;
      if (!immediate) {
        func();
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) {
      func();
    }
  };
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"5Xduk":[function(require,module,exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

'use strict';

function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};

},{}],"6vRHe":[function(require,module,exports) {
"use strict";
var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2019/RequireObjectCoercible');
var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');
var slice = Array.prototype.slice;
var polyfill = getPolyfill();
var boundFindShim = function find(array, predicate) {
  // eslint-disable-line no-unused-vars
  RequireObjectCoercible(array);
  var args = slice.call(arguments, 1);
  return polyfill.apply(array, args);
};
define(boundFindShim, {
  getPolyfill: getPolyfill,
  implementation: implementation,
  shim: shim
});
module.exports = boundFindShim;

},{"define-properties":"7gzEQ","es-abstract/2019/RequireObjectCoercible":"5bDcC","./implementation":"4iAmm","./polyfill":"6HeXI","./shim":"7f61k"}],"7gzEQ":[function(require,module,exports) {
'use strict';

var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"object-keys":"2xLIi"}],"2xLIi":[function(require,module,exports) {
'use strict';

var slice = Array.prototype.slice;
var isArgs = require('./isArguments');

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : require('./implementation');

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./isArguments":"7kj3I","./implementation":"54DMI"}],"7kj3I":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],"54DMI":[function(require,module,exports) {
'use strict';

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = require('./isArguments'); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;

},{"./isArguments":"7kj3I"}],"5bDcC":[function(require,module,exports) {
'use strict';

module.exports = require('../5/CheckObjectCoercible');

},{"../5/CheckObjectCoercible":"tyTKc"}],"tyTKc":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

// http://262.ecma-international.org/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};

},{"get-intrinsic":"4mEyY"}],"4mEyY":[function(require,module,exports) {
'use strict';

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"has-symbols":"2Tuim","function-bind":"3Idfw","has":"2jarm"}],"2Tuim":[function(require,module,exports) {
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":"3VSTQ"}],"3VSTQ":[function(require,module,exports) {
'use strict';

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],"3Idfw":[function(require,module,exports) {
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":"KKGxB"}],"KKGxB":[function(require,module,exports) {
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],"2jarm":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"3Idfw"}],"4iAmm":[function(require,module,exports) {
'use strict';

var ToObject = require('es-abstract/2019/ToObject');
var ToLength = require('es-abstract/2019/ToLength');
var IsCallable = require('es-abstract/2019/IsCallable');

module.exports = function find(predicate) {
	var list = ToObject(this);
	var length = ToLength(list.length);
	if (!IsCallable(predicate)) {
		throw new TypeError('Array#find: predicate must be a function');
	}
	if (length === 0) {
		return void 0;
	}
	var thisArg;
	if (arguments.length > 0) {
		thisArg = arguments[1];
	}

	for (var i = 0, value; i < length; i++) {
		value = list[i];
		// inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
		if (predicate.apply(thisArg, [value, i, list])) {
			return value;
		}
	}
	return void 0;
};

},{"es-abstract/2019/ToObject":"1y0P1","es-abstract/2019/ToLength":"AbbuJ","es-abstract/2019/IsCallable":"1TCui"}],"1y0P1":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Object = GetIntrinsic('%Object%');

var RequireObjectCoercible = require('./RequireObjectCoercible');

// https://ecma-international.org/ecma-262/6.0/#sec-toobject

module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

},{"get-intrinsic":"4mEyY","./RequireObjectCoercible":"5bDcC"}],"AbbuJ":[function(require,module,exports) {
'use strict';

var MAX_SAFE_INTEGER = require('../helpers/maxSafeInteger');

var ToInteger = require('./ToInteger');

module.exports = function ToLength(argument) {
	var len = ToInteger(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

},{"../helpers/maxSafeInteger":"4Qhrt","./ToInteger":"0WPPV"}],"4Qhrt":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');

module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;

},{"get-intrinsic":"4mEyY"}],"0WPPV":[function(require,module,exports) {
'use strict';

var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://ecma-international.org/ecma-262/6.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	return ES5ToInteger(number);
};

},{"../5/ToInteger":"X4SdC","./ToNumber":"3RFTt"}],"X4SdC":[function(require,module,exports) {
'use strict';

var abs = require('./abs');
var floor = require('./floor');
var ToNumber = require('./ToNumber');

var $isNaN = require('../helpers/isNaN');
var $isFinite = require('../helpers/isFinite');
var $sign = require('../helpers/sign');

// http://262.ecma-international.org/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * floor(abs(number));
};

},{"./abs":"7xRKA","./floor":"6Isqy","./ToNumber":"1FMW3","../helpers/isNaN":"3DNxK","../helpers/isFinite":"3QIZG","../helpers/sign":"j89et"}],"7xRKA":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $abs = GetIntrinsic('%Math.abs%');

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function abs(x) {
	return $abs(x);
};

},{"get-intrinsic":"4mEyY"}],"6Isqy":[function(require,module,exports) {
'use strict';

// var modulo = require('./modulo');
var $floor = Math.floor;

// http://262.ecma-international.org/5.1/#sec-5.2

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	return $floor(x);
};

},{}],"1FMW3":[function(require,module,exports) {
'use strict';

var ToPrimitive = require('./ToPrimitive');

// http://262.ecma-international.org/5.1/#sec-9.3

module.exports = function ToNumber(value) {
	var prim = ToPrimitive(value, Number);
	if (typeof prim !== 'string') {
		return +prim; // eslint-disable-line no-implicit-coercion
	}

	// eslint-disable-next-line no-control-regex
	var trimmed = prim.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, '');
	if ((/^0[ob]|^[+-]0x/).test(trimmed)) {
		return NaN;
	}

	return +trimmed; // eslint-disable-line no-implicit-coercion
};

},{"./ToPrimitive":"3vDCx"}],"3vDCx":[function(require,module,exports) {
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.1

module.exports = require('es-to-primitive/es5');

},{"es-to-primitive/es5":"3s9cu"}],"3s9cu":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;

var isPrimitive = require('./helpers/isPrimitive');

var isCallable = require('is-callable');

// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
var ES5internalSlots = {
	'[[DefaultValue]]': function (O) {
		var actualHint;
		if (arguments.length > 1) {
			actualHint = arguments[1];
		} else {
			actualHint = toStr.call(O) === '[object Date]' ? String : Number;
		}

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// http://ecma-international.org/ecma-262/5.1/#sec-9.1
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	if (arguments.length > 1) {
		return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
	}
	return ES5internalSlots['[[DefaultValue]]'](input);
};

},{"./helpers/isPrimitive":"SyHtz","is-callable":"41FLW"}],"SyHtz":[function(require,module,exports) {
'use strict';

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],"41FLW":[function(require,module,exports) {
'use strict';

var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
/* globals document: false */
var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};

module.exports = reflectApply
	? function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (value === documentDotAll) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};

},{}],"3DNxK":[function(require,module,exports) {
'use strict';

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

},{}],"3QIZG":[function(require,module,exports) {
'use strict';

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };

},{}],"j89et":[function(require,module,exports) {
'use strict';

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};

},{}],"3RFTt":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('call-bind/callBound');
var regexTester = require('../helpers/regexTester');
var isPrimitive = require('../helpers/isPrimitive');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function (value) {
	return $replace(value, trimRegex, '');
};

var ToPrimitive = require('./ToPrimitive');

// https://ecma-international.org/ecma-262/6.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'string') {
		if (isBinary(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 2));
		} else if (isOctal(value)) {
			return ToNumber($parseInteger($strSlice(value, 2), 8));
		} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
			return NaN;
		} else {
			var trimmed = $trim(value);
			if (trimmed !== value) {
				return ToNumber(trimmed);
			}
		}
	}
	return $Number(value);
};

},{"get-intrinsic":"4mEyY","call-bind/callBound":"2diBM","../helpers/regexTester":"1OaTx","../helpers/isPrimitive":"5RF11","./ToPrimitive":"kC97M"}],"2diBM":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"get-intrinsic":"4mEyY","./":"lLIWm"}],"lLIWm":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"function-bind":"3Idfw","get-intrinsic":"4mEyY"}],"1OaTx":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $test = GetIntrinsic('RegExp.prototype.test');

var callBind = require('call-bind');

module.exports = function regexTester(regex) {
	return callBind($test, regex);
};

},{"get-intrinsic":"4mEyY","call-bind":"lLIWm"}],"5RF11":[function(require,module,exports) {
'use strict';

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],"kC97M":[function(require,module,exports) {
'use strict';

var toPrimitive = require('es-to-primitive/es2015');

// https://ecma-international.org/ecma-262/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

},{"es-to-primitive/es2015":"3CGTK"}],"3CGTK":[function(require,module,exports) {
'use strict';

var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = require('./helpers/isPrimitive');
var isCallable = require('is-callable');
var isDate = require('is-date-object');
var isSymbol = require('is-symbol');

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

},{"./helpers/isPrimitive":"SyHtz","is-callable":"41FLW","is-date-object":"1iHsB","is-symbol":"2SK0O"}],"1iHsB":[function(require,module,exports) {
'use strict';

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{}],"2SK0O":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = require('has-symbols')();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}

},{"has-symbols":"2Tuim"}],"1TCui":[function(require,module,exports) {
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = require('is-callable');

},{"is-callable":"41FLW"}],"6HeXI":[function(require,module,exports) {
'use strict';

module.exports = function getPolyfill() {
	// Detect if an implementation exists
	// Detect early implementations which skipped holes in sparse arrays
	// eslint-disable-next-line no-sparse-arrays
	var implemented = Array.prototype.find && [, 1].find(function () {
		return true;
	}) !== 1;

	// eslint-disable-next-line global-require
	return implemented ? Array.prototype.find : require('./implementation');
};

},{"./implementation":"4iAmm"}],"7f61k":[function(require,module,exports) {
"use strict";
var define = require('define-properties');
var getPolyfill = require('./polyfill');
module.exports = function shimArrayPrototypeFind() {
  var polyfill = getPolyfill();
  define(Array.prototype, {
    find: polyfill
  }, {
    find: function () {
      return Array.prototype.find !== polyfill;
    }
  });
  return polyfill;
};

},{"define-properties":"7gzEQ","./polyfill":"6HeXI"}]},["A7H4y","4ee1I"], "4ee1I", "parcelRequire8613")

//# sourceMappingURL=index.fd532818.js.map
