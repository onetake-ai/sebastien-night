# sebastien-night

Static HTML site for www.sebastiennight.com. Hosted on GitHub Pages with a CNAME. No build step, no framework, no templating engine.

## Structure

- 11 main HTML pages at the root: index, bio, resume, press-kit, in-the-press, works, ventures, philanthropy, speaking, mentoring, archive
- Redirect stubs under /telegram/ and /images/*/
- /css/styles.css: shared stylesheet (all pages link to it)
- /js/script.js: nav toggle, active page highlighting, email obfuscation, press filtering
- /js/loader.js: Plausible analytics + Weglot translation init (loaded in head of every page)

## Header and footer snippets

Because there is no build step or templating, the header nav and footer are duplicated across all pages. The canonical versions live in `/snippets/header.html` and `/snippets/footer.html`.

**When adding or changing a nav link or footer link:**
1. Update `/snippets/header.html` and/or `/snippets/footer.html`
2. Update ALL of these pages to match:

index.html, bio.html, resume.html, press-kit.html, in-the-press.html, works.html, ventures.html, philanthropy.html, speaking.html, mentoring.html, archive.html

**When creating a new static page**, read the snippets first and copy the header/footer from them.

## Page structure conventions

Every page follows this pattern:

1. `<!DOCTYPE html>` + `<html lang="en">`
2. `<head>`: charset, viewport, description, author, title, Montserrat font from fonts.bunny.net, `css/styles.css`, hreflang tags (en + fr), `js/loader.js`, page-specific `<style>` block
3. `<body>`: `<header>` (nav), `<main>` (content), `<footer>`, `<script src="js/script.js">`

## CSS approach

- Shared styles in /css/styles.css
- Page-specific styles in a `<style>` block in each page's `<head>`
- Use the CSS custom properties defined in :root (--golden-grass, --bleached-cedar, --alabaster, --cabaret, --cold-turkey, --white)
- Prefix page-specific class names to avoid collisions (e.g. mentoring-split, mentoring-perks)

## Brand

- Font: Montserrat (loaded from fonts.bunny.net, not Google Fonts)
- Primary accent: --golden-grass (#E3AE28)
- Dark background: --bleached-cedar (#241826)
- Hover/active: --cabaret (#D33E5D)
- Light background: --alabaster (#F8F7F7)
- Muted text: --cold-turkey (#D1B0B3)

## Third-party integrations

- **Plausible Analytics** and **Weglot translation** are loaded via /js/loader.js. Every page must include `<script src="js/loader.js"></script>` in the head.
- **Weglot** provides French translation (fr.sebastiennight.com). Pages use `hreflang` alternate links.
- Active page highlighting is automatic via /js/script.js (compares pathname to link href, adds `.active` class).

## Mentoring page

The mentoring.html page embeds Telegram post previews via `https://telegram.org/js/telegram-widget.js?24`. Posts are loaded from the `POST_IDS` array defined in the inline script at the bottom of `<body>` — edit that array to change which posts are shown and in which order.
