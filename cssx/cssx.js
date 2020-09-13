$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled-nav', $(this).scrollTop() > $nav.height());
  });
});
