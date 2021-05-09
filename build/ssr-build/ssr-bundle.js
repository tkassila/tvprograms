module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+pAM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__RU1cE","cardHeader":"cardHeader__25AIe","cardBody":"cardBody__1rEF4"};

/***/ }),

/***/ "/aYh":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("UJE0");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "0421":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("b9XL");

var assertThisInitialized = __webpack_require__("E7HD");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "0PQN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0fcM":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "3dZY":
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.dayjs = e();
}(this, function () {
  "use strict";
  var t = "millisecond",
      e = "second",
      n = "minute",
      r = "hour",
      i = "day",
      s = "week",
      u = "month",
      a = "quarter",
      o = "year",
      f = "date",
      h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      d = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
      $ = function $(t, e, n) {
    var r = String(t);return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      l = { s: $, z: function z(t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0");
    }, m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, u),
          s = n - i < 0,
          a = e.clone().add(r + (s ? -1 : 1), u);return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
    }, a: function a(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }, p: function p(h) {
      return { M: u, y: o, w: s, d: i, D: f, h: r, m: n, s: e, ms: t, Q: a }[h] || String(h || "").toLowerCase().replace(/s$/, "");
    }, u: function u(t) {
      return void 0 === t;
    } },
      y = "en",
      M = {};M[y] = d;var m = function m(t) {
    return t instanceof S;
  },
      D = function D(t, e, n) {
    var r;if (!t) return y;if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);else {
      var i = t.name;M[i] = t, r = i;
    }return !n && r && (y = r), r || !n && y;
  },
      v = function v(t, e) {
    if (m(t)) return t.clone();var n = "object" == typeof e ? e : {};return n.date = t, n.args = arguments, new S(n);
  },
      g = l;g.l = D, g.i = m, g.w = function (t, e) {
    return v(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
  };var S = function () {
    function d(t) {
      this.$L = D(t.locale, null, !0), this.parse(t);
    }var $ = d.prototype;return $.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;if (null === e) return new Date(NaN);if (g.u(e)) return new Date();if (e instanceof Date) return new Date(e);if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match(h);if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, $.init = function () {
      var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, $.$utils = function () {
      return g;
    }, $.isValid = function () {
      return !("Invalid Date" === this.$d.toString());
    }, $.isSame = function (t, e) {
      var n = v(t);return this.startOf(e) <= n && n <= this.endOf(e);
    }, $.isAfter = function (t, e) {
      return v(t) < this.startOf(e);
    }, $.isBefore = function (t, e) {
      return this.endOf(e) < v(t);
    }, $.$g = function (t, e, n) {
      return g.u(t) ? this[e] : this.set(n, t);
    }, $.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, $.valueOf = function () {
      return this.$d.getTime();
    }, $.startOf = function (t, a) {
      var h = this,
          c = !!g.u(a) || a,
          d = g.p(t),
          $ = function $(t, e) {
        var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);return c ? n : n.endOf(i);
      },
          l = function l(t, e) {
        return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          D = "set" + (this.$u ? "UTC" : "");switch (d) {case o:
          return c ? $(1, 0) : $(31, 11);case u:
          return c ? $(1, M) : $(0, M + 1);case s:
          var v = this.$locale().weekStart || 0,
              S = (y < v ? y + 7 : y) - v;return $(c ? m - S : m + (6 - S), M);case i:case f:
          return l(D + "Hours", 0);case r:
          return l(D + "Minutes", 1);case n:
          return l(D + "Seconds", 2);case e:
          return l(D + "Milliseconds", 3);default:
          return this.clone();}
    }, $.endOf = function (t) {
      return this.startOf(t, !1);
    }, $.$set = function (s, a) {
      var h,
          c = g.p(s),
          d = "set" + (this.$u ? "UTC" : ""),
          $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
          l = c === i ? this.$D + (a - this.$W) : a;if (c === u || c === o) {
        var y = this.clone().set(f, 1);y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d;
      } else $ && this.$d[$](l);return this.init(), this;
    }, $.set = function (t, e) {
      return this.clone().$set(t, e);
    }, $.get = function (t) {
      return this[g.p(t)]();
    }, $.add = function (t, a) {
      var f,
          h = this;t = Number(t);var c = g.p(a),
          d = function d(e) {
        var n = v(h);return g.w(n.date(n.date() + Math.round(e * t)), h);
      };if (c === u) return this.set(u, this.$M + t);if (c === o) return this.set(o, this.$y + t);if (c === i) return d(1);if (c === s) return d(7);var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,
          l = this.$d.getTime() + t * $;return g.w(l, this);
    }, $.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, $.format = function (t) {
      var e = this;if (!this.isValid()) return "Invalid Date";var n = t || "YYYY-MM-DDTHH:mm:ssZ",
          r = g.z(this),
          i = this.$locale(),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = i.weekdays,
          f = i.months,
          h = function h(t, r, i, s) {
        return t && (t[r] || t(e, n)) || i[r].substr(0, s);
      },
          d = function d(t) {
        return g.s(s % 12 || 12, t, "0");
      },
          $ = i.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";return n ? r.toLowerCase() : r;
      },
          l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: g.s(a + 1, 2, "0"), MMM: h(i.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: g.s(this.$D, 2, "0"), d: String(this.$W), dd: h(i.weekdaysMin, this.$W, o, 2), ddd: h(i.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: g.s(s, 2, "0"), h: d(1), hh: d(2), a: $(s, u, !0), A: $(s, u, !1), m: String(u), mm: g.s(u, 2, "0"), s: String(this.$s), ss: g.s(this.$s, 2, "0"), SSS: g.s(this.$ms, 3, "0"), Z: r };return n.replace(c, function (t, e) {
        return e || l[t] || r.replace(":", "");
      });
    }, $.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, $.diff = function (t, f, h) {
      var c,
          d = g.p(f),
          $ = v(t),
          l = 6e4 * ($.utcOffset() - this.utcOffset()),
          y = this - $,
          M = g.m(this, $);return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M);
    }, $.daysInMonth = function () {
      return this.endOf(u).$D;
    }, $.$locale = function () {
      return M[this.$L];
    }, $.locale = function (t, e) {
      if (!t) return this.$L;var n = this.clone(),
          r = D(t, e, !0);return r && (n.$L = r), n;
    }, $.clone = function () {
      return g.w(this.$d, this);
    }, $.toDate = function () {
      return new Date(this.valueOf());
    }, $.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, $.toISOString = function () {
      return this.$d.toISOString();
    }, $.toString = function () {
      return this.$d.toUTCString();
    }, d;
  }(),
      p = S.prototype;return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function (t) {
    p[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), v.extend = function (t, e) {
    return t.$i || (t(e, S, v), t.$i = !0), v;
  }, v.locale = D, v.isDayjs = m, v.unix = function (t) {
    return v(1e3 * t);
  }, v.en = M[y], v.Ls = M, v.p = {}, v;
});

/***/ }),

/***/ "5sRW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var util_namespaceObject = {};
__webpack_require__.d(util_namespaceObject, "createFocusTrapInstance", function() { return createFocusTrapInstance; });

// EXTERNAL MODULE: ../node_modules/@material/base/index.js
var base = __webpack_require__("dSNL");

// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// CONCATENATED MODULE: ../node_modules/@material/dialog/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel'
};

var numbers = {
  DIALOG_ANIMATION_TIME_MS: 120
};


// CONCATENATED MODULE: ../node_modules/@material/dialog/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var foundation_MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {},
        isDialog: function isDialog() {
          return (/* el: Element */ /* boolean */false
          );
        }
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function (evt) {
      if (_this.adapter_.eventTargetHasClass(evt.target, cssClasses.BACKDROP)) {
        _this.cancel(true);
      }
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };

    _this.timerId_ = 0;
    _this.animationTimerEnd_ = function (evt) {
      return _this.handleAnimationTimerEnd_(evt);
    };
    return _this;
  }

  MDCDialogFoundation.prototype.destroy = function destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.close();
    }
    // Final cleanup of animating class in case the timer has not completed.
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
    clearTimeout(this.timerId_);
  };

  MDCDialogFoundation.prototype.open = function open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    clearTimeout(this.timerId_);
    this.timerId_ = setTimeout(this.animationTimerEnd_, MDCDialogFoundation.numbers.DIALOG_ANIMATION_TIME_MS);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.close = function close() {
    this.isOpen_ = false;
    this.enableScroll_();
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    clearTimeout(this.timerId_);
    this.timerId_ = setTimeout(this.animationTimerEnd_, MDCDialogFoundation.numbers.DIALOG_ANIMATION_TIME_MS);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.isOpen = function isOpen() {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.accept = function accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.cancel = function cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.handleDialogClick_ = function handleDialogClick_(evt) {
    var target = evt.target;

    if (this.adapter_.eventTargetHasClass(target, cssClasses.ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, cssClasses.CANCEL_BTN)) {
      this.cancel(true);
    }
  };

  MDCDialogFoundation.prototype.handleAnimationTimerEnd_ = function handleAnimationTimerEnd_() {
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
    if (this.isOpen_) {
      this.adapter_.trapFocusOnSurface();
    }
  };

  MDCDialogFoundation.prototype.disableScroll_ = function disableScroll_() {
    this.adapter_.addBodyClass(cssClasses.SCROLL_LOCK);
  };

  MDCDialogFoundation.prototype.enableScroll_ = function enableScroll_() {
    this.adapter_.removeBodyClass(cssClasses.SCROLL_LOCK);
  };

  return MDCDialogFoundation;
}(base["b" /* MDCFoundation */]);


// EXTERNAL MODULE: ../node_modules/focus-trap/index.js
var focus_trap = __webpack_require__("ySUw");
var focus_trap_default = /*#__PURE__*/__webpack_require__.n(focus_trap);

// CONCATENATED MODULE: ../node_modules/@material/dialog/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : focus_trap_default.a;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
}
// CONCATENATED MODULE: ../node_modules/@material/dialog/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDialog", function() { return dialog_MDCDialog; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() { return foundation_MDCDialogFoundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "util", function() { return util_namespaceObject; });
var dialog__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function dialog__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dialog__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function dialog__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */










var dialog_MDCDialog = function (_MDCComponent) {
  dialog__inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    dialog__classCallCheck(this, MDCDialog);

    return dialog__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCDialog.attachTo = function attachTo(root) {
    return new MDCDialog(root);
  };

  MDCDialog.prototype.initialize = function initialize() {
    this.focusTrap_ = createFocusTrapInstance(this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new ripple["MDCRipple"](footerBtn));
    }
  };

  MDCDialog.prototype.destroy = function destroy() {
    this.footerBtnRipples_.forEach(function (ripple) {
      return ripple.destroy();
    });
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCDialog.prototype.show = function show() {
    this.foundation_.open();
  };

  MDCDialog.prototype.close = function close() {
    this.foundation_.close();
  };

  MDCDialog.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new foundation_MDCDialogFoundation({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target.classList.contains(className);
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        return _this2.root_.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        return _this2.root_.removeEventListener(evt, handler);
      },
      registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
        return _this2.dialogSurface_.addEventListener(evt, handler);
      },
      deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
        return _this2.dialogSurface_.removeEventListener(evt, handler);
      },
      registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
        return document.addEventListener('keydown', handler);
      },
      deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
        return document.removeEventListener('keydown', handler);
      },
      notifyAccept: function notifyAccept() {
        return _this2.emit(foundation_MDCDialogFoundation.strings.ACCEPT_EVENT);
      },
      notifyCancel: function notifyCancel() {
        return _this2.emit(foundation_MDCDialogFoundation.strings.CANCEL_EVENT);
      },
      trapFocusOnSurface: function trapFocusOnSurface() {
        return _this2.focusTrap_.activate();
      },
      untrapFocusOnSurface: function untrapFocusOnSurface() {
        return _this2.focusTrap_.deactivate();
      },
      isDialog: function isDialog(el) {
        return el === _this2.dialogSurface_;
      }
    });
  };

  dialog__createClass(MDCDialog, [{
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(foundation_MDCDialogFoundation.strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(foundation_MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR);
    }
  }]);

  return MDCDialog;
}(base["a" /* MDCComponent */]);

/***/ }),

/***/ "7/cg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = exports.ButtonIcon = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Icon2 = _interopRequireDefault(__webpack_require__("MeGi"));

var _generateThemeClass = _interopRequireDefault(__webpack_require__("QTRl"));

var ButtonIcon =
/*#__PURE__*/
function (_Icon) {
  (0, _inherits2.default)(ButtonIcon, _Icon);

  function ButtonIcon() {
    var _this;

    (0, _classCallCheck2.default)(this, ButtonIcon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonIcon).apply(this, arguments));
    _this.componentName = 'button__icon';
    return _this;
  }

  return ButtonIcon;
}(_Icon2.default);

exports.ButtonIcon = ButtonIcon;

var Button =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Button, _MaterialComponent);

  function Button() {
    var _this2;

    (0, _classCallCheck2.default)(this, Button);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
    _this2.componentName = 'button';
    _this2.mdcProps = ['dense', 'raised', 'unelevated', 'outlined'];
    _this2.themeProps = ['primary', 'secondary'];
    return _this2;
  }

  (0, _createClass2.default)(Button, [{
    key: "materialDom",
    value: function materialDom(props) {
      var ButtonElement = props.href ? 'a' : 'button';
      var className = '';
      this.themeProps.forEach(function (themeProp) {
        if (themeProp in props && props[themeProp] !== false) {
          className += (0, _generateThemeClass.default)(themeProp) + ' ';
        }
      });
      return (0, _preact.h)(ButtonElement, _extends({
        ref: this.setControlRef
      }, props, {
        className: className
      }), this.props.children);
    }
  }]);
  return Button;
}(_MaterialComponent2.default);

exports.Button = Button;

var default_1 =
/*#__PURE__*/
function (_Button) {
  (0, _inherits2.default)(default_1, _Button);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Button);

exports.default = default_1;
default_1.Icon = ButtonIcon;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "8Efz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ../node_modules/@material/animation/index.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string,
 *   styleProperty: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}


// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/selection-control/index.js
var selection_control = __webpack_require__("BYeg");

// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/checkbox/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */

var MDCCheckboxAdapter = function () {
  function MDCCheckboxAdapter() {
    _classCallCheck(this, MDCCheckboxAdapter);
  }

  /** @param {string} className */
  MDCCheckboxAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCCheckboxAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Sets an attribute with a given value on the input element.
   * @param {string} attr
   * @param {string} value
   */


  MDCCheckboxAdapter.prototype.setNativeControlAttr = function setNativeControlAttr(attr, value) {};

  /**
   * Removes an attribute from the input element.
   * @param {string} attr
   */


  MDCCheckboxAdapter.prototype.removeNativeControlAttr = function removeNativeControlAttr(attr) {};

  /** @return {!MDCSelectionControlState} */


  MDCCheckboxAdapter.prototype.getNativeControl = function getNativeControl() {};

  MDCCheckboxAdapter.prototype.forceLayout = function forceLayout() {};

  /** @return {boolean} */


  MDCCheckboxAdapter.prototype.isAttachedToDOM = function isAttachedToDOM() {};

  return MDCCheckboxAdapter;
}();

/* harmony default export */ var checkbox_adapter = (MDCCheckboxAdapter);
// CONCATENATED MODULE: ../node_modules/@material/checkbox/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @const {string} */
var ROOT = 'mdc-checkbox';

/** @enum {string} */
var cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
};

/** @enum {number} */
var numbers = {
  ANIM_END_LATCH_MS: 250
};


// CONCATENATED MODULE: ../node_modules/@material/checkbox/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */


/** @const {!Array<string>} */
var CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

var foundation_MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }

    /** @return {!MDCCheckboxAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCCheckboxAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setNativeControlAttr: function setNativeControlAttr() /* attr: string, value: string */{},
          removeNativeControlAttr: function removeNativeControlAttr() /* attr: string */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{},
          forceLayout: function forceLayout() {},
          isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
        }
      );
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    foundation__classCallCheck(this, MDCCheckboxFoundation);

    /** @private {string} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = strings.TRANSITION_STATE_INIT;

    /** @private {string} */
    _this.currentAnimationClass_ = '';

    /** @private {number} */
    _this.animEndLatchTimer_ = 0;

    /** @private {boolean} */
    _this.enableAnimationEndHandler_ = false;
    return _this;
  }

  /** @override */


  MDCCheckboxFoundation.prototype.init = function init() {
    this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
    this.updateAriaChecked_();
    this.adapter_.addClass(cssClasses.UPGRADED);
    this.installPropertyChangeHooks_();
  };

  /** @override */


  MDCCheckboxFoundation.prototype.destroy = function destroy() {
    this.uninstallPropertyChangeHooks_();
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isChecked = function isChecked() {
    return this.getNativeControl_().checked;
  };

  /** @param {boolean} checked */


  MDCCheckboxFoundation.prototype.setChecked = function setChecked(checked) {
    this.getNativeControl_().checked = checked;
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isIndeterminate = function isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  };

  /** @param {boolean} indeterminate */


  MDCCheckboxFoundation.prototype.setIndeterminate = function setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeControl_().disabled;
  };

  /** @param {boolean} disabled */


  MDCCheckboxFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(cssClasses.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses.DISABLED);
    }
  };

  /** @return {?string} */


  MDCCheckboxFoundation.prototype.getValue = function getValue() {
    return this.getNativeControl_().value;
  };

  /** @param {?string} value */


  MDCCheckboxFoundation.prototype.setValue = function setValue(value) {
    this.getNativeControl_().value = value;
  };

  /**
   * Handles the animationend event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleAnimationEnd = function handleAnimationEnd() {
    var _this2 = this;

    if (!this.enableAnimationEndHandler_) return;

    clearTimeout(this.animEndLatchTimer_);

    this.animEndLatchTimer_ = setTimeout(function () {
      _this2.adapter_.removeClass(_this2.currentAnimationClass_);
      _this2.enableAnimationEndHandler_ = false;
    }, numbers.ANIM_END_LATCH_MS);
  };

  /**
   * Handles the change event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleChange = function handleChange() {
    this.transitionCheckState_();
  };

  /** @private */


  MDCCheckboxFoundation.prototype.installPropertyChangeHooks_ = function installPropertyChangeHooks_() {
    var _this3 = this;

    var nativeCb = this.getNativeControl_();
    var cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
          get: desc.get,
          set: function set(state) {
            desc.set.call(nativeCb, state);
            _this3.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable
        };
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  };

  /** @private */


  MDCCheckboxFoundation.prototype.uninstallPropertyChangeHooks_ = function uninstallPropertyChangeHooks_() {
    var nativeCb = this.getNativeControl_();
    var cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  };

  /** @private */


  MDCCheckboxFoundation.prototype.transitionCheckState_ = function transitionCheckState_() {
    var nativeCb = this.adapter_.getNativeControl();
    if (!nativeCb) {
      return;
    }
    var oldState = this.currentCheckState_;
    var newState = this.determineCheckState_(nativeCb);
    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_();

    // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.
    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState;

    // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.
    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = true;
    }
  };

  /**
   * @param {!MDCSelectionControlState} nativeCb
   * @return {string}
   * @private
   */


  MDCCheckboxFoundation.prototype.determineCheckState_ = function determineCheckState_(nativeCb) {
    var TRANSITION_STATE_INDETERMINATE = strings.TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;


    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */


  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function getTransitionAnimationClass_(oldState, newState) {
    var TRANSITION_STATE_INIT = strings.TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
    var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
        ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
        ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
        ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
        ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
        ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
        ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }
      // fallthrough
      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      // TRANSITION_STATE_INDETERMINATE
      default:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };

  MDCCheckboxFoundation.prototype.updateAriaChecked_ = function updateAriaChecked_() {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(strings.ARIA_CHECKED_ATTR, strings.ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      // The on/off state does not need to keep track of aria-checked, since
      // the screenreader uses the checked property on the checkbox element.
      this.adapter_.removeNativeControlAttr(strings.ARIA_CHECKED_ATTR);
    }
  };

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */


  MDCCheckboxFoundation.prototype.getNativeControl_ = function getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null
    };
  };

  return MDCCheckboxFoundation;
}(base_foundation["a" /* default */]);

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */


function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/* harmony default export */ var checkbox_foundation = (foundation_MDCCheckboxFoundation);
// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
var util = __webpack_require__("joOv");

// CONCATENATED MODULE: ../node_modules/@material/checkbox/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return checkbox_MDCCheckbox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return checkbox_foundation; });
var checkbox__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var checkbox__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function checkbox__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function checkbox__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function checkbox__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */




/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */

var checkbox_MDCCheckbox = function (_MDCComponent) {
  checkbox__inherits(MDCCheckbox, _MDCComponent);

  MDCCheckbox.attachTo = function attachTo(root) {
    return new MDCCheckbox(root);
  };

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */


  checkbox__createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = checkbox_foundation.strings.NATIVE_CONTROL_SELECTOR;

      var cbEl = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return cbEl;
    }
  }]);

  function MDCCheckbox() {
    checkbox__classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = checkbox__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    /** @private {!Function} */
    _this.handleChange_;
    /** @private {!Function} */
    _this.handleAnimationEnd_;
    return _this;
  }

  MDCCheckbox.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var _this2 = this;

    this.handleChange_ = function () {
      return _this2.foundation_.handleChange();
    };
    this.handleAnimationEnd_ = function () {
      return _this2.foundation_.handleAnimationEnd();
    };
    this.nativeCb_.addEventListener('change', this.handleChange_);
    this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
  };

  /**
   * @return {!MDCRipple}
   * @private
   */


  MDCCheckbox.prototype.initRipple_ = function initRipple_() {
    var _this3 = this;

    var MATCHES = Object(util["getMatchesProperty"])(HTMLElement.prototype);
    var adapter = checkbox__extends(ripple["MDCRipple"].createAdapter(this), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return _this3.nativeCb_[MATCHES](':active');
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this3.nativeCb_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this3.nativeCb_.removeEventListener(type, handler);
      }
    });
    var foundation = new ripple["MDCRippleFoundation"](adapter);
    return new ripple["MDCRipple"](this.root_, foundation);
  };

  /** @return {!MDCCheckboxFoundation} */


  MDCCheckbox.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this4 = this;

    return new checkbox_foundation({
      addClass: function addClass(className) {
        return _this4.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this4.root_.classList.remove(className);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        return _this4.nativeCb_.setAttribute(attr, value);
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        return _this4.nativeCb_.removeAttribute(attr);
      },
      getNativeControl: function getNativeControl() {
        return _this4.nativeCb_;
      },
      forceLayout: function forceLayout() {
        return _this4.root_.offsetWidth;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return Boolean(_this4.root_.parentNode);
      }
    });
  };

  /** @return {!MDCRipple} */


  MDCCheckbox.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    this.nativeCb_.removeEventListener('change', this.handleChange_);
    this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
    _MDCComponent.prototype.destroy.call(this);
  };

  checkbox__createClass(MDCCheckbox, [{
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    }

    /** @param {boolean} indeterminate */
    ,
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(component["a" /* default */]);



/***/ }),

/***/ "9v1x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Select = exports.SelectOption = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _typeof2 = _interopRequireDefault(__webpack_require__("b9XL"));

var _select = __webpack_require__("C4gN");

var _bindDecorator = __webpack_require__("gKs0");

var _preact = __webpack_require__("KM04");

var _MaterialComponent3 = _interopRequireDefault(__webpack_require__("uc5p"));

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var SelectOption =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(SelectOption, _MaterialComponent);

  function SelectOption() {
    var _this;

    (0, _classCallCheck2.default)(this, SelectOption);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectOption).apply(this, arguments));
    _this.componentName = 'select-item';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(SelectOption, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("option", _extends({}, props), props.children);
    }
  }]);
  return SelectOption;
}(_MaterialComponent3.default);

exports.SelectOption = SelectOption;

var Select =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(Select, _MaterialComponent2);

  function Select() {
    var _this2;

    (0, _classCallCheck2.default)(this, Select);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Select).apply(this, arguments));
    _this2.componentName = 'select';
    _this2.mdcProps = ['disabled', 'box', 'outlined'];
    return _this2;
  }

  (0, _createClass2.default)(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Select.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _select.MDCSelect(this.control);
        this.MDComponent.listen('MDCSelect:change', this.onChanged);
      }

      this.updateSelection();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Select.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.unlisten('MDCSelect:change', this.onChanged);
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateSelection();
    }
  }, {
    key: "onChanged",
    value: function onChanged(e) {
      if (this.MDComponent) {
        e = e || {};
        e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;

        if (this.props.onChange) {
          this.props.onChange(e);
        }
      }
    }
  }, {
    key: "updateSelection",
    value: function updateSelection() {
      if (this.MDComponent) {
        if (this.props.selectedIndex) {
          this.MDComponent.selectedIndex = typeof this.props.selectedIndex === 'number' ? this.props.selectedIndex : 0;
        }

        var selectedIndex = this.MDComponent.selectedIndex;

        if (selectedIndex === 0) {
          if (this.labelRef) {
            this.labelRef.classList.remove('mdc-floating-label--float-above');
          }
        } else {
          if (this.labelRef) {
            this.labelRef.classList.add('mdc-floating-label--float-above');
          }
        }
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var _this3 = this;

      var outlined = allprops.outlined,
          n = allprops.name,
          props = __rest(allprops, ["outlined", "name"]); // noinspection RequiredAttributes


      return (0, _preact.h)("div", _extends({
        ref: this.setControlRef
      }, props), (0, _preact.h)("select", {
        class: "mdc-select__native-control",
        name: n
      }, props.hintText && (0, _preact.h)("option", {
        value: "",
        disabled: true,
        selected: true
      }), props.children), props.hintText && (0, _preact.h)("div", {
        class: "mdc-floating-label",
        ref: function ref(_ref) {
          _this3.labelRef = _ref;
        }
      }, props.hintText), !outlined && (0, _preact.h)("div", {
        class: "mdc-line-ripple"
      }), outlined && (0, _preact.h)("div", {
        class: "mdc-notched-outline"
      }, (0, _preact.h)("svg", null, (0, _preact.h)("path", {
        class: "mdc-notched-outline__path"
      }))), outlined && (0, _preact.h)("div", {
        class: "mdc-notched-outline__idle"
      }));
    }
  }]);
  return Select;
}(_MaterialComponent3.default);

exports.Select = Select;

__decorate([_bindDecorator.bind], Select.prototype, "onChanged", null);

var default_1 =
/*#__PURE__*/
function (_Select) {
  (0, _inherits2.default)(default_1, _Select);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Select);

exports.default = default_1;
default_1.Item = SelectOption;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "AkAO":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "BYeg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCSelectionControlState */
/* unused harmony export MDCSelectionControl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ripple_index__ = __webpack_require__("vkNc");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @typedef {{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var MDCSelectionControlState = void 0;

/**
 * @record
 */

var MDCSelectionControl = function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: 'ripple',

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();



/***/ }),

/***/ "C4gN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/index.js
var base = __webpack_require__("dSNL");

// EXTERNAL MODULE: ../node_modules/@material/floating-label/index.js + 3 modules
var floating_label = __webpack_require__("RbN6");

// EXTERNAL MODULE: ../node_modules/@material/line-ripple/index.js + 3 modules
var line_ripple = __webpack_require__("WNaY");

// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// EXTERNAL MODULE: ../node_modules/@material/notched-outline/index.js + 3 modules
var notched_outline = __webpack_require__("F55s");

// CONCATENATED MODULE: ../node_modules/@material/select/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Select. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */

var MDCSelectAdapter = function () {
  function MDCSelectAdapter() {
    _classCallCheck(this, MDCSelectAdapter);
  }

  /**
   * Adds class to root element.
   * @param {string} className
   */
  MDCSelectAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root element.
   * @param {string} className
   */


  MDCSelectAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */


  MDCSelectAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Activates the bottom line, showing a focused state.
   */


  MDCSelectAdapter.prototype.activateBottomLine = function activateBottomLine() {};

  /**
   * Deactivates the bottom line.
   */


  MDCSelectAdapter.prototype.deactivateBottomLine = function deactivateBottomLine() {};

  /**
   * Returns the selected value of the select element.
   * @return {string}
   */


  MDCSelectAdapter.prototype.getValue = function getValue() {};

  /**
   * Returns true if the direction of the root element is set to RTL.
   * @return {boolean}
   */


  MDCSelectAdapter.prototype.isRtl = function isRtl() {};

  /**
   * Returns true if label element exists, false if it doesn't.
   * @return {boolean}
   */


  MDCSelectAdapter.prototype.hasLabel = function hasLabel() {};

  /**
   * Floats label determined based off of the shouldFloat argument.
   * @param {boolean} shouldFloat
   */


  MDCSelectAdapter.prototype.floatLabel = function floatLabel(shouldFloat) {};

  /**
   * Returns width of label in pixels, if the label exists.
   * @return {number}
   */


  MDCSelectAdapter.prototype.getLabelWidth = function getLabelWidth() {};

  /**
   * Returns true if outline element exists, false if it doesn't.
   * @return {boolean}
   */


  MDCSelectAdapter.prototype.hasOutline = function hasOutline() {};

  /**
   * Updates SVG Path and outline element based on the
   * label element width and RTL context, if the outline exists.
   * @param {number} labelWidth
   * @param {boolean=} isRtl
   */


  MDCSelectAdapter.prototype.notchOutline = function notchOutline(labelWidth, isRtl) {};

  /**
   * Closes notch in outline element, if the outline exists.
   */


  MDCSelectAdapter.prototype.closeOutline = function closeOutline() {};

  return MDCSelectAdapter;
}();

/* harmony default export */ var select_adapter = (MDCSelectAdapter);
// CONCATENATED MODULE: ../node_modules/@material/select/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  BOX: 'mdc-select--box',
  DISABLED: 'mdc-select--disabled',
  ROOT: 'mdc-select',
  OUTLINED: 'mdc-select--outlined'
};

/** @enum {string} */
var strings = {
  CHANGE_EVENT: 'MDCSelect:change',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  LABEL_SELECTOR: '.mdc-floating-label',
  NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
  OUTLINE_SELECTOR: '.mdc-notched-outline'
};

/** @enum {number} */
var numbers = {
  LABEL_SCALE: 0.75
};


// CONCATENATED MODULE: ../node_modules/@material/select/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCSelectAdapter>}
 * @final
 */

var foundation_MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return cssClasses;
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }

    /**
     * {@see MDCSelectAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCSelectAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSelectAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          hasClass: function hasClass() {
            return (/* className: string */false
            );
          },
          activateBottomLine: function activateBottomLine() {},
          deactivateBottomLine: function deactivateBottomLine() {},
          getValue: function getValue() {},
          isRtl: function isRtl() {
            return false;
          },
          hasLabel: function hasLabel() {
            return false;
          },
          floatLabel: function floatLabel() /* value: boolean */{},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {
            return false;
          },
          notchOutline: function notchOutline() /* labelWidth: number, isRtl: boolean */{},
          closeOutline: function closeOutline() {}
        }
      );
    }

    /**
     * @param {!MDCSelectAdapter} adapter
     */

  }]);

  function MDCSelectFoundation(adapter) {
    foundation__classCallCheck(this, MDCSelectFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));
  }

  /**
   * Updates the styles of the select to show the disasbled state.
   * @param {boolean} disabled
   */


  MDCSelectFoundation.prototype.updateDisabledStyle = function updateDisabledStyle(disabled) {
    var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  };

  /**
   * Handles value changes, via change event or programmatic updates.
   */


  MDCSelectFoundation.prototype.handleChange = function handleChange() {
    var optionHasValue = this.adapter_.getValue().length > 0;
    this.adapter_.floatLabel(optionHasValue);
    this.notchOutline(optionHasValue);
  };

  /**
   * Handles focus events from root element.
   */


  MDCSelectFoundation.prototype.handleFocus = function handleFocus() {
    this.adapter_.floatLabel(true);
    this.notchOutline(true);
    this.adapter_.activateBottomLine();
  };

  /**
   * Handles blur events from root element.
   */


  MDCSelectFoundation.prototype.handleBlur = function handleBlur() {
    this.handleChange();
    this.adapter_.deactivateBottomLine();
  };

  /**
   * Opens/closes the notched outline.
   * @param {boolean} openNotch
   */


  MDCSelectFoundation.prototype.notchOutline = function notchOutline(openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var labelScale = numbers.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      var isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  };

  return MDCSelectFoundation;
}(base["b" /* MDCFoundation */]);

/* harmony default export */ var select_foundation = (foundation_MDCSelectFoundation);
// CONCATENATED MODULE: ../node_modules/@material/select/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSelect", function() { return select_MDCSelect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() { return select_foundation; });
var select__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var select__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function select__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function select__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function select__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */











/**
 * @extends MDCComponent<!MDCSelectFoundation>
 */

var select_MDCSelect = function (_MDCComponent) {
  select__inherits(MDCSelect, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCSelect() {
    select__classCallCheck(this, MDCSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = select__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.nativeControl_;
    /** @type {?MDCRipple} */
    _this.ripple;
    /** @private {?MDCLineRipple} */
    _this.lineRipple_;
    /** @private {?MDCFloatingLabel} */
    _this.label_;
    /** @private {?MDCNotchedOutline} */
    _this.outline_;
    /** @private {!Function} */
    _this.handleChange_;
    /** @private {!Function} */
    _this.handleFocus_;
    /** @private {!Function} */
    _this.handleBlur_;
    /** @private {!Function} */
    _this.handleClick_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCSelect}
   */


  MDCSelect.attachTo = function attachTo(root) {
    return new MDCSelect(root);
  };

  /**
   * @return {string} The value of the select.
   */


  /**
   * Recomputes the outline SVG path for the outline element.
   */
  MDCSelect.prototype.layout = function layout() {
    var openNotch = this.nativeControl_.value.length > 0;
    this.foundation_.notchOutline(openNotch);
  };

  /**
   * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which creates a new MDCLineRipple.
   * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which creates a new MDCFloatingLabel.
   * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which creates a new MDCNotchedOutline.
   */


  MDCSelect.prototype.initialize = function initialize() {
    var labelFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new floating_label["a" /* MDCFloatingLabel */](el);
    };
    var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
      return new line_ripple["a" /* MDCLineRipple */](el);
    };
    var outlineFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
      return new notched_outline["a" /* MDCNotchedOutline */](el);
    };

    this.nativeControl_ = this.root_.querySelector(strings.NATIVE_CONTROL_SELECTOR);
    var labelElement = this.root_.querySelector(strings.LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    var lineRippleElement = this.root_.querySelector(strings.LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    var outlineElement = this.root_.querySelector(strings.OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }

    if (this.root_.classList.contains(cssClasses.BOX)) {
      this.ripple = this.initRipple_();
    }
  };

  /**
   * @private
   * @return {!MDCRipple}
   */


  MDCSelect.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var adapter = select__extends(ripple["MDCRipple"].createAdapter(this), {
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this2.nativeControl_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this2.nativeControl_.removeEventListener(type, handler);
      }
    });
    var foundation = new ripple["MDCRippleFoundation"](adapter);
    return new ripple["MDCRipple"](this.root_, foundation);
  };

  /**
   * Initializes the select's event listeners and internal state based
   * on the environment's state.
   */


  MDCSelect.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var _this3 = this;

    this.handleChange_ = function () {
      return _this3.foundation_.handleChange();
    };
    this.handleFocus_ = function () {
      return _this3.foundation_.handleFocus();
    };
    this.handleBlur_ = function () {
      return _this3.foundation_.handleBlur();
    };
    this.handleClick_ = function (evt) {
      return _this3.setTransformOrigin_(evt);
    };

    this.nativeControl_.addEventListener('change', this.handleChange_);
    this.nativeControl_.addEventListener('focus', this.handleFocus_);
    this.nativeControl_.addEventListener('blur', this.handleBlur_);

    if (this.lineRipple_) {
      ['mousedown', 'touchstart'].forEach(function (evtType) {
        _this3.nativeControl_.addEventListener(evtType, _this3.handleClick_);
      });
    }

    // Initially sync floating label
    this.foundation_.handleChange();

    if (this.nativeControl_.disabled) {
      this.disabled = true;
    }
  };

  MDCSelect.prototype.destroy = function destroy() {
    var _this4 = this;

    this.nativeControl_.removeEventListener('change', this.handleChange_);
    this.nativeControl_.removeEventListener('focus', this.handleFocus_);
    this.nativeControl_.removeEventListener('blur', this.handleBlur_);
    ['mousedown', 'touchstart'].forEach(function (evtType) {
      _this4.nativeControl_.removeEventListener(evtType, _this4.handleClick_);
    });

    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.outline_) {
      this.outline_.destroy();
    }

    _MDCComponent.prototype.destroy.call(this);
  };

  /**
   * @return {!MDCSelectFoundation}
   */


  MDCSelect.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this5 = this;

    return new select_foundation(
    /** @type {!MDCSelectAdapter} */select__extends({
      addClass: function addClass(className) {
        return _this5.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this5.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this5.root_.classList.contains(className);
      },
      getValue: function getValue() {
        return _this5.nativeControl_.value;
      },
      isRtl: function isRtl() {
        return window.getComputedStyle(_this5.root_).getPropertyValue('direction') === 'rtl';
      },
      activateBottomLine: function activateBottomLine() {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.activate();
        }
      },
      deactivateBottomLine: function deactivateBottomLine() {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.deactivate();
        }
      }
    }, this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_()));
  };

  /**
   * @return {!{
   *   hasOutline: function(): boolean,
   *   notchOutline: function(number, boolean): undefined,
   *   closeOutline: function(): undefined,
   * }}
   */


  MDCSelect.prototype.getOutlineAdapterMethods_ = function getOutlineAdapterMethods_() {
    var _this6 = this;

    return {
      hasOutline: function hasOutline() {
        return !!_this6.outline_;
      },
      notchOutline: function notchOutline(labelWidth, isRtl) {
        if (_this6.outline_) {
          _this6.outline_.notch(labelWidth, isRtl);
        }
      },
      closeOutline: function closeOutline() {
        if (_this6.outline_) {
          _this6.outline_.closeNotch();
        }
      }
    };
  };

  /**
   * @return {!{
   *   hasLabel: function(): boolean,
   *   floatLabel: function(boolean): undefined,
   *   getLabelWidth: function(): number,
   * }}
   */


  MDCSelect.prototype.getLabelAdapterMethods_ = function getLabelAdapterMethods_() {
    var _this7 = this;

    return {
      hasLabel: function hasLabel() {
        return !!_this7.label_;
      },
      floatLabel: function floatLabel(shouldFloat) {
        if (_this7.label_) {
          _this7.label_.float(shouldFloat);
        }
      },
      getLabelWidth: function getLabelWidth() {
        return _this7.label_ ? _this7.label_.getWidth() : 0;
      }
    };
  };

  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   * @param {!(MouseEvent|TouchEvent)} evt
   */


  MDCSelect.prototype.setTransformOrigin_ = function setTransformOrigin_(evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var xCoordinate = evt.clientX;
    var normalizedX = xCoordinate - targetClientRect.left;
    this.lineRipple_.setRippleCenter(normalizedX);
  };

  select__createClass(MDCSelect, [{
    key: 'value',
    get: function get() {
      return this.nativeControl_.value;
    }

    /**
     * @param {string} value The value to set on the select.
     */
    ,
    set: function set(value) {
      this.nativeControl_.value = value;
      this.foundation_.handleChange();
    }

    /**
     * @return {number} The selected index of the select.
     */

  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.nativeControl_.selectedIndex;
    }

    /**
     * @param {number} selectedIndex The index of the option to be set on the select.
     */
    ,
    set: function set(selectedIndex) {
      this.nativeControl_.selectedIndex = selectedIndex;
      this.foundation_.handleChange();
    }

    /**
     * @return {boolean} True if the select is disabled.
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.nativeControl_.disabled;
    }

    /**
     * @param {boolean} disabled Sets the select disabled or enabled.
     */
    ,
    set: function set(disabled) {
      this.nativeControl_.disabled = disabled;
      this.foundation_.updateDisabledStyle(disabled);
    }
  }]);

  return MDCSelect;
}(base["a" /* MDCComponent */]);



/***/ }),

/***/ "Cv2I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextField = exports.TextFieldInput = exports.Label = exports.HelperText = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _textfield = __webpack_require__("VcCu");

var _preact = __webpack_require__("KM04");

var _MaterialComponent4 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Icon = _interopRequireDefault(__webpack_require__("MeGi"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var HelperText =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(HelperText, _MaterialComponent);

  function HelperText() {
    var _this;

    (0, _classCallCheck2.default)(this, HelperText);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HelperText).apply(this, arguments));
    _this.componentName = 'text-field-helper-text';
    _this.mdcProps = ['persistent', 'validation-msg'];
    return _this;
  }

  (0, _createClass2.default)(HelperText, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("p", _extends({}, props, {
        "aria-hidden": "true"
      }), props.children);
    }
  }]);
  return HelperText;
}(_MaterialComponent4.default);

exports.HelperText = HelperText;

var Label =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(Label, _MaterialComponent2);

  function Label() {
    var _this2;

    (0, _classCallCheck2.default)(this, Label);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
    _this2.componentName = 'floating-label';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(Label, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("label", _extends({}, props), props.children);
    }
  }]);
  return Label;
}(_MaterialComponent4.default);

exports.Label = Label;

var TextFieldInput =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(TextFieldInput, _MaterialComponent3);

  function TextFieldInput() {
    var _this3;

    (0, _classCallCheck2.default)(this, TextFieldInput);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextFieldInput).apply(this, arguments));
    _this3.state = {
      jsComponentAttached: false
    };
    _this3.componentName = 'text-field';
    _this3.mdcProps = ['fullwidth', 'textarea', 'dense', 'disabled', 'box', 'outlined'];
    _this3.mdcNotifyProps = ['valid', 'disabled'];
    return _this3;
  }

  (0, _createClass2.default)(TextFieldInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "componentDidMount", this).call(this);
      this.setState({
        jsComponentAttached: true
      }, function () {
        if (_this4.control) {
          _this4.MDComponent = new _textfield.MDCTextField(_this4.control);

          if (_this4.props.onInit) {
            _this4.props.onInit(_this4.MDComponent);
          }

          if (_this4.props.value) {
            _this4.MDComponent.value = _this4.props.value;
          }
        }

        _this4.afterComponentDidMount();
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "componentWillReceiveProps", this).call(this, nextProps);

      if (this.MDComponent && nextProps.value && this.props.value !== nextProps.value && this.MDComponent.value !== nextProps.value) {
        this.MDComponent.value = nextProps.value;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.MDComponent ? this.MDComponent.value : null;
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var className = allprops.className,
          outerStyle = allprops.outerStyle,
          outlined = allprops.outlined,
          props = __rest(allprops, ["className", "outerStyle", "outlined"]);

      className = className || '';

      if ('leadingIcon' in props) {
        className += ' mdc-text-field--box mdc-text-field--with-leading-icon';
      }

      if ('trailingIcon' in props) {
        className += ' mdc-text-field--box mdc-text-field--with-trailing-icon';
      }

      if ('value' in props && this.state.jsComponentAttached) {
        className = [className, 'mdc-text-field--upgraded'].join(' ');
      }

      if (props.label && props.fullwidth) {
        console.log('Passing a "label" prop is not supported when using a "fullwidth" text field.');
      } // noinspection RequiredAttributes


      return (0, _preact.h)("div", {
        className: className,
        ref: this.setControlRef,
        style: outerStyle
      }, props.leadingIcon ? (0, _preact.h)(_Icon.default, {
        className: "mdc-text-field__icon"
      }, props.leadingIcon) : null, props.textarea ? (0, _preact.h)("textarea", _extends({
        className: "mdc-text-field__input"
      }, props)) : (0, _preact.h)("input", _extends({
        type: props.type || 'text',
        className: "mdc-text-field__input",
        placeholder: this.state.jsComponentAttached ? undefined : props.label + this.props.required ? '*' : ''
      }, props)), props.label && this.state.jsComponentAttached && (0, _preact.h)(Label, {
        for: props.id
      }, props.label), props.trailingIcon ? (0, _preact.h)(_Icon.default, {
        className: "mdc-text-field__icon"
      }, props.trailingIcon) : null, props.textarea || outlined ? null : (0, _preact.h)("div", {
        class: "mdc-line-ripple"
      }), outlined ? (0, _preact.h)("div", {
        class: "mdc-notched-outline"
      }, (0, _preact.h)("svg", null, (0, _preact.h)("path", {
        className: "mdc-notched-outline__path"
      }))) : null, outlined ? (0, _preact.h)("div", {
        className: "mdc-notched-outline__idle"
      }) : null);
    }
  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      var cn = (0, _get2.default)((0, _getPrototypeOf2.default)(TextFieldInput.prototype), "buildClassName", this).call(this, props);

      if (this.MDComponent) {
        cn += ' mdc-text-field--upgraded';
      }

      return cn;
    }
  }]);
  return TextFieldInput;
}(_MaterialComponent4.default);

exports.TextFieldInput = TextFieldInput;
TextFieldInput.defaultProps = {
  valid: true
};

var TextField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TextField, _Component);

  function TextField() {
    var _this5;

    (0, _classCallCheck2.default)(this, TextField);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextField).apply(this, arguments));
    _this5.id = TextField.uid();
    return _this5;
  }

  (0, _createClass2.default)(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        jsComponentAttached: true
      });
    }
  }, {
    key: "render",
    value: function render(allprops) {
      var _this6 = this;

      var className = allprops.className,
          outerStyle = allprops.outerStyle,
          helperTextPersistent = allprops.helperTextPersistent,
          helperTextValidationMsg = allprops.helperTextValidationMsg,
          props = __rest(allprops, ["className", "outerStyle", "helperTextPersistent", "helperTextValidationMsg"]);

      var showDiv = props.helperText;

      if ((props.helperText || props.label) && !props.id) {
        props.id = "tf-".concat(this.id);
      } // Helper text


      var helperTextProps = {
        persistent: helperTextPersistent,
        'validation-msg': helperTextValidationMsg
      };
      return showDiv ? (0, _preact.h)("div", {
        className: className,
        style: outerStyle
      }, (0, _preact.h)(TextFieldInput, _extends({}, props, {
        onInit: function onInit(MDComponent) {
          _this6.MDComponent = MDComponent;
        },
        "aria-controls": props.helperText && "".concat(props.id, "-helper-text")
      })), props.helperText && (0, _preact.h)(HelperText, _extends({
        id: "".concat(props.id, "-helper-text")
      }, helperTextProps), props.helperText)) : (0, _preact.h)(TextFieldInput, _extends({}, props, {
        className: className,
        outerStyle: outerStyle,
        onInit: function onInit(MDComponent) {
          _this6.MDComponent = MDComponent;
        }
      }));
    }
  }], [{
    key: "uid",
    value: function uid() {
      return ++this.uidCounter;
    }
  }]);
  return TextField;
}(_preact.Component);

exports.TextField = TextField;
TextField.uidCounter = 0;

var default_1 =
/*#__PURE__*/
function (_TextField) {
  (0, _inherits2.default)(default_1, _TextField);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(TextField);

exports.default = default_1;
default_1.HelperText = HelperText;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "E7HD":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "E7XR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.List = exports.ListGroupHeader = exports.ListGroup = exports.ListSecondaryText = exports.ListPrimaryText = exports.ListTextContainer = exports.ListDivider = exports.ListItemMetaText = exports.ListItemMeta = exports.ListItemGraphic = exports.ListLinkItem = exports.ListItem = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent10 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Icon = _interopRequireDefault(__webpack_require__("MeGi"));

var ListItem =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(ListItem, _MaterialComponent);

  function ListItem() {
    var _this;

    (0, _classCallCheck2.default)(this, ListItem);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItem).apply(this, arguments));
    _this.componentName = 'list-item';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(ListItem, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("li", _extends({
        role: "option"
      }, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return ListItem;
}(_MaterialComponent10.default);

exports.ListItem = ListItem;

var ListLinkItem =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(ListLinkItem, _MaterialComponent2);

  function ListLinkItem() {
    var _this2;

    (0, _classCallCheck2.default)(this, ListLinkItem);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListLinkItem).apply(this, arguments));
    _this2.componentName = 'list-item';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(ListLinkItem, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("a", _extends({
        role: "option"
      }, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return ListLinkItem;
}(_MaterialComponent10.default);

exports.ListLinkItem = ListLinkItem;

var ListItemGraphic =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(ListItemGraphic, _MaterialComponent3);

  function ListItemGraphic() {
    var _this3;

    (0, _classCallCheck2.default)(this, ListItemGraphic);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItemGraphic).apply(this, arguments));
    _this3.componentName = 'list-item__graphic';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(ListItemGraphic, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("span", _extends({}, props, {
        ref: this.setControlRef,
        role: "presentation"
      }), (0, _preact.h)(_Icon.default, {
        "aria-hidden": "true"
      }, props.children));
    }
  }]);
  return ListItemGraphic;
}(_MaterialComponent10.default);

exports.ListItemGraphic = ListItemGraphic;

var ListItemMeta =
/*#__PURE__*/
function (_ListItemGraphic) {
  (0, _inherits2.default)(ListItemMeta, _ListItemGraphic);

  function ListItemMeta() {
    var _this4;

    (0, _classCallCheck2.default)(this, ListItemMeta);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItemMeta).apply(this, arguments));
    _this4.componentName = 'list-item__meta';
    return _this4;
  }

  return ListItemMeta;
}(ListItemGraphic);

exports.ListItemMeta = ListItemMeta;

var ListItemMetaText =
/*#__PURE__*/
function (_MaterialComponent4) {
  (0, _inherits2.default)(ListItemMetaText, _MaterialComponent4);

  function ListItemMetaText() {
    var _this5;

    (0, _classCallCheck2.default)(this, ListItemMetaText);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListItemMetaText).apply(this, arguments));
    _this5.componentName = 'list-item__meta';
    _this5.mdcProps = [];
    return _this5;
  }

  (0, _createClass2.default)(ListItemMetaText, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("span", _extends({}, props, {
        ref: this.setControlRef,
        role: "presentation"
      }), props.children);
    }
  }]);
  return ListItemMetaText;
}(_MaterialComponent10.default);

exports.ListItemMetaText = ListItemMetaText;

var ListDivider =
/*#__PURE__*/
function (_MaterialComponent5) {
  (0, _inherits2.default)(ListDivider, _MaterialComponent5);

  function ListDivider() {
    var _this6;

    (0, _classCallCheck2.default)(this, ListDivider);
    _this6 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListDivider).apply(this, arguments));
    _this6.componentName = 'list-divider';
    _this6.mdcProps = ['inset'];
    return _this6;
  }

  (0, _createClass2.default)(ListDivider, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("li", _extends({
        role: "separator"
      }, props, {
        ref: this.setControlRef
      }));
    }
  }]);
  return ListDivider;
}(_MaterialComponent10.default);

exports.ListDivider = ListDivider;

var ListTextContainer =
/*#__PURE__*/
function (_MaterialComponent6) {
  (0, _inherits2.default)(ListTextContainer, _MaterialComponent6);

  function ListTextContainer() {
    var _this7;

    (0, _classCallCheck2.default)(this, ListTextContainer);
    _this7 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListTextContainer).apply(this, arguments));
    _this7.componentName = 'list-item__text';
    _this7.mdcProps = [];
    return _this7;
  }

  (0, _createClass2.default)(ListTextContainer, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("span", _extends({}, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return ListTextContainer;
}(_MaterialComponent10.default);

exports.ListTextContainer = ListTextContainer;

var ListPrimaryText =
/*#__PURE__*/
function (_ListTextContainer) {
  (0, _inherits2.default)(ListPrimaryText, _ListTextContainer);

  function ListPrimaryText() {
    var _this8;

    (0, _classCallCheck2.default)(this, ListPrimaryText);
    _this8 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListPrimaryText).apply(this, arguments));
    _this8.componentName = 'list-item__primary-text';
    return _this8;
  }

  return ListPrimaryText;
}(ListTextContainer);

exports.ListPrimaryText = ListPrimaryText;

var ListSecondaryText =
/*#__PURE__*/
function (_ListTextContainer2) {
  (0, _inherits2.default)(ListSecondaryText, _ListTextContainer2);

  function ListSecondaryText() {
    var _this9;

    (0, _classCallCheck2.default)(this, ListSecondaryText);
    _this9 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListSecondaryText).apply(this, arguments));
    _this9.componentName = 'list-item__secondary-text';
    return _this9;
  }

  return ListSecondaryText;
}(ListTextContainer);

exports.ListSecondaryText = ListSecondaryText;

var ListGroup =
/*#__PURE__*/
function (_MaterialComponent7) {
  (0, _inherits2.default)(ListGroup, _MaterialComponent7);

  function ListGroup() {
    var _this10;

    (0, _classCallCheck2.default)(this, ListGroup);
    _this10 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListGroup).apply(this, arguments));
    _this10.componentName = 'list-group';
    _this10.mdcProps = [];
    return _this10;
  }

  (0, _createClass2.default)(ListGroup, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return ListGroup;
}(_MaterialComponent10.default);

exports.ListGroup = ListGroup;

var ListGroupHeader =
/*#__PURE__*/
function (_MaterialComponent8) {
  (0, _inherits2.default)(ListGroupHeader, _MaterialComponent8);

  function ListGroupHeader() {
    var _this11;

    (0, _classCallCheck2.default)(this, ListGroupHeader);
    _this11 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListGroupHeader).apply(this, arguments));
    _this11.componentName = 'list-group__subheader';
    _this11.mdcProps = [];
    return _this11;
  }

  (0, _createClass2.default)(ListGroupHeader, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("h3", _extends({}, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return ListGroupHeader;
}(_MaterialComponent10.default);

exports.ListGroupHeader = ListGroupHeader;

var List =
/*#__PURE__*/
function (_MaterialComponent9) {
  (0, _inherits2.default)(List, _MaterialComponent9);

  function List() {
    var _this12;

    (0, _classCallCheck2.default)(this, List);
    _this12 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(List).apply(this, arguments));
    _this12.componentName = 'list';
    _this12.mdcProps = ['dense', 'two-line', 'avatar-list'];
    return _this12;
  }

  (0, _createClass2.default)(List, [{
    key: "materialDom",
    value: function materialDom(props) {
      if (props.interactive) {
        return (0, _preact.h)("nav", _extends({
          ref: this.setControlRef
        }, props), props.children);
      }

      return (0, _preact.h)("ul", _extends({}, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return List;
}(_MaterialComponent10.default);

exports.List = List;

var default_1 =
/*#__PURE__*/
function (_List) {
  (0, _inherits2.default)(default_1, _List);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(List);

exports.default = default_1;
default_1.Item = ListItem;
default_1.LinkItem = ListLinkItem;
default_1.ItemGraphic = ListItemGraphic;
default_1.ItemMeta = ListItemMeta;
default_1.ItemMetaText = ListItemMetaText;
default_1.Divider = ListDivider;
default_1.TextContainer = ListTextContainer;
default_1.PrimaryText = ListPrimaryText;
default_1.SecondaryText = ListSecondaryText;
default_1.Group = ListGroup;
default_1.GroupHeader = ListGroupHeader;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "EQDb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("uJAj");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @template F
 */

var MDCComponent = function () {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  MDCComponent.attachTo = function attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  };

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */


  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.prototype.initialize = function initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  ;

  MDCComponent.prototype.getDefaultFoundation = function getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.listen = function listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  };

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.unlisten = function unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  };

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */


  MDCComponent.prototype.emit = function emit(evtType, evtData) {
    var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var evt = void 0;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),

/***/ "EyEO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var util_namespaceObject = {};
__webpack_require__.d(util_namespaceObject, "createFocusTrapInstance", function() { return createFocusTrapInstance; });

// EXTERNAL MODULE: ../node_modules/@material/base/index.js
var base = __webpack_require__("dSNL");

// CONCATENATED MODULE: ../node_modules/@material/drawer/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Drawer
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Drawer into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCDrawerAdapter = function () {
  function MDCDrawerAdapter() {
    _classCallCheck(this, MDCDrawerAdapter);
  }

  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  MDCDrawerAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */


  MDCDrawerAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns true if the root Element contains the given class.
   * @param {string} className
   * @return {boolean}
   */


  MDCDrawerAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * @param {!Element} element target element to verify class name
   * @param {string} className class name
   */


  MDCDrawerAdapter.prototype.elementHasClass = function elementHasClass(element, className) {};

  /** @return {!ClientRect} */


  MDCDrawerAdapter.prototype.computeBoundingRect = function computeBoundingRect() {};

  /**
   * Saves the focus of currently active element.
   */


  MDCDrawerAdapter.prototype.saveFocus = function saveFocus() {};

  /**
   * Restores focus to element previously saved with 'saveFocus'.
   */


  MDCDrawerAdapter.prototype.restoreFocus = function restoreFocus() {};

  /**
   * Focuses the active / selected navigation item.
   */


  MDCDrawerAdapter.prototype.focusActiveNavigationItem = function focusActiveNavigationItem() {};

  /**
   * Emits a custom event "MDCDrawer:closed" denoting the drawer has closed.
   */


  MDCDrawerAdapter.prototype.notifyClose = function notifyClose() {};

  /**
   * Emits a custom event "MDCDrawer:opened" denoting the drawer has opened.
   */


  MDCDrawerAdapter.prototype.notifyOpen = function notifyOpen() {};

  /**
   * Traps focus on root element and focuses the active navigation element.
   */


  MDCDrawerAdapter.prototype.trapFocus = function trapFocus() {};

  /**
   * Releases focus trap from root element which was set by `trapFocus`
   * and restores focus to where it was prior to calling `trapFocus`.
   */


  MDCDrawerAdapter.prototype.releaseFocus = function releaseFocus() {};

  return MDCDrawerAdapter;
}();

/* harmony default export */ var drawer_adapter = (MDCDrawerAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/drawer/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-drawer',
  DISMISSIBLE: 'mdc-drawer--dismissible',
  MODAL: 'mdc-drawer--modal',
  OPEN: 'mdc-drawer--open',
  ANIMATE: 'mdc-drawer--animate',
  OPENING: 'mdc-drawer--opening',
  CLOSING: 'mdc-drawer--closing'
};

/** @enum {string} */
var strings = {
  APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
  SCRIM_SELECTOR: '.mdc-drawer-scrim',
  CLOSE_EVENT: 'MDCDrawer:closed',
  OPEN_EVENT: 'MDCDrawer:opened'
};


// CONCATENATED MODULE: ../node_modules/@material/drawer/dismissible/foundation.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCDrawerAdapter>}
 */

var foundation_MDCDismissibleDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCDismissibleDrawerFoundation, _MDCFoundation);

  function MDCDismissibleDrawerFoundation() {
    foundation__classCallCheck(this, MDCDismissibleDrawerFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.apply(this, arguments));
  }

  /**
   * Function to open the drawer.
   */
  MDCDismissibleDrawerFoundation.prototype.open = function open() {
    if (this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter_.addClass(cssClasses.OPEN);
    this.adapter_.addClass(cssClasses.ANIMATE);
    this.adapter_.computeBoundingRect(); // Force reflow.
    this.adapter_.addClass(cssClasses.OPENING);

    this.adapter_.saveFocus();
  };

  /**
   * Function to close the drawer.
   */


  MDCDismissibleDrawerFoundation.prototype.close = function close() {
    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
      return;
    }

    this.adapter_.addClass(cssClasses.CLOSING);
  };

  /**
   * Extension point for when drawer finishes open animation.
   * @protected
   */


  MDCDismissibleDrawerFoundation.prototype.opened = function opened() {};

  /**
   * Extension point for when drawer finishes close animation.
   * @protected
   */


  MDCDismissibleDrawerFoundation.prototype.closed = function closed() {};

  /**
   * Returns true if drawer is in open state.
   * @return {boolean}
   */


  MDCDismissibleDrawerFoundation.prototype.isOpen = function isOpen() {
    return this.adapter_.hasClass(cssClasses.OPEN);
  };

  /**
   * Returns true if drawer is animating open.
   * @return {boolean}
   */


  MDCDismissibleDrawerFoundation.prototype.isOpening = function isOpening() {
    return this.adapter_.hasClass(cssClasses.OPENING);
  };

  /**
   * Returns true if drawer is animating closed.
   * @return {boolean}
   */


  MDCDismissibleDrawerFoundation.prototype.isClosing = function isClosing() {
    return this.adapter_.hasClass(cssClasses.CLOSING);
  };

  /**
   * Keydown handler to close drawer when key is escape.
   * @param evt
   */


  MDCDismissibleDrawerFoundation.prototype.handleKeydown = function handleKeydown(evt) {
    var keyCode = evt.keyCode,
        key = evt.key;


    var isEscape = key === 'Escape' || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };

  /**
   * Handles a transition end event on the root element.
   * @param {!Event} evt
   */


  MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function handleTransitionEnd(evt) {
    var OPENING = cssClasses.OPENING,
        CLOSING = cssClasses.CLOSING,
        OPEN = cssClasses.OPEN,
        ANIMATE = cssClasses.ANIMATE,
        ROOT = cssClasses.ROOT;

    // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

    var isElement = evt.target instanceof Element;
    if (!isElement || !this.adapter_.elementHasClass( /** @type {!Element} */evt.target, ROOT)) {
      return;
    }

    if (this.isClosing()) {
      this.adapter_.removeClass(OPEN);
      this.adapter_.restoreFocus();
      this.closed();
      this.adapter_.notifyClose();
    } else {
      this.adapter_.focusActiveNavigationItem();
      this.opened();
      this.adapter_.notifyOpen();
    }

    this.adapter_.removeClass(ANIMATE);
    this.adapter_.removeClass(OPENING);
    this.adapter_.removeClass(CLOSING);
  };

  _createClass(MDCDismissibleDrawerFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCDrawerAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          hasClass: function hasClass() /* className: string */{},
          elementHasClass: function elementHasClass() /* element: !Element, className: string */{},
          computeBoundingRect: function computeBoundingRect() {},
          notifyClose: function notifyClose() {},
          notifyOpen: function notifyOpen() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          focusActiveNavigationItem: function focusActiveNavigationItem() {},
          trapFocus: function trapFocus() {},
          releaseFocus: function releaseFocus() {}
        }
      );
    }
  }]);

  return MDCDismissibleDrawerFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var dismissible_foundation = (foundation_MDCDismissibleDrawerFoundation);
// CONCATENATED MODULE: ../node_modules/@material/drawer/modal/foundation.js
function modal_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/**
 * @extends {MDCDismissibleDrawerFoundation<!MDCDrawerAdapter>}
 */

var MDCModalDrawerFoundation = function (_MDCDismissibleDrawer) {
  foundation__inherits(MDCModalDrawerFoundation, _MDCDismissibleDrawer);

  function MDCModalDrawerFoundation() {
    modal_foundation__classCallCheck(this, MDCModalDrawerFoundation);

    return foundation__possibleConstructorReturn(this, _MDCDismissibleDrawer.apply(this, arguments));
  }

  /**
   * Called when drawer finishes open animation.
   * @override
   */
  MDCModalDrawerFoundation.prototype.opened = function opened() {
    this.adapter_.trapFocus();
  };

  /**
   * Called when drawer finishes close animation.
   * @override
   */


  MDCModalDrawerFoundation.prototype.closed = function closed() {
    this.adapter_.releaseFocus();
  };

  /**
   * Handles click event on scrim.
   */


  MDCModalDrawerFoundation.prototype.handleScrimClick = function handleScrimClick() {
    this.close();
  };

  return MDCModalDrawerFoundation;
}(dismissible_foundation);

/* harmony default export */ var modal_foundation = (MDCModalDrawerFoundation);
// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// CONCATENATED MODULE: ../node_modules/@material/list/adapter.js
function adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC List. Provides an interface for managing focus.
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCListAdapter = function () {
  function MDCListAdapter() {
    adapter__classCallCheck(this, MDCListAdapter);
  }

  /** @return {number} */
  MDCListAdapter.prototype.getListItemCount = function getListItemCount() {};

  /**
   * @return {number} */


  MDCListAdapter.prototype.getFocusedElementIndex = function getFocusedElementIndex() {};

  /**
   * @param {number} index
   * @param {string} attribute
   * @param {string} value
   */


  MDCListAdapter.prototype.setAttributeForElementIndex = function setAttributeForElementIndex(index, attribute, value) {};

  /**
   * @param {number} index
   * @param {string} attribute
   */


  MDCListAdapter.prototype.removeAttributeForElementIndex = function removeAttributeForElementIndex(index, attribute) {};

  /**
   * @param {number} index
   * @param {string} className
   */


  MDCListAdapter.prototype.addClassForElementIndex = function addClassForElementIndex(index, className) {};

  /**
   * @param {number} index
   * @param {string} className
   */


  MDCListAdapter.prototype.removeClassForElementIndex = function removeClassForElementIndex(index, className) {};

  /**
   * Focuses list item at the index specified.
   * @param {number} index
   */


  MDCListAdapter.prototype.focusItemAtIndex = function focusItemAtIndex(index) {};

  /**
   * Sets the tabindex to the value specified for all button/a element children of
   * the list item at the index specified.
   * @param {number} listItemIndex
   * @param {number} tabIndexValue
   */


  MDCListAdapter.prototype.setTabIndexForListItemChildren = function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {};

  /**
   * If the given element has an href, follows the link.
   * @param {!Element} ele
   */


  MDCListAdapter.prototype.followHref = function followHref(ele) {};

  return MDCListAdapter;
}();

/* harmony default export */ var list_adapter = (MDCListAdapter);
// CONCATENATED MODULE: ../node_modules/@material/list/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var constants_cssClasses = {
  ROOT: 'mdc-list',
  LIST_ITEM_CLASS: 'mdc-list-item',
  LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
  LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
};

/** @enum {string} */
var constants_strings = {
  ARIA_ORIENTATION: 'aria-orientation',
  ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
  ARIA_SELECTED: 'aria-selected',
  FOCUSABLE_CHILD_ELEMENTS: '.' + constants_cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled), .' + constants_cssClasses.LIST_ITEM_CLASS + ' a',
  ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
};


// CONCATENATED MODULE: ../node_modules/@material/list/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function list_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function list_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

var foundation_MDCListFoundation = function (_MDCFoundation) {
  list_foundation__inherits(MDCListFoundation, _MDCFoundation);

  foundation__createClass(MDCListFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return constants_strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return constants_cssClasses;
    }

    /**
     * {@see MDCListAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCListAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCListAdapter} */{
          getListItemCount: function getListItemCount() {},
          getFocusedElementIndex: function getFocusedElementIndex() {},
          setAttributeForElementIndex: function setAttributeForElementIndex() {},
          removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
          addClassForElementIndex: function addClassForElementIndex() {},
          removeClassForElementIndex: function removeClassForElementIndex() {},
          focusItemAtIndex: function focusItemAtIndex() {},
          setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
          followHref: function followHref() {}
        }
      );
    }

    /**
     * @param {!MDCListAdapter=} adapter
     */

  }]);

  function MDCListFoundation(adapter) {
    list_foundation__classCallCheck(this, MDCListFoundation);

    /** {boolean} */
    var _this = list_foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));

    _this.wrapFocus_ = false;
    /** {boolean} */
    _this.isVertical_ = true;
    /** {boolean} */
    _this.isSingleSelectionList_ = false;
    /** {number} */
    _this.selectedIndex_ = -1;
    /** {boolean} */
    _this.useActivatedClass_ = false;
    return _this;
  }

  /**
   * Sets the private wrapFocus_ variable.
   * @param {boolean} value
   */


  MDCListFoundation.prototype.setWrapFocus = function setWrapFocus(value) {
    this.wrapFocus_ = value;
  };

  /**
   * Sets the isVertical_ private variable.
   * @param {boolean} value
   */


  MDCListFoundation.prototype.setVerticalOrientation = function setVerticalOrientation(value) {
    this.isVertical_ = value;
  };

  /**
   * Sets the isSingleSelectionList_ private variable.
   * @param {boolean} value
   */


  MDCListFoundation.prototype.setSingleSelection = function setSingleSelection(value) {
    this.isSingleSelectionList_ = value;
  };

  /**
   * Sets the useActivatedClass_ private variable.
   * @param {boolean} useActivated
   */


  MDCListFoundation.prototype.setUseActivatedClass = function setUseActivatedClass(useActivated) {
    this.useActivatedClass_ = useActivated;
  };

  /** @param {number} index */


  MDCListFoundation.prototype.setSelectedIndex = function setSelectedIndex(index) {
    if (index === this.selectedIndex_) {
      return;
    }

    var className = this.useActivatedClass_ ? constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS : constants_cssClasses.LIST_ITEM_SELECTED_CLASS;

    if (this.selectedIndex_ >= 0) {
      this.adapter_.removeAttributeForElementIndex(this.selectedIndex_, constants_strings.ARIA_SELECTED);
      this.adapter_.removeClassForElementIndex(this.selectedIndex_, className);
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
    }

    if (index >= 0 && this.adapter_.getListItemCount() > index) {
      this.selectedIndex_ = index;
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, constants_strings.ARIA_SELECTED, true);
      this.adapter_.addClassForElementIndex(this.selectedIndex_, className);
      this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', 0);

      if (this.selectedIndex_ !== 0) {
        this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
      }
    }
  };

  /**
   * Focus in handler for the list items.
   * @param evt
   * @param {number} listItemIndex
   */


  MDCListFoundation.prototype.handleFocusIn = function handleFocusIn(evt, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
    }
  };

  /**
   * Focus out handler for the list items.
   * @param {Event} evt
   * @param {number} listItemIndex
   */


  MDCListFoundation.prototype.handleFocusOut = function handleFocusOut(evt, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
    }
  };

  /**
   * Key handler for the list.
   * @param {Event} evt
   * @param {boolean} isRootListItem
   * @param {number} listItemIndex
   */


  MDCListFoundation.prototype.handleKeydown = function handleKeydown(evt, isRootListItem, listItemIndex) {
    var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
    var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
    var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
    var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
    var isHome = evt.key === 'Home' || evt.keyCode === 36;
    var isEnd = evt.key === 'End' || evt.keyCode === 35;
    var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
    var isSpace = evt.key === 'Space' || evt.keyCode === 32;

    var currentIndex = this.adapter_.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        // If this event doesn't have a mdc-list-item ancestor from the
        // current list (not from a sublist), return early.
        return;
      }
    }

    if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
      this.preventDefaultEvent_(evt);
      this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
      this.preventDefaultEvent_(evt);
      this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent_(evt);
      this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent_(evt);
      this.focusLastElement();
    } else if (this.isSingleSelectionList_ && (isEnter || isSpace)) {
      this.preventDefaultEvent_(evt);
      // Check if the space key was pressed on the list item or a child element.
      if (isRootListItem) {
        this.setSelectedIndex(currentIndex);

        // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.
        this.adapter_.followHref(currentIndex);
      }
    }
  };

  /**
   * Click handler for the list.
   */


  MDCListFoundation.prototype.handleClick = function handleClick() {
    var currentIndex = this.adapter_.getFocusedElementIndex();

    if (currentIndex === -1) return;

    this.setSelectedIndex(currentIndex);
  };

  /**
   * Ensures that preventDefault is only called if the containing element doesn't
   * consume the event, and it will cause an unintended scroll.
   * @param {Event} evt
   * @private
   */


  MDCListFoundation.prototype.preventDefaultEvent_ = function preventDefaultEvent_(evt) {
    var tagName = ('' + evt.target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  /**
   * Focuses the next element on the list.
   * @param {number} index
   */


  MDCListFoundation.prototype.focusNextElement = function focusNextElement(index) {
    var count = this.adapter_.getListItemCount();
    var nextIndex = index + 1;
    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        // Return early because last item is already focused.
        return;
      }
    }
    this.adapter_.focusItemAtIndex(nextIndex);
  };

  /**
   * Focuses the previous element on the list.
   * @param {number} index
   */


  MDCListFoundation.prototype.focusPrevElement = function focusPrevElement(index) {
    var prevIndex = index - 1;
    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter_.getListItemCount() - 1;
      } else {
        // Return early because first item is already focused.
        return;
      }
    }
    this.adapter_.focusItemAtIndex(prevIndex);
  };

  MDCListFoundation.prototype.focusFirstElement = function focusFirstElement() {
    if (this.adapter_.getListItemCount() > 0) {
      this.adapter_.focusItemAtIndex(0);
    }
  };

  MDCListFoundation.prototype.focusLastElement = function focusLastElement() {
    var lastIndex = this.adapter_.getListItemCount() - 1;
    if (lastIndex >= 0) {
      this.adapter_.focusItemAtIndex(lastIndex);
    }
  };

  return MDCListFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var list_foundation = (foundation_MDCListFoundation);
// CONCATENATED MODULE: ../node_modules/@material/list/index.js
var list__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var list__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function list__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function list__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends MDCComponent<!MDCListFoundation>
 */

var list_MDCList = function (_MDCComponent) {
  list__inherits(MDCList, _MDCComponent);

  /** @param {...?} args */
  function MDCList() {
    list__classCallCheck(this, MDCList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Function} */
    var _this = list__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.handleKeydown_;
    /** @private {!Function} */
    _this.handleClick_;
    /** @private {!Function} */
    _this.focusInEventListener_;
    /** @private {!Function} */
    _this.focusOutEventListener_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCList}
   */


  MDCList.attachTo = function attachTo(root) {
    return new MDCList(root);
  };

  MDCList.prototype.destroy = function destroy() {
    this.root_.removeEventListener('keydown', this.handleKeydown_);
    this.root_.removeEventListener('click', this.handleClick_);
    this.root_.removeEventListener('focusin', this.focusInEventListener_);
    this.root_.removeEventListener('focusout', this.focusOutEventListener_);
  };

  MDCList.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_);
    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
    this.root_.addEventListener('keydown', this.handleKeydown_);
    this.root_.addEventListener('focusin', this.focusInEventListener_);
    this.root_.addEventListener('focusout', this.focusOutEventListener_);
    this.layout();
    this.initializeListType();
  };

  MDCList.prototype.layout = function layout() {
    var direction = this.root_.getAttribute(constants_strings.ARIA_ORIENTATION);
    this.vertical = direction !== constants_strings.ARIA_ORIENTATION_HORIZONTAL;

    // List items need to have at least tabindex=-1 to be focusable.
    [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
      ele.setAttribute('tabindex', -1);
    });

    // Child button/a elements are not tabbable until the list item is focused.
    [].slice.call(this.root_.querySelectorAll(constants_strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
      return ele.setAttribute('tabindex', -1);
    });
  };

  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   * @param {Event} evt
   * @private
   */


  MDCList.prototype.getListItemIndex_ = function getListItemIndex_(evt) {
    var eventTarget = /** @type {HTMLElement} */evt.target;
    var index = -1;

    // Find the first ancestor that is a list item or the list.
    while (!eventTarget.classList.contains(constants_cssClasses.LIST_ITEM_CLASS) && !eventTarget.classList.contains(constants_cssClasses.ROOT)) {
      eventTarget = eventTarget.parentElement;
    }

    // Get the index of the element if it is a list item.
    if (eventTarget.classList.contains(constants_cssClasses.LIST_ITEM_CLASS)) {
      index = this.listElements.indexOf(eventTarget);
    }

    return index;
  };

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   * @param {Event} evt
   * @private
   */


  MDCList.prototype.handleFocusInEvent_ = function handleFocusInEvent_(evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusIn(evt, index);
  };

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   * @param {Event} evt
   * @private
   */


  MDCList.prototype.handleFocusOutEvent_ = function handleFocusOutEvent_(evt) {
    var index = this.getListItemIndex_(evt);
    this.foundation_.handleFocusOut(evt, index);
  };

  /**
   * Used to figure out which element was clicked before sending the event to the foundation.
   * @param {Event} evt
   * @private
   */


  MDCList.prototype.handleKeydownEvent_ = function handleKeydownEvent_(evt) {
    var index = this.getListItemIndex_(evt);

    if (index >= 0) {
      this.foundation_.handleKeydown(evt, evt.target.classList.contains(constants_cssClasses.LIST_ITEM_CLASS), index);
    }
  };

  MDCList.prototype.initializeListType = function initializeListType() {
    // Automatically set single selection if selected/activated classes are present.
    var preselectedElement = this.root_.querySelector('.' + constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS + ', .' + constants_cssClasses.LIST_ITEM_SELECTED_CLASS);

    if (preselectedElement) {
      if (preselectedElement.classList.contains(constants_cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
        this.foundation_.setUseActivatedClass(true);
      }

      this.singleSelection = true;
      this.selectedIndex = this.listElements.indexOf(preselectedElement);
    }
  };

  /** @param {boolean} value */


  /** @return {!MDCListFoundation} */
  MDCList.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new list_foundation( /** @type {!MDCListAdapter} */list__extends({
      getListItemCount: function getListItemCount() {
        return _this2.listElements.length;
      },
      getFocusedElementIndex: function getFocusedElementIndex() {
        return _this2.listElements.indexOf(document.activeElement);
      },
      setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
        var element = _this2.listElements[index];
        if (element) {
          element.setAttribute(attr, value);
        }
      },
      removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
        var element = _this2.listElements[index];
        if (element) {
          element.removeAttribute(attr);
        }
      },
      addClassForElementIndex: function addClassForElementIndex(index, className) {
        var element = _this2.listElements[index];
        if (element) {
          element.classList.add(className);
        }
      },
      removeClassForElementIndex: function removeClassForElementIndex(index, className) {
        var element = _this2.listElements[index];
        if (element) {
          element.classList.remove(className);
        }
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        var element = _this2.listElements[index];
        if (element) {
          element.focus();
        }
      },
      setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
        var element = _this2.listElements[listItemIndex];
        var listItemChildren = [].slice.call(element.querySelectorAll(constants_strings.FOCUSABLE_CHILD_ELEMENTS));
        listItemChildren.forEach(function (ele) {
          return ele.setAttribute('tabindex', tabIndexValue);
        });
      },
      followHref: function followHref(index) {
        var listItem = _this2.listElements[index];
        if (listItem && listItem.href) {
          listItem.click();
        }
      }
    }));
  };

  list__createClass(MDCList, [{
    key: 'vertical',
    set: function set(value) {
      this.foundation_.setVerticalOrientation(value);
    }

    /** @return Array<!Element>*/

  }, {
    key: 'listElements',
    get: function get() {
      return [].slice.call(this.root_.querySelectorAll(constants_strings.ENABLED_ITEMS_SELECTOR));
    }

    /** @param {boolean} value */

  }, {
    key: 'wrapFocus',
    set: function set(value) {
      this.foundation_.setWrapFocus(value);
    }

    /** @param {boolean} isSingleSelectionList */

  }, {
    key: 'singleSelection',
    set: function set(isSingleSelectionList) {
      if (isSingleSelectionList) {
        this.root_.addEventListener('click', this.handleClick_);
      } else {
        this.root_.removeEventListener('click', this.handleClick_);
      }

      this.foundation_.setSingleSelection(isSingleSelectionList);
    }

    /** @param {number} index */

  }, {
    key: 'selectedIndex',
    set: function set(index) {
      this.foundation_.setSelectedIndex(index);
    }
  }]);

  return MDCList;
}(component["a" /* default */]);


// EXTERNAL MODULE: ../node_modules/@material/drawer/node_modules/focus-trap/index.js
var focus_trap = __webpack_require__("TC0Z");
var focus_trap_default = /*#__PURE__*/__webpack_require__.n(focus_trap);

// CONCATENATED MODULE: ../node_modules/@material/drawer/util.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/**
 * @param {!Element} surfaceEl
 * @param {!Function} focusTrapFactory
 * @return {!FocusTrapInstance}
 */
function createFocusTrapInstance(surfaceEl) {
  var focusTrapFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : focus_trap_default.a;

  return focusTrapFactory(surfaceEl, {
    clickOutsideDeactivates: true,
    initialFocus: false, // Navigation drawer handles focusing on active nav item.
    escapeDeactivates: false, // Navigation drawer handles ESC.
    returnFocusOnDeactivate: false // Navigation drawer handles restore focus.
  });
}


// CONCATENATED MODULE: ../node_modules/@material/drawer/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDrawer", function() { return drawer_MDCDrawer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCDismissibleDrawerFoundation", function() { return dismissible_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCModalDrawerFoundation", function() { return modal_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "util", function() { return util_namespaceObject; });
var drawer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var drawer__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function drawer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function drawer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function drawer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */










/**
 * @extends {MDCComponent<!MDCDismissibleDrawerFoundation>}
 * @final
 */

var drawer_MDCDrawer = function (_MDCComponent) {
  drawer__inherits(MDCDrawer, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCDrawer() {
    drawer__classCallCheck(this, MDCDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = drawer__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.previousFocus_;

    /** @private {!Function} */
    _this.handleKeydown_;

    /** @private {!Function} */
    _this.handleTransitionEnd_;

    /** @private {!Function} */
    _this.focusTrapFactory_;

    /** @private {!FocusTrapInstance} */
    _this.focusTrap_;

    /** @private {?Element} */
    _this.scrim_;

    /** @private {?Function} */
    _this.handleScrimClick_;

    /** @private {?MDCList} */
    _this.list_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCDrawer}
   */


  MDCDrawer.attachTo = function attachTo(root) {
    return new MDCDrawer(root);
  };

  /**
   * Returns true if drawer is in the open position.
   * @return {boolean}
   */


  MDCDrawer.prototype.initialize = function initialize() {
    var focusTrapFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : focus_trap_default.a;
    var listFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
      return new list_MDCList(el);
    };

    var listEl = /** @type {!Element} */this.root_.querySelector('.' + list_foundation.cssClasses.ROOT);
    if (listEl) {
      this.list_ = listFactory(listEl);
      this.list_.wrapFocus = true;
    }
    this.focusTrapFactory_ = focusTrapFactory;
  };

  MDCDrawer.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var _this2 = this;

    var MODAL = dismissible_foundation.cssClasses.MODAL;


    if (this.root_.classList.contains(MODAL)) {
      var SCRIM_SELECTOR = dismissible_foundation.strings.SCRIM_SELECTOR;

      this.scrim_ = /** @type {!Element} */this.root_.parentElement.querySelector(SCRIM_SELECTOR);
      this.handleScrimClick_ = function () {
        return (/** @type {!MDCModalDrawerFoundation} */_this2.foundation_.handleScrimClick()
        );
      };
      this.scrim_.addEventListener('click', this.handleScrimClick_);
      this.focusTrap_ = createFocusTrapInstance(this.root_, this.focusTrapFactory_);
    }

    this.handleKeydown_ = function (evt) {
      return _this2.foundation_.handleKeydown(evt);
    };
    this.handleTransitionEnd_ = function (evt) {
      return _this2.foundation_.handleTransitionEnd(evt);
    };

    this.root_.addEventListener('keydown', this.handleKeydown_);
    this.root_.addEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCDrawer.prototype.destroy = function destroy() {
    this.root_.removeEventListener('keydown', this.handleKeydown_);
    this.root_.removeEventListener('transitionend', this.handleTransitionEnd_);

    if (this.list_) {
      this.list_.destroy();
    }

    var MODAL = dismissible_foundation.cssClasses.MODAL;

    if (this.root_.classList.contains(MODAL)) {
      this.scrim_.removeEventListener('click', /** @type {!Function} */this.handleScrimClick_);
      // Ensure drawer is closed to hide scrim and release focus
      this.open = false;
    }
  };

  MDCDrawer.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    /** @type {!MDCDrawerAdapter} */
    var adapter = /** @type {!MDCDrawerAdapter} */drawer__extends({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this3.root_.classList.contains(className);
      },
      elementHasClass: function elementHasClass(element, className) {
        return element.classList.contains(className);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this3.root_.getBoundingClientRect();
      },
      saveFocus: function saveFocus() {
        _this3.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        var previousFocus = _this3.previousFocus_ && _this3.previousFocus_.focus;
        if (_this3.root_.contains(document.activeElement) && previousFocus) {
          _this3.previousFocus_.focus();
        }
      },
      focusActiveNavigationItem: function focusActiveNavigationItem() {
        var activeNavItemEl = _this3.root_.querySelector('.' + list_foundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: function notifyClose() {
        return _this3.emit(strings.CLOSE_EVENT, {}, true /* shouldBubble */);
      },
      notifyOpen: function notifyOpen() {
        return _this3.emit(strings.OPEN_EVENT, {}, true /* shouldBubble */);
      },
      trapFocus: function trapFocus() {
        return _this3.focusTrap_.activate();
      },
      releaseFocus: function releaseFocus() {
        return _this3.focusTrap_.deactivate();
      }
    });

    var _MDCDismissibleDrawer = dismissible_foundation.cssClasses,
        DISMISSIBLE = _MDCDismissibleDrawer.DISMISSIBLE,
        MODAL = _MDCDismissibleDrawer.MODAL;

    if (this.root_.classList.contains(DISMISSIBLE)) {
      return new dismissible_foundation(adapter);
    } else if (this.root_.classList.contains(MODAL)) {
      return new modal_foundation(adapter);
    } else {
      throw new Error('MDCDrawer: Failed to instantiate component. Supported variants are ' + DISMISSIBLE + ' and ' + MODAL + '.');
    }
  };

  drawer__createClass(MDCDrawer, [{
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }

    /**
     * Toggles the drawer open and closed.
     * @param {boolean} isOpen
     */
    ,
    set: function set(isOpen) {
      if (isOpen) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }]);

  return MDCDrawer;
}(base["a" /* MDCComponent */]);



/***/ }),

/***/ "F55s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// CONCATENATED MODULE: ../node_modules/@material/notched-outline/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Notched Outline.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Notched Outline into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCNotchedOutlineAdapter = function () {
  function MDCNotchedOutlineAdapter() {
    _classCallCheck(this, MDCNotchedOutlineAdapter);
  }

  /**
   * Returns the width of the root element.
   * @return {number}
   */
  MDCNotchedOutlineAdapter.prototype.getWidth = function getWidth() {};

  /**
   * Returns the height of the root element.
   * @return {number}
   */


  MDCNotchedOutlineAdapter.prototype.getHeight = function getHeight() {};

  /**
   * Adds a class to the root element.
   * @param {string} className
   */


  MDCNotchedOutlineAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root element.
   * @param {string} className
   */


  MDCNotchedOutlineAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Sets the "d" attribute of the outline element's SVG path.
   * @param {string} value
   */


  MDCNotchedOutlineAdapter.prototype.setOutlinePathAttr = function setOutlinePathAttr(value) {};

  /**
   * Returns the idle outline element's computed style value of the given css property `propertyName`.
   * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
   * @param {string} propertyName
   * @return {string}
   */


  MDCNotchedOutlineAdapter.prototype.getIdleOutlineStyleValue = function getIdleOutlineStyleValue(propertyName) {};

  return MDCNotchedOutlineAdapter;
}();

/* harmony default export */ var adapter = (MDCNotchedOutlineAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/notched-outline/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var strings = {
  PATH_SELECTOR: '.mdc-notched-outline__path',
  IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
};

/** @enum {string} */
var cssClasses = {
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched'
};


// CONCATENATED MODULE: ../node_modules/@material/notched-outline/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
 * @final
 */

var foundation_MDCNotchedOutlineFoundation = function (_MDCFoundation) {
  _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

  _createClass(MDCNotchedOutlineFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }

    /**
     * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCNotchedOutlineAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCNotchedOutlineAdapter} */{
          getWidth: function getWidth() {},
          getHeight: function getHeight() {},
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          setOutlinePathAttr: function setOutlinePathAttr() {},
          getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
        }
      );
    }

    /**
     * @param {!MDCNotchedOutlineAdapter} adapter
     */

  }]);

  function MDCNotchedOutlineFoundation(adapter) {
    foundation__classCallCheck(this, MDCNotchedOutlineFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
  }

  /**
   * Adds the outline notched selector and updates the notch width
   * calculated based off of notchWidth and isRtl.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   */


  MDCNotchedOutlineFoundation.prototype.notch = function notch(notchWidth) {
    var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    this.adapter_.addClass(OUTLINE_NOTCHED);
    this.updateSvgPath_(notchWidth, isRtl);
  };

  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function closeNotch() {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    this.adapter_.removeClass(OUTLINE_NOTCHED);
  };

  /**
   * Updates the SVG path of the focus outline element based on the notchWidth
   * and the RTL context.
   * @param {number} notchWidth
   * @param {boolean=} isRtl
   * @private
   */


  MDCNotchedOutlineFoundation.prototype.updateSvgPath_ = function updateSvgPath_(notchWidth, isRtl) {
    // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
    var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
    var radius = parseFloat(radiusStyleValue);
    var width = this.adapter_.getWidth();
    var height = this.adapter_.getHeight();
    var cornerWidth = radius + 1.2;
    var leadingStrokeLength = Math.abs(12 - cornerWidth);

    // If the notchWidth is 0, the the notched outline doesn't need to add padding.
    var paddedNotchWidth = 0;
    if (notchWidth > 0) {
      paddedNotchWidth = notchWidth + 8;
    }

    // The right, bottom, and left sides of the outline follow the same SVG path.
    var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

    var path = void 0;
    if (!isRtl) {
      path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
    } else {
      path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
    }

    this.adapter_.setOutlinePathAttr(path);
  };

  return MDCNotchedOutlineFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var notched_outline_foundation = (foundation_MDCNotchedOutlineFoundation);
// CONCATENATED MODULE: ../node_modules/@material/notched-outline/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notched_outline_MDCNotchedOutline; });
/* unused concated harmony import MDCNotchedOutlineFoundation */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return notched_outline_foundation; });
function notched_outline__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function notched_outline__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function notched_outline__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







/**
 * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
 * @final
 */

var notched_outline_MDCNotchedOutline = function (_MDCComponent) {
  notched_outline__inherits(MDCNotchedOutline, _MDCComponent);

  function MDCNotchedOutline() {
    notched_outline__classCallCheck(this, MDCNotchedOutline);

    return notched_outline__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCNotchedOutline}
   */
  MDCNotchedOutline.attachTo = function attachTo(root) {
    return new MDCNotchedOutline(root);
  };

  /**
    * Updates outline selectors and SVG path to open notch.
    * @param {number} notchWidth The notch width in the outline.
    * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
    * will be right justified in outline path, otherwise left justified.
    */


  MDCNotchedOutline.prototype.notch = function notch(notchWidth, isRtl) {
    this.foundation_.notch(notchWidth, isRtl);
  };

  /**
   * Updates the outline selectors to close notch and return it to idle state.
   */


  MDCNotchedOutline.prototype.closeNotch = function closeNotch() {
    this.foundation_.closeNotch();
  };

  /**
   * @return {!MDCNotchedOutlineFoundation}
   */


  MDCNotchedOutline.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new notched_outline_foundation({
      getWidth: function getWidth() {
        return _this2.root_.offsetWidth;
      },
      getHeight: function getHeight() {
        return _this2.root_.offsetHeight;
      },
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      setOutlinePathAttr: function setOutlinePathAttr(value) {
        var path = _this2.root_.querySelector(strings.PATH_SELECTOR);
        path.setAttribute('d', value);
      },
      getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
        var idleOutlineElement = _this2.root_.parentNode.querySelector(strings.IDLE_OUTLINE_SELECTOR);
        return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
      }
    });
  };

  return MDCNotchedOutline;
}(component["a" /* default */]);



/***/ }),

/***/ "FnKr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Gxfw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, '__esModule', { value: true });

var eventTargetShim = __webpack_require__("w7m6");

/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */

var AbortSignal = function (_eventTargetShim$Even) {
    _inherits(AbortSignal, _eventTargetShim$Even);

    /**
     * AbortSignal cannot be constructed directly.
     */
    function AbortSignal() {
        _classCallCheck(this, AbortSignal);

        var _this = _possibleConstructorReturn(this, _eventTargetShim$Even.call(this));

        throw new TypeError("AbortSignal cannot be constructed directly");
        return _this;
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */


    _createClass(AbortSignal, [{
        key: 'aborted',
        get: function get() {
            var aborted = abortedFlags.get(this);
            if (typeof aborted !== "boolean") {
                throw new TypeError('Expected \'this\' to be an \'AbortSignal\' object, but got ' + (this === null ? "null" : typeof this));
            }
            return aborted;
        }
    }]);

    return AbortSignal;
}(eventTargetShim.EventTarget);

eventTargetShim.defineEventAttribute(AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */
function createAbortSignal() {
    var signal = Object.create(AbortSignal.prototype);
    eventTargetShim.EventTarget.call(signal);
    abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */
function abortSignal(signal) {
    if (abortedFlags.get(signal) !== false) {
        return;
    }
    abortedFlags.set(signal, true);
    signal.dispatchEvent({ type: "abort" });
}
/**
 * Aborted flag for each instances.
 */
var abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties(AbortSignal.prototype, {
    aborted: { enumerable: true }
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal"
    });
}

/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */

var AbortController = function () {
    /**
     * Initialize this controller.
     */
    function AbortController() {
        _classCallCheck(this, AbortController);

        signals.set(this, createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */


    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */
    AbortController.prototype.abort = function abort() {
        abortSignal(getSignal(this));
    };

    _createClass(AbortController, [{
        key: 'signal',
        get: function get() {
            return getSignal(this);
        }
    }]);

    return AbortController;
}();
/**
 * Associated signals.
 */


var signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */
function getSignal(controller) {
    var signal = signals.get(controller);
    if (signal == null) {
        throw new TypeError('Expected \'this\' to be an \'AbortController\' object, but got ' + (controller === null ? "null" : typeof controller));
    }
    return signal;
}
// Properties should be enumerable.
Object.defineProperties(AbortController.prototype, {
    signal: { enumerable: true },
    abort: { enumerable: true }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController"
    });
}

exports.AbortController = AbortController;
exports.AbortSignal = AbortSignal;
exports.default = AbortController;

module.exports = AbortController;
module.exports.AbortController = module.exports["default"] = AbortController;
module.exports.AbortSignal = AbortSignal;
//# sourceMappingURL=abort-controller.js.map

/***/ }),

/***/ "H+hJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__2pOGj","cardHeader":"cardHeader__jJSrx","cardBody":"cardBody__ireSD"};

/***/ }),

/***/ "HGCE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IpTH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "J5U+":
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__("/aYh");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "JL9d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.props;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (preact_router_es_canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}
	routeFromLink(e.currentTarget || e.target || this);
	return prevent(e);
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		var children = Object(preact_min["toChildArray"])(this.props.children);
		return this.getMatchingChildren(children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this.setState({ url: url });

		var didRoute = this.canRoute(url);

		// trigger a manual re-route if we're not in the middle of an update:
		if (!this.updating) {
			this.forceUpdate();
		}

		return didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.props.path, vnode.props);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(Object(preact_min["toChildArray"])(children), url, true);

		var current = active[0] || null;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["createElement"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["createElement"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ../node_modules/preact-material-components/TopAppBar/index.js
var TopAppBar = __webpack_require__("fHKL");
var TopAppBar_default = /*#__PURE__*/__webpack_require__.n(TopAppBar);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Drawer/index.js
var Drawer = __webpack_require__("ynRT");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);

// EXTERNAL MODULE: ../node_modules/preact-material-components/List/index.js
var List = __webpack_require__("E7XR");
var List_default = /*#__PURE__*/__webpack_require__.n(List);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Dialog/index.js
var Dialog = __webpack_require__("JtzT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Switch/index.js
var Switch = __webpack_require__("wfAA");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Switch/style.css
var Switch_style = __webpack_require__("IpTH");
var Switch_style_default = /*#__PURE__*/__webpack_require__.n(Switch_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Dialog/style.css
var Dialog_style = __webpack_require__("sEh6");
var Dialog_style_default = /*#__PURE__*/__webpack_require__.n(Dialog_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Drawer/style.css
var Drawer_style = __webpack_require__("RYBc");
var Drawer_style_default = /*#__PURE__*/__webpack_require__.n(Drawer_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/List/style.css
var List_style = __webpack_require__("u+vq");
var List_style_default = /*#__PURE__*/__webpack_require__.n(List_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/TopAppBar/style.css
var TopAppBar_style = __webpack_require__("FnKr");
var TopAppBar_style_default = /*#__PURE__*/__webpack_require__.n(TopAppBar_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Radio/index.js
var Radio = __webpack_require__("sdLF");
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);

// EXTERNAL MODULE: ../node_modules/preact-material-components/FormField/index.js
var FormField = __webpack_require__("rW9b");
var FormField_default = /*#__PURE__*/__webpack_require__.n(FormField);

// EXTERNAL MODULE: ../node_modules/preact-material-components/FormField/style.css
var FormField_style = __webpack_require__("zbYa");
var FormField_style_default = /*#__PURE__*/__webpack_require__.n(FormField_style);

// CONCATENATED MODULE: ./utils/Config.js
var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { fetchJsonp } from 'fetch-jsonp';

var Config = (_temp = _class = function () {
   function Config() {
      _classCallCheck(this, Config);
   }

   Config.setOwnserveraddress = function setOwnserveraddress(p_hostname, p_host) {
      Config.ownserveraddress = p_host;
      /*
      let tmp = new String(p_host);
      let ind = tmp.indexOf(":");
      if (ind > -1)
         tmp = tmp.substring(0, ind);
         */
      Config.http_ownserver = "http://" + p_host;
      Config.http_curlserver = "http://" + p_hostname + ":9090";
   };

   /*
   static _fetchJsonp = async props => {
     const { endpoint, options } = props
     return await fetchJsonp(endpoint)
     .then(async res => {
        if (res.ok) {
           return await res.clone().json().catch(() => res.text())
        }
        return res;
     })
     .catch(err => {
        console.error("api", "_fetch", "err", err)
        return false
     });
   }
     */

   // static yleserverurl = 'http://localhost:80/yle/';


   return Config;
}(), _class.bDebug = false, _class.yleserverurl = 'https://external.api.yle.fi/v1/', _class.yleapi = '8547bc30', _class.ylekey = '1949f194cce1b4c18b85a93f22a52150', _class.yleapiparams = null, _class.yleschedules = null, _class.ownserveraddress = null, _class.http_ownserver = null, _class.http_curlserver = null, _temp);


/* harmony default export */ var utils_Config = (Config);
// EXTERNAL MODULE: ./components/header/style.css
var header_style = __webpack_require__("u3et");
var header_style_default = /*#__PURE__*/__webpack_require__.n(header_style);

// CONCATENATED MODULE: ./components/header/index.js


function header__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var header__ref = Object(preact_min["h"])(
	TopAppBar_default.a.Title,
	null,
	'Ohjelmat'
);

var header__ref2 = Object(preact_min["h"])(
	TopAppBar_default.a.Icon,
	null,
	'settings'
);

var _ref3 = Object(preact_min["h"])(
	List_default.a.ItemGraphic,
	null,
	'home'
);

var _ref4 = Object(preact_min["h"])(
	List_default.a.ItemGraphic,
	null,
	'account_circle'
);

var _ref5 = Object(preact_min["h"])(
	Dialog_default.a.Header,
	null,
	'Settings'
);

var _ref6 = Object(preact_min["h"])(
	Dialog_default.a.Footer,
	null,
	Object(preact_min["h"])(
		Dialog_default.a.FooterButton,
		{ accept: true },
		'OK'
	)
);

var header_Header = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		header__classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.store = null;

		_this.openDrawer = function () {
			return _this.drawer.MDComponent.open = true;
		};

		_this.openSettings = function () {
			return _this.dialog.MDComponent.show();
		};

		_this.drawerRef = function (drawer) {
			return _this.drawer = drawer;
		};

		_this.dialogRef = function (dialog) {
			return _this.dialog = dialog;
		};

		_this.linkTo = function (path) {
			return function () {
				route(path);
				_this.closeDrawer();
			};
		};

		_this.goHome = _this.linkTo('/');
		_this.goToMyProfile = _this.linkTo('/profile');

		_this.toggleDarkTheme = function () {
			_this.setState({
				darkThemeEnabled: !_this.state.darkThemeEnabled
			}, function () {
				if (_this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
				} else {
					document.body.classList.remove('mdc-theme--dark');
				}
			});
		};

		_this.getPathOfRadioProgSourceChanged = function (id) {

			var ret = null;
			switch (id) {
				case 'radio_yle':
					ret = "/";break;
				case 'radio_telkku':
					ret = '/telkku';break;
				case 'radio_telkkuhtml':
					ret = '/htmltelkku';break;
				case 'radio_amppari':
					ret = '/amppari';break;
				case 'radio_htmlamppari':
					ret = '/htmlamppari';break;
				default:
					ret = '/yle';break;
			}
			return ret;
		};

		_this.radioProgSourceChanged = function (event) {
			// event.preventDefault();
			//		if (!this.state.bCategoryQueryReady)
			//			return;
			var currentCheckedRadio = event.target;
			var name = currentCheckedRadio.name;
			if (utils_Config.bDebug) {
				console.log("currentCheckedRadio");
				console.log(name);
			}
			if (name == '') return;
			if (name !== 'optsource') return;
			var id = currentCheckedRadio.id;
			if (utils_Config.bDebug) {
				console.log("currentCheckedRadio");
				console.log(id);
			}
			// if (this.props.currentProgsourceCntrl)
			//this.props.currentProgsourceCntrl.removelisteners();
			_this.props.store.setState({ progsource: id });
			_this.setState({ progsource: id });
			route(_this.getPathOfRadioProgSourceChanged(id));
		};

		if (utils_Config.bDebug) {
			console.log("Header.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;

		_this.state = {
			darkThemeEnabled: false,
			progsource: 'radio_yle'
		};
		return _this;
	}

	Header.prototype.closeDrawer = function closeDrawer() {
		this.drawer.MDComponent.open = false;
	};

	Header.prototype.render = function render(props, state) {
		console.log(props.selectedRoute);
		return Object(preact_min["h"])(
			'div',
			null,
			Object(preact_min["h"])(
				TopAppBar_default.a,
				{ className: 'topappbar' },
				Object(preact_min["h"])(
					TopAppBar_default.a.Row,
					null,
					Object(preact_min["h"])(
						TopAppBar_default.a.Section,
						{ 'align-start': true },
						Object(preact_min["h"])(
							TopAppBar_default.a.Icon,
							{ menu: true, onClick: this.openDrawer },
							'menu'
						),
						header__ref,
						Object(preact_min["h"])(
							'span',
							{ style: { "display": "table", "margin": "0 auto" } },
							Object(preact_min["h"])(
								FormField_default.a,
								null,
								Object(preact_min["h"])(Radio_default.a, { id: 'radio_yle', name: 'optsource',
									checked: state.progsource == 'radio_yle',
									onChange: this.radioProgSourceChanged }),
								Object(preact_min["h"])(
									'label',
									{ style: { color: "white" },
										'for': 'radio_yle' },
									'Yle'
								)
							),
							Object(preact_min["h"])(
								FormField_default.a,
								null,
								Object(preact_min["h"])(Radio_default.a, { id: 'radio_telkku', name: 'optsource',
									checked: state.progsource == 'radio_telkku',
									onChange: this.radioProgSourceChanged }),
								Object(preact_min["h"])(
									'label',
									{ style: { color: "white" },
										'for': 'radio_telkku' },
									'Telkku'
								)
							),
							Object(preact_min["h"])(
								FormField_default.a,
								null,
								Object(preact_min["h"])(Radio_default.a, { id: 'radio_telkkuhtml', name: 'optsource',
									checked: state.progsource == 'radio_telkkuhtml',
									onChange: this.radioProgSourceChanged }),
								Object(preact_min["h"])(
									'label',
									{ style: { color: "white" },
										'for': 'radio_telkkuhtml' },
									'Telkku html'
								)
							),
							Object(preact_min["h"])(
								FormField_default.a,
								null,
								Object(preact_min["h"])(Radio_default.a, { id: 'radio_amppari', name: 'optsource',
									checked: state.progsource == 'radio_amppari',
									onChange: this.radioProgSourceChanged }),
								Object(preact_min["h"])(
									'label',
									{ style: { color: "white" },
										'for': 'radio_amppari' },
									'Amppari tv'
								)
							),
							Object(preact_min["h"])(
								FormField_default.a,
								null,
								Object(preact_min["h"])(Radio_default.a, { id: 'radio_htmlamppari', name: 'optsource',
									checked: state.progsource == 'radio_htmlamppari',
									onChange: this.radioProgSourceChanged }),
								Object(preact_min["h"])(
									'label',
									{ style: { color: "white" },
										'for': 'radio_htmlamppari' },
									'Amppari tv html'
								)
							)
						)
					),
					Object(preact_min["h"])(
						TopAppBar_default.a.Section,
						{ 'align-end': true, 'shrink-to-fit': true, onClick: this.openSettings },
						header__ref2
					)
				)
			),
			Object(preact_min["h"])(
				Drawer_default.a,
				{ modal: true, ref: this.drawerRef },
				Object(preact_min["h"])(
					Drawer_default.a.DrawerContent,
					null,
					Object(preact_min["h"])(
						Drawer_default.a.DrawerItem,
						{ selected: props.selectedRoute === '/', onClick: this.goHome },
						_ref3,
						'Home'
					),
					Object(preact_min["h"])(
						Drawer_default.a.DrawerItem,
						{ selected: props.selectedRoute === '/profile', onClick: this.goToMyProfile },
						_ref4,
						'Profile'
					)
				)
			),
			Object(preact_min["h"])(
				Dialog_default.a,
				{ ref: this.dialogRef },
				_ref5,
				Object(preact_min["h"])(
					Dialog_default.a.Body,
					null,
					Object(preact_min["h"])(
						'div',
						null,
						'Enable dark theme ',
						Object(preact_min["h"])(Switch_default.a, { onClick: this.toggleDarkTheme })
					)
				),
				_ref6
			)
		);
	};

	return Header;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../node_modules/preact-material-components/Button/index.js
var Button = __webpack_require__("7/cg");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Button/style.css
var Button_style = __webpack_require__("aqQ4");
var Button_style_default = /*#__PURE__*/__webpack_require__.n(Button_style);

// EXTERNAL MODULE: ./routes/profile/style.css
var profile_style = __webpack_require__("Tv6c");
var profile_style_default = /*#__PURE__*/__webpack_require__.n(profile_style);

// CONCATENATED MODULE: ./routes/profile/TimeForm.js


function TimeForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TimeForm__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TimeForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var timezones = ['PST', 'MST', 'MDT', 'EST', 'UTC'];

var TimeForm__ref = Object(preact_min["h"])('input', {
    type: 'submit',
    value: 'Update request'
});

var TimeForm_TimeForm = function (_Component) {
    TimeForm__inherits(TimeForm, _Component);

    function TimeForm(props) {
        TimeForm__classCallCheck(this, TimeForm);

        /*
        this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        */
        var _this = TimeForm__possibleConstructorReturn(this, _Component.call(this, props));

        var tz = props.tz,
            msg = props.msg;

        _this.state = { tz: tz, msg: msg };
        return _this;
    }

    TimeForm.prototype._handleChange = function _handleChange(evt) {
        typeof this.props.onFormChange === 'function' && this.props.onFormChange(this.state);
    };

    TimeForm.prototype._changeTimezone = function _changeTimezone(evt) {
        var tz = evt.target.value;
        this.setState({ tz: tz }, this._handleChange);
    };

    TimeForm.prototype._changeMsg = function _changeMsg(evt) {
        var msg = encodeURIComponent(evt.target.value).replace(/%20/, '+');
        this.setState({ msg: msg }, this._handleChange);
    };

    TimeForm.prototype._handleFormSubmit = function _handleFormSubmit(evt) {
        evt.preventDefault();
        typeof this.props.onFormSubmit === 'function' && this.props.onFormSubmit(this.state);
    };

    TimeForm.prototype.render = function render(props, state) {
        var tz = state.tz;

        return Object(preact_min["h"])(
            'form',
            { onSubmit: this._handleFormSubmit },
            Object(preact_min["h"])(
                'select',
                {
                    onChange: this._changeTimezone,
                    defaultValue: tz },
                timezones.map(function (t) {
                    return Object(preact_min["h"])(
                        'option',
                        { key: t, value: t },
                        t
                    );
                })
            ),
            Object(preact_min["h"])('input', {
                type: 'text',
                placeholder: 'A chronic string message (such as 7 hours from\r now)',
                onChange: this._changeMsg
            }),
            TimeForm__ref
        );
    };

    return TimeForm;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./utils/Media.js
var Media__class, Media__temp;

function Media__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A static class that is able to listen screen changies after media screen 
 * @param {Object} update				An object with properties to be merged into state
 * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
 */
var Media = (Media__temp = Media__class = function () {
    function Media() {
        Media__classCallCheck(this, Media);
    }

    //   static recognition = new webkitSpeechRecognition() || new SpeechRecognition();

    /**
    * This method is adding defined listener into window media. Here used int metod: initializeScreenListeners.
    * @param {Object} mediafunc	A listener function, but here used set Media.screen object state,
     *                              or perhaps set another attributes false. See Screen.initializeScreenListeners
    * @param {String} matchMediaStr A media min or max etc string value
    */
    Media.addMediaListener = function addMediaListener(mediafunc, matchMediaStr, mediatype) {
        var x = window.matchMedia(matchMediaStr);
        mediafunc(x); // Call listener function at run time
        if (mediatype === undefined) x.addListener(mediafunc); // Attach listener function on state changes        
        else // window.matchMedia('all')
            x.addListener(mediafunc); // Attach listener function on state changes        
    };

    /*
    <MediaQuery query='(min-device-width: 1224px)'>
    <div>You are a desktop or laptop</div>
    <MediaQuery query='(min-device-width: 1824px)'>
      <div>You also have a huge screen</div>
    </MediaQuery>
    <MediaQuery query='(max-width: 1224px)'>
      <div>You are sized like a tablet or mobile phone though</div>
    </MediaQuery>
    </MediaQuery>
    <MediaQuery query='(max-device-width: 1224px)'>
    <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query='(orientation: portrait)'>
    <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query='(orientation: landscape)'>
    <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery query='(min-resolution: 2dppx)'>
    <div>You are retina</div>
    </MediaQuery>
    */
    Media.addMediaListenerSpeech = function addMediaListenerSpeech(mediafunc, matchMediaStr) {
        Media.addMediaListener(mediafunc, matchMediaStr, 'speech');
    };

    /**
     * This static Media.screen object will change after media screen changies.
     */


    /**
     * Media.screen object with false values, except isPortrait and isLandscape.
     */


    /**
     * Call this Media.initializeScreenListeners() function in beginiing of React/Preact etc app.
     * After this call, read states from Media.screen object, like: Media.screen.isPortrait
     */


    return Media;
}(), Media__class.bDebug = true, Media__class.screen = {
    isLaptopOrDesktop_1224: false,
    isTabbletOrLike_1224: false,
    isTabbletOrMobile_1224: false,
    isPortrait: false,
    isLandscape: false,
    isRretinaOrBigger_2d: false,
    isSpeech: false,
    isBraille: false
}, Media__class.setScreenFalse = function () {
    Media.screen.isLaptopOrDesktop_1224 = false;
    Media.screen.isTabbletOrLike_1224 = false;
    Media.screen.isTabbletOrMobile_1224 = false;
    //        Media.screen.isPortrait = false;
    //      Media.screen.isLandscape = false;
    Media.screen.isRretinaOrBigger_2d = false;
    // Media.screen.isSpeech = false;
}, Media__class.initializeScreenListeners = function () {

    console.log("Media.initializeScreenListeners");

    var synth = window.speechSynthesis;
    var utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
    var utterance2 = new SpeechSynthesisUtterance('We should say another sentence too, just to be on the safe side.');

    //   synth.speak(utterance1);
    //   synth.speak(utterance2);

    var amISpeaking = synth.speaking; // will return true if utterance 1 or utterance 2 are currently being spoken
    console.log("Media.amISpeaking");
    console.log(amISpeaking);

    /*
    if (Media.recognition)   
    {            
        console.log('Audio listening:');
        */
    /*
    Media.recognition.addEventListener('audiostart', function() {
        console.log('Audio capturing is starting');
        Media.screen.isSpeech = true;
    });
    */
    /*
     Media.recognition.onaudioend = function() {
         console.log('Audio capturing ended');
         Media.screen.isSpeech = true;
       };
       */
    // }

    // speech: 
    /*
    Media.addMediaListener(x => { if (!x.matches) return; Media.setScreenFalse();
            Media.screen.isLaptopOrDesktop_1224 = true; Media.screen.isSpeech = true; }, 
            'only speech and body { voice-family: Paul } and screen and (min-device-width: 1224px)');
    Media.addMediaListener(x => { if (!x.matches) return; Media.setScreenFalse();
            Media.screen.isTabbletOrLike_1224 = true; Media.screen.isSpeech = true; }, 
            'only speech and body { voice-family: Paul } and screen and (min-device-width: 1824px)');
    Media.addMediaListener(x => { if (!x.matches) return; Media.setScreenFalse();
            Media.screen.isTabbletOrMobile_1224 = true; Media.screen.isSpeech = true; }, 
            'only speech and body { voice-family: Paul } and screen and (max-width: 1224px)');
    Media.addMediaListener(x => { if (!x.matches) return; Media.screen.isLandscape = false;
            Media.screen.isPortrait = true; Media.screen.isSpeech = true; }, 
            'only speech and body { voice-family: Paul } and screen and (orientation: portrait)');
    Media.addMediaListener(x => { if (!x.matches) return; Media.screen.isPortrait = false;
            Media.screen.isLandscape = true; Media.screen.isSpeech = true; }, 
     ,        'only speech and body { voice-family: Paul } and screen and (orientation: landscape)');
    Media.addMediaListener(x => { if (!x.matches) return; Media.setScreenFalse();
            Media.screen.isRretinaOrBigger_2d = true;Media.screen.isSpeech = true; }, 
            'only speech and body { voice-family: Paul } and screen and (min-resolution: 2dppx)');
      */

    Media.addMediaListener(function (x) {
        if (!x.matches) return;Media.setScreenFalse();
        Media.screen.isLaptopOrDesktop_1224 = true;
    }, 'screen and (min-device-width: 1224px)');
    Media.addMediaListener(function (x) {
        if (!x.matches) return;Media.setScreenFalse();
        Media.screen.isTabbletOrLike_1224 = true;
    }, 'screen and (min-device-width: 1824px)');
    Media.addMediaListener(function (x) {
        if (!x.matches) return;Media.setScreenFalse();
        Media.screen.isTabbletOrMobile_1224 = true;
    }, 'screen and (max-width: 1224px)');
    Media.addMediaListener(function (x) {
        if (!x.matches) return;Media.screen.isLandscape = false;
        Media.screen.isPortrait = true;
    }, 'screen and (orientation: portrait)');
    Media.addMediaListener(function (x) {
        if (!x.matches) return;Media.screen.isPortrait = false;
        Media.screen.isLandscape = true;
    }, 'screen and (orientation: landscape)');
    Media.addMediaListener(function (x) {
        if (!x.matches) return;Media.setScreenFalse();
        Media.screen.isRretinaOrBigger_2d = true;
    }, 'screen and (min-resolution: 2dppx)');
}, Media__temp);


/* harmony default export */ var utils_Media = (Media);
// CONCATENATED MODULE: ./routes/profile/index.js


function profile__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function profile__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function profile__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






// import { MediaQuery } from '../../preact-responsive/preact-responsive';


function B(props) {
	return Object(preact_min["h"])(
		'h1',
		null,
		'Hello, ',
		props.name
	);
}

function A(props) {
	return Object(preact_min["h"])(B, { name: props.name });
}

var profile_Profile = function (_Component) {
	profile__inherits(Profile, _Component);

	function Profile(props) {
		var _this$state;

		profile__classCallCheck(this, Profile);

		var _this = profile__possibleConstructorReturn(this, _Component.call(this, props));

		_this.updateTime = function () {
			_this.setState({ time: Date.now() });
		};

		_this.increment = function () {
			_this.setState({ count: _this.state.count + 1 });
		};

		_this.getApiUrl = function () {
			var tz = _this.state.tz;
			var msg = _this.state.msg;
			var host = "https://andthetimeis.com";
			return host + "/" + tz + "/" + msg + ".json";
		};

		_this.addKissaCount = function (event) {
			_this.setState({ kissacount: _this.state.kissacount + 1 });
		};

		_this.state = (_this$state = {
			time: Date.now(),
			count: 10,
			tz: null,
			msg: 'now'
		}, _this$state['tz'] = 'PST', _this$state.currentTime = null, _this$state.kissacount = 0, _this$state);

		_this.fetchCurrentTime = _this.fetchCurrentTime.bind(_this);
		_this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	// gets called when this route is navigated to


	Profile.prototype.componentDidMount = function componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	};

	// gets called just before navigating away from the route


	Profile.prototype.componentWillUnmount = function componentWillUnmount() {
		clearInterval(this.timer);
	};

	// update the current time


	Profile.prototype.handleChange = function handleChange(newState) {
		this.setState({ newState: newState });
	};

	Profile.prototype.handleFormSubmit = function handleFormSubmit(evt) {
		this.fetchCurrentTime();
	};

	Profile.prototype.fetchCurrentTime = function fetchCurrentTime() {
		var _this2 = this;

		var url = this.getApiUrl();
		fetch(url, {
			mode: 'cors',
			credentials: 'include'
		}).then(function (resp) {
			return resp.json();
		}).then(function (data) {
			var currentTime = data.dataString;
			_this2.setState({ currentTime: currentTime });
		});
	};

	// Note: `user` comes from the URL, courtesy of our router
	Profile.prototype.render = function render(_ref, _ref2) {
		var user = _ref.user;
		var time = _ref2.time,
		    count = _ref2.count;
		var _state = this.state,
		    currentTime = _state.currentTime,
		    tz = _state.tz;
		var kissacount = this.state.kissacount;

		var apiUrl = this.getApiUrl();

		console.log("Media.screen");
		console.log(utils_Media.screen);

		return Object(preact_min["h"])(
			'div',
			{ 'class': profile_style_default.a.profile + ' page' },
			Object(preact_min["h"])(
				'h1',
				null,
				'Profile: ',
				user
			),
			Object(preact_min["h"])(
				'p',
				null,
				'This is the user profile for a user named ',
				user,
				'.'
			),
			Object(preact_min["h"])(
				'div',
				null,
				'Current time: ',
				new Date(time).toLocaleString()
			),
			Object(preact_min["h"])(
				'p',
				null,
				Object(preact_min["h"])(
					Button_default.a,
					{ raised: true, ripple: true, onClick: this.increment },
					'Click Me'
				),
				' ',
				'Clicked ',
				count,
				' times.'
			),
			Object(preact_min["h"])(
				'div',
				null,
				!currentTime && Object(preact_min["h"])(
					'button',
					{ onClick: this.fetchCurrentTime },
					'Get the current time'
				),
				currentTime && Object(preact_min["h"])(
					'div',
					null,
					'The current time is: ',
					currentTime
				),
				Object(preact_min["h"])(TimeForm_TimeForm, {
					onFormSubmit: this.handleFormSubmit,
					onFormChange: this.handleChange,
					tz: tz,
					msg: 'now'
				}),
				Object(preact_min["h"])(
					'p',
					null,
					'We\'ll be making a request from: ',
					Object(preact_min["h"])(
						'code',
						null,
						apiUrl
					)
				)
			),
			Object(preact_min["h"])(A, { name: "kissa " + kissacount }),
			Object(preact_min["h"])(
				'button',
				{ onClick: this.addKissaCount },
				'KissaCount'
			)
		);
	};

	return Profile;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../node_modules/preact-material-components/Card/index.js
var Card = __webpack_require__("sJaT");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Card/style.css
var Card_style = __webpack_require__("UlEV");
var Card_style_default = /*#__PURE__*/__webpack_require__.n(Card_style);

// EXTERNAL MODULE: ./routes/404/style.css
var _04_style = __webpack_require__("xxi1");
var _04_style_default = /*#__PURE__*/__webpack_require__.n(_04_style);

// CONCATENATED MODULE: ./routes/404/index.js


function _04__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _04__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _04__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _04__ref = Object(preact_min["h"])(
	'h2',
	{ 'class': ' mdc-typography--title' },
	'404! Page not found.'
);

var _04_NotFound = function (_Component) {
	_04__inherits(NotFound, _Component);

	function NotFound() {
		_04__classCallCheck(this, NotFound);

		return _04__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	NotFound.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ 'class': _04_style_default.a.home + ' page' },
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(
					'div',
					{ 'class': _04_style_default.a.cardHeader },
					_04__ref
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': _04_style_default.a.cardBody },
					'Looks like the page you are trying to access, doesn\'t exist.'
				)
			)
		);
	};

	return NotFound;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./unistore/util.js
// Bind an object/factory of actions to the store and wrap them.
function mapActions(actions, store) {
	if (typeof actions === 'function') actions = actions(store);
	var mapped = {};
	for (var i in actions) {
		mapped[i] = store.action(actions[i]);
	}
	return mapped;
}

// select('foo,bar') creates a function of the form: ({ foo, bar }) => ({ foo, bar })
function util_select(properties) {
	if (typeof properties === 'string') properties = properties.split(/\s*,\s*/);
	return function (state) {
		var selected = {};
		for (var i = 0; i < properties.length; i++) {
			selected[properties[i]] = state[properties[i]];
		}
		return selected;
	};
}

// Lighter Object.assign stand-in
function util_assign(obj, props) {
	for (var i in props) {
		obj[i] = props[i];
	}return obj;
}
// CONCATENATED MODULE: ./unistore/index.js


/**
 * Creates a new store, which is a tiny evented state container.
 * @name createStore
 * @param {Object} [state={}]		Optional initial state
 * @returns {store}
 * @example
 * let store = createStore();
 * store.subscribe( state => console.log(state) );
 * store.setState({ a: 'b' });   // logs { a: 'b' }
 * store.setState({ c: 'd' });   // logs { a: 'b', c: 'd' }
 */
function createStore(state) {
	var listeners = [];
	state = state || {};
	var listenersafterspeckeys = [];

	function unsubscribe(listener) {
		var out = [];
		for (var i = 0; i < listeners.length; i++) {
			if (listeners[i] === listener) {
				listener = null;
			} else {
				out.push(listeners[i]);
			}
		}
		listeners = out;
	}

	function unsubscribeAttributeNameListener(listener) {
		var out = [];
		for (var i = 0; i < listenersafterspeckeys.length; i++) {
			if (listenersafterspeckeys[i] === listener) {
				listener = null;
			} else {
				out.push(listenersafterspeckeys[i]);
			}
		}
		listenersafterspeckeys = out;
	}

	/**
  * if a listerner function should to be called {@link setState}
  * @name update updated change object
  * @name keys defined keys, data attribute names when to receive listener will be called  
  */

	function upDateNameIn(update, keys) {
		var ret = false;
		/*
  console.log("upDateNameIn update");
  console.log(update);
  console.log("upDateNameIn keys");
  console.log(keys);
  */
		for (var key in update) {
			/*
   console.log("upDateNameIn key");
   console.log(key);
   console.log("upDateNameIn value");
   console.log(update[key]);
   */
			for (var k = 0; k < keys.length; k++) {
				if (key === keys[k]) {
					// console.log("ret=true");
					ret = true;
					break;
				}
			}
		}
		return ret;
	}

	/* A modified setState function: constains added code for conditionally function calls (later for loop).	
  */
	function setState(update, overwrite, action) {
		state = overwrite ? update : util_assign(util_assign({}, state), update);
		var currentListeners = listeners;
		for (var i = 0; i < currentListeners.length; i++) {
			currentListeners[i](state, action);
		}

		for (var k = 0; k < listenersafterspeckeys.length; k++) {
			/*
   console.log("setState listenersafterspeckeys");
   console.log(listenersafterspeckeys[k]);
   */
			if (upDateNameIn(update, listenersafterspeckeys[k].keys)) listenersafterspeckeys[k].callfunc(state, action);
		}
	}

	/* A modified setState function: does not call any listeners!	
  	 */
	function setStateNoneCallListeners(update, overwrite) {
		state = overwrite ? update : util_assign(util_assign({}, state), update);
	}

	/**
  * An observable state container, returned from {@link createStore}
  * @name store
  */

	return (/** @lends store */{

			/**
    * Create a bound copy of the given action function.
    * The bound returned function invokes action() and persists the result back to the store.
    * If the return value of `action` is a Promise, the resolved value will be used as state.
    * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
    * @returns {Function} boundAction()
    */
			action: function action(_action) {
				function apply(result) {
					setState(result, false, _action);
				}

				// Note: perf tests verifying this implementation: https://esbench.com/bench/5a295e6299634800a0349500
				return function () {
					var args = [state];
					for (var i = 0; i < arguments.length; i++) {
						args.push(arguments[i]);
					}var ret = _action.apply(this, args);
					if (ret != null) {
						if (ret.then) return ret.then(apply);
						return apply(ret);
					}
				};
			},


			/**
    * Apply a partial state object to the current state, invoking registered listeners.
    * @param {Object} update				An object with properties to be merged into state
    * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
    */
			setState: setState,

			/**
    * Apply a partial state object to the current state, with none invoking registered listeners.
    * @param {Object} update				An object with properties to be merged into state
    * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
    */
			setStateNoneCallListeners: setStateNoneCallListeners,

			/**
    * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
    * @param {Function} listener	A function to call when state changes. Gets passed the new state.
    * @returns {Function} unsubscribe()
    */
			subscribe: function subscribe(listener) {
				listeners.push(listener);
				return function () {
					unsubscribe(listener);
				};
			},


			/**
    * Register a listener object which 'callfunc' attribute function to 
    * be called whenever object 'keys' array contains same attribute key state 
    * is changed. Returns an `unsubscribeAttributeNameListener()` function. A reason for this subribe
    * function if there is exists recursive listener call exception!
    * @param {Ojbect} keys A array, which names define state attribute name to be received.
    * @param {Function} callfunc A function to call when state changes.
    * Gets passed the new state.
    * @returns {Function} unsubscribeAttributeNameListener()
    * @example
    * let keys = [];
    * keys.push('fetchitems');
          * this.unsubscribelistener = store.subscribeAttributeNameListener( keys, state => this.listenerStoreChange2(state) );
    */
			subscribeAttributeNameListener: function subscribeAttributeNameListener(keys, callfunc) {
				var listenerobj = {};
				listenerobj.keys = keys;
				listenerobj.callfunc = callfunc;
				listenersafterspeckeys.push(listenerobj);
				return function () {
					unsubscribeAttributeNameListener(listenerobj);
				};
			},


			/**
    * Remove a previously-registered listener function.
    * @param {Function} listener	The callback previously passed to `subscribe()` that should be removed.
    * @function
    */
			unsubscribe: unsubscribe,

			/**
    * Remove a previously-registered listener function.
    * @param {Object} listenerobj	The callback previously passed 
    * to `subscribeAttributeNameListener()` that should be removed.
    * @function
    */
			unsubscribeAttributeNameListener: unsubscribeAttributeNameListener,

			/**
    * Retrieve the current state object.
    * @returns {Object} state
    */
			getState: function getState() {
				return state;
			}
		}
	);
}
// CONCATENATED MODULE: ./utils/store.js



var bSSEeventsExistsInBrowser = false;

if (typeof EventSource !== "undefined") {
  // Yes! Server-sent events support!
  // Some code.....1
  console.info("typeof(EventSource) supported!");
  bSSEeventsExistsInBrowser = true;
} else {
  // Sorry! No server-sent events support..
  bSSEeventsExistsInBrowser = false;
}

var initialStore = { tabIndex: 0,
  fetchitems: [], channeltypeitems: [], programtypeitems: [],
  channels: [], bDisplayAllDescriptions: false, categories: [],
  bSearchButtonClicked: false, textSearch: null, screen: null
};

var store_store = createStore(initialStore);
// const store = process.env.NODE_ENV === 'production' ?  createStore(initialState) : devtools(createStore(initialState));
// store.subscribe( state => console.log("subscribe: " +state) );
// store.setState({ c: 'd' }); 

/* harmony default export */ var utils_store = (store_store);
// CONCATENATED MODULE: ./unistore/integrations/preact.js



/**
 * Wire a component up to the store. Passes state as props, re-renders on change.
 * @param {Function|Array|String} mapStateToProps  A function mapping of store state to prop values, or an array/CSV of properties to map.
 * @param {Function|Object} [actions] 				Action functions (pure state mappings), or a factory returning them. Every action function gets current state as the first parameter and any other params next
 * @returns {Component} ConnectedComponent
 * @example
 * const Foo = connect('foo,bar')( ({ foo, bar }) => <div /> )
 * @example
 * const actions = { someAction }
 * const Foo = connect('foo,bar', actions)( ({ foo, bar, someAction }) => <div /> )
 * @example
 * @connect( state => ({ foo: state.foo, bar: state.bar }) )
 * export class Foo { render({ foo, bar }) { } }
 */
function connect(mapStateToProps, actions) {
	if (typeof mapStateToProps != 'function') {
		mapStateToProps = util_select(mapStateToProps || {});
	}
	return function (Child) {
		function Wrapper(props, context) {
			var _this = this;

			var store = context.store;
			var state = mapStateToProps(store ? store.getState() : {}, props);
			var boundActions = actions ? mapActions(actions, store) : { store: store };
			var update = function update() {
				var mapped = mapStateToProps(store ? store.getState() : {}, props);
				for (var i in mapped) {
					if (mapped[i] !== state[i]) {
						state = mapped;
						return _this.setState({});
					}
				}for (var _i in state) {
					if (!(_i in mapped)) {
						state = mapped;
						return _this.setState({});
					}
				}
			};
			this.componentWillReceiveProps = function (p) {
				props = p;
				update();
			};
			this.componentDidMount = function () {
				store.subscribe(update);
			};
			this.componentWillUnmount = function () {
				store.unsubscribe(update);
			};
			this.render = function (props) {
				return Object(preact_min["h"])(Child, util_assign(util_assign(util_assign({}, boundActions), props), state));
			};
		}
		return (Wrapper.prototype = new preact_min["Component"]()).constructor = Wrapper;
	};
}

/**
 * Provider exposes a store (passed as `props.store`) into context.
 *
 * Generally, an entire application is wrapped in a single `<Provider>` at the root.
 * @class
 * @extends Component
 * @param {Object} props
 * @param {Store} props.store	A {Store} instance to expose via context.
 */
function Provider(props) {
	this.getChildContext = function () {
		return { store: props.store };
	};
}
Provider.prototype.render = function (props) {
	return props.children && props.children[0] || props.children;
};
// EXTERNAL MODULE: ./routes/yle/style.css
var yle_style = __webpack_require__("H+hJ");
var yle_style_default = /*#__PURE__*/__webpack_require__.n(yle_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Select/index.js
var Select = __webpack_require__("9v1x");
var Select_default = /*#__PURE__*/__webpack_require__.n(Select);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Menu/style.css
var Menu_style = __webpack_require__("0PQN");
var Menu_style_default = /*#__PURE__*/__webpack_require__.n(Menu_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Select/style.css
var Select_style = __webpack_require__("HGCE");
var Select_style_default = /*#__PURE__*/__webpack_require__.n(Select_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/LayoutGrid/index.js
var LayoutGrid = __webpack_require__("Q1yZ");
var LayoutGrid_default = /*#__PURE__*/__webpack_require__.n(LayoutGrid);

// EXTERNAL MODULE: ../node_modules/preact-material-components/LayoutGrid/style.css
var LayoutGrid_style = __webpack_require__("JL9d");
var LayoutGrid_style_default = /*#__PURE__*/__webpack_require__.n(LayoutGrid_style);

// EXTERNAL MODULE: ../node_modules/abort-controller/dist/abort-controller.js
var abort_controller = __webpack_require__("Gxfw");
var abort_controller_default = /*#__PURE__*/__webpack_require__.n(abort_controller);

// EXTERNAL MODULE: ./components/ylehtml/style.css
var ylehtml_style = __webpack_require__("ll9a");
var ylehtml_style_default = /*#__PURE__*/__webpack_require__.n(ylehtml_style);

// EXTERNAL MODULE: ../node_modules/fetch-jsonp/build/fetch-jsonp.js
var fetch_jsonp = __webpack_require__("bmYm");
var fetch_jsonp_default = /*#__PURE__*/__webpack_require__.n(fetch_jsonp);

// EXTERNAL MODULE: ../node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("3dZY");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,
    hooks_module_u,
    hooks_module_r,
    hooks_module_o = 0,
    hooks_module_i = [],
    c = preact_min["options"].__b,
    f = preact_min["options"].__r,
    e = preact_min["options"].diffed,
    a = preact_min["options"].__c,
    v = preact_min["options"].unmount;function m(t, r) {
  preact_min["options"].__h && preact_min["options"].__h(hooks_module_u, t, hooks_module_o || r), hooks_module_o = 0;var i = hooks_module_u.__H || (hooks_module_u.__H = { __: [], __h: [] });return t >= i.__.length && i.__.push({}), i.__[t];
}function l(n) {
  return hooks_module_o = 1, p(w, n);
}function p(n, r, o) {
  var i = m(hooks_module_t++, 2);return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = hooks_module_u), i.__;
}function y(r, o) {
  var i = m(hooks_module_t++, 3);!preact_min["options"].__s && hooks_module_k(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__H.__h.push(i));
}function h(r, o) {
  var i = m(hooks_module_t++, 4);!preact_min["options"].__s && hooks_module_k(i.__H, o) && (i.__ = r, i.__H = o, hooks_module_u.__h.push(i));
}function hooks_module_s(n) {
  return hooks_module_o = 5, d(function () {
    return { current: n };
  }, []);
}function _(n, t, u) {
  hooks_module_o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}function d(n, u) {
  var r = m(hooks_module_t++, 7);return hooks_module_k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}function hooks_module_A(n, t) {
  return hooks_module_o = 8, d(function () {
    return n;
  }, t);
}function F(n) {
  var r = hooks_module_u.context[n.__c],
      o = m(hooks_module_t++, 9);return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(hooks_module_u)), r.props.value) : n.__;
}function T(t, u) {
  preact_min["options"].useDebugValue && preact_min["options"].useDebugValue(u ? u(t) : t);
}function q(n) {
  var r = m(hooks_module_t++, 10),
      o = l();return r.__ = n, hooks_module_u.componentDidCatch || (hooks_module_u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}function x() {
  hooks_module_i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], preact_min["options"].__e(u, t.__v);
    }
  }), hooks_module_i = [];
}preact_min["options"].__b = function (n) {
  hooks_module_u = null, c && c(n);
}, preact_min["options"].__r = function (n) {
  f && f(n), hooks_module_t = 0;var r = (hooks_module_u = n.__c).__H;r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, preact_min["options"].diffed = function (t) {
  e && e(t);var o = t.__c;o && o.__H && o.__H.__h.length && (1 !== hooks_module_i.push(o) && hooks_module_r === preact_min["options"].requestAnimationFrame || ((hooks_module_r = preact_min["options"].requestAnimationFrame) || function (n) {
    var t,
        u = function u() {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);b && (t = requestAnimationFrame(u));
  })(x)), hooks_module_u = void 0;
}, preact_min["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact_min["options"].__e(r, t.__v);
    }
  }), a && a(t, u);
}, preact_min["options"].unmount = function (t) {
  v && v(t);var u = t.__c;if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    preact_min["options"].__e(t, u.__v);
  }
};var b = "function" == typeof requestAnimationFrame;function g(n) {
  var t = hooks_module_u;"function" == typeof n.__c && n.__c(), hooks_module_u = t;
}function j(n) {
  var t = hooks_module_u;n.__c = n.__(), hooks_module_u = t;
}function hooks_module_k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}
//# sourceMappingURL=hooks.module.js.map
// EXTERNAL MODULE: ../node_modules/preact-material-components/Chips/index.js
var Chips = __webpack_require__("o82Q");
var Chips_default = /*#__PURE__*/__webpack_require__.n(Chips);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Chips/style.css
var Chips_style = __webpack_require__("xsXW");
var Chips_style_default = /*#__PURE__*/__webpack_require__.n(Chips_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Theme/style.css
var Theme_style = __webpack_require__("a81U");
var Theme_style_default = /*#__PURE__*/__webpack_require__.n(Theme_style);

// CONCATENATED MODULE: ./components/ylehtml/YleProgram.js


















// import 'whatwg-fetch';



// import StaticFunctions from '../../utils/StaticFunctions';

var YleProgram__ref3 = Object(preact_min["h"])(
    'space',
    null,
    ' '
);

var YleProgram__ref4 = Object(preact_min["h"])('br', null);

var YleProgram__ref5 = Object(preact_min["h"])(Card_default.a.Media, { className: 'card-media' });

function YleProgram(props) {
    var _useState = l(false),
        displaydescription = _useState[0],
        setDisplayDescription = _useState[1];
    //    const [displayAllDescriptions, setDisplayAllDescriptions] = useState(props.displayAllDescriptions);


    var scrollingDlgRef = hooks_module_s(null);

    // dot = " height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; display: inline-block;";
    var dot = "border-radius: 50%; width: 10px; height: 10px; padding: 2px; background: #fff; " + " border: 2px solid #000; color: #000; text-align: center; font: 10px Arial, sans-serif;";

    var onClickDisplay = function onClickDisplay(event) {
        event.preventDefault();
        if (props.bShowDesciption) return;
        // console.log("onClickDisplay");
        if (props.displayAllDescriptions) return;
        if (!displaydescription) scrollingDlgRef.current.MDComponent.show();
        setDisplayDescription(!displaydescription);
    };

    var onClickDisplayDialog = function onClickDisplayDialog(event) {
        event.preventDefault();
        // console.log("onClickDisplayDialog");
        if (displaydescription) scrollingDlgRef.current.MDComponent.close();
        setDisplayDescription(!displaydescription);
    };

    var getTime = function getTime(timemillisec) {
        var day = new Date(timemillisec * 1000);
        var hours = day.getHours();
        var minutes = day.getMinutes();;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;
        return "" + hours + ":" + minutes;
    };

    /*
    	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    jsonitem.link =
        <Chips.Chip onClick={onClickDisplay} >
                <Chips.Text>{data.title}</Chips.Text></Chips.Chip> : <Chips.Chip onClick={onClickDisplay}>
                <Chips.Text>Kissa</Chips.Text></Chips.Chip> }
                   {(!displaydescription ? 
            <Button onClick={onClickDisplay} >
                {data.title}</Button> : <Chips.Chip onClick={onClickDisplay}>
                <Chips.Text>Kissa</Chips.Text></Chips.Chip>) }
                               <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
              <Chips.Text>{props.data.title}</Chips.Text></Chips.Chip> 
    */

    var openHtmlPage = function openHtmlPage(event) {
        console.log("openHtmlPage");
        event.preventDefault();
        var blankurl = event.target.href;
        console.log("blankurl");
        console.log(blankurl);
        // window.open(blankurl, '_blank', "Ampparissa", "location=no");
        window.open(blankurl, '_blank', "Ampparissa");
        return false;
    };

    var getPOfTitleIndex = function getPOfTitleIndex(props) {
        console.log("getPOfTitleIndex");

        var index = props.data.titleindex;
        console.log("titleindex");
        console.log(index);
        var title = props.data.title;
        if (title != null) title = title.toString();
        console.log("title");
        console.log(title);
        if (index == undefined || index < 0) return title;
        var ret = props.getPOfIndex(index, title);
        console.log("ret after getPOfIndex");
        console.log(ret);
        return ret;
    };

    var _ref = Object(preact_min["h"])(
        'span',
        { style: dot },
        'E'
    );

    var _ref2 = Object(preact_min["h"])(
        'span',
        { style: dot },
        'U'
    );

    var getProgramSymbol = function getProgramSymbol(props) {
        var ret = null;
        if (props.data.movie) ret = _ref;else if (props.data.sport) ret = _ref2;

        return ret;
    };

    // <p><a href={props.data.link} target="_blank" >ohjelmalinkki</a></p>onClik={this.openHtmlPage} linkurl={props.data.link}

    // +this.getPOfTitleIndex()

    return Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
            'div',
            { onClick: onClickDisplay },
            Object(preact_min["h"])(
                'h4',
                null,
                props.data.startTime ? props.data.startTime + " " : '',
                props.data.name ? props.data.name + " " : '',
                ' ',
                props.data.captiontext ? props.data.captiontext : ''
            ),
            props.bShowDesciption && Object(preact_min["h"])(
                'p',
                null,
                props.data.description ? props.data.description : ''
            )
        ),
        Object(preact_min["h"])(
            Dialog_default.a,
            {
                ref: scrollingDlgRef },
            Object(preact_min["h"])(
                Dialog_default.a.Header,
                null,
                props.channelname
            ),
            Object(preact_min["h"])(
                Dialog_default.a.Body,
                { scrollable: true },
                Object(preact_min["h"])(
                    Card_default.a,
                    null,
                    Object(preact_min["h"])(
                        'div',
                        { 'class': 'card-header' },
                        Object(preact_min["h"])(
                            'h3',
                            { 'class': ' mdc-typography--title' },
                            getProgramSymbol(props),
                            ' ',
                            props.data.startTime,
                            YleProgram__ref3,
                            ' ',
                            props.data.name,
                            ' ',
                            props.data.captiontext ? props.data.captiontext : ''
                        ),
                        Object(preact_min["h"])(
                            'h3',
                            { 'class': ' mdc-typography--title' },
                            props.data.description ? props.data.description : ''
                        ),
                        YleProgram__ref4
                    ),
                    YleProgram__ref5
                )
            ),
            Object(preact_min["h"])(
                Dialog_default.a.Footer,
                null,
                Object(preact_min["h"])(
                    Dialog_default.a.FooterButton,
                    { onCancel: onClickDisplayDialog, cancel: true, accept: true },
                    'Sulje'
                )
            )
        )
    );
}
// CONCATENATED MODULE: ./components/ylehtml/YleChannel.js




// import 'whatwg-fetch';

//import dayjs from 'dayjs';

// import Category from './Category';
// import GridOrList from './GridOrList';


// import StaticFunctions from '../../utils/StaticFunctions';

function YleChannel(props) {

	// formatForServiceTime = "yyyy-MM-dd'T'HH:mm:ss.SSSZZ";

	return Object(preact_min["h"])(
		'div',
		null,
		props.data && props.data.nomoreprogramstoday && props.data.desciption ? Object(preact_min["h"])(
			'div',
			null,
			props.data.desciption
		) : null,
		Object(preact_min["h"])(
			'div',
			null,
			props.schedules && props.schedules.map(function (s, k) {
				if (s === null || s === undefined || props.data === null || props.data == undefined) {
					console.log("s= k=" + k);
					console.log(s);
					console.log("data=");
					console.log(props.data);
				}
				if (props.data || s.status != 'schedule-list__no-data') return Object(preact_min["h"])(YleProgram, { id: k, data: s, selectedcategory: props.selectedcategory,
					bSvLang: props.bSvLang,
					channelname: props.data ? props.data : '',
					bShowDesciption: props.bShowDesciption });
			})
		)
	);
}
// CONCATENATED MODULE: ./components/ylehtml/DayServices.js


function DayServices__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DayServices__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DayServices__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// import { useState, useEffect  } from 'preact/hooks';
// import Config from '../util/Config';
//import CssDark from '../context/Context';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 

var DayServices__ref = Object(preact_min["h"])(
  'div',
  { 'class': ' mdc-typography--caption' },
  '-- Ohjelmataulukko'
);

var DayServices_DayServices = function (_Component) {
  DayServices__inherits(DayServices, _Component);

  function DayServices(props) {
    DayServices__classCallCheck(this, DayServices);

    var _this = DayServices__possibleConstructorReturn(this, _Component.call(this, props));

    _this.getDayPrograms = function (cdate, programs) {
      console.log("getDayPrograms");
      return programs;
    };

    _this.getDayServices = function (cdate, progsource, services) {
      console.log("getDayServices");
      var channelType = 'TVChannel';
      if (progsource === 'rtv') channelType = 'TVChannel';else if (progsource === 'rradio') channelType = 'RadioChannel';else if (progsource === 'rareena') channelType = 'OndemandServic';

      console.log("channelType");
      console.log(channelType);
      console.log("services");
      console.log(services);

      if (services === undefined || services === null) return null;
      var ret = services.filter(function (s) {
        return s.type.includes(channelType);
      });
      if (ret != null && ret.length > 0) ret = ret.map(function (s, i) {
        switch (s.id) {
          case 'yle-tv1':
            s.picture = 'yle-tv1_vtc.png';
            break;
          case 'yle-tv2':
            s.picture = 'yle-tv2_vtc.png';
            break;
          case 'yle-teema':
            s.picture = 'yle-teema_vt.png';
            break;
          case 'yle-fem':
            s.picture = 'yle-teema-fem_vt.png';
            break;
          case 'tv-finland':
            s.picture = 'tv-finland_vt.png';
            break;
          case 'yle-hd':
            // s.picture = '';
            break;
          case 'tv-finland':
            s.picture = 'tv-finland_vt.png';
            break;
          case 'yle-radio-1':
            s.picture = 'yle-radio-1_vtc.png';
            break;
          case 'yle-puhe':
            s.picture = 'yle-puhe_vtx.png';
            break;
          case 'yle-mondo':
            s.picture = 'yle-mondo_vtx.png';
            break;
          case 'ylex':
            s.picture = 'ylex_vtx.png';
            break;
          case 'yle-x3m':
            s.picture = 'yle-x3m_vtx.png';
            break;
          case 'yle-radio-vega':
            //  s.picture = '';
            break;
          case 'radio-vega-huvudstadsregione':
            //  s.picture = '';
            break;
          case 'radio-vega-vastnyland':
            // s.picture = '';
            break;
          case 'radio-vega-aboland':
            // s.picture = '';
            break;
          case 'radio-vega-osterbotten':
            // s.picture = '';
            break;
          case 'radio-vega-ostnyland':
            // s.picture = '';
            break;
          case 'radio-vega-osterbotten':
            // s.picture = '';
            break;
          case 'yle-radio-suomi':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-lappeenranta':
            //  s.picture = '';
            break;
          case 'yle-radio-suomi-mikkeli':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-kajaani':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-kotka':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-laht':
            //  s.picture = '';
            break;
          case 'yle-radio-suomi-rovaniemi':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-oulu':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-pohjanmaa':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-joensuu':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-hameenlinn':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-kokkola':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-jyvaskyla':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-kemi':
            //  s.picture = '';
            break;
          case 'yle-radio-suomi-kuopio':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-pori':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-tampere':
            // s.picture = '';
            break;
          case 'yle-radio-suomi-turku':
            // s.picture = '';
            break;
          case 'yle-sami-radio':
            s.picture = 'yle-sami-radio_vtc.png';
            break;
          case 'yle-radio-suomi-helsinki':
            s.picture = 'yle-radio-suomi-helsinki_vtc.png';
            break;
          case 'yle-klassinen':
            s.picture = 'yle-klassinen_vtc.png';
            break;
          case 'elavan-arkiston-nettiradio':
            // s.picture = '';
            break;
          case 'yle-areena':
            s.picture = 'yle-areena_vt.png';
            break;
          case 'yle-elava-arkisto':
            //  s.picture = '';
            break;
          case 'yle-teema-fem':
            s.picture = 'yle-teema-fem_vt.png';
            break;

          default:
            ;
            break;
        }
        return s;
      });
      console.log("ret");
      console.log(ret);

      return ret;
    };

    _this.prevDate = function () {
      var cdata = _this.state.currentDate;
      cdata.setDate(cdata.getDate() - 1);
      _this.setState({ currentDate: cdata });
      console.log(_this.state.currentDate);
    };

    _this.getTableHeadersAndTableRowsAfterServices = function () {
      var schedules = _this.state.schedules;
      var ctrlservices = [];
      // Array.from(services).forEach(s => {
      //  ctrlservices
      // });
      console.log("schedules");
      console.log(schedules);

      var ret = {};
      ret.headers = [];
      ret.channels = [];
      if (services != null) {
        ret.headers = schedules.map(function (s, i) {
          return s.name;
        });

        var tmp_channels = schedules.map(function (s2, i) {
          return Object(preact_min["h"])(YleChannel, { data: s2, selectedcategory: _this.props.selectedcategory,
            progsource: _this.props.progsource,
            selecteddate: _this.props.selecteddate
          });
        });
        ret.channels = tmp_channels;
      }
      return ret;
    };

    if (utils_Config.bDebug) {
      console.log("DayServices.js");
      console.log("props");
      console.log(props);
    }

    var cdate = new Date(props.currentDate);
    _this.state = {
      currentDate: cdate,
      programs: [],
      services: props.data,
      progsource: props.progsource,
      bShowTableBorder: props.bShowTableBorder,
      selectedcategory: props.selectedcategory,
      bShowDesciption: props.bShowDesciption
    };

    if (utils_Config.bDebug) {
      console.log("programs");
      console.log(_this.state.programs);
      console.log("services");
      console.log(_this.state.services);
    }
    // this.prevDate = this.prevDate.bind(this);
    _this.nextDate = _this.nextDate.bind(_this);
    return _this;
  }

  DayServices.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (utils_Config.bDebug) {
      console.log("DayGrid componentWillReceiveProps nextProps");
      console.log(nextProps);
    }

    if (nextProps.selecteddate != this.props.selecteddate || nextProps.progsource != this.props.progsource || nextProps.selectedcategory != this.props.selectedcategory) this.setState({ selecteddate: nextProps.selecteddate,
      progsource: nextProps.progsource,
      selectedcategory: nextProps.selectedcategory
    });
    /*
    if (nextProps.editErrMsg != null)
    this.setState({ errmsg: nextProps.editErrMsg});
    else
    if (!nextProps.tabClassHide)
    this.initializeState(nextProps);
    //	this.forceUpdate();            
    */
  };

  DayServices.prototype.componentDidMount = function componentDidMount() {
    if (utils_Config.bDebug) console.log("DayServices componentDidMount 1");
    //	this.abortController = new AbortController(); // 1        
    //	this.abortSignal = this.abortController.signal; // 2	
  };

  DayServices.prototype.nextDate = function nextDate() {
    var cdata = this.state.currentDate;
    cdata.setDate(cdata.getDate() + 1);
    this.setState({ currentDate: cdata });
    console.log(this.state.currentDate);
  };

  DayServices.prototype.render = function render(props, state) {
    var _this2 = this;

    if (utils_Config.bDebug) {
      console.log("DayServices render");
      console.log(state);
    }

    var tableBorderStyle = '';
    if (state.bShowTableBorder) tableBorderStyle = ' border: 1px solid black;';

    var tableheaders = null;
    var tabletds = null;
    var headers = null;
    var channels = null;
    if (state.services != null) {
      var _channels = null;
      headers = state.services.map(function (s, i) {
        return s.name;
      });
      var tmp_channels = state.services.map(function (s2, k) {
        return Object(preact_min["h"])(YleChannel, { id: k, data: s2.name, schedules: s2.channelprograms,
          selectedcategory: _this2.props.selectedcategory,
          yleapiparams: _this2.props.yleapiparams, progsource: _this2.props.progsource,
          selecteddate: _this2.props.selecteddate, bSvLang: _this2.props.bSvLang,
          bShowDesciption: state.bShowDesciption });
      });
      if (headers != null) tableheaders = headers.map(function (child, i) {
        return Object(preact_min["h"])(
          'th',
          { style: 'vertical-align: top; padding-left: 5px; padding-right: 5px;' + tableBorderStyle },
          child
        );
      });
      if (tmp_channels != null) tabletds = tmp_channels.map(function (child, k) {
        return Object(preact_min["h"])(
          'td',
          { style: 'vertical-align: top; padding-left: 5px; padding-right: 5px; ' + tableBorderStyle },
          child
        );
      });
      /*
      const tableheaders_and_rows = this.getTableHeadersAndTableRowsAfterServices();
      headers = tableheaders_and_rows.headers; 
      if (headers != null)
        tableheaders = headers.map((child, i) => {
          return <th style={'vertical-align: top; padding-left: 5px; padding-right: 5px;' +tableBorderStyle}>{child}</th>
      });
      channels = tableheaders_and_rows.channels;
      tabletds = channels;
      if (channels != null)
        tabletds = channels.map((child, i) => {
          return <td style={'vertical-align: top; padding-left: 5px; padding-right: 5px; ' +tableBorderStyle}>{child}</td> 
        });
        */
    }
    /*
    let servicesCells = null;
    if (state.services != null)
      servicesCells = state.services.map((s, i) => {
       return <LayoutGrid.Cell cols="1">{s.title.fi !== undefined ? s.title.fi : s.title.sv}</LayoutGrid.Cell>
    });
    */

    return Object(preact_min["h"])(
      'div',
      null,
      DayServices__ref,
      Object(preact_min["h"])(
        'table',
        { style: 'width:100%' },
        Object(preact_min["h"])(
          'tbody',
          null,
          Object(preact_min["h"])(
            'tr',
            null,
            tableheaders
          ),
          Object(preact_min["h"])(
            'tr',
            null,
            tabletds
          )
        )
      )
    );
  };

  return DayServices;
}(preact_min["Component"]);

/* harmony default export */ var ylehtml_DayServices = (DayServices_DayServices);
// CONCATENATED MODULE: ./components/ylehtml/YleHtml.js
var YleHtml__class, YleHtml__temp, YleHtml__initialiseProps;



function YleHtml__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function YleHtml__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function YleHtml__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















//import 'preact-material-components/List/style.css';
//import 'preact-material-components/Menu/style.css';




// import 'whatwg-fetch';



// import Category from './Category';
// import GridOrList from './GridOrList';

//import jsonp from '../../utils/jsonp';

// import StaticFunctions from '../../unpm install axios-jsonptils/StaticFunctions';

var YleHtml__ref = Object(preact_min["h"])(
	'label',
	{ 'for': 'rtv' },
	'TV'
);

var YleHtml__ref2 = Object(preact_min["h"])(
	'label',
	{ 'for': 'rradio' },
	'Radio'
);

var YleHtml__ref3 = Object(preact_min["h"])(
	'div',
	null,
	'Hae tv-ohjelmatiedot alle taulukkoon alla p\xE4iv\xE4m\xE4\xE4r\xE4n mukaan:'
);

var YleHtml__ref4 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var YleHtml__ref5 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var YleHtml__ref6 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref7 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref8 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref9 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref10 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref11 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref12 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref13 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref14 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref15 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref16 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref17 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref18 = Object(preact_min["h"])('br', null);

var _ref19 = Object(preact_min["h"])(
	'div',
	{ 'class': ' mdc-typography--caption' },
	'Ohjelmat'
);

var _ref20 = Object(preact_min["h"])(
	'div',
	null,
	Object(preact_min["h"])(
		LayoutGrid_default.a,
		null,
		Object(preact_min["h"])(
			LayoutGrid_default.a.Inner,
			null,
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Maanantai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Tiistai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Keskiviikko'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Torstai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Perjantai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Lauantai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Sunnuntai'
			)
		),
		Object(preact_min["h"])(
			LayoutGrid_default.a.Inner,
			null,
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'1 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'2 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'3 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'4 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'5 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'6 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'7 cell'
			)
		)
	)
);

var _ref21 = Object(preact_min["h"])(
	'div',
	null,
	Object(preact_min["h"])(
		LayoutGrid_default.a,
		null,
		Object(preact_min["h"])(
			LayoutGrid_default.a.Inner,
			null,
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'L Maanantai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'L Tiistai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Keskiviikko'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Torstai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Perjantai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Lauantai'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'Sunnuntai'
			)
		),
		Object(preact_min["h"])(
			LayoutGrid_default.a.Inner,
			null,
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'1 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'2 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'3 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'4 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'5 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'6 cell'
			),
			Object(preact_min["h"])(
				LayoutGrid_default.a.Cell,
				{ cols: '1' },
				'7 cell'
			)
		)
	)
);

var YleHtml_YleHtml = (YleHtml__temp = YleHtml__class = function (_Component) {
	YleHtml__inherits(YleHtml, _Component);

	function YleHtml(props) {
		YleHtml__classCallCheck(this, YleHtml);

		var _this = YleHtml__possibleConstructorReturn(this, _Component.call(this, props));

		YleHtml__initialiseProps.call(_this);

		if (utils_Config.bDebug) {
			console.log("Yle.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;
		var storestate = _this.store.getState();
		if (utils_Config.bDebug) {
			console.log("storestate");
			console.log(storestate);
		}

		var today = new Date(Date.now());
		_this.state = {
			errmsg: null,
			chosenIndex: 0,
			progsource: 'rtv',
			bShowDesciption: false,
			progtable: 'rday',
			programs: null,
			currentDate: Date.now(),
			services: [],
			selecteddate: today,
			bShowTableBorder: false,
			offset: 0,
			currentservice: null,
			indService: -1,
			bSchedulesQueryReady: false,
			schedules: {},
			bSvLang: false,
			bSchedulesRead: false
		};

		_this.radioProgTableChanged = _this.radioProgTableChanged.bind(_this);
		//	this.fetchProgServicesData = this.fetchProgServicesData.bind(this);
		//	this.fetchSchedulesData = this.fetchSchedulesData.bind(this);

		_this.categoryfieldRef = Object(preact_min["createRef"])();

		_this.store.setStateNoneCallListeners({ schedules: {}, shedulescount: 0,
			shedulescallcount: 0, indService: -1,
			selecteddate: today });

		_this.fetch_url_audio = utils_Config.http_curlserver + '/yleradio_opas/:';
		_this.fetch_url_tv = utils_Config.http_curlserver + '/yletv_opas/:';
		return _this;
	}

	YleHtml.prototype.componentDidMount = function componentDidMount() {
		if (utils_Config.bDebug) console.log("componentDidMount 1");
		this.abortController = new abort_controller_default.a(); // 1        
		this.abortSignal = this.abortController.signal; // 2
		//	this.fetchProgSchedules(this.state.progsource);		
		this._mounted = true;
	};

	YleHtml.prototype.componentWillUnmount = function componentWillUnmount() {
		if (this.abortSignal && !this.abortSignal.aborted) this.abortController.abort();
		this.setState({});
		this.store.setState({ fetchitems: [], channeltypeitems: [],
			programtypeitems: [], categories: []
		});
		this._mounted = false;
	};

	YleHtml.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (utils_Config.bDebug) {
			console.log("YleMedia componentWillReceiveProps nextProps");
			console.log(nextProps);
		}

		/*
     if (this.state.progsource != nextProps.progsource)
     {        
         this.setState({ progsource: nextProps.progsource, schedules: {}, 
  services: [], uigrid: null, bSchedulesQueryReady: false,
           currentservice: null});
       this.fetchProgSchedules(nextProps.progsource);		
         // this.createUiGrid();
     } 
  */
		/*	  
  //      this.setState({ categories: nextProps.categories,						
  //						progsource: nextProps.progsource,//
  //						selectedcategory: nextProps.selectedcategory
  //					});
  /*	  if (!nextProps.tabClassHide)
  this.initializeState(nextProps);
  //	this.forceUpdate();            
  */
	};

	YleHtml.prototype.getJsonProgram = function getJsonProgram(nodeProgram) {
		if (!nodeProgram) return null;
		var HeaderClassValue = 'schedule-card--';
		var jsonProgram = {};
		jsonProgram.upcoming = false;
		jsonProgram.expired = false;
		jsonProgram.current = false;
		jsonProgram.aftercard = undefined;
		jsonProgram.description = undefined;
		jsonProgram.createdtime = new Date().toTimeString();
		jsonProgram.accessibilityfeature = false;
		jsonProgram.metaitems = [];
		jsonProgram.links = [];

		var nodesMeta = nodeProgram.querySelectorAll('meta');
		var nodeMeta = void 0,
		    jsonMeta = void 0;
		if (nodesMeta) for (var i = 0; i < nodesMeta.length; i++) {
			nodeMeta = nodesMeta[i];
			if (nodeMeta) {
				jsonMeta = {};
				if (nodeMeta.getAttribute('itemprop') === "duration") jsonProgram.duration = nodeMeta.getAttribute('content');
				if (nodeMeta.getAttribute('itemprop') == 'accessibilityFeature' && nodeMeta.getAttribute('content') == 'captions') jsonProgram.accessibilityfeature = true;
				jsonMeta.itemprop = nodeMeta.getAttribute('itemprop');
				jsonMeta.content = nodeMeta.getAttribute('content');
				jsonProgram.metaitems.push(jsonProgram);
			}
		}

		jsonProgram.status = nodeProgram.className;
		var nodeHeader = nodeProgram.querySelector('div[class="schedule-card__header"]');
		if (nodeHeader) {
			var nodeSpan = nodeProgram.querySelector('span');
			if (nodeSpan) {
				var nodePubl = nodeSpan.querySelector('span[class="schedule-card__publication"]');
				if (nodePubl) {
					jsonProgram.startTime = nodePubl.textContent.toString().replaceAll('\n', '').trim();
					// <time itemprop="startDate"
					var nodeStartDate = nodePubl.querySelector('time[itemprop="startDate"]');
					if (nodeStartDate) jsonProgram.startDate = nodeStartDate.getAttribute('datetime');
					var nodeEndDate = nodePubl.querySelector('time[itemprop="endDate"]');
					if (nodeEndDate) jsonProgram.endDate = nodeEndDate.getAttribute('datetime');
				}
				var nodeTitle = nodeSpan.querySelector('span[class="schedule-card__title"]');
				if (nodeTitle) jsonProgram.name = nodeTitle.textContent.toString().replaceAll('\n', '').trim();
			}
		}

		var nodeFooter = nodeProgram.querySelector('div[class="schedule-card__footer"]');
		if (nodeFooter) {
			var nodesLink = nodeFooter.querySelectorAll('a');
			var nodeLink = void 0,
			    jsonLink = void 0;
			if (nodesLink) for (var i = 0; i < nodesLink.length; i++) {
				nodeLink = nodesLink[i];
				if (nodeLink) {
					jsonLink = {};
					if (nodeLink.href) {
						jsonLink.href = nodeLink.href;
						jsonLink.text = nodeLink.textContent.toString().replaceAll('\n', '').trim();
						jsonProgram.links.push(jsonLink);
					}
				}
			}

			var nodeDuration = nodeFooter.querySelector('span[class="schedule-card__duration"]');
			if (nodeDuration) jsonProgram.durationtext = nodeDuration.textContent.toString().replaceAll('\n', '').trim();
			var nodeDescription = nodeFooter.querySelector('span[itemprop="description"]');
			if (nodeDescription) jsonProgram.description = nodeDescription.textContent.toString().replaceAll('\n', '').trim();
			var nodeName = nodeFooter.querySelector('span[itemprop="name"]');
			if (nodeName) jsonProgram.captiontext = nodeName.textContent.toString().replaceAll('\n', '').trim();
		}
		return jsonProgram;
	};

	YleHtml.prototype.handleErrors = function handleErrors(response) {
		if (!response.ok) {
			// throw Error(response.statusText);
			throw Error(response.status);
		}
		return response;
	};

	/*
 			result2 = regex.exec(after);
 		if (result2)
 		{
 			foundedRegex = true;
 			let tmp_next_matchStart = result[ind].index;
 			let tmp_next_matchEnd = result[ind].length;	
 			next_matchStart = tmp_next_matchStart +matchEnd;
 			next_matchEnd = tmp_next_matchEnd +matchEnd;
 		}
 		else
 		{
 			foundedRegex = false;
 			next_matchStart = -1;
 			next_matchEnd = textHtml.length;
 		}
 */

	/*
 	'Origin': 'localhost:8080',
 		'User-Agent': 'curl/7.55.1',
 		'Host': 'external.api.yle.fi',
 		'Access-Control-Allow-Origin': '*',
 		'Access-Control-Allow-Credentials': true,
 		'Cross-Origin-Resource-Policy': 'cross-origin',
 		'Access-Control-Allow-Methods': 'GET,OPTIONS',
 		'Access-Control-Allow-Headers': 'Content-Type'
 */

	YleHtml.prototype.radioProgTableChanged = function radioProgTableChanged(event) {
		var currentCheckedRadio = event.target;
		var name = currentCheckedRadio.name;
		if (utils_Config.bDebug) {
			console.log("radioProgTableChanged");
			console.log(name);
		}
		if (name !== 'opttable') return;
		var id = currentCheckedRadio.id;
		if (utils_Config.bDebug) {
			console.log("currentCheckedRadio");
			console.log(id);
		}
		this.setState({ progtable: id });
		this.createUiGrid();
	};

	/*
 getStartTime = (date) =>
 {
 	let modTimeDate = date;
 	console.log("getStartTime");
 	console.log("date");
 	console.log(date);
 	console.log("typeof date");
 	console.log(typeof date);
 	// Object.assign(modTimeDate, date);
 	modTimeDate.setHours(0);
 	modTimeDate.setMinutes(0);
 	modTimeDate.setSeconds(1);
 	//const ret = new Date(modTimeDate.getTime() - modTimeDate.getTimezoneOffset() * 60000).toISOString());
 	// const ret = this.converDateToLocalTime(modTimeDate);
 	*/
	/*
 var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
 var localISOTime = (new Date(modTimeDate - tzoffset)).toISOString().slice(0, -1); 
 const ret = localISOTime; // dateFormat(modTimeDate, this.formatForServiceTime);
 */
	/*
 const ret = new Date(modTimeDate.toString().split('GMT')[0]+' UTC').toISOString();
 console.log("getStartTime");
 console.log(ret);
 return ret;
 }
 */

	/*
 converToLocalTime = (serverDate) => 
 {
 
 	var dt = new Date(Date.parse(serverDate));
 	var localDate = dt;
 	
 	var gmt = localDate;
 		var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
 		var localNow = new Date().getTimezoneOffset(); // get the timezone
 		// offset in minutes
 		var localTime = min - localNow; // get the local time
 
 	var dateStr = new Date(localTime * 1000 * 60);
 	// dateStr = dateStr.toISOString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"); // this will return as just the server date format i.e., yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
 	dateStr = dateStr.toString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
 	return dateStr;
 }
 
 converDateToLocalTime = (serverDate) => 
 {
 
 	var dt = serverDate;
 	var localDate = dt;
 	
 	var gmt = localDate;
 		var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
 		var localNow = new Date().getTimezoneOffset(); // get the timezone
 		// offset in minutes
 		var localTime = min - localNow; // get the local time
 
 	var dateStr = new Date(localTime * 1000 * 60);
 	// dateStr = dateStr.toISOString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"); // this will return as just the server date format i.e., yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
 	dateStr = dateStr.toString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
 	return dateStr;
 }
 */

	/*
 getEndTime = (date) =>
 {
 	let modTimeDate = date;
 //	Object.assign(modTimeDate, date);
 	modTimeDate.setHours(23);
 	modTimeDate.setMinutes(59);
 	modTimeDate.setSeconds(59);
 	*/
	/*
 var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
 var localISOTime = (new Date(modTimeDate - tzoffset)).toISOString().slice(0, -1); 
 const ret = localISOTime; // dateFormat(modTimeDate, this.formatForServiceTime);
 */
	// const ret = new Date(modTimeDate.getTime() - modTimeDate.getTimezoneOffset() * 60000).toISOString());
	// const ret = this.converDateToLocalTime(modTimeDate);
	/*
 const ret = new Date(modTimeDate.toString().split('GMT')[0]+' UTC').toISOString();
 console.log("getEndTime");
 console.log(ret);
 return ret;
 }
 */

	YleHtml.prototype.render = function render(props, state) {

		var uigrid = this.createUiGrid();

		return Object(preact_min["h"])(
			'div',
			null,
			Object(preact_min["h"])(
				'h1',
				null,
				'Yle ',
				this.getFetchedDate()
			),
			Object(preact_min["h"])(
				'span',
				null,
				Object(preact_min["h"])(
					FormField_default.a,
					null,
					Object(preact_min["h"])(Radio_default.a, { id: 'rtv', name: 'opttv', checked: state.progsource === 'rtv',
						onChange: this.radioProgSourceChanged }),
					YleHtml__ref
				),
				Object(preact_min["h"])(
					FormField_default.a,
					null,
					Object(preact_min["h"])(Radio_default.a, { id: 'rradio', name: 'opttv', checked: state.progsource === 'rradio',
						onChange: this.radioProgSourceChanged }),
					YleHtml__ref2
				)
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': ylehtml_style_default.a.cardHeader },
				YleHtml__ref3,
				Object(preact_min["h"])(
					'div',
					{ 'class': ylehtml_style_default.a.cardHeader },
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(0),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(0)
					),
					YleHtml__ref4,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(1),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(1)
					),
					YleHtml__ref5,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(2),
							nClick: this.onClickSetDateStringYle },
						this.getPlus1Day(2)
					),
					YleHtml__ref6,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(3),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(3)
					),
					_ref7,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(4),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(4)
					),
					_ref8,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(5),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(5)
					),
					_ref9,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(6),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(6)
					),
					_ref10,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(7),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(7)
					),
					_ref11,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(8),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(8)
					),
					_ref12,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(9),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(9)
					),
					_ref13,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(10),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(10)
					),
					_ref14,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(11),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(11)
					),
					_ref15,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(12),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(12)
					),
					_ref16,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(13),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(13)
					),
					_ref17,
					Object(preact_min["h"])(
						'a',
						{ href: '.', id: 'dayname_' + this.getPlus1DayId(14),
							onClick: this.onClickSetDateStringYle },
						this.getPlus1Day(14)
					),
					_ref18
				)
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': ylehtml_style_default.a.cardBody },
				Object(preact_min["h"])(
					'div',
					{ style: { "background-color": 'red', color: "yellow" } },
					state.errmsg
				),
				_ref19
			),
			uigrid
		);
	};

	return YleHtml;
}(preact_min["Component"]), YleHtml__initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.store = null;
	this.categoryfieldRef = null;
	this.fetch_url_audio = null;
	this.fetch_url_tv = null;
	this.abortController = null;
	this.abortSignal = null;
	this.currentservice = null;
	this.services = null;
	this.indService = -1;
	this.callbackName = 'jsonp_callback_schedules';
	this._mounted = false;

	this.removelisteners = function () {};

	this.getTypeParamAndValue = function (progsource, selecteddate) {
		var ret = "";
		var storestate = _this2.store.getState();
		var selday = selecteddate;
		var month = "" + (selday.getMonth() + 1);
		if (month.trim().length === 1) month = "0" + month;
		var day = "" + selday.getDate();
		if (day.trim().length === 1) day = "0" + day;
		ret = selday.getFullYear() + "-" + month + "-" + day;
		// ret = "" + selecteddate.getYear() +"-" +(selecteddate.getMonth() +1) +"-" +selecteddate.getDate():
		// ret = ret + plusdate.format("YYYY-MM-DD");
		return ret;
	};

	this.getImageUrl = function (style) {
		if (!style) return undefined;
		var searchStart = "url('";
		var searchEnd = "')";
		var strStyle = style.backgroundImage;
		var ind = strStyle.indexOf(searchStart);
		if (ind == -1) {
			searchStart = 'url("';
			searchEnd = '")';
			ind = strStyle.indexOf(searchStart);
		}
		if (ind > -1) {
			var ind2 = strStyle.indexOf(searchEnd);
			if (ind2 > -1) {
				var value = strStyle.substring(ind + searchStart.length, ind2);
				if (value) return value;
			}
		}
		return undefined;
	};

	this.getJsonChannel = function (xmlchannels) {
		var ret = null;
		if (!xmlchannels) return null;
		var jsonChannel = {};
		jsonChannel.name = undefined;
		jsonChannel.nomoreprogramstoday = false;
		var nodeH2 = xmlchannels.getElementsByTagName("h2")[0];
		if (nodeH2 === null || nodeH2 === undefined) {
			nodeH2 = xmlchannels.querySelector('h2[class="channel-header"]');
		}
		if (nodeH2 === null || nodeH2 === undefined) {
			var nodeH2a = xmlchannels.getElementsByTagName("H2");
			console.log("nodeH2a");
			console.log(nodeH2a);
			nodeH2 = nodeH2a;
			var serializer = new XMLSerializer();
			var xmlStr = serializer.serializeToString(xmlchannels);
			console.log("kissa");
		}
		if (nodeH2) {
			var nodeA = nodeH2.querySelector('a');
			if (nodeA) {
				jsonChannel.href = nodeA.href;
				var nodeDiv = nodeA.querySelector('div');
				if (nodeDiv) {
					var image = _this2.getImageUrl(nodeDiv.style);
					if (image) jsonChannel.image = image;
					jsonChannel.name = nodeDiv.getAttribute("aria-label");
				} else {
					var _serializer = new XMLSerializer();
					var xmlStr1 = _serializer.serializeToString(nodeA);
					if (!xmlStr1) xmlStr1 = nodeA.outHTML;
					if (xmlStr1) jsonChannel.name = nodeA.textContent;else {
						if (utils_Config.bDebug) console.log("kissa");
						;
					}
				}
			} else {
				if (utils_Config.bDebug) console.log("kissa2");
				;
			}
		}

		if (!jsonChannel.name) {
			var nomoreprogs = xmlchannels.querySelector('*[class="schedule-card__no-more-programs-today"]');
			if (nomoreprogs) {
				jsonChannel.description = nomoreprogs.textContent;
				jsonChannel.nomoreprogramstoday = true;
				nodeH2 = xmlchannels.querySelector('h2[class="channel-header"]');
				if (nodeH2) {
					var _nodeA = nodeH2.querySelector('a');
					if (_nodeA) {
						jsonChannel.href = _nodeA.href;
						var _nodeDiv = _nodeA.querySelector('div');
						if (_nodeDiv) {
							var _image = _this2.getImageUrl(_nodeDiv.style);
							if (_image) jsonChannel.image = _image;
							jsonChannel.name = _nodeDiv.getAttribute("aria-label");
						}
					} else {
						if (nodeH2.textContent) jsonChannel.name = nodeH2.textContent.replaceAll('\n', '').trim();
					}
					if (!jsonChannel.name) {
						var nodeH2Div = nodeH2.querySelector('div');
						if (nodeH2Div) jsonChannel.name = nodeH2Div.getAttribute('aria-label');
					}
				}
			} else {
				if (utils_Config.bDebug) {
					var _serializer2 = new XMLSerializer();
					var xmlStr2 = _serializer2.serializeToString(xmlchannels);
					console.log("kissa22");
				}
				;
			}
		}

		//		if (jsonChannel.nomoreprogramstoday)
		//			return jsonChannel;

		var nodeLU = xmlchannels.getElementsByTagName("ul")[0];
		var nodePrograms = nodeLU.querySelectorAll("li");
		var arrayPrograms = [];
		var jsonProg = null;
		for (var i = 0; i < nodePrograms.length; i++) {
			jsonProg = _this2.getJsonProgram(nodePrograms[i]);
			if (jsonProg) arrayPrograms.push(jsonProg);
		}

		jsonChannel.channelprograms = arrayPrograms;
		return jsonChannel;
	};

	this.getJsonDataFromYleXml = function (data) {
		var ret = null;
		var xmlDoc = new window.DOMParser().parseFromString(data, "text/html");
		//let channeltitle = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
		var nodeMainContent = null;
		//nodeMainContent = xmlDoc.evaluate('div[class="main-content"]', xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		var nodeBody = xmlDoc.querySelector("body");
		nodeMainContent = nodeBody.querySelector('div[class="main-content"]');
		//let nodeChannels = nodeMainContent.evaluate('//*/attribute::*[class="guide-channels guide-channels--today"]', nodeMainContent, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		var nodeLu = nodeMainContent.querySelector("ul");
		var xmlchannels = nodeLu.querySelectorAll('li[class="guide-channels__channel"]');
		var arrayChannels = [];
		var jsonChannel = null;
		if (xmlchannels) for (var i = 0; i < xmlchannels.length; i++) {
			jsonChannel = _this2.getJsonChannel(xmlchannels[i]);
			if (jsonChannel) arrayChannels.push(jsonChannel);
		}
		/*
  var attr;
  for (var i=0; i < nodesSnapshot.snapshotLength; i++ ) {
  attr = nodesSnapshot.snapshotItem(i);
  console.log(attr, attr.ownerElement) 
  });
  */

		return arrayChannels;
	};

	this.fetchProgSchedules = function (progsource, selecteddate) {
		//		this.fetch_url_categories = "http://localhost:8080/tvprogram/categories";

		if (!_this2._mounted) return;

		var fetch_url = _this2.fetch_url_audio;
		if (progsource == 'rtv') fetch_url = _this2.fetch_url_tv;

		if (utils_Config.bDebug) {
			console.log("fetchProgSchedules");
			console.log(fetch_url + _this2.getTypeParamAndValue(progsource, selecteddate));
		}

		var url = fetch_url + _this2.getTypeParamAndValue(progsource, selecteddate);
		fetch(url, {
			//			Host: 'localhost:9090',
			timeout: 6000,
			headers: { "Content-Type": "*/*",
				'Accept': '*/*' // application/rss+xml
			},
			mode: 'cors',
			method: 'get'
			//    		url: `http://localhost:9090`,
			//	credentials: 'same-origin', // include, *same-origin, omit
		}).then(_this2.handleErrors).then(function (response) {
			return response.text();
		})
		//		.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
		.then(function (data) {
			/*
   if(Config.bDebug) 
   	{
   		console.log("fetchProgSchedules 1.5"); 
   		console.log(data); 
   	}
   	*/
			var jsondata = _this2.getJsonDataFromYleXml(data);
			_this2.setState({ schedules: jsondata, bSchedulesQueryReady: true });
			_this2.store.setState({ schedules: jsondata });
		}).catch(function (error) {
			console.error("error");
			console.error(error);
			_this2.setState({ errmsg: error.toString() });
			// throw new this.TelkkuException(error.toString());
		});
	};

	this.getWeekGrid = function () {
		return _ref20;
	};

	this.getListGrid = function () {
		return _ref21;
	};

	this.getDayGrid = function () {
		return Object(preact_min["h"])(ylehtml_DayServices, { selecteddate: _this2.store.getState().selecteddate, data: _this2.state.schedules,
			progsource: _this2.state.progsource,
			selectedcategory: _this2.state.selectedcategory,
			bShowTableBorder: _this2.state.bShowTableBorder,
			bShowDesciption: _this2.state.bShowDesciption
		});
	};

	this.getFetchedDate = function () {
		if (utils_Config.bDebug) {
			console.log("getFetchedDate");
			console.log("this.state.selecteddate");
			console.log(_this2.store.getState().selecteddate);
		}
		var today = _this2.store.getState().selecteddate;
		if (typeof today === 'string') today = Date.parse(today);
		var days = today.getDate();
		var month = today.getMonth() + 1;
		var year = today.getFullYear();
		if (days < 10) days = "0" + days;
		if (month < 10) month = "0" + month;
		var ret = "" + days + "." + month + "." + year;
		return ret;
	};

	this.onClickSetDateStringYle = function (event) {
		event.preventDefault();
		var dayparameter = event.target.id;
		if (utils_Config.bDebug) {
			console.log("onClickSetDateString");
			console.log("dayparameter");
			console.log(dayparameter);
		}
		var search = 'dayname_';
		var ind = dayparameter.indexOf(search);
		if (ind > -1) dayparameter = dayparameter.substring(ind + search.length);
		var selDate = new Date(Date.parse(dayparameter));
		if (utils_Config.bDebug) {
			console.log("dayparameter");
			console.log(dayparameter);
			console.log("selDate");
			console.log(selDate);
			console.log("this.state.selecteddate");
			console.log(_this2.state.selecteddate);
		}
		/*
  if (this.state.selecteddate.getFullYear() === selDate.getFullYear()
      && this.state.selecteddate.getMonth() === selDate.getMonth()
  	&& this.state.selecteddate.getDay() === selDate.getDay())
  	return;
  */
		var emptyservices = [];
		_this2.setState({ selecteddate: selDate,
			services: emptyservices, schedules: [], currentservice: null
		});
		// this.store.setStateNoneCallListeners({ selecteddate: selDate, schedules: [] });
		_this2.fetchProgSchedules(_this2.state.progsource, selDate);
	};

	this.createUiGrid = function () {
		var uigrid = null;
		if (_this2.state.bSchedulesQueryReady && _this2.state.schedules != null && _this2.state.schedules.length > 0) {
			if (_this2.state.progtable == 'rweek') uigrid = _this2.getWeekGrid();else if (_this2.state.progtable == 'rday') uigrid = _this2.getDayGrid();else if (_this2.state.progtable == 'rlist') uigrid = _this2.getListGrid();
		}
		// this.setState({uigrid: uigrid });
		return uigrid;
	};

	this.getPlus1DayId = function (plusdaynumber) {
		var today = dayjs_min_default()();
		var plusdate = today;
		if (plusdaynumber > 0) plusdate = today.add(plusdaynumber, 'days');
		var ret = plusdate.format("YYYY-MM-DD"); // pvm=2021-02-22
		return ret;
	};

	this.getPlus1Day = function (plusdaynumber) {
		var today = dayjs_min_default()();
		var plusdate = today;
		if (plusdaynumber > 0) plusdate = today.add(plusdaynumber, 'days');
		var weekday = new Date(plusdate).getDay();
		var weekdayname = "";
		switch (weekday) {
			case 1:
				weekdayname = 'Ma';break;
			case 2:
				weekdayname = 'Ti';break;
			case 3:
				weekdayname = 'Ke';break;
			case 4:
				weekdayname = 'To';break;
			case 5:
				weekdayname = 'Pe';break;
			case 6:
				weekdayname = 'La';break;
			case 0:
				weekdayname = 'Su';break;
		}
		var ret = weekdayname + " " + plusdate.format("DD.MM.YYYY"); // pvm=2021-02-22
		return ret;
	};

	this.sleep = function (ms) {
		return new Promise(function (resolve) {
			return setTimeout(resolve, ms);
		});
	};

	this.isEmptyHash = function (abc) {
		for (var prop in abc) {
			if (abc.hasOwnProperty(prop)) return false;
		}
		return true;
	};

	this.typeOf = function (obj) {
		return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
	};

	this.radioProgSourceChanged = function (event) {
		event.preventDefault();
		var currentCheckedRadio = event.target;
		var name = currentCheckedRadio.name;
		if (utils_Config.bDebug) {
			console.log("currentCheckedRadio");
			console.log(name);
		}
		if (name !== 'opttv') return;
		var id = currentCheckedRadio.id;
		if (utils_Config.bDebug) {
			console.log("currentCheckedRadio");
			console.log(id);
		}
		_this2.setState({ progsource: id });
	};
}, YleHtml__temp);

// CONCATENATED MODULE: ./routes/yle/YleRoute.js


function YleRoute__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function YleRoute__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function YleRoute__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// import Category from './Category';
// import GridOrList from './GridOrList';


// import StaticFunctions from '../../utils/StaticFunctions';

var YleRoute_YleRoute = function (_Component) {
	YleRoute__inherits(YleRoute, _Component);

	function YleRoute(props) {
		YleRoute__classCallCheck(this, YleRoute);

		var _this = YleRoute__possibleConstructorReturn(this, _Component.call(this, props));

		_this.removelisteners = function () {};

		if (utils_Config.bDebug) {
			console.log("TelkkuRoute.js");
			console.log("props");
			console.log(props);
		}

		_this.state = {
			errmsg: null
		};

		return _this;
	}

	YleRoute.prototype.componentDidMount = function componentDidMount() {
		if (utils_Config.bDebug) console.log("componentDidMount 1");
		// this.fetchProgCategories();		
	};

	/*
 	'Origin': 'localhost:8080',
 		'User-Agent': 'curl/7.55.1',
 		'Host': 'external.api.yle.fi',
 		'Access-Control-Allow-Origin': '*',
 		'Access-Control-Allow-Credentials': true,
 		'Cross-Origin-Resource-Policy': 'cross-origin',
 		'Access-Control-Allow-Methods': 'GET,OPTIONS',
 		'Access-Control-Allow-Headers': 'Content-Type'
 */

	YleRoute.prototype.render = function render(props, state) {

		return Object(preact_min["h"])(
			'div',
			{ 'class': yle_style_default.a.home + ' page' },
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(YleHtml_YleHtml, { store: props.store }),
				Object(preact_min["h"])(
					'div',
					{ style: { "background-color": 'red', color: "yellow" } },
					state.errmsg
				)
			)
		);
	};

	return YleRoute;
}(preact_min["Component"]);

/*
						<FormField>
							<Radio id="radio_yle" name='optsource' 
							    checked={state.progsource == 'radio_yle'}
								onChange={this.radioProgSourceChanged} ></Radio>
							<label for="radio_yle">Yle</label>
						</FormField>
*/



// EXTERNAL MODULE: ./routes/telkku/style.css
var telkku_style = __webpack_require__("+pAM");
var telkku_style_default = /*#__PURE__*/__webpack_require__.n(telkku_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Checkbox/index.js
var Checkbox = __webpack_require__("OA4U");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox);

// EXTERNAL MODULE: ../node_modules/preact-material-components/Checkbox/style.css
var Checkbox_style = __webpack_require__("XoCl");
var Checkbox_style_default = /*#__PURE__*/__webpack_require__.n(Checkbox_style);

// EXTERNAL MODULE: ../node_modules/preact-material-components/TextField/index.js
var TextField = __webpack_require__("Cv2I");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField);

// EXTERNAL MODULE: ../node_modules/preact-material-components/TextField/style.css
var TextField_style = __webpack_require__("qKn3");
var TextField_style_default = /*#__PURE__*/__webpack_require__.n(TextField_style);

// EXTERNAL MODULE: ./components/telkku/style.css
var components_telkku_style = __webpack_require__("QEtG");
var components_telkku_style_default = /*#__PURE__*/__webpack_require__.n(components_telkku_style);

// CONCATENATED MODULE: ./components/telkku/ShowProgram.js



//import Chips from 'preact-material-components/Chips';
//import 'preact-material-components/Chips/style.css';
















/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 

var ShowProgram__ref = Object(preact_min["h"])('br', null);

var ShowProgram__ref2 = Object(preact_min["h"])(Card_default.a.Media, { className: 'card-media' });

function ShowProgram(props) {
    var _useState = l(false),
        displaydescription = _useState[0],
        setDisplayDescription = _useState[1];
    //   const [displayAllDescriptions, setDisplayAllDescriptions] = useState(props.displayAllDescriptions);


    var scrollingDlgRef = hooks_module_s(null);

    var onClickDisplay = function onClickDisplay(event) {
        event.preventDefault();
        //   console.log("onClickDisplay");
        if (props.displayAllDescriptions) return;
        if (!displaydescription) scrollingDlgRef.current.MDComponent.show();
        setDisplayDescription(!displaydescription);
    };

    var onClickDisplayDialog = function onClickDisplayDialog(event) {
        event.preventDefault();
        //    console.log("onClickDisplayDialog");
        if (displaydescription) scrollingDlgRef.current.MDComponent.close();
        setDisplayDescription(!displaydescription);
    };

    /*
    	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    jsonitem.link =
        <Chips.Chip onClick={onClickDisplay} >
                <Chips.Text>{data.title}</Chips.Text></Chips.Chip> : <Chips.Chip onClick={onClickDisplay}>
                <Chips.Text>Kissa</Chips.Text></Chips.Chip> }
                   {(!displaydescription ? 
            <Button onClick={onClickDisplay} >
                {data.title}</Button> : <Chips.Chip onClick={onClickDisplay}>
                <Chips.Text>Kissa</Chips.Text></Chips.Chip>) }
                               <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
              <Chips.Text>{props.data.title}</Chips.Text></Chips.Chip> 
    */

    var openHtmlPage = function openHtmlPage(event) {
        console.log("openHtmlPage");
        event.preventDefault();
        var blankurl = event.target.href;
        console.log("blankurl");
        console.log(blankurl);
        // window.open(blankurl, '_blank', "Telkussa", "location=no");
        window.open(blankurl, '_blank', "Telkussa");
        return false;
    };

    return Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
            'div',
            { onClick: onClickDisplay },
            Object(preact_min["h"])(
                'p',
                null,
                Object(preact_min["h"])(
                    'b',
                    null,
                    props.showSearch && props.data.titleindex != undefined ? props.getPOfIndex(props.data.titleindex, props.data.title) : props.data.title
                )
            ),
            props.displayAllDescriptions ? Object(preact_min["h"])(
                preact_min["Fragment"],
                null,
                Object(preact_min["h"])(
                    'p',
                    null,
                    props.showSearch && props.data.descriptionindex != undefined ? props.getPOfIndex(props.data.descriptionindex, props.data.description) : props.data.description
                ),
                props.data.link != undefined || props.data.link != null ? Object(preact_min["h"])(
                    'p',
                    null,
                    Object(preact_min["h"])(
                        'a',
                        { href: props.data.link, onClick: openHtmlPage },
                        'ohjelmalinkki'
                    )
                ) : null
            ) : null,
            Object(preact_min["h"])(
                Dialog_default.a,
                {
                    ref: scrollingDlgRef },
                Object(preact_min["h"])(
                    Dialog_default.a.Header,
                    null,
                    props.channel
                ),
                Object(preact_min["h"])(
                    Dialog_default.a.Body,
                    { scrollable: true },
                    Object(preact_min["h"])(
                        Card_default.a,
                        null,
                        Object(preact_min["h"])(
                            'div',
                            { 'class': 'card-header' },
                            Object(preact_min["h"])(
                                'h3',
                                { 'class': ' mdc-typography--title' },
                                props.data.title
                            ),
                            Object(preact_min["h"])(
                                'h3',
                                { 'class': ' mdc-typography--title' },
                                props.data.description
                            ),
                            ShowProgram__ref
                        ),
                        ShowProgram__ref2
                    )
                ),
                Object(preact_min["h"])(
                    Dialog_default.a.Footer,
                    null,
                    Object(preact_min["h"])(
                        Dialog_default.a.FooterButton,
                        { onCancel: onClickDisplayDialog, cancel: true, accept: true },
                        'Sulje'
                    )
                )
            )
        )
    );
}

/* harmony default export */ var telkku_ShowProgram = (ShowProgram);
// CONCATENATED MODULE: ./components/telkku/RssTelkkuChannel.js






/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
function RssTelkkuChannel(props) {
    // const cssDark = useContext(CssDark);
    var displayitems = null;
    /*
    	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    jsonitem.link =
    */
    if (props.data.channelprograms !== null) displayitems = props.data.channelprograms.map(function (program, i) {
        return Object(preact_min["h"])(telkku_ShowProgram, { id: i, data: program,
            displayAllDescriptions: props.displayAllDescriptions,
            getPOfIndex: props.getPOfIndex,
            showSearch: props.showSearch == undefined ? false : props.showSearch,
            channel: props.data.title.replace("Telkussa: ", "") });
    });

    return Object(preact_min["h"])(
        'div',
        null,
        displayitems
    );
}

/* harmony default export */ var telkku_RssTelkkuChannel = (RssTelkkuChannel);
// CONCATENATED MODULE: ./components/telkku/Telkku.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function Telkku__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Telkku__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Telkku__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























// import fetchJsonp from 'fetch-jsonp';


var Telkku__ref = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref2 = Object(preact_min["h"])(
	'label',
	{ 'for': 'checkshowdescribtions', id: 'checkshowdescribtions-label' },
	'N\xE4yt\xE4 selitykset'
);

var Telkku__ref3 = Object(preact_min["h"])(
	'label',
	{ 'for': 'checkshowonechannel', id: 'checkshowonechannel-label' },
	'N\xE4yt\xE4 yksi kanava'
);

var Telkku__ref4 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref5 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref6 = Object(preact_min["h"])(
	'label',
	{ 'for': 'input_number_columss' },
	'N\xE4ytett\xE4vien kanavien lkm: '
);

var Telkku__ref7 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref8 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref9 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref10 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref11 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref12 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref13 = Object(preact_min["h"])(
	'label',
	{ 'for': 'checkTableBorders', id: 'checkshowdescribtions-label' },
	'N\xE4yt\xE4 taulun raamit'
);

var Telkku__ref14 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var Telkku__ref15 = Object(preact_min["h"])('br', null);

var Telkku__ref16 = Object(preact_min["h"])('br', null);

var Telkku__ref17 = Object(preact_min["h"])(
	'div',
	{ 'class': ' mdc-typography--caption' },
	'Ohjelmataulukko'
);

var Telkku_Telkku = function (_Component) {
	Telkku__inherits(Telkku, _Component);

	function Telkku(props) {
		Telkku__classCallCheck(this, Telkku);

		var _this = Telkku__possibleConstructorReturn(this, _Component.call(this, props));

		_this.store = null;
		_this.fetch_url_telkku = null;
		_this.showAllDescrRef = null;
		_this.showOneChannelRef = null;
		_this.selectChannelRef = null;
		_this.const_showChannelsAtSameTime = 10;
		_this._mounted = false;

		_this.fetchRssTelkkuPrograms = function (init_pagenumber, init_max) {
			return new Promise(function ($return, $error) {
				var channelnumber, max, fetcheddata, fetcheditems;

				if (!_this._mounted) return $return();

				if (utils_Config.bDebug) {
					console.log("fetchRssTelkkuPrograms");
				}
				if (_this.state.bAllChannelsLoaded) return $return();
				if (_this.state.bUnderFetch) return $return();

				_this.setState({ bUnderFetch: true });

				channelnumber = 1;
				max = 10;
				if (init_pagenumber !== undefined) channelnumber = init_pagenumber;
				if (init_max !== undefined) max = init_max;

				fetcheddata = null;
				fetcheditems = [];
				if (_this.state.channels != null && _this.state.channels.length > 0) fetcheditems = _this.state.channels;

				var $Try_1_Post = function () {
					try {
						if (utils_Config.bDebug) {
							console.log("fetcheditems");
							console.log(fetcheditems);
						}

						_this.setState({ channels: fetcheditems, errmsg: null,
							bUnderFetch: false });
						return $return();
					} catch ($boundEx) {
						return $error($boundEx);
					}
				};var $Try_1_Catch = function (error) {
					try {
						if (error.message !== "Error: 500") {
							console.error("error");
							console.error(error);
							_this.setState({ errmsg: error.toString(),
								bUnderFetch: false });
							return $return();
						} else _this.setState({ bAllChannelsLoaded: true });
						return $Try_1_Post();
					} catch ($boundEx) {
						return $error($boundEx);
					}
				};try {
					var $Loop_2_trampoline;

					function $Loop_2() {
						if (1) {
							return Promise.resolve(_this.fetchRssTelkkuChannel(channelnumber)).then(function ($await_4) {
								try {
									fetcheddata = $await_4;
									if (fetcheddata !== null) {
										// Array.prototype.push.apply(fetcheditems, fetcheddata);
										fetcheditems.push(fetcheddata);
										if (channelnumber === max && max !== -1) return [1];
										channelnumber = channelnumber + 1;
									} else return [1];
									return $Loop_2;
								} catch ($boundEx) {
									return $Try_1_Catch($boundEx);
								}
							}, $Try_1_Catch);
						} else return [1];
					}

					return ($Loop_2_trampoline = function (q) {
						while (q) {
							if (q.then) return void q.then($Loop_2_trampoline, $Try_1_Catch);try {
								if (q.pop) {
									if (q.length) return q.pop() ? $Loop_2_exit.call(this) : q;else q = $Loop_2;
								} else q = q.call(this);
							} catch (_exception) {
								return $Try_1_Catch(_exception);
							}
						}
					}.bind(this))($Loop_2);

					function $Loop_2_exit() {
						return $Try_1_Post();
					}
				} catch (error) {
					$Try_1_Catch(error)
				}
			});
		};

		_this.fetchRssTelkkuChannel = function (channelnumber) {
			return new Promise(function ($return, $error) {
				var channelurl, fetched;

				channelurl = _this.fetch_url_telkku + channelnumber;
				if (utils_Config.bDebug) {
					console.log("fetchRssTelkkuChannel 1");
					console.log(channelurl);
				}

				_this.setState({ channels: null });

				fetched = null;
				return Promise.resolve(fetch(channelurl, {
					method: 'GET',
					timeout: 6000,
					headers: { "Content-Type": "application/rss+xml; charset=UTF-8",
						'Accept': '*/*' // application/rss+xml
					},
					mode: 'cors',
					signal: _this.abortSignal
				}).then(_this.handleErrors).then(function (response) {
					return response.text();
				})
				//		.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
				.then(function (data) {
					/*
     			mode: 'same-origin',
     		if(Config.bDebug) 
     	{
     		console.log("fetchRssTelkkuChannel 1.5"); 
     		console.log(data); 
     	}
     	*/
					fetched = _this.getJsonDataFromTelkkuRssXml(data);
				}).catch(function (error) {
					console.error("error");
					console.error(error);
					_this.setState({ errmsg: error.toString() });
					throw new _this.TelkkuException(error.toString());
				})).then(function ($await_5) {
					try {
						return $return(fetched);
					} catch ($boundEx) {
						return $error($boundEx);
					}
				}, $error);
			});
		};

		_this.getJsonDataFromTelkkuRssXml = function (data) {
			var xmlDoc = new window.DOMParser().parseFromString(data, "text/xml");
			var channeltitle = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
			if (utils_Config.bDebug) {
				console.log("channeltitle");
				console.log(channeltitle);
			}
			var json = {};
			json.title = channeltitle;
			var xmlitems = xmlDoc.querySelectorAll("item");
			if (utils_Config.bDebug) {
				console.log("xmlitems");
				console.log(xmlitems);
			}
			if (xmlitems == null || xmlitems == undefined) return null;
			json.channelprograms = [];
			xmlitems.forEach(function (item) {
				json.channelprograms.push(_this.getChannelProgramFromXml(item));
			});

			if (utils_Config.bDebug) {
				console.log("json");
				console.log(json);
			}

			return json;
		};

		_this.getChannelProgramXmlValue = function (item) {
			if (item === null || item === undefined || item === NaN) {
				console.log("json");
				console.log(json);
				return null;
			}
			var item1 = item[0];
			if (item1 === null || item1 === undefined || item1 === NaN) {
				console.log("item1");
				console.log(item1);
				return null;
			}
			var childNode1 = item1.childNodes[0];
			if (childNode1 === null || childNode1 === undefined || childNode1 === NaN) {
				console.log("childNode1");
				console.log(childNode1);
				return null;
			}
			var nodeValue1 = childNode1.nodeValue;
			if (nodeValue1 === null || nodeValue1 === undefined || nodeValue1 === NaN) {
				console.log("nodeValue1");
				console.log(nodeValue1);
				return null;
			}
			return nodeValue1;
		};

		_this.getChannelProgramFromXml = function (item) {
			if (utils_Config.bDebug) {
				console.log("item");
				console.log(item);
			}
			var jsonitem = {};
			jsonitem.title = _this.getChannelProgramXmlValue(item.getElementsByTagName("title"));
			jsonitem.description = _this.getChannelProgramXmlValue(item.getElementsByTagName("description"));
			jsonitem.pubdate = _this.getChannelProgramXmlValue(item.getElementsByTagName("pubDate"));
			jsonitem.link = _this.getChannelProgramXmlValue(item.getElementsByTagName("link"));
			// [0].childNodes[0].nodeValue;
			return jsonitem;
		};

		_this.handleErrors = function (response) {
			if (!response.ok) {
				// throw Error(response.statusText);
				console.log("response");
				console.log(response);
				console.log(response.status);
				throw Error(response.status);
			}
			return response;
		};

		_this.showOneChannel = function (event) {
			event.preventDefault();
			//	console.log("showOneChannel");
			var value = event.target.checked;
			var bValue = value; // this.showOneChannelRef.current.;

			if (bValue) _this.setState({ showChannelsAtSameTime: 1,
				bCheckShowChannelsAtSameTime: true,
				bSearchButtonClicked: false });else _this.setState({ showChannelsAtSameTime: _this.const_showChannelsAtSameTime,
				selectedchannelindex: -1,
				bCheckShowChannelsAtSameTime: false,
				bSearchButtonClicked: false });
		};

		_this.showAllDescriptions = function (event) {
			event.preventDefault();
			var value = event.target.checked;
			console.log("showAllDescriptions");
			var bValue = value; // this.state.bDisplayAllDescriptions;
			console.log("bValue");
			console.log(bValue);
			/*
   if (value === 'on')
   	bValue = true;
   console.log(value);
   */
			_this.setState({ bDisplayAllDescriptions: bValue,
				bSearchButtonClicked: false });
		};

		_this.getPOfIndex = function (index, txt) {
			if (utils_Config.bDebug) {
				console.log("getPOfIndex");
			}
			var textSearch = _this.state.textSearch;
			if (utils_Config.bDebug) {
				console.log("textSearch");
				console.log(textSearch);
			}
			if (txt == undefined || txt == null) return "";
			if (utils_Config.bDebug) {
				console.log("txt");
				console.log(txt);
				console.log("index");
				console.log(index);
			}
			var txtlen = txt.length;
			if (index == undefined || index == null || index < 0 || txtlen <= index) return txt;
			if (textSearch == undefined || textSearch == null || textSearch.toString().trim().length == 0) return txt;

			var first = txt.substring(0, index);
			var between = txt.substring(index, index + textSearch.length);
			var last = txt.substring(index + textSearch.length);

			if (utils_Config.bDebug) {
				console.log("first");
				console.log(first);
				console.log("between");
				console.log(between);
				console.log("last");
				console.log(last);
			}

			var newvalue = Object(preact_min["h"])(
				preact_min["Fragment"],
				null,
				Object(preact_min["h"])(
					'span',
					null,
					first
				),
				Object(preact_min["h"])(
					'span',
					{ style: 'background-color: green; color: white;' },
					between
				),
				Object(preact_min["h"])(
					'span',
					null,
					last
				)
			);
			if (utils_Config.bDebug) {
				console.log("newvalue");
				console.log(newvalue);
			}
			return newvalue;
		};

		_this.getTableHeadersAndTableRowsAfterChannels = function () {
			var headers = null;
			var channels = null;
			if (utils_Config.bDebug) {
				console.log("getTableHeadersAndTableRowsAfterChannels");
				console.log("this.state.bCheckShowChannelsAtSameTime");
				console.log(_this.state.bCheckShowChannelsAtSameTime);
				console.log("this.state.selectedchannelindex");
				console.log(_this.state.selectedchannelindex);
				console.log(_this.state);
			}

			var bAllChannels = false;
			if (_this.state.bSearchButtonClicked) {
				if (_this.state.channels == null) {
					headers = [];
					channels = [];
					var _ret = {};
					_ret.headers = headers;
					_ret.channels = channels;
					return _ret;
				}
				var searchText = _this.state.textSearch;
				if (searchText != null && searchText.toString().trim().length > 0) {
					var foundedChannelsTitle = null;
					var index = -1;
					var foundedChannels = [];
					var foundedPrograms = [];
					var founded = false;
					var progfounded = false;
					var uppersearchText = searchText.toUpperCase();
					var chcoopy = {};

					var search_channels = _this.state.channels;
					console.log("before filter search");
					console.log("this.state.bCheckShowChannelsAtSameTime");
					console.log(_this.state.bCheckShowChannelsAtSameTime);
					console.log("this.state.selectedchannelindex");
					console.log(_this.state.selectedchannelindex);

					if (_this.state.bCheckShowChannelsAtSameTime && _this.state.selectedchannelindex != -1) {
						console.log("filter search bCheckShowChannelsAtSameTime");
						var selectedTitle = search_channels[_this.state.selectedchannelindex].title;
						var filteredchannels = search_channels.filter(function (s, i) {
							//	console.log("i");
							//	console.log(i);
							return s.title === selectedTitle;
						});
						search_channels = filteredchannels;
					}

					Array.from(search_channels).forEach(function (cha) {
						chcoopy = {};
						index = -1;
						founded = false;
						// this.state.channels.forEach(cha, i => {
						_extends(chcoopy, cha);
						if (utils_Config.bDebug) {
							console.log("chcoopy");
							console.log(chcoopy);
							console.log("chcoopy.channelprograms");
							console.log(chcoopy.channelprograms);
						}
						index = chcoopy.title.toUpperCase().indexOf(uppersearchText);
						if (index != -1) {
							chcoopy.titleindex = index;
							founded = true;
						}
						foundedPrograms = [];

						Array.from(chcoopy.channelprograms).forEach(function (pr) {
							// cha.channelprograms.forEach(pr, i => {
							progfounded = false;
							index = pr.title.toUpperCase().indexOf(uppersearchText);
							if (index != -1) {
								pr.titleindex = index;
								founded = true;
								progfounded = true;
							}
							index = pr.description.toUpperCase().indexOf(uppersearchText);
							if (index != -1) {
								pr.descriptionindex = index;
								founded = true;
								progfounded = true;
							}
							if (progfounded) foundedPrograms.push(pr);
						});

						if (founded) {
							if (foundedPrograms != null && foundedPrograms.length != 0) chcoopy.channelprograms = foundedPrograms;else chcoopy.channelprograms = cha.channelprograms;
							foundedChannels.push(chcoopy);
						}
					});

					if (foundedChannels == null && foundedChannels.length == 0) {
						headers = [];
						channels = [];
					} else {

						headers = foundedChannel.map(function (jsonchannel, i) {
							return jsonchannel.title.replace("Telkussa: ", "");
						});
						channels = foundedChannels.map(function (jsonchannel, i) {
							return Object(preact_min["h"])(telkku_RssTelkkuChannel, { id: i, data: jsonchannel,
								showSearch: true,
								getPOfIndex: _this.getPOfIndex,
								displayAllDescriptions: _this.state.bDisplayAllDescriptions
							});
						});
					}
				} else {
					headers = _this.state.channels.map(function (jsonchannel, i) {
						return jsonchannel.title.replace("Telkussa: ", "");
					});
					channels = _this.state.channels.map(function (jsonchannel, i) {
						return Object(preact_min["h"])(telkku_RssTelkkuChannel, { id: i, data: jsonchannel,
							displayAllDescriptions: _this.state.bDisplayAllDescriptions });
					});
				}
			} else if (_this.state.bCheckShowChannelsAtSameTime && _this.state.selectedchannelindex != -1) {
				console.log("filter");
				var _selectedTitle = _this.state.channels[_this.state.selectedchannelindex].title;
				var _filteredchannels = _this.state.channels.filter(function (s, i) {
					//	console.log("i");
					//	console.log(i);
					return s.title === _selectedTitle;
				});
				//				console.log("filteredchannels");
				//				console.log(filteredchannels);
				headers = _filteredchannels.map(function (jsonchannel, i) {
					return jsonchannel.title.replace("Telkussa: ", "");
				});
				channels = _filteredchannels.map(function (jsonchannel, i) {
					return Object(preact_min["h"])(telkku_RssTelkkuChannel, { id: i, data: jsonchannel,
						displayAllDescriptions: _this.state.bDisplayAllDescriptions });
				});
			} else {
				if (_this.state.showChannelsAtSameTime == _this.state.channels.length || _this.state.showChannelsAtSameTime > _this.state.channels.length) {
					headers = _this.state.channels.map(function (jsonchannel, i) {
						return jsonchannel.title.replace("Telkussa: ", "");
					});
					channels = _this.state.channels.map(function (jsonchannel, i) {
						return Object(preact_min["h"])(telkku_RssTelkkuChannel, { id: i, data: jsonchannel,
							displayAllDescriptions: _this.state.bDisplayAllDescriptions });
					});
				} else {
					var _bAllChannels = false;
					if (_this.state.showChannelsAtSameTime < _this.state.channels.length) {
						var min = Math.floor(_this.state.currentChannelSetIndex * _this.state.showChannelsAtSameTime);
						var max = _this.state.currentChannelSetIndex == 0 ? _this.state.showChannelsAtSameTime : Math.floor(_this.state.currentChannelSetIndex * _this.state.showChannelsAtSameTime + _this.state.showChannelsAtSameTime);
						if (utils_Config.bDebug) {
							console.log("min");
							console.log(min);
							console.log("max");
							console.log(max);
						}
						if (min < 0) min = 0;else if (min > _this.state.channels.length) {
							min = _this.state.channels.length;
							_bAllChannels = true;
						}

						if (max > _this.state.channels.length) max = _this.state.channels.length;

						if (!_bAllChannels) {
							var i = void 0;
							var newChannelSet = [];
							for (i = min; i < max; i++) {
								newChannelSet.push(_this.state.channels[i]);
							}

							headers = newChannelSet.map(function (jsonchannel, i) {
								return jsonchannel.title.replace("Telkussa: ", "");
							});
							channels = newChannelSet.map(function (jsonchannel, i) {
								return Object(preact_min["h"])(telkku_RssTelkkuChannel, { id: i, data: jsonchannel,
									displayAllDescriptions: _this.state.bDisplayAllDescriptions });
							});
						}
					} else {
						_bAllChannels = true;
					}

					/*
     let divided = this.state.channels.size() % this.state.showChannelsAtSameTime:						
     if (Config.bDebug)
     {
     	console.log("divided");
     	console.log(divided);
     }
     */
					if (_bAllChannels) {
						headers = _this.state.channels.map(function (jsonchannel, i) {
							return jsonchannel.title.replace("Telkussa: ", "");
						});
						channels = _this.state.channels.map(function (jsonchannel, i) {
							return Object(preact_min["h"])(telkku_RssTelkkuChannel, { id: i, data: jsonchannel,
								displayAllDescriptions: _this.state.bDisplayAllDescriptions });
						});
					}
				}
			}

			var ret = {};
			ret.headers = headers;
			ret.channels = channels;
			return ret;
		};

		_this.textFieldChannelsAtSameTimeChanged = function (event) {
			event.preventDefault();
			var value = event.target.value;
			if (utils_Config.bDebug) {
				console.log("textFieldChannelsAtSameTimeChanged");
				console.log(value);
			}
			var validNumber = parseInt(value);
			if (utils_Config.bDebug) {
				console.log("validNumber");
				console.log(validNumber);
			}
			if (validNumber == NaN || validNumber == undefined) {
				event.target.value = _this.const_showChannelsAtSameTime;
				return;
			} else if (parseInt(validNumber) < 1) {
				event.target.value = 1;
				return;
			} else if (parseInt(validNumber) > _this.const_showChannelsAtSameTime) {
				event.target.value = _this.const_showChannelsAtSameTime;
				return;
			}
			_this.setState({ showChannelsAtSameTime: validNumber,
				currentChannelSetIndex: 0,
				bSearchButtonClicked: false });
		};

		_this.calculateMaxChannelSetIndex = function () {
			if (utils_Config.bDebug) {
				console.log("calculateMaxChannelSetIndex");
				/*
    console.log(channelSets);
    console.log("calculateMaxChannelSetIndex");
    console.log(channelSets);
    console.log("calculateMaxChannelSetIndex");
    console.log(channelSets);
    */
			}
			if (_this.state.channels == null) return 0;
			var channelssize = _this.state.channels.length;
			if (channelssize === 0) return 0;
			if (_this.state.bCheckShowChannelsAtSameTime) return 0;
			if (_this.state.showChannelsAtSameTime >= _this.state.channels.length) return 0;
			var channelSets = _this.state.channels.length / _this.state.showChannelsAtSameTime;
			if (utils_Config.bDebug) {
				console.log("channelSets");
				console.log(channelSets);
			}
			if (channelSets == 0) return 0;
			return channelSets - 1;
		};

		_this.nextChannelSetClicked = function (event) {
			event.preventDefault();
			if (_this.state.channels == null || _this.state.channels.length == 0) return;
			if (_this.state.currentChannelSetIndex > _this.calculateMaxChannelSetIndex()) {
				_this.setState({ currentChannelSetIndex: _this.calculateMaxChannelSetIndex(),
					bSearchButtonClicked: false });
				return;
			}
			if (_this.state.currentChannelSetIndex === _this.calculateMaxChannelSetIndex()) {
				return;
			}
			_this.setState({ currentChannelSetIndex: _this.state.currentChannelSetIndex + 1,
				bSearchButtonClicked: false });
		};

		_this.prevChannelSetClicked = function (event) {
			event.preventDefault();
			if (_this.state.channels == null || _this.state.channels.length == 0) return;
			if (_this.state.currentChannelSetIndex < 0) {
				_this.setState({ currentChannelSetIndex: 0,
					bSearchButtonClicked: false });
				return;
			}
			if (_this.state.currentChannelSetIndex === 0) {
				return;
			}
			_this.setState({ currentChannelSetIndex: _this.state.currentChannelSetIndex - 1,
				bSearchButtonClicked: false });
		};

		_this.loadMoreChannelClicked = function () {
			_this.fetchRssTelkkuPrograms(_this.state.channels == null ? 1 : _this.state.channels.length + 1, _this.state.channels.length + 10);
		};

		_this.loadAllChannelClicked = function () {
			_this.fetchRssTelkkuPrograms(_this.state.channels == null ? 1 : _this.state.channels.length + 1, -1);
		};

		_this.searchTextFromChannelsClicked = function () {
			event.preventDefault();
			if (utils_Config.bDebug) {
				console.log("searchTextFromChannelsClicked");
			}
			var searchText = _this.state.textSearch;
			if (utils_Config.bDebug) {
				console.log("searchText 2 ");
				console.log(searchText);
			}
			if (searchText == undefined || searchText == null || searchText.trim().length == 0) return;
			// to start make indirect the search:
			if (utils_Config.bDebug) {
				console.log("searchTextFromChannelsClicked 2 ");
			}
			var value = _this.showAllDescrRef.current.MDComponent.checked;
			if (!value) _this.showAllDescrRef.current.MDComponent.checked = true;
			_this.setState({ bSearchButtonClicked: true,
				bDisplayAllDescriptions: true });
			_this.forceUpdate();
		};

		_this.textFieldSearchChanged = function (event) {
			event.preventDefault();
			var value = event.target.value;
			if (utils_Config.bDebug) {
				console.log("textFieldSearchChanged");
				console.log(value);
			}
			_this.setState({ textSearch: value,
				bSearchButtonClicked: false });
		};

		_this.abortFetchClicked = function (event) {
			event.preventDefault();
			if (!_this.state.bUnderFetch) return;
			if (utils_Config.bDebug) console.log("abortFetchClicked.abort()");
			if (!_this.abortSignal.aborted) {
				_this.abortController.abort();
				_this.setState({ bUnderFetch: false });
			}
		};

		_this.getFetchedDate = function () {
			var today = _this.state.today;
			var days = today.getDate();
			var month = today.getMonth() + 1;
			var year = today.getFullYear();
			if (days < 10) days = "0" + days;
			if (month < 10) month = "0" + month;
			var ret = "" + days + "." + month + "." + year;
			return ret;
		};

		_this.showTableBorders = function (event) {
			event.preventDefault();
			var value = event.target.checked;
			if (utils_Config.bDebug) console.log("showTableBorders");
			var bValue = value;
			if (utils_Config.bDebug) {
				console.log("bValue");
				console.log(bValue);
			}
			_this.setState({ bShowTableBorder: bValue });
		};

		if (utils_Config.bDebug) {
			console.log("Telkku.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;
		var now = Date.now();
		_this.state = {
			errmsg: null,
			channels: null,
			currentchannel: null,
			today: new Date(now),
			bDisplayAllDescriptions: false,
			showChannelsAtSameTime: _this.const_showChannelsAtSameTime,
			selectedchannelindex: -1,
			bCheckShowChannelsAtSameTime: false,
			currentChannelSetIndex: 0,
			bUnderFetch: false,
			bAllChannelsLoaded: false,
			textSearch: null,
			bSearchButtonClicked: false,
			bShowTableBorder: false

			// this.fetch_url_telkku = 'https://telkussa.fi/RSS/Channel/';
		};_this.fetch_url_telkku = utils_Config.http_curlserver + '/telkku/';
		_this.TelkkuException = _this.TelkkuException.bind(_this);
		_this.removelisteners = _this.removelisteners.bind(_this);
		_this.showAllDescrRef = Object(preact_min["createRef"])();
		_this.showOneChannelRef = Object(preact_min["createRef"])();
		_this.selectChannelRef = Object(preact_min["createRef"])();
		return _this;
	}

	Telkku.prototype.componentDidMount = function componentDidMount() {
		if (utils_Config.bDebug) console.log("componentDidMount 1");
		this.abortController = new abort_controller_default.a(); // 1        
		this.abortSignal = this.abortController.signal; // 2
		this._mounted = true;
		this.fetchRssTelkkuPrograms();
	};

	Telkku.prototype.removelisteners = function removelisteners() {};

	Telkku.prototype.componentWillUnmount = function componentWillUnmount() {
		if (this.abortSignal && !this.abortSignal.aborted) this.abortController.abort();
		this.setState({});
		this.store.setStateNoneCallListeners({ fetchitems: [], channeltypeitems: [],
			programtypeitems: [], categories: [], schedules: []
		});
		this._mounted = false;
	};

	Telkku.prototype.TelkkuException = function TelkkuException(message) {
		this.message = message;
		this.name = 'TelkkuException';
	};

	Telkku.prototype.render = function render(props, state) {
		var _this2 = this;

		if (utils_Config.bDebug) {
			console.log("state");
			console.log(state);
		}

		var tableBorderStyle = '';
		if (state.bShowTableBorder) tableBorderStyle = ' border: 1px solid black;';

		var channels = null;
		var tableheaders = null;
		var selectchannels = null;
		var tabletds = null;
		var headers = null;
		if (state.channels !== null) {
			// selected={child.title.fi===state.selectedcategory.title.fi} 
			selectchannels = state.channels.map(function (child, i) {
				return Object(preact_min["h"])(
					Select_default.a.Item,
					{ id: i
					},
					child.title
				);
			});
			var tableheaders_and_rows = this.getTableHeadersAndTableRowsAfterChannels();
			headers = tableheaders_and_rows.headers;
			if (headers != null) tableheaders = headers.map(function (child, i) {
				return Object(preact_min["h"])(
					'th',
					{ style: 'vertical-align: top; padding-left: 5px; padding-right: 5px;' + tableBorderStyle },
					child
				);
			});
			channels = tableheaders_and_rows.channels;
			tabletds = channels;
			if (channels != null) tabletds = channels.map(function (child, i) {
				return Object(preact_min["h"])(
					'td',
					{ style: 'vertical-align: top; padding-left: 5px; padding-right: 5px; ' + tableBorderStyle },
					child
				);
			});
		}

		return Object(preact_min["h"])(
			'div',
			null,
			Object(preact_min["h"])(
				'h1',
				null,
				'Telkku ',
				this.getFetchedDate()
			),
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(
					'div',
					null,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true, disabled: state.channels == null || state.showChannelsAtSameTime == 1 && state.bCheckShowChannelsAtSameTime || state.showChannelsAtSameTime >= state.channels.length,
								onClick: this.prevChannelSetClicked },
							'<'
						)
					),
					Telkku__ref,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true,
								disabled: state.channels == null || state.showChannelsAtSameTime == 1 && state.bCheckShowChannelsAtSameTime || state.showChannelsAtSameTime >= state.channels.length,
								onClick: this.nextChannelSetClicked },
							'>'
						)
					),
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(Checkbox_default.a, { id: 'checkshowdescribtions',
							onChange: this.showAllDescriptions,
							ref: this.showAllDescrRef }),
						Telkku__ref2
					),
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(Checkbox_default.a, { id: 'checkshowonechannel', onChange: this.showOneChannel,
							ref: this.showOneChannelRef }),
						Telkku__ref3
					),
					Telkku__ref4,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Select_default.a,
							{
								selectedIndex: this.state.selectedchannelindex,
								disabled: state.showChannelsAtSameTime !== 1,
								preselected: true, outlined: true,
								ref: this.selectChannelRef,
								onChange: function onChange(e) {
									_this2.setState({
										selectedchannelindex: e.target.selectedIndex,
										bSearchButtonClicked: false
									});
								} },
							selectchannels
						)
					),
					Telkku__ref5,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Telkku__ref6,
						Object(preact_min["h"])('input', { id: 'input_number_columss',
							name: 'input_number_columns',
							disabled: this.state.bCheckShowChannelsAtSameTime,
							type: 'number', min: '1', max: '10',
							value: this.state.showChannelsAtSameTime === -1 ? '' : this.state.showChannelsAtSameTime,
							onKeyUp: this.textFieldChannelsAtSameTimeChanged
						})
					),
					Telkku__ref7,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(TextField_default.a, { outlined: true, label: 'Etsi teksti\xE4 ohjelmista',
							disabled: state.channels == null || state.bUnderFetch,
							onKeyUp: this.textFieldSearchChanged,
							style: ' width: 90%;' })
					),
					Telkku__ref8,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true,
								disabled: state.channels == null || state.bUnderFetch,
								onClick: this.searchTextFromChannelsClicked },
							'Hae'
						)
					),
					Telkku__ref9,
					Telkku__ref10,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true, disabled: state.bUnderFetch || state.bAllChannelsLoaded,
								onClick: this.loadMoreChannelClicked },
							'Lataa +10 kanavaa'
						)
					),
					Telkku__ref11,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true, disabled: state.bUnderFetch || state.bAllChannelsLoaded,
								onClick: this.loadAllChannelClicked },
							'Lataa kaikki kanavat'
						)
					),
					Telkku__ref12,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(Checkbox_default.a, { id: 'checkTableBorders',
							onChange: this.showTableBorders,
							ref: this.showTableBordersRef }),
						Telkku__ref13
					),
					Telkku__ref14,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true, disabled: state.channels == null || !state.bUnderFetch,
								onClick: this.abortFetchClicked },
							'Keskeyt\xE4 lataus'
						)
					)
				)
			),
			Telkku__ref15,
			Telkku__ref16,
			Object(preact_min["h"])(
				'div',
				null,
				Telkku__ref17,
				Object(preact_min["h"])(
					'table',
					{ style: 'width:100%' },
					Object(preact_min["h"])(
						'tbody',
						null,
						Object(preact_min["h"])(
							'tr',
							null,
							tableheaders
						),
						Object(preact_min["h"])(
							'tr',
							null,
							tabletds
						)
					)
				)
			)
		);
	};

	return Telkku;
}(preact_min["Component"]);

/*

					<Chips>
						<Chips.Chip style={(state.channels == null
						    || state.showChannelsAtSameTime >= state.channels.length 
						    ? 'display: none' :'' }>
							<Chips.Text>&lt;</Chips.Text>
						</Chips.Chip>
						<Chips.Chip disabled={state.channels == null
						    || state.showChannelsAtSameTime >= state.channels.length }>
							<Chips.Text>&gt;</Chips.Text>
						</Chips.Chip>
					</Chips>

<LayoutGrid>
							<LayoutGrid.Inner>
								{channels}
							</LayoutGrid.Inner>
        				</LayoutGrid>
						*/



// CONCATENATED MODULE: ./routes/telkku/TelkkuRoute.js


function TelkkuRoute__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TelkkuRoute__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TelkkuRoute__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// import Category from './Category';
// import GridOrList from './GridOrList';


// import StaticFunctions from '../../utils/StaticFunctions';

var TelkkuRoute_TelkkuRoute = function (_Component) {
	TelkkuRoute__inherits(TelkkuRoute, _Component);

	function TelkkuRoute(props) {
		TelkkuRoute__classCallCheck(this, TelkkuRoute);

		var _this = TelkkuRoute__possibleConstructorReturn(this, _Component.call(this, props));

		_this.removelisteners = function () {};

		if (utils_Config.bDebug) {
			console.log("YleRoute.js");
			console.log("props");
			console.log(props);
		}

		_this.state = {
			errmsg: null
		};

		return _this;
	}

	TelkkuRoute.prototype.componentDidMount = function componentDidMount() {
		if (utils_Config.bDebug) console.log("componentDidMount 1");
		// this.fetchProgCategories();		
	};

	/*
 	'Origin': 'localhost:8080',
 		'User-Agent': 'curl/7.55.1',
 		'Host': 'external.api.yle.fi',
 		'Access-Control-Allow-Origin': '*',
 		'Access-Control-Allow-Credentials': true,
 		'Cross-Origin-Resource-Policy': 'cross-origin',
 		'Access-Control-Allow-Methods': 'GET,OPTIONS',
 		'Access-Control-Allow-Headers': 'Content-Type'
 */

	TelkkuRoute.prototype.render = function render(props, state) {

		return Object(preact_min["h"])(
			'div',
			{ 'class': telkku_style_default.a.home + ' page' },
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(Telkku_Telkku, { store: props.store }),
				Object(preact_min["h"])(
					'div',
					{ style: { "background-color": 'red', color: "yellow" } },
					state.errmsg
				)
			)
		);
	};

	return TelkkuRoute;
}(preact_min["Component"]);

/*
						<FormField>
							<Radio id="radio_yle" name='optsource' 
							    checked={state.progsource == 'radio_yle'}
								onChange={this.radioProgSourceChanged} ></Radio>
							<label for="radio_yle">Yle</label>
						</FormField>
*/



// EXTERNAL MODULE: ./routes/amppari/style.css
var amppari_style = __webpack_require__("mWaD");
var amppari_style_default = /*#__PURE__*/__webpack_require__.n(amppari_style);

// EXTERNAL MODULE: ./components/amppari/style.css
var components_amppari_style = __webpack_require__("vhrP");
var components_amppari_style_default = /*#__PURE__*/__webpack_require__.n(components_amppari_style);

// CONCATENATED MODULE: ./components/amppari/AmppariShowProgram.js




//import Chips from 'preact-material-components/Chips';
//import 'preact-material-components/Chips/style.css';

















dayjs_min_default.a.locale('fi');

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 

var AmppariShowProgram__ref3 = Object(preact_min["h"])(
    'space',
    null,
    ' '
);

var AmppariShowProgram__ref4 = Object(preact_min["h"])(
    'space',
    null,
    ' '
);

var AmppariShowProgram__ref5 = Object(preact_min["h"])(
    'space',
    null,
    ' '
);

var AmppariShowProgram__ref6 = Object(preact_min["h"])('br', null);

var AmppariShowProgram__ref7 = Object(preact_min["h"])(Card_default.a.Media, { className: 'card-media' });

function AmppariShowProgram(props) {
    var _useState = l(false),
        displaydescription = _useState[0],
        setDisplayDescription = _useState[1];
    //    const [displayAllDescriptions, setDisplayAllDescriptions] = useState(props.displayAllDescriptions);


    var scrollingDlgRef = hooks_module_s(null);

    // dot = " height: 25px; width: 25px; background-color: #bbb; border-radius: 50%; display: inline-block;";
    var dot = "border-radius: 50%; width: 10px; height: 10px; padding: 2px; background: #fff; " + " border: 2px solid #000; color: #000; text-align: center; font: 10px Arial, sans-serif;";

    var onClickDisplay = function onClickDisplay(event) {
        event.preventDefault();
        // console.log("onClickDisplay");
        if (props.displayAllDescriptions) return;
        if (!displaydescription) scrollingDlgRef.current.MDComponent.show();
        setDisplayDescription(!displaydescription);
    };

    var onClickDisplayDialog = function onClickDisplayDialog(event) {
        event.preventDefault();
        // console.log("onClickDisplayDialog");
        if (displaydescription) scrollingDlgRef.current.MDComponent.close();
        setDisplayDescription(!displaydescription);
    };

    var getTime = function getTime(timemillisec) {
        var day = new Date(timemillisec * 1000);
        var hours = day.getHours();
        var minutes = day.getMinutes();;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;
        return "" + hours + ":" + minutes;
    };

    /*
    	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    jsonitem.link =
        <Chips.Chip onClick={onClickDisplay} >
                <Chips.Text>{data.title}</Chips.Text></Chips.Chip> : <Chips.Chip onClick={onClickDisplay}>
                <Chips.Text>Kissa</Chips.Text></Chips.Chip> }
                   {(!displaydescription ? 
            <Button onClick={onClickDisplay} >
                {data.title}</Button> : <Chips.Chip onClick={onClickDisplay}>
                <Chips.Text>Kissa</Chips.Text></Chips.Chip>) }
                               <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
              <Chips.Text>{props.data.title}</Chips.Text></Chips.Chip> 
    */

    var openHtmlPage = function openHtmlPage(event) {
        console.log("openHtmlPage");
        event.preventDefault();
        var blankurl = event.target.href;
        console.log("blankurl");
        console.log(blankurl);
        // window.open(blankurl, '_blank', "Ampparissa", "location=no");
        window.open(blankurl, '_blank', "Ampparissa");
        return false;
    };

    var getPOfTitleIndex = function getPOfTitleIndex(props) {
        console.log("getPOfTitleIndex");

        var index = props.data.titleindex;
        console.log("titleindex");
        console.log(index);
        var title = props.data.title;
        if (title != null) title = title.toString();
        console.log("title");
        console.log(title);
        if (index == undefined || index < 0) return title;
        var ret = props.getPOfIndex(index, title);
        console.log("ret after getPOfIndex");
        console.log(ret);
        return ret;
    };

    var _ref = Object(preact_min["h"])(
        'span',
        { style: dot },
        'E'
    );

    var _ref2 = Object(preact_min["h"])(
        'span',
        { style: dot },
        'U'
    );

    var getProgramSymbol = function getProgramSymbol(props) {
        var ret = null;
        if (props.data.movie) ret = _ref;else if (props.data.sport) ret = _ref2;

        return ret;
    };

    // <p><a href={props.data.link} target="_blank" >ohjelmalinkki</a></p>onClik={this.openHtmlPage} linkurl={props.data.link}

    // +this.getPOfTitleIndex()
    return Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
            'div',
            { onClick: onClickDisplay },
            Object(preact_min["h"])(
                preact_min["Fragment"],
                null,
                Object(preact_min["h"])(
                    'p',
                    null,
                    Object(preact_min["h"])(
                        'b',
                        null,
                        props.showSearch && props.data.titleindex != undefined ? Object(preact_min["h"])(
                            'div',
                            null,
                            getProgramSymbol(props),
                            ' ',
                            getTime(props.data.timestamp),
                            AmppariShowProgram__ref3,
                            getPOfTitleIndex(props)
                        ) : Object(preact_min["h"])(
                            'div',
                            null,
                            getProgramSymbol(props),
                            ' ',
                            getTime(props.data.timestamp),
                            AmppariShowProgram__ref4,
                            props.data.title.toString()
                        )
                    )
                )
            ),
            props.displayAllDescriptions ? Object(preact_min["h"])(
                preact_min["Fragment"],
                null,
                Object(preact_min["h"])(
                    'p',
                    null,
                    props.showSearch && props.data.descriptionindex != undefined ? props.getPOfIndex(props.data.descriptionindex, props.data.description.toString()) : props.data.description.toString()
                ),
                props.data.link != undefined || props.data.link != null ? Object(preact_min["h"])(
                    'p',
                    null,
                    Object(preact_min["h"])(
                        'a',
                        { href: props.data.link, onClick: this.openHtmlPage },
                        'ohjelmalinkki'
                    )
                ) : null
            ) : null,
            Object(preact_min["h"])(
                Dialog_default.a,
                {
                    ref: scrollingDlgRef },
                Object(preact_min["h"])(
                    Dialog_default.a.Header,
                    null,
                    props.channel
                ),
                Object(preact_min["h"])(
                    Dialog_default.a.Body,
                    { scrollable: true },
                    Object(preact_min["h"])(
                        Card_default.a,
                        null,
                        Object(preact_min["h"])(
                            'div',
                            { 'class': 'card-header' },
                            Object(preact_min["h"])(
                                'h3',
                                { 'class': ' mdc-typography--title' },
                                getProgramSymbol(props),
                                ' ',
                                getTime(props.data.timestamp),
                                AmppariShowProgram__ref5,
                                ' ',
                                props.data.title.toString()
                            ),
                            Object(preact_min["h"])(
                                'h3',
                                { 'class': ' mdc-typography--title' },
                                props.data.description.toString()
                            ),
                            AmppariShowProgram__ref6
                        ),
                        AmppariShowProgram__ref7
                    )
                ),
                Object(preact_min["h"])(
                    Dialog_default.a.Footer,
                    null,
                    Object(preact_min["h"])(
                        Dialog_default.a.FooterButton,
                        { onCancel: onClickDisplayDialog, cancel: true, accept: true },
                        'Sulje'
                    )
                )
            )
        )
    );
}

/* harmony default export */ var amppari_AmppariShowProgram = (AmppariShowProgram);
// CONCATENATED MODULE: ./components/amppari/AmppariChannel.js





/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
function AmppariChannel(props) {

    // const cssDark = useContext(CssDark);
    var displayitems = null;
    /*
    	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
    jsonitem.link =
    */
    if (props.data.channelprograms !== null) {
        var filteredchannels = props.data.channelprograms;
        if (props.selectedtyyppi !== undefined && props.selectedtyyppi !== 'kaikki') {
            if (props.selectedtyyppi === 'elokuvat') {
                var filteredchannels1 = filteredchannels.filter(function (s, i) {
                    //	console.log("i");
                    //	console.log(i);
                    return s.movie == true;
                });
                filteredchannels = filteredchannels1;
            } else if (props.selectedtyyppi === 'urheilu') {
                var _filteredchannels = filteredchannels.filter(function (s, i) {
                    //	console.log("i");
                    //	console.log(i);
                    return s.sport === true;
                });
                filteredchannels = _filteredchannels;
            }
        }
        displayitems = filteredchannels.map(function (program, i) {
            return Object(preact_min["h"])(amppari_AmppariShowProgram, { id: i, data: program,
                displayAllDescriptions: props.displayAllDescriptions,
                getPOfIndex: props.getPOfIndex,
                showSearch: props.showSearch == undefined ? false : props.showSearch,
                channel: props.data.title.toString() });
        });
    }

    return Object(preact_min["h"])(
        'div',
        null,
        displayitems
    );
}

/* harmony default export */ var amppari_AmppariChannel = (AmppariChannel);
// CONCATENATED MODULE: ./components/amppari/ChannelTypes.js


function ChannelTypes__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChannelTypes__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ChannelTypes__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// import moment from 'moment';










//if (!season) {
//	throw new Error("Season is not defined")
//}

var ChannelTypes__ref = Object(preact_min["h"])(
	'space',
	null,
	'     '
);

var ChannelTypes_ChannelTypes = function (_Component) {
	ChannelTypes__inherits(ChannelTypes, _Component);

	function ChannelTypes(props) {
		ChannelTypes__classCallCheck(this, ChannelTypes);

		var _this = ChannelTypes__possibleConstructorReturn(this, _Component.call(this, props));

		_this._mounted = false;
		_this.store = null;
		_this.unsubscribelistener = null;
		_this.arr_selectchanneltypes = ['kaikki', 'ilmaiset', 'maksulliset'];
		_this.fetcheditems = [];
		_this.channeltypeitems = [];

		_this.removelisteners = function () {
			if (_this.unsubscribelistener != null) {
				_this.unsubscribelistener();
				_this.unsubscribelistener = null;
			}
		};

		_this.listenerStoreChange2 = function (storestate) {
			console.log("ChannelTypes listenerStoreChange2");
			console.log(storestate);

			if (storestate === undefined || storestate === null) {
				console.log("ChannnelTypes listenerStoreChange storestate");
				return;
			}
			if (!_this._mounted) return;

			var fetchitems = storestate.fetchitems;
			if (fetchitems == _this.state.fetchitems) return;

			if (utils_Config.bDebug) {
				console.log("storestate.fetchitems change");
				console.log("storestate");
				console.log(storestate);
			}

			_this.fetchitems = fetchitems;
			var items = _this.filterChannesAfterChannelPay();
			_this.channeltypeitems = items;
			_this.setState({ fetchitems: fetchitems
			});
			_this.store.setState({ channeltypeitems: items });
		};

		_this.filterChannesAfterChannelPay = function (channeltype) {
			//  filterChannesAfterChannelPay takes items from fetcheditems and populates: channeltypeitems,
			var ind = null;
			var selected = null;
			var chtype = null;

			// const fitems = this.state.fetcheditems;
			var fitems = _this.fetchitems;

			if (utils_Config.bDebug) {
				console.log("filterChannesAfterChannelPay");
				console.log("channeltype");
				console.log(channeltype);
				console.log("fitems");
				console.log(fitems);
				console.log("fitems.size");
				console.log(fitems.length);
			}
			if (channeltype !== undefined) {
				ind = channeltype.ind;
				selected = channeltype.selected;
				chtype = channeltype.channeltype;
			} else {
				selected = _this.state.selectedsuodattimet;
				ind = _this.state.selectedsuodatinindex;
			}

			if (utils_Config.bDebug) {
				console.log("filterChannesAfterChannelPay 2");
				console.log("ind");
				console.log(ind);
				console.log("selected");
				console.log(selected);
			}

			var chls = null;
			if (fitems == null) chls = null;else if (selected == undefined || selected == null) chls = fitems;else {
				if (selected == 'kaikki') chls = fitems;else {
					var ret = null;
					if (selected === 'ilmaiset') {
						ret = fitems.filter(function (s, i) {
							//	console.log("i");
							//	console.log(i);
							return s.pay === false;
						});
					} else if (selected === 'maksulliset') {
						ret = fitems.filter(function (s, i) {
							//	console.log("i");
							//	console.log(i);
							return s.pay === true;
						});
					}
					chls = ret;
				}
			}

			if (utils_Config.bDebug) {
				console.log("chls 2");
				console.log(chls);
			}

			if (utils_Config.bDebug) {
				console.log("chls - channeltypeitems");
				console.log(chls);
				console.log("channeltypeitems.size");
				console.log(chls.length);
			}

			_this.channeltypeitems = chls;

			// let chls = this.filterFetchedItemsIntoChannelsAfterSuodin(chtype);
			/*
   if (!bChange)
   this.setState({
   	selectedsuodatinindex: ind,	
   	selectedsuodattimet: selected,
   	channeltypeitems: chls
   });
   else
   this.setState({
   	selectedsuodatinindex: ind,	
   	selectedsuodattimet: selected,
   	channeltypeitems: chls,
   	bCheckShowChannelsAtSameTime: true
   });
   */

			if (utils_Config.bDebug) {
				console.log("filterChannesAfterChannelPay 3");
				console.log(_this.state);
			}
			return chls;
		};

		if (utils_Config.bDebug) {
			console.log("ChannnelTypes.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;
		var today = new Date(Date.now());
		_this.state = {
			errmsg: null,
			selectedsuodattimet: 'kaikki',
			selectedsuodatinindex: 0,
			fetcheditems: [],
			channeltypeitems: [],
			disabled: props.disabled
		};
		return _this;
	}

	ChannelTypes.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		if (utils_Config.bDebug) console.log("componentDidMount ChannnelTypes");

		var keys = [];
		keys.push('fetchitems');
		console.log("keys");
		console.log(keys);
		this.unsubscribelistener = this.store.subscribeAttributeNameListener(keys, function (state) {
			return _this2.listenerStoreChange2(state);
		});
		this.props.setRemoverFunction(this.removelisteners, 'ChannelTypes');
		this._mounted = true;
	};

	ChannelTypes.prototype.componentWillUnmounted = function componentWillUnmounted() {
		this.removelisteners();
	};

	ChannelTypes.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (utils_Config.bDebug) {
			console.log("ChannnelTypes componentWillReceiveProps nextProps");
			console.log(nextProps);
		}
		if (!this._mounted) return;
		if (nextProps.disabled != undefined && nextProps.disabled != this.props.disabled) this.setState({ disabled: nextProps.disabled
		});
	};

	ChannelTypes.prototype.render = function render(props, state) {
		var _this3 = this;

		if (utils_Config.bDebug) {
			console.log("state");
			console.log(state);
		}

		// suodatus=ilmaiset,maksulliset,kaikki
		var selectchanneltypes = this.arr_selectchanneltypes.map(function (child, i) {
			return Object(preact_min["h"])(
				Select_default.a.Item,
				{ id: i },
				child
			);
		});

		return Object(preact_min["h"])(
			FormField_default.a,
			null,
			Object(preact_min["h"])(
				'div',
				{ 'class': components_amppari_style_default.a.cardHeader },
				'Kanavatyyppi',
				ChannelTypes__ref,
				Object(preact_min["h"])(
					Select_default.a,
					{ disabled: state.disabled,
						selectedIndex: this.state.selectedsuodatinindex,
						preselected: true, outlined: true,
						onChange: function onChange(e) {
							console.log("e.target.target");
							console.log(e.target.text);
							var ind = e.target.selectedIndex;
							var selected = _this3.arr_selectchanneltypes[e.target.selectedIndex];
							var changed = {};
							changed.ind = ind;
							changed.selected = selected;
							var items = _this3.filterChannesAfterChannelPay(changed);
							_this3.setState({
								selectedsuodatinindex: ind,
								selectedsuodattimet: selected,
								channeltypeitems: items
							});
							_this3.store.setState({ channeltypeitems: items });
						} },
					selectchanneltypes
				)
			)
		);
	};

	return ChannelTypes;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/amppari/ProgramTypes.js
var ProgramTypes__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function ProgramTypes__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProgramTypes__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ProgramTypes__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// import moment from 'moment';










//if (!season) {
//	throw new Error("Season is not defined")
//}

var ProgramTypes__ref = Object(preact_min["h"])(
	'space',
	null,
	'     '
);

var ProgramTypes_ProgramTypes = function (_Component) {
	ProgramTypes__inherits(ProgramTypes, _Component);

	function ProgramTypes(props) {
		ProgramTypes__classCallCheck(this, ProgramTypes);

		var _this = ProgramTypes__possibleConstructorReturn(this, _Component.call(this, props));

		_this._mounted = false;
		_this.store = null;
		_this.unsubscribelistener = null;
		_this.arr_selecttyyppi_items = ['kaikki', 'elokuvat', 'urheilu'];
		_this.channeltypeitems = [];
		_this.programtypeitems = [];

		_this.removelisteners = function () {
			if (_this.unsubscribelistener != null) {
				_this.unsubscribelistener();
				_this.unsubscribelistener = null;
			}
		};

		_this.listenerStoreChange2 = function (storestate) {
			console.log("ProgramTypes listenerStoreChange2");
			console.log(storestate);

			if (storestate === undefined || storestate === null) {
				console.log("ChannnelTypes listenerStoreChange storestate");
				return;
			}
			if (!_this._mounted) return;

			var fetchitems = storestate.channeltypeitems;
			if (fetchitems == _this.state.channeltypeitems) return;

			if (utils_Config.bDebug) {
				console.log("storestate.channeltypeitems change");
				console.log("storestate");
				console.log(storestate);
			}

			_this.channeltypeitems = fetchitems;
			_this.setState({ channeltypeitems: fetchitems
			});
			var items = _this.filterAfterProgramType();
			_this.store.setState({ programtypeitems: items });
		};

		_this.filterAfterProgramType = function (change) {
			// if change parameter is undefined, then take value from state!
			// filterAfterProgramType takes items from channeltypeitems and populates: programtypeitems 
			//         and/or channels if there is no search, 

			var ind = null;
			var mychange = null;
			if (change == undefined) mychange = _this.state.selectedtyyppi;else {
				ind = change.ind;
				mychange = change.selected;
			}

			// const fitems = this.state.channeltypeitems;
			var fitems = _this.channeltypeitems;
			if (utils_Config.bDebug) {
				console.log("filterAfterProgramType channeltypeitems");
				console.log(_this.channeltypeitems);
				console.log("channeltypeitems.length");
				console.log(fitems.length);
			}

			var items = fitems;
			if (mychange == 'kaikki') items = fitems;else if (mychange === 'elokuvat') {
				items = _this.getMovieOrSportChannels(mychange);
			} else if (mychange === 'urheilu') {
				items = _this.getMovieOrSportChannels(mychange);
			}

			_this.programtypeitems = items;
			_this.channels = items;
			if (utils_Config.bDebug) {
				console.log("programtypeitems");
				console.log(_this.programtypeitems);
				console.log("programtypeitems.length");
				console.log(_this.programtypeitems.length);
			}
			/*		
   if (change !== undefined)
   	this.setState({ programtypeitems: items,
   		selectedTyyppiinindex: ind,
   		selectedtyyppi: selected
   		});
   else
   	this.setState({ programtypeitems: items	});
   	*/

			// { fetcheditems: data, channels: data,
			//	bUnderFetch: false, selectedsuodattimet: 'kaikki',
			//		selectedtyyppi: 'kaikki', selectedTyyppiinindex: 0,
			//		selectedsuodatinindex: 0 }
			return items;
		};

		_this.getMovieOrSportChannels = function (selected) {
			var fitems = _this.channeltypeitems;
			if (fitems == null) return null;
			if (selected == undefined || selected == null) return null;
			var ret = null;
			var foundmovies = selected === 'elokuvat';
			var foundsport = selected === 'urheilu';
			var chcoopy = void 0,
			    foundedPrograms = void 0,
			    progfounded = void 0;
			var foundedChannels = [];

			Array.from(fitems).forEach(function (cha) {
				chcoopy = {};
				ProgramTypes__extends(chcoopy, cha);
				/*
    if (Config.bDebug)
    {
    	console.log("chcoopy");
    	console.log(chcoopy);
    	console.log("chcoopy.channelprograms");
    	console.log(chcoopy.channelprograms);
    }
    */
				foundedPrograms = [];
				progfounded = false;

				var prcopy = null;
				Array.from(chcoopy.channelprograms).forEach(function (pr) {
					// cha.channelprograms.forEach(pr, i => {
					if (foundmovies && pr.movie) {
						progfounded = true;
						foundedPrograms.push(pr);
					} else if (foundsport && pr.sport) {
						progfounded = true;
						foundedPrograms.push(pr);
					}
				});

				if (progfounded) {
					if (foundedPrograms != null && foundedPrograms.length != 0) {
						chcoopy.channelprograms = foundedPrograms;
						foundedChannels.push(chcoopy);
					}
				}
			});

			return foundedChannels;
		};

		if (utils_Config.bDebug) {
			console.log("ChannnelTypes.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;
		var today = new Date(Date.now());
		_this.state = {
			errmsg: null,
			selectedTyyppiinindex: 0,

			disabled: props.disabled
		};
		return _this;
	}

	ProgramTypes.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		if (utils_Config.bDebug) console.log("componentDidMount ProgramTypes");
		//  this.unsubscribelistener = this.store.subscribe( state => this.listenerStoreChange2(state) );                
		var keys = [];
		keys.push('channeltypeitems');
		console.log("keys");
		console.log(keys);
		this.unsubscribelistener = this.store.subscribeAttributeNameListener(keys, function (state) {
			return _this2.listenerStoreChange2(state);
		});
		this.props.setRemoverFunction(this.removelisteners, 'ProgramTypes');
		this._mounted = true;
	};

	ProgramTypes.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (utils_Config.bDebug) {
			console.log("ProgramTypes componentWillReceiveProps nextProps");
			console.log(nextProps);
		}
		if (!this._mounted) return;
		if (nextProps.disabled != undefined && nextProps.disabled != this.props.disabled) this.setState({ disabled: nextProps.disabled
		});
	};

	ProgramTypes.prototype.componentWillUnmounted = function componentWillUnmounted() {
		this.removelisteners();
	};

	ProgramTypes.prototype.render = function render(props, state) {
		var _this3 = this;

		if (utils_Config.bDebug) {
			console.log("state");
			console.log(state);
		}

		var selecttyyppi_items = this.arr_selecttyyppi_items.map(function (child, i) {
			return Object(preact_min["h"])(
				Select_default.a.Item,
				{ id: i },
				child
			);
		});

		return Object(preact_min["h"])(
			FormField_default.a,
			null,
			Object(preact_min["h"])(
				'div',
				{ 'class': components_amppari_style_default.a.cardHeader },
				'Ohjelmatyyppi',
				ProgramTypes__ref,
				Object(preact_min["h"])(
					Select_default.a,
					{
						selectedIndex: this.state.selectedTyyppiinindex,
						preselected: true, outlined: true,
						onChange: function onChange(e) {
							console.log("e.target.target");
							console.log(e.target.text);
							var ind = e.target.selectedIndex;
							var selected = _this3.arr_selecttyyppi_items[ind];
							var changed = {};
							changed.ind = ind;
							changed.selected = selected;
							var items = _this3.filterAfterProgramType(changed);
							_this3.setState({ selectedTyyppiinindex: ind,
								selectedtyyppi: selected,
								channels: items
							});
							_this3.store.setState({ programtypeitems: items });
						} },
					selecttyyppi_items
				)
			)
		);
	};

	return ProgramTypes;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/amppari/SearchPrograms.js
var SearchPrograms__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function SearchPrograms__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchPrograms__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function SearchPrograms__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// import moment from 'moment';











var SearchPrograms__ref = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var SearchPrograms_SearchPrograms = function (_Component) {
	SearchPrograms__inherits(SearchPrograms, _Component);

	function SearchPrograms(props) {
		SearchPrograms__classCallCheck(this, SearchPrograms);

		var _this = SearchPrograms__possibleConstructorReturn(this, _Component.call(this, props));

		_this._mounted = false;
		_this.store = null;
		_this.unsubscribelistener = null;
		_this.programtypeitems = [];
		_this.textSearch = null;

		_this.removelisteners = function () {
			if (_this.unsubscribelistener != null) {
				_this.unsubscribelistener();
				_this.unsubscribelistener = null;
			}
		};

		_this.listenerStoreChange2 = function (storestate) {
			console.log("SearchPrograms listenerStoreChange2");
			console.log(storestate);

			if (storestate === undefined || storestate === null) {
				console.log("SearchPrograms listenerStoreChange storestate");
				return;
			}
			if (!_this._mounted) return;

			var programtypeitems = storestate.programtypeitems;
			if (programtypeitems == undefined || programtypeitems == null) return;
			if (programtypeitems == _this.state.programtypeitems) return;

			/*
   if (Config.bDebug)
   {
   	console.log("storestate change");
   	console.log("storestate");
   	console.log(storestate);
   }
   */

			_this.programtypeitems = programtypeitems;
			/*
   console.log("before programtypeitems");
   console.log(programtypeitems);
   */
			var items = _this.filterAfterSearch();
			_this.setState({ programtypeitems: programtypeitems });
			var bSearchButtonClicked = false;
			var bDisplayAllDescriptions = false;
			if (items != _this.programtypeitems) {
				bSearchButtonClicked = true;
				bDisplayAllDescriptions = true;
				_this.props.setDisplayAllDescriptionsTrue(_this.textSearch);
			}
			/*
   console.log("before store channels");
   console.log(items);
   */
			_this.store.setState({ channels: items, bSearchButtonClicked: bSearchButtonClicked,
				textSearch: _this.textSearch, bDisplayAllDescriptions: bDisplayAllDescriptions });
		};

		_this.searchTextFromChannelsClicked = function (event) {
			event.preventDefault();
			if (utils_Config.bDebug) {
				console.log("searchTextFromChannelsClicked");
			}

			var searchText = _this.textSearch;
			if (utils_Config.bDebug) {
				console.log("searchText 2 ");
				console.log(searchText);
			}
			if (searchText == undefined || searchText == null || searchText.trim().length == 0) return;
			// to start make indirect the search:
			if (utils_Config.bDebug) {
				console.log("searchTextFromChannelsClicked 2 ");
			}

			console.log("before programtypeitems filter");
			console.log(_this.programtypeitems);
			_this.setState({ bSearchButtonClicked: true });
			var items = _this.filterAfterSearch(true);
			var bSearchButtonClicked = false;
			var bDisplayAllDescriptions = false;
			if (items != _this.programtypeitems) {
				bSearchButtonClicked = true;
				bDisplayAllDescriptions = true;
				_this.props.setDisplayAllDescriptionsTrue(_this.textSearch);
			}
			_this.setState({ bSearchButtonClicked: true, bDisplayAllDescriptions: true });
			console.log("before store channels");
			console.log(items);
			_this.store.setState({ channels: items, bSearchButtonClicked: bSearchButtonClicked,
				textSearch: _this.textSearch, bDisplayAllDescriptions: bDisplayAllDescriptions });
			console.log("after store");
			console.log(_this.store.getState());
			// this.forceUpdate();
		};

		_this.makeSearchChange = function (change) {
			var bSearch = _this.state.bSearchButtonClicked;
			if ( /* bSearch && */change === undefined || change === null || change.toString().trim().length == 0) {
				_this.textSearch = null;
				_this.setState({ textSearch: null, bSearchButtonClicked: false });
				_this.store.setState({ channels: _this.programtypeitems, bSearchButtonClicked: false,
					textSearch: null, bDisplayAllDescriptions: false });
			} else _this.textSearch = change;
		};

		_this.textFieldSearchChanged = function (event) {
			event.preventDefault();
			var value = event.target.value;
			if (utils_Config.bDebug) {
				console.log("textFieldSearchChanged");
				console.log(value);
			}
			_this.makeSearchChange(value);
		};

		_this.filterAfterSearch = function (change) {
			// if change parameter is undefined, then take value from state!
			// filterAfterSearch takes items from programtypeitems and populates: channels if there is a 
			// ongoing search.
			var mychange = null;
			if (change == undefined) mychange = _this.state.bSearchButtonClicked;else {
				mychange = change;
			}

			var bAllChannels = false;
			var foundedChannels = [];
			var foundedPrograms = [];

			if (utils_Config.bDebug) {
				console.log("filterAfterSearch mychange");
				console.log(mychange);
			}

			_this.channels = _this.programtypeitems;
			if (mychange !== undefined && mychange !== null && mychange) {
				var all_channels = _this.channels;
				//let all_channels = this.channels;
				if (utils_Config.bDebug) {
					console.log("all_channels");
					console.log(all_channels);
					console.log("all_channels.length");
					console.log(all_channels.length);
				}

				if (all_channels == null) {
					return null; // this.setState({ bSearchButtonClicked: false, channels: null});		
				} else {
					// const searchText = this.state.textSearch;
					var searchText = _this.textSearch;
					if (utils_Config.bDebug) {
						console.log("searchText");
						console.log(searchText);
					}
					if (searchText == null || searchText.toString().trim().length == 0) {
						//					this.setState({ bSearchButtonClicked: false, 
						//						channels: all_channels});
						;
					} else {
						var foundedChannelsTitle = null;
						var index = -1;
						var founded = false;
						var progfounded = false;
						var uppersearchText = searchText.toUpperCase();
						var chcoopy = {};

						var search_channels = all_channels;
						if (_this.state.bCheckShowChannelsAtSameTime && _this.state.selectedchannelindex != -1) {
							console.log("filter search bCheckShowChannelsAtSameTime");
							var selectedTitle = search_channels[_this.state.selectedchannelindex].title;
							var filteredchannels = search_channels.filter(function (s, i) {
								//	console.log("i");
								//	console.log(i);
								return s.title === selectedTitle;
							});
							search_channels = filteredchannels;
						}

						if (utils_Config.bDebug) {
							console.log("search_channels");
							console.log(search_channels);
						}

						Array.from(search_channels).forEach(function (cha) {
							chcoopy = {};
							index = -1;
							founded = false;
							// this.state.channels.forEach(cha, i => {
							SearchPrograms__extends(chcoopy, cha);
							/*
       if (Config.bDebug)
       {
       	console.log("chcoopy");
       	console.log(chcoopy);
       	console.log("chcoopy.channelprograms");
       	console.log(chcoopy.channelprograms);
       }
       */
							index = chcoopy.title.toUpperCase().indexOf(uppersearchText);
							if (index != -1) {
								chcoopy.titleindex = index;
								founded = true;
								if (utils_Config.bDebug) {
									console.log("founded channel title chcoopy");
									console.log(chcoopy);
								}
							}
							foundedPrograms = [];

							var prcopy = null;
							Array.from(chcoopy.channelprograms).forEach(function (pr) {
								// cha.channelprograms.forEach(pr, i => {
								progfounded = false;
								prcopy = null;
								index = pr.title.toString().toUpperCase().indexOf(uppersearchText);
								if (index != -1) {
									if (prcopy == null) {
										prcopy = {};
										SearchPrograms__extends(prcopy, pr);
									}
									prcopy.titleindex = index;
									/*
         prcopy.title = pr.title;
         prcopy.description = pr.description;
         prcopy.channel  = pr.channel;
         prcopy.id  = pr.id;
         prcopy.movie  = pr.movie;
         prcopy.sport  = pr.sport;
         prcopy.timestamp  = pr.timestamp;	
         */

									founded = true;
									progfounded = true;
									if (utils_Config.bDebug) {
										console.log("founded program title");
										console.log(prcopy);
									}
								}
								index = pr.description.toString().toUpperCase().indexOf(uppersearchText);
								if (index != -1) {
									if (prcopy == null) {
										prcopy = {};
										SearchPrograms__extends(prcopy, pr);
									}
									prcopy.descriptionindex = index;
									founded = true;
									/*
         prcopy.title = pr.title;
         prcopy.description = pr.description;
         prcopy.channel  = pr.channel;
         prcopy.id  = pr.id;
         prcopy.movie  = pr.movie;
         prcopy.sport  = pr.sport;
         prcopy.timestamp  = pr.timestamp;
         */

									progfounded = true;
									if (utils_Config.bDebug) {
										console.log("founded program description");
										console.log(prcopy);
									}
								}
								if (progfounded) foundedPrograms.push(prcopy);
							});

							if (founded) {
								if (foundedPrograms != null && foundedPrograms.length != 0) chcoopy.channelprograms = foundedPrograms;else chcoopy.channelprograms = cha.channelprograms;
								foundedChannels.push(chcoopy);
							}
						});

						if (foundedChannels == null || foundedChannels.length == 0) {
							// if (change == undefined)
							// this.setState({ bSearchButtonClicked: false, 
							//	channels: null});
							_this.channels = null;
						} else {
							if (utils_Config.bDebug) {
								console.log("foundedChannels");
								console.log(_this.foundedChannels);
								console.log("foundedChannels.length");
								console.log(foundedChannels.length);
							}
							/*
       this.setState({ bSearchButtonClicked: true, 
       	channels: foundedChannels});
       	*/
							_this.channels = foundedChannels;
							return foundedChannels;
						}
					}
				}
			} else {
				//			this.setState({ bSearchButtonClicked: false,
				//				channels: this.state.programtypeitems });
				;
			}
			return _this.channels;
		};

		if (utils_Config.bDebug) {
			console.log("SearchPrograms.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;
		var today = new Date(Date.now());
		_this.state = {
			errmsg: null,
			programtypeitems: [],
			channeltypeitems: [],
			textSearch: null,
			bDisplayAllDescriptions: false,
			disabled: props.disabled
		};
		return _this;
	}

	SearchPrograms.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		if (utils_Config.bDebug) console.log("componentDidMount SearchPrograms");

		var keys = [];
		keys.push('programtypeitems');
		console.log("keys");
		console.log(keys);
		this.unsubscribelistener = this.store.subscribeAttributeNameListener(keys, function (state) {
			return _this2.listenerStoreChange2(state);
		});
		this.props.setRemoverFunction(this.removelisteners, 'SearchPrograms');
		this._mounted = true;
	};

	SearchPrograms.prototype.componentWillUnmounted = function componentWillUnmounted() {
		this.removelisteners();
	};

	SearchPrograms.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (utils_Config.bDebug) {
			console.log("SearchPrograms componentWillReceiveProps nextProps");
			console.log(nextProps);
		}
		if (!this._mounted) return;
		if (nextProps.disabled != undefined && nextProps.disabled != null && nextProps.disabled != this.props.disabled) this.setState({ disabled: nextProps.disabled
		});
	};

	SearchPrograms.prototype.render = function render(props, state) {
		if (utils_Config.bDebug) {
			console.log("state");
			console.log(state);
		}

		return Object(preact_min["h"])(
			preact_min["Fragment"],
			null,
			Object(preact_min["h"])(
				FormField_default.a,
				null,
				Object(preact_min["h"])(TextField_default.a, { outlined: true, label: 'Etsi teksti\xE4 ohjelmista',
					disabled: state.disabled,
					onKeyUp: this.textFieldSearchChanged,
					style: ' width: 90%;' })
			),
			SearchPrograms__ref,
			Object(preact_min["h"])(
				FormField_default.a,
				null,
				Object(preact_min["h"])(
					Button_default.a,
					{ ripple: true, raised: true,
						disabled: state.disabled,
						onClick: this.searchTextFromChannelsClicked },
					'Hae'
				)
			)
		);
	};

	return SearchPrograms;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/amppari/Amppari.js
var Amppari__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Amppari__class, Amppari__temp, Amppari__initialiseProps;



function Amppari__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Amppari__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Amppari__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// import fetchJsonp from 'fetch-jsonp';
// import moment from 'moment';


















String.prototype.indexOfRegex = function (regex, fromIndex) {
	var str = fromIndex ? this.substring(fromIndex) : this;
	var match = str.match(regex);
	return match ? str.indexOf(match[0]) + fromIndex : -1;
};

String.prototype.lastIndexOfRegex = function (regex, fromIndex) {
	var str = fromIndex ? this.substring(0, fromIndex) : this;
	var match = str.match(regex);
	return match ? str.lastIndexOf(match[match.length - 1]) : -1;
};

var filtercalled = {
	PROGRAMTYPE: "programtype",
	CHANNELTYPE: "channeltype",
	SEARCHCHANE: 'searchchange',
	MAKESEARCH: "makesearch"

	//let season = seasons.SPRING
	//if (!season) {
	//	throw new Error("Season is not defined")
	//}

};
var Amppari__ref = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref2 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref3 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref4 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref5 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref6 = Object(preact_min["h"])('br', null);

var Amppari__ref7 = Object(preact_min["h"])(
	'div',
	null,
	'Hae tv-ohjelmatiedot alle taulukkoon yll\xE4 olevan p\xE4iv\xE4n ajankohta linkin ja alla p\xE4iv\xE4m\xE4\xE4r\xE4n mukaan:'
);

var Amppari__ref8 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref9 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref10 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref11 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref12 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref13 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref14 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref15 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref16 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref17 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref18 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref19 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref20 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var Amppari__ref21 = Object(preact_min["h"])(
	'space',
	null,
	' '
);

var _ref22 = Object(preact_min["h"])('br', null);

var _ref23 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var _ref24 = Object(preact_min["h"])(
	'label',
	{ 'for': 'checkshowdescribtions', id: 'checkshowdescribtions-label' },
	'N\xE4yt\xE4 selitykset'
);

var _ref25 = Object(preact_min["h"])(
	'label',
	{ 'for': 'checkshowonechannel', id: 'checkshowonechannel-label' },
	'N\xE4yt\xE4 yksi kanava'
);

var _ref26 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var _ref27 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var _ref28 = Object(preact_min["h"])(
	'label',
	{ 'for': 'input_number_columss' },
	'N\xE4ytett\xE4vien kanavien lkm: '
);

var _ref29 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var _ref30 = Object(preact_min["h"])(
	'space',
	null,
	'          '
);

var _ref31 = Object(preact_min["h"])(
	'label',
	{ 'for': 'checkTableBorders', id: 'checkshowdescribtions-label' },
	'N\xE4yt\xE4 taulun raamit'
);

var _ref32 = Object(preact_min["h"])('br', null);

var _ref33 = Object(preact_min["h"])('br', null);

var _ref34 = Object(preact_min["h"])(
	'h3',
	null,
	'Ohjelmataulukko'
);

var _ref35 = Object(preact_min["h"])('br', null);

var Amppari_Amppari = (Amppari__temp = Amppari__class = function (_Component) {
	Amppari__inherits(Amppari, _Component);

	function Amppari(props) {
		Amppari__classCallCheck(this, Amppari);

		var _this = Amppari__possibleConstructorReturn(this, _Component.call(this, props));

		Amppari__initialiseProps.call(_this);

		if (utils_Config.bDebug) {
			console.log("Amppari.js");
			console.log("props");
			console.log(props);
		}

		_this.store = props.store;
		var today = new Date(Date.now());
		_this.state = {
			errmsg: null,
			html: null,
			selecteddate: today,
			selectedaika: 'paiva',
			selectedsuodattimet: 'kaikki',
			selectedtyyppi: 'kaikki',
			selectedTyyppiinindex: 0,
			selectedsuodatinindex: 0,
			searchsanat: '',
			fetcheditems: [],
			channeltypeitems: [],
			programtypeitems: [],
			channels: [],
			selectedpage: 1,
			today: new Date(Date.now),

			currentchannel: null,
			bDisplayAllDescriptions: false,
			showChannelsAtSameTime: _this.const_showChannelsAtSameTime,
			selectedchannelindex: 0,
			bCheckShowChannelsAtSameTime: false,
			currentChannelSetIndex: 0,
			bUnderFetch: false,
			bAllChannelsLoaded: false,
			textSearch: null,
			bSearchButtonClicked: false,
			bShowTableBorder: false

			// https://telkussa.fi/sivu/1/20210215
		};_this.fetch_url_telkku = '/telkkussa/';
		// tyyppi=kaikki,urheilu,elokuvat
		// aika=paiva,tulevat,nyt,ilta,yo
		// pvm=2021-02-22
		// suodatus=ilmaiset,maksulliset,kaikki
		// https://www.ampparit.com/tv?aika=paiva&pvm=2021-02-22&sanat=&suodatus=ilmaiset&tyyppi=elokuvat
		_this.fetch_url_ampparissa = utils_Config.http_curlserver + '/ampparissa/tv';
		_this.AmppariException = _this.AmppariException.bind(_this);
		location.host;
		_this.showAllDescrRef = Object(preact_min["createRef"])();
		_this.showOneChannelRef = Object(preact_min["createRef"])();
		_this.selectChannelRef = Object(preact_min["createRef"])();
		_this.showTableBordersRef = Object(preact_min["createRef"])();
		_this.channelTypeRef = Object(preact_min["createRef"])();
		_this.searchProgramRef = Object(preact_min["createRef"])();
		_this.programTypeRef = Object(preact_min["createRef"])();

		return _this;
	}

	Amppari.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		if (utils_Config.bDebug) console.log("componentDidMount 1");
		this.abortController = new abort_controller_default.a(); // 1        
		this.abortSignal = this.abortController.signal; // 2	
		//	this.unsubscribelistener = this.store.subscribe( state => this.listenerStoreChange2(state) ); 
		var keys = [];
		keys.push('channels');
		console.log("keys");
		console.log(keys);
		this.unsubscribelistener = this.store.subscribeAttributeNameListener(keys, function (state) {
			return _this2.listenerStoreChange2(state);
		});
		// this.openHtmlTelkkuPage(this.state.selectedpage);
		this._mounted = true;
	};

	Amppari.prototype.componentWillUnmount = function componentWillUnmount() {
		this.removelisteners();
		if (this.abortSignal && !this.abortSignal.aborted) this.abortController.abort();
		this.setState({});
		this.store.setStateNoneCallListeners({ fetchitems: [], channeltypeitems: [],
			programtypeitems: [], categories: [], schedules: []
		});
		this._mounted = false;
	};

	Amppari.prototype.componentWillUnmounted = function componentWillUnmounted() {
		if (this.unsubscribelistener != null) this.unsubscribelistener();
	};

	Amppari.prototype.AmppariException = function AmppariException(message) {
		this.message = message;
		this.name = 'AmppariException';
	};

	Amppari.prototype.getNextJsonArrayAfterLabel = function getNextJsonArrayAfterLabel(json, labelitem) {
		var ret = null;
		/*
  if(Config.bDebug) 
  {
  	console.log("getNextJsonArrayAfterLabel"); 
  	console.log("json"); 
  	console.log(json); 
  	console.log("labelitem"); 
  	console.log(labelitem); 
  }
  */
		if (labelitem == undefined || labelitem == null) return null;
		if (json == undefined || json == null || json.length == 0) return null;
		var iCount = 0;
		var found = false,
		    founded = false;
		var foundedItem = null;

		var i = 0;
		var item = null;
		var max = json.length;

		for (i = 0; i < max; i++)
		//Array.from(json).forEach(item =>
		{
			item = json[i];
			iCount = iCount + 1;
			if (!founded) {
				if (!found && typeof item === 'string' && item.toString() === labelitem) {
					found = true;
					/*
     if (Config.bDebug)
     {			
     	console.log("iCount " +iCount);
     	console.log("found = true");
     }
     */
				} else {
					if (found) {
						/*
      if (Config.bDebug)
      {				
      	console.log("iCount " +iCount);
      	console.log("return item");
      	console.log(item);
      }
      */
						foundedItem = item;
						founded = true;
						return item;
					}
				}
			}
		}
		// });

		if (foundedItem == null) console.log("return null");

		return foundedItem;
	};

	/*
 openHtmlAmppari = (dayparameter) => {
 	// aika=paiva,tulevat,nyt,ilta,yo
 	// pvm=2021-02-22
 	// suodatus=ilmaiset,maksulliset,kaikki
 	// https://www.ampparit.com/tv?aika=paiva&pvm=2021-02-22&sanat=&suodatus=ilmaiset&tyyppi=elokuvat
 
        let blankurl = this.getUrlQueryForAmppari();
        window.open(blankurl, '_blank', "Ampparissa", "location=no");
 }
 */

	/*
 getIsMaksullinenChannel = (title) =>
 {
 	let ret = false;
 	if (title == undefined || title == null || title.trim().length == 0)
 		return false;
 	if (!ilmaisetchannelnames.includes(title))
 		return true;
 	return false;
 }
 
 getIsIlmainenChannel = (title) =>
 {
 	let ret = false;
 	if (title == undefined || title == null || title.trim().length == 0)
 		return false;
 	if (ilmaisetchannelnames.includes(title))
 		return true;
 	return false;
 }
 */

	Amppari.prototype.render = function render(props, state) {
		var _this3 = this;

		if (utils_Config.bDebug) {
			console.log("state");
			console.log(state);
		}

		var tableBorderStyle = '';
		if (state.bShowTableBorder) tableBorderStyle = ' border: 1px solid black;';
		// suodatus=ilmaiset,maksulliset,kaikki
		var selectchanneltypes = this.arr_selectchanneltypes.map(function (child, i) {
			return Object(preact_min["h"])(
				Select_default.a.Item,
				{ id: i },
				child
			);
		});

		// tyyppi=kaikki,urheilu,elokuvat
		var selecttyyppi_items = this.arr_selecttyyppi_items.map(function (child, i) {
			return Object(preact_min["h"])(
				Select_default.a.Item,
				{ id: i },
				child
			);
		});

		var headers = null;
		var channels = null;
		/*
  if (state.fetcheditems != null)
  {
  	headers = this.getTableHeaders();
  	channels = this.getTableRows();	
  }
  */

		var selectchannels = null;
		var tableheaders = null;
		var tabletds = null;
		if (state.channels !== null) {
			// selected={child.title.fi===state.selectedcategory.title.fi} 
			selectchannels = state.channels.map(function (child, i) {
				return Object(preact_min["h"])(
					Select_default.a.Item,
					{ id: i
					},
					child.title
				);
			});
			var tableheaders_and_rows = this.getTableHeadersAndTableRowsAfterChannels();
			headers = tableheaders_and_rows.headers;
			if (headers != null) tableheaders = headers.map(function (child, i) {
				return Object(preact_min["h"])(
					'th',
					{ style: 'vertical-align: top; padding-left: 5px; padding-right: 5px; ' + tableBorderStyle },
					child
				);
			});
			channels = tableheaders_and_rows.channels;
			if (channels != null) tabletds = channels.map(function (child, i) {
				return Object(preact_min["h"])(
					'td',
					{ style: 'vertical-align: top; padding-left: 5px; padding-right: 5px;' + tableBorderStyle },
					child
				);
			});
		}

		if (channels != null) {
			console.log("tableheaders");
			console.log(tableheaders);
			if (tableheaders != null) console.log(tableheaders.length);
			console.log("tabletds");
			console.log(tabletds);
			if (tabletds != null) console.log(tabletds.length);
		}
		/*
  if (state.channels != null)
  {
  	headers = this.state.channels.map((jsonchannel, i) => {
  		return <th>{jsonchannel.title}</th>
  	});
  	channels = this.state.channels.map((jsonchannel, i) => {
  		return <AmppariChannel id={i} data={jsonchannel}
  			displayAllDescriptions={this.state.bDisplayAllDescriptions} />;
  	});
  }
  */
		return Object(preact_min["h"])(
			'div',
			{ 'class': components_amppari_style_default.a.cardHeader },
			Object(preact_min["h"])(
				'h1',
				null,
				'Amppari.fi ',
				this.getFetchedDate()
			),
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(
					'div',
					{ 'class': components_amppari_style_default.a.cardHeader },
					'Valitse seuraavista:'
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': components_amppari_style_default.a.cardHeader },
					Object(preact_min["h"])(
						'a',
						{ id: 'aikalink_nyt', href: '.', onClick: this.onClickSelectedAika },
						'Nyt ja seuraavaksi'
					),
					Amppari__ref,
					Object(preact_min["h"])(
						'a',
						{ id: 'aikalink_tulevat', href: '.', onClick: this.onClickSelectedAika },
						'Tulevat'
					),
					Amppari__ref2,
					Object(preact_min["h"])(
						'a',
						{ id: 'aikalink_paiva', href: '.', onClick: this.onClickSelectedAika },
						'Koko p\xE4iv\xE4'
					),
					Amppari__ref3,
					Object(preact_min["h"])(
						'a',
						{ id: 'aikalink_ilta', href: '.', onClick: this.onClickSelectedAika },
						'Ilta (17-22)'
					),
					Amppari__ref4,
					Object(preact_min["h"])(
						'a',
						{ id: 'aikalink_yo', href: '.', onClick: this.onClickSelectedAika },
						'Y\xF6 (22-01)'
					),
					Amppari__ref5,
					Amppari__ref6
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': components_amppari_style_default.a.cardHeader },
					Amppari__ref7,
					Object(preact_min["h"])(
						'div',
						{ 'class': components_amppari_style_default.a.cardHeader },
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(0),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(0)
						),
						Amppari__ref8,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(1),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(1)
						),
						Amppari__ref9,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(2),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(2)
						),
						Amppari__ref10,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(3),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(3)
						),
						Amppari__ref11,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(4),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(4)
						),
						Amppari__ref12,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(5),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(5)
						),
						Amppari__ref13,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(6),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(6)
						),
						Amppari__ref14,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(7),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(7)
						),
						Amppari__ref15,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(8),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(8)
						),
						Amppari__ref16,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(9),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(9)
						),
						Amppari__ref17,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(10),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(10)
						),
						Amppari__ref18,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(11),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(11)
						),
						Amppari__ref19,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(12),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(12)
						),
						Amppari__ref20,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(13),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(13)
						),
						Amppari__ref21,
						Object(preact_min["h"])(
							'a',
							{ href: '.', id: 'dayname_' + this.getPlus1DayId(14),
								onClick: this.onClickSetDateString },
							this.getPlus1Day(14)
						),
						_ref22
					)
				)
			),
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(
					'div',
					null,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true, disabled: state.channels == null || state.showChannelsAtSameTime == 1 && state.bCheckShowChannelsAtSameTime || state.showChannelsAtSameTime >= state.channels.length,
								onClick: this.prevChannelSetClicked },
							'<'
						)
					),
					_ref23,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Button_default.a,
							{ ripple: true, raised: true,
								disabled: state.channels == null || state.showChannelsAtSameTime == 1 && state.bCheckShowChannelsAtSameTime || state.showChannelsAtSameTime >= state.channels.length,
								onClick: this.nextChannelSetClicked },
							'>'
						)
					),
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(Checkbox_default.a, { id: 'checkshowdescribtions',
							onChange: this.showAllDescriptions,
							ref: this.showAllDescrRef }),
						_ref24
					),
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(Checkbox_default.a, { id: 'checkshowonechannel', onChange: this.showOneChannel,
							ref: this.showOneChannelRef }),
						_ref25
					),
					_ref26,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(
							Select_default.a,
							{
								selectedIndex: this.state.selectedchannelindex,
								disabled: state.showChannelsAtSameTime !== 1,
								preselected: true, outlined: true,
								ref: this.selectChannelRef,
								onChange: function onChange(e) {
									_this3.setState({
										selectedchannelindex: e.target.selectedIndex,
										bSearchButtonClicked: false
									});
								} },
							selectchannels
						)
					),
					_ref27,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						_ref28,
						Object(preact_min["h"])('input', { id: 'input_number_columss',
							name: 'input_number_columns',
							disabled: this.state.bCheckShowChannelsAtSameTime,
							type: 'number', min: '1', max: '10',
							value: this.state.showChannelsAtSameTime === -1 ? '' : this.state.showChannelsAtSameTime,
							onKeyUp: this.textFieldChannelsAtSameTimeChanged
						})
					),
					_ref29,
					Object(preact_min["h"])(SearchPrograms_SearchPrograms, { disabled: state.fetcheditems == null || state.fetcheditems.length == 0,
						setDisplayAllDescriptionsTrue: this.setDisplayAllDescriptionsTrue,
						store: this.store, setRemoverFunction: this.setRemoverFunction,
						ref: this.searchProgramRef }),
					_ref30,
					Object(preact_min["h"])(
						FormField_default.a,
						null,
						Object(preact_min["h"])(Checkbox_default.a, { id: 'checkTableBorders',
							onChange: this.showTableBorders,
							ref: this.showTableBordersRef }),
						_ref31
					),
					Object(preact_min["h"])(ProgramTypes_ProgramTypes, { disabled: state.fetcheditems == null || state.fetcheditems.length == 0, store: this.store,
						ref: this.programTypeRef, setRemoverFunction: this.setRemoverFunction }),
					Object(preact_min["h"])(ChannelTypes_ChannelTypes, { disabled: state.fetcheditems == null || state.fetcheditems.length == 0, store: this.store,
						ref: this.channelTypeRef, setRemoverFunction: this.setRemoverFunction })
				),
				_ref32,
				Object(preact_min["h"])(
					'div',
					null,
					_ref33,
					Object(preact_min["h"])(
						'div',
						{ 'class': ' mdc-typography--caption' },
						_ref34,
						state.bSearchButtonClicked && state.textSearch != null ? ' (haun tulokset)' : ''
					),
					_ref35,
					Object(preact_min["h"])(
						'table',
						{ style: "width:100%; " + tableBorderStyle },
						Object(preact_min["h"])(
							'tbody',
							null,
							Object(preact_min["h"])(
								'tr',
								null,
								tableheaders
							),
							Object(preact_min["h"])(
								'tr',
								null,
								tabletds
							)
						)
					)
				)
			)
		);
	};

	return Amppari;
}(preact_min["Component"]), Amppari__initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.store = null;
	this.unsubscribelistener = null;
	this.fetch_url_telkku = null;
	this.fetch_url_ampparissa = null;
	this.arr_selecttyyppi_items = ['kaikki', 'elokuvat', 'urheilu'];
	this.arr_selectchanneltypes = ['kaikki', 'ilmaiset', 'maksulliset'];
	this.ilmaisetchannelnames = ['Yle TV1', 'Yle TV2', 'MTV3', 'Nelonen', 'Yle Teema Fem', 'Sub', 'TV Viisi', 'Liv', 'Jim', 'Kutonen', 'TLC', 'Fox', 'Ava', 'Hero', 'alfatv', 'frii', 'National Geoprafic'];
	this.search_start_program = '["^2",';
	this.search_end_program = /\]\](,*)/gi;
	this.showAllDescrRef = null;
	this.showOneChannelRef = null;
	this.selectChannelRef = null;
	this.const_showChannelsAtSameTime = 10;
	this.showTableBordersRef = null;
	this.channelTypeRef = null;
	this.searchProgramRef = null;
	this.programTypeRef = null;
	this.fetcheditems = [];
	this.channeltypeitems = [];
	this.programtypeitems = [];
	this.channels = [];
	this.textSearch = null;
	this._mounted = false;
	this.removerfunctionProgramType = null;
	this.removerfunctionSearchProgram = null;
	this.removerfunctionChannelType = null;
	this.bUnderFetch = false;

	this.removelisteners = function () {
		if (_this4.unsubscribelistener != null) {
			_this4.unsubscribelistener();
			_this4.unsubscribelistener = null;
		}
		if (_this4.removerfunctionProgramType) _this4.removerfunctionProgramType();
		if (_this4.removerfunctionSearchProgram) _this4.removerfunctionSearchProgram();
		if (_this4.removerfunctionChannelType) _this4.removerfunctionChannelType();
	};

	this.setRemoverFunction = function (func, fname) {
		if (fname === 'ProgramTypes') _this4.removerfunctionProgramType = func;else if (fname === 'SearchPrograms') _this4.removerfunctionSearchProgram = func;else if (fname === 'ChannelTypes') _this4.removerfunctionChannelType = func;
	};

	this.listenerStoreChange2 = function (storestate) {
		console.log("Amppari listenerStoreChange2");
		console.log(storestate);

		if (storestate === undefined || storestate === null) {
			console.log("Amppari listenerStoreChange storestate");
			return;
		}

		var channels = storestate.channels;
		var bSearchButtonClicked = storestate.bSearchButtonClicked;
		var bDisplayAllDescriptions = storestate.bDisplayAllDescriptions;
		var textSearch = storestate.textSearch;
		_this4.channels = channels;
		_this4.textSearch = textSearch;
		_this4.setState({ channels: channels, textSearch: textSearch,
			bSearchButtonClicked: bSearchButtonClicked, bDisplayAllDescriptions: bDisplayAllDescriptions
		});

		if (utils_Config.bDebug) {
			console.log("-- 3 bSearchButtonClicked");
			console.log(bSearchButtonClicked);
			console.log("-- 3 bDisplayAllDescriptions");
			console.log(bDisplayAllDescriptions);
			console.log("-- 3 textSearch");
			console.log(textSearch);
			console.log("-- 3 channels");
			console.log(channels);
			console.log("-- 3");
			console.log(_this4.state);
		}
	};

	this.getSelectedDateParam = function () {
		var selday = _this4.state.selecteddate;
		var month = "" + (selday.getMonth() + 1);
		if (month.trim().length === 1) month = "0" + month;
		var day = "" + selday.getDate();
		if (day.trim().length === 1) day = "0" + day;
		return "" + selday.getFullYear() + month + day;
	};

	this.getChannelsAndPrograms = function (tvchannels) {
		var ret = null;
		if (tvchannels == undefined || tvchannels == null || tvchannels.length == 0) return null;
		var jsonch = void 0;
		var channels = [];

		Array.from(tvchannels).forEach(function (item) {
			jsonch = _this4.getJsonChannel(item);
			if (jsonch !== null) channels.push(jsonch);
		});
		return channels;
	};

	this.getArrayIntoChannel = function (channel) {
		var ret = null;
		if (utils_Config.bDebug) {
			console.log("getArrayIntoChannel");
			console.log(channel);
		}
		if (channel == null) return null;
		ret = {};
		var name = _this4.getNextJsonArrayAfterLabel(channel, 'name');
		var slug = _this4.getNextJsonArrayAfterLabel(channel, 'slug');
		var pay = _this4.getNextJsonArrayAfterLabel(channel, 'pay');
		ret.title = name;
		ret.slug = slug;
		ret.pay = pay;
		return ret;
	};

	this.getJsonProgram = function (pr) {
		var ret = null;
		if (utils_Config.bDebug) {
			console.log("getJsonProgram");
			console.log(pr);
		}
		if (pr == null) return null;
		var pr2 = pr[1]; // this.getNextJsonArrayAfterLabel(pr, '^2');
		ret = {};
		var id = _this4.getNextJsonArrayAfterLabel(pr2, 'id');
		var timestamp = _this4.getNextJsonArrayAfterLabel(pr2, 'timestamp');
		var title = _this4.getNextJsonArrayAfterLabel(pr2, 'title');
		var description = _this4.getNextJsonArrayAfterLabel(pr2, 'description');
		var channel = _this4.getNextJsonArrayAfterLabel(pr2, 'channel');
		var movie = _this4.getNextJsonArrayAfterLabel(pr2, 'movie');
		var sport = _this4.getNextJsonArrayAfterLabel(pr2, 'sport');
		ret.id = id;
		ret.title = title;
		ret.timestamp = timestamp;
		ret.description = description;
		ret.channel = channel;
		ret.movie = movie;
		ret.sport = sport;
		return ret;
	};

	this.getJsonChannel = function (ch) {
		// , tvchannels3, tvprograms, 
		var ch2 = ch[1]; // this.getNextJsonArrayAfterLabel(ch, '^2');
		var tvchannel = ch2[1]; // this.getNextJsonArrayAfterLabel(ch2, 'channel');
		if (utils_Config.bDebug) {
			console.log("tvchannel");
			console.log(tvchannel);
		}
		var channel = tvchannel[1]; // this.getNextJsonArrayAfterLabel(tvchannel, '^2');
		var tvprograms = _this4.getNextJsonArrayAfterLabel(ch2, 'programs');
		var programs = tvprograms[1]; // this.getNextJsonArrayAfterLabel(tvprograms, '^F');
		if (utils_Config.bDebug) {
			console.log("programs");
			console.log(programs);
		}

		var jsonprograms = [];
		var jsonpr = null;
		var jsonchannel = _this4.getArrayIntoChannel(channel);
		if (jsonchannel == null) return null;

		Array.from(programs).forEach(function (pr) {
			jsonpr = _this4.getJsonProgram(pr);
			if (jsonpr !== null) jsonprograms.push(jsonpr);
		});

		jsonchannel.channels = jsonprograms;
		return jsonchannel;
	};

	this.getChannelsAndProgramsFromJsonArray = function (json) {

		var tv = null,
		    programming = null,
		    f = null,
		    channel = null,
		    programs = null;
		var i = void 0,
		    j = void 0,
		    max = json.length,
		    maxj = void 0,
		    data = null;
		var searchtext = 'tv',
		    foundSearchText = false;

		for (i = 0; i < max; i++) {
			if (!foundSearchText && typeof json[i] === 'string' && json[i] === searchtext) foundSearchText = true;else if (foundSearchText) {
				if (searchtext === 'tv') {
					tv = json[i][1];
					searchtext = 'programming';
					foundSearchText = false;
					programming = tv[1][1];
					maxj = programming.length;
					var channels = [];
					var jsonchannel = {};
					var programchannels = [];

					for (j = 0; j < maxj; j++) {
						/*
      if(Config.bDebug) 
      {
      	console.log("programming " +j); 
      	console.log(programming[j]	); 
      }
      */
						channel = programming[j][1][1][1];
						programs = programming[j][1][3][1];
						/*
      if(Config.bDebug) 
      {
      	console.log("channel"); 
      	console.log(channel); 
      	console.log("programs"); 
      	console.log(programs); 
      }
      */
						jsonchannel = {};
						jsonchannel.id = channel[1];
						jsonchannel.title = channel[3];
						jsonchannel.slug = channel[5];
						jsonchannel.pay = channel[7];
						var k = 0,
						    maxk = programs.length,
						    jsonprogram = void 0,
						    progdata = void 0,
						    jsonprograms = [];
						for (k = 0; k < maxk; k++) {
							jsonprogram = {};
							progdata = programs[k][1];
							// sometimes data values are in different order!:
							jsonprogram.id = _this4.getNextJsonArrayAfterLabel(progdata, 'id');
							jsonprogram.timestamp = _this4.getNextJsonArrayAfterLabel(progdata, 'timestamp');
							jsonprogram.title = _this4.getNextJsonArrayAfterLabel(progdata, 'title');
							jsonprogram.description = _this4.getNextJsonArrayAfterLabel(progdata, 'description');
							jsonprogram.channel = _this4.getNextJsonArrayAfterLabel(progdata, 'channel');
							jsonprogram.movie = _this4.getNextJsonArrayAfterLabel(progdata, 'movie');
							jsonprogram.sport = _this4.getNextJsonArrayAfterLabel(progdata, 'sport');
							jsonprograms.push(jsonprogram);
						}
						jsonchannel.channelprograms = jsonprograms;
						/*
      if(Config.bDebug) 
      {
      	console.log("jsonchannel"); 
      	console.log(jsonchannel); 
      }
      */
						programchannels.push(jsonchannel);
					}
					return programchannels;
				}
			}
		}

		return null;
		/*
  let tvchannels1 = this.getNextJsonArrayAfterLabel(json2, 'tv');
  let tvchannels2 = tvchannels1[1];
  if(Config.bDebug) 
  {
  	console.log("tvchannels2"); 
  	console.log(tvchannels2); 
  }
  
  let tvchannels3 = this.getNextJsonArrayAfterLabel(tvchannels2, 'programming');
  let tvchannels = this.getNextJsonArrayAfterLabel(tvchannels3, '^F');
  let data = this.getChannelsAndPrograms(tvchannels);
  return data;
  */
	};

	this.fetchHtmlAmppariChannels = function (dayparameter) {
		return new Promise(function ($return, $error) {
			var channelurl, fetched;

			if (_this4.state.bUnderFetch) return $return();
			channelurl = _this4.getUrlQueryForAmppari(dayparameter);
			if (utils_Config.bDebug) {
				console.log("fetchHtmlAmppariChannels 1");
				console.log(channelurl);
			}

			_this4.setState({ bUnderFetch: true, channels: [], selectedchannelindex: 0,
				currentChannelSetIndex: 0 });

			_this4.bUnderFetch = true;
			fetched = null;
			return Promise.resolve(fetch(channelurl, {
				method: 'GET',
				headers: { "Content-Type": "text/html; charset=UTF-8",
					'Accept': '*/*' // application/rss+xml
				},
				mode: 'cors',
				signal: _this4.abortSignal
			}).then(_this4.handleErrors).then(function (response) {
				return response.text();
			})
			//		.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
			.then(function (data) {
				if (utils_Config.bDebug) {
					console.log("fetchHtmlAmppariChannels 1.5");
					//console.log("data");
					// console.log(data);
				}
				var INITIAL_STATE = 'window.__INITIAL_STATE__=';
				var index = data.indexOf(INITIAL_STATE);
				if (utils_Config.bDebug) {
					console.log("index");
					console.log(index);
				}
				if (index > -1) {
					if (utils_Config.bDebug) console.log("index > -1");
					var indexEnd = data.indexOf('</script>', index);
					if (utils_Config.bDebug) {
						console.log("indexEnd");
						console.log(indexEnd);
					}
					if (indexEnd > -1) {
						if (utils_Config.bDebug) console.log("indexEnd > -1");
						data = data.substring(index + INITIAL_STATE.length, indexEnd);
						/*
      if (Config.bDebug)
      {				
      	console.log("data1");
      	console.log(data);
      }
      */
						var json = JSON.parse(data);
						/*
      if (Config.bDebug)
      {				
      	console.log("json");
      	console.log(json);
      }
      */
						var strstate = json.state;
						/*
      if (Config.bDebug)
      {				
      	console.log("strstate");
      	console.log(strstate);
      }
      */
						var json2 = JSON.parse(strstate);
						if (utils_Config.bDebug) {
							console.log("json2");
							console.log(json2);
						}
						data = _this4.getChannelsAndProgramsFromJsonArray(json2);
						if (utils_Config.bDebug) {
							console.log("-- 1");
							// console.log(data);
						}
						_this4.fetcheditems = data;
						_this4.channeltypeitems = data;
						// this.programtypeitems = data;					
						// this.channels = data;
						_this4.setState({ fetcheditems: _this4.fetcheditems,
							channels: [],
							bUnderFetch: false, selectedsuodattimet: 'kaikki',
							channeltypeitems: null,
							programtypeitems: null,
							selectedtyyppi: 'kaikki', selectedTyyppiinindex: 0,
							selectedsuodatinindex: 0, bSearchButtonClicked: false,
							selectedchannelindex: 0 });
						_this4.store.setState({ fetchitems: data });
						// this.filterWhenUIControlsHasBeenChanged(filtercalled.CHANNELTYPE);
						// this.channels = data;
						// this.setState({ channels: data, });
						/*
      this.setState({ fetcheditems: data, channels: null,
      bUnderFetch: false, selectedsuodattimet: 'kaikki',
      selectedtyyppi: 'kaikki', selectedTyyppiinindex: 0,
      selectedsuodatinindex: 0 });
      console.log("-- 2");
      //this.filterWhenUIControlsHasBeenChanged(filtercalled.CHANNELTYPE);
      */
						_this4.setState({ /* fetcheditems: this.fetcheditems, */channels: _this4.channels,
							bUnderFetch: false, selectedsuodattimet: 'kaikki',
							selectedtyyppi: 'kaikki', selectedTyyppiinindex: 0,
							selectedsuodatinindex: 0, bSearchButtonClicked: false,
							selectedchannelindex: 0 });
						_this4.bUnderFetch = false;
					}
				}

				fetched = data; // this.getJsonDataFromTelkkuRssXml(data);
			}).catch(function (error) {
				console.error("error");
				console.error(error);
				_this4.setState({ errmsg: error.toString(), bUnderFetch: false });
				_this4.bUnderFetch = false;
				throw new _this4.AmppariException(error.toString());
			})).then(function ($await_1) {
				try {
					return $return(fetched);
				} catch ($boundEx) {
					return $error($boundEx);
				}
			}, $error);
		});
	};

	this.getChannelsAndSortProgramsAfterChannels = function (data, channels) {
		/*
  		const map1 = new Map([
  ['foo', 'bar'],
  ['baz', 42]
  ]);
    const obj = Object.fromEntries(map1);
  // { foo: 'bar', baz: 42 }
  
  For converting object back to map:
  
  const map2 = new Map(Object.entries(obj));
  // Map(2) { 'foo' => 'bar', 'baz' => 42 }
  */

		var ret = null;
		var map = new Map();
		var channel = {};

		if (utils_Config.bDebug) console.log("chcoopy.channelprograms");
		Array.from(data).forEach(function (pr) {
			channel = map.get(pr.channel);
			if (channel == undefined || channel == null) {
				console.log("channel == undefined");
				channel = {};
				Amppari__extends(channel, {});
				channel.title = pr.channel;
				console.log("new channel");
				console.log(channel.title);

				map.set(channel.title, channel);
			}
			if (channel !== null) {
				if (channel.channelprograms == undefined) channel.channelprograms = [];
				channel.channelprograms.push(pr);
				map.set(channel.title, channel);
			}
		});

		if (map.size > 0) return Object.fromEntries(map);;
		return null;
	};

	this.getJsonChannels = function (strprorams) {
		var ret = null;
		if (strprorams === null || strprorams === undefined) return null;
		var indStart = 0;
		var searchResultChannel = _this4.getJsonLabel('channel', strprograms, indStart);
		var channeldata = null;
		var firstIndex = -1;
		var arrprogs = null;
		var search_end_program = ']]';
		var firstIndexEnd = -1;
		var strprogram = null;
		var jsonprog = null;
		var iCount = 1;
		var channels = [];
		var searchSecondChannel = '\"channel\"';
		var indSecondChannel = -1;

		while (searchResultChannel !== null) {
			indSecondChannel = strprogram.indexOf(searchSecondChannel, searchResultChanne.indEnd + 1);
			indStart = searchResult.indEnd;
			searchResult = _this4.getJsonLabel('id', strprograms, indStart, indSecondChannel);
			if (searchResult !== null) {
				indStart = searchResult.indEnd;
				searchresult = _this4.getJsonNextValue(strprograms, indStart, indSecondChannel);
				if (searchResult !== null) {
					var channelid = searchResult.value;
					indStart = searchResult.indEnd;
					searchResult = _this4.getJsonLabel('name', strprograms, indStart, indSecondChannel);
					if (searchResult !== null) {
						indStart = searchResult.indEnd;
						searchresult = _this4.getJsonNextValue(strprograms, indStart, indSecondChannel);
						var channelname = searchResult.value;
						console.log("channelname");
						console.log(channelname);

						searchResult = _this4.getJsonLabel('slug', strprograms, indStart, indSecondChannel);
						if (searchResult !== null) {
							indStart = searchResult.indEnd;
							searchresult = _this4.getJsonNextValue(strprograms, indStart, indSecondChannel);
							var channelslug = searchResult.value;
							console.log("channelslug");
							console.log(channelslug);

							searchResult = _this4.getJsonLabel('pay', strprograms, indStart, indSecondChannel);
							if (searchResult !== null) {
								indStart = searchResult.indEnd;
								searchresult = _this4.getJsonNextValue(strprograms, indStart, indSecondChannel);
								var channelpay = searchResult.value;
								channeldata = {};
								Amppari__extends(channeldata, {});
								channeldata.title = channelname;
								channeldata.slug = channelslug;
								channeldata.pay = channelpay;

								arrprogs = new Array();

								firstIndex = strprorams.indexOf(_this4.search_start_program, indStart);
								firstIndexEnd = strprorams.indexOf(search_end_program);
								strprogram = null;
								jsonprog = null;
								iCount = 1;

								while (firstIndex !== -1 && firstIndexEnd !== -1 && (indSecondChannel == -1 || indSecondChannel != -1 && firstIndexEnd < indSecondChannel)) {
									strprogram = strprorams.substring(firstIndex + 1, firstIndexEnd);
									jsonprog = _this4.getJsonProg(strprogram, indSecondChannel);
									if (jsonprog != null) {
										console.log("jsonprog");
										console.log(jsonprog);
										arrprogs.push(jsonprog);
										iCount = iCount + 1;
									} else break;
									firstIndex = strprorams.indexOf(_this4.search_start_program, firstIndexEnd);
									firstIndexEnd = strprorams.indexOf(search_end_program, firstIndex);
								}
								console.log("tv programs size");
								console.log(iCount);

								channeldata.channelprograms = [];
								Array.from(arrprogs).forEach(function (pr) {
									channeldata.channelprograms.push(pr);
								});
								if (channeldata != null) channels.push(channeldata);
							}
						}
					}
				}
			}
			searchResultChannel = _this4.getJsonLabel('channel', strprograms, indStart);
		}

		return channels;
	};

	this.getJsonProg = function (strprogram, indSecondChannel) {
		if (strprogram === null || strprogram === undefined) return null;
		console.log("strprogram");
		console.log(strprogram);
		var ind = strprogram.indexOf('"channel"');
		if (ind > -1) return null;

		var ret = null;
		var searchstart = '"^2",[';
		var indId = strprogram.indexOf(searchstart);
		var searchresult = null;
		if (indId > -1) {
			var indStart = 0;
			var strjson = "";
			strprogram = strprogram.substring(indId + searchstart.length);
			console.log("strprogram 2");
			console.log(strprogram);

			searchresult = _this4.getJsonLabelAndValue("id", strprogram, indStart, indSecondChannel);
			if (searchresult != null) {
				strjson = "{\"" + searchresult.name + "\":" + searchresult.value;
				console.log("1 strjson");
				console.log(strjson);

				indStart = searchresult.indEnd;
				searchresult = _this4.getJsonLabelAndValue("timestamp", strprogram, indStart, indSecondChannel);
				if (searchresult != null) {
					strjson = strjson + ",\"" + searchresult.name + "\":" + searchresult.value;
					console.log("2 strjson");
					console.log(strjson);
					indStart = searchresult.indEnd;
					searchresult = _this4.getJsonLabelAndValue("title", strprogram, indStart, indSecondChannel);
					if (searchresult != null) {
						strjson = strjson + ",\"" + searchresult.name + "\":" + searchresult.value;
						console.log("3 strjson");
						console.log(strjson);
						indStart = searchresult.indEnd;
						searchresult = _this4.getJsonLabelAndValue("description", strprogram, indStart, indSecondChannel);
						if (searchresult != null) {
							strjson = strjson + ",\"" + searchresult.name + "\":" + searchresult.value;
							indStart = searchresult.indEnd;
							console.log("4 strjson");
							console.log(strjson);
							searchresult = _this4.getJsonLabelAndValue("channel", strprogram, indStart, indSecondChannel);
							if (searchresult != null) {
								strjson = strjson + ",\"" + searchresult.name + "\":" + searchresult.value;
								console.log("5 strjson");
								console.log(strjson);
								indStart = searchresult.indEnd;
								searchresult = _this4.getJsonLabelAndValue("movie", strprogram, indStart, indSecondChannel);
								if (searchresult != null) {
									strjson = strjson + ",\"" + searchresult.name + "\":" + searchresult.value;
									console.log("6 strjson");
									console.log(strjson);
									indStart = searchresult.indEnd;
									searchresult = _this4.getJsonLabelAndValue("sport", strprogram, indStart, indSecondChannel);
									if (searchresult != null) {
										strjson = strjson + ",\"" + searchresult.name + "\":" + searchresult.value;
										strjson = strjson + " }";
										console.log("7 strjson");
										console.log(strjson);
										ret = JSON.parse(strjson);
										console.log("ret");
										console.log(ret);
									}
								}
							}
						}
					}
				}
			}
		}

		return ret;
	};

	this.getJsonLabelAndValue = function (name, strprogram, indStart, indSecondChannel) {
		// let searchresult = this.getJsonLabel(name, strprogram, indStart);
		var searchresult = _this4.getJsonNextLabel(strprogram, indStart, indSecondChannel);
		if (searchresult != null) {
			var indStart2 = searchresult.indEnd;
			var name2 = searchresult.name;
			searchresult = _this4.getJsonNextValue(strprogram, indStart2, indSecondChannel);
			if (searchresult != null) {
				searchresult.name = name2;
				return searchresult;
			}
		}
		return null;
	};

	this.getJsonNextLabel = function (strprogram, indStart, indSecondChannel) {
		var search = '"';
		var ind = strprogram.indexOf(search, indStart);
		console.log("getJsonNextLabel ind");
		console.log(ind);

		if (ind > -1) {
			var ind2 = strprogram.indexOf(search, ind + 1);
			if (ind2 > -1) {
				console.log("getJsonNextLabel ind2");
				console.log(ind2);
				var _searchresult = {};
				_searchresult.name = strprogram.substring(ind + 1, ind2);
				_searchresult.indStart = ind + 1;
				_searchresult.indEnd = ind2;
				console.log("getJsonLabel searchresult");
				console.log(_searchresult);
				return _searchresult;
			}
		}
		return null;
	};

	this.getJsonLabel = function (name, strprogram, indStart, indSecondChannel) {
		var search = '"' + name + '"';
		var ind = strprogram.indexOf(search, indStart);
		console.log("getJsonLabel ind");
		console.log(ind);

		if (ind > -1) {
			var _searchresult2 = {};
			_searchresult2.name = name;
			_searchresult2.indStart = ind + 1;
			_searchresult2.indEnd = ind + search.length;
			_searchresult2.name = name;
			console.log("getJsonLabel searchresult");
			console.log(_searchresult2);

			return _searchresult2;
		}
		return null;
	};

	this.getJsonNextValue = function (strprogram, indStart, indSecondChannel) {
		var search = ',';
		var ind = strprogram.indexOf(search, indStart);
		console.log("getJsonNextValue ind");
		console.log(ind);

		if (ind > -1) {
			var _searchresult3 = {};
			var bStartWithStrike = strprogram.substring(ind + 1, ind + 2) == '"';
			console.log("getJsonNextValue indEnd bStartWithStrike");
			console.log(bStartWithStrike);

			_searchresult3.indStart = ind;
			var iAdd = 1;
			if (bStartWithStrike) iAdd = 2;
			var indEnd = -1;
			if (bStartWithStrike) indEnd = strprogram.indexOf('"', ind + iAdd);else indEnd = strprogram.indexOf(search, ind + iAdd);
			console.log("getJsonNextValue indEnd");
			console.log(indEnd);

			if (indEnd == -1) {
				_searchresult3.indEnd = strprogram.length;
				_searchresult3.value = strprogram.substring(ind + iAdd);
				console.log("getJsonNextValue searchresult.value indEnd==-1");
				console.log(_searchresult3.value);
				return _searchresult3;
			} else {
				if (bStartWithStrike) _searchresult3.indEnd = indEnd + 1;else _searchresult3.indEnd = indEnd;
				if (bStartWithStrike) _searchresult3.value = strprogram.substring(ind + 1, indEnd + 1);else _searchresult3.value = strprogram.substring(ind + 1, indEnd);
				console.log("getJsonNextValue searchresult.value");
				console.log(_searchresult3.value);
				return _searchresult3;
			}
		}
		return null;
	};

	this.getJsonDataFromTelkkuRssXml = function (data) {
		var items = data.querySelectorAll("item");
	};

	this.handleErrors = function (response) {
		if (!response.ok) {
			// throw Error(response.statusText);
			console.log("response");
			console.log(response);
			console.log(response.status);
			throw Error(response.status);
		}
		return response;
	};

	this.getUrlQueryForAmppari = function (dayparameter) {
		var blankurl = _this4.fetch_url_ampparissa + "?aika=" + _this4.state.selectedaika + "&pvm=" + dayparameter + "&sanat=" + _this4.state.searchsanat + "&suodatus=" + _this4.state.selectedsuodattimet + "&tyyppi=" + _this4.state.selectedtyyppi;

		return blankurl;
	};

	this.onClickSetDateString = function (event) {
		event.preventDefault();
		var dayparameter = event.target.id;
		console.log("onClickSetDateString");
		console.log("dayparameter");
		console.log(dayparameter);
		var search = 'dayname_';
		var ind = dayparameter.indexOf(search);
		if (ind > -1) dayparameter = dayparameter.substring(ind + search.length).trim();
		console.log("dayparameter");
		console.log(dayparameter);
		console.log("onClickSetDateString");
		console.log(dayparameter);
		var parseddate = Date.parse(dayparameter);
		console.log("parseddate");
		console.log(parseddate);
		var day = new Date(parseddate);
		console.log("day");
		console.log(day);
		_this4.setState({ selecteddate: day });
		_this4.fetchHtmlAmppariChannels(dayparameter);
	};

	this.getPlus1DayId = function (plusdaynumber) {
		var today = dayjs_min_default()();
		var plusdate = today;
		if (plusdaynumber > 0) plusdate = today.add(plusdaynumber, 'days');
		var ret = plusdate.format("YYYY-MM-DD"); // pvm=2021-02-22
		return ret;
	};

	this.getPlus1Day = function (plusdaynumber) {
		var today = dayjs_min_default()();
		var plusdate = today;
		if (plusdaynumber > 0) plusdate = today.add(plusdaynumber, 'days');
		var weekday = new Date(plusdate).getDay();
		var weekdayname = "";
		switch (weekday) {
			case 1:
				weekdayname = 'Ma';break;
			case 2:
				weekdayname = 'Ti';break;
			case 3:
				weekdayname = 'Ke';break;
			case 4:
				weekdayname = 'To';break;
			case 5:
				weekdayname = 'Pe';break;
			case 6:
				weekdayname = 'La';break;
			case 0:
				weekdayname = 'Su';break;
		}
		var ret = weekdayname + " " + plusdate.format("DD.MM.YYYY"); // pvm=2021-02-22
		return ret;
	};

	this.onClickSelectedAika = function (event) {
		event.preventDefault();
		var timeparameter = event.target.id; // event.target.text;
		var ind = timeparameter.indexOf("_");
		if (ind > -1) {
			var idends = timeparameter.substring(ind + 1);
			/*
   console.log("idends");
   console.log(idends);
   */
			_this4.setState({ selectedaika: idends });
		}
	};

	this.getTableHeaders = function () {
		var ret = null;
		return ret;
	};

	this.getTableRows = function () {
		var ret = null;
		return ret;
	};

	this.getFetchedDate = function () {

		console.log("getFetchedDate");
		console.log("this.state.selecteddate");
		console.log(_this4.state.selecteddate);
		var today = _this4.state.selecteddate;
		if (typeof today === 'string') today = Date.parse(_this4.state.selecteddate);
		var days = today.getDate();
		var month = today.getMonth() + 1;
		var year = today.getFullYear();
		if (days < 10) days = "0" + days;
		if (month < 10) month = "0" + month;
		var ret = "" + days + "." + month + "." + year;
		return ret;
	};

	this.calculateMaxChannelSetIndex = function () {
		if (utils_Config.bDebug) {
			console.log("calculateMaxChannelSetIndex");
			/*
   console.log(channelSets);
   console.log("calculateMaxChannelSetIndex");
   console.log(channelSets);
   console.log("calculateMaxChannelSetIndex");
   console.log(channelSets);
   */
		}
		if (_this4.state.channels == null) return 0;
		var channelssize = _this4.state.channels.length;
		if (channelssize === 0) return 0;
		if (_this4.state.bCheckShowChannelsAtSameTime) return 0;
		if (_this4.state.showChannelsAtSameTime >= _this4.state.channels.length) return 0;
		var channelSets = _this4.state.channels.length / _this4.state.showChannelsAtSameTime;
		if (utils_Config.bDebug) {
			console.log("channelSets");
			console.log(channelSets);
		}
		if (channelSets == 0) return 0;
		return channelSets - 1;
	};

	this.nextChannelSetClicked = function (event) {
		event.preventDefault();
		if (_this4.state.channels == null || _this4.state.channels.length == 0) return;
		if (_this4.state.currentChannelSetIndex > _this4.calculateMaxChannelSetIndex()) {
			_this4.setState({ currentChannelSetIndex: _this4.calculateMaxChannelSetIndex(),
				bSearchButtonClicked: false });
			return;
		}
		if (_this4.state.currentChannelSetIndex === _this4.calculateMaxChannelSetIndex()) {
			return;
		}
		_this4.setState({ currentChannelSetIndex: _this4.state.currentChannelSetIndex + 1 });
	};

	this.prevChannelSetClicked = function (event) {
		event.preventDefault();
		if (_this4.state.channels == null || _this4.state.channels.length == 0) return;
		if (_this4.state.currentChannelSetIndex < 0) {
			_this4.setState({ currentChannelSetIndex: 0,
				bSearchButtonClicked: false });
			return;
		}
		if (_this4.state.currentChannelSetIndex === 0) {
			return;
		}
		_this4.setState({ currentChannelSetIndex: _this4.state.currentChannelSetIndex - 1 });
	};

	this.showAllDescriptions = function (event) {
		event.preventDefault();
		var value = event.target.checked;
		console.log("showAllDescriptions");
		var bValue = value; // this.state.bDisplayAllDescriptions;
		console.log("bValue");
		console.log(bValue);
		/*
  if (value === 'on')
  	bValue = true;
  console.log(value);
  */
		_this4.setState({ bDisplayAllDescriptions: bValue,
			bSearchButtonClicked: false });
	};

	this.showTableBorders = function (event) {
		event.preventDefault();
		var value = event.target.checked;
		console.log("showTableBorders");
		var bValue = value;
		console.log("bValue");
		console.log(bValue);
		_this4.setState({ bShowTableBorder: bValue });
	};

	this.showOneChannel = function (event) {
		event.preventDefault();
		//	console.log("showOneChannel");
		var value = event.target.checked;
		var bValue = value; // this.showOneChannelRef.current.;

		if (bValue) _this4.setState({ showChannelsAtSameTime: 1,
			bCheckShowChannelsAtSameTime: true,
			bSearchButtonClicked: false,
			selectedchannelindex: 0 });else {
			_this4.setState({ showChannelsAtSameTime: _this4.const_showChannelsAtSameTime,
				selectedchannelindex: -1,
				bCheckShowChannelsAtSameTime: false,
				bSearchButtonClicked: false });
			_this4.channels = _this4.programtypeitems;
			_this4.filterWhenUIControlsHasBeenChanged(filtercalled.SEARCHCHANE, null);
		}
	};

	this.getPOfIndex = function (index, txt) {
		if (utils_Config.bDebug) {
			console.log("getPOfIndex");
		}
		var textSearch = _this4.textSearch;
		if (utils_Config.bDebug) {
			console.log("textSearch");
			console.log(textSearch);
		}
		if (txt == undefined || txt == null || txt.toString().trim().length == 0) return "";
		if (utils_Config.bDebug) {
			console.log("txt");
			console.log(txt);
			console.log("index");
			console.log(index);
			console.log("textSearch");
			console.log(textSearch);
		}

		var txt1 = txt.toString();
		var txtlen = txt1.length;
		if (txtlen == undefined || index == undefined || index == null || index < 0 || txtlen <= index) return txt1.toString();
		if (textSearch == undefined || textSearch == null || textSearch.toString().trim().length == 0) return txt1.toString();

		var first = txt1.substring(0, index);
		var between = txt1.substring(index, index + textSearch.length);
		var last = txt1.substring(index + textSearch.length, txt1.length);

		if (utils_Config.bDebug) {
			console.log("first");
			console.log(first);
			console.log("between");
			console.log(between);
			console.log("last");
			console.log(last);
		}

		var newvalue_first = first != undefined && first != null && first.trim().length != 0 ? Object(preact_min["h"])(
			'span',
			null,
			first
		) : '';
		var newvalue_between = Object(preact_min["h"])(
			'span',
			{ style: 'background-color: green; color: white;' },
			between
		);
		var newvalue_last = last != undefined && last != null && last.trim().length != 0 ? Object(preact_min["h"])(
			'span',
			null,
			last
		) : '';
		var newvalue = Object(preact_min["h"])(
			'div',
			null,
			newvalue_first,
			newvalue_between,
			newvalue_last
		);
		if (utils_Config.bDebug) {
			console.log("newvalue_first");
			console.log(newvalue_first);
			console.log("newvalue_between");
			console.log(newvalue_between);
			console.log("newvalue_last");
			console.log(newvalue_last);
		}
		if (utils_Config.bDebug) {
			console.log("newvalue");
			console.log(newvalue);
		}
		return newvalue;
	};

	this.getTableHeadersAndTableRowsAfterChannels = function () {
		var headers = null;
		var channels = null;
		if (utils_Config.bDebug) {
			console.log("getTableHeadersAndTableRowsAfterChannels");
			console.log("this.state.bCheckShowChannelsAtSameTime");
			console.log(_this4.state.bCheckShowChannelsAtSameTime);
			console.log("this.state.selectedchannelindex");
			console.log(_this4.state.selectedchannelindex);
			console.log(_this4.state);
		}

		var all_channels = _this4.channels;
		if (all_channels == null) {
			headers = [];
			channels = [];
			var _ret = {};
			_ret.headers = headers;
			_ret.channels = channels;
			return _ret;
		} else if (_this4.state.bCheckShowChannelsAtSameTime && _this4.state.selectedchannelindex != -1) {
			console.log("filter");
			var selectedTitle = all_channels[_this4.state.selectedchannelindex].title;
			var filteredchannels = all_channels.filter(function (s, i) {
				//	console.log("i");
				//	console.log(i);
				return s.title === selectedTitle;
			});
			//				console.log("filteredchannels");
			//				console.log(filteredchannels);
			headers = filteredchannels.map(function (jsonchannel, i) {
				return jsonchannel.title;
			});
			channels = filteredchannels.map(function (jsonchannel, i) {
				return Object(preact_min["h"])(amppari_AmppariChannel, { id: i, data: jsonchannel,
					selectedtyyppi: _this4.state.selectedtyyppi,
					showSearch: _this4.state.bSearchButtonClicked && _this4.state.textSearch != null,
					getPOfIndex: _this4.getPOfIndex,
					displayAllDescriptions: _this4.state.bDisplayAllDescriptions });
			});
		} else {
			if (_this4.state.showChannelsAtSameTime == all_channels.length || _this4.state.showChannelsAtSameTime > all_channels.length) {
				headers = all_channels.map(function (jsonchannel, i) {
					return jsonchannel.title;
				});
				channels = all_channels.map(function (jsonchannel, i) {
					return Object(preact_min["h"])(amppari_AmppariChannel, { id: i, data: jsonchannel,
						showSearch: _this4.state.bSearchButtonClicked && _this4.state.textSearch != null,
						selectedtyyppi: _this4.state.selectedtyyppi,
						getPOfIndex: _this4.getPOfIndex,
						displayAllDescriptions: _this4.state.bDisplayAllDescriptions });
				});
			} else {
				var bAllChannels = false;
				if (_this4.state.showChannelsAtSameTime < all_channels.length) {
					var min = Math.floor(_this4.state.currentChannelSetIndex * _this4.state.showChannelsAtSameTime);
					var max = _this4.state.currentChannelSetIndex == 0 ? _this4.state.showChannelsAtSameTime : Math.floor(_this4.state.currentChannelSetIndex * _this4.state.showChannelsAtSameTime + _this4.state.showChannelsAtSameTime);
					if (utils_Config.bDebug) {
						console.log("min");
						console.log(min);
						console.log("max");
						console.log(max);
					}
					if (min < 0) min = 0;else if (min > all_channels.length) {
						min = all_channels.length;
						bAllChannels = true;
					}

					if (max > all_channels.length) max = all_channels.length;

					if (!bAllChannels) {
						var i = void 0;
						var newChannelSet = [];
						for (i = min; i < max; i++) {
							newChannelSet.push(all_channels[i]);
						}

						headers = newChannelSet.map(function (jsonchannel, i) {
							return jsonchannel.title;
						});
						channels = newChannelSet.map(function (jsonchannel, i) {
							return Object(preact_min["h"])(amppari_AmppariChannel, { id: i, data: jsonchannel,
								showSearch: _this4.state.bSearchButtonClicked && _this4.state.textSearch != null,
								selectedtyyppi: _this4.state.selectedtyyppi,
								getPOfIndex: _this4.getPOfIndex,
								displayAllDescriptions: _this4.state.bDisplayAllDescriptions });
						});
					}
				} else {
					bAllChannels = true;
				}

				if (bAllChannels) {
					headers = all_channels.map(function (jsonchannel, i) {
						return jsonchannel.title;
					});
					channels = all_channels.map(function (jsonchannel, i) {
						return Object(preact_min["h"])(amppari_AmppariChannel, { id: i, data: jsonchannel,
							showSearch: _this4.state.bSearchButtonClicked && _this4.state.textSearch != null,
							selectedtyyppi: _this4.state.selectedtyyppi,
							getPOfIndex: _this4.getPOfIndex,
							displayAllDescriptions: _this4.state.bDisplayAllDescriptions });
					});
				}
			}
		}

		/*
  if (this.state.selectedsuodattimet != 'kaikki')
  {
  	if (this.state.selectedsuodattimet === 'ilmaiset')
  	{
  		let chs = all_channels.filter( (s, i) =>
  		{ 
  		//	console.log("i");
  		//	console.log(i);
  			return this.getIsIlmainenChannel(s.title) 
  		} );
  		all_channels = chs;
  	}
  	else
  	if (this.state.selectedsuodattimet === 'ilmaiset')
  	{
  		let chs = all_channels.filter( (s, i) =>
  		{ 
  		//	console.log("i");
  		//	console.log(i);
  			return this.getIsMaksullinenChannel(s.title) 
  		} );
  		all_channels = chs;
  	}			
  }
  */

		/*
  let bAllChannels = false;
  if (this.state.bSearchButtonClicked)
  {
  	if (all_channels == null)
  	{
  		headers = [];
  		channels = [];	
  		let ret = {};
  		ret.headers = headers;
  		ret.channels = channels;
  		return ret;		
  	}
  	const searchText = this.state.textSearch;
  	if (searchText != null && searchText.toString().trim().length > 0)
  	{
  		let foundedChannelsTitle = null;
  		let index = -1;
  		let foundedChannels = [];
  		let foundedPrograms = [];
  		let founded = false;				
  		let progfounded = false;
  		let uppersearchText = searchText.toUpperCase();
  		let chcoopy = {};
  				let search_channels = all_channels;
  		if (this.state.bCheckShowChannelsAtSameTime
  			&& this.state.selectedchannelindex != -1)
  		{			
  			console.log("filter search bCheckShowChannelsAtSameTime");
  			let selectedTitle = search_channels[this.state.selectedchannelindex].title;
  			let filteredchannels = search_channels.filter( (s, i) =>
  			{ 
  			//	console.log("i");
  			//	console.log(i);
  				return s.title === selectedTitle 
  			} );
  			search_channels = filteredchannels;
  		}
  		Array.from(search_channels).forEach(cha => {
  			chcoopy = {};
  			index = -1;
  			founded = false;
  		// this.state.channels.forEach(cha, i => {
  			Object.assign(chcoopy, cha);
  			index = chcoopy.title.toUpperCase().indexOf(uppersearchText);
  			if (index != -1)
  			{
  				chcoopy.titleindex = index;
  				founded = true;
  				if (Config.bDebug)
  				{
  					console.log("founded channel title chcoopy");
  					console.log(chcoopy);
  				}
  			}
  			foundedPrograms = [];
  					let prcopy = null;
  			Array.from(chcoopy.channelprograms).forEach(pr => {
  			// cha.channelprograms.forEach(pr, i => {
  				progfounded = false;
  				prcopy = null;
  				index = pr.title.toString().toUpperCase().indexOf(uppersearchText);
  				if (index != -1)
  				{
  					if (prcopy == null)
  					{
  						prcopy = {};
  						Object.assign(prcopy, pr);
  					}
  					prcopy.titleindex = index;
  							founded = true;
  					progfounded = true;
  					if (Config.bDebug)
  					{
  						console.log("founded program title");
  						console.log(prcopy);
  					}		
  				}
  				index = pr.description.toString().toUpperCase().indexOf(uppersearchText);
  				if (index != -1)
  				{
  					if (prcopy == null)
  					{
  						prcopy = {};
  						Object.assign(prcopy, pr);
  					}
  					prcopy.descriptionindex = index;
  					founded = true;
  							progfounded = true;
  					if (Config.bDebug)
  					{
  						console.log("founded program description");
  						console.log(prcopy);
  					}		
  				}
  				if (progfounded)
  					foundedPrograms.push(prcopy);
  			});	
  					if (founded)
  			{	
  				if (foundedPrograms != null && foundedPrograms.length != 0)
  					chcoopy.channelprograms = foundedPrograms;
  				else
  					chcoopy.channelprograms = cha.channelprograms;
  				foundedChannels.push(chcoopy);
  			}
  		});
  				if (foundedChannels == null && foundedChannels.length == 0)
  		{
  			headers = [];
  			channels = [];	
  		}
  		else
  		{
  					headers = foundedChannels.map((jsonchannel, i) => {
  				return jsonchannel.title
  			});
  			channels = foundedChannels.map((jsonchannel, i) => {
  				return <AmppariChannel id={i} data={jsonchannel}
  						showSearch={true}
  						getPOfIndex={this.getPOfIndex}
  						selectedtyyppi={this.state.selectedtyyppi}
  						displayAllDescriptions=
  						      {this.state.bDisplayAllDescriptions} 
  						/>;
  			});		
  		}
  	}
  	else
  	{
  		headers = all_channels.map((jsonchannel, i) => {
  			return jsonchannel.title
  		});
  		channels = all_channels.map((jsonchannel, i) => {
  			return <AmppariChannel id={i} data={jsonchannel}
  					showSearch={false}
  					selectedtyyppi={this.state.selectedtyyppi}
  					displayAllDescriptions={this.state.bDisplayAllDescriptions} />;
  		});	
  	}
  }
  else
  if (this.state.bCheckShowChannelsAtSameTime
  	&& this.state.selectedchannelindex != -1)
  {			
  	console.log("filter");
  	let selectedTitle = all_channels[this.state.selectedchannelindex].title;
  	let filteredchannels = all_channels.filter( (s, i) =>
  	{ 
  	//	console.log("i");
  	//	console.log(i);
  		return s.title === selectedTitle 
  	} );
  //				console.log("filteredchannels");
  //				console.log(filteredchannels);
  	headers = filteredchannels.map((jsonchannel, i) => {
  		return jsonchannel.title
  		});
  	channels = filteredchannels.map((jsonchannel, i) => {
  		return <AmppariChannel id={i} data={jsonchannel}
  				showSearch={false}
  				selectedtyyppi={this.state.selectedtyyppi}
  				displayAllDescriptions={this.state.bDisplayAllDescriptions} />;
  	});
  }
  else
  {
  	if (this.state.showChannelsAtSameTime == all_channels.length
  	   || this.state.showChannelsAtSameTime > all_channels.length)
  	{
  		headers = all_channels.map((jsonchannel, i) => {
  			return jsonchannel.title
  		});
  		channels = all_channels.map((jsonchannel, i) => {
  			return <AmppariChannel id={i} data={jsonchannel}
  					showSearch={false}
  					selectedtyyppi={this.state.selectedtyyppi}
  					displayAllDescriptions={this.state.bDisplayAllDescriptions} />;
  		});
  	}
  	else
  	{
  		let bAllChannels = false;
  		if (this.state.showChannelsAtSameTime < all_channels.length)
  		{
  			let min = Math.floor(this.state.currentChannelSetIndex * this.state.showChannelsAtSameTime);
  			let max = (this.state.currentChannelSetIndex == 0 
  				? this.state.showChannelsAtSameTime : 
  				Math.floor((this.state.currentChannelSetIndex * this.state.showChannelsAtSameTime) 
  					+this.state.showChannelsAtSameTime));
  			if (Config.bDebug)
  			{
  				console.log("min");
  				console.log(min);
  				console.log("max");
  				console.log(max);
  			}
  			if (min < 0)
  				min = 0;
  			else
  			if (min > all_channels.length)
  			{
  				min = all_channels.length;
  				bAllChannels = true;
  			}
  					if (max > all_channels.length)
  				max = all_channels.length;
  					if (!bAllChannels)
  			{
  				let i;
  				let newChannelSet = []
  				for (i = min; i < max; i++) {
  					newChannelSet.push(all_channels[i]);
  				}
  						headers = newChannelSet.map((jsonchannel, i) => {
  					return jsonchannel.title
  				});
  				channels = newChannelSet.map((jsonchannel, i) => {
  					return <AmppariChannel id={i} data={jsonchannel}
  							showSearch={false}
  							selectedtyyppi={this.state.selectedtyyppi}
  							displayAllDescriptions={this.state.bDisplayAllDescriptions} />;
  				});
  			}
  		}
  		else
  		{
  			bAllChannels = true;
  		}
  		
  		if (bAllChannels)
  		{
  			headers = all_channels.map((jsonchannel, i) => {
  				return jsonchannel.title
  			});
  			channels = all_channels.map((jsonchannel, i) => {
  				return <AmppariChannel id={i} data={jsonchannel}
  						showSearch={false}
  						selectedtyyppi={this.state.selectedtyyppi}
  						displayAllDescriptions={this.state.bDisplayAllDescriptions} />;
  			});
  		}
  			}
  }
  */

		/*
  let divided = this.state.channels.size() % this.state.showChannelsAtSameTime:						
  if (Config.bDebug)
  {
  console.log("divided");
  console.log(divided);
  }
  */

		var ret = {};
		ret.headers = headers;
		ret.channels = channels;
		return ret;
	};

	this.textFieldChannelsAtSameTimeChanged = function (event) {
		event.preventDefault();
		var value = event.target.value;
		if (utils_Config.bDebug) {
			console.log("textFieldChannelsAtSameTimeChanged");
			console.log(value);
		}
		var validNumber = parseInt(value);
		if (utils_Config.bDebug) {
			console.log("validNumber");
			console.log(validNumber);
		}
		if (validNumber == NaN || validNumber == undefined) {
			event.target.value = _this4.const_showChannelsAtSameTime;
			return;
		} else if (parseInt(validNumber) < 1) {
			event.target.value = 1;
			return;
		} else if (parseInt(validNumber) > _this4.const_showChannelsAtSameTime) {
			event.target.value = _this4.const_showChannelsAtSameTime;
			return;
		}
		_this4.setState({ showChannelsAtSameTime: validNumber,
			currentChannelSetIndex: 0 });
	};

	this.textFieldSearchChanged = function (event) {
		event.preventDefault();
		var value = event.target.value;
		if (utils_Config.bDebug) {
			console.log("textFieldSearchChanged");
			console.log(value);
		}
		_this4.filterWhenUIControlsHasBeenChanged(filtercalled.SEARCHCHANE, value);
	};

	this.searchTextFromChannelsClicked = function () {
		event.preventDefault();
		if (utils_Config.bDebug) {
			console.log("searchTextFromChannelsClicked");
		}
		var searchText = _this4.textSearch;
		if (utils_Config.bDebug) {
			console.log("searchText 2 ");
			console.log(searchText);
		}
		if (searchText == undefined || searchText == null || searchText.trim().length == 0) return;
		// to start make indirect the search:
		if (utils_Config.bDebug) {
			console.log("searchTextFromChannelsClicked 2 ");
		}
		var value = _this4.showAllDescrRef.current.MDComponent.checked;
		if (!value) _this4.showAllDescrRef.current.MDComponent.checked = true;

		_this4.filterWhenUIControlsHasBeenChanged(filtercalled.MAKESEARCH, true);
		_this4.setState({ bSearchButtonClicked: true, bDisplayAllDescriptions: true,
			channels: _this4.channels });
		_this4.forceUpdate();
	};

	this.getMovieOrSportChannels = function (selected) {
		var fitems = _this4.channeltypeitems;
		if (fitems == null) return null;
		if (selected == undefined || selected == null) return null;
		var ret = null;
		var foundmovies = selected === 'elokuvat';
		var foundsport = selected === 'urheilu';
		var chcoopy = void 0,
		    foundedPrograms = void 0,
		    progfounded = void 0;
		var foundedChannels = [];

		Array.from(fitems).forEach(function (cha) {
			chcoopy = {};
			Amppari__extends(chcoopy, cha);
			/*
   if (Config.bDebug)
   {
   	console.log("chcoopy");
   	console.log(chcoopy);
   	console.log("chcoopy.channelprograms");
   	console.log(chcoopy.channelprograms);
   }
   */
			foundedPrograms = [];
			progfounded = false;

			var prcopy = null;
			Array.from(chcoopy.channelprograms).forEach(function (pr) {
				// cha.channelprograms.forEach(pr, i => {
				if (foundmovies && pr.movie) {
					progfounded = true;
					foundedPrograms.push(pr);
				} else if (foundsport && pr.sport) {
					progfounded = true;
					foundedPrograms.push(pr);
				}
			});

			if (progfounded) {
				if (foundedPrograms != null && foundedPrograms.length != 0) {
					chcoopy.channelprograms = foundedPrograms;
					foundedChannels.push(chcoopy);
				}
			}
		});

		return foundedChannels;
	};

	this.filterFetchedItemsIntoChannelsAfterTyyppi = function (selected) {
		var fitems = _this4.state.fetcheditems;
		if (fitems == null) return null;
		if (selected == undefined || selected == null) return null;
		var ret = null;
		if (selected == 'kaikki') ret = fitems;else if (selected === 'elokuvat') {
			ret = _this4.getMovieOrSportChannels(selected);
		} else if (selected === 'urheile') {
			ret = _this4.getMovieOrSportChannels(selected);
		}
		return ret;
	};

	this.filterFetchedItemsIntoChannelsAfterSuodin = function (selected) {
		var fitems = _this4.state.fetcheditems;
		if (fitems == null) return null;
		if (selected == undefined || selected == null) return null;
		var ret = null;
		if (selected == 'kaikki') ret = fitems;else if (selected === 'ilmaiset') {
			ret = fitems.filter(function (s, i) {
				//	console.log("i");
				//	console.log(i);
				return s.pay === false;
			});
		} else if (selected === 'maksulliset') {
			ret = fitems.filter(function (s, i) {
				//	console.log("i");
				//	console.log(i);
				return s.pay === true;
			});
		}
		return ret;
	};

	this.filterChannesAfterChannelPay = function (channeltype) {
		//  filterChannesAfterChannelPay takes items from fetcheditems and populates: channeltypeitems,
		var ind = null;
		var selected = null;
		var chtype = null;

		// const fitems = this.state.fetcheditems;
		var fitems = _this4.fetcheditems;

		if (utils_Config.bDebug) {
			console.log("filterChannesAfterChannelPay");
			console.log("channeltype");
			console.log(channeltype);
			console.log("channeltype");
			console.log(channeltype);
			console.log("fitems");
			console.log(fitems);
			console.log("fitems.size");
			console.log(fitems.length);
		}
		if (channeltype !== undefined) {
			ind = channeltype.ind;
			selected = channeltype.selected;
			chtype = channeltype.channeltype;
		} else {
			selected = _this4.state.selectedsuodattimet;
			ind = _this4.state.selectedsuodatinindex;
		}

		if (utils_Config.bDebug) {
			console.log("filterChannesAfterChannelPay 2");
			console.log("ind");
			console.log(ind);
			console.log("selected");
			console.log(selected);
		}

		var chls = null;
		if (fitems == null) chls = null;else if (selected == undefined || selected == null) chls = fitems;else {
			if (selected == 'kaikki') chls = fitems;else {
				var ret = null;
				if (selected === 'ilmaiset') {
					ret = fitems.filter(function (s, i) {
						//	console.log("i");
						//	console.log(i);
						return s.pay === false;
					});
				} else if (selected === 'maksulliset') {
					ret = fitems.filter(function (s, i) {
						//	console.log("i");
						//	console.log(i);
						return s.pay === true;
					});
				}
				chls = ret;
			}
		}

		if (utils_Config.bDebug) {
			console.log("chls 2");
			console.log(chls);
		}

		var bChange = false;
		var value = _this4.showOneChannelRef.current.MDComponent.checked;
		if (value) {
			_this4.showOneChannelRef.current.MDComponent.checked = false;
			bChange = true;
		}

		if (utils_Config.bDebug) {
			console.log("bChange 2");
			console.log(bChange);
			console.log("chls - channeltypeitems");
			console.log(chls);
			console.log("channeltypeitems.size");
			console.log(chls.length);
		}

		_this4.channeltypeitems = chls;

		// let chls = this.filterFetchedItemsIntoChannelsAfterSuodin(chtype);
		/*
  if (!bChange)
  this.setState({
  	selectedsuodatinindex: ind,	
  	selectedsuodattimet: selected,
  	channeltypeitems: chls
  });
  else
  this.setState({
  	selectedsuodatinindex: ind,	
  	selectedsuodattimet: selected,
  	channeltypeitems: chls,
  	bCheckShowChannelsAtSameTime: true
  });
  */

		if (utils_Config.bDebug) {
			console.log("filterChannesAfterChannelPay 3");
			console.log(_this4.state);
		}
	};

	this.filterAfterProgramType = function (change) {
		// if change parameter is undefined, then take value from state!
		// filterAfterProgramType takes items from channeltypeitems and populates: programtypeitems 
		//         and/or channels if there is no search, 

		var ind = null;
		var mychange = null;
		if (change == undefined) mychange = _this4.state.selectedtyyppi;else {
			ind = change.ind;
			mychange = change.selected;
		}

		// const fitems = this.state.channeltypeitems;
		var fitems = _this4.channeltypeitems;
		if (utils_Config.bDebug) {
			console.log("filterAfterProgramType channeltypeitems");
			console.log(_this4.channeltypeitems);
			console.log("channeltypeitems.length");
			console.log(fitems.length);
		}

		var items = fitems;
		if (mychange == 'kaikki') items = fitems;else if (mychange === 'elokuvat') {
			items = _this4.getMovieOrSportChannels(mychange);
		} else if (mychange === 'urheilu') {
			items = _this4.getMovieOrSportChannels(mychange);
		}

		_this4.programtypeitems = items;
		_this4.channels = items;
		if (utils_Config.bDebug) {
			console.log("programtypeitems");
			console.log(_this4.programtypeitems);
			console.log("programtypeitems.length");
			console.log(_this4.programtypeitems.length);
		}
		/*		
  if (change !== undefined)
  	this.setState({ programtypeitems: items,
  		selectedTyyppiinindex: ind,
  		selectedtyyppi: selected
  		});
  else
  	this.setState({ programtypeitems: items	});
  	*/

		// { fetcheditems: data, channels: data,
		//	bUnderFetch: false, selectedsuodattimet: 'kaikki',
		//		selectedtyyppi: 'kaikki', selectedTyyppiinindex: 0,
		//		selectedsuodatinindex: 0 }
	};

	this.makeSearchChange = function (change) {
		var bSearch = _this4.state.bSearchButtonClicked;
		if ( /* bSearch && */change === undefined || change === null || change.toString().trim().length == 0) {
			_this4.textSearch = null;
			_this4.channels = _this4.programtypeitems;
			_this4.setState({ textSearch: null, bSearchButtonClicked: false });
			// this.filterAfterSearch();
			/*
   this.setState({ textSearch: change, 
   	bSearchButtonClicked: false});
   */
		} else _this4.textSearch = change;
		//			this.setState({ textSearch: change});
		// this.setState({ textSearch: change, 
		//	bSearchButtonClicked: false})	
	};

	this.filterAfterSearch = function (change) {
		// if change parameter is undefined, then take value from state!
		// filterAfterSearch takes items from programtypeitems and populates: channels if there is a 
		// ongoing search.
		var mychange = null;
		if (change == undefined) mychange = _this4.state.bSearchButtonClicked;else {
			mychange = change;
		}

		var bAllChannels = false;
		var foundedChannels = [];
		var foundedPrograms = [];

		if (utils_Config.bDebug) {
			console.log("filterAfterSearch mychange");
			console.log(mychange);
		}

		_this4.channels = _this4.state.programtypeitems;
		if (mychange !== undefined || mychange !== null || mychange) {
			var all_channels = _this4.channels;
			//let all_channels = this.channels;
			if (utils_Config.bDebug) {
				console.log("all_channels");
				console.log(all_channels);
				console.log("all_channels.length");
				console.log(all_channels.length);
			}

			if (all_channels == null) {
				; // this.setState({ bSearchButtonClicked: false, channels: null});		
			} else {
				// const searchText = this.state.textSearch;
				var searchText = _this4.textSearch;
				if (utils_Config.bDebug) {
					console.log("searchText");
					console.log(searchText);
				}
				if (searchText == null || searchText.toString().trim().length == 0) {
					//					this.setState({ bSearchButtonClicked: false, 
					//						channels: all_channels});
					;
				} else {
					var foundedChannelsTitle = null;
					var index = -1;
					var founded = false;
					var progfounded = false;
					var uppersearchText = searchText.toUpperCase();
					var chcoopy = {};

					var search_channels = all_channels;
					if (_this4.state.bCheckShowChannelsAtSameTime && _this4.state.selectedchannelindex != -1) {
						console.log("filter search bCheckShowChannelsAtSameTime");
						var selectedTitle = search_channels[_this4.state.selectedchannelindex].title;
						var filteredchannels = search_channels.filter(function (s, i) {
							//	console.log("i");
							//	console.log(i);
							return s.title === selectedTitle;
						});
						search_channels = filteredchannels;
					}

					if (utils_Config.bDebug) {
						console.log("search_channels");
						console.log(search_channels);
					}

					Array.from(search_channels).forEach(function (cha) {
						chcoopy = {};
						index = -1;
						founded = false;
						// this.state.channels.forEach(cha, i => {
						Amppari__extends(chcoopy, cha);
						/*
      if (Config.bDebug)
      {
      	console.log("chcoopy");
      	console.log(chcoopy);
      	console.log("chcoopy.channelprograms");
      	console.log(chcoopy.channelprograms);
      }
      */
						index = chcoopy.title.toUpperCase().indexOf(uppersearchText);
						if (index != -1) {
							chcoopy.titleindex = index;
							founded = true;
							if (utils_Config.bDebug) {
								console.log("founded channel title chcoopy");
								console.log(chcoopy);
							}
						}
						foundedPrograms = [];

						var prcopy = null;
						Array.from(chcoopy.channelprograms).forEach(function (pr) {
							// cha.channelprograms.forEach(pr, i => {
							progfounded = false;
							prcopy = null;
							index = pr.title.toString().toUpperCase().indexOf(uppersearchText);
							if (index != -1) {
								if (prcopy == null) {
									prcopy = {};
									Amppari__extends(prcopy, pr);
								}
								prcopy.titleindex = index;
								/*
        prcopy.title = pr.title;
        prcopy.description = pr.description;
        prcopy.channel  = pr.channel;
        prcopy.id  = pr.id;
        prcopy.movie  = pr.movie;
        prcopy.sport  = pr.sport;
        prcopy.timestamp  = pr.timestamp;	
        */

								founded = true;
								progfounded = true;
								if (utils_Config.bDebug) {
									console.log("founded program title");
									console.log(prcopy);
								}
							}
							index = pr.description.toString().toUpperCase().indexOf(uppersearchText);
							if (index != -1) {
								if (prcopy == null) {
									prcopy = {};
									Amppari__extends(prcopy, pr);
								}
								prcopy.descriptionindex = index;
								founded = true;
								/*
        prcopy.title = pr.title;
        prcopy.description = pr.description;
        prcopy.channel  = pr.channel;
        prcopy.id  = pr.id;
        prcopy.movie  = pr.movie;
        prcopy.sport  = pr.sport;
        prcopy.timestamp  = pr.timestamp;
        */

								progfounded = true;
								if (utils_Config.bDebug) {
									console.log("founded program description");
									console.log(prcopy);
								}
							}
							if (progfounded) foundedPrograms.push(prcopy);
						});

						if (founded) {
							if (foundedPrograms != null && foundedPrograms.length != 0) chcoopy.channelprograms = foundedPrograms;else chcoopy.channelprograms = cha.channelprograms;
							foundedChannels.push(chcoopy);
						}
					});

					if (foundedChannels == null || foundedChannels.length == 0) {
						// if (change == undefined)
						// this.setState({ bSearchButtonClicked: false, 
						//	channels: null});
						_this4.channels = null;
					} else {
						if (utils_Config.bDebug) {
							console.log("foundedChannels");
							console.log(_this4.programtypeitems);
							console.log("foundedChannels.length");
							console.log(foundedChannels.length);
						}
						/*
      this.setState({ bSearchButtonClicked: true, 
      	channels: foundedChannels});
      	*/
						_this4.channels = foundedChannels;
					}
				}
			}
		} else {
			//			this.setState({ bSearchButtonClicked: false,
			//				channels: this.state.programtypeitems });
			;
		}
	};

	this.filterWhenUIControlsHasBeenChanged = function (calledfrom, change) {
		//  filterChannesAfterChannelPay takes items from fetcheditems and populates: channeltypeitems,
		// filterAfterProgramType takes items from channeltypeitems and populates: programtypeitems 
		//         and/or channels if there is no search, 
		// filterAfterSearch takes items from programtypeitems and populates: channels if there is a 
		// ongoing search.
		// if there is no 'previos' stage change, then take previous items and only filter 'own' items and
		// put those on 'next' item state state variable. See above! (this method is called in all 
		// possible change place, ie from ui controll change methods).
		console.log("filterWhenUIControlsHasBeenChanged");
		console.log("calledfrom");
		console.log(calledfrom);
		console.log("change");
		console.log(change);

		//	this.setState({ channels: null });

		switch (calledfrom) {
			case filtercalled.CHANNELTYPE:
				console.log("calledfrom.CHANNELTYPE");
				_this4.filterChannesAfterChannelPay(change);
				_this4.filterAfterProgramType();
				//	this.filterAfterSearch(); // possible a search call
				break;
			case filtercalled.PROGRAMTYPE:
				_this4.filterAfterProgramType(change);
				//	this.filterAfterSearch(); // possible a search call
				break;
			case filtercalled.SEARCHCHANE:
				// only a search data change or if null or empty set 'bSearch' false:
				_this4.makeSearchChange(change);
				break;
			case filtercalled.MAKESEARCH:
				_this4.filterAfterSearch(change); // search button pressed!
				break;
		}
		//	this.setState({ channels: this.channels });
	};

	this.setDisplayAllDescriptionsTrue = function (textSearch) {
		var value = _this4.showAllDescrRef.current.MDComponent.checked;
		if (!value) _this4.showAllDescrRef.current.MDComponent.checked = true;
		/*
  this.setState({ bDisplayAllDescriptions: true, 
  bSearchButtonClicked: textSearch !== undefined || textSearch !== null 
  || textSearch.trim().length !== 0 ? true : false,
  textSearch: textSearch !== undefined || textSearch !== null 
  || textSearch.trim().length !== 0 ? textSearch : null });
  console.log("setDisplayAllDescriptionsTrue");
  console.log(this.state);
  */
	};
}, Amppari__temp);

/*
					<Formfield>
							<div class={style.cardHeader}>Ohjelmatyyppi<space>     </space>
							  <Select 
									selectedIndex={this.state.selectedTyyppiinindex}
									preselected outlined 
									onChange={(e)=>{
										console.log("e.target.target");
										console.log(e.target.text);
										const ind = e.target.selectedIndex;
										const selected = this.arr_selecttyyppi_items[e.target.selectedIndex];
										let changed ={};
										changed.ind = ind;
										changed.selected = selected;
										this.filterWhenUIControlsHasBeenChanged(filtercalled.PROGRAMTYPE, changed);
										this.setState({ selectedTyyppiinindex: ind,
											selectedtyyppi: selected,
											 channels: this.channels,
											 selectedchannelindex: 0
											});					

									}}>
									{selecttyyppi_items}
							</Select>
						    </div>
						</Formfield>
*/


// CONCATENATED MODULE: ./routes/amppari/AmppariRoute.js


function AmppariRoute__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AmppariRoute__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function AmppariRoute__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// import Category from './Category';
// import GridOrList from './GridOrList';


// import StaticFunctions from '../../utils/StaticFunctions';

var AmppariRoute_AmppariRoute = function (_Component) {
	AmppariRoute__inherits(AmppariRoute, _Component);

	function AmppariRoute(props) {
		AmppariRoute__classCallCheck(this, AmppariRoute);

		var _this = AmppariRoute__possibleConstructorReturn(this, _Component.call(this, props));

		_this.removelisteners = function () {};

		if (utils_Config.bDebug) {
			console.log("AmppariRoute.js");
			console.log("props");
			console.log(props);
		}

		_this.state = {
			errmsg: null
		};

		return _this;
	}

	AmppariRoute.prototype.componentDidMount = function componentDidMount() {
		if (utils_Config.bDebug) console.log("componentDidMount 1");
		// this.fetchProgCategories();		
	};

	/*
 	'Origin': 'localhost:8080',
 		'User-Agent': 'curl/7.55.1',
 		'Host': 'external.api.yle.fi',
 		'Access-Control-Allow-Origin': '*',
 		'Access-Control-Allow-Credentials': true,
 		'Cross-Origin-Resource-Policy': 'cross-origin',
 		'Access-Control-Allow-Methods': 'GET,OPTIONS',
 		'Access-Control-Allow-Headers': 'Content-Type'
 */

	AmppariRoute.prototype.render = function render(props, state) {

		return Object(preact_min["h"])(
			'div',
			{ 'class': amppari_style_default.a.home + ' page' },
			Object(preact_min["h"])(
				Card_default.a,
				null,
				Object(preact_min["h"])(Amppari_Amppari, { store: props.store }),
				Object(preact_min["h"])(
					'div',
					{ style: { "background-color": 'red', color: "yellow" } },
					state.errmsg
				)
			)
		);
	};

	return AmppariRoute;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';





// import YleHtml from '../components/ylehtml/YleHtml';



// import TelkkuRoute from '../routes/programs/TelkkuRoute';

// import { useMediaQuery } from 'react-responsive';

var app__ref = Object(preact_min["h"])(profile_Profile, { path: '/profile/', user: 'me' });

var app__ref2 = Object(preact_min["h"])(profile_Profile, { path: '/profile/:user' });

var app__ref3 = Object(preact_min["h"])(_04_NotFound, { 'default': true });

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App(props) {
		app__classCallCheck(this, App);

		var _this = app__possibleConstructorReturn(this, _Component.call(this, props));

		_this.unsubscribelistener = null;
		_this.ctrlYleRef = null;
		_this.ctrlTelkkuRef = null;
		_this.ctrlHtmlTelkkuRef = null;
		_this.ctrlAmppariRef = null;
		_this.ctrlHtmlAmppariRef = null;

		_this.handleRoute = function (e) {

			switch (e.url) {
				case '/':
					_this.currentProgsourceCntrl = _this.ctrlYleRef;break;
				case '/telkku':
					_this.currentProgsourceCntrl = _this.ctrlTelkkuRef;break;
				case '/htmltelkku':
					_this.currentProgsourceCntrl = _this.ctrlHtmlTelkkuRef;break;
				case '/amppari':
					_this.currentProgsourceCntrl = _this.ctrlAmppariRef;break;
				case '/htmlamppari':
					_this.currentProgsourceCntrl = _this.ctrlHtmlAmppariRef;break;
				default:
					_this.currentProgsourceCntrl = _this.ctrlYleRef;break;
			}
			_this.setState({
				currentUrl: e.url
			});
		};

		_this.state = {
			yleapiparams: '?app_id=' + utils_Config.yleapi + "&app_key=" + utils_Config.ylekey,
			currentUrl: null,
			currentProgsourceCntrl: null
		};

		if (utils_Config.bDebug) {
			console.log("app state");
			console.log(_this.state);
		}

		console.log("Media.initializeScreenListeners()");
		//	Media.initializeScreenListeners();
		console.log("Media.screen");
		//	console.log(Media.screen);
		console.log("window.styleMedia.type");
		utils_Config.setOwnserveraddress(location.hostname, location.host);
		console.log(utils_Config);
		console.log("Config");

		_this.ctrlYleRef = Object(preact_min["createRef"])();
		_this.ctrlTelkkuRef = Object(preact_min["createRef"])();
		_this.ctrlHtmlTelkkuRef = Object(preact_min["createRef"])();
		_this.ctrlAmppariRef = Object(preact_min["createRef"])();
		_this.ctrlHtmlAmppariRef = Object(preact_min["createRef"])();

		/*
  var is_screen = window.matchMedia("screen").matches;
  console.log(is_screen);
  var is_speech = window.matchMedia("aural").matches;
  console.log("is_speech");
  console.log(is_speech);
  */
		return _this;
	}

	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	// 					<Home path="/" yleapiparams={state.yleapiparams} store={store} />

	/*
 				<YleHtml path="/" store={store} ref={this.ctrlYleRef} />
 				<Telkku path="/telkku" store={store} ref={this.ctrlTelkkuRef}/>;
 				<HtmlTelkku path="/htmltelkku" store={store} ref={this.ctrlHtmlTelkkuRef}/>;		
 				<Amppari path="/amppari" store={store} 
 				ref={this.ctrlAmppariRef}/>;
 				<HtmlAmppari path="/htmlamppari" store={store} 
 					ref={this.ctrlHtmlAmppariRef}/>
 */

	App.prototype.render = function render(props, state) {
		return Object(preact_min["h"])(
			Provider,
			{ store: utils_store },
			Object(preact_min["h"])(
				'div',
				{ id: 'app' },
				Object(preact_min["h"])(header_Header, { selectedRoute: this.state.currentUrl, store: utils_store,
					currentProgsourceCntrl: state.currentProgsourceCntrl }),
				Object(preact_min["h"])(
					preact_router_es_Router,
					{ onChange: this.handleRoute },
					Object(preact_min["h"])(YleRoute_YleRoute, { path: '/', store: utils_store, ref: this.ctrlYleRef }),
					Object(preact_min["h"])(TelkkuRoute_TelkkuRoute, { path: '/telkku', store: utils_store,
						ref: this.ctrlTelkkuRef }),
					Object(preact_min["h"])(AmppariRoute_AmppariRoute, { path: '/amppari', store: utils_store,
						ref: this.ctrlAmppariRef }),
					app__ref,
					app__ref2,
					app__ref3
				)
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js
// Must be the first import
if (false) {
    // Must use require here as import statements are only allowed
    // to exist at the top of a file.
    require("preact/debug");
}




/* harmony default export */ var index_0 = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "JtzT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dialog = exports.DialogFooterButton = exports.DialogFooter = exports.DialogBody = exports.DialogHeader = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _typeof2 = _interopRequireDefault(__webpack_require__("b9XL"));

var _dialog = __webpack_require__("5sRW");

var _bindDecorator = __webpack_require__("gKs0");

var _preact = __webpack_require__("KM04");

var _MaterialComponent5 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Button2 = __webpack_require__("7/cg");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogHeader =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(DialogHeader, _MaterialComponent);

  function DialogHeader() {
    var _this;

    (0, _classCallCheck2.default)(this, DialogHeader);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DialogHeader).apply(this, arguments));
    _this.componentName = 'dialog__header';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(DialogHeader, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("header", _extends({}, props), (0, _preact.h)("h2", {
        className: "mdc-dialog__header__title"
      }, props.children));
    }
  }]);
  return DialogHeader;
}(_MaterialComponent5.default);

exports.DialogHeader = DialogHeader;

__decorate([_bindDecorator.bind], DialogHeader.prototype, "materialDom", null);

var DialogBody =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(DialogBody, _MaterialComponent2);

  function DialogBody() {
    var _this2;

    (0, _classCallCheck2.default)(this, DialogBody);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DialogBody).apply(this, arguments));
    _this2.componentName = 'dialog__body';
    _this2.mdcProps = ['scrollable'];
    return _this2;
  }

  (0, _createClass2.default)(DialogBody, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("section", _extends({}, props), props.children);
    }
  }]);
  return DialogBody;
}(_MaterialComponent5.default);

exports.DialogBody = DialogBody;

__decorate([_bindDecorator.bind], DialogBody.prototype, "materialDom", null);

var DialogFooter =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(DialogFooter, _MaterialComponent3);

  function DialogFooter() {
    var _this3;

    (0, _classCallCheck2.default)(this, DialogFooter);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DialogFooter).apply(this, arguments));
    _this3.componentName = 'dialog__footer';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(DialogFooter, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("footer", _extends({}, props), props.children);
    }
  }]);
  return DialogFooter;
}(_MaterialComponent5.default);

exports.DialogFooter = DialogFooter;

__decorate([_bindDecorator.bind], DialogFooter.prototype, "materialDom", null);

var DialogFooterButton =
/*#__PURE__*/
function (_Button) {
  (0, _inherits2.default)(DialogFooterButton, _Button);

  function DialogFooterButton() {
    var _this4;

    (0, _classCallCheck2.default)(this, DialogFooterButton);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DialogFooterButton).apply(this, arguments));
    _this4.componentName = 'dialog__footer__button';
    _this4.mdcProps = ['cancel', 'accept'];
    return _this4;
  }

  (0, _createClass2.default)(DialogFooterButton, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("button", _extends({}, props, {
        className: "mdc-button",
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return DialogFooterButton;
}(_Button2.Button);

exports.DialogFooterButton = DialogFooterButton;

__decorate([_bindDecorator.bind], DialogFooterButton.prototype, "materialDom", null);

var Dialog =
/*#__PURE__*/
function (_MaterialComponent4) {
  (0, _inherits2.default)(Dialog, _MaterialComponent4);

  function Dialog() {
    var _this5;

    (0, _classCallCheck2.default)(this, Dialog);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Dialog).apply(this, arguments));
    _this5.componentName = 'dialog';
    _this5.mdcProps = [];
    return _this5;
  }

  (0, _createClass2.default)(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Dialog.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _dialog.MDCDialog(this.control);
        this.MDComponent.listen('MDCDialog:accept', this.onAccept);
        this.MDComponent.listen('MDCDialog:cancel', this.onCancel);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Dialog.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.unlisten('MDCDialog:accept', this.onAccept);
        this.MDComponent.unlisten('MDCDialog:cancel', this.onCancel);
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "onAccept",
    value: function onAccept(e) {
      if (this.props.onAccept) {
        this.props.onAccept(e);
      }
    }
  }, {
    key: "onCancel",
    value: function onCancel(e) {
      if (this.props.onCancel) {
        this.props.onCancel(e);
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("dialog", _extends({
        role: 'alertdialog',
        ref: this.setControlRef
      }, props), (0, _preact.h)("div", {
        className: "mdc-dialog__surface"
      }, props.children), (0, _preact.h)("div", {
        className: "mdc-dialog__backdrop"
      }));
    }
  }]);
  return Dialog;
}(_MaterialComponent5.default);

exports.Dialog = Dialog;

__decorate([_bindDecorator.bind], Dialog.prototype, "onAccept", null);

__decorate([_bindDecorator.bind], Dialog.prototype, "onCancel", null);

var default_1 =
/*#__PURE__*/
function (_Dialog) {
  (0, _inherits2.default)(default_1, _Dialog);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Dialog);

exports.default = default_1;
default_1.Header = DialogHeader;
default_1.Body = DialogBody;
default_1.Footer = DialogFooter;
default_1.FooterButton = DialogFooterButton;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "K5Tb":
/***/ (function(module, exports) {

module.exports = extend;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
}

/***/ }),

/***/ "KM04":
/***/ (function(module, exports) {

!function () {
  var n,
      l,
      u,
      t,
      i,
      o,
      r,
      f = {},
      e = [],
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n, l) {
    for (var u in l) {
      n[u] = l[u];
    }return n;
  }function s(n) {
    var l = n.parentNode;l && l.removeChild(n);
  }function h(n, l, u) {
    var t,
        i,
        o,
        r = arguments,
        f = {};for (o in l) {
      "key" == o ? t = l[o] : "ref" == o ? i = l[o] : f[o] = l[o];
    }if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) {
      u.push(r[o]);
    }if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) {
      void 0 === f[o] && (f[o] = n.defaultProps[o]);
    }return v(n, f, t, i, null);
  }function v(l, u, t, i, o) {
    var r = { type: l, props: u, key: t, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o ? ++n.__v : o };return null != n.vnode && n.vnode(r), r;
  }function y(n) {
    return n.children;
  }function d(n, l) {
    this.props = n, this.context = l;
  }function p(n, l) {
    if (null == l) return n.__ ? p(n.__, n.__.__k.indexOf(n) + 1) : null;for (var u; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    }return "function" == typeof n.type ? p(n) : null;
  }function _(n) {
    var l, u;if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
        if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;break;
        }
      }return _(n);
    }
  }function m(l) {
    (!l.__d && (l.__d = !0) && u.push(l) && !k.__r++ || i !== n.debounceRendering) && ((i = n.debounceRendering) || t)(k);
  }function k() {
    for (var n; k.__r = u.length;) {
      n = u.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), u = [], n.some(function (n) {
        var l, u, t, i, o, r;n.__d && (o = (i = (l = n).__v).__e, (r = l.__P) && (u = [], (t = a({}, i)).__v = i.__v + 1, $(r, i, t, l.__n, void 0 !== r.ownerSVGElement, null != i.__h ? [o] : null, u, null == o ? p(i) : o, i.__h), H(u, i), i.__e != o && _(i)));
      });
    }
  }function b(n, l, u, t, i, o, r, c, a, s) {
    var h,
        d,
        _,
        m,
        k,
        b,
        C,
        x = t && t.__k || e,
        A = x.length;for (u.__k = [], h = 0; h < l.length; h++) {
      if (null != (m = u.__k[h] = null == (m = l[h]) || "boolean" == typeof m ? null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? v(null, m, null, null, m) : Array.isArray(m) ? v(y, { children: m }, null, null, null) : m.__b > 0 ? v(m.type, m.props, m.key, null, m.__v) : m)) {
        if (m.__ = u, m.__b = u.__b + 1, null === (_ = x[h]) || _ && m.key == _.key && m.type === _.type) x[h] = void 0;else for (d = 0; d < A; d++) {
          if ((_ = x[d]) && m.key == _.key && m.type === _.type) {
            x[d] = void 0;break;
          }_ = null;
        }$(n, m, _ = _ || f, i, o, r, c, a, s), k = m.__e, (d = m.ref) && _.ref != d && (C || (C = []), _.ref && C.push(_.ref, null, m), C.push(d, m.__c || k, m)), null != k ? (null == b && (b = k), "function" == typeof m.type && null != m.__k && m.__k === _.__k ? m.__d = a = g(m, a, n) : a = w(n, m, _, x, k, a), s || "option" !== u.type ? "function" == typeof u.type && (u.__d = a) : n.value = "") : a && _.__e == a && a.parentNode != n && (a = p(_));
      }
    }for (u.__e = b, h = A; h--;) {
      null != x[h] && ("function" == typeof u.type && null != x[h].__e && x[h].__e == u.__d && (u.__d = p(t, h + 1)), j(x[h], x[h]));
    }if (C) for (h = 0; h < C.length; h++) {
      T(C[h], C[++h], C[++h]);
    }
  }function g(n, l, u) {
    var t, i;for (t = 0; t < n.__k.length; t++) {
      (i = n.__k[t]) && (i.__ = n, l = "function" == typeof i.type ? g(i, l, u) : w(u, i, i, n.__k, i.__e, l));
    }return l;
  }function w(n, l, u, t, i, o) {
    var r, f, e;if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || i != o || null == i.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(i), r = null;else {
      for (f = o, e = 0; (f = f.nextSibling) && e < t.length; e += 2) {
        if (f == i) break n;
      }n.insertBefore(i, o), r = o;
    }return void 0 !== r ? r : i.nextSibling;
  }function C(n, l, u, t, i) {
    var o;for (o in u) {
      "children" === o || "key" === o || o in l || A(n, o, null, u[o], t);
    }for (o in l) {
      i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || A(n, o, l[o], u[o], t);
    }
  }function x(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
  }function A(n, l, u, t, i) {
    var o;n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) {
          u && l in u || x(n.style, l, "");
        }if (u) for (l in u) {
          t && u[l] === t[l] || x(n.style, l, u[l]);
        }
      }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? E : P, o) : n.removeEventListener(l, o ? E : P, o);else if ("dangerouslySetInnerHTML" !== l) {
      if (i) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
        n[l] = null == u ? "" : u;break n;
      } catch (n) {}"function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
    }
  }function P(l) {
    this.l[l.type + !1](n.event ? n.event(l) : l);
  }function E(l) {
    this.l[l.type + !0](n.event ? n.event(l) : l);
  }function $(l, u, t, i, o, r, f, e, c) {
    var s,
        h,
        v,
        p,
        _,
        m,
        k,
        g,
        w,
        C,
        x,
        A = u.type;if (void 0 !== u.constructor) return null;null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (s = n.__b) && s(u);try {
      n: if ("function" == typeof A) {
        if (g = u.props, w = (s = A.contextType) && i[s.__c], C = s ? w ? w.props.value : s.__ : i, t.__c ? k = (h = u.__c = t.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? u.__c = h = new A(g, C) : (u.__c = h = new d(g, C), h.constructor = A, h.render = z), w && w.sub(h), h.props = g, h.state || (h.state = {}), h.context = C, h.__n = i, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != A.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, A.getDerivedStateFromProps(g, h.__s))), p = h.props, _ = h.state, v) null == A.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == A.getDerivedStateFromProps && g !== p && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, C), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, C) || u.__v === t.__v) {
            h.props = g, h.state = h.__s, u.__v !== t.__v && (h.__d = !1), h.__v = u, u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), h.__h.length && f.push(h);break n;
          }null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, C), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(p, _, m);
          });
        }h.context = C, h.props = g, h.state = h.__s, (s = n.__r) && s(u), h.__d = !1, h.__v = u, h.__P = l, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (i = a(a({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (m = h.getSnapshotBeforeUpdate(p, _)), x = null != s && s.type === y && null == s.key ? s.props.children : s, b(l, Array.isArray(x) ? x : [x], u, t, i, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), k && (h.__E = h.__ = null), h.__e = !1;
      } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = I(t.__e, u, t, i, o, r, f, c);(s = n.diffed) && s(u);
    } catch (l) {
      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), n.__e(l, u, t);
    }
  }function H(l, u) {
    n.__c && n.__c(u, l), l.some(function (u) {
      try {
        l = u.__h, u.__h = [], l.some(function (n) {
          n.call(u);
        });
      } catch (l) {
        n.__e(l, u.__v);
      }
    });
  }function I(n, l, u, t, i, o, r, c) {
    var a,
        h,
        v,
        y,
        d = u.props,
        p = l.props,
        _ = l.type,
        m = 0;if ("svg" === _ && (i = !0), null != o) for (; m < o.length; m++) {
      if ((a = o[m]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
        n = a, o[m] = null;break;
      }
    }if (null == n) {
      if (null === _) return document.createTextNode(p);n = i ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, p.is && p), o = null, c = !1;
    }if (null === _) d === p || c && n.data === p || (n.data = p);else {
      if (o = o && e.slice.call(n.childNodes), h = (d = u.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != o) for (d = {}, y = 0; y < n.attributes.length; y++) {
          d[n.attributes[y].name] = n.attributes[y].value;
        }(v || h) && (v && (h && v.__html == h.__html || v.__html === n.innerHTML) || (n.innerHTML = v && v.__html || ""));
      }if (C(n, p, d, i, c), v) l.__k = [];else if (m = l.props.children, b(n, Array.isArray(m) ? m : [m], l, u, t, i && "foreignObject" !== _, o, r, n.firstChild, c), null != o) for (m = o.length; m--;) {
        null != o[m] && s(o[m]);
      }c || ("value" in p && void 0 !== (m = p.value) && (m !== n.value || "progress" === _ && !m) && A(n, "value", m, d.value, !1), "checked" in p && void 0 !== (m = p.checked) && m !== n.checked && A(n, "checked", m, d.checked, !1));
    }return n;
  }function T(l, u, t) {
    try {
      "function" == typeof l ? l(u) : l.current = u;
    } catch (l) {
      n.__e(l, t);
    }
  }function j(l, u, t) {
    var i, o, r;if (n.unmount && n.unmount(l), (i = l.ref) && (i.current && i.current !== l.__e || T(i, null, u)), t || "function" == typeof l.type || (t = null != (o = l.__e)), l.__e = l.__d = void 0, null != (i = l.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (l) {
        n.__e(l, u);
      }i.base = i.__P = null;
    }if (i = l.__k) for (r = 0; r < i.length; r++) {
      i[r] && j(i[r], u, t);
    }null != o && s(o);
  }function z(n, l, u) {
    return this.constructor(n, u);
  }function F(l, u, t) {
    var i, o, r;n.__ && n.__(l, u), o = (i = "function" == typeof t) ? null : t && t.__k || u.__k, r = [], $(u, l = (!i && t || u).__k = h(y, null, [l]), o || f, f, void 0 !== u.ownerSVGElement, !i && t ? [t] : o ? null : u.firstChild ? e.slice.call(u.childNodes) : null, r, !i && t ? t : o ? o.__e : u.firstChild, i), H(r, l);
  }n = { __e: function __e(n, l) {
      for (var u, t, i; l = l.__;) {
        if ((u = l.__c) && !u.__) try {
          if ((t = u.constructor) && null != t.getDerivedStateFromError && (u.setState(t.getDerivedStateFromError(n)), i = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), i = u.__d), i) return u.__E = u;
        } catch (l) {
          n = l;
        }
      }throw n;
    }, __v: 0 }, l = function l(n) {
    return null != n && void 0 === n.constructor;
  }, d.prototype.setState = function (n, l) {
    var u;u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this));
  }, d.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
  }, d.prototype.render = y, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, o = 0, r = { render: F, hydrate: function n(l, u) {
      F(l, u, n);
    }, createElement: h, h: h, Fragment: y, createRef: function createRef() {
      return { current: null };
    }, isValidElement: l, Component: d, cloneElement: function cloneElement(n, l, u) {
      var t,
          i,
          o,
          r = arguments,
          f = a({}, n.props);for (o in l) {
        "key" == o ? t = l[o] : "ref" == o ? i = l[o] : f[o] = l[o];
      }if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) {
        u.push(r[o]);
      }return null != u && (f.children = u), v(n.type, f, t || n.key, i || n.ref, null);
    }, createContext: function createContext(n, l) {
      var u = { __c: l = "__cC" + o++, __: n, Consumer: function Consumer(n, l) {
          return n.children(l);
        }, Provider: function Provider(n) {
          var u, t;return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
            return t;
          }, this.shouldComponentUpdate = function (n) {
            this.props.value !== n.value && u.some(m);
          }, this.sub = function (n) {
            u.push(n);var l = n.componentWillUnmount;n.componentWillUnmount = function () {
              u.splice(u.indexOf(n), 1), l && l.call(n);
            };
          }), n.children;
        } };return u.Provider.__ = u.Consumer.contextType = u;
    }, toChildArray: function n(l, u) {
      return u = u || [], null == l || "boolean" == typeof l || (Array.isArray(l) ? l.some(function (l) {
        n(l, u);
      }) : u.push(l)), u;
    }, options: n }, typeof module < "u" ? module.exports = r : self.preact = r;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "MeGi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var Icon =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Icon, _MaterialComponent);

  function Icon() {
    var _this;

    (0, _classCallCheck2.default)(this, Icon);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
    _this.componentName = 'icon';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(Icon, [{
    key: "materialDom",
    value: function materialDom(props) {
      var classes = ['material-icons']; // CardActionIcon sends className

      if (props.className) {
        classes.push(props.className);
      }

      return (0, _preact.h)("i", _extends({}, props, {
        className: classes.join(' ')
      }), props.children);
    }
  }]);
  return Icon;
}(_MaterialComponent2.default);

exports.Icon = Icon;
var _default = Icon;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "NFzA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTopAppBarAdapter = function () {
  function MDCTopAppBarAdapter() {
    _classCallCheck(this, MDCTopAppBarAdapter);
  }

  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  MDCTopAppBarAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */


  MDCTopAppBarAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns true if the root Element contains the given class.
   * @param {string} className
   * @return {boolean}
   */


  MDCTopAppBarAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Sets the specified inline style property on the root Element to the given value.
   * @param {string} property
   * @param {string} value
   */


  MDCTopAppBarAdapter.prototype.setStyle = function setStyle(property, value) {};

  /**
   * Gets the height of the top app bar.
   * @return {number}
   */


  MDCTopAppBarAdapter.prototype.getTopAppBarHeight = function getTopAppBarHeight() {};

  /**
   * Registers an event handler on the navigation icon element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  MDCTopAppBarAdapter.prototype.registerNavigationIconInteractionHandler = function registerNavigationIconInteractionHandler(type, handler) {};

  /**
   * Deregisters an event handler on the navigation icon element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  MDCTopAppBarAdapter.prototype.deregisterNavigationIconInteractionHandler = function deregisterNavigationIconInteractionHandler(type, handler) {};

  /**
   * Emits an event when the navigation icon is clicked.
   */


  MDCTopAppBarAdapter.prototype.notifyNavigationIconClicked = function notifyNavigationIconClicked() {};

  /** @param {function(!Event)} handler */


  MDCTopAppBarAdapter.prototype.registerScrollHandler = function registerScrollHandler(handler) {};

  /** @param {function(!Event)} handler */


  MDCTopAppBarAdapter.prototype.deregisterScrollHandler = function deregisterScrollHandler(handler) {};

  /** @param {function(!Event)} handler */


  MDCTopAppBarAdapter.prototype.registerResizeHandler = function registerResizeHandler(handler) {};

  /** @param {function(!Event)} handler */


  MDCTopAppBarAdapter.prototype.deregisterResizeHandler = function deregisterResizeHandler(handler) {};

  /** @return {number} */


  MDCTopAppBarAdapter.prototype.getViewportScrollY = function getViewportScrollY() {};

  /** @return {number} */


  MDCTopAppBarAdapter.prototype.getTotalActionItems = function getTotalActionItems() {};

  return MDCTopAppBarAdapter;
}();

/* harmony default export */ var top_app_bar_adapter = (MDCTopAppBarAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed'
};

/** @enum {number} */
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};

/** @enum {string} */
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};


// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCTopAppBarAdapter>}
 */

var foundation_MDCTopAppBarBaseFoundation = function (_MDCFoundation) {
  _inherits(MDCTopAppBarBaseFoundation, _MDCFoundation);

  _createClass(MDCTopAppBarBaseFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }

    /**
     * {@see MDCTopAppBarAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTopAppBarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTopAppBarAdapter} */{
          hasClass: function hasClass() /* className: string */{},
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setStyle: function setStyle() /* property: string, value: string */{},
          getTopAppBarHeight: function getTopAppBarHeight() {},
          registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          notifyNavigationIconClicked: function notifyNavigationIconClicked() {},
          registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
          deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          getViewportScrollY: function getViewportScrollY() {
            return (/* number */0
            );
          },
          getTotalActionItems: function getTotalActionItems() {
            return (/* number */0
            );
          }
        }
      );
    }

    /**
     * @param {!MDCTopAppBarAdapter} adapter
     */

  }]);

  function MDCTopAppBarBaseFoundation( /** @type {!MDCTopAppBarAdapter} */adapter) {
    foundation__classCallCheck(this, MDCTopAppBarBaseFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTopAppBarBaseFoundation.defaultAdapter, adapter)));

    _this.navClickHandler_ = function () {
      return _this.adapter_.notifyNavigationIconClicked();
    };

    _this.scrollHandler_ = function () {};
    return _this;
  }

  MDCTopAppBarBaseFoundation.prototype.init = function init() {
    this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
  };

  MDCTopAppBarBaseFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
  };

  MDCTopAppBarBaseFoundation.prototype.initScrollHandler = function initScrollHandler() {
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  };

  MDCTopAppBarBaseFoundation.prototype.destroyScrollHandler = function destroyScrollHandler() {
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  };

  return MDCTopAppBarBaseFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var top_app_bar_foundation = (foundation_MDCTopAppBarBaseFoundation);
// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/fixed/foundation.js
function fixed_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCTopAppBarFoundation<!MDCFixedTopAppBarFoundation>}
 * @final
 */

var foundation_MDCFixedTopAppBarFoundation = function (_MDCTopAppBarFoundati) {
  foundation__inherits(MDCFixedTopAppBarFoundation, _MDCTopAppBarFoundati);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCFixedTopAppBarFoundation(adapter) {
    fixed_foundation__classCallCheck(this, MDCFixedTopAppBarFoundation);

    /** State variable for the previous scroll iteration top app bar state */
    var _this = foundation__possibleConstructorReturn(this, _MDCTopAppBarFoundati.call(this, adapter));

    _this.wasScrolled_ = false;

    _this.scrollHandler_ = function () {
      return _this.fixedScrollHandler_();
    };
    return _this;
  }

  MDCFixedTopAppBarFoundation.prototype.init = function init() {
    _MDCTopAppBarFoundati.prototype.init.call(this);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  };

  MDCFixedTopAppBarFoundation.prototype.destroy = function destroy() {
    _MDCTopAppBarFoundati.prototype.destroy.call(this);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  };

  /**
   * Scroll handler for applying/removing the modifier class
   * on the fixed top app bar.
   */


  MDCFixedTopAppBarFoundation.prototype.fixedScrollHandler_ = function fixedScrollHandler_() {
    var currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.wasScrolled_) {
        this.adapter_.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = false;
      }
    } else {
      if (!this.wasScrolled_) {
        this.adapter_.addClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled_ = true;
      }
    }
  };

  return MDCFixedTopAppBarFoundation;
}(top_app_bar_foundation);

/* harmony default export */ var fixed_foundation = (foundation_MDCFixedTopAppBarFoundation);
// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/short/foundation.js
function short_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function short_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function short_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCShortTopAppBarFoundation>}
 * @final
 */

var foundation_MDCShortTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  short_foundation__inherits(MDCShortTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCShortTopAppBarFoundation(adapter) {
    short_foundation__classCallCheck(this, MDCShortTopAppBarFoundation);

    // State variable for the current top app bar state
    var _this = short_foundation__possibleConstructorReturn(this, _MDCTopAppBarBaseFoun.call(this, adapter));

    _this.isCollapsed = false;

    _this.scrollHandler_ = function () {
      return _this.shortAppBarScrollHandler_();
    };
    return _this;
  }

  MDCShortTopAppBarFoundation.prototype.init = function init() {
    _MDCTopAppBarBaseFoun.prototype.init.call(this);
    var isAlwaysCollapsed = this.adapter_.hasClass(cssClasses.SHORT_COLLAPSED_CLASS);

    if (this.adapter_.getTotalActionItems() > 0) {
      this.adapter_.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    }

    if (!isAlwaysCollapsed) {
      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.shortAppBarScrollHandler_();
    }
  };

  MDCShortTopAppBarFoundation.prototype.destroy = function destroy() {
    _MDCTopAppBarBaseFoun.prototype.destroy.call(this);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  };

  /**
   * Scroll handler for applying/removing the collapsed modifier class
   * on the short top app bar.
   * @private
   */


  MDCShortTopAppBarFoundation.prototype.shortAppBarScrollHandler_ = function shortAppBarScrollHandler_() {
    var currentScroll = this.adapter_.getViewportScrollY();

    if (currentScroll <= 0) {
      if (this.isCollapsed) {
        this.adapter_.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed = false;
      }
    } else {
      if (!this.isCollapsed) {
        this.adapter_.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
        this.isCollapsed = true;
      }
    }
  };

  return MDCShortTopAppBarFoundation;
}(top_app_bar_foundation);

/* harmony default export */ var short_foundation = (foundation_MDCShortTopAppBarFoundation);
// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/standard/foundation.js
function standard_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function standard_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function standard_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





var INITIAL_VALUE = 0;
/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCTopAppBarFoundation>}
 * @final
 */

var foundation_MDCTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  standard_foundation__inherits(MDCTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCTopAppBarFoundation(adapter) {
    standard_foundation__classCallCheck(this, MDCTopAppBarFoundation);

    /**
     * Used for diffs of current scroll position vs previous scroll position
     * @private {number}
     */
    var _this = standard_foundation__possibleConstructorReturn(this, _MDCTopAppBarBaseFoun.call(this, adapter));

    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();

    /**
     * Used to verify when the top app bar is completely showing or completely hidden
     * @private {number}
     */
    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();

    /**
     * wasDocked_ is used to indicate if the top app bar was docked in the previous
     * scroll handler iteration.
     * @private {boolean}
     */
    _this.wasDocked_ = true;

    /**
     * isDockedShowing_ is used to indicate if the top app bar is docked in the fully
     * shown position.
     * @private {boolean}
     */
    _this.isDockedShowing_ = true;

    /**
     * Variable for current scroll position of the top app bar
     * @private {number}
     */
    _this.currentAppBarOffsetTop_ = 0;

    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     * @private {boolean} */
    _this.isCurrentlyBeingResized_ = false;

    /**
     * The timeout that's used to throttle the resize events
     * @private {number}
     */
    _this.resizeThrottleId_ = INITIAL_VALUE;

    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     * @private {number}
     */
    _this.resizeDebounceId_ = INITIAL_VALUE;

    _this.scrollHandler_ = function () {
      return _this.topAppBarScrollHandler_();
    };
    _this.resizeHandler_ = function () {
      return _this.topAppBarResizeHandler_();
    };
    return _this;
  }

  MDCTopAppBarFoundation.prototype.init = function init() {
    _MDCTopAppBarBaseFoun.prototype.init.call(this);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  };

  MDCTopAppBarFoundation.prototype.destroy = function destroy() {
    _MDCTopAppBarBaseFoun.prototype.destroy.call(this);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.setStyle('top', '');
  };

  /**
   * Function to determine if the DOM needs to update.
   * @return {boolean}
   * @private
   */


  MDCTopAppBarFoundation.prototype.checkForUpdate_ = function checkForUpdate_() {
    var offscreenBoundaryTop = -this.topAppBarHeight_;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

    // If it's partially showing, it can't be docked.
    if (partiallyShowing) {
      this.wasDocked_ = false;
    } else {
      // Not previously docked and not partially showing, it's now docked.
      if (!this.wasDocked_) {
        this.wasDocked_ = true;
        return true;
      } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
        this.isDockedShowing_ = hasAnyPixelsOnscreen;
        return true;
      }
    }

    return partiallyShowing;
  };

  /**
   * Function to move the top app bar if needed.
   * @private
   */


  MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function moveTopAppBar_() {
    if (this.checkForUpdate_()) {
      // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
      // so the top app bar doesn't show if the window resizes and the new height > the old height.
      var offset = this.currentAppBarOffsetTop_;
      if (Math.abs(offset) >= this.topAppBarHeight_) {
        offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
      }

      this.adapter_.setStyle('top', offset + 'px');
    }
  };

  /**
   * Scroll handler for the default scroll behavior of the top app bar.
   * @private
   */


  MDCTopAppBarFoundation.prototype.topAppBarScrollHandler_ = function topAppBarScrollHandler_() {
    var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition_;
    this.lastScrollPosition_ = currentScrollPosition;

    // If the window is being resized the lastScrollPosition_ needs to be updated but the
    // current scroll of the top app bar should stay in the same position.
    if (!this.isCurrentlyBeingResized_) {
      this.currentAppBarOffsetTop_ -= diff;

      if (this.currentAppBarOffsetTop_ > 0) {
        this.currentAppBarOffsetTop_ = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
        this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
      }

      this.moveTopAppBar_();
    }
  };

  /**
   * Top app bar resize handler that throttle/debounce functions that execute updates.
   * @private
   */


  MDCTopAppBarFoundation.prototype.topAppBarResizeHandler_ = function topAppBarResizeHandler_() {
    var _this2 = this;

    // Throttle resize events 10 p/s
    if (!this.resizeThrottleId_) {
      this.resizeThrottleId_ = setTimeout(function () {
        _this2.resizeThrottleId_ = INITIAL_VALUE;
        _this2.throttledResizeHandler_();
      }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    this.isCurrentlyBeingResized_ = true;

    if (this.resizeDebounceId_) {
      clearTimeout(this.resizeDebounceId_);
    }

    this.resizeDebounceId_ = setTimeout(function () {
      _this2.topAppBarScrollHandler_();
      _this2.isCurrentlyBeingResized_ = false;
      _this2.resizeDebounceId_ = INITIAL_VALUE;
    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };

  /**
   * Throttled function that updates the top app bar scrolled values if the
   * top app bar height changes.
   * @private
   */


  MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function throttledResizeHandler_() {
    var currentHeight = this.adapter_.getTopAppBarHeight();
    if (this.topAppBarHeight_ !== currentHeight) {
      this.wasDocked_ = false;

      // Since the top app bar has a different height depending on the screen width, this
      // will ensure that the top app bar remains in the correct location if
      // completely hidden and a resize makes the top app bar a different height.
      this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
      this.topAppBarHeight_ = currentHeight;
    }
    this.topAppBarScrollHandler_();
  };

  return MDCTopAppBarFoundation;
}(top_app_bar_foundation);

/* harmony default export */ var standard_foundation = (foundation_MDCTopAppBarFoundation);
// CONCATENATED MODULE: ../node_modules/@material/top-app-bar/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTopAppBar", function() { return top_app_bar_MDCTopAppBar; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTopAppBarBaseFoundation", function() { return top_app_bar_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTopAppBarFoundation", function() { return standard_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCFixedTopAppBarFoundation", function() { return fixed_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCShortTopAppBarFoundation", function() { return short_foundation; });
var top_app_bar__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function top_app_bar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function top_app_bar__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function top_app_bar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */










/**
 * @extends {MDCComponent<!MDCTopAppBarBaseFoundation>}
 * @final
 */

var top_app_bar_MDCTopAppBar = function (_MDCComponent) {
  top_app_bar__inherits(MDCTopAppBar, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTopAppBar() {
    top_app_bar__classCallCheck(this, MDCTopAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = top_app_bar__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.navIcon_;
    /** @type {?Array<MDCRipple>} */
    _this.iconRipples_;
    /** @type {Object} */
    _this.scrollTarget_;
    return _this;
  }

  MDCTopAppBar.prototype.initialize = function initialize() {
    var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return ripple["MDCRipple"].attachTo(el);
    };

    this.navIcon_ = this.root_.querySelector(strings.NAVIGATION_ICON_SELECTOR);

    // Get all icons in the toolbar and instantiate the ripples
    var icons = [].slice.call(this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR));
    if (this.navIcon_) {
      icons.push(this.navIcon_);
    }

    this.iconRipples_ = icons.map(function (icon) {
      var ripple = rippleFactory(icon);
      ripple.unbounded = true;
      return ripple;
    });
  };

  MDCTopAppBar.prototype.destroy = function destroy() {
    this.iconRipples_.forEach(function (iconRipple) {
      return iconRipple.destroy();
    });
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCTopAppBar.prototype.setScrollTarget = function setScrollTarget(target) {
    this.foundation_.destroyScrollHandler();
    this.scrollTarget_ = target;
    this.foundation_.initScrollHandler();
  };

  /**
   * @param {!Element} root
   * @return {!MDCTopAppBar}
   */


  MDCTopAppBar.attachTo = function attachTo(root) {
    return new MDCTopAppBar(root);
  };

  /**
   * @return {!MDCTopAppBarBaseFoundation}
   */


  MDCTopAppBar.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    /** @type {!MDCTopAppBarAdapter} */
    var adapter = /** @type {!MDCTopAppBarAdapter} */top_app_bar__extends({
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      setStyle: function setStyle(property, value) {
        return _this2.root_.style.setProperty(property, value);
      },
      getTopAppBarHeight: function getTopAppBarHeight() {
        return _this2.root_.clientHeight;
      },
      registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(evtType, handler) {
        if (_this2.navIcon_) {
          _this2.navIcon_.addEventListener(evtType, handler);
        }
      },
      deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(evtType, handler) {
        if (_this2.navIcon_) {
          _this2.navIcon_.removeEventListener(evtType, handler);
        }
      },
      notifyNavigationIconClicked: function notifyNavigationIconClicked() {
        _this2.emit(strings.NAVIGATION_EVENT, {});
      },
      registerScrollHandler: function registerScrollHandler(handler) {
        return _this2.scrollTarget_.addEventListener('scroll', handler);
      },
      deregisterScrollHandler: function deregisterScrollHandler(handler) {
        return _this2.scrollTarget_.removeEventListener('scroll', handler);
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getViewportScrollY: function getViewportScrollY() {
        return _this2.scrollTarget_[_this2.scrollTarget_ === window ? 'pageYOffset' : 'scrollTop'];
      },
      getTotalActionItems: function getTotalActionItems() {
        return _this2.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length;
      }
    });

    this.scrollTarget_ = window;

    /** @type {!MDCTopAppBarBaseFoundation} */
    var foundation = void 0;
    if (this.root_.classList.contains(cssClasses.SHORT_CLASS)) {
      foundation = new short_foundation(adapter);
    } else if (this.root_.classList.contains(cssClasses.FIXED_CLASS)) {
      foundation = new fixed_foundation(adapter);
    } else {
      foundation = new standard_foundation(adapter);
    }

    return foundation;
  };

  return MDCTopAppBar;
}(component["a" /* default */]);



/***/ }),

/***/ "OA4U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Checkbox = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _checkbox = __webpack_require__("8Efz");

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var Checkbox =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Checkbox, _MaterialComponent);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2.default)(this, Checkbox);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
    _this.componentName = 'checkbox';
    _this.mdcProps = ['disabled'];
    _this.mdcNotifyProps = ['checked', 'indeterminate', 'disabled'];
    return _this;
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Checkbox.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _checkbox.MDCCheckbox(this.control);
      }

      this.afterComponentDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Checkbox.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      return (0, _preact.h)("div", {
        ref: this.setControlRef
      }, (0, _preact.h)("input", _extends({
        type: "checkbox",
        className: "mdc-checkbox__native-control"
      }, allprops)), (0, _preact.h)("div", {
        className: "mdc-checkbox__background"
      }, (0, _preact.h)("svg", {
        version: "1.1",
        className: "mdc-checkbox__checkmark",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, (0, _preact.h)("path", {
        className: "mdc-checkbox__checkmark-path",
        fill: "none",
        stroke: "white",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })), (0, _preact.h)("div", {
        className: "mdc-checkbox__mixedmark"
      })));
    }
  }]);
  return Checkbox;
}(_MaterialComponent2.default);

exports.Checkbox = Checkbox;
var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Oyyg":
/***/ (function(module, exports) {

var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var regularTabbables = [];
  var orderedTabbables = [];

  var untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  if (!isNodeMatchingSelectorFocusable(node, untouchabilityChecker) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }
  return true;
}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  if (node.disabled || isHiddenInput(node) || untouchabilityChecker.isUntouchable(node)) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (var i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

  // Search for a cached result.
  var cached = find(this.cache, function (item) {
    return item === node;
  });
  if (cached) return cached[1];

  nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

  var result = false;

  if (nodeComputedStyle.display === 'none') {
    result = true;
  } else if (node.parentNode) {
    result = this.hasDisplayNone(node.parentNode);
  }

  this.cache.push([node, result]);

  return result;
};

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  var computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
};

module.exports = tabbable;

/***/ }),

/***/ "P8NW":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Q1yZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutGrid = exports.LayoutGridCell = exports.LayoutGridInner = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent4 = _interopRequireDefault(__webpack_require__("uc5p"));

var LayoutGridInner =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(LayoutGridInner, _MaterialComponent);

  function LayoutGridInner() {
    var _this;

    (0, _classCallCheck2.default)(this, LayoutGridInner);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGridInner).apply(this, arguments));
    _this.componentName = 'layout-grid__inner';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(LayoutGridInner, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return LayoutGridInner;
}(_MaterialComponent4.default);

exports.LayoutGridInner = LayoutGridInner;

var LayoutGridCell =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(LayoutGridCell, _MaterialComponent2);

  function LayoutGridCell() {
    var _this2;

    (0, _classCallCheck2.default)(this, LayoutGridCell);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGridCell).apply(this, arguments));
    _this2.componentName = 'layout-grid__cell';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(LayoutGridCell, [{
    key: "render",
    value: function render(props) {
      var element = (0, _get2.default)((0, _getPrototypeOf2.default)(LayoutGridCell.prototype), "render", this).call(this, props); // remove the extra attributes used for customising this element - keep the DOM clean

      Object.keys(LayoutGridCell.propsDict).forEach(function (key) {
        return (// @ts-ignore
          delete (element.props || element.attributes)[LayoutGridCell.propsDict[key]]
        );
      });
      return element;
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props, {
        className: LayoutGridCell.createClassName(props),
        ref: this.setControlRef
      }), props.children);
    }
  }], [{
    key: "createClassName",
    value: function createClassName(props) {
      var baseClass = 'mdc-layout-grid__cell--';
      var classes = [];

      if (props[LayoutGridCell.propsDict.cols]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.cols]));
      }

      if (props[LayoutGridCell.propsDict.desktop]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.desktop], "-desktop"));
      }

      if (props[LayoutGridCell.propsDict.tablet]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.tablet], "-tablet"));
      }

      if (props[LayoutGridCell.propsDict.phone]) {
        classes.push("".concat(baseClass, "span-").concat(props[LayoutGridCell.propsDict.phone], "-phone"));
      }

      if (props[LayoutGridCell.propsDict.order]) {
        classes.push("".concat(baseClass, "order-").concat(props[LayoutGridCell.propsDict.order]));
      }

      if (props[LayoutGridCell.propsDict.align]) {
        classes.push("".concat(baseClass, "align-").concat(props[LayoutGridCell.propsDict.align]));
      }

      return classes.join(' ');
    }
  }]);
  return LayoutGridCell;
}(_MaterialComponent4.default);

exports.LayoutGridCell = LayoutGridCell;
LayoutGridCell.propsDict = {
  align: 'align',
  cols: 'cols',
  desktop: 'desktopCols',
  order: 'order',
  phone: 'phoneCols',
  tablet: 'tabletCols'
};

var LayoutGrid =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(LayoutGrid, _MaterialComponent3);

  function LayoutGrid() {
    var _this3;

    (0, _classCallCheck2.default)(this, LayoutGrid);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutGrid).apply(this, arguments));
    _this3.componentName = 'layout-grid';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(LayoutGrid, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return LayoutGrid;
}(_MaterialComponent4.default);

exports.LayoutGrid = LayoutGrid;

var default_1 =
/*#__PURE__*/
function (_LayoutGrid) {
  (0, _inherits2.default)(default_1, _LayoutGrid);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(LayoutGrid);

exports.default = default_1;
default_1.Cell = LayoutGridCell;
default_1.Inner = LayoutGridInner;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "QEtG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__2TtjW","cardHeader":"cardHeader__1K1Zv","cardBody":"cardBody__2i4ZU"};

/***/ }),

/***/ "QTRl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(prop) {
  return "mdc-theme--".concat(prop, "-bg");
}
//# sourceMappingURL=generateThemeClass.js.map

/***/ }),

/***/ "RYBc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RbN6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// CONCATENATED MODULE: ../node_modules/@material/floating-label/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Floating Label.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the floating label into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCFloatingLabelAdapter = function () {
  function MDCFloatingLabelAdapter() {
    _classCallCheck(this, MDCFloatingLabelAdapter);
  }

  /**
   * Adds a class to the label element.
   * @param {string} className
   */
  MDCFloatingLabelAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the label element.
   * @param {string} className
   */


  MDCFloatingLabelAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns the width of the label element.
   * @return {number}
   */


  MDCFloatingLabelAdapter.prototype.getWidth = function getWidth() {};

  /**
   * Registers an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCFloatingLabelAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the root element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCFloatingLabelAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  return MDCFloatingLabelAdapter;
}();

/* harmony default export */ var adapter = (MDCFloatingLabelAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/floating-label/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake'
};


// CONCATENATED MODULE: ../node_modules/@material/floating-label/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
 * @final
 */

var foundation_MDCFloatingLabelFoundation = function (_MDCFoundation) {
  _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

  _createClass(MDCFloatingLabelFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return cssClasses;
    }

    /**
     * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCFloatingLabelAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCFloatingLabelAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          getWidth: function getWidth() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {}
        }
      );
    }

    /**
     * @param {!MDCFloatingLabelAdapter} adapter
     */

  }]);

  function MDCFloatingLabelFoundation(adapter) {
    foundation__classCallCheck(this, MDCFloatingLabelFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };
    return _this;
  }

  MDCFloatingLabelFoundation.prototype.init = function init() {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  /**
   * Returns the width of the label element.
   * @return {number}
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function getWidth() {
    return this.adapter_.getWidth();
  };

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake adds shake class if true,
   * otherwise removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function shake(shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  /**
   * Styles the label to float or dock.
   * @param {boolean} shouldFloat adds float class if true, otherwise remove
   * float and shake class to dock label.
   */


  MDCFloatingLabelFoundation.prototype.float = function float(shouldFloat) {
    var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  /**
   * Handles an interaction event on the root element.
   */


  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function handleShakeAnimationEnd_() {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var floating_label_foundation = (foundation_MDCFloatingLabelFoundation);
// CONCATENATED MODULE: ../node_modules/@material/floating-label/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return floating_label_MDCFloatingLabel; });
/* unused concated harmony import MDCFloatingLabelFoundation */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return floating_label_foundation; });
function floating_label__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function floating_label__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function floating_label__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
 * @final
 */

var floating_label_MDCFloatingLabel = function (_MDCComponent) {
  floating_label__inherits(MDCFloatingLabel, _MDCComponent);

  function MDCFloatingLabel() {
    floating_label__classCallCheck(this, MDCFloatingLabel);

    return floating_label__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCFloatingLabel}
   */
  MDCFloatingLabel.attachTo = function attachTo(root) {
    return new MDCFloatingLabel(root);
  };

  /**
   * Styles the label to produce the label shake for errors.
   * @param {boolean} shouldShake styles the label to shake by adding shake class
   * if true, otherwise will stop shaking by removing shake class.
   */


  MDCFloatingLabel.prototype.shake = function shake(shouldShake) {
    this.foundation_.shake(shouldShake);
  };

  /**
   * Styles label to float/dock.
   * @param {boolean} shouldFloat styles the label to float by adding float class
   * if true, otherwise docks the label by removing the float class.
   */


  MDCFloatingLabel.prototype.float = function float(shouldFloat) {
    this.foundation_.float(shouldFloat);
  };

  /**
   * @return {number}
   */


  MDCFloatingLabel.prototype.getWidth = function getWidth() {
    return this.foundation_.getWidth();
  };

  /**
   * @return {!MDCFloatingLabelFoundation}
   */


  MDCFloatingLabel.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new floating_label_foundation({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      getWidth: function getWidth() {
        return _this2.root_.offsetWidth;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this2.root_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this2.root_.removeEventListener(evtType, handler);
      }
    });
  };

  return MDCFloatingLabel;
}(component["a" /* default */]);



/***/ }),

/***/ "SpGf":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TC0Z":
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__("Oyyg");
var xtend = __webpack_require__("K5Tb");

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var doc = document;
  var container = typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true
  }, userOptions);

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function () {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function () {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, true);
    doc.addEventListener('touchstart', checkPointerDown, true);
    doc.addEventListener('click', checkClick, true);
    doc.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!state.active || listeningFocusTrap !== trap) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error("You can't have a focus-trap without at least one focusable element");
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;

/***/ }),

/***/ "TO+D":
/***/ (function(module, exports) {

module.exports = function (el, options) {
  options = options || {};

  var elementDocument = el.ownerDocument || el;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

  var candidates = el.querySelectorAll(candidateSelectors.join(','));

  if (options.includeContainer) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

    if (candidateSelectors.some(function (candidateSelector) {
      return matches.call(el, candidateSelector);
    })) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var candidate, candidateIndexAttr, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndexAttr = parseInt(candidate.getAttribute('tabindex'), 10);
    candidateIndex = isNaN(candidateIndexAttr) ? candidate.tabIndex : candidateIndexAttr;

    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate, elementDocument)) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(function (a, b) {
    return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
  }).map(function (a) {
    return a.node;
  });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  };
}

/***/ }),

/***/ "Tv6c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile":"profile__1f25-"};

/***/ }),

/***/ "UJE0":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "UlEV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VcCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
var util = __webpack_require__("joOv");

// CONCATENATED MODULE: ../node_modules/@material/textfield/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-text-field',
  DISABLED: 'mdc-text-field--disabled',
  DENSE: 'mdc-text-field--dense',
  FOCUSED: 'mdc-text-field--focused',
  INVALID: 'mdc-text-field--invalid',
  TEXTAREA: 'mdc-text-field--textarea',
  OUTLINED: 'mdc-text-field--outlined'
};

/** @enum {number} */
var numbers = {
  LABEL_SCALE: 0.75,
  DENSE_LABEL_SCALE: 0.923
};

// whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
// under section: `Validation-related attributes`
var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

// Label should always float for these types as they show some UI even if value is empty.
var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];


// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Helper Text.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the TextField helper text into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldHelperTextAdapter = function () {
  function MDCTextFieldHelperTextAdapter() {
    _classCallCheck(this, MDCTextFieldHelperTextAdapter);
  }

  /**
   * Adds a class to the helper text element.
   * @param {string} className
   */
  MDCTextFieldHelperTextAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the helper text element.
   * @param {string} className
   */


  MDCTextFieldHelperTextAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns whether or not the helper text element contains the given class.
   * @param {string} className
   * @return {boolean}
   */


  MDCTextFieldHelperTextAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Sets an attribute with a given value on the helper text element.
   * @param {string} attr
   * @param {string} value
   */


  MDCTextFieldHelperTextAdapter.prototype.setAttr = function setAttr(attr, value) {};

  /**
   * Removes an attribute from the helper text element.
   * @param {string} attr
   */


  MDCTextFieldHelperTextAdapter.prototype.removeAttr = function removeAttr(attr) {};

  /**
   * Sets the text content for the helper text element.
   * @param {string} content
   */


  MDCTextFieldHelperTextAdapter.prototype.setContent = function setContent(content) {};

  return MDCTextFieldHelperTextAdapter;
}();

/* harmony default export */ var helper_text_adapter = (MDCTextFieldHelperTextAdapter);
// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var constants_strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role'
};

/** @enum {string} */
var constants_cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
};


// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
 * @final
 */

var foundation_MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
  _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

  _createClass(MDCTextFieldHelperTextFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return constants_cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return constants_strings;
    }

    /**
     * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldHelperTextAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldHelperTextAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldHelperTextAdapter} adapter
     */

  }]);

  function MDCTextFieldHelperTextFoundation(adapter) {
    foundation__classCallCheck(this, MDCTextFieldHelperTextFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
  }

  /**
   * Sets the content of the helper text field.
   * @param {string} content
   */


  MDCTextFieldHelperTextFoundation.prototype.setContent = function setContent(content) {
    this.adapter_.setContent(content);
  };

  /** @param {boolean} isPersistent Sets the persistency of the helper text. */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function setPersistent(isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(constants_cssClasses.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(constants_cssClasses.HELPER_TEXT_PERSISTENT);
    }
  };

  /**
   * @param {boolean} isValidation True to make the helper text act as an
   *   error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function setValidation(isValidation) {
    if (isValidation) {
      this.adapter_.addClass(constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    }
  };

  /** Makes the helper text visible to the screen reader. */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function showToScreenReader() {
    this.adapter_.removeAttr(constants_strings.ARIA_HIDDEN);
  };

  /**
   * Sets the validity of the helper text based on the input validity.
   * @param {boolean} inputIsValid
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function setValidity(inputIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(constants_cssClasses.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(constants_cssClasses.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(constants_strings.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(constants_strings.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };

  /**
   * Hides the help text from screen readers.
   * @private
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function hide_() {
    this.adapter_.setAttr(constants_strings.ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var helper_text_foundation = (foundation_MDCTextFieldHelperTextFoundation);
// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/adapter.js
function adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Text Field Icon.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the text field icon into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTextFieldIconAdapter = function () {
  function MDCTextFieldIconAdapter() {
    adapter__classCallCheck(this, MDCTextFieldIconAdapter);
  }

  /**
   * Gets the value of an attribute on the icon element.
   * @param {string} attr
   * @return {string}
   */
  MDCTextFieldIconAdapter.prototype.getAttr = function getAttr(attr) {};

  /**
   * Sets an attribute on the icon element.
   * @param {string} attr
   * @param {string} value
   */


  MDCTextFieldIconAdapter.prototype.setAttr = function setAttr(attr, value) {};

  /**
   * Removes an attribute from the icon element.
   * @param {string} attr
   */


  MDCTextFieldIconAdapter.prototype.removeAttr = function removeAttr(attr) {};

  /**
   * Sets the text content of the icon element.
   * @param {string} content
   */


  MDCTextFieldIconAdapter.prototype.setContent = function setContent(content) {};

  /**
   * Registers an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldIconAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the icon element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldIconAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  /**
   * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
   */


  MDCTextFieldIconAdapter.prototype.notifyIconAction = function notifyIconAction() {};

  return MDCTextFieldIconAdapter;
}();

/* harmony default export */ var icon_adapter = (MDCTextFieldIconAdapter);
// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var icon_constants_strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};


// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/foundation.js
var foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function icon_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
 * @final
 */

var foundation_MDCTextFieldIconFoundation = function (_MDCFoundation) {
  foundation__inherits(MDCTextFieldIconFoundation, _MDCFoundation);

  foundation__createClass(MDCTextFieldIconFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return icon_constants_strings;
    }

    /**
     * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldIconAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldIconAdapter} */{
          getAttr: function getAttr() {},
          setAttr: function setAttr() {},
          removeAttr: function removeAttr() {},
          setContent: function setContent() {},
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          notifyIconAction: function notifyIconAction() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldIconAdapter} adapter
     */

  }]);

  function MDCTextFieldIconFoundation(adapter) {
    icon_foundation__classCallCheck(this, MDCTextFieldIconFoundation);

    /** @private {string?} */
    var _this = foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, foundation__extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

    _this.savedTabIndex_ = null;

    /** @private {function(!Event): undefined} */
    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };
    return _this;
  }

  MDCTextFieldIconFoundation.prototype.init = function init() {
    var _this2 = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

    ['click', 'keydown'].forEach(function (evtType) {
      _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    ['click', 'keydown'].forEach(function (evtType) {
      _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
    });
  };

  /** @param {boolean} disabled */


  MDCTextFieldIconFoundation.prototype.setDisabled = function setDisabled(disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', icon_constants_strings.ICON_ROLE);
    }
  };

  /** @param {string} label */


  MDCTextFieldIconFoundation.prototype.setAriaLabel = function setAriaLabel(label) {
    this.adapter_.setAttr('aria-label', label);
  };

  /** @param {string} content */


  MDCTextFieldIconFoundation.prototype.setContent = function setContent(content) {
    this.adapter_.setContent(content);
  };

  /**
   * Handles an interaction event
   * @param {!Event} evt
   */


  MDCTextFieldIconFoundation.prototype.handleInteraction = function handleInteraction(evt) {
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var icon_foundation = (foundation_MDCTextFieldIconFoundation);
// CONCATENATED MODULE: ../node_modules/@material/textfield/adapter.js
function textfield_adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */



/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * @typedef {{
 *   value: string,
 *   disabled: boolean,
 *   badInput: boolean,
 *   validity: {
 *     badInput: boolean,
 *     valid: boolean,
 *   },
 * }}
 */
var NativeInputType = void 0;

/**
 * @typedef {{
 *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
 *   icon: (!MDCTextFieldIconFoundation|undefined),
 * }}
 */
var FoundationMapType = void 0;

/**
 * Adapter for MDC Text Field.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Text Field into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */

var MDCTextFieldAdapter = function () {
  function MDCTextFieldAdapter() {
    textfield_adapter__classCallCheck(this, MDCTextFieldAdapter);
  }

  /**
   * Adds a class to the root Element.
   * @param {string} className
   */
  MDCTextFieldAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root Element.
   * @param {string} className
   */


  MDCTextFieldAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Registers an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.registerTextFieldInteractionHandler = function registerTextFieldInteractionHandler(type, handler) {};

  /**
   * Deregisters an event handler on the root element for a given event.
   * @param {string} type
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.deregisterTextFieldInteractionHandler = function deregisterTextFieldInteractionHandler(type, handler) {};

  /**
   * Registers an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.registerInputInteractionHandler = function registerInputInteractionHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the native input element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCTextFieldAdapter.prototype.deregisterInputInteractionHandler = function deregisterInputInteractionHandler(evtType, handler) {};

  /**
   * Registers a validation attribute change listener on the input element.
   * Handler accepts list of attribute names.
   * @param {function(!Array<string>): undefined} handler
   * @return {!MutationObserver}
   */


  MDCTextFieldAdapter.prototype.registerValidationAttributeChangeHandler = function registerValidationAttributeChangeHandler(handler) {};

  /**
   * Disconnects a validation attribute observer on the input element.
   * @param {!MutationObserver} observer
   */


  MDCTextFieldAdapter.prototype.deregisterValidationAttributeChangeHandler = function deregisterValidationAttributeChangeHandler(observer) {};

  /**
   * Returns an object representing the native text input element, with a
   * similar API shape. The object returned should include the value, disabled
   * and badInput properties, as well as the checkValidity() function. We never
   * alter the value within our code, however we do update the disabled
   * property, so if you choose to duck-type the return value for this method
   * in your implementation it's important to keep this in mind. Also note that
   * this method can return null, which the foundation will handle gracefully.
   * @return {?Element|?NativeInputType}
   */


  MDCTextFieldAdapter.prototype.getNativeInput = function getNativeInput() {};

  /**
   * Returns true if the textfield is focused.
   * We achieve this via `document.activeElement === this.root_`.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.isFocused = function isFocused() {};

  /**
   * Returns true if the direction of the root element is set to RTL.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.isRtl = function isRtl() {};

  /**
   * Activates the line ripple.
   */


  MDCTextFieldAdapter.prototype.activateLineRipple = function activateLineRipple() {};

  /**
   * Deactivates the line ripple.
   */


  MDCTextFieldAdapter.prototype.deactivateLineRipple = function deactivateLineRipple() {};

  /**
   * Sets the transform origin of the line ripple.
   * @param {number} normalizedX
   */


  MDCTextFieldAdapter.prototype.setLineRippleTransformOrigin = function setLineRippleTransformOrigin(normalizedX) {};

  /**
   * Only implement if label exists.
   * Shakes label if shouldShake is true.
   * @param {boolean} shouldShake
   */


  MDCTextFieldAdapter.prototype.shakeLabel = function shakeLabel(shouldShake) {};

  /**
   * Only implement if label exists.
   * Floats the label above the input element if shouldFloat is true.
   * @param {boolean} shouldFloat
   */


  MDCTextFieldAdapter.prototype.floatLabel = function floatLabel(shouldFloat) {};

  /**
   * Returns true if label element exists, false if it doesn't.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.hasLabel = function hasLabel() {};

  /**
   * Only implement if label exists.
   * Returns width of label in pixels.
   * @return {number}
   */


  MDCTextFieldAdapter.prototype.getLabelWidth = function getLabelWidth() {};

  /**
   * Returns true if outline element exists, false if it doesn't.
   * @return {boolean}
   */


  MDCTextFieldAdapter.prototype.hasOutline = function hasOutline() {};

  /**
   * Only implement if outline element exists.
   * Updates SVG Path and outline element based on the
   * label element width and RTL context.
   * @param {number} labelWidth
   * @param {boolean=} isRtl
   */


  MDCTextFieldAdapter.prototype.notchOutline = function notchOutline(labelWidth, isRtl) {};

  /**
   * Only implement if outline element exists.
   * Closes notch in outline element.
   */


  MDCTextFieldAdapter.prototype.closeOutline = function closeOutline() {};

  return MDCTextFieldAdapter;
}();


// CONCATENATED MODULE: ../node_modules/@material/textfield/foundation.js
var textfield_foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var textfield_foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function textfield_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textfield_foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function textfield_foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */



/**
 * @extends {MDCFoundation<!MDCTextFieldAdapter>}
 * @final
 */

var foundation_MDCTextFieldFoundation = function (_MDCFoundation) {
  textfield_foundation__inherits(MDCTextFieldFoundation, _MDCFoundation);

  textfield_foundation__createClass(MDCTextFieldFoundation, [{
    key: 'shouldShake',


    /** @return {boolean} */
    get: function get() {
      return !this.isValid() && !this.isFocused_ && !!this.getValue();
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'shouldAlwaysFloat_',
    get: function get() {
      var type = this.getNativeInput_().type;
      return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    }

    /** @return {boolean} */

  }, {
    key: 'shouldFloat',
    get: function get() {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    }

    /**
     * {@see MDCTextFieldAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTextFieldAdapter}
     */

  }], [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return cssClasses;
    }

    /** @return enum {string} */

  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTextFieldAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
          deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
          registerInputInteractionHandler: function registerInputInteractionHandler() {},
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
          registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
          deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
          getNativeInput: function getNativeInput() {},
          isFocused: function isFocused() {},
          isRtl: function isRtl() {},
          activateLineRipple: function activateLineRipple() {},
          deactivateLineRipple: function deactivateLineRipple() {},
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
          shakeLabel: function shakeLabel() {},
          floatLabel: function floatLabel() {},
          hasLabel: function hasLabel() {},
          getLabelWidth: function getLabelWidth() {},
          hasOutline: function hasOutline() {},
          notchOutline: function notchOutline() {},
          closeOutline: function closeOutline() {}
        }
      );
    }

    /**
     * @param {!MDCTextFieldAdapter} adapter
     * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
     */

  }]);

  function MDCTextFieldFoundation(adapter) {
    var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

    textfield_foundation__classCallCheck(this, MDCTextFieldFoundation);

    /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
    var _this = textfield_foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, textfield_foundation__extends(MDCTextFieldFoundation.defaultAdapter, adapter)));

    _this.helperText_ = foundationMap.helperText;
    /** @type {!MDCTextFieldIconFoundation|undefined} */
    _this.icon_ = foundationMap.icon;

    /** @private {boolean} */
    _this.isFocused_ = false;
    /** @private {boolean} */
    _this.receivedUserInput_ = false;
    /** @private {boolean} */
    _this.useCustomValidityChecking_ = false;
    /** @private {boolean} */
    _this.isValid_ = true;

    /** @private {boolean} */
    _this.useNativeValidation_ = true;

    /** @private {function(): undefined} */
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };
    /** @private {function(): undefined} */
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus();
    };
    /** @private {function(!Event): undefined} */
    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };
    /** @private {function(!Event): undefined} */
    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };
    /** @private {function(!Array): undefined} */
    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    /** @private {!MutationObserver} */
    _this.validationObserver_;
    return _this;
  }

  MDCTextFieldFoundation.prototype.init = function init() {
    var _this2 = this;

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach(function (evtType) {
      _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach(function (evtType) {
      _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
  };

  MDCTextFieldFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach(function (evtType) {
      _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach(function (evtType) {
      _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };

  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function handleTextFieldInteraction() {
    if (this.adapter_.getNativeInput().disabled) {
      return;
    }
    this.receivedUserInput_ = true;
  };

  /**
   * Handles validation attribute changes
   * @param {!Array<string>} attributesList
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function handleValidationAttributeChange(attributesList) {
    var _this4 = this;

    attributesList.some(function (attributeName) {
      if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this4.styleValidity_(true);
        return true;
      }
    });
  };

  /**
   * Opens/closes the notched outline.
   * @param {boolean} openNotch
   */


  MDCTextFieldFoundation.prototype.notchOutline = function notchOutline(openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var isDense = this.adapter_.hasClass(cssClasses.DENSE);
      var labelScale = isDense ? numbers.DENSE_LABEL_SCALE : numbers.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      var isRtl = this.adapter_.isRtl();
      this.adapter_.notchOutline(labelWidth, isRtl);
    } else {
      this.adapter_.closeOutline();
    }
  };

  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function activateFocus() {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();
    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };

  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   * @param {!Event} evt
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function setTransformOrigin(evt) {
    var targetClientRect = evt.target.getBoundingClientRect();
    var evtCoords = { x: evt.clientX, y: evt.clientY };
    var normalizedX = evtCoords.x - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  };

  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function autoCompleteFocus() {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };

  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function deactivateFocus() {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);
    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  /**
   * @return {string} The value of the input Element.
   */


  MDCTextFieldFoundation.prototype.getValue = function getValue() {
    return this.getNativeInput_().value;
  };

  /**
   * @param {string} value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function setValue(value) {
    this.getNativeInput_().value = value;
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
  };

  /**
   * @return {boolean} If a custom validity is set, returns that value.
   *     Otherwise, returns the result of native validity checks.
   */


  MDCTextFieldFoundation.prototype.isValid = function isValid() {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };

  /**
   * @param {boolean} isValid Sets the validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function setValid(isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);

    var shouldShake = !isValid && !this.isFocused_;
    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(shouldShake);
    }
  };

  /**
   * Enables or disables the use of native validation. Use this for custom validation.
   * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function setUseNativeValidation(useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  /**
   * @return {boolean} True if the Text Field is disabled.
   */


  MDCTextFieldFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeInput_().disabled;
  };

  /**
   * @param {boolean} disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };

  /**
   * @param {string} content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function setHelperTextContent(content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };

  /**
   * Sets the aria label of the icon.
   * @param {string} label
   */


  MDCTextFieldFoundation.prototype.setIconAriaLabel = function setIconAriaLabel(label) {
    if (this.icon_) {
      this.icon_.setAriaLabel(label);
    }
  };

  /**
   * Sets the text content of the icon.
   * @param {string} content
   */


  MDCTextFieldFoundation.prototype.setIconContent = function setIconContent(content) {
    if (this.icon_) {
      this.icon_.setContent(content);
    }
  };

  /**
   * @return {boolean} True if the Text Field input fails in converting the
   *     user-supplied value.
   * @private
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function isBadInput_() {
    return this.getNativeInput_().validity.badInput;
  };

  /**
   * @return {boolean} The result of native validity checking
   *     (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function isNativeInputValid_() {
    return this.getNativeInput_().validity.valid;
  };

  /**
   * Styles the component based on the validity state.
   * @param {boolean} isValid
   * @private
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function styleValidity_(isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }
    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  };

  /**
   * Styles the component based on the focused state.
   * @param {boolean} isFocused
   * @private
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function styleFocused_(isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  };

  /**
   * Styles the component based on the disabled state.
   * @param {boolean} isDisabled
   * @private
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function styleDisabled_(isDisabled) {
    var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
        DISABLED = _MDCTextFieldFoundati.DISABLED,
        INVALID = _MDCTextFieldFoundati.INVALID;

    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
    if (this.icon_) {
      this.icon_.setDisabled(isDisabled);
    }
  };

  /**
   * @return {!Element|!NativeInputType} The native text input from the
   * host environment, or a dummy if none exists.
   * @private
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function getNativeInput_() {
    return this.adapter_.getNativeInput() ||
    /** @type {!NativeInputType} */{
      value: '',
      disabled: false,
      validity: {
        badInput: false,
        valid: true
      }
    };
  };

  return MDCTextFieldFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var textfield_foundation = (foundation_MDCTextFieldFoundation);
// EXTERNAL MODULE: ../node_modules/@material/line-ripple/index.js + 3 modules
var line_ripple = __webpack_require__("WNaY");

// CONCATENATED MODULE: ../node_modules/@material/textfield/helper-text/index.js
var helper_text__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var helper_text__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function helper_text__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function helper_text__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function helper_text__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
 * @final
 */

var helper_text_MDCTextFieldHelperText = function (_MDCComponent) {
  helper_text__inherits(MDCTextFieldHelperText, _MDCComponent);

  function MDCTextFieldHelperText() {
    helper_text__classCallCheck(this, MDCTextFieldHelperText);

    return helper_text__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextFieldHelperText}
   */
  MDCTextFieldHelperText.attachTo = function attachTo(root) {
    return new MDCTextFieldHelperText(root);
  };

  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */


  /**
   * @return {!MDCTextFieldHelperTextFoundation}
   */
  MDCTextFieldHelperText.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new helper_text_foundation( /** @type {!MDCTextFieldHelperTextAdapter} */helper_text__extends({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this2.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this2.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this2.root_.textContent = content;
      }
    }));
  };

  helper_text__createClass(MDCTextFieldHelperText, [{
    key: 'foundation',
    get: function get() {
      return this.foundation_;
    }
  }]);

  return MDCTextFieldHelperText;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/textfield/icon/index.js
var icon__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var icon__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function icon__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function icon__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function icon__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */

var icon_MDCTextFieldIcon = function (_MDCComponent) {
  icon__inherits(MDCTextFieldIcon, _MDCComponent);

  function MDCTextFieldIcon() {
    icon__classCallCheck(this, MDCTextFieldIcon);

    return icon__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextFieldIcon}
   */
  MDCTextFieldIcon.attachTo = function attachTo(root) {
    return new MDCTextFieldIcon(root);
  };

  /**
   * @return {!MDCTextFieldIconFoundation}
   */


  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  MDCTextFieldIcon.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new icon_foundation( /** @type {!MDCTextFieldIconAdapter} */icon__extends({
      getAttr: function getAttr(attr) {
        return _this2.root_.getAttribute(attr);
      },
      setAttr: function setAttr(attr, value) {
        return _this2.root_.setAttribute(attr, value);
      },
      removeAttr: function removeAttr(attr) {
        return _this2.root_.removeAttribute(attr);
      },
      setContent: function setContent(content) {
        _this2.root_.textContent = content;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this2.root_.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this2.root_.removeEventListener(evtType, handler);
      },
      notifyIconAction: function notifyIconAction() {
        return _this2.emit(icon_foundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
      }
    }));
  };

  icon__createClass(MDCTextFieldIcon, [{
    key: 'foundation',
    get: function get() {
      return this.foundation_;
    }
  }]);

  return MDCTextFieldIcon;
}(component["a" /* default */]);


// EXTERNAL MODULE: ../node_modules/@material/floating-label/index.js + 3 modules
var floating_label = __webpack_require__("RbN6");

// EXTERNAL MODULE: ../node_modules/@material/notched-outline/index.js + 3 modules
var notched_outline = __webpack_require__("F55s");

// CONCATENATED MODULE: ../node_modules/@material/textfield/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCTextField", function() { return textfield_MDCTextField; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() { return textfield_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() { return helper_text_MDCTextFieldHelperText; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() { return helper_text_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() { return icon_MDCTextFieldIcon; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() { return icon_foundation; });
var textfield__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var textfield__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function textfield__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function textfield__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function textfield__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */





/* eslint-disable no-unused-vars */





/* eslint-enable no-unused-vars */

/**
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */

var textfield_MDCTextField = function (_MDCComponent) {
  textfield__inherits(MDCTextField, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTextField() {
    textfield__classCallCheck(this, MDCTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = textfield__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.input_;
    /** @type {?MDCRipple} */
    _this.ripple;
    /** @private {?MDCLineRipple} */
    _this.lineRipple_;
    /** @private {?MDCTextFieldHelperText} */
    _this.helperText_;
    /** @private {?MDCTextFieldIcon} */
    _this.icon_;
    /** @private {?MDCFloatingLabel} */
    _this.label_;
    /** @private {?MDCNotchedOutline} */
    _this.outline_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */


  MDCTextField.attachTo = function attachTo(root) {
    return new MDCTextField(root);
  };

  /**
   * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
   * creates a new MDCRipple.
   * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
   * creates a new MDCLineRipple.
   * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
   * creates a new MDCTextFieldHelperText.
   * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
   * creates a new MDCTextFieldIcon.
   * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
   * creates a new MDCFloatingLabel.
   * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
   * creates a new MDCNotchedOutline.
   */


  MDCTextField.prototype.initialize = function initialize() {
    var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
      return new ripple["MDCRipple"](el, foundation);
    };
    var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
      return new line_ripple["a" /* MDCLineRipple */](el);
    };
    var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
      return new helper_text_MDCTextFieldHelperText(el);
    };
    var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
      return new icon_MDCTextFieldIcon(el);
    };

    var _this2 = this;

    var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
      return new floating_label["a" /* MDCFloatingLabel */](el);
    };
    var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
      return new notched_outline["a" /* MDCNotchedOutline */](el);
    };

    this.input_ = this.root_.querySelector(strings.INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(strings.LABEL_SELECTOR);
    if (labelElement) {
      this.label_ = labelFactory(labelElement);
    }
    var lineRippleElement = this.root_.querySelector(strings.LINE_RIPPLE_SELECTOR);
    if (lineRippleElement) {
      this.lineRipple_ = lineRippleFactory(lineRippleElement);
    }
    var outlineElement = this.root_.querySelector(strings.OUTLINE_SELECTOR);
    if (outlineElement) {
      this.outline_ = outlineFactory(outlineElement);
    }
    if (this.input_.hasAttribute(strings.ARIA_CONTROLS)) {
      var helperTextElement = document.getElementById(this.input_.getAttribute(strings.ARIA_CONTROLS));
      if (helperTextElement) {
        this.helperText_ = helperTextFactory(helperTextElement);
      }
    }
    var iconElement = this.root_.querySelector(strings.ICON_SELECTOR);
    if (iconElement) {
      this.icon_ = iconFactory(iconElement);
    }

    this.ripple = null;
    if (!this.root_.classList.contains(cssClasses.TEXTAREA) && !this.root_.classList.contains(cssClasses.OUTLINED)) {
      var MATCHES = Object(util["getMatchesProperty"])(HTMLElement.prototype);
      var adapter = textfield__extends(ripple["MDCRipple"].createAdapter( /** @type {!RippleCapableSurface} */this), {
        isSurfaceActive: function isSurfaceActive() {
          return _this2.input_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.input_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.input_.removeEventListener(type, handler);
        }
      });
      var foundation = new ripple["MDCRippleFoundation"](adapter);
      this.ripple = rippleFactory(this.root_, foundation);
    }
  };

  MDCTextField.prototype.destroy = function destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }
    if (this.helperText_) {
      this.helperText_.destroy();
    }
    if (this.icon_) {
      this.icon_.destroy();
    }
    if (this.label_) {
      this.label_.destroy();
    }
    if (this.outline_) {
      this.outline_.destroy();
    }
    _MDCComponent.prototype.destroy.call(this);
  };

  /**
   * Initiliazes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDom = function initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  };

  /**
   * @return {string} The value of the input.
   */


  /**
   * Recomputes the outline SVG path for the outline element.
   */
  MDCTextField.prototype.layout = function layout() {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  /**
   * @return {!MDCTextFieldFoundation}
   */


  MDCTextField.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new textfield_foundation(
    /** @type {!MDCTextFieldAdapter} */textfield__extends({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this3.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
        return _this3.root_.addEventListener(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
        return _this3.root_.removeEventListener(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
        var getAttributesList = function getAttributesList(mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          });
        };
        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var targetNode = _this3.root_.querySelector(strings.INPUT_SELECTOR);
        var config = { attributes: true };
        observer.observe(targetNode, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
        return observer.disconnect();
      },
      isFocused: function isFocused() {
        return document.activeElement === _this3.root_.querySelector(strings.INPUT_SELECTOR);
      },
      isRtl: function isRtl() {
        return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
      }
    }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
  };

  /**
   * @return {!{
   *   shakeLabel: function(boolean): undefined,
   *   floatLabel: function(boolean): undefined,
   *   hasLabel: function(): boolean,
   *   getLabelWidth: function(): number,
   * }}
   */


  MDCTextField.prototype.getLabelAdapterMethods_ = function getLabelAdapterMethods_() {
    var _this4 = this;

    return {
      shakeLabel: function shakeLabel(shouldShake) {
        return _this4.label_.shake(shouldShake);
      },
      floatLabel: function floatLabel(shouldFloat) {
        return _this4.label_.float(shouldFloat);
      },
      hasLabel: function hasLabel() {
        return !!_this4.label_;
      },
      getLabelWidth: function getLabelWidth() {
        return _this4.label_.getWidth();
      }
    };
  };

  /**
   * @return {!{
   *   activateLineRipple: function(): undefined,
   *   deactivateLineRipple: function(): undefined,
   *   setLineRippleTransformOrigin: function(number): undefined,
   * }}
   */


  MDCTextField.prototype.getLineRippleAdapterMethods_ = function getLineRippleAdapterMethods_() {
    var _this5 = this;

    return {
      activateLineRipple: function activateLineRipple() {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function deactivateLineRipple() {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
        if (_this5.lineRipple_) {
          _this5.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  /**
   * @return {!{
   *   notchOutline: function(number, boolean): undefined,
   *   hasOutline: function(): boolean,
   * }}
   */


  MDCTextField.prototype.getOutlineAdapterMethods_ = function getOutlineAdapterMethods_() {
    var _this6 = this;

    return {
      notchOutline: function notchOutline(labelWidth, isRtl) {
        return _this6.outline_.notch(labelWidth, isRtl);
      },
      closeOutline: function closeOutline() {
        return _this6.outline_.closeNotch();
      },
      hasOutline: function hasOutline() {
        return !!_this6.outline_;
      }
    };
  };

  /**
   * @return {!{
   *   registerInputInteractionHandler: function(string, function()): undefined,
   *   deregisterInputInteractionHandler: function(string, function()): undefined,
   *   getNativeInput: function(): ?Element,
   * }}
   */


  MDCTextField.prototype.getInputAdapterMethods_ = function getInputAdapterMethods_() {
    var _this7 = this;

    return {
      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
        return _this7.input_.addEventListener(evtType, handler);
      },
      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
        return _this7.input_.removeEventListener(evtType, handler);
      },
      getNativeInput: function getNativeInput() {
        return _this7.input_;
      }
    };
  };

  /**
   * Returns a map of all subcomponents to subfoundations.
   * @return {!FoundationMapType}
   */


  MDCTextField.prototype.getFoundationMap_ = function getFoundationMap_() {
    return {
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      icon: this.icon_ ? this.icon_.foundation : undefined
    };
  };

  textfield__createClass(MDCTextField, [{
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /**
     * @param {string} value The value to set on the input.
     */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /**
     * @return {boolean} True if the Text Field is disabled.
     */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /**
     * @param {boolean} disabled Sets the Text Field disabled or enabled.
     */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /**
     * @return {boolean} valid True if the Text Field is valid.
     */

  }, {
    key: 'valid',
    get: function get() {
      return this.foundation_.isValid();
    }

    /**
     * @param {boolean} valid Sets the Text Field valid or invalid.
     */
    ,
    set: function set(valid) {
      this.foundation_.setValid(valid);
    }

    /**
     * @return {boolean} True if the Text Field is required.
     */

  }, {
    key: 'required',
    get: function get() {
      return this.input_.required;
    }

    /**
     * @param {boolean} required Sets the Text Field to required.
     */
    ,
    set: function set(required) {
      this.input_.required = required;
    }

    /**
     * @return {string} The input element's validation pattern.
     */

  }, {
    key: 'pattern',
    get: function get() {
      return this.input_.pattern;
    }

    /**
     * @param {string} pattern Sets the input element's validation pattern.
     */
    ,
    set: function set(pattern) {
      this.input_.pattern = pattern;
    }

    /**
     * @return {number} The input element's minLength.
     */

  }, {
    key: 'minLength',
    get: function get() {
      return this.input_.minLength;
    }

    /**
     * @param {number} minLength Sets the input element's minLength.
     */
    ,
    set: function set(minLength) {
      this.input_.minLength = minLength;
    }

    /**
     * @return {number} The input element's maxLength.
     */

  }, {
    key: 'maxLength',
    get: function get() {
      return this.input_.maxLength;
    }

    /**
     * @param {number} maxLength Sets the input element's maxLength.
     */
    ,
    set: function set(maxLength) {
      // Chrome throws exception if maxLength is set < 0
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    }

    /**
     * @return {string} The input element's min.
     */

  }, {
    key: 'min',
    get: function get() {
      return this.input_.min;
    }

    /**
     * @param {string} min Sets the input element's min.
     */
    ,
    set: function set(min) {
      this.input_.min = min;
    }

    /**
     * @return {string} The input element's max.
     */

  }, {
    key: 'max',
    get: function get() {
      return this.input_.max;
    }

    /**
     * @param {string} max Sets the input element's max.
     */
    ,
    set: function set(max) {
      this.input_.max = max;
    }

    /**
     * @return {string} The input element's step.
     */

  }, {
    key: 'step',
    get: function get() {
      return this.input_.step;
    }

    /**
     * @param {string} step Sets the input element's step.
     */
    ,
    set: function set(step) {
      this.input_.step = step;
    }

    /**
     * Sets the helper text element content.
     * @param {string} content
     */

  }, {
    key: 'helperTextContent',
    set: function set(content) {
      this.foundation_.setHelperTextContent(content);
    }

    /**
     * Sets the aria label of the icon.
     * @param {string} label
     */

  }, {
    key: 'iconAriaLabel',
    set: function set(label) {
      this.foundation_.setIconAriaLabel(label);
    }

    /**
     * Sets the text content of the icon.
     * @param {string} content
     */

  }, {
    key: 'iconContent',
    set: function set(content) {
      this.foundation_.setIconContent(content);
    }

    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
     */

  }, {
    key: 'useNativeValidation',
    set: function set(useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    }
  }]);

  return MDCTextField;
}(component["a" /* default */]);



/***/ }),

/***/ "WNaY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// CONCATENATED MODULE: ../node_modules/@material/line-ripple/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC TextField Line Ripple.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the line ripple into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCLineRippleAdapter = function () {
  function MDCLineRippleAdapter() {
    _classCallCheck(this, MDCLineRippleAdapter);
  }

  /**
   * Adds a class to the line ripple element.
   * @param {string} className
   */
  MDCLineRippleAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the line ripple element.
   * @param {string} className
   */


  MDCLineRippleAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} className
   * @return {boolean}
   */


  MDCLineRippleAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Sets the style property with propertyName to value on the root element.
   * @param {string} propertyName
   * @param {string} value
   */


  MDCLineRippleAdapter.prototype.setStyle = function setStyle(propertyName, value) {};

  /**
   * Registers an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCLineRippleAdapter.prototype.registerEventHandler = function registerEventHandler(evtType, handler) {};

  /**
   * Deregisters an event listener on the line ripple element for a given event.
   * @param {string} evtType
   * @param {function(!Event): undefined} handler
   */


  MDCLineRippleAdapter.prototype.deregisterEventHandler = function deregisterEventHandler(evtType, handler) {};

  return MDCLineRippleAdapter;
}();

/* harmony default export */ var adapter = (MDCLineRippleAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/line-ripple/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};


// CONCATENATED MODULE: ../node_modules/@material/line-ripple/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCLineRippleAdapter>}
 * @final
 */

var foundation_MDCLineRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCLineRippleFoundation, _MDCFoundation);

  _createClass(MDCLineRippleFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {string} */
    get: function get() {
      return cssClasses;
    }

    /**
     * {@see MDCLineRippleAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCLineRippleAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCLineRippleAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          setStyle: function setStyle() {},
          registerEventHandler: function registerEventHandler() {},
          deregisterEventHandler: function deregisterEventHandler() {}
        }
      );
    }

    /**
     * @param {!MDCLineRippleAdapter=} adapter
     */

  }]);

  function MDCLineRippleFoundation(adapter) {
    foundation__classCallCheck(this, MDCLineRippleFoundation);

    /** @private {function(!Event): undefined} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };
    return _this;
  }

  MDCLineRippleFoundation.prototype.init = function init() {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  /**
   * Activates the line ripple
   */


  MDCLineRippleFoundation.prototype.activate = function activate() {
    this.adapter_.removeClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(cssClasses.LINE_RIPPLE_ACTIVE);
  };

  /**
   * Sets the center of the ripple animation to the given X coordinate.
   * @param {number} xCoordinate
   */


  MDCLineRippleFoundation.prototype.setRippleCenter = function setRippleCenter(xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
  };

  /**
   * Deactivates the line ripple
   */


  MDCLineRippleFoundation.prototype.deactivate = function deactivate() {
    this.adapter_.addClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
  };

  /**
   * Handles a transition end event
   * @param {!Event} evt
   */


  MDCLineRippleFoundation.prototype.handleTransitionEnd = function handleTransitionEnd(evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(cssClasses.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(cssClasses.LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(cssClasses.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var line_ripple_foundation = (foundation_MDCLineRippleFoundation);
// CONCATENATED MODULE: ../node_modules/@material/line-ripple/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return line_ripple_MDCLineRipple; });
/* unused concated harmony import MDCLineRippleFoundation */
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, false, function() { return line_ripple_foundation; });
var line_ripple__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function line_ripple__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function line_ripple__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function line_ripple__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends {MDCComponent<!MDCLineRippleFoundation>}
 * @final
 */

var line_ripple_MDCLineRipple = function (_MDCComponent) {
  line_ripple__inherits(MDCLineRipple, _MDCComponent);

  function MDCLineRipple() {
    line_ripple__classCallCheck(this, MDCLineRipple);

    return line_ripple__possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  /**
   * @param {!Element} root
   * @return {!MDCLineRipple}
   */
  MDCLineRipple.attachTo = function attachTo(root) {
    return new MDCLineRipple(root);
  };

  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function activate() {
    this.foundation_.activate();
  };

  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function deactivate() {
    this.foundation_.deactivate();
  };

  /**
   * Sets the transform origin given a user's click location. The `rippleCenter` is the
   * x-coordinate of the middle of the ripple.
   * @param {number} xCoordinate
   */


  MDCLineRipple.prototype.setRippleCenter = function setRippleCenter(xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  /**
   * @return {!MDCLineRippleFoundation}
   */


  MDCLineRipple.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new line_ripple_foundation( /** @type {!MDCLineRippleAdapter} */line_ripple__extends({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this2.root_.style[propertyName] = value;
      },
      registerEventHandler: function registerEventHandler(evtType, handler) {
        return _this2.root_.addEventListener(evtType, handler);
      },
      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
        return _this2.root_.removeEventListener(evtType, handler);
      }
    }));
  };

  return MDCLineRipple;
}(component["a" /* default */]);



/***/ }),

/***/ "XoCl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "a81U":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "aa0x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// CONCATENATED MODULE: ../node_modules/@material/chips/chip/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Chip.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCChipAdapter = function () {
  function MDCChipAdapter() {
    _classCallCheck(this, MDCChipAdapter);
  }

  /**
   * Adds a class to the root element.
   * @param {string} className
   */
  MDCChipAdapter.prototype.addClass = function addClass(className) {};

  /**
   * Removes a class from the root element.
   * @param {string} className
   */


  MDCChipAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * Returns true if the root element contains the given class.
   * @param {string} className
   * @return {boolean}
   */


  MDCChipAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Adds a class to the leading icon element.
   * @param {string} className
   */


  MDCChipAdapter.prototype.addClassToLeadingIcon = function addClassToLeadingIcon(className) {};

  /**
   * Removes a class from the leading icon element.
   * @param {string} className
   */


  MDCChipAdapter.prototype.removeClassFromLeadingIcon = function removeClassFromLeadingIcon(className) {};

  /**
   * Returns true if target has className, false otherwise.
   * @param {!EventTarget} target
   * @param {string} className
   * @return {boolean}
   */


  MDCChipAdapter.prototype.eventTargetHasClass = function eventTargetHasClass(target, className) {};

  /**
   * Emits a custom "MDCChip:interaction" event denoting the chip has been
   * interacted with (typically on click or keydown).
   */


  MDCChipAdapter.prototype.notifyInteraction = function notifyInteraction() {};

  /**
   * Emits a custom "MDCChip:trailingIconInteraction" event denoting the trailing icon has been
   * interacted with (typically on click or keydown).
   */


  MDCChipAdapter.prototype.notifyTrailingIconInteraction = function notifyTrailingIconInteraction() {};

  /**
   * Emits a custom event "MDCChip:removal" denoting the chip will be removed.
   */


  MDCChipAdapter.prototype.notifyRemoval = function notifyRemoval() {};

  /**
   * Returns the computed property value of the given style property on the root element.
   * @param {string} propertyName
   * @return {string}
   */


  MDCChipAdapter.prototype.getComputedStyleValue = function getComputedStyleValue(propertyName) {};

  /**
   * Sets the property value of the given style property on the root element.
   * @param {string} propertyName
   * @param {string} value
   */


  MDCChipAdapter.prototype.setStyleProperty = function setStyleProperty(propertyName, value) {};

  return MDCChipAdapter;
}();

/* harmony default export */ var chip_adapter = (MDCChipAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/chips/chip/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var strings = {
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  INTERACTION_EVENT: 'MDCChip:interaction',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  REMOVAL_EVENT: 'MDCChip:removal',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing'
};

/** @enum {string} */
var cssClasses = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  TRAILING_ICON: 'mdc-chip__icon--trailing',
  SELECTED: 'mdc-chip--selected'
};


// CONCATENATED MODULE: ../node_modules/@material/chips/chip/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */





/**
 * @extends {MDCFoundation<!MDCChipAdapter>}
 * @final
 */

var foundation_MDCChipFoundation = function (_MDCFoundation) {
  _inherits(MDCChipFoundation, _MDCFoundation);

  _createClass(MDCChipFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }

    /**
     * {@see MDCChipAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCChipAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCChipAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {},
          addClassToLeadingIcon: function addClassToLeadingIcon() {},
          removeClassFromLeadingIcon: function removeClassFromLeadingIcon() {},
          eventTargetHasClass: function eventTargetHasClass() {},
          notifyInteraction: function notifyInteraction() {},
          notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {},
          notifyRemoval: function notifyRemoval() {},
          getComputedStyleValue: function getComputedStyleValue() {},
          setStyleProperty: function setStyleProperty() {}
        }
      );
    }

    /**
     * @param {!MDCChipAdapter} adapter
     */

  }]);

  function MDCChipFoundation(adapter) {
    foundation__classCallCheck(this, MDCChipFoundation);

    /**
     * Whether a trailing icon click should immediately trigger exit/removal of the chip.
     * @private {boolean}
     * */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCChipFoundation.defaultAdapter, adapter)));

    _this.shouldRemoveOnTrailingIconClick_ = true;
    return _this;
  }

  /**
   * @return {boolean}
   */


  MDCChipFoundation.prototype.isSelected = function isSelected() {
    return this.adapter_.hasClass(cssClasses.SELECTED);
  };

  /**
   * @param {boolean} selected
   */


  MDCChipFoundation.prototype.setSelected = function setSelected(selected) {
    if (selected) {
      this.adapter_.addClass(cssClasses.SELECTED);
    } else {
      this.adapter_.removeClass(cssClasses.SELECTED);
    }
  };

  /**
   * @return {boolean}
   */


  MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function getShouldRemoveOnTrailingIconClick() {
    return this.shouldRemoveOnTrailingIconClick_;
  };

  /**
   * @param {boolean} shouldRemove
   */


  MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function setShouldRemoveOnTrailingIconClick(shouldRemove) {
    this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
  };

  /**
   * Begins the exit animation which leads to removal of the chip.
   */


  MDCChipFoundation.prototype.beginExit = function beginExit() {
    this.adapter_.addClass(cssClasses.CHIP_EXIT);
  };

  /**
   * Handles an interaction event on the root element.
   * @param {!Event} evt
   */


  MDCChipFoundation.prototype.handleInteraction = function handleInteraction(evt) {
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyInteraction();
    }
  };

  /**
   * Handles a transition end event on the root element.
   * @param {!Event} evt
   */


  MDCChipFoundation.prototype.handleTransitionEnd = function handleTransitionEnd(evt) {
    var _this2 = this;

    // Handle transition end event on the chip when it is about to be removed.
    if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, cssClasses.CHIP_EXIT)) {
      if (evt.propertyName === 'width') {
        this.adapter_.notifyRemoval();
      } else if (evt.propertyName === 'opacity') {
        // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
        var chipWidth = this.adapter_.getComputedStyleValue('width');

        // On the next frame (once we get the computed width), explicitly set the chip's width
        // to its current pixel width, so we aren't transitioning out of 'auto'.
        requestAnimationFrame(function () {
          _this2.adapter_.setStyleProperty('width', chipWidth);

          // To mitigate jitter, start transitioning padding and margin before width.
          _this2.adapter_.setStyleProperty('padding', '0');
          _this2.adapter_.setStyleProperty('margin', '0');

          // On the next frame (once width is explicitly set), transition width to 0.
          requestAnimationFrame(function () {
            _this2.adapter_.setStyleProperty('width', '0');
          });
        });
      }
      return;
    }

    // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
    if (evt.propertyName !== 'opacity') {
      return;
    }
    if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, cssClasses.LEADING_ICON) && this.adapter_.hasClass(cssClasses.SELECTED)) {
      this.adapter_.addClassToLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
    } else if (this.adapter_.eventTargetHasClass( /** @type {!EventTarget} */evt.target, cssClasses.CHECKMARK) && !this.adapter_.hasClass(cssClasses.SELECTED)) {
      this.adapter_.removeClassFromLeadingIcon(cssClasses.HIDDEN_LEADING_ICON);
    }
  };

  /**
   * Handles an interaction event on the trailing icon element. This is used to
   * prevent the ripple from activating on interaction with the trailing icon.
   * @param {!Event} evt
   */


  MDCChipFoundation.prototype.handleTrailingIconInteraction = function handleTrailingIconInteraction(evt) {
    evt.stopPropagation();
    if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
      this.adapter_.notifyTrailingIconInteraction();
      if (this.shouldRemoveOnTrailingIconClick_) {
        this.beginExit();
      }
    }
  };

  return MDCChipFoundation;
}(base_foundation["a" /* default */]);

/**
 * @typedef {{
 *   detail: {
 *     chipId: string,
 *   },
 *   bubbles: boolean,
 * }}
 */


var MDCChipInteractionEventType = void 0;

/**
 * @typedef {{
 *   detail: {
 *     chipId: string,
 *     root: Element,
 *   },
 *   bubbles: boolean,
 * }}
 */
var MDCChipRemovalEventType = void 0;


// CONCATENATED MODULE: ../node_modules/@material/chips/chip/index.js
var chip__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var chip__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function chip__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function chip__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function chip__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var INTERACTION_EVENTS = ['click', 'keydown'];

/**
 * @extends {MDCComponent<!MDCChipFoundation>}
 * @final
 */

var chip_MDCChip = function (_MDCComponent) {
  chip__inherits(MDCChip, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCChip() {
    chip__classCallCheck(this, MDCChip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {string} */
    var _this = chip__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.id;
    /** @private {?Element} */
    _this.leadingIcon_;
    /** @private {?Element} */
    _this.trailingIcon_;
    /** @private {!MDCRipple} */
    _this.ripple_;

    /** @private {?function(?Event): undefined} */
    _this.handleInteraction_;
    /** @private {?function(!Event): undefined} */
    _this.handleTransitionEnd_;
    /** @private {function(!Event): undefined} */
    _this.handleTrailingIconInteraction_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCChip}
   */


  MDCChip.attachTo = function attachTo(root) {
    return new MDCChip(root);
  };

  MDCChip.prototype.initialize = function initialize() {
    var _this2 = this;

    var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
      return new ripple["MDCRipple"](el, foundation);
    };

    this.id = this.root_.id;
    this.leadingIcon_ = this.root_.querySelector(strings.LEADING_ICON_SELECTOR);
    this.trailingIcon_ = this.root_.querySelector(strings.TRAILING_ICON_SELECTOR);

    // Adjust ripple size for chips with animated growing width. This applies when filter chips without
    // a leading icon are selected, and a leading checkmark will cause the chip width to expand.
    var checkmarkEl = this.root_.querySelector(strings.CHECKMARK_SELECTOR);
    if (checkmarkEl && !this.leadingIcon_) {
      var adapter = chip__extends(ripple["MDCRipple"].createAdapter(this), {
        computeBoundingRect: function computeBoundingRect() {
          var height = _this2.root_.getBoundingClientRect().height;
          // The checkmark's width is initially set to 0, so use the checkmark's height as a proxy since the
          // checkmark should always be square.
          var width = _this2.root_.getBoundingClientRect().width + checkmarkEl.getBoundingClientRect().height;
          return { height: height, width: width };
        }
      });
      this.ripple_ = rippleFactory(this.root_, new ripple["MDCRippleFoundation"](adapter));
    } else {
      this.ripple_ = rippleFactory(this.root_);
    }
  };

  MDCChip.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var _this3 = this;

    this.handleInteraction_ = function (evt) {
      return _this3.foundation_.handleInteraction(evt);
    };
    this.handleTransitionEnd_ = function (evt) {
      return _this3.foundation_.handleTransitionEnd(evt);
    };
    this.handleTrailingIconInteraction_ = function (evt) {
      return _this3.foundation_.handleTrailingIconInteraction(evt);
    };

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this3.root_.addEventListener(evtType, _this3.handleInteraction_);
    });
    this.root_.addEventListener('transitionend', this.handleTransitionEnd_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this3.trailingIcon_.addEventListener(evtType, _this3.handleTrailingIconInteraction_);
      });
    }
  };

  MDCChip.prototype.destroy = function destroy() {
    var _this4 = this;

    this.ripple_.destroy();

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this4.root_.removeEventListener(evtType, _this4.handleInteraction_);
    });
    this.root_.removeEventListener('transitionend', this.handleTransitionEnd_);

    if (this.trailingIcon_) {
      INTERACTION_EVENTS.forEach(function (evtType) {
        _this4.trailingIcon_.removeEventListener(evtType, _this4.handleTrailingIconInteraction_);
      });
    }

    _MDCComponent.prototype.destroy.call(this);
  };

  /**
   * Returns whether the chip is selected.
   * @return {boolean}
   */


  /**
   * Begins the exit animation which leads to removal of the chip.
   */
  MDCChip.prototype.beginExit = function beginExit() {
    this.foundation_.beginExit();
  };

  /**
   * @return {!MDCChipFoundation}
   */


  MDCChip.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this5 = this;

    return new foundation_MDCChipFoundation( /** @type {!MDCChipAdapter} */chip__extends({
      addClass: function addClass(className) {
        return _this5.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this5.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this5.root_.classList.contains(className);
      },
      addClassToLeadingIcon: function addClassToLeadingIcon(className) {
        if (_this5.leadingIcon_) {
          _this5.leadingIcon_.classList.add(className);
        }
      },
      removeClassFromLeadingIcon: function removeClassFromLeadingIcon(className) {
        if (_this5.leadingIcon_) {
          _this5.leadingIcon_.classList.remove(className);
        }
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target.classList.contains(className);
      },
      notifyInteraction: function notifyInteraction() {
        return _this5.emit(strings.INTERACTION_EVENT, { chipId: _this5.id }, true /* shouldBubble */);
      },
      notifyTrailingIconInteraction: function notifyTrailingIconInteraction() {
        return _this5.emit(strings.TRAILING_ICON_INTERACTION_EVENT, { chipId: _this5.id }, true /* shouldBubble */);
      },
      notifyRemoval: function notifyRemoval() {
        return _this5.emit(strings.REMOVAL_EVENT, { chipId: _this5.id, root: _this5.root_ }, true /* shouldBubble */);
      },
      getComputedStyleValue: function getComputedStyleValue(propertyName) {
        return window.getComputedStyle(_this5.root_).getPropertyValue(propertyName);
      },
      setStyleProperty: function setStyleProperty(propertyName, value) {
        return _this5.root_.style.setProperty(propertyName, value);
      }
    }));
  };

  /** @return {!MDCRipple} */


  chip__createClass(MDCChip, [{
    key: 'selected',
    get: function get() {
      return this.foundation_.isSelected();
    }

    /**
     * Sets selected state on the chip.
     * @param {boolean} selected
     */
    ,
    set: function set(selected) {
      this.foundation_.setSelected(selected);
    }

    /**
     * Returns whether a trailing icon click should trigger exit/removal of the chip.
     * @return {boolean}
     */

  }, {
    key: 'shouldRemoveOnTrailingIconClick',
    get: function get() {
      return this.foundation_.getShouldRemoveOnTrailingIconClick();
    }

    /**
     * Sets whether a trailing icon click should trigger exit/removal of the chip.
     * @param {boolean} shouldRemove
     */
    ,
    set: function set(shouldRemove) {
      this.foundation_.setShouldRemoveOnTrailingIconClick(shouldRemove);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }]);

  return MDCChip;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/adapter.js
function adapter__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Chip Set.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Chip Set into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCChipSetAdapter = function () {
  function MDCChipSetAdapter() {
    adapter__classCallCheck(this, MDCChipSetAdapter);
  }

  /**
   * Returns true if the root element contains the given class name.
   * @param {string} className
   * @return {boolean}
   */
  MDCChipSetAdapter.prototype.hasClass = function hasClass(className) {};

  /**
   * Removes the chip with the given id from the chip set.
   * @param {string} chipId
   */


  MDCChipSetAdapter.prototype.removeChip = function removeChip(chipId) {};

  /**
   * Sets the selected state of the chip with the given id.
   * @param {string} chipId
   * @param {boolean} selected
   */


  MDCChipSetAdapter.prototype.setSelected = function setSelected(chipId, selected) {};

  return MDCChipSetAdapter;
}();

/* harmony default export */ var chip_set_adapter = (MDCChipSetAdapter);
// CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var constants_strings = {
  CHIP_SELECTOR: '.mdc-chip'
};

/** @enum {string} */
var constants_cssClasses = {
  CHOICE: 'mdc-chip-set--choice',
  FILTER: 'mdc-chip-set--filter'
};


// CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/foundation.js
var foundation__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var foundation__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function chip_set_foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function foundation__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function foundation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



// eslint-disable-next-line no-unused-vars



/**
 * @extends {MDCFoundation<!MDCChipSetAdapter>}
 * @final
 */

var foundation_MDCChipSetFoundation = function (_MDCFoundation) {
  foundation__inherits(MDCChipSetFoundation, _MDCFoundation);

  foundation__createClass(MDCChipSetFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return constants_strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return constants_cssClasses;
    }

    /**
     * {@see MDCChipSetAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCChipSetAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCChipSetAdapter} */{
          hasClass: function hasClass() {},
          removeChip: function removeChip() {},
          setSelected: function setSelected() {}
        }
      );
    }

    /**
     * @param {!MDCChipSetAdapter} adapter
     */

  }]);

  function MDCChipSetFoundation(adapter) {
    chip_set_foundation__classCallCheck(this, MDCChipSetFoundation);

    /**
     * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
     * @private {!Array<string>}
     */
    var _this = foundation__possibleConstructorReturn(this, _MDCFoundation.call(this, foundation__extends(MDCChipSetFoundation.defaultAdapter, adapter)));

    _this.selectedChipIds_ = [];
    return _this;
  }

  /**
   * Returns an array of the IDs of all selected chips.
   * @return {!Array<string>}
   */


  MDCChipSetFoundation.prototype.getSelectedChipIds = function getSelectedChipIds() {
    return this.selectedChipIds_;
  };

  /**
   * Toggles selection of the chip with the given id.
   * @param {string} chipId
   */


  MDCChipSetFoundation.prototype.toggleSelect = function toggleSelect(chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      this.deselect(chipId);
    } else {
      this.select(chipId);
    }
  };

  /**
   * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
   * @param {string} chipId
   */


  MDCChipSetFoundation.prototype.select = function select(chipId) {
    if (this.selectedChipIds_.indexOf(chipId) >= 0) {
      return;
    }

    if (this.adapter_.hasClass(constants_cssClasses.CHOICE) && this.selectedChipIds_.length > 0) {
      this.adapter_.setSelected(this.selectedChipIds_[0], false);
      this.selectedChipIds_.length = 0;
    }
    this.adapter_.setSelected(chipId, true);
    this.selectedChipIds_.push(chipId);
  };

  /**
   * Deselects the chip with the given id.
   * @param {string} chipId
   */


  MDCChipSetFoundation.prototype.deselect = function deselect(chipId) {
    var index = this.selectedChipIds_.indexOf(chipId);
    if (index >= 0) {
      this.selectedChipIds_.splice(index, 1);
      this.adapter_.setSelected(chipId, false);
    }
  };

  /**
   * Handles a chip interaction event
   * @param {!MDCChipInteractionEventType} evt
   */


  MDCChipSetFoundation.prototype.handleChipInteraction = function handleChipInteraction(evt) {
    var chipId = evt.detail.chipId;

    if (this.adapter_.hasClass(constants_cssClasses.CHOICE) || this.adapter_.hasClass(constants_cssClasses.FILTER)) {
      this.toggleSelect(chipId);
    }
  };

  /**
   * Handles the event when a chip is removed.
   * @param {!MDCChipRemovalEventType} evt
   */


  MDCChipSetFoundation.prototype.handleChipRemoval = function handleChipRemoval(evt) {
    var chipId = evt.detail.chipId;

    this.deselect(chipId);
    this.adapter_.removeChip(chipId);
  };

  return MDCChipSetFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var chip_set_foundation = (foundation_MDCChipSetFoundation);
// CONCATENATED MODULE: ../node_modules/@material/chips/chip-set/index.js
var chip_set__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var chip_set__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function chip_set__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function chip_set__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function chip_set__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var idCounter = 0;

/**
 * @extends {MDCComponent<!MDCChipSetFoundation>}
 * @final
 */

var chip_set_MDCChipSet = function (_MDCComponent) {
  chip_set__inherits(MDCChipSet, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCChipSet() {
    chip_set__classCallCheck(this, MDCChipSet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {!Array<!MDCChip>} */
    var _this = chip_set__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.chips;
    /** @private {(function(!Element): !MDCChip)} */
    _this.chipFactory_;

    /** @private {?function(?Event): undefined} */
    _this.handleChipInteraction_;
    /** @private {?function(?Event): undefined} */
    _this.handleChipRemoval_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCChipSet}
   */


  MDCChipSet.attachTo = function attachTo(root) {
    return new MDCChipSet(root);
  };

  /**
   * @param {(function(!Element): !MDCChip)=} chipFactory A function which
   * creates a new MDCChip.
   */


  MDCChipSet.prototype.initialize = function initialize() {
    var chipFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new chip_MDCChip(el);
    };

    this.chipFactory_ = chipFactory;
    this.chips = this.instantiateChips_(this.chipFactory_);
  };

  MDCChipSet.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var _this2 = this;

    this.chips.forEach(function (chip) {
      if (chip.selected) {
        _this2.foundation_.select(chip.id);
      }
    });

    this.handleChipInteraction_ = function (evt) {
      return _this2.foundation_.handleChipInteraction(evt);
    };
    this.handleChipRemoval_ = function (evt) {
      return _this2.foundation_.handleChipRemoval(evt);
    };
    this.root_.addEventListener(foundation_MDCChipFoundation.strings.INTERACTION_EVENT, this.handleChipInteraction_);
    this.root_.addEventListener(foundation_MDCChipFoundation.strings.REMOVAL_EVENT, this.handleChipRemoval_);
  };

  MDCChipSet.prototype.destroy = function destroy() {
    this.chips.forEach(function (chip) {
      chip.destroy();
    });

    this.root_.removeEventListener(foundation_MDCChipFoundation.strings.INTERACTION_EVENT, this.handleChipInteraction_);
    this.root_.removeEventListener(foundation_MDCChipFoundation.strings.REMOVAL_EVENT, this.handleChipRemoval_);

    _MDCComponent.prototype.destroy.call(this);
  };

  /**
   * Adds a new chip object to the chip set from the given chip element.
   * @param {!Element} chipEl
   */


  MDCChipSet.prototype.addChip = function addChip(chipEl) {
    chipEl.id = chipEl.id || 'mdc-chip-' + ++idCounter;
    this.chips.push(this.chipFactory_(chipEl));
  };

  /**
   * Returns an array of the IDs of all selected chips.
   * @return {!Array<string>}
   */


  /**
   * @return {!MDCChipSetFoundation}
   */
  MDCChipSet.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new chip_set_foundation( /** @type {!MDCChipSetAdapter} */chip_set__extends({
      hasClass: function hasClass(className) {
        return _this3.root_.classList.contains(className);
      },
      removeChip: function removeChip(chipId) {
        var index = _this3.findChipIndex_(chipId);
        if (index >= 0) {
          _this3.chips[index].destroy();
          _this3.chips.splice(index, 1);
        }
      },
      setSelected: function setSelected(chipId, selected) {
        var index = _this3.findChipIndex_(chipId);
        if (index >= 0) {
          _this3.chips[index].selected = selected;
        }
      }
    }));
  };

  /**
   * Instantiates chip components on all of the chip set's child chip elements.
   * @param {(function(!Element): !MDCChip)} chipFactory
   * @return {!Array<!MDCChip>}
   */


  MDCChipSet.prototype.instantiateChips_ = function instantiateChips_(chipFactory) {
    var chipElements = [].slice.call(this.root_.querySelectorAll(chip_set_foundation.strings.CHIP_SELECTOR));
    return chipElements.map(function (el) {
      el.id = el.id || 'mdc-chip-' + ++idCounter;
      return chipFactory(el);
    });
  };

  /**
   * Returns the index of the chip with the given id, or -1 if the chip does not exist.
   * @param {string} chipId
   * @return {number}
   */


  MDCChipSet.prototype.findChipIndex_ = function findChipIndex_(chipId) {
    for (var i = 0; i < this.chips.length; i++) {
      if (this.chips[i].id === chipId) {
        return i;
      }
    }
    return -1;
  };

  chip_set__createClass(MDCChipSet, [{
    key: 'selectedChipIds',
    get: function get() {
      return this.foundation_.getSelectedChipIds();
    }
  }]);

  return MDCChipSet;
}(component["a" /* default */]);


// CONCATENATED MODULE: ../node_modules/@material/chips/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCChipFoundation", function() { return foundation_MDCChipFoundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCChip", function() { return chip_MDCChip; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCChipSetFoundation", function() { return chip_set_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCChipSet", function() { return chip_set_MDCChipSet; });
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ "aqQ4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b9XL":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "bmYm":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.fetchJsonp = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  var defaultOptions = {
    timeout: 5000,
    jsonpCallback: 'callback',
    jsonpCallbackFunction: null

  };

  function generateCallbackFunction() {
    // return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
    return 'jsonp_' + Math.ceil(Math.random() * 100000) + '_' + Date.now();
  }

  function clearFunction(functionName) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[functionName];
    } catch (e) {
      window[functionName] = undefined;
    }
  }

  function removeScript(scriptId) {
    var script = document.getElementById(scriptId);
    if (script) {
      document.getElementsByTagName('head')[0].removeChild(script);
    }
  }

  function fetchJsonp(_url) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // to avoid param reassign
    var url = _url;
    var timeout = options.timeout || defaultOptions.timeout;
    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;

    var timeoutId = undefined;

    return new Promise(function (resolve, reject) {
      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
      var scriptId = jsonpCallback + '_' + callbackFunction;

      window[callbackFunction] = function (response) {
        resolve({
          ok: true,
          jsonp_url: _url,
          jsonpCallbackFunction: callbackFunction,
          // keep consistent with fetch API
          json: function json() {
            return Promise.resolve(response);
          }
        });

        if (timeoutId) clearTimeout(timeoutId);

        removeScript(scriptId);

        clearFunction(callbackFunction);
      };

      // Check if the user set their own params, and if not add a ? to start a list of params
      url += url.indexOf('?') === -1 ? '?' : '&';

      var jsonpScript = document.createElement('script');
      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
      console.log("fetch-jsonp: src=" + url + jsonpCallback + '=' + callbackFunction);
      if (options.charset) {
        console.log("fetch-jsonp: " + ' charset=' + options.charset);
        jsonpScript.setAttribute('charset', options.charset);
      }
      jsonpScript.id = scriptId;
      console.log("fetch-jsonp scriptId: " + scriptId);
      document.getElementsByTagName('head')[0].appendChild(jsonpScript);

      timeoutId = setTimeout(function () {
        console.log("fetch-jsonp: src=" + url + jsonpCallback + '=' + callbackFunction);
        reject(new Error('JSONP request to ' + _url + ' timed out (jsonpCallbackFunction: ' + callbackFunction + ')'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        window[callbackFunction] = function () {
          clearFunction(callbackFunction);
        };
      }, timeout);

      // Caught if got 404/500
      jsonpScript.onerror = function () {
        console.log("fetch-jsonp: src=" + url + jsonpCallback + '=' + callbackFunction);
        reject(new Error('JSONP request to ' + _url + ' failed'));

        clearFunction(callbackFunction);
        removeScript(scriptId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    });
  }

  // export as global function
  /*
  let local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }
  local.fetchJsonp = fetchJsonp;
  */

  module.exports = {
    fetchJsonp: fetchJsonp,
    generateCallbackFunction: generateCallbackFunction
  };
});

/***/ }),

/***/ "d4H2":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("AkAO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "dSNL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("uJAj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__("EQDb");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/***/ }),

/***/ "fHKL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TopAppBar = exports.TopAppBarTitle = exports.TopAppBarIcon = exports.TopAppBarSection = exports.TopAppBarRow = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _typeof2 = _interopRequireDefault(__webpack_require__("b9XL"));

var _topAppBar = __webpack_require__("NFzA");

var _bindDecorator = __webpack_require__("gKs0");

var _preact = __webpack_require__("KM04");

var _MaterialComponent6 = _interopRequireDefault(__webpack_require__("uc5p"));

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopAppBarRow =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(TopAppBarRow, _MaterialComponent);

  function TopAppBarRow() {
    var _this;

    (0, _classCallCheck2.default)(this, TopAppBarRow);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TopAppBarRow).apply(this, arguments));
    _this.componentName = 'top-app-bar__row';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(TopAppBarRow, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return TopAppBarRow;
}(_MaterialComponent6.default);

exports.TopAppBarRow = TopAppBarRow;

var TopAppBarSection =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(TopAppBarSection, _MaterialComponent2);

  function TopAppBarSection() {
    var _this2;

    (0, _classCallCheck2.default)(this, TopAppBarSection);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TopAppBarSection).apply(this, arguments));
    _this2.componentName = 'top-app-bar__section';
    _this2.mdcProps = ['align-start', 'align-end'];
    return _this2;
  }

  (0, _createClass2.default)(TopAppBarSection, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("section", _extends({}, props), props.children);
    }
  }]);
  return TopAppBarSection;
}(_MaterialComponent6.default);

exports.TopAppBarSection = TopAppBarSection;

var TopAppBarIcon =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(TopAppBarIcon, _MaterialComponent3);

  function TopAppBarIcon() {
    var _this3;

    (0, _classCallCheck2.default)(this, TopAppBarIcon);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TopAppBarIcon).apply(this, arguments));
    _this3.componentName = 'top-app-bar__icon';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(TopAppBarIcon, [{
    key: "materialDom",
    value: function materialDom(props) {
      var className = props.navigation ? 'material-icons mdc-top-app-bar__navigation-icon' : 'material-icons';
      return (0, _preact.h)("a", _extends({
        className: className
      }, props), props.children);
    }
  }]);
  return TopAppBarIcon;
}(_MaterialComponent6.default);

exports.TopAppBarIcon = TopAppBarIcon;

var TopAppBarTitle =
/*#__PURE__*/
function (_MaterialComponent4) {
  (0, _inherits2.default)(TopAppBarTitle, _MaterialComponent4);

  function TopAppBarTitle() {
    var _this4;

    (0, _classCallCheck2.default)(this, TopAppBarTitle);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TopAppBarTitle).apply(this, arguments));
    _this4.componentName = 'top-app-bar__title';
    _this4.mdcProps = [];
    return _this4;
  }

  (0, _createClass2.default)(TopAppBarTitle, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("span", _extends({}, props), props.children);
    }
  }]);
  return TopAppBarTitle;
}(_MaterialComponent6.default);

exports.TopAppBarTitle = TopAppBarTitle;

var TopAppBar =
/*#__PURE__*/
function (_MaterialComponent5) {
  (0, _inherits2.default)(TopAppBar, _MaterialComponent5);

  function TopAppBar() {
    var _this5;

    (0, _classCallCheck2.default)(this, TopAppBar);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TopAppBar).apply(this, arguments));
    _this5.componentName = 'top-app-bar';
    _this5.mdcProps = ['short', 'short-collapsed', 'fixed', 'prominent'];
    return _this5;
  }

  (0, _createClass2.default)(TopAppBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TopAppBar.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        var comp = new _topAppBar.MDCTopAppBar(this.control);
        comp.listen('MDCTopAppBar:nav', this.onNav);
        this.MDComponent = comp;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(TopAppBar.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.unlisten('MDCTopAppBar:nav', this.onNav);
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "onNav",
    value: function onNav(e) {
      if (this.props.onNav) {
        this.props.onNav(e);
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("header", _extends({
        ref: this.setControlRef
      }, props), props.children);
    }
  }]);
  return TopAppBar;
}(_MaterialComponent6.default);

exports.TopAppBar = TopAppBar;

__decorate([_bindDecorator.bind], TopAppBar.prototype, "onNav", null);

var default_1 =
/*#__PURE__*/
function (_TopAppBar) {
  (0, _inherits2.default)(default_1, _TopAppBar);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(TopAppBar);

exports.default = default_1;
default_1.Section = TopAppBarSection;
default_1.Icon = TopAppBarIcon;
default_1.Title = TopAppBarTitle;
default_1.Row = TopAppBarRow;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "gKs0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || typeof descriptor.value !== constants.typeOfFunction) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function get() {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;

/***/ }),

/***/ "joOv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() { return supportsCssVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPassive", function() { return applyPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() { return getMatchesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() { return getNormalizedEventCoords; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}



/***/ }),

/***/ "ll9a":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__OgLBD","cardHeader":"cardHeader__dmFTm","cardBody":"cardBody__2G9no"};

/***/ }),

/***/ "mWaD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__3UnnH","cardHeader":"cardHeader__ANPjy","cardBody":"cardBody__2SSXG"};

/***/ }),

/***/ "nQ/l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/selection-control/index.js
var selection_control = __webpack_require__("BYeg");

// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/switch/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Switch. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCSwitchAdapter = function () {
  function MDCSwitchAdapter() {
    _classCallCheck(this, MDCSwitchAdapter);
  }

  /** @param {string} className */
  MDCSwitchAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCSwitchAdapter.prototype.removeClass = function removeClass(className) {};

  /** @param {boolean} checked */


  MDCSwitchAdapter.prototype.setNativeControlChecked = function setNativeControlChecked(checked) {};

  /** @param {boolean} disabled */


  MDCSwitchAdapter.prototype.setNativeControlDisabled = function setNativeControlDisabled(disabled) {};

  return MDCSwitchAdapter;
}();

/* harmony default export */ var switch_adapter = (MDCSwitchAdapter);
// CONCATENATED MODULE: ../node_modules/@material/switch/constants.js
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  CHECKED: 'mdc-switch--checked',
  DISABLED: 'mdc-switch--disabled'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',
  RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay'
};


// CONCATENATED MODULE: ../node_modules/@material/switch/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCSwitchAdapter>}
 */

var foundation_MDCSwitchFoundation = function (_MDCFoundation) {
  _inherits(MDCSwitchFoundation, _MDCFoundation);

  _createClass(MDCSwitchFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }

    /** @return {!MDCSwitchAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSwitchAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setNativeControlChecked: function setNativeControlChecked() /* checked: boolean */{},
          setNativeControlDisabled: function setNativeControlDisabled() /* disabled: boolean */{}
        }
      );
    }
  }]);

  function MDCSwitchFoundation(adapter) {
    foundation__classCallCheck(this, MDCSwitchFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSwitchFoundation.defaultAdapter, adapter)));
  }

  /** @param {boolean} checked */


  MDCSwitchFoundation.prototype.setChecked = function setChecked(checked) {
    this.adapter_.setNativeControlChecked(checked);
    this.updateCheckedStyling_(checked);
  };

  /** @param {boolean} disabled */


  MDCSwitchFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.adapter_.setNativeControlDisabled(disabled);
    if (disabled) {
      this.adapter_.addClass(cssClasses.DISABLED);
    } else {
      this.adapter_.removeClass(cssClasses.DISABLED);
    }
  };

  /**
   * Handles the change event for the switch native control.
   * @param {!Event} evt
   */


  MDCSwitchFoundation.prototype.handleChange = function handleChange(evt) {
    this.updateCheckedStyling_(evt.target.checked);
  };

  /**
   * Updates the styling of the switch based on its checked state.
   * @param {boolean} checked
   * @private
   */


  MDCSwitchFoundation.prototype.updateCheckedStyling_ = function updateCheckedStyling_(checked) {
    if (checked) {
      this.adapter_.addClass(cssClasses.CHECKED);
    } else {
      this.adapter_.removeClass(cssClasses.CHECKED);
    }
  };

  return MDCSwitchFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var switch_foundation = (foundation_MDCSwitchFoundation);
// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
var util = __webpack_require__("joOv");

// CONCATENATED MODULE: ../node_modules/@material/switch/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSwitch", function() { return switch_MDCSwitch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCSwitchFoundation", function() { return switch_foundation; });
var switch__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var switch__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function switch__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function switch__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function switch__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */




/**
 * @extends MDCComponent<!MDCSwitchFoundation>
 * @implements {MDCSelectionControl}
 */

var switch_MDCSwitch = function (_MDCComponent) {
  switch__inherits(MDCSwitch, _MDCComponent);

  MDCSwitch.attachTo = function attachTo(root) {
    return new MDCSwitch(root);
  };

  function MDCSwitch() {
    switch__classCallCheck(this, MDCSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = switch__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();

    /** @private {!Function} */
    _this.changeHandler_;
    return _this;
  }

  MDCSwitch.prototype.destroy = function destroy() {
    _MDCComponent.prototype.destroy.call(this);
    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.changeHandler_);
  };

  MDCSwitch.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.changeHandler_ = this.foundation_.handleChange.bind(this.foundation_);
    this.nativeControl_.addEventListener('change', this.changeHandler_);

    // Sometimes the checked state of the input element is saved in the history.
    // The switch styling should match the checked state of the input element.
    // Do an initial sync between the native control and the foundation.
    this.checked = this.checked;
  };

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */


  /**
   * @return {!MDCRipple}
   * @private
   */
  MDCSwitch.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var RIPPLE_SURFACE_SELECTOR = switch_foundation.strings.RIPPLE_SURFACE_SELECTOR;

    var rippleSurface = /** @type {!Element} */this.root_.querySelector(RIPPLE_SURFACE_SELECTOR);

    var MATCHES = Object(util["getMatchesProperty"])(HTMLElement.prototype);
    var adapter = switch__extends(ripple["MDCRipple"].createAdapter(this), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return _this2.nativeControl_[MATCHES](':active');
      },
      addClass: function addClass(className) {
        return rippleSurface.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return rippleSurface.classList.remove(className);
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this2.nativeControl_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this2.nativeControl_.removeEventListener(type, handler);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return rippleSurface.style.setProperty(varName, value);
      },
      computeBoundingRect: function computeBoundingRect() {
        return rippleSurface.getBoundingClientRect();
      }
    });
    var foundation = new ripple["MDCRippleFoundation"](adapter);
    return new ripple["MDCRipple"](this.root_, foundation);
  };

  /** @return {!MDCSwitchFoundation} */


  MDCSwitch.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new switch_foundation({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      setNativeControlChecked: function setNativeControlChecked(checked) {
        return _this3.nativeControl_.checked = checked;
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this3.nativeControl_.disabled = disabled;
      }
    });
  };

  /** @return {!MDCRipple} */


  switch__createClass(MDCSwitch, [{
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = switch_foundation.strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.nativeControl_.checked;
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.nativeControl_.disabled;
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCSwitch;
}(component["a" /* default */]);



/***/ }),

/***/ "o82Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ChipSet = exports.ChipText = exports.ChipCheckmark = exports.ChipIcon = exports.Chip = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _chips = __webpack_require__("aa0x");

var _preact = __webpack_require__("KM04");

var _MaterialComponent4 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Icon3 = _interopRequireDefault(__webpack_require__("MeGi"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Chip =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Chip, _MaterialComponent);

  function Chip() {
    var _this;

    (0, _classCallCheck2.default)(this, Chip);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Chip).apply(this, arguments));
    _this.componentName = 'chip';
    _this.mdcProps = ['selected'];
    return _this;
  }

  (0, _createClass2.default)(Chip, [{
    key: "materialDom",
    value: function materialDom(allprops) {
      var children = allprops.children,
          props = __rest(allprops, ["children"]);

      return (0, _preact.h)("div", _extends({}, props, {
        ref: this.setControlRef
      }), children);
    }
  }]);
  return Chip;
}(_MaterialComponent4.default);

exports.Chip = Chip;

var ChipIcon =
/*#__PURE__*/
function (_Icon) {
  (0, _inherits2.default)(ChipIcon, _Icon);

  function ChipIcon() {
    var _this2;

    (0, _classCallCheck2.default)(this, ChipIcon);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChipIcon).apply(this, arguments));
    _this2.componentName = 'chip__icon';
    _this2.mdcProps = ['leading', 'trailing'];
    return _this2;
  }

  (0, _createClass2.default)(ChipIcon, [{
    key: "materialDom",
    value: function materialDom(allprops) {
      var children = allprops.children,
          props = __rest(allprops, ["children"]);

      var otherprops = {};

      if (props.trailing) {
        otherprops.tabindex = 0;
        otherprops.role = 'button';
      }

      return (0, _preact.h)(_Icon3.default, _extends({}, props, otherprops), children);
    }
  }]);
  return ChipIcon;
}(_Icon3.default);

exports.ChipIcon = ChipIcon;

var ChipCheckmark =
/*#__PURE__*/
function (_Icon2) {
  (0, _inherits2.default)(ChipCheckmark, _Icon2);

  function ChipCheckmark() {
    var _this3;

    (0, _classCallCheck2.default)(this, ChipCheckmark);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChipCheckmark).apply(this, arguments));
    _this3.componentName = 'chip__checkmark';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(ChipCheckmark, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), (0, _preact.h)("svg", {
        class: "mdc-chip__checkmark-svg",
        viewBox: "-2 -3 30 30"
      }, (0, _preact.h)("path", {
        class: "mdc-chip__checkmark-path",
        fill: "none",
        stroke: "black",
        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
      })));
    }
  }]);
  return ChipCheckmark;
}(_Icon3.default);

exports.ChipCheckmark = ChipCheckmark;

var ChipText =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(ChipText, _MaterialComponent2);

  function ChipText() {
    var _this4;

    (0, _classCallCheck2.default)(this, ChipText);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChipText).apply(this, arguments));
    _this4.componentName = 'chip__text';
    _this4.mdcProps = [];
    return _this4;
  }

  (0, _createClass2.default)(ChipText, [{
    key: "materialDom",
    value: function materialDom(allprops) {
      var children = allprops.children,
          props = __rest(allprops, ["children"]);

      return (0, _preact.h)("div", _extends({}, props), children);
    }
  }]);
  return ChipText;
}(_MaterialComponent4.default);

exports.ChipText = ChipText;

var ChipSet =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(ChipSet, _MaterialComponent3);

  function ChipSet() {
    var _this5;

    (0, _classCallCheck2.default)(this, ChipSet);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ChipSet).apply(this, arguments));
    _this5.componentName = 'chip-set';
    _this5.mdcProps = ['choice', 'filter', 'input'];
    return _this5;
  }

  (0, _createClass2.default)(ChipSet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(ChipSet.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _chips.MDCChipSet(this.control);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(ChipSet.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var children = allprops.children,
          props = __rest(allprops, ["children"]);

      return (0, _preact.h)("div", _extends({}, props, {
        ref: this.setControlRef
      }), children);
    }
  }]);
  return ChipSet;
}(_MaterialComponent4.default);

exports.ChipSet = ChipSet;

var default_1 =
/*#__PURE__*/
function (_ChipSet) {
  (0, _inherits2.default)(default_1, _ChipSet);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(ChipSet);

exports.default = default_1;
default_1.Chip = Chip;
default_1.Icon = ChipIcon;
default_1.Text = ChipText;
default_1.Checkmark = ChipCheckmark;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "qKn3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rENG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// EXTERNAL MODULE: ../node_modules/@material/selection-control/index.js
var selection_control = __webpack_require__("BYeg");

// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var base_foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/radio/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable no-unused-vars */


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Radio. Provides an interface for managing
 * - classes
 * - dom
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */

var MDCRadioAdapter = function () {
  function MDCRadioAdapter() {
    _classCallCheck(this, MDCRadioAdapter);
  }

  /** @param {string} className */
  MDCRadioAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCRadioAdapter.prototype.removeClass = function removeClass(className) {};

  /** @return {!MDCSelectionControlState} */


  MDCRadioAdapter.prototype.getNativeControl = function getNativeControl() {};

  return MDCRadioAdapter;
}();

/* harmony default export */ var radio_adapter = (MDCRadioAdapter);
// CONCATENATED MODULE: ../node_modules/@material/radio/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};


// CONCATENATED MODULE: ../node_modules/@material/radio/foundation.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */


/**
 * @extends {MDCFoundation<!MDCRadioAdapter>}
 */

var foundation_MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    foundation__classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, _MDCFoundation.apply(this, arguments));
  }

  /** @return {boolean} */
  MDCRadioFoundation.prototype.isChecked = function isChecked() {
    return this.getNativeControl_().checked;
  };

  /** @param {boolean} checked */


  MDCRadioFoundation.prototype.setChecked = function setChecked(checked) {
    this.getNativeControl_().checked = checked;
  };

  /** @return {boolean} */


  MDCRadioFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeControl_().disabled;
  };

  /** @param {boolean} disabled */


  MDCRadioFoundation.prototype.setDisabled = function setDisabled(disabled) {
    var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  };

  /** @return {?string} */


  MDCRadioFoundation.prototype.getValue = function getValue() {
    return this.getNativeControl_().value;
  };

  /** @param {?string} value */


  MDCRadioFoundation.prototype.setValue = function setValue(value) {
    this.getNativeControl_().value = value;
  };

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */


  MDCRadioFoundation.prototype.getNativeControl_ = function getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null
    };
  };

  _createClass(MDCRadioFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return cssClasses;
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }

    /** @return {!MDCRadioAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCRadioAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{}
        }
      );
    }
  }]);

  return MDCRadioFoundation;
}(base_foundation["a" /* default */]);

/* harmony default export */ var radio_foundation = (foundation_MDCRadioFoundation);
// EXTERNAL MODULE: ../node_modules/@material/ripple/index.js + 3 modules
var ripple = __webpack_require__("vkNc");

// CONCATENATED MODULE: ../node_modules/@material/radio/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRadio", function() { return radio_MDCRadio; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCRadioFoundation", function() { return radio_foundation; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var radio__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function radio__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function radio__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function radio__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */



/**
 * @extends MDCComponent<!MDCRadioFoundation>
 * @implements {MDCSelectionControl}
 */

var radio_MDCRadio = function (_MDCComponent) {
  radio__inherits(MDCRadio, _MDCComponent);

  MDCRadio.attachTo = function attachTo(root) {
    return new MDCRadio(root);
  };

  /** @return {boolean} */


  radio__createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }

    /** @return {!MDCRipple} */

  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }]);

  function MDCRadio() {
    radio__classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = radio__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  MDCRadio.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var adapter = _extends(ripple["MDCRipple"].createAdapter(this), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: function isSurfaceActive() {
        return false;
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this2.nativeControl_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this2.nativeControl_.removeEventListener(type, handler);
      }
    });
    var foundation = new ripple["MDCRippleFoundation"](adapter);
    return new ripple["MDCRipple"](this.root_, foundation);
  };

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */


  MDCRadio.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    _MDCComponent.prototype.destroy.call(this);
  };

  /** @return {!MDCRadioFoundation} */


  MDCRadio.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new radio_foundation({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      getNativeControl: function getNativeControl() {
        return _this3.root_.querySelector(radio_foundation.strings.NATIVE_CONTROL_SELECTOR);
      }
    });
  };

  radio__createClass(MDCRadio, [{
    key: 'nativeControl_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = radio_foundation.strings.NATIVE_CONTROL_SELECTOR;

      var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return el;
    }
  }]);

  return MDCRadio;
}(component["a" /* default */]);



/***/ }),

/***/ "rW9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Formfield = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var Formfield =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Formfield, _MaterialComponent);

  function Formfield() {
    var _this;

    (0, _classCallCheck2.default)(this, Formfield);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Formfield).apply(this, arguments));
    _this.componentName = 'form-field';
    _this.mdcProps = ['align-end'];
    return _this;
  }

  (0, _createClass2.default)(Formfield, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return Formfield;
}(_MaterialComponent2.default);

exports.Formfield = Formfield;
var _default = Formfield;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sEh6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sJaT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Card = exports.CardMediaContent = exports.CardActionIcon = exports.CardActionButtons = exports.CardActionIcons = exports.CardActionButton = exports.CardMedia = exports.CardActions = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _preact = __webpack_require__("KM04");

var _MaterialComponent6 = _interopRequireDefault(__webpack_require__("uc5p"));

var _Button2 = _interopRequireDefault(__webpack_require__("7/cg"));

var _Icon2 = _interopRequireDefault(__webpack_require__("MeGi"));

var CardActions =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(CardActions, _MaterialComponent);

  function CardActions() {
    var _this;

    (0, _classCallCheck2.default)(this, CardActions);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActions).apply(this, arguments));
    _this.componentName = 'card__actions';
    _this.mdcProps = ['full-bleed'];
    return _this;
  }

  (0, _createClass2.default)(CardActions, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardActions;
}(_MaterialComponent6.default);

exports.CardActions = CardActions;

var CardMedia =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(CardMedia, _MaterialComponent2);

  function CardMedia() {
    var _this2;

    (0, _classCallCheck2.default)(this, CardMedia);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardMedia).apply(this, arguments));
    _this2.componentName = 'card__media';
    _this2.mdcProps = ['square', '16-9'];
    return _this2;
  }

  (0, _createClass2.default)(CardMedia, [{
    key: "materialDom",
    value: function materialDom(props) {
      if (props.sixteenByNine) {
        props.className = 'mdc-card__media--16-9';
      }

      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardMedia;
}(_MaterialComponent6.default);

exports.CardMedia = CardMedia;

var CardActionButton =
/*#__PURE__*/
function (_Button) {
  (0, _inherits2.default)(CardActionButton, _Button);

  function CardActionButton() {
    var _this3;

    (0, _classCallCheck2.default)(this, CardActionButton);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionButton).apply(this, arguments));
    _this3.componentName = 'card__action';
    _this3.mdcProps = [];
    return _this3;
  }

  (0, _createClass2.default)(CardActionButton, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("button", _extends({
        className: "mdc-button mdc-card__action--button"
      }, props, {
        ref: this.setControlRef
      }), props.children);
    }
  }]);
  return CardActionButton;
}(_Button2.default);

exports.CardActionButton = CardActionButton;

var CardActionIcons =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(CardActionIcons, _MaterialComponent3);

  function CardActionIcons() {
    var _this4;

    (0, _classCallCheck2.default)(this, CardActionIcons);
    _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionIcons).apply(this, arguments));
    _this4.componentName = 'card__action-icons';
    _this4.mdcProps = [];
    return _this4;
  }

  (0, _createClass2.default)(CardActionIcons, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardActionIcons;
}(_MaterialComponent6.default);

exports.CardActionIcons = CardActionIcons;

var CardActionButtons =
/*#__PURE__*/
function (_CardActionIcons) {
  (0, _inherits2.default)(CardActionButtons, _CardActionIcons);

  function CardActionButtons() {
    var _this5;

    (0, _classCallCheck2.default)(this, CardActionButtons);
    _this5 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionButtons).apply(this, arguments));
    _this5.componentName = 'card__action-buttons';
    return _this5;
  }

  return CardActionButtons;
}(CardActionIcons);

exports.CardActionButtons = CardActionButtons;

var CardActionIcon =
/*#__PURE__*/
function (_Icon) {
  (0, _inherits2.default)(CardActionIcon, _Icon);

  function CardActionIcon() {
    var _this6;

    (0, _classCallCheck2.default)(this, CardActionIcon);
    _this6 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardActionIcon).apply(this, arguments));
    _this6.componentName = 'card__action';
    _this6.mdcProps = [];
    return _this6;
  }

  (0, _createClass2.default)(CardActionIcon, [{
    key: "materialDom",
    value: function materialDom(props) {
      if (props.className) {
        props.className += ' mdc-card__action--icon';
      } else {
        props.className = 'mdc-card__action--icon';
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(CardActionIcon.prototype), "materialDom", this).call(this, props);
    }
  }]);
  return CardActionIcon;
}(_Icon2.default);

exports.CardActionIcon = CardActionIcon;

var CardMediaContent =
/*#__PURE__*/
function (_MaterialComponent4) {
  (0, _inherits2.default)(CardMediaContent, _MaterialComponent4);

  function CardMediaContent() {
    var _this7;

    (0, _classCallCheck2.default)(this, CardMediaContent);
    _this7 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CardMediaContent).apply(this, arguments));
    _this7.componentName = 'card__media-content';
    _this7.mdcProps = [];
    return _this7;
  }

  (0, _createClass2.default)(CardMediaContent, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return CardMediaContent;
}(_MaterialComponent6.default);

exports.CardMediaContent = CardMediaContent;

var Card =
/*#__PURE__*/
function (_MaterialComponent5) {
  (0, _inherits2.default)(Card, _MaterialComponent5);

  function Card() {
    var _this8;

    (0, _classCallCheck2.default)(this, Card);
    _this8 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Card).apply(this, arguments));
    _this8.componentName = 'card';
    _this8.mdcProps = ['outlined'];
    return _this8;
  }

  (0, _createClass2.default)(Card, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", _extends({}, props), this.props.children);
    }
  }]);
  return Card;
}(_MaterialComponent6.default);

exports.Card = Card;

var default_1 =
/*#__PURE__*/
function (_Card) {
  (0, _inherits2.default)(default_1, _Card);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Card);

exports.default = default_1;
default_1.Actions = CardActions;
default_1.ActionButtons = CardActionButtons;
default_1.ActionButton = CardActionButton;
default_1.ActionIcons = CardActionIcons;
default_1.ActionIcon = CardActionIcon;
default_1.Media = CardMedia;
default_1.CardMediaContent = CardMediaContent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "sdLF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Radio = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _radio = __webpack_require__("rENG");

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Radio =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Radio, _MaterialComponent);

  function Radio() {
    var _this;

    (0, _classCallCheck2.default)(this, Radio);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Radio).apply(this, arguments));
    _this.componentName = 'radio';
    _this.mdcProps = ['disabled'];
    _this.mdcNotifyProps = ['checked'];
    return _this;
  }

  (0, _createClass2.default)(Radio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Radio.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _radio.MDCRadio(this.control);
      }

      this.afterComponentDidMount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Radio.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var className = allprops.className,
          props = __rest(allprops, ["className"]);

      return (0, _preact.h)("div", {
        className: className,
        ref: this.setControlRef
      }, (0, _preact.h)("input", _extends({
        className: "mdc-radio__native-control",
        type: "radio"
      }, props)), (0, _preact.h)("div", {
        className: "mdc-radio__background"
      }, (0, _preact.h)("div", {
        className: "mdc-radio__outer-circle"
      }), (0, _preact.h)("div", {
        className: "mdc-radio__inner-circle"
      })));
    }
  }]);
  return Radio;
}(_MaterialComponent2.default);

exports.Radio = Radio;
var _default = Radio;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "u+vq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__2MqSo","active":"active__27Q54"};

/***/ }),

/***/ "uJAj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  MDCFoundation.prototype.init = function init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),

/***/ "uc5p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MaterialComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _typeof2 = _interopRequireDefault(__webpack_require__("b9XL"));

var _ripple = __webpack_require__("vkNc");

var _bindDecorator = __webpack_require__("gKs0");

var _preact = __webpack_require__("KM04");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var doNotRemoveProps = ['disabled'];
/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MaterialComponent, _Component);

  function MaterialComponent() {
    (0, _classCallCheck2.default)(this, MaterialComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MaterialComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(MaterialComponent, [{
    key: "render",
    value: function render(props) {
      if (!this.classText) {
        this.classText = this.buildClassName(props);
      } // Fetch a VNode


      var componentProps = props;
      var userDefinedClasses = componentProps.className || componentProps.class || ''; // We delete class props and add them later in the final
      // step so every component does not need to handle user specified classes.

      if (componentProps.class) {
        delete componentProps.class;
      }

      if (componentProps.className) {
        delete componentProps.className;
      }

      var element = this.materialDom(componentProps);
      var propName = 'attributes';

      if ('props' in element) {
        propName = 'props'; // @ts-ignore

        element.props = element.props || {};
      } else {
        element.attributes = element.attributes || {};
      } // @ts-ignore


      element[propName].className = "".concat(userDefinedClasses, " ").concat(this.getClassName(element)).split(' ').filter(function (value, index, self) {
        return self.indexOf(value) === index && value !== '';
      }) // Unique + exclude empty class names
      .join(' '); // Clean this shit of proxy attributes

      this.mdcProps.forEach(function (prop) {
        // TODO: Fix this better
        if (prop in doNotRemoveProps) {
          return;
        } // @ts-ignore


        delete element[propName][prop];
      });
      return element;
    }
    /** Attach the ripple effect */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.ripple && this.control) {
        this.ripple = new _ripple.MDCRipple(this.control);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.mdcNotifyProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var prop = _step.value;

            if (this.props[prop] !== nextProps[prop]) {
              this.MDComponent[prop] = nextProps[prop];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.mdcProps[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _prop = _step2.value;

          if (this.props[_prop] !== nextProps[_prop]) {
            this.classText = this.buildClassName(nextProps);
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.ripple) {
        this.ripple.destroy();
      }
    }
  }, {
    key: "afterComponentDidMount",
    value: function afterComponentDidMount() {
      if (this.MDComponent && this.mdcNotifyProps) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.mdcNotifyProps[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var prop = _step3.value;
            this.MDComponent[prop] = this.props[prop];
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } // Shared setter for the root element ref

  }, {
    key: "setControlRef",
    value: function setControlRef(control) {
      this.control = control;
    }
    /** Build the className based on component names and mdc props */

  }, {
    key: "buildClassName",
    value: function buildClassName(props) {
      // Class name based on component name
      var classText = 'mdc-' + this.componentName; // Loop over mdcProps to turn them into classNames

      for (var propKey in props) {
        if (props.hasOwnProperty(propKey)) {
          var prop = props[propKey];

          if (typeof prop === 'boolean' && prop) {
            if (this.mdcProps.indexOf(propKey) !== -1) {
              classText += " mdc-".concat(this.componentName, "--").concat(propKey);
            }
          }
        }
      }

      return classText;
    }
    /** Returns the class name for element */

  }, {
    key: "getClassName",
    value: function getClassName(element) {
      if (!element) {
        return '';
      }

      var propName = 'attributes';

      if ('props' in element) {
        propName = 'props'; // @ts-ignore

        element.props = element.props || {};
      } else {
        element.attributes = element.attributes || {};
      } // @ts-ignore


      var attrs = element[propName] = element[propName] || {};
      var classText = this.classText;

      if (attrs.class) {
        classText += ' ' + attrs.class;
      }

      if (attrs.className && attrs.className !== attrs.class) {
        classText += ' ' + attrs.className;
      }

      return classText;
    }
  }]);
  return MaterialComponent;
}(_preact.Component);

exports.MaterialComponent = MaterialComponent;

__decorate([_bindDecorator.bind], MaterialComponent.prototype, "setControlRef", null);

var _default = MaterialComponent;
exports.default = _default;
//# sourceMappingURL=MaterialComponent.js.map

/***/ }),

/***/ "vhrP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__gJZtC","cardHeader":"cardHeader__3U91_","cardBody":"cardBody__hs3IN"};

/***/ }),

/***/ "vkNc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/@material/base/component.js
var component = __webpack_require__("EQDb");

// CONCATENATED MODULE: ../node_modules/@material/ripple/adapter.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  /** @return {boolean} */
  MDCRippleAdapter.prototype.browserSupportsCssVars = function browserSupportsCssVars() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isUnbounded = function isUnbounded() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceActive = function isSurfaceActive() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceDisabled = function isSurfaceDisabled() {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.removeClass = function removeClass(className) {};

  /** @param {!EventTarget} target */


  MDCRippleAdapter.prototype.containsEventTarget = function containsEventTarget(target) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerDocumentInteractionHandler = function registerDocumentInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterDocumentInteractionHandler = function deregisterDocumentInteractionHandler(evtType, handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerResizeHandler = function registerResizeHandler(handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterResizeHandler = function deregisterResizeHandler(handler) {};

  /**
   * @param {string} varName
   * @param {?number|string} value
   */


  MDCRippleAdapter.prototype.updateCssVariable = function updateCssVariable(varName, value) {};

  /** @return {!ClientRect} */


  MDCRippleAdapter.prototype.computeBoundingRect = function computeBoundingRect() {};

  /** @return {{x: number, y: number}} */


  MDCRippleAdapter.prototype.getWindowPageOffset = function getWindowPageOffset() {};

  return MDCRippleAdapter;
}();

/* harmony default export */ var adapter = (MDCRippleAdapter);
// EXTERNAL MODULE: ../node_modules/@material/base/foundation.js
var foundation = __webpack_require__("uJAj");

// CONCATENATED MODULE: ../node_modules/@material/ripple/constants.js
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};


// EXTERNAL MODULE: ../node_modules/@material/ripple/util.js
var util = __webpack_require__("joOv");

// CONCATENATED MODULE: ../node_modules/@material/ripple/foundation.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function foundation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var foundation_MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    foundation__classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event)} */
    _this.deactivateHandler_ = function (e) {
      return _this.deactivate_(e);
    };

    /** @private {function(?Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(?Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {?Event} */
    _this.previousActivationEvent_ = null;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function supportsPressRipple_() {
    return this.adapter_.browserSupportsCssVars();
  };

  /**
   * @return {!ActivationStateType}
   */


  MDCRippleFoundation.prototype.defaultActivationState_ = function defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationEvent: null,
      isProgrammatic: false
    };
  };

  /** @override */


  MDCRippleFoundation.prototype.init = function init() {
    var _this2 = this;

    var supportsPressRipple = this.supportsPressRipple_();

    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          _this2.layoutInternal_();
        }
      });
    }
  };

  /** @override */


  MDCRippleFoundation.prototype.destroy = function destroy() {
    var _this3 = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$2.ROOT,
          UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

      requestAnimationFrame(function () {
        _this3.adapter_.removeClass(ROOT);
        _this3.adapter_.removeClass(UNBOUNDED);
        _this3.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };

  /**
   * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
   * @private
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function registerRootHandlers_(supportsPressRipple) {
    var _this4 = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
      });
      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  /**
   * @param {!Event} e
   * @private
   */


  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function registerDeactivationHandlers_(e) {
    var _this5 = this;

    if (e.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
      });
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function deregisterRootHandlers_() {
    var _this6 = this;

    ACTIVATION_EVENT_TYPES.forEach(function (type) {
      _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function deregisterDeactivationHandlers_() {
    var _this7 = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
      _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.removeCssVars_ = function removeCssVars_() {
    var _this8 = this;

    var strings = MDCRippleFoundation.strings;

    Object.keys(strings).forEach(function (k) {
      if (k.indexOf('VAR_') === 0) {
        _this8.adapter_.updateCssVariable(strings[k], null);
      }
    });
  };

  /**
   * @param {?Event} e
   * @private
   */


  MDCRippleFoundation.prototype.activate_ = function activate_(e) {
    var _this9 = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

    var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this9.adapter_.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (e) {
      activatedTargets.push( /** @type {!EventTarget} */e.target);
      this.registerDeactivationHandlers_(e);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          _this9.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this9.activationState_ = _this9.defaultActivationState_();
      }
    });
  };

  /**
   * @param {?Event} e
   * @private
   */


  MDCRippleFoundation.prototype.checkElementMadeActive_ = function checkElementMadeActive_(e) {
    return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  /**
   * @param {?Event=} event Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function activate() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.activate_(event);
  };

  /** @private */


  MDCRippleFoundation.prototype.animateActivation_ = function animateActivation_() {
    var _this10 = this;

    var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
    var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
        FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


    this.layoutInternal_();

    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
          startPoint = _getFgTranslationCoor.startPoint,
          endPoint = _getFgTranslationCoor.endPoint;

      translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
      translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this10.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */


  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function getFgTranslationCoordinates_() {
    var _activationState_ = this.activationState_,
        activationEvent = _activationState_.activationEvent,
        wasActivatedByPointer = _activationState_.wasActivatedByPointer;


    var startPoint = void 0;
    if (wasActivatedByPointer) {
      startPoint = Object(util["getNormalizedEventCoords"])(
      /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };

    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };

    return { startPoint: startPoint, endPoint: endPoint };
  };

  /** @private */


  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function runDeactivationUXLogicIfReady_() {
    var _this11 = this;

    // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.
    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _activationState_2 = this.activationState_,
        hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
        isActivated = _activationState_2.isActivated;

    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this11.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function rmBoundedActivationClasses_() {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function resetActivationState_() {
    var _this12 = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();
    // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.
    setTimeout(function () {
      return _this12.previousActivationEvent_ = null;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  /**
   * @param {?Event} e
   * @private
   */


  MDCRippleFoundation.prototype.deactivate_ = function deactivate_(e) {
    var _this13 = this;

    var activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }

    var state = /** @type {!ActivationStateType} */_extends({}, activationState);

    if (activationState.isProgrammatic) {
      var evtObject = null;
      requestAnimationFrame(function () {
        return _this13.animateDeactivation_(evtObject, state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this13.activationState_.hasDeactivationUXRun = true;
        _this13.animateDeactivation_(e, state);
        _this13.resetActivationState_();
      });
    }
  };

  /**
   * @param {?Event=} event Optional event containing position information.
   */


  MDCRippleFoundation.prototype.deactivate = function deactivate() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.deactivate_(event);
  };

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */


  MDCRippleFoundation.prototype.animateDeactivation_ = function animateDeactivation_(e, _ref) {
    var wasActivatedByPointer = _ref.wasActivatedByPointer,
        wasElementMadeActive = _ref.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layout = function layout() {
    var _this14 = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(function () {
      _this14.layoutInternal_();
      _this14.layoutFrame_ = 0;
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.layoutInternal_ = function layoutInternal_() {
    var _this15 = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width);

    // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.
    var getBoundedRadius = function getBoundedRadius() {
      var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;

    this.updateLayoutCssVars_();
  };

  /** @private */


  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function updateLayoutCssVars_() {
    var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
        VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
        VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
        VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };

      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
    }
  };

  /** @param {boolean} unbounded */


  MDCRippleFoundation.prototype.setUnbounded = function setUnbounded(unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function handleFocus() {
    var _this16 = this;

    requestAnimationFrame(function () {
      return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function handleBlur() {
    var _this17 = this;

    requestAnimationFrame(function () {
      return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  return MDCRippleFoundation;
}(foundation["a" /* default */]);

/* harmony default export */ var ripple_foundation = (foundation_MDCRippleFoundation);
// CONCATENATED MODULE: ../node_modules/@material/ripple/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return ripple_MDCRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() { return RippleCapableSurface; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return ripple_foundation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "util", function() { return util; });
var ripple__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function ripple__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripple__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ripple__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */

var ripple_MDCRipple = function (_MDCComponent) {
  ripple__inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    ripple__classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = ripple__possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  MDCRipple.attachTo = function attachTo(root) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isUnbounded = _ref.isUnbounded,
        isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

    var ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */isUnbounded;
    }
    return ripple;
  };

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */


  MDCRipple.createAdapter = function createAdapter(instance) {
    var MATCHES = util["getMatchesProperty"](HTMLElement.prototype);

    return {
      browserSupportsCssVars: function browserSupportsCssVars() {
        return util["supportsCssVariables"](window);
      },
      isUnbounded: function isUnbounded() {
        return instance.unbounded;
      },
      isSurfaceActive: function isSurfaceActive() {
        return instance.root_[MATCHES](':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return instance.disabled;
      },
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, util["applyPassive"]());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, util["applyPassive"]());
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, util["applyPassive"]());
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, util["applyPassive"]());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      }
    };
  };

  /** @return {boolean} */


  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   * @private
   */
  MDCRipple.prototype.setUnbounded_ = function setUnbounded_() {
    this.foundation_.setUnbounded(this.unbounded_);
  };

  MDCRipple.prototype.activate = function activate() {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function deactivate() {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  /**
   * @return {!MDCRippleFoundation}
   * @override
   */


  MDCRipple.prototype.getDefaultFoundation = function getDefaultFoundation() {
    return new ripple_foundation(MDCRipple.createAdapter(this));
  };

  /** @override */


  MDCRipple.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  };

  ripple__createClass(MDCRipple, [{
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }]);

  return MDCRipple;
}(component["a" /* default */]);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  ripple__classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;



/***/ }),

/***/ "w7m6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */


Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */

/**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */
var privateData = new WeakMap();

/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
var wrappers = new WeakMap();

/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */
function pd(event) {
    var retv = privateData.get(event);
    console.assert(retv != null, "'this' is expected an Event object, but got", event);
    return retv;
}

/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */
function setCancelFlag(data) {
    if (data.passiveListener != null) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
        }
        return;
    }
    if (!data.event.cancelable) {
        return;
    }

    data.canceled = true;
    if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
    }
}

/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */
/**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */
function Event(eventTarget, event) {
    privateData.set(this, {
        eventTarget: eventTarget,
        event: event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now()
    });

    // https://heycam.github.io/webidl/#Unforgeable
    Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });

    // Define accessors
    var keys = Object.keys(event);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (!(key in this)) {
            Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
    }
}

// Should be enumerable, but class methods are not enumerable.
Event.prototype = {
    /**
     * The type of this event.
     * @type {string}
     */
    get type() {
        return pd(this).event.type;
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get target() {
        return pd(this).eventTarget;
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     */
    get currentTarget() {
        return pd(this).currentTarget;
    },

    /**
     * @returns {EventTarget[]} The composed path of this event.
     */
    composedPath: function composedPath() {
        var currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
            return [];
        }
        return [currentTarget];
    },


    /**
     * Constant of NONE.
     * @type {number}
     */
    get NONE() {
        return 0;
    },

    /**
     * Constant of CAPTURING_PHASE.
     * @type {number}
     */
    get CAPTURING_PHASE() {
        return 1;
    },

    /**
     * Constant of AT_TARGET.
     * @type {number}
     */
    get AT_TARGET() {
        return 2;
    },

    /**
     * Constant of BUBBLING_PHASE.
     * @type {number}
     */
    get BUBBLING_PHASE() {
        return 3;
    },

    /**
     * The target of this event.
     * @type {number}
     */
    get eventPhase() {
        return pd(this).eventPhase;
    },

    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopPropagation: function stopPropagation() {
        var data = pd(this);

        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
            data.event.stopPropagation();
        }
    },


    /**
     * Stop event bubbling.
     * @returns {void}
     */
    stopImmediatePropagation: function stopImmediatePropagation() {
        var data = pd(this);

        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
            data.event.stopImmediatePropagation();
        }
    },


    /**
     * The flag to be bubbling.
     * @type {boolean}
     */
    get bubbles() {
        return Boolean(pd(this).event.bubbles);
    },

    /**
     * The flag to be cancelable.
     * @type {boolean}
     */
    get cancelable() {
        return Boolean(pd(this).event.cancelable);
    },

    /**
     * Cancel this event.
     * @returns {void}
     */
    preventDefault: function preventDefault() {
        setCancelFlag(pd(this));
    },


    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     */
    get defaultPrevented() {
        return pd(this).canceled;
    },

    /**
     * The flag to be composed.
     * @type {boolean}
     */
    get composed() {
        return Boolean(pd(this).event.composed);
    },

    /**
     * The unix time of this event.
     * @type {number}
     */
    get timeStamp() {
        return pd(this).timeStamp;
    },

    /**
     * The target of this event.
     * @type {EventTarget}
     * @deprecated
     */
    get srcElement() {
        return pd(this).eventTarget;
    },

    /**
     * The flag to stop event bubbling.
     * @type {boolean}
     * @deprecated
     */
    get cancelBubble() {
        return pd(this).stopped;
    },
    set cancelBubble(value) {
        if (!value) {
            return;
        }
        var data = pd(this);

        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
            data.event.cancelBubble = true;
        }
    },

    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     * @deprecated
     */
    get returnValue() {
        return !pd(this).canceled;
    },
    set returnValue(value) {
        if (!value) {
            setCancelFlag(pd(this));
        }
    },

    /**
     * Initialize this event object. But do nothing under event dispatching.
     * @param {string} type The event type.
     * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
     * @param {boolean} [cancelable=false] The flag to be possible to cancel.
     * @deprecated
     */
    initEvent: function initEvent() {
        // Do nothing.
    }
};

// `constructor` is not enumerable.
Object.defineProperty(Event.prototype, "constructor", {
    value: Event,
    configurable: true,
    writable: true
});

// Ensure `event instanceof window.Event` is `true`.
if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
    Object.setPrototypeOf(Event.prototype, window.Event.prototype);

    // Make association for wrappers.
    wrappers.set(window.Event.prototype, Event);
}

/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */
function defineRedirectDescriptor(key) {
    return {
        get: function get() {
            return pd(this).event[key];
        },
        set: function set(value) {
            pd(this).event[key] = value;
        },

        configurable: true,
        enumerable: true
    };
}

/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */
function defineCallDescriptor(key) {
    return {
        value: function value() {
            var event = pd(this).event;
            return event[key].apply(event, arguments);
        },

        configurable: true,
        enumerable: true
    };
}

/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */
function defineWrapper(BaseEvent, proto) {
    var keys = Object.keys(proto);
    if (keys.length === 0) {
        return BaseEvent;
    }

    /** CustomEvent */
    function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
    }

    CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: { value: CustomEvent, configurable: true, writable: true }
    });

    // Define accessors.
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (!(key in BaseEvent.prototype)) {
            var descriptor = Object.getOwnPropertyDescriptor(proto, key);
            var isFunc = typeof descriptor.value === "function";
            Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
        }
    }

    return CustomEvent;
}

/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */
function getWrapper(proto) {
    if (proto == null || proto === Object.prototype) {
        return Event;
    }

    var wrapper = wrappers.get(proto);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
    }
    return wrapper;
}

/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */
function wrapEvent(eventTarget, event) {
    var Wrapper = getWrapper(Object.getPrototypeOf(event));
    return new Wrapper(eventTarget, event);
}

/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */
function isStopped(event) {
    return pd(event).immediateStopped;
}

/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */
function setEventPhase(event, eventPhase) {
    pd(event).eventPhase = eventPhase;
}

/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */
function setCurrentTarget(event, currentTarget) {
    pd(event).currentTarget = currentTarget;
}

/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */
function setPassiveListener(event, passiveListener) {
    pd(event).passiveListener = passiveListener;
}

/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */

/**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */
var listenersMap = new WeakMap();

// Listener types
var CAPTURE = 1;
var BUBBLE = 2;
var ATTRIBUTE = 3;

/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */
function isObject(x) {
    return x !== null && typeof x === "object"; //eslint-disable-line no-restricted-syntax
}

/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */
function getListeners(eventTarget) {
    var listeners = listenersMap.get(eventTarget);
    if (listeners == null) {
        throw new TypeError("'this' is expected an EventTarget object, but got another value.");
    }
    return listeners;
}

/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */
function defineEventAttributeDescriptor(eventName) {
    return {
        get: function get() {
            var listeners = getListeners(this);
            var node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    return node.listener;
                }
                node = node.next;
            }
            return null;
        },
        set: function set(listener) {
            if (typeof listener !== "function" && !isObject(listener)) {
                listener = null; // eslint-disable-line no-param-reassign
            }
            var listeners = getListeners(this);

            // Traverse to the tail while removing old value.
            var prev = null;
            var node = listeners.get(eventName);
            while (node != null) {
                if (node.listenerType === ATTRIBUTE) {
                    // Remove old value.
                    if (prev !== null) {
                        prev.next = node.next;
                    } else if (node.next !== null) {
                        listeners.set(eventName, node.next);
                    } else {
                        listeners.delete(eventName);
                    }
                } else {
                    prev = node;
                }

                node = node.next;
            }

            // Add new value.
            if (listener !== null) {
                var newNode = {
                    listener: listener,
                    listenerType: ATTRIBUTE,
                    passive: false,
                    once: false,
                    next: null
                };
                if (prev === null) {
                    listeners.set(eventName, newNode);
                } else {
                    prev.next = newNode;
                }
            }
        },

        configurable: true,
        enumerable: true
    };
}

/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */
function defineEventAttribute(eventTargetPrototype, eventName) {
    Object.defineProperty(eventTargetPrototype, 'on' + eventName, defineEventAttributeDescriptor(eventName));
}

/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */
function defineCustomEventTarget(eventNames) {
    /** CustomEventTarget */
    function CustomEventTarget() {
        EventTarget.call(this);
    }

    CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
            value: CustomEventTarget,
            configurable: true,
            writable: true
        }
    });

    for (var i = 0; i < eventNames.length; ++i) {
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
    }

    return CustomEventTarget;
}

/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */
function EventTarget() {
    /*eslint-disable consistent-return */
    if (this instanceof EventTarget) {
        listenersMap.set(this, new Map());
        return;
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0]);
    }
    if (arguments.length > 0) {
        var types = new Array(arguments.length);
        for (var i = 0; i < arguments.length; ++i) {
            types[i] = arguments[i];
        }
        return defineCustomEventTarget(types);
    }
    throw new TypeError("Cannot call a class as a function");
    /*eslint-enable consistent-return */
}

// Should be enumerable, but class methods are not enumerable.
EventTarget.prototype = {
    /**
     * Add a given listener to this event target.
     * @param {string} eventName The event name to add.
     * @param {Function} listener The listener to add.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    addEventListener: function addEventListener(eventName, listener, options) {
        if (listener == null) {
            return;
        }
        if (typeof listener !== "function" && !isObject(listener)) {
            throw new TypeError("'listener' should be a function or an object.");
        }

        var listeners = getListeners(this);
        var optionsIsObj = isObject(options);
        var capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
        var listenerType = capture ? CAPTURE : BUBBLE;
        var newNode = {
            listener: listener,
            listenerType: listenerType,
            passive: optionsIsObj && Boolean(options.passive),
            once: optionsIsObj && Boolean(options.once),
            next: null
        };

        // Set it as the first node if the first node is null.
        var node = listeners.get(eventName);
        if (node === undefined) {
            listeners.set(eventName, newNode);
            return;
        }

        // Traverse to the tail while checking duplication..
        var prev = null;
        while (node != null) {
            if (node.listener === listener && node.listenerType === listenerType) {
                // Should ignore duplication.
                return;
            }
            prev = node;
            node = node.next;
        }

        // Add it.
        prev.next = newNode;
    },


    /**
     * Remove a given listener from this event target.
     * @param {string} eventName The event name to remove.
     * @param {Function} listener The listener to remove.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */
    removeEventListener: function removeEventListener(eventName, listener, options) {
        if (listener == null) {
            return;
        }

        var listeners = getListeners(this);
        var capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
        var listenerType = capture ? CAPTURE : BUBBLE;

        var prev = null;
        var node = listeners.get(eventName);
        while (node != null) {
            if (node.listener === listener && node.listenerType === listenerType) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
                return;
            }

            prev = node;
            node = node.next;
        }
    },


    /**
     * Dispatch a given event.
     * @param {Event|{type:string}} event The event to dispatch.
     * @returns {boolean} `false` if canceled.
     */
    dispatchEvent: function dispatchEvent(event) {
        if (event == null || typeof event.type !== "string") {
            throw new TypeError('"event.type" should be a string.');
        }

        // If listeners aren't registered, terminate.
        var listeners = getListeners(this);
        var eventName = event.type;
        var node = listeners.get(eventName);
        if (node == null) {
            return true;
        }

        // Since we cannot rewrite several properties, so wrap object.
        var wrappedEvent = wrapEvent(this, event);

        // This doesn't process capturing phase and bubbling phase.
        // This isn't participating in a tree.
        var prev = null;
        while (node != null) {
            // Remove this listener if it's once
            if (node.once) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
            } else {
                prev = node;
            }

            // Call this listener
            setPassiveListener(wrappedEvent, node.passive ? node.listener : null);
            if (typeof node.listener === "function") {
                try {
                    node.listener.call(this, wrappedEvent);
                } catch (err) {
                    if (typeof console !== "undefined" && typeof console.error === "function") {
                        console.error(err);
                    }
                }
            } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
                node.listener.handleEvent(wrappedEvent);
            }

            // Break if `event.stopImmediatePropagation` was called.
            if (isStopped(wrappedEvent)) {
                break;
            }

            node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);

        return !wrappedEvent.defaultPrevented;
    }
};

// `constructor` is not enumerable.
Object.defineProperty(EventTarget.prototype, "constructor", {
    value: EventTarget,
    configurable: true,
    writable: true
});

// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
    Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}

exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports.default = EventTarget;

module.exports = EventTarget;
module.exports.EventTarget = module.exports["default"] = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;
//# sourceMappingURL=event-target-shim.js.map

/***/ }),

/***/ "wfAA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Switch = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _switch = __webpack_require__("nQ/l");

var _preact = __webpack_require__("KM04");

var _MaterialComponent2 = _interopRequireDefault(__webpack_require__("uc5p"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Switch =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(Switch, _MaterialComponent);

  function Switch() {
    var _this;

    (0, _classCallCheck2.default)(this, Switch);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Switch).apply(this, arguments));
    _this.componentName = 'switch';
    _this.mdcProps = ['disabled', 'checked'];
    _this.mdcNotifyProps = ['disabled', 'checked'];
    return _this;
  }

  (0, _createClass2.default)(Switch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Switch.prototype), "componentDidMount", this).call(this);

      if (this.control) {
        this.MDComponent = new _switch.MDCSwitch(this.control);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Switch.prototype), "componentWillUnmount", this).call(this);

      if (this.MDComponent) {
        this.MDComponent.destroy();
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(allprops) {
      var className = allprops.className,
          props = __rest(allprops, ["className"]);

      return (0, _preact.h)("div", {
        className: className,
        ref: this.setControlRef
      }, (0, _preact.h)("div", {
        class: "mdc-switch__track"
      }), (0, _preact.h)("div", {
        class: "mdc-switch__thumb-underlay"
      }, (0, _preact.h)("div", {
        class: "mdc-switch__thumb"
      }, (0, _preact.h)("input", _extends({
        type: "checkbox",
        id: "basic-switch",
        class: "mdc-switch__native-control",
        role: "switch"
      }, props)))));
    }
  }]);
  return Switch;
}(_MaterialComponent2.default);

exports.Switch = Switch;
var _default = Switch;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "xsXW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xxi1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__37Tmn","cardHeader":"cardHeader__bI8aL","cardBody":"cardBody__1zAxd"};

/***/ }),

/***/ "ySUw":
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__("TO+D");

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var firstTabbableNode = null;
  var lastTabbableNode = null;
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;
  var tabEvent = null;

  var container = typeof element === 'string' ? document.querySelector(element) : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = userOptions && userOptions.returnFocusOnDeactivate !== undefined ? userOptions.returnFocusOnDeactivate : true;
  config.escapeDeactivates = userOptions && userOptions.escapeDeactivates !== undefined ? userOptions.escapeDeactivates : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: activateOptions && activateOptions.onActivate !== undefined ? activateOptions.onActivate : config.onActivate
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
      onDeactivate: deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    // Ensure that the focused element doesn't capture the event that caused the focus trap activation
    setTimeout(function () {
      tryFocus(firstFocusNode());
    }, 0);
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();

    if (tabEvent) {
      readjustFocus(tabEvent);
    }
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    updateTabbableNodes();

    if (e.target.hasAttribute('tabindex') && Number(e.target.getAttribute('tabindex')) < 0) {
      return tabEvent = e;
    }

    e.preventDefault();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
    firstTabbableNode = tabbableNodes[0];
    lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
  }

  function readjustFocus(e) {
    if (e.shiftKey) return tryFocus(lastTabbableNode);

    tryFocus(firstTabbableNode);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  if (node === document.activeElement) return;

  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;

/***/ }),

/***/ "ynRT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequireDefault = __webpack_require__("SpGf");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Drawer = exports.DrawerItem = exports.DrawerContent = exports.DrawerHeader = void 0;

var _get2 = _interopRequireDefault(__webpack_require__("J5U+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("0fcM"));

var _createClass2 = _interopRequireDefault(__webpack_require__("P8NW"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("0421"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("UJE0"));

var _inherits2 = _interopRequireDefault(__webpack_require__("d4H2"));

var _typeof2 = _interopRequireDefault(__webpack_require__("b9XL"));

var _drawer = __webpack_require__("EyEO");

var _bindDecorator = __webpack_require__("gKs0");

var _preact = __webpack_require__("KM04");

var _MaterialComponent4 = _interopRequireDefault(__webpack_require__("uc5p"));

var _List = __webpack_require__("E7XR");

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DrawerHeader =
/*#__PURE__*/
function (_MaterialComponent) {
  (0, _inherits2.default)(DrawerHeader, _MaterialComponent);

  function DrawerHeader() {
    var _this;

    (0, _classCallCheck2.default)(this, DrawerHeader);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DrawerHeader).apply(this, arguments));
    _this.componentName = 'drawer__header';
    _this.mdcProps = [];
    return _this;
  }

  (0, _createClass2.default)(DrawerHeader, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("header", _extends({
        ref: this.setControlRef
      }, props), (0, _preact.h)("div", {
        className: "mdc-drawer__header-content"
      }, props.children));
    }
  }]);
  return DrawerHeader;
}(_MaterialComponent4.default);

exports.DrawerHeader = DrawerHeader;

var DrawerContent =
/*#__PURE__*/
function (_MaterialComponent2) {
  (0, _inherits2.default)(DrawerContent, _MaterialComponent2);

  function DrawerContent() {
    var _this2;

    (0, _classCallCheck2.default)(this, DrawerContent);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DrawerContent).apply(this, arguments));
    _this2.componentName = 'drawer__content';
    _this2.mdcProps = [];
    return _this2;
  }

  (0, _createClass2.default)(DrawerContent, [{
    key: "materialDom",
    value: function materialDom(props) {
      return (0, _preact.h)("div", {
        class: "mdc-drawer__content"
      }, (0, _preact.h)("nav", _extends({
        className: "mdc-list",
        ref: this.setControlRef
      }, props), props.children));
    }
  }]);
  return DrawerContent;
}(_MaterialComponent4.default);

exports.DrawerContent = DrawerContent;

var DrawerItem =
/*#__PURE__*/
function (_ListLinkItem) {
  (0, _inherits2.default)(DrawerItem, _ListLinkItem);

  function DrawerItem() {
    (0, _classCallCheck2.default)(this, DrawerItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DrawerItem).apply(this, arguments));
  }

  (0, _createClass2.default)(DrawerItem, [{
    key: "materialDom",
    value: function materialDom(props) {
      var returnedNode = (0, _get2.default)((0, _getPrototypeOf2.default)(DrawerItem.prototype), "materialDom", this).call(this, props);
      /* Logic to add selected class */

      if (props.selected) {
        // @ts-ignore
        (returnedNode.props || returnedNode.attributes).className = 'mdc-list-item--activated';
      }

      return returnedNode;
    }
  }]);
  return DrawerItem;
}(_List.ListLinkItem);

exports.DrawerItem = DrawerItem;

var Drawer =
/*#__PURE__*/
function (_MaterialComponent3) {
  (0, _inherits2.default)(Drawer, _MaterialComponent3);

  function Drawer() {
    var _this3;

    (0, _classCallCheck2.default)(this, Drawer);
    _this3 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Drawer).apply(this, arguments));
    _this3.componentName = 'drawer-container';
    _this3.mdcProps = [];
    _this3.mdcNotifyProps = ['open'];
    return _this3;
  }

  (0, _createClass2.default)(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Drawer.prototype), "componentDidMount", this).call(this);

      if (this.control && (this.props.modal || this.props.dismissible)) {
        this.MDComponent = new _drawer.MDCDrawer(this.control);
        this.MDComponent.listen('MDCDrawer:opened', this.onOpen);
        this.MDComponent.listen('MDCDrawer:closed', this.onClose);
      }
    }
  }, {
    key: "onOpen",
    value: function onOpen(e) {
      if (this.props.onOpen) {
        this.props.onOpen(e);
      }
    }
  }, {
    key: "onClose",
    value: function onClose(e) {
      if (this.props.onClose) {
        this.props.onClose(e);
      }
    }
  }, {
    key: "materialDom",
    value: function materialDom(props) {
      var classes = ['mdc-drawer']; // cant use mdcProps cuz classes need to be on the inner child and not on root level

      if (props.modal) {
        classes.push('mdc-drawer--modal');
      } else if (props.dismissible) {
        classes.push('mdc-drawer--dismissible');
      }

      return (0, _preact.h)("div", null, (0, _preact.h)("aside", _extends({
        class: classes.join(' '),
        ref: this.setControlRef
      }, props), props.children), props.modal && (0, _preact.h)("div", {
        class: "mdc-drawer-scrim"
      }));
    }
  }]);
  return Drawer;
}(_MaterialComponent4.default);

exports.Drawer = Drawer;
Drawer.DrawerContent = DrawerContent;
Drawer.DrawerHeader = DrawerHeader;
Drawer.DrawerItem = DrawerItem;

__decorate([_bindDecorator.bind], Drawer.prototype, "onOpen", null);

__decorate([_bindDecorator.bind], Drawer.prototype, "onClose", null);

var default_1 =
/*#__PURE__*/
function (_Drawer) {
  (0, _inherits2.default)(default_1, _Drawer);

  function default_1() {
    (0, _classCallCheck2.default)(this, default_1);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(default_1).apply(this, arguments));
  }

  return default_1;
}(Drawer);

exports.default = default_1;
default_1.DrawerContent = DrawerContent;
default_1.DrawerHeader = DrawerHeader;
default_1.DrawerItem = DrawerItem;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "zbYa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map