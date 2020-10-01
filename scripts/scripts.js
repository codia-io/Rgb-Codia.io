$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 200) {
    // original scroll place
    $("header").removeClass("scroll-effect-on");
    $("#img-logo").removeClass("img-logo-on");
    $("#navBar").addClass("mt-2");
    $("header").removeClass("border-bot");
  } else {
    //when scrolled down
    $("header").addClass("scroll-effect-on");
    $("#img-logo").addClass("img-logo-on");
    $("#navBar").removeClass("mt-2");
    $("header").addClass("border-bot");
  }
});
