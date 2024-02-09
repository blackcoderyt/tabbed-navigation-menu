const navItems = document.querySelectorAll(".nav-item");

function activeLink() {
  navItems.forEach((item) => {
    item.classList.remove("nav--active");
    this.classList.add("nav--active");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", activeLink);
});
