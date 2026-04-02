# Voyagrid - Astro Travel Landing Page

Premium travel landing page starter in **Astro**, built in English and optimized for clean UI/UX, SEO, and mobile responsiveness.

## Included

- Modern homepage with travel visuals
- Responsive **hamburger menu** that opens a popup overlay on mobile
- Reusable layout and components
- SEO-ready metadata and sitemap integration
- Simple content system using `src/content/guides/*.md`
- Dynamic guide pages generated automatically from markdown files

## Start the project

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Important setup

Open `astro.config.mjs` and replace:

```js
site: 'https://example.com'
```

with your real domain so the canonical URLs and sitemap are correct.

## How to add more travel content

1. Duplicate any file inside `src/content/guides/`
2. Update the frontmatter fields:
   - `title`
   - `excerpt`
   - `location`
   - `duration`
   - `image`
   - `imageAlt`
   - `category`
   - `publishDate`
3. Edit the markdown body content
4. Save the file

Astro will automatically create the new route in `/guides/your-slug/`

## Suggested next improvements

- Connect a CMS later if you want non-technical editing
- Replace Unsplash image URLs with your own optimized assets
- Add filters/search for destination categories
- Add booking/contact form integration
