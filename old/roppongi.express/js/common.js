//キービジュアルズーム
window.addEventListener("scroll", () => {
  if (window.innerWidth > 1300) {
    let elem = document.getElementById("keyvisual");
    let scrollY = window.scrollY / 60;
    elem.style.backgroundSize = 180 + scrollY + "%";
  }
});

//フェードアニメーション
$(window).on("load scroll", function () {
  var elem = $(".animated");
  elem.each(function () {
    var isAnimate = $(this).data("animate");
    var elemOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();
    if (scrollPos > elemOffset - wh + wh / 2) {
      $(this).addClass(isAnimate);
    }
  });
});

//facebook
$(function () {
  function pagePluginCode(w) {
    if (w > 400) {
      var h = 300;
    } else {
      var h = 200;
    }
    return (
      '<div class="fb-page" data-href="https://www.facebook.com/RXBIKESportsFitness/" data-tabs="timeline" data-width="' +
      w +
      '" data-height="' +
      h +
      '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/RXBIKESportsFitness/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/RXBIKESportsFitness/">RX BIKE</a></blockquote></div>'
    );
  }

  var facebookWrap = $(".facebook-wrapper");
  var fbBeforeWidth = "";
  var fbWidth = facebookWrap.width();
  var fbTimer = false;
  $(window).on("load resize", function () {
    if (fbTimer !== false) {
      clearTimeout(fbTimer);
    }
    fbTimer = setTimeout(function () {
      fbWidth = Math.floor(facebookWrap.width());
      if (fbWidth != fbBeforeWidth) {
        facebookWrap.html(pagePluginCode(fbWidth));
        window.FB.XFBML.parse();
        fbBeforeWidth = fbWidth;
      }
    }, 200);
  });
});

//スムーズスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    var positionSm = target.offset().top - 72;
    if ($(window).width() < 992) {
      $("html, body").animate({ scrollTop: positionSm }, speed, "swing");
    } else {
      $("html, body").animate({ scrollTop: position }, speed, "swing");
    }
    return false;
  });
});
