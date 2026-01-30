let basePath = "";
let images = [];
const path = window.location.pathname.toLowerCase();

if (path.includes("tablelamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Table_lamps/";
  const fileNames = [
    "tl1.png", "tl2.png", "tl3.png", "tl4.png", "tl5.png", "tl6.jpg","tl7.png", "tl8.png", "tl9.png", "tl10.png","tl11.JPG", "tl12.png", "tl13.jpg", "tl15.png", "tl16.png", "tl17.png", "tl18.jpg", "tl19.png", "tl20.JPG",  
    "tl21.JPG", "tl22.png", "tl23.png", "tl24.JPG", "tl25.png", "tl26.JPG", "tl27.JPG", "tl28.JPG", "tl29.JPG", "tl30.JPG","tl31.png", "tl32.JPG", "tl34.png", "tl35.JPG", "tl36.JPG", "tl37.png", "tl38.JPG", "tl39.JPG", "tl40.JPG",  
  "tl41.jpg", "tl42.JPG", "tl43.jpg", "tl44.jpg", "tl45.JPG",

"tl1.png", "tl2.png", "tl3.png", "tl4.png", "tl5.png", "tl6.jpg","tl7.png", "tl8.png", "tl9.png", "tl10.png","tl11.JPG", "tl12.png", "tl13.jpg", "tl15.png", "tl16.png", "tl17.png", "tl18.jpg", "tl19.png", "tl20.JPG",  
    "tl21.JPG", "tl22.png", "tl23.png", "tl24.JPG", "tl25.png", "tl26.JPG", "tl27.JPG", "tl28.JPG", "tl29.JPG", "tl30.JPG","tl31.png", "tl32.JPG","tl34.png"];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("walllamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Wall_Lamps/";

  // const fileNames = Array(23).fill("WallLamps.jpg");
  const fileNames = ["wl1.png", "wl2.png", "wl3.png", "wl4.png", "wl5.png", "wl6.png", "wl7.png", "wl8.png", "wl9.png", "wl10.png", "wl11.png",
    "wl12.png", "wl13.png", "wl14.png", "wl15.png", "wl16.png", "wl17.png", "wl18.png", "wl19.png", "wl20.png", "wl21.png", "wl22.png", "wl23.png",
    "wl24.png","wl25.png","wl26.png", "wl27.png", "wl28.JPG", "wl29.jpg", "wl30.jpg", "wl31.jpeg", "wl32.jpg", "wl33.jpeg", "wl34.jpg",

    "wl1.png", "wl2.png", "wl3.png", "wl4.png", "wl5.png", "wl6.png", "wl7.png", "wl8.png", "wl9.png", "wl10.png", "wl11.png",
    "wl12.png", "wl13.png", "wl14.png", "wl15.png", "wl16.png", "wl17.png", "wl18.png", "wl19.png", "wl20.png", "wl21.png", "wl22.png", "wl23.png",
    "wl24.png","wl25.png","wl26.png", "wl27.png", "wl28.JPG", "wl29.jpg", "wl30.jpg", "wl31.jpeg", "wl32.jpg", "wl33.jpeg", "wl34.jpg","wl8.png", "wl9.png"];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("floorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Floor_lamps/";
  // const fileNames = Array(20).fill("floorLamps.jpg");
  const fileNames = ["fl1.png", "fl2.png", "fl3.png", "fl4.png", "fl5.png", "fl6.png", "fl7.png", "fl8.png", "fl9.png", "fl10.png",
    "fl11.png", "fl12.png", "fl13.png", "fl14.png", "fl15.png", "fl16.png", "fl17.png", "fl18.png", "fl19.JPG", "fl20.JPG","fl21.png", "fl22.JPG", "fl23.JPG", "fl24.JPG", "fl25.PNG",
    "fl26.PNG", "fl27.jpg", "fl28.PNG", "fl29.PNG", "fl30.PNG","fl31.png", "fl32.png", "fl33.png", "fl34.png", "fl35.png","fl36.png", "fl37.png", "fl38.jpg", "fl39.png", "fl40.png",
    "fl41.png", "fl42.png", "fl43.png", "fl44.jpg", "fl45.png","fl45.JPG","fl46.png", "fl47.jpg", "fl48.JPG", "fl49.jpg", "fl50.JPG","fl51.png", "fl52.png", "fl53.png", "fl54.png", "fl55.png","fl56.png",
    
    "fl1.png", "fl2.png", "fl3.png", "fl4.png", "fl5.png", "fl6.png", "fl7.png", "fl8.png", "fl9.png", "fl10.png","fl11.png", "fl12.png", "fl13.png", "fl14.png", "fl15.png", 
    "fl16.png", "fl17.png","fl18.png"
  ];
  images = fileNames.map(file => basePath + file);

} 
else if (path.includes("chandeliers")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Chandeliers/";
  const fileNames = ["ch1.png", "ch2.png", "ch3.png", "ch4.png", "ch5.png", "ch6.png", "ch7.png", "ch8.png", "ch9.png", "ch10.png",
    "ch11.png", "ch12.png", "ch13.png", "ch14.png", "ch15.png", "ch16.png", "ch17.png", "ch18.png", "ch21.png", 
    "ch22.png", "ch23.JPG", "ch24.PNG", "ch25.JPG", "ch26.JPG", "ch27.jpeg", "ch28.jpeg", "ch29.JPG", "ch30.JPG",
    "ch31.PNG", "ch32.png", "ch33.png", "ch34.PNG", "ch35.JPG", "ch36.JPG", "ch37.JPG", "ch38.JPG", "ch39.jpeg", "ch40.JPG",
    "ch41.JPG", "ch42.jpg", "ch43.JPG", "ch44.jpeg", "ch45.jpeg", "ch46.jpeg", 

    "ch1.png", "ch2.png", "ch3.png", "ch4.png", "ch5.png", "ch6.png", "ch7.png", "ch8.png", "ch9.png", "ch10.png",
    "ch11.png", "ch12.png", "ch13.png", "ch14.png", "ch15.png", "ch16.png", "ch17.png", "ch18.png", "ch21.png","ch25.JPG", "ch26.JPG"
  ];
   images = fileNames.map(file => basePath + file);
} else if (path.includes("pendants")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Pendants/";
  // const fileNames = Array(15).fill("Pendants.jpg");
  const fileNames = ["pen1.png", "pen2.png", "pen3.png", "pen4.png", "pen5.png", "pen6.png", "pen7.png", "pen8.png", "pen9.png", "pen10.png",
    "pen11.png", "pen12.png", "pen13.png", "pen14.png", "pen15.png","pen16.JPG", "pen17.JPG","pen18.png", "pen19.JPG", "pen20.JPG",
    "pen21.png", "pen22.JPG", "pen23.png", "pen24.JPG", "pen25.png", "pen26.JPG", "pen27.png", "pen28.png", "pen29.jpg", "pen30.png",
  ];

  images = fileNames.map(file => basePath + file);

} else if (path.includes("outdoorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/OutDoor_lamps/";
  // const fileNames = Array(27).fill("outdoorLamps.jpg");
  const fileNames = ["odl1.jpeg", "odl2.jpg", "odl3.png", "odl4.png", "odl5.jpg", "odl6.png", "odl7.jpg", "odl8.png", "odl9.png", "odl10.jpg",
    "odl11.jpg", "odl12.png", "odl13.png", "odl14.png", "odl15.jpg", "odl16.png", "odl17.png", "odl18.png", "odl19.png", "odl20.png",
    "odl21.png", "odl22.png", "odl23.png", "odl24.png", "odl25.png", "odl26.png", "odl27.png","odl28.jpeg", "odl29.jpeg","odl30.jpg",
    "odl31.png", "odl32.jpg",

    "odl1.jpeg", "odl2.jpg", "odl3.png", "odl4.png", "odl5.jpg", "odl6.png", "odl7.jpg", "odl8.png", "odl9.png", "odl10.jpg",
    "odl11.jpg", "odl12.png", "odl13.png", "odl14.png", "odl15.jpg", "odl16.png", "odl17.png", "odl18.png", "odl19.png", "odl20.png",
    "odl21.png", "odl22.png", "odl23.png", "odl24.png", "odl25.png", "odl26.png", "odl27.png","odl28.jpeg", "odl29.jpeg","odl30.jpg",
    "odl31.png", "odl32.jpg", "odl1.jpeg", "odl2.jpg", "odl3.png", "odl4.png", "odl5.jpg", "odl6.png", "odl7.jpg", "odl8.png", "odl9.png", "odl10.jpg",
    "odl11.jpg"];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("tabletopitem")) {
  basePath = "/Images/Product Images/HomeDecor/TableTopItems/";
  const fileNames = [
    "tti10.png","tti11.png","tti12.png","tti13.png","tti14.png","tti15.png", "tti16.png","tti17.png","tti18.png","tti20.png","tti21.png",
    "tti22.png","tti23.png","tti24.png","tti25.png","tti26.png","tti27.png","tti28.png","tti29.png","tti30.png","tti31.png","tti32.jpg",
   "tti33.png","tti34.jpg","tti35.png","tti36.png",

    "tti10.png","tti11.png","tti12.png","tti13.png","tti14.png","tti15.png", "tti16.png","tti17.png","tti18.png","tti20.png","tti21.png",
    "tti22.png","tti23.png","tti24.png","tti25.png","tti26.png","tti27.png","tti28.png","tti29.png","tti30.png","tti31.png","tti32.jpg",
   "tti33.png","tti34.jpg","tti35.png","tti36.png","tti10.png","tti11.png","tti12.png","tti13.png","tti14.png","tti15.png", "tti16.png","tti17.png","tti18.png","tti20.png","tti21.png",
    "tti22.png","tti23.png","tti24.png","tti25.png","tti26.png","tti27.png","tti28.png","tti29.png","tti30.png", "tti10.png","tti11.png","tti12.png"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("flowervases")) {
  basePath = "/Images/Product Images/HomeDecor/FlowerVases/";
  const fileNames = ["fv1.png", "fv2.png", "fv3.png", "fv4.png", "fv5.png", "fv6.png", "fv7.png", "fv8.png", "fv9.png", "fv10.png",
    "fv11.png", "fv12.png", "fv13.png", "fv14.png", "fv15.png", "fv16.png", "fv17.jpg", "fv18.jpg", "fv19.jpg", "fv20.png",
    "fv21.png", "fv22.png", "fv23.png", "fv24.png", "fv25.png", "fv26.png", "fv27.png", "fv28.png", "fv29.png", "fv30.png",
    "fv31.png", "fv32.png", "fv33.png", "fv34.png", "fv35.png", "fv36.png", "fv37.png", "fv38.png", "fv39.png", "fv40.png",

    "fv1.png", "fv2.png", "fv3.png", "fv4.png", "fv5.png", "fv6.png", "fv7.png", "fv8.png", "fv9.png", "fv10.png",
    "fv11.png", "fv12.png", "fv13.png", "fv14.png", "fv15.png", "fv16.png", "fv17.jpg", "fv18.jpg", "fv19.jpg", "fv20.png",
    "fv21.png", "fv22.png", "fv23.png", "fv24.png", "fv25.png", "fv26.png", "fv27.png", "fv28.png", "fv29.png", "fv30.png","fv31.png", "fv32.png",
    "fv33.png", "fv41.png", "fv42.png"
  ];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("walldecor")) {
  basePath = "/Images/Product Images/HomeDecor/WallDecor/";
  const fileNames = ["wd1.jpg", "wd2.jpg", "wd3.jpg", "wd4.jpg", "wd5.jpg","wd6.jpg", "wd7.jpg", "wd8.jpg", "wd9.jpg", "wd10.jpg",
    "wd11.jpg", "wd12.jpg", "wd13.jpg", "wd14.jpg", "wd15.jpg", "wd16.jpg", "wd17.jpg", "wd18.jpeg", "wd19.jpg", "wd20.jpg",
    "wd21.JPG", "wd22.jpg", "wd23.png", "wd24.png", "wd25.png", "wd26.png", "wd27.JPG", "wd28.JPG", "wd29.JPG", "wd30.jpg","wd31.jpg",
     "wd32.jpg", "wd33.jpg", "wd34.jpg", "wd35.JPG", "wd36.JPG", "wd37.jpg", "wd38.jpg", "wd39.jpg", "wd40.jpg","wd41.jpg", "wd42.jpg", "wd43.jpg", 
     "wd44.jpg", "wd45.jpg", "wd46.jpg", "wd47.jpg", "wd48.jpg", "wd49.jpg", "wd50.jpg","wd51.jpg", "wd52.jpg", "wd53.jpg", "wd54.jpg", "wd55.jpg", "wd56.jpg",
     "wd57.jpg", "wd58.jpg", "wd59.jpg", "wd60.jpg","wd61.jpg", "wd62.jpg", "wd63.jpg", "wd64.jpg", "wd65.jpg", "wd66.jpg", "wd67.jpg", "wd68.jpg", "wd69.jpg",
      "wd70.jpg","wd71.jpg", "wd72.jpg", "wd73.jpg", "wd74.JPG", "wd75.JPG"];
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
  const fileNames = ["ms1.png", "ms2.png", "ms3.png", "ms4.png", "ms5.png", "ms6.png", "ms7.png", "ms8.png", "ms9.png", "ms10.png",
    "ms11.png", "ms12.png", "ms13.png", "ms14.png", "ms16.png", "ms17.png", "ms18.png", "ms19.png", "ms20.png",
    "ms21.png", "ms22.png", "ms23.png", "ms24.png", "ms25.png", "ms26.png", "ms27.png", "ms28.png", "ms29.png", "ms30.png",
    "ms31.png", "ms32.png", "ms33.png", "ms34.png", "ms35.png", "ms36.png", "ms37.png", "ms38.png", "ms39.png", "ms40.png",

    "ms1.png", "ms2.png", "ms3.png", "ms4.png", "ms5.png", "ms6.png", "ms7.png", "ms8.png", "ms9.png", "ms10.png",
    "ms11.png", "ms12.png", "ms13.png", "ms14.png", "ms16.png", "ms17.png", "ms18.png", "ms19.png", "ms20.png",
    "ms21.png", "ms22.png", "ms23.png", "ms24.png", "ms25.png", "ms26.png", "ms27.png", "ms28.png", "ms29.png", "ms30.png","ms31.png", "ms32.png",
   ];
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
