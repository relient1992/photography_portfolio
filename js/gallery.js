const galleryGrid = document.getElementById("gallery");

function getCategory() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

const imageMap = {
  portraits: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
  food: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  events: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  pets: ["1.jpg", "2.jpg"],
  realestate: ["1.jpg", "2.jpg", "3.jpg"]
};

function loadImages() {
  const category = getCategory();
  if (!imageMap[category]) return;

  imageMap[category].forEach(img => {
    const image = document.createElement("img");
    image.src = `images/${category}/${img}`;
    image.loading = "lazy";

    image.addEventListener("click", () => {
      openLightbox(image.src);
    });

    galleryGrid.appendChild(image);
  });
}

function setColumns(cols, btn = null) {
  galleryGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  document.querySelectorAll(".control-btn").forEach(b =>
    b.classList.remove("active")
  );

  if (btn) btn.classList.add("active");
}

loadImages();
document.querySelector(".control-btn.active")?.click();

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightboxImg.src = "";
}

lightbox.addEventListener("click", closeLightbox);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});
