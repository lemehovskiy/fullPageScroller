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
      self.xDownTouch = null;
      self.yDownTouch = null;

      self.state = {
        index: 0,
        animationInProgress: false,
        nestedSectionOpened: false,
        closeButtonMode: "close",
      };

      self.init();
    }

    init() {
      let self = this;

      self.$sections.each((index, el) => {
        self.sectionsByHash[index] = {
          $element: el,
          $collapseTrigger: $(el).find(".showMoreButton"),
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
        console.log("closeSection");
        self.closeSection();
      });
    }

    handleSlickShowMoreButton() {
      let self = this;

      for (let i = 0; i < self.totalSlides; i++) {
        self.sectionsByHash[i].$collapseTrigger.on("click", () => {
          this.openSection(i);
        });
      }
    }
    closeSection() {
      let self = this;

      self.subscribeBlockScroll();
      self.state.nestedSectionOpened = false;

      self.unsubscribeSectionScroll();
      $(self.sectionsByHash[self.state.index].$element).removeClass(
        "offsetActive"
      );

      if (self.state.closeButtonMode === "next") {
        self.$element.removeClass("hideInvisibleSections");
        self.$element.removeClass("section-opened");
        console.log("goNext");
        self.goNext().then(() => {
          self.$sections.removeClass("show");
        });
      } else {
        $([document.documentElement]).animate(
          {
            scrollTop: $(
              self.sectionsByHash[self.state.index].$element
            ).offset().top,
          },
          400,
          () => {
            self.$element.removeClass("section-opened");
            self.$element.removeClass("hideInvisibleSections");
            self.$sections.removeClass("show");

            $([document.documentElement]).scrollTop(
              $(self.sectionsByHash[self.state.index].$element).offset().top
            );
          }
        );
      }
    }

    openSection(index) {
      let self = this;

      self.$element.addClass("section-opened");
      self.$element.addClass("hideInvisibleSections");
      self.unsubscribeBlockScroll();
      self.subscribeSectionScroll();
      
      self.state.nestedSectionOpened = true;

      $([document.documentElement]).scrollTop(
        $(self.sectionsByHash[index].$element).offset().top
      );

      for (let i = 0; i < self.totalSlides; i++) {
        if (i === index) {
          $(self.sectionsByHash[index].$element).addClass("show");
          $(self.sectionsByHash[index].$element).addClass("offsetActive");
          $([document.documentElement]).animate(
            {
              scrollTop: $(self.sectionsByHash[index].$element)
                .find(".section-collapse-content")
                .offset().top,
            },
            400
          );
        } else {
          $(self.sectionsByHash[i].$element).removeClass("show");
        }
      }
    }

    goToSlide(index) {
      return new Promise((resolve, reject) => {
        console.log("goToSlide");
        // console.log(index);
        let self = this;

        if (self.animationInProgress) return;

        self.animationInProgress = true;
        self.state.index = index;

        $(self.$sections).removeClass("current");
        $(self.sectionsByHash[index].$element).addClass("current");

        $([document.documentElement]).animate(
          {
            scrollTop: $(self.sectionsByHash[index].$element).offset().top,
          },
          400,
          function () {
            console.log("animationEnd");
            self.animationInProgress = false;
            resolve();
          }
        );
      });
    }

    goPrev() {
      const prevIndex = this.state.index - 1;
      if (prevIndex >= 0) {
        this.goToSlide(prevIndex);
      }
    }
    goNext() {
      const nextIndex = this.state.index + 1;
      if (nextIndex > this.totalSlides - 1) return;
      return this.goToSlide(nextIndex);
    }

    blockScroll(e) {
      e.preventDefault();
      e.stopPropagation();
    }

    subscribeBlockScroll() {
      this.$element.on("scroll touchmove mousewheel", this.blockScroll);
    }

    unsubscribeBlockScroll() {
      this.$element.off("scroll touchmove mousewheel", this.blockScroll);
    }

    subscribeSectionScroll() {
      let self = this;
      $(window).on("scroll mousewheel", this.handleSectionScroll.bind(this));
    }

    unsubscribeSectionScroll() {
      $(window).off("scroll mousewheel");
    }

    handleSectionScroll(e) {
      let self = this;

      if (
        $(window).scrollTop() >=
          self.$element.outerHeight() - $(document).height() &&
        self.state.index < self.totalSlides - 1
      ) {
        self.state.closeButtonMode = "next";
        $(".closeCollapseButton").text("Next");
      } else {
        self.state.closeButtonMode = "close";
        $(".closeCollapseButton").text("Close");
      }
    }

    initScroll() {
      let self = this;
      let absDeltaY = 0;
      let prevAbsDeltaYUp = 0;
      let prevAbsDeltayDown = 0;
      let deltaClearTimeout = null;

      this.$element.on("scroll mousewheel", (e) => {
        clearTimeout(deltaClearTimeout);
  
        if (self.state.nestedSectionOpened) return;

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

    getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    } 

    handleTouchStart(evt) {
      let self = this;
      if (self.state.nestedSectionOpened) return;
      console.log("handleTouchStart");
      const firstTouch = this.getTouches(evt)[0];
      self.xDownTouch = firstTouch.clientX;
      self.yDownTouch = firstTouch.clientY;
    }

    handleTouchMove(evt) {
      let self = this;
      if (self.state.nestedSectionOpened) return;
    
      console.log('handleTouchMove')
      console.log(self.xDownTouch);
      console.log(self.yDownTouch);


      if (!self.xDownTouch || !self.yDownTouch) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = self.xDownTouch - xUp;
      var yDiff = self.yDownTouch - yUp;

      console.log(xDiff);
      console.log(yDiff);
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

      self.xDownTouch = null;
      self.yDownTouch = null;
    }

    initSwipe() {
      let self = this;
      self.$element[0].addEventListener(
        "touchstart",
        self.handleTouchStart.bind(self),
        false
      );
      self.$element[0].addEventListener(
        "touchmove",
        self.handleTouchMove.bind(self),
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
