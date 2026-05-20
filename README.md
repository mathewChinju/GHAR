# Chakki Ghar · Website Design Prototype

A static design prototype for the Chakki Ghar brand site. Built to be the visual foundation for the eventual Shopify build.

---

## What is in this folder

```
Chakki Ghar Claude Website Design/
├── index.html         The homepage
├── shop.html          Collection / shop page (filters, sort, product grid)
├── product.html       Single product detail page (gallery, options, subscribe toggle, accordion)
├── story.html         Brand story / about page (timeline, founders, values)
├── journal.html       Editorial journal index (recipes, farmer profiles, kitchen notes)
├── bundles.html       Build-your-own-box page (interactive 12-item builder)
├── subscribe.html     Subscription page (3 plans, how it works, FAQ)
├── locator.html       Store locator + B2B / wholesale enquiry form
├── assets/
│   ├── css/styles.css   The full design system (colours, type, layout, components)
│   ├── js/main.js       Interactions (menu, accordion, bundle builder, reveal on scroll)
│   └── images/          Place your product photography and brand assets here
└── README.md
```

## How to preview the site

1. Double-click `index.html` (or any other `.html` file). It will open in your browser.
2. Navigate around using the top nav, the cards, and the buttons.
3. The site is fully responsive. Resize the window or open on your phone to see how it adapts.

No build step, no terminal, no installation required. Open and view.

---

## How to send me your product images and information

You have three options. The easiest is the first.

### Option 1 · Drop files into this folder (recommended)

1. Open the folder `assets/images/` in Finder.
2. Drop your product photos directly into it.
3. Use clear filenames so I can wire them up. Example: `khapli-atta-1kg.jpg`, `bajra-flour-500g.jpg`, `farmer-mr-patil.jpg`, `hero-mill.jpg`.
4. Tell me in chat: *"Images are in `/assets/images/`, wire them up"* and I will replace the placeholders.

For product copy, drop a spreadsheet (CSV, XLSX or Google Sheet export) into the project folder. Use these columns:

| name | category | sku | price_inr | weight | short_description | long_description | ingredients | nutrition | origin | farmer_name | image_filename |
|------|----------|-----|-----------|--------|-------------------|------------------|-------------|-----------|---------|-------------|----------------|
| Khapli Wheat Atta | Flour | CG-KH-1 | 320 | 1kg | An old grain, brought home. | Khapli, also known as emmer wheat... | 100% Khapli wheat | See pack | Indore, MP | Suresh Patil | khapli-atta-1kg.jpg |

I will read the spreadsheet and populate the product cards, product detail pages, and collection page automatically.

### Option 2 · Paste in chat

Drag images directly into the Claude chat window, or paste product info as text. Useful for one or two items.

### Option 3 · Share a Drive / Dropbox / Google Photos link

Paste the link into the chat. I will fetch the assets and save them into `/assets/images/`.

---

## What to send for each product

To make a product page sing, I need:

- **Hero image** (1500x1875 px or larger, vertical 4:5 ratio works best)
- **2-3 detail shots** (the grain itself, the pack, the mill, lifestyle / in-use)
- **Product name** (English + optional Hindi/Devanagari)
- **Tagline** (one sentence, evocative)
- **Short description** (one paragraph, 40 to 60 words)
- **Long description** (3 to 5 paragraphs, for the accordion)
- **Origin** (region, state, farmer name if you have one)
- **Nutrition per 100g** (energy, protein, carbs, fibre, fat, iron, etc.)
- **Pack sizes & prices** (500g, 1kg, 2kg, 5kg, etc.)
- **Storage & shelf life** instructions

For the **brand pages** (homepage, story, journal), I also need:

- A **hero image** for each page (wide editorial shots work best, 16:9 or 21:9)
- **Founder portraits** (Aanya, Veer, or your actual names)
- A **mill / chakki shot**
- 2 to 3 **farmer portraits** with their names and origin states
- A **logo file** (SVG preferred, otherwise high-res PNG with transparent background)
- Your **brand colour preferences** if you want to deviate from the current palette

---

## Design system at a glance

If your designer or developer needs to know what is going on under the hood:

**Colours** (defined in `assets/css/styles.css` as CSS custom properties)
- Background cream: `#F4ECDD`
- Paper white: `#FBF7EE`
- Ink (primary text): `#261B12`
- Terracotta (primary accent): `#B84A2A`
- Turmeric (secondary accent): `#C28E2F`
- Indigo (rare strong accent): `#1E2A4A`

**Typography**
- Display: Fraunces (variable, opsz axis), from Google Fonts
- Body: Inter, from Google Fonts
- Devanagari accents: Tiro Devanagari Hindi, from Google Fonts

**Approach**
- Mobile-first responsive grid
- Editorial, image-led with generous whitespace
- Subtle paper grain over the entire page
- Reveal-on-scroll for headings and cards
- No frameworks. Just HTML, CSS and a small JS file.

---

## When you are ready to move to Shopify

This static prototype is designed to be a clean reference for any Shopify developer. The natural path is:

1. **Phase 1 (this prototype):** Show the brand vision, get internal alignment, share with partners.
2. **Phase 2 (theme build):** Hand this prototype to a Shopify theme developer. They can convert the design into a custom Liquid theme, or use it as a guide to heavily customise a starter like Dawn or Impact.
3. **Phase 3 (apps & integrations):** Add subscription (Recharge or Loop), bundles (Bundles by Shopify or Rebuy), shipping rules (Shiprocket / Delhivery for India), reviews (Loox), email (Mailmodo / Klaviyo).
4. **Phase 4 (optimise):** Add reviews, B2B portal proper, store locator with real geolocation, etc.

You do not need to know Shopify or any code to use this prototype. You just need to drop the right files into the right folder.

---

## Anything missing?

If you want a page or feature I have not built (gift cards, recipe single page, custom 404, account dashboard, checkout, search overlay, contact page), tell me what you need and I will build it.

If you want the existing pages to look or read differently (more bold, more minimal, different palette, different copy tone), tell me which page and what you want changed.

---

Made slow, in May 2026.
