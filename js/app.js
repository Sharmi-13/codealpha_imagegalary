/* ==========================================================================
   PICSEE CORE APPLICATION LOGIC
   ========================================================================== */

// 1. GALLERY DATASET (20 Professional Curated Images)
const GALLERY_DATA = [
  {
    id: 1,
    title: "Sossusvlei Dunes",
    category: "Nature",
    photographer: "Wolfgang Hasselmann",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=90",
    alt: "Towering orange sand dunes meeting a dry clay pan in Sossusvlei",
    description: "An editorial view of Namibia's famous red dunes, showcasing the sharp contrast of shadow and light at sunrise."
  },
  {
    id: 2,
    title: "Emerald Lake Valley",
    category: "Nature",
    photographer: "Kalen Emsley",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1800&q=90",
    alt: "Mist-covered evergreen forest reflecting in a pristine valley lake",
    description: "A peaceful alpine scene of dense forests shrouded in clouds, reflecting off a calm, mirror-like lake surface."
  },
  {
    id: 3,
    title: "Golden peaks Fitz Roy",
    category: "Nature",
    photographer: "Sergey Pesterev",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=90",
    alt: "Snowcapped mountain peaks illuminated in golden hour light",
    description: "The rugged spires of Mount Fitz Roy in Patagonia catching the first rays of morning sun."
  },
  {
    id: 4,
    title: "Mist and Pines",
    category: "Nature",
    photographer: "Dave Hoefler",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1800&q=90",
    alt: "Ethereal fog drifting through a woodland pine forest",
    description: "A soft, quiet capture of fog weaving through towering pine trees in the early hours of a Pacific Northwest morning."
  },
  {
    id: 5,
    title: "Concrete Symmetry",
    category: "Architecture",
    photographer: "Joel Filipe",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
    alt: "Abstract low angle shot of modernist white concrete curves and windows",
    description: "An analysis of lines, curves, and patterns in modern urban developments, emphasizing clean architectural geometric forms."
  },
  {
    id: 6,
    title: "Spiral Ascent",
    category: "Architecture",
    photographer: "Bruno Santos",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=90",
    alt: "A minimalist white spiral staircase winding upwards to a skylight",
    description: "Looking directly up a sleek, architectural spiral staircase, highlighting repeating shapes and leading lines."
  },
  {
    id: 7,
    title: "Urban Reflections",
    category: "Architecture",
    photographer: "Simone Hutsch",
    image: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&w=1800&q=90",
    alt: "Glossy glass skyscraper reflecting a bright blue sky and thin clouds",
    description: "A graphic, colorful take on skyscraper facades, focusing on geometric repetition and reflections."
  },
  {
    id: 8,
    title: "Bauhaus Lines",
    category: "Architecture",
    photographer: "Samuel Regan-Asante",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
    alt: "Exterior corner of a building highlighting concrete blocks and shadow grids",
    description: "A study of Brutalist concrete modules and sharp, striking shadows under harsh afternoon sun."
  },
  {
    id: 9,
    title: "Lost in Thought",
    category: "People",
    photographer: "Jurica Koletić",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=90",
    alt: "A close-up portrait of a thoughtful man looking out towards the sea",
    description: "A candid portrait capturing introspection, framed by soft natural light and a sea-breeze aesthetic."
  },
  {
    id: 10,
    title: "Artisan Hands",
    category: "People",
    photographer: "Clay Banks",
    image: "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&w=1800&q=90",
    alt: "Close-up of a potter's hands shaping spinning wet clay on a wheel",
    description: "Capturing the tactile, sensory beauty of craftsmanship, focusing on precision, motion, and touch."
  },
  {
    id: 11,
    title: "Joyful Contrast",
    category: "People",
    photographer: "Gift Habeshaw",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1800&q=90",
    alt: "A vibrant portrait of a woman laughing with natural shadows across her face",
    description: "A spirited, warm, and highly visual editorial portrait celebrating laughter, light, and texture."
  },
  {
    id: 12,
    title: "Silent Connection",
    category: "People",
    photographer: "Radu Florin",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1800&q=90",
    alt: "Two silhouettes deep in conversation against a warm sunset horizon",
    description: "An expressive silhouette portrait of two friends chatting along a coastal overlook during dusk."
  },
  {
    id: 13,
    title: "Kyoto Lanterns",
    category: "Travel",
    photographer: "Sora Sagano",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=90",
    alt: "Softly glowing red and white lanterns illuminating a historic Kyoto street",
    description: "A night perspective of Kyoto's traditional wooden architecture and warmly lit lanterns."
  },
  {
    id: 14,
    title: "Coastline Journey",
    category: "Travel",
    photographer: "Willian Justen de Vasconcellos",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=90",
    alt: "An expansive view of seaside cliffs dropping into deep blue waters in Amalfi",
    description: "A classic Mediterranean landscape highlighting sun-bleached rocks, coastal winding roads, and azure water."
  },
  {
    id: 15,
    title: "Sahara Caravan",
    category: "Travel",
    photographer: "Keith Hardy",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1800&q=90",
    alt: "A caravan of camels marching across sand dunes under an orange desert sky",
    description: "Exploring the silence and vast scale of the Moroccan Sahara during late sunset."
  },
  {
    id: 16,
    title: "Arctic Cabins",
    category: "Travel",
    photographer: "Roberto Nickson",
    image: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1504893524553-ac55fce698be?auto=format&fit=crop&w=1800&q=90",
    alt: "Rustic red wooden cabins surrounded by snowy mountains in Norway's Lofoten",
    description: "A dramatic winter scene of traditional fishermen's cabins nestled along Arctic shorelines."
  },
  {
    id: 17,
    title: "Sand Ripples",
    category: "Abstract",
    photographer: "Ricardo Gomez Angel",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1800&q=90",
    alt: "Minimalist black and white wavy ripples in desert sand",
    description: "A highly graphic detail shot isolating wind patterns on sand, transforming nature into abstract lines."
  },
  {
    id: 18,
    title: "Liquid Marbling",
    category: "Abstract",
    photographer: "Joel Filipe",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1800&q=90",
    alt: "Pastel hues of blue, gold, and pink blending in a fluid acrylic wave",
    description: "An elegant capture of fluid dynamics, where paint colors merge to form soft, wave-like currents."
  },
  {
    id: 19,
    title: "Monochrome Shadow",
    category: "Abstract",
    photographer: "Pierre chatel inocente",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
    alt: "Hard architectural shadows slicing across a white wall creating geometric blocks",
    description: "A high-contrast monochrome design study on negative space and clean, geometric shadow castings."
  },
  {
    id: 20,
    title: "Ethereal Smoke",
    category: "Abstract",
    photographer: "Paweł Czerwiński",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
    largeImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1800&q=90",
    alt: "wisps of translucent colorful smoke rising on a dark background",
    description: "A dreamlike study of light scattering through thin smoke veils, creating delicate organic textures."
  }
];

// 2. APPLICATION STATE
const state = {
  currentCategory: "All",
  filteredImages: [...GALLERY_DATA],
  currentIndex: 0,
  isLightboxOpen: false,
  isMobileMenuOpen: false
};

// 3. DOM ELEMENT REFERENCES
const elements = {
  galleryGrid: document.getElementById("gallery-grid"),
  emptyState: document.getElementById("empty-state"),
  resetFilterBtn: document.getElementById("reset-filter-btn"),
  categoryFilterList: document.getElementById("category-filter-list"),
  statCount: document.getElementById("stat-count"),
  statCategories: document.getElementById("stat-categories"),
  mobileMenuBtn: document.getElementById("mobile-menu-btn"),
  closeMobileMenuBtn: document.getElementById("close-mobile-menu-btn"),
  mobileNavPanel: document.getElementById("mobile-nav-panel"),
  mobileDrawerOverlay: document.getElementById("mobile-drawer-overlay"),
  
  // Lightbox References
  lightbox: document.getElementById("lightbox"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxLoader: document.getElementById("lightbox-loader"),
  lightboxClose: document.getElementById("lightbox-close"),
  lightboxPrev: document.getElementById("lightbox-prev"),
  lightboxNext: document.getElementById("lightbox-next"),
  lightboxCategory: document.getElementById("lightbox-category"),
  lightboxPhotographer: document.getElementById("lightbox-photographer"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxDescription: document.getElementById("lightbox-description"),
  lightboxCounter: document.getElementById("lightbox-counter"),

  // Sticky Controls Bar
  controlsSection: document.getElementById("collections"),
};

// State to keep track of the element that triggered the lightbox for focus recovery
let lightboxTriggerElement = null;

// Touch Swipe State variables
let touchStartX = 0;
let touchEndX = 0;

// 4. CORE INITIALIZATION
document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  // A. Generate Category filters list
  renderCategoryFilters();

  // B. Draw initial gallery
  renderGallery();

  // C. Calculate and set Hero Statistics
  calculateStatistics();

  // D. Set up Event Listeners
  setupEventListeners();

  // E. Initialize ScrollSpy for high-performance navigation highlights
  initScrollSpy();
}

// 5. RENDER CATEGORY NAV FILTERS
function renderCategoryFilters() {
  // Extract unique categories from dataset
  const categories = ["All", ...new Set(GALLERY_DATA.map(item => item.category))];
  
  elements.categoryFilterList.innerHTML = "";
  categories.forEach(category => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = `category-btn ${category === state.currentCategory ? "active" : ""}`;
    button.textContent = category;
    button.setAttribute("data-category", category);
    button.setAttribute("aria-label", `Filter by ${category}`);
    li.appendChild(button);
    elements.categoryFilterList.appendChild(li);
  });
}

// 6. CALCULATE STATISTICS
function calculateStatistics() {
  const totalCount = GALLERY_DATA.length;
  const categoriesCount = new Set(GALLERY_DATA.map(item => item.category)).size;
  
  elements.statCount.textContent = String(totalCount).padStart(2, '0');
  elements.statCategories.textContent = String(categoriesCount).padStart(2, '0');
}

// 7. RENDER GALLERY CARDS
function renderGallery() {
  elements.galleryGrid.innerHTML = "";
  
  if (state.filteredImages.length === 0) {
    elements.emptyState.setAttribute("aria-hidden", "false");
    elements.galleryGrid.style.display = "none";
    return;
  }
  
  elements.emptyState.setAttribute("aria-hidden", "true");
  elements.galleryGrid.style.display = "grid";

  // Create document fragment for high-performance rendering
  const fragment = document.createDocumentFragment();

  state.filteredImages.forEach((item, index) => {
    const card = createImageCard(item, index);
    fragment.appendChild(card);
  });

  elements.galleryGrid.appendChild(fragment);
}

// Create individual image card component
function createImageCard(item, index) {
  const card = document.createElement("article");
  card.className = "image-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View detail: ${item.title} by ${item.photographer}`);
  card.setAttribute("data-index", index);

  // Lazy loading optimization: load first 4 cards normally, lazy load the rest
  const isLazy = index >= 4;

  card.innerHTML = `
    <div class="card-img-wrapper">
      <img src="${item.image}" 
           alt="${item.alt}" 
           class="card-img" 
           ${isLazy ? 'loading="lazy"' : ''}
           width="400" 
           height="300"
      >
    </div>
    
    <!-- Immersive hover overlay (Desktop-only via CSS hover) -->
    <div class="card-overlay">
      <div class="card-info">
        <span class="card-category">${item.category}</span>
        <h2 class="card-title">${item.title}</h2>
        <div class="card-action-bar">
          <span>View Moment</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <!-- Static fallback metadata for touch devices (Mobile/Tablet) -->
    <div class="card-static-meta">
      <span class="static-category">${item.category}</span>
      <h2 class="static-title">${item.title}</h2>
    </div>
  `;

  // Attach Broken Image Handling
  const imgElement = card.querySelector(".card-img");
  imgElement.addEventListener("error", () => {
    imgElement.replaceWith(createFallbackCard());
  });

  return card;
}

// Image load failure fallback card generator
function createFallbackCard() {
  const fallbackDiv = document.createElement("div");
  fallbackDiv.className = "img-fallback-wrapper";
  fallbackDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <line x1="21" y1="21" x2="16" y2="16"></line>
      <line x1="9" y1="15" x2="15" y2="9"></line>
    </svg>
    <span class="fallback-text">Failed to load moment</span>
  `;
  return fallbackDiv;
}

// 8. FILTER LOGIC
function filterImages(category) {
  state.currentCategory = category;
  
  // Fade out gallery grid during transition
  elements.galleryGrid.classList.add("fade-out");
  
  setTimeout(() => {
    // Filter dataset
    if (category === "All") {
      state.filteredImages = [...GALLERY_DATA];
    } else {
      state.filteredImages = GALLERY_DATA.filter(item => item.category === category);
    }
    
    // Re-render and fade back in
    renderGallery();
    elements.galleryGrid.classList.remove("fade-out");
  }, 250); // Matches smooth transition delay
}

// Toggle active filter button style states
function updateCategoryUI(category) {
  const buttons = elements.categoryFilterList.querySelectorAll(".category-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Keep footer filter links in sync if clicked
  const footerLinks = document.querySelectorAll(".footer-filter-link");
  footerLinks.forEach(link => {
    if (link.getAttribute("data-filter") === category) {
      link.style.color = "var(--accent)";
    } else {
      link.style.color = "";
    }
  });
}

// 9. LIGHTBOX COMPONENT
function openLightbox(index) {
  state.isLightboxOpen = true;
  state.currentIndex = index;
  
  elements.lightbox.classList.add("active");
  elements.lightbox.setAttribute("aria-hidden", "false");
  
  // Prevent background body scroll
  document.body.style.overflow = "hidden";
  
  // Focus the close button for accessibility trap
  elements.lightboxClose.focus();
  
  // Populate image details
  updateLightbox();
}

function closeLightbox() {
  state.isLightboxOpen = false;
  
  elements.lightbox.classList.remove("active");
  elements.lightbox.setAttribute("aria-hidden", "true");
  elements.lightboxImg.classList.remove("loaded");
  elements.lightboxImg.src = ""; // Flush image to avoid memory leaks
  
  // Restore background scrolling
  document.body.style.overflow = "";
  
  // Restore keyboard focus to original card
  if (lightboxTriggerElement) {
    lightboxTriggerElement.focus();
    lightboxTriggerElement = null;
  }
}

function showNextImage() {
  // Remove loaded class to animate opacity transitions
  elements.lightboxImg.classList.remove("loaded");
  
  setTimeout(() => {
    state.currentIndex = (state.currentIndex + 1) % state.filteredImages.length;
    updateLightbox();
  }, 200);
}

function showPreviousImage() {
  elements.lightboxImg.classList.remove("loaded");
  
  setTimeout(() => {
    state.currentIndex = (state.currentIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
    updateLightbox();
  }, 200);
}

function updateLightbox() {
  const currentImage = state.filteredImages[state.currentIndex];
  if (!currentImage) return;

  // Show spinner
  elements.lightboxLoader.style.display = "block";
  
  // Update texts
  elements.lightboxTitle.textContent = currentImage.title;
  elements.lightboxCategory.textContent = currentImage.category;
  elements.lightboxPhotographer.textContent = `by ${currentImage.photographer}`;
  elements.lightboxDescription.textContent = currentImage.description;
  
  // Update counter
  const formattedIndex = String(state.currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(state.filteredImages.length).padStart(2, '0');
  elements.lightboxCounter.textContent = `${formattedIndex} / ${formattedTotal}`;
  
  // Set image source and alt text
  elements.lightboxImg.src = currentImage.largeImage;
  elements.lightboxImg.alt = currentImage.alt;
  
  // Handle Load completion
  elements.lightboxImg.onload = () => {
    elements.lightboxLoader.style.display = "none";
    elements.lightboxImg.classList.add("loaded");
  };

  // Handle Load error
  elements.lightboxImg.onerror = () => {
    elements.lightboxLoader.style.display = "none";
    elements.lightboxImg.src = ""; // Clear source
    elements.lightboxImg.alt = "Failed to load image";
    // Show static text indicating error
    elements.lightboxTitle.textContent = "Image Unloadable";
    elements.lightboxDescription.textContent = "This high-resolution photograph is temporarily unavailable.";
  };
}

// 10. MOBILE NAVIGATION DRAWER FUNCTIONS
function toggleMobileMenu(forceState) {
  const isOpen = (typeof forceState === "boolean") ? forceState : !state.isMobileMenuOpen;
  state.isMobileMenuOpen = isOpen;

  elements.mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  elements.mobileNavPanel.setAttribute("aria-hidden", String(!isOpen));
  
  if (isOpen) {
    elements.mobileNavPanel.classList.add("open");
    elements.mobileDrawerOverlay.classList.add("active");
    elements.mobileDrawerOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Trap background scroll
    elements.closeMobileMenuBtn.focus();
  } else {
    elements.mobileNavPanel.classList.remove("open");
    elements.mobileDrawerOverlay.classList.remove("active");
    elements.mobileDrawerOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restore background scroll
    elements.mobileMenuBtn.focus();
  }
}

// 11. EVENT LISTENERS SETUP
function setupEventListeners() {
  // A. Event delegation for category filters
  elements.categoryFilterList.addEventListener("click", (e) => {
    const targetButton = e.target.closest(".category-btn");
    if (!targetButton) return;
    
    const category = targetButton.getAttribute("data-category");
    filterImages(category);
    updateCategoryUI(category);
  });

  // B. Footer category links mapping
  document.querySelectorAll(".footer-filter-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.getAttribute("data-filter");
      filterImages(category);
      updateCategoryUI(category);
      
      // Scroll smoothly to gallery grid
      elements.controlsSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // C. Empty state reset button
  elements.resetFilterBtn.addEventListener("click", () => {
    filterImages("All");
    updateCategoryUI("All");
  });

  // D. Event delegation for Gallery Grid image cards clicks & keystrokes
  elements.galleryGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".image-card");
    if (!card) return;
    
    const index = parseInt(card.getAttribute("data-index"), 10);
    lightboxTriggerElement = card; // Record the element to restore focus later
    openLightbox(index);
  });

  elements.galleryGrid.addEventListener("keydown", (e) => {
    const card = e.target.closest(".image-card");
    if (!card) return;
    
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const index = parseInt(card.getAttribute("data-index"), 10);
      lightboxTriggerElement = card;
      openLightbox(index);
    }
  });

  // E. Sticky shadow on scroll helper
  window.addEventListener("scroll", () => {
    const controlsOffset = elements.controlsSection.offsetTop;
    if (window.scrollY > controlsOffset - 80) {
      elements.controlsSection.classList.add("sticky-shadow");
    } else {
      elements.controlsSection.classList.remove("sticky-shadow");
    }
  });

  // F. Lightbox events
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.lightboxNext.addEventListener("click", showNextImage);
  elements.lightboxPrev.addEventListener("click", showPreviousImage);
  
  // Close Lightbox when clicking backdrop wrapper (only outside elements)
  elements.lightbox.addEventListener("click", (e) => {
    if (e.target === elements.lightbox || e.target.classList.contains("lightbox-content") || e.target.classList.contains("lightbox-media-wrapper")) {
      closeLightbox();
    }
  });

  // G. Mobile drawer triggers
  elements.mobileMenuBtn.addEventListener("click", () => toggleMobileMenu());
  elements.closeMobileMenuBtn.addEventListener("click", () => toggleMobileMenu(false));
  elements.mobileDrawerOverlay.addEventListener("click", () => toggleMobileMenu(false));

  // Close mobile drawer when click a mobile link
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      toggleMobileMenu(false);
      
      // Update active menu link
      document.querySelectorAll(".mobile-nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Update header link style
      const targetHref = link.getAttribute("href");
      document.querySelectorAll(".nav-link").forEach(hl => {
        if (hl.getAttribute("href") === targetHref) {
          hl.classList.add("active");
        } else {
          hl.classList.remove("active");
        }
      });
    });
  });

  // Sync desktop navigation active state on click
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Keep mobile drawer links in sync
      const targetHref = link.getAttribute("href");
      document.querySelectorAll(".mobile-nav-link").forEach(ml => {
        if (ml.getAttribute("href") === targetHref) {
          ml.classList.add("active");
        } else {
          ml.classList.remove("active");
        }
      });
    });
  });

  // H. Keyboard & Focus Trap Managers
  document.addEventListener("keydown", handleGlobalKeyboard);

  // I. Swipe Gestures for Mobile Lightbox
  elements.lightbox.addEventListener("touchstart", handleTouchStart, { passive: true });
  elements.lightbox.addEventListener("touchend", handleTouchEnd, { passive: true });
}

// 12. GLOBAL KEYBOARD HANDLING (Lightbox Focus Trap & Navigation)
function handleGlobalKeyboard(e) {
  // Mobile drawer keyboard dismiss
  if (state.isMobileMenuOpen && e.key === "Escape") {
    toggleMobileMenu(false);
    return;
  }

  if (!state.isLightboxOpen) return;

  // A. Escape to close lightbox
  if (e.key === "Escape") {
    closeLightbox();
    return;
  }

  // B. Left/Right arrows for circular navigation
  if (e.key === "ArrowRight") {
    showNextImage();
    return;
  }
  if (e.key === "ArrowLeft") {
    showPreviousImage();
    return;
  }

  // C. Tab Focus Trapping inside Lightbox Dialog
  if (e.key === "Tab") {
    const focusableSelectors = 'button, img, [tabindex="0"]';
    const focusableElements = elements.lightbox.querySelectorAll(focusableSelectors);
    
    // Convert NodeList to Array and filter out hidden items
    const visibleFocusable = Array.from(focusableElements).filter(el => {
      return el.offsetWidth > 0 && el.offsetHeight > 0 && window.getComputedStyle(el).display !== "none";
    });

    if (visibleFocusable.length === 0) return;

    const firstEl = visibleFocusable[0];
    const lastEl = visibleFocusable[visibleFocusable.length - 1];

    if (e.shiftKey) { // Tab Backward
      if (document.activeElement === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else { // Tab Forward
      if (document.activeElement === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  }
}

// 13. SWIPE GESTURES GESTION
function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}

function handleSwipeGesture() {
  const threshold = 60; // minimum touch delta in px to trigger swipe
  
  if (touchEndX < touchStartX - threshold) {
    // Swiped Left -> Load Next Image
    showNextImage();
  } else if (touchEndX > touchStartX + threshold) {
    // Swiped Right -> Load Previous Image
    showPreviousImage();
  }
}

// 14. SCROLLSPY (High Performance active state highlight on scroll)
function initScrollSpy() {
  if (!('IntersectionObserver' in window)) return;

  const spyOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies upper-center viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        // Update both desktop nav-link and mobile-nav-link active classes
        document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, spyOptions);

  // Register section elements to observe
  const sections = [
    document.getElementById("collections"),
    document.getElementById("gallery-section"),
    document.getElementById("about")
  ].filter(Boolean);

  sections.forEach(section => observer.observe(section));
}
