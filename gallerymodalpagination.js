let basePath = "";
let images = [];
const path = window.location.pathname.toLowerCase();

if (path.includes("tablelamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Table_lamps/";
  const fileNames = [
    "t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg",
    "newtablelamp6.png", "newtablelamp2.png", "newtablelamp3.png", "newtablelamp4.png", "newtablelamp5.png",
    "t1.jpg", "t2.jpg","t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg","newtablelamp3.png", "newtablelamp4.png", "newtablelamp5.png","t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg",
    "newtablelamp6.png", "newtablelamp2.png", "newtablelamp3.png", "newtablelamp4.png", "newtablelamp5.png",
    "t1.jpg", "t2.jpg","t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg","newtablelamp3.png", "newtablelamp4.png","t1.jpg", "t2.jpg", "t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg",
    "newtablelamp6.png", "newtablelamp2.png", "newtablelamp3.png", "newtablelamp4.png", "newtablelamp5.png",
    "t1.jpg", "t2.jpg","t3.jpg", "t4.jpg", "t5.jpg", "t6.jpg","newtablelamp3.png", "newtablelamp4.png" ];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("walllamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Wall_Lamps/";

  // const fileNames = Array(23).fill("WallLamps.jpg");
  const fileNames = ["w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg","w7.jpeg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg",
    "w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg","w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg",
    "w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg","w1.jpg", "w2.JPG", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg",
    "w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg"
  ,"w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg",
    "w7.jpeg", "w8.jpeg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg"
  ];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("floorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Floor_lamps/";
  // const fileNames = Array(20).fill("floorLamps.jpg");
  const fileNames = ["f1.JPG", "f2.JPG", "f3.JPG", "f4.JPG", "f5.JPG", "f6.JPG","floor1.JPG", "floor2.JPG", "floor3.JPG", "floor4.JPG", "floor5.JPG",
    "floor6.JPG", "floor7.PNG", "floor8.PNG", "floor9.PNG", "floor10.PNG","floor11.PNG", "floor13.PNG","f1.JPG", "f2.JPG", "f3.JPG", "f4.JPG", "f5.JPG", "f6.JPG",
    "floor1.JPG", "floor2.JPG", "floor3.JPG", "floor4.JPG", "floor5.JPG", "floor6.JPG", "floor7.PNG", "floor8.PNG", "floor9.PNG", "floor10.PNG",
    "floor11.PNG", "floor13.PNG","f1.JPG", "f2.JPG", "f3.JPG", "f4.JPG", "f5.JPG", "f6.JPG",
    "floor1.JPG", "floor2.JPG", "floor3.JPG", "floor4.JPG", "floor5.JPG", "floor6.JPG", "floor7.PNG", "floor8.PNG", "floor9.PNG", "floor10.PNG",
    "floor11.PNG", "floor13.PNG","f1.JPG", "f2.JPG", "f3.JPG", "f4.JPG", "f5.JPG", "f6.JPG", "floor1.JPG", "floor2.JPG", "floor3.JPG", "floor4.JPG", "floor5.JPG",
    "floor6.JPG", "floor7.PNG", "floor8.PNG", "floor9.PNG", "floor10.PNG",
    "floor11.PNG", "floor13.PNG"
  ];
  images = fileNames.map(file => basePath + file);

} 
else if (path.includes("chandeliers")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Chandeliers/";
  const fileNames = [
    "chandelier.jpg", "Chandelier1.JPG", "Chandelier2.JPG", "Chandelier3.PNG", "Chandelier4.PNG", "Chandelier5.PNG", "chandelier6.JPG","NewChandelier9.jpeg",
    "NewChandelier8.png", "NewChandelier5.jpeg", "Chandelier13.JPG", "Chandelier14.JPG", "Chandelier15.JPG", "Chandelier16.PNG", "Chandelier17.JPG", "Chandelier18.JPG", "Chandelier19.JPG", "Chandelier20.JPG",
    "Chandelier21.JPG", "Chandelier22.JPG", "Chandelier23.JPG", "Chandelier24.JPG", "Chandelier25.JPG", "Chandelier26.jpeg", "Chandelier27.JPG", "NewChandelier1.jpeg","NewChandelier2.jpeg", "NewChandelier8.png",
    "NewChandelier4.jpeg","chandelier.jpg", "Chandelier1.JPG", "Chandelier2.JPG","NewChandelier7.jpeg","Chandelier8.JPG","NewChandelier9.jpeg", "Chandelier3.PNG", "Chandelier4.PNG",
    "Chandelier1.JPG","chandelier.jpg", "Chandelier1.JPG", "Chandelier2.JPG", "Chandelier3.PNG", "Chandelier4.PNG", "Chandelier5.PNG",    "chandelier6.JPG", "Chandelier7.JPG", "Chandelier8.JPG", "Chandelier9.JPG", "Chandelier10.JPG"
  ];
   images = fileNames.map(file => basePath + file);
} else if (path.includes("pendants")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Pendants/";
  // const fileNames = Array(15).fill("Pendants.jpg");
  const fileNames = [
    "Pendants.jpg", "Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG", "Pendent9.JPG", "Pendent10.JPG","Pendent12.JPG",
  "p11.JPG", "p12.jpg", "p13.JPG", "p14.JPG", "p15.JPG", "p17.JPG", "Pendent13.jpeg", "Pendent14.jpeg", "Pendent15.jpeg","Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG", "Pendent9.JPG", "Pendent10.JPG","Pendent12.JPG",
  "p11.JPG", "p12.jpg", "p13.JPG", "Pendent13.jpeg", "Pendent14.jpeg", "Pendent15.jpeg", "Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG","Pendants.jpg", "Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG", "Pendent9.JPG", "Pendent10.JPG","Pendent12.JPG",
  "p11.JPG", "p12.jpg", "p13.JPG", "p14.JPG", "p15.JPG", "p17.JPG", "Pendent3.JPG", "Pendent4.JPG","Pendants.jpg", "Pendent3.JPG", "Pendent4.JPG", "Pendent5.JPG", "Pendent9.JPG", "Pendent10.JPG","Pendent12.JPG",
  "Pendent13.jpeg", "Pendent14.jpeg", "Pendent15.jpeg", "p14.JPG", "p15.JPG", "p17.JPG"];

  images = fileNames.map(file => basePath + file);

} else if (path.includes("outdoorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/OutDoor_lamps/";
  // const fileNames = Array(27).fill("outdoorLamps.jpg");
  const fileNames = [
    "O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg",
    "O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", 
    "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", 
    "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", "O3.jpeg",
     "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg","O1.jpeg", "O2.jpeg", "O3.jpeg", "O4.jpeg", "O5.jpeg", "OutDoorLamps.jpg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("tabletopitem")) {
  basePath = "/Images/Product Images/HomeDecor/TableTopItems/";
  const fileNames = [
    "tabletop1.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg", "tabletop4.jpg", "tabletop3.jpg", "tabletop2.jpg", "tabletop7.jpg", "tabletop6.jpg",
     "tabletop7.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg","tabletop1.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg",
    "tabletop7.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg", "tabletop1.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg",
     "tabletop3.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg", "tabletop1.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg",
      "tabletop4.jpg", "tabletop2.jpg", "tabletop3.jpg", "tabletop4.jpg", "tabletop5.jpg",];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("flowervases")) {
  basePath = "/Images/Product Images/HomeDecor/FlowerVases/";
  const fileNames = [
    "flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg",
     "flower6.jpg", "flower7.jpg", "flower8.jpg", "flower9.jpg", "flower10.jpg","flower11.jpg", "flower12.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg","flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg",
     "flower6.jpg", "flower7.jpg", "flower8.jpg", "flower9.jpg", "flower10.jpg","flower11.jpg", "flower12.jpg","flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg",
     "flower6.jpg", "flower7.jpg", "flower8.jpg", "flower9.jpg", "flower10.jpg","flower11.jpg", "flower12.jpg","flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg",
     "flower6.jpg", "flower7.jpg", "flower8.jpg", "flower9.jpg", "flower10.jpg","flower11.jpg", "flower12.jpg", "flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg",
     "flower6.jpg", "flower7.jpg", "flower8.jpg", "flower9.jpg", "flower10.jpg","flower11.jpg", "flower12.jpg"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("walldecor")) {
  basePath = "/Images/Product Images/HomeDecor/WallDecor/";
  const fileNames = [
    "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor4.jpg", "walldecor5.jpeg",
     "walldecor6.jpg", "walldecor7.jpg", "walldecor8.jpeg", "walldecor9.jpeg", "walldecor10.jpeg",
     "walldecor11.jpeg", "walldecor12.jpeg", "walldecor13.jpeg", "walldecor14.jpeg","walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor4.jpg", "walldecor5.jpeg",
     "walldecor6.jpg", "walldecor7.jpg", "walldecor8.jpeg", "walldecor9.jpeg", "walldecor10.jpeg",
     "walldecor11.jpeg", "walldecor12.jpeg", "walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor4.jpg", "walldecor5.jpeg",
     "walldecor6.jpg", "walldecor7.jpg", "walldecor8.jpeg", "walldecor9.jpeg", "walldecor10.jpeg",
     "walldecor11.jpeg", "walldecor12.jpeg", "walldecor13.jpeg", "walldecor14.jpeg","walldecor1.jpg", "walldecor2.jpg", "walldecor3.jpg", "walldecor4.jpg", "walldecor5.jpeg",
     "walldecor6.jpg", "walldecor7.jpg", "walldecor8.jpeg", "walldecor9.jpeg", "walldecor10.jpeg",
     "walldecor11.jpeg", "walldecor12.jpeg"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("handpainteditems")) {
  basePath = "/Images/Product Images/HomeDecor/HandPaintedItems/";
  const fileNames = [
    "handpainted1.jpg", "handpainted3.jpeg", "handpainted4.jpeg", "handpainted5.jpeg",
     "handpainted6.jpeg", "handpainted7.jpeg", "handpainted8.jpeg", "handpainted9.jpeg", "handpainted10.jpeg",
     "handpainted11.jpeg",  "handpainted13.jpg", "handpainted14.jpeg", "handpainted15.jpeg",
     "handpainted16.jpeg", "handpainted17.jpeg", "handpainted18.jpeg", "handpainted19.jpeg", "handpainted20.jpeg",
    "handpainted1.jpg", "handpainted3.jpeg", "handpainted4.jpeg", "handpainted5.jpeg",
     "handpainted6.jpeg", "handpainted7.jpeg", "handpainted8.jpeg", "handpainted9.jpeg", "handpainted10.jpeg",
     "handpainted11.jpeg",  "handpainted13.jpg", "handpainted14.jpeg", "handpainted15.jpeg",
     "handpainted16.jpeg", "handpainted17.jpeg", "handpainted18.jpeg", "handpainted19.jpeg", "handpainted20.jpeg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("silverteacupset")) 
  {
  basePath = "/Images/Product Images/LuxuryKitchenWares/SilverTeaCupSet/";
  const fileNames = [
    "TeaCup1.png", "teacup2.png", "silverteacup1.jpeg", "silverteacup4.jpeg",
    "silverteacup5.jpeg", "silverteacup6.jpeg", "silverteacup7.jpeg", "silverteacup8.jpeg", "silverteacup9.jpeg",
    "silverteacup10.jpeg", "silverteacup11.jpeg", "silverteacup12.jpeg", "silverteacup13.jpeg", "silverteacup14.jpg",
    "silverteacup15.jpeg", "silverteacup16.jpeg", "silverteacup17.jpeg", "silverteacup18.jpeg","TeaCup1.png", "teacup2.png", "silverteacup1.jpeg", "silverteacup4.jpeg",
    "silverteacup5.jpeg", "silverteacup6.jpeg", "silverteacup7.jpeg", "silverteacup8.jpeg", "silverteacup9.jpeg",
    "silverteacup10.jpeg", "silverteacup11.jpeg", "silverteacup12.jpeg", "silverteacup13.jpeg", "silverteacup14.jpg",
    "silverteacup15.jpeg", "silverteacup16.jpeg", "silverteacup17.jpeg", "silverteacup18.jpeg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("etagere")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Etagere/";
  const fileNames = [
    "etagere1.png", "etagere2.png", "etagere3.jpeg", "etagere4.jpeg","etagere5.jpeg", "etagere6.jpeg", "etagere7.jpeg", "etagere8.jpeg", 
     "etagere9.jpeg", "etagere10.jpeg", "etagere11.jpeg", "etagere12.jpeg", "etagere13.jpeg", "etagere14.jpeg", "etagere7.jpeg",
      "etagere3.jpeg","etagere1.png", "etagere2.png", "etagere3.jpeg", "etagere4.jpeg","etagere5.jpeg", "etagere6.jpeg", "etagere7.jpeg", "etagere8.jpeg", 
     "etagere9.jpeg", "etagere10.jpeg", "etagere11.jpeg", "etagere12.jpeg", "etagere13.jpeg", "etagere14.jpeg","etagere1.png", "etagere2.png", "etagere3.jpeg", "etagere4.jpeg","etagere5.jpeg", "etagere6.jpeg", "etagere7.jpeg", "etagere8.jpeg", 
     "etagere9.jpeg", "etagere10.jpeg", "etagere11.jpeg", "etagere12.jpeg", "etagere13.jpeg", "etagere14.jpeg","etagere1.png", "etagere2.png", "etagere3.jpeg", "etagere4.jpeg","etagere5.jpeg", "etagere6.jpeg", "etagere7.jpeg", "etagere8.jpeg", 
     "etagere9.jpeg", "etagere10.jpeg", "etagere11.jpeg", "etagere12.jpeg", "etagere13.jpeg", "etagere14.jpeg","etagere1.png", "etagere2.png", "etagere3.jpeg", "etagere4.jpeg","etagere5.jpeg", "etagere6.jpeg", "etagere7.jpeg", "etagere8.jpeg", 
     "etagere9.jpeg", "etagere10.jpeg", "etagere11.jpeg", "etagere12.jpeg", "etagere13.jpeg", "etagere14.jpeg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("trays")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Trays/";
  const fileNames = [
    "trays1.png",  "trays3.jpeg", "trays4.jpeg","trays5.jpeg", "trays6.jpeg", "trays7.jpeg", "trays8.jpeg", 
     "trays9.jpeg", "trays10.jpeg", "trays11.jpeg", "trays12.jpeg", "trays7.jpeg", "trays2.png","trays3.jpeg","trays1.png",  "trays3.jpeg", "trays4.jpeg","trays5.jpeg", "trays6.jpeg", "trays7.jpeg", "trays8.jpeg", 
     "trays9.jpeg", "trays10.jpeg", "trays11.jpeg", "trays12.jpeg","trays1.png",  "trays3.jpeg", "trays4.jpeg","trays5.jpeg", "trays6.jpeg", "trays7.jpeg", "trays8.jpeg", 
     "trays9.jpeg", "trays10.jpeg", "trays11.jpeg", "trays12.jpeg","trays1.png",  "trays3.jpeg", "trays4.jpeg","trays5.jpeg", "trays6.jpeg", "trays7.jpeg", "trays8.jpeg", 
     "trays9.jpeg", "trays10.jpeg", "trays11.jpeg", "trays12.jpeg","trays1.png",  "trays3.jpeg", "trays4.jpeg","trays5.jpeg", "trays6.jpeg", "trays7.jpeg", "trays8.jpeg", 
     "trays9.jpeg", "trays10.jpeg", "trays11.jpeg", "trays12.jpeg","trays1.png",  "trays3.jpeg", "trays4.jpeg","trays5.jpeg", "trays6.jpeg", "trays7.jpeg", "trays8.jpeg", 
     "trays9.jpeg", "trays10.jpeg", "trays11.jpeg", "trays12.jpeg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("rural_handicrafts")) {
  basePath = "/Images/Product Images/RuralHandiCrafts/";
  const fileNames = [
    "handicraftwaving1.png",  "handweavingitems1.jpg", "handweavingitems2.jpg","handweavingitems3.jpeg","handicraftwooden5.png","handicraftwooden6.jpeg", 
    "handicraftwooden7.jpeg", "handweavingitems4.jpg", "handweavingitems5.jpg", "handweavingitems6.jpg", "handweavingitems7.jpg", "handweavingitems9.jpeg", "handweavingitems10.jpg",
     "handweavingitems11.jpeg",  "handicraftwooden1.png", "handicraftwooden2.jpeg", "handicraftwooden2.png","handicraftwooden3.png",
     "handicraftwooden4.png", "handicraftwooden5.png","handicraftwooden6.jpeg", "handicraftwooden7.jpeg", "handicraftwooden9.jpg","handicraftwooden10.jpg",
    "handicraftwaving1.png",  "handweavingitems1.jpg", "handweavingitems2.jpg","handweavingitems3.jpeg", "handweavingitems4.jpg", "handweavingitems5.jpg", 
    "handweavingitems6.jpg", "handweavingitems7.jpg", "handicraftwooden5.png","handicraftwooden6.jpeg", "handicraftwooden7.jpeg","handweavingitems9.jpeg", "handweavingitems10.jpg",
     "handweavingitems11.jpeg",  "handicraftwooden1.png", "handicraftwooden2.jpeg", "handicraftwooden2.png","handicraftwooden3.png","handicraftwooden4.png",
      "handicraftwooden5.png","handicraftwooden6.jpeg", "handicraftwooden7.jpeg", "handicraftwooden9.jpg","handicraftwooden10.jpg","handicraftwaving1.png",  
      "handweavingitems1.jpg", "handweavingitems2.jpg","handweavingitems3.jpeg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("metalliccolorswatches")) {
  basePath = "/Images/Product Images/MetallicColorSwatches/";
  const fileNames = [
    "metalliccolorswatches6.png",  "metalliccolorswatches1.jpeg", "metalliccolorswatches3.jpeg","metalliccolorswatches4.png",
    "metalliccolorswatches5.png","metalliccolorswatches7.png","metalliccolorswatches8.png","metalliccolorswatches9.png","metalliccolorswatches10.png",
    "metalliccolorswatches11.png",  "metalliccolorswatches6.png",  "metalliccolorswatches1.jpeg", "metalliccolorswatches3.jpeg","metalliccolorswatches4.png",
    "metalliccolorswatches5.png","metalliccolorswatches7.png","metalliccolorswatches8.png","metalliccolorswatches9.png","metalliccolorswatches10.png",
    "metalliccolorswatches11.png",  "metalliccolorswatches6.png",  "metalliccolorswatches1.jpeg", "metalliccolorswatches3.jpeg","metalliccolorswatches4.png",
    "metalliccolorswatches5.png","metalliccolorswatches7.png","metalliccolorswatches8.png","metalliccolorswatches9.png","metalliccolorswatches10.png",
    "metalliccolorswatches11.png",  "metalliccolorswatches6.png",  "metalliccolorswatches1.jpeg", "metalliccolorswatches3.jpeg","metalliccolorswatches4.png",
    "metalliccolorswatches5.png","metalliccolorswatches7.png","metalliccolorswatches8.png","metalliccolorswatches9.png","metalliccolorswatches10.png",
    "metalliccolorswatches11.png",  "metalliccolorswatches6.png",  "metalliccolorswatches1.jpeg", "metalliccolorswatches3.jpeg","metalliccolorswatches4.png",
    "metalliccolorswatches5.png","metalliccolorswatches7.png","metalliccolorswatches8.png","metalliccolorswatches9.png","metalliccolorswatches10.png",
    "metalliccolorswatches11.png",  "metalliccolorswatches6.png",  "metalliccolorswatches1.jpeg", "metalliccolorswatches3.jpeg","metalliccolorswatches4.png",
    "metalliccolorswatches5.png","metalliccolorswatches7.png","metalliccolorswatches8.png","metalliccolorswatches9.png","metalliccolorswatches10.png",
    "metalliccolorswatches11.png"];
  images = fileNames.map(file => basePath + file);
}
// Pagination setup
let currentPage = 0;
const pageSize = 25;

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

  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';
  const totalPages = Math.ceil(images.length / pageSize);
  if (totalPages <= 1) {
    return;
  }

  if (currentPage > 0) {
    const prevItem = document.createElement('li');
    prevItem.className = 'page-item';
    const prevLink = document.createElement('a');
    prevLink.className = 'page-link nav-button shadow-sm';
    prevLink.innerHTML = '<i class="bi bi-chevron-left"></i>';
    prevLink.onclick = () => {
      changePage(-1);
      return false;
    };
    prevItem.appendChild(prevLink);
    pagination.appendChild(prevItem);
  }

  for (let p = 0; p < totalPages; p++) {
    const pageItem = document.createElement('li');
    pageItem.className = 'page-item';
    if (p === currentPage) {
      pageItem.classList.add('active');
    }
    const pageLink = document.createElement('a');
    pageLink.className = 'page-link';
    pageLink.textContent = (p + 1).toString();
    pageLink.onclick = () => {
      currentPage = p;
      renderGallery();
      return false;
    };
    pageItem.appendChild(pageLink);
    pagination.appendChild(pageItem);
  }

  if (currentPage < totalPages - 1) {
    const nextItem = document.createElement('li');
    nextItem.className = 'page-item';
    const nextLink = document.createElement('a');
    nextLink.className = 'page-link nav-button shadow-sm';
    nextLink.innerHTML = '<i class="bi bi-chevron-right"></i>';
    nextLink.onclick = () => {
      changePage(1);
      return false;
    };
    nextItem.appendChild(nextLink);
    pagination.appendChild(nextItem);
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
