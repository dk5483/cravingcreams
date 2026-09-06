/**
 * Unified Header Component - Craving Creams
 * Injects header HTML, handles mobile menu, active state detection
 */
(function() {
  'use strict';

  // Header HTML Template
  const HEADER_TEMPLATE = `
    <header class="site-header" role="banner">
      <div class="container">
        <!-- Logo -->
        <a href="index.html" class="site-header__logo-link" aria-label="Craving Creams Home">
          <img src="assets/images/products/logo.png" alt="Craving Creams Logo" class="site-header__logo-img">
        </a>

        <!-- Desktop Navigation -->
        <nav class="site-header__nav" aria-label="Main navigation">
          <ul class="site-header__nav-list">
            <li class="site-header__nav-item">
              <a href="index.html" class="site-header__nav-link" data-nav="home">
                Home
              </a>
            </li>
            <li class="site-header__nav-item">
              <a href="all-products.html?type=premium" class="site-header__nav-link" data-nav="premium">
                Premium
                <i class="fa-solid fa-crown site-header__nav-icon" aria-hidden="true"></i>
              </a>
            </li>
            <li class="site-header__nav-item">
              <a href="all-products.html?type=retail" class="site-header__nav-link" data-nav="retail">
                Retail
                <i class="fa-solid fa-ice-cream site-header__nav-icon" aria-hidden="true"></i>
              </a>
            </li>
            <li class="site-header__nav-item">
              <a href="all-products.html" class="site-header__nav-link" data-nav="all-products">
                All Products
              </a>
            </li>
          </ul>
        </nav>

        <!-- Header Actions (Contact Only) -->
        <div class="site-header__actions">
          <a href="contact.html" class="site-header__contact-btn">
            Contact Us
            <i class="fa-solid fa-arrow-right site-header__contact-icon" aria-hidden="true"></i>
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button class="site-header__toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-panel">
          <span class="site-header__toggle-line" aria-hidden="true"></span>
          <span class="site-header__toggle-line" aria-hidden="true"></span>
          <span class="site-header__toggle-line" aria-hidden="true"></span>
        </button>
      </div>

      <!-- Mobile Panel -->
      <div class="site-header__mobile-panel" id="mobile-panel" role="navigation" aria-label="Mobile navigation">
        <nav class="site-header__mobile-nav">
          <ul class="site-header__mobile-list">
            <li class="site-header__mobile-item">
              <a href="index.html" class="site-header__mobile-link" data-nav="home">Home</a>
            </li>
            <li class="site-header__mobile-item">
              <a href="all-products.html?type=premium" class="site-header__mobile-link" data-nav="premium">
                Premium
                <i class="fa-solid fa-crown" aria-hidden="true" style="font-size: 14px; color: #a855f7;"></i>
              </a>
            </li>
            <li class="site-header__mobile-item">
              <a href="all-products.html?type=retail" class="site-header__mobile-link" data-nav="retail">
                Retail
                <i class="fa-solid fa-ice-cream" aria-hidden="true" style="font-size: 14px; color: #fbab2a;"></i>
              </a>
            </li>
            <li class="site-header__mobile-item">
              <a href="all-products.html" class="site-header__mobile-link" data-nav="all-products">All Products</a>
            </li>
          </ul>

          <a href="contact.html" class="site-header__mobile-contact">Contact Us</a>
        </nav>
      </div>

      <!-- Overlay -->
      <div class="site-header__overlay" id="header-overlay" aria-hidden="true"></div>
    </header>
  `;

  // ============================================================
  // INITIALIZATION
  // ============================================================

  function init() {
    injectHeader();
    setupEventListeners();
    setActiveNav();
    handleScroll();
  }

  // Inject header HTML
  function injectHeader() {
    const placeholder = document.getElementById('site-header');
    if (placeholder) {
      placeholder.innerHTML = HEADER_TEMPLATE;
      placeholder.outerHTML = placeholder.innerHTML;
    }
  }

  // Set active navigation based on current URL
  function setActiveNav() {
    const path = window.location.pathname;
    const search = window.location.search;
    const fullUrl = path + search;

    let activeNav = 'home';

    if (path === '/' || path.endsWith('index.html') || path === '') {
      activeNav = 'home';
    } else if (search.includes('type=premium') || path.includes('premium') || (search.includes('cat=premium'))) {
      activeNav = 'premium';
    } else if (search.includes('type=retail') || path.includes('retail') || (search.includes('cat=retail'))) {
      activeNav = 'retail';
    } else if (path.includes('all-products') || path.includes('category') || path.includes('product')) {
      activeNav = 'all-products';
    }

    // Apply active class to desktop nav
    document.querySelectorAll('.site-header__nav-link[data-nav]').forEach(link => {
      link.classList.toggle('site-header__nav-link--active', link.dataset.nav === activeNav);
    });

    // Apply active class to mobile nav
    document.querySelectorAll('.site-header__mobile-link[data-nav]').forEach(link => {
      link.classList.toggle('site-header__mobile-link--active', link.dataset.nav === activeNav);
    });
  }

  // Handle scroll effect
  function handleScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.pageYOffset;
          if (currentScroll > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  function setupEventListeners() {
    // Mobile menu toggle
    const toggle = document.querySelector('.site-header__toggle');
    const panel = document.getElementById('mobile-panel');
    const overlay = document.getElementById('header-overlay');

    if (toggle && panel && overlay) {
      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isOpen);
        panel.classList.toggle('site-header__mobile-panel--open');
        overlay.classList.toggle('site-header__overlay--visible');
        document.body.style.overflow = isOpen ? '' : 'hidden';
      });

      overlay.addEventListener('click', () => closeMobileMenu());
    }

    // Close mobile menu on link click
    document.querySelectorAll('.site-header__mobile-link[data-nav]').forEach(link => {
      link.addEventListener('click', () => closeMobileMenu());
    });

    document.querySelector('.site-header__mobile-contact')?.addEventListener('click', closeMobileMenu);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    });

    // Close mobile menu if resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) closeMobileMenu();
    });

    // Keyboard support for nav links
    document.querySelectorAll('.site-header__nav-link').forEach(link => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          // Let default behavior handle navigation
        } else if (e.key === 'Escape') {
          link.blur();
        }
      });
    });

    // Add hover sound/ripple effect (visual only)
    document.querySelectorAll('.site-header__nav-link, .site-header__contact-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
      });
    });
  }

  // Close mobile menu
  function closeMobileMenu() {
    const toggle = document.querySelector('.site-header__toggle');
    const panel = document.getElementById('mobile-panel');
    const overlay = document.getElementById('header-overlay');

    if (toggle && panel && overlay) {
      toggle.setAttribute('aria-expanded', 'false');
      panel.classList.remove('site-header__mobile-panel--open');
      overlay.classList.remove('site-header__overlay--visible');
      document.body.style.overflow = '';
    }
  }

  // ============================================================
  // START
  // ============================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.CravingCreamsHeader = {
    setActiveNav,
    closeMobileMenu
  };
})();