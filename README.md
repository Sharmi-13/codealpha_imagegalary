# PICSEE — Responsive Visual Gallery

> "See the world differently."

PICSEE is a curated, responsive visual photography gallery with a modern editorial-inspired design. It is built entirely on native web standards (HTML5, CSS3, and Vanilla JavaScript) with no heavy framework dependencies.

---

## 🌟 Key Features

1.  **Immersive Lightbox**: Centered, aspect-ratio locked media frame featuring circular looping navigation, fade transition animations, and gesture swipes for mobile screen interactions.
2.  **State-driven Architecture**: Centralized application states in JavaScript (`currentCategory`, `filteredImages`, etc.) that cleanly trigger UI modifications without polling the DOM.
3.  **High-Performance ScrollSpy**: Dynamic navigation updates powered by the native `IntersectionObserver` API—highlighting active navbar anchors as sections scroll into view.
4.  **Bulletproof Accessibility (A11y)**:
    *   Keyboard navigation (`ArrowLeft` / `ArrowRight` to transition, `Escape` to close).
    *   Tab focus trapping inside the active lightbox dialog.
    *   Focus restoration (automatically returns focus back to the triggering thumbnail card upon closing).
    *   Descriptive image `alt` attributes and semantic HTML labels.
5.  **Offline Resiliency**: Automatically handles image loading issues, replacing failed pictures with beautifully structured inline SVG fallback error cards without disrupting layout alignments.
6.  **Responsive Fluidity**: Custom CSS Grid reflowing dynamically from 4-columns on 1080p desktop monitors down to 1-column layouts on mobile device displays (coupled with a slide-in navigation drawer).

---

## 🛠️ Quick Start

To run the project locally, open your command terminal in this directory and execute:

```bash
# Start local host server
npm start
```

This runs a local HTTP server utilizing `npx http-server`. Once initialized, open your browser to:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 📂 Project Structure

```text
photo galary/
├── index.html          # Semantic HTML markup and lightboxes skeleton
├── package.json        # NPM scripts configuration for local server
├── README.md           # Project documentation
├── css/
│   └── style.css       # Custom design system tokens, grids, and themes
└── js/
    └── app.js          # State handling, Unsplash dataset, and interaction logic
```
