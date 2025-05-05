const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
function openPopup(imageSrc) {
  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImg");
  popupImg.src = imageSrc; 
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("imagePopup");
  popup.style.display = "none"; 
}
