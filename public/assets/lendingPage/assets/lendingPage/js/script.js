$(document).ready(function(event) {
  var top_header = $(".carousel .fill");

  $(window).scroll(function() {
    var st = $(this).scrollTop();
    top_header.css({
      "background-position": "center calc(50% + " + st * 0.8 + "px)"
    });
  });
});

$(".carousel").swipe({
  swipe: function(
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
  ) {
    if (direction == "left") $(this).carousel("next");
    if (direction == "right") $(this).carousel("prev");
  },
  allowPageScroll: "vertical"
});

$(".carousel").swipe({
  swipe: function(
    event,
    direction,
    distance,
    duration,
    fingerCount,
    fingerData
  ) {
    if (direction == "left") $(this).carousel("next");
    if (direction == "right") $(this).carousel("prev");
  },
  allowPageScroll: "vertical"
});

