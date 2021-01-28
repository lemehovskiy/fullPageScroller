require("./sass/style.scss");

jQuery(function () {
  $(".full-page").fullPageScroller();

  const init = () => {
    const NORMAL_SCROLL_BREAKPOINT = 991;
    let resizeTimeOut = null;
    let isScrollModeNormal = false;

    const handleResize = () => {
      const ww = $(window).width();
      if (isScrollModeNormal && ww > NORMAL_SCROLL_BREAKPOINT) {
        isScrollModeNormal = false;
        $(".full-page").fullPageScroller("switchToSectionScroll");
      } else if (!isScrollModeNormal && ww <= NORMAL_SCROLL_BREAKPOINT) {
        isScrollModeNormal = true;
        $(".full-page").fullPageScroller("switchToNormalScroll");
      }
    };

    handleResize();

    $(window).on("resize", () => {
      clearTimeout(resizeTimeOut);
      resizeTimeOut = setTimeout(() => {
        handleResize();
      }, 100);
    });
  };

  init();

  //EVENTS1
  $(".full-page").on("fullPageScroller.goToSlideStart", (el, index) => {
    console.log('Start go to - ' + index);
  });
  $(".full-page").on("fullPageScroller.goToSlideEnded", (el, index) => {
    console.log('Ended go to - ' + index);
  });

  $(".full-page").on("fullPageScroller.openCollapseStart", (el, index) => {
    console.log('Collapse open start - ' + index);
  });
  $(".full-page").on("fullPageScroller.openCollapseEnded", (el, index) => {
    console.log('Collapse open ended - ' + index);
  });

  $(".full-page").on("fullPageScroller.closeCollapseStart", (el, index) => {
    console.log('Collapse close start - ' + index);
  });
  $(".full-page").on("fullPageScroller.closeCollapseEnded", (el, index) => {
    console.log('Collapse close ended - ' + index);
  });
});
