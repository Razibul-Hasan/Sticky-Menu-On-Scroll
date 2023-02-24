var menu = document.getElementById("navbar_menu");

window.onscroll = function () {
  var scrolltop = window.scrollY;
  if (scrolltop >= 100) {
    menu.classList.add("navbar_menu-modfi");
  } else {
    menu.classList.remove("navbar_menu-modfi");
  }
};
