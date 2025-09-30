const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

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
    targets: ".about-container h3",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: 300,
    duration: 1000,
    easing: "easeOutCubic"
  });

  anime({
    targets: ".contact-buttons a",
    translateY: [20, 0],   
    delay: anime.stagger(150, { start: 500 }),
    duration: 600,
    easing: "easeOutCubic"
  });

  anime({
    targets: ".contact-form-container",
    translateY: [40, 0],
    opacity: [0, 1],
    delay: 1000,
    duration: 1000,
    easing: "easeOutExpo"
  });

  // Nav
  anime({
    targets: "nav",
    translateY: [-40, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutExpo"
  });
});
