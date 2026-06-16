/* =============================================
   Indian Galleries – feedback.js
   Handles: star ratings, NPS scale,
   validation, reCAPTCHA check, form submission
   to Google Apps Script endpoint.
   ============================================= */

// ── CONFIG ─────────────────────────────────────
// Replace with your deployed Apps Script Web App URL after setup
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIntxjdwUHFQn-mHpqsMZfOXbGw-PtE7TOmeNjrNNTnX4wyxgpP9IcrfEia8Ejm25Qyw/exec";

// Replace with your Google Business review link
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
  // Update Google review URL in DOM
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
      // Hover highlight
      star.addEventListener("mouseenter", () => {
        const val = parseInt(star.dataset.value);
        highlightStars(stars, val, "hovered");
      });

      // Hover reset
      star.addEventListener("mouseleave", () => {
        clearStarClass(stars, "hovered");
        highlightStars(stars, ratings[field], "selected");
      });

      // Click
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
    .replace(/[<>]/g, "")
    .trim()
    .substring(0, 2000);
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

  // Mobile
  const mobile = document.getElementById("mobileNumber");
  const mobilePattern = /^[6-9]\d{9}$/;
  const cleanMobile = mobile.value.replace(/\D/g, "");
  if (!mobilePattern.test(cleanMobile)) {
    mobile.classList.add("is-invalid");
    valid = false;
  } else {
    mobile.classList.remove("is-invalid");
  }

  // Email (optional but validate format if filled)
  const email = document.getElementById("emailAddress");
  if (email.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.remove("is-invalid");
    }
  }

  // Star ratings
  const ratingFields = ["productQuality", "packaging", "delivery", "overall"];
  ratingFields.forEach((field) => {
    const group = document.getElementById(field + "Rating") ||
      document.querySelector(`[data-field="${field}"]`);
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

  // NPS
  if (npsScore === null) {
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
  // Hide previous errors
  const formError = document.getElementById("formError");
  formError.classList.add("d-none");

  if (!validateForm()) {
    formError.textContent = "Please fill in all required fields correctly.";
    formError.classList.remove("d-none");
    formError.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // reCAPTCHA token
  let recaptchaToken = "";
  if (typeof grecaptcha !== "undefined") {
    recaptchaToken = grecaptcha.getResponse();
  }

  // Collect data
  const payload = {
    fullName: sanitize(document.getElementById("fullName").value),
    mobileNumber: sanitize(document.getElementById("mobileNumber").value.replace(/\D/g, "")),
    emailAddress: sanitize(document.getElementById("emailAddress").value),
    orderId: sanitize(document.getElementById("orderId").value),
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

  // UI: loading state
  document.getElementById("submitText").classList.add("d-none");
  document.getElementById("submitSpinner").classList.remove("d-none");
  document.getElementById("submitBtn").disabled = true;

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Google Apps Script requires this
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // no-cors means we can't read response — show success anyway
    showSuccess(payload.overall);
  } catch (error) {
    console.error("Submission error:", error);
    formError.textContent =
      "There was an error submitting your feedback. Please try again or contact us directly.";
    formError.classList.remove("d-none");

    // Restore button
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

  // Show Google review prompt only for high ratings
  if (overallRating >= 4) {
    document.getElementById("googleReviewPrompt").classList.remove("d-none");
  }

  successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ── RESET ───────────────────────────────────────
function resetForm() {
  // Reset ratings
  Object.keys(ratings).forEach((k) => (ratings[k] = 0));
  npsScore = null;

  // Clear all inputs
  ["fullName","mobileNumber","emailAddress","orderId",
   "productQuality","packaging","delivery","overall","recommendScore"
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  document.getElementById("positiveFeedback").value = "";
  document.getElementById("improvementSuggestions").value = "";
  document.getElementById("permissionGranted").checked = false;

  // Reset star visuals
  document.querySelectorAll(".star-rating span").forEach((s) => {
    s.classList.remove("selected", "hovered");
  });

  // Reset NPS buttons
  document.querySelectorAll(".nps-btn").forEach((b) => b.classList.remove("selected"));

  // Reset reCAPTCHA
  if (typeof grecaptcha !== "undefined") grecaptcha.reset();

  // Remove validation classes
  document.querySelectorAll(".is-invalid").forEach((el) => el.classList.remove("is-invalid"));

  // Restore form, hide success
  document.getElementById("feedbackFormWrapper").classList.remove("d-none");
  document.getElementById("successMessage").classList.add("d-none");
  document.getElementById("googleReviewPrompt").classList.add("d-none");

  // Restore button
  document.getElementById("submitText").classList.remove("d-none");
  document.getElementById("submitSpinner").classList.add("d-none");
  document.getElementById("submitBtn").disabled = false;
}
