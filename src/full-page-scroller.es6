/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/full-page-scroller
 */

// import "../test/jquery.mousewheel.js";

("use strict");

(function ($) {
  class FullPageScroller {
    constructor(element, options) {
      let self = this;

      //extend by function call
      self.settings = $.extend(
        true,
        {
          test_property: false,
        },
        options
      );

      self.$element = $(element);
      self.$sections = self.$element.find(">section");

      //extend by data options
      self.data_options = self.$element.data("full-page-scroller");
      self.settings = $.extend(true, self.settings, self.data_options);

      self.sectionsByHash = {};
      self.totalSlides = self.$sections.length;
      self.animationInProgress = false;
      self.normalScrollingTimeout = null;

      self.state = {
        index: 0,
        openedSectionIndex: 0,
        animationInProgress: false,
        nestedSectionOpened: false,
        closeButtonMode: "close",
        handleSectionScroll: false,
        handleAutoHeightSectionScroll: false,
        normalScroll: false,
        handleNormalScroll: false,
      };

      self.init();
    }

    switchToNormalScroll() {
      this.state.normalScroll = true;
      this.unsubscribeBlockScroll();
    }

    switchToSectionScroll() {
      this.state.normalScroll = false;
      this.subscribeBlockScroll();
    }

    init() {
      let self = this;

      self.$sections.each((index, el) => {
        self.sectionsByHash[index] = {
          $element: el,
          $collapseTrigger: $(el).find(".showMoreButton"),
          fullHeight: $(el).hasClass("full-height"),
        };
      });

      this.initSwipe();
      this.initScroll();
      this.subscribeBlockScroll();
      this.handleSlickShowMoreButton();
      this.initCloseCollapseButton();
    }

    initCloseCollapseButton() {
      let self = this;
      $(".closeCollapseButton").on("click", () => {
        self.closeCollapseSection();
      });
    }

    handleSlickShowMoreButton() {
      let self = this;

      for (let i = 0; i < self.totalSlides; i++) {
        self.sectionsByHash[i].$collapseTrigger.on("click", () => {
          this.openCollapseSection(i);
        });
      }
    }
    closeCollapseSection() {
      let self = this;

      if (
        self.sectionsByHash[self.state.index].fullHeight &&
        !self.state.normalScroll
      ) {
        self.subscribeBlockScroll();
      }

      self.state.nestedSectionOpened = false;

      self.unsubscribeSectionScroll();
      self.getCurrentSectionElement().removeClass("offsetActive");

      if (self.state.closeButtonMode === "next") {
        self.$element.removeClass("hideInvisibleSections");
        self.$element.removeClass("section-opened");
        self.goNext().then(() => {
          self.$sections.removeClass("show");
        });
      } else {
        $([document.documentElement]).animate(
          {
            scrollTop: self.getCurrentOpenedSectionElement().offset().top,
          },
          400,
          () => {
            self.$element.removeClass("section-opened");
            self.$element.removeClass("hideInvisibleSections");
            self.$sections.removeClass("show");

            $([document.documentElement]).scrollTop(
              self.getCurrentOpenedSectionElement().offset().top
            );
          }
        );
      }
    }

    openCollapseSection(index) {
      let self = this;

      self.$element.addClass("section-opened");

      self.state.openedSectionIndex = index;

      if (!self.state.normalScroll) {
        self.$element.addClass("hideInvisibleSections");
        self.unsubscribeBlockScroll();
        self.subscribeSectionScroll();
      } else {
        self.subscribeNormalScroll();
      }

      self.state.nestedSectionOpened = true;

      $([document.documentElement]).scrollTop(
        self.getSectionElementByIndex(index).offset().top
      );

      for (let i = 0; i < self.totalSlides; i++) {
        if (i === index) {
          self.getSectionElementByIndex(index).addClass("show");
          self.getSectionElementByIndex(index).addClass("offsetActive");
          $([document.documentElement]).animate(
            {
              scrollTop: self
                .getSectionElementByIndex(index)
                .find(".section-collapse-content")
                .offset().top,
            },
            400
          );
        } else {
          self.getSectionElementByIndex(i).removeClass("show");
          self.getSectionElementByIndex(index).removeClass("offsetActive");
        }
      }
    }

    goToSlide(index, direction = "next") {
      let self = this;

      return new Promise((resolve, reject) => {
        if (self.sectionsByHash[index].fullHeight) {
          self.subscribeBlockScroll();
          self.unsubscribeAutoHeightSectionScroll();
        }

        if (self.animationInProgress) return;

        self.animationInProgress = true;
        self.state.index = index;

        const $section = self.getSectionElementByIndex(index);

        $(self.$sections).removeClass("current");
        $section.addClass("current");

        const sectionOffsetTop = $section.offset().top;

        const scrollTop =
          direction === "next"
            ? sectionOffsetTop
            : sectionOffsetTop + $section.outerHeight() - $(window).height();

        $([document.documentElement]).animate(
          {
            scrollTop: scrollTop,
          },
          400,
          function () {
            self.animationInProgress = false;
            self.$element.trigger('fullPageScroller.goToSlide', index);
            resolve();
            if (!self.sectionsByHash[index].fullHeight) {
              setTimeout(() => {
                self.subscribeAutoHeightSectionScroll();
                self.unsubscribeBlockScroll();
              }, 1);
            }
          }
        );
      });
    }

    goPrev() {
      const prevIndex = this.state.index - 1;
      if (prevIndex >= 0) {
        this.goToSlide(prevIndex, "prev");
      }
    }
    goNext() {
      const nextIndex = this.state.index + 1;
      if (nextIndex > this.totalSlides - 1) return;
      return this.goToSlide(nextIndex, "next");
    }

    blockScroll(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    subscribeBlockScroll() {
      this.$element.on("scroll touchmove mousewheel", this.blockScroll);
      $("body").addClass("scroll-blocked");
    }

    unsubscribeBlockScroll() {
      this.$element.off("scroll touchmove mousewheel", this.blockScroll);
      $("body").removeClass("scroll-blocked");
    }

    subscribeSectionScroll() {
      this.state.handleSectionScroll = true;
      $(window).on("scroll mousewheel", this.handleSectionScroll.bind(this));
    }

    unsubscribeSectionScroll() {
      this.state.handleSectionScroll = false;
    }

    subscribeAutoHeightSectionScroll() {
      this.state.handleAutoHeightSectionScroll = true;
      $(window).on(
        "scroll mousewheel",
        this.handleAutoHeightSectionScroll.bind(this)
      );
    }

    unsubscribeAutoHeightSectionScroll() {
      this.state.handleAutoHeightSectionScroll = false;
    }

    subscribeNormalScroll() {
      this.state.handleNormalScroll = true;
      $(window).on("scroll mousewheel", this.handleNormalScroll.bind(this));
    }

    unsubscribeNormalScroll() {
      this.state.handleNormalScroll = false;
    }

    handleAutoHeightSectionScroll(e) {
      let self = this;

      if (!this.state.handleAutoHeightSectionScroll) return;

      const $section = this.getCurrentSectionElement();
      const sectionOffsetTop = $section.offset().top;
      const sectionOffsetBottom = sectionOffsetTop + $section.outerHeight();

      const scrollTop = $(window).scrollTop();
      const scrollBottom = scrollTop + $(window).height();

      if (scrollTop < sectionOffsetTop) {
        self.goToSlide(self.state.index - 1, "prev");
      } else if (scrollBottom > sectionOffsetBottom) {
        self.goToSlide(self.state.index + 1, "next");
      }
    }

    handleSectionScroll(e) {
      let self = this;

      if (!this.state.handleSectionScroll) return;

      $("#debug .height").text(
        self.$element.outerHeight() - $(window).height()
      );
      $("#debug .scrollTop").text($(window).scrollTop());

      if (
        $(window).scrollTop() + 80 >=
          self.$element.outerHeight() - $(window).height() &&
        self.state.index < self.totalSlides - 1
      ) {
        self.state.closeButtonMode = "next";
        $(".closeCollapseButton").text("Next");
      } else {
        self.state.closeButtonMode = "close";
        $(".closeCollapseButton").text("Close");
      }
    }

    handleNormalScroll() {
      if (!this.state.handleNormalScroll) return;

      clearTimeout(this.normalScrollingTimeout);

      const $section = this.getCurrentOpenedSectionElement();
      const sectionOffsetTop = $section.offset().top;
      const sectionOffsetBottom = sectionOffsetTop + $section.outerHeight();

      const scrollTop = $(window).scrollTop();
      const scrollBottom = scrollTop + $(window).height();

      $(".closeCollapseButton").addClass("scrolling");

      if (scrollBottom > sectionOffsetBottom || scrollTop < sectionOffsetTop) {
        $(".closeCollapseButton").addClass("hidden");
      } else {
        $(".closeCollapseButton").removeClass("hidden");
      }

      this.normalScrollingTimeout = setTimeout(() => {
        $(".closeCollapseButton").removeClass("scrolling");
      }, 500);
    }

    getSectionElementByIndex(index) {
      return $(this.sectionsByHash[index].$element);
    }

    getCurrentSectionElement() {
      return this.getSectionElementByIndex(this.state.index);
    }

    getCurrentOpenedSectionElement() {
      return this.getSectionElementByIndex(this.state.openedSectionIndex);
    }

    initScroll() {
      let self = this;
      let absDeltaY = 0;
      let prevAbsDeltaYUp = 0;
      let prevAbsDeltayDown = 0;
      let deltaClearTimeout = null;

      this.$element.on("scroll wheel mousewheel", (e) => {
        if (this.state.normalScroll) return;
        clearTimeout(deltaClearTimeout);

        if (self.state.nestedSectionOpened) return;
        if (!self.sectionsByHash[self.state.index].fullHeight) return;

        absDeltaY = Math.abs(e.originalEvent.deltaY);

        if (e.originalEvent.deltaY < 0) {
          if (absDeltaY > prevAbsDeltaYUp) {
            self.goPrev();
          }
          prevAbsDeltaYUp = absDeltaY;
          prevAbsDeltayDown = 0;
        } else if (e.originalEvent.deltaY > 0) {
          if (absDeltaY > prevAbsDeltayDown) {
            self.goNext();
          }
          prevAbsDeltaYUp = 0;
          prevAbsDeltayDown = absDeltaY;
        }

        deltaClearTimeout = setTimeout(() => {
          prevAbsDeltaYUp = 0;
          prevAbsDeltayDown = 0;
        }, 50);
      });
    }

    initSwipe() {
      let self = this;

      let xDownTouch = null;
      let yDownTouch = null;

      function getTouches(evt) {
        return (
          evt.touches || // browser API
          evt.originalEvent.touches
        ); // jQuery
      }

      function handleTouchStart(evt) {
        if (self.state.nestedSectionOpened) return;
        const firstTouch = getTouches(evt)[0];
        xDownTouch = firstTouch.clientX;
        yDownTouch = firstTouch.clientY;
      }

      function handleTouchMove(evt) {
        if (self.state.nestedSectionOpened) return;

        if (!xDownTouch || !yDownTouch) {
          return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDownTouch - xUp;
        var yDiff = yDownTouch - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            self.goNext();
          } else {
            self.goPrev();
          }
        } else {
          if (yDiff > 0) {
            self.goNext();
          } else {
            self.goPrev();
          }
        }

        xDownTouch = null;
        yDownTouch = null;
      }
      self.$element[0].addEventListener(
        "touchstart",
        handleTouchStart.bind(self),
        false
      );
      self.$element[0].addEventListener(
        "touchmove",
        handleTouchMove.bind(self),
        false
      );
    }
  }

  $.fn.fullPageScroller = function () {
    let $this = this,
      opt = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      length = $this.length,
      i,
      ret;
    for (i = 0; i < length; i++) {
      if (typeof opt == "object" || typeof opt == "undefined")
        $this[i].full_page_scroller = new FullPageScroller($this[i], opt);
      else
        ret = $this[i].full_page_scroller[opt].apply(
          $this[i].full_page_scroller,
          args
        );
      if (typeof ret != "undefined") return ret;
    }
    return $this;
  };
})(jQuery);
