let basePath = "";
let images = [];
const path = window.location.pathname.toLowerCase();

if (path.includes("tablelamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Table_lamps/";
  const fileNames = ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png", "a8.png", "a9.png", "a10.png","a11.png", "a12.png", "a13.png", "a14.png", "a15.png",
    "a16.png", "a17.png", "a18.png", "a19.png", "a20.png","a21.png", "a22.png", "a23.png", "a24.png", "a25.png",    
    "tbl1.png", "tbl2.png", "tbl3.png", "tbl4.png", "tbl5.png", "tbl6.png", "tbl7.png", "tbl8.png", "tbl9.png", "tbl10.png","tbl11.png", "tbl12.png", "tbl13.png", "tbl14.png", "tbl15.png",
    "tbl16.png", "tbl17.png", "tbl18.png", "tbl19.png", "tbl20.png","tbl21.png", "tbl22.png", "tbl23.png", "tbl24.png", "tbl25.png","tbl26.png", "tbl27.png", "tbl28.png", "tbl29.png", "tbl30.png",
    "tbl31.png", "tbl32.png", "tbl33.png", "tbl34.png", "tbl35.png","tbl36.png", "tbl37.png", "tbl38.png", "tbl39.png", "tbl40.png","tbl41.png", "tbl42.png", "tbl43.png", "tbl44.png", "tbl45.png","tbl46.png", "tbl47.png", "tbl48.png", "tbl49.png", "tbl50.png",
  "tbl51.png", "tbl52.png", "tbl53.png", "tbl54.png", "tbl55.png","tbl56.png", "tbl57.png", "tbl58.png", "tbl59.png", "tbl60.png","tbl61.png", "tbl62.png", "tbl63.png", "tbl64.png", "tbl65.png", "tbl66.png", "tbl67.png", "tbl68.png", "tbl69.png", "tbl70.png","tbl71.png", "tbl72.png", "tbl73.png", "tbl74.png", "tbl75.png",
"tbl76.png", "tbl77.png", "tbl78.png", "tbl79.png", "tbl80.png","tbl81.png", "tbl82.png", "tbl83.png", "tbl84.png", "tbl85.png", "tbl86.png","tbl87.png", "tbl88.png", "tbl89.png", "tbl90.png", "tbl91.png", "tbl92.png", "tbl93.png", "tbl43.png", "tbl44.png", "tbl45.png","tbl46.png", "tbl47.png", "tbl48.png", "tbl49.png"];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("walllamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Wall_Lamps/";

  // const fileNames = Array(23).fill("WallLamps.jpg");
  const fileNames = ["a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png", "i.png", "j.png","k.png", "l.png", "m.png", "n.png", "o.png",
    "p.png", "q.png", "r.png", "s.png", "t.png","u.png", "v.png", "w.png","x.png", "y.png",
    "wl1.png", "wl2.png", "wl3.png", "wl4.png", "wl5.png", "wl6.png", "wl7.png", "wl8.png", "wl9.png", "wl10.png", "wl11.png",
    "wl12.png", "wl13.png", "wl14.png", "wl15.png", "wl16.png", "wl17.png", "wl18.png", "wl19.png", "wl20.png", "wl21.png", "wl22.png", "wl23.png",
    "wl24.png","wl25.png","wl26.png", "wl27.png", "wl28.JPG", "wl29.jpg", "wl30.jpg", "wl31.jpeg", "wl32.jpg", "wl33.jpeg", "wl34.jpg",
    "wl1.png", "wl2.png", "wl3.png", "wl4.png", "wl5.png", "wl6.png", "wl7.png", "wl8.png", "wl9.png", "wl10.png", "wl11.png",
    "wl12.png", "wl13.png", "wl14.png", "wl15.png", "wl16.png"];
  images = fileNames.map(file => basePath + file);
} 
else if (path.includes("floorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Floor_lamps/";
  // const fileNames = Array(20).fill("floorLamps.jpg");
  const fileNames = ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png", "a8.png", "a9.png", "a10.png","a11.png", "a12.png", "a13.png", "a14.png", "a15.png",
    "a16.png", "a17.png", "a18.png", "a19.png", "a20.png","a21.png", "a22.png", "a23.png", "a24.png", "a25.png",
    "flr1.png", "flr2.png", "flr3.png", "flr4.png", "flr5.png", "flr6.png", "flr7.png", "flr8.png", "flr9.png", "flr10.png","flr11.png","flr12.png",
    "flr13.png", "flr14.png", "flr15.png", "flr16.png", "flr17.png", "flr18.png", "flr19.png", "flr20.png","flr21.png", "flr22.png", "flr23.png", "flr24.png", "flr25.png",
    "flr26.png", "flr27.png", "flr28.png", "flr29.png", "flr30.png","flr31.png", "flr32.png", "flr33.png", "flr34.png", "flr35.png","flr36.png", "flr37.png", "flr38.png", "flr39.png", "flr40.png",
    "flr41.png", "flr42.png", "flr43.png", "flr44.png", "flr45.png","flr46.png", "flr47.png", "flr48.png", "flr49.png", "flr50.png","flr51.png", "flr52.png", "flr53.png", "flr54.png", "flr55.png",
    "flr56.png", "flr57.png", "flr58.png", "flr59.png", "flr60.png","flr61.png", "flr62.png", "flr63.png", "flr64.png", "flr65.png","flr66.png", "flr67.png", "flr68.png", "flr69.png", "flr70.png","flr71.png", "flr72.png", "flr73.png", "flr74.png", "flr75.png"
  ];
  images = fileNames.map(file => basePath + file);
} 
else if (path.includes("chandeliers")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Chandeliers/";
  const fileNames = ["a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.PNG", "h.png", "i.png", "j.png","k.png", "l.png",
     "chn13.png", "chn14.png", "chn15.png","chn16.png", "chn17.png","chn18.png", "chn19.png","chn20.png", "chn21.png", "chn22.png", "chn23.png", "chn24.png", "chn25.png", "chn27.png"
  , "chn29.png", "chn30.png","chn31.png", "chn32.png", "chn33.png", "chn34.png","chn36.png", "chn37.png", "chn39.png", "chn40.png",
"chn41.png", "chn42.png", "chn43.png", "chn44.png", "chn45.png","chn46.png","chn47.png", "chn48.png", "chn49.png", "chn50.png","chn51.png", "chn52.png", "chn53.png", "chn54.png", "chn55.png","chn56.png",
"chn57.png", "chn58.png", "chn59.png", "chn60.png","chn61.png", "chn62.png", "chn63.png", "chn64.png", "chn65.png","chn66.png", "chn1.png", "chn2.png", "chn4.png", "chn5.png", "chn6.png", "chn7.png", "chn8.png", 
"chn9.png", "chn10.png","chn11.png","chn12.png","chn35.png","chn38.png"
];
   images = fileNames.map(file => basePath + file);
} 
else if (path.includes("pendants")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Pendants/";
  // const fileNames = Array(15).fill("Pendants.jpg");
  const fileNames = ["a.png", "b.png", "c.png", "d.jpg", "e.jpg", "f.jpg", "g.jpeg", "h.jpg", "i.jpg", "j.png","k.png", "l.jpg", "m.jpg", "n.jpg", "o.jpg",
    "p.JPG", "q.jpg", "r.jpg", "s.JPG", "t.png","u.png", "v.png", "w.png","x.png", "y.jpg","z.jpg","pn1.png", "pn2.png", "pn3.png", "pn4.png", "pn5.png", "pn6.png", "pn7.png", "pn8.png", "pn9.png", "pn10.png","pn11.png", "pn12.png", "pn13.png", "pn14.png", "pn15.png",
    "pn16.png", "pn17.png", "pn18.png", "pn19.png", "pn20.png","pn21.png", "pn22.png", "pn23.png", "pn24.png", "pn25.png","pn26.png", "pn27.png", "pn28.png", "pn29.png", "pn30.png",
    "pn31.png", "pn32.png", "pn33.png", "pn34.png", "pn35.png","pn36.png", "pn37.png", "pn38.png", "pn39.png", "pn40.png","pn41.png", "pn42.png", "pn43.png", "pn44.png", "pn45.png","pn46.png", "pn47.png", "pn48.png", "pn49.jpg", "pn50.png",
  "pn51.png", "pn52.png", "pn53.png", "pn54.png", "pn55.png","pn56.png", "pn57.png", "pn59.png", "pn60.png","pn61.png", "pn62.png", "pn63.png", "pn64.png", "pn65.png",
  "pn66.png", "pn67.png", "pn68.png", "pn69.png", "pn70.png","pn71.png", "pn72.png", "pn73.png", "pn74.png", "pn75.png",
  ];
  images = fileNames.map(file => basePath + file);
}
 else if (path.includes("outdoorlamps")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/OutDoor_lamps/";
  // const fileNames = Array(27).fill("outdoorLamps.jpg");
  const fileNames = ["a.png", "b.png", "c.png", "d.png", "e.png", "f.png", "g.png", "h.png", "i.png", "j.png","k.png", "l.png", "m.png", "n.png", "o.png",
    "p.png", "q.png", "r.png", "s.png", "t.png","u.png", "v.png", "w.png","x.png", "y.png",
    "od1.png", "od2.png", "od3.png", "od4.png", "od5.png", "od6.png", "od7.png", "od8.png", "od9.png", "od10.png", "od12.png", "od14.png", "od15.png",
    "od16.png", "od18.png", "od19.png","od21.png", "od22.png", "od23.png", "od24.png", "od25.png","od26.png", "od27.png", "od28.png", "od29.png", "od30.png",
    "od31.png", "od32.png", "od33.png", "od34.png", "od35.png","od36.png", "od37.png", "od38.png", "od39.png", "od40.png","od41.png", "od42.png", "od43.png",
     "od44.png", "od45.png","od46.png", "od47.png", "od48.png", "od49.png", "od50.png","a.png", "b.png", "c.png", "d.png",
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("tabletopitem"))
   {
  basePath = "/Images/Product Images/HomeDecor/TableTopItems/";
  const fileNames = [
    "tti10.png","tti11.png","tti12.png","tti13.png","tti14.png","tti15.png", "tti16.png","tti17.png","tti18.png","tti20.png","tti21.png","tti22.png","tti23.png","tti24.png","tti25.png","tti26.png","tti27.png","tti28.png","tti29.png","tti30.png","tti31.png","tti32.jpg",
   "tti33.png","tti34.jpg","tti35.png","tti36.png","tti10.png","tti11.png","tti12.png","tti13.png","tti14.png","tti15.png", "tti16.png","tti17.png","tti18.png","tti20.png","tti21.png",
    "tti22.png","tti23.png","tti24.png","tti25.png","tti26.png","tti27.png","tti28.png","tti29.png","tti30.png","tti31.png","tti32.jpg",
   "tti33.png","tti34.jpg","tti35.png","tti36.png","tti10.png","tti11.png","tti12.png","tti13.png","tti14.png","tti15.png", "tti16.png","tti17.png","tti18.png","tti20.png","tti21.png",
    "tti22.png","tti23.png","tti24.png","tti25.png","tti26.png","tti27.png","tti28.png","tti29.png","tti30.png", "tti10.png","tti11.png","tti12.png"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("flowervases"))
   {
  basePath = "/Images/Product Images/HomeDecor/FlowerVases/";
  const fileNames = ["fv1.png", "fv2.png", "fv3.png", "fv4.png", "fv5.png", "fv6.png", "fv7.png", "fv8.png", "fv9.png", "fv10.png", "fv11.png", "fv12.png", "fv13.png", "fv14.png", "fv15.png", "fv16.png", "fv17.jpg", "fv18.jpg", "fv19.jpg", "fv20.png",
    "fv21.png", "fv22.png", "fv23.png", "fv24.png", "fv25.png", "fv26.png", "fv27.png", "fv28.png", "fv29.png", "fv30.png","fv31.png", "fv32.png", "fv33.png", "fv34.png", "fv35.png", "fv36.png", "fv37.png", "fv38.png", "fv39.png", "fv40.png",
    "fv1.png", "fv2.png", "fv3.png", "fv4.png", "fv5.png", "fv6.png", "fv7.png", "fv8.png", "fv9.png", "fv10.png","fv11.png", "fv12.png", "fv13.png", "fv14.png", "fv15.png", "fv16.png", "fv17.jpg", "fv18.jpg", "fv19.jpg", "fv20.png",
    "fv21.png", "fv22.png", "fv23.png", "fv24.png", "fv25.png", "fv26.png", "fv27.png", "fv28.png", "fv29.png", "fv30.png","fv31.png", "fv32.png",
    "fv33.png", "fv41.png", "fv42.png"
  ];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("walldecor")) {
  basePath = "/Images/Product Images/HomeDecor/WallDecor/";
  const fileNames = ["wd1.jpg", "wd2.jpg", "wd3.jpg", "wd4.jpg", "wd5.jpg","wd6.jpg", "wd7.jpg", "wd8.jpg", "wd9.jpg", "wd10.jpg","wd11.jpg", "wd12.jpg", "wd13.jpg", "wd14.jpg", "wd15.jpg", "wd16.jpg", "wd17.jpg", "wd18.jpeg", "wd19.jpg", "wd20.jpg",
    "wd21.JPG", "wd22.jpg", "wd23.png", "wd24.png", "wd25.png", "wd26.png", "wd27.JPG", "wd28.JPG", "wd29.JPG", "wd30.jpg","wd31.jpg","wd32.jpg", "wd33.jpg", "wd34.jpg", "wd35.JPG", "wd36.jpg", "wd37.jpg", "wd38.jpg", "wd39.jpg", "wd40.jpg","wd41.jpg", "wd42.jpg", "wd43.jpg", 
     "wd44.jpg", "wd45.jpg", "wd46.jpg", "wd47.jpg", "wd48.jpg", "wd49.jpg", "wd50.jpg","wd51.jpg", "wd52.jpg", "wd53.jpg", "wd54.jpg", "wd55.jpg", "wd56.jpg","wd57.jpg", "wd58.jpg", "wd59.jpg", "wd60.jpg","wd61.jpg", "wd62.jpg", "wd63.jpg", "wd64.jpg", "wd65.jpg", "wd66.jpg", "wd67.jpg", "wd68.jpg", "wd69.jpg",
      "wd70.jpg","wd71.jpg", "wd72.jpg", "wd73.jpg", "wd74.JPG", "wd75.JPG"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("handpainteditems")) {
  basePath = "/Images/Product Images/HomeDecor/HandPaintedItems/";
  const fileNames = ["hpi1.png", "hpi2.png", "hpi3.png", "hpi4.png", "hpi5.png", "hpi6.png", "hpi7.png", "hpi8.png", "hpi9.png", "hpi10.png","hpi11.png", "hpi12.png", "hpi13.png", "hpi14.png", "hpi15.png", "hpi16.png", "hpi17.png", "hpi18.png", "hpi19.png", "hpi20.png", 
    "hpi21.png", "hpi22.png", "hpi23.png", "hpi24.png", "hpi25.png", "hpi26.png", "hpi27.png", "hpi28.png", "hpi29.png", "hpi30.png","hpi31.png", "hpi32.png","hpi33.png", "hpi34.png", "hpi35.png", "hpi36.png", "hpi37.png", "hpi38.png", "hpi39.png" , 
    "hpi40.png","hpi41.png", "hpi42.png", "hpi43.png", "hpi44.png", "hpi45.png", "hpi46.png","hpi47.png", "hpi48.png", "hpi49.png", "hpi50.png","hpi51.png", "hpi52.png", "hpi53.png", "hpi54.png", "hpi55.png",
    "hpi56.png", "hpi57.png", "hpi58.png", "hpi59.png", "hpi60.png","hpi61.png", "hpi62.png", "hpi63.png", "hpi64.png", "hpi65.png","hpi66.png", "hpi67.png", "hpi68.png", "hpi69.png", "hpi70.png","hpi71.png",
     "hpi72.png", "hpi73.png", "hpi1.png", "hpi2.png"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("silverteacupset")) 
  {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Silver Ware/";
  const fileNames = ["sw1.jpg", "sw2.jpg", "sw3.jpg", "sw4.jpg", "sw5.jpg", "sw6.jpg", "sw7.jpg", "sw8.jpg", "sw9.jpg", "sw10.jpg","sw11.jpg","sw12.jpg","sw13.jpg","sw14.jpg",
    "sw15.JPG", "sw16.jpg", "sw17.JPG", "sw18.JPG", "sw19.JPG", "sw20.JPG",
    "sw21.JPG", "sw22.JPG", "sw23.JPG", "sw24.JPG", "sw25.JPG", "sw26.JPG", "sw27.JPG", "sw28.JPG", "sw29.JPG", "sw30.JPG","sw31.JPG", "sw32.JPG",
    "sw33.JPG", "sw34.JPG", "sw35.JPG", "sw36.JPG", "sw37.JPG", "sw38.JPG", "sw39.JPG", "sw40.JPG","sw41.JPG","sw42.jpg","sw43.jpg","sw44.jpg","sw45.jpg","sw46.jpg","sw47.jpg",
    "sw48.jpg","sw49.jpg","sw50.jpg","sw51.jpg","sw52.jpg","sw53.jpg","sw54.jpg","sw55.JPG","sw56.JPG","sw57.JPG","sw58.JPG","sw59.JPG","sw60.JPG",
    "sw61.JPG", "sw62.JPG", "sw63.JPG", "sw64.JPG", "sw65.JPG", "sw66.JPG", "sw67.JPG", "sw68.JPG", "sw69.JPG", "sw70.JPG","sw71.JPG", "sw72.JPG","sw73.JPG", "sw74.JPG", "sw75.JPG",
     "sw76.JPG", "sw77.JPG", "sw78.JPG", "sw79.JPG", "sw80.JPG","sw81.JPG", "sw82.JPG", "sw83.jpg", "sw84.jpg", "sw85.jpg", "sw86.jpg","sw87.jpg","sw88.jpg","sw89.jpg",
     "sw90.JPG","sw91.JPG","sw92.JPG","sw93.JPG","sw94.JPG","sw95.JPG","sw96.JPG","sw97.JPG","sw98.JPG","sw99.JPG","sw100.jpg"
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("etagere")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Etagere/";
  const fileNames = ["et1.png", "et2.png", "et3.png", "et4.png", "et5.png", "et6.png", "et7.png", "et8.png", "et9.png", "et10.png","et111.png", "et112.png", "et113.png", "et114.png", "et115.png", "et116.png", "et117.png", "et118.png", "et119.png", "et120.png",
    "et121.png", "et122.png", "et123.png", "et124.png", "et125.png", "et126.png", "et127.png", "et128.png", "et129.png", "et130.png","et131.png", "et132.png", "et133.png",
    "et1.png", "et2.png", "et3.png", "et4.png", "et5.png", "et6.png", "et7.png", "et8.png", "et9.png", "et10.png","et111.png", "et112.png", "et113.png", "et114.png", "et115.png", "et116.png", "et117.png", "et118.png", "et119.png", "et120.png",
    "et121.png", "et122.png", "et123.png", "et124.png", "et125.png", "et126.png", "et127.png", "et128.png", "et129.png", "et130.png","et131.png", "et132.png", "et133.png","et1.png", "et2.png", "et3.png", "et4.png", "et5.png", "et6.png", "et7.png", "et8.png", "et9.png",
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("trays")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Trays/";
  const fileNames = ["tr1.png", "tr2.png", "tr3.png", "tr4.png", "tr5.png", "tr6.png", "tr7.png", "tr8.png", "tr9.png", "tr10.png","tr11.png", "tr12.png", "tr13.png", "tr14.png", "tr15.png", "tr16.png", "tr17.png", "tr18.png", "tr19.png", "tr20.png",
    "tr21.png", "tr22.png", "tr23.png", "tr24.png", "tr25.png", "tr26.png", "tr27.png", "tr28.png", "tr29.png", "tr30.png","tr31.png", "tr32.png",
    "tr33.png", "tr34.png", "tr35.png", "tr36.png", "tr37.png", "tr38.png", "tr39.png", "tr40.png","tr41.png", "tr42.png", "tr43.png", "tr44.png", "tr45.png", "tr46.png","tr47.png", "tr48.png", "tr49.png", "tr50.png","tr51.png", "tr52.png", "tr53.png", "tr54.png", "tr55.png", "tr56.png", "tr57.png", "tr58.png", "tr59.png",
     "tr60.png","tr61.png", "tr62.png", "tr63.png", "tr64.png", "tr65.png","tr66.png", "tr67.png", "tr68.png", "tr69.png","tr70.png","tr71.png", "tr72.png", "tr73.png", "tr74.png", "tr75.png",
    "tr76.png", "tr77.png", "tr78.png", "tr79.png", "tr80.png","tr81.png", "tr82.png", "tr83.png", "tr84.png", "tr85.png", 
    "tr86.png","tr87.png", "tr88.png", "tr89.png", "tr90.png", "tr91.png", "tr92.png", "tr93.png", "tr94.png", "tr95.png", "tr96.png","tr97.png", "tr98.png", "tr99.png", "tr100.png"
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("rural_handicrafts")) {
  basePath = "/Images/Product Images/RuralHandiCrafts/";
  const fileNames = ["hc1.png", "hc2.png", "hc3.png", "hc4.png", "hc5.png", "hc6.png", "hc7.png", "hc8.png", "hc9.png", "hc10.png","hc11.png", "hc12.png", "hc13.png", "hc14.png", "hc15.png", "hc16.png", "hc17.png", "hc18.png", "hc19.png", "hc20.png",
    "hc21.png", "hc22.png", "hc23.png", "hc24.png", "hc25.png", "hc26.png", "hc27.png", "hc28.png", "hc29.png", "hc30.png","hc31.png", "hc32.png",
    "hc33.png", "hc34.png", "hc35.png", "hc36.png", "hc37.png", "hc38.png", "hc39.png", "hc40.png","hc41.png", "hc42.png", "hc43.png", "hc44.png", "hc45.png","hc1.png", "hc2.png", "hc3.png", "hc4.png", "hc5.png", "hc6.png", "hc7.png", "hc8.png", "hc9.png", "hc10.png","hc11.png", "hc12.png", "hc13.png", "hc14.png", "hc15.png", "hc16.png", "hc17.png", "hc18.png", "hc19.png", "hc20.png",
    "hc21.png", "hc22.png", "hc23.png", "hc24.png", "hc25.png", "hc26.png", "hc27.png", "hc28.png", "hc29.png", "hc30.png"
  ];
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
