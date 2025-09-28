const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".project-container h1",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".project-container .subtitle",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: 400,
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

  anime({
    targets: ".project-card",
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200, { start: 600 }),
    duration: 1000,
    easing: "easeOutExpo"
  });
});

document.querySelectorAll(".project-image img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    anime({
      targets: img,
      scale: 1.05,
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
