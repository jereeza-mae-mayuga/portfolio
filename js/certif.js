const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: "nav",
    translateY: [-40, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".certif-container h1",
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: "easeOutExpo"
  });

  anime({
    targets: ".paragraph-box",
    translateY: [30, 0],
    opacity: [0, 1],
    delay: 400,
    duration: 1000,
    easing: "easeOutCubic"
  });

  anime({
    targets: ".certif-logos .logo-box",
    translateY: [40, 0],
    opacity: [0, 1],
    delay: anime.stagger(250, { start: 900 }),
    duration: 900,
    easing: "easeOutCubic"
  });
});

document.querySelectorAll(".logo-box img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    anime({
      targets: img,
      scale: 1.1,
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

function openPopup(imageSrc) {
  const popupImg = document.getElementById("popupImg");
  popupImg.src = imageSrc;
  document.getElementById("imagePopup").style.display = "flex";

  anime({
    targets: "#imagePopup img",
    scale: [0.7, 1],
    opacity: [0, 1],
    duration: 500,
    easing: "easeOutBack"
  });
}

function closePopup() {
  const popup = document.getElementById("imagePopup");

  anime({
    targets: "#imagePopup img",
    scale: [1, 0.7],
    opacity: [1, 0],
    duration: 400,
    easing: "easeInBack",
    complete: () => {
      popup.style.display = "none";
    }
  });
}
