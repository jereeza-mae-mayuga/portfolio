const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    logo.src = "jmm-logo.png";
  } else {
    toggleBtn.textContent = "🌙";
    logo.src = "jmm-logo1.png";
  }
});
