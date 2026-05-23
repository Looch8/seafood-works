# Seafood Works — Website

Static website for **Seafood Works**, Newton's family fishmonger since 1997.  
Located at Shop 17, 84 Gorge Road, Newton SA 5074.

Built with plain HTML5, CSS3 and minimal vanilla JavaScript — no build step required.

---

## Local Preview

### Option 1 — Python (recommended, built into macOS/Linux)

```bash
cd "/path/to/seafood works"
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

### Option 2 — VS Code Live Server extension

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html` and choose **Open with Live Server**.

---

## Mobile Testing on a Real Phone

To preview the site on your phone while developing locally:

1. Make sure your laptop and phone are on the **same Wi-Fi network**.
2. Start the local server: `python3 -m http.server 8080`
3. Find your laptop's local IP address:
   - **Mac:** System Settings → Wi-Fi → Details → IP Address (e.g. `192.168.1.42`)
   - **Windows:** Run `ipconfig` in Command Prompt, look for IPv4 Address
4. On your phone, open: `http://192.168.1.42:8080` (replace with your actual IP)

---

## File Structure

```
seafood works/
├── index.html          Home page
├── about.html          About page
├── products.html       Products page
├── contact.html        Contact & Find Us page
├── styles.css          Single shared stylesheet (mobile-first)
├── js/
│   └── nav.js          Hamburger menu, scroll-aware header, contact form
├── images/
│   ├── logo.jpg        Seafood Works logo
│   ├── shopfront.jpg   Exterior of the shop
│   ├── posing-with-tuna.jpeg   Team member with whole tuna (hero image)
│   ├── team-photo.jpg  Full team photo
│   ├── oyster-platter.jpg      Oyster display
│   ├── filleting-fish.jpeg     Filleting a tuna
│   ├── unloading-truck.jpg     Morning stock delivery
│   ├── walking-with-stock.jpeg Carrying stock
│   └── work-vehicle.jpg        Branded delivery van
├── .gitignore
└── README.md
```

---

## How to Update Content

### Change trading hours
Edit the `<ul class="hours-list">` blocks in **all four** HTML files, plus the `openingHoursSpecification` in the JSON-LD block in `index.html`.

### Add or change phone number
Search all files for `8365 6557` and replace every instance. The `tel:` links use `+61883656557` (international format without spaces).

### Add an email address
1. Open `js/nav.js`
2. Find the line: `'mailto:TODO@seafoodworks.com.au'`
3. Replace `TODO@seafoodworks.com.au` with the real address

### Update the GitHub Pages URL
Search all files for `TODO-GITHUB-PAGES-URL` and replace with your actual URL (e.g. `https://yourname.github.io/seafood-works`).

### Replace product placeholder images
On the products page, categories without real photos use emoji placeholders. Replace the `<div class="cat-img-placeholder">` blocks with `<img>` tags pointing to real photos.

### Add new photos to images/
Drop any `.jpg`, `.jpeg`, `.png`, or `.webp` file into the `images/` folder, then reference it in HTML as `src="images/your-file.jpg"`.

---

## GitHub Pages Deployment

### Step 1 — Create a GitHub repository

**If you have the GitHub CLI installed (`gh`):**
```bash
gh repo create seafood-works --public --source=. --remote=origin --push
```

**Otherwise, via the web:**
1. Go to https://github.com/new
2. Name the repo `seafood-works` (or similar)
3. Set it to **Public**
4. Do **not** initialise with README (you already have one)
5. Click **Create repository**
6. Then run these commands (replace `YOUR_USERNAME`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/seafood-works.git
git branch -M main
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

### Step 3 — Wait ~2 minutes, then visit your live site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/seafood-works/
```

GitHub will show you the exact URL in the Pages settings once it's deployed.

### Step 4 — Update your URLs

Once you have the live URL:
1. Search all HTML files for `TODO-GITHUB-PAGES-URL`
2. Replace with your actual URL (e.g. `https://yourname.github.io/seafood-works`)
3. Commit and push the change

---

## Making Updates After Launch

```bash
# Make your changes to the HTML/CSS files, then:
git add index.html about.html products.html contact.html styles.css
# (add whichever files you changed)
git commit -m "Update trading hours"
git push
```

GitHub Pages will redeploy automatically within ~2 minutes.

---

## TODOs Before Launch

- [ ] **Email address** — update `TODO@seafoodworks.com.au` in `js/nav.js`
- [ ] **Live URL** — replace `TODO-GITHUB-PAGES-URL` in all HTML files
- [ ] **Public holiday hours** — add a note if hours differ at Christmas/Easter
- [ ] **Product photos** — replace the emoji placeholder cards on `products.html` with real shellfish/specialty photos
- [ ] **Favicon** — currently uses `logo.jpg`; for best results create a square `.ico` or `.png` favicon (e.g. via [favicon.io](https://favicon.io)) and update the `<link rel="icon">` in each HTML file

---

## Breakpoints

| Breakpoint | Behaviour |
|---|---|
| < 768px | Mobile — single column, hamburger menu, sticky call bar |
| 768px+ | Tablet — 2-column grids, no sticky call bar |
| 1024px+ | Desktop — horizontal nav, 3-column grids |
| 1280px+ | Large desktop — wider padding, 4-column footer |
