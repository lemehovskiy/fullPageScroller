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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

jQuery(function () {
  $(".full-page").fullPageScroller();

  var init = function init() {
    var NORMAL_SCROLL_BREAKPOINT = 991;
    var resizeTimeOut = null;
    var isScrollModeNormal = false;

    var handleResize = function handleResize() {
      var ww = $(window).width();
      if (isScrollModeNormal && ww > NORMAL_SCROLL_BREAKPOINT) {
        isScrollModeNormal = false;
        $(".full-page").fullPageScroller("switchToSectionScroll");
      } else if (!isScrollModeNormal && ww <= NORMAL_SCROLL_BREAKPOINT) {
        isScrollModeNormal = true;
        $(".full-page").fullPageScroller("switchToNormalScroll");
      }
    };

    handleResize();

    $(window).on("resize", function () {
      clearTimeout(resizeTimeOut);
      resizeTimeOut = setTimeout(function () {
        handleResize();
      }, 100);
    });
  };

  init();

  //EVENTS1
  $(".full-page").on("fullPageScroller.goToSlideStart", function (el, index) {
    console.log('Start go to - ' + index);
  });
  $(".full-page").on("fullPageScroller.goToSlideEnded", function (el, index) {
    console.log('Ended go to - ' + index);
  });

  $(".full-page").on("fullPageScroller.openCollapseStart", function (el, index) {
    console.log('Collapse open start - ' + index);
  });
  $(".full-page").on("fullPageScroller.openCollapseEnded", function (el, index) {
    console.log('Collapse open ended - ' + index);
  });

  $(".full-page").on("fullPageScroller.closeCollapseStart", function (el, index) {
    console.log('Collapse close start - ' + index);
  });
  $(".full-page").on("fullPageScroller.closeCollapseEnded", function (el, index) {
    console.log('Collapse close ended - ' + index);
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map