$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 200) {
    $("header").removeClass("scroll-effect-on");
  } else {
    $("header").addClass("scroll-effect-on");
  }
});
