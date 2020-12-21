require("./sass/style.scss");

require("jquery");

require("../dist/full-page-scroller.js");

jQuery(function () {
  $(".full-page").fullPageScroller();


  let isScrollModeNormal = false;

  $('#switchScrollMode').on('click', () => {

    if (isScrollModeNormal) {
      isScrollModeNormal = false;
      $(".full-page").fullPageScroller('switchToSectionScroll');    
    }
    else {
      isScrollModeNormal = true;
      $(".full-page").fullPageScroller('switchToNormalScroll');  
    }
  })
  
});
