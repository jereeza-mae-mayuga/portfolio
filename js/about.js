const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const pixelOverlay = document.querySelector(".pixel-overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Pixel movement logic based on mouse movement (less frequent)
document.addEventListener("mousemove", (e) => {
  const numberOfPixels = 1;
  const chance = 0.055; // Reduced to avoid overwhelming effect

  if (Math.random() < chance) {
    for (let i = 0; i < numberOfPixels; i++) {
      const pixel = document.createElement("img");
      pixel.classList.add("pixel");
      pixel.src = "res/stardew-star.png";

      const size = Math.random() * (60 - 30) + 30;
      const offsetX = Math.random() * 15 - 7.5;
      const offsetY = Math.random() * 15 - 7.5;
      const x = e.clientX + offsetX;
      const y = e.clientY + offsetY;

      pixel.style.position = "absolute";
      pixel.style.left = `${x}px`;
      pixel.style.top = `${y}px`;
      pixel.style.width = `${size}px`;
      pixel.style.height = `${size}px`;
      pixel.style.pointerEvents = "none";
      document.body.appendChild(pixel);

      setTimeout(() => {
        pixel.style.left = `${e.clientX + offsetX}px`;
        pixel.style.top = `${e.clientY + offsetY}px`;
        pixel.style.opacity = 0;
      }, 50);

      setTimeout(() => {
        pixel.remove();
      }, 1600);
    }
  }
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
