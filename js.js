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
  const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, "_blank");
}
// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  // Update favicon
  updateFavicon();

  // Back-to-top button logic
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", scrollToTop);
  }

  // Show/hide back-to-top on scroll
  window.addEventListener("scroll", function () {
    if (backToTop) {
      backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
    }
  });

  // Hover animation on elements
  const elements = document.querySelectorAll('.nav-item, .gallery-image, .card, .btn, .whatsapp-icon, .back-to-top');
  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.transform = "scale(1.1)";
      element.style.transition = "all 0.3s ease-in-out";
    });
    element.addEventListener("mouseout", () => {
      element.style.transform = "scale(1)";
      element.style.transition = "all 0.3s ease-in-out";
    });
  });

  // Coming soon page glow effect
  const title = document.querySelector(".coming-soon h2");
  if (title) {
    title.style.textShadow = "0 0 10px rgba(255,255,255,0.5)";
    setInterval(() => {
      title.style.textShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255,255,255,0.8)`;
    }, 700);
  }
  // Example button event (only if it exists)
  const someBtn = document.getElementById("some-button");
  if (someBtn) {
    someBtn.addEventListener("click", function () {
      alert("Clicked!");
    });
  }


 

});


