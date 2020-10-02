// navbar and showcase scroll effect
const checkpoint = 200;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < checkpoint) {
    // original scroll place
    $("header").removeClass("scroll-effect-on");
    $("#img-logo").removeClass("img-logo-on mt-1");
    $("header>div").addClass("mt-3");
    $("header").removeClass("border-bot");
    opacity = 1 - scroll / checkpoint;
  } else {
    //when scrolled down
    $("header").addClass("scroll-effect-on");
    $("#img-logo").addClass("img-logo-on mt-1");
    $("header>div").removeClass("mt-3");
    $("header").addClass("border-bot");
    opacity = 0;
  }
  document.querySelector("#main-text").style.opacity = opacity;
});
