$(function cssx_init_navbar(nav_class) {
  $(document).scroll(function () {
    var $nav = $(nav_class);
    $nav.toggleClass("scrolled-nav", $(this).scrollTop() > $nav.height());
  });
});

function cssx_body_theme_light(){
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");
}

function cssx_body_theme_dark(){
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-dark");
}

function cssx_body_theme_toggle(){
  if (document.body.classList.contains("theme-light")){
    body_theme_dark(); 
  } else {
    body_theme_light();
  }
}

function cssx_body_theme_light_save(){
  body_theme_light();
  localStorage.setItem("theme","light");
}

function cssx_body_theme_dark_save(){
  body_theme_dark();
  localStorage.setItem("theme","dark");
}

function cssx_body_theme_toggle_save(){
  if (document.body.classList.contains("theme-light")){
    body_theme_dark();
    localStorage.setItem("theme","dark");
  } else {
    body_theme_light();
    localStorage.setItem("theme","light");
  }
}

function cssx_body_theme_load(){
  if (localStorage.getItem("theme")){
    if (localStorage.getItem("theme") == "dark"){
      body_theme_dark();
    } else {
      body_theme_light();
    }
  }
}
