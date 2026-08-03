let basePath = "";
let images = [];
const path = window.location.pathname.toLowerCase();

if (path.includes("tablelamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Table_lamps/";
  const fileNames = ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp", "a6.webp", "a7.webp", "a8.webp", "a9.webp", "a10.webp","a11.webp", "a12.webp", "a13.webp", "a14.webp", "a15.webp",
    "a16.webp", "a17.webp", "a18.webp", "a19.webp", "a20.webp","a21.webp", "a22.webp", "a23.webp", "a24.webp", "a25.webp",    
    "tbl1.webp", "tbl2.webp", "tbl3.webp", "tbl4.webp", "tbl5.webp", "tbl6.webp", "tbl7.webp", "tbl8.webp", "tbl9.webp", "tbl10.webp","tbl11.webp", "tbl12.webp", "tbl13.webp", "tbl14.webp", "tbl15.webp",
    "tbl16.webp", "tbl17.webp", "tbl18.webp", "tbl19.webp", "tbl20.webp","tbl21.webp", "tbl22.webp", "tbl23.webp", "tbl24.webp", "tbl25.webp","tbl26.webp", "tbl27.webp", "tbl28.webp", "tbl29.webp", "tbl30.webp",
    "tbl31.webp", "tbl32.webp", "tbl33.webp", "tbl34.webp", "tbl35.webp","tbl36.webp", "tbl37.webp", "tbl38.webp", "tbl39.webp", "tbl40.webp","tbl41.webp", "tbl42.webp", "tbl43.webp", "tbl44.webp", "tbl45.webp","tbl46.webp", "tbl47.webp", "tbl48.webp", "tbl49.webp", "tbl50.webp",
  "tbl51.webp", "tbl52.webp", "tbl53.webp", "tbl54.webp", "tbl55.webp","tbl56.webp", "tbl57.webp", "tbl58.webp", "tbl59.webp", "tbl60.webp","tbl61.webp", "tbl62.webp", "tbl63.webp", "tbl64.webp", "tbl65.webp", "tbl66.webp", "tbl67.webp", "tbl68.webp", "tbl69.webp", "tbl70.webp","tbl71.webp", "tbl72.webp", "tbl73.webp", "tbl74.webp", "tbl75.webp",
"tbl76.webp", "tbl77.webp", "tbl78.webp", "tbl79.webp", "tbl80.webp","tbl81.webp", "tbl82.webp", "tbl83.webp", "tbl84.webp", "tbl85.webp", "tbl86.webp","tbl87.webp", "tbl88.webp", "tbl89.webp", "tbl90.webp", "tbl91.webp", "tbl92.webp", "tbl93.webp", "tbl43.webp", "tbl44.webp", "tbl45.webp","tbl46.webp", "tbl47.webp", "tbl48.webp", "tbl49.webp"];
  images = fileNames.map(file => basePath + file);

} else if (path.includes("walllamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Wall_Lamps/";

  // const fileNames = Array(23).fill("WallLamps.webp");
  const fileNames = ["a.webp", "b.webp", "c.webp", "d.webp", "e.webp", "f.webp", "g.webp", "h.webp", "i.webp", "j.webp","k.webp", "l.webp", "m.webp", "n.webp", "o.webp",
    "p.webp", "q.webp", "r.webp", "s.webp", "t.webp","u.webp", "v.webp", "w.webp","x.webp", "y.webp",
    "wl1.webp", "wl2.webp", "wl3.webp", "wl4.webp", "wl5.webp", "wl6.webp", "wl7.webp", "wl8.webp", "wl9.webp", "wl10.webp", "wl11.webp",
    "wl12.webp", "wl13.webp", "wl14.webp", "wl15.webp", "wl16.webp", "wl17.webp", "wl18.webp", "wl19.webp", "wl20.webp", "wl21.webp", "wl22.webp", "wl23.webp",
    "wl24.webp","wl25.webp","wl26.webp", "wl27.webp", "wl28.webp", "wl29.webp", "wl30.webp", "wl31.webp", "wl32.webp", "wl33.webp", "wl34.webp",
    "wl1.webp", "wl2.webp", "wl3.webp", "wl4.webp", "wl5.webp", "wl6.webp", "wl7.webp", "wl8.webp", "wl9.webp", "wl10.webp", "wl11.webp",
    "wl12.webp", "wl13.webp", "wl14.webp", "wl15.webp", "wl16.webp"];
  images = fileNames.map(file => basePath + file);
} 
else if (path.includes("floorlamps")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Floor_lamps/";
  // const fileNames = Array(20).fill("floorLamps.webp");
  const fileNames = ["a1.webp", "a2.webp", "a3.webp", "a4.webp", "a5.webp", "a6.webp", "a7.webp", "a8.webp", "a9.webp", "a10.webp","a11.webp", "a12.webp", "a13.webp", "a14.webp", "a15.webp",
    "a16.webp", "a17.webp", "a18.webp", "a19.webp", "a20.webp","a21.webp", "a22.webp", "a23.webp", "a24.webp", "a25.webp",
    "flr1.webp", "flr2.webp", "flr3.webp", "flr4.webp", "flr5.webp", "flr6.webp", "flr7.webp", "flr8.webp", "flr9.webp", "flr10.webp","flr11.webp","flr12.webp",
    "flr13.webp", "flr14.webp", "flr15.webp", "flr16.webp", "flr17.webp", "flr18.webp", "flr19.webp", "flr20.webp","flr21.webp", "flr22.webp", "flr23.webp", "flr24.webp", "flr25.webp",
    "flr26.webp", "flr27.webp", "flr28.webp", "flr29.webp", "flr30.webp","flr31.webp", "flr32.webp", "flr33.webp", "flr34.webp", "flr35.webp","flr36.webp", "flr37.webp", "flr38.webp", "flr39.webp", "flr40.webp",
    "flr41.webp", "flr42.webp", "flr43.webp", "flr44.webp", "flr45.webp","flr46.webp", "flr47.webp", "flr48.webp", "flr49.webp", "flr50.webp","flr51.webp", "flr52.webp", "flr53.webp", "flr54.webp", "flr55.webp",
    "flr56.webp", "flr57.webp", "flr58.webp", "flr59.webp", "flr60.webp","flr61.webp", "flr62.webp", "flr63.webp", "flr64.webp", "flr65.webp","flr66.webp", "flr67.webp", "flr68.webp", "flr69.webp", "flr70.webp","flr71.webp", "flr72.webp", "flr73.webp", "flr74.webp", "flr75.webp"
  ];
  images = fileNames.map(file => basePath + file);
} 
else if (path.includes("chandeliers")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Chandeliers/";
  const fileNames = ["a.webp", "b.webp", "c.webp", "d.webp", "e.webp", "f.webp", "g.webp", "h.webp", "i.webp", "j.webp","k.webp", "l.webp",
     "chn13.webp", "chn14.webp", "chn15.webp","chn16.webp", "chn17.webp","chn18.webp", "chn19.webp","chn20.webp", "chn21.webp", "chn22.webp", "chn23.webp", "chn24.webp", "chn25.webp", "chn27.webp"
  , "chn29.webp", "chn30.webp","chn31.webp", "chn32.webp", "chn33.webp", "chn34.webp","chn36.webp", "chn37.webp", "chn39.webp", "chn40.webp",
"chn41.webp", "chn42.webp", "chn43.webp", "chn44.webp", "chn45.webp","chn46.webp","chn47.webp", "chn48.webp", "chn49.webp", "chn50.webp","chn51.webp", "chn52.webp", "chn53.webp", "chn54.webp", "chn55.webp","chn56.webp",
"chn57.webp", "chn58.webp", "chn59.webp", "chn60.webp","chn61.webp", "chn62.webp", "chn63.webp", "chn64.webp", "chn65.webp","chn66.webp", "chn1.webp", "chn2.webp", "chn4.webp", "chn5.webp", "chn6.webp", "chn7.webp", "chn8.webp", 
"chn9.webp", "chn10.webp","chn11.webp","chn12.webp","chn35.webp","chn38.webp"
];
   images = fileNames.map(file => basePath + file);
} 
else if (path.includes("pendants")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/Pendants/";
  // const fileNames = Array(15).fill("Pendants.webp");
  const fileNames = ["a.webp", "b.webp", "c.webp", "d.webp", "e.webp", "f.webp", "g.webp", "h.webp", "i.webp", "j.webp","k.webp", "l.webp", "m.webp", "n.webp", "o.webp",
    "p.webp", "q.webp", "r.webp", "s.webp", "t.webp","u.webp", "v.webp", "w.webp","x.webp", "y.webp","z.webp","pn1.webp", "pn2.webp", "pn3.webp", "pn4.webp", "pn5.webp", "pn6.webp", "pn7.webp", "pn8.webp", "pn9.webp", "pn10.webp","pn11.webp", "pn12.webp", "pn13.webp", "pn14.webp", "pn15.webp",
    "pn16.webp", "pn17.webp", "pn18.webp", "pn19.webp", "pn20.webp","pn21.webp", "pn22.webp", "pn23.webp", "pn24.webp", "pn25.webp","pn26.webp", "pn27.webp", "pn28.webp", "pn29.webp", "pn30.webp",
    "pn31.webp", "pn32.webp", "pn33.webp", "pn34.webp", "pn35.webp","pn36.webp", "pn37.webp", "pn38.webp", "pn39.webp", "pn40.webp","pn41.webp", "pn42.webp", "pn43.webp", "pn44.webp", "pn45.webp","pn46.webp", "pn47.webp", "pn48.webp", "pn49.webp", "pn50.webp",
  "pn51.webp", "pn52.webp", "pn53.webp", "pn54.webp", "pn55.webp","pn56.webp", "pn57.webp", "pn59.webp", "pn60.webp","pn61.webp", "pn62.webp", "pn63.webp", "pn64.webp", "pn65.webp",
  "pn66.webp", "pn67.webp", "pn68.webp", "pn69.webp", "pn70.webp","pn71.webp", "pn72.webp", "pn73.webp", "pn74.webp", "pn75.webp",
  ];
  images = fileNames.map(file => basePath + file);
}
 else if (path.includes("outdoorlamps")) 
  {
  basePath = "/Images/Product Images/Lamps_and_Lightening/OutDoor_lamps/";
  // const fileNames = Array(27).fill("outdoorLamps.webp");
  const fileNames = ["a.webp", "b.webp", "c.webp", "d.webp", "e.webp", "f.webp", "g.webp", "h.webp", "i.webp", "j.webp","k.webp", "l.webp", "m.webp", "n.webp", "o.webp",
    "p.webp", "q.webp", "r.webp", "s.webp", "t.webp","u.webp", "v.webp", "w.webp","x.webp", "y.webp",
    "od1.webp", "od2.webp", "od3.webp", "od4.webp", "od5.webp", "od6.webp", "od7.webp", "od8.webp", "od9.webp", "od10.webp", "od12.webp", "od14.webp", "od15.webp",
    "od16.webp", "od18.webp", "od19.webp","od21.webp", "od22.webp", "od23.webp", "od24.webp", "od25.webp","od26.webp", "od27.webp", "od28.webp", "od29.webp", "od30.webp",
    "od31.webp", "od32.webp", "od33.webp", "od34.webp", "od35.webp","od36.webp", "od37.webp", "od38.webp", "od39.webp", "od40.webp","od41.webp", "od42.webp", "od43.webp",
     "od44.webp", "od45.webp","od46.webp", "od47.webp", "od48.webp", "od49.webp", "od50.webp","a.webp", "b.webp", "c.webp", "d.webp",
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("tabletopitem"))
   {
  basePath = "/Images/Product Images/HomeDecor/TableTopItems/";
  const fileNames = [
    "tti10.webp","tti11.webp","tti12.webp","tti13.webp","tti14.webp","tti15.webp", "tti16.webp","tti17.webp","tti18.webp","tti20.webp","tti21.webp","tti22.webp","tti23.webp","tti24.webp","tti25.webp","tti26.webp","tti27.webp","tti28.webp","tti29.webp","tti30.webp","tti31.webp","tti32.webp",
   "tti33.webp","tti34.webp","tti35.webp","tti36.webp","tti10.webp","tti11.webp","tti12.webp","tti13.webp","tti14.webp","tti15.webp", "tti16.webp","tti17.webp","tti18.webp","tti20.webp","tti21.webp",
    "tti22.webp","tti23.webp","tti24.webp","tti25.webp","tti26.webp","tti27.webp","tti28.webp","tti29.webp","tti30.webp","tti31.webp","tti32.webp",
   "tti33.webp","tti34.webp","tti35.webp","tti36.webp","tti10.webp","tti11.webp","tti12.webp","tti13.webp","tti14.webp","tti15.webp", "tti16.webp","tti17.webp","tti18.webp","tti20.webp","tti21.webp",
    "tti22.webp","tti23.webp","tti24.webp","tti25.webp","tti26.webp","tti27.webp","tti28.webp","tti29.webp","tti30.webp", "tti10.webp","tti11.webp","tti12.webp"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("flowervases"))
   {
  basePath = "/Images/Product Images/HomeDecor/FlowerVases/";
  const fileNames = ["fv1.webp", "fv2.webp", "fv3.webp", "fv4.webp", "fv5.webp", "fv6.webp", "fv7.webp", "fv8.webp", "fv9.webp", "fv10.webp", "fv11.webp", "fv12.webp", "fv13.webp", "fv14.webp", "fv15.webp", "fv16.webp", "fv17.webp", "fv18.webp", "fv19.webp", "fv20.webp",
    "fv21.webp", "fv22.webp", "fv23.webp", "fv24.webp", "fv25.webp", "fv26.webp", "fv27.webp", "fv28.webp", "fv29.webp", "fv30.webp","fv31.webp", "fv32.webp", "fv33.webp", "fv34.webp", "fv35.webp", "fv36.webp", "fv37.webp", "fv38.webp", "fv39.webp", "fv40.webp",
    "fv1.webp", "fv2.webp", "fv3.webp", "fv4.webp", "fv5.webp", "fv6.webp", "fv7.webp", "fv8.webp", "fv9.webp", "fv10.webp","fv11.webp", "fv12.webp", "fv13.webp", "fv14.webp", "fv15.webp", "fv16.webp", "fv17.webp", "fv18.webp", "fv19.webp", "fv20.webp",
    "fv21.webp", "fv22.webp", "fv23.webp", "fv24.webp", "fv25.webp", "fv26.webp", "fv27.webp", "fv28.webp", "fv29.webp", "fv30.webp","fv31.webp", "fv32.webp",
    "fv33.webp", "fv41.webp", "fv42.webp"
  ];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("walldecor")) {
  basePath = "/Images/Product Images/HomeDecor/WallDecor/";
  const fileNames = ["wd1.webp", "wd2.webp", "wd3.webp", "wd4.webp", "wd5.webp","wd6.webp", "wd7.webp", "wd8.webp", "wd9.webp", "wd10.webp","wd11.webp", "wd12.webp", "wd13.webp", "wd14.webp", "wd15.webp", "wd16.webp", "wd17.webp", "wd18.webp", "wd19.webp", "wd20.webp",
    "wd21.webp", "wd22.webp", "wd23.webp", "wd24.webp", "wd25.webp", "wd26.webp", "wd27.webp", "wd28.webp", "wd29.webp", "wd30.webp","wd31.webp","wd32.webp", "wd33.webp", "wd34.webp", "wd35.webp", "wd36.webp", "wd37.webp", "wd38.webp", "wd39.webp", "wd40.webp","wd41.webp", "wd42.webp", "wd43.webp", 
     "wd44.webp", "wd45.webp", "wd46.webp", "wd47.webp", "wd48.webp", "wd49.webp", "wd50.webp","wd51.webp", "wd52.webp", "wd53.webp", "wd54.webp", "wd55.webp", "wd56.webp","wd57.webp", "wd58.webp", "wd59.webp", "wd60.webp","wd61.webp", "wd62.webp", "wd63.webp", "wd64.webp", "wd65.webp", "wd66.webp", "wd67.webp", "wd68.webp", "wd69.webp",
      "wd70.webp","wd71.webp", "wd72.webp", "wd73.webp", "wd74.webp", "wd75.webp"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("handpainteditems")) {
  basePath = "/Images/Product Images/HomeDecor/HandPaintedItems/";
  const fileNames = ["hpi1.webp", "hpi2.webp", "hpi3.webp", "hpi4.webp", "hpi5.webp", "hpi6.webp", "hpi7.webp", "hpi8.webp", "hpi9.webp", "hpi10.webp","hpi11.webp", "hpi12.webp", "hpi13.webp", "hpi14.webp", "hpi15.webp", "hpi16.webp", "hpi17.webp", "hpi18.webp", "hpi19.webp", "hpi20.webp", 
    "hpi21.webp", "hpi22.webp", "hpi23.webp", "hpi24.webp", "hpi25.webp", "hpi26.webp", "hpi27.webp", "hpi28.webp", "hpi29.webp", "hpi30.webp","hpi31.webp", "hpi32.webp","hpi33.webp", "hpi34.webp", "hpi35.webp", "hpi36.webp", "hpi37.webp", "hpi38.webp", "hpi39.webp" , 
    "hpi40.webp","hpi41.webp", "hpi42.webp", "hpi43.webp", "hpi44.webp", "hpi45.webp", "hpi46.webp","hpi47.webp", "hpi48.webp", "hpi49.webp", "hpi50.webp","hpi51.webp", "hpi52.webp", "hpi53.webp", "hpi54.webp", "hpi55.webp",
    "hpi56.webp", "hpi57.webp", "hpi58.webp", "hpi59.webp", "hpi60.webp","hpi61.webp", "hpi62.webp", "hpi63.webp", "hpi64.webp", "hpi65.webp","hpi66.webp", "hpi67.webp", "hpi68.webp", "hpi69.webp", "hpi70.webp","hpi71.webp",
     "hpi72.webp", "hpi73.webp", "hpi1.webp", "hpi2.webp"];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("silverteacupset")) 
  {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Silver Ware/";
  const fileNames = ["sw1.webp", "sw2.webp", "sw3.webp", "sw4.webp", "sw5.webp", "sw6.webp", "sw7.webp", "sw8.webp", "sw9.webp", "sw10.webp","sw11.webp","sw12.webp","sw13.webp","sw14.webp",
    "sw15.webp", "sw16.webp", "sw17.webp", "sw18.webp", "sw19.webp", "sw20.webp",
    "sw21.webp", "sw22.webp", "sw23.webp", "sw24.webp", "sw25.webp", "sw26.webp", "sw27.webp", "sw28.webp", "sw29.webp", "sw30.webp","sw31.webp", "sw32.webp",
    "sw33.webp", "sw34.webp", "sw35.webp", "sw36.webp", "sw37.webp", "sw38.webp", "sw39.webp", "sw40.webp","sw41.webp","sw42.webp","sw43.webp","sw44.webp","sw45.webp","sw46.webp","sw47.webp",
    "sw48.webp","sw49.webp","sw50.webp","sw51.webp","sw52.webp","sw53.webp","sw54.webp","sw55.webp","sw56.webp","sw57.webp","sw58.webp","sw59.webp","sw60.webp",
    "sw61.webp", "sw62.webp", "sw63.webp", "sw64.webp", "sw65.webp", "sw66.webp", "sw67.webp", "sw68.webp", "sw69.webp", "sw70.webp","sw71.webp", "sw72.webp","sw73.webp", "sw74.webp", "sw75.webp",
     "sw76.webp", "sw77.webp", "sw78.webp", "sw79.webp", "sw80.webp","sw81.webp", "sw82.webp", "sw83.webp", "sw84.webp", "sw85.webp", "sw86.webp","sw87.webp","sw88.webp","sw89.webp",
     "sw90.webp","sw91.webp","sw92.webp","sw93.webp","sw94.webp","sw95.webp","sw96.webp","sw97.webp","sw98.webp","sw99.webp","sw100.webp"
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("etagere")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Etagere/";
  const fileNames = ["et1.webp", "et2.webp", "et3.webp", "et4.webp", "et5.webp", "et6.webp", "et7.webp", "et8.webp", "et9.webp", "et10.webp","et111.webp", "et112.webp", "et113.webp", "et114.webp", "et115.webp", "et116.webp", "et117.webp", "et118.webp", "et119.webp", "et120.webp",
    "et121.webp", "et122.webp", "et123.webp", "et124.webp", "et125.webp", "et126.webp", "et127.webp", "et128.webp", "et129.webp", "et130.webp","et131.webp", "et132.webp", "et133.webp",
    "et1.webp", "et2.webp", "et3.webp", "et4.webp", "et5.webp", "et6.webp", "et7.webp", "et8.webp", "et9.webp", "et10.webp","et111.webp", "et112.webp", "et113.webp", "et114.webp", "et115.webp", "et116.webp", "et117.webp", "et118.webp", "et119.webp", "et120.webp",
    "et121.webp", "et122.webp", "et123.webp", "et124.webp", "et125.webp", "et126.webp", "et127.webp", "et128.webp", "et129.webp", "et130.webp","et131.webp", "et132.webp", "et133.webp","et1.webp", "et2.webp", "et3.webp", "et4.webp", "et5.webp", "et6.webp", "et7.webp", "et8.webp", "et9.webp",
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("trays")) {
  basePath = "/Images/Product Images/LuxuryKitchenWares/Trays/";
  const fileNames = ["tr1.webp", "tr2.webp", "tr3.webp", "tr4.webp", "tr5.webp", "tr6.webp", "tr7.webp", "tr8.webp", "tr9.webp", "tr10.webp","tr11.webp", "tr12.webp", "tr13.webp", "tr14.webp", "tr15.webp", "tr16.webp", "tr17.webp", "tr18.webp", "tr19.webp", "tr20.webp",
    "tr21.webp", "tr22.webp", "tr23.webp", "tr24.webp", "tr25.webp", "tr26.webp", "tr27.webp", "tr28.webp", "tr29.webp", "tr30.webp","tr31.webp", "tr32.webp",
    "tr33.webp", "tr34.webp", "tr35.webp", "tr36.webp", "tr37.webp", "tr38.webp", "tr39.webp", "tr40.webp","tr41.webp", "tr42.webp", "tr43.webp", "tr44.webp", "tr45.webp", "tr46.webp","tr47.webp", "tr48.webp", "tr49.webp", "tr50.webp","tr51.webp", "tr52.webp", "tr53.webp", "tr54.webp", "tr55.webp", "tr56.webp", "tr57.webp", "tr58.webp", "tr59.webp",
     "tr60.webp","tr61.webp", "tr62.webp", "tr63.webp", "tr64.webp", "tr65.webp","tr66.webp", "tr67.webp", "tr68.webp", "tr69.webp","tr70.webp","tr71.webp", "tr72.webp", "tr73.webp", "tr74.webp", "tr75.webp",
    "tr76.webp", "tr77.webp", "tr78.webp", "tr79.webp", "tr80.webp","tr81.webp", "tr82.webp", "tr83.webp", "tr84.webp", "tr85.webp", 
    "tr86.webp","tr87.webp", "tr88.webp", "tr89.webp", "tr90.webp", "tr91.webp", "tr92.webp", "tr93.webp", "tr94.webp", "tr95.webp", "tr96.webp","tr97.webp", "tr98.webp", "tr99.webp", "tr100.webp"
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("rural_handicrafts")) {
  basePath = "/Images/Product Images/RuralHandiCrafts/";
  const fileNames = ["hc1.webp", "hc2.webp", "hc3.webp", "hc4.webp", "hc5.webp", "hc6.webp", "hc7.webp", "hc8.webp", "hc9.webp", "hc10.webp","hc11.webp", "hc12.webp", "hc13.webp", "hc14.webp", "hc15.webp", "hc16.webp", "hc17.webp", "hc18.webp", "hc19.webp", "hc20.webp",
    "hc21.webp", "hc22.webp", "hc23.webp", "hc24.webp", "hc25.webp", "hc26.webp", "hc27.webp", "hc28.webp", "hc29.webp", "hc30.webp","hc31.webp", "hc32.webp",
    "hc33.webp", "hc34.webp", "hc35.webp", "hc36.webp", "hc37.webp", "hc38.webp", "hc39.webp", "hc40.webp","hc41.webp", "hc42.webp", "hc43.webp", "hc44.webp", "hc45.webp","hc1.webp", "hc2.webp", "hc3.webp", "hc4.webp", "hc5.webp", "hc6.webp", "hc7.webp", "hc8.webp", "hc9.webp", "hc10.webp","hc11.webp", "hc12.webp", "hc13.webp", "hc14.webp", "hc15.webp", "hc16.webp", "hc17.webp", "hc18.webp", "hc19.webp", "hc20.webp",
    "hc21.webp", "hc22.webp", "hc23.webp", "hc24.webp", "hc25.webp", "hc26.webp", "hc27.webp", "hc28.webp", "hc29.webp", "hc30.webp"
  ];
  images = fileNames.map(file => basePath + file);
}
else if (path.includes("metalliccolorswatches")) {
  basePath = "/Images/Product Images/MetallicColorSwatches/";
  const fileNames = ["ms1.webp", "ms2.webp", "ms3.webp", "ms4.webp", "ms5.webp", "ms6.webp", "ms7.webp", "ms8.webp", "ms9.webp", "ms10.webp",
    "ms11.webp", "ms12.webp", "ms13.webp", "ms14.webp", "ms16.webp", "ms17.webp", "ms18.webp", "ms19.webp", "ms20.webp",
    "ms21.webp", "ms22.webp", "ms23.webp", "ms24.webp", "ms25.webp", "ms26.webp", "ms27.webp", "ms28.webp", "ms29.webp", "ms30.webp",
    "ms31.webp", "ms32.webp", "ms33.webp", "ms34.webp", "ms35.webp", "ms36.webp", "ms37.webp", "ms38.webp", "ms39.webp", "ms40.webp",

    "ms1.webp", "ms2.webp", "ms3.webp", "ms4.webp", "ms5.webp", "ms6.webp", "ms7.webp", "ms8.webp", "ms9.webp", "ms10.webp",
    "ms11.webp", "ms12.webp", "ms13.webp", "ms14.webp", "ms16.webp", "ms17.webp", "ms18.webp", "ms19.webp", "ms20.webp",
    "ms21.webp", "ms22.webp", "ms23.webp", "ms24.webp", "ms25.webp", "ms26.webp", "ms27.webp", "ms28.webp", "ms29.webp", "ms30.webp","ms31.webp", "ms32.webp",
   ];
  images = fileNames.map(file => basePath + file);
}

else if (path.includes("fairtradeproducts")) {
  basePath = "/Images/Product Images/Lamps_and_Lightening/FairTrade_Products/";
  const fileNames = ["ft1.webp", "ft2.webp", "ft3.webp", "ft4.webp", "ft5.webp", "ft6.webp", "ft7.webp", "ft8.webp", "ft9.webp", "ft10.webp","ft11.webp", "ft12.webp", 
    "ft13.webp", "ft14.webp", "ft15.webp", "ft16.webp", "ft17.webp", "ft18.webp", "ft19.webp", "ft20.webp", "ft21.webp", "ft22.webp", "ft23.webp", "ft24.webp", "ft25.webp",
     "ft26.webp", "ft27.webp", "ft28.webp", "ft29.webp", "ft30.webp","ft31.webp", "ft32.webp","ft33.webp", "ft34.webp", "ft35.webp", "ft36.webp", "ft37.webp", "ft38.webp", 
     "ft39.webp", "ft40.webp","ft41.webp", "ft42.webp", "ft43.webp", "ft44.webp","ft45.webp", "ft46.webp", "ft47.webp", "ft48.webp", "ft49.webp","ft50.webp","ft51.webp", 
     "ft52.webp", "ft53.webp", "ft54.webp", "ft55.webp", "ft56.webp", "ft57.webp", "ft58.webp", "ft59.webp", "ft60.webp","ft61.webp", "ft62.webp", "ft63.webp", "ft64.webp", 
     "ft65.webp", "ft66.webp", "ft67.webp", "ft68.webp", "ft69.webp", "ft70.webp","ft71.webp","ft72.webp", "ft73.webp", "ft74.webp", "ft75.webp","ft76.webp", "ft77.webp", 
     "ft78.webp", "ft79.webp", "ft80.webp","ft81.webp", "ft82.webp", "ft1.webp", "ft2.webp", "ft3.webp", "ft4.webp", "ft5.webp", "ft6.webp", "ft7.webp", "ft8.webp", "ft9.webp", 
     "ft10.webp","ft11.webp", "ft12.webp", "ft13.webp", "ft14.webp", "ft15.webp", "ft16.webp","ft17.webp", "ft18.webp"
   ];
  images = fileNames.map(file => basePath + file);
}
// Pagination setup
let currentPage = 0;
const pageSize = 25;
// ===== Shuffle Images Function =====
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
// ===== Render Gallery =====
// ===== Category Label Map for ALT Text =====
const categoryAltMap = {
  tablelamps:           { label: "Handcrafted table lamp",         brand: "Indian Galleries" },
  walllamps:            { label: "Artisan wall lamp",              brand: "Indian Galleries" },
  floorlamps:           { label: "Handcrafted floor lamp",         brand: "Indian Galleries" },
  chandeliers:          { label: "Luxury handcrafted chandelier",  brand: "Indian Galleries" },
  pendants:             { label: "Artisan pendant light",          brand: "Indian Galleries" },
  outdoorlamps:         { label: "Handcrafted outdoor lamp",       brand: "Indian Galleries" },
  tabletopitem:         { label: "Decorative table top item",      brand: "Indian Galleries" },
  flowervases:          { label: "Handcrafted flower vase",        brand: "Indian Galleries" },
  walldecor:            { label: "Artisan wall décor piece",       brand: "Indian Galleries" },
  handpainteditems:     { label: "Hand painted decorative item",   brand: "Indian Galleries" },
  silverteacupset:      { label: "Silver tea cup set",             brand: "Indian Galleries" },
  etagere:              { label: "Handcrafted etagere display shelf", brand: "Indian Galleries" },
  trays:                { label: "Decorative handcrafted tray",    brand: "Indian Galleries" },
  rural_handicrafts:    { label: "Rural handicraft piece",         brand: "Indian Galleries" },
  metalliccolorswatches:{ label: "Metallic colour swatch",        brand: "Indian Galleries" },
  fairtradeproducts:    { label: "Fair trade handcrafted product", brand: "Indian Galleries" },
};

function getCategoryAlt(index) {
  const currentPath = window.location.pathname.toLowerCase();
  for (const [key, value] of Object.entries(categoryAltMap)) {
    if (currentPath.includes(key)) {
      return `${value.label} ${index + 1} – ${value.brand}`;
    }
  }
  return `Handcrafted home décor item ${index + 1} – Indian Galleries`;
}

// ===== Render Gallery =====
function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = "";

  const start = currentPage * pageSize;
  const end = Math.min(start + pageSize, images.length);

  for (let i = start; i < end; i++) {
    const altText = getCategoryAlt(i);

    const img = document.createElement('img');
    img.src = images[i];
    img.alt = altText;
    img.loading = "lazy";
    img.onclick = () => openModal(images[i], altText);

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
function openModal(src, altText) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    if (!modal || !modalImg) {
        console.error("Modal elements not found!");
        return;
    }

    modal.classList.remove("wm-ignore");
    modalImg.src = src;
    modalImg.alt = altText || "Handcrafted product – Indian Galleries";
    modal.style.display = "flex";
}

function closeModal(event) {
  if (event.target.id === "imageModal" || event.target.className === "close-btn") {
    document.getElementById("imageModal").style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  shuffleImages(images);   // Shuffle images on every refresh
  renderGallery();         // Then render gallery
});
