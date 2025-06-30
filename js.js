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

// Declare popup globally
let popup; // will be assigned after DOM is loaded

function openImagePopup(el) {
  const imgSrc = el.querySelector('img').getAttribute('src');
  const popupImg = document.getElementById('popupImage');
  popupImg.src = imgSrc;
  popup.style.display = 'flex';
}

function closeImagePopup() {
  popup.style.display = 'none';
}

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  updateFavicon();
  // highlightActiveLink();

  const currentPath = window.location.pathname.toLowerCase();
  document.querySelectorAll(".nav-link, .dropdown-item").forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref && linkHref !== "#" && currentPath.endsWith(linkHref.toLowerCase())) {
      link.classList.add("active");

      const immediateDropdown = link.closest('.dropdown');
      if (immediateDropdown) {
        const mainToggle = immediateDropdown.querySelector('.dropdown-toggle');
        if (mainToggle) mainToggle.classList.add("active");
      }

      const innerSubMenu = link.closest('.dropdown-submenu');
      if (innerSubMenu) {
        const innerToggle = innerSubMenu.querySelector('.dropdown-toggle');
        if (innerToggle) innerToggle.classList.add("active");

        const outerDropdown = innerSubMenu.closest('.dropdown');
        if (outerDropdown) {
          const outerToggle = outerDropdown.querySelector('.dropdown-toggle');
          if (outerToggle) outerToggle.classList.add("active");
        }
      }
    }
  });

  // Back to Top Button
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", scrollToTop);
  }

  window.addEventListener("scroll", function () {
    if (backToTop) {
      backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
    }
  });

  // Hover animation
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

  // Coming soon text glow
  const title = document.querySelector(".coming-soon h2");
  if (title) {
    title.style.textShadow = "0 0 10px rgba(255,255,255,0.5)";
    setInterval(() => {
      title.style.textShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255,255,255,0.8)`;
    }, 700);
  }

  const someBtn = document.getElementById("some-button");
  if (someBtn) {
    someBtn.addEventListener("click", function () {
      alert("Clicked!");
    });
  }

  const submenus = document.querySelectorAll(".dropdown-submenu > .dropdown-toggle");
  submenus.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      submenu.classList.toggle("show");
    });
  });

  // ✅ Assign and add event listener for popup
  popup = document.getElementById('popupModal');
  if (popup) {
    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  }
});
