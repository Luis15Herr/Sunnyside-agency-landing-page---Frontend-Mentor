let trigger = document.querySelector(".nav__trigger");
let menu = document.querySelector(".mobile__nav");

trigger.addEventListener("click", function () {
  menu.classList.toggle("active");
});
