$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled-nav", $(this).scrollTop() > $nav.height());
  });
});

function body_theme_light(){
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");
}

function body_theme_dark(){
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-dark");
}

function body_theme_toggle(){
  if (document.body.classList.contains("theme-light")){
    body_theme_dark(); 
  } else {
    body_theme_light();
  }
}
