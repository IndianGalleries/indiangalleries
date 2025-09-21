// Update favicon based on dark/light theme
function updateFavicon() {
  const favicon = document.getElementById("favicon");
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (favicon) {
    favicon.href = isDark
      ? "/Images/favicon-dark.png"
      : "/Images/favicon-light.png";
  }
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Open WhatsApp chat
function openWhatsApp() {
  const phoneNumber = "+918077155004";
  const message = "Hello! I'm interested in your products.";
  const whatsappUrl =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, "_blank");
}

// Declare popup globally
let popup; // will be assigned after DOM is loaded

function openImagePopup(el) {
  const imgSrc = el.querySelector("img").getAttribute("src");
  const popupImg = document.getElementById("popupImage");
  popupImg.src = imgSrc;
  popup.style.display = "flex";
}

function closeImagePopup() {
  popup.style.display = "none";
}

