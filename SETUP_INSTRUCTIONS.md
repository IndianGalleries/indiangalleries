# Indian Galleries – Customer Feedback System
## Complete Setup & Deployment Guide

---

## Files in This Package

| File | Purpose |
|------|---------|
| `feedback.html` | Feedback page – upload to your website root |
| `feedback.css` | Styles for feedback page – upload to website root |
| `feedback.js` | Frontend logic – upload to website root |
| `google-apps-script.gs` | Backend script – paste into Google Apps Script |
| `SETUP_INSTRUCTIONS.md` | This document |

---

## STEP 1 — Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and sign in with your Indian Galleries Google account.
2. Click **Blank** to create a new spreadsheet.
3. Rename the spreadsheet to: **Indian Galleries Feedback**
4. Leave it open — the Apps Script will auto-create the header row on first submission.

---

## STEP 2 — Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**.
2. Delete all existing code in the editor.
3. Paste the entire contents of `google-apps-script.gs`.
4. Click **Save** (disk icon). Name the project **Indian Galleries Feedback API**.

### Deploy as a Web App

1. Click **Deploy → New Deployment**.
2. Click the gear icon next to "Select type" → choose **Web App**.
3. Fill in the settings:
   - **Description:** Indian Galleries Feedback API v1
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Click **Authorize access** and follow the Google sign-in prompts. Grant all requested permissions.
6. **Copy the Web App URL** — it looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`
7. Keep this URL safe — you will need it next.

---

## STEP 3 — Set Up Google reCAPTCHA v2

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin).
2. Click the **+** button to create a new site.
3. Fill in:
   - **Label:** Indian Galleries Feedback
   - **reCAPTCHA type:** reCAPTCHA v2 → "I'm not a robot" Checkbox
   - **Domains:** `indiangalleries.net` and `www.indiangalleries.net`
4. Click **Submit**.
5. You will receive two keys:
   - **Site Key** (public – used in HTML)
   - **Secret Key** (private – used in Apps Script)

---

## STEP 4 — Update Configuration Values

### In `feedback.html`

Find this line and replace `YOUR_RECAPTCHA_SITE_KEY`:

```html
<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
```

Replace with your actual Site Key, e.g.:
```html
<div class="g-recaptcha" data-sitekey="6LdABC123XYZabc..."></div>
```

### In `feedback.js`

Replace the two placeholder values at the top of the file:

```js
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review";
```

- **APPS_SCRIPT_URL** → paste the Web App URL from Step 2
- **GOOGLE_REVIEW_URL** → your Google Business review link
  - Find it at [Google Business Profile](https://business.google.com) → Get more reviews → copy the short URL

### In `google-apps-script.gs`

Replace the secret key placeholder:

```js
const RECAPTCHA_SECRET = "YOUR_RECAPTCHA_SECRET_KEY";
```

Replace with your reCAPTCHA Secret Key from Step 3.

After making this change:
1. Save the script.
2. Go to **Deploy → Manage Deployments**.
3. Click the pencil icon on your deployment.
4. Set **Version** to **New version**.
5. Click **Deploy** to update.

---

## STEP 5 — Upload Files to Your Website

Upload these three files to your website root (same folder as `index.html`, `style.css`, etc.):

- `feedback.html`
- `feedback.css`
- `feedback.js`

Your feedback page will be live at:
**https://www.indiangalleries.net/feedback.html**

---

## STEP 6 — Add a Link to the Feedback Page

Add a link on your existing pages so customers can find the feedback form.

**In `footer.html`**, add inside the Navigation section:

```html
<li>
  <a href="feedback.html">
    <i class="fa-solid fa-angle-right me-2 text-maroon"></i>Share Feedback
  </a>
</li>
```

**Optionally in `header.html`**, add inside the Contact dropdown:

```html
<li><a class="dropdown-item" href="feedback.html">Feedback</a></li>
```

---

## STEP 7 — Test the System

1. Open **https://www.indiangalleries.net/feedback.html** in your browser.
2. Fill in the form completely.
3. Complete the reCAPTCHA checkbox.
4. Click **Submit Feedback**.
5. Check your Google Sheet — a new row should appear within a few seconds.

### Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| No data in Sheet | Wrong Apps Script URL | Double-check `APPS_SCRIPT_URL` in feedback.js |
| reCAPTCHA not showing | Wrong site key | Check `data-sitekey` in feedback.html |
| Form submits but no row | Apps Script not redeployed after secret key change | Redeploy with new version |
| "CAPTCHA verification failed" in logs | Wrong secret key | Check `RECAPTCHA_SECRET` in .gs file |

---

## Admin Access

### Viewing Responses

1. Open Google Sheets on your Google account.
2. Open **Indian Galleries Feedback**.
3. All submissions appear as rows under the header.

### Filtering Responses

- Click **Data → Create a filter** to filter by rating, date, or status.
- The **Status** column (last column) is for your team to track reviewed feedback.

### Adding Team Members

1. In the Sheet, click **Share** (top right).
2. Enter the Gmail address of your team member.
3. Set their permission to **Viewer** or **Editor** as needed.

### Exporting Data

- Go to **File → Download → Microsoft Excel (.xlsx)** to export all feedback.

---

## Security Notes

- **Customer data never passes through your website server** — it goes directly to Google's infrastructure.
- **The Google Sheet is private** — only accounts you share it with can access it.
- **reCAPTCHA** blocks automated bot submissions.
- **Input sanitization** removes HTML tags and script injection attempts before writing to the Sheet.
- **Rejected requests** (failed captcha, invalid data) are logged to a separate "Rejected Submissions" sheet tab.
- The Apps Script runs under your Google account's permissions — Google manages all security and uptime.

---

## Future Expansion Reference

When ready to expand, these are the recommended next steps:

1. **Email notifications** — Add `GmailApp.sendEmail()` in the Apps Script to email the team on new submissions.
2. **Admin dashboard** — Create a web app using Google Data Studio connected to the Sheet.
3. **Analytics** — Use Google Sheets built-in charts or export to Looker Studio.
4. **Photo uploads** — Add a Google Form for photo collection linked to Google Drive.
5. **WhatsApp notifications** — Integrate Twilio or WhatsApp Business API triggered from Apps Script.
6. **Product-specific tracking** — Add a "Product Category" dropdown field to the form.

---

*System designed and built for Indian Galleries — indiangalleries.net*
