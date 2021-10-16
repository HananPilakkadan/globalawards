$(document).ready(function () {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) { },
    scrollContainer: null,
    resetAnimation: true,
  });

  wow.init();

  // header-sticky
  window.onscroll = function () {
    headerFunction();
  };
  var body = document.body;
  var sticky = body.offsetTop;

  function headerFunction() {
    if (window.pageYOffset > 100) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }
});

// hamburger-menu
function showMenu() {
  $("body").toggleClass("active");
}

function hideMenu() {
  $("body").removeClass("active");
}
