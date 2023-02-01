"use strict";

/*! For license information please see main.js.LICENSE.txt */
(function () {
  "use strict";

  var __webpack_modules__ = {
    "./src/style.css": function srcStyleCss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-1/./src/style.css?");
    },
    "./src/index.js": function srcIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./src/math.js");\ndocument.write("Hello, world");\r\n\r\n\r\n\r\n\r\n\r\nconst multiply = (a) => a * 8;\r\n\r\nconsole.log("ES6 modules!");\r\nconsole.log("sum = " + _math__WEBPACK_IMPORTED_MODULE_1__.sum(2, 3));\r\nconsole.log("multiply from index.js = " + multiply(5));\r\nconsole.log("multiply from math = " + _math__WEBPACK_IMPORTED_MODULE_1__.multiply(5));\n\n//# sourceURL=webpack://webpack-1/./src/index.js?');
    },
    "./src/math.js": function srcMathJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "multiply": () => (/* binding */ multiply),\n/* harmony export */   "sum": () => (/* binding */ sum)\n/* harmony export */ });\nconst sum = (a, b) => a + b; \r\nconst PI = 3.14;\r\n\r\nconst multiply = (a) => a * PI;\n\n//# sourceURL=webpack://webpack-1/./src/math.js?');
    }
  },
      __webpack_module_cache__ = {};

  function __webpack_require__(_) {
    var e = __webpack_module_cache__[_];
    if (void 0 !== e) return e.exports;
    var r = __webpack_module_cache__[_] = {
      exports: {}
    };
    return __webpack_modules__[_](r, r.exports, __webpack_require__), r.exports;
  }

  __webpack_require__.d = function (_, e) {
    for (var r in e) {
      __webpack_require__.o(e, r) && !__webpack_require__.o(_, r) && Object.defineProperty(_, r, {
        enumerable: !0,
        get: e[r]
      });
    }
  }, __webpack_require__.o = function (_, e) {
    return Object.prototype.hasOwnProperty.call(_, e);
  }, __webpack_require__.r = function (_) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(_, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(_, "__esModule", {
      value: !0
    });
  };

  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
//# sourceMappingURL=main.dev.js.map
