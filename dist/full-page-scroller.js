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
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n Version: 1.0.0\n Author: lemehovskiy\n Website: http://lemehovskiy.github.io\n Repo: https://github.com/lemehovskiy/full-page-scroller\n */\n\n// import \"../test/jquery.mousewheel.js\";\n\n\"use strict\";\n\n(function ($) {\n  var FullPageScroller = function () {\n    function FullPageScroller(element, options) {\n      _classCallCheck(this, FullPageScroller);\n\n      var self = this;\n\n      //extend by function call\n      self.settings = $.extend(true, {\n        test_property: false\n      }, options);\n\n      self.$element = $(element);\n      self.$sections = self.$element.find(\">section\");\n\n      //extend by data options\n      self.data_options = self.$element.data(\"full-page-scroller\");\n      self.settings = $.extend(true, self.settings, self.data_options);\n\n      self.sectionsByHash = {};\n      self.totalSlides = self.$sections.length;\n      self.animationInProgress = false;\n\n      self.state = {\n        index: 0,\n        animationInProgress: false,\n        nestedSectionOpened: false,\n        closeButtonMode: \"close\",\n        handleSectionScroll: false,\n        handleAutoHeightSectionScroll: false\n      };\n\n      self.init();\n    }\n\n    _createClass(FullPageScroller, [{\n      key: \"init\",\n      value: function init() {\n        var self = this;\n\n        self.$sections.each(function (index, el) {\n          self.sectionsByHash[index] = {\n            $element: el,\n            $collapseTrigger: $(el).find(\".showMoreButton\"),\n            fullHeight: $(el).hasClass(\"full-height\")\n          };\n        });\n\n        this.initSwipe();\n        this.initScroll();\n        this.subscribeBlockScroll();\n        this.handleSlickShowMoreButton();\n        this.initCloseCollapseButton();\n      }\n    }, {\n      key: \"initCloseCollapseButton\",\n      value: function initCloseCollapseButton() {\n        var self = this;\n        $(\".closeCollapseButton\").on(\"click\", function () {\n          console.log(\"closeCollapseSection\");\n          self.closeCollapseSection();\n        });\n      }\n    }, {\n      key: \"handleSlickShowMoreButton\",\n      value: function handleSlickShowMoreButton() {\n        var _this = this;\n\n        var self = this;\n\n        var _loop = function _loop(i) {\n          self.sectionsByHash[i].$collapseTrigger.on(\"click\", function () {\n            _this.openCollapseSection(i);\n          });\n        };\n\n        for (var i = 0; i < self.totalSlides; i++) {\n          _loop(i);\n        }\n      }\n    }, {\n      key: \"closeCollapseSection\",\n      value: function closeCollapseSection() {\n        var self = this;\n\n        if (self.sectionsByHash[self.state.index].fullHeight) {\n          self.subscribeBlockScroll();\n        }\n\n        self.state.nestedSectionOpened = false;\n\n        self.unsubscribeSectionScroll();\n        $(self.sectionsByHash[self.state.index].$element).removeClass(\"offsetActive\");\n\n        if (self.state.closeButtonMode === \"next\") {\n          self.$element.removeClass(\"hideInvisibleSections\");\n          self.$element.removeClass(\"section-opened\");\n          console.log(\"goNext\");\n          self.goNext().then(function () {\n            self.$sections.removeClass(\"show\");\n          });\n        } else {\n          $([document.documentElement]).animate({\n            scrollTop: $(self.sectionsByHash[self.state.index].$element).offset().top\n          }, 400, function () {\n            self.$element.removeClass(\"section-opened\");\n            self.$element.removeClass(\"hideInvisibleSections\");\n            self.$sections.removeClass(\"show\");\n\n            $([document.documentElement]).scrollTop($(self.sectionsByHash[self.state.index].$element).offset().top);\n          });\n        }\n      }\n    }, {\n      key: \"openCollapseSection\",\n      value: function openCollapseSection(index) {\n        var self = this;\n\n        self.$element.addClass(\"section-opened\");\n        self.$element.addClass(\"hideInvisibleSections\");\n        self.unsubscribeBlockScroll();\n        self.subscribeSectionScroll();\n\n        self.state.nestedSectionOpened = true;\n\n        $([document.documentElement]).scrollTop($(self.sectionsByHash[index].$element).offset().top);\n\n        for (var i = 0; i < self.totalSlides; i++) {\n          if (i === index) {\n            $(self.sectionsByHash[index].$element).addClass(\"show\");\n            $(self.sectionsByHash[index].$element).addClass(\"offsetActive\");\n            $([document.documentElement]).animate({\n              scrollTop: $(self.sectionsByHash[index].$element).find(\".section-collapse-content\").offset().top\n            }, 400);\n          } else {\n            $(self.sectionsByHash[i].$element).removeClass(\"show\");\n          }\n        }\n      }\n    }, {\n      key: \"goToSlide\",\n      value: function goToSlide(index) {\n        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"next\";\n\n        console.log(\"goToSlide\");\n        var self = this;\n\n        if (self.sectionsByHash[index].fullHeight) {\n          self.subscribeBlockScroll();\n          self.unsubscribeAutoHeightSectionScroll();\n        }\n\n        if (self.animationInProgress) return;\n\n        self.animationInProgress = true;\n        self.state.index = index;\n\n        var $section = $(self.sectionsByHash[index].$element);\n\n        $(self.$sections).removeClass(\"current\");\n        $section.addClass(\"current\");\n\n        var sectionOffsetTop = $section.offset().top;\n\n        var scrollTop = direction === \"next\" ? sectionOffsetTop : sectionOffsetTop + $section.outerHeight() - $(window).height();\n\n        $([document.documentElement]).animate({\n          scrollTop: scrollTop\n        }, 400, function () {\n          self.animationInProgress = false;\n\n          if (!self.sectionsByHash[index].fullHeight) {\n            setTimeout(function () {\n              self.subscribeAutoHeightSectionScroll();\n              self.unsubscribeBlockScroll();\n            }, 1);\n          }\n        });\n      }\n    }, {\n      key: \"goPrev\",\n      value: function goPrev() {\n        var prevIndex = this.state.index - 1;\n        if (prevIndex >= 0) {\n          this.goToSlide(prevIndex, \"prev\");\n        }\n      }\n    }, {\n      key: \"goNext\",\n      value: function goNext() {\n        var nextIndex = this.state.index + 1;\n        if (nextIndex > this.totalSlides - 1) return;\n        return this.goToSlide(nextIndex, \"next\");\n      }\n    }, {\n      key: \"blockScroll\",\n      value: function blockScroll(e) {\n        e.preventDefault();\n        e.stopPropagation();\n      }\n    }, {\n      key: \"subscribeBlockScroll\",\n      value: function subscribeBlockScroll() {\n        this.$element.on(\"scroll touchmove mousewheel\", this.blockScroll);\n        $(\"body\").addClass(\"scroll-blocked\");\n      }\n    }, {\n      key: \"unsubscribeBlockScroll\",\n      value: function unsubscribeBlockScroll() {\n        this.$element.off(\"scroll touchmove mousewheel\", this.blockScroll);\n        $(\"body\").removeClass(\"scroll-blocked\");\n      }\n    }, {\n      key: \"subscribeSectionScroll\",\n      value: function subscribeSectionScroll() {\n        var self = this;\n        this.state.handleSectionScroll = true;\n        $(window).on(\"scroll mousewheel\", this.handleSectionScroll.bind(this));\n      }\n    }, {\n      key: \"unsubscribeSectionScroll\",\n      value: function unsubscribeSectionScroll() {\n        this.state.handleSectionScroll = false;\n        // $(window).off(\"scroll mousewheel\", this.handleSectionScroll.bind(this));\n      }\n    }, {\n      key: \"subscribeAutoHeightSectionScroll\",\n      value: function subscribeAutoHeightSectionScroll() {\n        console.log(\"subscribeAutoHeightSectionScroll\");\n        this.state.handleAutoHeightSectionScroll = true;\n        $(window).on(\"scroll mousewheel\", this.handleAutoHeightSectionScroll.bind(this));\n      }\n    }, {\n      key: \"unsubscribeAutoHeightSectionScroll\",\n      value: function unsubscribeAutoHeightSectionScroll() {\n        console.log(\"subscribeAutoHeightSectionScroll\");\n        this.state.handleAutoHeightSectionScroll = false;\n        // $(window).off(\"scroll mousewheel\");\n      }\n    }, {\n      key: \"handleAutoHeightSectionScroll\",\n      value: function handleAutoHeightSectionScroll(e) {\n        var self = this;\n\n        if (!this.state.handleAutoHeightSectionScroll) return;\n\n        console.log(\"handleAutoHeightSectionScroll\");\n\n        var $section = $(self.sectionsByHash[self.state.index].$element);\n        var sectionOffsetTop = $section.offset().top;\n        var sectionOffsetBottom = sectionOffsetTop + $section.outerHeight();\n\n        var scrollTop = $(window).scrollTop();\n        var scrollBottom = scrollTop + $(window).height();\n\n        if (scrollTop < sectionOffsetTop) {\n          self.goToSlide(self.state.index - 1, \"prev\");\n        } else if (scrollBottom > sectionOffsetBottom) {\n          self.goToSlide(self.state.index + 1, \"next\");\n        }\n      }\n    }, {\n      key: \"handleSectionScroll\",\n      value: function handleSectionScroll(e) {\n        var self = this;\n\n        if (!this.state.handleSectionScroll) return;\n\n        console.log(\"handleSectionScroll\");\n\n        // console.log(self.$element.outerHeight());\n        // console.log($(window).height());\n        $(\"#debug .height\").text(self.$element.outerHeight() - $(window).height());\n        $(\"#debug .scrollTop\").text($(window).scrollTop());\n\n        if ($(window).scrollTop() + 80 >= self.$element.outerHeight() - $(window).height() && self.state.index < self.totalSlides - 1) {\n          self.state.closeButtonMode = \"next\";\n          $(\".closeCollapseButton\").text(\"Next\");\n        } else {\n          self.state.closeButtonMode = \"close\";\n          $(\".closeCollapseButton\").text(\"Close\");\n        }\n      }\n    }, {\n      key: \"initScroll\",\n      value: function initScroll() {\n        var self = this;\n        var absDeltaY = 0;\n        var prevAbsDeltaYUp = 0;\n        var prevAbsDeltayDown = 0;\n        var deltaClearTimeout = null;\n\n        this.$element.on(\"scroll wheel mousewheel\", function (e) {\n          clearTimeout(deltaClearTimeout);\n\n          if (self.state.nestedSectionOpened) return;\n          if (!self.sectionsByHash[self.state.index].fullHeight) return;\n\n          absDeltaY = Math.abs(e.originalEvent.deltaY);\n\n          if (e.originalEvent.deltaY < 0) {\n            if (absDeltaY > prevAbsDeltaYUp) {\n              self.goPrev();\n            }\n            prevAbsDeltaYUp = absDeltaY;\n            prevAbsDeltayDown = 0;\n          } else if (e.originalEvent.deltaY > 0) {\n            if (absDeltaY > prevAbsDeltayDown) {\n              self.goNext();\n            }\n            prevAbsDeltaYUp = 0;\n            prevAbsDeltayDown = absDeltaY;\n          }\n\n          deltaClearTimeout = setTimeout(function () {\n            prevAbsDeltaYUp = 0;\n            prevAbsDeltayDown = 0;\n          }, 50);\n        });\n      }\n    }, {\n      key: \"initSwipe\",\n      value: function initSwipe() {\n        var self = this;\n\n        var xDownTouch = null;\n        var yDownTouch = null;\n\n        function getTouches(evt) {\n          return evt.touches || // browser API\n          evt.originalEvent.touches; // jQuery\n        }\n\n        function handleTouchStart(evt) {\n          if (self.state.nestedSectionOpened) return;\n          var firstTouch = getTouches(evt)[0];\n          xDownTouch = firstTouch.clientX;\n          yDownTouch = firstTouch.clientY;\n        }\n\n        function handleTouchMove(evt) {\n          if (self.state.nestedSectionOpened) return;\n\n          if (!xDownTouch || !yDownTouch) {\n            return;\n          }\n\n          var xUp = evt.touches[0].clientX;\n          var yUp = evt.touches[0].clientY;\n\n          var xDiff = xDownTouch - xUp;\n          var yDiff = yDownTouch - yUp;\n\n          if (Math.abs(xDiff) > Math.abs(yDiff)) {\n            if (xDiff > 0) {\n              self.goNext();\n            } else {\n              self.goPrev();\n            }\n          } else {\n            if (yDiff > 0) {\n              self.goNext();\n            } else {\n              self.goPrev();\n            }\n          }\n\n          xDownTouch = null;\n          yDownTouch = null;\n        }\n        self.$element[0].addEventListener(\"touchstart\", handleTouchStart.bind(self), false);\n        self.$element[0].addEventListener(\"touchmove\", handleTouchMove.bind(self), false);\n      }\n    }]);\n\n    return FullPageScroller;\n  }();\n\n  $.fn.fullPageScroller = function () {\n    var $this = this,\n        opt = arguments[0],\n        args = Array.prototype.slice.call(arguments, 1),\n        length = $this.length,\n        i = void 0,\n        ret = void 0;\n    for (i = 0; i < length; i++) {\n      if ((typeof opt === \"undefined\" ? \"undefined\" : _typeof(opt)) == \"object\" || typeof opt == \"undefined\") $this[i].full_page_scroller = new FullPageScroller($this[i], opt);else ret = $this[i].full_page_scroller[opt].apply($this[i].full_page_scroller, args);\n      if (typeof ret != \"undefined\") return ret;\n    }\n    return $this;\n  };\n})(jQuery);\n\n//# sourceURL=webpack:///./src/full-page-scroller.es6?");

/***/ })

/******/ });
});