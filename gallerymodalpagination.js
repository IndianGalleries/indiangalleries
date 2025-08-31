let basePath = "";
let images = [];
const path = window.location.pathname.toLowerCase();

if (path.includes("tablelamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Table_lamps/";
  const fileNames = [
    "t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg",
    "newtablelamp6.png", "newtablelamp2.png", "newtablelamp3.png", "newtablelamp4.png", "newtablelamp5.png",
    "t1.jpg", "t2.jpg","t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg","newtablelamp3.png", "newtablelamp4.png", "newtablelamp5.png"  ];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("walllamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Wall_Lamps/";

  // const fileNames = Array(23).fill("WallLamps.jpg");
  const fileNames = ["w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg",
    "w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg",
    "w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg"

  ];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("floorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Floor_lamps/";
  // const fileNames = Array(20).fill("floorLamps.jpg");
  const fileNames = ["f1.JPG", "f2.JPG", "f3.JPG", "f4.JPG", "f5.JPG", "f6.JPG",
    "floor1.JPG", "floor2.JPG", "floor3.JPG", "floor4.JPG", "floor5.JPG",
    "floor6.JPG", "floor7.PNG", "floor8.PNG", "floor9.PNG", "floor10.PNG",
    "floor11.PNG", "floor13.PNG"
  ];
  images = fileNames.map(file => basePath + file);

} 
else if (path.includes("chandeliers")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Chandeliers/";
  const fileNames = [
    "chandelier.jpg", "Chandelier1.JPG", "Chandelier2.JPG", "Chandelier3.PNG", "Chandelier4.PNG", "Chandelier5.PNG",
    "chandelier6.JPG", "Chandelier7.JPG", "Chandelier8.JPG", "Chandelier9.JPG", "Chandelier10.JPG",
    "Chandelier11.JPG", "Chandelier12.JPG", "Chandelier13.JPG", "Chandelier14.JPG", "Chandelier15.JPG",
    "Chandelier16.PNG", "Chandelier17.JPG", "Chandelier18.JPG", "Chandelier19.JPG", "Chandelier20.JPG",
    "Chandelier21.JPG", "Chandelier22.JPG", "Chandelier23.JPG", "Chandelier24.JPG", "Chandelier25.JPG",
    "Chandelier26.JPG", "Chandelier27.JPG", "Chandelier2.JPG", "Chandelier3.PNG", "Chandelier4.PNG",
    "Chandelier1.JPG"
  ];
   images = fileNames.map(file => basePath + file);
} else if (path.includes("pendants")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Pendants/";
  // const fileNames = Array(15).fill("Pendants.jpg");
  const fileNames = [
    "Pendants.jpg", "Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG", "Pendent9.JPG", "Pendent10.JPG","Pendent12.JPG",
  "p11.JPG", "p12.jpg", "p13.JPG", "p14.JPG", "p15.JPG", "p17.JPG", "Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG"];

  images = fileNames.map(file => basePath + file);

} else if (path.includes("outdoorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/OutDoor_lamps/";
  // const fileNames = Array(27).fill("outdoorLamps.jpg");
  const fileNames = [
    "O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg",
    "O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg",
    "O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg",];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("tabletopitem")) {
  basePath = "/Images/Product Images/HomeDecor/TableTopItems/";
  const fileNames = [
    "tabletop1.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg",
     "tabletop4.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop7.jpg", "tabletop6.jpg",
     "tabletop1.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("flowervases")) {
  basePath = "/Images/Product Images/HomeDecor/FlowerVases/";
  const fileNames = [
    "flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg",
     "flower6.jpg", "flower7.jpg", "flower8.jpg", "flower9.jpg", "flower10.jpg","flower11.jpg", "flower12.jpg"
    , "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("walldecor")) {
  basePath = "/Images/Product Images/HomeDecor/WallDecor/";
  const fileNames = [
    "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg",
    "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", 
    "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor1.jpg", "walldecor2.jpg"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("handpainteditems")) {
  basePath = "/Images/Product Images/HomeDecor/HandPaintedItems/";
  const fileNames = [
    "handpainted1.jpg", "handpainted2.jpg", "handpainted1.jpg", "handpainted2.jpg", "handpainted1.jpg", "handpainted2.jpg",
    "handpainted1.jpg", "handpainted2.jpg", "handpainted1.jpg", "handpainted2.jpg", "handpainted1.jpg", "handpainted2.jpg", "handpainted1.jpg", "handpainted2.jpg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("silverteacupset")) 
  {
  basePath = "/Images/Product Images/LuxuryKitchenWares/SilverTeaCupSet/";
  const fileNames = [
    "teacup1.png", "teacup2.png", "teacup1.png", "teacup2.png", "teacup1.png", "teacup2.png", "teacup1.png", 
    "teacup2.png","teacup1.png", "teacup2.png", "teacup1.png", "teacup2.png", 
     "teacup1.png", "teacup2.png", "teacup1.png", "teacup2.png", "teacup1.png", "teacup2.png", "teacup1.png"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("etagere")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Etagere/";
  const fileNames = [
    "etagere1.png", "etagere2.png", "etagere1.png", "etagere2.png", "etagere1.png", "etagere2.png", "etagere1.png", 
     "etagere2.png", "etagere1.png", "etagere1.png", "etagere2.png", "etagere1.png", "etagere2.png", "etagere1.png"
    , "etagere2.png", "etagere1.png", "etagere2.png", "etagere1.png"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("trays")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Trays/";
  const fileNames = [
    "trays1.png", "trays2.png", "trays1.png", "trays2.png","trays1.png", "trays2.png", "trays1.png", "trays2.png", 
     "trays1.png", "trays2.png", "trays1.png", "trays2.png", "trays1.png", "trays2.png", "trays1.png", "trays2.png",];
  images = fileNames.map(file => basePath + file);
}
// Pagination setup
let currentPage = 0;
const pageSize = 12;

// ===== Render Gallery =====
function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = "";

  const start = currentPage * pageSize;
  const end = Math.min(start + pageSize, images.length);
//new dynamic code for gallery
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
  // Pagination buttons control
  const totalPages = Math.ceil(images.length / pageSize);
  const prevBtn = document.querySelector('.pagination button:nth-child(1)');
  const nextBtn = document.querySelector('.pagination button:nth-child(2)');

  if (totalPages <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = currentPage > 0 ? "inline-block" : "none";
    nextBtn.style.display = currentPage < totalPages - 1 ? "inline-block" : "none";
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
