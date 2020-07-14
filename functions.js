/*================================================
*
* Template name : Ones
* Version       : 1.0
* Author        : FlaTheme
* Author URL    : http://themeforest.net/user/flatheme
*
* Table of Contents :
* 1.  Page Preloaders
* 2.  Scrollspy
* 3.  Smoothscroll links
* 4.  Scroll To Top
* 5.  Scroll Animations Library
* 6.  Header Menu
* 7.  Fullscreen Menu
* 8.  Sidebar Menu
* 9.  Background Image
* 10. Parallax
* 11. Sliders
* 12. Portfolio Masonry
* 13. Portfolio Grid
* 14. Justified Gallery
* 15. Masonry Grid
* 16. Lightbox
* 17. Accordion
* 18. Counter
* 19. Countdown
* 20. Google Maps
* 21. Contact Form
*
================================================*/
"use strict";

var $htmlBody = $("html,body");
var $body = $("body");
var $windowWidth = $(window).width();


/*===============================================
  1. Page Preloaders
===============================================*/
$(window).on("load", function () {
  $body.addClass("loaded");
});

if ($body.attr("data-preloader") === "light") {
  $body.append($("<div class='preloader'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}
else if ($body.attr("data-preloader") === "dark") {
  $body.append($("<div class='preloader dark'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}
else if ($body.attr("data-preloader") === "black") {
  $body.append($("<div class='preloader black'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20'/></svg></div></div>"));
}


/*===============================================
  2. Scrollspy
===============================================*/
//$body.scrollspy({ target: '.header-menu' });


/*===============================================
  3. Smoothscroll links
===============================================*/
var $smoothscroll = $(".smoothscroll, .nav-link:not(.nav-dropdown-toggle)");

$smoothscroll.on("click", function(e) {
  $htmlBody.animate({scrollTop: $(this.hash).offset().top}, 500, "easeInOutQuart");
  e.preventDefault();
});


/*===============================================
  4. Scroll to Top
===============================================*/
var $scrollToTop = $(".scrolltotop");

$(window).on("scroll", function(){
  if ($(this).scrollTop() > 700) { // 700px from top
    $scrollToTop.addClass("scrolltotop-show");
  }
  else {
    $scrollToTop.removeClass("scrolltotop-show");
  }
});

$scrollToTop.on("click", function(){
  $htmlBody.animate({scrollTop : 0}, 500, "easeInOutQuart");
  return false;
});


/*===============================================
  5. Scroll Animations Library
===============================================*/
//sal({ duration: 500 });


/*===============================================
  6. Header Menu
===============================================*/
//
// Auto Hide //
//
var c, currentScrollTop = 0, header = $(".header.sticky-autohide");

$(window).on("scroll", function () {
  var a = $(window).scrollTop();
  currentScrollTop = a;

  if (c < currentScrollTop && a > 210) {
    header.addClass("hide");
  } else if (c > currentScrollTop && !(a <= 210)) {
    header.removeClass("hide");
  }

  c = currentScrollTop;
});

if ($(".header.sticky-autohide:not(.header-lg, .header-xl, .absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder'></div>").insertBefore(".header.sticky-autohide");
}
if ($(".header-lg.sticky-autohide:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-lg'></div>").insertBefore(".header-lg.sticky-autohide");
}
if ($(".header-xl.sticky-autohide:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-xl'></div>").insertBefore(".header-xl.sticky-autohide");
}

//
// Sticky //
//
if ($(".header.sticky:not(.header-lg, .header-xl, .absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder'></div>").insertBefore(".header.sticky");
}
if ($(".header-lg.sticky:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-lg'></div>").insertBefore(".header-lg.sticky");
}
if ($(".header-xl.sticky:not(.absolute-light, .absolute-dark)").length) {
  $("<div class='header-placeholder-xl'></div>").insertBefore(".header-xl.sticky");
}

//
// Absolute //
//
if ($(".absolute-light").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.sticky-autohide, .header.sticky");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-light");
    }
    else {
      headerFixed.addClass("absolute-light");
    }
  });
}
if ($(".absolute-dark").length) {
  $(window).on("scroll", function() {
    var headerFixed = $(".header.sticky-autohide, .header.sticky");
    if ($(window).scrollTop() > 10) {
      headerFixed.removeClass("absolute-dark");
    }
    else {
      headerFixed.addClass("absolute-dark");
    }
  });
}

//
// Open/Close Header Menu //
//
var headerMenu = $(".header-menu");
var headerToggle = $(".header-toggle");

headerToggle.on("click", function(e) {
  if (headerMenu.hasClass("show")) {
    headerMenu.removeClass("show");
    headerToggle.removeClass("toggle-close");
  }
  else {
    headerMenu.addClass("show");
    headerToggle.addClass("toggle-close");
  }
  e.stopPropagation();
});


//
// Dropdown Menu //
//
$(".nav-dropdown-toggle").each(function() {
  var $this = $(this);
  if ($this.parent(".nav-item").children(".nav-dropdown").length) {
    var navDropdown = $this.parent(".nav-item").children(".nav-dropdown");
    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        navDropdown.removeClass("show");
      }
      else {
        $this.addClass("active");
        navDropdown.addClass("show");
      }
      e.preventDefault();
    });
  }
});

//
// Subdropdown Menu //
//
$(".nav-subdropdown-toggle").each(function() {
  var $this = $(this);
  if ($this.parent(".nav-dropdown-item").children(".nav-subdropdown").length) {
    var navSubDropdown = $this.parent(".nav-dropdown-item").children(".nav-subdropdown");
    $this.on("click", function(e) {
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        navSubDropdown.removeClass("show");
      }
      else {
        $this.addClass("active");
        navSubDropdown.addClass("show");
      }
      e.preventDefault();
    });
  }
});


/*===============================================
  12. Portfolio Masonry
===============================================*/
var $portfolioMasonry = $(".portfolio-masonry");

if ($portfolioMasonry.length) {
  $portfolioMasonry.imagesLoaded(function() {
    var $portfolioWrapper = $(".portfolio-masonry").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 300 // 0.3 second
    });

    // Portfolio Filter //
    var filter = $(".portfolio-filter li, .portfolio-side-filter li");

    filter.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass("active");
      $(this).addClass("active");
    });
  });
}


/*===============================================
  13. Portfolio Grid
===============================================*/
/*var $portfolioGrid = $(".portfolio-grid");

if ($portfolioGrid.length) {
  var mixer = mixitup('.portfolio-grid', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
  });
}*/

/*===============================================
  15. Masonry Grid
===============================================*/
var $masonryGrid = $(".masonry").imagesLoaded( function() {
  $masonryGrid.masonry({
    itemSelector: '.masonry-item', 
    columnWidth: '.masonry-item', 
    gutter: 0
  });
});
