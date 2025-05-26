class SpecialHeader extends HTMLElement {
  async connectedCallback() {
    // Load header HTML
    const response = await fetch("/Pages/header.html");
    const html = await response.text();
    this.innerHTML = html;

    // Wait for inner HTML to render before activating dropdowns
    this.activateSubmenus();

    // Re-initialize Bootstrap dropdowns
    this.initializeBootstrapDropdowns();
  }

  activateSubmenus() {
    const submenuLinks = this.querySelectorAll(".dropdown-submenu > a");
    submenuLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Close other submenus
        document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach(menu => {
          if (menu !== link.nextElementSibling) {
            menu.classList.remove("show");
          }
        });

        const submenu = link.nextElementSibling;
        if (submenu) {
          submenu.classList.toggle("show");
        }
      });
    });
    // Close all on outside click
    document.addEventListener("click", function () {
      document.querySelectorAll(".dropdown-submenu .dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
      });
    });
  }

  initializeBootstrapDropdowns() {
    // This is crucial when dropdowns are loaded via fetch
    const dropdownElements = this.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownElements.forEach(el => {
      new bootstrap.Dropdown(el); // Bootstrap 5 requires this
    });
  }
}

customElements.define('special-header', SpecialHeader);


class SpecialFooter extends HTMLElement {
  async connectedCallback() {
    // Load footer HTML from external file
    const response = await fetch("/Pages/footer.html");
    const html = await response.text();
    this.innerHTML = html;
  }
}

customElements.define('special-footer', SpecialFooter);
