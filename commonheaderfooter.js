// commonheaderfooter.js

async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  // Wait for both header and footer to load
  await Promise.all([
    loadComponent("header", "header.html"),
    loadComponent("footer", "footer.html")
  ]);

  // Now run the initialization code (moved from js.js)
  updateFavicon();

  const currentPath = window.location.pathname.toLowerCase();
  document.querySelectorAll(".nav-link, .dropdown-item").forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref &&
      linkHref !== "#" &&
      currentPath.endsWith(linkHref.toLowerCase())
    ) {
      link.classList.add("active");

      const immediateDropdown = link.closest(".dropdown");
      if (immediateDropdown) {
        const mainToggle = immediateDropdown.querySelector(".dropdown-toggle");
        if (mainToggle) mainToggle.classList.add("active");
      }

      const innerSubMenu = link.closest(".dropdown-submenu");
      if (innerSubMenu) {
        const innerToggle = innerSubMenu.querySelector(".dropdown-toggle");
        if (innerToggle) innerToggle.classList.add("active");

        const outerDropdown = innerSubMenu.closest(".dropdown");
        if (outerDropdown) {
          const outerToggle = outerDropdown.querySelector(".dropdown-toggle");
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
  const elements = document.querySelectorAll(
    ".nav-item, .gallery-image, .card, .btn, .whatsapp-icon, .back-to-top"
  );
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
      title.style.textShadow = `0 0 ${
        Math.random() * 20 + 10
      }px rgba(255,255,255,0.8)`;
    }, 700);
  }

  const someBtn = document.getElementById("some-button");
  if (someBtn) {
    someBtn.addEventListener("click", function () {
      alert("Clicked!");
    });
  }

  // ✅ Submenu toggle fix
  const submenus = document.querySelectorAll(
    ".dropdown-submenu > .dropdown-toggle"
  );

  submenus.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // Stop Bootstrap from closing parent

      const submenu = this.nextElementSibling;

      if (submenu && submenu.classList.contains("dropdown-menu")) {
        // ✅ Close all submenus inside the same parent
        const parentMenu = this.closest(".dropdown-menu");
        parentMenu
          .querySelectorAll(".dropdown-menu.show")
          .forEach((openMenu) => {
            if (openMenu !== submenu) {
              openMenu.classList.remove("show");
            }
          });

        // ✅ Toggle only the clicked submenu
        submenu.classList.toggle("show");
      }
    });
  });

  // ✅ Close ALL submenus when main dropdown closes
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("hide.bs.dropdown", function () {
      this.querySelectorAll(".dropdown-menu.show").forEach((submenu) => {
        submenu.classList.remove("show");
      });
    });
  });

  // ✅ Assign and add event listener for popup
  popup = document.getElementById("popupModal");
  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  }
});