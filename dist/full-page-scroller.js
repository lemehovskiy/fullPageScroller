(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/full-page-scroller.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/full-page-scroller.es6":
/*!************************************!*\
  !*** ./src/full-page-scroller.es6 ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n Version: 1.0.0\n Author: lemehovskiy\n Website: http://lemehovskiy.github.io\n Repo: https://github.com/lemehovskiy/full-page-scroller\n */\n\n// import \"../test/jquery.mousewheel.js\";\n\n\"use strict\";\n\n(function ($) {\n  var FullPageScroller = function () {\n    function FullPageScroller(element, options) {\n      _classCallCheck(this, FullPageScroller);\n\n      this.subscribeToScroll = function () {};\n\n      var self = this;\n\n      //extend by function call\n      self.settings = $.extend(true, {\n        test_property: false\n      }, options);\n\n      self.$element = $(element);\n      self.$sections = self.$element.find(\">section\");\n\n      //extend by data options\n      self.data_options = self.$element.data(\"full-page-scroller\");\n      self.settings = $.extend(true, self.settings, self.data_options);\n\n      self.sectionsByHash = {};\n      self.totalSlides = self.$sections.length;\n      self.animationInProgress = false;\n\n      self.state = {\n        index: 0,\n        animationInProgress: false\n      };\n\n      self.init();\n    }\n\n    _createClass(FullPageScroller, [{\n      key: \"init\",\n      value: function init() {\n        var self = this;\n\n        self.$sections.each(function (index, el) {\n          self.sectionsByHash[index] = {\n            $element: el\n          };\n        });\n\n        this.initSwipe();\n        this.initScroll();\n        this.goToSlide(3);\n      }\n    }, {\n      key: \"goToSlide\",\n      value: function goToSlide(index) {\n        console.log(\"goToSlide\");\n        // console.log(index);\n        var self = this;\n\n        if (self.animationInProgress) return;\n\n        self.animationInProgress = true;\n        self.state.index = index;\n\n        $([document.documentElement]).animate({\n          scrollTop: $(self.sectionsByHash[index].$element).offset().top\n        }, 400, function () {\n          console.log(\"animationEnd\");\n          self.animationInProgress = false;\n        });\n      }\n    }, {\n      key: \"goPrev\",\n      value: function goPrev() {\n        var prevIndex = this.state.index - 1;\n        if (prevIndex >= 0) {\n          console.log(\"goPrev\");\n          this.goToSlide(prevIndex);\n        }\n      }\n    }, {\n      key: \"goNext\",\n      value: function goNext() {\n        var nextIndex = this.state.index + 1;\n        if (nextIndex > this.totalSlides - 1) return;\n        console.log(\"goNext\");\n        this.goToSlide(nextIndex);\n      }\n    }, {\n      key: \"initScroll\",\n      value: function initScroll() {\n        //   self.$element.on('mousewheel', function(event) {\n        //     console.log(event.originalEvent);\n        // });\n        var self = this;\n        var absDeltaY = 0;\n        var scrollTimer = false;\n        var prevAbsDeltaYUp = 0;\n        var prevAbsDeltaYDown = 0;\n\n        this.$element.on(\"scroll touchmove mousewheel\", function (e) {\n          e.preventDefault();\n          e.stopPropagation();\n        });\n\n        this.$element.on(\"scroll touchmove mousewheel\", function (e) {\n\n          // console.log(e.originalEvent.deltaY);\n          clearTimeout(scrollTimer);\n\n          // if (self.animationInProgress) {\n          // e.preventDefault();\n          // e.stopPropagation();\n          // return false;\n          // }\n\n          absDeltaY = Math.abs(e.originalEvent.deltaY);\n\n          if (e.originalEvent.deltaY < 0) {\n            console.log(prevAbsDeltaYUp);\n            console.log(absDeltaY);\n\n            if (absDeltaY > prevAbsDeltaYUp) {\n              self.goPrev();\n            }\n            prevAbsDeltaYUp = absDeltaY;\n          } else if (e.originalEvent.deltaY > 0) {\n            if (absDeltaY > prevAbsDeltaYDown) {\n              self.goNext();\n            }\n            prevAbsDeltaYDown = absDeltaY;\n          }\n\n          scrollTimer = setTimeout(function () {\n            prevAbsDeltaYUp = 0;\n            prevAbsDeltaYDown = 0;\n          }, 50);\n        });\n      }\n    }, {\n      key: \"handleScroll\",\n      value: function handleScroll(e) {}\n    }, {\n      key: \"initSwipe\",\n      value: function initSwipe() {\n        var self = this;\n        self.$element[0].addEventListener(\"touchstart\", handleTouchStart, false);\n        self.$element[0].addEventListener(\"touchmove\", handleTouchMove, false);\n\n        var xDown = null;\n        var yDown = null;\n\n        function getTouches(evt) {\n          return evt.touches || // browser API\n          evt.originalEvent.touches; // jQuery\n        }\n\n        function handleTouchStart(evt) {\n          var firstTouch = getTouches(evt)[0];\n          xDown = firstTouch.clientX;\n          yDown = firstTouch.clientY;\n        }\n\n        function handleTouchMove(evt) {\n          if (!xDown || !yDown) {\n            return;\n          }\n\n          var xUp = evt.touches[0].clientX;\n          var yUp = evt.touches[0].clientY;\n\n          var xDiff = xDown - xUp;\n          var yDiff = yDown - yUp;\n\n          if (Math.abs(xDiff) > Math.abs(yDiff)) {\n            if (xDiff > 0) {\n              self.goNext();\n            } else {\n              self.goPrev();\n            }\n          } else {\n            if (yDiff > 0) {\n              self.goNext();\n            } else {\n              self.goPrev();\n            }\n          }\n\n          xDown = null;\n          yDown = null;\n        }\n      }\n    }]);\n\n    return FullPageScroller;\n  }();\n\n  $.fn.fullPageScroller = function () {\n    var $this = this,\n        opt = arguments[0],\n        args = Array.prototype.slice.call(arguments, 1),\n        length = $this.length,\n        i = void 0,\n        ret = void 0;\n    for (i = 0; i < length; i++) {\n      if ((typeof opt === \"undefined\" ? \"undefined\" : _typeof(opt)) == \"object\" || typeof opt == \"undefined\") $this[i].full_page_scroller = new FullPageScroller($this[i], opt);else ret = $this[i].full_page_scroller[opt].apply($this[i].full_page_scroller, args);\n      if (typeof ret != \"undefined\") return ret;\n    }\n    return $this;\n  };\n})(jQuery);\n\n//# sourceURL=webpack:///./src/full-page-scroller.es6?");

/***/ })

/******/ });
});