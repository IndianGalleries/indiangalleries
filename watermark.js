/* ==========================================================
   Indian Galleries - Global Watermark System
   Version : 3.0
   Author  : ChatGPT
   ========================================================== */

(function () {
    "use strict";
    const CONFIG = {
        text: "Indian Galleries",
        fontFamily: "Allura",
        fontSize: 22,
        color: "rgba(255,255,255,0.18)",
        rotation: -30,
        tileWidth: 260,
        tileHeight: 180
    };

    /* ==========================================
       Create SVG Watermark
    ========================================== */

    function createWatermarkSVG() {
        const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="${CONFIG.tileWidth}"
     height="${CONFIG.tileHeight}">

<g transform="translate(${CONFIG.tileWidth/2},${CONFIG.tileHeight/2}) rotate(${CONFIG.rotation})">
<text
x="0"
y="0"
text-anchor="middle"
dominant-baseline="middle"
font-family="${CONFIG.fontFamily}, cursive"
font-size="${CONFIG.fontSize}"
fill="${CONFIG.color}">
${CONFIG.text}
</text>
</g>
</svg>`;
        return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}")`;
    }

    /* ==========================================
       Apply CSS Variable
    ========================================== */
    function applyWatermark() {
        document.documentElement.style.setProperty(
            "--wm-image",
            createWatermarkSVG()
        );
    }

    /* ==========================================
       Apply no-watermark
    ========================================== */

    function applyNoWatermark() {
        document.querySelectorAll(".no-watermark").forEach(function (element) {
            let container =
                element.closest(".gallery-image") ||
                element.closest(".gallery-card") ||
                element.closest(".image-popup") ||
                element.closest(".image-modal");
            if (container) {
                container.classList.add("wm-ignore");
            }
        });
    }

    /* ==========================================
       Observe Dynamic Changes
    ========================================== */
    function observeDOM() {
        const observer = new MutationObserver(function () {
            applyNoWatermark();
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /* ==========================================
       INIT
    ========================================== */
    function init() {
        applyWatermark();
        applyNoWatermark();
        observeDOM();
        console.log("✔ Watermark V3 Loaded");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();