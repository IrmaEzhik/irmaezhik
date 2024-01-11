document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var navigationMenu = document.getElementById("navigation-menu");

  menuToggle.addEventListener("change", function () {
    if (menuToggle.checked) {
      navigationMenu.style.bottom = "0";
    } else {
      navigationMenu.style.bottom = "-100%";
    }
  });

  var links = document.querySelectorAll("#navigation-menu a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = link.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
