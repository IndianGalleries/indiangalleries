/* Indian Galleries – Blog behaviour (vanilla JS, no dependencies).
   Also supplies the few header/footer behaviours that commonheaderfooter.js
   normally provides, because blog pages ship the header/footer pre-rendered. */
(function () {
  "use strict";

  /* ----- globals used by inline handlers in footer.html ----- */
  window.scrollToTop = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
  window.openWhatsApp = function () {
    var msg = "Hello! I'm interested in your products.";
    window.open("https://wa.me/+919997515438?text=" + encodeURIComponent(msg), "_blank");
  };

  document.addEventListener("DOMContentLoaded", function () {
    headerFooter();
    var page = document.querySelector("[data-igb-page]");
    if (!page) return;
    if (page.dataset.igbPage === "list") listing(page);
    if (page.dataset.igbPage === "article") article();
  });

  /* ----- header dropdown sub-menus + back-to-top (mirrors commonheaderfooter.js) ----- */
  function headerFooter() {
    document.querySelectorAll(".dropdown-submenu > .dropdown-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var sub = this.nextElementSibling;
        if (!sub || !sub.classList.contains("dropdown-menu")) return;
        this.closest(".dropdown-menu").querySelectorAll(".dropdown-menu.show").forEach(function (m) {
          if (m !== sub) m.classList.remove("show");
        });
        sub.classList.toggle("show");
      });
    });
    document.querySelectorAll(".dropdown").forEach(function (dd) {
      dd.addEventListener("hide.bs.dropdown", function () {
        this.querySelectorAll(".dropdown-menu.show").forEach(function (m) { m.classList.remove("show"); });
      });
    });
    var top = document.querySelector(".back-to-top");
    if (top) {
      window.addEventListener("scroll", function () {
        top.style.display = window.scrollY > 200 ? "flex" : "none";
      }, { passive: true });
    }
  }

  /* ----- listing: search, category filter, load more ----- */
  function listing(page) {
    var pageSize = parseInt(page.dataset.pageSize, 10) || 9;
    var q = document.getElementById("igb-q");
    var clear = document.querySelector(".igb-search__clear");
    var chips = Array.prototype.slice.call(document.querySelectorAll(".igb-chip"));
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-igb-grid] .igb-card"));
    var featured = document.querySelector("[data-igb-featured]");
    var empty = document.querySelector("[data-igb-empty]");
    var more = document.querySelector("[data-igb-more]");
    var status = document.querySelector("[data-igb-status]");
    var grid = document.querySelector("[data-igb-grid]");
    var state = { q: "", cat: "all", limit: pageSize };
    var firstRun = true;

    var params = new URLSearchParams(window.location.search);
    if (params.get("q")) { state.q = params.get("q"); q.value = state.q; }
    var wanted = params.get("category");
    if (wanted && chips.some(function (c) { return c.dataset.category === wanted && !c.disabled; })) state.cat = wanted;

    function matches(card) {
      if (state.cat !== "all" && card.dataset.category !== state.cat) return false;
      var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      return terms.every(function (t) { return card.dataset.search.indexOf(t) !== -1; });
    }

    function render() {
      var filtering = state.q.trim() !== "" || state.cat !== "all";
      var shown = 0, total = 0;
      cards.forEach(function (card) {
        var dup = card.hasAttribute("data-igb-dup");
        var ok = matches(card);
        card.classList.toggle("is-on", dup && filtering);
        if (dup && !filtering) { card.hidden = false; return; }
        if (ok) total++;
        var visible = ok && shown < state.limit;
        card.hidden = !visible;
        if (visible) shown++;
      });
      if (featured) featured.hidden = filtering;
      clear.hidden = state.q === "";
      chips.forEach(function (c) {
        var on = c.dataset.category === state.cat;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", on ? "true" : "false");
      });
      var none = filtering && total === 0;
      empty.hidden = !none;
      grid.hidden = none || (!filtering && total === 0);
      more.hidden = shown >= total;
      if (filtering) {
        status.textContent = total === 0 ? "" : total + (total === 1 ? " article found" : " articles found");
      } else {
        status.textContent = total === 0 ? "Our first article is featured above. More are on the way." : "";
      }
      if (!firstRun) syncUrl();
      firstRun = false;
    }

    function syncUrl() {
      var p = new URLSearchParams();
      if (state.q.trim()) p.set("q", state.q.trim());
      if (state.cat !== "all") p.set("category", state.cat);
      var s = p.toString();
      history.replaceState(null, "", window.location.pathname + (s ? "?" + s : ""));
    }

    function reset() { state.q = ""; state.cat = "all"; state.limit = pageSize; q.value = ""; render(); }

    var timer;
    q.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = q.value; state.limit = pageSize; render(); }, 120);
    });
    q.addEventListener("keydown", function (e) { if (e.key === "Escape") { q.value = ""; state.q = ""; render(); } });
    clear.addEventListener("click", function () { q.value = ""; state.q = ""; render(); q.focus(); });
    chips.forEach(function (c) {
      c.addEventListener("click", function () { state.cat = c.dataset.category; state.limit = pageSize; render(); });
    });
    more.querySelector("button").addEventListener("click", function () { state.limit += pageSize; render(); });
    empty.querySelector("[data-igb-reset]").addEventListener("click", reset);
    render();
  }

  /* ----- article: TOC state, scroll-spy, copy link ----- */
  function article() {
    var details = document.querySelector("[data-igb-toc]");
    if (details && window.matchMedia("(min-width: 992px)").matches) details.open = true;

    var links = Array.prototype.slice.call(document.querySelectorAll(".igb-toc__item a"));
    if (links.length && "IntersectionObserver" in window) {
      var map = {};
      links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.remove("is-current"); });
          var a = map[en.target.id];
          if (a) a.classList.add("is-current");
        });
      }, { rootMargin: "0px 0px -70% 0px" });
      Object.keys(map).forEach(function (id) {
        var h = document.getElementById(id);
        if (h) io.observe(h);
      });
    }

    var copy = document.querySelector("[data-igb-copy]");
    if (copy) {
      copy.addEventListener("click", function () {
        var label = copy.querySelector("span");
        var done = function () { label.textContent = "Link copied"; setTimeout(function () { label.textContent = "Copy link"; }, 2000); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(copy.dataset.igbCopy).then(done, function () { window.prompt("Copy this link:", copy.dataset.igbCopy); });
        } else {
          window.prompt("Copy this link:", copy.dataset.igbCopy);
        }
      });
    }
  }
})();
