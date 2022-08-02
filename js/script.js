$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__content").addClass("active");
    $(".nav").addClass("active");
    $(".header__close").addClass("active");
    
  });

  $(".header__close").click(function (event) {
    $(".header__content").removeClass("active");
    $(".nav").removeClass("active");
    $(".header__close").removeClass("active");
  });

  $(".main").click(function (event) {
    if (
      $(".header__content").hasClass("active") &&
      event.target != $(".header__content")[0] &&
      !$(".header__content").has(event.target).length
    ) {
      $(".header__content").removeClass("active");
      $(".nav").removeClass("active");
      $(".header__close").removeClass("active");
    }
  });


});
