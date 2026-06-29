# Search Engine Optimization (SEO) Architecture

A guide detailing SEO configurations, meta structures, and JSON-LD schemas used in the portfolio.

---

## 🔍 1. Metadata Schema Configurations

Metadata is configured using static exports inside:
📄 `src/app/layout.tsx`

This ensures that the Next.js compilation engine automatically populates header attributes:
```typescript
export const metadata: Metadata = {
  title: "Ankur Singh | Cyber Security & Networking Portfolio",
  description: "B.Tech Computer Science student specializing in Cyber Security, Networking, System Administration, and Secure Web Operations...",
  // OpenGraph & Twitter tags
}
```

---

## 👥 2. Google Rich Search Results (JSON-LD)

To help Google understand the nature of the page, the layout injects a Person structured data block:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ankur Singh",
  "jobTitle": "Cyber Security & Networking Developer",
  "description": "B.Tech Computer Science student specializing in Cyber Security...",
  "url": "https://ankursingh.dev"
}
</script>
```
Google scans this schema to create direct rich card snippets on search pages.

---

## 🤖 3. Robot Policies & Sitemaps

To complete optimization, create the following static assets inside the `public/` folder:

### 📄 `public/robots.txt`
```text
User-agent: *
Allow: /

Sitemap: https://ankursingh.dev/sitemap.xml
```

### 📄 `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ankursingh.dev/</loc>
    <lastmod>2026-06-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```
*(Remember to replace `https://ankursingh.dev/` with your actual hosting domain upon deployment)*
