const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const toggleBtn = document.getElementById("darkModeToggle");
const logo = document.getElementById("site-logo");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".about-container h1",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".paragraph-box",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: 500,
    duration: 1000,
    easing: "easeOutCubic"
  });

  anime({
    targets: "nav",
    translateY: [-40, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutExpo"
  });
});

document.querySelectorAll(".logo-box img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    anime({
      targets: img,
      scale: 1.15,
      duration: 300,
      easing: "easeOutQuad"
    });
  });

  img.addEventListener("mouseleave", () => {
    anime({
      targets: img,
      scale: 1,
      duration: 300,
      easing: "easeOutQuad"
    });
  });
});
