let basePath = "";
let images = [];
const path = window.location.pathname.toLowerCase();

if (path.includes("tablelamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Table_lamps/";
  const fileNames = [
    "t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg",
    "t1.jpg", "t2.jpg", "t4.jpg", "t5.jpg", "t6.jpg",
    "t1.jpg", "t2.jpg"
  ];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("walllamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/wall_lamps/";
  const fileNames = Array(23).fill("WallLamps.jpg"); // 13 same images
  images = fileNames.map(file => basePath + file);

} else if (path.includes("floorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/floor_lamps/";
  const fileNames = Array(20).fill("floorLamps.jpg");
  images = fileNames.map(file => basePath + file);

} else if (path.includes("chandeliers")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/chandeliers/";
  const fileNames = [
    "chandelier.jpg", "chandelier1.JPG", "chandelier2.JPG", "chandelier3.PNG", "chandelier4.PNG", "chandelier5.PNG",
    "chandelier6.JPG", "chandelier7.JPG", "chandelier8.JPG", "chandelier9.JPG", "chandelier10.JPG",
    "chandelier11.JPG", "chandelier12.JPG", "chandelier13.JPG", "chandelier14.JPG", "chandelier15.JPG",
    "chandelier16.PNG", "chandelier17.JPG", "chandelier18.JPG", "chandelier19.JPG", "chandelier20.JPG",
    "chandelier21.JPG", "chandelier22.JPG", "chandelier23.JPG", "chandelier24.JPG", "chandelier25.JPG",
    "chandelier26.JPG", "chandelier27.JPG", "chandelier2.JPG", "chandelier3.PNG", "chandelier4.PNG",
    "chandelier1.JPG"
  ];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("pendants")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/pendants/";
  const fileNames = Array(17).fill("Pendants.jpg");
  images = fileNames.map(file => basePath + file);

} else if (path.includes("outdoorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/outdoor_lamps/";
  const fileNames = Array(27).fill("outdoorLamps.jpg");
  images = fileNames.map(file => basePath + file);
}
// Pagination setup
let currentPage = 0;
const pageSize = 16;

function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = "";

  const start = currentPage * pageSize;
  const end = Math.min(start + pageSize, images.length);

  for (let i = start; i < end; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.alt = `Gallery Item ${i + 1}`;
    img.onclick = () => openModal(images[i]);

    const card = document.createElement('div');
    card.className = "gallery-card";
    card.appendChild(img);
    gallery.appendChild(card);
  }
}

function changePage(step) {
  const totalPages = Math.ceil(images.length / pageSize);
  currentPage += step;
  if (currentPage < 0) currentPage = 0;
  if (currentPage >= totalPages) currentPage = totalPages - 1;
  renderGallery();
}

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeModal(event) {
  if (event.target.id === "imageModal" || event.target.className === "close-btn") {
    document.getElementById("imageModal").style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", renderGallery);
