$(document).ready(function () {
  $(".slider").slick({
    prevArrow:
      '<button class="slider-btn slider-prev"><img src="images/right-arrow.svg"></button>',
    nextArrow:
      '<button  class="slider-btn slider-next"><img src="images/right-arrow.svg"></button>',
  });
});

const link1 = $(".catalog__link1");
const link2 = $(".catalog__link2");
const item1 = $(".item-inner1");
const item2 = $(".item-inner2");

link1.click(function () {
  item1.removeClass("item-active");
  item2.addClass("item-active");
  link1.css({ "border-bottom": "2px solid #005bc1", color: "#005bc1" });
  link2.css({ "border-bottom": "none", color: "#343434" });
});

link2.click(function () {
  item2.removeClass("item-active");
  item1.addClass("item-active");
  link2.css({ "border-bottom": "2px solid #005bc1", color: "#005bc1" });
  link1.css({ "border-bottom": "none", color: "#343434" });
});

$(document).ready(function () {
  $(".rent-slider").slick({
    prevArrow:
      '<button class="slick-prev slick-right-arrow"><img src="images/right-arrow.svg"></button>',
    nextArrow:
      '<button class="slick-next slick-left-arrow"><img src="images/right-arrow.svg"></button>',
    infinite: true,
  });

  $(".rent__inner-items").css({ display: "flex" });
});
