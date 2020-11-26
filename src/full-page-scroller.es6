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

      self.state = {
        index: 0,
        animationInProgress: false,
      };

      self.init();
    }

    init() {
      let self = this;

      self.$sections.each((index, el) => {
        self.sectionsByHash[index] = {
          $element: el,
        };
      });

      this.initSwipe();
      this.initScroll();
      this.goToSlide(3);
    }

    goToSlide(index) {
      console.log("goToSlide");
      // console.log(index);
      let self = this;

      if (self.animationInProgress) return;

      self.animationInProgress = true;
      self.state.index = index;

      $([document.documentElement]).animate(
        {
          scrollTop: $(self.sectionsByHash[index].$element).offset().top,
        },
        400,
        function () {
          console.log("animationEnd");
          self.animationInProgress = false;
        }
      );
    }

    goPrev() {
      const prevIndex = this.state.index - 1;
      if (prevIndex >= 0) {
        console.log("goPrev");
        this.goToSlide(prevIndex);
      }
    }
    goNext() {
      const nextIndex = this.state.index + 1;
      if (nextIndex > this.totalSlides - 1) return;
      console.log("goNext");
      this.goToSlide(nextIndex);
    }

    initScroll() {
      //   self.$element.on('mousewheel', function(event) {
      //     console.log(event.originalEvent);
      // });
      let self = this;
      let absDeltaY = 0;
      let scrollTimer = false;
      let prevAbsDeltaYUp = 0;
      let prevAbsDeltaYDown = 0;

      this.$element.on("scroll touchmove mousewheel", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });

      this.$element.on("scroll touchmove mousewheel", (e) => {

        // console.log(e.originalEvent.deltaY);
        clearTimeout(scrollTimer);

        // if (self.animationInProgress) {
        // e.preventDefault();
        // e.stopPropagation();
        // return false;
        // }

        absDeltaY = Math.abs(e.originalEvent.deltaY);

        if (e.originalEvent.deltaY < 0) {
          console.log(prevAbsDeltaYUp);
          console.log(absDeltaY);

          if (absDeltaY > prevAbsDeltaYUp) {
            self.goPrev();
          }
          prevAbsDeltaYUp = absDeltaY;
        } else if (e.originalEvent.deltaY > 0) {
          if (absDeltaY > prevAbsDeltaYDown) {
            self.goNext();
          }
          prevAbsDeltaYDown = absDeltaY;
        }

        scrollTimer = setTimeout(function () {
          prevAbsDeltaYUp = 0;
          prevAbsDeltaYDown = 0;
        }, 50);
      });
    }

    subscribeToScroll = () => {};

    handleScroll(e) {}

    initSwipe() {
      let self = this;
      self.$element[0].addEventListener("touchstart", handleTouchStart, false);
      self.$element[0].addEventListener("touchmove", handleTouchMove, false);

      var xDown = null;
      var yDown = null;

      function getTouches(evt) {
        return (
          evt.touches || // browser API
          evt.originalEvent.touches
        ); // jQuery
      }

      function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      }

      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

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

        xDown = null;
        yDown = null;
      }
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