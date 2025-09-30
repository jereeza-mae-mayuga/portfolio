
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


document.addEventListener("mousemove", (e) => {
  const chance = 0.05;
  if (Math.random() < chance) {
    const pixel = document.createElement("img");
    pixel.classList.add("pixel");
    pixel.src = "res/stardew-star.png"; 

    const size = Math.random() * (60 - 30) + 30; 
    const offsetX = Math.random() * 15 - 7.5;
    const offsetY = Math.random() * 15 - 7.5;

    pixel.style.position = "absolute";
    pixel.style.left = `${e.clientX + offsetX}px`;
    pixel.style.top = `${e.clientY + offsetY}px`;
    pixel.style.width = `${size}px`;
    pixel.style.height = `${size}px`;
    pixel.style.pointerEvents = "none";
    pixel.style.zIndex = "9999"; 
    document.body.appendChild(pixel);


    pixel.addEventListener("animationend", () => {
      pixel.remove();
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // Nav slide-in
  anime({
    targets: "nav",
    translateY: [-40, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".about-container h1",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: "easeOutExpo",
  });

  anime({
    targets: ".paragraph-box",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: 400,
    duration: 1000,
    easing: "easeOutCubic",
  });

  //software logos
  anime({
    targets: ".logo-box",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: anime.stagger(200, { start: 800 }),
    duration: 900,
    easing: "easeOutCubic",
  });

  //Software heading
  anime({
    targets: ".software-container p",
    translateY: [20, 0],
    opacity: [0, 1],
    delay: 800,
    duration: 900,
    easing: "easeOutCubic",
  });
});

//HOVER EFFECT

document.querySelectorAll(".logo-box img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    anime({
      targets: img,
      scale: 1.15,
      duration: 300,
      easing: "easeOutQuad",
    });
  });

  img.addEventListener("mouseleave", () => {
    anime({
      targets: img,
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    });
  });
});
