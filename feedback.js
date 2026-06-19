/* =============================================
   Indian Galleries – feedback.js
   Handles: star ratings, NPS scale,
   validation, reCAPTCHA check, form submission
   to Google Apps Script endpoint.
   ============================================= */

// ── CONFIG ─────────────────────────────────────
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIntxjdwUHFQn-mHpqsMZfOXbGw-PtE7TOmeNjrNNTnX4wyxgpP9IcrfEia8Ejm25Qyw/exec";
const GOOGLE_REVIEW_URL = "https://www.google.com";

// ── STATE ──────────────────────────────────────
const ratings = {
  productQuality: 0,
  packaging: 0,
  delivery: 0,
  overall: 0,
};
let npsScore = null;

// ── INIT ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initStarRatings();
  initNPS();
  const reviewBtn = document.querySelector(".btn-google-review");
  if (reviewBtn) reviewBtn.href = GOOGLE_REVIEW_URL;
});

// ── STAR RATINGS ───────────────────────────────
function initStarRatings() {
  const groups = document.querySelectorAll(".star-rating");
  groups.forEach((group) => {
    const field = group.dataset.field;
    const stars = group.querySelectorAll("span");

    stars.forEach((star) => {
      star.addEventListener("mouseenter", () => {
        const val = parseInt(star.dataset.value);
        highlightStars(stars, val, "hovered");
      });

      star.addEventListener("mouseleave", () => {
        clearStarClass(stars, "hovered");
        highlightStars(stars, ratings[field], "selected");
      });

      star.addEventListener("click", () => {
        const val = parseInt(star.dataset.value);
        ratings[field] = val;
        document.getElementById(field).value = val;
        clearStarClass(stars, "selected");
        highlightStars(stars, val, "selected");

        // Hide error
        const err = group.nextElementSibling?.nextElementSibling;
        if (err && err.classList.contains("rating-error")) {
          err.classList.add("d-none");
        }
      });
    });
  });
}

function highlightStars(stars, upTo, cls) {
  stars.forEach((s) => {
    const v = parseInt(s.dataset.value);
    if (v <= upTo) s.classList.add(cls);
    else s.classList.remove(cls);
  });
}

function clearStarClass(stars, cls) {
  stars.forEach((s) => s.classList.remove(cls));
}

// ── NPS SCALE ──────────────────────────────────
function initNPS() {
  const buttons = document.querySelectorAll(".nps-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      npsScore = parseInt(btn.dataset.value);
      document.getElementById("recommendScore").value = npsScore;
      document.getElementById("npsError").classList.add("d-none");
    });
  });
}

// ── SANITIZE ────────────────────────────────────
function sanitize(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .trim()
    .substring(0, 2000);
}

// ── MOBILE CLEANER (Handles +91, 91, 10 digits) ─────────────────────────────
function cleanMobileNumber(value) {
  let clean = value.replace(/\D/g, "");
  if (clean.startsWith("91") && clean.length === 12) {
    clean = clean.substring(2);
  }
  return clean;
}

// ── VALIDATE ────────────────────────────────────
function validateForm() {
  let valid = true;

  // Name
  const name = document.getElementById("fullName");
  if (!name.value.trim() || name.value.trim().length < 2) {
    name.classList.add("is-invalid");
    valid = false;
  } else {
    name.classList.remove("is-invalid");
  }

  // Mobile (Improved: supports +91, 91, 10 digits)
  const mobile = document.getElementById("mobileNumber");
  const cleanMobile = cleanMobileNumber(mobile.value);
  const mobilePattern = /^[6-9]\d{9}$/;
  if (!mobilePattern.test(cleanMobile)) {
    mobile.classList.add("is-invalid");
    valid = false;
  } else {
    mobile.classList.remove("is-invalid");
  }

  // Email (optional)
  const email = document.getElementById("emailAddress");
  if (email.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.remove("is-invalid");
    }
  } else {
    email.classList.remove("is-invalid");
  }

  // Invoice ID (Mandatory)
  const invoice = document.getElementById("invoiceId");
  if (!invoice.value.trim() || invoice.value.trim().length < 2) {
    invoice.classList.add("is-invalid");
    valid = false;
  } else {
    invoice.classList.remove("is-invalid");
  }

  // Star Ratings
  const ratingFields = ["productQuality", "packaging", "delivery", "overall"];
  ratingFields.forEach((field) => {
    const group = document.querySelector(`[data-field="${field}"]`);
    const errEl = group?.nextElementSibling?.nextElementSibling;
    if (!ratings[field]) {
      if (errEl && errEl.classList.contains("rating-error")) {
        errEl.classList.remove("d-none");
      }
      valid = false;
    } else {
      if (errEl && errEl.classList.contains("rating-error")) {
        errEl.classList.add("d-none");
      }
    }
  });

  // NPS Score
  if (npsScore === null || npsScore < 0 || npsScore > 10) {
    document.getElementById("npsError").classList.remove("d-none");
    valid = false;
  }

  // reCAPTCHA
  if (typeof grecaptcha !== "undefined") {
    const token = grecaptcha.getResponse();
    if (!token) {
      document.getElementById("recaptchaError").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("recaptchaError").classList.add("d-none");
    }
  }

  return valid;
}

// ── SUBMIT ──────────────────────────────────────
async function submitFeedback() {
  const formError = document.getElementById("formError");
  formError.classList.add("d-none");

  if (!validateForm()) {
    formError.textContent = "Please fill in all required fields correctly.";
    formError.classList.remove("d-none");
    formError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  let recaptchaToken = "";
  if (typeof grecaptcha !== "undefined") {
    recaptchaToken = grecaptcha.getResponse();
  }

  const payload = {
    fullName: sanitize(document.getElementById("fullName").value),
    mobileNumber: cleanMobileNumber(document.getElementById("mobileNumber").value),
    emailAddress: sanitize(document.getElementById("emailAddress").value),
    invoiceId: sanitize(document.getElementById("invoiceId").value),
    productQuality: ratings.productQuality,
    packaging: ratings.packaging,
    delivery: ratings.delivery,
    overall: ratings.overall,
    recommendScore: npsScore,
    positiveFeedback: sanitize(document.getElementById("positiveFeedback").value),
    improvementSuggestions: sanitize(document.getElementById("improvementSuggestions").value),
    permissionGranted: document.getElementById("permissionGranted").checked ? "Yes" : "No",
    recaptchaToken: recaptchaToken,
    userAgent: navigator.userAgent.substring(0, 250),
  };

  // Loading state
  document.getElementById("submitText").classList.add("d-none");
  document.getElementById("submitSpinner").classList.remove("d-none");
  document.getElementById("submitBtn").disabled = true;

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    showSuccess(payload.overall);
  } catch (error) {
    console.error("Submission error:", error);
    formError.textContent = "There was an error submitting your feedback. Please try again or contact us directly.";
    formError.classList.remove("d-none");

    document.getElementById("submitText").classList.remove("d-none");
    document.getElementById("submitSpinner").classList.add("d-none");
    document.getElementById("submitBtn").disabled = false;
  }
}

// ── SUCCESS STATE ───────────────────────────────
function showSuccess(overallRating) {
  document.getElementById("feedbackFormWrapper").classList.add("d-none");
  const successMsg = document.getElementById("successMessage");
  successMsg.classList.remove("d-none");

  if (overallRating >= 4) {
    document.getElementById("googleReviewPrompt").classList.remove("d-none");
  }

  successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ── REAL-TIME VALIDATION ────────────────────────
const mobileInput = document.getElementById("mobileNumber");
mobileInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, '');
  const clean = cleanMobileNumber(this.value);
  if (/^[6-9]\d{9}$/.test(clean)) {
    this.classList.remove("is-invalid");
  }
});
mobileInput.addEventListener("blur", function () {
  const clean = cleanMobileNumber(this.value);
  if (!/^[6-9]\d{9}$/.test(clean)) {
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
  }
});

const fullNameInput = document.getElementById("fullName");
fullNameInput.addEventListener("input", function () {
  if (this.value.trim().length >= 2) this.classList.remove("is-invalid");
});
fullNameInput.addEventListener("blur", function () {
  if (this.value.trim().length < 2) this.classList.add("is-invalid");
  else this.classList.remove("is-invalid");
});

const emailInput = document.getElementById("emailAddress");
emailInput.addEventListener("input", function () {
  this.classList.remove("is-invalid");
});
emailInput.addEventListener("blur", function () {
  const email = this.value.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
  }
});

const invoiceInput = document.getElementById("invoiceId");
invoiceInput.addEventListener("input", function () {
  if (this.value.trim().length >= 2) this.classList.remove("is-invalid");
});
invoiceInput.addEventListener("blur", function () {
  if (this.value.trim().length < 2) this.classList.add("is-invalid");
  else this.classList.remove("is-invalid");
});

// ── RESET ───────────────────────────────────────
function resetForm() {
  Object.keys(ratings).forEach((k) => (ratings[k] = 0));
  npsScore = null;

  ["fullName", "mobileNumber", "emailAddress", "invoiceId",
   "productQuality", "packaging", "delivery", "overall", "recommendScore"
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  document.getElementById("positiveFeedback").value = "";
  document.getElementById("improvementSuggestions").value = "";
  document.getElementById("permissionGranted").checked = false;

  // Reset stars
  document.querySelectorAll(".star-rating span").forEach((s) => {
    s.classList.remove("selected", "hovered");
  });

  // Reset NPS
  document.querySelectorAll(".nps-btn").forEach((b) => b.classList.remove("selected"));

  // Reset reCAPTCHA
  if (typeof grecaptcha !== "undefined") grecaptcha.reset();

  // Clear all validation styles
  document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));
  document.querySelectorAll(".rating-error").forEach((el) => el.classList.add("d-none"));
  document.getElementById("npsError").classList.add("d-none");
  document.getElementById("recaptchaError").classList.add("d-none");

  // Restore UI
  document.getElementById("feedbackFormWrapper").classList.remove("d-none");
  document.getElementById("successMessage").classList.add("d-none");
  document.getElementById("googleReviewPrompt").classList.add("d-none");

  document.getElementById("submitText").classList.remove("d-none");
  document.getElementById("submitSpinner").classList.add("d-none");
  document.getElementById("submitBtn").disabled = false;
}