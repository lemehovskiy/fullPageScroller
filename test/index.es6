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

  //EVENTS
  $(".full-page").on("fullPageScroller.goToSlide", (el, index) => {
    console.log(index);
  });
});
