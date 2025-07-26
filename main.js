const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const ulOpening = document.querySelector(".ul-opening");

const toggleLight = document.querySelector(".light-toggle");
const toggleDark = document.querySelector(".dark-toggle");

menuOpen.addEventListener("click", () => {
  ulOpening.classList.add("open");
});

menuClose.addEventListener("click", () => {
  ulOpening.classList.remove("open");
});

toggleLight.addEventListener("click", () => {
  document.body.classList.remove("dark");
  toggleLight.style.display = "none";
  toggleDark.style.display = "block";
});

toggleDark.addEventListener("click", () => {
  document.body.classList.add("dark");
  toggleLight.style.display = "block";
  toggleDark.style.display = "none";
});
