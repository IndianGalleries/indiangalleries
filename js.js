{
  function updateFavicon() {    
    const favicon = document.getElementById("favicon");
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    favicon.href = isDark
      ? "Images/favicon-dark.png"
      : "Images/favicon-light.png";
  }
  updateFavicon();
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateFavicon);
}
{
    function openWhatsApp() {
      var phoneNumber = "8077155004";
      var message = "Hello! I'm interested in your products.";
      var whatsappUrl =
        "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(whatsappUrl, "_blank");
    }
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } 
}
{
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
}
