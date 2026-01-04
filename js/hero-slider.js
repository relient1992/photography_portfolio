const slides = document.querySelectorAll(".hero-slide");
let currentIndex = 0;
const slideInterval = 3000; // 3 seconds

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, slideInterval);
